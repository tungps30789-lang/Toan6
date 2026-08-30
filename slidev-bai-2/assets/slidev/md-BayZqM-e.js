import { A as e, C as t, Ct as n, G as r, H as i, O as a, St as o, T as s, b as c, bt as l, tt as u, x as d, y as f } from "../modules/shiki-BdJWbgyq.js";
import { n as p, t as m } from "./context-NjknmJDY.js";
//#region node_modules/@slidev/theme-default/layoutHelper.ts
function h(e) {
	return e.startsWith("/") ? "/Toan6/slidev-bai-2/" + e.slice(1) : e;
}
function g(e, t = !1) {
	let n = e && [
		"#",
		"rgb",
		"hsl"
	].some((t) => e.indexOf(t) === 0), r = {
		background: n ? e : void 0,
		color: e && !n ? "white" : void 0,
		backgroundImage: n ? void 0 : e ? t ? `linear-gradient(#0005, #0008), url(${h(e)})` : `url("${h(e)}")` : void 0,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover"
	};
	return r.background || delete r.background, r;
}
//#endregion
//#region node_modules/@slidev/theme-default/layouts/cover.vue?vue&type=script&setup=true&lang.ts
var _ = { class: "my-auto w-full" }, v = /* @__PURE__ */ a({
	__name: "cover",
	props: { background: { default: "" } },
	setup(e) {
		let { $slidev: a, $nav: o, $clicksContext: s, $clicks: l, $page: u, $renderContext: d, $frontmatter: m } = p(), h = e, v = f(() => g(h.background, !0));
		return (e, a) => (i(), t("div", {
			class: "slidev-layout cover",
			style: n(v.value)
		}, [c("div", _, [r(e.$slots, "default")])], 4));
	}
}), y = {
	__name: "slides-bai-2.md__slidev_1",
	setup(t) {
		let { $slidev: n, $nav: r, $clicksContext: a, $clicks: f, $page: h, $renderContext: g, $frontmatter: _ } = p();
		return a.setup(), (t, n) => (i(), d(v, o(e(l(m)(l(_), 0))), {
			default: u(() => [...n[0] || (n[0] = [
				c("div", { class: "inline-block px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-xs tracking-wider mb-4" }, " ✨ CHƯƠNG TRÌNH TOÁN 6 - BÀI 2 (SLIDEV EDITION) ", -1),
				c("h1", null, "SỐ TỰ NHIÊN, HỆ THẬP PHÂN & SỐ LA MÃ", -1),
				c("p", { class: "text-lg text-purple-100 font-semibold mt-2" }, " 🖐️ Bí mật 10 ngón tay loài người & Mật mã đấu sĩ cổ đại 🏛️ ", -1),
				c("div", { class: "mt-8 inline-flex items-center gap-6 bg-white/15 px-6 py-2.5 rounded-full backdrop-blur-md text-sm font-bold" }, [c("span", null, [s("👧 Học sinh: "), c("b", null, "Phương Thảo")]), c("span", null, [s("⏱️ Thời lượng: "), c("b", null, "2 Tiết (90 phút)")])], -1)
			])]),
			_: 1
		}, 16));
	}
};
//#endregion
export { y as default };
