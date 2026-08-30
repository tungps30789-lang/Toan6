import { C as e, H as t, K as n, O as r, S as i, T as a, b as o, bt as s, tt as c, wt as l, x as u, y as d } from "../modules/shiki-BdJWbgyq.js";
import { t as f } from "./useNav-CEJIfsQz.js";
import { t as p } from "../_plugin-vue_export-helper-B3ysoDQm.js";
import { B as m } from "../modules/vue-BdHhyihZ.js";
//#region node_modules/@slidev/client/pages/404.vue?vue&type=script&setup=true&lang.ts
var h = { class: "grid justify-center text-center pt-15% gap-5" }, g = { class: "text-2xl" }, _ = { class: "op-60" }, v = { class: "mt-3 flex flex-col gap-2 max-w-xs mx-auto w-full" }, y = /*#__PURE__*/ p(/* @__PURE__ */ r({
	__name: "404",
	setup(r) {
		let p = /\d+/, { currentRoute: y } = m(), { total: b } = f(), x = d(() => {
			let e = y.value.path.match(p);
			if (e) {
				let t = +e[0];
				if (t > 0 && t <= b.value) return t;
			}
			return null;
		});
		return (r, d) => {
			let f = n("RouterLink");
			return t(), e("div", h, [o("div", null, [d[2] || (d[2] = o("h1", { class: "text-9xl font-light" }, " 404 ", -1)), o("p", g, [
				d[0] || (d[0] = a(" Page ", -1)),
				o("code", _, l(s(y).path), 1),
				d[1] || (d[1] = a(" not found ", -1))
			])]), o("div", v, [x.value === 1 ? i("v-if", !0) : (t(), u(f, {
				key: 0,
				to: "/",
				class: "page-link"
			}, {
				default: c(() => [...d[3] || (d[3] = [a(" Go Home ", -1)])]),
				_: 1
			})), x.value ? (t(), u(f, {
				key: 1,
				to: `/${x.value}`,
				class: "page-link"
			}, {
				default: c(() => [a(" Go to Slide " + l(x.value), 1)]),
				_: 1
			}, 8, ["to"])) : i("v-if", !0)])]);
		};
	}
}), [["__scopeId", "data-v-014f0510"]]);
//#endregion
export { y as default };
