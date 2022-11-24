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
 // check if items are in cache (read), if not visit network (merge), check for items again (read)

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
          first = args.first;
      var merged = existing ? existing.slice(0) : [];

      for (var i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3BhZ2luYXRpb25GaWVsZC5qcyJdLCJuYW1lcyI6WyJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsImNhY2hlIiwic2tpcCIsImZpcnN0IiwiZGF0YSIsInJlYWRRdWVyeSIsInF1ZXJ5IiwiUEFHSU5BVElPTl9RVUVSWSIsImNvdW50IiwiX2FsbFByb2R1Y3RzTWV0YSIsInBhZ2UiLCJwYWdlcyIsIk1hdGgiLCJjZWlsIiwiaXRlbXMiLCJzbGljZSIsImZpbHRlciIsIngiLCJsZW5ndGgiLCJtZXJnZSIsImluY29taW5nIiwibWVyZ2VkIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ2UsU0FBU0EsZUFBVCxHQUEyQjtBQUN4QyxTQUFPO0FBQ0xDLFdBQU8sRUFBRSxLQURKO0FBQ1c7QUFDaEJDLFFBRkssa0JBRWdDO0FBQUE7O0FBQUEsVUFBaENDLFFBQWdDLHVFQUFyQixFQUFxQjs7QUFBQTtBQUFBLFVBQWZDLElBQWUsUUFBZkEsSUFBZTtBQUFBLFVBQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFBQSxVQUMzQkMsSUFEMkIsR0FDWEYsSUFEVyxDQUMzQkUsSUFEMkI7QUFBQSxVQUNyQkMsS0FEcUIsR0FDWEgsSUFEVyxDQUNyQkcsS0FEcUI7QUFHbkMsVUFBTUMsSUFBSSxHQUFHSCxLQUFLLENBQUNJLFNBQU4sQ0FBZ0I7QUFBRUMsYUFBSyxFQUFFQyxvRUFBZ0JBO0FBQXpCLE9BQWhCLENBQWI7QUFDQSxVQUFNQyxLQUFLLEdBQUdKLElBQUgsYUFBR0EsSUFBSCxnREFBR0EsSUFBSSxDQUFFSyxnQkFBVCwwREFBRyxzQkFBd0JELEtBQXRDO0FBQ0EsVUFBTUUsSUFBSSxHQUFHUixJQUFJLEdBQUdDLEtBQVAsR0FBZSxDQUE1QjtBQUNBLFVBQU1RLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxJQUFMLENBQVVMLEtBQUssR0FBR0wsS0FBbEIsQ0FBZDtBQUNBLFVBQU1XLEtBQUssR0FBR2YsUUFBUSxDQUFDZ0IsS0FBVCxDQUFlYixJQUFmLEVBQXFCQSxJQUFJLEdBQUdDLEtBQTVCLEVBQW1DYSxNQUFuQyxDQUEwQyxVQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBUDtBQUFBLE9BQTFDLENBQWQ7O0FBRUEsVUFBSUgsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQWpDLElBQTBDTyxJQUFJLEtBQUtDLEtBQXZELEVBQThEO0FBQzVELGVBQU9HLEtBQVA7QUFDRDs7QUFDRCxVQUFJQSxLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQXJCLEVBQTRCO0FBQzFCLGVBQU8sS0FBUDtBQUNEOztBQUNELFVBQUlXLEtBQUssQ0FBQ0ksTUFBVixFQUFrQjtBQUNoQixlQUFPSixLQUFQO0FBQ0Q7O0FBRUQsYUFBTyxLQUFQLENBbkJtQyxDQW1CckI7QUFDZixLQXRCSTtBQXVCTEssU0F2QkssaUJBdUJDcEIsUUF2QkQsRUF1QldxQixRQXZCWCxTQXVCK0I7QUFBQSxVQUFScEIsSUFBUSxTQUFSQSxJQUFRO0FBQUEsVUFDMUJFLElBRDBCLEdBQ1ZGLElBRFUsQ0FDMUJFLElBRDBCO0FBQUEsVUFDcEJDLEtBRG9CLEdBQ1ZILElBRFUsQ0FDcEJHLEtBRG9CO0FBRWxDLFVBQU1rQixNQUFNLEdBQUd0QixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxDQUFmLENBQUgsR0FBdUIsRUFBOUM7O0FBQ0EsV0FBSyxJQUFJTyxDQUFDLEdBQUdwQixJQUFiLEVBQW1Cb0IsQ0FBQyxHQUFHcEIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDRixNQUF2QyxFQUErQyxFQUFFSSxDQUFqRCxFQUFvRDtBQUNsREQsY0FBTSxDQUFDQyxDQUFELENBQU4sR0FBWUYsUUFBUSxDQUFDRSxDQUFDLEdBQUdwQixJQUFMLENBQXBCO0FBQ0Q7O0FBQ0QsYUFBT21CLE1BQVA7QUFDRDtBQTlCSSxHQUFQO0FBZ0NEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmI4YjI0NzBmMjQzNWMyMGZlNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuLy8gY2hlY2sgaWYgaXRlbXMgYXJlIGluIGNhY2hlIChyZWFkKSwgaWYgbm90IHZpc2l0IG5ldHdvcmsgKG1lcmdlKSwgY2hlY2sgZm9yIGl0ZW1zIGFnYWluIChyZWFkKVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdpbmF0aW9uRmllbGQoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGtleUFyZ3M6IGZhbHNlLCAvLyB0ZWxscyBhcG9sbG8gd2Ugd2lsbCB0YWtlIGNhcmUgb2YgZXZlcnl0aGluZ1xyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcclxuICAgICAgY29uc3QgY291bnQgPSBkYXRhPy5fYWxsUHJvZHVjdHNNZXRhPy5jb3VudDtcclxuICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gZmlyc3QpO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IGV4aXN0aW5nLnNsaWNlKHNraXAsIHNraXAgKyBmaXJzdCkuZmlsdGVyKCh4KSA9PiB4KTtcclxuXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoICE9PSBmaXJzdCAmJiBwYWdlID09PSBwYWdlcykge1xyXG4gICAgICAgIHJldHVybiBpdGVtcztcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXRlbXMubGVuZ3RoKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7IC8vIGZhbGxiYWNrIHRvIG5ldHdvcmtcclxuICAgIH0sXHJcbiAgICBtZXJnZShleGlzdGluZywgaW5jb21pbmcsIHsgYXJncyB9KSB7XHJcbiAgICAgIGNvbnN0IHsgc2tpcCwgZmlyc3QgfSA9IGFyZ3M7XHJcbiAgICAgIGNvbnN0IG1lcmdlZCA9IGV4aXN0aW5nID8gZXhpc3Rpbmcuc2xpY2UoMCkgOiBbXTtcclxuICAgICAgZm9yIChsZXQgaSA9IHNraXA7IGkgPCBza2lwICsgaW5jb21pbmcubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBtZXJnZWRbaV0gPSBpbmNvbWluZ1tpIC0gc2tpcF07XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG1lcmdlZDtcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9