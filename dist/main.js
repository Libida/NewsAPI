/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/ajax/AJAX.js":
/*!*****************************!*\
  !*** ./src/js/ajax/AJAX.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/Modal */ \"./src/js/modal/Modal.js\");\n\n\nclass AJAX {\n  constructor(url, options = {}) {\n    this.promiseRequest = this.makeRequest(url, options);\n  }\n\n  async makeRequest(url, options) {\n    let promise = fetch(url, options);\n    return promise;\n  }\n\n  async waitForRequest(callback) {\n    try {\n      let response = await this.promiseRequest;\n      const finalResponse = callback ? callback(response) : response;\n      return finalResponse;\n    } catch (error) {\n      new _modal_Modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"](error);\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (AJAX);\n\n//# sourceURL=webpack:///./src/js/ajax/AJAX.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _news_News__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news/News */ \"./src/js/news/News.js\");\n\n\nnew _news_News__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/backdrop/Backdrop.js":
/*!*************************************!*\
  !*** ./src/js/backdrop/Backdrop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n/* harmony import */ var _BackdropView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BackdropView */ \"./src/js/backdrop/BackdropView.js\");\n/* harmony import */ var _BackdropController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BackdropController */ \"./src/js/backdrop/BackdropController.js\");\n\n\n\nlet instance = null;\n\nclass Backdrop {\n  constructor(text) {\n    if (!instance) {\n      instance = this;\n      instance.view = new _BackdropView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      instance.controller = new _BackdropController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](instance.view);\n    }\n\n    return instance;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Backdrop);\n\n//# sourceURL=webpack:///./src/js/backdrop/Backdrop.js?");

/***/ }),

/***/ "./src/js/backdrop/BackdropController.js":
/*!***********************************************!*\
  !*** ./src/js/backdrop/BackdropController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n\n\nclass BackdropController {\n  constructor(view) {\n    this.view = view;\n  }\n\n  show() {\n    this.view.backdrop.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDDEN_CLASS\"]);\n  }\n\n  hide() {\n    this.view.backdrop.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDDEN_CLASS\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackdropController);\n\n//# sourceURL=webpack:///./src/js/backdrop/BackdropController.js?");

/***/ }),

/***/ "./src/js/backdrop/BackdropView.js":
/*!*****************************************!*\
  !*** ./src/js/backdrop/BackdropView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n\n\nclass BackdropView {\n  constructor() {\n    this.create();\n    this.backdrop = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__[\"BACKDROP_ID\"]);\n  }\n\n  create() {\n    document.body.insertAdjacentHTML(\"beforeend\", `<div class=\"backdrop hidden\" id=\"${_constants__WEBPACK_IMPORTED_MODULE_0__[\"BACKDROP_ID\"]}\"></div>`);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackdropView);\n\n//# sourceURL=webpack:///./src/js/backdrop/BackdropView.js?");

/***/ }),

/***/ "./src/js/constants.js":
/*!*****************************!*\
  !*** ./src/js/constants.js ***!
  \*****************************/
/*! exports provided: NEWS_CATEGORIES_DROPDOWN_ID, NEWS_CONTAINER_ID, GLOBAL_SPINNER_ID, MODAL_ID, MODAL_TEXT_ID, MODAL_CLOSE_ID, BACKDROP_ID, HIDDEN_CLASS, NO_IMG_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_CATEGORIES_DROPDOWN_ID\", function() { return NEWS_CATEGORIES_DROPDOWN_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NEWS_CONTAINER_ID\", function() { return NEWS_CONTAINER_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GLOBAL_SPINNER_ID\", function() { return GLOBAL_SPINNER_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODAL_ID\", function() { return MODAL_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODAL_TEXT_ID\", function() { return MODAL_TEXT_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MODAL_CLOSE_ID\", function() { return MODAL_CLOSE_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKDROP_ID\", function() { return BACKDROP_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HIDDEN_CLASS\", function() { return HIDDEN_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NO_IMG_URL\", function() { return NO_IMG_URL; });\nconst NEWS_CATEGORIES_DROPDOWN_ID = \"news-categories\";\nconst NEWS_CONTAINER_ID = \"news-container\";\nconst GLOBAL_SPINNER_ID = \"global-spinner\";\nconst MODAL_ID = \"modal\";\nconst MODAL_TEXT_ID = \"modal-text\";\nconst MODAL_CLOSE_ID = \"modal-heading-close\";\nconst BACKDROP_ID = \"backdrop\";\nconst HIDDEN_CLASS = \"hidden\";\nconst NO_IMG_URL = \"https://static.thenounproject.com/png/340719-200.png\";\n\n//# sourceURL=webpack:///./src/js/constants.js?");

/***/ }),

