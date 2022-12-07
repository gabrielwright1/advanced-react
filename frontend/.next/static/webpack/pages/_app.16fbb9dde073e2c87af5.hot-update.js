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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");
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






var SEARCH_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_7__.default)(_templateObject());
function Search() {
  _s();

  var _this = this;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  }),
      _useLazyQuery2 = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useLazyQuery, 2),
      findItems = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      error = _useLazyQuery2$.error;

  var items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  var findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(findItems, 350);
  (0,downshift__WEBPACK_IMPORTED_MODULE_9__.resetIdCounter)(); // makes downshift methods work

  var _useCombobox = (0,downshift__WEBPACK_IMPORTED_MODULE_9__.useCombobox)({
    items: items,
    onInputValueChange: function onInputValueChange() {
      console.log('Input changed!');
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },
    onSelectedItemChange: function onSelectedItemChange(_ref) {
      var selectedItem = _ref.selectedItem;
      console.log('Selected item changed');
    }
  }),
      isOpen = _useCombobox.isOpen,
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getItemProps = _useCombobox.getItemProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an item',
        id: 'search',
        className: loading ? 'loading' : ''
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map(function (item, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
          item: item
        })), {}, {
          highlighted: index === highlightedIndex,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.name,
            width: "50"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, _this), item.name]
        }), item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, _this);
      }), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDownItem, {
        children: ["Sorry, No Items Found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}

_s(Search, "fqeNkzpPKcZO8u67p7bngxaTdc4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_8__.useLazyQuery, downshift__WEBPACK_IMPORTED_MODULE_9__.useCombobox];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwiaXRlbXMiLCJzZWFyY2hUZXJtcyIsImZpbmRJdGVtc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94Iiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJzZWxlY3RlZEl0ZW0iLCJpc09wZW4iLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldEl0ZW1Qcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxvREFBSCxtQkFBM0I7QUFxQmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQrQixzQkFFZUMsNERBQVksQ0FDeERMLHFCQUR3RCxFQUV4RDtBQUFFTSxlQUFXLEVBQUU7QUFBZixHQUZ3RCxDQUYzQjtBQUFBO0FBQUEsTUFFeEJDLFNB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cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbmltcG9ydCB7IHVzZUxhenlRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgcmVzZXRJZENvdW50ZXIsIHVzZUNvbWJvYm94IH0gZnJvbSAnZG93bnNoaWZ0JztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IERyb3BEb3duLCBEcm9wRG93bkl0ZW0sIFNlYXJjaFN0eWxlcyB9IGZyb20gJy4vc3R5bGVzL0Ryb3BEb3duJztcclxuXHJcbmNvbnN0IFNFQVJDSF9QUk9EVUNUU19RVUVSWSA9IGdxbGBcclxuICBxdWVyeSBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkoJHNlYXJjaFRlcm06IFN0cmluZyEpIHtcclxuICAgIHNlYXJjaFRlcm1zOiBhbGxQcm9kdWN0cyhcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBPUjogW1xyXG4gICAgICAgICAgeyBuYW1lX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICAgIHsgZGVzY3JpcHRpb25fY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIG5hbWVcclxuICAgICAgcGhvdG8ge1xyXG4gICAgICAgIGltYWdlIHtcclxuICAgICAgICAgIHB1YmxpY1VybFRyYW5zZm9ybWVkXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtmaW5kSXRlbXMsIHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfV0gPSB1c2VMYXp5UXVlcnkoXHJcbiAgICBTRUFSQ0hfUFJPRFVDVFNfUVVFUlksXHJcbiAgICB7IGZldGNoUG9saWN5OiAnbm8tY2FjaGUnIH1cclxuICApO1xyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcbiAgY29uc3QgZmluZEl0ZW1zQnV0Q2hpbGwgPSBkZWJvdW5jZShmaW5kSXRlbXMsIDM1MCk7XHJcbiAgcmVzZXRJZENvdW50ZXIoKTsgLy8gbWFrZXMgZG93bnNoaWZ0IG1ldGhvZHMgd29ya1xyXG4gIGNvbnN0IHtcclxuICAgIGlzT3BlbixcclxuICAgIGlucHV0VmFsdWUsXHJcbiAgICBnZXRNZW51UHJvcHMsXHJcbiAgICBnZXRJbnB1dFByb3BzLFxyXG4gICAgZ2V0Q29tYm9ib3hQcm9wcyxcclxuICAgIGdldEl0ZW1Qcm9wcyxcclxuICAgIGhpZ2hsaWdodGVkSW5kZXgsXHJcbiAgfSA9IHVzZUNvbWJvYm94KHtcclxuICAgIGl0ZW1zLFxyXG4gICAgb25JbnB1dFZhbHVlQ2hhbmdlKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnSW5wdXQgY2hhbmdlZCEnKTtcclxuICAgICAgZmluZEl0ZW1zQnV0Q2hpbGwoeyB2YXJpYWJsZXM6IHsgc2VhcmNoVGVybTogaW5wdXRWYWx1ZSB9IH0pO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0ZWRJdGVtQ2hhbmdlKHsgc2VsZWN0ZWRJdGVtIH0pIHtcclxuICAgICAgY29uc29sZS5sb2coJ1NlbGVjdGVkIGl0ZW0gY2hhbmdlZCcpO1xyXG4gICAgfSxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFN0eWxlcz5cclxuICAgICAgPGRpdiB7Li4uZ2V0Q29tYm9ib3hQcm9wcygpfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHsuLi5nZXRJbnB1dFByb3BzKHtcclxuICAgICAgICAgICAgdHlwZTogJ3NlYXJjaCcsXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGZvciBhbiBpdGVtJyxcclxuICAgICAgICAgICAgaWQ6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgICBjbGFzc05hbWU6IGxvYWRpbmcgPyAnbG9hZGluZycgOiAnJyxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJvcERvd24gey4uLmdldE1lbnVQcm9wcygpfT5cclxuICAgICAgICB7aXNPcGVuICYmXHJcbiAgICAgICAgICBpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxEcm9wRG93bkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgey4uLmdldEl0ZW1Qcm9wcyh7IGl0ZW0gfSl9XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2luZGV4ID09PSBoaWdobGlnaHRlZEluZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge2lzT3BlbiAmJiAhaXRlbXMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxEcm9wRG93bkl0ZW0+U29ycnksIE5vIEl0ZW1zIEZvdW5kIGZvciB7aW5wdXRWYWx1ZX08L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BEb3duPlxyXG4gICAgPC9TZWFyY2hTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9