/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/ConsoleLogIt.js":
/*!********************************!*\
  !*** ./src/js/ConsoleLogIt.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConsoleLogIt)
/* harmony export */ });
function ConsoleLogIt(message) {
  console.log(message);
}

/***/ }),

/***/ "./src/js/TestJs.js":
/*!**************************!*\
  !*** ./src/js/TestJs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestJS)
/* harmony export */ });
function TestJS() {
  console.log('Loaded');
}

/***/ }),

/***/ "./src/js/generateTable.js":
/*!*********************************!*\
  !*** ./src/js/generateTable.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTable)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function generateTable(table, data) {
  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var element = _step.value;
      var row = table.insertRow();
      console.log(element);

      for (var key in element) {
        var cell = row.insertCell();
        var text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/js/generateTableHead.js":
/*!*************************************!*\
  !*** ./src/js/generateTableHead.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ generateTableHead)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function generateTableHead(table, data) {
  var thead = table.createTHead();
  var row = thead.insertRow();

  var _iterator = _createForOfIteratorHelper(data),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      var th = document.createElement('th');
      var text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

/***/ }),

/***/ "./src/js/getJSON.js":
/*!***************************!*\
  !*** ./src/js/getJSON.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getJSON)
/* harmony export */ });
function getJSON(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';

  xhr.onload = function () {
    var status = xhr.status;

    if (status === 200) {
      callback(null, xhr.response);
    } else {
      callback(status, xhr.response);
    }
  };

  xhr.send();
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TestJs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs.js */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt.js */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _generateTableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateTableHead */ "./src/js/generateTableHead.js");
/* harmony import */ var _generateTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateTable */ "./src/js/generateTable.js");





