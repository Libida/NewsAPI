import NewsServiceView from "./NewsServiceView";
import NewsServiceController from "./NewsServiceController";
import NewsServiceModel from "./NewsServiceModel";

export default class NewsService {
    constructor(options) {
        this.model = new NewsServiceModel();
        this.view = new NewsServiceView();
        this.controller = new NewsServiceController(this.model, this.view, options);
    }
}