import {NEWS_CONTAINER_ID, NO_IMG_URL} from "../constants";
import Modal from "../modal/Modal";

export default class NewsController {
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
        this.view.spinner.controller.startLoading(this.view.clearNews.bind(this.view));

        const promise = this.model.getNews(e.target.value, {
            withDebug: true,
            method: "GET"
        });
        const results = await promise || {};
        this.view.appendNews(results.articles);

        this.view.spinner.controller.finishLoading();
    }
}