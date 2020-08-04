webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pets/PetAvatar.js":
/*!**************************************!*\
  !*** ./components/pets/PetAvatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetAvatar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ \"./node_modules/@material-ui/icons/PhotoCamera.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PetAvatar({\n  label,\n  register\n}) {\n  _s();\n\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: imagePreviewUrl,\n    1: setImagePreviewUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleImageChange = e => {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      setFile(file);\n      setImagePreviewUrl(reader.result); //props.onAddAvatar(reader.result)\n    };\n\n    reader.readAsDataURL(file);\n  };\n\n  let imagePreview = null;\n\n  if (imagePreviewUrl) {\n    imagePreview = __jsx(\"img\", {\n      id: \"pet\",\n      src: imagePreviewUrl,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 23\n      }\n    });\n  } else {\n    imagePreview = __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 23\n      }\n    }, \"Please selcet an Rata de campo Image\");\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, imagePreview), __jsx(\"input\", {\n    name: label,\n    ref: register,\n    accept: \"image/*\",\n    id: \"icon-button-file\",\n    type: \"file\",\n    onChange: handleImageChange,\n    style: {\n      display: 'none',\n      align: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"icon-button-file\",\n    style: {\n      align: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    color: \"primary\",\n    \"aria-label\": \"upload picture\",\n    component: \"span\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 21\n    }\n  }))));\n}\n\n_s(PetAvatar, \"KEIMpnu7JreD0HZNwv4pTbpbQKc=\");\n\n_c = PetAvatar;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetAvatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcz81ZmJmIl0sIm5hbWVzIjpbIlBldEF2YXRhciIsImxhYmVsIiwicmVnaXN0ZXIiLCJmaWxlIiwic2V0RmlsZSIsInVzZVN0YXRlIiwiaW1hZ2VQcmV2aWV3VXJsIiwic2V0SW1hZ2VQcmV2aWV3VXJsIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwidGFyZ2V0IiwiZmlsZXMiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaW1hZ2VQcmV2aWV3IiwiZGlzcGxheSIsImFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxTQUFULENBQW1CO0FBQUNDLE9BQUQ7QUFBUUM7QUFBUixDQUFuQixFQUFxQztBQUFBOztBQUdoRCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDRixzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7O0FBRUEsUUFBTUcsaUJBQWlCLEdBQUlDLENBQUQsSUFBTTtBQUM5QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUNBLFFBQUlULElBQUksR0FBR00sQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQVg7O0FBRUFILFVBQU0sQ0FBQ0ksU0FBUCxHQUFtQixNQUFNO0FBQ3ZCWCxhQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBSSx3QkFBa0IsQ0FBQ0ksTUFBTSxDQUFDSyxNQUFSLENBQWxCLENBRnVCLENBR3ZCO0FBQ0QsS0FKRDs7QUFLQUwsVUFBTSxDQUFDTSxhQUFQLENBQXFCZCxJQUFyQjtBQUNELEdBWkQ7O0FBY0EsTUFBSWUsWUFBWSxHQUFHLElBQW5COztBQUNBLE1BQUlaLGVBQUosRUFBcUI7QUFDbkJZLGdCQUFZLEdBQUk7QUFBSyxRQUFFLEVBQUMsS0FBUjtBQUFjLFNBQUcsRUFBRVosZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoQjtBQUNELEdBRkQsTUFHSTtBQUNBWSxnQkFBWSxHQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQWQ7QUFDSDs7QUFDRCxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsWUFETCxDQURGLEVBSUU7QUFDSSxRQUFJLEVBQUVqQixLQURWO0FBRUksT0FBRyxFQUFFQyxRQUZUO0FBR0ksVUFBTSxFQUFDLFNBSFg7QUFJSSxNQUFFLEVBQUMsa0JBSlA7QUFLSSxRQUFJLEVBQUMsTUFMVDtBQU1JLFlBQVEsRUFBRU0saUJBTmQ7QUFPSSxTQUFLLEVBQUU7QUFBQ1csYUFBTyxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQWFFO0FBQ0ksV0FBTyxFQUFDLGtCQURaO0FBQytCLFNBQUssRUFBRTtBQUFDQSxXQUFLLEVBQUU7QUFBUixLQUR0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUksTUFBQyxvRUFBRDtBQUNJLFNBQUssRUFBQyxTQURWO0FBRUksa0JBQVcsZ0JBRmY7QUFHSSxhQUFTLEVBQUMsTUFIZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSVEsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSlIsQ0FGSixDQWJGLENBREY7QUEwQkg7O0dBckR1QnBCLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BldHMvUGV0QXZhdGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGV0QXZhdGFyKHtsYWJlbCwgcmVnaXN0ZXJ9KXtcblxuICBcbiAgICBjb25zdCBbZmlsZSwgc2V0RmlsZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaW1hZ2VQcmV2aWV3VXJsLCBzZXRJbWFnZVByZXZpZXdVcmxdID0gdXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PntcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKGZpbGUpXG4gICAgICAgIHNldEltYWdlUHJldmlld1VybChyZWFkZXIucmVzdWx0KVxuICAgICAgICAvL3Byb3BzLm9uQWRkQXZhdGFyKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cblxuICAgIGxldCBpbWFnZVByZXZpZXcgPSBudWxsO1xuICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgIGltYWdlUHJldmlldyA9ICg8aW1nIGlkPSdwZXQnIHNyYz17aW1hZ2VQcmV2aWV3VXJsfSAvPik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGltYWdlUHJldmlldz0oPGRpdiA+UGxlYXNlIHNlbGNldCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtpbWFnZVByZXZpZXd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG5hbWU9e2xhYmVsfVxuICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcn0gXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgXG4gICAgICAgICAgICBpZD1cImljb24tYnV0dG9uLWZpbGVcIiBcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX1cbiAgICAgICAgICAgIHN0eWxlPXt7ZGlzcGxheTogJ25vbmUnLCBhbGlnbjogJ2NlbnRlcid9fVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWwgXG4gICAgICAgICAgICBodG1sRm9yPVwiaWNvbi1idXR0b24tZmlsZVwiIHN0eWxlPXt7YWxpZ246ICdjZW50ZXInfX0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIiBcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidXBsb2FkIHBpY3R1cmVcIiBcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxQaG90b0NhbWVyYSAvPlxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICA8Lz5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/pets/PetAvatar.js\n");

/***/ })

})