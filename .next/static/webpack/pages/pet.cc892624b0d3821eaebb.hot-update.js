webpackHotUpdate_N_E("pages/pet",{

/***/ "./components/pets/PetAvatar.js":
/*!**************************************!*\
  !*** ./components/pets/PetAvatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetAvatar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ \"./node_modules/@material-ui/icons/PhotoCamera.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PetAvatar({\n  label,\n  register\n}) {\n  _s();\n\n  console.log(label);\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: imagePreviewUrl,\n    1: setImagePreviewUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleImageChange = e => {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      setFile(file);\n      setImagePreviewUrl(reader.result); //props.onAddAvatar(reader.result)\n    };\n\n    reader.readAsDataURL(file);\n  };\n\n  let imagePreview = null;\n\n  if (imagePreviewUrl) {\n    imagePreview = __jsx(\"img\", {\n      id: \"pet\",\n      src: imagePreviewUrl,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 23\n      }\n    });\n  } else {\n    imagePreview = __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 23\n      }\n    }, \"Please selcet an Rata de campo Image\");\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, imagePreview), __jsx(\"input\", {\n    name: label,\n    ref: register,\n    accept: \"image/*\",\n    id: \"icon-button-file\",\n    type: \"file\",\n    onChange: handleImageChange,\n    style: {\n      display: 'none',\n      align: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"icon-button-file\",\n    style: {\n      align: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    color: \"primary\",\n    \"aria-label\": \"upload picture\",\n    component: \"span\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(PetAvatar, \"KEIMpnu7JreD0HZNwv4pTbpbQKc=\");\n\n_c = PetAvatar;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetAvatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcz81ZmJmIl0sIm5hbWVzIjpbIlBldEF2YXRhciIsImxhYmVsIiwicmVnaXN0ZXIiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsImltYWdlUHJldmlld1VybCIsInNldEltYWdlUHJldmlld1VybCIsImhhbmRsZUltYWdlQ2hhbmdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwib25sb2FkZW5kIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCIsImltYWdlUHJldmlldyIsImRpc3BsYXkiLCJhbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR2UsU0FBU0EsU0FBVCxDQUFtQjtBQUFDQyxPQUFEO0FBQVFDO0FBQVIsQ0FBbkIsRUFBcUM7QUFBQTs7QUFFaERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxLQUFaO0FBQ0EsUUFBTTtBQUFBLE9BQUNJLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Ysc0RBQVEsQ0FBQyxFQUFELENBQXREOztBQUVBLFFBQU1HLGlCQUFpQixHQUFJQyxDQUFELElBQU07QUFDOUJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUVBLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7QUFDQSxRQUFJVCxJQUFJLEdBQUdNLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFYOztBQUVBSCxVQUFNLENBQUNJLFNBQVAsR0FBbUIsTUFBTTtBQUN2QlgsYUFBTyxDQUFDRCxJQUFELENBQVA7QUFDQUksd0JBQWtCLENBQUNJLE1BQU0sQ0FBQ0ssTUFBUixDQUFsQixDQUZ1QixDQUd2QjtBQUNELEtBSkQ7O0FBS0FMLFVBQU0sQ0FBQ00sYUFBUCxDQUFxQmQsSUFBckI7QUFDRCxHQVpEOztBQWNBLE1BQUllLFlBQVksR0FBRyxJQUFuQjs7QUFDQSxNQUFJWixlQUFKLEVBQXFCO0FBQ25CWSxnQkFBWSxHQUFJO0FBQUssUUFBRSxFQUFDLEtBQVI7QUFBYyxTQUFHLEVBQUVaLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBaEI7QUFDRCxHQUZELE1BR0k7QUFDQVksZ0JBQVksR0FBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQUFkO0FBQ0g7O0FBQ0QsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tBLFlBREwsQ0FERixFQUlFO0FBQ0ksUUFBSSxFQUFFbkIsS0FEVjtBQUVJLE9BQUcsRUFBRUMsUUFGVDtBQUdJLFVBQU0sRUFBQyxTQUhYO0FBSUksTUFBRSxFQUFDLGtCQUpQO0FBS0ksUUFBSSxFQUFDLE1BTFQ7QUFNSSxZQUFRLEVBQUVRLGlCQU5kO0FBT0ksU0FBSyxFQUFFO0FBQUNXLGFBQU8sRUFBRSxNQUFWO0FBQWtCQyxXQUFLLEVBQUU7QUFBekIsS0FQWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsRUFjRTtBQUNJLFdBQU8sRUFBQyxrQkFEWjtBQUMrQixTQUFLLEVBQUU7QUFBQ0EsV0FBSyxFQUFFO0FBQVIsS0FEdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsb0VBQUQ7QUFDSSxTQUFLLEVBQUMsU0FEVjtBQUVJLGtCQUFXLGdCQUZmO0FBR0ksYUFBUyxFQUFDLE1BSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlRLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpSLENBRkosQ0FkRixDQURGO0FBMkJIOztHQXREdUJ0QixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmEnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBldEF2YXRhcih7bGFiZWwsIHJlZ2lzdGVyfSl7XG5cbiAgICBjb25zb2xlLmxvZyhsYWJlbClcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3VXJsLCBzZXRJbWFnZVByZXZpZXdVcmxdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PntcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKGZpbGUpXG4gICAgICAgIHNldEltYWdlUHJldmlld1VybChyZWFkZXIucmVzdWx0KVxuICAgICAgICAvL3Byb3BzLm9uQWRkQXZhdGFyKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cblxuICAgIGxldCBpbWFnZVByZXZpZXcgPSBudWxsO1xuICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgIGltYWdlUHJldmlldyA9ICg8aW1nIGlkPSdwZXQnIHNyYz17aW1hZ2VQcmV2aWV3VXJsfSAvPik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGltYWdlUHJldmlldz0oPGRpdiA+UGxlYXNlIHNlbGNldCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpbWFnZVByZXZpZXd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9e2xhYmVsfVxuICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn0gXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgXG4gICAgICAgICAgICBpZD1cImljb24tYnV0dG9uLWZpbGVcIiBcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cbiAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnLCBhbGlnbjogJ2NlbnRlcid9fVxuICAgICAgICAgICAgXG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBcbiAgICAgICAgICAgIGh0bWxGb3I9XCJpY29uLWJ1dHRvbi1maWxlXCIgc3R5bGU9e3thbGlnbjogJ2NlbnRlcid9fT5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiIFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pets/PetAvatar.js\n");

/***/ })

})