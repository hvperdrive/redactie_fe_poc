window.CORE.addModuleSource('external-module-2', (require, exports) => {
	return ! function (e, t) {
		if ("object" == typeof exports && "object" == typeof module) module.exports = t(require("React"));
		else if ("function" == typeof define && define.amd) define(["React"], t);
		else {
			var n = "object" == typeof exports ? t(require("React")) : t(e.React);
			for (var o in n)("object" == typeof exports ? exports : e)[o] = n[o]
		}
	}(window, (function (e) {
		return function (e) {
			var t = {};

			function n(o) {
				if (t[o]) return t[o].exports;
				var r = t[o] = {
					i: o,
					l: !1,
					exports: {}
				};
				return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
			}
			return n.m = e, n.c = t, n.d = function (e, t, o) {
				n.o(e, t) || Object.defineProperty(e, t, {
					enumerable: !0,
					get: o
				})
			}, n.r = function (e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
					value: "Module"
				}), Object.defineProperty(e, "__esModule", {
					value: !0
				})
			}, n.t = function (e, t) {
				if (1 & t && (e = n(e)), 8 & t) return e;
				if (4 & t && "object" == typeof e && e && e.__esModule) return e;
				var o = Object.create(null);
				if (n.r(o), Object.defineProperty(o, "default", {
						enumerable: !0,
						value: e
					}), 2 & t && "string" != typeof e)
					for (var r in e) n.d(o, r, function (t) {
						return e[t]
					}.bind(null, r));
				return o
			}, n.n = function (e) {
				var t = e && e.__esModule ? function () {
					return e.default
				} : function () {
					return e
				};
				return n.d(t, "a", t), t
			}, n.o = function (e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, n.p = "", n(n.s = 1)
		}([function (t, n) {
			t.exports = e
		}, function (e, t, n) {
			"use strict";
			n.r(t);
			var o = n(0),
				r = n.n(o);

			function u(e, t) {
				for (var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			var i = function () {
				return r.a.createElement("div", null, r.a.createElement("h1", null, "External Module Route 2"), r.a.createElement("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum facilis incidunt in eum modi pariatur accusantium. Inventore asperiores id molestiae expedita laborum iusto sequi corrupti. Beatae eius atque numquam rerum?"))
			};
			(new(function () {
				function e() {
					! function (e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, e)
				}
				var t, n, o;
				return t = e, (n = [{
					key: "exposeModuleApi",
					value: function (e, t) {
						window.CORE && window.CORE.exposeModuleApi && window.CORE.exposeModuleApi(e, t)
					}
				}]) && u(t.prototype, n), o && u(t, o), e
			}())).exposeModuleApi("external-module-2", {
				mainRouteComponent: i
			}), t.default = {
				mainRouteComponent: i
			}
		}])
	}));
})
