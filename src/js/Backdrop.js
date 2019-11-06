import {BACKDROP_ID, HIDDEN_CLASS} from "./constants";

let instance = null;

class Backdrop {
    constructor(text) {
        if (!instance) {
            instance = this;
            document.body.insertAdjacentHTML("beforeend", `<div class="backdrop hidden" id="${BACKDROP_ID}"></div>`);
            this.backdrop = document.getElementById(BACKDROP_ID);
        }

        return instance;
    }

    show() {
        this.backdrop.classList.remove(HIDDEN_CLASS);
    }

    hide() {
        this.backdrop.classList.add(HIDDEN_CLASS);
    }

}

export default Backdrop;