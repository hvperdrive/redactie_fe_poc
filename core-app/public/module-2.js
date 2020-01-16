window.MODULE_LOADER.addModuleSource('external-module-2', (require, exports) => {
	return ! function (e, t) {
		if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("react"), require("react-router-dom"), require("@wcm/core-module"));
		else if ("function" == typeof define && define.amd) define(["react", "react-router-dom", "@wcm/core-module"], t);
		else {
			var r = "object" == typeof exports ? t(require("react"), require("react-router-dom"), require("@wcm/core-module")) : t(e.react, e["react-router-dom"], e["@wcm/core-module"]);
			for (var o in r)("object" == typeof exports ? exports : e)[o] = r[o]
		}
	}(window, (function (e, t, r) {
		return function (e) {
			var t = {};

			function r(o) {
				if (t[o]) return t[o].exports;
				var n = t[o] = {
					i: o,
					l: !1,
					exports: {}
				};
				return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
			}
			return r.m = e, r.c = t, r.d = function (e, t, o) {
				r.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: o
				})
			}, r.r = function (e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}, r.t = function (e, t) {
				if (1 & t && (e = r(e)), 8 & t) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var o = Object.create(null);
				if (r.r(o), Object.defineProperty(o, "default", {
						enumerable: !0,
						value: e
					}), 2 & t && "string" != typeof e)
					for (var n in e) r.d(o, n, function (t) {
						return e[t]
					}.bind(null, n));
				return o
			}, r.n = function (e) {
				var t = e && e.__esModule ? function () {
					return e.default
				} : function () {
					return e
				};
				return r.d(t, "a", t), t
			}, r.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, r.p = "", r(r.s = 3)
		}([function (t, r) {
			t.exports = e
		}, function (e, r) {
			e.exports = t
		}, function (e, t) {
			e.exports = r
		}, function (e, t, r) {
			"use strict";
			r.r(t);
			var o = r(0),
				n = r.n(o),
				u = r(1),
				c = r(2),
				i = function () {
					return n.a.createElement("div", null, n.a.createElement("h3", null, " Child route 2"), n.a.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis incidunt in eum modi pariatur accusantium. Inventore asperiores id molestiae expedita laborum iusto sequi corrupti. Beatae eius atque numquam rerum?"))
				},
				a = function () {
					var e = Object(u.useRouteMatch)();
					return n.a.createElement("div", null, n.a.createElement("h1", null, "External Module Route 2"), n.a.createElement("nav", null, n.a.createElement(u.Link, {
						to: "".concat(e.path, "/child-route")
					}, " child route ")), n.a.createElement(u.Switch, null, n.a.createElement(u.Route, {
						path: "".concat(e.path, "/child-route")
					}, n.a.createElement(i, null))))
				};
			c.wcmCore.registerRoute({
				path: "/external-module-2",
				component: a
			}), c.wcmCore.exposeModuleApi("external-module-2", {
				someprop: "custom api prop"
			}), t.default = {
				mainRouteComponent: a
			}
		}])
	}));
})
