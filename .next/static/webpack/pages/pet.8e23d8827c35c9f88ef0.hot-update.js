webpackHotUpdate_N_E("pages/pet",{

/***/ "./components/pets/PetForm.js":
/*!************************************!*\
  !*** ./components/pets/PetForm.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _PetAvatar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PetAvatar.js */ \"./components/pets/PetAvatar.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetForm.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction PetForm() {\n  _s();\n\n  const {\n    register,\n    handleSubmit\n  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])();\n\n  const onSubmit = values => {\n    console.log(values); //props.onAddAvatar()\n  };\n\n  return __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 21\n    }\n  }, \"Nombre\"), __jsx(\"input\", {\n    ref: register,\n    name: \"nombre\",\n    type: \"text\",\n    className: \"form-control\",\n    id: \"inputNombre\",\n    placeholder: \"Evite\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 17\n    }\n  }, __jsx(\"label\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 21\n    }\n  }, \"Edad\"), __jsx(\"input\", {\n    ref: register,\n    name: \"edad\",\n    type: \"number\",\n    className: \"form-control\",\n    id: \"inputEdad\",\n    placeholder: \"4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 17\n    }\n  }, __jsx(_PetAvatar_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    label: \"avatar\",\n    register: register,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  })), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }, \"Submit\")));\n}\n/*\nclass PetForm extends React.Component{\n    constructor(props){\n        super(props);\n        this.state = {\n            nombre: '',\n            edad: '',\n            peso: 0,\n            propietario: '',\n            alojamiento: '',\n            avatar: '',\n        }\n\n        this.handleChange = this.handleChange.bind(this);\n        this.handleSubmit = this.handleSubmit.bind(this);\n        this.handleAddAvatar = this.handleAddAvatar.bind(this) \n    }\n\n    handleChange(event){\n        const value = event.target.value\n        const name = event.target.name\n \n        this.setState({\n            [name]: value\n        })\n    }\n\n    handleAddAvatar(avatar){\n        this.setState({\n           avatar: avatar\n       }) \n    }\n\n    handleSubmit(event){\n        event.preventDefault()\n        alert(\"Estas por registrar a esta nueva rata de campo\")\n        console.log(this.state)\n        this.props.onAddPet(this.state)\n        this.setState({\n            nombre: '',\n            edad: '',\n            peso: 0,\n            propietario: '',\n            alojamiento: '',\n        })\n        \n    }\n\n    render(){\n        return(\n            \n        )\n    }\n}\n\nexport default PetForm\n\n*/\n\n_s(PetForm, \"YCsANGaEW6cUd2ydMBN8lg1R7RY=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"]];\n});\n\n_c = PetForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEZvcm0uanM/ZWZhOSJdLCJuYW1lcyI6WyJQZXRGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJ1c2VGb3JtIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDZSxTQUFTQSxPQUFULEdBQWtCO0FBQUE7O0FBQzdCLFFBQU07QUFBQ0MsWUFBRDtBQUFXQztBQUFYLE1BQTJCQywrREFBTyxFQUF4Qzs7QUFFQSxRQUFNQyxRQUFRLEdBQUlDLE1BQUQsSUFBVztBQUN4QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVosRUFEd0IsQ0FFeEI7QUFDSCxHQUhEOztBQUtBLFNBQ0k7QUFBTSxZQUFRLEVBQUVILFlBQVksQ0FBQ0UsUUFBRCxDQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixFQUVJO0FBQ0EsT0FBRyxFQUFFSCxRQURMO0FBRUEsUUFBSSxFQUFDLFFBRkw7QUFHQSxRQUFJLEVBQUMsTUFITDtBQUlBLGFBQVMsRUFBQyxjQUpWO0FBS0EsTUFBRSxFQUFDLGFBTEg7QUFNQSxlQUFXLEVBQUMsT0FOWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FEUixFQWFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFFSTtBQUNBLE9BQUcsRUFBRUEsUUFETDtBQUVBLFFBQUksRUFBQyxNQUZMO0FBR0EsUUFBSSxFQUFDLFFBSEw7QUFJQSxhQUFTLEVBQUMsY0FKVjtBQUtBLE1BQUUsRUFBQyxXQUxIO0FBTUEsZUFBVyxFQUFDLEdBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBYlIsRUF3QlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMscURBQUQ7QUFDQSxTQUFLLEVBQUUsUUFEUDtBQUVBLFlBQVEsRUFBRUEsUUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0F4QlIsRUErQlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0EsUUFBSSxFQUFDLFFBREw7QUFFQSxhQUFTLEVBQUMsaUJBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLENBL0JSLENBREo7QUF3Q0g7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FqRHdCRCxPO1VBQ2FHLHVEOzs7S0FEYkgsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvcGV0cy9QZXRGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBldEF2YXRhciBmcm9tICcuL1BldEF2YXRhci5qcydcbmltcG9ydCB7dXNlRm9ybX0gZnJvbSAncmVhY3QtaG9vay1mb3JtJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGV0Rm9ybSgpe1xuICAgIGNvbnN0IHtyZWdpc3RlciwgaGFuZGxlU3VibWl0fSA9IHVzZUZvcm0oKVxuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAodmFsdWVzKSA9PntcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxuICAgICAgICAvL3Byb3BzLm9uQWRkQXZhdGFyKClcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Tm9tYnJlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9IFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibm9tYnJlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXROb21icmVcIiBcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFdml0ZVwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVkYWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlZGFkXCIgXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wdXRFZGFkXCIgXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiNFwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFBldEF2YXRhclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17XCJhdmF0YXJcIn1cbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfT4gXG4gICAgICAgICAgICAgICAgICAgIDwvUGV0QXZhdGFyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgICAgICA+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgKVxufVxuLypcbmNsYXNzIFBldEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBub21icmU6ICcnLFxuICAgICAgICAgICAgZWRhZDogJycsXG4gICAgICAgICAgICBwZXNvOiAwLFxuICAgICAgICAgICAgcHJvcGlldGFyaW86ICcnLFxuICAgICAgICAgICAgYWxvamFtaWVudG86ICcnLFxuICAgICAgICAgICAgYXZhdGFyOiAnJyxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUFkZEF2YXRhciA9IHRoaXMuaGFuZGxlQWRkQXZhdGFyLmJpbmQodGhpcykgXG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGV2ZW50KXtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lXG4gXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUFkZEF2YXRhcihhdmF0YXIpe1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgYXZhdGFyOiBhdmF0YXJcbiAgICAgICB9KSBcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGFsZXJ0KFwiRXN0YXMgcG9yIHJlZ2lzdHJhciBhIGVzdGEgbnVldmEgcmF0YSBkZSBjYW1wb1wiKVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgICAgICB0aGlzLnByb3BzLm9uQWRkUGV0KHRoaXMuc3RhdGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbm9tYnJlOiAnJyxcbiAgICAgICAgICAgIGVkYWQ6ICcnLFxuICAgICAgICAgICAgcGVzbzogMCxcbiAgICAgICAgICAgIHByb3BpZXRhcmlvOiAnJyxcbiAgICAgICAgICAgIGFsb2phbWllbnRvOiAnJyxcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXRGb3JtXG5cbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pets/PetForm.js\n");

/***/ })

})