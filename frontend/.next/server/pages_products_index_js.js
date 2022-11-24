exports.id = "pages_products_index_js";
exports.ids = ["pages_products_index_js"];
exports.modules = {

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeleteProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\DeleteProduct.js";


const DELETE_PRODUCT_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  console.log(payload);
  console.log('running the update function after delete');
  cache.evict(cache.identify(payload.data.deleteProduct));
}

function DeleteProduct({
  id,
  children
}) {
  const [deleteProduct, {
    loading,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id
    },
    update
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    disabled: loading,
    onClick: () => {
      if (confirm('Are you sure you want to delete this item?')) {
        // go ahead and delete it
        console.log('DELETE');
        deleteProduct().catch(err => alert(err.message));
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\ErrorMessage.js";



const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

const DisplayError = ({
  error
}) => {
  // conditional rendering if error doesn't exist
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
          children: "Shoot!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), error.message.replace('GraphQL error: ', '')]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ErrorStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Shoot!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), error.message.replace('GraphQL error: ', '')]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, undefined);
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Pagination; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PaginationStyles */ "./components/styles/PaginationStyles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ "./config.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Pagination.js";






const PAGINATION_QUERY = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  query PAGINATION_QUERY {
    _allProductsMeta {
      count
    }
  }
`;
function Pagination({
  page
}) {
  const {
    error,
    loading,
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(PAGINATION_QUERY);
  if (loading) return 'Loading ...';
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 21
  }, this);
  const {
    count
  } = data._allProductsMeta;
  const pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_6__.perPage);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Sick Fits - Page ", page, " of ___"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/products/${page - 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page <= 1,
        children: "\u2190 Prev"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Page ", page, " of ", pageCount]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [count, " Items Total"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
      href: `/products/${page + 1}`,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        "aria-disabled": page >= pageCount,
        children: "Next \u2192"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

/***/ }),

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
/* harmony import */ var _DeleteProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DeleteProduct */ "./components/DeleteProduct.js");
/* harmony import */ var _styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles/ItemStyles */ "./components/styles/ItemStyles.js");
/* harmony import */ var _styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/PriceTag */ "./components/styles/PriceTag.js");
/* harmony import */ var _styles_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Title */ "./components/styles/Title.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Product.js";






function Product({
  product
}) {
  var _product$photo, _product$photo$image;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_ItemStyles__WEBPACK_IMPORTED_MODULE_4__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: product === null || product === void 0 ? void 0 : (_product$photo = product.photo) === null || _product$photo === void 0 ? void 0 : (_product$photo$image = _product$photo.image) === null || _product$photo$image === void 0 ? void 0 : _product$photo$image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Title__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/product/${product.id}`,
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_PriceTag__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_2__.default)(product.price)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: product.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "buttonList",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: {
          pathname: '/update',
          query: {
            id: product.id
          }
        },
        children: "Edit \u270F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_DeleteProduct__WEBPACK_IMPORTED_MODULE_3__.default, {
        id: product.id,
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
/* harmony export */   "ALL_PRODUCTS_QUERY": function() { return /* binding */ ALL_PRODUCTS_QUERY; },
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
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Product */ "./components/Product.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Products.js";





const ALL_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query ALL_PRODUCTS_QUERY($skip: Int = 0, $first: Int) {
    allProducts(first: $first, skip: $skip) {
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
function Products({
  page
}) {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(ALL_PRODUCTS_QUERY, {
    variables: {
      skip: page * _config__WEBPACK_IMPORTED_MODULE_4__.perPage - _config__WEBPACK_IMPORTED_MODULE_4__.perPage,
      first: _config__WEBPACK_IMPORTED_MODULE_4__.perPage
    }
  });
  console.log(data, error, loading);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: ["Error: ", error.message]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 21
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductsList, {
      children: data.allProducts.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_5__.default, {
        product: product
      }, product.id, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
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

/***/ "./components/styles/PaginationStyles.js":
/*!***********************************************!*\
  !*** ./components/styles/PaginationStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const PaginationStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "PaginationStyles",
  componentId: "sc-aduuar-0"
})(["text-align:center;display:inline-grid;grid-template-columns:repeat(4,auto);align-items:stretch;justify-content:center;align-content:center;margin:2rem 0;border:1px solid var(--lightGray);border-radius:10px;& > *{margin:0;padding:15px 30px;border-right:1px solid var(--lightGray);&:last-child{border-right:0;}}a[aria-disabled='true']{color:grey;pointer-events:none;}"]);
/* harmony default export */ __webpack_exports__["default"] = (PaginationStyles);

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

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "endpoint": function() { return /* binding */ endpoint; },
/* harmony export */   "prodEndpoint": function() { return /* binding */ prodEndpoint; },
/* harmony export */   "perPage": function() { return /* binding */ perPage; }
/* harmony export */ });
// This is client side config only - don't put anything in here that shouldn't be public!
const endpoint = `http://localhost:3000/api/graphql`;
const prodEndpoint = `fill me in when we deploy`;
const perPage = 2;

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

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductsPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Products */ "./components/Products.js");
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Pagination */ "./components/Pagination.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\products\\index.js";



function ProductsPage() {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const page = parseInt(query.page);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.default, {
      page: page || 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Products__WEBPACK_IMPORTED_MODULE_2__.default, {
      page: page || 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Pagination__WEBPACK_IMPORTED_MODULE_3__.default, {
      page: page || 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0RlbGV0ZVByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1Byb2R1Y3RzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2NvbXBvbmVudHMvc3R5bGVzL0l0ZW1TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvUGFnaW5hdGlvblN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9QcmljZVRhZy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9UaXRsZS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb25maWcuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL2Zvcm1hdE1vbmV5LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9pZ25vcmVkfEM6XFx3ZWJkZXNpZ25cXHByb2plY3RzXFxhZHZhbmNlZC1yZWFjdFxcZnJvbnRlbmRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJERUxFVEVfUFJPRFVDVF9NVVRBVElPTiIsImdxbCIsInVwZGF0ZSIsImNhY2hlIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciLCJldmljdCIsImlkZW50aWZ5IiwiZGF0YSIsImRlbGV0ZVByb2R1Y3QiLCJEZWxldGVQcm9kdWN0IiwiaWQiLCJjaGlsZHJlbiIsImxvYWRpbmciLCJlcnJvciIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwiY29uZmlybSIsImNhdGNoIiwiZXJyIiwiYWxlcnQiLCJtZXNzYWdlIiwiRXJyb3JTdHlsZXMiLCJzdHlsZWQiLCJEaXNwbGF5RXJyb3IiLCJuZXR3b3JrRXJyb3IiLCJyZXN1bHQiLCJlcnJvcnMiLCJsZW5ndGgiLCJtYXAiLCJpIiwicmVwbGFjZSIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsIlBBR0lOQVRJT05fUVVFUlkiLCJQYWdpbmF0aW9uIiwicGFnZSIsInVzZVF1ZXJ5IiwiY291bnQiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJwZXJQYWdlIiwiUHJvZHVjdCIsInByb2R1Y3QiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIiwiZm9ybWF0TW9uZXkiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwicGF0aG5hbWUiLCJxdWVyeSIsIkFMTF9QUk9EVUNUU19RVUVSWSIsIlByb2R1Y3RzTGlzdCIsIlByb2R1Y3RzIiwic2tpcCIsImZpcnN0IiwiYWxsUHJvZHVjdHMiLCJJdGVtU3R5bGVzIiwiUGFnaW5hdGlvblN0eWxlcyIsIlByaWNlVGFnIiwiVGl0bGUiLCJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsImFtb3VudCIsIm9wdGlvbnMiLCJzdHlsZSIsImN1cnJlbmN5IiwibWluaW11bUZyYWN0aW9uRGlnaXRzIiwiZm9ybWF0dGVyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsIlByb2R1Y3RzUGFnZSIsInVzZVJvdXRlciIsInBhcnNlSW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSx1QkFBdUIsR0FBR0Msb0RBQUk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FQQTs7QUFTQSxTQUFTQyxNQUFULENBQWdCQyxLQUFoQixFQUF1QkMsT0FBdkIsRUFBZ0M7QUFDOUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixPQUFaO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDBDQUFaO0FBQ0FILE9BQUssQ0FBQ0ksS0FBTixDQUFZSixLQUFLLENBQUNLLFFBQU4sQ0FBZUosT0FBTyxDQUFDSyxJQUFSLENBQWFDLGFBQTVCLENBQVo7QUFDRDs7QUFFYyxTQUFTQyxhQUFULENBQXVCO0FBQUVDLElBQUY7QUFBTUM7QUFBTixDQUF2QixFQUF5QztBQUN0RCxRQUFNLENBQUNILGFBQUQsRUFBZ0I7QUFBRUksV0FBRjtBQUFXQztBQUFYLEdBQWhCLElBQXNDQywyREFBVyxDQUNyRGhCLHVCQURxRCxFQUVyRDtBQUNFaUIsYUFBUyxFQUFFO0FBQUVMO0FBQUYsS0FEYjtBQUVFVjtBQUZGLEdBRnFELENBQXZEO0FBT0Esc0JBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFlBQVEsRUFBRVksT0FGWjtBQUdFLFdBQU8sRUFBRSxNQUFNO0FBQ2IsVUFBSUksT0FBTyxDQUFDLDRDQUFELENBQVgsRUFBMkQ7QUFDekQ7QUFDQWIsZUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBSSxxQkFBYSxHQUFHUyxLQUFoQixDQUF1QkMsR0FBRCxJQUFTQyxLQUFLLENBQUNELEdBQUcsQ0FBQ0UsT0FBTCxDQUFwQztBQUNEO0FBQ0YsS0FUSDtBQUFBLGNBV0dUO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDRDtBQUNBO0FBRUE7QUFFQSxNQUFNVSxXQUFXLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHNLQUFqQjs7QUFlQSxNQUFNQyxZQUFZLEdBQUcsQ0FBQztBQUFFVjtBQUFGLENBQUQsS0FBZTtBQUNsQztBQUNBLE1BQUksQ0FBQ0EsS0FBRCxJQUFVLENBQUNBLEtBQUssQ0FBQ08sT0FBckIsRUFBOEIsT0FBTyxJQUFQOztBQUM5QixNQUNFUCxLQUFLLENBQUNXLFlBQU4sSUFDQVgsS0FBSyxDQUFDVyxZQUFOLENBQW1CQyxNQURuQixJQUVBWixLQUFLLENBQUNXLFlBQU4sQ0FBbUJDLE1BQW5CLENBQTBCQyxNQUExQixDQUFpQ0MsTUFIbkMsRUFJRTtBQUNBLFdBQU9kLEtBQUssQ0FBQ1csWUFBTixDQUFtQkMsTUFBbkIsQ0FBMEJDLE1BQTFCLENBQWlDRSxHQUFqQyxDQUFxQyxDQUFDZixLQUFELEVBQVFnQixDQUFSLGtCQUMxQyw4REFBQyxXQUFEO0FBQUEsNkJBQ0U7QUFBRyxxQkFBVSxlQUFiO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR2hCLEtBQUssQ0FBQ08sT0FBTixDQUFjVSxPQUFkLENBQXNCLGlCQUF0QixFQUF5QyxFQUF6QyxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQWtCRCxDQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLENBQVA7QUFRRDs7QUFDRCxzQkFDRSw4REFBQyxXQUFEO0FBQUEsMkJBQ0U7QUFBRyxtQkFBVSxlQUFiO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR2hCLEtBQUssQ0FBQ08sT0FBTixDQUFjVSxPQUFkLENBQXNCLGlCQUF0QixFQUF5QyxFQUF6QyxDQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBekJEOztBQTJCQVAsWUFBWSxDQUFDUSxZQUFiLEdBQTRCO0FBQzFCbEIsT0FBSyxFQUFFO0FBRG1CLENBQTVCO0FBSUFVLFlBQVksQ0FBQ1MsU0FBYixHQUF5QjtBQUN2Qm5CLE9BQUssRUFBRW9CLDBEQUFnQkM7QUFEQSxDQUF6QjtBQUlBLCtEQUFlWCxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTVksZ0JBQWdCLEdBQUdwQywrQ0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FOQTtBQVFlLFNBQVNxQyxVQUFULENBQW9CO0FBQUVDO0FBQUYsQ0FBcEIsRUFBOEI7QUFDM0MsUUFBTTtBQUFFeEIsU0FBRjtBQUFTRCxXQUFUO0FBQWtCTDtBQUFsQixNQUEyQitCLHdEQUFRLENBQUNILGdCQUFELENBQXpDO0FBQ0EsTUFBSXZCLE9BQUosRUFBYSxPQUFPLGFBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU8sOERBQUMsa0RBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLFFBQU07QUFBRTBCO0FBQUYsTUFBWWhDLElBQUksQ0FBQ2lDLGdCQUF2QjtBQUNBLFFBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVKLEtBQUssR0FBR0ssNENBQWxCLENBQWxCO0FBQ0Esc0JBQ0UsOERBQUMsNkRBQUQ7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUEsd0NBQXlCUCxJQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRSw4REFBQyxrREFBRDtBQUFNLFVBQUksRUFBRyxhQUFZQSxJQUFJLEdBQUcsQ0FBRSxFQUFsQztBQUFBLDZCQUNFO0FBQUcseUJBQWVBLElBQUksSUFBSSxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQU9FO0FBQUEsMEJBQ1FBLElBRFIsVUFDa0JJLFNBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBVUU7QUFBQSxpQkFBSUYsS0FBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRixlQVdFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxFQUFHLGFBQVlGLElBQUksR0FBRyxDQUFFLEVBQWxDO0FBQUEsNkJBQ0U7QUFBRyx5QkFBZUEsSUFBSSxJQUFJSSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTSSxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBOEI7QUFBQTs7QUFDM0Msc0JBQ0UsOERBQUMsdURBQUQ7QUFBQSw0QkFFRTtBQUNFLFNBQUcsRUFBRUEsT0FBRixhQUFFQSxPQUFGLHlDQUFFQSxPQUFPLENBQUVDLEtBQVgsMkVBQUUsZUFBZ0JDLEtBQWxCLHlEQUFFLHFCQUF1QkMsb0JBRDlCO0FBRUUsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBTUUsOERBQUMsa0RBQUQ7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxZQUFXSixPQUFPLENBQUNwQyxFQUFHLEVBQW5DO0FBQUEsa0JBQXVDb0MsT0FBTyxDQUFDSTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBU0UsOERBQUMscURBQUQ7QUFBQSxnQkFBV0MseURBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFUO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQUEsZ0JBQUlOLE9BQU8sQ0FBQ087QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkYsZUFXRTtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFDRSxZQUFJLEVBQUU7QUFDSkMsa0JBQVEsRUFBRSxTQUROO0FBRUpDLGVBQUssRUFBRTtBQUNMN0MsY0FBRSxFQUFFb0MsT0FBTyxDQUFDcEM7QUFEUDtBQUZILFNBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVdFLDhEQUFDLG1EQUFEO0FBQWUsVUFBRSxFQUFFb0MsT0FBTyxDQUFDcEMsRUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNOEMsa0JBQWtCLEdBQUd6RCxvREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZE87QUFnQlAsTUFBTTBELFlBQVksR0FBR25DLHVFQUFIO0FBQUE7QUFBQTtBQUFBLGlFQUFsQjtBQU1lLFNBQVNvQyxRQUFULENBQWtCO0FBQUVyQjtBQUFGLENBQWxCLEVBQTRCO0FBQ3pDLFFBQU07QUFBRTlCLFFBQUY7QUFBUU0sU0FBUjtBQUFlRDtBQUFmLE1BQTJCMEIsd0RBQVEsQ0FBQ2tCLGtCQUFELEVBQXFCO0FBQzVEekMsYUFBUyxFQUFFO0FBQ1Q0QyxVQUFJLEVBQUV0QixJQUFJLEdBQUdPLDRDQUFQLEdBQWlCQSw0Q0FEZDtBQUVUZ0IsV0FBSyxFQUFFaEIsNENBQU9BO0FBRkw7QUFEaUQsR0FBckIsQ0FBekM7QUFNQXpDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaLEVBQWtCTSxLQUFsQixFQUF5QkQsT0FBekI7QUFDQSxNQUFJQSxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyxvQkFBTztBQUFBLDBCQUFXQSxLQUFLLENBQUNPLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBQ1gsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyxZQUFEO0FBQUEsZ0JBQ0diLElBQUksQ0FBQ3NELFdBQUwsQ0FBaUJqQyxHQUFqQixDQUFzQmtCLE9BQUQsaUJBQ3BCLDhEQUFDLDZDQUFEO0FBQTBCLGVBQU8sRUFBRUE7QUFBbkMsU0FBY0EsT0FBTyxDQUFDcEMsRUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNELEM7Ozs7Ozs7Ozs7Ozs7O0FDL0NEO0FBRUEsTUFBTW9ELFVBQVUsR0FBR3hDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHllQUFoQjtBQW1DQSwrREFBZXdDLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNyQ0E7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBR3pDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFYQUF0QjtBQXdCQSwrREFBZXlDLGdCQUFmLEU7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBRUEsTUFBTUMsUUFBUSxHQUFHMUMsd0VBQUg7QUFBQTtBQUFBO0FBQUEscUxBQWQ7QUFjQSwrREFBZTBDLFFBQWYsRTs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFFQSxNQUFNQyxLQUFLLEdBQUczQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSx1UEFBWDtBQWlCQSwrREFBZTJDLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDTyxNQUFNQyxRQUFRLEdBQUksbUNBQWxCO0FBQ0EsTUFBTUMsWUFBWSxHQUFJLDJCQUF0QjtBQUNBLE1BQU12QixPQUFPLEdBQUcsQ0FBaEIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDSFEsU0FBU08sV0FBVCxDQUFxQmlCLE1BQU0sR0FBRyxDQUE5QixFQUFpQztBQUM5QyxRQUFNQyxPQUFPLEdBQUc7QUFDZEMsU0FBSyxFQUFFLFVBRE87QUFFZEMsWUFBUSxFQUFFLEtBRkk7QUFHZEMseUJBQXFCLEVBQUU7QUFIVCxHQUFoQixDQUQ4QyxDQU85Qzs7QUFDQSxNQUFJSixNQUFNLEdBQUcsR0FBVCxLQUFpQixDQUFyQixFQUF3QjtBQUN0QkMsV0FBTyxDQUFDRyxxQkFBUixHQUFnQyxDQUFoQztBQUNEOztBQUVELFFBQU1DLFNBQVMsR0FBR0MsSUFBSSxDQUFDQyxZQUFMLENBQWtCLE9BQWxCLEVBQTJCTixPQUEzQixDQUFsQjtBQUVBLFNBQU9JLFNBQVMsQ0FBQ0csTUFBVixDQUFpQlIsTUFBTSxHQUFHLEdBQTFCLENBQVA7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUVlLFNBQVNTLFlBQVQsR0FBd0I7QUFDckMsUUFBTTtBQUFFdEI7QUFBRixNQUFZdUIsc0RBQVMsRUFBM0I7QUFDQSxRQUFNekMsSUFBSSxHQUFHMEMsUUFBUSxDQUFDeEIsS0FBSyxDQUFDbEIsSUFBUCxDQUFyQjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsMkRBQUQ7QUFBWSxVQUFJLEVBQUVBLElBQUksSUFBSTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSw4REFBQyx5REFBRDtBQUFVLFVBQUksRUFBRUEsSUFBSSxJQUFJO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLDJEQUFEO0FBQVksVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQzs7Ozs7Ozs7OztBQ2RELGUiLCJmaWxlIjoicGFnZXNfcHJvZHVjdHNfaW5kZXhfanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcblxyXG5jb25zdCBERUxFVEVfUFJPRFVDVF9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBERUxFVEVfUFJPRFVDVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlUHJvZHVjdChpZDogJGlkKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiB1cGRhdGUoY2FjaGUsIHBheWxvYWQpIHtcclxuICBjb25zb2xlLmxvZyhwYXlsb2FkKTtcclxuICBjb25zb2xlLmxvZygncnVubmluZyB0aGUgdXBkYXRlIGZ1bmN0aW9uIGFmdGVyIGRlbGV0ZScpO1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVQcm9kdWN0KSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERlbGV0ZVByb2R1Y3QoeyBpZCwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtkZWxldGVQcm9kdWN0LCB7IGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBERUxFVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiB7IGlkIH0sXHJcbiAgICAgIHVwZGF0ZSxcclxuICAgIH1cclxuICApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgIGlmIChjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgaXRlbT8nKSkge1xyXG4gICAgICAgICAgLy8gZ28gYWhlYWQgYW5kIGRlbGV0ZSBpdFxyXG4gICAgICAgICAgY29uc29sZS5sb2coJ0RFTEVURScpO1xyXG4gICAgICAgICAgZGVsZXRlUHJvZHVjdCgpLmNhdGNoKChlcnIpID0+IGFsZXJ0KGVyci5tZXNzYWdlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgRXJyb3JTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAycmVtO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgfVxuICBzdHJvbmcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxuYDtcblxuY29uc3QgRGlzcGxheUVycm9yID0gKHsgZXJyb3IgfSkgPT4ge1xuICAvLyBjb25kaXRpb25hbCByZW5kZXJpbmcgaWYgZXJyb3IgZG9lc24ndCBleGlzdFxuICBpZiAoIWVycm9yIHx8ICFlcnJvci5tZXNzYWdlKSByZXR1cm4gbnVsbDtcbiAgaWYgKFxuICAgIGVycm9yLm5ldHdvcmtFcnJvciAmJlxuICAgIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQgJiZcbiAgICBlcnJvci5uZXR3b3JrRXJyb3IucmVzdWx0LmVycm9ycy5sZW5ndGhcbiAgKSB7XG4gICAgcmV0dXJuIGVycm9yLm5ldHdvcmtFcnJvci5yZXN1bHQuZXJyb3JzLm1hcCgoZXJyb3IsIGkpID0+IChcbiAgICAgIDxFcnJvclN0eWxlcyBrZXk9e2l9PlxuICAgICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgICAgPHN0cm9uZz5TaG9vdCE8L3N0cm9uZz5cbiAgICAgICAgICB7ZXJyb3IubWVzc2FnZS5yZXBsYWNlKCdHcmFwaFFMIGVycm9yOiAnLCAnJyl9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvRXJyb3JTdHlsZXM+XG4gICAgKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8RXJyb3JTdHlsZXM+XG4gICAgICA8cCBkYXRhLXRlc3Q9XCJncmFwaHFsLWVycm9yXCI+XG4gICAgICAgIDxzdHJvbmc+U2hvb3QhPC9zdHJvbmc+XG4gICAgICAgIHtlcnJvci5tZXNzYWdlLnJlcGxhY2UoJ0dyYXBoUUwgZXJyb3I6ICcsICcnKX1cbiAgICAgIDwvcD5cbiAgICA8L0Vycm9yU3R5bGVzPlxuICApO1xufTtcblxuRGlzcGxheUVycm9yLmRlZmF1bHRQcm9wcyA9IHtcbiAgZXJyb3I6IHt9LFxufTtcblxuRGlzcGxheUVycm9yLnByb3BUeXBlcyA9IHtcbiAgZXJyb3I6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5RXJyb3I7XG4iLCJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuaW1wb3J0IFBhZ2luYXRpb25TdHlsZXMgZnJvbSAnLi9zdHlsZXMvUGFnaW5hdGlvblN0eWxlcyc7XHJcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tICcuLi9jb25maWcnO1xyXG5cclxuY29uc3QgUEFHSU5BVElPTl9RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBQQUdJTkFUSU9OX1FVRVJZIHtcclxuICAgIF9hbGxQcm9kdWN0c01ldGEge1xyXG4gICAgICBjb3VudFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYXRpb24oeyBwYWdlIH0pIHtcclxuICBjb25zdCB7IGVycm9yLCBsb2FkaW5nLCBkYXRhIH0gPSB1c2VRdWVyeShQQUdJTkFUSU9OX1FVRVJZKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuICdMb2FkaW5nIC4uLic7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIGNvbnN0IHsgY291bnQgfSA9IGRhdGEuX2FsbFByb2R1Y3RzTWV0YTtcclxuICBjb25zdCBwYWdlQ291bnQgPSBNYXRoLmNlaWwoY291bnQgLyBwZXJQYWdlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2luYXRpb25TdHlsZXM+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5TaWNrIEZpdHMgLSBQYWdlIHtwYWdlfSBvZiBfX188L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZHVjdHMvJHtwYWdlIC0gMX1gfT5cclxuICAgICAgICA8YSBhcmlhLWRpc2FibGVkPXtwYWdlIDw9IDF9PuKGkCBQcmV2PC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIFBhZ2Uge3BhZ2V9IG9mIHtwYWdlQ291bnR9XHJcbiAgICAgIDwvcD5cclxuICAgICAgPHA+e2NvdW50fSBJdGVtcyBUb3RhbDwvcD5cclxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgKyAxfWB9PlxyXG4gICAgICAgIDxhIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPj0gcGFnZUNvdW50fT5OZXh0IOKGkjwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9QYWdpbmF0aW9uU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCBEZWxldGVQcm9kdWN0IGZyb20gJy4vRGVsZXRlUHJvZHVjdCc7XHJcbmltcG9ydCBJdGVtU3R5bGVzIGZyb20gJy4vc3R5bGVzL0l0ZW1TdHlsZXMnO1xyXG5pbXBvcnQgUHJpY2VUYWcgZnJvbSAnLi9zdHlsZXMvUHJpY2VUYWcnO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSAnLi9zdHlsZXMvVGl0bGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCh7IHByb2R1Y3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8SXRlbVN0eWxlcz5cclxuICAgICAgey8qIHF1ZXN0aW9uIG1hcmtzID0gb3B0aW9uYWwgY2hhaW5pbmcgLSBjaGVja3MgZXhpc3RlbmNlIGF0IGVhY2ggbWVtYmVyIG9mIGNoYWluIHRvIHByZXZlbnQgZXJyb3IgKi99XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBzcmM9e3Byb2R1Y3Q/LnBob3RvPy5pbWFnZT8ucHVibGljVXJsVHJhbnNmb3JtZWR9XHJcbiAgICAgICAgYWx0PXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUaXRsZT5cclxuICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9Pntwcm9kdWN0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICA8L1RpdGxlPlxyXG4gICAgICA8UHJpY2VUYWc+e2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfTwvUHJpY2VUYWc+XHJcbiAgICAgIDxwPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25MaXN0XCI+XHJcbiAgICAgICAgPExpbmtcclxuICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgcGF0aG5hbWU6ICcvdXBkYXRlJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICBpZDogcHJvZHVjdC5pZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRWRpdCDinI9cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPERlbGV0ZVByb2R1Y3QgaWQ9e3Byb2R1Y3QuaWR9PkRlbGV0ZTwvRGVsZXRlUHJvZHVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0l0ZW1TdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBwZXJQYWdlIH0gZnJvbSAnLi4vY29uZmlnJztcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBBTExfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgQUxMX1BST0RVQ1RTX1FVRVJZKCRza2lwOiBJbnQgPSAwLCAkZmlyc3Q6IEludCkge1xyXG4gICAgYWxsUHJvZHVjdHMoZmlyc3Q6ICRmaXJzdCwgc2tpcDogJHNraXApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9kdWN0c0xpc3QgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdyaWQtZ2FwOiA2MHB4O1xyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdHMoeyBwYWdlIH0pIHtcclxuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VRdWVyeShBTExfUFJPRFVDVFNfUVVFUlksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICBza2lwOiBwYWdlICogcGVyUGFnZSAtIHBlclBhZ2UsXHJcbiAgICAgIGZpcnN0OiBwZXJQYWdlLFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhkYXRhLCBlcnJvciwgbG9hZGluZyk7XHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjtcclxuICBpZiAoZXJyb3IpIHJldHVybiA8cD5FcnJvcjoge2Vycm9yLm1lc3NhZ2V9PC9wPjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFByb2R1Y3RzTGlzdD5cclxuICAgICAgICB7ZGF0YS5hbGxQcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxQcm9kdWN0IGtleT17cHJvZHVjdC5pZH0gcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9Qcm9kdWN0c0xpc3Q+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBJdGVtU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW9mZldoaXRlKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tYnMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuICBwIHtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBwYWRkaW5nOiAwIDNyZW07XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgLmJ1dHRvbkxpc3Qge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gICAgZ3JpZC1nYXA6IDFweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xuICAgICYgPiAqIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1TdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgUGFnaW5hdGlvblN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIGF1dG8pO1xuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0R3JheSk7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1yaWdodDogMDtcbiAgICB9XG4gIH1cbiAgYVthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uU3R5bGVzO1xuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IFByaWNlVGFnID0gc3R5bGVkLnNwYW5gXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDNkZWcpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTNweDtcbiAgcmlnaHQ6IC0zcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhZztcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBUaXRsZSA9IHN0eWxlZC5oM2BcbiAgbWFyZ2luOiAwIDFyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNmb3JtOiBza2V3KC01ZGVnKSByb3RhdGUoLTFkZWcpO1xuICBtYXJnaW4tdG9wOiAtM3JlbTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGEge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgZmlsbCBtZSBpbiB3aGVuIHdlIGRlcGxveWA7XG5leHBvcnQgY29uc3QgcGVyUGFnZSA9IDI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRNb25leShhbW91bnQgPSAwKSB7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHN0eWxlOiAnY3VycmVuY3knLFxyXG4gICAgY3VycmVuY3k6ICdVU0QnLFxyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gIH07XHJcblxyXG4gIC8vIGNoZWNrIGlmIGl0cyBhIGNsZWFuIGRvbGxhciBhbW91bnRcclxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XHJcbiAgICBvcHRpb25zLm1pbmltdW1GcmFjdGlvbkRpZ2l0cyA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXR0ZXIgPSBJbnRsLk51bWJlckZvcm1hdCgnZW4tVVMnLCBvcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoYW1vdW50IC8gMTAwKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBQcm9kdWN0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2R1Y3RzJztcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RzUGFnZSgpIHtcclxuICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBwYWdlID0gcGFyc2VJbnQocXVlcnkucGFnZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxQYWdpbmF0aW9uIHBhZ2U9e3BhZ2UgfHwgMX0gLz5cclxuICAgICAgPFByb2R1Y3RzIHBhZ2U9e3BhZ2UgfHwgMX0gLz5cclxuICAgICAgPFBhZ2luYXRpb24gcGFnZT17cGFnZSB8fCAxfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9