import Modal from "../modal/Modal";

class NewsModel {
    async getNews(category) {
        const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=a1e2ae38e5ff42f1aa3175998837d6ca&from=2019-10-24&to=2019-10-24`;

        let promise = fetch(url).then(
            successResponse => {
                if (successResponse.status != 200) {
                    throw new SyntaxError("Empty results from the NEWS API server");
                } else {
                    return successResponse.json();
                }
            }
        ).catch(
            error => {
                new Modal(error);
            }
        );

        return promise;
    }
}

export default NewsModel;