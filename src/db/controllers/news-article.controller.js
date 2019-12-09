const {createLogger, format, transports} = require("winston");
const {combine, timestamp, label, prettyPrint} = format;
const NewsArticle = require("../models/news-article.model");
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

// Create and save new news article
exports.create = (req, res) => {
    validateNewsArticle({req, res});

    // Create News Article
    const newsArticle = new NewsArticle(populateNewsArticle({req}));

    // Save News Article in the database
    newsArticle.save().then(data => {
            res.send(data)
        }
    ).catch(err => {
        res.status(500).send({
            message: err.message || "Error occured white creating the News Article"
        });
    });

    addLogging({req, res});
};

// Retrieve and return all news articles from the database
exports.findAll = (req, res) => {
    NewsArticle.find().then(newsArticles => {
        res.send(newsArticles);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error occured white creating the News Article"
        });
    });

    addLogging({req, res});
};

// Find a single news article by id
exports.findOne = (req, res) => {
    NewsArticle.findById(req.params.newsArticleId).then(newsArticle => {
        checkNewsArticle({req, res, newsArticle});

        res.send(newsArticle);
    }).catch(err => {
        catchNewsArticleError({req, res, err, msg500: "retrieving"});
    });

    addLogging({req, res});
};

// Update news article by id
exports.update = (req, res) => {
    // Validate Request
    validateNewsArticle({req, res});

    // Find news article and update it with the request body
    NewsArticle.findByIdAndUpdate(req.params.newsArticleId, populateNewsArticle({req}), {new: true})
        .then(newsArticle => {
            checkNewsArticle({req, res, newsArticle});
            res.send(newsArticle);
        }).catch(err => {
        catchNewsArticleError({req, res, err, msg500: "updating"});
    });

    addLogging({req, res});
};

// Delete news article by id
exports.delete = (req, res) => {
    NewsArticle.findByIdAndRemove(req.params.newsArticleId)
        .then(newsArticle => {
            checkNewsArticle({req, res, newsArticle});
            res.send({message: `News article with id ${newsArticle} was deleted successfully!`});
        }).catch(err => {
        catchNewsArticleError({req, res, err, msg500: "deleting"});
    });

    addLogging({req, res});
};

function validateNewsArticle(options = {}) {
    const {req = {}, res = {}} = options;

    // Validate request
    if (!req.body.description) {
        return res.status(400).send({
            message: "News Article description should not be empty"
        });
    }
}

function populateNewsArticle(options = {}) {
    const {req = {}} = options;
    const reqBody = req.body || {};
    const source = reqBody.source || {};

    return {
        "source": {"id": source.id, "name": source.name},
        "author": reqBody.author,
        "title": reqBody.title,
        "description": reqBody.description,
        "url": reqBody.url,
        "urlToImage": reqBody.urlToImage,
        "publishedAt": reqBody.publishedAt,
        "content": reqBody.content
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
