import {CONSTANTS} from "./constants";
import {getArticles} from "./news";

function createNewsCategoriesList() {
    let newsCategories = ["Choose category", "bitcoin", "apple", "techcrunch"];
    const selectList = document.createElement("select");
    selectList.id = CONSTANTS.NEWS_CATEGORIES_DROPDOWN_ID;
    document.body.appendChild(selectList);
    document.body.insertAdjacentHTML("beforeend", "<div class='news-container' id='news-container'></div>");

    for (let i in newsCategories) {
        let option = document.createElement("option");
        option.value = option.text = newsCategories[i];
        if (i == 0) {
            option.disabled = "disabled";
            option.selected = "true";
        }
        selectList.appendChild(option);
    }

    selectList.addEventListener("change", updateValue);
}

function updateValue(e) {
    document.getElementById("news-container").innerHTML = "";
    getArticles(e.target.value);
}

export {createNewsCategoriesList};