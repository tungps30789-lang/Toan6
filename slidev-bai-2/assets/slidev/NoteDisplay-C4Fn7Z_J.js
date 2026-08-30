import { $ as e, B as t, C as n, Ct as r, H as i, I as a, O as o, Q as s, S as c, W as l, _ as u, b as d, bt as f, ft as p, st as m, wt as h, xt as g, y as _ } from "../modules/shiki-BdJWbgyq.js";
import { $ as v, et as y } from "./useNav-CEJIfsQz.js";
import { l as b } from "./context-NjknmJDY.js";
//#region node_modules/@slidev/client/internals/ClicksSlider.vue?vue&type=script&setup=true&lang.ts
var x = ["title"], S = {
	key: 0,
	"flex-auto": ""
}, C = { "text-primary": "" }, w = {
	op50: "",
	"text-sm": ""
}, T = {
	key: 0,
	absolute: "",
	"inset-y-0": "",
	"right-0": "",
	"w-0.5": "",
	"bg-primary": "",
	"z-1": ""
}, E = /* @__PURE__ */ o({
	__name: "ClicksSlider",
	props: {
		clicksContext: {},
		readonly: { type: Boolean },
		active: {
			type: Boolean,
			default: !0
		},
		resettable: { type: Boolean },
		compact: { type: Boolean },
		attached: { type: Boolean }
	},
	emits: ["activate", "reset"],
	setup(e, { emit: t }) {
		let a = e, o = t, s = _(() => a.clicksContext.total), E = _(() => v(0, a.clicksContext.clicksStart, s.value)), D = _(() => s.value - E.value + 1), O = _({
			get() {
				return a.resettable && !a.active || a.clicksContext.current > s.value ? -1 : a.clicksContext.current;
			},
			set(e) {
				if (a.resettable && e < 0) {
					o("reset"), a.clicksContext.current = b;
					return;
				}
				o("activate"), a.clicksContext.current = e;
			}
		}), k = _(() => a.resettable && O.value < 0), A = _(() => y(E.value, s.value + 1)), j = p(), M;
		function N(e) {
			let t = j.value.getBoundingClientRect();
			return (e.clientX - t.left) / Math.max(1, t.width);
		}
		function P(e, t) {
			if (a.readonly || !j.value || !t && !(e.buttons & 1)) return;
			let n = N(e);
			if (a.resettable && n < 0) {
				O.value = -1;
				return;
			}
			let r = v(0, n, t ? .999999 : 1) * D.value, i = v(0, O.value - E.value, D.value - 1), o = t ? E.value + Math.floor(r) : O.value;
			!t && r >= i + 1.5 ? o = E.value + Math.floor(r - .5) : !t && r < i - .5 && (o = E.value + Math.ceil(r - .5)), O.value = v(E.value, o, s.value);
		}
		function F(e) {
			var t;
			a.readonly || ((t = j.value) == null || t.setPointerCapture(e.pointerId), M = {
				id: e.pointerId,
				x: e.clientX,
				y: e.clientY
			}, P(e, !0));
		}
		function I(e) {
			if ((M == null ? void 0 : M.id) === e.pointerId) {
				if (Math.abs(e.clientX - M.x) <= 3 && Math.abs(e.clientY - M.y) <= 3) return;
				M = void 0;
			}
			P(e, !1);
		}
		return (t, o) => (i(), n("div", {
			class: g(["flex gap-1 select-none", [e.attached ? "items-end" : "items-center", D.value && a.clicksContext.isMounted ? "" : "op50"]]),
			title: `Clicks in this slide: ${D.value}`
		}, [d("div", { class: g(["flex items-center font-mono", [e.compact ? "gap-1 min-w-0 mr0" : "gap-0.2 min-w-16 mr1", e.attached ? "h-[22px]" : ""]]) }, [d("div", { class: g(["i-carbon:cursor-1 text-sm op50", e.compact ? "ml-1" : ""]) }, null, 2), O.value >= 0 && O.value !== f(999999) && e.active ? (i(), n(u, { key: 0 }, [e.compact ? c("v-if", !0) : (i(), n("div", S)), d("span", null, [
			d("span", C, h(O.value), 1),
			o[2] || (o[2] = d("span", {
				op25: "",
				"text-sm": ""
			}, "/", -1)),
			d("span", w, h(s.value), 1)
		])], 64)) : (i(), n("div", {
			key: 1,
			op50: "",
			class: g(e.compact ? "" : "flex-auto pl1")
		}, [d("span", {
			class: g(e.compact ? "inline-block text-center" : ""),
			style: r(e.compact ? {
				width: `${String(s.value).length * 2 + 1}ch`,
				marginLeft: "-0.25ch"
			} : void 0)
		}, h(s.value), 7)], 2))], 2), d("div", {
			ref_key: "sliderEl",
			ref: j,
			relative: "",
			"flex-auto": "",
			"font-mono": "",
			flex: "~",
			"touch-none": "",
			class: g([e.attached ? "h-[22px]" : "h5", k.value ? "op80" : ""]),
			onPointerdownCapture: F,
			onPointermove: I,
			onPointerup: o[0] || (o[0] = (e) => m(M) ? M.value = void 0 : M = void 0),
			onPointercancel: o[1] || (o[1] = (e) => m(M) ? M.value = void 0 : M = void 0)
		}, [(i(!0), n(u, null, l(A.value, (t) => (i(), n("div", {
			key: t,
			border: "y main",
			"of-hidden": "",
			relative: "",
			class: g([
				t === 0 ? "border-l" : "",
				t === 0 ? e.attached ? "rounded-tl" : "rounded-l" : "",
				t === s.value ? "border-r" : "",
				t === s.value && +t != +O.value ? e.attached ? "rounded-tr" : "rounded-r" : "",
				e.attached ? "border-b-0" : ""
			]),
			style: r({ width: D.value > 0 ? `${1 / D.value * 100}%` : "100%" })
		}, [
			d("div", {
				absolute: "",
				"inset-0": "",
				class: g(t <= O.value && e.active ? "bg-primary op15" : "")
			}, null, 2),
			+t == +O.value && e.active ? (i(), n("div", T)) : c("v-if", !0),
			d("div", {
				class: g([+t == +O.value && e.active ? "text-primary font-bold op100" : "op30", t === s.value ? "" : "border-r-2 border-main"]),
				"w-full": "",
				"h-full": "",
				"text-xs": "",
				flex: "",
				"items-center": "",
				"justify-center": "",
				"z-1": ""
			}, h(t), 3)
		], 6))), 128))], 34)], 10, x));
	}
}), D = ["innerHTML"], O = ["textContent"], k = ["textContent"], A = "slidev-note-fade", j = "slidev-note-click-mark", M = /* @__PURE__ */ o({
	__name: "NoteDisplay",
	props: {
		class: {},
		noteHtml: {},
		note: {},
		highlight: {
			type: Boolean,
			default: !0
		},
		placeholder: {},
		clicksContext: {},
		autoScroll: { type: Boolean }
	},
	emits: ["markerDblclick", "markerClick"],
	setup(r, { emit: o }) {
		let c = r, l = o, u = _(() => {
			var e;
			return c.clicksContext != null && ((e = c.noteHtml) == null ? void 0 : e.includes(j));
		}), f = p(null);
		function m() {
			if (!f.value || !u.value) return;
			let e = Array.from(f.value.querySelectorAll(`.${j}`)), t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map(), r = 0;
			for (let i of e) {
				let e = Number(i.dataset.clicks);
				t.set(i, e);
				let a = i, o = i.parentElement;
				for (; o && a !== f.value;) n.has(o) || n.set(o, [[null, r]]), n.get(o).push([a, e]), a = o, o = o.parentElement;
				r = e;
			}
			let i = /* @__PURE__ */ new Map();
			for (let [e, t] of n) {
				let n = !1, r = 0;
				for (let s of Array.from(e.childNodes)) {
					var a;
					let c = !1;
					for (; s === ((a = t[r + 1]) == null ? void 0 : a[0]);) c = !0, r++;
					if (c) continue;
					let l = s;
					if (s.nodeType === 3) {
						var o;
						if (!((o = s.textContent) != null && o.trim())) continue;
						l = document.createElement("span"), l.textContent = s.textContent, e.insertBefore(l, s), s.remove();
					}
					n || (n = r === 0), i.set(l, t[r][1]);
				}
				n || (t[0][1] = -1);
			}
			return (e) => {
				let r = c.highlight;
				for (let [t, i] of n) t.classList.toggle(A, r && !i.some(([t, n]) => n === e));
				for (let [t, n] of i) t.classList.toggle(A, r && n !== e);
				for (let [n, i] of t) n.classList.remove(A), n.classList.toggle(`${j}-past`, r && i < e), n.classList.toggle(`${j}-active`, r && i === e), n.classList.toggle(`${j}-next`, r && i === e + 1), n.classList.toggle(`${j}-future`, r && i > e + 1), n.ondblclick = (e) => {
					r && (l("markerDblclick", e, i), !e.defaultPrevented && (c.clicksContext.current = i, e.stopPropagation(), e.stopImmediatePropagation()));
				}, n.onclick = (e) => {
					r && l("markerClick", e, i);
				}, r && c.autoScroll && i === e && n.scrollIntoView({
					block: "center",
					behavior: "smooth"
				});
			};
		}
		let v = p();
		return s(() => [c.noteHtml, c.highlight], () => {
			a(() => {
				v.value = m();
			});
		}, { immediate: !0 }), t(() => {
			m();
		}), e(() => {
			var e, t, n;
			let r = (e = (t = c.clicksContext) == null ? void 0 : t.current) == null ? b : e;
			(n = v.value) == null || n.call(v, r);
		}), (e, t) => r.noteHtml ? (i(), n("div", {
			key: 0,
			ref_key: "noteDisplay",
			ref: f,
			class: g(["prose dark:prose-invert overflow-auto outline-none slidev-note", [c.class, u.value ? "slidev-note-with-clicks" : ""]]),
			innerHTML: r.noteHtml
		}, null, 10, D)) : r.note ? (i(), n("div", {
			key: 1,
			class: g(["prose dark:prose-invert overflow-auto outline-none slidev-note", c.class])
		}, [d("p", { textContent: h(r.note) }, null, 8, O)], 2)) : (i(), n("div", {
			key: 2,
			class: g(["prose dark:prose-invert overflow-auto outline-none opacity-50 italic select-none slidev-note", c.class])
		}, [d("p", { textContent: h(c.placeholder || "No notes.") }, null, 8, k)], 2));
	}
});
//#endregion
export { E as n, M as t };
