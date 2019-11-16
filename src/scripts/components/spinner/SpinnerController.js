import {HIDDEN_CLASS} from "../../constants/class-names";

export default class SpinnerController {
    constructor(view) {
        this.view = view;
    }

    startLoading(callbackBefore, callbackAfter) {
        if (callbackBefore) callbackBefore();
        this.view.show();
        if (callbackAfter) callbackAfter();
    };

    finishLoading(callbackBefore, callbackAfter) {
        if (callbackBefore) callbackBefore();
        this.view.hide();
        if (callbackAfter) callbackAfter();
    };
}