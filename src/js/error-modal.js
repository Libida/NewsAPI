import {ERROR_MODAL_ID, ERROR_MODAL_TEXT_ID} from "./constants";

let instance = null;

class ErrorModal {
    constructor(text) {
        if (!instance) {
            instance = this;
        }

        const modalMarkup = `
            <div class="error-modal" id="${ERROR_MODAL_ID}">
                <div class="error-modal-heading">
                    <h2>Something went wrong!</h2>
                    <a class="error-modal-heading-close">Close</a>
                </div>
                <p class="error-modal-text" id="${ERROR_MODAL_TEXT_ID}">${text}</p>
            </div>
            `;

        const errorModal = document.body.insertAdjacentHTML("beforeend", modalMarkup);

        this.errorModal = errorModal;
        this.errorText = document.getElementById(ERROR_MODAL_TEXT_ID);
        console.dir(this.errorText);
        this.setText(text);
    }

    closeModal() {
        console.dir();
    }

    getText() {
        return this.text;
    }

    setText(value = "Could you please retry later.") {
        if (this.getText !== value) {
            this.errorText.textContent = value;
            this.text = value;
        }
    }
}

export default ErrorModal;