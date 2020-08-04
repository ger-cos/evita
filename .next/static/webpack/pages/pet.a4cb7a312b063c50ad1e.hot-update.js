webpackHotUpdate_N_E("pages/pet",{

/***/ "./components/pets/PetAvatar.js":
/*!**************************************!*\
  !*** ./components/pets/PetAvatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetAvatar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/PhotoCamera */ \"./node_modules/@material-ui/icons/PhotoCamera.js\");\n/* harmony import */ var _material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PetAvatar(props) {\n  _s();\n\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const {\n    0: imagePreviewUrl,\n    1: setImagePreviewUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''); //MAAAAAAAAAAAAAAAAAAL\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    var img = document.getElementById('pet');\n\n    if (img) {\n      img.style.borderRadius = \"50%\";\n      img.style.objectFit = \"cover\";\n      img.style.objectPosition = \"center\";\n      img.style.height = \"150px\";\n      img.style.width = \"150px\";\n    }\n  }, [file, imagePreviewUrl]);\n\n  const handleImageChange = e => {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      setFile(file);\n      setImagePreviewUrl(reader.result); //props.onAddAvatar(reader.result)\n    };\n\n    reader.readAsDataURL(file);\n  };\n\n  let imagePreview = null;\n\n  if (imagePreviewUrl) {\n    imagePreview = __jsx(\"img\", {\n      id: \"pet\",\n      src: imagePreviewUrl,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 23\n      }\n    });\n  } else {\n    imagePreview = __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 23\n      }\n    }, \"Please selcet an Rata de campo Image\");\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"input\", {\n    accept: \"image/*\",\n    id: \"icon-button-file\",\n    type: \"file\",\n    onChange: handleImageChange,\n    style: {\n      display: 'none'\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"icon-button-file\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    color: \"primary\",\n    \"aria-label\": \"upload picture\",\n    component: \"span\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_icons_PhotoCamera__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 21\n    }\n  }))), __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, imagePreview));\n}\n\n_s(PetAvatar, \"CP5ixEbdKc95ZFcx7tsK/05PPKE=\");\n\n_c = PetAvatar;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetAvatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcz81ZmJmIl0sIm5hbWVzIjpbIlBldEF2YXRhciIsInByb3BzIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsImltYWdlUHJldmlld1VybCIsInNldEltYWdlUHJldmlld1VybCIsInVzZUVmZmVjdCIsImltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImJvcmRlclJhZGl1cyIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJoYW5kbGVJbWFnZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiLCJpbWFnZVByZXZpZXciLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUF5QjtBQUFBOztBQUdwQyxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDQyxlQUFEO0FBQUEsT0FBa0JDO0FBQWxCLE1BQXdDRixzREFBUSxDQUFDLEVBQUQsQ0FBdEQsQ0FKb0MsQ0FLckM7O0FBQ0NHLHlEQUFTLENBQUMsTUFBTTtBQUNaLFFBQUlDLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVY7O0FBQ0EsUUFBR0YsR0FBSCxFQUFPO0FBQ0hBLFNBQUcsQ0FBQ0csS0FBSixDQUFVQyxZQUFWLEdBQXVCLEtBQXZCO0FBQ0FKLFNBQUcsQ0FBQ0csS0FBSixDQUFVRSxTQUFWLEdBQW9CLE9BQXBCO0FBQ0FMLFNBQUcsQ0FBQ0csS0FBSixDQUFVRyxjQUFWLEdBQXlCLFFBQXpCO0FBQ0FOLFNBQUcsQ0FBQ0csS0FBSixDQUFVSSxNQUFWLEdBQWlCLE9BQWpCO0FBQ0FQLFNBQUcsQ0FBQ0csS0FBSixDQUFVSyxLQUFWLEdBQWdCLE9BQWhCO0FBQ0g7QUFFSixHQVZRLEVBVU4sQ0FBQ2QsSUFBRCxFQUFPRyxlQUFQLENBVk0sQ0FBVDs7QUFZQSxRQUFNWSxpQkFBaUIsR0FBSUMsQ0FBRCxJQUFNO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQ0EsUUFBSW5CLElBQUksR0FBR2dCLENBQUMsQ0FBQ0ksTUFBRixDQUFTQyxLQUFULENBQWUsQ0FBZixDQUFYOztBQUVBSCxVQUFNLENBQUNJLFNBQVAsR0FBbUIsTUFBTTtBQUN2QnJCLGFBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0FJLHdCQUFrQixDQUFDYyxNQUFNLENBQUNLLE1BQVIsQ0FBbEIsQ0FGdUIsQ0FHdkI7QUFDRCxLQUpEOztBQUtBTCxVQUFNLENBQUNNLGFBQVAsQ0FBcUJ4QixJQUFyQjtBQUNELEdBWkQ7O0FBY0EsTUFBSXlCLFlBQVksR0FBRyxJQUFuQjs7QUFDQSxNQUFJdEIsZUFBSixFQUFxQjtBQUNuQnNCLGdCQUFZLEdBQUk7QUFBSyxRQUFFLEVBQUMsS0FBUjtBQUFjLFNBQUcsRUFBRXRCLGVBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBaEI7QUFDRCxHQUZELE1BR0k7QUFDQXNCLGdCQUFZLEdBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FBZDtBQUNIOztBQUNELFNBQ0UsbUVBQ0U7QUFDSSxVQUFNLEVBQUMsU0FEWDtBQUVJLE1BQUUsRUFBQyxrQkFGUDtBQUdJLFFBQUksRUFBQyxNQUhUO0FBSUksWUFBUSxFQUFFVixpQkFKZDtBQUtJLFNBQUssRUFBRTtBQUFDVyxhQUFPLEVBQUU7QUFBVixLQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFO0FBQ0EsV0FBTyxFQUFDLGtCQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSSxNQUFDLG9FQUFEO0FBQ0ksU0FBSyxFQUFDLFNBRFY7QUFFSSxrQkFBVyxnQkFGZjtBQUdJLGFBQVMsRUFBQyxNQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJUSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKUixDQUZKLENBUkYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxZQURMLENBakJGLENBREY7QUF1Qkg7O0dBOUR1QjNCLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BldHMvUGV0QXZhdGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFBob3RvQ2FtZXJhIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9QaG90b0NhbWVyYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBldEF2YXRhcihwcm9wcyl7XG5cbiAgXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2ltYWdlUHJldmlld1VybCwgc2V0SW1hZ2VQcmV2aWV3VXJsXSA9IHVzZVN0YXRlKCcnKVxuICAgLy9NQUFBQUFBQUFBQUFBQUFBQUFBTFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHZhciBpbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGV0JylcbiAgICAgICAgaWYoaW1nKXtcbiAgICAgICAgICAgIGltZy5zdHlsZS5ib3JkZXJSYWRpdXM9XCI1MCVcIlxuICAgICAgICAgICAgaW1nLnN0eWxlLm9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgIGltZy5zdHlsZS5vYmplY3RQb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgICBpbWcuc3R5bGUuaGVpZ2h0PVwiMTUwcHhcIlxuICAgICAgICAgICAgaW1nLnN0eWxlLndpZHRoPVwiMTUwcHhcIlxuICAgICAgICB9XG4gXG4gICAgfSwgW2ZpbGUsIGltYWdlUHJldmlld1VybF0pXG4gICBcbiAgICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PntcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICBzZXRGaWxlKGZpbGUpXG4gICAgICAgIHNldEltYWdlUHJldmlld1VybChyZWFkZXIucmVzdWx0KVxuICAgICAgICAvL3Byb3BzLm9uQWRkQXZhdGFyKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cblxuICAgIGxldCBpbWFnZVByZXZpZXcgPSBudWxsO1xuICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgIGltYWdlUHJldmlldyA9ICg8aW1nIGlkPSdwZXQnIHNyYz17aW1hZ2VQcmV2aWV3VXJsfSAvPik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgIGltYWdlUHJldmlldz0oPGRpdiA+UGxlYXNlIHNlbGNldCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiIFxuICAgICAgICAgICAgaWQ9XCJpY29uLWJ1dHRvbi1maWxlXCIgXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICdub25lJ319XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbCBcbiAgICAgICAgaHRtbEZvcj1cImljb24tYnV0dG9uLWZpbGVcIj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIFxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiIFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ1cGxvYWQgcGljdHVyZVwiIFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPFBob3RvQ2FtZXJhIC8+XG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7aW1hZ2VQcmV2aWV3fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/pets/PetAvatar.js\n");

/***/ })

})