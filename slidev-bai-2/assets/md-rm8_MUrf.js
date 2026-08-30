import { A as e, C as t, H as n, St as r, T as i, b as a, bt as o, nt as s, q as c, tt as l, x as u } from "./modules/shiki-BdJWbgyq.js";
import { n as d, t as f } from "./slidev/context-NjknmJDY.js";
import { t as p } from "./slidev/default-2pnLFIYn.js";
//#region slides-bai-2.md__slidev_4.md
var m = { class: "grid grid-cols-3 gap-4 mt-6 text-center" }, h = { class: "p-4 rounded-2xl bg-rose-50 border-2 border-rose-200" }, g = { class: "p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200" }, _ = { class: "p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 mt-6 text-center" }, v = {
	__name: "slides-bai-2.md__slidev_4",
	setup(v) {
		let { $slidev: y, $nav: b, $clicksContext: x, $clicks: S, $page: C, $renderContext: w, $frontmatter: T } = d();
		return x.setup(), (d, v) => {
			let y = c("click");
			return n(), u(p, r(e(o(f)(o(T), 3))), {
				default: l(() => [
					v[4] || (v[4] = a("h1", null, "Số Liền Trước & Số Liền Sau", -1)),
					a("div", m, [
						s((n(), t("div", h, [...v[0] || (v[0] = [
							a("span", { class: "px-3 py-1 bg-rose-100 text-rose-700 rounded-full font-bold text-xs" }, "BÊN TRÁI (-1)", -1),
							a("div", { class: "text-3xl font-black text-rose-600 my-2" }, "99", -1),
							a("h4", { class: "font-bold text-rose-900 text-sm" }, "Số Liền Trước", -1),
							a("p", { class: "text-xs text-gray-500" }, "Nhỏ hơn 1 đơn vị ($100 - 1$)", -1)
						])])), [[y]]),
						v[2] || (v[2] = a("div", { class: "p-4 rounded-2xl bg-indigo-50 border-2 border-indigo-300 shadow-md transform scale-105" }, [
							a("span", { class: "px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-bold text-xs" }, "SỐ ĐANG XÉT"),
							a("div", { class: "text-4xl font-black text-indigo-700 my-2" }, "100"),
							a("h4", { class: "font-bold text-indigo-950 text-sm" }, "Số Trung Tâm"),
							a("p", { class: "text-xs text-gray-500" }, "(Mốc so sánh)")
						], -1)),
						s((n(), t("div", g, [...v[1] || (v[1] = [
							a("span", { class: "px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-xs" }, "BÊN PHẢI (+1)", -1),
							a("div", { class: "text-3xl font-black text-emerald-600 my-2" }, "101", -1),
							a("h4", { class: "font-bold text-emerald-900 text-sm" }, "Số Liền Sau", -1),
							a("p", { class: "text-xs text-gray-500" }, "Lớn hơn 1 đơn vị ($100 + 1$)", -1)
						])])), [[y]])
					]),
					s((n(), t("div", _, [...v[3] || (v[3] = [
						i(" ⚠️ ", -1),
						a("b", null, "Bẫy đặc biệt:", -1),
						i(" Số $0$ là số nhỏ nhất trong $\\mathbb{N}$ nên ", -1),
						a("b", null, "số 0 KHÔNG CÓ số liền trước", -1),
						i("! ", -1)
					])])), [[y]])
				]),
				_: 1
			}, 16);
		};
	}
};
//#endregion
export { v as default };
