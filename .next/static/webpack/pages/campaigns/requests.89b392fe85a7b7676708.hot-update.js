webpackHotUpdate_N_E("pages/campaigns/requests",{

/***/ "./components/RequestsRow.js":
/*!***********************************!*\
  !*** ./components/RequestsRow.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ethereum/web3 */ "./ethereum/web3.js");






var _jsxFileName = "C:\\margrop\\Solidity\\crowdfund\\components\\RequestsRow.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var RequestRow = /*#__PURE__*/function (_Component) {
  Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(RequestRow, _Component);

  var _super = _createSuper(RequestRow);

  function RequestRow() {
    Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, RequestRow);

    return _super.apply(this, arguments);
  }

  Object(C_margrop_Solidity_crowdfund_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(RequestRow, [{
    key: "render",
    value: function render() {
      var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Row,
          Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"].Cell;
      var _this$props = this.props,
          id = _this$props.id,
          request = _this$props.request,
          approversCount = _this$props.approversCount;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Row, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: id
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_8__["default"].utils.fromWei(request.value, 'ether')
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: request.recipient
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cell, {
          children: [request.approvalCount, "/", approversCount]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Cel, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(semantic_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
            basic: true,
            color: "",
            children: "Approve"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, this);
    }
  }]);

  return RequestRow;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (RequestRow);

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0c1Jvdy5qcyJdLCJuYW1lcyI6WyJSZXF1ZXN0Um93IiwiUm93IiwiVGFibGUiLCJDZWxsIiwicHJvcHMiLCJpZCIsInJlcXVlc3QiLCJhcHByb3ZlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwid2ViMyIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50IiwiYXBwcm92YWxDb3VudCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsVTs7Ozs7Ozs7Ozs7Ozs2QkFDTTtBQUFBLFVBQ0dDLEdBREgsR0FDZUMsdURBRGYsQ0FDR0QsR0FESDtBQUFBLFVBQ1FFLElBRFIsR0FDZUQsdURBRGYsQ0FDUUMsSUFEUjtBQUFBLHdCQUVpQyxLQUFLQyxLQUZ0QztBQUFBLFVBRUdDLEVBRkgsZUFFR0EsRUFGSDtBQUFBLFVBRU9DLE9BRlAsZUFFT0EsT0FGUDtBQUFBLFVBRWdCQyxjQUZoQixlQUVnQkEsY0FGaEI7QUFHSiwwQkFDSSxxRUFBQyxHQUFEO0FBQUEsZ0NBQ0kscUVBQUMsSUFBRDtBQUFBLG9CQUFPRjtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSxxRUFBQyxJQUFEO0FBQUEsb0JBQU9DLE9BQU8sQ0FBQ0U7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKLGVBR0kscUVBQUMsSUFBRDtBQUFBLG9CQUFPQyxzREFBSSxDQUFDQyxLQUFMLENBQVdDLE9BQVgsQ0FBbUJMLE9BQU8sQ0FBQ00sS0FBM0IsRUFBa0MsT0FBbEM7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUkscUVBQUMsSUFBRDtBQUFBLG9CQUFPTixPQUFPLENBQUNPO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLHFFQUFDLElBQUQ7QUFBQSxxQkFBT1AsT0FBTyxDQUFDUSxhQUFmLE9BQStCUCxjQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSxxRUFBQyxHQUFEO0FBQUEsaUNBQ0kscUVBQUMsd0RBQUQ7QUFBUSxpQkFBSyxNQUFiO0FBQWMsaUJBQUssRUFBQyxFQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFZSDs7OztFQWhCb0JRLCtDOztBQWtCVmYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzLjg5YjM5MmZlODVhN2I3Njc2NzA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtUYWJsZSwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5cclxuY2xhc3MgUmVxdWVzdFJvdyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIGNvbnN0IHtSb3csIENlbGx9PSBUYWJsZTtcclxuICAgICAgICBjb25zdCB7aWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50fT0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuZGVzY3JpcHRpb259PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCAnZXRoZXInKX08L0NlbGw+XHJcbiAgICAgICAgICAgICAgICA8Q2VsbD57cmVxdWVzdC5yZWNpcGllbnR9PC9DZWxsPlxyXG4gICAgICAgICAgICAgICAgPENlbGw+e3JlcXVlc3QuYXBwcm92YWxDb3VudH0ve2FwcHJvdmVyc0NvdW50fTwvQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxDZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBiYXNpYyBjb2xvcj1cIlwiPkFwcHJvdmU8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvQ2VsPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7Il0sInNvdXJjZVJvb3QiOiIifQ==