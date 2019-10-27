import {CONSTANTS} from "./constants";

function updateNews(category) {
    startLoading();
    // Add delay to enjoy spinner ;)
    setTimeout(() => {
        getNews(category);
        finishLoading();
    }, 500);
}

function startLoading() {
    document.getElementById(CONSTANTS.NEWS_CONTAINER).innerHTML = "";
    const spinner = document.getElementById(CONSTANTS.NEWS_SPINNER);
    spinner.classList.remove(CONSTANTS.HIDDEN);
}

function finishLoading() {
    const spinner = document.getElementById(CONSTANTS.NEWS_SPINNER);
    spinner.classList.add(CONSTANTS.HIDDEN);
}

function setNews(newsArticles) {
    const newsContainer = document.getElementById(CONSTANTS.NEWS_CONTAINER);
    let markup;

    for (let i in newsArticles) {
        const {url, urlToImage, title, description} =  newsArticles[i];
        markup = `
            <article class="news-article">
                <a class="news-article-link" href="${url}" target="_blank">
                    <div class="news-article-additional-content">
                        <img class="news-article-img" src="${urlToImage || CONSTANTS.NO_IMG_URL}" alt="${title}">
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
}

async function getNews(category) {
    let articles = [];
    let url = `https://newsapi.org/v2/everything?q=${category}&from=2019-10-24&to=2019-10-24&sortBy=popularity&apiKey=a1e2ae38e5ff42f1aa3175998837d6ca`;

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

    let results = await Promise.all(articles);
    let finalArticles = results[0].articles;

    setNews(finalArticles);
}

export { updateNews };