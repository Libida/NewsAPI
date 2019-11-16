import Spinner from "../../components/spinner/Spinner";
import Dropdown from "../../components/dropdown/Dropdown";
import {NEWS_CATEGORIES_DROPDOWN_ID, NEWS_CONTAINER_ID} from "../../constants/ids";
import {getArticleTemplate} from "../../templates/article-templates";

export default class NewsServiceView {
    constructor() {
        this.container = document.getElementById(NEWS_CONTAINER_ID);
        this.dropdown = new Dropdown(NEWS_CATEGORIES_DROPDOWN_ID);
        this.spinner = new Spinner();
    }

    appendNews(newsArticles) {
        for (let i in newsArticles) {
            this.container.insertAdjacentHTML("beforeend", getArticleTemplate(newsArticles[i]));
        }
    }

    clearNews() {
        this.container.innerHTML = "";
    }

    startLoading() {
        this.spinner.controller.startLoading(this.clearNews.bind(this));
    }

    finishLoading() {
        this.spinner.controller.finishLoading();
    }
}