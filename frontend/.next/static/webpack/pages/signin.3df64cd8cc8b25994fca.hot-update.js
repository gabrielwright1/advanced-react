self["webpackHotUpdate_N_E"]("pages/signin",{

/***/ "./pages/signin.js":
/*!*************************!*\
  !*** ./pages/signin.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignInPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SignIn */ "./components/SignIn.js");
/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignUp */ "./components/SignUp.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products */ "./pages/products/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\signin.js",
    _s = $RefreshSig$();








var GridStyles = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div.withConfig({
  displayName: "signin__GridStyles",
  componentId: "sc-1iz4eat-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:2rem;"]);
_c = GridStyles;
function SignInPage() {
  _s();

  var me = (0,_components_User__WEBPACK_IMPORTED_MODULE_5__.useUser)();

  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)(),
      query = _useRouter.query;

  if (!me) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridStyles, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignIn__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUp__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_products__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 10
  }, this);
}

_s(SignInPage, "fHKnObJU0lrkfAe6SRQURX75CxI=", false, function () {
  return [_components_User__WEBPACK_IMPORTED_MODULE_5__.useUser, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c2 = SignInPage;

var _c, _c2;

$RefreshReg$(_c, "GridStyles");
$RefreshReg$(_c2, "SignInPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIkdyaWRTdHlsZXMiLCJzdHlsZWQiLCJTaWduSW5QYWdlIiwibWUiLCJ1c2VVc2VyIiwidXNlUm91dGVyIiwicXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFoQjtLQUFNRCxVO0FBTVMsU0FBU0UsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxNQUFNQyxFQUFFLEdBQUdDLHlEQUFPLEVBQWxCOztBQURtQyxtQkFFakJDLHNEQUFTLEVBRlE7QUFBQSxNQUUzQkMsS0FGMkIsY0FFM0JBLEtBRjJCOztBQUduQyxNQUFJLENBQUNILEVBQUwsRUFBUztBQUNQLHdCQUNFLDhEQUFDLFVBQUQ7QUFBQSw4QkFDRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRSw4REFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFPRDs7QUFDRCxzQkFBTyw4REFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7R0FidUJELFU7VUFDWEUscUQsRUFDT0Msa0Q7OztNQUZJSCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi4zZGY2NGNkOGNjOGIyNTk5NGZjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFJlcXVlc3RSZXNldCBmcm9tICcuLi9jb21wb25lbnRzL1JlcXVlc3RSZXNldCc7XHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduSW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcic7XHJcbmltcG9ydCBQcm9kdWN0c1BhZ2UgZnJvbSAnLi9wcm9kdWN0cyc7XHJcblxyXG5jb25zdCBHcmlkU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluUGFnZSgpIHtcclxuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBpZiAoIW1lKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JpZFN0eWxlcz5cclxuICAgICAgICA8U2lnbkluIC8+XHJcbiAgICAgICAgPFNpZ25VcCAvPlxyXG4gICAgICAgIDxSZXF1ZXN0UmVzZXQgLz5cclxuICAgICAgPC9HcmlkU3R5bGVzPlxyXG4gICAgKTtcclxuICB9XHJcbiAgcmV0dXJuIDxQcm9kdWN0c1BhZ2UgLz47XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==