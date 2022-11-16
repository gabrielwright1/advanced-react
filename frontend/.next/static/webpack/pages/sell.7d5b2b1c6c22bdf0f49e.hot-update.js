self["webpackHotUpdate_N_E"]("pages/sell",{

/***/ "./lib/useForm.js":
/*!************************!*\
  !*** ./lib/useForm.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useForm; }
/* harmony export */ });
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function useForm() {
  _s();

  var initial = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // create a state object for our inputs
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initial),
      inputs = _useState[0],
      setInputs = _useState[1]; // {
  //     name: 'wes',
  //     description: 'nice shoes',
  //     price: 1000
  // }


  function handleChange(e) {
    var _e$target = e.target,
        name = _e$target.name,
        type = _e$target.type,
        value = _e$target.value;

    if (type === 'number') {
      value = parseInt(value);
    }

    if (type === 'file') {
      value = e.target.files;
    }

    setInputs(_objectSpread(_objectSpread({}, inputs), {}, (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value)));
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    var blankState = Object.fromEntries(Object.entries(inputs).map(function (_ref) {
      var _ref2 = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return [key, ''];
    }));
    setInputs(blankState);
  } // return the things we want to surface from this custom hook


  return {
    inputs: inputs,
    handleChange: handleChange,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

_s(useForm, "0tjT+aoDVbAe0wsQZsq9AKLCE20=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3VzZUZvcm0uanMiXSwibmFtZXMiOlsidXNlRm9ybSIsImluaXRpYWwiLCJ1c2VTdGF0ZSIsImlucHV0cyIsInNldElucHV0cyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidHlwZSIsInZhbHVlIiwicGFyc2VJbnQiLCJmaWxlcyIsInJlc2V0Rm9ybSIsImNsZWFyRm9ybSIsImJsYW5rU3RhdGUiLCJPYmplY3QiLCJmcm9tRW50cmllcyIsImVudHJpZXMiLCJtYXAiLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUErQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFDNUM7QUFENEMsa0JBRWhCQywrQ0FBUSxDQUFDRCxPQUFELENBRlE7QUFBQSxNQUVyQ0UsTUFGcUM7QUFBQSxNQUU3QkMsU0FGNkIsaUJBSTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFdBQVNDLFlBQVQsQ0FBc0JDLENBQXRCLEVBQXlCO0FBQUEsb0JBQ0tBLENBQUMsQ0FBQ0MsTUFEUDtBQUFBLFFBQ2pCQyxJQURpQixhQUNqQkEsSUFEaUI7QUFBQSxRQUNYQyxJQURXLGFBQ1hBLElBRFc7QUFBQSxRQUNMQyxLQURLLGFBQ0xBLEtBREs7O0FBR3ZCLFFBQUlELElBQUksS0FBSyxRQUFiLEVBQXVCO0FBQ3JCQyxXQUFLLEdBQUdDLFFBQVEsQ0FBQ0QsS0FBRCxDQUFoQjtBQUNEOztBQUVELFFBQUlELElBQUksS0FBSyxNQUFiLEVBQXFCO0FBQ25CQyxXQUFLLEdBQUdKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSyxLQUFqQjtBQUNEOztBQUVEUixhQUFTLGlDQUdKRCxNQUhJLHlLQUlOSyxJQUpNLEVBSUNFLEtBSkQsR0FBVDtBQU1EOztBQUVELFdBQVNHLFNBQVQsR0FBcUI7QUFDbkJULGFBQVMsQ0FBQ0gsT0FBRCxDQUFUO0FBQ0Q7O0FBRUQsV0FBU2EsU0FBVCxHQUFxQjtBQUNuQixRQUFNQyxVQUFVLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBUCxDQUNqQkQsTUFBTSxDQUFDRSxPQUFQLENBQWVmLE1BQWYsRUFBdUJnQixHQUF2QixDQUEyQjtBQUFBO0FBQUEsVUFBRUMsR0FBRjtBQUFBLFVBQU9WLEtBQVA7O0FBQUEsYUFBa0IsQ0FBQ1UsR0FBRCxFQUFNLEVBQU4sQ0FBbEI7QUFBQSxLQUEzQixDQURpQixDQUFuQjtBQUdBaEIsYUFBUyxDQUFDVyxVQUFELENBQVQ7QUFDRCxHQXRDMkMsQ0F3QzVDOzs7QUFDQSxTQUFPO0FBQ0xaLFVBQU0sRUFBTkEsTUFESztBQUVMRSxnQkFBWSxFQUFaQSxZQUZLO0FBR0xRLGFBQVMsRUFBVEEsU0FISztBQUlMQyxhQUFTLEVBQVRBO0FBSkssR0FBUDtBQU1EOztHQS9DdUJkLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VsbC43ZDViMmIxYzZjMjJiZGYwZjQ5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JtKGluaXRpYWwgPSB7fSkge1xyXG4gIC8vIGNyZWF0ZSBhIHN0YXRlIG9iamVjdCBmb3Igb3VyIGlucHV0c1xyXG4gIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZShpbml0aWFsKTtcclxuXHJcbiAgLy8ge1xyXG4gIC8vICAgICBuYW1lOiAnd2VzJyxcclxuICAvLyAgICAgZGVzY3JpcHRpb246ICduaWNlIHNob2VzJyxcclxuICAvLyAgICAgcHJpY2U6IDEwMDBcclxuICAvLyB9XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShlKSB7XHJcbiAgICBsZXQgeyBuYW1lLCB0eXBlLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHZhbHVlID0gcGFyc2VJbnQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnZmlsZScpIHtcclxuICAgICAgdmFsdWUgPSBlLnRhcmdldC5maWxlcztcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnB1dHMoe1xyXG4gICAgICAvLyBjb3B5IHRoZSBleGlzdGluZyBzdGF0ZVxyXG4gICAgICAvLyB1cGRhdGUgcGllY2Ugb2Ygc3RhdGUgKGR5bmFtaWMgcHJvcGVydHkpXHJcbiAgICAgIC4uLmlucHV0cyxcclxuICAgICAgW25hbWVdOiB2YWx1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRGb3JtKCkge1xyXG4gICAgc2V0SW5wdXRzKGluaXRpYWwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gICAgY29uc3QgYmxhbmtTdGF0ZSA9IE9iamVjdC5mcm9tRW50cmllcyhcclxuICAgICAgT2JqZWN0LmVudHJpZXMoaW5wdXRzKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW2tleSwgJyddKVxyXG4gICAgKTtcclxuICAgIHNldElucHV0cyhibGFua1N0YXRlKTtcclxuICB9XHJcblxyXG4gIC8vIHJldHVybiB0aGUgdGhpbmdzIHdlIHdhbnQgdG8gc3VyZmFjZSBmcm9tIHRoaXMgY3VzdG9tIGhvb2tcclxuICByZXR1cm4ge1xyXG4gICAgaW5wdXRzLFxyXG4gICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgcmVzZXRGb3JtLFxyXG4gICAgY2xlYXJGb3JtLFxyXG4gIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==