const {createLogger, format, transports} = require("winston");
const {combine, timestamp, label, prettyPrint} = format;
const NewsArticle = require("../models/news-article");
const logger = createLogger({
    level: "info",
    format: combine(
        label({label: "News articles Rest API"}),
        timestamp(),
        prettyPrint()
    ),
    defaultMeta: {service: "user-service"},
    transports: [
        new transports.File({filename: "./logs/combined.log"})
    ]
});

exports.create = (req, res) => {
    validateNewsArticle({req, res});

    const newsArticle = new NewsArticle(populateNewsArticle({req}));

    newsArticle.save().then(data => {
        res.redirect("/profile");
        }
    ).catch(err => {
        const msg = err.message || "Error occured while creating the News Article";
        res.locals.errors = msg;
        // res.status(500).send({
        //     message: msg
        // });
    });
};

exports.findAll = (req, res) => {
    NewsArticle.find().then(newsArticles => {
        res.send(newsArticles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occured white creating the News Article"
        });
    })
};

exports.findOne = (req, res) => {
    NewsArticle.findById(req.params.newsArticleId).then(newsArticle => {

        checkNewsArticle({req, res, newsArticle});

        res.send(newsArticle);
    }).catch(err => {
        catchNewsArticleError({req, res, err, msg500: "retrieving"});
    });
};

exports.update = (req, res) => {
    validateNewsArticle({req, res});

    NewsArticle.findByIdAndUpdate(req.params.newsArticleId, populateNewsArticle({req}), {new: true})
        .then(newsArticle => {
            checkNewsArticle({req, res, newsArticle});
            res.send(newsArticle);
        }).catch(err => {
        catchNewsArticleError({req, res, err, msg500: "updating"});
    });
};

exports.delete = (req, res) => {
    NewsArticle.findByIdAndRemove(req.params.newsArticleId)
        .then(newsArticle => {
            checkNewsArticle({req, res, newsArticle});
            res.send({message: `News article with id ${newsArticle} was deleted successfully!`});
        }).catch(err => {
        catchNewsArticleError({req, res, err, msg500: "deleting"});
    });
};

function validateNewsArticle(options = {}) {
    const {req = {}, res = {}} = options;
    const newsArticle = req.body;

    if (!newsArticle.title) {
        res.locals.errors = "News Article title should not be empty";
    }

    if (!newsArticle.description) {
        res.locals.errors = "News Article description should not be empty";
    }
}

function populateNewsArticle(options = {}) {
    const {req = {}} = options;
    const reqBody = req.body || {};

    return {
        "author": reqBody.author,
        "title": reqBody.title,
        "description": reqBody.description,
        "url": reqBody.url,
        "urlToImage": reqBody.urlToImage
    };
}

function getNewsArticleError404(options = {}) {
    const {req = {}, res = {}} = options;

    return res.status(404).send({
        message: `News Article with id ${req.params.newsArticleId} was not found`
    });
}

function getNewsArticleError500(options = {}) {
    const {req = {}, res = {}, msg500 = ""} = options;

    return res.status(500).send({
        message: `Error ${msg500} news article with id  ${req.params.newsArticleId}`
    });
}

function checkNewsArticle(options = {}) {
    const {req = {}, res = {}, newsArticle} = options;

    if (!newsArticle) {
        getNewsArticleError404(options);
    }
}

function catchNewsArticleError(options = {}) {
    const {req = {}, res = {}, err = {}, msg500 = ""} = options;

    if (err.kind === "ObjectId" || err.name === "NotFound") {
        getNewsArticleError404(options);
    }

    return res.status(500).send({
        message: `Error ${msg500} news article with id  ${req.params.newsArticleId}`
    });
}

function addLogging(options = {}) {
    const {req = {}, res = {}, level = "info"} = options;
    logger.log({
        level: level,
        message: req.url
    });
}
