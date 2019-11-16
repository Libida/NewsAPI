import {BACKDROP_ID, MODAL_CLOSE_ID, MODAL_ID, MODAL_TEXT_ID} from "../constants/ids";
import {HIDDEN_CLASS} from "../constants/class-names";

export function getModalTemplate() {
    return `
                <div class="modal ${HIDDEN_CLASS}" id="${MODAL_ID}">
                    <div class="modal-heading">
                        <h2>Attention</h2>
                        <a href="#" class="${MODAL_CLOSE_ID}" id="${MODAL_CLOSE_ID}">Close</a>
                    </div>
                    <p class="modal-text" id="${MODAL_TEXT_ID}"></p>
                </div>
                `;
};