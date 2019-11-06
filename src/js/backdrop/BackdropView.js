import {BACKDROP_ID} from "../constants";

class BackdropView {
    constructor() {
        this.create();
        this.backdrop = document.getElementById(BACKDROP_ID);
    }

    create() {
        document.body.insertAdjacentHTML("beforeend", `<div class="backdrop hidden" id="${BACKDROP_ID}"></div>`);
    }
}

export default BackdropView;