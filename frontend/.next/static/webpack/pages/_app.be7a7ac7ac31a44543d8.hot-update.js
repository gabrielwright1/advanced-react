self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)(["\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\n    searchTerms: allProducts(\n      where: {\n        OR: [\n          { name_contains_i: $searchTerm }\n          { description_contains_i: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      name\n      photo {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/jsx-props-no-spreading */





var SEARCH_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_6__.default)(_templateObject());
function Search() {
  _s();

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  }),
      _useLazyQuery2 = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useLazyQuery, 2),
      findItems = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      error = _useLazyQuery2$.error;

  console.log(data);
  var findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(findItems, 350);
  (0,downshift__WEBPACK_IMPORTED_MODULE_8__.resetIdCounter)(); // makes downshift methods work

  var _useCombobox = (0,downshift__WEBPACK_IMPORTED_MODULE_8__.useCombobox)({
    items: [],
    onInputValueChange: function onInputValueChange() {
      console.log('Input changed!');
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },
    onSelectedItemChange: function onSelectedItemChange() {
      console.log('Selected item changed');
    }
  }),
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an item',
        id: 'search',
        className: 'loading'
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_5__.DropDownItem, {
        children: "Hey"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(Search, "d5CHrd7n2K8ncy1dwlKPGjIwqes=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_7__.useLazyQuery, downshift__WEBPACK_IMPORTED_MODULE_8__.useCombobox];
});

_c = Search;

var _c;

$RefreshReg$(_c, "Search");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiU2VhcmNoIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImZpbmRJdGVtc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94IiwiaXRlbXMiLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJ2YXJpYWJsZXMiLCJzZWFyY2hUZXJtIiwiaW5wdXRWYWx1ZSIsIm9uU2VsZWN0ZWRJdGVtQ2hhbmdlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImNsYXNzTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxxQkFBcUIsR0FBR0Msb0RBQUgsbUJBQTNCO0FBcUJlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSxzQkFDZUMsNERBQVksQ0FDeERILHFCQUR3RCxFQUV4RDtBQUFFSSxlQUFXLEVBQUU7QUFBZixHQUZ3RCxDQUQzQjtBQUFBO0FBQUEsTUFDeEJDLFNBRHdCO0FBQUE7QUFBQSxNQUNYQyxPQURXLG1CQUNYQSxPQURXO0FBQUEsTUFDRkMsSUFERSxtQkFDRkEsSUFERTtBQUFBLE1BQ0lDLEtBREosbUJBQ0lBLEtBREo7O0FBSy9CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLE1BQU1JLGlCQUFpQixHQUFHQyxzREFBUSxDQUFDUCxTQUFELEVBQVksR0FBWixDQUFsQztBQUNBUSwyREFBYyxHQVBpQixDQU9iOztBQVBhLHFCQVU3QkMsc0RBQVcsQ0FBQztBQUNWQyxTQUFLLEVBQUUsRUFERztBQUVWQyxzQkFGVSxnQ0FFVztBQUNuQlAsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQUMsdUJBQWlCLENBQUM7QUFBRU0saUJBQVMsRUFBRTtBQUFFQyxvQkFBVSxFQUFFQztBQUFkO0FBQWIsT0FBRCxDQUFqQjtBQUNELEtBTFM7QUFNVkMsd0JBTlUsa0NBTWE7QUFDckJYLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHVCQUFaO0FBQ0Q7QUFSUyxHQUFELENBVmtCO0FBQUEsTUFTdkJTLFVBVHVCLGdCQVN2QkEsVUFUdUI7QUFBQSxNQVNYRSxZQVRXLGdCQVNYQSxZQVRXO0FBQUEsTUFTR0MsYUFUSCxnQkFTR0EsYUFUSDtBQUFBLE1BU2tCQyxnQkFUbEIsZ0JBU2tCQSxnQkFUbEI7O0FBb0IvQixzQkFDRSw4REFBQywwREFBRDtBQUFBLDRCQUNFLHFHQUFTQSxnQkFBZ0IsRUFBekI7QUFBQSw2QkFDRSx5RkFDTUQsYUFBYSxDQUFDO0FBQ2hCRSxZQUFJLEVBQUUsUUFEVTtBQUVoQkMsbUJBQVcsRUFBRSxvQkFGRztBQUdoQkMsVUFBRSxFQUFFLFFBSFk7QUFJaEJDLGlCQUFTLEVBQUU7QUFKSyxPQUFELENBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFXRSw4REFBQyxzREFBRCxrQ0FBY04sWUFBWSxFQUExQjtBQUFBLDZCQUNFLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUJEOztHQXJDdUJuQixNO1VBQ3dCQyx3RCxFQVM1Q1csa0Q7OztLQVZvQlosTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJlN2E3YWM3YWMzMWE0NDU0M2Q4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSAnZG93bnNoaWZ0JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xyXG5pbXBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL3N0eWxlcy9Ecm9wRG93bic7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1BST0RVQ1RTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCBbZmluZEl0ZW1zLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxyXG4gICAgeyBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyB9XHJcbiAgKTtcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCBmaW5kSXRlbXNCdXRDaGlsbCA9IGRlYm91bmNlKGZpbmRJdGVtcywgMzUwKTtcclxuICByZXNldElkQ291bnRlcigpOyAvLyBtYWtlcyBkb3duc2hpZnQgbWV0aG9kcyB3b3JrXHJcblxyXG4gIGNvbnN0IHsgaW5wdXRWYWx1ZSwgZ2V0TWVudVByb3BzLCBnZXRJbnB1dFByb3BzLCBnZXRDb21ib2JveFByb3BzIH0gPVxyXG4gICAgdXNlQ29tYm9ib3goe1xyXG4gICAgICBpdGVtczogW10sXHJcbiAgICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnSW5wdXQgY2hhbmdlZCEnKTtcclxuICAgICAgICBmaW5kSXRlbXNCdXRDaGlsbCh7IHZhcmlhYmxlczogeyBzZWFyY2hUZXJtOiBpbnB1dFZhbHVlIH0gfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBpdGVtIGNoYW5nZWQnKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoU3R5bGVzPlxyXG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggZm9yIGFuIGl0ZW0nLFxyXG4gICAgICAgICAgICBpZDogJ3NlYXJjaCcsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG4gICAgICAgIDxEcm9wRG93bkl0ZW0+SGV5PC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgIDwvRHJvcERvd24+XHJcbiAgICA8L1NlYXJjaFN0eWxlcz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=