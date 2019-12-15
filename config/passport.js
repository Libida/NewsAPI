const LocalStrategy = require("passport-local").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("./../src/scripts/db/models/user");
const UserController = require("./../src/scripts/db/controllers/user");
const configAuth = require("./auth");

module.exports = function (passport) {
    const passportDefaultOptions = {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true
    };
    const fbStrategy = configAuth.facebookAuth;
    fbStrategy.passReqToCallback = true;

    passport.serializeUser(function (user, done) {
        done(null, user);
    });

    passport.deserializeUser(function (user, done) {
        done(null, user);
    });

    passport.use("local-login", new LocalStrategy(passportDefaultOptions, UserController.login));

    passport.use("local-signup", new LocalStrategy(passportDefaultOptions, UserController.signup));

    passport.use(new FacebookStrategy(fbStrategy, UserController.facebookAuth));
};