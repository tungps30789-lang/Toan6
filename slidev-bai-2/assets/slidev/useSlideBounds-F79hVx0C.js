import { N as e, Q as t, ft as n, o as r } from "../modules/shiki-BdJWbgyq.js";
import { A as i, R as a, c as o, h as s, l as c, w as l } from "./useNav-CEJIfsQz.js";
import { d as u } from "../modules/vue-BdHhyihZ.js";
import { g as d } from "./context-NjknmJDY.js";
//#region node_modules/@slidev/client/composables/useSlideBounds.ts
function f(f = e(d, n())) {
	let p = u(f), m = t([
		l,
		s,
		c,
		o,
		i,
		a.width,
		a.height
	], () => {
		setTimeout(p.update, 300);
	}, {
		flush: "post",
		immediate: !0
	});
	return r(r({}, p), {}, { stop: m });
}
//#endregion
export { f as t };
