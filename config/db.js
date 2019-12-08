const mongoose = require("mongoose");

module.exports = (app, config, colors) => {
    const url = config.DB;

    mongoose.Promise = global.Promise;

    mongoose.connect(url, {
        useNewUrlParser: true
    }).then(() => {
        console.log(colors.successColor(`Successfully connected to the database on ${url}`));
    }).catch(err => {
        console.log(colors.errorColor(`Could not connect to the database on ${url}. Exiting now...`), err);
        process.exit();
    });
};