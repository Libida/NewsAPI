import Modal from "../modal/Modal";

let idCounter = 1;

class Ajax {
    constructor(options = {}) {
        this.id = idCounter++;
        this.promiseRequest = this.makeRequest(options);
    }

    async makeRequest(options) {
        let proxiedFetch = new Proxy(fetch, {
            apply: (target, thisArg, args) => {
                this.debug(target, thisArg, args);
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

    debug(target, thisArg, args) {
        const options = args[1];

        if (options.withDebug) {
            console.info("----------------------------------------------------");
            for (let i in options) {
                console.info(`Fetch №${this.id} ${i}: ${options[i]}`);
            }
            console.info("----------------------------------------------------");
        }
    }
}

export default Ajax;