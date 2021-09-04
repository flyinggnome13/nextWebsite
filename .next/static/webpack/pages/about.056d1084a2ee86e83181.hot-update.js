"use strict";
self["webpackHotUpdate_N_E"]("pages/about",{

/***/ "./pages/about.tsx":
/*!*************************!*\
  !*** ./pages/about.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ About; }
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./pages/menu.tsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ "./pages/footer.tsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\nexttutorial\\nextjs-blog\\pages\\about.tsx";



function About() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("main", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_menu__WEBPACK_IMPORTED_MODULE_0__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 8
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        children: " Hello Test"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 1
  }, this);
}
_c = About;

var _c;

$RefreshReg$(_c, "About");

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


/***/ }),

/***/ "./pages/footer.tsx":
/*!**************************!*\
  !*** ./pages/footer.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\nexttutorial\\nextjs-blog\\pages\\footer.tsx";


function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        children: ["Powered by", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "/vercel.svg",
          alt: "Vercel",
          className: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 5
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 5,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 5
    }, this)
  }, void 0, false);
}
_c = Footer;

var _c;

$RefreshReg$(_c, "Footer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWJvdXQuMDU2ZDEwODRhMmVlODZlODMxODEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFZSxTQUFTRSxLQUFULEdBQWlCO0FBQzlCLHNCQUNGO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRztBQUFBLDhCQUVJLDhEQUFDLDBDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsZUFNSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREU7QUFVRDtLQVh1QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSlQsU0FBU0QsTUFBVCxHQUFrQjtBQUM5QixzQkFDSTtBQUFBLDJCQUNIO0FBQUEsNkJBQ0k7QUFDSSxZQUFJLEVBQUcsd0dBRFg7QUFFSixjQUFNLEVBQUcsUUFGTDtBQUdKLFdBQUcsRUFBRyxxQkFIRjtBQUFBLGlDQU9BLEdBUEEsZUFTSjtBQUFLLGFBQUcsRUFBRyxhQUFYO0FBQ0EsYUFBRyxFQUFHLFFBRE47QUFFQSxtQkFBUyxFQUFHO0FBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREcsbUJBREo7QUFrQk87S0FuQmNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9vdGVyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9mb290ZXJcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWJvdXQoKSB7XHJcbiAgcmV0dXJuKFxyXG48ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICA8bWFpbj5cclxuXHJcbiAgICAgICA8TWVudS8+XHJcbiAgICAgICAgPHA+IEhlbGxvIFRlc3Q8L3A+XHJcbiAgICA8L21haW4+XHJcbiAgICA8Rm9vdGVyLz5cclxuPC9kaXY+XHJcbilcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgIHJldHVybihcclxuICAgICAgIDw+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWYgPSBcImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXHJcbiAgICB0YXJnZXQgPSBcIl9ibGFua1wiXHJcbiAgICByZWwgPSBcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgICAgICBQb3dlcmVkXHJcbiAgICBieVxyXG4gICAge1xyXG4gICAgICAgICcgJ1xyXG4gICAgfVxyXG4gICAgPGltZyBzcmMgPSBcIi92ZXJjZWwuc3ZnXCJcclxuICAgIGFsdCA9IFwiVmVyY2VsXCJcclxuICAgIGNsYXNzTmFtZSA9IFwibG9nb1wiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC8+XHJcbiAgICAgICAgKX1cclxuIl0sIm5hbWVzIjpbIk1lbnUiLCJGb290ZXIiLCJBYm91dCJdLCJzb3VyY2VSb290IjoiIn0=