(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Cart.js":
/*!****************************!*\
  !*** ./components/Cart.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/calcTotalPrice */ "./lib/calcTotalPrice.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/formatMoney */ "./lib/formatMoney.js");
/* harmony import */ var _Checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Checkout */ "./components/Checkout.js");
/* harmony import */ var _RemoveFromCart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RemoveFromCart */ "./components/RemoveFromCart.js");
/* harmony import */ var _styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/CartStyles */ "./components/styles/CartStyles.js");
/* harmony import */ var _styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CloseButton */ "./components/styles/CloseButton.js");
/* harmony import */ var _styles_Supreme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/Supreme */ "./components/styles/Supreme.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Cart.js";










const CartItemStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().li.withConfig({
  displayName: "Cart__CartItemStyles",
  componentId: "sc-19s6z00-0"
})(["padding:1rem 0;border-bottom:1px solid var(--lightGrey);display:grid;grid-template-columns:auto 1fr auto;img{margin-right:1rem;}h3,p{margin:0;}"]);

function CartItem({
  cartItem
}) {
  const {
    product
  } = cartItem;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItemStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      width: "100",
      src: product.photo.image.publicUrlTransformed,
      alt: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: product.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: [(0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(product.price * cartItem.quantity), " =", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("em", {
          children: [cartItem.quantity, " \xD7 ", (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)(product.price)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_RemoveFromCart__WEBPACK_IMPORTED_MODULE_6__.default, {
      id: cartItem.id
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

function Cart() {
  const me = (0,_User__WEBPACK_IMPORTED_MODULE_10__.useUser)();
  const {
    cartOpen,
    closeCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_3__.useCart)();
  if (!me) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CartStyles__WEBPACK_IMPORTED_MODULE_7__.default, {
    open: cartOpen,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_Supreme__WEBPACK_IMPORTED_MODULE_9__.default, {
        children: [me.name, "'s Cart"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_CloseButton__WEBPACK_IMPORTED_MODULE_8__.default, {
        type: "button",
        onClick: closeCart,
        children: "\xD7"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      children: me.cart.map(cartItem => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, {
        cartItem: cartItem
      }, cartItem.id, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: (0,_lib_formatMoney__WEBPACK_IMPORTED_MODULE_4__.default)((0,_lib_calcTotalPrice__WEBPACK_IMPORTED_MODULE_2__.default)(me.cart))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Checkout__WEBPACK_IMPORTED_MODULE_5__.Checkout, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/CartCount.js":
/*!*********************************!*\
  !*** ./components/CartCount.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartCount; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-transition-group */ "react-transition-group");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_transition_group__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\CartCount.js";




const Dot = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
  displayName: "CartCount__Dot",
  componentId: "sc-xxvp4g-0"
})(["background-color:var(--red);color:white;border-radius:50%;padding:0 0.5 rem;line-height:2rem;min-width:3rem;margin-left:1rem;font-feature-settings:'tnum';font-variant-numeric:tabular-nums;"]);
const AnimationStyles = styled_components__WEBPACK_IMPORTED_MODULE_3___default().span.withConfig({
  displayName: "CartCount__AnimationStyles",
  componentId: "sc-xxvp4g-1"
})(["position:relative;.count{display:block;position:relative;transition:transform 0.4s;backface-visibility:hidden;}.count-enter{transform:scale(4) rotateX(0.5turn);}.count-enter-active{transform:rotateX(0);}.count-exit{top:0;position:absolute;transform:rotateX(0);}.count-exit-active{transform:scale(4) rotateX(0.5turn);}"]);
function CartCount({
  count
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AnimationStyles, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.TransitionGroup, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_transition_group__WEBPACK_IMPORTED_MODULE_2__.CSSTransition, {
        unmountOnExit: true,
        className: "count",
        classNames: "count",
        timeout: {
          enter: 400,
          exit: 400
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dot, {
          children: count
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, count, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkout": function() { return /* binding */ Checkout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stripe/stripe-js */ "@stripe/stripe-js");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/react-stripe-js */ "@stripe/react-stripe-js");
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_SickButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/SickButton */ "./components/styles/SickButton.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Checkout.js";






const CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default().form.withConfig({
  displayName: "Checkout__CheckoutFormStyles",
  componentId: "sc-10mtoy5-0"
})(["box-shadow:0 1px 2px 2px rgba(0,0,0,0.04);border:1px solid rgba(0,0,0,0.06);border-radius:5px;padding:1rem;display:grid;grid-gap:1rem;"]);
const stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_2__.loadStripe)("pk_test_51MCsjDKGC05fw9nWbdlzB5QzAg6dt2XDBpKbWtO0oLxFEai8EIfcqFHzX7R7D4NXB58hEOLc5gHMuFyz8y2y7Mjt00qJLsukRg");

function CheckoutForm() {
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useStripe)();
  const elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.useElements)();

  async function handleSubmit(e) {
    // 1. Stop the form from submitting and turn the loader one
    e.preventDefault();
    setLoading(true);
    console.log('We gotta do some work..'); // 2. Start the page transition

    nprogress__WEBPACK_IMPORTED_MODULE_5___default().start(); // 3. Create the payment method via stripe (Token comes back here if successful)

    const {
      error,
      paymentMethod
    } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement)
    });
    console.log(paymentMethod); // 4. Handle any errors from stripe

    if (error) {
      setError(error);
    } // 5. Send the token from step 3 to our keystone server, via a custom mutation!
    // 6. Change the page to view the order
    // 7. Close the cart
    // 8. turn the loader off


    setLoading(false);
    nprogress__WEBPACK_IMPORTED_MODULE_5___default().done();
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutFormStyles, {
    onSubmit: handleSubmit,
    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      style: {
        fontSize: 12
      },
      children: error.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.CardElement, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_SickButton__WEBPACK_IMPORTED_MODULE_6__.default, {
      children: "Check Out Now"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

function Checkout() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_3__.Elements, {
    stripe: stripeLib,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutForm, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}



/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Header; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cart */ "./components/Cart.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Search */ "./components/Search.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Header.js";





const Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-2cpreo-0"
})(["font-size:4rem;margin-left:2rem;position:relative;z-index:2;background:red;transform:skew(-7deg);a{color:white;text-decoration:none;text-transform:uppercase;padding:0.5rem 1rem;}"]);
const HeaderStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().header.withConfig({
  displayName: "Header__HeaderStyles",
  componentId: "sc-2cpreo-1"
})([".bar{border-bottom:10px solid var(--black,black);display:grid;grid-template-columns:auto 1fr;justify-content:space-between;align-items:stretch;}.sub-bar{display:grid;grid-template-columns:1fr auto;border-bottom:1px solid var(--black,black);}"]);
function Header() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "bar",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Logo, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
          href: "/",
          children: "Sick Fits"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "sub-bar",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Search__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Nav; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");
/* harmony import */ var _CartCount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CartCount */ "./components/CartCount.js");
/* harmony import */ var _SignOut__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SignOut */ "./components/SignOut.js");
/* harmony import */ var _styles_NavStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/NavStyles */ "./components/styles/NavStyles.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./User */ "./components/User.js");


var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Nav.js";






function Nav() {
  const user = (0,_User__WEBPACK_IMPORTED_MODULE_6__.useUser)();
  const {
    openCart
  } = (0,_lib_cartState__WEBPACK_IMPORTED_MODULE_2__.useCart)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_NavStyles__WEBPACK_IMPORTED_MODULE_5__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/products",
      children: "Products"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/sell",
        children: "Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/orders",
        children: "Orders"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/account",
        children: "Account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SignOut__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: openCart,
        children: ["My Cart", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CartCount__WEBPACK_IMPORTED_MODULE_3__.default, {
          count: user.cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }, this)]
    }, void 0, true), !user && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "/signin",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }, this)
    }, void 0, false)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Page; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./components/Header.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Page.js";



const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)(["@font-face{font-family:\"radnika_next\";src:url(\"/static/radnikanext-medium-webfont.woff2\") format('woff2');font-weight:normal;font-style:normal;}html{--red:#ff0000;--black:#393939;--grey:#3a3a3a;--gray:var(--grey);--lightGrey:#e1e1e1;--lightGray:var(--lightGrey);--offWhite:#ededed;--maxWidth:1000px;--bs:0 12px 24px 0 rgba(0,0,0,0.09);box-sizing:border-box;font-size:62.5%;}*,*::before,*:after{box-sizing:inherit;}body{font-family:\"radnika_next\",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;padding:0;margin:0;font-size:1.5rem;line-height:2;}a{text-decoration:none;color:var(---black);}a:hover{text-decoration:underline;}button{font-family:\"radnika_next\",-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;}"]);
const InnerStyles = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
  displayName: "Page__InnerStyles",
  componentId: "sc-4u7a64-0"
})(["max-width:var(--maxWidth);margin:0 auto;padding:2rem;"]);
function Page({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InnerStyles, {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
Page.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().any)
};

/***/ }),

