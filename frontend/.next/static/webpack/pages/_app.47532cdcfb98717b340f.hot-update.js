self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function calcTotalPrice(cart) {
  return cart.reduce(function (tally, cartItem) {
    // products can be deleted but they could still be in your cart
    if (!cartItem.product) return tally;
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2NhbGNUb3RhbFByaWNlLmpzIl0sIm5hbWVzIjpbImNhbGNUb3RhbFByaWNlIiwiY2FydCIsInJlZHVjZSIsInRhbGx5IiwiY2FydEl0ZW0iLCJwcm9kdWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLGNBQVQsQ0FBd0JDLElBQXhCLEVBQThCO0FBQzNDLFNBQU9BLElBQUksQ0FBQ0MsTUFBTCxDQUFZLFVBQUNDLEtBQUQsRUFBUUMsUUFBUixFQUFxQjtBQUN0QztBQUNBLFFBQUksQ0FBQ0EsUUFBUSxDQUFDQyxPQUFkLEVBQXVCLE9BQU9GLEtBQVA7QUFDeEIsR0FITSxDQUFQO0FBSUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC40NzUzMmNkY2ZiOTg3MTdiMzQwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY1RvdGFsUHJpY2UoY2FydCkge1xyXG4gIHJldHVybiBjYXJ0LnJlZHVjZSgodGFsbHksIGNhcnRJdGVtKSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0cyBjYW4gYmUgZGVsZXRlZCBidXQgdGhleSBjb3VsZCBzdGlsbCBiZSBpbiB5b3VyIGNhcnRcclxuICAgIGlmICghY2FydEl0ZW0ucHJvZHVjdCkgcmV0dXJuIHRhbGx5O1xyXG4gIH0pO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=