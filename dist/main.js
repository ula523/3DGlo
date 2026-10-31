/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const timer = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\r\n//const two = require('./modules/two');\r\n\r\ntimer('8 november 2026'); //вызывает таймер и указывает дедлайн\r\n//two();\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/timer.js"
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
(module) {

eval("{const timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours')\r\n    const timerMinutes = document.getElementById('timer-minutes')\r\n    const timerSeconds = document.getElementById('timer-seconds')\r\n\r\n\r\n    const getTimerRemaining = () => {\r\n    let dateStop = new Date(deadline).getTime()\r\n    let dateNow = new Date().getTime()//текущее время компьютера\r\n    let timeRemaining = (dateStop - dateNow) / 1000 //количество cек до дедлайна\r\n    let hours = Math.floor(timeRemaining / 60 / 60)\r\n    let minutes = Math.floor((timeRemaining / 60) % 60)\r\n    let seconds = Math.floor(timeRemaining % 60) //остаток от деления на 60\r\n\r\n    return {\r\n        timeRemaining,\r\n         hours, //hours: hours,\r\n         minutes,\r\n         seconds\r\n    }\r\n\r\n    }\r\n    const updateClock = () => {\r\n    let getTime = getTimerRemaining()\r\n        \r\n    timerHours.textContent = String(getTime.hours).padStart(2, '0');\r\n    timerMinutes.textContent = String(getTime.minutes).padStart(2, '0');\r\n    timerSeconds.textContent = String(getTime.seconds).padStart(2, '0');\r\n\r\n    if(getTime.timeRemaining > 0) { \r\n     setInterval(updateClock, 1000); //вызывает функцию каждую сек.\r\n\r\n    }\r\n    else {\r\n    timerHours.textContent = '00'\r\n    timerMinutes.textContent = '00'\r\n    timerSeconds.textContent = '00'\r\n\r\n    }\r\n\r\n   // console.log(interval);\r\n   \r\n    }\r\n    updateClock()\r\n\r\n}\r\n\r\nmodule.exports = timer;\n\n//# sourceURL=webpack://3dglo/./src/modules/timer.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;