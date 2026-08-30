import { r as e } from "../rolldown-runtime-B0aSnxlc.js";
import { Q as t, s as n, y as r } from "../modules/shiki-BdJWbgyq.js";
import { Q as i } from "./useNav-CEJIfsQz.js";
import { A as a, I as o, b as s, h as c } from "../modules/vue-BdHhyihZ.js";
//#region node_modules/@slidev/client/logic/dark.ts
var l = s(), u = c("slidev-color-schema", "auto"), d = r(() => i.colorSchema !== "auto"), f = r({
	get() {
		return d.value ? i.colorSchema === "dark" : u.value === "auto" ? l.value : u.value === "dark";
	},
	set(e) {
		d.value || (u.value = e === l.value ? "auto" : e ? "dark" : "light");
	}
}), p = o(f);
a && t(f, (e) => {
	let t = window.document.createElement("style");
	t.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), window.document.head.appendChild(t);
	let n = document.querySelector("html");
	n.classList.toggle("dark", e), n.classList.toggle("light", !e), window.getComputedStyle(t).opacity, document.head.removeChild(t);
}, { immediate: !0 });
//#endregion
//#region node_modules/@slidev/client/utils.ts
function m(e, t = "") {
	var n;
	let r = ["slidev-page", t], i = e == null || (n = e.meta) == null || (n = n.slide) == null ? void 0 : n.no;
	return i != null && r.push(`slidev-page-${i}`), r.filter(Boolean).join(" ");
}
function h() {
	return g.apply(this, arguments);
}
function g() {
	return g = n(function* () {
		let { saveAs: t } = yield import("../modules/file-saver-DSaX-xHC.js").then((t) => /* @__PURE__ */ e(t.t(), 1));
		t(typeof i.download == "string" ? i.download : i.exportFilename ? `${i.exportFilename}.pdf` : "/Toan6/slidev-bai-2/slidev-exported.pdf", `${i.title}.pdf`);
	}), g.apply(this, arguments);
}
function _(e, t, n) {
	var r, i;
	return (r = ((i = e.instance) == null ? void 0 : i.$).provides[t]) == null ? n : r;
}
//#endregion
export { f as a, d as i, h as n, p as o, m as r, _ as t };
