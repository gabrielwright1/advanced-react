(function() {
var exports = {};
exports.id = "pages/orders";
exports.ids = ["pages/orders"];
exports.modules = {

/***/ "./components/styles/OrderItemStyles.js":
/*!**********************************************!*\
  !*** ./components/styles/OrderItemStyles.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const OrderItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().li.withConfig({
  displayName: "OrderItemStyles",
  componentId: "sc-fbwo89-0"
})(["box-shadow:var(--bs);list-style:none;padding:2rem;border:1px solid var(--offWhite);h2{border-bottom:2px solid red;margin-top:0;margin-bottom:2rem;padding-bottom:2rem;}.images{display:grid;grid-gap:10px;grid-template-columns:repeat(auto-fit,minmax(0,1fr));margin-top:1rem;img{height:200px;object-fit:cover;width:100%;}}.order-meta{display:grid;grid-template-columns:repeat(auto-fit,minmax(20px,1fr));display:grid;grid-gap:1rem;text-align:center;& > *{margin:0;background:rgba(0,0,0,0.03);padding:1rem 0;}strong{display:block;margin-bottom:1rem;}}"]);
/* harmony default export */ __webpack_exports__["default"] = (OrderItemStyles);

/***/ }),

/***/ "./pages/orders.js":
/*!*************************!*\
  !*** ./pages/orders.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ OrdersPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/styles/OrderItemStyles */ "./components/styles/OrderItemStyles.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\orders.js";








const USER_ORDERS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  query USER_ORDERS_QUERY {
    allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;
const OrderUl = styled_components__WEBPACK_IMPORTED_MODULE_4___default().ul.withConfig({
  displayName: "orders__OrderUl",
  componentId: "sc-15udvsj-0"
})(["display:grid;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));grid-gap:4rem;"]);

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0);
}

