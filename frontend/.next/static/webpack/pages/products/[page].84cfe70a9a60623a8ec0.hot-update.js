self["webpackHotUpdate_N_E"]("pages/products/[page]",{

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALL_PRODUCTS_QUERY": function() { return /* binding */ ALL_PRODUCTS_QUERY; },
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./components/Product.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Products.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)(["\n  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {\n    allProducts(first: $first, skip: $skip) {\n      id\n      name\n      price\n      description\n      photo {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ALL_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject());
var ProductsList = styled_components__WEBPACK_IMPORTED_MODULE_4__.default.div.withConfig({
  displayName: "Products__ProductsList",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);
_c = ProductsList;
function Products() {
  _s();

  var _this = this;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery)(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: skip,
      first: first
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsList, {
      children: data.allProducts.map(function (product) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
          product: product
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(Products, "eE+cqeCo2lkI//dPlCsO1rICVGU=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_5__.useQuery];
});

_c2 = Products;

var _c, _c2;

$RefreshReg$(_c, "ProductsList");
$RefreshReg$(_c2, "Products");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJBTExfUFJPRFVDVFNfUVVFUlkiLCJncWwiLCJQcm9kdWN0c0xpc3QiLCJzdHlsZWQiLCJQcm9kdWN0cyIsInVzZVF1ZXJ5IiwidmFyaWFibGVzIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiYWxsUHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxrQkFBa0IsR0FBR0Msb0RBQUgsbUJBQXhCO0FBZ0JQLElBQU1DLFlBQVksR0FBR0MscUVBQUg7QUFBQTtBQUFBO0FBQUEsaUVBQWxCO0tBQU1ELFk7QUFNUyxTQUFTRSxRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0FDLHdEQUFRLENBQUNMLGtCQUFELEVBQXFCO0FBQzVETSxhQUFTLEVBQUU7QUFDVEMsVUFBSSxFQUFKQSxJQURTO0FBRVRDLFdBQUssRUFBTEE7QUFGUztBQURpRCxHQUFyQixDQURSO0FBQUEsTUFDekJDLElBRHlCLGFBQ3pCQSxJQUR5QjtBQUFBLE1BQ25CQyxLQURtQixhQUNuQkEsS0FEbUI7QUFBQSxNQUNaQyxPQURZLGFBQ1pBLE9BRFk7O0FBT2pDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWixFQUFrQkMsS0FBbEIsRUFBeUJDLE9BQXpCO0FBQ0EsTUFBSUEsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU87QUFBQSwwQkFBV0EsS0FBSyxDQUFDSSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLHNCQUNFO0FBQUEsMkJBQ0UsOERBQUMsWUFBRDtBQUFBLGdCQUNHTCxJQUFJLENBQUNNLFdBQUwsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQUNDLE9BQUQ7QUFBQSw0QkFDcEIsOERBQUMsNkNBQUQ7QUFBMEIsaUJBQU8sRUFBRUE7QUFBbkMsV0FBY0EsT0FBTyxDQUFDQyxFQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQXJCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQW5CdUJkLFE7VUFDV0Msb0Q7OztNQURYRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL1twYWdlXS44NGNmZTcwYTlhNjA2MjNhOGVjMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZKCRza2lwOiBJbnQgPSAwLCAkZmlyc3Q6IEludCkge1xyXG4gICAgYWxsUHJvZHVjdHMoZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0xpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiA2MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgc2tpcCxcclxuICAgICAgZmlyc3QsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGRhdGEsIGVycm9yLCBsb2FkaW5nKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxwPkVycm9yOiB7ZXJyb3IubWVzc2FnZX08L3A+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UHJvZHVjdHNMaXN0PlxyXG4gICAgICAgIHtkYXRhLmFsbFByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgPFByb2R1Y3Qga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1Byb2R1Y3RzTGlzdD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==