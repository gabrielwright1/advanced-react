(function() {
var exports = {};
exports.id = "pages/products";
exports.ids = ["pages/products"];
exports.modules = {

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Product.js";





function Product({
  product
}) {
  var _product$photo, _product$photo$image;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/product/${product.id}`,
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_4__.default, {
      children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__.default)(product.price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Products.js":
/*!********************************!*\
  !*** ./components/Products.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Products; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Product */ "./components/Product.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Products.js";




const ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
const ProductsList = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "Products__ProductsList",
  componentId: "sc-1uv5x8m-0"
})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:60px;"]);
function Products() {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY);
  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsList, {
      children: data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_4__.default, {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/ItemStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/ItemStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "ItemStyles",
  componentId: "sc-16pk14u-0"
})(["background:white;border:1px solid var(--offWhite);box-shadow:var(--bs);position:relative;display:flex;flex-direction:column;img{width:100%;height:400px;object-fit:cover;}p{line-height:2;font-weight:300;flex-grow:1;padding:0 3rem;font-size:1.5rem;}.buttonList{display:grid;width:100%;border-top:1px solid var(--lightGray);grid-template-columns:repeat(auto-fit,minmax(100px,1fr));grid-gap:1px;background:var(--lightGray);& > *{background:white;border:0;font-size:1rem;padding:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (ItemStyles);

/***/ }),

/***/ "./components/styles/PriceTag.js":
/*!***************************************!*\
  !*** ./components/styles/PriceTag.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PriceTag = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
  displayName: "PriceTag",
  componentId: "sc-nwbk6t-0"
})(["background:var(--red);transform:rotate(3deg);color:white;font-weight:600;padding:5px;line-height:1;font-size:3rem;display:inline-block;position:absolute;top:-3px;right:-3px;"]);
/* harmony default export */ __webpack_exports__["default"] = (PriceTag);

/***/ }),

/***/ "./components/styles/Title.js":
/*!************************************!*\
  !*** ./components/styles/Title.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Title",
  componentId: "sc-16nq74k-0"
})(["margin:0 1rem;text-align:center;transform:skew(-5deg) rotate(-1deg);margin-top:-3rem;text-shadow:2px 2px 0 rgba(0,0,0,0.1);a{background:var(--red);display:inline;line-height:1.3;font-size:4rem;text-align:center;color:white;padding:0 1rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ formatMoney; }
/* harmony export */ });
function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; // check if its a clean dollar amount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ "./pages/products.js":
/*!***************************!*\
  !*** ./pages/products.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductsPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Products */ "./components/Products.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\products.js";

function ProductsPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/products.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9Qcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9JdGVtU3R5bGVzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1ByaWNlVGFnLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL1RpdGxlLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9mb3JtYXRNb25leS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2lnbm9yZWR8QzpcXHdlYmRlc2lnblxccHJvamVjdHNcXGFkdmFuY2VkLXJlYWN0XFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9kdWN0IiwicGhvdG8iLCJpbWFnZSIsInB1YmxpY1VybFRyYW5zZm9ybWVkIiwibmFtZSIsImlkIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiQUxMX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiUHJvZHVjdHNMaXN0Iiwic3R5bGVkIiwiUHJvZHVjdHMiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImFsbFByb2R1Y3RzIiwibWFwIiwiSXRlbVN0eWxlcyIsIlByaWNlVGFnIiwiVGl0bGUiLCJhbW91bnQiLCJvcHRpb25zIiwic3R5bGUiLCJjdXJyZW5jeSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsImZvcm1hdHRlciIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJmb3JtYXQiLCJQcm9kdWN0c1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBOEI7QUFBQTs7QUFDM0Msc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFFRTtBQUNFLFNBQUcsRUFBRUEsT0FBRixhQUFFQSxPQUFGLHlDQUFFQSxPQUFPLENBQUVDLEtBQVgsMkVBQUUsZUFBZ0JDLEtBQWxCLHlEQUFFLHFCQUF1QkMsb0JBRDlCO0FBRUUsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZG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O0FBQUEsMkJBQ0UsOERBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7O0FDUkQsNEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBJdGVtU3R5bGVzIGZyb20gJy4vc3R5bGVzL0l0ZW1TdHlsZXMnO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi9zdHlsZXMvUHJpY2VUYWcnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9zdHlsZXMvVGl0bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7IHByb2R1Y3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SXRlbVN0eWxlcz5cclxuICAgICAgey8qIHF1ZXN0aW9uIG1hcmtzID0gb3B0aW9uYWwgY2hhaW5pbmcgLSBjaGVja3MgZXhpc3RlbmNlIGF0IGVhY2ggbWVtYmVyIG9mIGNoYWluIHRvIHByZXZlbnQgZXJyb3IgKi99XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUaXRsZT5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICA8L1RpdGxlPlxyXG4gICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XHJcbiAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvSXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCc7XHJcblxyXG5jb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZIHtcclxuICAgIGFsbFByb2R1Y3RzIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0xpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiA2MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoQUxMX1BST0RVQ1RTX1FVRVJZKTtcclxuICBjb25zb2xlLmxvZyhkYXRhLCBlcnJvciwgbG9hZGluZyk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFByb2R1Y3RzTGlzdD5cclxuICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBJdGVtU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmJ1dHRvbkxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xuICAgICYgPiAqIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1TdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUHJpY2VUYWcgPSBzdHlsZWQuc3BhbmBcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZyk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogNXB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFByaWNlVGFnO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgzYFxuICBtYXJnaW46IDAgMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHNrZXcoLTVkZWcpIHJvdGF0ZSgtMWRlZyk7XG4gIG1hcmdpbi10b3A6IC0zcmVtO1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwIDFyZW07XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TW9uZXkoYW1vdW50ID0gMCkge1xyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBzdHlsZTogJ2N1cnJlbmN5JyxcclxuICAgIGN1cnJlbmN5OiAnVVNEJyxcclxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICB9O1xyXG5cclxuICAvLyBjaGVjayBpZiBpdHMgYSBjbGVhbiBkb2xsYXIgYW1vdW50XHJcbiAgaWYgKGFtb3VudCAlIDEwMCA9PT0gMCkge1xyXG4gICAgb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0dGVyID0gSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJywgb3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiBmb3JtYXR0ZXIuZm9ybWF0KGFtb3VudCAvIDEwMCk7XHJcbn1cclxuIiwiaW1wb3J0IFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUHJvZHVjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHNQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8UHJvZHVjdHMgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtdGFnXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==