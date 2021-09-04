"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.tsx */ "./pages/header.tsx");
/* harmony import */ var _menu_tsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.tsx */ "./pages/menu.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./pages/footer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\nexttutorial\\nextjs-blog\\pages\\index.js";





function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("title", {
        children: "Next tutorial"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_menu_tsx__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_header_tsx__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: "subheader",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("p", {
          className: "description",
          children: ["thid website was created by using ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("code", {
            children: "next.js"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 45
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTQ4MDQ1NjQxMDU0MjE0OTkzYzkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ2UsU0FBU0ksSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBQSw4QkFDSSw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSSw4REFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNGO0FBQUcsbUJBQVMsRUFBQyxhQUFiO0FBQUEsd0VBQ29DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFjSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7S0FuQnVCQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlci50c3hcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnUudHN4XCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0IHR1dG9yaWFsPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4+XG4gICAgICAgICAgPE1lbnUvPlxuICAgICAgICAgIDxIZWFkZXIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViaGVhZGVyXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgdGhpZCB3ZWJzaXRlIHdhcyBjcmVhdGVkIGJ5IHVzaW5nIDxjb2RlPm5leHQuanM8L2NvZGU+XG4gICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICAgICAgPEZvb3Rlci8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSGVhZGVyIiwiTWVudSIsIkZvb3RlciIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9