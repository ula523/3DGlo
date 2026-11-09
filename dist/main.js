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

eval("{const timer = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\r\nconst menu = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\r\nconst modal = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\r\nconst content = __webpack_require__(/*! ./modules/content */ \"./src/modules/content.js\");\r\nconst tabs = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\r\nconst slider = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\r\nconst calc = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\r\n\r\ntimer(\"8 november 2026\"); //вызывает таймер и указывает дедлайн\r\nmenu();\r\nmodal();\r\ncontent();\r\ntabs();\r\nslider();\r\ncalc(100);\r\n\n\n//# sourceURL=webpack://3dglo/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/calc.js"
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
(module) {

eval("{const calc = (price = 100) => {\r\n  const calcBlock = document.querySelector(\".calc-block\");\r\n  const calcType = document.querySelector(\".calc-type\");\r\n  const calcSquare = document.querySelector(\".calc-square\");\r\n  const calcCount = document.querySelector(\".calc-count\");\r\n  const calcDay = document.querySelector(\".calc-day\");\r\n  const total = document.getElementById(\"total\");\r\n\r\n  const countCalc = () => {\r\n    const calcTypeValue = +calcType.options[calcType.selectedIndex].value; //переводим value в число\r\n    const calcSquareValue = calcSquare.value;\r\n\r\n    let totalValue = 0;\r\n    let calcCountValue = 1;\r\n    let calcDayValue = 1;\r\n\r\n    if (calcCount.value > 1) {\r\n      calcCountValue += +calcCount.value / 10;\r\n    }\r\n\r\n    if (calcDay.value && calcDay.value < 5) {\r\n      calcDayValue = 2;\r\n    } else if (calcDay.value && calcDay.value < 10) {\r\n      calcDayValue = 1.5;\r\n    }\r\n\r\n    if (calcType.value && calcSquare.value) {\r\n      totalValue =\r\n        price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;\r\n    } else {\r\n      totalValue = 0;\r\n    }\r\n\r\n    total.textContent = totalValue;\r\n  };\r\n\r\n  calcBlock.addEventListener(\"input\", (e) => {\r\n    //отрабатывает на инпуте\r\n\r\n    if (\r\n      e.target === calcType ||\r\n      e.target === calcSquare ||\r\n      e.target === calcCount ||\r\n      e.target === calcDay\r\n    ) {\r\n      countCalc();\r\n    }\r\n  });\r\n};\r\n\r\nmodule.exports = calc;\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/calc.js?\n}");

/***/ },

/***/ "./src/modules/content.js"
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
(module) {

eval("{const content = () => {\r\n  const calcInput = document.querySelectorAll(\".calc-block input\");\r\n  const typeText = document.querySelectorAll(\r\n    'input[type=\"text\"]:not(.calc-block input), [placeholder=\"Ваше сообщение\"]:not(.calc-block input)',\r\n  );\r\n  const typeEmail = document.querySelectorAll('input[type=\"email\"]');\r\n  const typeTel = document.querySelectorAll('input[type=\"tel\"]');\r\n\r\n  // разрешен ввод цифр\r\n  calcInput.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/\\D+/g, \"\");\r\n    });\r\n  });\r\n\r\n  // ввод только кириллицы в любом регистре, дефиса и пробела\r\n  typeText.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^а-яё\\s-]/gi, \"\");\r\n    });\r\n  });\r\n\r\n  //ввод только латиницы в любом регистре, цифры и спецсимволы\r\n\r\n  typeEmail.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^a-z0-9@_.\\!~*'-]/gi, \"\");\r\n    });\r\n  });\r\n\r\n  //ввод только цифр, круглых скобок и дефис\r\n\r\n  typeTel.forEach((input) => {\r\n    input.addEventListener(\"input\", (e) => {\r\n      e.target.value = e.target.value.replace(/[^\\d()-]/g, \"\");\r\n    });\r\n  });\r\n\r\n  //console.log(calcInput);\r\n};\r\n\r\nmodule.exports = content;\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/content.js?\n}");

/***/ },

/***/ "./src/modules/menu.js"
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
(module) {

eval("{const menu = () => {\r\nconst menuElement = document.querySelector('menu')\r\n \r\n\r\n  const toggleMenu = (event) => {\r\n    const target = event.target;\r\n\r\n    if (target.closest('.menu')) {\r\n      menuElement.classList.toggle('active-menu');\r\n      return;\r\n    }\r\n\r\n    \r\n    if (target.closest('.close-btn') || target.closest('ul > li > a') || !menuElement.contains(target)) {\r\n      menuElement.classList.remove('active-menu'); // закрытие по крестику, пункту меню или клику вне меню\r\n    }\r\n  }\r\n\r\n  document.addEventListener('click', toggleMenu);\r\n\r\n}\r\n\r\n\r\n\r\nmodule.exports = menu;\n\n//# sourceURL=webpack://3dglo/./src/modules/menu.js?\n}");

/***/ },

/***/ "./src/modules/modal.js"
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
(module) {

eval("{const modal = () => {\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const modal = document.querySelector(\".popup\");\r\n  const closeBtn = modal.querySelector(\".popup-close\");\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      modal.style.display = \"block\";\r\n\r\n      if (document.documentElement.clientWidth < 768) {\r\n        modal.style.opacity = 1;\r\n        return;\r\n      }\r\n\r\n      let opacity = 0;\r\n      modal.style.opacity = opacity;\r\n\r\n      const timer = setInterval(() => {\r\n        opacity += 0.05;\r\n        modal.style.opacity = opacity;\r\n\r\n        if (opacity >= 1) {\r\n          clearInterval(timer);\r\n        }\r\n      }, 20);\r\n    });\r\n  });\r\n\r\n  closeBtn.addEventListener(\"click\", () => {\r\n    if (document.documentElement.clientWidth < 768) {\r\n      modal.style.display = \"none\";\r\n      return;\r\n    }\r\n\r\n    let opacity = 1;\r\n    const timer = setInterval(() => {\r\n      opacity -= 0.05;\r\n      modal.style.opacity = opacity;\r\n\r\n      if (opacity <= 0) {\r\n        clearInterval(timer);\r\n        modal.style.display = \"none\";\r\n      }\r\n    }, 10);\r\n  });\r\n  modal.addEventListener(\"click\", (e) => {\r\n    if (\r\n      !e.target.closest(\".popup-content\") ||\r\n      e.target.classList.contains(\"popup-close\")\r\n    ) {\r\n      //проверка есть ли класс popup-close\r\n      modal.style.display = \"none\"; // модалка закрывается\r\n    }\r\n  });\r\n};\r\n\r\nmodule.exports = modal;\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/modal.js?\n}");

/***/ },

/***/ "./src/modules/slider.js"
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
(module) {

eval("{const slider = () => {\r\n  const sliderBlock = document.querySelector(\".portfolio-content\");\r\n  const slides = document.querySelectorAll(\".portfolio-item\");\r\n\r\n  const timeInterval = 2000;\r\n  const dotsBlock = document.querySelector(\".portfolio-dots\");\r\n\r\n  let currentSlide = 0;\r\n  let interval;\r\n\r\n  slides.forEach((slide, index) => {\r\n    const dot = document.createElement(\"li\");\r\n\r\n    dot.classList.add(\"dot\");\r\n\r\n    if (index === 0) {\r\n      dot.classList.add(\"dot-active\");\r\n    }\r\n\r\n    dotsBlock.append(dot);\r\n  });\r\n  const dots = document.querySelectorAll(\".dot\");\r\n\r\n  // console.log(dotsBlock);\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n    elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n    elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => {\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n    currentSlide++;\r\n\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    slides[currentSlide].classList.add(\"portfolio-item-active\"); //добавляет класс у следующего элемента\r\n  };\r\n  const startSlide = (timer = 1500) => {\r\n    interval = setInterval(autoSlide, timer);\r\n  };\r\n  const stopSlide = () => {\r\n    clearInterval(interval);\r\n  };\r\n  sliderBlock.addEventListener(\"click\", (e) => {\r\n    e.preventDefault(); //отменяет стандартное поведение элемента\r\n\r\n    if (!e.target.matches(\".dot, .portfolio-btn\")) {\r\n      //если нет этих классов\r\n\r\n      return;\r\n    }\r\n\r\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    prevSlide(dots, currentSlide, \"dot-active\");\r\n\r\n    if (e.target.matches(\"#arrow-right\")) {\r\n      //клик по кнопке arrow-right\r\n\r\n      currentSlide++;\r\n    } else if (e.target.matches(\"#arrow-left\")) {\r\n      currentSlide--;\r\n    } else if (e.target.classList.contains(\"dot\")) {\r\n      //ищет класс dot\r\n      dots.forEach((dot, index) => {\r\n        if (e.target === dot) {\r\n          currentSlide = index;\r\n        }\r\n      });\r\n    }\r\n    if (currentSlide >= slides.length) {\r\n      currentSlide = 0;\r\n    }\r\n    if (currentSlide < 0) {\r\n      currentSlide = slides.length - 1;\r\n    }\r\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\r\n    nextSlide(dots, currentSlide, \"dot-active\");\r\n  });\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseenter\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        stopSlide();\r\n      }\r\n    },\r\n    true,\r\n  );\r\n\r\n  sliderBlock.addEventListener(\r\n    \"mouseleave\",\r\n    (e) => {\r\n      if (e.target.matches(\".dot, .portfolio-btn\")) {\r\n        startSlide(timeInterval); //2 сек.\r\n      }\r\n    },\r\n    true,\r\n  );\r\n\r\n  startSlide(timeInterval);\r\n};\r\n\r\nmodule.exports = slider;\r\n\n\n//# sourceURL=webpack://3dglo/./src/modules/slider.js?\n}");

/***/ },

/***/ "./src/modules/tabs.js"
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
(module) {

eval("{const tabs = () => {\r\n const tabContent = document.querySelectorAll('.service-tab')\r\n const tabPanel = document.querySelector('.service-header')\r\n const tabs = document.querySelectorAll('.service-header-tab')\r\n\r\n tabPanel.addEventListener('click', (e) => {\r\n    if (e.target.closest('.service-header-tab')) {//проверяет что это кнопка \r\n\r\n        const tabBtn = e.target.closest('.service-header-tab')\r\n       \r\n        tabs.forEach((tab, index) => { //перебирает все кнопки\r\n\r\n            if (tab === tabBtn) {\r\n                tab.classList.add('active')\r\n                tabContent[index].classList.remove('d-none')\r\n            } else {\r\n                tab.classList.remove('active')\r\n                 tabContent[index].classList.add('d-none')\r\n            }\r\n\r\n        })\r\n\r\n    }\r\n })\r\n\r\n//  console.log(tabContent);\r\n//   console.log(tabPanel);\r\n//    console.log(tabs);\r\n \r\n\r\n}\r\n\r\nmodule.exports = tabs;\n\n//# sourceURL=webpack://3dglo/./src/modules/tabs.js?\n}");

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