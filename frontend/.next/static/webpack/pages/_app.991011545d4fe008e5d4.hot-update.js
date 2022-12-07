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
      router.push({
        pathname: "/product/".concat(selectedItem.id)
      });
    },
    itemToString: function itemToString(item) {
      return item === null ? '' : item.name;
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
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
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
            lineNumber: 81,
            columnNumber: 15
          }, _this), item.name]
        }), item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, _this);
      }), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_6__.DropDownItem, {
        children: ["Sorry, No Items Found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwiaXRlbXMiLCJzZWFyY2hUZXJtcyIsImZpbmRJdGVtc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94Iiwib25JbnB1dFZhbHVlQ2hhbmdlIiwiY29uc29sZSIsImxvZyIsInZhcmlhYmxlcyIsInNlYXJjaFRlcm0iLCJpbnB1dFZhbHVlIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJzZWxlY3RlZEl0ZW0iLCJwdXNoIiwicGF0aG5hbWUiLCJpZCIsIml0ZW1Ub1N0cmluZyIsIml0ZW0iLCJuYW1lIiwiaXNPcGVuIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJnZXRJdGVtUHJvcHMiLCJoaWdobGlnaHRlZEluZGV4IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxvREFBSCxtQkFBM0I7QUFxQmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCOztBQUQrQixzQkFFZUMsNERBQVksQ0FDeERMLHFCQUR3RCxFQUV4RDtBQUFFTSxlQUFXLEVBQUU7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQWpFdUJwQixNO1VBQ1BFLGtELEVBQytCQyx3RCxFQWUxQ1csa0Q7OztLQWpCa0JkLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC45OTEwMTE1NDVkNGZlMDA4ZTVkNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gJ2Rvd25zaGlmdCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL3N0eWxlcy9Ecm9wRG93bic7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1BST0RVQ1RTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZmluZEl0ZW1zLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxyXG4gICAgeyBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyB9XHJcbiAgKTtcclxuICBjb25zdCBpdGVtcyA9IGRhdGE/LnNlYXJjaFRlcm1zIHx8IFtdO1xyXG4gIGNvbnN0IGZpbmRJdGVtc0J1dENoaWxsID0gZGVib3VuY2UoZmluZEl0ZW1zLCAzNTApO1xyXG4gIHJlc2V0SWRDb3VudGVyKCk7IC8vIG1ha2VzIGRvd25zaGlmdCBtZXRob2RzIHdvcmtcclxuICBjb25zdCB7XHJcbiAgICBpc09wZW4sXHJcbiAgICBpbnB1dFZhbHVlLFxyXG4gICAgZ2V0TWVudVByb3BzLFxyXG4gICAgZ2V0SW5wdXRQcm9wcyxcclxuICAgIGdldENvbWJvYm94UHJvcHMsXHJcbiAgICBnZXRJdGVtUHJvcHMsXHJcbiAgICBoaWdobGlnaHRlZEluZGV4LFxyXG4gIH0gPSB1c2VDb21ib2JveCh7XHJcbiAgICBpdGVtcyxcclxuICAgIG9uSW5wdXRWYWx1ZUNoYW5nZSgpIHtcclxuICAgICAgY29uc29sZS5sb2coJ0lucHV0IGNoYW5nZWQhJyk7XHJcbiAgICAgIGZpbmRJdGVtc0J1dENoaWxsKHsgdmFyaWFibGVzOiB7IHNlYXJjaFRlcm06IGlucHV0VmFsdWUgfSB9KTtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdGVkSXRlbUNoYW5nZSh7IHNlbGVjdGVkSXRlbSB9KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTZWxlY3RlZCBpdGVtIGNoYW5nZWQnKTtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBgL3Byb2R1Y3QvJHtzZWxlY3RlZEl0ZW0uaWR9YCxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaXRlbVRvU3RyaW5nOiAoaXRlbSkgPT4gKGl0ZW0gPT09IG51bGwgPyAnJyA6IGl0ZW0ubmFtZSksXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWFyY2hTdHlsZXM+XHJcbiAgICAgIDxkaXYgey4uLmdldENvbWJvYm94UHJvcHMoKX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB7Li4uZ2V0SW5wdXRQcm9wcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzZWFyY2gnLFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBmb3IgYW4gaXRlbScsXHJcbiAgICAgICAgICAgIGlkOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgY2xhc3NOYW1lOiBsb2FkaW5nID8gJ2xvYWRpbmcnIDogJycsXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPERyb3BEb3duIHsuLi5nZXRNZW51UHJvcHMoKX0+XHJcbiAgICAgICAge2lzT3BlbiAmJlxyXG4gICAgICAgICAgaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8RHJvcERvd25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtIH0pfVxyXG4gICAgICAgICAgICAgIGhpZ2hsaWdodGVkPXtpbmRleCA9PT0gaGlnaGxpZ2h0ZWRJbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90by5pbWFnZS5wdWJsaWNVcmxUcmFuc2Zvcm1lZH1cclxuICAgICAgICAgICAgICAgIGFsdD17aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIHtpc09wZW4gJiYgIWl0ZW1zLmxlbmd0aCAmJiAhbG9hZGluZyAmJiAoXHJcbiAgICAgICAgICA8RHJvcERvd25JdGVtPlNvcnJ5LCBObyBJdGVtcyBGb3VuZCBmb3Ige2lucHV0VmFsdWV9PC9Ecm9wRG93bkl0ZW0+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Ecm9wRG93bj5cclxuICAgIDwvU2VhcmNoU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==