import { G as e, H as t, J as n, O as r, b as i, tt as a, wt as o, x as s, xt as c, y as l } from "../modules/shiki-BdJWbgyq.js";
//#region node_modules/@slidev/client/internals/IconButton.vue?vue&type=script&setup=true&lang.ts
var u = { class: "sr-only" }, d = /* @__PURE__ */ r({
	__name: "IconButton",
	props: {
		title: {},
		icon: {},
		as: {},
		to: {},
		disabled: { type: Boolean },
		active: { type: Boolean }
	},
	setup(r) {
		let d = r, f = l(() => d.as || (d.to ? "router-link" : "button"));
		return (l, d) => (t(), s(n(f.value), {
			class: c(["slidev-icon-btn", {
				disabled: r.disabled,
				active: r.active
			}]),
			title: r.title,
			to: r.to
		}, {
			default: a(() => [i("span", u, o(r.title), 1), e(l.$slots, "default", {}, () => [i("div", { class: c(r.icon) }, null, 2)])]),
			_: 3
		}, 8, [
			"class",
			"title",
			"to"
		]));
	}
});
//#endregion
export { d as t };