/***/ "./components/RemoveFromCart.js":
/*!**************************************!*\
  !*** ./components/RemoveFromCart.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RemoveFromCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\RemoveFromCart.js";



const BigButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default().button.withConfig({
  displayName: "RemoveFromCart__BigButton",
  componentId: "sc-emvtd6-0"
})(["font-size:3rem;background:none;border:0;&:hover{color:var(--red);cursor:pointer;}"]);
const REMOVE_FROM_CART_MUTATION = (graphql_tag__WEBPACK_IMPORTED_MODULE_2___default())`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    deleteCartItem(id: $id) {
      id
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem));
}

function RemoveFromCart({
  id
}) {
  const [removeFromCart, {
    loading
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(REMOVE_FROM_CART_MUTATION, {
    variables: {
      id
    },
    update // ! Not working as intended
    // optimisticResponse: {
    //   deleteCartItem: {
    //     __typename: 'CartItem',
    //     id,
    //   },
    // },

  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BigButton, {
    onClick: removeFromCart,
    disabled: loading,
    type: "button",
    title: "remove this item from cart",
    children: "\xD7"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Search; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var _styles_DropDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/DropDown */ "./components/styles/DropDown.js");


var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\Search.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */







const SEARCH_PRODUCTS_QUERY = (graphql_tag__WEBPACK_IMPORTED_MODULE_4___default())`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerms: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
function Search() {
  const router = (0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const [findItems, {
    loading,
    data,
    error
  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useLazyQuery)(SEARCH_PRODUCTS_QUERY, {
    fetchPolicy: 'no-cache'
  });
  const items = (data === null || data === void 0 ? void 0 : data.searchTerms) || [];
  const findItemsButChill = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => lodash_debounce__WEBPACK_IMPORTED_MODULE_5___default()(findItems, 350), [findItems]);
  (0,downshift__WEBPACK_IMPORTED_MODULE_3__.resetIdCounter)();
  const {
    isOpen,
    inputValue,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    getItemProps,
    highlightedIndex
  } = (0,downshift__WEBPACK_IMPORTED_MODULE_3__.useCombobox)({
    items,

    onInputValueChange() {
      findItemsButChill({
        variables: {
          searchTerm: inputValue
        }
      });
    },

    onSelectedItemChange({
      selectedItem
    }) {
      router.push({
        pathname: `/product/${selectedItem.id}`
      });
    },

    itemToString: item => (item === null || item === void 0 ? void 0 : item.name) || ''
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.SearchStyles, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({}, getComboboxProps()), {}, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", _objectSpread({}, getInputProps({
        type: 'search',
        placeholder: 'Search for an Item',
        id: 'search',
        className: loading ? 'loading' : ''
      })), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDown, _objectSpread(_objectSpread({}, getMenuProps()), {}, {
      children: [isOpen && items.map((item, index) => /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, _objectSpread(_objectSpread({}, getItemProps({
        item,
        index
      })), {}, {
        key: item.id,
        highlighted: index === highlightedIndex,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
        src: item.photo.image.publicUrlTransformed,
        alt: item.name,
        width: "50"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }, this), item.name)), isOpen && !items.length && !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_DropDown__WEBPACK_IMPORTED_MODULE_7__.DropDownItem, {
        children: ["Sorry, No items found for ", inputValue]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 11
      }, this)]
    }), void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/SignOut.js":
/*!*******************************!*\
  !*** ./components/SignOut.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignOut; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./components/User.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\components\\SignOut.js";


const SIGN_OUT_MUTATION = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`
  mutation {
    endSession
  }
