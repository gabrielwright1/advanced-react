self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./components/CreateProduct.js":
/*!*************************************!*\
  !*** ./components/CreateProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CreateProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\CreateProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation CREATE_PRODUCT_MUTATION(\n    # GraphQL variables + types\n    $name: String! # '!' makes it required\n    $description: String!\n    $price: Int!\n    $image: Upload\n  ) {\n    createProduct(\n      data: {\n        name: $name\n        description: $description\n        price: $price\n        status: \"AVAILABLE\"\n      }\n    ) {\n      # returned values\n      id\n      price\n      description\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var CREATE_PRODUCT_MUTATION = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.gql)(_templateObject());
function CreateProduct() {
  _s();

  var _useForm = (0,_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default)({
    // initial state
    image: '',
    name: 'Nice Shoes',
    price: 3412,
    description: 'These are the best shoes'
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      clearForm = _useForm.clearForm,
      resetForm = _useForm.resetForm;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation)(CREATE_PRODUCT_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      createProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error,
      data = _useMutation2$.data;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Form__WEBPACK_IMPORTED_MODULE_6__.default, {
    onSubmit: /*#__PURE__*/function () {
      var _ref = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(e) {
        return C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                console.log(inputs); //  Submit the inputfields to the backend

                _context.next = 4;
                return createProduct();

              case 4:
                clearForm();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("fieldset", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "image",
        children: ["Image", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          required: true,
          type: "file",
          id: "image",
          name: "image",
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          id: "name",
          name: "name",
          placeholder: "name",
          value: inputs.name,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "price",
        children: ["Price", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "number",
          id: "price",
          name: "price",
          placeholder: "price",
          value: inputs.price,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("label", {
        htmlFor: "description",
        children: ["Description", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
          id: "description",
          name: "description",
          placeholder: "Description",
          value: inputs.description,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "submit",
        children: "+ Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(CreateProduct, "RYAKW67IL5YWm7+bUw0UMSOGLYw=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_5__.default, _apollo_client__WEBPACK_IMPORTED_MODULE_7__.useMutation];
});

_c = CreateProduct;

var _c;

$RefreshReg$(_c, "CreateProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DcmVhdGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkNSRUFURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwiQ3JlYXRlUHJvZHVjdCIsInVzZUZvcm0iLCJpbWFnZSIsIm5hbWUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwiY2xlYXJGb3JtIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJjcmVhdGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiZGF0YSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MsbURBQUgsbUJBQTdCO0FBd0JlLFNBQVNDLGFBQVQsR0FBeUI7QUFBQTs7QUFBQSxpQkFDaUJDLHFEQUFPLENBQUM7QUFDN0Q7QUFDQUMsU0FBSyxFQUFFLEVBRnNEO0FBRzdEQyxRQUFJLEVBQUUsWUFIdUQ7QUFJN0RDLFNBQUssRUFBRSxJQUpzRDtBQUs3REMsZUFBVyxFQUFFO0FBTGdELEdBQUQsQ0FEeEI7QUFBQSxNQUM5QkMsTUFEOEIsWUFDOUJBLE1BRDhCO0FBQUEsTUFDdEJDLFlBRHNCLFlBQ3RCQSxZQURzQjtBQUFBLE1BQ1JDLFNBRFEsWUFDUkEsU0FEUTtBQUFBLE1BQ0dDLFNBREgsWUFDR0EsU0FESDs7QUFBQSxxQkFTWUMsMkRBQVcsQ0FDM0RaLHVCQUQyRCxFQUUzRDtBQUNFYSxhQUFTLEVBQUVMO0FBRGIsR0FGMkQsQ0FUdkI7QUFBQTtBQUFBLE1BUy9CTSxhQVQrQjtBQUFBO0FBQUEsTUFTZEMsT0FUYyxrQkFTZEEsT0FUYztBQUFBLE1BU0xDLEtBVEssa0JBU0xBLEtBVEs7QUFBQSxNQVNFQyxJQVRGLGtCQVNFQSxJQVRGOztBQWV0QyxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFlBQVE7QUFBQSxpVkFBRSxpQkFBT0MsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JBLGlCQUFDLENBQUNDLGNBQUY7QUFDQUMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZYixNQUFaLEVBRlEsQ0FHUjs7QUFIUTtBQUFBLHVCQUlGTSxhQUFhLEVBSlg7O0FBQUE7QUFLUkoseUJBQVM7O0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURWO0FBQUEsMkJBU0U7QUFBQSw4QkFDRTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEseUNBRUU7QUFDRSxrQkFBUSxNQURWO0FBRUUsY0FBSSxFQUFDLE1BRlA7QUFHRSxZQUFFLEVBQUMsT0FITDtBQUlFLGNBQUksRUFBQyxPQUpQO0FBS0Usa0JBQVEsRUFBRUQ7QUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBV0U7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVFO0FBQ0UsY0FBSSxFQUFDLE1BRFA7QUFFRSxZQUFFLEVBQUMsTUFGTDtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUscUJBQVcsRUFBQyxNQUpkO0FBS0UsZUFBSyxFQUFFRCxNQUFNLENBQUNILElBTGhCO0FBTUUsa0JBQVEsRUFBRUk7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhGLGVBc0JFO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFRTtBQUNFLGNBQUksRUFBQyxRQURQO0FBRUUsWUFBRSxFQUFDLE9BRkw7QUFHRSxjQUFJLEVBQUMsT0FIUDtBQUlFLHFCQUFXLEVBQUMsT0FKZDtBQUtFLGVBQUssRUFBRUQsTUFBTSxDQUFDRixLQUxoQjtBQU1FLGtCQUFRLEVBQUVHO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkYsZUFpQ0U7QUFBTyxlQUFPLEVBQUMsYUFBZjtBQUFBLCtDQUVFO0FBQ0UsWUFBRSxFQUFDLGFBREw7QUFFRSxjQUFJLEVBQUMsYUFGUDtBQUdFLHFCQUFXLEVBQUMsYUFIZDtBQUlFLGVBQUssRUFBRUQsTUFBTSxDQUFDRCxXQUpoQjtBQUtFLGtCQUFRLEVBQUVFO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqQ0YsZUEyQ0U7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5REQ7O0dBeEV1QlAsYTtVQUNpQ0MsaUQsRUFRTFMsdUQ7OztLQVQ1QlYsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWxsLjc1MTczNzMxMDMyYWM0OWQxMmI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5cclxuY29uc3QgQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gQ1JFQVRFX1BST0RVQ1RfTVVUQVRJT04oXHJcbiAgICAjIEdyYXBoUUwgdmFyaWFibGVzICsgdHlwZXNcclxuICAgICRuYW1lOiBTdHJpbmchICMgJyEnIG1ha2VzIGl0IHJlcXVpcmVkXHJcbiAgICAkZGVzY3JpcHRpb246IFN0cmluZyFcclxuICAgICRwcmljZTogSW50IVxyXG4gICAgJGltYWdlOiBVcGxvYWRcclxuICApIHtcclxuICAgIGNyZWF0ZVByb2R1Y3QoXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBuYW1lOiAkbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb25cclxuICAgICAgICBwcmljZTogJHByaWNlXHJcbiAgICAgICAgc3RhdHVzOiBcIkFWQUlMQUJMRVwiXHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICAjIHJldHVybmVkIHZhbHVlc1xyXG4gICAgICBpZFxyXG4gICAgICBwcmljZVxyXG4gICAgICBkZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENyZWF0ZVByb2R1Y3QoKSB7XHJcbiAgY29uc3QgeyBpbnB1dHMsIGhhbmRsZUNoYW5nZSwgY2xlYXJGb3JtLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgLy8gaW5pdGlhbCBzdGF0ZVxyXG4gICAgaW1hZ2U6ICcnLFxyXG4gICAgbmFtZTogJ05pY2UgU2hvZXMnLFxyXG4gICAgcHJpY2U6IDM0MTIsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoZXNlIGFyZSB0aGUgYmVzdCBzaG9lcycsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IFtjcmVhdGVQcm9kdWN0LCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBDUkVBVEVfUFJPRFVDVF9NVVRBVElPTixcclxuICAgIHtcclxuICAgICAgdmFyaWFibGVzOiBpbnB1dHMsXHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgb25TdWJtaXQ9e2FzeW5jIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlucHV0cyk7XHJcbiAgICAgICAgLy8gIFN1Ym1pdCB0aGUgaW5wdXRmaWVsZHMgdG8gdGhlIGJhY2tlbmRcclxuICAgICAgICBhd2FpdCBjcmVhdGVQcm9kdWN0KCk7XHJcbiAgICAgICAgY2xlYXJGb3JtKCk7XHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+XHJcbiAgICAgICAgICBJbWFnZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgaWQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICBOYW1lXHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMubmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInByaWNlXCI+XHJcbiAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMucHJpY2V9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgRGVzY3JpcHRpb25cclxuICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+KyBBZGQgUHJvZHVjdDwvYnV0dG9uPlxyXG4gICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgPC9Gb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==