import {HIDDEN_CLASS, NEWS_CONTAINER_ID, NEWS_SPINNER_ID, NO_IMG_URL} from "./constants";


const updateNews = (category) => {
    startLoading();
    // Add delay to enjoy a spinner ;)
    setTimeout(() => {
        getNews(category);
        finishLoading();
    }, 500);
};

const startLoading = _ => {
    document.getElementById(NEWS_CONTAINER_ID).innerHTML = "";
    const spinner = document.getElementById(NEWS_SPINNER_ID);
    spinner.classList.remove(HIDDEN_CLASS);
};

const finishLoading = _ => {
    const spinner = document.getElementById(NEWS_SPINNER_ID);
    spinner.classList.add(HIDDEN_CLASS);
};

const setNews = (newsArticles) => {
    const newsContainer = document.getElementById(NEWS_CONTAINER_ID);
    let markup;

    for (let i in newsArticles) {
        const {url, urlToImage, title, description} =  newsArticles[i];

        markup = `
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

        newsContainer.insertAdjacentHTML("beforeend", markup);
    }
};

const getNews = async (category) => {
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
            return null;
        }
    );

    articles.push(job);

    const results = await Promise.all(articles);
    const finalArticles = results[0].articles;

    setNews(finalArticles);
};

export { updateNews };