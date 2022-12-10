self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkout": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @stripe/react-stripe-js */ "./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/lib/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Checkout.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__.default)(["\n  mutation CREATE_ORDER_MUTATION($token: String!) {\n    checkout(token: $token) {\n      id\n      charge\n      total\n      items {\n        id\n        name\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_10__.default.form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
_c = CheckoutFormStyles;
var CREATE_ORDER_MUTATION = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_11__.default)(_templateObject());
var stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__.loadStripe)("pk_test_51MCsjDKGC05fw9nWbdlzB5QzAg6dt2XDBpKbWtO0oLxFEai8EIfcqFHzX7R7D4NXB58hEOLc5gHMuFyz8y2y7Mjt00qJLsukRg");

function CheckoutForm() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),
      error = _useState[0],
      setError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useStripe)();
  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useElements)();

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation)(CREATE_ORDER_MUTATION),
      _useMutation2 = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__.default)(_useMutation, 2),
      checkout = _useMutation2[0],
      graphQLError = _useMutation2[1].error;

  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = (0,C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {
      var _yield$stripe$createP, error, paymentMethod, order;

      return C_webdesign_projects_advanced_react_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // 1. Stop the form from submitting and turn the loader one
              e.preventDefault();
              setLoading(true);
              console.log('We gotta do some work..'); // 2. Start the page transition

              nprogress__WEBPACK_IMPORTED_MODULE_8___default().start(); // 3. Create the payment method via stripe (Token comes back here if successful)

              _context.next = 6;
              return stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.CardElement)
              });

            case 6:
              _yield$stripe$createP = _context.sent;
              error = _yield$stripe$createP.error;
              paymentMethod = _yield$stripe$createP.paymentMethod;
              console.log(paymentMethod); // 4. Handle any errors from stripe

              if (!error) {
                _context.next = 14;
                break;
              }

              setError(error);
              nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();
              return _context.abrupt("return");

            case 14:
              _context.next = 16;
              return checkout({
                variables: {
                  token: paymentMethod.id
                }
              });

            case 16:
              order = _context.sent;
              console.log('Finished with the order'); // 6. Change the page to view the order
              // 7. Close the cart
              // 8. turn the loader off

              setLoading(false);
              nprogress__WEBPACK_IMPORTED_MODULE_8___default().done();

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }, this), graphQLError && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: graphQLError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 24
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_9__.default, {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

_s(CheckoutForm, "XEbF03Na/UBenDMH3JozVN2ndyU=", false, function () {
  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.useElements, _apollo_client__WEBPACK_IMPORTED_MODULE_12__.useMutation];
});

_c2 = CheckoutForm;

function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_6__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

_c3 = Checkout;


var _c, _c2, _c3;

