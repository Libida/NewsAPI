export default class DropdownController {
    constructor(view, callbacksObj) {
        this.view = view;
        this.addListeners(callbacksObj);
    }

    addListeners(callbacksObj = {}) {
        const dropdown = this.view.dropdown;
        const {changeCallback} = callbacksObj;

        if (changeCallback) {
            dropdown && dropdown.addEventListener("change", changeCallback);
        }
    }
}