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
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__.default)(product.price * cartItem.quantity)
      }, void 0, false, {
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
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(function (cartItem) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
          cartItem: cartItem
        }, cartItem.id, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
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


/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function formatMoney() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // check if its a clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  var formatter = Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJ0LmpzIiwid2VicGFjazovL19OX0UvLi9saWIvZm9ybWF0TW9uZXkuanMiXSwibmFtZXMiOlsiQ2FydEl0ZW1TdHlsZXMiLCJzdHlsZWQiLCJDYXJ0SXRlbSIsImNhcnRJdGVtIiwicHJvZHVjdCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJmb3JtYXRNb25leSIsInByaWNlIiwicXVhbnRpdHkiLCJDYXJ0IiwibWUiLCJ1c2VVc2VyIiwiY29uc29sZSIsImxvZyIsImNhcnQiLCJtYXAiLCJpZCIsImFtb3VudCIsIm9wdGlvbnMiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHQyx5REFBSCxtQkFBcEI7S0FBTUQsYzs7QUFjTixTQUFTRSxRQUFULE9BQWdDO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQUEsTUFDdEJDLE9BRHNCLEdBQ1ZELFFBRFUsQ0FDdEJDLE9BRHNCO0FBRTlCLHNCQUNFLDhEQUFDLGNBQUQ7QUFBQSw0QkFDRTtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsU0FBRyxFQUFFQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjNCO0FBR0UsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxrQkFBSUMseURBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFSLEdBQWdCUCxRQUFRLENBQUNRLFFBQTFCO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQ7O01BZlFULFE7QUFpQk0sU0FBU1UsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUM3QixNQUFNQyxFQUFFLEdBQUdDLDhDQUFPLEVBQWxCO0FBQ0EsTUFBSSxDQUFDRCxFQUFMLEVBQVMsT0FBTyxJQUFQO0FBQ1RFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxFQUFaO0FBQ0Esc0JBQ0UsOERBQUMsdURBQUQ7QUFBWSxRQUFJLE1BQWhCO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSw4REFBQyxvREFBRDtBQUFBLG1CQUFVQSxFQUFFLENBQUNMLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSxnQkFDR0ssRUFBRSxDQUFDSSxJQUFILENBQVFDLEdBQVIsQ0FBWSxVQUFDZixRQUFEO0FBQUEsNEJBQ1gsOERBQUMsUUFBRDtBQUE0QixrQkFBUSxFQUFFQTtBQUF0QyxXQUFlQSxRQUFRLENBQUNnQixFQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURXO0FBQUEsT0FBWjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEOztHQWhCdUJQLEk7VUFDWEUsMEM7OztNQURXRixJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ1QsU0FBU0gsV0FBVCxHQUFpQztBQUFBLE1BQVpXLE1BQVksdUVBQUgsQ0FBRztBQUM5QyxNQUFNQyxPQUFPLEdBQUc7QUFDZEMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQixDQUQ4QyxDQU85Qzs7QUFDQSxNQUFJSixNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QkMsV0FBTyxDQUFDRyxxQkFBUixHQUFnQyxDQUFoQztBQUNEOztBQUVELE1BQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCTixPQUEzQixDQUFsQjtBQUVBLFNBQU9JLFNBQVMsQ0FBQ0csTUFBVixDQUFpQlIsTUFBTSxHQUFHLEdBQTFCLENBQVA7QUFDRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjlmZTQxZTM4NWNjOTQyMGRlYjcyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBDYXJ0U3R5bGVzIGZyb20gJy4vc3R5bGVzL0NhcnRTdHlsZXMnO1xyXG5pbXBvcnQgU3VwcmVtZSBmcm9tICcuL3N0eWxlcy9TdXByZW1lJztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4vVXNlcic7XHJcblxyXG5jb25zdCBDYXJ0SXRlbVN0eWxlcyA9IHN0eWxlZC5saWBcclxuICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JleSk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG87XHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICB9XHJcbiAgaDMsXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gQ2FydEl0ZW0oeyBjYXJ0SXRlbSB9KSB7XHJcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBjYXJ0SXRlbTtcclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRJdGVtU3R5bGVzPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgd2lkdGg9XCIxMDBcIlxyXG4gICAgICAgIHNyYz17cHJvZHVjdC5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICBhbHQ9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8aDM+e3Byb2R1Y3QubmFtZX08L2gzPlxyXG4gICAgICAgIDxwPntmb3JtYXRNb25leShwcm9kdWN0LnByaWNlICogY2FydEl0ZW0ucXVhbnRpdHkpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NhcnRJdGVtU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnQoKSB7XHJcbiAgY29uc3QgbWUgPSB1c2VVc2VyKCk7XHJcbiAgaWYgKCFtZSkgcmV0dXJuIG51bGw7XHJcbiAgY29uc29sZS5sb2cobWUpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0eWxlcyBvcGVuPlxyXG4gICAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxTdXByZW1lPnttZS5uYW1lfSdzIENhcnQ8L1N1cHJlbWU+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21lLmNhcnQubWFwKChjYXJ0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtIGtleT17Y2FydEl0ZW0uaWR9IGNhcnRJdGVtPXtjYXJ0SXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQ2FydFN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdE1vbmV5KGFtb3VudCA9IDApIHtcclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgc3R5bGU6ICdjdXJyZW5jeScsXHJcbiAgICBjdXJyZW5jeTogJ1VTRCcsXHJcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXHJcbiAgfTtcclxuXHJcbiAgLy8gY2hlY2sgaWYgaXRzIGEgY2xlYW4gZG9sbGFyIGFtb3VudFxyXG4gIGlmIChhbW91bnQgJSAxMDAgPT09IDApIHtcclxuICAgIG9wdGlvbnMubWluaW11bUZyYWN0aW9uRGlnaXRzID0gMDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdHRlciA9IEludGwuTnVtYmVyRm9ybWF0KCdlbi1VUycsIG9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=