import NewsServiceView from "./NewsServiceView";
import NewsServiceController from "./NewsServiceController";
import NewsServiceModel from "./NewsServiceModel";
import {NEWS_CONTAINER_ID} from "../../constants/ids";

export default class NewsService {
    constructor(options) {
        const newsContainer = document.getElementById(NEWS_CONTAINER_ID);

        if (!newsContainer) return;

        this.model = new NewsServiceModel();
        this.view = new NewsServiceView();
        this.controller = new NewsServiceController(this.model, this.view, options);
    }
}