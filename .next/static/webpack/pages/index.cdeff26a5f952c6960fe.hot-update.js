webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pets/PetPanel.js":
/*!*************************************!*\
  !*** ./components/pets/PetPanel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetPanel; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PetForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PetForm.js */ \"./components/pets/PetForm.js\");\n/* harmony import */ var _PetCard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PetCard.js */ \"./components/pets/PetCard.js\");\n/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ \"./node_modules/@material-ui/core/esm/Grid/index.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetPanel.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n //Gatos..\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__[\"makeStyles\"])(theme => ({\n  root: {\n    flexGrow: 1\n  },\n  paper: {\n    padding: theme.spacing(2),\n    textAlign: 'center',\n    color: theme.palette.text.secondary\n  }\n}));\nfunction PetPanel() {\n  _s();\n\n  const classes = useStyles();\n  const {\n    0: pets,\n    1: setPets\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    fetch('http://localhost:3000/api/pets').then(res => res.json()).then(setPets);\n  }, []);\n\n  const handleAddPet = pet => {\n    console.log(\"La pet\");\n    console.log(pet);\n    setPets([...pets, pet]);\n  };\n  /*\n   */\n\n\n  const petCards = pets.map((pet, i) => {\n    return __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      item: true,\n      xs: 3,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }\n    }, __jsx(_PetCard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      nombre: pet.nombre,\n      edad: pet.edad,\n      id: i,\n      peso: \"6kg\",\n      avatar: pet.avatar,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }));\n  });\n  return __jsx(\"div\", {\n    className: classes.root,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    container: true,\n    spacing: 1,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    item: true,\n    xs: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }, __jsx(_PetForm_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    onAddPet: handleAddPet,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 21\n    }\n  })), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    item: true,\n    container: true,\n    direction: \"row\",\n    justify: \"flex-start\",\n    alignItems: \"flex-start\",\n    spacing: 3,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, petCards)));\n}\n\n_s(PetPanel, \"JHbeYUxXQNaqAdaOc6DL14V/rXE=\", false, function () {\n  return [useStyles];\n});\n\n_c = PetPanel;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetPanel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldFBhbmVsLmpzPzE0OGIiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwicGFwZXIiLCJwYWRkaW5nIiwic3BhY2luZyIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJQZXRQYW5lbCIsImNsYXNzZXMiLCJwZXRzIiwic2V0UGV0cyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImhhbmRsZUFkZFBldCIsInBldCIsImNvbnNvbGUiLCJsb2ciLCJwZXRDYXJkcyIsIm1hcCIsImkiLCJub21icmUiLCJlZGFkIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBRUE7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUVDLEtBQUQsS0FBWTtBQUNyQ0MsTUFBSSxFQUFFO0FBQ0pDLFlBQVEsRUFBRTtBQUROLEdBRCtCO0FBSXJDQyxPQUFLLEVBQUU7QUFDTEMsV0FBTyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBREo7QUFFTEMsYUFBUyxFQUFFLFFBRk47QUFHTEMsU0FBSyxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBY0MsSUFBZCxDQUFtQkM7QUFIckI7QUFKOEIsQ0FBWixDQUFELENBQTVCO0FBV2UsU0FBU0MsUUFBVCxHQUFtQjtBQUFBOztBQUM5QixRQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7QUFDQSxRQUFNO0FBQUEsT0FBQ2UsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUlBQyx5REFBUyxDQUFDLE1BQUk7QUFDVkMsU0FBSyxDQUFDLGdDQUFELENBQUwsQ0FDQ0MsSUFERCxDQUNPQyxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQURmLEVBRUNGLElBRkQsQ0FFTUosT0FGTjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsUUFBTU8sWUFBWSxHQUFJQyxHQUFELElBQVE7QUFFekJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVIsV0FBTyxDQUFDLENBQUMsR0FBR0QsSUFBSixFQUFVUyxHQUFWLENBQUQsQ0FBUDtBQUVILEdBTkQ7QUFPQTs7OztBQUlBLFFBQU1HLFFBQVEsR0FBR1osSUFBSSxDQUFDYSxHQUFMLENBQVMsQ0FBQ0osR0FBRCxFQUFNSyxDQUFOLEtBQVc7QUFDakMsV0FDSSxNQUFDLDhEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsbURBQUQ7QUFDSSxZQUFNLEVBQUVMLEdBQUcsQ0FBQ00sTUFEaEI7QUFFSSxVQUFJLEVBQUVOLEdBQUcsQ0FBQ08sSUFGZDtBQUdJLFFBQUUsRUFBRUYsQ0FIUjtBQUlJLFVBQUksRUFBRSxLQUpWO0FBS0ksWUFBTSxFQUFFTCxHQUFHLENBQUNRLE1BTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixDQURKO0FBV0gsR0FaZ0IsQ0FBakI7QUFjQSxTQUNJO0FBQUssYUFBUyxFQUFFbEIsT0FBTyxDQUFDWCxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixXQUFPLEVBQUUsQ0FBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOERBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBVyxNQUFFLEVBQUUsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFTLFlBQVEsRUFBRW9CLFlBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBS0ksTUFBQyw4REFBRDtBQUNBLFFBQUksTUFESjtBQUVBLGFBQVMsTUFGVDtBQUdBLGFBQVMsRUFBQyxLQUhWO0FBSUEsV0FBTyxFQUFDLFlBSlI7QUFLQSxjQUFVLEVBQUMsWUFMWDtBQU1BLFdBQU8sRUFBRSxDQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FRS0ksUUFSTCxDQUxKLENBREosQ0FESjtBQXNCSDs7R0EzRHVCZCxRO1VBQ0piLFM7OztLQURJYSxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wZXRzL1BldFBhbmVsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUGV0Rm9ybSBmcm9tICcuL1BldEZvcm0uanMnXG5pbXBvcnQgUGV0Q2FyZCBmcm9tICcuL1BldENhcmQuanMnXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG4vL0dhdG9zLi5cblxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xuICAgIHJvb3Q6IHtcbiAgICAgIGZsZXhHcm93OiAxLFxuICAgIH0sXG4gICAgcGFwZXI6IHtcbiAgICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgfSxcbiAgfSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXRQYW5lbCgpe1xuICAgIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcbiAgICBjb25zdCBbcGV0cywgc2V0UGV0c10gPSB1c2VTdGF0ZShbXSlcblxuICAgIFxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3BldHMnKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihzZXRQZXRzKVxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgaGFuZGxlQWRkUGV0ID0gKHBldCk9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcIkxhIHBldFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhwZXQpXG4gICAgICAgIHNldFBldHMoWy4uLnBldHMsIHBldF0pXG4gICAgICAgIFxuICAgIH1cbiAgICAvKlxuXG4gICAgKi8gXG5cbiAgICBjb25zdCBwZXRDYXJkcyA9IHBldHMubWFwKChwZXQsIGkpID0+e1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfT5cbiAgICAgICAgICAgICAgICA8UGV0Q2FyZCBcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlPXtwZXQubm9tYnJlfVxuICAgICAgICAgICAgICAgICAgICBlZGFkPXtwZXQuZWRhZH0gXG4gICAgICAgICAgICAgICAgICAgIGlkPXtpfVxuICAgICAgICAgICAgICAgICAgICBwZXNvPXtcIjZrZ1wifVxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e3BldC5hdmF0YXJ9PlxuICAgICAgICAgICAgICAgIDwvUGV0Q2FyZD5cbiAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgKVxuICAgIH0pXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9PlxuICAgICAgICAgICAgICAgICAgICA8UGV0Rm9ybSBvbkFkZFBldD17aGFuZGxlQWRkUGV0fT48L1BldEZvcm0+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgICAgPEdyaWRcbiAgICAgICAgICAgICAgICBpdGVtXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5PVwiZmxleC1zdGFydFwiXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgICAgIHNwYWNpbmc9ezN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cGV0Q2FyZHN9XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gICAgICAgIFxuICAgIFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pets/PetPanel.js\n");

/***/ })

})