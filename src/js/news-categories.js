import {NEWS_CATEGORIES_DROPDOWN_ID} from "./constants";
import {updateNews} from "./news";

const createNewsCategoriesList = _ => {
    const selectList = document.getElementById(NEWS_CATEGORIES_DROPDOWN_ID);
    selectList.addEventListener("change", updateValue);
};

const updateValue = (e) => {
    updateNews(e.target.value);
};

export {createNewsCategoriesList};