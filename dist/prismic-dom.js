(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PrismicDOM", [], factory);
	else if(typeof exports === 'object')
		exports["PrismicDOM"] = factory();
	else
		root["PrismicDOM"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@prismicio/helpers/dist/prismic-helpers.min.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@prismicio/helpers/dist/prismic-helpers.min.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(\"undefined\"!=typeof self?self:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o}},function(e,t,n){e.exports={url:function(e,t){var n=e&&e.value?e.value.document:e;if(e&&[e.type,e.link_type,e._linkType,e.linkType].some((function(e){return e&&[\"Document\",\"Link.Document\",\"Link.document\"].includes(e)}))&&t&&\"function\"==typeof t){var r=t(n);if(r)return r}return n&&n.url?n.url:\"\"}}},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?\"\".concat(e.substring(0,22),\":\").concat(e.substring(22,24)):e;return new Date(t)}}])}));\n\n//# sourceURL=webpack://PrismicDOM/./node_modules/@prismicio/helpers/dist/prismic-helpers.min.js?");

/***/ }),

/***/ "./node_modules/@prismicio/richtext/dist/prismic-richtext.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@prismicio/richtext/dist/prismic-richtext.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,t){ true?module.exports=t():undefined}(\"undefined\"!=typeof self?self:this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&\"object\"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,\"default\",{enumerable:!0,value:e}),2&t&&\"string\"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,\"a\",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p=\"\",n(n.s=4)}([function(e,t,n){\"use strict\";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,\"__esModule\",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:\"heading1\",heading2:\"heading2\",heading3:\"heading3\",heading4:\"heading4\",heading5:\"heading5\",heading6:\"heading6\",paragraph:\"paragraph\",preformatted:\"preformatted\",strong:\"strong\",em:\"em\",listItem:\"list-item\",oListItem:\"o-list-item\",list:\"group-list-item\",oList:\"group-o-list-item\",image:\"image\",embed:\"embed\",hyperlink:\"hyperlink\",label:\"label\",span:\"span\"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r,o=n(7),i=n(2),u=n(8),c=n(0),a=(r=n(3))&&r.__esModule?r:{default:r};function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||\"[object Arguments]\"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError(\"Invalid attempt to destructure non-iterable instance\")}()}function f(e,t){var n=t.others.reduce(function(n,r){var o=n.inner,u=n.outer,c=function(e,t,n){return n.start<t.start?{inner:i.SpanNode.slice(n,t.start,n.end,e),outer:i.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:i.SpanNode.slice(n,n.start,t.end,e),outer:i.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return{inner:o.concat(c.inner),outer:c.outer?u.concat(c.outer):u}},{inner:[],outer:[]}),r=n.inner,o=n.outer;return[t.elected.setChildren(y(e,r,t.elected.boundaries()))].concat(h(e,o))}function d(e){return function(e,t){return t.reduce(function(t,n){var r=(0,o.last)(t);if(r){if(r.some(function(e){return e.isParentOf(n)}))return(0,o.init)(t).concat([r.concat(n)]);var i=(0,o.last)(r);return i&&e(i,n)?(0,o.init)(t).concat([r.concat(n)]):t.concat([[n]])}return[[n]]},[])}(function(e,t){return e.end>=t.start},(0,o.sort)(e,function(e,t){return n=t,e.start-n.start||function(e,t){return e.end-t.end}(e,t);var n}))}function p(e){if(0===e.length)throw new Error(\"Unable to elect node on empty list\");var t=s(e.sort(function(e,t){if(e.isParentOf(t))return-1;if(t.isParentOf(e))return 1;var n=c.PRIORITIES[e.type]-c.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n}));return{elected:t[0],others:t.slice(1)}}function y(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce(function(r,o,u){var c=[],a=0===u&&o.start>n.lower,l=u===t.length-1&&n.upper>o.end;if(a){var s=new i.TextNode(n.lower,o.start,e.slice(n.lower,o.start));c=c.concat(s)}else{var f=t[u-1];if(f&&o.start>f.end){var d=e.slice(f.end,o.start),p=new i.TextNode(f.end,o.start,d);c=c.concat(p)}}if(c=c.concat(o),l){var y=new i.TextNode(o.end,n.upper,e.slice(o.end,n.upper));c=c.concat(y)}return r.concat(c)},[])}(e,h(e,t),n);var r=e.slice(n.lower,n.upper);return[new i.TextNode(n.lower,n.upper,r)]}function h(e,t){var n=d((0,o.sort)(t,function(e,t){return e.start-t.start})).map(p),r=(0,o.flatten)(n.map(function(t){return f(e,t)}));return(0,o.sort)(r,function(e,t){return e.start-t.start})}var v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e)}var t,n,r;return t=e,r=[{key:\"fromRichText\",value:function(e){return{key:(0,a.default)(),children:e.reduce(function(e,t,n){if(u.RichTextBlock.isEmbedBlock(t.type)||u.RichTextBlock.isImageBlock(t.type))return e.concat(new i.BlockNode(t.type,t));var r=function(e){var t=(e.spans||[]).map(function(t){var n=e.text.slice(t.start,t.end);return new i.SpanNode(t.start,t.end,t.type,n,[],t)}),n={lower:0,upper:e.text.length};return y(e.text,t,n)}(t),c=e[e.length-1];if(u.RichTextBlock.isListItem(t.type)&&c&&c instanceof i.ListBlockNode){var a=new i.ListItemBlockNode(t,r),l=c.addChild(a);return(0,o.init)(e).concat(l)}if(u.RichTextBlock.isOrderedListItem(t.type)&&c&&c instanceof i.OrderedListBlockNode){var s=new i.OrderedListItemBlockNode(t,r),f=c.addChild(s);return(0,o.init)(e).concat(f)}if(u.RichTextBlock.isListItem(t.type)){var d=new i.ListItemBlockNode(t,r),p=new i.ListBlockNode(u.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(u.RichTextBlock.isOrderedListItem(t.type)){var h=new i.OrderedListItemBlockNode(t,r),v=new i.OrderedListBlockNode(u.RichTextBlock.emptyOrderedList(),[h]);return e.concat(v)}return e.concat(new i.BlockNode(t.type,t,r))},[])}}}],(n=null)&&l(t.prototype,n),r&&l(t,r),e}();t.default=v},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(3))&&r.__esModule?r:{default:r},i=n(0);function u(e){return(u=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function l(e,t){if(\"function\"!=typeof t&&null!==t)throw new TypeError(\"Super expression must either be null or a function\");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return function(){var t,n=d(e);if(function(){if(\"undefined\"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if(\"function\"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var r=d(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return function(e,t){if(t&&(\"object\"===u(t)||\"function\"==typeof t))return t;return function(e){if(void 0===e)throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");return e}(e)}(this,t)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}var y=function e(t,n,r){p(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r};t.Node=y;var h=function(e){l(n,y);var t=f(n);function n(e,r,o,i,u,c){var a;return p(this,n),(a=t.call(this,o,c,u)).start=e,a.end=r,a.text=i,a.children=u,a}return a(n,[{key:\"boundaries\",value:function(){return{lower:this.start,upper:this.end}}},{key:\"isParentOf\",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:\"setChildren\",value:function(e){return new n(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:\"slice\",value:function(e,t,r,o){return new n(t,r,e.type,o.slice(t,r),e.children,e.element)}}]),n}();t.SpanNode=h;var v=function(e){l(n,h);var t=f(n);function n(e,r,o){p(this,n);var u={type:i.NODE_TYPES.span,start:e,end:r,text:o};return t.call(this,e,r,i.NODE_TYPES.span,o,[],u)}return n}();t.TextNode=v;var m=function(e){l(n,y);var t=f(n);function n(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return p(this,n),t.call(this,e,r,o)}return n}();t.BlockNode=m;var b=function(e){l(n,m);var t=f(n);function n(e,r){return p(this,n),t.call(this,i.NODE_TYPES.listItem,e,r)}return n}();t.ListItemBlockNode=b;var x=function(e){l(n,m);var t=f(n);function n(e,r){return p(this,n),t.call(this,i.NODE_TYPES.oListItem,e,r)}return n}();t.OrderedListItemBlockNode=x;var O=function(e){l(n,m);var t=f(n);function n(e,r){return p(this,n),t.call(this,i.NODE_TYPES.oList,e,r)}return a(n,[{key:\"addChild\",value:function(e){var t=this.children.concat(e);return new n(this.element,t)}}]),n}();t.OrderedListBlockNode=O;var g=function(e){l(n,m);var t=f(n);function n(e,r){return p(this,n),t.call(this,i.NODE_TYPES.list,e,r)}return a(n,[{key:\"addChild\",value:function(e){var t=this.children.concat(e);return new n(this.element,t)}}]),n}();t.ListBlockNode=g},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=function(){var e=(new Date).getTime();return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(/[xy]/g,function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),(\"x\"==t?n:3&n|8).toString(16)})}},function(e,t,n){e.exports=n(5)},function(e,t,n){\"use strict\";var r=c(n(6)),o=c(n(1)),i=c(n(9)),u=n(0);function c(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r=function(e,t){var n=\"string\"==typeof t?t:\" \";return e.map(function(e){return e.text}).join(n)};t.default=r},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.init=function(e){return e.slice(0,-1)},t.last=function(e){return e[e.length-1]},t.flatten=function(e){var t=[],n=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var c=i.value;Array.isArray(c)?t.push.apply(t,c):t.push(c)}}catch(e){r=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}return t},t.sort=function(e,t){return function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||\"[object Arguments]\"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError(\"Invalid attempt to spread non-iterable instance\")}()}(e).sort(t)}},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.RichTextBlock=void 0;var r=n(0);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,\"value\"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError(\"Cannot call a class as a function\")}(this,e),this.type=t,this.text=n,this.spans=r}var t,n,i;return t=e,i=[{key:\"isEmbedBlock\",value:function(e){return e===r.NODE_TYPES.embed}},{key:\"isImageBlock\",value:function(e){return e===r.NODE_TYPES.image}},{key:\"isList\",value:function(e){return e===r.NODE_TYPES.list}},{key:\"isOrderedList\",value:function(e){return e===r.NODE_TYPES.oList}},{key:\"isListItem\",value:function(e){return e===r.NODE_TYPES.listItem}},{key:\"isOrderedListItem\",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:\"emptyList\",value:function(){return{type:r.NODE_TYPES.list,spans:[],text:\"\"}}},{key:\"emptyOrderedList\",value:function(){return{type:r.NODE_TYPES.oList,spans:[],text:\"\"}}}],(n=null)&&o(t.prototype,n),i&&o(t,i),e}();t.RichTextBlock=i},function(e,t,n){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0}),t.default=void 0;var r,o=(r=n(1))&&r.__esModule?r:{default:r},i=n(2);var u=function(e,t,n){return o.default.fromRichText(e).children.map(function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,c=n.children.reduce(function(t,n,r){return t.concat([e(n,r)])},[]),a=r&&r(n.type,n.element,u,c,o);return a||t(n.type,n.element,u,c,o)}(e,n)}(e,t,r,n)})};t.default=u}])});\n\n//# sourceURL=webpack://PrismicDOM/./node_modules/@prismicio/richtext/dist/prismic-richtext.min.js?");

/***/ }),

/***/ "./node_modules/escape-html/index.js":
/*!*******************************************!*\
  !*** ./node_modules/escape-html/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * escape-html\n * Copyright(c) 2012-2013 TJ Holowaychuk\n * Copyright(c) 2015 Andreas Lubbe\n * Copyright(c) 2015 Tiancheng \"Timothy\" Gu\n * MIT Licensed\n */\n\n\n\n/**\n * Module variables.\n * @private\n */\n\nvar matchHtmlRegExp = /[\"'&<>]/;\n\n/**\n * Module exports.\n * @public\n */\n\nmodule.exports = escapeHtml;\n\n/**\n * Escape special characters in the given string of html.\n *\n * @param  {string} string The string to escape for inserting into HTML\n * @return {string}\n * @public\n */\n\nfunction escapeHtml(string) {\n  var str = '' + string;\n  var match = matchHtmlRegExp.exec(str);\n\n  if (!match) {\n    return str;\n  }\n\n  var escape;\n  var html = '';\n  var index = 0;\n  var lastIndex = 0;\n\n  for (index = match.index; index < str.length; index++) {\n    switch (str.charCodeAt(index)) {\n      case 34: // \"\n        escape = '&quot;';\n        break;\n      case 38: // &\n        escape = '&amp;';\n        break;\n      case 39: // '\n        escape = '&#39;';\n        break;\n      case 60: // <\n        escape = '&lt;';\n        break;\n      case 62: // >\n        escape = '&gt;';\n        break;\n      default:\n        continue;\n    }\n\n    if (lastIndex !== index) {\n      html += str.substring(lastIndex, index);\n    }\n\n    lastIndex = index + 1;\n    html += escape;\n  }\n\n  return lastIndex !== index\n    ? html + str.substring(lastIndex, index)\n    : html;\n}\n\n\n//# sourceURL=webpack://PrismicDOM/./node_modules/escape-html/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var PrismicHelpers = __webpack_require__(/*! @prismicio/helpers */ \"./node_modules/@prismicio/helpers/dist/prismic-helpers.min.js\");\n\nvar RichText = __webpack_require__(/*! ./richtext */ \"./src/richtext.js\");\n\nvar Date = PrismicHelpers.Date,\n    Link = PrismicHelpers.Link;\nmodule.exports = {\n  Date: Date,\n  Link: Link,\n  RichText: RichText\n};\n\n//# sourceURL=webpack://PrismicDOM/./src/index.js?");

/***/ }),

