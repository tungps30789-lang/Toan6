import { C as e, G as t, H as n, O as r, S as i, b as a, bt as o, v as s, x as c, xt as l } from "../modules/shiki-BdJWbgyq.js";
import { S as u } from "../modules/vue-BdHhyihZ.js";
//#region node_modules/@slidev/client/internals/Modal.vue?vue&type=script&setup=true&lang.ts
var d = {
	key: 0,
	class: "fixed top-0 bottom-0 left-0 right-0 grid z-modal"
}, f = /* @__PURE__ */ r({
	__name: "Modal",
	props: {
		modelValue: { default: !1 },
		class: { default: "" }
	},
	emits: ["update:modelValue"],
	setup(r, { emit: f }) {
		let p = r, m = u(p, "modelValue", f);
		function h() {
			m.value = !1;
		}
		return (r, u) => (n(), c(s, null, [o(m) ? (n(), e("div", d, [a("div", {
			bg: "black opacity-80",
			class: "absolute top-0 bottom-0 left-0 right-0 -z-1",
			onClick: u[0] || (u[0] = (e) => h())
		}), a("div", {
			class: l(["m-auto rounded-md bg-main shadow", p.class]),
			"dark:border": "~ main"
		}, [t(r.$slots, "default")], 2)])) : i("v-if", !0)], 1024));
	}
});
//#endregion
export { f as t };
