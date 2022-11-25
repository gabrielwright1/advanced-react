(function() {
var exports = {};
exports.id = "pages/signout";
exports.ids = ["pages/signout"];
exports.modules = {

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\SignOut.js";


const SIGN_OUT_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation {
    endSession
  }
`;
function SignOut({
  children
}) {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_2__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CURRENT_USER_QUERY": function() { return /* binding */ CURRENT_USER_QUERY; },
/* harmony export */   "useUser": function() { return /* binding */ useUser; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


const CURRENT_USER_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_1___default())`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        # TODO: Query the cart once we have it
      }
    }
  }
`;
function useUser() {
  const {
    data
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(CURRENT_USER_QUERY);
  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

/***/ }),

/***/ "./pages/signout.js":
/*!**************************!*\
  !*** ./pages/signout.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOutPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SignOut__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/SignOut */ "./components/SignOut.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\signout.js";

function SignOutPage() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SignOut__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/signout.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpZ25PdXQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9Vc2VyLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL3NpZ25vdXQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlNJR05fT1VUX01VVEFUSU9OIiwiZ3FsIiwiU2lnbk91dCIsImNoaWxkcmVuIiwic2lnbm91dCIsInVzZU11dGF0aW9uIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsIkNVUlJFTlRfVVNFUl9RVUVSWSIsInVzZVVzZXIiLCJkYXRhIiwidXNlUXVlcnkiLCJhdXRoZW50aWNhdGVkSXRlbSIsIlNpZ25PdXRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsaUJBQWlCLEdBQUdDLCtDQUFJO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLENBSkE7QUFNZSxTQUFTQyxPQUFULENBQWlCO0FBQUVDO0FBQUYsQ0FBakIsRUFBK0I7QUFDNUMsUUFBTSxDQUFDQyxPQUFELElBQVlDLDJEQUFXLENBQUNMLGlCQUFELEVBQW9CO0FBQy9DTSxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyxxREFBa0JBO0FBQTNCLEtBQUQ7QUFEK0IsR0FBcEIsQ0FBN0I7QUFHQSxzQkFDRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRUosT0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJEO0FBQ0E7QUFFTyxNQUFNSSxrQkFBa0IsR0FBR1Asb0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVhPO0FBYUEsU0FBU1EsT0FBVCxHQUFtQjtBQUN4QixRQUFNO0FBQUVDO0FBQUYsTUFBV0Msd0RBQVEsQ0FBQ0gsa0JBQUQsQ0FBekI7QUFDQSxTQUFPRSxJQUFQLGFBQU9BLElBQVAsdUJBQU9BLElBQUksQ0FBRUUsaUJBQWI7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRDtBQUVlLFNBQVNDLFdBQVQsR0FBdUI7QUFDcEMsc0JBQ0U7QUFBQSwyQkFDRSw4REFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQzs7Ozs7Ozs7Ozs7QUNSRCw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9zaWdub3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgQ1VSUkVOVF9VU0VSX1FVRVJZIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IFNJR05fT1VUX01VVEFUSU9OID0gZ3FsYFxyXG4gIG11dGF0aW9uIHtcclxuICAgIGVuZFNlc3Npb25cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduT3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtzaWdub3V0XSA9IHVzZU11dGF0aW9uKFNJR05fT1VUX01VVEFUSU9OLCB7XHJcbiAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17c2lnbm91dH0+XHJcbiAgICAgIFNpZ24gT3V0XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuXHJcbmV4cG9ydCBjb25zdCBDVVJSRU5UX1VTRVJfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkge1xyXG4gICAgYXV0aGVudGljYXRlZEl0ZW0ge1xyXG4gICAgICAuLi4gb24gVXNlciB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBlbWFpbFxyXG4gICAgICAgIG5hbWVcclxuICAgICAgICAjIFRPRE86IFF1ZXJ5IHRoZSBjYXJ0IG9uY2Ugd2UgaGF2ZSBpdFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShDVVJSRU5UX1VTRVJfUVVFUlkpO1xyXG4gIHJldHVybiBkYXRhPy5hdXRoZW50aWNhdGVkSXRlbTtcclxufVxyXG4iLCJpbXBvcnQgU2lnbk91dCBmcm9tICcuLi9jb21wb25lbnRzL1NpZ25PdXQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbk91dFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxTaWduT3V0IC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9