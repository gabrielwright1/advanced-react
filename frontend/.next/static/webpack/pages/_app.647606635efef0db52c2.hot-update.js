self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Cart.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CartItemStyles = styled.li(_templateObject());

function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    children: cartItem.id
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 10
  }, this);
}

_c = CartItem;
function Cart() {
  _s();

  var _this = this;

  var me = (0,_User__WEBPACK_IMPORTED_MODULE_4__.useUser)();
  if (!me) return null;
  console.log(me);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__.default, {
    open: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(function (cartItem) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
          cartItem: cartItem
        }, cartItem.id, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

_s(Cart, "Z98rfMCuMoVDW8LRyFv7Prn3FZ8=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_4__.useUser];
});

_c2 = Cart;

var _c, _c2;

$RefreshReg$(_c, "CartItem");
$RefreshReg$(_c2, "Cart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwibGkiLCJDYXJ0SXRlbSIsImNhcnRJdGVtIiwiaWQiLCJDYXJ0IiwibWUiLCJ1c2VVc2VyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjYXJ0IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLE1BQU0sQ0FBQ0MsRUFBVixtQkFBcEI7O0FBRUEsU0FBU0MsUUFBVCxPQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM5QixzQkFBTztBQUFBLGNBQUtBLFFBQVEsQ0FBQ0M7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7S0FGUUYsUTtBQUlNLFNBQVNHLElBQVQsR0FBZ0I7QUFBQTs7QUFBQTs7QUFDN0IsTUFBTUMsRUFBRSxHQUFHQyw4Q0FBTyxFQUFsQjtBQUNBLE1BQUksQ0FBQ0QsRUFBTCxFQUFTLE9BQU8sSUFBUDtBQUNURSxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsRUFBWjtBQUNBLHNCQUNFLDhEQUFDLHVEQUFEO0FBQVksUUFBSSxNQUFoQjtBQUFBLDRCQUNFO0FBQUEsNkJBQ0UsOERBQUMsb0RBQUQ7QUFBQSxtQkFBVUEsRUFBRSxDQUFDSSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFO0FBQUEsZ0JBQ0dKLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRQyxHQUFSLENBQVksVUFBQ1QsUUFBRDtBQUFBLDRCQUNYLDhEQUFDLFFBQUQ7QUFBNEIsa0JBQVEsRUFBRUE7QUFBdEMsV0FBZUEsUUFBUSxDQUFDQyxFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQWhCdUJDLEk7VUFDWEUsMEM7OztNQURXRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjQ3NjA2NjM1ZWZlZjBkYjUyYzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJ0U3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcnRTdHlsZXMnO1xyXG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuL3N0eWxlcy9TdXByZW1lJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5jb25zdCBDYXJ0SXRlbVN0eWxlcyA9IHN0eWxlZC5saWBgO1xyXG5cclxuZnVuY3Rpb24gQ2FydEl0ZW0oeyBjYXJ0SXRlbSB9KSB7XHJcbiAgcmV0dXJuIDxsaT57Y2FydEl0ZW0uaWR9PC9saT47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgaWYgKCFtZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc29sZS5sb2cobWUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0eWxlcyBvcGVuPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxTdXByZW1lPnttZS5uYW1lfSdzIENhcnQ8L1N1cHJlbWU+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21lLmNhcnQubWFwKChjYXJ0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtIGtleT17Y2FydEl0ZW0uaWR9IGNhcnRJdGVtPXtjYXJ0SXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQ2FydFN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=