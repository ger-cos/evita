webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pets/PetAvatar.js":
/*!**************************************!*\
  !*** ./components/pets/PetAvatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetAvatar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ \"./node_modules/@material-ui/icons/PhotoCamera.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PetAvatar({\n  label,\n  register\n}) {\n  _s();\n\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: imagePreviewUrl,\n    1: setImagePreviewUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleImageChange = e => {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      setFile(file);\n      setImagePreviewUrl(reader.result); //props.onAddAvatar(reader.result)\n    };\n\n    reader.readAsDataURL(file);\n  };\n\n  let imagePreview = null;\n\n  if (imagePreviewUrl) {\n    imagePreview = __jsx(\"img\", {\n      id: \"pet\",\n      src: imagePreviewUrl,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 23\n      }\n    });\n  } else {\n    imagePreview = __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 23\n      }\n    }, \"Please selcet an Rata de campo Image\");\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, imagePreview), __jsx(\"input\", {\n    name: label,\n    ref: register,\n    accept: \"image/*\",\n    id: \"icon-button-file\",\n    type: \"file\",\n    onChange: handleImageChange,\n    style: {\n      display: 'none',\n      align: 'center'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }));\n}\n\n_s(PetAvatar, \"KEIMpnu7JreD0HZNwv4pTbpbQKc=\");\n\n_c = PetAvatar;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetAvatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcz81ZmJmIl0sIm5hbWVzIjpbIlBldEF2YXRhciIsImxhYmVsIiwicmVnaXN0ZXIiLCJmaWxlIiwic2V0RmlsZSIsInVzZVN0YXRlIiwiaW1hZ2VQcmV2aWV3VXJsIiwic2V0SW1hZ2VQcmV2aWV3VXJsIiwiaGFuZGxlSW1hZ2VDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwidGFyZ2V0IiwiZmlsZXMiLCJvbmxvYWRlbmQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwiaW1hZ2VQcmV2aWV3IiwiZGlzcGxheSIsImFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHZSxTQUFTQSxTQUFULENBQW1CO0FBQUNDLE9BQUQ7QUFBUUM7QUFBUixDQUFuQixFQUFxQztBQUFBOztBQUdoRCxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDRixzREFBUSxDQUFDLEVBQUQsQ0FBdEQ7O0FBRUEsUUFBTUcsaUJBQWlCLEdBQUlDLENBQUQsSUFBTTtBQUM5QkEsS0FBQyxDQUFDQyxjQUFGO0FBRUEsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjtBQUNBLFFBQUlULElBQUksR0FBR00sQ0FBQyxDQUFDSSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBQVg7O0FBRUFILFVBQU0sQ0FBQ0ksU0FBUCxHQUFtQixNQUFNO0FBQ3ZCWCxhQUFPLENBQUNELElBQUQsQ0FBUDtBQUNBSSx3QkFBa0IsQ0FBQ0ksTUFBTSxDQUFDSyxNQUFSLENBQWxCLENBRnVCLENBR3ZCO0FBQ0QsS0FKRDs7QUFLQUwsVUFBTSxDQUFDTSxhQUFQLENBQXFCZCxJQUFyQjtBQUNELEdBWkQ7O0FBY0EsTUFBSWUsWUFBWSxHQUFHLElBQW5COztBQUNBLE1BQUlaLGVBQUosRUFBcUI7QUFDbkJZLGdCQUFZLEdBQUk7QUFBSyxRQUFFLEVBQUMsS0FBUjtBQUFjLFNBQUcsRUFBRVosZUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFoQjtBQUNELEdBRkQsTUFHSTtBQUNBWSxnQkFBWSxHQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBQWQ7QUFDSDs7QUFDRCxTQUNFLG1FQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0EsWUFETCxDQURGLEVBSUU7QUFDSSxRQUFJLEVBQUVqQixLQURWO0FBRUksT0FBRyxFQUFFQyxRQUZUO0FBR0ksVUFBTSxFQUFDLFNBSFg7QUFJSSxNQUFFLEVBQUMsa0JBSlA7QUFLSSxRQUFJLEVBQUMsTUFMVDtBQU1JLFlBQVEsRUFBRU0saUJBTmQ7QUFPSSxTQUFLLEVBQUU7QUFBQ1csYUFBTyxFQUFFLE1BQVY7QUFBa0JDLFdBQUssRUFBRTtBQUF6QixLQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGO0FBa0JIOztHQTdDdUJwQixTOztLQUFBQSxTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBQaG90b0NhbWVyYSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUGhvdG9DYW1lcmEnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBldEF2YXRhcih7bGFiZWwsIHJlZ2lzdGVyfSl7XG5cbiAgXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2ltYWdlUHJldmlld1VybCwgc2V0SW1hZ2VQcmV2aWV3VXJsXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgc2V0RmlsZShmaWxlKVxuICAgICAgICBzZXRJbWFnZVByZXZpZXdVcmwocmVhZGVyLnJlc3VsdClcbiAgICAgICAgLy9wcm9wcy5vbkFkZEF2YXRhcihyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgICB9XG5cbiAgICBsZXQgaW1hZ2VQcmV2aWV3ID0gbnVsbDtcbiAgICBpZiAoaW1hZ2VQcmV2aWV3VXJsKSB7XG4gICAgICBpbWFnZVByZXZpZXcgPSAoPGltZyBpZD0ncGV0JyBzcmM9e2ltYWdlUHJldmlld1VybH0gLz4pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBpbWFnZVByZXZpZXc9KDxkaXYgPlBsZWFzZSBzZWxjZXQgYW4gUmF0YSBkZSBjYW1wbyBJbWFnZTwvZGl2PilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aW1hZ2VQcmV2aWV3fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBuYW1lPXtsYWJlbH1cbiAgICAgICAgICAgIHJlZj17cmVnaXN0ZXJ9IFxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiIFxuICAgICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1maWxlXCIgXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJywgYWxpZ246ICdjZW50ZXInfX1cbiAgICAgICAgLz5cbiBcblxuICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pets/PetAvatar.js\n");

/***/ })

})