/***/ "./src/js/dropdown/Dropdown.js":
/*!*************************************!*\
  !*** ./src/js/dropdown/Dropdown.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DropdownView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownView */ \"./src/js/dropdown/DropdownView.js\");\n/* harmony import */ var _DropdownController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownController */ \"./src/js/dropdown/DropdownController.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n\n\n\n\nclass Dropdown {\n  constructor(id, callbacksObj) {\n    this.view = new _DropdownView__WEBPACK_IMPORTED_MODULE_0__[\"default\"](id);\n    this.controller = new _DropdownController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.view, callbacksObj);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dropdown);\n\n//# sourceURL=webpack:///./src/js/dropdown/Dropdown.js?");

/***/ }),

/***/ "./src/js/dropdown/DropdownController.js":
/*!***********************************************!*\
  !*** ./src/js/dropdown/DropdownController.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DropdownController {\n  constructor(view, callbacksObj) {\n    this.view = view;\n    this.addListeners(callbacksObj);\n  }\n\n  addListeners(callbacksObj = {}) {\n    const {\n      changeCallback\n    } = callbacksObj;\n\n    if (changeCallback) {\n      this.view.dropdown.addEventListener(\"change\", changeCallback);\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownController);\n\n//# sourceURL=webpack:///./src/js/dropdown/DropdownController.js?");

/***/ }),

/***/ "./src/js/dropdown/DropdownView.js":
/*!*****************************************!*\
  !*** ./src/js/dropdown/DropdownView.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass DropdownView {\n  constructor(id) {\n    this.id = id;\n    this.dropdown = document.getElementById(id);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DropdownView);\n\n//# sourceURL=webpack:///./src/js/dropdown/DropdownView.js?");

/***/ }),

/***/ "./src/js/modal/Modal.js":
/*!*******************************!*\
  !*** ./src/js/modal/Modal.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ModalView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalView */ \"./src/js/modal/ModalView.js\");\n/* harmony import */ var _ModalController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalController */ \"./src/js/modal/ModalController.js\");\n\n\nlet instance = null;\n\nclass Modal {\n  constructor(text) {\n    if (!instance) {\n      instance = this;\n      instance.view = new _ModalView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      instance.controller = new _ModalController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](instance.view);\n    }\n\n    instance.view.setText(text);\n    instance.controller.open();\n    return instance;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\n\n//# sourceURL=webpack:///./src/js/modal/Modal.js?");

/***/ }),

/***/ "./src/js/modal/ModalController.js":
/*!*****************************************!*\
  !*** ./src/js/modal/ModalController.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n\n\nclass ModalController {\n  constructor(view) {\n    this.view = view;\n    this.initListeners();\n  }\n\n  initListeners() {\n    this.view.errorClose.addEventListener(\"click\", this.close.bind(this));\n  }\n\n  open() {\n    this.view.modal.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDDEN_CLASS\"]);\n    this.view.backdrop.controller.show();\n  }\n\n  close(e) {\n    e.preventDefault();\n    this.view.modal.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDDEN_CLASS\"]);\n    this.view.backdrop.controller.hide();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalController);\n\n//# sourceURL=webpack:///./src/js/modal/ModalController.js?");

/***/ }),

