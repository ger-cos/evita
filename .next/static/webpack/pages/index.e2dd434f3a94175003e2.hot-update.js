webpackHotUpdate_N_E("pages/index",{

/***/ "./components/pets/PetAvatar.js":
/*!**************************************!*\
  !*** ./components/pets/PetAvatar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PetAvatar; });\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js\",\n    _s = $RefreshSig$();\n\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction PetAvatar(props) {\n  _s();\n\n  const {\n    0: file,\n    1: setFile\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  const {\n    0: imagePreviewUrl,\n    1: setImagePreviewUrl\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('');\n  let $imagePreview = null;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    if (imagePreviewUrl) {\n      $imagePreview = __jsx(\"img\", {\n        src: imagePreviewUrl,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 26\n        }\n      });\n    } else {\n      $imagePreview = __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 26\n        }\n      }, \"Please selcet an Rata de campo Image\");\n    }\n  }, [file, imagePreviewUrl]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    let $imagePreview = null;\n  });\n\n  const handleImageChange = e => {\n    e.preventDefault();\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      /*this.setState({\n        file: file,\n        imagePreviewUrl: reader.result\n      });*/\n      setFile(file);\n      setImagePreviewUrl(reader.result); //props.onAddAvatar(reader.result)\n    };\n\n    reader.readAsDataURL(file);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"input\", {\n    type: \"file\",\n    onChange: handleImageChange,\n    className: \"jsx-2013464274\" + \" \" + \"btn btn-outline-dak\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"jsx-2013464274\" + \" \" + \"imgPreview\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, $imagePreview), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2013464274\",\n    __self: this\n  }, \"img.jsx-2013464274{border-radius:50%;object-fit:cover;object-position:center;height:150px;width:150px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dlcmNvcy9Eb2N1bWVudHMvd2ViL3Byb3llY3RvLWV2aXRhL2NvbXBvbmVudHMvcGV0cy9QZXRBdmF0YXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RrQixBQUcrQixrQkFDRCxpQkFDTSx1QkFDVixhQUNELFlBQ2QiLCJmaWxlIjoiL2hvbWUvZ2VyY29zL0RvY3VtZW50cy93ZWIvcHJveWVjdG8tZXZpdGEvY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBldEF2YXRhcihwcm9wcyl7XG4gIFxuICAgIGNvbnN0IFtmaWxlLCBzZXRGaWxlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtpbWFnZVByZXZpZXdVcmwsIHNldEltYWdlUHJldmlld1VybF0gPSB1c2VTdGF0ZSgnJylcbiAgICBcbiAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgICAgJGltYWdlUHJldmlldyA9ICg8aW1nIHNyYz17aW1hZ2VQcmV2aWV3VXJsfSAvPik7XG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICAgICRpbWFnZVByZXZpZXc9KDxkaXYgPlBsZWFzZSBzZWxjZXQgYW4gUmF0YSBkZSBjYW1wbyBJbWFnZTwvZGl2PilcbiAgICAgIH1cbiAgICB9LCBbZmlsZSwgaW1hZ2VQcmV2aWV3VXJsXSlcblxuICAgIHVzZUVmZmVjdCgoKT0+e1xuICAgICAgbGV0ICRpbWFnZVByZXZpZXcgPSBudWxsO1xuICAgIH0pXG4gICAgXG4gICAgY29uc3QgaGFuZGxlSW1hZ2VDaGFuZ2UgPSAoZSkgPT57XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcblxuICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgICAgLyp0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdFxuICAgICAgICB9KTsqL1xuICAgICAgICBzZXRGaWxlKGZpbGUpXG4gICAgICAgIHNldEltYWdlUHJldmlld1VybChyZWFkZXIucmVzdWx0KVxuICAgICAgICAvL3Byb3BzLm9uQWRkQXZhdGFyKHJlYWRlci5yZXN1bHQpXG4gICAgICB9XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxuICAgIH1cblxuICAgIFxuICAgXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICBcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYWtcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtoYW5kbGVJbWFnZUNoYW5nZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XG4gICAgICAgICAgICB7JGltYWdlUHJldmlld31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPC8+XG4gICAgKVxuXG59XG4vKlxuY2xhc3MgUGV0QXZhdGFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbGU6ICcnLFxuICAgICAgaW1hZ2VQcmV2aWV3VXJsOiAnJ1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVJbWFnZUNoYW5nZSA9IHRoaXMuaGFuZGxlSW1hZ2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBUT0RPOiBkbyBzb21ldGhpbmcgd2l0aCAtPiB0aGlzLnN0YXRlLmZpbGVcbiAgfVxuXG4gIGhhbmRsZUltYWdlQ2hhbmdlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICBpbWFnZVByZXZpZXdVcmw6IHJlYWRlci5yZXN1bHRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5wcm9wcy5vbkFkZEF2YXRhcihyZWFkZXIucmVzdWx0KVxuICAgIH1cblxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gIH1cbiAgLypcbiAgcmVuZGVyKCkge1xuICAgIGxldCB7aW1hZ2VQcmV2aWV3VXJsfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0ICRpbWFnZVByZXZpZXcgPSBudWxsO1xuICAgIGlmIChpbWFnZVByZXZpZXdVcmwpIHtcbiAgICAgICRpbWFnZVByZXZpZXcgPSAoPGltZyBzcmM9e2ltYWdlUHJldmlld1VybH0gLz4pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICAkaW1hZ2VQcmV2aWV3PSg8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdUZXh0XCI+UGxlYXNlIHNlbGN0IGFuIFJhdGEgZGUgY2FtcG8gSW1hZ2U8L2Rpdj4pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicHJldmlld0NvbXBvbmVudFwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFrXCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbWFnZUNoYW5nZX0gLz5cbiAgICAgICAgey8qPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5oYW5kbGVTdWJtaXR9PkVudmlhcjwvYnV0dG9uPiAqfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nUHJldmlld1wiPlxuICAgICAgICAgICAgeyRpbWFnZVByZXZpZXd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGV0QXZhdGFyXG4qLyJdfQ== */\\n/*@ sourceURL=/home/gercos/Documents/web/proyecto-evita/components/pets/PetAvatar.js */\"));\n}\n/*\nclass PetAvatar extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      file: '',\n      imagePreviewUrl: ''\n    };\n    this.handleImageChange = this.handleImageChange.bind(this);\n    this.handleSubmit = this.handleSubmit.bind(this);\n  }\n\n  handleSubmit(e) {\n    e.preventDefault();\n    // TODO: do something with -> this.state.file\n  }\n\n  handleImageChange(e) {\n    e.preventDefault();\n\n    let reader = new FileReader();\n    let file = e.target.files[0];\n\n    reader.onloadend = () => {\n      this.setState({\n        file: file,\n        imagePreviewUrl: reader.result\n      });\n      this.props.onAddAvatar(reader.result)\n    }\n\n    reader.readAsDataURL(file)\n  }\n  /*\n  render() {\n    let {imagePreviewUrl} = this.state;\n    let $imagePreview = null;\n    if (imagePreviewUrl) {\n      $imagePreview = (<img src={imagePreviewUrl} />);\n    }\n    else{\n        $imagePreview=(<div className=\"previewText\">Please selct an Rata de campo Image</div>)\n    }\n\n    return (\n      <div\n        className=\"previewComponent\">\n        <form onSubmit={this.handleSubmit}>\n          <input className=\"btn btn-outline-dak\" type=\"file\" onChange={this.handleImageChange} />\n        {/*<button className=\"submitButton\" type=\"submit\" onClick={this.handleSubmit}>Enviar</button> *}\n        </form>\n        <div className=\"imgPreview\">\n            {$imagePreview}\n        </div>\n      </div>\n    )\n  }\n\n}\n\nexport default PetAvatar\n*/\n\n_s(PetAvatar, \"GhhKHA6oNxziJf5k1E/GlrjJxGM=\");\n\n_c = PetAvatar;\n\nvar _c;\n\n$RefreshReg$(_c, \"PetAvatar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wZXRzL1BldEF2YXRhci5qcz81ZmJmIl0sIm5hbWVzIjpbIlBldEF2YXRhciIsInByb3BzIiwiZmlsZSIsInNldEZpbGUiLCJ1c2VTdGF0ZSIsImltYWdlUHJldmlld1VybCIsInNldEltYWdlUHJldmlld1VybCIsIiRpbWFnZVByZXZpZXciLCJ1c2VFZmZlY3QiLCJoYW5kbGVJbWFnZUNoYW5nZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsIm9ubG9hZGVuZCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBeUI7QUFBQTs7QUFFcEMsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q0Ysc0RBQVEsQ0FBQyxFQUFELENBQXREO0FBRUEsTUFBSUcsYUFBYSxHQUFHLElBQXBCO0FBQ0FDLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlILGVBQUosRUFBcUI7QUFDbkJFLG1CQUFhLEdBQUk7QUFBSyxXQUFHLEVBQUVGLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFqQjtBQUNELEtBRkQsTUFHSTtBQUNBRSxtQkFBYSxHQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0RBQWY7QUFDSDtBQUNGLEdBUFEsRUFPTixDQUFDTCxJQUFELEVBQU9HLGVBQVAsQ0FQTSxDQUFUO0FBU0FHLHlEQUFTLENBQUMsTUFBSTtBQUNaLFFBQUlELGFBQWEsR0FBRyxJQUFwQjtBQUNELEdBRlEsQ0FBVDs7QUFJQSxRQUFNRSxpQkFBaUIsR0FBSUMsQ0FBRCxJQUFNO0FBQzlCQSxLQUFDLENBQUNDLGNBQUY7QUFFQSxRQUFJQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFiO0FBQ0EsUUFBSVgsSUFBSSxHQUFHUSxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FBWDs7QUFFQUgsVUFBTSxDQUFDSSxTQUFQLEdBQW1CLE1BQU07QUFDdkI7Ozs7QUFJQWIsYUFBTyxDQUFDRCxJQUFELENBQVA7QUFDQUksd0JBQWtCLENBQUNNLE1BQU0sQ0FBQ0ssTUFBUixDQUFsQixDQU51QixDQU92QjtBQUNELEtBUkQ7O0FBU0FMLFVBQU0sQ0FBQ00sYUFBUCxDQUFxQmhCLElBQXJCO0FBQ0QsR0FoQkQ7O0FBcUJBLFNBQ0UsbUVBRUU7QUFBdUMsUUFBSSxFQUFDLE1BQTVDO0FBQW1ELFlBQVEsRUFBRU8saUJBQTdEO0FBQUEsd0NBQWlCLHFCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRTtBQUFBLHdDQUFlLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRixhQURMLENBSEY7QUFBQTtBQUFBO0FBQUEsa2lKQURGO0FBb0JIO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTdEd0JQLFM7O0tBQUFBLFMiLCJmaWxlIjoiLi9jb21wb25lbnRzL3BldHMvUGV0QXZhdGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGV0QXZhdGFyKHByb3BzKXtcbiAgXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2ltYWdlUHJldmlld1VybCwgc2V0SW1hZ2VQcmV2aWV3VXJsXSA9IHVzZVN0YXRlKCcnKVxuICAgIFxuICAgIGxldCAkaW1hZ2VQcmV2aWV3ID0gbnVsbDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgaWYgKGltYWdlUHJldmlld1VybCkge1xuICAgICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtpbWFnZVByZXZpZXdVcmx9IC8+KTtcbiAgICAgIH1cbiAgICAgIGVsc2V7XG4gICAgICAgICAgJGltYWdlUHJldmlldz0oPGRpdiA+UGxlYXNlIHNlbGNldCBhbiBSYXRhIGRlIGNhbXBvIEltYWdlPC9kaXY+KVxuICAgICAgfVxuICAgIH0sIFtmaWxlLCBpbWFnZVByZXZpZXdVcmxdKVxuXG4gICAgdXNlRWZmZWN0KCgpPT57XG4gICAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XG4gICAgfSlcbiAgICBcbiAgICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PntcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuXG4gICAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgICAvKnRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgICAgaW1hZ2VQcmV2aWV3VXJsOiByZWFkZXIucmVzdWx0XG4gICAgICAgIH0pOyovXG4gICAgICAgIHNldEZpbGUoZmlsZSlcbiAgICAgICAgc2V0SW1hZ2VQcmV2aWV3VXJsKHJlYWRlci5yZXN1bHQpXG4gICAgICAgIC8vcHJvcHMub25BZGRBdmF0YXIocmVhZGVyLnJlc3VsdClcbiAgICAgIH1cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuXG4gICAgXG4gICBcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIFxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRha1wiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e2hhbmRsZUltYWdlQ2hhbmdlfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1ByZXZpZXdcIj5cbiAgICAgICAgICAgIHskaW1hZ2VQcmV2aWV3fVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgICAgIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8Lz5cbiAgICApXG5cbn1cbi8qXG5jbGFzcyBQZXRBdmF0YXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlsZTogJycsXG4gICAgICBpbWFnZVByZXZpZXdVcmw6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlID0gdGhpcy5oYW5kbGVJbWFnZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIFRPRE86IGRvIHNvbWV0aGluZyB3aXRoIC0+IHRoaXMuc3RhdGUuZmlsZVxuICB9XG5cbiAgaGFuZGxlSW1hZ2VDaGFuZ2UoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XG5cbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpbGU6IGZpbGUsXG4gICAgICAgIGltYWdlUHJldmlld1VybDogcmVhZGVyLnJlc3VsdFxuICAgICAgfSk7XG4gICAgICB0aGlzLnByb3BzLm9uQWRkQXZhdGFyKHJlYWRlci5yZXN1bHQpXG4gICAgfVxuXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcbiAgfVxuICAvKlxuICByZW5kZXIoKSB7XG4gICAgbGV0IHtpbWFnZVByZXZpZXdVcmx9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XG4gICAgaWYgKGltYWdlUHJldmlld1VybCkge1xuICAgICAgJGltYWdlUHJldmlldyA9ICg8aW1nIHNyYz17aW1hZ2VQcmV2aWV3VXJsfSAvPik7XG4gICAgfVxuICAgIGVsc2V7XG4gICAgICAgICRpbWFnZVByZXZpZXc9KDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1RleHRcIj5QbGVhc2Ugc2VsY3QgYW4gUmF0YSBkZSBjYW1wbyBJbWFnZTwvZGl2PilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcmV2aWV3Q29tcG9uZW50XCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYWtcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUltYWdlQ2hhbmdlfSAvPlxuICAgICAgICB7Lyo8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdH0+RW52aWFyPC9idXR0b24+ICp9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XG4gICAgICAgICAgICB7JGltYWdlUHJldmlld31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXRBdmF0YXJcbiovIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/pets/PetAvatar.js\n");

/***/ })

})