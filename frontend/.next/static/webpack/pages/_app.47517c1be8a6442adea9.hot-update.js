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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Cart.js",
    _s = $RefreshSig$();








var CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);
_c = CartItemStyles;

function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  var product = cartItem.product;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)(product.price * cartItem.quantity), " -", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)(product.price)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

_c2 = CartItem;
function Cart() {
  _s();

  var _this = this;

  var me = (0,_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();

  var _useCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart)(),
      cartOpen = _useCart.cartOpen,
      closeCart = _useCart.closeCart;

  if (!me) return null;
  console.log(me);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      type: "button",
      onClick: closeCart,
      children: "\xD7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(function (cartItem) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
          cartItem: cartItem
        }, cartItem.id, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)((0,_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_1__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(Cart, "T8IrobZcZl8P+kAvSYAnS0OsnCo=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_6__.useUser, _lib_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart];
});

_c3 = Cart;

var _c, _c2, _c3;

$RefreshReg$(_c, "CartItemStyles");
$RefreshReg$(_c2, "CartItem");
$RefreshReg$(_c3, "Cart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwiQ2FydEl0ZW0iLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsInF1YW50aXR5IiwiQ2FydCIsIm1lIiwidXNlVXNlciIsInVzZUNhcnQiLCJjYXJ0T3BlbiIsImNsb3NlQ2FydCIsImNvbnNvbGUiLCJsb2ciLCJjYXJ0IiwibWFwIiwiaWQiLCJjYWxjVG90YWxQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxvRUFBSDtBQUFBO0FBQUE7QUFBQSx1SkFBcEI7S0FBTUQsYzs7QUFjTixTQUFTRSxRQUFULE9BQWdDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQUEsTUFDdEJDLE9BRHNCLEdBQ1ZELFFBRFUsQ0FDdEJDLE9BRHNCO0FBRTlCLHNCQUNFLDhEQUFDLGNBQUQ7QUFBQSw0QkFDRTtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjNCO0FBR0UsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFDR0MseURBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFSLEdBQWdCUCxRQUFRLENBQUNRLFFBQTFCLENBRGQscUJBRUU7QUFBQSxxQkFDR1IsUUFBUSxDQUFDUSxRQURaLFlBQytCRix5REFBVyxDQUFDTCxPQUFPLENBQUNNLEtBQVQsQ0FEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztNQXBCUVIsUTtBQXNCTSxTQUFTVSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLEVBQUUsR0FBR0MsOENBQU8sRUFBbEI7O0FBRDZCLGlCQUVHQyx1REFBTyxFQUZWO0FBQUEsTUFFckJDLFFBRnFCLFlBRXJCQSxRQUZxQjtBQUFBLE1BRVhDLFNBRlcsWUFFWEEsU0FGVzs7QUFHN0IsTUFBSSxDQUFDSixFQUFMLEVBQVMsT0FBTyxJQUFQO0FBQ1RLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZTixFQUFaO0FBQ0Esc0JBQ0UsOERBQUMsdURBQUQ7QUFBWSxRQUFJLEVBQUVHLFFBQWxCO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFBLG1CQUFVSCxFQUFFLENBQUNMLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBUSxVQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFPLEVBQUVTLFNBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFPRTtBQUFBLGdCQUNHSixFQUFFLENBQUNPLElBQUgsQ0FBUUMsR0FBUixDQUFZLFVBQUNsQixRQUFEO0FBQUEsNEJBQ1gsOERBQUMsUUFBRDtBQUE0QixrQkFBUSxFQUFFQTtBQUF0QyxXQUFlQSxRQUFRLENBQUNtQixFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVlFO0FBQUEsNkJBQ0U7QUFBQSxrQkFBSWIseURBQVcsQ0FBQ2MsNERBQWMsQ0FBQ1YsRUFBRSxDQUFDTyxJQUFKLENBQWY7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztHQXZCdUJSLEk7VUFDWEUsMEMsRUFDcUJDLG1EOzs7TUFGVkgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjQ3NTE3YzFiZThhNjQ0MmFkZWE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNhbGNUb3RhbFByaWNlIGZyb20gJy4uL2xpYi9jYWxjVG90YWxQcmljZSc7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBDYXJ0U3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcnRTdHlsZXMnO1xyXG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuL3N0eWxlcy9TdXByZW1lJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5jb25zdCBDYXJ0SXRlbVN0eWxlcyA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcbiAgaDMsXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gQ2FydEl0ZW0oeyBjYXJ0SXRlbSB9KSB7XHJcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBjYXJ0SXRlbTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRJdGVtU3R5bGVzPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgIHNyYz17cHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UgKiBjYXJ0SXRlbS5xdWFudGl0eSl9IC1cclxuICAgICAgICAgIDxlbT5cclxuICAgICAgICAgICAge2NhcnRJdGVtLnF1YW50aXR5fSAmdGltZXM7IHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlKX1cclxuICAgICAgICAgIDwvZW0+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ2FydEl0ZW1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcclxuICBjb25zdCB7IGNhcnRPcGVuLCBjbG9zZUNhcnQgfSA9IHVzZUNhcnQoKTtcclxuICBpZiAoIW1lKSByZXR1cm4gbnVsbDtcclxuICBjb25zb2xlLmxvZyhtZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0U3R5bGVzIG9wZW49e2NhcnRPcGVufT5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8U3VwcmVtZT57bWUubmFtZX0ncyBDYXJ0PC9TdXByZW1lPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VDYXJ0fT5cclxuICAgICAgICAmdGltZXM7XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21lLmNhcnQubWFwKChjYXJ0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtIGtleT17Y2FydEl0ZW0uaWR9IGNhcnRJdGVtPXtjYXJ0SXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8cD57Zm9ybWF0TW9uZXkoY2FsY1RvdGFsUHJpY2UobWUuY2FydCkpfTwvcD5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L0NhcnRTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9