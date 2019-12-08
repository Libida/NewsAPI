import FetchService from "../fetch/FetchService";

export default class NewsServiceModel {
    async getNews(options) {
        options.url = "/news-articles";

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