/***/ "./src/js/modal/ModalView.js":
/*!***********************************!*\
  !*** ./src/js/modal/ModalView.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n/* harmony import */ var _backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backdrop/Backdrop */ \"./src/js/backdrop/Backdrop.js\");\n\n\n\nclass ModalView {\n  constructor(text) {\n    this.create();\n    this.modal = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_ID\"]);\n    this.errorText = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_TEXT_ID\"]);\n    this.errorClose = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_CLOSE_ID\"]);\n    this.backdrop = new _backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  create() {\n    const modalMarkup = `\n                <div class=\"modal ${_constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDDEN_CLASS\"]}\" id=\"${_constants__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_ID\"]}\">\n                    <div class=\"modal-heading\">\n                        <h2>Attention</h2>\n                        <a href=\"#\" class=\"${_constants__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_CLOSE_ID\"]}\" id=\"${_constants__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_CLOSE_ID\"]}\">Close</a>\n                    </div>\n                    <p class=\"modal-text\" id=\"${_constants__WEBPACK_IMPORTED_MODULE_0__[\"MODAL_TEXT_ID\"]}\"></p>\n                </div>\n                `;\n    document.body.insertAdjacentHTML(\"beforeend\", modalMarkup);\n  }\n\n  getText() {\n    return this.text;\n  }\n\n  setText(value = \"Could you please retry later.\") {\n    if (this.getText !== value) {\n      this.errorText.textContent = value;\n      this.text = value;\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModalView);\n\n//# sourceURL=webpack:///./src/js/modal/ModalView.js?");

/***/ }),

/***/ "./src/js/news/News.js":
/*!*****************************!*\
  !*** ./src/js/news/News.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n/* harmony import */ var _NewsView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsView */ \"./src/js/news/NewsView.js\");\n/* harmony import */ var _NewsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NewsController */ \"./src/js/news/NewsController.js\");\n/* harmony import */ var _NewsModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NewsModel */ \"./src/js/news/NewsModel.js\");\n\n\n\n\n\nclass News {\n  constructor(options) {\n    this.model = new _NewsModel__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n    this.view = new _NewsView__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.controller = new _NewsController__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.model, this.view, options);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (News);\n\n//# sourceURL=webpack:///./src/js/news/News.js?");

/***/ }),

/***/ "./src/js/news/NewsController.js":
/*!***************************************!*\
  !*** ./src/js/news/NewsController.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/Modal */ \"./src/js/modal/Modal.js\");\n\n\n\nclass NewsController {\n  constructor(model, view, options = {}) {\n    this.model = model;\n    this.view = view;\n    this.addListeners();\n  }\n\n  addListeners() {\n    this.view.dropdown.controller.addListeners({\n      changeCallback: this.updateNews.bind(this)\n    });\n  }\n\n  async updateNews(e) {\n    this.view.spinner.controller.startLoading(this.view.clearNews.bind(this.view));\n    const promise = this.model.getNews(e.target.value);\n    const results = (await promise) || {};\n    this.view.appendNews(results.articles);\n    this.view.spinner.controller.finishLoading();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsController);\n\n//# sourceURL=webpack:///./src/js/news/NewsController.js?");

/***/ }),

/***/ "./src/js/news/NewsModel.js":
/*!**********************************!*\
  !*** ./src/js/news/NewsModel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/Modal */ \"./src/js/modal/Modal.js\");\n/* harmony import */ var _ajax_AJAX__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ajax/AJAX */ \"./src/js/ajax/AJAX.js\");\n\n\n\nclass NewsModel {\n  async getNews(category, options) {\n    const url = `https://newsapi.org/v2/everything?q=${category}&sortBy=popularity&apiKey=a1e2ae38e5ff42f1aa3175998837d6ca&from=2019-10-24&to=2019-10-24`;\n    const ajaxRequest = new _ajax_AJAX__WEBPACK_IMPORTED_MODULE_1__[\"default\"](url, options);\n    const response = ajaxRequest.waitForRequest(this.handleErrors.bind(this));\n    return response;\n  }\n\n  handleErrors(response) {\n    if (response.status != 200) {\n      throw new SyntaxError(\"Empty results from the NEWS API server\");\n    } else {\n      return response.json();\n    }\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsModel);\n\n//# sourceURL=webpack:///./src/js/news/NewsModel.js?");

/***/ }),