$RefreshReg$(_c, "CheckoutFormStyles");
$RefreshReg$(_c2, "CheckoutForm");
$RefreshReg$(_c3, "Checkout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcyJdLCJuYW1lcyI6WyJDaGVja291dEZvcm1TdHlsZXMiLCJzdHlsZWQiLCJDUkVBVEVfT1JERVJfTVVUQVRJT04iLCJncWwiLCJzdHJpcGVMaWIiLCJsb2FkU3RyaXBlIiwicHJvY2VzcyIsIkNoZWNrb3V0Rm9ybSIsInVzZVN0YXRlIiwiZXJyb3IiLCJzZXRFcnJvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RyaXBlIiwidXNlU3RyaXBlIiwiZWxlbWVudHMiLCJ1c2VFbGVtZW50cyIsInVzZU11dGF0aW9uIiwiY2hlY2tvdXQiLCJncmFwaFFMRXJyb3IiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiblByb2dyZXNzIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsInZhcmlhYmxlcyIsInRva2VuIiwiaWQiLCJvcmRlciIsImZvbnRTaXplIiwibWVzc2FnZSIsIkNoZWNrb3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLHVFQUFIO0FBQUE7QUFBQTtBQUFBLDhJQUF4QjtLQUFNRCxrQjtBQVNOLElBQU1FLHFCQUFxQixHQUFHQyxxREFBSCxtQkFBM0I7QUFjQSxJQUFNQyxTQUFTLEdBQUdDLDZEQUFVLENBQUNDLDZHQUFELENBQTVCOztBQUVBLFNBQVNDLFlBQVQsR0FBd0I7QUFBQTs7QUFBQSxrQkFDSUMsK0NBQVEsRUFEWjtBQUFBLE1BQ2ZDLEtBRGU7QUFBQSxNQUNSQyxRQURROztBQUFBLG1CQUVRRiwrQ0FBUSxDQUFDLEtBQUQsQ0FGaEI7QUFBQSxNQUVmRyxPQUZlO0FBQUEsTUFFTkMsVUFGTTs7QUFHdEIsTUFBTUMsTUFBTSxHQUFHQyxrRUFBUyxFQUF4QjtBQUNBLE1BQU1DLFFBQVEsR0FBR0Msb0VBQVcsRUFBNUI7O0FBSnNCLHFCQUtzQkMsNERBQVcsQ0FDckRmLHFCQURxRCxDQUxqQztBQUFBO0FBQUEsTUFLZmdCLFFBTGU7QUFBQSxNQUtJQyxZQUxKLG9CQUtIVixLQUxHOztBQUFBLFdBUVBXLFlBUk87QUFBQTtBQUFBOztBQUFBO0FBQUEsb1ZBUXRCLGlCQUE0QkMsQ0FBNUI7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFO0FBQ0FBLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBVix3QkFBVSxDQUFDLElBQUQsQ0FBVjtBQUNBVyxxQkFBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFKRixDQUtFOztBQUNBQyxvRUFBQSxHQU5GLENBT0U7O0FBUEY7QUFBQSxxQkFReUNaLE1BQU0sQ0FBQ2EsbUJBQVAsQ0FBMkI7QUFDaEVDLG9CQUFJLEVBQUUsTUFEMEQ7QUFFaEVDLG9CQUFJLEVBQUViLFFBQVEsQ0FBQ2MsVUFBVCxDQUFvQkMsZ0VBQXBCO0FBRjBELGVBQTNCLENBUnpDOztBQUFBO0FBQUE7QUFRVXJCLG1CQVJWLHlCQVFVQSxLQVJWO0FBUWlCc0IsMkJBUmpCLHlCQVFpQkEsYUFSakI7QUFZRVIscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTyxhQUFaLEVBWkYsQ0FhRTs7QUFiRixtQkFjTXRCLEtBZE47QUFBQTtBQUFBO0FBQUE7O0FBZUlDLHNCQUFRLENBQUNELEtBQUQsQ0FBUjtBQUNBZ0IsbUVBQUE7QUFoQko7O0FBQUE7QUFBQTtBQUFBLHFCQW9Cc0JQLFFBQVEsQ0FBQztBQUMzQmMseUJBQVMsRUFBRTtBQUNUQyx1QkFBSyxFQUFFRixhQUFhLENBQUNHO0FBRFo7QUFEZ0IsZUFBRCxDQXBCOUI7O0FBQUE7QUFvQlFDLG1CQXBCUjtBQXlCRVoscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBekJGLENBMEJFO0FBQ0E7QUFFQTs7QUFDQVosd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQWEsbUVBQUE7O0FBL0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUnNCO0FBQUE7QUFBQTs7QUEwQ3RCLHNCQUNFLDhEQUFDLGtCQUFEO0FBQW9CLFlBQVEsRUFBRUwsWUFBOUI7QUFBQSxlQUNHWCxLQUFLLGlCQUFJO0FBQUcsV0FBSyxFQUFFO0FBQUUyQixnQkFBUSxFQUFFO0FBQVosT0FBVjtBQUFBLGdCQUE2QjNCLEtBQUssQ0FBQzRCO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEWixFQUVHbEIsWUFBWSxpQkFBSTtBQUFHLFdBQUssRUFBRTtBQUFFaUIsZ0JBQVEsRUFBRTtBQUFaLE9BQVY7QUFBQSxnQkFBNkJqQixZQUFZLENBQUNrQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRm5CLGVBR0UsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUUsOERBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztHQWxEUTlCLFk7VUFHUU8sOEQsRUFDRUUsZ0UsRUFDMkJDLHdEOzs7TUFMckNWLFk7O0FBb0RULFNBQVMrQixRQUFULEdBQW9CO0FBQ2xCLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVUsVUFBTSxFQUFFbEMsU0FBbEI7QUFBQSwyQkFDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFOUWtDLFE7QUFRVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmNiZGE2ZDBlZmY5YmQ5NmEyMmYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IHtcclxuICBDYXJkRWxlbWVudCxcclxuICBFbGVtZW50cyxcclxuICB1c2VFbGVtZW50cyxcclxuICB1c2VTdHJpcGUsXHJcbn0gZnJvbSAnQHN0cmlwZS9yZWFjdC1zdHJpcGUtanMnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IG5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gJy4vc3R5bGVzL1NpY2tCdXR0b24nO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IENSRUFURV9PUkRFUl9NVVRBVElPTiA9IGdxbGBcclxuICBtdXRhdGlvbiBDUkVBVEVfT1JERVJfTVVUQVRJT04oJHRva2VuOiBTdHJpbmchKSB7XHJcbiAgICBjaGVja291dCh0b2tlbjogJHRva2VuKSB7XHJcbiAgICAgIGlkXHJcbiAgICAgIGNoYXJnZVxyXG4gICAgICB0b3RhbFxyXG4gICAgICBpdGVtcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHJpcGVMaWIgPSBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9LRVkpO1xyXG5cclxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VFbGVtZW50cygpO1xyXG4gIGNvbnN0IFtjaGVja291dCwgeyBlcnJvcjogZ3JhcGhRTEVycm9yIH1dID0gdXNlTXV0YXRpb24oXHJcbiAgICBDUkVBVEVfT1JERVJfTVVUQVRJT05cclxuICApO1xyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAvLyAxLiBTdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZyBhbmQgdHVybiB0aGUgbG9hZGVyIG9uZVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgIGNvbnNvbGUubG9nKCdXZSBnb3R0YSBkbyBzb21lIHdvcmsuLicpO1xyXG4gICAgLy8gMi4gU3RhcnQgdGhlIHBhZ2UgdHJhbnNpdGlvblxyXG4gICAgblByb2dyZXNzLnN0YXJ0KCk7XHJcbiAgICAvLyAzLiBDcmVhdGUgdGhlIHBheW1lbnQgbWV0aG9kIHZpYSBzdHJpcGUgKFRva2VuIGNvbWVzIGJhY2sgaGVyZSBpZiBzdWNjZXNzZnVsKVxyXG4gICAgY29uc3QgeyBlcnJvciwgcGF5bWVudE1ldGhvZCB9ID0gYXdhaXQgc3RyaXBlLmNyZWF0ZVBheW1lbnRNZXRob2Qoe1xyXG4gICAgICB0eXBlOiAnY2FyZCcsXHJcbiAgICAgIGNhcmQ6IGVsZW1lbnRzLmdldEVsZW1lbnQoQ2FyZEVsZW1lbnQpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhwYXltZW50TWV0aG9kKTtcclxuICAgIC8vIDQuIEhhbmRsZSBhbnkgZXJyb3JzIGZyb20gc3RyaXBlXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG4gICAgICBuUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gICAgICByZXR1cm47IC8vIHN0b3BzIHRoZSBjaGVja291dCBmcm9tIGhhcHBlbmluZ1xyXG4gICAgfVxyXG4gICAgLy8gNS4gU2VuZCB0aGUgdG9rZW4gZnJvbSBzdGVwIDMgdG8gb3VyIGtleXN0b25lIHNlcnZlciwgdmlhIGEgY3VzdG9tIG11dGF0aW9uIVxyXG4gICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBjaGVja291dCh7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIHRva2VuOiBwYXltZW50TWV0aG9kLmlkLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnRmluaXNoZWQgd2l0aCB0aGUgb3JkZXInKTtcclxuICAgIC8vIDYuIENoYW5nZSB0aGUgcGFnZSB0byB2aWV3IHRoZSBvcmRlclxyXG4gICAgLy8gNy4gQ2xvc2UgdGhlIGNhcnRcclxuXHJcbiAgICAvLyA4LiB0dXJuIHRoZSBsb2FkZXIgb2ZmXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIG5Qcm9ncmVzcy5kb25lKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAge2Vycm9yICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT57ZXJyb3IubWVzc2FnZX08L3A+fVxyXG4gICAgICB7Z3JhcGhRTEVycm9yICYmIDxwIHN0eWxlPXt7IGZvbnRTaXplOiAxMiB9fT57Z3JhcGhRTEVycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgIDxTaWNrQnV0dG9uPkNoZWNrIE91dCBOb3c8L1NpY2tCdXR0b24+XHJcbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cclxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgPC9FbGVtZW50cz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBDaGVja291dCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9