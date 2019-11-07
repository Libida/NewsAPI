import {HIDDEN_CLASS, NEWS_CATEGORIES_DROPDOWN_ID, NEWS_CONTAINER_ID, NEWS_SPINNER_ID, NO_IMG_URL} from "../constants";
import NewsView from "./NewsView";
import NewsController from "./NewsController";
import NewsModel from "./NewsModel";

class News {
    constructor(options) {
        this.model = new NewsModel();
        this.view = new NewsView();
        this.controller = new NewsController(this.model, this.view, options);
    }
}

export default News;