import { B as e, C as t, H as n, O as r, Q as i, R as a, bt as o, ft as s, xt as c } from "../modules/shiki-BdJWbgyq.js";
import { n as l } from "./context-NjknmJDY.js";
import { s as u } from "../SlideWrapper-BAhnJH9e.js";
//#endregion
//#region node_modules/@slidev/client/internals/DrawingLayer.vue
var d = /* @__PURE__ */ r({
	__name: "DrawingLayer",
	setup(r) {
		let { drauu: d, drawingEnabled: f, loadCanvas: p } = u(), m = l().$scale, h = s();
		return e(() => {
			d.mount(h.value, h.value.parentElement), i(m, (e) => d.options.coordinateScale = 1 / e, { immediate: !0 }), p();
		}), a(() => {
			d.unmount();
		}), (e, r) => (n(), t("svg", {
			ref_key: "svg",
			ref: h,
			class: c(["w-full h-full absolute top-0", {
				"pointer-events-none": !o(f),
				"touch-none": o(f)
			}])
		}, null, 2));
	}
});
//#endregion
export { d as default };