function OrdersPage() {
  const {
    data,
    error,
    loading
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(USER_ORDERS_QUERY);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Loading..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 23
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__.default, {
    error: error
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 21
  }, this);
  const {
    allOrders
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["Your Orders (", allOrders.length, ")"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: ["You have ", allOrders.length, " orders!"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(OrderUl, {
      children: allOrders.map(order => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_styles_OrderItemStyles__WEBPACK_IMPORTED_MODULE_8__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
          href: `/order/${order.id}`,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "order-meta",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [countItemsInAnOrder(order), " Items"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: [order.items.length, " Product", order.items.length === 1 ? '' : 's']
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_7__.default)(order.total)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "images",
              children: order.items.map(item => {
                var _item$photo, _item$photo$image;

                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: (_item$photo = item.photo) === null || _item$photo === void 0 ? void 0 : (_item$photo$image = _item$photo.image) === null || _item$photo$image === void 0 ? void 0 : _item$photo$image.publicUrlTransformed,
                  alt: item.name
                }, `image-${item.id}`, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 21
                }, this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js-lib_formatMoney_js"], function() { return __webpack_exec__("./pages/orders.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vcGFnZXMvb3JkZXJzLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiZ3JhcGhxbC10YWdcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiT3JkZXJJdGVtU3R5bGVzIiwic3R5bGVkIiwiVVNFUl9PUkRFUlNfUVVFUlkiLCJncWwiLCJPcmRlclVsIiwiY291bnRJdGVtc0luQW5PcmRlciIsIm9yZGVyIiwiaXRlbXMiLCJyZWR1Y2UiLCJ0YWxseSIsIml0ZW0iLCJxdWFudGl0eSIsIk9yZGVyc1BhZ2UiLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwidXNlUXVlcnkiLCJhbGxPcmRlcnMiLCJsZW5ndGgiLCJtYXAiLCJpZCIsImZvcm1hdE1vbmV5IiwidG90YWwiLCJwaG90byIsImltYWdlIiwicHVibGljVXJsVHJhbnNmb3JtZWQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxlQUFlLEdBQUdDLHNFQUFIO0FBQUE7QUFBQTtBQUFBLHlpQkFBckI7QUF5Q0EsK0RBQWVELGVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1FLGlCQUFpQixHQUFHQyxvREFBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBdkJBO0FBeUJBLE1BQU1DLE9BQU8sR0FBR0gsc0VBQUg7QUFBQTtBQUFBO0FBQUEsNEZBQWI7O0FBTUEsU0FBU0ksbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDLFNBQU9BLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CLENBQUNDLEtBQUQsRUFBUUMsSUFBUixLQUFpQkQsS0FBSyxHQUFHQyxJQUFJLENBQUNDLFFBQWpELEVBQTJELENBQTNELENBQVA7QUFDRDs7QUFFYyxTQUFTQyxVQUFULEdBQXNCO0FBQ25DLFFBQU07QUFBRUMsUUFBRjtBQUFRQyxTQUFSO0FBQWVDO0FBQWYsTUFBMkJDLHdEQUFRLENBQUNkLGlCQUFELENBQXpDO0FBQ0EsTUFBSWEsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU8sOERBQUMsNkRBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNYLFFBQU07QUFBRUc7QUFBRixNQUFnQkosSUFBdEI7QUFDQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxvQ0FBcUJJLFNBQVMsQ0FBQ0MsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBQSw4QkFBY0QsU0FBUyxDQUFDQyxNQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQUtFLDhEQUFDLE9BQUQ7QUFBQSxnQkFDR0QsU0FBUyxDQUFDRSxHQUFWLENBQWViLEtBQUQsaUJBQ2IsOERBQUMsdUVBQUQ7QUFBQSwrQkFDRSw4REFBQyxrREFBRDtBQUFNLGNBQUksRUFBRyxVQUFTQSxLQUFLLENBQUNjLEVBQUcsRUFBL0I7QUFBQSxpQ0FDRTtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0U7QUFBQSwyQkFBSWYsbUJBQW1CLENBQUNDLEtBQUQsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBRUU7QUFBQSwyQkFDR0EsS0FBSyxDQUFDQyxLQUFOLENBQVlXLE1BRGYsY0FFR1osS0FBSyxDQUFDQyxLQUFOLENBQVlXLE1BQVosS0FBdUIsQ0FBdkIsR0FBMkIsRUFBM0IsR0FBZ0MsR0FGbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBTUU7QUFBQSwwQkFBSUcseURBQVcsQ0FBQ2YsS0FBSyxDQUFDZ0IsS0FBUDtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBU0U7QUFBSyx1QkFBUyxFQUFDLFFBQWY7QUFBQSx3QkFDR2hCLEtBQUssQ0FBQ0MsS0FBTixDQUFZWSxHQUFaLENBQWlCVCxJQUFEO0FBQUE7O0FBQUEsb0NBQ2Y7QUFFRSxxQkFBRyxpQkFBRUEsSUFBSSxDQUFDYSxLQUFQLHFFQUFFLFlBQVlDLEtBQWQsc0RBQUUsa0JBQW1CQyxvQkFGMUI7QUFHRSxxQkFBRyxFQUFFZixJQUFJLENBQUNnQjtBQUhaLG1CQUNRLFNBQVFoQixJQUFJLENBQUNVLEVBQUcsRUFEeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFEZTtBQUFBLGVBQWhCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbUNELEM7Ozs7Ozs7Ozs7O0FDcEZELDRDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL29yZGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBPcmRlckl0ZW1TdHlsZXMgPSBzdHlsZWQubGlgXG4gIGJveC1zaGFkb3c6IHZhcigtLWJzKTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tb2ZmV2hpdGUpO1xuICBoMiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJlZDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gIH1cblxuICAuaW1hZ2VzIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG4gIC5vcmRlci1tZXRhIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjBweCwgMWZyKSk7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgJiA+ICoge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbiAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICB9XG4gICAgc3Ryb25nIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVySXRlbVN0eWxlcztcbiIsImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9FcnJvck1lc3NhZ2UnO1xyXG5pbXBvcnQgZm9ybWF0TW9uZXkgZnJvbSAnLi4vbGliL2Zvcm1hdE1vbmV5JztcclxuaW1wb3J0IE9yZGVySXRlbVN0eWxlcyBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlcy9PcmRlckl0ZW1TdHlsZXMnO1xyXG5cclxuY29uc3QgVVNFUl9PUkRFUlNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgVVNFUl9PUkRFUlNfUVVFUlkge1xyXG4gICAgYWxsT3JkZXJzIHtcclxuICAgICAgaWRcclxuICAgICAgY2hhcmdlXHJcbiAgICAgIHRvdGFsXHJcbiAgICAgIHVzZXIge1xyXG4gICAgICAgIGlkXHJcbiAgICAgIH1cclxuICAgICAgaXRlbXMge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgcHJpY2VcclxuICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgIHBob3RvIHtcclxuICAgICAgICAgIGltYWdlIHtcclxuICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBPcmRlclVsID0gc3R5bGVkLnVsYFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDRyZW07XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKSB7XHJcbiAgcmV0dXJuIG9yZGVyLml0ZW1zLnJlZHVjZSgodGFsbHksIGl0ZW0pID0+IHRhbGx5ICsgaXRlbS5xdWFudGl0eSwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyc1BhZ2UoKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciwgbG9hZGluZyB9ID0gdXNlUXVlcnkoVVNFUl9PUkRFUlNfUVVFUlkpO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+O1xyXG4gIGNvbnN0IHsgYWxsT3JkZXJzIH0gPSBkYXRhO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+WW91ciBPcmRlcnMgKHthbGxPcmRlcnMubGVuZ3RofSk8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxoMj5Zb3UgaGF2ZSB7YWxsT3JkZXJzLmxlbmd0aH0gb3JkZXJzITwvaDI+XHJcbiAgICAgIDxPcmRlclVsPlxyXG4gICAgICAgIHthbGxPcmRlcnMubWFwKChvcmRlcikgPT4gKFxyXG4gICAgICAgICAgPE9yZGVySXRlbVN0eWxlcz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9vcmRlci8ke29yZGVyLmlkfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcmRlci1tZXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntjb3VudEl0ZW1zSW5Bbk9yZGVyKG9yZGVyKX0gSXRlbXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5sZW5ndGh9IFByb2R1Y3RcclxuICAgICAgICAgICAgICAgICAgICB7b3JkZXIuaXRlbXMubGVuZ3RoID09PSAxID8gJycgOiAncyd9XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+e2Zvcm1hdE1vbmV5KG9yZGVyLnRvdGFsKX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtvcmRlci5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BpbWFnZS0ke2l0ZW0uaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5waG90bz8uaW1hZ2U/LnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvT3JkZXJJdGVtU3R5bGVzPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L09yZGVyVWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==