(0,_TestJs_js__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: ".concat(err));
  } else {
    var table = document.querySelector('table');
    var data = Object.keys(records.data[0]);
    var dataRecords = records.data;
    (0,_generateTableHead__WEBPACK_IMPORTED_MODULE_3__.default)(table, data);
    (0,_generateTable__WEBPACK_IMPORTED_MODULE_4__.default)(table, dataRecords);
    /*
          let data = Object.keys(records.data[0]);
          generateTable(table, records.data); // generate the table first
          generateTableHead(table, data); // then the head
           */
  }
});
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9Db25zb2xlTG9nSXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvVGVzdEpzLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2dlbmVyYXRlVGFibGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvZ2VuZXJhdGVUYWJsZUhlYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvZ2V0SlNPTi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGVMb2dJdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiVGVzdEpTIiwiZ2VuZXJhdGVUYWJsZSIsInRhYmxlIiwiZGF0YSIsImVsZW1lbnQiLCJyb3ciLCJpbnNlcnRSb3ciLCJrZXkiLCJjZWxsIiwiaW5zZXJ0Q2VsbCIsInRleHQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsInRoZWFkIiwiY3JlYXRlVEhlYWQiLCJ0aCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsInNlbmQiLCJlcnIiLCJyZWNvcmRzIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFSZWNvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDRmMsU0FBU0csTUFBVCxHQUFrQjtBQUMvQkYsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmMsU0FBU0UsYUFBVCxDQUF1QkMsS0FBdkIsRUFBOEJDLElBQTlCLEVBQW9DO0FBQUEsNkNBQzNCQSxJQUQyQjtBQUFBOztBQUFBO0FBQ2pELHdEQUE0QjtBQUFBLFVBQWpCQyxPQUFpQjtBQUMxQixVQUFNQyxHQUFHLEdBQUdILEtBQUssQ0FBQ0ksU0FBTixFQUFaO0FBQ0FSLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSyxPQUFaOztBQUNBLFdBQUssSUFBTUcsR0FBWCxJQUFrQkgsT0FBbEIsRUFBMkI7QUFDekIsWUFBTUksSUFBSSxHQUFHSCxHQUFHLENBQUNJLFVBQUosRUFBYjtBQUNBLFlBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCUixPQUFPLENBQUNHLEdBQUQsQ0FBL0IsQ0FBYjtBQUNBQyxZQUFJLENBQUNLLFdBQUwsQ0FBaUJILElBQWpCO0FBQ0Q7QUFDRjtBQVRnRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVWxELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVmMsU0FBU0ksaUJBQVQsQ0FBMkJaLEtBQTNCLEVBQWtDQyxJQUFsQyxFQUF3QztBQUNyRCxNQUFNWSxLQUFLLEdBQUdiLEtBQUssQ0FBQ2MsV0FBTixFQUFkO0FBQ0EsTUFBTVgsR0FBRyxHQUFHVSxLQUFLLENBQUNULFNBQU4sRUFBWjs7QUFGcUQsNkNBR25DSCxJQUhtQztBQUFBOztBQUFBO0FBR3JELHdEQUF3QjtBQUFBLFVBQWJJLEdBQWE7QUFDdEIsVUFBTVUsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBLFVBQU1SLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCTCxHQUF4QixDQUFiO0FBQ0FVLFFBQUUsQ0FBQ0osV0FBSCxDQUFlSCxJQUFmO0FBQ0FMLFNBQUcsQ0FBQ1EsV0FBSixDQUFnQkksRUFBaEI7QUFDRDtBQVJvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU3RELEM7Ozs7Ozs7Ozs7Ozs7O0FDVGMsU0FBU0UsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLFFBQXRCLEVBQWdDO0FBQzdDLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVMsS0FBVCxFQUFnQkosR0FBaEIsRUFBcUIsSUFBckI7QUFDQUUsS0FBRyxDQUFDRyxZQUFKLEdBQW1CLE1BQW5COztBQUNBSCxLQUFHLENBQUNJLE1BQUosR0FBYSxZQUFZO0FBQ3ZCLFFBQVFDLE1BQVIsR0FBbUJMLEdBQW5CLENBQVFLLE1BQVI7O0FBQ0EsUUFBSUEsTUFBTSxLQUFLLEdBQWYsRUFBb0I7QUFDbEJOLGNBQVEsQ0FBQyxJQUFELEVBQU9DLEdBQUcsQ0FBQ00sUUFBWCxDQUFSO0FBQ0QsS0FGRCxNQUVPO0FBQ0xQLGNBQVEsQ0FBQ00sTUFBRCxFQUFTTCxHQUFHLENBQUNNLFFBQWIsQ0FBUjtBQUNEO0FBQ0YsR0FQRDs7QUFRQU4sS0FBRyxDQUFDTyxJQUFKO0FBQ0QsQzs7Ozs7O1VDYkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBN0IsbURBQU07QUFDTm1CLGlEQUFPLENBQUMsRUFBRCxFQUFLLFVBQUNoQixJQUFELEVBQVU7QUFDcEJMLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaO0FBQ0QsQ0FGTSxDQUFQO0FBSUFnQixpREFBTyxDQUFDLHFDQUFELEVBQ0wsVUFBQ1csR0FBRCxFQUFNQyxPQUFOLEVBQWtCO0FBQ2hCLE1BQUlELEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2hCRSxTQUFLLGlDQUEwQkYsR0FBMUIsRUFBTDtBQUNELEdBRkQsTUFFTztBQUNMLFFBQU01QixLQUFLLEdBQUdTLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZDtBQUNBLFFBQU05QixJQUFJLEdBQUcrQixNQUFNLENBQUNDLElBQVAsQ0FBYUosT0FBTyxDQUFDNUIsSUFBUixDQUFhLENBQWIsQ0FBYixDQUFiO0FBQ0EsUUFBTWlDLFdBQVcsR0FBR0wsT0FBTyxDQUFDNUIsSUFBNUI7QUFFQVcsK0RBQWlCLENBQUNaLEtBQUQsRUFBUUMsSUFBUixDQUFqQjtBQUNBRiwyREFBYSxDQUFDQyxLQUFELEVBQVFrQyxXQUFSLENBQWI7QUFDQTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0s7QUFDRixDQWpCSSxDQUFQO0FBa0JBeEMseURBQVksQ0FBQywyQkFBRCxDQUFaLEMiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0SlMoKSB7XG4gIGNvbnNvbGUubG9nKCdMb2FkZWQnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGUodGFibGUsIGRhdGEpIHtcbiAgZm9yIChjb25zdCBlbGVtZW50IG9mIGRhdGEpIHtcbiAgICBjb25zdCByb3cgPSB0YWJsZS5pbnNlcnRSb3coKTtcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBlbGVtZW50KSB7XG4gICAgICBjb25zdCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xuICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XG4gIGNvbnN0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XG4gIGZvciAoY29uc3Qga2V5IG9mIGRhdGEpIHtcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XG4gICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICB4aHIub3BlbignR0VUJywgdXJsLCB0cnVlKTtcbiAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCB7IHN0YXR1cyB9ID0geGhyO1xuICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xuICAgICAgY2FsbGJhY2sobnVsbCwgeGhyLnJlc3BvbnNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soc3RhdHVzLCB4aHIucmVzcG9uc2UpO1xuICAgIH1cbiAgfTtcbiAgeGhyLnNlbmQoKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRlc3RKUyBmcm9tICcuL1Rlc3RKcy5qcyc7XG5pbXBvcnQgQ29uc29sZUxvZ0l0IGZyb20gJy4vQ29uc29sZUxvZ0l0LmpzJztcbmltcG9ydCBnZXRKU09OIGZyb20gJy4vZ2V0SlNPTic7XG5pbXBvcnQgZ2VuZXJhdGVUYWJsZUhlYWQgZnJvbSAnLi9nZW5lcmF0ZVRhYmxlSGVhZCc7XG5pbXBvcnQgZ2VuZXJhdGVUYWJsZSBmcm9tICcuL2dlbmVyYXRlVGFibGUnO1xuXG5UZXN0SlMoKTtcbmdldEpTT04oJycsIChkYXRhKSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhdGEpO1xufSk7XG5cbmdldEpTT04oJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdjEvY2l0aWVzJyxcbiAgKGVyciwgcmVjb3JkcykgPT4ge1xuICAgIGlmIChlcnIgIT09IG51bGwpIHtcbiAgICAgIGFsZXJ0KGBTb21ldGhpbmcgd2VudCB3cm9uZzogJHtlcnJ9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XG4gICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcblxuICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xuICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xuICAgICAgLypcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMocmVjb3Jkcy5kYXRhWzBdKTtcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGUodGFibGUsIHJlY29yZHMuZGF0YSk7IC8vIGdlbmVyYXRlIHRoZSB0YWJsZSBmaXJzdFxuICAgICAgICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpOyAvLyB0aGVuIHRoZSBoZWFkXG4gICAgICAgICAgICAgKi9cbiAgICB9XG4gIH0pO1xuQ29uc29sZUxvZ0l0KCd0aGlzIHdvcmtlZCBpbiB0aGUgYnVuZGxlJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9