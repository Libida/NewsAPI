import DropdownView from "./DropdownView";
import DropdownController from "./DropdownController";

export default class Dropdown {
    constructor(id, callbacksObj) {
        this.view = new DropdownView(id);
        this.controller = new DropdownController(this.view, callbacksObj);
    }
}