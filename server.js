const express = require("express");
const bodyParser = require("body-parser");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const mongoose = require("mongoose");
const webpackConfig = require("./webpack.config");
const chalk = require("chalk"); //coloring
const config = require("./config/properties");
const app = express();
const compiler = webpack(webpackConfig);
const expressPort = config.port;
const dbURL = config.DB;
const connectedColor = chalk.bold.cyan;
const errorColor = chalk.bold.red;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbURL, {
    useNewUrlParser: true
}).then(() => {
    console.log(connectedColor(`Successfully connectedColor to the database on ${dbURL}`));
}).catch(err => {
    console.log(errorColor("Could not connect to the database. Exiting now..."), err);
    process.exit();
});

// Require routes for News Articles
require("./src/db/routes/news-article.routes")(app);

// Serve the files on port 3000.
app.listen(expressPort, (req, res) => {
    console.log(`News API app listening on port ${expressPort}!\n`);
});