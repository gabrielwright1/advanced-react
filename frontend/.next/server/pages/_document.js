/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyDocument; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/gabrielwright/WebDevProjects/Projects/advanced-react/frontend/pages/_document.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/* eslint-disable react/jsx-props-no-spreading */\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n  // SSR Tooling for NextJS + Styled Components\n  static async getInitialProps(ctx) {\n    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n    const originalRenderPage = ctx.renderPage;\n\n    try {\n      ctx.renderPage = () => originalRenderPage({\n        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, _objectSpread({}, props), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 33\n        }, this))\n      });\n\n      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n      return _objectSpread(_objectSpread({}, initialProps), {}, {\n        styles: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: [initialProps.styles, sheet.getStyleElement()]\n        }, void 0, true)\n      });\n    } finally {\n      sheet.seal();\n    }\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n      lang: \"en-CA\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9fZG9jdW1lbnQuanM/ZTcwZCJdLCJuYW1lcyI6WyJNeURvY3VtZW50IiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzaGVldCIsIlNlcnZlclN0eWxlU2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsInN0eWxlcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsTUFBTUEsVUFBTixTQUF5QkMsc0RBQXpCLENBQWtDO0FBQy9DO0FBQ0EsZUFBYUMsZUFBYixDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsVUFBTUMsS0FBSyxHQUFHLElBQUlDLCtEQUFKLEVBQWQ7QUFDQSxVQUFNQyxrQkFBa0IsR0FBR0gsR0FBRyxDQUFDSSxVQUEvQjs7QUFFQSxRQUFJO0FBQ0ZKLFNBQUcsQ0FBQ0ksVUFBSixHQUFpQixNQUNmRCxrQkFBa0IsQ0FBQztBQUNqQkUsa0JBQVUsRUFBR0MsR0FBRCxJQUFVQyxLQUFELElBQ25CTixLQUFLLENBQUNPLGFBQU4sZUFBb0IsOERBQUMsR0FBRCxvQkFBU0QsS0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFwQjtBQUZlLE9BQUQsQ0FEcEI7O0FBTUEsWUFBTUUsWUFBWSxHQUFHLE1BQU1YLG9FQUFBLENBQXlCRSxHQUF6QixDQUEzQjtBQUNBLDZDQUNLUyxZQURMO0FBRUVDLGNBQU0sZUFDSjtBQUFBLHFCQUNHRCxZQUFZLENBQUNDLE1BRGhCLEVBRUdULEtBQUssQ0FBQ1UsZUFBTixFQUZIO0FBQUE7QUFISjtBQVNELEtBakJELFNBaUJVO0FBQ1JWLFdBQUssQ0FBQ1csSUFBTjtBQUNEO0FBQ0Y7O0FBRURDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLCtDQUFEO0FBQU0sVUFBSSxFQUFDLE9BQVg7QUFBQSw4QkFDRSw4REFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGdDQUNFLDhEQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBU0Q7O0FBdEM4QyIsImZpbGUiOiIuL3BhZ2VzL19kb2N1bWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1wcm9wcy1uby1zcHJlYWRpbmcgKi9cbmltcG9ydCBEb2N1bWVudCwgeyBIdG1sLCBIZWFkLCBOZXh0U2NyaXB0LCBNYWluIH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICAvLyBTU1IgVG9vbGluZyBmb3IgTmV4dEpTICsgU3R5bGVkIENvbXBvbmVudHNcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICBjb25zdCBzaGVldCA9IG5ldyBTZXJ2ZXJTdHlsZVNoZWV0KCk7XG4gICAgY29uc3Qgb3JpZ2luYWxSZW5kZXJQYWdlID0gY3R4LnJlbmRlclBhZ2U7XG5cbiAgICB0cnkge1xuICAgICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgICAgICBvcmlnaW5hbFJlbmRlclBhZ2Uoe1xuICAgICAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT5cbiAgICAgICAgICAgIHNoZWV0LmNvbGxlY3RTdHlsZXMoPEFwcCB7Li4ucHJvcHN9IC8+KSxcbiAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uaW5pdGlhbFByb3BzLFxuICAgICAgICBzdHlsZXM6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAge2luaXRpYWxQcm9wcy5zdHlsZXN9XG4gICAgICAgICAgICB7c2hlZXQuZ2V0U3R5bGVFbGVtZW50KCl9XG4gICAgICAgICAgPC8+XG4gICAgICAgICksXG4gICAgICB9O1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzaGVldC5zZWFsKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8SHRtbCBsYW5nPVwiZW4tQ0FcIj5cbiAgICAgICAgPEhlYWQgLz5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPE1haW4gLz5cbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L0h0bWw+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

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

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./pages/_document.js"); });
module.exports = __webpack_exports__;

})();