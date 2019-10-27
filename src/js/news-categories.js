import {CONSTANTS} from "./constants";
import {updateNews} from "./news";

function createNewsCategoriesList() {
    const selectList = document.getElementById(CONSTANTS.NEWS_CATEGORIES_DROPDOWN_ID);
    selectList.addEventListener("change", updateValue);
}

function updateValue(e) {
    updateNews(e.target.value);
}

export {createNewsCategoriesList};