/***/ "./src/js/news/NewsView.js":
/*!*********************************!*\
  !*** ./src/js/news/NewsView.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _spinner_Spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spinner/Spinner */ \"./src/js/spinner/Spinner.js\");\n/* harmony import */ var _dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dropdown/Dropdown */ \"./src/js/dropdown/Dropdown.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n\n\n\n\nclass NewsView {\n  constructor() {\n    this.container = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_CONTAINER_ID\"]);\n    this.dropdown = new _dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_1__[\"default\"](_constants__WEBPACK_IMPORTED_MODULE_2__[\"NEWS_CATEGORIES_DROPDOWN_ID\"]);\n    this.spinner = new _spinner_Spinner__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  getNewsArticleMarkup(article) {\n    const {\n      url,\n      urlToImage,\n      title,\n      description\n    } = article;\n    return `\n            <article class=\"news-article\">\n                <a class=\"news-article-link\" href=\"${url}\" target=\"_blank\">\n                    <div class=\"news-article-additional-content\">\n                        <img class=\"news-article-img\" src=\"${urlToImage || _constants__WEBPACK_IMPORTED_MODULE_2__[\"NO_IMG_URL\"]}\" alt=\"${title}\">\n                    </div>\n                    <div class=\"news-article-main-content\">\n                        <h3 class=\"news-article-title\">${title}</h3>\n                        <p class=\"news-article-location\">${description}</p>\n                    </div>\n                </a>\n            </article>\n            `;\n  }\n\n  appendNews(newsArticles) {\n    for (let i in newsArticles) {\n      this.container.insertAdjacentHTML(\"beforeend\", this.getNewsArticleMarkup(newsArticles[i]));\n    }\n  }\n\n  clearNews() {\n    this.container.innerHTML = \"\";\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsView);\n\n//# sourceURL=webpack:///./src/js/news/NewsView.js?");

/***/ }),

/***/ "./src/js/spinner/Spinner.js":
/*!***********************************!*\
  !*** ./src/js/spinner/Spinner.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SpinnerView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SpinnerView */ \"./src/js/spinner/SpinnerView.js\");\n/* harmony import */ var _SpinnerController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpinnerController */ \"./src/js/spinner/SpinnerController.js\");\n\n\nlet instance;\n\nclass Spinner {\n  constructor() {\n    if (!instance) {\n      instance = this;\n      instance.view = new _SpinnerView__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      instance.controller = new _SpinnerController__WEBPACK_IMPORTED_MODULE_1__[\"default\"](instance.view);\n    }\n\n    return instance;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Spinner);\n\n//# sourceURL=webpack:///./src/js/spinner/Spinner.js?");

/***/ }),

/***/ "./src/js/spinner/SpinnerController.js":
/*!*********************************************!*\
  !*** ./src/js/spinner/SpinnerController.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n\n\nclass SpinnerController {\n  constructor(view) {\n    this.view = view;\n  }\n\n  startLoading(callbackBefore, callbackAfter) {\n    if (callbackBefore) callbackBefore();\n    this.view.spinner.classList.remove(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDDEN_CLASS\"]);\n    if (callbackAfter) callbackAfter();\n  }\n\n  finishLoading(callbackBefore, callbackAfter) {\n    if (callbackBefore) callbackBefore();\n    this.view.spinner.classList.add(_constants__WEBPACK_IMPORTED_MODULE_0__[\"HIDDEN_CLASS\"]);\n    if (callbackAfter) callbackAfter();\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpinnerController);\n\n//# sourceURL=webpack:///./src/js/spinner/SpinnerController.js?");

/***/ }),

/***/ "./src/js/spinner/SpinnerView.js":
/*!***************************************!*\
  !*** ./src/js/spinner/SpinnerView.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/js/constants.js\");\n\n\nclass SpinnerView {\n  constructor() {\n    this.spinner = document.getElementById(_constants__WEBPACK_IMPORTED_MODULE_0__[\"GLOBAL_SPINNER_ID\"]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SpinnerView);\n\n//# sourceURL=webpack:///./src/js/spinner/SpinnerView.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ })

/******/ });