import {MODAL_ID, MODAL_TEXT_ID, MODAL_CLOSE_ID, HIDDEN_CLASS} from "../constants";
import Backdrop from "../backdrop/Backdrop";

class ModalView {
    constructor(text) {
        this.create();

        this.modal = document.getElementById(MODAL_ID);
        this.errorText = document.getElementById(MODAL_TEXT_ID);
        this.errorClose = document.getElementById(MODAL_CLOSE_ID);
        this.backdrop = new Backdrop();
    }

    create() {
        const modalMarkup = `
                <div class="modal ${HIDDEN_CLASS}" id="${MODAL_ID}">
                    <div class="modal-heading">
                        <h2>Attention</h2>
                        <a href="#" class="${MODAL_CLOSE_ID}" id="${MODAL_CLOSE_ID}">Close</a>
                    </div>
                    <p class="modal-text" id="${MODAL_TEXT_ID}"></p>
                </div>
                `;

        document.body.insertAdjacentHTML("beforeend", modalMarkup);
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

export default ModalView;