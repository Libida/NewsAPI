import FetchService from "../fetch/FetchService";

export default class NewsServiceModel {
    async getNews(category, options) {
        options.url = `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=a1e2ae38e5ff42f1aa3175998837d6ca&from=2019-10-24&to=2019-10-24`;

        const ajaxRequest = new FetchService(options);
        const response = ajaxRequest.waitForRequest(this.handleErrors.bind(this));

        return response;
    }


    handleErrors(response) {
        if (response.status != 200) {
            throw new SyntaxError("Empty results from the NEWS API server");
        } else {
            return response.json();
        }
    }
}