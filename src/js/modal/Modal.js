import ModalView from "./ModalView";
import ModalController from "./ModalController";

let instance = null;

class Modal {
    constructor(text) {
        if (!instance) {
            instance = this;
            instance.view = new ModalView();
            instance.controller = new ModalController(instance.view);
        }

        instance.view.setText(text);
        instance.controller.open();

        return instance;
    }
}

export default Modal;