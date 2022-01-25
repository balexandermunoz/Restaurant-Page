/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContactMain(){\r\n    const main = document.querySelector(\"main\");\r\n    main.textContent = \"\";\r\n\r\n    const phone = document.createElement('p');\r\n    phone.textContent = '📞 123 456 789';\r\n\r\n    const adress = document.createElement('p');\r\n    adress.textContent = '🏠 Nowhere, Kansas 10, Far far away';\r\n\r\n    const location = document.createElement('img');\r\n    location.classList.add('img-map')\r\n    location.src = 'images/location.png';\r\n\r\n    main.appendChild(phone);\r\n    main.appendChild(adress);\r\n    main.appendChild(location);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactMain);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHomeMain(){\r\n    const main = document.querySelector(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createText('Praline is a luxury bakery since 1990. Born in your city, it has brought cakes to thousand of people'))\r\n\r\n\r\n    const scrollImages = document.createElement('div');\r\n    scrollImages.classList.add('scroll-images');\r\n    main.appendChild(scrollImages);\r\n\r\n    scrollImages.appendChild(createImage('images/cake1.jpg'));\r\n    scrollImages.appendChild(createImage(\"images/cake2.jpeg\"));\r\n    scrollImages.appendChild(createImage(\"images/cake3.jpg\"));\r\n    scrollImages.appendChild(createImage('images/cake4.jpg'));\r\n    startImageTransition();\r\n\r\n    main.appendChild(createText('Take a look at our menu, you will love it!'))\r\n\r\n    return main;\r\n}\r\n\r\nfunction createImage(imgSrc){\r\n    const Image = document.createElement(\"img\");\r\n    Image.classList.add('img','img-home'); \r\n    Image.src = imgSrc;\r\n    Image.alt = \"A cake\";\r\n    return Image;\r\n}\r\n\r\nfunction createText(content){\r\n    const text = document.createElement('p');\r\n    text.textContent= content;\r\n    return text\r\n}\r\n\r\n\r\nfunction startImageTransition() {\r\n    var images = document.getElementsByClassName(\"img-home\");\r\n\r\n    for (var i = 0; i < images.length; ++i) {\r\n        images[i].style.opacity = 1;\r\n    }\r\n    var top = 1;\r\n    var cur = images.length - 1;\r\n    setInterval(changeImage, 3000);\r\n\r\n    async function changeImage() {\r\n        var nextImage = (1 + cur) % images.length;\r\n        images[cur].style.zIndex = top + 1;\r\n        images[nextImage].style.zIndex = top;\r\n        await transition();\r\n        images[cur].style.zIndex = top;\r\n        images[nextImage].style.zIndex = top + 1;\r\n        top = top + 1;\r\n        images[cur].style.opacity = 1;\r\n        cur = nextImage;\r\n    }\r\n\r\n    function transition() {\r\n        return new Promise(function(resolve, reject) {\r\n            var del = 0.01;\r\n            var id = setInterval(changeOpacity, 10);\r\n            function changeOpacity() {\r\n                images[cur].style.opacity -= del;\r\n                if (images[cur].style.opacity <= 0) {\r\n                    clearInterval(id);\r\n                    resolve();\r\n                }\r\n            }\r\n        })\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeMain);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\n//Header: contain title and links\r\nfunction createHeader(){\r\n    const header = document.createElement(\"header\");\r\n    header.classList.add(\"header\");\r\n    \r\n    //Title\r\n    const title = document.createElement(\"h1\");\r\n    title.classList.add(\"title\");\r\n    title.textContent = \"Praline bakery\";\r\n    \r\n    header.appendChild(title);  //Header contain title\r\n\r\n    //Tabs:\r\n    const tabs = document.createElement('div');\r\n    tabs.classList.add('tabs');\r\n  \r\n    tabs.appendChild(createButtonTab('Home',_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\r\n    tabs.appendChild(createButtonTab('Menu',_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]));\r\n    tabs.appendChild(createButtonTab('Contact',_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\r\n\r\n    header.appendChild(tabs);   //Header contain the tabs\r\n\r\n    return header\r\n}\r\n\r\nfunction createButtonTab(text,funct){\r\n    const tab = document.createElement('a');\r\n    tab.classList.add('tab');\r\n    tab.classList.add('tabs-'+text);\r\n    tab.textContent = text;\r\n    tab.addEventListener('click',funct);\r\n    return tab\r\n}\r\n\r\nfunction createMain(){\r\n    const main = document.createElement(\"main\");\r\n    main.textContent = \"First main. Its never appears\";\r\n    return main\r\n}\r\n\r\n\r\nfunction createFooter(){\r\n    const footer = document.createElement(\"footer\");\r\n    const b = document.createElement('b');\r\n    b.textContent = \"Made by: Brayan Muñoz\";\r\n    footer.appendChild(b);\r\n\r\n    footer.appendChild(elementFooter(\"https://www.instagram.com/caos_s.a/\",'instagram'));\r\n    footer.appendChild(elementFooter(\"https://www.linkedin.com/in/balexandermunoz/\",'linkedin'));\r\n    footer.appendChild(elementFooter(\"https://github.com/balexandermunoz\",'github'));\r\n\r\n    const h = document.createElement('h4');\r\n    h.textContent = \"The Odin Project\";\r\n    footer.appendChild(h)\r\n\r\n    return footer;\r\n}\r\n\r\nfunction elementFooter(link,red){\r\n    const a = document.createElement('a');\r\n    a.href = link;\r\n    a.classList.add('fa','fa-'+red);\r\n    return a\r\n}\r\n\r\n\r\ndocument.body.appendChild(createHeader())\r\ndocument.body.appendChild(createMain())\r\ndocument.body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\ndocument.body.appendChild(createFooter())\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenuMain(){\r\n\r\n    const main = document.querySelector(\"main\");\r\n    main.textContent = \"The fucking menu\";\r\n\r\n    const cakes = document.createElement('div')\r\n    cakes.classList.add('cakes')\r\n    main.appendChild(cakes);\r\n\r\n    cakes.appendChild(createCake(\"Cake Name!\",\"Description, flavors on the cake, etc etc etc...\", \"images/cake1.jpg\"))\r\n    cakes.appendChild(createCake(\"Cake Name!\",\"Description, flavors on\", \"images/cake2.jpeg\"))\r\n    cakes.appendChild(createCake(\"Cake Name!\",\"Description, flavors on the cake, etc etc etc...\", \"images/cake3.jpg\"))\r\n    cakes.appendChild(createCake(\"Cake Name!\",\"Description, flavors on the cake, etc etc etc...\", \"images/cake4.jpg\"))\r\n    cakes.appendChild(createCake(\"Cake Name!\",\"Description, flavors on the cake, etc etc etc...\", \"images/drawcake.jpg\"))\r\n    cakes.appendChild(createCake(\"Cake Name!\",\"Description, flavors on the cake, etc etc etc...\", \"images/drawcake.jpg\"))\r\n\r\n    return main;\r\n}\r\n\r\nfunction createCake(name,description, imgsrc){\r\n    const container = document.createElement('div');\r\n    container.classList.add('cake');\r\n\r\n    const image = document.createElement('img');\r\n    image.classList.add('img'); \r\n    image.src = imgsrc;\r\n    image.alt = \"A drawed cake\";\r\n    container.appendChild(image);\r\n\r\n    const cakeName = document.createElement('h3');\r\n    cakeName.textContent = name;\r\n    container.appendChild(cakeName)\r\n\r\n    const text = document.createElement('p');\r\n    text.textContent = description;\r\n    container.appendChild(text);\r\n\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuMain);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;