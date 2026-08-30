import { _t as e, ft as t, o as n, y as r } from "../modules/shiki-BdJWbgyq.js";
import { j as i, k as a } from "../modules/vue-BdHhyihZ.js";
//#region node_modules/@slidev/client/constants.ts
var o = "$$slidev-clicks-context", s = "$$slidev-page", c = "$$slidev-slide-element", l = "$$slidev-slide-scale", u = "$$slidev-context", d = "$$slidev-route", f = "$$slidev-render-context", p = "$$slidev-fontmatter", m = "$$slidev-slide-zoom", h = "slidev-vclick-target", g = "slidev-vclick-hidden", _ = "slidev-vclick-hidden-explicitly", v = "slidev-vclick-current", y = "slidev-vclick-prior", b = "slidev-vclick-anim-", x = 999999, S = ["localhost", "127.0.0.1"], C = [
	"clicks",
	"clicksStart",
	"disabled",
	"hide",
	"hideInToc",
	"layout",
	"level",
	"preload",
	"routeAlias",
	"src",
	"title",
	"transition",
	"zoom",
	"dragPos",
	"lang",
	"clickAnimation"
], w = [
	...C,
	"theme",
	"titleTemplate",
	"info",
	"author",
	"keywords",
	"presenter",
	"browserExporter",
	"download",
	"exportFilename",
	"export",
	"highlighter",
	"lineNumbers",
	"monaco",
	"monacoTypesSource",
	"monacoTypesAdditionalPackages",
	"monacoRunAdditionalDeps",
	"monacoRunUseStrict",
	"remoteAssets",
	"selectable",
	"record",
	"colorSchema",
	"routerMode",
	"aspectRatio",
	"canvasWidth",
	"themeConfig",
	"favicon",
	"plantUmlServer",
	"fonts",
	"defaults",
	"drawings",
	"htmlAttrs",
	"mdc",
	"comark",
	"contextMenu",
	"wakeLock",
	"pwa",
	"seoMeta",
	"notesAutoRuby",
	"magicMoveDuration",
	"preloadImages"
];
//#endregion
//#region node_modules/@slidev/client/context.ts
function T() {
	let n = a(u), i = e(n, "nav"), c = a(o).value, h = e(c, "current"), g = a(s), _ = a(f), v = a(p, {});
	return {
		$slidev: n,
		$nav: i,
		$clicksContext: c,
		$clicks: h,
		$page: g,
		$route: a(d, void 0),
		$renderContext: _,
		$frontmatter: v,
		$scale: a(l, t(1)),
		$zoom: a(m, r(() => 1))
	};
}
function E(e, t) {
	return n(n({}, i(e, t === 0 ? w : C)), {}, { frontmatter: e });
}
//#endregion
export { l as _, g as a, h as c, o as d, s as f, c as g, d as h, v as i, x as l, f as m, T as n, _ as o, p, b as r, y as s, E as t, S as u, m as v, u as y };
