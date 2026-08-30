import { $ as e, B as t, C as n, Ct as r, E as i, H as a, O as o, Q as s, S as c, T as l, Z as u, _ as ee, b as d, bt as f, ft as p, ht as m, m as te, nt as h, o as g, s as _, st as ne, tt as v, wt as y, x as b, xt as x, y as S } from "../modules/shiki-BdJWbgyq.js";
import { O as re, U as ie, X as ae, a as oe, b as C, m as se, o as ce, t as le, w as ue, x as de } from "./useNav-CEJIfsQz.js";
import { t as w } from "../_plugin-vue_export-helper-B3ysoDQm.js";
import { t as fe } from "../vue.BHyNcdic-CBJ3DIw7.js";
import { _ as pe, h as T, p as E, w as me } from "../modules/vue-BdHhyihZ.js";
import { i as he } from "../shared-9xxIzB5f.js";
import { n as D } from "./useSlideInfo-BbQC2fgf.js";
import { i as ge, s as _e, t as ve } from "../SlideWrapper-BAhnJH9e.js";
import { t as ye } from "./DrawingControls-UfV_Eekh.js";
import { t as O } from "./IconButton-BREksc9A.js";
import { a as be, c as xe, d as Se, f as Ce, i as we, l as Te, n as Ee, o as De, r as Oe, s as ke, t as Ae, u as je } from "./shortcuts-CsZgd8aZ.js";
import { n as Me, t as k } from "./NoteDisplay-C4Fn7Z_J.js";
import { n as A, r as Ne, t as Pe } from "./TimerBar-0F75hoNz.js";
import "./NoteEditable-CMHX9-Bn.js";
//#endregion
//#region node_modules/@slidev/client/internals/NoteStatic.vue
var Fe = /* @__PURE__ */ o({
	__name: "NoteStatic",
	props: {
		no: {},
		class: {},
		clicksContext: {}
	},
	setup(e) {
		let t = e, { info: n } = D(t.no);
		return (r, i) => {
			var o, s;
			return a(), b(k, {
				class: x(t.class),
				note: (o = f(n)) == null ? void 0 : o.note,
				"note-html": (s = f(n)) == null ? void 0 : s.noteHTML,
				"clicks-context": e.clicksContext
			}, null, 8, [
				"class",
				"note",
				"note-html",
				"clicks-context"
			]);
		};
	}
}), j = {
	"h-full": "",
	"w-full": ""
}, M = {
	key: 0,
	"w-full": "",
	"h-full": "",
	flex: "~ col gap-4 items-center justify-center"
}, Ie = /* @__PURE__ */ o({
	__name: "ScreenCaptureMirror",
	setup(e) {
		let t = u("video"), r = m(null), i = m(!1);
		function o() {
			return s.apply(this, arguments);
		}
		function s() {
			return s = _(function* () {
				r.value = yield navigator.mediaDevices.getDisplayMedia({
					video: { cursor: "always" },
					audio: !1,
					selfBrowserSurface: "include",
					preferCurrentTab: !1
				}), t.value.srcObject = r.value, t.value.play(), i.value = !0, r.value.addEventListener("inactive", () => {
					t.value.srcObject = null, i.value = !1;
				}), r.value.addEventListener("ended", () => {
					t.value.srcObject = null, i.value = !1;
				});
			}), s.apply(this, arguments);
		}
		return (e, r) => (a(), n("div", j, [h(d("video", {
			ref_key: "video",
			ref: t,
			class: "w-full h-full object-contain"
		}, null, 512), [[te, i.value]]), i.value ? c("v-if", !0) : (a(), n("div", M, [r[0] || (r[0] = d("div", { op50: "" }, [
			l(" Use screen capturing to mirror your main screen back to presenter view."),
			d("br"),
			l(" Click the button below and "),
			d("b", null, "select your other monitor or window"),
			l(". ")
		], -1)), d("button", {
			class: "slidev-form-button",
			onClick: o
		}, " Start Screen Mirroring ")]))]));
	}
}), N = { class: "w-22px cursor-pointer" }, P = { class: "group-not-hover:hidden flex flex-col items-center" }, F = {
	key: 0,
	class: "i-carbon:pause text-lg"
}, I = {
	key: 1,
	class: "i-carbon:play"
}, L = { class: "text-3xl px-3 my-auto font-mono" }, Le = /* @__PURE__ */ o({
	__name: "TimerInlined",
	setup(e) {
		let { status: t, percentage: r, mode: i, timer: o, reset: s, toggle: l } = A(), u = S(() => t.value === "stopped" ? "op50" : t.value === "paused" ? "text-blue6 dark:text-blue3" : r.value > 100 ? "text-red6 dark:text-red3" : r.value > 80 ? "text-yellow6 dark:text-yellow3" : "text-green6 dark:text-green3");
		return (e, r) => (a(), n("div", { class: x(["group flex items-center justify-center pl-4 select-none", u.value]) }, [d("div", N, [d("div", { class: x(["group-hover:hidden text-2xl", f(i) === "countdown" ? "i-carbon:timer" : "i-carbon:time"]) }, null, 2), d("div", P, [d("div", {
			class: "relative op-80 hover:op-100",
			onClick: r[0] || (r[0] = (...e) => f(l) && f(l)(...e))
		}, [f(t) === "running" ? (a(), n("div", F)) : (a(), n("div", I))]), d("div", {
			class: "op-80 hover:op-100",
			onClick: r[1] || (r[1] = (...e) => f(s) && f(s)(...e))
		}, [...r[2] || (r[2] = [d("div", { class: "i-carbon:renew" }, null, -1)])])])]), d("div", L, [
			f(o).h ? (a(), n(ee, { key: 0 }, [d("span", null, y(f(o).h), 1), r[3] || (r[3] = d("span", { op50: "" }, ":", -1))], 64)) : c("v-if", !0),
			d("span", null, y(f(o).m), 1),
			r[4] || (r[4] = d("span", { op50: "" }, ":", -1)),
			d("span", null, y(f(o).s), 1)
		])], 2));
	}
}), Re = { class: "bg-main h-full slidev-presenter grid grid-rows-[max-content_1fr] of-hidden" }, ze = {
	flex: "~ gap-4 items-center",
	border: "b main",
	p1: ""
}, Be = { class: "relative grid-section next flex flex-col p-2 lg:p-4" }, Ve = {
	key: 2,
	class: "h-full flex justify-center items-center"
}, He = {
	key: 3,
	class: "h-full grid grid-rows-[1fr_min-content]"
}, R = /*#__PURE__*/ w(/* @__PURE__ */ o({
	__name: "presenter",
	setup(o) {
		let l = me(), u = p(), _ = p(), y = p(), w = p();
		Ae(), Ce(u), Se();
		let { clicksContext: D, currentSlideNo: k, currentSlideRoute: A, hasNext: j, nextRoute: M, slides: N, getPrimaryClicks: P } = le(), { isDrawing: F } = _e();
		fe({ title: `Presenter - ${ae}` }), p(!1);
		let I = S(() => N.value.map((e) => {
			var t, n;
			let r = p(0);
			return {
				context: ie(r, (t = e == null || (n = e.meta.slide) == null ? void 0 : n.frontmatter.clicksStart) == null ? 0 : t, e == null ? void 0 : e.meta.clicks),
				clicks: r
			};
		})), L = S(() => D.value.current < D.value.total ? [A.value, D.value.current + 1] : j.value ? [M.value, 0] : null), R = S(() => L.value && I.value[L.value[0].no - 1]);
		s(L, () => {
			R.value && L.value && (R.value.clicks.value = L.value[1]);
		}, { immediate: !0 });
		let z = T("slidev-presenter-main-slide-mode", "slides"), B = T("slidev-presenter-notes-width", 360), V = T("slidev-presenter-notes-row-size", 280), Ue = p(0), H = p(!1), U = p(!1), We = p(0), W = p(360), Ge = p(0), G = p(280), K = {
			minNotesWidth: 240,
			maxNotesWidth: 720,
			minNotesRowSize: 160,
			maxNotesWidthRatio: .7,
			maxNotesRowHeightRatio: .75
		}, Ke = pe("(min-aspect-ratio: 1/1)"), q = pe("(max-aspect-ratio: 3/5)"), J = S(() => C.value === 1 && Ke.value), Y = S(() => !(C.value === 1 && q.value)), X = S(() => C.value === 1 && !q.value || C.value === 2 || C.value === 3), qe = S(() => C.value === 1 && !q.value);
		function Je(e) {
			return Number.isFinite(e) ? Math.max(K.minNotesWidth, Math.min(K.maxNotesWidth, Math.round(e))) : K.minNotesWidth;
		}
		function Ye(e) {
			let t = _.value;
			if (!t) return;
			let n = t.getBoundingClientRect(), r = e - We.value, i = Je(J.value ? W.value - r : W.value + r), a = Math.round(n.width * K.maxNotesWidthRatio);
			B.value = Math.min(i, Math.max(K.minNotesWidth, a));
		}
		function Z(e) {
			Y.value && e.button === 0 && (e.preventDefault(), We.value = e.clientX, W.value = B.value, H.value = !0);
		}
		function Q(e) {
			return Number.isFinite(e) ? Math.max(K.minNotesRowSize, Math.round(e)) : K.minNotesRowSize;
		}
		function Xe(e) {
			let t = _.value;
			if (!t) return;
			let n = t.getBoundingClientRect(), r = e - Ge.value, i = qe.value ? G.value - r : G.value + r, a = Math.round(n.height * K.maxNotesRowHeightRatio);
			V.value = Math.min(Q(i), Math.max(K.minNotesRowSize, a));
		}
		function Ze(e) {
			var t, n;
			if (!X.value || e.button !== 0) return;
			e.preventDefault();
			let r = C.value === 2 ? (t = u.value) == null ? void 0 : t.getBoundingClientRect().height : (n = y.value) == null ? void 0 : n.getBoundingClientRect().height;
			Ge.value = e.clientY, G.value = Q(r == null ? V.value : r), U.value = !0;
		}
		function Qe() {
			let e = w.value;
			e && (Ue.value = Math.round(e.getBoundingClientRect().height));
		}
		function $e() {
			H.value = !1, U.value = !1;
		}
		function et() {
			Qe(), tt();
		}
		E(window, "pointermove", (e) => {
			H.value && Ye(e.clientX), U.value && Xe(e.clientY);
		}), E(window, "pointerup", $e), E(window, "pointercancel", $e), t(() => {
			et();
		}), E(window, "resize", () => {
			et();
		});
		function tt() {
			B.value = Je(B.value), V.value = Q(V.value);
			let e = _.value;
			if (!e) return;
			let t = e.getBoundingClientRect(), n = Math.round(t.width * K.maxNotesWidthRatio), r = Math.round(t.height * K.maxNotesRowHeightRatio);
			B.value = Math.min(B.value, Math.max(K.minNotesWidth, n)), V.value = Math.min(V.value, Math.max(K.minNotesRowSize, r));
		}
		let $ = m();
		return t(() => {
			let t = De(), n = me();
			e(() => {
				!t.value || !n.value || F.value || !re.value ? he.cursor = void 0 : he.cursor = g(g({}, t.value), {}, { style: oe.value });
			});
		}), (e, t) => {
			var o;
			return a(), n(ee, null, [
				d("div", Re, [d("div", null, [i(Ne), i(Pe)]), d("div", {
					ref_key: "gridContainer",
					ref: _,
					class: x(["grid-container", `layout${f(C)}`]),
					style: r({
						"--slidev-presenter-notes-width": `${f(B)}px`,
						"--slidev-presenter-notes-row-size": `${f(V)}px`,
						"--slidev-presenter-bottom-height": `${Ue.value}px`
					})
				}, [
					c(" Unified vertical resizer for wide layout "),
					Y.value && J.value ? (a(), n("div", {
						key: 0,
						class: "notes-vertical-resizer",
						role: "separator",
						"aria-orientation": "vertical",
						title: "Resize notes panel",
						onPointerdown: Z
					}, null, 32)) : c("v-if", !0),
					c(" Unified vertical resizer for layout 3 "),
					Y.value && f(C) === 3 ? (a(), n("div", {
						key: 1,
						class: "notes-vertical-resizer-left",
						role: "separator",
						"aria-orientation": "vertical",
						title: "Resize notes panel",
						onPointerdown: Z
					}, null, 32)) : c("v-if", !0),
					d("div", {
						ref_key: "main",
						ref: u,
						class: "relative grid-section main flex flex-col"
					}, [
						d("div", ze, [
							t[3] || (t[3] = d("span", {
								op50: "",
								px2: ""
							}, "Current", -1)),
							t[4] || (t[4] = d("div", { "flex-auto": "" }, null, -1)),
							i(we, {
								modelValue: f(z),
								"onUpdate:modelValue": t[0] || (t[0] = (e) => ne(z) ? z.value = e : null),
								options: [{
									label: "Slides",
									value: "slides"
								}, {
									label: "Screen Mirror",
									value: "mirror"
								}]
							}, null, 8, ["modelValue"])
						]),
						f(z) === "mirror" ? (a(), b(Ie, { key: 0 })) : c("v-if", !0),
						c(" We use v-show here to still infer the clicks context "),
						h(i(ge, {
							key: "main",
							class: "p-2 lg:p-4 flex-auto",
							"is-main": "",
							onContextmenu: f(je)
						}, {
							default: v(() => [i(Ee, { "render-context": "presenter" }), i(be)]),
							_: 1
						}, 8, ["onContextmenu"]), [[te, f(z) === "slides"]]),
						(a(), b(Me, {
							key: (o = f(A)) == null ? void 0 : o.no,
							"clicks-context": f(P)(f(A)),
							class: "w-full pb2 px4 flex-none"
						}, null, 8, ["clicks-context"]))
					], 512),
					d("div", Be, [
						X.value && f(C) === 2 ? (a(), n("div", {
							key: 0,
							class: "notes-row-resizer top-[-6px]",
							role: "separator",
							"aria-orientation": "horizontal",
							title: "Resize notes panel height",
							onPointerdown: Ze
						}, null, 32)) : c("v-if", !0),
						L.value && R.value ? (a(), b(ge, { key: "next" }, {
							default: v(() => [(a(), b(ve, {
								key: L.value[0].no,
								"clicks-context": R.value.context,
								route: L.value[0],
								"render-context": "previewNext"
							}, null, 8, ["clicks-context", "route"]))]),
							_: 1
						})) : (a(), n("div", Ve, [...t[5] || (t[5] = [d("div", { class: "text-gray-500" }, " End of the presentation ", -1)])])),
						t[6] || (t[6] = d("div", { class: "absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm" }, " Next ", -1))
					]),
					d("div", {
						ref_key: "noteSection",
						ref: y,
						class: "relative grid-section note overflow-hidden"
					}, [
						Y.value && !J.value && f(C) !== 3 ? (a(), n("div", {
							key: 0,
							class: "notes-resizer right-[-6px]",
							role: "separator",
							"aria-orientation": "vertical",
							title: "Resize notes panel",
							onPointerdown: Z
						}, null, 32)) : c("v-if", !0),
						X.value && f(C) !== 2 ? (a(), n("div", {
							key: 1,
							class: x(["notes-row-resizer", qe.value ? "top-[-6px]" : "bottom-[-6px]"]),
							role: "separator",
							"aria-orientation": "horizontal",
							title: "Resize notes panel height",
							onPointerdown: Ze
						}, null, 34)) : c("v-if", !0),
						$.value && f(ue) ? (a(), b(f($), {
							key: 2,
							class: "h-full"
						})) : (a(), n("div", He, [
							(a(), b(Fe, {
								key: `static-${f(k)}`,
								no: f(k),
								class: "w-full max-w-full h-full overflow-auto p-2 lg:p-4",
								style: r({ fontSize: `${f(de)}em` }),
								"clicks-context": f(D)
							}, null, 8, [
								"no",
								"style",
								"clicks-context"
							])),
							t[10] || (t[10] = d("div", {
								"border-t": "",
								"border-main": ""
							}, null, -1)),
							d("div", { class: x(["py-1 px-2 text-sm transition", f(l) ? "" : "op25"]) }, [
								i(O, {
									title: "Increase font size",
									onClick: f(se)
								}, {
									default: v(() => [...t[7] || (t[7] = [d("div", { class: "i-carbon:zoom-in" }, null, -1)])]),
									_: 1
								}, 8, ["onClick"]),
								i(O, {
									title: "Decrease font size",
									onClick: f(ce)
								}, {
									default: v(() => [...t[8] || (t[8] = [d("div", { class: "i-carbon:zoom-out" }, null, -1)])]),
									_: 1
								}, 8, ["onClick"]),
								c("v-if", !0)
							], 2)
						]))
					], 512),
					d("div", {
						ref_key: "bottomSection",
						ref: w,
						class: "grid-section bottom flex"
					}, [
						i(Oe, {
							persist: !0,
							class: x(["transition", f(l) ? "" : "op25"])
						}, null, 8, ["class"]),
						t[11] || (t[11] = d("div", { "flex-auto": "" }, null, -1)),
						i(Le)
					], 512),
					(a(), b(ye, { key: 2 }))
				], 6)]),
				i(xe),
				i(ke),
				i(Te)
			], 64);
		};
	}
}), [["__scopeId", "data-v-0c4ec578"]]);
//#endregion
export { R as default };
