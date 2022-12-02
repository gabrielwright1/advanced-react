self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\lib\\cartState.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
var LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider(_ref) {
  _s();

  var children = _ref.children;

  /* This is our own custom provider, we will store (state) 
  and functionality (updaters) in here and anyone can access 
  it via the consumer */
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      cartOpen = _useState[0],
      setCartOpen = _useState[1];

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen: cartOpen
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
} // make a custom hook for accesing the cart local state


_s(CartStateProvider, "xe1WncxGrJWPKk54fyWehQszVXg=");

_c = CartStateProvider;

function useCart() {
  _s2();

  // we use a consumer here to access the local state
  var all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
}

_s2(useCart, "k0r6hllA0ZVFTbsvyQUS1AVLOSY=");



var _c;

$RefreshReg$(_c, "CartStateProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhcnRTdGF0ZS5qcyJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkNhcnRTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNhcnRPcGVuIiwic2V0Q2FydE9wZW4iLCJ1c2VDYXJ0IiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsaUJBQWlCLGdCQUFHQyxvREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixHQUFHRixpQkFBaUIsQ0FBQ0csUUFBN0M7O0FBRUEsU0FBU0MsaUJBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ3ZDO0FBQ0Y7QUFDQTtBQUh5QyxrQkFLUEMsK0NBQVEsQ0FBQyxLQUFELENBTEQ7QUFBQSxNQUtoQ0MsUUFMZ0M7QUFBQSxNQUt0QkMsV0FMc0I7O0FBT3ZDLHNCQUNFLDhEQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQVJBO0FBQUYsS0FBM0I7QUFBQSxjQUEwQ0Y7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0QsQyxDQUVEOzs7R0FaU0QsaUI7O0tBQUFBLGlCOztBQWFULFNBQVNLLE9BQVQsR0FBbUI7QUFBQTs7QUFDakI7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLGlEQUFVLENBQUNYLGlCQUFELENBQXRCO0FBQ0EsU0FBT1UsR0FBUDtBQUNEOztJQUpRRCxPOztBQU1UIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDVhZWFiMzJhOWI2NzFiNWY3MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9jYWxTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcbmNvbnN0IExvY2FsU3RhdGVQcm92aWRlciA9IExvY2FsU3RhdGVDb250ZXh0LlByb3ZpZGVyO1xyXG5cclxuZnVuY3Rpb24gQ2FydFN0YXRlUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgLyogVGhpcyBpcyBvdXIgb3duIGN1c3RvbSBwcm92aWRlciwgd2Ugd2lsbCBzdG9yZSAoc3RhdGUpIFxyXG4gIGFuZCBmdW5jdGlvbmFsaXR5ICh1cGRhdGVycykgaW4gaGVyZSBhbmQgYW55b25lIGNhbiBhY2Nlc3MgXHJcbiAgaXQgdmlhIHRoZSBjb25zdW1lciAqL1xyXG5cclxuICBjb25zdCBbY2FydE9wZW4sIHNldENhcnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMb2NhbFN0YXRlUHJvdmlkZXIgdmFsdWU9e3sgY2FydE9wZW4gfX0+e2NoaWxkcmVufTwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIG1ha2UgYSBjdXN0b20gaG9vayBmb3IgYWNjZXNpbmcgdGhlIGNhcnQgbG9jYWwgc3RhdGVcclxuZnVuY3Rpb24gdXNlQ2FydCgpIHtcclxuICAvLyB3ZSB1c2UgYSBjb25zdW1lciBoZXJlIHRvIGFjY2VzcyB0aGUgbG9jYWwgc3RhdGVcclxuICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcclxuICByZXR1cm4gYWxsO1xyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciwgdXNlQ2FydCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9