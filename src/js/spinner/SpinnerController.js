import {HIDDEN_CLASS} from "../constants";

export default class SpinnerController {
    constructor(view) {
        this.view = view;
    }

    startLoading(callbackBefore, callbackAfter) {
        if (callbackBefore) callbackBefore();
        this.view.spinner.classList.remove(HIDDEN_CLASS);
        if (callbackAfter) callbackAfter();
    };

    finishLoading(callbackBefore, callbackAfter) {
        if (callbackBefore) callbackBefore();
        this.view.spinner.classList.add(HIDDEN_CLASS);
        if (callbackAfter) callbackAfter();
    };
}