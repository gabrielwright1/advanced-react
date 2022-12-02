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

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen: cartOpen,
      setCartOpen: setCartOpen
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhcnRTdGF0ZS5qcyJdLCJuYW1lcyI6WyJMb2NhbFN0YXRlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJMb2NhbFN0YXRlUHJvdmlkZXIiLCJQcm92aWRlciIsIkNhcnRTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNhcnRPcGVuIiwic2V0Q2FydE9wZW4iLCJ0b2dnbGVDYXJ0IiwiY2xvc2VDYXJ0Iiwib3BlbkNhcnQiLCJ1c2VDYXJ0IiwiYWxsIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsaUJBQWlCLGdCQUFHQyxvREFBYSxFQUF2QztBQUNBLElBQU1DLGtCQUFrQixHQUFHRixpQkFBaUIsQ0FBQ0csUUFBN0M7O0FBRUEsU0FBU0MsaUJBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQ3ZDO0FBQ0Y7QUFDQTtBQUh5QyxrQkFLUEMsK0NBQVEsQ0FBQyxLQUFELENBTEQ7QUFBQSxNQUtoQ0MsUUFMZ0M7QUFBQSxNQUt0QkMsV0FMc0I7O0FBTXZDLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEJELGVBQVcsQ0FBQyxDQUFDRCxRQUFGLENBQVg7QUFDRDs7QUFDRCxXQUFTRyxTQUFULEdBQXFCO0FBQ25CRixlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7O0FBQ0QsV0FBU0csUUFBVCxHQUFvQjtBQUNsQkgsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELHNCQUNFLDhEQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRTtBQUFFRCxjQUFRLEVBQVJBLFFBQUY7QUFBWUMsaUJBQVcsRUFBWEE7QUFBWixLQUEzQjtBQUFBLGNBQ0dIO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQyxDQUVEOzs7R0F2QlNELGlCOztLQUFBQSxpQjs7QUF3QlQsU0FBU1EsT0FBVCxHQUFtQjtBQUFBOztBQUNqQjtBQUNBLE1BQU1DLEdBQUcsR0FBR0MsaURBQVUsQ0FBQ2QsaUJBQUQsQ0FBdEI7QUFDQSxTQUFPYSxHQUFQO0FBQ0Q7O0lBSlFELE87O0FBTVQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5mODlhY2U1YTAwNmQxNzI5ZDcyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2NhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuY29uc3QgTG9jYWxTdGF0ZVByb3ZpZGVyID0gTG9jYWxTdGF0ZUNvbnRleHQuUHJvdmlkZXI7XHJcblxyXG5mdW5jdGlvbiBDYXJ0U3RhdGVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICAvKiBUaGlzIGlzIG91ciBvd24gY3VzdG9tIHByb3ZpZGVyLCB3ZSB3aWxsIHN0b3JlIChzdGF0ZSkgXHJcbiAgYW5kIGZ1bmN0aW9uYWxpdHkgKHVwZGF0ZXJzKSBpbiBoZXJlIGFuZCBhbnlvbmUgY2FuIGFjY2VzcyBcclxuICBpdCB2aWEgdGhlIGNvbnN1bWVyICovXHJcblxyXG4gIGNvbnN0IFtjYXJ0T3Blbiwgc2V0Q2FydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbighY2FydE9wZW4pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5DYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvY2FsU3RhdGVQcm92aWRlciB2YWx1ZT17eyBjYXJ0T3Blbiwgc2V0Q2FydE9wZW4gfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIG1ha2UgYSBjdXN0b20gaG9vayBmb3IgYWNjZXNpbmcgdGhlIGNhcnQgbG9jYWwgc3RhdGVcclxuZnVuY3Rpb24gdXNlQ2FydCgpIHtcclxuICAvLyB3ZSB1c2UgYSBjb25zdW1lciBoZXJlIHRvIGFjY2VzcyB0aGUgbG9jYWwgc3RhdGVcclxuICBjb25zdCBhbGwgPSB1c2VDb250ZXh0KExvY2FsU3RhdGVDb250ZXh0KTtcclxuICByZXR1cm4gYWxsO1xyXG59XHJcblxyXG5leHBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciwgdXNlQ2FydCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9