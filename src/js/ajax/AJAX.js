import Modal from "../modal/Modal";

class AJAX {
    constructor(url, options = {}) {
        this.promiseRequest = this.makeRequest(url, options);
    }

    async makeRequest(url, options) {
        let promise = fetch(url, options);

        return promise;
    }

    async waitForRequest(callback) {
        try {
            let response = await this.promiseRequest;
            const finalResponse = callback ? callback(response) : response;

            return finalResponse;
        }
        catch(error) {
            new Modal(error);
        }
    }
}

export default AJAX;