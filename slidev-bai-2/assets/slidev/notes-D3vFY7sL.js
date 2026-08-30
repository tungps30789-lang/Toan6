import { C as e, Ct as t, E as n, H as r, O as i, Q as a, T as o, _ as s, b as c, bt as l, ft as u, tt as d, wt as f, y as p } from "../modules/shiki-BdJWbgyq.js";
import { U as m, X as h, t as g, u as _ } from "./useNav-CEJIfsQz.js";
import { t as v } from "../vue.BHyNcdic-CBJ3DIw7.js";
import { h as y } from "../modules/vue-BdHhyihZ.js";
import { i as b } from "../shared-9xxIzB5f.js";
import { t as x } from "./IconButton-BREksc9A.js";
import { t as S } from "./Modal-DBuuB6XC.js";
import { n as C, t as w } from "./NoteDisplay-C4Fn7Z_J.js";
import { r as T, t as E } from "./TimerBar-0F75hoNz.js";
//#region node_modules/@slidev/client/pages/notes.vue?vue&type=script&setup=true&lang.ts
var D = { class: "flex my-1" }, O = { class: "h-full flex flex-col" }, k = {
	class: "flex-none border-t border-main",
	px3: "",
	py2: ""
}, A = { class: "flex-none border-t border-main" }, j = { class: "flex gap-1 items-center px-6 py-3" }, M = {
	key: 0,
	class: "i-carbon:minimize"
}, N = {
	key: 1,
	class: "i-carbon:maximize"
}, P = { class: "px2 my-auto" }, F = { class: "text-lg" }, I = { class: "opacity-50 text-sm" }, L = /* @__PURE__ */ i({
	__name: "notes",
	setup(i) {
		v({ title: `Notes - ${h}` });
		let { slides: L, total: R } = g(), { isFullscreen: z, toggle: B } = _, V = u(), H = y("slidev-notes-font-size", 18), U = p(() => b.page), W = u(!1), G = p(() => L.value.find((e) => e.no === U.value));
		a(U, () => {
			var e;
			(e = V.value) == null || e.scrollTo({
				left: 0,
				top: 0,
				behavior: "smooth"
			}), window.scrollTo({
				left: 0,
				top: 0,
				behavior: "smooth"
			});
		});
		function K() {
			H.value += 1;
		}
		function q() {
			--H.value;
		}
		let J = p(() => {
			let e = b.clicks, t = b.clicksTotal;
			return m(u(e), void 0, t);
		});
		return (i, a) => {
			var u, p;
			return r(), e(s, null, [n(S, {
				modelValue: W.value,
				"onUpdate:modelValue": a[1] || (a[1] = (e) => W.value = e),
				class: "px-6 py-4 flex flex-col gap-2"
			}, {
				default: d(() => [
					a[3] || (a[3] = c("div", { class: "flex gap-2 text-xl" }, [c("div", { class: "i-carbon:information my-auto" }), o(" Help ")], -1)),
					a[4] || (a[4] = c("div", { class: "prose dark:prose-invert" }, [c("p", null, "This is the hands-free live notes viewer."), c("p", null, "It's designed to be used in a separate view or device. The progress is controlled by and auto synced with the main presenter or slide.")], -1)),
					c("div", D, [c("button", {
						class: "slidev-form-button",
						onClick: a[0] || (a[0] = (e) => W.value = !1)
					}, " Close ")])
				]),
				_: 1
			}, 8, ["modelValue"]), c("div", O, [
				n(T, {
					"clicks-context": J.value,
					current: U.value
				}, null, 8, ["clicks-context", "current"]),
				n(E),
				c("div", {
					ref_key: "scroller",
					ref: V,
					class: "px-5 py-3 flex-auto h-full overflow-auto",
					style: t({ fontSize: `${l(H)}px` })
				}, [n(w, {
					note: (u = G.value) == null ? void 0 : u.meta.slide.note,
					"note-html": (p = G.value) == null ? void 0 : p.meta.slide.noteHTML,
					placeholder: `No notes for Slide ${U.value}.`,
					"clicks-context": J.value,
					"auto-scroll": !0
				}, null, 8, [
					"note",
					"note-html",
					"placeholder",
					"clicks-context"
				])], 4),
				c("div", k, [n(C, {
					"clicks-context": J.value,
					readonly: ""
				}, null, 8, ["clicks-context"])]),
				c("div", A, [c("div", j, [
					n(x, {
						title: l(z) ? "Close fullscreen" : "Enter fullscreen",
						onClick: l(B)
					}, {
						default: d(() => [l(z) ? (r(), e("div", M)) : (r(), e("div", N))]),
						_: 1
					}, 8, ["title", "onClick"]),
					n(x, {
						title: "Increase font size",
						onClick: K
					}, {
						default: d(() => [...a[5] || (a[5] = [c("div", { class: "i-carbon:zoom-in" }, null, -1)])]),
						_: 1
					}),
					n(x, {
						title: "Decrease font size",
						onClick: q
					}, {
						default: d(() => [...a[6] || (a[6] = [c("div", { class: "i-carbon:zoom-out" }, null, -1)])]),
						_: 1
					}),
					n(x, {
						title: "Edit notes",
						to: "/notes-edit",
						target: "_blank"
					}, {
						default: d(() => [...a[7] || (a[7] = [c("div", { class: "i-carbon:edit" }, null, -1)])]),
						_: 1
					}),
					n(x, {
						title: "Help",
						class: "rounded-full",
						onClick: a[2] || (a[2] = (e) => W.value = !0)
					}, {
						default: d(() => [...a[8] || (a[8] = [c("div", { class: "i-carbon:help" }, null, -1)])]),
						_: 1
					}),
					a[9] || (a[9] = c("div", { class: "flex-auto" }, null, -1)),
					c("div", P, [c("span", F, f(U.value), 1), c("span", I, " / " + f(l(R)), 1)])
				])])
			])], 64);
		};
	}
});
//#endregion
export { L as default };
