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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Cart.js",
    _s = $RefreshSig$();










var CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.li.withConfig({
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
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)(product.price * cartItem.quantity), " =", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)(product.price)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_4__.default, {
      id: cartItem.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_c2 = CartItem;
function Cart() {
  _s();

  var _this = this;

  var me = (0,_User__WEBPACK_IMPORTED_MODULE_8__.useUser)();

  var _useCart = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart)(),
      cartOpen = _useCart.cartOpen,
      closeCart = _useCart.closeCart;

  console.log(cartOpen);
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_5__.default, {
    open: cartOpen(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_7__.default, {
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_6__.default, {
        type: "button",
        onClick: closeCart,
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(function (cartItem) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
          cartItem: cartItem
        }, cartItem.id, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_3__.default)((0,_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_1__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

_s(Cart, "T8IrobZcZl8P+kAvSYAnS0OsnCo=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_8__.useUser, _lib_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwiQ2FydEl0ZW0iLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsInF1YW50aXR5IiwiaWQiLCJDYXJ0IiwibWUiLCJ1c2VVc2VyIiwidXNlQ2FydCIsImNhcnRPcGVuIiwiY2xvc2VDYXJ0IiwiY29uc29sZSIsImxvZyIsImNhcnQiLCJtYXAiLCJjYWxjVG90YWxQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyxvRUFBSDtBQUFBO0FBQUE7QUFBQSx1SkFBcEI7S0FBTUQsYzs7QUFjTixTQUFTRSxRQUFULE9BQWdDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQUEsTUFDdEJDLE9BRHNCLEdBQ1ZELFFBRFUsQ0FDdEJDLE9BRHNCO0FBRTlCLHNCQUNFLDhEQUFDLGNBQUQ7QUFBQSw0QkFDRTtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjNCO0FBR0UsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFDR0MseURBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFSLEdBQWdCUCxRQUFRLENBQUNRLFFBQTFCLENBRGQscUJBRUU7QUFBQSxxQkFDR1IsUUFBUSxDQUFDUSxRQURaLFlBQytCRix5REFBVyxDQUFDTCxPQUFPLENBQUNNLEtBQVQsQ0FEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBZUUsOERBQUMsb0RBQUQ7QUFBZ0IsUUFBRSxFQUFFUCxRQUFRLENBQUNTO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7TUFyQlFWLFE7QUF1Qk0sU0FBU1csSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxFQUFFLEdBQUdDLDhDQUFPLEVBQWxCOztBQUQ2QixpQkFFR0MsdURBQU8sRUFGVjtBQUFBLE1BRXJCQyxRQUZxQixZQUVyQkEsUUFGcUI7QUFBQSxNQUVYQyxTQUZXLFlBRVhBLFNBRlc7O0FBRzdCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBLE1BQUksQ0FBQ0gsRUFBTCxFQUFTLE9BQU8sSUFBUDtBQUNULHNCQUNFLDhEQUFDLHVEQUFEO0FBQVksUUFBSSxFQUFFRyxRQUFRLEVBQTFCO0FBQUEsNEJBQ0U7QUFBQSw4QkFDRSw4REFBQyxvREFBRDtBQUFBLG1CQUFVSCxFQUFFLENBQUNOLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRSw4REFBQyx3REFBRDtBQUFhLFlBQUksRUFBQyxRQUFsQjtBQUEyQixlQUFPLEVBQUVVLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRTtBQUFBLGdCQUNHSixFQUFFLENBQUNPLElBQUgsQ0FBUUMsR0FBUixDQUFZLFVBQUNuQixRQUFEO0FBQUEsNEJBQ1gsOERBQUMsUUFBRDtBQUE0QixrQkFBUSxFQUFFQTtBQUF0QyxXQUFlQSxRQUFRLENBQUNTLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBYUU7QUFBQSw2QkFDRTtBQUFBLGtCQUFJSCx5REFBVyxDQUFDYyw0REFBYyxDQUFDVCxFQUFFLENBQUNPLElBQUosQ0FBZjtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQ7O0dBeEJ1QlIsSTtVQUNYRSwwQyxFQUNxQkMsbUQ7OztNQUZWSCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuZDU3NDMwNzExOTc4ZTVmZGRjZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgY2FsY1RvdGFsUHJpY2UgZnJvbSAnLi4vbGliL2NhbGNUb3RhbFByaWNlJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcclxuaW1wb3J0IFJlbW92ZUZyb21DYXJ0IGZyb20gJy4vUmVtb3ZlRnJvbUNhcnQnO1xyXG5pbXBvcnQgQ2FydFN0eWxlcyBmcm9tICcuL3N0eWxlcy9DYXJ0U3R5bGVzJztcclxuaW1wb3J0IENsb3NlQnV0dG9uIGZyb20gJy4vc3R5bGVzL0Nsb3NlQnV0dG9uJztcclxuaW1wb3J0IFN1cHJlbWUgZnJvbSAnLi9zdHlsZXMvU3VwcmVtZSc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgQ2FydEl0ZW1TdHlsZXMgPSBzdHlsZWQubGlgXHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyZXkpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvO1xyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIGgzLFxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIENhcnRJdGVtKHsgY2FydEl0ZW0gfSkge1xyXG4gIGNvbnN0IHsgcHJvZHVjdCB9ID0gY2FydEl0ZW07XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0SXRlbVN0eWxlcz5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIHdpZHRoPVwiMTAwXCJcclxuICAgICAgICBzcmM9e3Byb2R1Y3QucGhvdG8uaW1hZ2UucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtmb3JtYXRNb25leShwcm9kdWN0LnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHkpfSA9XHJcbiAgICAgICAgICA8ZW0+XHJcbiAgICAgICAgICAgIHtjYXJ0SXRlbS5xdWFudGl0eX0gJnRpbWVzOyB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSl9XHJcbiAgICAgICAgICA8L2VtPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxSZW1vdmVGcm9tQ2FydCBpZD17Y2FydEl0ZW0uaWR9IC8+XHJcbiAgICA8L0NhcnRJdGVtU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgY29uc3QgeyBjYXJ0T3BlbiwgY2xvc2VDYXJ0IH0gPSB1c2VDYXJ0KCk7XHJcbiAgY29uc29sZS5sb2coY2FydE9wZW4pO1xyXG4gIGlmICghbWUpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0eWxlcyBvcGVuPXtjYXJ0T3BlbigpfT5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8U3VwcmVtZT57bWUubmFtZX0ncyBDYXJ0PC9TdXByZW1lPlxyXG4gICAgICAgIDxDbG9zZUJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VDYXJ0fT5cclxuICAgICAgICAgICZ0aW1lcztcclxuICAgICAgICA8L0Nsb3NlQnV0dG9uPlxyXG4gICAgICA8L2hlYWRlcj5cclxuXHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWUuY2FydC5tYXAoKGNhcnRJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxwPntmb3JtYXRNb25leShjYWxjVG90YWxQcmljZShtZS5jYXJ0KSl9PC9wPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvQ2FydFN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=