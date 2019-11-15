import DropdownView from "./DropdownView";
import DropdownController from "./DropdownController";
import {NEWS_CATEGORIES_DROPDOWN_ID} from "../constants";

export default class Dropdown {
    constructor(id, callbacksObj) {
        this.view = new DropdownView(id);
        this.controller = new DropdownController(this.view, callbacksObj);
    }
}