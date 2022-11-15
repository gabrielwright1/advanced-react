(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Header.js";



const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;background:red;transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:center;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "Sick Fits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Nav.js";

function Nav() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/sell",
      children: "Sell"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/orders",
      children: "Orders"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/account",
      children: "Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Page.js";



const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["@font-face{font-family:\"radnika_next\";src:url(\"/static/radnikanext-medium-webfont.woff2\") format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3a3a3a;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:62.5%;}*,*::before,*:after{box-sizing:inherit;}body{font-family:\"radnika_next\",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(---black);}a:hover{text-decoration:underline;}button{font-family:\"radnika_next\",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]);
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

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
const perPage = 4;

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");







function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {// TODO: We will add this together!
            // allProducts: paginationField(),
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/prop-types */





 // Loader animation

next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start());
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_5__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
} // Boilerplate to make NextJS + Apollo work together


MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  } // gives us access to query variables at a page level (i.e. /products)


  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_6__.default)(MyApp));

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29uZmlnLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi93aXRoRGF0YS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9saW5rLWVycm9yXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0LXdpdGgtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2lnbm9yZWR8QzpcXHdlYmRlc2lnblxccHJvamVjdHNcXGFkdmFuY2VkLXJlYWN0XFxmcm9udGVuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkxvZ28iLCJzdHlsZWQiLCJIZWFkZXJTdHlsZXMiLCJIZWFkZXIiLCJOYXYiLCJHbG9iYWxTdHlsZXMiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIklubmVyU3R5bGVzIiwiUGFnZSIsImNoaWxkcmVuIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYW55IiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJwZXJQYWdlIiwiY3JlYXRlQ2xpZW50IiwiaGVhZGVycyIsImluaXRpYWxTdGF0ZSIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJBcG9sbG9MaW5rIiwib25FcnJvciIsImdyYXBoUUxFcnJvcnMiLCJuZXR3b3JrRXJyb3IiLCJmb3JFYWNoIiwibWVzc2FnZSIsImxvY2F0aW9ucyIsInBhdGgiLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVXBsb2FkTGluayIsInVyaSIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSIsIlJvdXRlciIsIk5Qcm9ncmVzcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJ3aXRoRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLDBMQUFWO0FBZUEsTUFBTUMsWUFBWSxHQUFHRCwwRUFBSDtBQUFBO0FBQUE7QUFBQSx3UEFBbEI7QUFlZSxTQUFTRSxNQUFULEdBQWtCO0FBQy9CLHNCQUNFLDhEQUFDLFlBQUQ7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsNkJBQ0UsOERBQUMsSUFBRDtBQUFBLCtCQUNFLDhEQUFDLGtEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBU0UsOERBQUMseUNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBYUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEREO0FBRWUsU0FBU0MsR0FBVCxHQUFlO0FBQzVCLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7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X2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2JztcclxuXHJcbmNvbnN0IExvZ28gPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICB0cmFuc2Zvcm06IHNrZXcoLTdkZWcpO1xyXG4gIGEge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IEhlYWRlclN0eWxlcyA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgLmJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkIHZhcigtLWJsYWNrLCBibGFjayk7IC8vIHVzZSB2YXJpYWJsZSwgZmFsbGJhY2sgdG8gYmxhY2tcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLnN1Yi1iYXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2ssIGJsYWNrKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXJTdHlsZXM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XHJcbiAgICAgICAgPExvZ28+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlNpY2sgRml0czwvTGluaz5cclxuICAgICAgICA8L0xvZ28+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Yi1iYXJcIj5cclxuICAgICAgICA8cD5TZWFyY2g8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8TmF2IC8+XHJcbiAgICA8L0hlYWRlclN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXY+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdHNcIj5Qcm9kdWN0czwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9zZWxsXCI+U2VsbDwvTGluaz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9vcmRlcnNcIj5PcmRlcnM8L0xpbms+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPkFjY291bnQ8L0xpbms+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJyYWRuaWthX25leHRcIjtcclxuICAgIHNyYzogdXJsKFwiL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMlwiKVxyXG4gICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiAgaHRtbCB7XHJcbiAgICAtLXJlZDogI2ZmMDAwMDtcclxuICAgIC0tYmxhY2s6ICMzOTM5Mzk7XHJcbiAgICAtLWdyZXk6IzNhM2EzYTtcclxuICAgIC0tZ3JheTogdmFyKC0tZ3JleSk7IC8vIGJhY2t1cCBmb3IgY2FuYWRpYW4gc3BlbGxpbmdcclxuICAgIC0tbGlnaHRHcmV5OiAjZTFlMWUxO1xyXG4gICAgLS1saWdodEdyYXk6IHZhcigtLWxpZ2h0R3JleSk7XHJcbiAgICAtLW9mZldoaXRlOiAjZWRlZGVkO1xyXG4gICAgLS1tYXhXaWR0aDogMTAwMHB4O1xyXG4gICAgLS1iczogMCAxMnB4IDI0cHggMCByZ2JhKDAsMCwwLDAuMDkpOyAvLyBib3ggc2hhZG93XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxuICB9XHJcbiAgKiwgKjo6YmVmb3JlLCAqOmFmdGVye1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbiAgYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJhZG5pa2FfbmV4dFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwOyBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tLWJsYWNrKTtcclxuICB9XHJcbiAgYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiBcInJhZG5pa2FfbmV4dFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5uZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogdmFyKC0tbWF4V2lkdGgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPElubmVyU3R5bGVzPntjaGlsZHJlbn08L0lubmVyU3R5bGVzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXHJcbn07XHJcbiIsIi8vIFRoaXMgaXMgY2xpZW50IHNpZGUgY29uZmlnIG9ubHkgLSBkb24ndCBwdXQgYW55dGhpbmcgaW4gaGVyZSB0aGF0IHNob3VsZG4ndCBiZSBwdWJsaWMhXG5leHBvcnQgY29uc3QgZW5kcG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9ncmFwaHFsYDtcbmV4cG9ydCBjb25zdCBwcm9kRW5kcG9pbnQgPSBgZmlsbCBtZSBpbiB3aGVuIHdlIGRlcGxveWA7XG5leHBvcnQgY29uc3QgcGVyUGFnZSA9IDQ7XG4iLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEFwb2xsb0xpbmssIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnQGFwb2xsby9saW5rLWVycm9yJztcbmltcG9ydCB7IGdldERhdGFGcm9tVHJlZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50L3JlYWN0L3Nzcic7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSAnYXBvbGxvLXVwbG9hZC1jbGllbnQnO1xuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XG5pbXBvcnQgeyBlbmRwb2ludCwgcHJvZEVuZHBvaW50IH0gZnJvbSAnLi4vY29uZmlnJztcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHsgaGVhZGVycywgaW5pdGlhbFN0YXRlIH0pIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbXG4gICAgICBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxuICAgICAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn0uIEJhY2tlbmQgaXMgdW5yZWFjaGFibGUuIElzIGl0IHJ1bm5pbmc/YFxuICAgICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIC8vIHRoaXMgdXNlcyBhcG9sbG8tbGluay1odHRwIHVuZGVyIHRoZSBob29kLCBzbyBhbGwgdGhlIG9wdGlvbnMgaGVyZSBjb21lIGZyb20gdGhhdCBwYWNrYWdlXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICAgICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGVuZHBvaW50IDogcHJvZEVuZHBvaW50LFxuICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBwYXNzIHRoZSBoZWFkZXJzIGFsb25nIGZyb20gdGhpcyByZXF1ZXN0LiBUaGlzIGVuYWJsZXMgU1NSIHdpdGggbG9nZ2VkIGluIHN0YXRlXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KSxcbiAgICBdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBXZSB3aWxsIGFkZCB0aGlzIHRvZ2V0aGVyIVxuICAgICAgICAgICAgLy8gYWxsUHJvZHVjdHM6IHBhZ2luYXRpb25GaWVsZCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50LCB7IGdldERhdGFGcm9tVHJlZSB9KTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cclxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCAnLi4vY29tcG9uZW50cy9zdHlsZXMvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9QYWdlJztcclxuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2xpYi93aXRoRGF0YSc7XHJcblxyXG4vLyBMb2FkZXIgYW5pbWF0aW9uXHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvfT5cclxuICAgICAgPFBhZ2U+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1BhZ2U+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEJvaWxlcnBsYXRlIHRvIG1ha2UgTmV4dEpTICsgQXBvbGxvIHdvcmsgdG9nZXRoZXJcclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIH1cclxuICAvLyBnaXZlcyB1cyBhY2Nlc3MgdG8gcXVlcnkgdmFyaWFibGVzIGF0IGEgcGFnZSBsZXZlbCAoaS5lLiAvcHJvZHVjdHMpXHJcbiAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoTXlBcHApO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2xpbmstZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby11cGxvYWQtY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXdpdGgtYXBvbGxvXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==