module.exports = (app) => {
    const newsArticleController = require("../controllers/news-article");
    const urlBase = "/news-articles";
    const urlWithId = `${urlBase}/:newsArticleId`;

    // app.post(urlBase, newsArticleController.create);
    app.post("/profile-add-news", newsArticleController.create);

    app.get(urlBase, newsArticleController.findAll);

    app.get(urlWithId, newsArticleController.findOne);

    app.put(urlWithId, newsArticleController.update);

    app.delete(urlWithId, newsArticleController.delete);

    // app.get(urlBase, function(req, res) {
    //     res.redirect(req.headers.referer);
    // });
};