import { C as e, Ct as t, E as n, H as r, O as i, S as a, W as o, _ as s, _t as c, bt as l, l as u, tt as d, ut as f, xt as p, y as m } from "../modules/shiki-BdJWbgyq.js";
import { H as h, Q as g, t as _ } from "./useNav-CEJIfsQz.js";
import { P as v } from "../modules/vue-BdHhyihZ.js";
import { i as y } from "../shared-9xxIzB5f.js";
//#region node_modules/@slidev/client/internals/CurrentProgressBar.vue?vue&type=script&setup=true&lang.ts
var b = { class: "relative flex gap-px" }, x = /* @__PURE__ */ i({
	__name: "CurrentProgressBar",
	props: {
		clicksContext: {},
		current: {}
	},
	setup(i) {
		let c = i, f = _(), h = m(() => {
			var e;
			return (e = c.clicksContext) == null ? f.clicksContext.value : e;
		}), g = m(() => {
			var e;
			return (e = c.current) == null ? f.currentSlideNo.value : e;
		}), { total: v } = f;
		return (i, c) => (r(), e("div", b, [(r(!0), e(s, null, o(l(v) - 1, (i) => (r(), e("div", {
			key: i,
			class: p(["border-x border-b border-main h-4px transition-all", i < g.value ? "bg-primary border-primary" : ""]),
			style: t({ width: `${1 / (l(v) - 1) * 100}%` })
		}, [n(u, { name: "fade" }, {
			default: d(() => [i === g.value ? (r(), e("div", {
				key: 0,
				class: "h-full bg-primary op75 transition-all",
				style: t({ width: `${h.value.total === 0 ? 0 : h.value.current / (h.value.total + 1) * 100}%` })
			}, null, 4)) : a("v-if", !0)]),
			_: 2
		}, 1024)], 6))), 128))]));
	}
});
//#endregion
//#region node_modules/@slidev/client/composables/useTimer.ts
function S() {
	let e = m(() => g.timer || "stopwatch"), t = m(() => h(g.duration).seconds), n = v(100, { controls: !0 }), r = c(y, "timer"), i = m(() => {
		var e;
		return (e = r.value) == null ? void 0 : e.status;
	}), a = m(() => (n.counter.value, r.value.status === "stopped" || !r.value.startedAt ? 0 : r.value.status === "paused" ? r.value.pausedAt - r.value.startedAt : Date.now() - r.value.startedAt)), o = m(() => a.value / 1e3), s = m(() => o.value / t.value * 100), l = m(() => {
		if (e.value === "stopwatch" && (r.value.status === "stopped" || !r.value.startedAt)) return {
			h: "",
			m: "-",
			s: "--",
			ms: "-"
		};
		let n = e.value === "countdown" ? t.value * 1e3 - a.value : a.value, i = Math.floor(n / 1e3 / 60 / 60).toString();
		i === "0" && (i = "");
		let o = Math.floor(n / 1e3 / 60 % 60).toString();
		i && (o = o.padStart(2, "0"));
		let s = Math.floor(n / 1e3 % 60).toString().padStart(2, "0"), c = Math.floor(n % 1e3 / 100).toString();
		return {
			h: i,
			m: o,
			s,
			ms: c
		};
	});
	function u() {
		n.pause(), r.value = {
			status: "stopped",
			slides: {},
			startedAt: 0,
			pausedAt: 0
		};
	}
	function d() {
		var e;
		r.value && (((e = r.value) == null ? void 0 : e.status) === "stopped" ? (r.value.status = "running", r.value.startedAt = Date.now()) : r.value.status === "paused" && (r.value.status = "running", r.value.startedAt = Date.now() - (r.value.pausedAt - r.value.startedAt)), n.resume());
	}
	function f() {
		r.value.status = "paused", r.value.pausedAt = Date.now(), n.pause();
	}
	function p() {
		r.value.status === "running" ? f() : d();
	}
	return {
		state: r,
		status: i,
		timer: l,
		reset: u,
		toggle: p,
		resume: d,
		pause: f,
		passed: o,
		percentage: s,
		duration: t,
		mode: e
	};
}
//#endregion
//#region node_modules/@slidev/client/internals/TimerBar.vue?vue&type=script&setup=true&lang.ts
var C = { class: "border-b mt-px border-main relative flex h-4px" }, w = /* @__PURE__ */ i({
	__name: "TimerBar",
	setup(n) {
		let i = f(S()), o = m(() => i.status === "stopped" ? "op50" : i.status === "paused" ? "bg-blue" : i.percentage > 100 ? "bg-red" : i.percentage > 80 ? "bg-yellow" : "bg-green");
		return (n, s) => (r(), e("div", C, [i.status === "stopped" ? a("v-if", !0) : (r(), e("div", {
			key: 0,
			class: p(["h-4px", o.value]),
			style: t({ width: `${i.percentage}%` })
		}, null, 6)), a(" {{ timesplits }} ")]));
	}
});
//#endregion
export { S as n, x as r, w as t };
