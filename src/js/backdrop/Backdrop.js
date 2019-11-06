import {BACKDROP_ID, HIDDEN_CLASS} from "../constants";
import BackdropView from "./BackdropView";
import BackdropController from "./BackdropController";

let instance = null;

class Backdrop {
    constructor(text) {
        if (!instance) {
            instance = this;
            instance.view = new BackdropView();
            instance.controller = new BackdropController(instance.view);
        }

        return instance;
    }
}

export default Backdrop;