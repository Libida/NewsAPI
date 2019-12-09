module.exports = (app, passport) => {
    app.get("/*", function(req,res,next){
        res.locals.errors = req.flash("error");
        res.locals.successMsgs = req.flash("success");
        res.locals.user = req.user;
        next();
    });

    app.get("/", function(req, res) {
        res.render("start.pug");
    });

    require("./../src/scripts/db/routes/news-article")(app);
    require("./../src/scripts/db/routes/user")(app, passport);
};

