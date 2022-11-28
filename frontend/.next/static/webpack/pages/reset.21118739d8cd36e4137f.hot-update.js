/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/reset",{

/***/ "./components/Reset.js":
/*!*****************************!*\
  !*** ./components/Reset.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Reset; }\n/* harmony export */ });\n/* harmony import */ var _Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ \"./lib/useForm.js\");\n/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ \"./components/styles/Form.js\");\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/gabrielwright/WebDevProjects/Projects/advanced-react/frontend/components/Reset.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)([\"\\n  mutation RESET_MUTATION(\\n    $email: String!\\n    $password: String!\\n    $token: String!\\n  ) {\\n    redeemUserPasswordResetToken(\\n      email: $email\\n      token: $token\\n      password: $password\\n    ) {\\n      code\\n      message\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar RESET_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_9__.default)(_templateObject());\nfunction Reset() {\n  _s();\n\n  var _data$redeemUserPassw, _data$redeemUserPassw2;\n\n  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)({\n    email: '',\n    password: '',\n    token: ''\n  }),\n      inputs = _useForm.inputs,\n      handleChange = _useForm.handleChange,\n      resetForm = _useForm.resetForm;\n\n  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(RESET_MUTATION, {\n    variables: inputs\n  }),\n      _useMutation2 = (0,_Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),\n      reset = _useMutation2[0],\n      _useMutation2$ = _useMutation2[1],\n      data = _useMutation2$.data,\n      loading = _useMutation2$.loading;\n\n  var error = data !== null && data !== void 0 && (_data$redeemUserPassw = data.redeemUserPasswordResetToken) !== null && _data$redeemUserPassw !== void 0 && _data$redeemUserPassw.code ? data === null || data === void 0 ? void 0 : (_data$redeemUserPassw2 = data.redeemUserPasswordResetToken) === null || _data$redeemUserPassw2 === void 0 ? void 0 : _data$redeemUserPassw2.code : undefined;\n  console.log(error);\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = (0,_Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n      var res;\n      return _Users_gabrielwright_WebDevProjects_Projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault(); // stop form from submitting\n\n              console.log(inputs);\n              _context.next = 4;\n              return reset()[\"catch\"](console.error);\n\n            case 4:\n              res = _context.sent;\n              console.log(res);\n              console.log({\n                data: data,\n                loading: loading,\n                error: error\n              });\n              resetForm(); // send the email/password to GraphQL API\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return (\n    /*#__PURE__*/\n    // eslint-disable-next-line react/jsx-no-bind\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_6__.default, {\n      method: \"POST\",\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        children: \"Reset Your Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__.default, {\n        error: error\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"fieldset\", {\n        children: [(data === null || data === void 0 ? void 0 : data.redeemUserPasswordResetToken) === null && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n          children: \"Success! WORDS WORDS WORDS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"email\",\n          children: [\"Email\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"email\",\n            name: \"email\",\n            placeholder: \"Your email address\",\n            autoComplete: \"email\",\n            value: inputs.email,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n          htmlFor: \"password\",\n          children: [\"Password\", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n            type: \"password\",\n            name: \"password\",\n            placeholder: \"Password\",\n            autoComplete: \"password\",\n            value: inputs.password,\n            onChange: handleChange\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 9\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          type: \"submit\",\n          children: \"Request Reset!\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }, this)\n  );\n}\n\n_s(Reset, \"alDvxMuZNB4mp77alRXABwWf3Ek=\", false, function () {\n  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation];\n});\n\n_c = Reset;\n\nvar _c;\n\n$RefreshReg$(_c, \"Reset\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNldC5qcz9hMDgwIl0sIm5hbWVzIjpbIlJFU0VUX01VVEFUSU9OIiwiZ3FsIiwiUmVzZXQiLCJ1c2VGb3JtIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJyZXNldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuIiwiY29kZSIsInVuZGVmaW5lZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxjQUFjLEdBQUdDLG9EQUFILG1CQUFwQjtBQWlCZSxTQUFTQyxLQUFULEdBQWlCO0FBQUE7O0FBQUE7O0FBQUEsaUJBQ2NDLHFEQUFPLENBQUM7QUFDbERDLFNBQUssRUFBRSxFQUQyQztBQUVsREMsWUFBUSxFQUFFLEVBRndDO0FBR2xEQyxTQUFLLEVBQUU7QUFIMkMsR0FBRCxDQURyQjtBQUFBLE1BQ3RCQyxNQURzQixZQUN0QkEsTUFEc0I7QUFBQSxNQUNkQyxZQURjLFlBQ2RBLFlBRGM7QUFBQSxNQUNBQyxTQURBLFlBQ0FBLFNBREE7O0FBQUEscUJBTUtDLDREQUFXLENBQUNWLGNBQUQsRUFBaUI7QUFDN0RXLGFBQVMsRUFBRUo7QUFEa0QsR0FBakIsQ0FOaEI7QUFBQTtBQUFBLE1BTXZCSyxLQU51QjtBQUFBO0FBQUEsTUFNZEMsSUFOYyxrQkFNZEEsSUFOYztBQUFBLE1BTVJDLE9BTlEsa0JBTVJBLE9BTlE7O0FBVTlCLE1BQU1DLEtBQUssR0FBR0YsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiw2QkFBQUEsSUFBSSxDQUFFRyw0QkFBTix3RUFBb0NDLElBQXBDLEdBQ1ZKLElBRFUsYUFDVkEsSUFEVSxpREFDVkEsSUFBSSxDQUFFRyw0QkFESSwyREFDVix1QkFBb0NDLElBRDFCLEdBRVZDLFNBRko7QUFJQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQVo7O0FBZDhCLFdBZWZNLFlBZmU7QUFBQTtBQUFBOztBQUFBO0FBQUEsb1lBZTlCLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VBLGVBQUMsQ0FBQ0MsY0FBRixHQURGLENBQ3NCOztBQUNwQkoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaO0FBRkY7QUFBQSxxQkFHb0JLLEtBQUssV0FBTCxDQUFjTyxPQUFPLENBQUNKLEtBQXRCLENBSHBCOztBQUFBO0FBR1FTLGlCQUhSO0FBSUVMLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBWjtBQUNBTCxxQkFBTyxDQUFDQyxHQUFSLENBQVk7QUFBRVAsb0JBQUksRUFBSkEsSUFBRjtBQUFRQyx1QkFBTyxFQUFQQSxPQUFSO0FBQWlCQyxxQkFBSyxFQUFMQTtBQUFqQixlQUFaO0FBQ0FOLHVCQUFTLEdBTlgsQ0FPRTs7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWY4QjtBQUFBO0FBQUE7O0FBeUI5QjtBQUFBO0FBQ0U7QUFDQSxrRUFBQyxpREFBRDtBQUFNLFlBQU0sRUFBQyxNQUFiO0FBQW9CLGNBQVEsRUFBRVksWUFBOUI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTyxhQUFLLEVBQUVOO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBQSxtQkFDRyxDQUFBRixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRUcsNEJBQU4sTUFBdUMsSUFBdkMsaUJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFJRTtBQUFPLGlCQUFPLEVBQUMsT0FBZjtBQUFBLDJDQUVFO0FBQ0UsZ0JBQUksRUFBQyxPQURQO0FBRUUsZ0JBQUksRUFBQyxPQUZQO0FBR0UsdUJBQVcsRUFBQyxvQkFIZDtBQUlFLHdCQUFZLEVBQUMsT0FKZjtBQUtFLGlCQUFLLEVBQUVULE1BQU0sQ0FBQ0gsS0FMaEI7QUFNRSxvQkFBUSxFQUFFSTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGLGVBZUU7QUFBTyxpQkFBTyxFQUFDLFVBQWY7QUFBQSw4Q0FFRTtBQUNFLGdCQUFJLEVBQUMsVUFEUDtBQUVFLGdCQUFJLEVBQUMsVUFGUDtBQUdFLHVCQUFXLEVBQUMsVUFIZDtBQUlFLHdCQUFZLEVBQUMsVUFKZjtBQUtFLGlCQUFLLEVBQUVELE1BQU0sQ0FBQ0YsUUFMaEI7QUFNRSxvQkFBUSxFQUFFRztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWZGLGVBMEJFO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZGO0FBbUNEOztHQTVEdUJOLEs7VUFDc0JDLGlELEVBS1RPLHdEOzs7S0FOYlIsSyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVzZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xuaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xuaW1wb3J0IEVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcblxuY29uc3QgUkVTRVRfTVVUQVRJT04gPSBncWxgXG4gIG11dGF0aW9uIFJFU0VUX01VVEFUSU9OKFxuICAgICRlbWFpbDogU3RyaW5nIVxuICAgICRwYXNzd29yZDogU3RyaW5nIVxuICAgICR0b2tlbjogU3RyaW5nIVxuICApIHtcbiAgICByZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuKFxuICAgICAgZW1haWw6ICRlbWFpbFxuICAgICAgdG9rZW46ICR0b2tlblxuICAgICAgcGFzc3dvcmQ6ICRwYXNzd29yZFxuICAgICkge1xuICAgICAgY29kZVxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZXQoKSB7XG4gIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgICB0b2tlbjogJycsXG4gIH0pO1xuICBjb25zdCBbcmVzZXQsIHsgZGF0YSwgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFJFU0VUX01VVEFUSU9OLCB7XG4gICAgdmFyaWFibGVzOiBpbnB1dHMsXG4gIH0pO1xuXG4gIGNvbnN0IGVycm9yID0gZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbj8uY29kZVxuICAgID8gZGF0YT8ucmVkZWVtVXNlclBhc3N3b3JkUmVzZXRUb2tlbj8uY29kZVxuICAgIDogdW5kZWZpbmVkO1xuXG4gIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgZm9ybSBmcm9tIHN1Ym1pdHRpbmdcbiAgICBjb25zb2xlLmxvZyhpbnB1dHMpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHJlc2V0KCkuY2F0Y2goY29uc29sZS5lcnJvcik7XG4gICAgY29uc29sZS5sb2cocmVzKTtcbiAgICBjb25zb2xlLmxvZyh7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0pO1xuICAgIHJlc2V0Rm9ybSgpO1xuICAgIC8vIHNlbmQgdGhlIGVtYWlsL3Bhc3N3b3JkIHRvIEdyYXBoUUwgQVBJXG4gIH1cblxuICByZXR1cm4gKFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9qc3gtbm8tYmluZFxuICAgIDxGb3JtIG1ldGhvZD1cIlBPU1RcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxoMj5SZXNldCBZb3VyIFBhc3N3b3JkPC9oMj5cbiAgICAgIDxFcnJvciBlcnJvcj17ZXJyb3J9IC8+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIHtkYXRhPy5yZWRlZW1Vc2VyUGFzc3dvcmRSZXNldFRva2VuID09PSBudWxsICYmIChcbiAgICAgICAgICA8cD5TdWNjZXNzISBXT1JEUyBXT1JEUyBXT1JEUzwvcD5cbiAgICAgICAgKX1cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxuICAgICAgICAgIEVtYWlsXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbCBhZGRyZXNzXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZW1haWx9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlcXVlc3QgUmVzZXQhPC9idXR0b24+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvRm9ybT5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Reset.js\n");

/***/ })

});