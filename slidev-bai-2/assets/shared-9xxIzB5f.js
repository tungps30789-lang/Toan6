import { s as e, ut as t } from "./modules/shiki-BdJWbgyq.js";
import { n, r, t as i } from "./syncState-CGCYKw1p.js";
//#region /@server-reactive/nav
var a = t({
	page: 0,
	clicks: 0,
	timer: {
		status: "stopped",
		slides: {},
		startedAt: 0,
		pausedAt: 0
	}
}), o = [], s = [];
n(a, "$syncUp", !0), n(a, "$syncDown", !0), n(a, "$paused", !1), n(a, "$onSet", (e) => o.push(e)), n(a, "$onPatch", (e) => s.push(e)), r(), n(a, "$patch", e(function* () {
	return !1;
}));
//#endregion
//#region node_modules/@slidev/client/state/shared.ts
var { init: c, onPatch: l, onUpdate: u, patch: d, state: f } = i(a, {
	page: 1,
	clicks: 0,
	clicksTotal: 0,
	timer: {
		status: "stopped",
		slides: {},
		startedAt: 0,
		pausedAt: 0
	}
});
//#endregion
export { f as i, l as n, d as r, c as t };
