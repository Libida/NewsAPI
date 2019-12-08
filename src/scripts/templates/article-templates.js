import {NO_IMG_URL} from "../constants/strings";

export function getArticleTemplate(article) {
    const {_id, url, urlToImage, title, description} =  article;

    return `
            <article class="news-article">
                <p class="news-article-id">id: ${_id}</p>
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
};