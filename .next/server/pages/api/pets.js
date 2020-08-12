module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/pets/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/pets/index.js":
/*!*********************************!*\
  !*** ./pages/api/pets/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gatos = [];\n/*\n      {\n        \"nombre\": \"Fidel\",\n        \"edad\": 2,\n        \"peso\": \"6kg\",\n        \"descripcion\": \"Gato blanco y negro\",\n        \"avatar\": \"/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg\"\n      },\n      {\n        \"nombre\": \"Fidel\",\n        \"edad\": 2,\n        \"peso\": \"6kg\",\n        \"descripcion\": \"Gato blanco y negro\",\n        \"avatar\": \"/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg\"\n      },\n      {\n        \"nombre\": \"Fidel\",\n        \"edad\": 2,\n        \"peso\": \"6kg\",\n        \"descripcion\": \"Gato blanco y negro\",\n        \"avatar\": \"/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg\"\n      },\n      {\n        \"nombre\": \"Fidel\",\n        \"edad\": 2,\n        \"peso\": \"6kg\",\n        \"descripcion\": \"Gato blanco y negro\",\n        \"avatar\": \"/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg\"\n      },\n      {\n        \"nombre\": \"Fidel\",\n        \"edad\": 2,\n        \"peso\": \"6kg\",\n        \"descripcion\": \"Gato blanco y negro\",\n        \"avatar\": \"/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg\"\n      },\n      {\n        \"nombre\": \"Fidel\",\n        \"edad\": 2,\n        \"peso\": \"6kg\",\n        \"descripcion\": \"Gato blanco y negro\",\n        \"avatar\": \"/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg\"\n      },\n      {\n        \"nombre\": \"Fidel\",\n        \"edad\": 2,\n        \"peso\": \"6kg\",\n        \"descripcion\": \"Gato blanco y negro\",\n        \"avatar\": \"/home/gercos/Documents/web/gercos-app/resources/fidel.jpeg\"\n      }\n    ]\n\n\n*/\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  res.statusCode = 200;\n  res.setHeader(\"Content-Type\", \"application/json\");\n  res.send(JSON.stringify(gatos));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcGV0cy9pbmRleC5qcz84OTI2Il0sIm5hbWVzIjpbImdhdG9zIiwicmVxIiwicmVzIiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsInNlbmQiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLE1BQU1BLEtBQUssR0FBRyxFQUFkO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RGUsZ0VBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQzNCQSxLQUFHLENBQUNDLFVBQUosR0FBaUIsR0FBakI7QUFDQUQsS0FBRyxDQUFDRSxTQUFKLENBQWMsY0FBZCxFQUE4QixrQkFBOUI7QUFDQUYsS0FBRyxDQUFDRyxJQUFKLENBQVNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxLQUFmLENBQVQ7QUFDRCxDQUpEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3BldHMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnYXRvcyA9IFtdXG4vKlxuICAgICAge1xuICAgICAgICBcIm5vbWJyZVwiOiBcIkZpZGVsXCIsXG4gICAgICAgIFwiZWRhZFwiOiAyLFxuICAgICAgICBcInBlc29cIjogXCI2a2dcIixcbiAgICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkdhdG8gYmxhbmNvIHkgbmVncm9cIixcbiAgICAgICAgXCJhdmF0YXJcIjogXCIvaG9tZS9nZXJjb3MvRG9jdW1lbnRzL3dlYi9nZXJjb3MtYXBwL3Jlc291cmNlcy9maWRlbC5qcGVnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibm9tYnJlXCI6IFwiRmlkZWxcIixcbiAgICAgICAgXCJlZGFkXCI6IDIsXG4gICAgICAgIFwicGVzb1wiOiBcIjZrZ1wiLFxuICAgICAgICBcImRlc2NyaXBjaW9uXCI6IFwiR2F0byBibGFuY28geSBuZWdyb1wiLFxuICAgICAgICBcImF2YXRhclwiOiBcIi9ob21lL2dlcmNvcy9Eb2N1bWVudHMvd2ViL2dlcmNvcy1hcHAvcmVzb3VyY2VzL2ZpZGVsLmpwZWdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJub21icmVcIjogXCJGaWRlbFwiLFxuICAgICAgICBcImVkYWRcIjogMixcbiAgICAgICAgXCJwZXNvXCI6IFwiNmtnXCIsXG4gICAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJHYXRvIGJsYW5jbyB5IG5lZ3JvXCIsXG4gICAgICAgIFwiYXZhdGFyXCI6IFwiL2hvbWUvZ2VyY29zL0RvY3VtZW50cy93ZWIvZ2VyY29zLWFwcC9yZXNvdXJjZXMvZmlkZWwuanBlZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5vbWJyZVwiOiBcIkZpZGVsXCIsXG4gICAgICAgIFwiZWRhZFwiOiAyLFxuICAgICAgICBcInBlc29cIjogXCI2a2dcIixcbiAgICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkdhdG8gYmxhbmNvIHkgbmVncm9cIixcbiAgICAgICAgXCJhdmF0YXJcIjogXCIvaG9tZS9nZXJjb3MvRG9jdW1lbnRzL3dlYi9nZXJjb3MtYXBwL3Jlc291cmNlcy9maWRlbC5qcGVnXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibm9tYnJlXCI6IFwiRmlkZWxcIixcbiAgICAgICAgXCJlZGFkXCI6IDIsXG4gICAgICAgIFwicGVzb1wiOiBcIjZrZ1wiLFxuICAgICAgICBcImRlc2NyaXBjaW9uXCI6IFwiR2F0byBibGFuY28geSBuZWdyb1wiLFxuICAgICAgICBcImF2YXRhclwiOiBcIi9ob21lL2dlcmNvcy9Eb2N1bWVudHMvd2ViL2dlcmNvcy1hcHAvcmVzb3VyY2VzL2ZpZGVsLmpwZWdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJub21icmVcIjogXCJGaWRlbFwiLFxuICAgICAgICBcImVkYWRcIjogMixcbiAgICAgICAgXCJwZXNvXCI6IFwiNmtnXCIsXG4gICAgICAgIFwiZGVzY3JpcGNpb25cIjogXCJHYXRvIGJsYW5jbyB5IG5lZ3JvXCIsXG4gICAgICAgIFwiYXZhdGFyXCI6IFwiL2hvbWUvZ2VyY29zL0RvY3VtZW50cy93ZWIvZ2VyY29zLWFwcC9yZXNvdXJjZXMvZmlkZWwuanBlZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5vbWJyZVwiOiBcIkZpZGVsXCIsXG4gICAgICAgIFwiZWRhZFwiOiAyLFxuICAgICAgICBcInBlc29cIjogXCI2a2dcIixcbiAgICAgICAgXCJkZXNjcmlwY2lvblwiOiBcIkdhdG8gYmxhbmNvIHkgbmVncm9cIixcbiAgICAgICAgXCJhdmF0YXJcIjogXCIvaG9tZS9nZXJjb3MvRG9jdW1lbnRzL3dlYi9nZXJjb3MtYXBwL3Jlc291cmNlcy9maWRlbC5qcGVnXCJcbiAgICAgIH1cbiAgICBdXG5cblxuKi9cblxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5zdGF0dXNDb2RlID0gMjAwXG4gIHJlcy5zZXRIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpXG4gIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KGdhdG9zKSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/pets/index.js\n");

/***/ })

/******/ });