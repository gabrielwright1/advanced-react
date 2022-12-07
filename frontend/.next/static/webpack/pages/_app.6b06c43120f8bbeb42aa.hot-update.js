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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! downshift */ "./node_modules/downshift/dist/downshift.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Search.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {\n    searchTerms: allProducts(\n      where: {\n        OR: [\n          { name_contains_i: $searchTerm }\n          { description_contains_i: $searchTerm }\n        ]\n      }\n    ) {\n      id\n      name\n      photo {\n        image {\n          publicUrlTransformed\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SEARCH_PRODUCTS_QUERY = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_8__.default)(_templateObject());
function Search() {
  _s();

  var _this = this;

  var router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();

  var _useLazyQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  }),
      _useLazyQuery2 = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useLazyQuery, 2),
      findItems = _useLazyQuery2[0],
      _useLazyQuery2$ = _useLazyQuery2[1],
      loading = _useLazyQuery2$.loading,
      data = _useLazyQuery2$.data,
      error = _useLazyQuery2$.error;

  var items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  var findItemsButChill = lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(findItems, 350);
  (0,downshift__WEBPACK_IMPORTED_MODULE_10__.resetIdCounter)();

  var _useCombobox = (0,downshift__WEBPACK_IMPORTED_MODULE_10__.useCombobox)({
    items: items,
    onInputValueChange: function onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },
    onSelectedItemChange: function onSelectedItemChange(_ref) {
      var selectedItem = _ref.selectedItem;
      router.push({
        pathname: "/product/".concat(selectedItem.id)
      });
    },
    itemToString: function itemToString(item) {
      return (item === null || item === void 0 ? void 0 : item.name) || '';
    }
  }),
      isOpen = _useCombobox.isOpen,
      inputValue = _useCombobox.inputValue,
      getMenuProps = _useCombobox.getMenuProps,
      getInputProps = _useCombobox.getInputProps,
      getComboboxProps = _useCombobox.getComboboxProps,
      getItemProps = _useCombobox.getItemProps,
      highlightedIndex = _useCombobox.highlightedIndex;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an Item',
        id: 'search',
        className: loading ? 'loading' : ''
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map(function (item, index) {
        return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
          item: item,
          index: index
        })), {}, {
          key: item.id,
          highlighted: index === highlightedIndex,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }
        }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("img", {
          src: item.photo.image.publicUrlTransformed,
          alt: item.name,
          width: "50"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 15
        }, _this), item.name);
      }), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, {
        children: ["Sorry, No items found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}

_s(Search, "fqeNkzpPKcZO8u67p7bngxaTdc4=", false, function () {
  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery, downshift__WEBPACK_IMPORTED_MODULE_10__.useCombobox];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWFyY2guanMiXSwibmFtZXMiOlsiU0VBUkNIX1BST0RVQ1RTX1FVRVJZIiwiZ3FsIiwiU2VhcmNoIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlTGF6eVF1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJmaW5kSXRlbXMiLCJsb2FkaW5nIiwiZGF0YSIsImVycm9yIiwiaXRlbXMiLCJzZWFyY2hUZXJtcyIsImZpbmRJdGVtc0J1dENoaWxsIiwiZGVib3VuY2UiLCJyZXNldElkQ291bnRlciIsInVzZUNvbWJvYm94Iiwib25JbnB1dFZhbHVlQ2hhbmdlIiwidmFyaWFibGVzIiwic2VhcmNoVGVybSIsImlucHV0VmFsdWUiLCJvblNlbGVjdGVkSXRlbUNoYW5nZSIsInNlbGVjdGVkSXRlbSIsInB1c2giLCJwYXRobmFtZSIsImlkIiwiaXRlbVRvU3RyaW5nIiwiaXRlbSIsIm5hbWUiLCJpc09wZW4iLCJnZXRNZW51UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiZ2V0Q29tYm9ib3hQcm9wcyIsImdldEl0ZW1Qcm9wcyIsImhpZ2hsaWdodGVkSW5kZXgiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJtYXAiLCJpbmRleCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLHFCQUFxQixHQUFHQyxvREFBSCxtQkFBM0I7QUFxQmUsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCOztBQUQrQixzQkFFZUMsNERBQVksQ0FDeERMLHFCQUR3RCxFQUV4RDtBQUNFTSxlQUFXLEVBQUU7QUFEZixHQUZ3RCxDQUYzQjtBQUFB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QUFBO0FBQUE7QUFBQTtBQUFBLFlBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBckV1QmxCLE07VUFDUEUsOEQsRUFDK0JDLHdELEVBaUIxQ1csbUQ7OztLQW5Ca0JkLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42YjA2YzQzMTIwZjhiYmViNDJhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTGF6eVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyByZXNldElkQ291bnRlciwgdXNlQ29tYm9ib3ggfSBmcm9tICdkb3duc2hpZnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuaW1wb3J0IHsgRHJvcERvd24sIERyb3BEb3duSXRlbSwgU2VhcmNoU3R5bGVzIH0gZnJvbSAnLi9zdHlsZXMvRHJvcERvd24nO1xyXG5cclxuY29uc3QgU0VBUkNIX1BST0RVQ1RTX1FVRVJZID0gZ3FsYFxyXG4gIHF1ZXJ5IFNFQVJDSF9QUk9EVUNUU19RVUVSWSgkc2VhcmNoVGVybTogU3RyaW5nISkge1xyXG4gICAgc2VhcmNoVGVybXM6IGFsbFByb2R1Y3RzKFxyXG4gICAgICB3aGVyZToge1xyXG4gICAgICAgIE9SOiBbXHJcbiAgICAgICAgICB7IG5hbWVfY29udGFpbnNfaTogJHNlYXJjaFRlcm0gfVxyXG4gICAgICAgICAgeyBkZXNjcmlwdGlvbl9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICApIHtcclxuICAgICAgaWRcclxuICAgICAgbmFtZVxyXG4gICAgICBwaG90byB7XHJcbiAgICAgICAgaW1hZ2Uge1xyXG4gICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2goKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW2ZpbmRJdGVtcywgeyBsb2FkaW5nLCBkYXRhLCBlcnJvciB9XSA9IHVzZUxhenlRdWVyeShcclxuICAgIFNFQVJDSF9QUk9EVUNUU19RVUVSWSxcclxuICAgIHtcclxuICAgICAgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsXHJcbiAgICB9XHJcbiAgKTtcclxuICBjb25zdCBpdGVtcyA9IGRhdGE/LnNlYXJjaFRlcm1zIHx8IFtdO1xyXG4gIGNvbnN0IGZpbmRJdGVtc0J1dENoaWxsID0gZGVib3VuY2UoZmluZEl0ZW1zLCAzNTApO1xyXG4gIHJlc2V0SWRDb3VudGVyKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgaXNPcGVuLFxyXG4gICAgaW5wdXRWYWx1ZSxcclxuICAgIGdldE1lbnVQcm9wcyxcclxuICAgIGdldElucHV0UHJvcHMsXHJcbiAgICBnZXRDb21ib2JveFByb3BzLFxyXG4gICAgZ2V0SXRlbVByb3BzLFxyXG4gICAgaGlnaGxpZ2h0ZWRJbmRleCxcclxuICB9ID0gdXNlQ29tYm9ib3goe1xyXG4gICAgaXRlbXMsXHJcbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XHJcbiAgICAgIGZpbmRJdGVtc0J1dENoaWxsKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RlZEl0ZW1DaGFuZ2UoeyBzZWxlY3RlZEl0ZW0gfSkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3NlbGVjdGVkSXRlbS5pZH1gLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpdGVtVG9TdHJpbmc6IChpdGVtKSA9PiBpdGVtPy5uYW1lIHx8ICcnLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoU3R5bGVzPlxyXG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggZm9yIGFuIEl0ZW0nLFxyXG4gICAgICAgICAgICBpZDogJ3NlYXJjaCcsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG4gICAgICAgIHtpc09wZW4gJiZcclxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPERyb3BEb3duSXRlbVxyXG4gICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleCB9KX1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2luZGV4ID09PSBoaWdobGlnaHRlZEluZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge2lzT3BlbiAmJiAhaXRlbXMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxEcm9wRG93bkl0ZW0+U29ycnksIE5vIGl0ZW1zIGZvdW5kIGZvciB7aW5wdXRWYWx1ZX08L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BEb3duPlxyXG4gICAgPC9TZWFyY2hTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9