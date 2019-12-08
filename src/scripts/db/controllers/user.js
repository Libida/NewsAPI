const User = require("../models/user");

exports.login = (req, email, password, done) => {
    if (email)
        email = email.toLowerCase(); // Use lower-case e-mails to avoid case-sensitive e-mail matching

    process.nextTick(function () {
        User.findOne({"local.email": email}, function (err, user) {
            if (err)
                return done(err, false, req.flash("error", "Something went wrong, please try again later."));

            if (!user)
                return done(null, false, req.flash("error", "No user found."));

            if (!user.validPassword(password))
                return done(null, false, req.flash("error", "Oops! Wrong password."));

            else
                return done(null, user);
        });
    });
};

exports.signup = (req, email, password, done) => {
    if (email)
        email = email.toLowerCase();

    process.nextTick(function () {
        if (!req.user) {
            User.findOne({"local.email": email}, function (err, user) {
                if (err)
                    return done(err);

                if (user) {
                    return done(null, false, req.flash("error", "This email is already taken."));
                } else {
                    const newUser = new User();

                    newUser.local.email = email;
                    newUser.local.password = newUser.generateHash(password);

                    newUser.save(function (err) {
                        if (err)
                            return done(err);

                        return done(null, newUser);
                    });
                }

            });
        }
    });
};