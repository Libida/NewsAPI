import {HIDDEN_CLASS} from "../../constants/class-names";

export default class BackdropController {
    constructor(view) {
        this.view = view;
    }

    show() {
        this.view.backdrop.classList.remove(HIDDEN_CLASS);
    }

    hide() {
        this.view.backdrop.classList.add(HIDDEN_CLASS);
    }
}