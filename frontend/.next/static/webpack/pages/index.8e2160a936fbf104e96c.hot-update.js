self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/DeleteProduct.js":
/*!*************************************!*\
  !*** ./components/DeleteProduct.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DeleteProduct; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\DeleteProduct.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__.default)(["\n  mutation DELETE_PRODUCT_MUTATION($id: ID!) {\n    deleteProduct(id: $id) {\n      id\n      name\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var DELETE_PRODUCT_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_3__.default)(_templateObject());

function update(cache, payload) {
  console.log(payload);
  console.log('running the update function');
}

function DeleteProduct(_ref) {
  _s();

  var id = _ref.id,
      children = _ref.children;

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation)(DELETE_PRODUCT_MUTATION, {
    variables: {
      id: id
    },
    update: update
  }),
      _useMutation2 = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useMutation, 2),
      deleteProduct = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      loading = _useMutation2$.loading,
      error = _useMutation2$.error;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    disabled: loading,
    onClick: function onClick() {
      if (confirm('Are you sure you want to delete this item?')) {
        // go ahead and delete it
        console.log('DELETE');
        deleteProduct()["catch"](function (err) {
          return alert(err.message);
        });
      }
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(DeleteProduct, "Ps0J/kGno/pxP02U3XEwZE1Q1Tg=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useMutation];
});

_c = DeleteProduct;

var _c;

$RefreshReg$(_c, "DeleteProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EZWxldGVQcm9kdWN0LmpzIl0sIm5hbWVzIjpbIkRFTEVURV9QUk9EVUNUX01VVEFUSU9OIiwiZ3FsIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsIkRlbGV0ZVByb2R1Y3QiLCJpZCIsImNoaWxkcmVuIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJkZWxldGVQcm9kdWN0IiwibG9hZGluZyIsImVycm9yIiwiY29uZmlybSIsImVyciIsImFsZXJ0IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0Msb0RBQUgsbUJBQTdCOztBQVNBLFNBQVNDLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDRDs7QUFFYyxTQUFTQyxhQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBaEJDLEVBQWdCLFFBQWhCQSxFQUFnQjtBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxxQkFDVkMsMkRBQVcsQ0FDckRWLHVCQURxRCxFQUVyRDtBQUNFVyxhQUFTLEVBQUU7QUFBRUgsUUFBRSxFQUFGQTtBQUFGLEtBRGI7QUFFRU4sVUFBTSxFQUFOQTtBQUZGLEdBRnFELENBREQ7QUFBQTtBQUFBLE1BQy9DVSxhQUQrQztBQUFBO0FBQUEsTUFDOUJDLE9BRDhCLGtCQUM5QkEsT0FEOEI7QUFBQSxNQUNyQkMsS0FEcUIsa0JBQ3JCQSxLQURxQjs7QUFRdEQsc0JBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFlBQVEsRUFBRUQsT0FGWjtBQUdFLFdBQU8sRUFBRSxtQkFBTTtBQUNiLFVBQUlFLE9BQU8sQ0FBQyw0Q0FBRCxDQUFYLEVBQTJEO0FBQ3pEO0FBQ0FWLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQU0scUJBQWEsV0FBYixDQUFzQixVQUFDSSxHQUFEO0FBQUEsaUJBQVNDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDRSxPQUFMLENBQWQ7QUFBQSxTQUF0QjtBQUNEO0FBQ0YsS0FUSDtBQUFBLGNBV0dUO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZUQ7O0dBdkJ1QkYsYTtVQUNzQkcsdUQ7OztLQUR0QkgsYSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZTIxNjBhOTM2ZmJmMTA0ZTk2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5cclxuY29uc3QgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gREVMRVRFX1BST0RVQ1RfTVVUQVRJT04oJGlkOiBJRCEpIHtcclxuICAgIGRlbGV0ZVByb2R1Y3QoaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlKGNhY2hlLCBwYXlsb2FkKSB7XHJcbiAgY29uc29sZS5sb2cocGF5bG9hZCk7XHJcbiAgY29uc29sZS5sb2coJ3J1bm5pbmcgdGhlIHVwZGF0ZSBmdW5jdGlvbicpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZWxldGVQcm9kdWN0KHsgaWQsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbZGVsZXRlUHJvZHVjdCwgeyBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFxyXG4gICAgREVMRVRFX1BST0RVQ1RfTVVUQVRJT04sXHJcbiAgICB7XHJcbiAgICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgICB1cGRhdGUsXHJcbiAgICB9XHJcbiAgKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICBpZiAoY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGl0ZW0/JykpIHtcclxuICAgICAgICAgIC8vIGdvIGFoZWFkIGFuZCBkZWxldGUgaXRcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdERUxFVEUnKTtcclxuICAgICAgICAgIGRlbGV0ZVByb2R1Y3QoKS5jYXRjaCgoZXJyKSA9PiBhbGVydChlcnIubWVzc2FnZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9