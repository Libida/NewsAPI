import {NEWS_CONTAINER_ID, NO_IMG_URL} from "../constants";
import Modal from "../modal/Modal";

class NewsController {
    constructor(model, view) {
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

    async getNews(category) {
        const articles = [];
        const url = `https://newsapi.org/v2/everything?q=${category}&from=2019-10-24&to=2019-10-24&sortBy=popularity&apiKey=a1e2ae38e5ff42f1aa3175998837d6ca`;

        let job = fetch(url).then(
            successResponse => {
                if (successResponse.status != 200) {
                    return null;
                } else {
                    return successResponse.json();
                }
            },
            failResponse => {
                // TODO: throw new Modal
                const errorModal = new Modal("Couldn't get news, could you please try a bit later.");
                errorModal.controller.open();
            }
        );

        articles.push(job);

        const results = await Promise.all(articles) || [];
        const finalArticles = results[0] && results[0].articles;

        this.setNews(finalArticles);
    };

    setNews(newsArticles) {
        for (let i in newsArticles) {
            this.view.container.insertAdjacentHTML("beforeend", this.view.getNewsArticleMarkup(newsArticles[i]));
        }
    }

    updateNews(e) {
        this.view.spinner.controller.startLoading(this.clearNews.bind(this));

        // Add delay to enjoy a spinner ;)
        setTimeout(() => {
            this.getNews(e.target.value);
            this.view.spinner.controller.finishLoading();
        }, 500);
    }

    clearNews() {
        this.view.container.innerHTML = "";
    }
}

export default NewsController;