/***/ "./src/richtext.js":
/*!*************************!*\
  !*** ./src/richtext.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var PrismicRichText = __webpack_require__(/*! @prismicio/richtext */ \"./node_modules/@prismicio/richtext/dist/prismic-richtext.min.js\");\n\nvar _require = __webpack_require__(/*! @prismicio/helpers */ \"./node_modules/@prismicio/helpers/dist/prismic-helpers.min.js\"),\n    LinkHelper = _require.Link;\n\nvar escapeHtml = __webpack_require__(/*! escape-html */ \"./node_modules/escape-html/index.js\");\n\nvar Elements = PrismicRichText.Elements;\n\nfunction serialize(linkResolver, type, element, content, children) {\n  switch (type) {\n    case Elements.heading1:\n      return serializeStandardTag('h1', element, children);\n\n    case Elements.heading2:\n      return serializeStandardTag('h2', element, children);\n\n    case Elements.heading3:\n      return serializeStandardTag('h3', element, children);\n\n    case Elements.heading4:\n      return serializeStandardTag('h4', element, children);\n\n    case Elements.heading5:\n      return serializeStandardTag('h5', element, children);\n\n    case Elements.heading6:\n      return serializeStandardTag('h6', element, children);\n\n    case Elements.paragraph:\n      return serializeStandardTag('p', element, children);\n\n    case Elements.preformatted:\n      return serializePreFormatted(element);\n\n    case Elements.strong:\n      return serializeStandardTag('strong', element, children);\n\n    case Elements.em:\n      return serializeStandardTag('em', element, children);\n\n    case Elements.listItem:\n      return serializeStandardTag('li', element, children);\n\n    case Elements.oListItem:\n      return serializeStandardTag('li', element, children);\n\n    case Elements.list:\n      return serializeStandardTag('ul', element, children);\n\n    case Elements.oList:\n      return serializeStandardTag('ol', element, children);\n\n    case Elements.image:\n      return serializeImage(linkResolver, element);\n\n    case Elements.embed:\n      return serializeEmbed(element);\n\n    case Elements.hyperlink:\n      return serializeHyperlink(linkResolver, element, children);\n\n    case Elements.label:\n      return serializeLabel(element, children);\n\n    case Elements.span:\n      return serializeSpan(content);\n\n    default:\n      return '';\n  }\n}\n\nfunction label(element) {\n  return element.label ? \" class=\\\"\".concat(element.label, \"\\\"\") : '';\n}\n\nfunction serializeStandardTag(tag, element, children) {\n  return \"<\".concat(tag).concat(label(element), \">\").concat(children.join(''), \"</\").concat(tag, \">\");\n}\n\nfunction serializePreFormatted(element) {\n  return \"<pre\".concat(label(element), \">\").concat(escapeHtml(element.text), \"</pre>\");\n}\n\nfunction serializeImage(linkResolver, element) {\n  var linkUrl = element.linkTo ? LinkHelper.url(element.linkTo, linkResolver) : null;\n  var linkTarget = element.linkTo && element.linkTo.target ? \"target=\\\"\".concat(element.linkTo.target, \"\\\" rel=\\\"noopener\\\"\") : '';\n  var wrapperClassList = [element.label || '', 'block-img'];\n  var img = \"<img src=\\\"\".concat(element.url, \"\\\" alt=\\\"\").concat(element.alt ? escapeHtml(element.alt) : '', \"\\\" copyright=\\\"\").concat(element.copyright ? escapeHtml(element.copyright) : '', \"\\\" />\");\n  return \"\\n    <p class=\\\"\".concat(wrapperClassList.join(' '), \"\\\">\\n      \").concat(linkUrl ? \"<a \".concat(linkTarget, \" href=\\\"\").concat(linkUrl, \"\\\">\").concat(img, \"</a>\") : img, \"\\n    </p>\\n  \");\n}\n\nfunction serializeEmbed(element) {\n  return \"\\n    <div data-oembed=\\\"\".concat(element.oembed.embed_url, \"\\\"\\n      data-oembed-type=\\\"\").concat(element.oembed.type, \"\\\"\\n      data-oembed-provider=\\\"\").concat(element.oembed.provider_name, \"\\\"\\n      \").concat(label(element), \">\\n\\n      \").concat(element.oembed.html, \"\\n    </div>\\n  \");\n}\n\nfunction serializeHyperlink(linkResolver, element, children) {\n  var target = element.data.target ? \"target=\\\"\".concat(element.data.target, \"\\\" rel=\\\"noopener\\\"\") : '';\n  var url = escapeHtml(LinkHelper.url(element.data, linkResolver));\n  return \"<a \".concat(target, \" href=\\\"\").concat(url, \"\\\">\").concat(children.join(''), \"</a>\");\n}\n\nfunction serializeLabel(element, children) {\n  return \"<span \".concat(label(element.data), \">\").concat(children.join(''), \"</span>\");\n}\n\nfunction serializeSpan(content) {\n  return content ? escapeHtml(content).replace(/\\n/g, '<br />') : '';\n}\n\nmodule.exports = {\n  asText: function asText(structuredText, joinString) {\n    return PrismicRichText.asText(structuredText, joinString);\n  },\n  asHtml: function asHtml(richText, linkResolver, htmlSerializer) {\n    var serialized = PrismicRichText.serialize(richText, serialize.bind(null, linkResolver), htmlSerializer);\n    return serialized.join('');\n  },\n  Elements: Elements\n};\n\n//# sourceURL=webpack://PrismicDOM/./src/richtext.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! D:\\Libraries\\Desktop\\prismic\\sdk\\dom/src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack://PrismicDOM/multi_./src/index.js?");

/***/ })

/******/ });
});