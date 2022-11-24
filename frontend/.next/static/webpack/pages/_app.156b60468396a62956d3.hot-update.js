self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");
/* module decorator */ module = __webpack_require__.hmd(module);

function paginationField() {
  return {
    keyArgs: false,
    // tells apollo we will take care of everything
    read: function read() {
      var _data$_allProductsMet;

      var existing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var _ref = arguments.length > 1 ? arguments[1] : undefined,
          args = _ref.args,
          cache = _ref.cache;

      var skip = args.skip,
          first = args.first;
      var data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      var count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      var page = skip / first + 1;
      var pages = Math.ceil(count / first);
      var items = existing.slice(skip, skip + first).filter(function (x) {
        return x;
      });

      if (items.length && items.length !== first && page === pages) {
        return items;
      }

      if (items.length !== first) {
        return false;
      }

      if (items.length) {
        return items;
      }

      return false; // fallback to network
    },
    merge: function merge(existing, incoming, _ref2) {
      var args = _ref2.args;
      var skip = args.skip,
          first = args.first; // This runs when the Apollo client comes back from the network with our product

      var merged = existing ? existing.slice(0) : [];

      for (var i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      } // Finally we return the merged items from the cache,


      return merged;
    }
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtZXJnZSIsImluY29taW5nIiwibWVyZ2VkIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3hDLFNBQU87QUFDTEMsV0FBTyxFQUFFLEtBREo7QUFDVztBQUNoQkMsUUFGSyxrQkFFZ0M7QUFBQTs7QUFBQSxVQUFoQ0MsUUFBZ0MsdUVBQXJCLEVBQXFCOztBQUFBO0FBQUEsVUFBZkMsSUFBZSxRQUFmQSxJQUFlO0FBQUEsVUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLFVBQzNCQyxJQUQyQixHQUNYRixJQURXLENBQzNCRSxJQUQyQjtBQUFBLFVBQ3JCQyxLQURxQixHQUNYSCxJQURXLENBQ3JCRyxLQURxQjtBQUduQyxVQUFNQyxJQUFJLEdBQUdILEtBQUssQ0FBQ0ksU0FBTixDQUFnQjtBQUFFQyxhQUFLLEVBQUVDLG9FQUFnQkE7QUFBekIsT0FBaEIsQ0FBYjtBQUNBLFVBQU1DLEtBQUssR0FBR0osSUFBSCxhQUFHQSxJQUFILGdEQUFHQSxJQUFJLENBQUVLLGdCQUFULDBEQUFHLHNCQUF3QkQsS0FBdEM7QUFDQSxVQUFNRSxJQUFJLEdBQUdSLElBQUksR0FBR0MsS0FBUCxHQUFlLENBQTVCO0FBQ0EsVUFBTVEsS0FBSyxHQUFHQyxJQUFJLENBQUNDLElBQUwsQ0FBVUwsS0FBSyxHQUFHTCxLQUFsQixDQUFkO0FBRUEsVUFBTVcsS0FBSyxHQUFHZixRQUFRLENBQUNnQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTBDLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFQO0FBQUEsT0FBMUMsQ0FBZDs7QUFFQSxVQUFJSCxLQUFLLENBQUNJLE1BQU4sSUFBZ0JKLEtBQUssQ0FBQ0ksTUFBTixLQUFpQmYsS0FBakMsSUFBMENPLElBQUksS0FBS0MsS0FBdkQsRUFBOEQ7QUFDNUQsZUFBT0csS0FBUDtBQUNEOztBQUNELFVBQUlBLEtBQUssQ0FBQ0ksTUFBTixLQUFpQmYsS0FBckIsRUFBNEI7QUFDMUIsZUFBTyxLQUFQO0FBQ0Q7O0FBQ0QsVUFBSVcsS0FBSyxDQUFDSSxNQUFWLEVBQWtCO0FBQ2hCLGVBQU9KLEtBQVA7QUFDRDs7QUFFRCxhQUFPLEtBQVAsQ0FwQm1DLENBb0JyQjtBQUNmLEtBdkJJO0FBd0JMSyxTQXhCSyxpQkF3QkNwQixRQXhCRCxFQXdCV3FCLFFBeEJYLFNBd0IrQjtBQUFBLFVBQVJwQixJQUFRLFNBQVJBLElBQVE7QUFBQSxVQUMxQkUsSUFEMEIsR0FDVkYsSUFEVSxDQUMxQkUsSUFEMEI7QUFBQSxVQUNwQkMsS0FEb0IsR0FDVkgsSUFEVSxDQUNwQkcsS0FEb0IsRUFFbEM7O0FBQ0EsVUFBTWtCLE1BQU0sR0FBR3RCLFFBQVEsR0FBR0EsUUFBUSxDQUFDZ0IsS0FBVCxDQUFlLENBQWYsQ0FBSCxHQUF1QixFQUE5Qzs7QUFDQSxXQUFLLElBQUlPLENBQUMsR0FBR3BCLElBQWIsRUFBbUJvQixDQUFDLEdBQUdwQixJQUFJLEdBQUdrQixRQUFRLENBQUNGLE1BQXZDLEVBQStDLEVBQUVJLENBQWpELEVBQW9EO0FBQ2xERCxjQUFNLENBQUNDLENBQUQsQ0FBTixHQUFZRixRQUFRLENBQUNFLENBQUMsR0FBR3BCLElBQUwsQ0FBcEI7QUFDRCxPQU5pQyxDQU9sQzs7O0FBQ0EsYUFBT21CLE1BQVA7QUFDRDtBQWpDSSxHQUFQO0FBbUNEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMTU2YjYwNDY4Mzk2YTYyOTU2ZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBrZXlBcmdzOiBmYWxzZSwgLy8gdGVsbHMgYXBvbGxvIHdlIHdpbGwgdGFrZSBjYXJlIG9mIGV2ZXJ5dGhpbmdcclxuICAgIHJlYWQoZXhpc3RpbmcgPSBbXSwgeyBhcmdzLCBjYWNoZSB9KSB7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gY2FjaGUucmVhZFF1ZXJ5KHsgcXVlcnk6IFBBR0lOQVRJT05fUVVFUlkgfSk7XHJcbiAgICAgIGNvbnN0IGNvdW50ID0gZGF0YT8uX2FsbFByb2R1Y3RzTWV0YT8uY291bnQ7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBza2lwIC8gZmlyc3QgKyAxO1xyXG4gICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudCAvIGZpcnN0KTtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW1zID0gZXhpc3Rpbmcuc2xpY2Uoc2tpcCwgc2tpcCArIGZpcnN0KS5maWx0ZXIoKHgpID0+IHgpO1xyXG5cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAmJiBpdGVtcy5sZW5ndGggIT09IGZpcnN0ICYmIHBhZ2UgPT09IHBhZ2VzKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggIT09IGZpcnN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gZmFsbGJhY2sgdG8gbmV0d29ya1xyXG4gICAgfSxcclxuICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuICAgICAgLy8gVGhpcyBydW5zIHdoZW4gdGhlIEFwb2xsbyBjbGllbnQgY29tZXMgYmFjayBmcm9tIHRoZSBuZXR3b3JrIHdpdGggb3VyIHByb2R1Y3RcclxuICAgICAgY29uc3QgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gc2tpcDsgaSA8IHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nW2kgLSBza2lwXTtcclxuICAgICAgfVxyXG4gICAgICAvLyBGaW5hbGx5IHdlIHJldHVybiB0aGUgbWVyZ2VkIGl0ZW1zIGZyb20gdGhlIGNhY2hlLFxyXG4gICAgICByZXR1cm4gbWVyZ2VkO1xyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=