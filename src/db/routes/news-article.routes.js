module.exports = (app) => {
    const newsArticle = require("../controllers/news-article.controller");
    const urlBase = "/news-articles";
    const urlWithId = `${urlBase}/:newsArticleId`;

    // Create and save new news article
    app.post(urlBase, newsArticle.create);

    // Retrieve and return all news articles from the database
    app.get(urlBase, newsArticle.findAll);

    // Find a single news article by id
    app.get(urlWithId, newsArticle.findOne);

    // Update news article by id
    app.put(urlWithId, newsArticle.update);

    // Delete news article by id
    app.delete(urlWithId, newsArticle.delete);
}
