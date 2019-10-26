async function getArticles(category) {
    console.log(category);
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
    // let data = JSON.parse('{"name":"Jack","items":{"dog":1,"car":1,"phone":2}}');
    let text = "";
    let markup = "";

    let newsContainer = document.getElementById('news-container');

    for (let i in finalArticles) {
        let articlehgv = finalArticles[i];
        console.dir(articlehgv);
        markup = `
             <article class="news-article">
                <img class="news-article__img" src="${articlehgv.urlToImage}" alt="">
                <h2 class="news-article__title">
                    <a href="${articlehgv.url}" target="_blank">${articlehgv.title}</a>
                </h2>
                <p class="location">${articlehgv.content}</p>
                <p class="bio">${articlehgv.description}</p>
             </article>
            `;

        newsContainer.insertAdjacentHTML("beforeend", markup);
    }

    // document.getElementById('div').innerHTML += header;
    // document.getElementById('div').innerHTML += '<ul>' + list + '</ul>';

}

export { getArticles };