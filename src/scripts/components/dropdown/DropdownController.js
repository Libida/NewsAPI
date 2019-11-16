export default class DropdownController {
    constructor(view, callbacksObj) {
        this.view = view;
        this.addListeners(callbacksObj);
    }

    addListeners(callbacksObj = {}) {
        const {changeCallback} = callbacksObj;

        if (changeCallback) {
            this.view.dropdown.addEventListener("change", changeCallback);
        }
    }
}