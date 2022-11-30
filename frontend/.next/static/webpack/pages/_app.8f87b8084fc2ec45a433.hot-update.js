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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Cart.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  padding: 1rem 0;\n  border-bottom: 1px solid var(--lightGrey);\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  img {\n    margin-right: 1rem;\n  }\n  h3,\n  p {\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_6__.default.li(_templateObject());
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
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__.default)(product.price * cartItem.quantity), " -", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__.default)(product.price)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_c2 = CartItem;
function Cart() {
  _s();

  var _this = this;

  var me = (0,_User__WEBPACK_IMPORTED_MODULE_5__.useUser)();
  if (!me) return null;
  console.log(me);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    open: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_4__.default, {
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(function (cartItem) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
          cartItem: cartItem
        }, cartItem.id, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__.default)(calcTotalPrice(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

_s(Cart, "Z98rfMCuMoVDW8LRyFv7Prn3FZ8=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_5__.useUser];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwiQ2FydEl0ZW0iLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsInF1YW50aXR5IiwiQ2FydCIsIm1lIiwidXNlVXNlciIsImNvbnNvbGUiLCJsb2ciLCJjYXJ0IiwibWFwIiwiaWQiLCJjYWxjVG90YWxQcmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBSCxtQkFBcEI7S0FBTUQsYzs7QUFjTixTQUFTRSxRQUFULE9BQWdDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQUEsTUFDdEJDLE9BRHNCLEdBQ1ZELFFBRFUsQ0FDdEJDLE9BRHNCO0FBRTlCLHNCQUNFLDhEQUFDLGNBQUQ7QUFBQSw0QkFDRTtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjNCO0FBR0UsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFDR0MseURBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFSLEdBQWdCUCxRQUFRLENBQUNRLFFBQTFCLENBRGQscUJBRUU7QUFBQSxxQkFDR1IsUUFBUSxDQUFDUSxRQURaLFlBQytCRix5REFBVyxDQUFDTCxPQUFPLENBQUNNLEtBQVQsQ0FEMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztNQXBCUVIsUTtBQXNCTSxTQUFTVSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLEVBQUUsR0FBR0MsOENBQU8sRUFBbEI7QUFDQSxNQUFJLENBQUNELEVBQUwsRUFBUyxPQUFPLElBQVA7QUFDVEUsU0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDQSxzQkFDRSw4REFBQyx1REFBRDtBQUFZLFFBQUksTUFBaEI7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsbUJBQVVBLEVBQUUsQ0FBQ0wsSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLGdCQUNHSyxFQUFFLENBQUNJLElBQUgsQ0FBUUMsR0FBUixDQUFZLFVBQUNmLFFBQUQ7QUFBQSw0QkFDWCw4REFBQyxRQUFEO0FBQTRCLGtCQUFRLEVBQUVBO0FBQXRDLFdBQWVBLFFBQVEsQ0FBQ2dCLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFc7QUFBQSxPQUFaO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBU0U7QUFBQSw2QkFDRTtBQUFBLGtCQUFJVix5REFBVyxDQUFDVyxjQUFjLENBQUNQLEVBQUUsQ0FBQ0ksSUFBSixDQUFmO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQW5CdUJMLEk7VUFDWEUsMEM7OztNQURXRixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGY4N2I4MDg0ZmMyZWM0NWE0MzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcclxuaW1wb3J0IENhcnRTdHlsZXMgZnJvbSAnLi9zdHlsZXMvQ2FydFN0eWxlcyc7XHJcbmltcG9ydCBTdXByZW1lIGZyb20gJy4vc3R5bGVzL1N1cHJlbWUnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBoMyxcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGNhcnRJdGVtIH0pIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGNhcnRJdGVtO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEl0ZW1TdHlsZXM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgc3JjPXtwcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSAqIGNhcnRJdGVtLnF1YW50aXR5KX0gLVxyXG4gICAgICAgICAgPGVtPlxyXG4gICAgICAgICAgICB7Y2FydEl0ZW0ucXVhbnRpdHl9ICZ0aW1lczsge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgPC9lbT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9DYXJ0SXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGlmICghbWUpIHJldHVybiBudWxsO1xyXG4gIGNvbnNvbGUubG9nKG1lKTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRTdHlsZXMgb3Blbj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8U3VwcmVtZT57bWUubmFtZX0ncyBDYXJ0PC9TdXByZW1lPlxyXG4gICAgICA8L2hlYWRlcj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHttZS5jYXJ0Lm1hcCgoY2FydEl0ZW0pID0+IChcclxuICAgICAgICAgIDxDYXJ0SXRlbSBrZXk9e2NhcnRJdGVtLmlkfSBjYXJ0SXRlbT17Y2FydEl0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPHA+e2Zvcm1hdE1vbmV5KGNhbGNUb3RhbFByaWNlKG1lLmNhcnQpKX08L3A+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgPC9DYXJ0U3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==