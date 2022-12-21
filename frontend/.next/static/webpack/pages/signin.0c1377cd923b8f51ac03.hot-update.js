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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_RequestReset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/RequestReset */ "./components/RequestReset.js");
/* harmony import */ var _components_SignedIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SignedIn */ "./components/SignedIn.js");
/* harmony import */ var _components_SignIn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SignIn */ "./components/SignIn.js");
/* harmony import */ var _components_SignUp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SignUp */ "./components/SignUp.js");
/* harmony import */ var _components_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/User */ "./components/User.js");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products */ "./pages/products/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\signin.js",
    _s = $RefreshSig$();










var GridStyles = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.div.withConfig({
  displayName: "signin__GridStyles",
  componentId: "sc-1iz4eat-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));grid-gap:2rem;"]);
_c = GridStyles;
function SignInPage() {
  _s();

  var me = (0,_components_User__WEBPACK_IMPORTED_MODULE_7__.useUser)();
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {}, [me]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: me ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignedIn__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridStyles, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignIn__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignUp__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestReset__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, this)
  }, void 0, false) // <GridStyles>
  //   {me ? (
  //     <SignedIn />
  //   ) : (
  //     <>
  //       <SignIn />
  //       <SignUp />
  //       <RequestReset />
  //     </>
  //   )}
  // </GridStyles>
  ;
}

_s(SignInPage, "tSWBSd3oIpkWkNCRazV1wVxgyhM=", false, function () {
  return [_components_User__WEBPACK_IMPORTED_MODULE_7__.useUser];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2lnbmluLmpzIl0sIm5hbWVzIjpbIkdyaWRTdHlsZXMiLCJzdHlsZWQiLCJTaWduSW5QYWdlIiwibWUiLCJ1c2VVc2VyIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLDRGQUFoQjtLQUFNRCxVO0FBTVMsU0FBU0UsVUFBVCxHQUFzQjtBQUFBOztBQUNuQyxNQUFNQyxFQUFFLEdBQUdDLHlEQUFPLEVBQWxCO0FBQ0FDLGtEQUFTLENBQUMsWUFBTSxDQUFFLENBQVQsRUFBVyxDQUFDRixFQUFELENBQVgsQ0FBVDtBQUNBLHNCQUNFO0FBQUEsY0FDR0EsRUFBRSxnQkFDRCw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREMsZ0JBR0QsOERBQUMsVUFBRDtBQUFBLDhCQUNFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLDhEQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSixtQkFERixDQVlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF0QkY7QUF3QkQ7O0dBM0J1QkQsVTtVQUNYRSxxRDs7O01BRFdGLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjBjMTM3N2NkOTIzYjhmNTFhYzAzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZXF1ZXN0UmVzZXQgZnJvbSAnLi4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQnO1xyXG5pbXBvcnQgU2lnbmVkSW4gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduZWRJbic7XHJcbmltcG9ydCBTaWduSW4gZnJvbSAnLi4vY29tcG9uZW50cy9TaWduSW4nO1xyXG5pbXBvcnQgU2lnblVwIGZyb20gJy4uL2NvbXBvbmVudHMvU2lnblVwJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlcic7XHJcbmltcG9ydCBQcm9kdWN0c1BhZ2UgZnJvbSAnLi9wcm9kdWN0cyc7XHJcblxyXG5jb25zdCBHcmlkU3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xyXG4gIGdyaWQtZ2FwOiAycmVtO1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbkluUGFnZSgpIHtcclxuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFttZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bWUgPyAoXHJcbiAgICAgICAgPFNpZ25lZEluIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEdyaWRTdHlsZXM+XHJcbiAgICAgICAgICA8U2lnbkluIC8+XHJcbiAgICAgICAgICA8U2lnblVwIC8+XHJcbiAgICAgICAgICA8UmVxdWVzdFJlc2V0IC8+XHJcbiAgICAgICAgPC9HcmlkU3R5bGVzPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgICAvLyA8R3JpZFN0eWxlcz5cclxuICAgIC8vICAge21lID8gKFxyXG4gICAgLy8gICAgIDxTaWduZWRJbiAvPlxyXG4gICAgLy8gICApIDogKFxyXG4gICAgLy8gICAgIDw+XHJcbiAgICAvLyAgICAgICA8U2lnbkluIC8+XHJcbiAgICAvLyAgICAgICA8U2lnblVwIC8+XHJcbiAgICAvLyAgICAgICA8UmVxdWVzdFJlc2V0IC8+XHJcbiAgICAvLyAgICAgPC8+XHJcbiAgICAvLyAgICl9XHJcbiAgICAvLyA8L0dyaWRTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9