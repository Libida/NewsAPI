import {HIDDEN_CLASS} from "../../constants/class-names";

export default class ModalController {
    constructor(view) {
        this.view = view;
        this.initListeners();
    }

    initListeners() {
        this.view.errorClose.addEventListener("click", this.close.bind(this));
    }

    open() {
        this.view.modal.classList.remove(HIDDEN_CLASS);
        this.view.backdrop.controller.show();
    }

    close(e) {
        e.preventDefault();
        this.view.modal.classList.add(HIDDEN_CLASS);
        this.view.backdrop.controller.hide();
    }

}