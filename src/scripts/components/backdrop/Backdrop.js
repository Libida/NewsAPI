import BackdropView from "./BackdropView";
import BackdropController from "./BackdropController";

let instance = null;

export default class Backdrop {
    constructor(text) {
        if (!instance) {
            instance = this;
            instance.view = new BackdropView();
            instance.controller = new BackdropController(instance.view);
        }

        return instance;
    }
}