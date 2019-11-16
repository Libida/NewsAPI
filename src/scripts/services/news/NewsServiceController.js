export default class NewsServiceController {
    constructor(model, view, options = {}) {
        this.model = model;
        this.view = view;

        this.addListeners();
    }

    addListeners() {
        this.view.dropdown.controller.addListeners({
            changeCallback: this.updateNews.bind(this)
            }
        );
    }

    async updateNews(e) {
        this.view.startLoading();

        const promise = this.model.getNews(e.target.value, {
            withLogging: true,
            method: "GET"
        });
        const results = await promise || {};
        this.view.appendNews(results.articles);

        this.view.finishLoading();
    }
}