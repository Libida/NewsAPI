const express = require("express");
const path = require("path");

module.exports = (app) => {
    app.set("views", "./src/templates/");
    app.set("view engine", "pug");

    // Set views path
    //app.set("views", path.join(__dirname, "./../src/templates/"));
    // Set public path
    //app.use(express.static(path.join(__dirname, "dist")));
    // Set pug as view engine

    // Player"s index
    // app.get("/register", (req, res) => {
    //     res.render("register");
    // });


    //------- Get
    // app.get("/login.html", (req, res) => {
    //     res.sendFile("login.html", {
    //         root: "./dist"
    //     });
    // });
    //
    // app.get("/register", (req, res) => {
    //     res.sendFile("register", {
    //         root: "./"
    //     });
    // });

    // Protected page which can be visited only by admins
    // Route middleware wil be used to verify this (the isLoggedIn function)
    // app.get("/profile", isLoggedIn, (req, res) => {
    //     res.render("profile.pug");
    // });

    // app.post("/register", passport.authenticate("local-signup", {
    //     successRedirect : "/profile", // redirect to the secure profile section
    //     failureRedirect : "/register", // redirect back to the signup page if there is an error
    //     failureFlash : true // allow flash messages
    // }));

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get("/", function(req, res) {
        res.render("index.pug");
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get("/login", function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render("login.pug", { message: req.flash("loginMessage") });
    });

    // process the login form
    // app.post("/login", do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get("/signup", function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render("signup.pug", { message: req.flash("signupMessage") });
    });

    // process the signup form
    // app.post("/signup", do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get("/profile", isLoggedIn, function(req, res) {
        res.render("profile.pug", {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // route middleware to make sure a user is logged in
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on 
        if (req.isAuthenticated())
            return next();

        // if they aren"t redirect them to the home page
        res.redirect("/");
    }

};
