(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("PrismicDOM", [], factory);
	else if(typeof exports === 'object')
		exports["PrismicDOM"] = factory();
	else
		root["PrismicDOM"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("PrismicHelpers",[],t):"object"==typeof exports?exports.PrismicHelpers=t():e.PrismicHelpers=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(2),o=r(u),i=n(1),f=r(i);e.exports={Link:o.default,Date:f.default}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return null;var t=24==e.length?e.substring(0,22)+":"+e.substring(22,24):e;return new Date(t)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={url:function(e,t){return"Document"===e.link_type?t?t(e,e.isBroken):"":e.url}}},function(e,t,n){e.exports=n(0)}])});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _prismicHelpers = __webpack_require__(0);

var _prismicHelpers2 = _interopRequireDefault(_prismicHelpers);

var _richtext = __webpack_require__(2);

var _richtext2 = _interopRequireDefault(_richtext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = { Date: _prismicHelpers2.default.Date, RichText: _richtext2.default, Link: _prismicHelpers2.default.Link };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prismicRichtext = __webpack_require__(3);

var _prismicRichtext2 = _interopRequireDefault(_prismicRichtext);

var _prismicHelpers = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function serialize(linkResolver, type, element, content, children) {
  switch (type) {
    case _prismicRichtext.Elements.heading1:
      return serializeStandardTag('h1', element, children);
    case _prismicRichtext.Elements.heading2:
      return serializeStandardTag('h2', element, children);
    case _prismicRichtext.Elements.heading3:
      return serializeStandardTag('h3', element, children);
    case _prismicRichtext.Elements.heading4:
      return serializeStandardTag('h4', element, children);
    case _prismicRichtext.Elements.heading5:
      return serializeStandardTag('h5', element, children);
    case _prismicRichtext.Elements.heading6:
      return serializeStandardTag('h6', element, children);
    case _prismicRichtext.Elements.paragraph:
      return serializeStandardTag('p', element, children);
    case _prismicRichtext.Elements.preformatted:
      return serializeStandardTag('pre', element, children);
    case _prismicRichtext.Elements.strong:
      return serializeStandardTag('strong', element, children);
    case _prismicRichtext.Elements.em:
      return serializeStandardTag('em', element, children);
    case _prismicRichtext.Elements.listItem:
      return serializeStandardTag('li', element, children);
    case _prismicRichtext.Elements.oListItem:
      return serializeStandardTag('li', element, children);
    case _prismicRichtext.Elements.list:
      return serializeStandardTag('ul', element, children);
    case _prismicRichtext.Elements.oList:
      return serializeStandardTag('ol', element, children);
    case _prismicRichtext.Elements.image:
      return serializeImage(linkResolver, element);
    case _prismicRichtext.Elements.embed:
      return serializeEmbed(element);
    case _prismicRichtext.Elements.hyperlink:
      return serializeHyperlink(linkResolver, element, children);
    case _prismicRichtext.Elements.label:
      return serializeLabel(element, children);
    case _prismicRichtext.Elements.span:
      return serializeSpan(content);
    default:
      return '';
  }
}

function label(element) {
  return element.label ? ' class="' + element.label + '"' : '';
}
function serializeStandardTag(tag, element, children) {
  return '<' + tag + label(element) + '>' + children.join('') + '</' + tag + '>';
}

function serializeImage(linkResolver, element) {
  var linkUrl = element.linkTo ? _prismicHelpers.Link.url(element.linkTo, linkResolver) : null;
  var wrapperClassList = [element.label || '', 'block-img'];
  var img = '<img src="' + element.url + '" alt="' + (element.alt || '') + '" copyright="' + (element.copyright || '') + '">';

  return '\n    <p class=' + wrapperClassList.join(' ') + '>\n      ' + (linkUrl ? '<a href="' + linkUrl + '">' + img + '</a>' : img) + '\n    </p>\n  ';
}

function serializeEmbed(element) {
  return '\n    <div data-oembed="' + element.embed_url + '"\n      data-oembed-type="' + element.type + '"\n      data-oembed-provider="' + element.provider_name + '"\n      ' + label(element) + '>\n          \n      ' + element.oembed.html + '\n    </div>\n  ';
}

function serializeHyperlink(linkResolver, element, children) {
  return '<a href="' + _prismicHelpers.Link.url(element.data, linkResolver) + '">' + children.join('') + '</a>';
}

function serializeLabel(element, children) {
  return '<span ' + label(element.data) + '>' + children.join('') + '</span>';
}

function serializeSpan(content) {
  return content ? content.replace(/\n/g, "<br />") : '';
}

exports.default = {
  asText: function asText(structuredText) {
    return _prismicRichtext2.default.asText(structuredText);
  },
  asHtml: function asHtml(richText, linkResolver, htmlSerializer) {
    var serialized = _prismicRichtext2.default.serialize(richText, serialize.bind(null, linkResolver), htmlSerializer);
    return serialized.join('');
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e() : "function" == typeof define && define.amd ? define("PrismicRichtext", [], e) : "object" == typeof exports ? exports.PrismicRichtext = e() : t.PrismicRichtext = e();
}(this, function () {
  return function (t) {
    function e(i) {
      if (n[i]) return n[i].exports;var r = n[i] = { i: i, l: !1, exports: {} };return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
    }var n = {};return e.m = t, e.c = n, e.d = function (t, n, i) {
      e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i });
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };return e.d(n, "a", n), n;
    }, e.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, e.p = "", e(e.s = 2);
  }([function (t, e, n) {
    "use strict";
    function i(t, e, n) {
      void 0 === t && (t = "");var i = n - e;return t.substr(e, i);
    }function r(t, e) {
      void 0 === e && (e = []);var n = e.map(function (e) {
        return new l(e.start, e.end, e.type, e, [], i(t, e.start, e.end));
      }),
          r = new l(0, t.length, o.ElementKind[o.ElementKind.span], {}, [], t),
          s = [r].concat(n);return function e(n) {
        if (0 === n.length) return [];var i = a(n),
            r = i[0],
            s = i.slice(1),
            o = u(t, r, s instanceof Array ? s : [s]),
            c = o[0],
            d = o[1];return [r.addChildren(c)].concat(e(d));
      }(s);
    }function a(t) {
      return t.sort(function (t, e) {
        if (e.contains(t)) return o.Element.isSpan(e) ? -1 : 1;var n = c[t.type] - c[e.type];return 0 === n ? t.length() - e.length() : n;
      });
    }function u(t, e, n) {
      function r(e, n, r) {
        var a = i(t, n, r);return e.copy({ start: n, end: r, text: a });
      }return n.reduce(function (t, n) {
        var i = t[0],
            a = t[1],
            u = function () {
          if (e.contains(n)) return [[n], null];if (n.isOutside(e)) return [null, [n]];if (n.contains(e)) {
            var t = n.copy({ start: e.start, end: e.end, text: e.text });return [[t], [e.start > n.start ? r(n, n.start, e.start) : null, e.end < n.end ? r(n, e.end, n.end) : null].filter(function (t) {
              return null !== t;
            })];
          }if (e.start <= n.start && e.end < n.end) {
            var t = r(n, n.start, e.end),
                i = r(n, e.end, n.end);return [[t], [i]];
          }if (e.start > n.start && e.end >= n.end) {
            var t = r(n, e.start, n.end),
                i = r(n, n.start, e.start);return [[t], [i]];
          }return [[], []];
        }(),
            s = u[0],
            o = u[1];return [i.concat(s || []), a.concat(o || [])];
      }, [[], []]);
    }e.__esModule = !0;var s = n(4),
        o = n(1),
        c = (h = {}, h[o.ElementKind[o.ElementKind.heading1]] = 4, h[o.ElementKind[o.ElementKind.heading2]] = 4, h[o.ElementKind[o.ElementKind.heading4]] = 4, h[o.ElementKind[o.ElementKind.heading4]] = 4, h[o.ElementKind[o.ElementKind.heading5]] = 4, h[o.ElementKind[o.ElementKind.heading6]] = 4, h[o.ElementKind[o.ElementKind.paragraph]] = 3, h[o.ElementKind[o.ElementKind.preformatted]] = 5, h[o.ElementKind[o.ElementKind.strong]] = 6, h[o.ElementKind[o.ElementKind.em]] = 6, h[o.ElementKind[o.ElementKind["list-item"]]] = 1, h[o.ElementKind[o.ElementKind["o-list-item"]]] = 1, h[o.ElementKind[o.ElementKind["group-list-item"]]] = 1, h[o.ElementKind[o.ElementKind["group-o-list-item"]]] = 1, h[o.ElementKind[o.ElementKind.image]] = 1, h[o.ElementKind[o.ElementKind.embed]] = 1, h[o.ElementKind[o.ElementKind.hyperlink]] = 3, h[o.ElementKind[o.ElementKind.label]] = 4, h[o.ElementKind[o.ElementKind.span]] = 7, h),
        d = function () {
      function t(t) {
        this.root = t;
      }return t.create = function (e) {
        return new t({ key: s.default(), children: e });
      }, t.fromRichText = function (e) {
        var n = e.reduce(function (t, e) {
          if (o.Element.containsText(e)) {
            var n = r(e.text, e.spans),
                a = n.sort(function (t, e) {
              return t.start - e.start;
            }),
                u = e.text.length - 1,
                s = t.length > 0 ? t[t.length - 1] : null;if (o.Element.isListItem(e) && o.Element.isList(s)) {
              var c = s,
                  d = new l(0, u, e.type, e, a, i(e.text, 0, u)),
                  h = c.children.concat([d]),
                  f = c.copy({ children: h });return t.slice(0, t.length - 1).concat([f]);
            }if (o.Element.isOrderedListItem(e) && o.Element.isOrderedList(s)) {
              var c = s,
                  m = new l(0, u, e.type, e, a, i(e.text, 0, u)),
                  h = c.children.concat([m]),
                  p = c.copy({ children: h });return t.slice(0, t.length - 1).concat([p]);
            }if (o.Element.isListItem(e)) {
              var d = new l(0, u, e.type, e, a, i(e.text, 0, u)),
                  f = new l(0, u, o.ElementKindAsObj.list, {}, [d]);return t.concat([f]);
            }if (o.Element.isOrderedListItem(e)) {
              var m = new l(0, u, e.type, e, a, i(e.text, 0, u)),
                  p = new l(0, u, o.ElementKindAsObj.oList, {}, [m]);return t.concat([p]);
            }return t.concat(new l(0, u, e.type, e, a, i(e.text, 0, u)));
          }return t.concat(new l(0, 0, e.type, e, []));
        }, []);return t.create(n);
      }, t;
    }();e.Tree = d;var l = function () {
      function t(t, e, n, i, r, a) {
        void 0 === r && (r = []), this.key = s.default(), this.start = t, this.end = e, this.type = n, this.text = a, this.raw = i, this.children = r;
      }return t.prototype.contains = function (t) {
        return this.start <= t.start && this.end >= t.end;
      }, t.prototype.isOutside = function (t) {
        return this.start < t.start && this.end <= t.start || this.start >= t.end && this.end > t.end;
      }, t.prototype.copy = function (e) {
        return new t(e.start || this.start, e.end || this.end, e.type || this.type, e.raw || this.raw, e.children || this.children, e.text || this.text);
      }, t.prototype.add = function (t) {
        return this.children.reduce(function (e, n) {
          return n.contains(t) ? n.add(t) : null;
        }, null) || this.copy({ children: this.children.concat([t]) });
      }, t.prototype.addChildren = function (e) {
        return new t(this.start, this.end, this.type, this.raw, function (t, e, n) {
          return n.reduce(function (t, e) {
            return 0 === t.length ? t.concat([e]) : t.reduce(function (t, n) {
              return n.contains(e) ? t.concat([n.add(e)]) : e.contains(n) ? t.concat([e.add(n)]) : t.concat([n, e]);
            }, []);
          }, e);
        }(0, this.children, e), this.text);
      }, t.prototype.length = function () {
        return this.start - this.end;
      }, t;
    }();e.Leaf = l;var h;
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;var i,
        r = n(5);!function (t) {
      t[t.heading1 = 0] = "heading1", t[t.heading2 = 1] = "heading2", t[t.heading3 = 2] = "heading3", t[t.heading4 = 3] = "heading4", t[t.heading5 = 4] = "heading5", t[t.heading6 = 5] = "heading6", t[t.paragraph = 6] = "paragraph", t[t.preformatted = 7] = "preformatted", t[t.strong = 8] = "strong", t[t.em = 9] = "em", t[t["list-item"] = 10] = "list-item", t[t["o-list-item"] = 11] = "o-list-item", t[t["group-list-item"] = 12] = "group-list-item", t[t["group-o-list-item"] = 13] = "group-o-list-item", t[t.image = 14] = "image", t[t.embed = 15] = "embed", t[t.hyperlink = 16] = "hyperlink", t[t.label = 17] = "label", t[t.span = 18] = "span";
    }(i = e.ElementKind || (e.ElementKind = {})), e.ElementKindAsObj = { heading1: "heading1", heading2: "heading2", heading3: "heading3", heading4: "heading4", heading5: "heading5", heading6: "heading6", paragraph: "paragraph", preformatted: "preformatted", strong: "strong", em: "em", listItem: "list-item", oListItem: "o-list-item", list: "group-list-item", oList: "group-o-list-item", image: "image", embed: "embed", hyperlink: "hyperlink", label: "label", span: "span" };var a = function () {
      function t(t, e, n) {
        switch (this.value = t, this.level = e, this.content = n, e) {case 1:
            this.kind = i.heading1;break;case 2:
            this.kind = i.heading2;break;case 3:
            this.kind = i.heading3;break;case 4:
            this.kind = i.heading4;break;case 5:
            this.kind = i.heading5;break;case 6:
            this.kind = i.heading6;break;default:
            throw Error("Invalid heading level " + e);}
      }return t;
    }();e.Heading = a;var u = function () {
      function t(t, e, n) {
        this.value = t, this.organized = e, this.content = n;
      }return t;
    }();e.ListItem = u;var s = function () {
      function t(t, e) {
        this.organized = e, this.value = t;
      }return t;
    }();e.List = s;var o = function () {
      function t(t, e) {
        this.kind = i.paragraph, this.value = t, this.content = e;
      }return t;
    }();e.Paragraph = o;var c = function () {
      function t(t, e) {
        this.kind = i.preformatted, this.value = t, this.content = e;
      }return t;
    }();e.Preformatted = c;var d = function () {
      function t(t, e) {
        this.kind = i.strong, this.value = t, this.content = e;
      }return t;
    }();e.Strong = d;var l = function () {
      function t(t, e) {
        this.kind = i.em, this.value = t, this.content = e;
      }return t;
    }();e.Emphasized = l;var h = function () {
      function t(t, e, n) {
        this.kind = i.image, this.value = t, this.url = this.value.url, this.content = e, this.linkUrl = t.linkTo ? r.Link.url(t.linkTo, n) : null;
      }return t;
    }();e.Image = h;var f = function () {
      function t(t, e) {
        this.kind = i.embed, this.value = t, this.content = e;
      }return t;
    }();e.Embed = f;var m = function () {
      function t(t, e, n) {
        this.kind = i.hyperlink, this.value = t, this.content = e, this.url = r.Link.url(t, n);
      }return t;
    }();e.Link = m;var p = function () {
      function t(t, e) {
        this.kind = i.label, this.value = t, this.content = e;
      }return t;
    }();e.Label = p;var g = function () {
      function t(t, e) {
        this.kind = i.span, this.value = t, this.content = e;
      }return t;
    }();e.Span = g, e.Element = { containsText: function (t) {
        return !("image" === t.type || "embed" === t.type);
      }, isList: function (t) {
        return !!t && e.ElementKindAsObj.list === t.type;
      }, isOrderedList: function (t) {
        return !!t && e.ElementKindAsObj.oList === t.type;
      }, isListItem: function (t) {
        return !!t && e.ElementKindAsObj.listItem === t.type;
      }, isOrderedListItem: function (t) {
        return !!t && e.ElementKindAsObj.oListItem === t.type;
      }, isSpan: function (t) {
        return !!t && e.ElementKindAsObj.span === t.type;
      }, apply: function (t, e, n) {
        switch (t.type) {case "heading1":
            return new a(t, 1, e);case "heading2":
            return new a(t, 2, e);case "heading3":
            return new a(t, 3, e);case "heading4":
            return new a(t, 4, e);case "heading5":
            return new a(t, 5, e);case "heading6":
            return new a(t, 6, e);case "paragraph":
            return new o(t, e);case "preformatted":
            return new c(t, e);case "strong":
            return new d(t, e);case "em":
            return new l(t, e);case "list-item":
            return new u(t, !1, e);case "o-list-item":
            return new u(t, !0, e);case "image":
            return new h(t, e, n);case "embed":
            return new f(t, e);case "hyperlink":
            return new m(t, e, n);case "label":
            return new p(t, e);case "span":
            return new g(t, e);default:
            throw new Error("Invalid element type " + t.type + " on element : " + JSON.stringify(t));}
      } };
  }, function (t, e, n) {
    t.exports = n(3);
  }, function (t, e, n) {
    "use strict";
    e.__esModule = !0;var i = n(0),
        r = n(6),
        a = n(1);t.exports = { asText: function (t) {
        return t.reduce(function (t, e) {
          return t + " " + e.text;
        }, "\n");
      }, asTree: i.Tree.fromRichText, serialize: r.default, Elements: a.ElementKindAsObj };
  }, function (t, e, n) {
    "use strict";
    function i() {
      var t = new Date().getTime();return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var n = (t + 16 * Math.random()) % 16 | 0;return t = Math.floor(t / 16), ("x" == e ? n : 3 & n | 8).toString(16);
      });
    }e.__esModule = !0, e.default = i;
  }, function (t, e, n) {
    !function (e, n) {
      t.exports = function () {
        return function (t) {
          function e(i) {
            if (n[i]) return n[i].exports;var r = n[i] = { i: i, l: !1, exports: {} };return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
          }var n = {};return e.m = t, e.c = n, e.i = function (t) {
            return t;
          }, e.d = function (t, n, i) {
            e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: i });
          }, e.n = function (t) {
            var n = t && t.__esModule ? function () {
              return t.default;
            } : function () {
              return t;
            };return e.d(n, "a", n), n;
          }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }, e.p = "", e(e.s = 3);
        }([function (t, e, n) {
          "use strict";
          function i(t) {
            return t && t.__esModule ? t : { default: t };
          }var r = n(2),
              a = i(r),
              u = n(1),
              s = i(u);t.exports = { Link: a.default, Date: s.default };
        }, function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }), e.default = function (t) {
            if (!t) return null;var e = 24 == t.length ? t.substring(0, 22) + ":" + t.substring(22, 24) : t;return new Date(e);
          };
        }, function (t, e, n) {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 }), e.default = { url: function (t, e) {
              return "Document" === t.link_type ? e ? e(t, t.isBroken) : "" : t.url;
            } };
        }, function (t, e, n) {
          t.exports = n(0);
        }]);
      }();
    }();
  }, function (t, e, n) {
    "use strict";
    function i(t, e, n) {
      return a.Tree.fromRichText(t).root.children.map(function (t) {
        return r(t, e, n);
      });
    }function r(t, e, n) {
      function i(t) {
        var r = t.children.reduce(function (t, e) {
          return t.concat([i(e)]);
        }, []);return n && n(t, t.text) || e(t.type, t.raw, t.text || null, r);
      }return i(t);
    }e.__esModule = !0;var a = n(0);e.default = i;
  }]);
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});