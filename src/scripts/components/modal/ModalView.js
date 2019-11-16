import {MODAL_ID, MODAL_TEXT_ID, MODAL_CLOSE_ID} from "../../constants/ids";
import Backdrop from "../../components/backdrop/Backdrop";
import {getModalTemplate} from "../../templates/modal-template";

export default class ModalView {
    constructor(text) {
        this.create();

        this.modal = document.getElementById(MODAL_ID);
        this.errorText = document.getElementById(MODAL_TEXT_ID);
        this.errorClose = document.getElementById(MODAL_CLOSE_ID);
        this.backdrop = new Backdrop();
    }

    create() {
        document.body.insertAdjacentHTML("beforeend", getModalTemplate());
    }

    setText(value = "Could you please retry later.") {
        if (this.text !== value) {
            this.errorText.textContent = value;
            this.text = value;
        }
    }

}