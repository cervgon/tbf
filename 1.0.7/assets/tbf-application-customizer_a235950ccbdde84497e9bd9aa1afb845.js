define("58ff9bf7-ba41-4814-9483-d60be22d6ce7_0.0.1",["@microsoft/decorators","@microsoft/sp-application-base"],function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=(n.n(o),n(2)),a=(n.n(r),this&&this.__extends||function(){var e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};return function(t,n){function o(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}()),s=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(s=(a<3?r(s):a>3?r(t,n,s):r(t,n))||s);return a>3&&s&&Object.defineProperty(t,n,s),s},i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.removeLinks=function(){setTimeout(function(){document.querySelectorAll('[data-navigationcomponent="SiteHeader"]')[0].removeAttribute("href"),document.querySelectorAll('[data-navigationcomponent="SiteHeader"]')[1].removeAttribute("href")},1e3)},t}return a(t,e),t.prototype.onInit=function(){var e=document.createElement("style");e.innerHTML='\n    [class*=o365sx-navbar], [class*=searchResultsContainer], [class*=sp-App-bodyMain], [class*=SPPageChrome-app]>div {\n      max-width: 1440px!important;\n      margin: 0 auto;\n      width: 100%;\n    }\n    [aria-label="Go to SharePoint"]{display:none !important}\n    [id*=O365_AppName] {\n      display: none!important;\n    }\n    [class*=o365sx-navbar] [class*=o365cs-base] [class*=o365sx-button], [class*=o365sx-navbar] [class*=o365cs-base][class*=o365sx-waffle], [class*=o365sx-navbar] [class*=o365cs-base] [class*=o365sx-waffle], [class*=o365sx-navbar] [class*=o365sx-button], [class*=o365sx-navbar] [class*=o365sx-waffle] {\n      background-color: #222!important;\n    }\n    [class*=o365sx-navbar] {\n      background-color: #222!important;\n    }\n    [class*=od-SuiteNav], [id*=SuiteNavPlaceHolder] {\n      background-color: #212121!important;\n    }\n    [aria-label="Click or enter to return to classic SharePoint"]{display:none !important}\n    [class*=o365cs-base] [class*=o365sx-appName]{background-color: transparent !important}\n    [id*=O365_NavHeader] [id*=CenterRegion] {width:calc(100% - 224px) !important}\n    [id*=O365_HeaderRightRegion] {margin-right:128px}\n    [data-automationid*="expandCollapseList"]{display: none !important}\n    ';var t=document.querySelector("script");return t.parentNode.insertBefore(e,t),this.removeLinks(),Promise.resolve()},t.prototype.onProvideServices=function(){this.removeLinks()},s([o.override],t.prototype,"onInit",null),s([o.override],t.prototype,"onProvideServices",null),t}(r.BaseApplicationCustomizer);t.default=i},function(t,n){t.exports=e},function(e,n){e.exports=t}])});