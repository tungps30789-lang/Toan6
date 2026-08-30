import { B as e, C as t, Ct as n, E as r, H as i, I as a, O as o, S as s, V as c, W as l, _ as u, b as d, bt as f, ft as p, ht as ee, o as m, tt as h, ut as g, wt as _, x as v, xt as y, y as b } from "../modules/shiki-BdJWbgyq.js";
import { B as x, K as S, R as C, W as te, X as ne, q as re, t as ie } from "./useNav-CEJIfsQz.js";
import { t as w } from "../_plugin-vue_export-helper-B3ysoDQm.js";
import { t as ae } from "../vue.BHyNcdic-CBJ3DIw7.js";
import { B as oe, z as se } from "../modules/vue-BdHhyihZ.js";
import { l as T } from "./context-NjknmJDY.js";
import { a as E, i as ce, o as le } from "./utils-i2fWjTfO.js";
import { i as ue, o as de, t as fe } from "../SlideWrapper-BAhnJH9e.js";
import { t as D } from "./IconButton-BREksc9A.js";
import { n as O } from "./NoteDisplay-C4Fn7Z_J.js";
import { n as pe, r as me } from "../modules/unplugin-icons-CX8E3Xxa.js";
import { t as he } from "./NoteEditable-CMHX9-Bn.js";
//#region node_modules/@slidev/client/pages/overview.vue?vue&type=script&setup=true&lang.ts
var ge = { class: "h-screen w-screen of-hidden flex" }, _e = {
	key: 0,
	class: "grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"
}, ve = { class: "relative" }, ye = {
	class: "absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p-6px md:p-10px gap-1 max-h-full of-x-visible of-y-auto",
	style: { direction: "rtl" }
}, be = ["onClick"], xe = {
	p2: "",
	border: "t main"
}, Se = { class: "flex flex-col gap-1 mx-1 items-end" }, Ce = {
	key: 0,
	class: "flex items-end gap-2"
}, we = ["onClick"], Te = ["onDblclick"], Ee = {
	key: 2,
	class: "select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"
}, De = {
	key: 1,
	class: "absolute z-2 top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main/80 backdrop-blur border-main select-none"
}, Oe = { class: "text-xs op50" }, k = 450, A = /*#__PURE__*/ w(/* @__PURE__ */ o({
	__name: "overview",
	setup(o) {
		ae({ title: `Overview - ${ne}` });
		let w = se(), A = oe(), { openInEditor: ke, slides: j, isEmbedded: M } = ie(), N = b(() => w.query.mode === "preview"), P = b(() => N.value && M.value), F = b(() => N.value ? P.value ? Math.max(0, C.width.value - 16) : Math.min(900, Math.max(320, C.width.value - 160)) : k), Ae = b(() => F.value / re.value), I = g(/* @__PURE__ */ new Map()), L = g(/* @__PURE__ */ new Map()), R = p([]), z = p(), B = p(null), V = 0, H, U, W = b(() => j.value.map((e) => {
			var t;
			return Pe(((t = e.meta) == null || (t = t.slide) == null ? void 0 : t.note) || "");
		})), je = b(() => W.value.reduce((e, t) => e + t, 0)), Me = b(() => j.value.map((e) => J(e)).reduce((e, t) => e + t, 0)), Ne = b(() => String(Math.max(1, j.value.length)).length), G = ee(), K = /* @__PURE__ */ new WeakMap();
		function q(e) {
			return K.has(e) || K.set(e, te(e, T)), K.get(e);
		}
		function J(e) {
			var t, n;
			return ((t = e.meta) == null ? void 0 : t.clicks) || ((n = q(e)) == null ? void 0 : n.total);
		}
		function Y(e) {
			G.value === e ? G.value = void 0 : G.value = e;
		}
		function Pe(e) {
			let t = e.match(/[\w`'\-\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g), n = 0;
			if (!t) return 0;
			for (let e = 0; e < t.length; e++) t[e].charCodeAt(0) >= 19968 ? n += t[e].length : n += 1;
			return n;
		}
		function X() {
			let e = window.innerHeight || document.documentElement.clientHeight, t, n = [];
			for (let [r, i] of I.entries()) {
				let a = i.getBoundingClientRect(), o = Math.max(0, Math.min(a.bottom, e) - Math.max(a.top, 0));
				o !== 0 && (o >= a.height && n.push(r), (!t || o > t.visibleHeight) && (t = {
					idx: r,
					visibleHeight: o
				}));
			}
			R.value = n.length ? n : t ? [t.idx] : [];
		}
		function Z(e) {
			let t = document.createElement("a");
			t.target = "_blank", t.href = S + e.slice(1), t.click();
		}
		function Fe(e) {
			let t = new URL(S + e.slice(1), location.href).href;
			if (M.value) {
				window.parent.postMessage({
					target: "slidev",
					sender: "slidev",
					type: "open-external",
					url: t
				}, "*");
				return;
			}
			Z(e);
		}
		function Ie(e) {
			let t = I.get(e);
			t && t.scrollIntoView({
				behavior: "smooth",
				block: "start"
			});
		}
		function Q(e) {
			let t = L.get(e) || I.get(e);
			if (!t || !z.value) return null;
			let n = z.value.getBoundingClientRect();
			return t.getBoundingClientRect().top - n.top + z.value.scrollTop;
		}
		function $(e) {
			if (!z.value || j.value.length === 0) return;
			let t = Math.min(Math.max(e, 1), j.value.length), n = Math.floor(t) - 1, r = t - (n + 1), i = Q(n), a = Q(n + 1);
			if (i == null) return;
			let o = i + (a == null ? 0 : (a - i) * r) - z.value.clientHeight * .5;
			Math.abs(z.value.scrollTop - o) < 1 || z.value.scrollTo({ top: o });
		}
		function Le() {
			let e = w.query.slideNo, t = Number(Array.isArray(e) ? e[0] : e);
			return Number.isFinite(t) && t > 0 ? t : void 0;
		}
		function Re(e) {
			if (!P.value) return;
			let t = Number(e.toFixed(3)).toString();
			w.query.slideNo !== t && A.replace({ query: m(m({}, w.query), {}, { slideNo: t }) });
		}
		function ze() {
			if (!z.value || j.value.length === 0) return null;
			let e = z.value.scrollTop + z.value.clientHeight * .5, t = j.value.map((e, t) => Q(t)).filter((e) => e != null);
			if (t.length === 0) return null;
			if (t.length === 1 || e <= t[0]) return 1;
			for (let n = 1; n < t.length; n++) if (e <= t[n]) {
				let r = Math.max(1, t[n] - t[n - 1]);
				return n + (e - t[n - 1]) / r;
			}
			return j.value.length;
		}
		function Be(e) {
			H = e, !U && (U = setTimeout(() => {
				U = void 0;
				let e = H;
				H = void 0, e != null && (Re(e), !(Date.now() < V) && window.parent.postMessage({
					target: "slidev",
					sender: "slidev",
					type: "overview-scroll",
					no: e
				}, "*"));
			}, 50));
		}
		function Ve() {
			if (X(), !P.value || Date.now() < V) return;
			let e = ze();
			e != null && Be(e);
		}
		function He({ data: e }) {
			if (!P.value || (e == null ? void 0 : e.target) !== "slidev" || e.sender !== "vscode" || e.type !== "overview-scroll") return;
			let t = Number(e.no);
			t > 0 && (V = Date.now() + 300, H = void 0, Re(t), $(t));
		}
		function Ue(e, t, n) {
			let r = q(n);
			r.current = r.current === t ? T : t, e.preventDefault();
		}
		function We(e, t) {
			var n;
			if (e.ctrlKey || e.metaKey) {
				e.preventDefault(), Fe(x(t, !1));
				return;
			}
			let r = (n = t.meta) == null ? void 0 : n.slide;
			r && window.parent.postMessage({
				target: "slidev",
				type: "command",
				command: "goto",
				args: [r.filepath, r.sourceIndex]
			}, "*");
		}
		return e(() => {
			window.addEventListener("message", He);
			let e = P.value ? Le() : void 0;
			e != null && (V = Date.now() + 300, $(e)), a(() => {
				e != null && $(e), X();
			});
		}), c(() => {
			window.removeEventListener("message", He), U && clearTimeout(U);
		}), (e, a) => {
			let o = pe, c = me;
			return i(), t("div", ge, [
				f(M) ? s("v-if", !0) : (i(), t("nav", _e, [d("div", ve, [d("div", ye, [(i(!0), t(u, null, l(f(j), (e, n) => {
					var r, a;
					return i(), t("div", {
						key: e.no,
						class: "relative",
						style: { direction: "ltr" }
					}, [d("button", {
						class: y(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100", R.value.includes(n) ? "op100 text-primary bg-gray:5" : "op20"]),
						onClick: (e) => Ie(n)
					}, [d("div", null, _(n + 1), 1)], 10, be), (r = e.meta) != null && (r = r.slide) != null && r.title ? (i(), t("div", {
						key: 0,
						class: y(["pointer-events-none select-none absolute left-110% top-50% translate-y--50% ws-nowrap z-label px2 slidev-glass-effect transition duration-400 op0 group-hover:op100", R.value.includes(n) ? "text-primary" : "text-main important-text-op-50"])
					}, _((a = e.meta) == null || (a = a.slide) == null ? void 0 : a.title), 3)) : s("v-if", !0)]);
				}), 128))])]), d("div", xe, [f(ce) ? (i(), v(D, {
					key: 1,
					title: f(E) ? "Dark mode" : "Light mode",
					"pointer-events-none": "",
					op50: ""
				}, {
					default: h(() => [f(E) ? (i(), v(o, { key: 0 })) : (i(), v(c, { key: 1 }))]),
					_: 1
				}, 8, ["title"])) : (i(), v(D, {
					key: 0,
					title: f(E) ? "Switch to light mode theme" : "Switch to dark mode theme",
					onClick: a[0] || (a[0] = (e) => f(le)())
				}, {
					default: h(() => [f(E) ? (i(), v(o, { key: 0 })) : (i(), v(c, { key: 1 }))]),
					_: 1
				}, 8, ["title"]))])])),
				d("main", {
					ref_key: "scroller",
					ref: z,
					class: "flex-1 h-full of-auto",
					style: n(`grid-template-columns: repeat(auto-fit,minmax(${k}px,1fr))`),
					onScroll: Ve
				}, [(i(!0), t(u, null, l(f(j), (e, o) => (i(), t("div", {
					key: e.no,
					ref_for: !0,
					ref: (e) => I.set(o, e),
					class: y(["overview-slide-block relative of-hidden flex gap-4 min-h-50", [o === 0 && !P.value ? "pt2" : "", P.value ? "justify-center" : "border-t border-main"]])
				}, [
					P.value ? s("v-if", !0) : (i(), t("div", {
						key: 0,
						class: y(["select-none text-right my5 flex flex-col justify-between items-end", N.value ? "w-9" : "w-13"]),
						style: n({ height: `${Ae.value}px` })
					}, [d("div", {
						class: "self-center text-3xl op20 mb2 text-center mr--14px tabular-nums",
						style: n({ width: `${Ne.value}ch` })
					}, _(o + 1), 5), d("div", Se, [r(D, {
						class: y(["overview-slide-action mr--4 op0", N.value ? "text-lg" : ""]),
						title: "Play in new tab",
						onClick: (t) => Z(f(x)(e, !1))
					}, {
						default: h(() => [...a[4] || (a[4] = [d("div", { class: "i-carbon:presentation-file" }, null, -1)])]),
						_: 1
					}, 8, ["class", "onClick"]), s("v-if", !0)])], 6)),
					d("div", {
						class: y(["flex flex-col", P.value ? "my1 gap-0" : "my5 gap-2"]),
						style: n({ width: `${F.value}px` })
					}, [
						P.value ? (i(), t("div", Ce, [d("button", {
							type: "button",
							class: "select-none pl-1 text-lg leading-tight op60 tabular-nums hover:op90 hover:underline underline-offset-2",
							onClick: (t) => We(t, e)
						}, _(o + 1), 9, we), J(e) ? (i(), v(O, {
							key: 0,
							active: G.value === e,
							"clicks-context": q(e),
							resettable: "",
							compact: "",
							attached: "",
							class: "ml-auto w-88 min-w-[70%] max-w-[calc(100%-3rem)]",
							onDblclick: (t) => Y(e),
							onActivate: (t) => G.value = e,
							onReset: a[1] || (a[1] = (e) => G.value = void 0)
						}, null, 8, [
							"active",
							"clicks-context",
							"onDblclick",
							"onActivate"
						])) : s("v-if", !0)])) : s("v-if", !0),
						d("div", {
							ref_for: !0,
							ref: (e) => L.set(o, e),
							class: y(["border rounded border-main overflow-hidden bg-main h-max", [P.value && J(e) ? "rounded-tr-0" : "", P.value ? "" : "select-none"]]),
							onDblclick: (t) => !P.value && Z(f(x)(e, !1))
						}, [(i(), v(ue, {
							key: e.no,
							width: F.value,
							class: y(P.value ? "" : "pointer-events-none important:[&_*]:select-none")
						}, {
							default: h(() => [r(fe, {
								"clicks-context": q(e),
								route: e,
								"render-context": "overview"
							}, null, 8, ["clicks-context", "route"]), r(de, { page: e.no }, null, 8, ["page"])]),
							_: 2
						}, 1032, ["width", "class"]))], 42, Te),
						J(e) && !P.value ? (i(), v(O, {
							key: 1,
							active: G.value === e,
							"clicks-context": q(e),
							resettable: "",
							class: y(["ml-1 w-[calc(100%-0.25rem)]", N.value ? "" : "mt-2"]),
							onDblclick: (t) => Y(e),
							onActivate: (t) => G.value = e,
							onReset: a[2] || (a[2] = (e) => G.value = void 0)
						}, null, 8, [
							"active",
							"clicks-context",
							"class",
							"onDblclick",
							"onActivate"
						])) : s("v-if", !0)
					], 6),
					N.value ? s("v-if", !0) : (i(), v(he, {
						key: 1,
						no: e.no,
						class: "relative z-1 max-w-250 w-250 text-lg rounded p3",
						"auto-height": !0,
						highlight: G.value === e,
						editing: B.value === e.no,
						"clicks-context": q(e),
						onDblclick: (t) => B.value === e.no ? null : B.value = e.no,
						"onUpdate:editing": a[3] || (a[3] = (e) => B.value = null),
						onMarkerClick: (t, n) => Ue(t, n, e)
					}, null, 8, [
						"no",
						"highlight",
						"editing",
						"clicks-context",
						"onDblclick",
						"onMarkerClick"
					])),
					!N.value && W.value[o] > 0 ? (i(), t("div", Ee, _(W.value[o]) + " words ", 1)) : s("v-if", !0)
				], 2))), 128))], 36),
				f(M) ? s("v-if", !0) : (i(), t("div", De, [d("div", Oe, _(f(j).length) + " slides · " + _(Me.value + f(j).length - 1) + " clicks · " + _(je.value) + " words ", 1)]))
			]);
		};
	}
}), [["__scopeId", "data-v-264c1f43"]]);
//#endregion
export { A as default };
