import {HIDDEN_CLASS} from "../constants";

class BackdropController {
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

export default BackdropController;