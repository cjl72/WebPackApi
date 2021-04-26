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
    console.log("Loaded");
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
function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        console.log(element);
        let key;
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
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
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
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
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        const status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

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
(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)("", function (data) {
    console.log(data);
});

(0,_getJSON__WEBPACK_IMPORTED_MODULE_2__.default)('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;

            (0,_generateTableHead__WEBPACK_IMPORTED_MODULE_3__.default)(table, data);
            (0,_generateTable__WEBPACK_IMPORTED_MODULE_4__.default)(table, dataRecords);
            /*
            let data = Object.keys(records.data[0]);
            generateTable(table, records.data); // generate the table first
            generateTableHead(table, data); // then the head
             */
        }

    });
(0,_ConsoleLogIt_js__WEBPACK_IMPORTED_MODULE_1__.default)("this worked in the bundle");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC8uL3NyYy9qcy9Db25zb2xlTG9nSXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvVGVzdEpzLmpzIiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2dlbmVyYXRlVGFibGUuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvZ2VuZXJhdGVUYWJsZUhlYWQuanMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3QvLi9zcmMvanMvZ2V0SlNPTi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja2FwaXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrYXBpcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2thcGlwcm9qZWN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDWGU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNUZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDWTtBQUNiO0FBQ29CO0FBQ1I7O0FBRTVDLG1EQUFNO0FBQ04saURBQU87QUFDUDtBQUNBLENBQUM7O0FBRUQsaURBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBLFlBQVksMkRBQWlCO0FBQzdCLFlBQVksdURBQWE7QUFDekI7QUFDQTtBQUNBLCtDQUErQztBQUMvQywyQ0FBMkM7QUFDM0M7QUFDQTs7QUFFQSxLQUFLO0FBQ0wseURBQVksOEIiLCJmaWxlIjoianMvYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29uc29sZUxvZ0l0KG1lc3NhZ2UpIHtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGVzdEpTKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJMb2FkZWRcIik7XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhKSB7XHJcbiAgICBmb3IgKGxldCBlbGVtZW50IG9mIGRhdGEpIHtcclxuICAgICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZWxlbWVudCk7XHJcbiAgICAgICAgbGV0IGtleTtcclxuICAgICAgICBmb3IgKGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGxldCBjZWxsID0gcm93Lmluc2VydENlbGwoKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50W2tleV0pO1xyXG4gICAgICAgICAgICBjZWxsLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKSB7XHJcbiAgICBsZXQgdGhlYWQgPSB0YWJsZS5jcmVhdGVUSGVhZCgpO1xyXG4gICAgbGV0IHJvdyA9IHRoZWFkLmluc2VydFJvdygpO1xyXG4gICAgZm9yIChsZXQga2V5IG9mIGRhdGEpIHtcclxuICAgICAgICBsZXQgdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XHJcbiAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShrZXkpO1xyXG4gICAgICAgIHRoLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIHJvdy5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCAgZnVuY3Rpb24gZ2V0SlNPTih1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwsIHRydWUpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zdCBzdGF0dXMgPSB4aHIuc3RhdHVzO1xyXG4gICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCB4aHIucmVzcG9uc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHN0YXR1cywgeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgeGhyLnNlbmQoKTtcclxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUZXN0SlMgZnJvbSBcIi4vVGVzdEpzLmpzXCI7XHJcbmltcG9ydCBDb25zb2xlTG9nSXQgZnJvbSBcIi4vQ29uc29sZUxvZ0l0LmpzXCI7XHJcbmltcG9ydCBnZXRKU09OIGZyb20gXCIuL2dldEpTT05cIjtcclxuaW1wb3J0IGdlbmVyYXRlVGFibGVIZWFkIGZyb20gXCIuL2dlbmVyYXRlVGFibGVIZWFkXCI7XHJcbmltcG9ydCBnZW5lcmF0ZVRhYmxlIGZyb20gXCIuL2dlbmVyYXRlVGFibGVcIjtcclxuXHJcblRlc3RKUygpO1xyXG5nZXRKU09OKFwiXCIsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcblxyXG5nZXRKU09OKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3YxL2NpdGllcycsXHJcbiAgICBmdW5jdGlvbihlcnIsIHJlY29yZHMpIHtcclxuICAgICAgICBpZiAoZXJyICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdTb21ldGhpbmcgd2VudCB3cm9uZzogJyArIGVycik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRhYmxlXCIpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IE9iamVjdC5rZXlzKChyZWNvcmRzLmRhdGFbMF0pKTtcclxuICAgICAgICAgICAgbGV0IGRhdGFSZWNvcmRzID0gcmVjb3Jkcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgZ2VuZXJhdGVUYWJsZUhlYWQodGFibGUsIGRhdGEpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZVRhYmxlKHRhYmxlLCBkYXRhUmVjb3Jkcyk7XHJcbiAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gT2JqZWN0LmtleXMocmVjb3Jkcy5kYXRhWzBdKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVUYWJsZSh0YWJsZSwgcmVjb3Jkcy5kYXRhKTsgLy8gZ2VuZXJhdGUgdGhlIHRhYmxlIGZpcnN0XHJcbiAgICAgICAgICAgIGdlbmVyYXRlVGFibGVIZWFkKHRhYmxlLCBkYXRhKTsgLy8gdGhlbiB0aGUgaGVhZFxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcbkNvbnNvbGVMb2dJdChcInRoaXMgd29ya2VkIGluIHRoZSBidW5kbGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==