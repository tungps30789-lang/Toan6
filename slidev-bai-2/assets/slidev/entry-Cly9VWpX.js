import { C as e, E as t, H as n, K as r, T as i, b as a, tt as o } from "../modules/shiki-BdJWbgyq.js";
import { t as s } from "../_plugin-vue_export-helper-B3ysoDQm.js";
//#region node_modules/@slidev/client/pages/entry.vue
var c = {}, l = { class: "h-full w-full flex items-center justify-center gap-5 lt-md:flex-col" };
function u(s, c) {
	let u = r("RouterLink");
	return n(), e("div", l, [
		t(u, {
			to: "/",
			class: "page-link"
		}, {
			default: o(() => [...c[0] || (c[0] = [a("div", { class: "i-carbon:presentation-file" }, null, -1), i(" Slides ", -1)])]),
			_: 1
		}),
		t(u, {
			to: "/presenter",
			class: "page-link"
		}, {
			default: o(() => [...c[1] || (c[1] = [a("div", { class: "i-carbon:user-speaker" }, null, -1), i(" Presenter ", -1)])]),
			_: 1
		}),
		t(u, {
			to: "/notes",
			class: "page-link"
		}, {
			default: o(() => [...c[2] || (c[2] = [a("div", { class: "i-carbon:catalog" }, null, -1), i(" Notes ", -1)])]),
			_: 1
		}),
		t(u, {
			to: "/overview",
			class: "page-link"
		}, {
			default: o(() => [...c[3] || (c[3] = [a("div", { class: "i-carbon:list-boxes" }, null, -1), i(" Overview ", -1)])]),
			_: 1
		})
	]);
}
var d = /*#__PURE__*/ s(c, [["render", u], ["__scopeId", "data-v-d5062f01"]]);
//#endregion
export { d as default };