`;
function SignOut() {
  const [signout] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(SIGN_OUT_MUTATION, {
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_2__.CURRENT_USER_QUERY
    }]
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    type: "button",
    onClick: signout,
    children: "Sign Out"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./components/styles/CartStyles.js":
/*!*****************************************!*\
  !*** ./components/styles/CartStyles.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CartStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "CartStyles",
  componentId: "sc-1tvog53-0"
})(["padding:20px;position:relative;background:white;position:fixed;height:100%;top:0;right:0;width:40%;min-width:500px;bottom:0;transform:translateX(100%);transition:all 0.3s;box-shadow:0 0 10px 3px rgba(0,0,0,0.2);z-index:5;display:grid;grid-template-rows:auto 1fr auto;", ";header{border-bottom:5px solid var(--black);margin-bottom:2rem;padding-bottom:2rem;}footer{border-top:10px double var(--black);margin-top:2rem;padding-top:2rem;align-items:center;font-size:3rem;font-weight:900;p{margin:0;}}ul{margin:0;padding:0;list-style:none;overflow:scroll;}"], props => props.open && `transform: translateX(0);`);
/* harmony default export */ __webpack_exports__["default"] = (CartStyles);

/***/ }),

/***/ "./components/styles/CloseButton.js":
/*!******************************************!*\
  !*** ./components/styles/CloseButton.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CloseButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "CloseButton",
  componentId: "sc-1seb878-0"
})(["background:black;color:white;font-size:3rem;border:0;position:absolute;z-index:2;right:0;cursor:pointer;"]);
/* harmony default export */ __webpack_exports__["default"] = (CloseButton);

/***/ }),

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDown": function() { return /* binding */ DropDown; },
/* harmony export */   "DropDownItem": function() { return /* binding */ DropDownItem; },
/* harmony export */   "SearchStyles": function() { return /* binding */ SearchStyles; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown",
  componentId: "sc-n5d97g-0"
})(["position:absolute;width:100%;z-index:2;border:1px solid var(--lightGray);"]);
const DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__DropDownItem",
  componentId: "sc-n5d97g-1"
})(["border-bottom:1px solid var(--lightGray);background:", ";padding:1rem;transition:all 0.2s;", ";display:flex;align-items:center;border-left:10px solid ", ";img{margin-right:10px;}"], props => props.highlighted ? '#f7f7f7' : 'white', props => props.highlighted ? 'padding-left: 2rem;' : null, props => props.highlighted ? props.theme.lightgrey : 'white');
const glow = (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.keyframes)(["from{box-shadow:0 0 0px yellow;}to{box-shadow:0 0 10px 1px yellow;}"]);
const SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "DropDown__SearchStyles",
  componentId: "sc-n5d97g-2"
})(["position:relative;input{width:100%;padding:10px;border:0;font-size:2rem;&.loading{animation:", " 0.5s ease-in-out infinite alternate;}}"], glow);


/***/ }),

/***/ "./components/styles/NavStyles.js":
/*!****************************************!*\
  !*** ./components/styles/NavStyles.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const NavStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul.withConfig({
  displayName: "NavStyles",
  componentId: "sc-11c0d2g-0"
})(["margin:0;padding:0;display:flex;justify-self:end;font-size:2rem;a,button{padding:1rem 3rem;display:flex;align-items:center;position:relative;text-transform:uppercase;font-weight:900;font-size:1em;background:none;border:0;cursor:pointer;@media (max-width:700px){font-size:10px;padding:0 10px;}&:before{content:'';width:2px;background:var(--lightGray);height:100%;left:0;position:absolute;transform:skew(-20deg);top:0;bottom:0;}&:after{height:2px;background:red;content:'';width:0;position:absolute;transform:translateX(-50%);transition:width 0.4s;transition-timing-function:cubic-bezier(1,-0.65,0,2.31);left:50%;margin-top:2rem;}&:hover,&:focus{outline:none;text-decoration:none;&:after{width:calc(100% - 60px);}@media (max-width:700px){width:calc(100% - 10px);}}}@media (max-width:1300px){border-top:1px solid var(--lightGray);width:100%;justify-content:center;font-size:1.5rem;}"]);
/* harmony default export */ __webpack_exports__["default"] = (NavStyles);

/***/ }),

/***/ "./components/styles/SickButton.js":
/*!*****************************************!*\
  !*** ./components/styles/SickButton.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const SickButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "SickButton",
  componentId: "sc-l04z44-0"
})(["background:red;color:white;font-weight:500;border:0;border-radius:0;text-transform:uppercase;font-size:2rem;padding:0.8rem 1.5rem;transform:skew(-2deg);display:inline-block;transition:all 0.5s;&[disabled]{opacity:0.5;}"]);
/* harmony default export */ __webpack_exports__["default"] = (SickButton);

/***/ }),

/***/ "./components/styles/Supreme.js":
/*!**************************************!*\
  !*** ./components/styles/Supreme.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Supreme = styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3.withConfig({
  displayName: "Supreme",
  componentId: "sc-xv30qb-0"
})(["background:var(--red);color:white;display:inline-block;padding:4px 5px;transform:skew(-3deg);margin:0;font-size:4rem;"]);
/* harmony default export */ __webpack_exports__["default"] = (Supreme);

/***/ }),

/***/ "./lib/calcTotalPrice.js":
/*!*******************************!*\
  !*** ./lib/calcTotalPrice.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ calcTotalPrice; }
/* harmony export */ });
function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    // products can be deleted but still be in your cart
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartStateProvider": function() { return /* binding */ CartStateProvider; },
/* harmony export */   "useCart": function() { return /* binding */ useCart; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\lib\\cartState.js";

const LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({
  children
}) {
  /* This is our own custom provider, we will store (state) 
  and functionality (updaters) in here and anyone can access 
  it via the consumer */
  const {
    0: cartOpen,
    1: setCartOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
  }

  function openCart() {
    setCartOpen(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {
    value: {
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
} // make a custom hook for accesing the cart local state


function useCart() {
  // we use a consumer here to access the local state
  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);
  return all;
}



/***/ }),

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ paginationField; }
/* harmony export */ });
/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ "./components/Pagination.js");

function paginationField() {
  // ** Boilerplate for cache invalidation
  return {
    keyArgs: false,

    // tell apollo that we will take care of everything
    read(existing = [], {
      args,
      cache
    }) {
      var _data$_allProductsMet;

      const {
        skip,
        first
      } = args;
      const data = cache.readQuery({
        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY
      });
      const count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);
      const items = existing.slice(skip, skip + first).filter(x => x);

      if (items.length && items.length !== first && page === pages) {
        return items; // grab items from cache
      }

      if (items.length !== first) {
        return false; // grab items from network
      }

      if (items.length) {
        return items; // grab items from cache
      }

      return false; // fallback to network
    },

    merge(existing, incoming, {
      args
    }) {
      const {
        skip
      } = args;
      const merged = existing ? existing.slice(0) : [];

      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }

      return merged; // grab items from network
    }

  };
}

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ "@apollo/link-error");
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ "@apollo/client/react/ssr");
/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ "next-with-apollo");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _paginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationField */ "./lib/paginationField.js");








function createClient({
  headers,
  initialState
}) {
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({
      graphQLErrors,
      networkError
    }) => {
      if (graphQLErrors) graphQLErrors.forEach(({
        message,
        locations,
        path
      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
    }), // this uses apollo-link-http under the hood, so all the options here come from that package
    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({
      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,
      fetchOptions: {
        credentials: 'include'
      },
      // pass the headers along from this request. This enables SSR with logged in state
      headers
    })]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: We will add this together!
            allProducts: (0,_paginationField__WEBPACK_IMPORTED_MODULE_6__.default)()
          }
        }
      }
    }).restore(initialState || {})
  });
}

/* harmony default export */ __webpack_exports__["default"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {
  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree
}));

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/styles/nprogress.css */ "./components/styles/nprogress.css");
/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");
/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withData */ "./lib/withData.js");
/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/cartState */ "./lib/cartState.js");

var _jsxFileName = "C:\\webdesign\\projects\\advanced-react\\frontend\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable react/jsx-props-no-spreading */

/* eslint-disable react/prop-types */






 // Loader animation

next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().start());
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());
next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_1___default().done());

function MyApp({
  Component,
  pageProps,
  apollo
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {
    client: apollo,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_cartState__WEBPACK_IMPORTED_MODULE_7__.CartStateProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_5__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
} // Boilerplate to make NextJS + Apollo work together


MyApp.getInitialProps = async function ({
  Component,
  ctx
}) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  } // gives us access to query variables at a page level (i.e. /products)


  pageProps.query = ctx.query;
  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_6__.default)(MyApp));

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("downshift");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("lodash.debounce");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

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

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Pagination_js-components_User_js-lib_formatMoney_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DYXJ0Q291bnQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9DaGVja291dC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL05hdi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1BhZ2UuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NlYXJjaC5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL1NpZ25PdXQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvQ2FydFN0eWxlcy5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9DbG9zZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9Ecm9wRG93bi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9OYXZTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vY29tcG9uZW50cy9zdHlsZXMvU2lja0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb21wb25lbnRzL3N0eWxlcy9TdXByZW1lLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9jYWxjVG90YWxQcmljZS5qcyIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvY2FydFN0YXRlLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL2xpYi9wYWdpbmF0aW9uRmllbGQuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kLy4vbGliL3dpdGhEYXRhLmpzIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAYXBvbGxvL2xpbmstZXJyb3JcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJAc3RyaXBlL3JlYWN0LXN0cmlwZS1qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIkBzdHJpcGUvc3RyaXBlLWpzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJkb3duc2hpZnRcIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcImxvZGFzaC5kZWJvdW5jZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQtd2l0aC1hcG9sbG9cIiIsIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc2ljay1maXRzLWZyb250ZW5kL2V4dGVybmFsIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NpY2stZml0cy1mcm9udGVuZC9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiQ2FydEl0ZW1TdHlsZXMiLCJzdHlsZWQiLCJDYXJ0SXRlbSIsImNhcnRJdGVtIiwicHJvZHVjdCIsInBob3RvIiwiaW1hZ2UiLCJwdWJsaWNVcmxUcmFuc2Zvcm1lZCIsIm5hbWUiLCJmb3JtYXRNb25leSIsInByaWNlIiwicXVhbnRpdHkiLCJpZCIsIkNhcnQiLCJtZSIsInVzZVVzZXIiLCJjYXJ0T3BlbiIsImNsb3NlQ2FydCIsInVzZUNhcnQiLCJjYXJ0IiwibWFwIiwiY2FsY1RvdGFsUHJpY2UiLCJEb3QiLCJBbmltYXRpb25TdHlsZXMiLCJDYXJ0Q291bnQiLCJjb3VudCIsImVudGVyIiwiZXhpdCIsIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0cmlwZUxpYiIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiQ2hlY2tvdXRGb3JtIiwiZXJyb3IiLCJzZXRFcnJvciIsInVzZVN0YXRlIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIm5Qcm9ncmVzcyIsInBheW1lbnRNZXRob2QiLCJjcmVhdGVQYXltZW50TWV0aG9kIiwidHlwZSIsImNhcmQiLCJnZXRFbGVtZW50IiwiQ2FyZEVsZW1lbnQiLCJmb250U2l6ZSIsIm1lc3NhZ2UiLCJDaGVja291dCIsIkxvZ28iLCJIZWFkZXJTdHlsZXMiLCJIZWFkZXIiLCJOYXYiLCJ1c2VyIiwib3BlbkNhcnQiLCJyZWR1Y2UiLCJ0YWxseSIsIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiSW5uZXJTdHlsZXMiLCJQYWdlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhbnkiLCJCaWdCdXR0b24iLCJSRU1PVkVfRlJPTV9DQVJUX01VVEFUSU9OIiwiZ3FsIiwidXBkYXRlIiwiY2FjaGUiLCJwYXlsb2FkIiwiZXZpY3QiLCJpZGVudGlmeSIsImRhdGEiLCJkZWxldGVDYXJ0SXRlbSIsIlJlbW92ZUZyb21DYXJ0IiwicmVtb3ZlRnJvbUNhcnQiLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsIlNFQVJDSF9QUk9EVUNUU19RVUVSWSIsIlNlYXJjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImZpbmRJdGVtcyIsInVzZUxhenlRdWVyeSIsImZldGNoUG9saWN5IiwiaXRlbXMiLCJzZWFyY2hUZXJtcyIsImZpbmRJdGVtc0J1dENoaWxsIiwidXNlTWVtbyIsImRlYm91bmNlIiwicmVzZXRJZENvdW50ZXIiLCJpc09wZW4iLCJpbnB1dFZhbHVlIiwiZ2V0TWVudVByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImdldENvbWJvYm94UHJvcHMiLCJnZXRJdGVtUHJvcHMiLCJoaWdobGlnaHRlZEluZGV4IiwidXNlQ29tYm9ib3giLCJvbklucHV0VmFsdWVDaGFuZ2UiLCJzZWFyY2hUZXJtIiwib25TZWxlY3RlZEl0ZW1DaGFuZ2UiLCJzZWxlY3RlZEl0ZW0iLCJwdXNoIiwicGF0aG5hbWUiLCJpdGVtVG9TdHJpbmciLCJpdGVtIiwicGxhY2Vob2xkZXIiLCJjbGFzc05hbWUiLCJpbmRleCIsImxlbmd0aCIsIlNJR05fT1VUX01VVEFUSU9OIiwiU2lnbk91dCIsInNpZ25vdXQiLCJyZWZldGNoUXVlcmllcyIsInF1ZXJ5IiwiQ1VSUkVOVF9VU0VSX1FVRVJZIiwiQ2FydFN0eWxlcyIsInByb3BzIiwib3BlbiIsIkNsb3NlQnV0dG9uIiwiRHJvcERvd24iLCJEcm9wRG93bkl0ZW0iLCJoaWdobGlnaHRlZCIsInRoZW1lIiwibGlnaHRncmV5IiwiZ2xvdyIsImtleWZyYW1lcyIsIlNlYXJjaFN0eWxlcyIsIk5hdlN0eWxlcyIsIlNpY2tCdXR0b24iLCJTdXByZW1lIiwiTG9jYWxTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTG9jYWxTdGF0ZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDYXJ0U3RhdGVQcm92aWRlciIsInNldENhcnRPcGVuIiwidG9nZ2xlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiLCJwYWdpbmF0aW9uRmllbGQiLCJrZXlBcmdzIiwicmVhZCIsImV4aXN0aW5nIiwiYXJncyIsInNraXAiLCJmaXJzdCIsInJlYWRRdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZSIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJzbGljZSIsImZpbHRlciIsIngiLCJtZXJnZSIsImluY29taW5nIiwibWVyZ2VkIiwiaSIsImNyZWF0ZUNsaWVudCIsImhlYWRlcnMiLCJpbml0aWFsU3RhdGUiLCJBcG9sbG9DbGllbnQiLCJsaW5rIiwiQXBvbGxvTGluayIsIm9uRXJyb3IiLCJncmFwaFFMRXJyb3JzIiwibmV0d29ya0Vycm9yIiwiZm9yRWFjaCIsImxvY2F0aW9ucyIsInBhdGgiLCJjcmVhdGVVcGxvYWRMaW5rIiwidXJpIiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsIkluTWVtb3J5Q2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsImFsbFByb2R1Y3RzIiwicmVzdG9yZSIsIndpdGhBcG9sbG8iLCJnZXREYXRhRnJvbVRyZWUiLCJSb3V0ZXIiLCJOUHJvZ3Jlc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImFwb2xsbyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxzRUFBSDtBQUFBO0FBQUE7QUFBQSx1SkFBcEI7O0FBY0EsU0FBU0MsUUFBVCxDQUFrQjtBQUFFQztBQUFGLENBQWxCLEVBQWdDO0FBQzlCLFFBQU07QUFBRUM7QUFBRixNQUFjRCxRQUFwQjtBQUNBLHNCQUNFLDhEQUFDLGNBQUQ7QUFBQSw0QkFDRTtBQUNFLFdBQUssRUFBQyxLQURSO0FBRUUsU0FBRyxFQUFFQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsS0FBZCxDQUFvQkMsb0JBRjNCO0FBR0UsU0FBRyxFQUFFSCxPQUFPLENBQUNJO0FBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUU7QUFBQSw4QkFDRTtBQUFBLGtCQUFLSixPQUFPLENBQUNJO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSxtQkFDR0MseURBQVcsQ0FBQ0wsT0FBTyxDQUFDTSxLQUFSLEdB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O0FBQUE7QUFBQSxVQURGO0FBU0QsQyxDQUVEOzs7QUFDQUYsS0FBSyxDQUFDSSxlQUFOLEdBQXdCLGdCQUFnQjtBQUFFSCxXQUFGO0FBQWFJO0FBQWIsQ0FBaEIsRUFBb0M7QUFDMUQsTUFBSUgsU0FBUyxHQUFHLEVBQWhCOztBQUNBLE1BQUlELFNBQVMsQ0FBQ0csZUFBZCxFQUErQjtBQUM3QkYsYUFBUyxHQUFHLE1BQU1ELFNBQVMsQ0FBQ0csZUFBVixDQUEwQkMsR0FBMUIsQ0FBbEI7QUFDRCxHQUp5RCxDQUsxRDs7O0FBQ0FILFdBQVMsQ0FBQzdFLEtBQVYsR0FBa0JnRixHQUFHLENBQUNoRixLQUF0QjtBQUNBLFNBQU87QUFBRTZFO0FBQUYsR0FBUDtBQUNELENBUkQ7O0FBVUEsK0RBQWVJLHNEQUFRLENBQUNOLEtBQUQsQ0FBdkIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IGNhbGNUb3RhbFByaWNlIGZyb20gJy4uL2xpYi9jYWxjVG90YWxQcmljZSc7XHJcbmltcG9ydCB7IHVzZUNhcnQgfSBmcm9tICcuLi9saWIvY2FydFN0YXRlJztcclxuaW1wb3J0IGZvcm1hdE1vbmV5IGZyb20gJy4uL2xpYi9mb3JtYXRNb25leSc7XHJcbmltcG9ydCB7IENoZWNrb3V0IH0gZnJvbSAnLi9DaGVja291dCc7XHJcbmltcG9ydCBSZW1vdmVGcm9tQ2FydCBmcm9tICcuL1JlbW92ZUZyb21DYXJ0JztcclxuaW1wb3J0IENhcnRTdHlsZXMgZnJvbSAnLi9zdHlsZXMvQ2FydFN0eWxlcyc7XHJcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL3N0eWxlcy9DbG9zZUJ1dHRvbic7XHJcbmltcG9ydCBTdXByZW1lIGZyb20gJy4vc3R5bGVzL1N1cHJlbWUnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmNvbnN0IENhcnRJdGVtU3R5bGVzID0gc3R5bGVkLmxpYFxyXG4gIHBhZGRpbmc6IDFyZW0gMDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmV5KTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0bztcclxuICBpbWcge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBoMyxcclxuICBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbmA7XHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGNhcnRJdGVtIH0pIHtcclxuICBjb25zdCB7IHByb2R1Y3QgfSA9IGNhcnRJdGVtO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydEl0ZW1TdHlsZXM+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgc3JjPXtwcm9kdWN0LnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgIGFsdD17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICB7Zm9ybWF0TW9uZXkocHJvZHVjdC5wcmljZSAqIGNhcnRJdGVtLnF1YW50aXR5KX0gPVxyXG4gICAgICAgICAgPGVtPlxyXG4gICAgICAgICAgICB7Y2FydEl0ZW0ucXVhbnRpdHl9ICZ0aW1lczsge2Zvcm1hdE1vbmV5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgPC9lbT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8UmVtb3ZlRnJvbUNhcnQgaWQ9e2NhcnRJdGVtLmlkfSAvPlxyXG4gICAgPC9DYXJ0SXRlbVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0KCkge1xyXG4gIGNvbnN0IG1lID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgY2FydE9wZW4sIGNsb3NlQ2FydCB9ID0gdXNlQ2FydCgpO1xyXG4gIGlmICghbWUpIHJldHVybiBudWxsO1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0eWxlcyBvcGVuPXtjYXJ0T3Blbn0+XHJcbiAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPFN1cHJlbWU+e21lLm5hbWV9J3MgQ2FydDwvU3VwcmVtZT5cclxuICAgICAgICA8Q2xvc2VCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlQ2FydH0+XHJcbiAgICAgICAgICAmdGltZXM7XHJcbiAgICAgICAgPC9DbG9zZUJ1dHRvbj5cclxuICAgICAgPC9oZWFkZXI+XHJcblxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge21lLmNhcnQubWFwKChjYXJ0SXRlbSkgPT4gKFxyXG4gICAgICAgICAgPENhcnRJdGVtIGtleT17Y2FydEl0ZW0uaWR9IGNhcnRJdGVtPXtjYXJ0SXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPGZvb3Rlcj5cclxuICAgICAgICA8cD57Zm9ybWF0TW9uZXkoY2FsY1RvdGFsUHJpY2UobWUuY2FydCkpfTwvcD5cclxuICAgICAgICA8Q2hlY2tvdXQgLz5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L0NhcnRTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENTU1RyYW5zaXRpb24sIFRyYW5zaXRpb25Hcm91cCB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5cclxuY29uc3QgRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMCAwLjUgcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gIG1pbi13aWR0aDogM3JlbTtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICd0bnVtJztcclxuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xyXG5gO1xyXG5cclxuY29uc3QgQW5pbWF0aW9uU3R5bGVzID0gc3R5bGVkLnNwYW5gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIC5jb3VudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAvKiBuZXcgZWxlbWVudCBlbnRlcnMgKi9cclxuICAuY291bnQtZW50ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KSByb3RhdGVYKDAuNXR1cm4pO1xyXG4gIH1cclxuICAuY291bnQtZW50ZXItYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcclxuICB9XHJcbiAgLyogb2xkIGVsZW1lbnQgbGVhdmVzICovXHJcbiAgLmNvdW50LWV4aXQge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKDApO1xyXG4gIH1cclxuICAuY291bnQtZXhpdC1hY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg0KSByb3RhdGVYKDAuNXR1cm4pO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRDb3VudCh7IGNvdW50IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFuaW1hdGlvblN0eWxlcz5cclxuICAgICAgPFRyYW5zaXRpb25Hcm91cD5cclxuICAgICAgICA8Q1NTVHJhbnNpdGlvblxyXG4gICAgICAgICAgdW5tb3VudE9uRXhpdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY291bnRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lcz1cImNvdW50XCJcclxuICAgICAgICAgIGtleT17Y291bnR9XHJcbiAgICAgICAgICB0aW1lb3V0PXt7IGVudGVyOiA0MDAsIGV4aXQ6IDQwMCB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxEb3Q+e2NvdW50fTwvRG90PlxyXG4gICAgICAgIDwvQ1NTVHJhbnNpdGlvbj5cclxuICAgICAgPC9UcmFuc2l0aW9uR3JvdXA+XHJcbiAgICA8L0FuaW1hdGlvblN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBsb2FkU3RyaXBlIH0gZnJvbSAnQHN0cmlwZS9zdHJpcGUtanMnO1xyXG5pbXBvcnQge1xyXG4gIENhcmRFbGVtZW50LFxyXG4gIEVsZW1lbnRzLFxyXG4gIHVzZUVsZW1lbnRzLFxyXG4gIHVzZVN0cmlwZSxcclxufSBmcm9tICdAc3RyaXBlL3JlYWN0LXN0cmlwZS1qcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgblByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7XHJcbmltcG9ydCBTaWNrQnV0dG9uIGZyb20gJy4vc3R5bGVzL1NpY2tCdXR0b24nO1xyXG5cclxuY29uc3QgQ2hlY2tvdXRGb3JtU3R5bGVzID0gc3R5bGVkLmZvcm1gXHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWdhcDogMXJlbTtcclxuYDtcclxuXHJcbmNvbnN0IHN0cmlwZUxpYiA9IGxvYWRTdHJpcGUocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSSVBFX0tFWSk7XHJcblxyXG5mdW5jdGlvbiBDaGVja291dEZvcm0oKSB7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBzdHJpcGUgPSB1c2VTdHJpcGUoKTtcclxuICBjb25zdCBlbGVtZW50cyA9IHVzZUVsZW1lbnRzKCk7XHJcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIC8vIDEuIFN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCB0dXJuIHRoZSBsb2FkZXIgb25lXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG4gICAgY29uc29sZS5sb2coJ1dlIGdvdHRhIGRvIHNvbWUgd29yay4uJyk7XHJcbiAgICAvLyAyLiBTdGFydCB0aGUgcGFnZSB0cmFuc2l0aW9uXHJcbiAgICBuUHJvZ3Jlc3Muc3RhcnQoKTtcclxuICAgIC8vIDMuIENyZWF0ZSB0aGUgcGF5bWVudCBtZXRob2QgdmlhIHN0cmlwZSAoVG9rZW4gY29tZXMgYmFjayBoZXJlIGlmIHN1Y2Nlc3NmdWwpXHJcbiAgICBjb25zdCB7IGVycm9yLCBwYXltZW50TWV0aG9kIH0gPSBhd2FpdCBzdHJpcGUuY3JlYXRlUGF5bWVudE1ldGhvZCh7XHJcbiAgICAgIHR5cGU6ICdjYXJkJyxcclxuICAgICAgY2FyZDogZWxlbWVudHMuZ2V0RWxlbWVudChDYXJkRWxlbWVudCksXHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKHBheW1lbnRNZXRob2QpO1xyXG4gICAgLy8gNC4gSGFuZGxlIGFueSBlcnJvcnMgZnJvbSBzdHJpcGVcclxuICAgIGlmIChlcnJvcikge1xyXG4gICAgICBzZXRFcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgICAvLyA1LiBTZW5kIHRoZSB0b2tlbiBmcm9tIHN0ZXAgMyB0byBvdXIga2V5c3RvbmUgc2VydmVyLCB2aWEgYSBjdXN0b20gbXV0YXRpb24hXHJcbiAgICAvLyA2LiBDaGFuZ2UgdGhlIHBhZ2UgdG8gdmlldyB0aGUgb3JkZXJcclxuICAgIC8vIDcuIENsb3NlIHRoZSBjYXJ0XHJcblxyXG4gICAgLy8gOC4gdHVybiB0aGUgbG9hZGVyIG9mZlxyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICBuUHJvZ3Jlc3MuZG9uZSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGVja291dEZvcm1TdHlsZXMgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIHtlcnJvciAmJiA8cCBzdHlsZT17eyBmb250U2l6ZTogMTIgfX0+e2Vycm9yLm1lc3NhZ2V9PC9wPn1cclxuICAgICAgPENhcmRFbGVtZW50IC8+XHJcbiAgICAgIDxTaWNrQnV0dG9uPkNoZWNrIE91dCBOb3c8L1NpY2tCdXR0b24+XHJcbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDaGVja291dCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEVsZW1lbnRzIHN0cmlwZT17c3RyaXBlTGlifT5cclxuICAgICAgPENoZWNrb3V0Rm9ybSAvPlxyXG4gICAgPC9FbGVtZW50cz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgeyBDaGVja291dCB9O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IENhcnQgZnJvbSAnLi9DYXJ0JztcclxuaW1wb3J0IE5hdiBmcm9tICcuL05hdic7XHJcbmltcG9ydCBTZWFyY2ggZnJvbSAnLi9TZWFyY2gnO1xyXG5cclxuY29uc3QgTG9nbyA9IHN0eWxlZC5oMWBcclxuICBmb250LXNpemU6IDRyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIHRyYW5zZm9ybTogc2tldygtN2RlZyk7XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSGVhZGVyU3R5bGVzID0gc3R5bGVkLmhlYWRlcmBcclxuICAuYmFyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgdmFyKC0tYmxhY2ssIGJsYWNrKTsgLy8gdXNlIHZhcmlhYmxlLCBmYWxsYmFjayB0byBibGFja1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB9XHJcbiAgLnN1Yi1iYXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIGF1dG87XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYmxhY2ssIGJsYWNrKTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkZXJTdHlsZXM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XHJcbiAgICAgICAgPExvZ28+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlNpY2sgRml0czwvTGluaz5cclxuICAgICAgICA8L0xvZ28+XHJcbiAgICAgICAgPE5hdiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItYmFyXCI+XHJcbiAgICAgICAgPFNlYXJjaCAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPENhcnQgLz5cclxuICAgIDwvSGVhZGVyU3R5bGVzPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlQ2FydCB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5pbXBvcnQgQ2FydENvdW50IGZyb20gJy4vQ2FydENvdW50JztcclxuaW1wb3J0IFNpZ25PdXQgZnJvbSAnLi9TaWduT3V0JztcclxuaW1wb3J0IE5hdlN0eWxlcyBmcm9tICcuL3N0eWxlcy9OYXZTdHlsZXMnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi9Vc2VyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcclxuICBjb25zdCB1c2VyID0gdXNlVXNlcigpO1xyXG4gIGNvbnN0IHsgb3BlbkNhcnQgfSA9IHVzZUNhcnQoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPE5hdlN0eWxlcz5cclxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0c1wiPlByb2R1Y3RzPC9MaW5rPlxyXG4gICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VsbFwiPlNlbGw8L0xpbms+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL29yZGVyc1wiPk9yZGVyczwvTGluaz5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjb3VudFwiPkFjY291bnQ8L0xpbms+XHJcbiAgICAgICAgICA8U2lnbk91dCAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b3BlbkNhcnR9PlxyXG4gICAgICAgICAgICBNeSBDYXJ0XHJcbiAgICAgICAgICAgIDxDYXJ0Q291bnRcclxuICAgICAgICAgICAgICBjb3VudD17dXNlci5jYXJ0LnJlZHVjZShcclxuICAgICAgICAgICAgICAgICh0YWxseSwgY2FydEl0ZW0pID0+IHRhbGx5ICsgY2FydEl0ZW0ucXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICAwXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3NpZ25pblwiPlNpZ24gSW48L0xpbms+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L05hdlN0eWxlcz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBzdHlsZWQsIHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGVzID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbiAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogXCJyYWRuaWthX25leHRcIjtcclxuICAgIHNyYzogdXJsKFwiL3N0YXRpYy9yYWRuaWthbmV4dC1tZWRpdW0td2ViZm9udC53b2ZmMlwiKVxyXG4gICAgZm9ybWF0KCd3b2ZmMicpO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiAgaHRtbCB7XHJcbiAgICAtLXJlZDogI2ZmMDAwMDtcclxuICAgIC0tYmxhY2s6ICMzOTM5Mzk7XHJcbiAgICAtLWdyZXk6IzNhM2EzYTtcclxuICAgIC0tZ3JheTogdmFyKC0tZ3JleSk7IC8vIGJhY2t1cCBmb3IgY2FuYWRpYW4gc3BlbGxpbmdcclxuICAgIC0tbGlnaHRHcmV5OiAjZTFlMWUxO1xyXG4gICAgLS1saWdodEdyYXk6IHZhcigtLWxpZ2h0R3JleSk7XHJcbiAgICAtLW9mZldoaXRlOiAjZWRlZGVkO1xyXG4gICAgLS1tYXhXaWR0aDogMTAwMHB4O1xyXG4gICAgLS1iczogMCAxMnB4IDI0cHggMCByZ2JhKDAsMCwwLDAuMDkpOyAvLyBib3ggc2hhZG93XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1zaXplOiA2Mi41JTtcclxuICB9XHJcbiAgKiwgKjo6YmVmb3JlLCAqOmFmdGVye1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbiAgYm9keXtcclxuICAgIGZvbnQtZmFtaWx5OiBcInJhZG5pa2FfbmV4dFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwOyBcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgfVxyXG4gIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogdmFyKC0tLWJsYWNrKTtcclxuICB9XHJcbiAgYTpob3ZlcntcclxuICAgIHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OiBcInJhZG5pa2FfbmV4dFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgSW5uZXJTdHlsZXMgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogdmFyKC0tbWF4V2lkdGgpO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDJyZW07XHJcbmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPElubmVyU3R5bGVzPntjaGlsZHJlbn08L0lubmVyU3R5bGVzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXHJcbn07XHJcbiIsImltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBCaWdCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogMDtcclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24gUkVNT1ZFX0ZST01fQ0FSVF9NVVRBVElPTigkaWQ6IElEISkge1xyXG4gICAgZGVsZXRlQ2FydEl0ZW0oaWQ6ICRpZCkge1xyXG4gICAgICBpZFxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZShjYWNoZSwgcGF5bG9hZCkge1xyXG4gIGNhY2hlLmV2aWN0KGNhY2hlLmlkZW50aWZ5KHBheWxvYWQuZGF0YS5kZWxldGVDYXJ0SXRlbSkpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZW1vdmVGcm9tQ2FydCh7IGlkIH0pIHtcclxuICBjb25zdCBbcmVtb3ZlRnJvbUNhcnQsIHsgbG9hZGluZyB9XSA9IHVzZU11dGF0aW9uKFJFTU9WRV9GUk9NX0NBUlRfTVVUQVRJT04sIHtcclxuICAgIHZhcmlhYmxlczogeyBpZCB9LFxyXG4gICAgdXBkYXRlLFxyXG4gICAgLy8gISBOb3Qgd29ya2luZyBhcyBpbnRlbmRlZFxyXG4gICAgLy8gb3B0aW1pc3RpY1Jlc3BvbnNlOiB7XHJcbiAgICAvLyAgIGRlbGV0ZUNhcnRJdGVtOiB7XHJcbiAgICAvLyAgICAgX190eXBlbmFtZTogJ0NhcnRJdGVtJyxcclxuICAgIC8vICAgICBpZCxcclxuICAgIC8vICAgfSxcclxuICAgIC8vIH0sXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCaWdCdXR0b25cclxuICAgICAgb25DbGljaz17cmVtb3ZlRnJvbUNhcnR9XHJcbiAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgdGl0bGU9XCJyZW1vdmUgdGhpcyBpdGVtIGZyb20gY2FydFwiXHJcbiAgICA+XHJcbiAgICAgICZ0aW1lcztcclxuICAgIDwvQmlnQnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvanN4LXByb3BzLW5vLXNwcmVhZGluZyAqL1xyXG5pbXBvcnQgeyB1c2VMYXp5UXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IHJlc2V0SWRDb3VudGVyLCB1c2VDb21ib2JveCB9IGZyb20gJ2Rvd25zaGlmdCc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfSBmcm9tICcuL3N0eWxlcy9Ecm9wRG93bic7XHJcblxyXG5jb25zdCBTRUFSQ0hfUFJPRFVDVFNfUVVFUlkgPSBncWxgXHJcbiAgcXVlcnkgU0VBUkNIX1BST0RVQ1RTX1FVRVJZKCRzZWFyY2hUZXJtOiBTdHJpbmchKSB7XHJcbiAgICBzZWFyY2hUZXJtczogYWxsUHJvZHVjdHMoXHJcbiAgICAgIHdoZXJlOiB7XHJcbiAgICAgICAgT1I6IFtcclxuICAgICAgICAgIHsgbmFtZV9jb250YWluc19pOiAkc2VhcmNoVGVybSB9XHJcbiAgICAgICAgICB7IGRlc2NyaXB0aW9uX2NvbnRhaW5zX2k6ICRzZWFyY2hUZXJtIH1cclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgICkge1xyXG4gICAgICBpZFxyXG4gICAgICBuYW1lXHJcbiAgICAgIHBob3RvIHtcclxuICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICBwdWJsaWNVcmxUcmFuc2Zvcm1lZFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaCgpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbZmluZEl0ZW1zLCB7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH1dID0gdXNlTGF6eVF1ZXJ5KFxyXG4gICAgU0VBUkNIX1BST0RVQ1RTX1FVRVJZLFxyXG4gICAge1xyXG4gICAgICBmZXRjaFBvbGljeTogJ25vLWNhY2hlJyxcclxuICAgIH1cclxuICApO1xyXG4gIGNvbnN0IGl0ZW1zID0gZGF0YT8uc2VhcmNoVGVybXMgfHwgW107XHJcbiAgY29uc3QgZmluZEl0ZW1zQnV0Q2hpbGwgPSB1c2VNZW1vKFxyXG4gICAgKCkgPT4gZGVib3VuY2UoZmluZEl0ZW1zLCAzNTApLFxyXG4gICAgW2ZpbmRJdGVtc11cclxuICApO1xyXG4gIHJlc2V0SWRDb3VudGVyKCk7XHJcbiAgY29uc3Qge1xyXG4gICAgaXNPcGVuLFxyXG4gICAgaW5wdXRWYWx1ZSxcclxuICAgIGdldE1lbnVQcm9wcyxcclxuICAgIGdldElucHV0UHJvcHMsXHJcbiAgICBnZXRDb21ib2JveFByb3BzLFxyXG4gICAgZ2V0SXRlbVByb3BzLFxyXG4gICAgaGlnaGxpZ2h0ZWRJbmRleCxcclxuICB9ID0gdXNlQ29tYm9ib3goe1xyXG4gICAgaXRlbXMsXHJcbiAgICBvbklucHV0VmFsdWVDaGFuZ2UoKSB7XHJcbiAgICAgIGZpbmRJdGVtc0J1dENoaWxsKHtcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHNlYXJjaFRlcm06IGlucHV0VmFsdWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RlZEl0ZW1DaGFuZ2UoeyBzZWxlY3RlZEl0ZW0gfSkge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6IGAvcHJvZHVjdC8ke3NlbGVjdGVkSXRlbS5pZH1gLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpdGVtVG9TdHJpbmc6IChpdGVtKSA9PiBpdGVtPy5uYW1lIHx8ICcnLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8U2VhcmNoU3R5bGVzPlxyXG4gICAgICA8ZGl2IHsuLi5nZXRDb21ib2JveFByb3BzKCl9PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgey4uLmdldElucHV0UHJvcHMoe1xyXG4gICAgICAgICAgICB0eXBlOiAnc2VhcmNoJyxcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggZm9yIGFuIEl0ZW0nLFxyXG4gICAgICAgICAgICBpZDogJ3NlYXJjaCcsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogbG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnLFxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEcm9wRG93biB7Li4uZ2V0TWVudVByb3BzKCl9PlxyXG4gICAgICAgIHtpc09wZW4gJiZcclxuICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPERyb3BEb3duSXRlbVxyXG4gICAgICAgICAgICAgIHsuLi5nZXRJdGVtUHJvcHMoeyBpdGVtLCBpbmRleCB9KX1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0ZWQ9e2luZGV4ID09PSBoaWdobGlnaHRlZEluZGV4fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtpdGVtLnBob3RvLmltYWdlLnB1YmxpY1VybFRyYW5zZm9ybWVkfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvRHJvcERvd25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAge2lzT3BlbiAmJiAhaXRlbXMubGVuZ3RoICYmICFsb2FkaW5nICYmIChcclxuICAgICAgICAgIDxEcm9wRG93bkl0ZW0+U29ycnksIE5vIGl0ZW1zIGZvdW5kIGZvciB7aW5wdXRWYWx1ZX08L0Ryb3BEb3duSXRlbT5cclxuICAgICAgICApfVxyXG4gICAgICA8L0Ryb3BEb3duPlxyXG4gICAgPC9TZWFyY2hTdHlsZXM+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5cclxuY29uc3QgU0lHTl9PVVRfTVVUQVRJT04gPSBncWxgXHJcbiAgbXV0YXRpb24ge1xyXG4gICAgZW5kU2Vzc2lvblxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25PdXQoKSB7XHJcbiAgY29uc3QgW3NpZ25vdXRdID0gdXNlTXV0YXRpb24oU0lHTl9PVVRfTVVUQVRJT04sIHtcclxuICAgIHJlZmV0Y2hRdWVyaWVzOiBbeyBxdWVyeTogQ1VSUkVOVF9VU0VSX1FVRVJZIH1dLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaWdub3V0fT5cclxuICAgICAgU2lnbiBPdXRcclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5jb25zdCBDYXJ0U3R5bGVzID0gc3R5bGVkLmRpdmBcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogNDAlO1xyXG4gIG1pbi13aWR0aDogNTAwcHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XHJcbiAgLyogZW5hYmxlcyBvcGVuL2Nsb3NlIG9mIGNhcnQgKi9cclxuICAkeyhwcm9wcykgPT4gcHJvcHMub3BlbiAmJiBgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO2B9O1xyXG4gIGhlYWRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgdmFyKC0tYmxhY2spO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICBmb290ZXIge1xyXG4gICAgYm9yZGVyLXRvcDogMTBweCBkb3VibGUgdmFyKC0tYmxhY2spO1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFN0eWxlcztcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IENsb3NlQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBib3JkZXI6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMjtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IENsb3NlQnV0dG9uO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmNvbnN0IERyb3BEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRHcmF5KTtcbmA7XG5cbmNvbnN0IERyb3BEb3duSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICBiYWNrZ3JvdW5kOiAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gJyNmN2Y3ZjcnIDogJ3doaXRlJyl9O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJHsocHJvcHMpID0+IChwcm9wcy5oaWdobGlnaHRlZCA/ICdwYWRkaW5nLWxlZnQ6IDJyZW07JyA6IG51bGwpfTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWRcbiAgICAkeyhwcm9wcykgPT4gKHByb3BzLmhpZ2hsaWdodGVkID8gcHJvcHMudGhlbWUubGlnaHRncmV5IDogJ3doaXRlJyl9O1xuICBpbWcge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgZ2xvdyA9IGtleWZyYW1lc2BcbiAgZnJvbSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDBweCB5ZWxsb3c7XG4gIH1cblxuICB0byB7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMXB4IHllbGxvdztcbiAgfVxuYDtcblxuY29uc3QgU2VhcmNoU3R5bGVzID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgICYubG9hZGluZyB7XG4gICAgICBhbmltYXRpb246ICR7Z2xvd30gMC41cyBlYXNlLWluLW91dCBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBEcm9wRG93biwgRHJvcERvd25JdGVtLCBTZWFyY2hTdHlsZXMgfTtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBOYXZTdHlsZXMgPSBzdHlsZWQudWxgXG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgYSxcbiAgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxcmVtIDNyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCkge1xuICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgIH1cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodEdyYXkpO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogc2tldygtMjBkZWcpO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgIH1cbiAgICAmOmFmdGVyIHtcbiAgICAgIGhlaWdodDogMnB4O1xuICAgICAgYmFja2dyb3VuZDogcmVkO1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuNHM7XG4gICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDEsIC0wLjY1LCAwLCAyLjMxKTtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuICAgICY6aG92ZXIsXG4gICAgJjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodEdyYXkpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBOYXZTdHlsZXM7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgU2lja0J1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMC44cmVtIDEuNXJlbTtcbiAgdHJhbnNmb3JtOiBza2V3KC0yZGVnKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgJltkaXNhYmxlZF0ge1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgU2lja0J1dHRvbjtcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5jb25zdCBTdXByZW1lID0gc3R5bGVkLmgzYFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNHB4IDVweDtcbiAgdHJhbnNmb3JtOiBza2V3KC0zZGVnKTtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDRyZW07XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBTdXByZW1lO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY1RvdGFsUHJpY2UoY2FydCkge1xyXG4gIHJldHVybiBjYXJ0LnJlZHVjZSgodGFsbHksIGNhcnRJdGVtKSA9PiB7XHJcbiAgICAvLyBwcm9kdWN0cyBjYW4gYmUgZGVsZXRlZCBidXQgc3RpbGwgYmUgaW4geW91ciBjYXJ0XHJcbiAgICBpZiAoIWNhcnRJdGVtLnByb2R1Y3QpIHJldHVybiB0YWxseTtcclxuICAgIHJldHVybiB0YWxseSArIGNhcnRJdGVtLnF1YW50aXR5ICogY2FydEl0ZW0ucHJvZHVjdC5wcmljZTtcclxuICB9LCAwKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvY2FsU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5jb25zdCBMb2NhbFN0YXRlUHJvdmlkZXIgPSBMb2NhbFN0YXRlQ29udGV4dC5Qcm92aWRlcjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTdGF0ZVByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIC8qIFRoaXMgaXMgb3VyIG93biBjdXN0b20gcHJvdmlkZXIsIHdlIHdpbGwgc3RvcmUgKHN0YXRlKSBcclxuICBhbmQgZnVuY3Rpb25hbGl0eSAodXBkYXRlcnMpIGluIGhlcmUgYW5kIGFueW9uZSBjYW4gYWNjZXNzIFxyXG4gIGl0IHZpYSB0aGUgY29uc3VtZXIgKi9cclxuXHJcbiAgY29uc3QgW2NhcnRPcGVuLCBzZXRDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbighY2FydE9wZW4pO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XHJcbiAgICBzZXRDYXJ0T3BlbihmYWxzZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIG9wZW5DYXJ0KCkge1xyXG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExvY2FsU3RhdGVQcm92aWRlclxyXG4gICAgICB2YWx1ZT17eyBjYXJ0T3Blbiwgc2V0Q2FydE9wZW4sIHRvZ2dsZUNhcnQsIGNsb3NlQ2FydCwgb3BlbkNhcnQgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Mb2NhbFN0YXRlUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gbWFrZSBhIGN1c3RvbSBob29rIGZvciBhY2Nlc2luZyB0aGUgY2FydCBsb2NhbCBzdGF0ZVxyXG5mdW5jdGlvbiB1c2VDYXJ0KCkge1xyXG4gIC8vIHdlIHVzZSBhIGNvbnN1bWVyIGhlcmUgdG8gYWNjZXNzIHRoZSBsb2NhbCBzdGF0ZVxyXG4gIGNvbnN0IGFsbCA9IHVzZUNvbnRleHQoTG9jYWxTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBhbGw7XHJcbn1cclxuXHJcbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07XHJcbiIsImltcG9ydCB7IFBBR0lOQVRJT05fUVVFUlkgfSBmcm9tICcuLi9jb21wb25lbnRzL1BhZ2luYXRpb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xyXG4gIC8vICoqIEJvaWxlcnBsYXRlIGZvciBjYWNoZSBpbnZhbGlkYXRpb25cclxuICByZXR1cm4ge1xyXG4gICAga2V5QXJnczogZmFsc2UsIC8vIHRlbGwgYXBvbGxvIHRoYXQgd2Ugd2lsbCB0YWtlIGNhcmUgb2YgZXZlcnl0aGluZ1xyXG4gICAgcmVhZChleGlzdGluZyA9IFtdLCB7IGFyZ3MsIGNhY2hlIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBjYWNoZS5yZWFkUXVlcnkoeyBxdWVyeTogUEFHSU5BVElPTl9RVUVSWSB9KTtcclxuICAgICAgY29uc3QgY291bnQgPSBkYXRhPy5fYWxsUHJvZHVjdHNNZXRhPy5jb3VudDtcclxuICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gZmlyc3QpO1xyXG4gICAgICBjb25zdCBpdGVtcyA9IGV4aXN0aW5nLnNsaWNlKHNraXAsIHNraXAgKyBmaXJzdCkuZmlsdGVyKCh4KSA9PiB4KTtcclxuXHJcbiAgICAgIGlmIChpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoICE9PSBmaXJzdCAmJiBwYWdlID09PSBwYWdlcykge1xyXG4gICAgICAgIHJldHVybiBpdGVtczsgLy8gZ3JhYiBpdGVtcyBmcm9tIGNhY2hlXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCAhPT0gZmlyc3QpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIGdyYWIgaXRlbXMgZnJvbSBuZXR3b3JrXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW1zLmxlbmd0aCkge1xyXG4gICAgICAgIHJldHVybiBpdGVtczsgLy8gZ3JhYiBpdGVtcyBmcm9tIGNhY2hlXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gZmFsbGJhY2sgdG8gbmV0d29ya1xyXG4gICAgfSxcclxuICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcclxuICAgICAgY29uc3QgeyBza2lwIH0gPSBhcmdzO1xyXG4gICAgICBjb25zdCBtZXJnZWQgPSBleGlzdGluZyA/IGV4aXN0aW5nLnNsaWNlKDApIDogW107XHJcbiAgICAgIGZvciAobGV0IGkgPSBza2lwOyBpIDwgc2tpcCArIGluY29taW5nLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgbWVyZ2VkW2ldID0gaW5jb21pbmdbaSAtIHNraXBdO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtZXJnZWQ7IC8vIGdyYWIgaXRlbXMgZnJvbSBuZXR3b3JrXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSAnQGFwb2xsby9saW5rLWVycm9yJztcclxuaW1wb3J0IHsgZ2V0RGF0YUZyb21UcmVlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyJztcclxuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50JztcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSAnbmV4dC13aXRoLWFwb2xsbyc7XHJcbmltcG9ydCB7IGVuZHBvaW50LCBwcm9kRW5kcG9pbnQgfSBmcm9tICcuLi9jb25maWcnO1xyXG5pbXBvcnQgcGFnaW5hdGlvbkZpZWxkIGZyb20gJy4vcGFnaW5hdGlvbkZpZWxkJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNsaWVudCh7IGhlYWRlcnMsIGluaXRpYWxTdGF0ZSB9KSB7XHJcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFtcclxuICAgICAgb25FcnJvcigoeyBncmFwaFFMRXJyb3JzLCBuZXR3b3JrRXJyb3IgfSkgPT4ge1xyXG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxyXG4gICAgICAgICAgZ3JhcGhRTEVycm9ycy5mb3JFYWNoKCh7IG1lc3NhZ2UsIGxvY2F0aW9ucywgcGF0aCB9KSA9PlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYFtOZXR3b3JrIGVycm9yXTogJHtuZXR3b3JrRXJyb3J9LiBCYWNrZW5kIGlzIHVucmVhY2hhYmxlLiBJcyBpdCBydW5uaW5nP2BcclxuICAgICAgICAgICk7XHJcbiAgICAgIH0pLFxyXG4gICAgICAvLyB0aGlzIHVzZXMgYXBvbGxvLWxpbmstaHR0cCB1bmRlciB0aGUgaG9vZCwgc28gYWxsIHRoZSBvcHRpb25zIGhlcmUgY29tZSBmcm9tIHRoYXQgcGFja2FnZVxyXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcclxuICAgICAgICB1cmk6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gZW5kcG9pbnQgOiBwcm9kRW5kcG9pbnQsXHJcbiAgICAgICAgZmV0Y2hPcHRpb25zOiB7XHJcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gcGFzcyB0aGUgaGVhZGVycyBhbG9uZyBmcm9tIHRoaXMgcmVxdWVzdC4gVGhpcyBlbmFibGVzIFNTUiB3aXRoIGxvZ2dlZCBpbiBzdGF0ZVxyXG4gICAgICAgIGhlYWRlcnMsXHJcbiAgICAgIH0pLFxyXG4gICAgXSksXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xyXG4gICAgICB0eXBlUG9saWNpZXM6IHtcclxuICAgICAgICBRdWVyeToge1xyXG4gICAgICAgICAgZmllbGRzOiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IFdlIHdpbGwgYWRkIHRoaXMgdG9nZXRoZXIhXHJcbiAgICAgICAgICAgIGFsbFByb2R1Y3RzOiBwYWdpbmF0aW9uRmllbGQoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhjcmVhdGVDbGllbnQsIHsgZ2V0RGF0YUZyb21UcmVlIH0pO1xyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcHJvcHMtbm8tc3ByZWFkaW5nICovXHJcbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvc3R5bGVzL25wcm9ncmVzcy5jc3MnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUGFnZSc7XHJcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9saWIvd2l0aERhdGEnO1xyXG5pbXBvcnQgeyBDYXJ0U3RhdGVQcm92aWRlciB9IGZyb20gJy4uL2xpYi9jYXJ0U3RhdGUnO1xyXG5cclxuLy8gTG9hZGVyIGFuaW1hdGlvblxyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIGFwb2xsbyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2Fwb2xsb30+XHJcbiAgICAgIDxDYXJ0U3RhdGVQcm92aWRlcj5cclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICAgIDwvQ2FydFN0YXRlUHJvdmlkZXI+XHJcbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEJvaWxlcnBsYXRlIHRvIG1ha2UgTmV4dEpTICsgQXBvbGxvIHdvcmsgdG9nZXRoZXJcclxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgQ29tcG9uZW50LCBjdHggfSkge1xyXG4gIGxldCBwYWdlUHJvcHMgPSB7fTtcclxuICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xyXG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gIH1cclxuICAvLyBnaXZlcyB1cyBhY2Nlc3MgdG8gcXVlcnkgdmFyaWFibGVzIGF0IGEgcGFnZSBsZXZlbCAoaS5lLiAvcHJvZHVjdHMpXHJcbiAgcGFnZVByb3BzLnF1ZXJ5ID0gY3R4LnF1ZXJ5O1xyXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEoTXlBcHApO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFwb2xsby9jbGllbnQvcmVhY3Qvc3NyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2xpbmstZXJyb3JcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvcmVhY3Qtc3RyaXBlLWpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc3RyaXBlL3N0cmlwZS1qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvd25zaGlmdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC13aXRoLWFwb2xsb1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==