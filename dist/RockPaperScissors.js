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

/***/ "./output/Practical 7/RPSButton.js":
/*!*****************************************!*\
  !*** ./output/Practical 7/RPSButton.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSButton)\n/* harmony export */ });\nfunction RPSButton(props) {\n  const winCount = props.records.filter(function (record) {\n    return record.result === 'Win';\n  }).length;\n  const totalCount = props.records.length;\n  const winPercentage = (winCount / totalCount * 100).toFixed(2);\n  const [isHovered, setIsHovered] = React.useState(false);\n  return /*#__PURE__*/React.createElement(\"button\", {\n    onClick: function () {\n      props.onButtonPressed(props.move);\n    },\n    onMouseEnter: function () {\n      setIsHovered(true);\n    },\n    onMouseLeave: function () {\n      setIsHovered(false);\n    }\n  }, props.move, \" \", isHovered && `(${totalCount === 0 ? 0 : winPercentage}%)`);\n}\n\n//# sourceURL=webpack:///./output/Practical_7/RPSButton.js?");

/***/ }),

/***/ "./output/Practical 7/RPSButtons.js":
/*!******************************************!*\
  !*** ./output/Practical 7/RPSButtons.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSButtons)\n/* harmony export */ });\n/* harmony import */ var _RPSButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RPSButton.js */ \"./output/Practical 7/RPSButton.js\");\n\nconst moves = ['Rock', 'Paper', 'Scissors'];\nfunction RPSButtons(props) {\n  return /*#__PURE__*/React.createElement(\"div\", null, moves.map(function (move) {\n    return /*#__PURE__*/React.createElement(_RPSButton_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      records: props.records.filter(function (record) {\n        return !record.deleted && record.move === move;\n      }),\n      move: move,\n      onButtonPressed: props.onButtonPressed\n    });\n  }));\n}\n\n//# sourceURL=webpack:///./output/Practical_7/RPSButtons.js?");

/***/ }),

/***/ "./output/Practical 7/RPSInput.js":
/*!****************************************!*\
  !*** ./output/Practical 7/RPSInput.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSInput)\n/* harmony export */ });\nfunction RPSInput(props) {\n  const [selectedMove, setSelectedMove] = React.useState('Rock');\n  const [isWin, setIsWin] = React.useState(false);\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"select\", {\n    value: selectedMove,\n    onChange: function (event) {\n      setSelectedMove(event.target.value);\n    }\n  }, /*#__PURE__*/React.createElement(\"option\", {\n    value: \"Rock\"\n  }, \"Rock\"), /*#__PURE__*/React.createElement(\"option\", {\n    value: \"Paper\"\n  }, \"Paper\"), /*#__PURE__*/React.createElement(\"option\", {\n    value: \"Scissors\"\n  }, \"Scissors\")), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"checkbox\",\n    checked: isWin,\n    onChange: function (event) {\n      setIsWin(event.target.checked);\n    }\n  }), ' ', \"Win?\", /*#__PURE__*/React.createElement(\"button\", {\n    onClick: function () {\n      let result = 'Lose';\n      if (isWin) result = 'Win';\n      props.onAdd(selectedMove, result);\n    }\n  }, \"Add\"));\n}\n\n//# sourceURL=webpack:///./output/Practical_7/RPSInput.js?");

/***/ }),

/***/ "./output/Practical 7/RPSRecords.js":
/*!******************************************!*\
  !*** ./output/Practical 7/RPSRecords.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RPSRecords)\n/* harmony export */ });\nfunction RPSRecords(props) {\n  const numberOfRecords = props.records.filter(function (record) {\n    return !record.deleted;\n  }).length;\n  const numberOfWin = props.records.filter(function (record) {\n    return !record.deleted && record.result === 'Win';\n  }).length;\n  const winPercentage = numberOfWin / numberOfRecords * 100;\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"p\", null, \"Records (Win %: \", isNaN(winPercentage) ? 0 : winPercentage, \"%): \"), /*#__PURE__*/React.createElement(\"ol\", null, props.records.map(function (record, index) {\n    return !record.deleted && /*#__PURE__*/React.createElement(\"li\", {\n      onClick: function () {\n        props.onClickRecord(index);\n      }\n    }, record.result, \" (\", record.move, \")\");\n  })));\n}\n\n//# sourceURL=webpack:///./output/Practical_7/RPSRecords.js?");

/***/ }),

/***/ "./output/RockPaperScissors.js":
/*!*************************************!*\
  !*** ./output/RockPaperScissors.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Practical_7_RPSButtons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Practical 7/RPSButtons.js */ \"./output/Practical 7/RPSButtons.js\");\n/* harmony import */ var _Practical_7_RPSRecords_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Practical 7/RPSRecords.js */ \"./output/Practical 7/RPSRecords.js\");\n/* harmony import */ var _Practical_7_RPSInput_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Practical 7/RPSInput.js */ \"./output/Practical 7/RPSInput.js\");\n\n\n\nfunction RockPaperScissors(props) {\n  const [records, setRecords] = React.useState([]);\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"Rock Paper Scissors\"), /*#__PURE__*/React.createElement(_Practical_7_RPSButtons_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n    onButtonPressed: function (move, forcedResult) {\n      const randomNumber = Math.random();\n      let result;\n      if (randomNumber <= 1 / 3) result = 'Win';else if (randomNumber <= 2 / 3) result = 'Lose';else result = 'Draw';\n      setRecords([...records, {\n        result: forcedResult || result,\n        move: move\n      }]);\n    },\n    records: records\n  }), /*#__PURE__*/React.createElement(_Practical_7_RPSInput_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onAdd: function (move, result) {\n      console.log(move, result);\n      setRecords([...records, {\n        result: result,\n        move: move\n      }]);\n    }\n  }), /*#__PURE__*/React.createElement(_Practical_7_RPSRecords_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    records: records,\n    onClickRecord: function (index) {\n      records[index].deleted = true;\n      setRecords([...records]);\n    }\n  }));\n}\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render( /*#__PURE__*/React.createElement(RockPaperScissors, null));\n\n//# sourceURL=webpack:///./output/RockPaperScissors.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./output/RockPaperScissors.js");
/******/ 	
/******/ })()
;