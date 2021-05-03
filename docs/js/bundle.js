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

/* global document */
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

/* global document */
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
/* global XMLHttpRequest */
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
/* harmony import */ var _TestJs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TestJs */ "./src/js/TestJs.js");
/* harmony import */ var _ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleLogIt */ "./src/js/ConsoleLogIt.js");
/* harmony import */ var _getJSON__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getJSON */ "./src/js/getJSON.js");
/* harmony import */ var _generateTableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateTableHead */ "./src/js/generateTableHead.js");
/* harmony import */ var _generateTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateTable */ "./src/js/generateTable.js");
/* global document, alert */





(0,_TestJs__WEBPACK_IMPORTED_MODULE_0__.default)();
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('', function (data) {
  console.log(data);
});
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities', function (err, records) {
  if (err !== null) {
    alert("Something went wrong: , ".concat(err));
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
(0,_ConsoleLogIt__WEBPACK_IMPORTED_MODULE_1__.default)('this worked in the bundle');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9Db25zb2xlTG9nSXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvVGVzdEpzLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2dlbmVyYXRlVGFibGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvZ2VuZXJhdGVUYWJsZUhlYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvZ2V0SlNPTi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbnNvbGVMb2dJdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwiVGVzdEpTIiwiZ2VuZXJhdGVUYWJsZSIsInRhYmxlIiwiZGF0YSIsImVsZW1lbnQiLCJyb3ciLCJpbnNlcnRSb3ciLCJrZXkiLCJjZWxsIiwiaW5zZXJ0Q2VsbCIsInRleHQiLCJkb2N1bWVudCIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJnZW5lcmF0ZVRhYmxlSGVhZCIsInRoZWFkIiwiY3JlYXRlVEhlYWQiLCJ0aCIsImNyZWF0ZUVsZW1lbnQiLCJnZXRKU09OIiwidXJsIiwiY2FsbGJhY2siLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZSIsInNlbmQiLCJlcnIiLCJyZWNvcmRzIiwiYWxlcnQiLCJxdWVyeVNlbGVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImRhdGFSZWNvcmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQzVDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDRmMsU0FBU0csTUFBVCxHQUFrQjtBQUMvQkYsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkQ7QUFDZSxTQUFTRSxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsSUFBOUIsRUFBb0M7QUFBQSw2Q0FDM0JBLElBRDJCO0FBQUE7O0FBQUE7QUFDakQsd0RBQTRCO0FBQUEsVUFBakJDLE9BQWlCO0FBQzFCLFVBQU1DLEdBQUcsR0FBR0gsS0FBSyxDQUFDSSxTQUFOLEVBQVo7QUFDQVIsYUFBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVo7O0FBQ0EsV0FBSyxJQUFNRyxHQUFYLElBQWtCSCxPQUFsQixFQUEyQjtBQUN6QixZQUFNSSxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksVUFBSixFQUFiO0FBQ0EsWUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0JSLE9BQU8sQ0FBQ0csR0FBRCxDQUEvQixDQUFiO0FBQ0FDLFlBQUksQ0FBQ0ssV0FBTCxDQUFpQkgsSUFBakI7QUFDRDtBQUNGO0FBVGdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVbEQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYRDtBQUNlLFNBQVNJLGlCQUFULENBQTJCWixLQUEzQixFQUFrQ0MsSUFBbEMsRUFBd0M7QUFDckQsTUFBTVksS0FBSyxHQUFHYixLQUFLLENBQUNjLFdBQU4sRUFBZDtBQUNBLE1BQU1YLEdBQUcsR0FBR1UsS0FBSyxDQUFDVCxTQUFOLEVBQVo7O0FBRnFELDZDQUduQ0gsSUFIbUM7QUFBQTs7QUFBQTtBQUdyRCx3REFBd0I7QUFBQSxVQUFiSSxHQUFhO0FBQ3RCLFVBQU1VLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQSxVQUFNUixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkwsR0FBeEIsQ0FBYjtBQUNBVSxRQUFFLENBQUNKLFdBQUgsQ0FBZUgsSUFBZjtBQUNBTCxTQUFHLENBQUNRLFdBQUosQ0FBZ0JJLEVBQWhCO0FBQ0Q7QUFSb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVN0RCxDOzs7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQ2UsU0FBU0UsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLFFBQXRCLEVBQWdDO0FBQzdDLE1BQU1DLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVMsS0FBVCxFQUFnQkosR0FBaEIsRUFBcUIsSUFBckI7QUFDQUUsS0FBRyxDQUFDRyxZQUFKLEdBQW1CLE1BQW5COztBQUNBSCxLQUFHLENBQUNJLE1BQUosR0FBYSxZQUFNO0FBQ2pCLFFBQU1DLE1BQU0sR0FBR0wsR0FBRyxDQUFDSyxNQUFuQjs7QUFDQSxRQUFJQSxNQUFNLEtBQUssR0FBZixFQUFvQjtBQUNsQk4sY0FBUSxDQUFDLElBQUQsRUFBT0MsR0FBRyxDQUFDTSxRQUFYLENBQVI7QUFDRCxLQUZELE1BRU87QUFDTFAsY0FBUSxDQUFDTSxNQUFELEVBQVNMLEdBQUcsQ0FBQ00sUUFBYixDQUFSO0FBQ0Q7QUFDRixHQVBEOztBQVFBTixLQUFHLENBQUNPLElBQUo7QUFDRCxDOzs7Ozs7VUNkRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTdCLGdEQUFNO0FBQ05tQixpREFBTyxDQUFDLEVBQUQsRUFBSyxVQUFVaEIsSUFBVixFQUFnQjtBQUMxQkwsU0FBTyxDQUFDQyxHQUFSLENBQVlJLElBQVo7QUFDRCxDQUZNLENBQVA7QUFJQWdCLGlEQUFPLENBQUMscUNBQUQsRUFDTCxVQUFVVyxHQUFWLEVBQWVDLE9BQWYsRUFBd0I7QUFDdEIsTUFBSUQsR0FBRyxLQUFLLElBQVosRUFBa0I7QUFDaEJFLFNBQUssbUNBQTRCRixHQUE1QixFQUFMO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsUUFBTTVCLEtBQUssR0FBR1MsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixPQUF2QixDQUFkO0FBQ0EsUUFBTTlCLElBQUksR0FBRytCLE1BQU0sQ0FBQ0MsSUFBUCxDQUFhSixPQUFPLENBQUM1QixJQUFSLENBQWEsQ0FBYixDQUFiLENBQWI7QUFDQSxRQUFNaUMsV0FBVyxHQUFHTCxPQUFPLENBQUM1QixJQUE1QjtBQUVBVywrREFBaUIsQ0FBQ1osS0FBRCxFQUFRQyxJQUFSLENBQWpCO0FBQ0FGLDJEQUFhLENBQUNDLEtBQUQsRUFBUWtDLFdBQVIsQ0FBYjtBQUNBO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDSztBQUNGLENBakJJLENBQVA7QUFrQkF4QyxzREFBWSxDQUFDLDJCQUFELENBQVosQyIsImZpbGUiOiJqcy9idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25zb2xlTG9nSXQobWVzc2FnZSkge1xuICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RKUygpIHtcbiAgY29uc29sZS5sb2coJ0xvYWRlZCcpO1xufVxuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XG4gIGZvciAoY29uc3QgZWxlbWVudCBvZiBkYXRhKSB7XG4gICAgY29uc3Qgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgY29uc29sZS5sb2coZWxlbWVudCk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gZWxlbWVudCkge1xuICAgICAgY29uc3QgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcbiAgICAgIGNlbGwuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgfVxuICB9XG59XG4iLCIvKiBnbG9iYWwgZG9jdW1lbnQgKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XG4gIGNvbnN0IHRoZWFkID0gdGFibGUuY3JlYXRlVEhlYWQoKTtcbiAgY29uc3Qgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7XG4gIGZvciAoY29uc3Qga2V5IG9mIGRhdGEpIHtcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGtleSk7XG4gICAgdGguYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgcm93LmFwcGVuZENoaWxkKHRoKTtcbiAgfVxufVxuIiwiLyogZ2xvYmFsIFhNTEh0dHBSZXF1ZXN0ICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRKU09OKHVybCwgY2FsbGJhY2spIHtcbiAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xuICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICB4aHIub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHN0YXR1cyA9IHhoci5zdGF0dXM7XG4gICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxsYmFjayhzdGF0dXMsIHhoci5yZXNwb25zZSk7XG4gICAgfVxuICB9O1xuICB4aHIuc2VuZCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiBnbG9iYWwgZG9jdW1lbnQsIGFsZXJ0ICovXG5cbmltcG9ydCBUZXN0SlMgZnJvbSAnLi9UZXN0SnMnO1xuaW1wb3J0IENvbnNvbGVMb2dJdCBmcm9tICcuL0NvbnNvbGVMb2dJdCc7XG5pbXBvcnQgZ2V0SlNPTiBmcm9tICcuL2dldEpTT04nO1xuaW1wb3J0IGdlbmVyYXRlVGFibGVIZWFkIGZyb20gJy4vZ2VuZXJhdGVUYWJsZUhlYWQnO1xuaW1wb3J0IGdlbmVyYXRlVGFibGUgZnJvbSAnLi9nZW5lcmF0ZVRhYmxlJztcblxuVGVzdEpTKCk7XG5nZXRKU09OKCcnLCBmdW5jdGlvbiAoZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbn0pO1xuXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXG4gIGZ1bmN0aW9uIChlcnIsIHJlY29yZHMpIHtcbiAgICBpZiAoZXJyICE9PSBudWxsKSB7XG4gICAgICBhbGVydChgU29tZXRoaW5nIHdlbnQgd3Jvbmc6ICwgJHtlcnJ9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGFibGUnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBPYmplY3Qua2V5cygocmVjb3Jkcy5kYXRhWzBdKSk7XG4gICAgICBjb25zdCBkYXRhUmVjb3JkcyA9IHJlY29yZHMuZGF0YTtcblxuICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xuICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgZGF0YVJlY29yZHMpO1xuICAgICAgLypcbiAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKHJlY29yZHMuZGF0YVswXSk7XG4gICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgcmVjb3Jkcy5kYXRhKTsgLy8gZ2VuZXJhdGUgdGhlIHRhYmxlIGZpcnN0XG4gICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpOyAvLyB0aGVuIHRoZSBoZWFkXG4gICAgICAqL1xuICAgIH1cbiAgfSk7XG5Db25zb2xlTG9nSXQoJ3RoaXMgd29ya2VkIGluIHRoZSBidW5kbGUnKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=