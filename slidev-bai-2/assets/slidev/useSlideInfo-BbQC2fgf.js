import { bt as e, ft as t, s as n, y as r } from "../modules/shiki-BdJWbgyq.js";
import { z as i } from "./useNav-CEJIfsQz.js";
//#region node_modules/@slidev/client/composables/useSlideInfo.ts
function a(e) {
	var r, a;
	return {
		info: t((r = (a = i(e)) == null ? void 0 : a.meta.slide) == null ? null : r),
		update: function() {
			var e = n(function* () {});
			return function() {
				return e.apply(this, arguments);
			};
		}()
	};
}
var o = {};
function s(t) {
	function i(e) {
		var t;
		return (t = o[e]) == null ? o[e] = a(e) : t;
	}
	return {
		info: r({
			get() {
				return i(e(t)).info.value;
			},
			set(n) {
				i(e(t)).info.value = n;
			}
		}),
		update: function() {
			var r = n(function* (n, r) {
				let a = i(r == null ? e(t) : r), o = yield a.update(n);
				return o && (a.info.value = o), o;
			});
			return function(e, t) {
				return r.apply(this, arguments);
			};
		}()
	};
}
//#endregion
export { a as n, s as t };
