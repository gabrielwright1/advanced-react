self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\CartCount.js";




var Dot = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-0"
})(["background-color:var(--red);color:white;border-radius:50%;padding:0 0.5 rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);
_c = Dot;
var AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-1"
})(["position:relative;.count{display:block;position:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
_c2 = AnimationStyles;
function CartCount(_ref) {
  var count = _ref.count;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimationStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.TransitionGroup, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_4__.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
_c3 = CartCount;

var _c, _c2, _c3;

$RefreshReg$(_c, "Dot");
$RefreshReg$(_c2, "AnimationStyles");
$RefreshReg$(_c3, "CartCount");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiXSwibmFtZXMiOlsiRG90Iiwic3R5bGVkIiwiQW5pbWF0aW9uU3R5bGVzIiwiQ2FydENvdW50IiwiY291bnQiLCJlbnRlciIsImV4aXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLG9NQUFUO0tBQU1ELEc7QUFZTixJQUFNRSxlQUFlLEdBQUdELHNFQUFIO0FBQUE7QUFBQTtBQUFBLHFVQUFyQjtNQUFNQyxlO0FBMEJTLFNBQVNDLFNBQVQsT0FBOEI7QUFBQSxNQUFUQyxLQUFTLFFBQVRBLEtBQVM7QUFDM0Msc0JBQ0UsOERBQUMsZUFBRDtBQUFBLDJCQUNFLDhEQUFDLG1FQUFEO0FBQUEsNkJBQ0UsOERBQUMsaUVBQUQ7QUFDRSxxQkFBYSxNQURmO0FBRUUsaUJBQVMsRUFBQyxPQUZaO0FBR0Usa0JBQVUsRUFBQyxPQUhiO0FBS0UsZUFBTyxFQUFFO0FBQUVDLGVBQUssRUFBRSxHQUFUO0FBQWNDLGNBQUksRUFBRTtBQUFwQixTQUxYO0FBQUEsK0JBT0UsOERBQUMsR0FBRDtBQUFBLG9CQUFNRjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRixTQUlPQSxLQUpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7TUFoQnVCRCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzE1N2MwZGE5ODRiZmMwMzdmNmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ1NTVHJhbnNpdGlvbiwgVHJhbnNpdGlvbkdyb3VwIH0gZnJvbSAncmVhY3QtdHJhbnNpdGlvbi1ncm91cCc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyB1c2VDYXJ0IH0gZnJvbSAnLi4vbGliL2NhcnRTdGF0ZSc7XHJcblxyXG5jb25zdCBEb3QgPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAwIDAuNSByZW07XHJcbiAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgbWluLXdpZHRoOiAzcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xyXG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XHJcbmA7XHJcblxyXG5jb25zdCBBbmltYXRpb25TdHlsZXMgPSBzdHlsZWQuc3BhbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLmNvdW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHM7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC8qIG5ldyBlbGVtZW50IGVudGVycyAqL1xyXG4gIC5jb3VudC1lbnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcbiAgfVxyXG4gIC5jb3VudC1lbnRlci1hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xyXG4gIH1cclxuICAvKiBvbGQgZWxlbWVudCBsZWF2ZXMgKi9cclxuICAuY291bnQtZXhpdCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMCk7XHJcbiAgfVxyXG4gIC5jb3VudC1leGl0LWFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDQpIHJvdGF0ZVgoMC41dHVybik7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydENvdW50KHsgY291bnQgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QW5pbWF0aW9uU3R5bGVzPlxyXG4gICAgICA8VHJhbnNpdGlvbkdyb3VwPlxyXG4gICAgICAgIDxDU1NUcmFuc2l0aW9uXHJcbiAgICAgICAgICB1bm1vdW50T25FeGl0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJjb3VudFwiXHJcbiAgICAgICAgICBjbGFzc05hbWVzPVwiY291bnRcIlxyXG4gICAgICAgICAga2V5PXtjb3VudH1cclxuICAgICAgICAgIHRpbWVvdXQ9e3sgZW50ZXI6IDQwMCwgZXhpdDogNDAwIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPERvdD57Y291bnR9PC9Eb3Q+XHJcbiAgICAgICAgPC9DU1NUcmFuc2l0aW9uPlxyXG4gICAgICA8L1RyYW5zaXRpb25Hcm91cD5cclxuICAgIDwvQW5pbWF0aW9uU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==