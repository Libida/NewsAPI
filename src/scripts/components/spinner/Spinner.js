import SpinnerView from "./SpinnerView";
import SpinnerController from "./SpinnerController";

let instance;

export default class Spinner {
    constructor() {
        if (!instance) {
            instance = this;
            instance.view = new SpinnerView();
            instance.controller = new SpinnerController(instance.view);
        }

        return instance;
    }
}