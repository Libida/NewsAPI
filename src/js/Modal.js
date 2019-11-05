import {MODAL_ID, MODAL_TEXT_ID, MODAL_CLOSE_ID, HIDDEN_CLASS} from "./constants";
import Backdrop from "./Backdrop";

let instance = null;

class Modal {
    constructor(text) {
        if (!instance) {
            instance = this;

            const modalMarkup = `
                <div class="modal ${HIDDEN_CLASS}" id="${MODAL_ID}">
                    <div class="modal-heading">
                        <h2>Attention</h2>
                        <a href="#" class="${MODAL_CLOSE_ID}" id="${MODAL_CLOSE_ID}">Close</a>
                    </div>
                    <p class="modal-text" id="${MODAL_TEXT_ID}">${text}</p>
                </div>
                `;

            document.body.insertAdjacentHTML("beforeend", modalMarkup);

            this.modal = document.getElementById(MODAL_ID);
            this.errorText = document.getElementById(MODAL_TEXT_ID);
            this.errorClose = document.getElementById(MODAL_CLOSE_ID);
            this.backdrop = new Backdrop();

            this.errorClose.addEventListener("click", this.close.bind(this));
        }

        this.setText(text);
    }

    open() {
        this.modal.classList.remove(HIDDEN_CLASS);
        this.backdrop.show();
    }

    close(e) {
        e.preventDefault();
        this.modal.classList.add(HIDDEN_CLASS);
        this.backdrop.hide();
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

export default Modal;