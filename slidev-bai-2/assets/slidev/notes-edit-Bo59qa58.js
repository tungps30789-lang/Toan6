import { C as e, E as t, H as n, O as r, T as i, _ as a, b as o, ft as s, nt as c, p as l, tt as u } from "../modules/shiki-BdJWbgyq.js";
import { X as d, t as f } from "./useNav-CEJIfsQz.js";
import { t as p } from "../vue.BHyNcdic-CBJ3DIw7.js";
import { D as m } from "../modules/vue-BdHhyihZ.js";
import { t as h } from "./useSlideInfo-BbQC2fgf.js";
import { t as g } from "./IconButton-BREksc9A.js";
import { t as _ } from "./Modal-DBuuB6XC.js";
//#region node_modules/@slidev/client/pages/notes-edit.vue?vue&type=script&setup=true&lang.ts
var v = { class: "flex my-1" }, y = { class: "h-full" }, b = { class: "slidev-glass-effect fixed bottom-5 right-5 rounded-full border border-main" }, x = /* @__PURE__ */ r({
	__name: "notes-edit",
	setup(r) {
		let x = /^---\s*#(\d+)\s*$/;
		p({ title: `Notes Edit - ${d}` });
		let { slides: S } = f(), C = s(!1), w = s(T(S.value));
		function T(e) {
			let t = [];
			for (let r of e) {
				var n;
				(n = r.meta.slide.note) != null && n.trim() && (t.push(`--- #${r.no}`), t.push(""), t.push(r.meta.slide.note), t.push(""));
			}
			return t.join("\n");
		}
		function E(e, t) {
			let n = e.split(/^(---\s*#\d+\s*)$/gm);
			n.forEach((e, r) => {
				let i = e.match(x);
				if (i) {
					let e = Number.parseInt(i[1]), a = n[r + 1].trim(), o = t.find((t) => t.no === e);
					o && (o.meta.slide.note = a, h(e).update({ note: a }));
				}
			});
		}
		return m(w, (e) => {
			E(e, S.value);
		}, { debounce: 300 }), (r, s) => (n(), e(a, null, [t(_, {
			modelValue: C.value,
			"onUpdate:modelValue": s[1] || (s[1] = (e) => C.value = e),
			class: "px-6 py-4 flex flex-col gap-2"
		}, {
			default: u(() => [
				s[4] || (s[4] = o("div", { class: "flex gap-2 text-xl" }, [o("div", { class: "i-carbon:information my-auto" }), i(" Help ")], -1)),
				s[5] || (s[5] = o("div", { class: "prose dark:prose-invert" }, [o("p", null, "This is the batch notes editor. You can edit the notes for all the slides at once here."), o("p", null, [
					i("The note for each slide are separated by "),
					o("code", null, "--- #[no]"),
					i(" lines, you might want to keep them while editing.")
				])], -1)),
				o("div", v, [o("button", {
					class: "slidev-form-button",
					onClick: s[0] || (s[0] = (e) => C.value = !1)
				}, " Close ")])
			]),
			_: 1
		}, 8, ["modelValue"]), o("div", y, [o("div", b, [t(g, {
			title: "Help",
			class: "rounded-full",
			onClick: s[2] || (s[2] = (e) => C.value = !0)
		}, {
			default: u(() => [...s[6] || (s[6] = [o("div", { class: "i-carbon:help text-2xl" }, null, -1)])]),
			_: 1
		})]), c(o("textarea", {
			"onUpdate:modelValue": s[3] || (s[3] = (e) => w.value = e),
			class: "prose dark:prose-invert resize-none p5 outline-none bg-transparent block h-full w-full! max-w-full! max-h-full! min-h-full! min-w-full!"
		}, null, 512), [[l, w.value]])])], 64));
	}
});
//#endregion
export { x as default };
