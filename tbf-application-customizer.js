define("58ff9bf7-ba41-4814-9483-d60be22d6ce7_0.0.1", ["@microsoft/decorators","@microsoft/sp-application-base"], function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_application_base__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__microsoft_sp_application_base___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_application_base__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LOG_SOURCE = 'TbfApplicationCustomizer';
/** A Custom Action which can be run during execution of a Client Side Application */
var TbfApplicationCustomizer = (function (_super) {
    __extends(TbfApplicationCustomizer, _super);
    function TbfApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TbfApplicationCustomizer.prototype.onInit = function () {
        var style = document.createElement('style');
        style.innerHTML =
            "\n    [class*=o365sx-navbar], [class*=searchResultsContainer], [class*=sp-App-bodyMain], [class*=SPPageChrome-app]>div {\n      max-width: 1440px!important;\n      margin: 0 auto;\n      width: 100%;\n    }\n    [aria-label=\"Go to SharePoint\"]{display:none !important}\n    [id*=O365_AppName] {\n      display: none!important;\n    }\n    [class*=o365sx-navbar] [class*=o365cs-base] [class*=o365sx-button], [class*=o365sx-navbar] [class*=o365cs-base][class*=o365sx-waffle], [class*=o365sx-navbar] [class*=o365cs-base] [class*=o365sx-waffle], [class*=o365sx-navbar] [class*=o365sx-button], [class*=o365sx-navbar] [class*=o365sx-waffle] {\n      background-color: #222!important;\n    }\n    [class*=o365sx-navbar] {\n      background-color: #222!important;\n    }\n    [class*=od-SuiteNav], [id*=SuiteNavPlaceHolder] {\n      background-color: #212121!important;\n    }\n    ";
        var ref = document.querySelector('script');
        ref.parentNode.insertBefore(style, ref);
        return Promise.resolve();
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0__microsoft_decorators__["override"]
    ], TbfApplicationCustomizer.prototype, "onInit", null);
    return TbfApplicationCustomizer;
}(__WEBPACK_IMPORTED_MODULE_1__microsoft_sp_application_base__["BaseApplicationCustomizer"]));
/* harmony default export */ __webpack_exports__["default"] = (TbfApplicationCustomizer);



/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ])});;
//# sourceMappingURL=tbf-application-customizer.js.map