import {GLOBAL_SPINNER_ID, HIDDEN_CLASS, NEWS_CONTAINER_ID} from "../constants";

export default class SpinnerView {
    constructor() {
        this.spinner = document.getElementById(GLOBAL_SPINNER_ID);
    }
}