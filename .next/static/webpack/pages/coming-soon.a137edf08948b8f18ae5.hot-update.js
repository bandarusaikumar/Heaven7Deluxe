webpackHotUpdate_N_E("pages/coming-soon",{

/***/ "./layout/header.js":
false,

/***/ "./pages/coming-soon.js":
/*!******************************!*\
  !*** ./pages/coming-soon.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_Header4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layout/Header4 */ "./layout/Header4.js");



var _jsxFileName = "D:\\react-projects\\dexignzone\\samar\\samar\\samar-2\\pages\\coming-soon.js",
    _s = $RefreshSig$();





function ComingSoon() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      days = _useState[0],
      setDays = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      hours = _useState2[0],
      setHours = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      minutes = _useState3[0],
      setMinutes = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      seconds = _useState4[0],
      setSeconds = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showSemicolon = _useState5[0],
      setShowSemicolon = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setInterval(function () {
      var now = moment__WEBPACK_IMPORTED_MODULE_2___default()();
      var then = moment__WEBPACK_IMPORTED_MODULE_2___default()('2021-10-27 12:12:12', 'YYYY-MM-DD hh:mm:ss');
      var countdown = moment__WEBPACK_IMPORTED_MODULE_2___default()(then - now);
      setDays(countdown.format('D'));
      setHours(countdown.format('HH'));
      setMinutes(countdown.format('mm'));
      setSeconds(countdown.format('ss'));
    }, 1000);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layout_Header4__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "page-content bg-white",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "content-block",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "section-full bg-white coming-soon overlay-black-dark",
          style: {
            "backgroundImage": "url(images/background/bg2.jpg)",
            "backgroundSize": "cover"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "text-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "cs-logo",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "logo",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "images/logo-white.png",
                    alt: ""
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 30
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 8
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "cs-title",
                children: "Coming Soon"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "countdown text-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "date",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "time days",
                    children: days
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 39,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Days"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 40,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "date",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "time hours",
                    children: hours
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Hours"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "date",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "time mins",
                    children: minutes
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Minutess"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "date",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    className: "time secs",
                    children: seconds
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 30
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                    children: "Second"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 49,
                    columnNumber: 9
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 48,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 7
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                className: "countdown-social",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://www.facebook.com/",
                    className: "fa fa-facebook"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 53,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://ads.twitter.com/login",
                    className: "fa fa-twitter"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 54,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 54,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "https://in.linkedin.com/",
                    className: "fa fa-linkedin"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 55,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 55,
                  columnNumber: 8
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "mr-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    href: "#",
                    className: "fa fa-google-plus"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 56,
                    columnNumber: 29
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 56,
                  columnNumber: 8
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 7
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 6
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 3
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(ComingSoon, "cK3je+CYBNRD3ned5GUWkTkcz/g=");

_c = ComingSoon;
/* harmony default export */ __webpack_exports__["default"] = (ComingSoon);

var _c;

$RefreshReg$(_c, "ComingSoon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29taW5nLXNvb24uanMiXSwibmFtZXMiOlsiQ29taW5nU29vbiIsInVzZVN0YXRlIiwiZGF5cyIsInNldERheXMiLCJob3VycyIsInNldEhvdXJzIiwibWludXRlcyIsInNldE1pbnV0ZXMiLCJzZWNvbmRzIiwic2V0U2Vjb25kcyIsInNob3dTZW1pY29sb24iLCJzZXRTaG93U2VtaWNvbG9uIiwidXNlRWZmZWN0Iiwic2V0SW50ZXJ2YWwiLCJub3ciLCJtb21lbnQiLCJ0aGVuIiwiY291bnRkb3duIiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLENBQUQsQ0FEWDtBQUFBLE1BQ2RDLElBRGM7QUFBQSxNQUNSQyxPQURROztBQUFBLG1CQUVLRixzREFBUSxDQUFDLENBQUQsQ0FGYjtBQUFBLE1BRWRHLEtBRmM7QUFBQSxNQUVQQyxRQUZPOztBQUFBLG1CQUdTSixzREFBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSxNQUdkSyxPQUhjO0FBQUEsTUFHTEMsVUFISzs7QUFBQSxtQkFJU04sc0RBQVEsQ0FBQyxDQUFELENBSmpCO0FBQUEsTUFJZE8sT0FKYztBQUFBLE1BSUxDLFVBSks7O0FBQUEsbUJBS3FCUixzREFBUSxDQUFDLEtBQUQsQ0FMN0I7QUFBQSxNQUtkUyxhQUxjO0FBQUEsTUFLQ0MsZ0JBTEQ7O0FBT3JCQyx5REFBUyxDQUFDLFlBQU07QUFDZkMsZUFBVyxDQUFDLFlBQU07QUFDakIsVUFBTUMsR0FBRyxHQUFHQyw2Q0FBTSxFQUFsQjtBQUNBLFVBQU1DLElBQUksR0FBR0QsNkNBQU0sQ0FBQyxxQkFBRCxFQUF3QixxQkFBeEIsQ0FBbkI7QUFDQSxVQUFNRSxTQUFTLEdBQUdGLDZDQUFNLENBQUNDLElBQUksR0FBR0YsR0FBUixDQUF4QjtBQUNB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QywrQkFBUjtBQUF3Qyw2QkFBUyxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFGRCxlQUdDO0FBQUksMkJBQVMsRUFBQyxNQUFkO0FBQUEseUNBQXFCO0FBQUcsd0JBQUksRUFBQywwQkFBUjtBQUFtQyw2QkFBUyxFQUFDO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFIRCxlQUlDO0FBQUksMkJBQVMsRUFBQyxNQUFkO0FBQUEseUNBQXFCO0FBQUcsd0JBQUksRUFBQyxHQUFSO0FBQVksNkJBQVMsRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQW5CRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQSxrQkFERjtBQTRDRDs7R0EvRFFSLFU7O0tBQUFBLFU7QUFpRU1BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbWluZy1zb29uLmExMzdlZGYwODk0OGI4ZjE4YWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vbGF5b3V0L0hlYWRlcjQnO1xyXG5mdW5jdGlvbiBDb21pbmdTb29uKCkge1xyXG5cdGNvbnN0IFtkYXlzLCBzZXREYXlzXSA9IHVzZVN0YXRlKDApO1xyXG5cdGNvbnN0IFtob3Vycywgc2V0SG91cnNdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW21pbnV0ZXMsIHNldE1pbnV0ZXNdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW3NlY29uZHMsIHNldFNlY29uZHNdID0gdXNlU3RhdGUoMCk7XHJcblx0Y29uc3QgW3Nob3dTZW1pY29sb24sIHNldFNob3dTZW1pY29sb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHR1c2VFZmZlY3QoKCkgPT4ge1xyXG5cdFx0c2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBub3cgPSBtb21lbnQoKTtcclxuXHRcdFx0Y29uc3QgdGhlbiA9IG1vbWVudCgnMjAyMS0xMC0yNyAxMjoxMjoxMicsICdZWVlZLU1NLUREIGhoOm1tOnNzJyk7XHJcblx0XHRcdGNvbnN0IGNvdW50ZG93biA9IG1vbWVudCh0aGVuIC0gbm93KTtcclxuXHRcdFx0c2V0RGF5cyhjb3VudGRvd24uZm9ybWF0KCdEJykpO1xyXG5cdFx0XHRzZXRIb3Vycyhjb3VudGRvd24uZm9ybWF0KCdISCcpKTtcclxuXHRcdFx0c2V0TWludXRlcyhjb3VudGRvd24uZm9ybWF0KCdtbScpKTtcclxuXHRcdFx0c2V0U2Vjb25kcyhjb3VudGRvd24uZm9ybWF0KCdzcycpKTtcclxuXHRcdH0sIDEwMDApO1xyXG5cdH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcblx0XHQ8SGVhZGVyIC8+XHJcblx0XHRcdFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtY29udGVudCBiZy13aGl0ZVwiPlxyXG4gICAgICAgIHsvKiA8IS0tIGlubmVyIHBhZ2UgYmFubmVyIEVORCAtLT4gKi99XHJcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtYmxvY2tcIj5cclxuICAgICAgICAgICAgey8qIDwhLS0gQWJvdXQgVXMgLS0+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tZnVsbCBiZy13aGl0ZSBjb21pbmctc29vbiBvdmVybGF5LWJsYWNrLWRhcmtcIiBzdHlsZT17e1wiYmFja2dyb3VuZEltYWdlXCI6XCJ1cmwoaW1hZ2VzL2JhY2tncm91bmQvYmcyLmpwZylcIixcImJhY2tncm91bmRTaXplXCI6XCJjb3ZlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNzLWxvZ29cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj48aW1nIHNyYz1cImltYWdlcy9sb2dvLXdoaXRlLnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3MtdGl0bGVcIj5Db21pbmcgU29vbjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvdW50ZG93biB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGF0ZVwiPjxzcGFuIGNsYXNzTmFtZT1cInRpbWUgZGF5c1wiPntkYXlzfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPkRheXM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+PHNwYW4gY2xhc3NOYW1lPVwidGltZSBob3Vyc1wiPntob3Vyc308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ib3Vyczwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj48c3BhbiBjbGFzc05hbWU9XCJ0aW1lIG1pbnNcIj57bWludXRlc308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5NaW51dGVzczwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj48c3BhbiBjbGFzc05hbWU9XCJ0aW1lIHNlY3NcIj57c2Vjb25kc308L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TZWNvbmQ8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiY291bnRkb3duLXNvY2lhbFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci0yXCI+PGEgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9cIiBjbGFzc05hbWU9XCJmYSBmYS1mYWNlYm9va1wiPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci0yXCI+PGEgaHJlZj1cImh0dHBzOi8vYWRzLnR3aXR0ZXIuY29tL2xvZ2luXCIgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlclwiPjwvYT48L2xpPlxyXG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJtci0yXCI+PGEgaHJlZj1cImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL1wiIGNsYXNzTmFtZT1cImZhIGZhLWxpbmtlZGluXCI+PC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm1yLTJcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhIGZhLWdvb2dsZS1wbHVzXCI+PC9hPjwvbGk+XHJcblx0XHRcdFx0XHRcdDwvdWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdHsvKiA8IS0tIEFib3V0IFVzIEVuZCAtLT4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblx0XHR7LyogPCEtLSBjb250YWN0IGFyZWEgRU5EIC0tPiAqL31cclxuICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21pbmdTb29uOyJdLCJzb3VyY2VSb290IjoiIn0=