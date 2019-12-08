import Spinner from "../../components/spinner/Spinner";
import {NEWS_CONTAINER_ID} from "../../constants/ids";
import {getArticleTemplate} from "../../templates/article-templates";

export default class NewsServiceView {
    constructor() {
        this.container = document.getElementById(NEWS_CONTAINER_ID);
        this.spinner = new Spinner();
    }

    appendNews(newsArticles) {
        if (newsArticles.length) {
            for (let i in newsArticles) {
                this.container.insertAdjacentHTML("beforeend", getArticleTemplate(newsArticles[i]));
            }
        }
        else {
            this.container.insertAdjacentHTML("beforeend", "<p>There is no news articles yet</p>");
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