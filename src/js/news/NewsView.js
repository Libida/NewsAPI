import Spinner from "../spinner/Spinner";
import Dropdown from "../dropdown/Dropdown";
import {NEWS_CATEGORIES_DROPDOWN_ID, NEWS_CONTAINER_ID, NO_IMG_URL} from "../constants";

export default class NewsView {
    constructor() {
        this.container = document.getElementById(NEWS_CONTAINER_ID);
        this.dropdown = new Dropdown(NEWS_CATEGORIES_DROPDOWN_ID);
        this.spinner = new Spinner();
    }

    getNewsArticleMarkup(article) {
        const {url, urlToImage, title, description} =  article;

        return `
            <article class="news-article">
                <a class="news-article-link" href="${url}" target="_blank">
                    <div class="news-article-additional-content">
                        <img class="news-article-img" src="${urlToImage || NO_IMG_URL}" alt="${title}">
                    </div>
                    <div class="news-article-main-content">
                        <h3 class="news-article-title">${title}</h3>
                        <p class="news-article-location">${description}</p>
                    </div>
                </a>
            </article>
            `;
    }

    appendNews(newsArticles) {
        for (let i in newsArticles) {
            this.container.insertAdjacentHTML("beforeend", this.getNewsArticleMarkup(newsArticles[i]));
        }
    }

    clearNews() {
        this.container.innerHTML = "";
    }
}