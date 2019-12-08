export default class NewsServiceController {
    constructor(model, view, options = {}) {
        this.model = model;
        this.view = view;

        this.updateNews();
    }

    async updateNews(e) {
        this.view.startLoading();

        const promise = this.model.getNews({
            withLogging: true,
            method: "GET"
        });

        const results = await promise || {};
        this.view.appendNews(results);

        this.view.finishLoading();
    }
}