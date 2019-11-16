import {GLOBAL_SPINNER_ID} from "../../constants/ids";
import {HIDDEN_CLASS} from "../../constants/class-names";

export default class SpinnerView {
    constructor() {
        this.spinner = document.getElementById(GLOBAL_SPINNER_ID);
    }

    show() {
        this.spinner.classList.remove(HIDDEN_CLASS);
    }

    hide() {
        this.spinner.classList.add(HIDDEN_CLASS);
    }
}