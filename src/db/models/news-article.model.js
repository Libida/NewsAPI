const mongoose = require("mongoose");

const NewsArticleSchema = mongoose.Schema({
    "source": {"id": String, "name": String},
    "author": String,
    "title": String,
    "description": String,
    "url": String,
    "urlToImage": String,
    "publishedAt": Date,
    "content": String
}, {
    timestamps: true
});

module.exports = mongoose.model("NewsArticle", NewsArticleSchema);