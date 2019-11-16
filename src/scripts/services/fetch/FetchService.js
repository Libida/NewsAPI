import Modal from "../../components/modal/Modal";
import { logToConsole } from "../../utils/logger";

let idCounter = 1;

export default class FetchService {
    constructor(options = {}) {
        this.id = idCounter++;
        this.promiseRequest = this.makeRequest(options);
    }

    async makeRequest(options) {
        let proxiedFetch = new Proxy(fetch, {
            apply: (target, thisArg, args) => {
                logToConsole(args[1], `Fetch №${this.id} `);

                return target.apply(thisArg, args);
            }
        });
        let promise = proxiedFetch(options.url, options);

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