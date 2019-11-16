import {BACKDROP_ID} from "../../constants/ids";
import {getBackdropTemplate} from "../../templates/backdrop-template";

export default class BackdropView {
    constructor() {
        this.create();
        this.backdrop = document.getElementById(BACKDROP_ID);
    }

    create() {
        document.body.insertAdjacentHTML("beforeend", getBackdropTemplate());
    }
}