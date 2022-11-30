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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./components/User.js");
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





var CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_5__.default.li(_templateObject());
_c = CartItemStyles;

function CartItem(_ref) {
  var cartItem = _ref.cartItem;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: cartItem.product.photo.image.publicUrlTransformed
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

_c2 = CartItem;
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
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(function (cartItem) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
          cartItem: cartItem
        }, cartItem.id, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(Cart, "Z98rfMCuMoVDW8LRyFv7Prn3FZ8=", false, function () {
  return [_User__WEBPACK_IMPORTED_MODULE_4__.useUser];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRJdGVtU3R5bGVzIiwic3R5bGVkIiwiQ2FydEl0ZW0iLCJjYXJ0SXRlbSIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJDYXJ0IiwibWUiLCJ1c2VVc2VyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJjYXJ0IiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGNBQWMsR0FBR0MseURBQUgsbUJBQXBCO0tBQU1ELGM7O0FBY04sU0FBU0UsUUFBVCxPQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUM5QixzQkFDRSw4REFBQyxjQUFEO0FBQUEsMkJBQ0U7QUFBSyxTQUFHLEVBQUVBLFFBQVEsQ0FBQ0MsT0FBVCxDQUFpQkMsS0FBakIsQ0FBdUJDLEtBQXZCLENBQTZCQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O01BTlFMLFE7QUFRTSxTQUFTTSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQzdCLE1BQU1DLEVBQUUsR0FBR0MsOENBQU8sRUFBbEI7QUFDQSxNQUFJLENBQUNELEVBQUwsRUFBUyxPQUFPLElBQVA7QUFDVEUsU0FBTyxDQUFDQyxHQUFSLENBQVlILEVBQVo7QUFDQSxzQkFDRSw4REFBQyx1REFBRDtBQUFZLFFBQUksTUFBaEI7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLDhEQUFDLG9EQUFEO0FBQUEsbUJBQVVBLEVBQUUsQ0FBQ0ksSUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFBLGdCQUNHSixFQUFFLENBQUNLLElBQUgsQ0FBUUMsR0FBUixDQUFZLFVBQUNaLFFBQUQ7QUFBQSw0QkFDWCw4REFBQyxRQUFEO0FBQTRCLGtCQUFRLEVBQUVBO0FBQXRDLFdBQWVBLFFBQVEsQ0FBQ2EsRUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEVztBQUFBLE9BQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDs7R0FoQnVCUixJO1VBQ1hFLDBDOzs7TUFEV0YsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmY5NTI0MGYwYjNmMWM1Njc2NGRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENhcnRTdHlsZXMgZnJvbSAnLi9zdHlsZXMvQ2FydFN0eWxlcyc7XHJcbmltcG9ydCBTdXByZW1lIGZyb20gJy4vc3R5bGVzL1N1cHJlbWUnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBoMyxcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGNhcnRJdGVtIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRJdGVtU3R5bGVzPlxyXG4gICAgICA8aW1nIHNyYz17Y2FydEl0ZW0ucHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH0gLz5cclxuICAgIDwvQ2FydEl0ZW1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcclxuICBjb25zdCBtZSA9IHVzZVVzZXIoKTtcclxuICBpZiAoIW1lKSByZXR1cm4gbnVsbDtcclxuICBjb25zb2xlLmxvZyhtZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0U3R5bGVzIG9wZW4+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFN1cHJlbWU+e21lLm5hbWV9J3MgQ2FydDwvU3VwcmVtZT5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bWUuY2FydC5tYXAoKGNhcnRJdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2FydEl0ZW0ga2V5PXtjYXJ0SXRlbS5pZH0gY2FydEl0ZW09e2NhcnRJdGVtfSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9DYXJ0U3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==