import {BACKDROP_ID} from "../constants/ids";
import {HIDDEN_CLASS} from "../constants/class-names";

export function getBackdropTemplate() {
    return `<div class="backdrop ${HIDDEN_CLASS}" id="${BACKDROP_ID}"></div>`;
}