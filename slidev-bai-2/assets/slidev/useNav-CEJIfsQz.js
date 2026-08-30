import { B as e, C as t, D as n, H as r, I as i, M as a, O as o, Q as s, S as c, V as l, _ as u, b as d, bt as f, ft as p, gt as m, ht as h, o as g, ot as _, pt as v, s as y, ut as b, wt as ee, y as x, yt as te } from "../modules/shiki-BdJWbgyq.js";
import { t as ne } from "../_plugin-vue_export-helper-B3ysoDQm.js";
import { A as re, B as ie, E as S, I as ae, T as oe, a as C, c as se, g as w, h as T, k as E, l as ce, m as D, z as le } from "../modules/vue-BdHhyihZ.js";
import { l as O, y as ue } from "./context-NjknmJDY.js";
function k(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
function A(...e) {
	return de(e).reduce((e, t) => e + t, 0);
}
function j(e) {
	var t;
	return e = (t = e) == null ? [] : t, Array.isArray(e) ? e : [e];
}
function de(e) {
	return j(e).flat(1);
}
function fe(e) {
	return Array.from(new Set(e));
}
function pe(...e) {
	let t, n, r;
	e.length === 1 ? (t = 0, r = 1, [n] = e) : [t, n, r = 1] = e;
	let i = [], a = t;
	for (; a < n;) i.push(a), a += r || 1;
	return i;
}
function me(e) {
	return e != null;
}
function he(e, t) {
	return Object.fromEntries(Object.entries(e).map(([e, n]) => t(e, n)).filter(me));
}
//#endregion
//#region /@slidev/configs
var M = {
	theme: "default",
	title: "Toán 6 - Bài 2 (Slidev)",
	titleTemplate: "%s - Slidev",
	addons: [],
	remoteAssets: !1,
	monaco: !0,
	monacoTypesSource: "local",
	monacoTypesAdditionalPackages: [],
	monacoTypesIgnorePackages: [],
	monacoRunAdditionalDeps: [],
	monacoRunUseStrict: !0,
	download: !1,
	export: {},
	info: !1,
	highlighter: "shiki",
	twoslash: !0,
	lineNumbers: !1,
	colorSchema: "auto",
	routerMode: "history",
	aspectRatio: 1.7777777777777777,
	canvasWidth: 980,
	exportFilename: "",
	selectable: !1,
	themeConfig: {},
	fonts: {
		sans: [
			"\"Avenir Next\"",
			"\"Nunito Sans\"",
			"ui-sans-serif",
			"system-ui",
			"-apple-system",
			"BlinkMacSystemFont",
			"\"Segoe UI\"",
			"Roboto",
			"\"Helvetica Neue\"",
			"Arial",
			"\"Noto Sans\"",
			"sans-serif",
			"\"Apple Color Emoji\"",
			"\"Segoe UI Emoji\"",
			"\"Segoe UI Symbol\"",
			"\"Noto Color Emoji\""
		],
		serif: [
			"ui-serif",
			"Georgia",
			"Cambria",
			"\"Times New Roman\"",
			"Times",
			"serif"
		],
		mono: [
			"\"Fira Code\"",
			"ui-monospace",
			"SFMono-Regular",
			"Menlo",
			"Monaco",
			"Consolas",
			"\"Liberation Mono\"",
			"\"Courier New\"",
			"monospace"
		],
		webfonts: ["Nunito Sans", "Fira Code"],
		provider: "google",
		local: ["Avenir Next"],
		italic: !1,
		weights: [
			"200",
			"400",
			"600"
		]
	},
	favicon: "https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",
	drawings: {
		enabled: !0,
		persist: !1,
		presenterOnly: !1,
		syncAll: !0
	},
	plantUmlServer: "https://www.plantuml.com/plantuml",
	codeCopy: !0,
	magicMoveCopy: !0,
	author: "",
	record: "dev",
	css: "unocss",
	presenter: !0,
	browserExporter: "dev",
	htmlAttrs: {},
	transition: "slide-left",
	editor: !0,
	mcp: !0,
	contextMenu: null,
	wakeLock: !0,
	pwa: !1,
	mdc: !0,
	comark: !1,
	seoMeta: {},
	notesAutoRuby: {},
	duration: "30min",
	timer: "stopwatch",
	magicMoveDuration: 800,
	preloadImages: !0,
	clickAnimation: "",
	background: "linear-gradient(135deg,",
	class: "text-center text-white",
	slidesTitle: "Toán 6 - Bài 2 (Slidev) - Slidev"
}, ge = "build", _e = x(() => M.aspectRatio), ve = x(() => M.canvasWidth), ye = x(() => Math.ceil(ve.value / _e.value)), be = x(() => he(M.themeConfig || {}, (e, t) => [`--slidev-theme-${e}`, t])), xe = M.slidesTitle, Se = "/Toan6/slidev-bai-2/";
//#endregion
//#region node_modules/@slidev/client/composables/useClicks.ts
function Ce(e) {
	if (e === !1 || e === "false") return null;
	if (e == null || e === !0 || e === "true") return "+1";
	if (typeof e == "string" && "+-".includes(e[0])) return e;
	let t = +e;
	return Number.isNaN(t) ? (console.error(`Invalid "at" prop value: ${e}`), null) : t <= 0 ? (console.warn(`[Slidev] "at" prop value must be greater than 0, but got ${e}, has been set to 1`), 1) : t;
}
function we(e) {
	return Array.isArray(e) ? [Ce(e[0]), Ce(e[1])] : null;
}
function Te(t, n = 0, r) {
	let i = p(!1), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), s = {
		get current() {
			return k(+t.value, n, s.total);
		},
		set current(e) {
			t.value = i.value ? k(e, n, s.total) : e;
		},
		clicksStart: n,
		get relativeSizeMap() {
			return a;
		},
		get maxMap() {
			return o;
		},
		get isMounted() {
			return i.value;
		},
		setup() {
			e(() => {
				i.value = !0, o = v(o), _(t) || (s.current = t.value);
			}), l(() => {
				i.value = !1, a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
			});
		},
		calculateSince(e, t = 1) {
			let n = Ce(e);
			if (n == null) return null;
			let r, i, a;
			if (typeof n == "string") {
				let e = s.currentOffset, o = +n;
				r = e + o, i = e + o + t - 1, a = o + t - 1;
			} else r = n, i = n + t - 1, a = 0;
			return {
				start: r,
				end: Infinity,
				max: i,
				delta: a,
				currentOffset: x(() => s.current - r),
				isCurrent: x(() => s.current === r),
				isActive: x(() => s.current >= r)
			};
		},
		calculateRange(e) {
			let t = we(e);
			if (t == null) return null;
			let [n, r] = t, i, a, o;
			return typeof n == "string" ? (i = s.currentOffset + +n, o = +n) : (i = n, o = 0), typeof r == "string" ? (a = i + +r, o += +r) : a = r, {
				start: i,
				end: a,
				max: a,
				delta: o,
				currentOffset: x(() => s.current - i),
				isCurrent: x(() => s.current === i),
				isActive: x(() => i <= s.current && s.current < a)
			};
		},
		calculate(e) {
			return Array.isArray(e) ? s.calculateRange(e) : s.calculateSince(e);
		},
		register(e, t) {
			if (!t) return;
			let { delta: n, max: r } = t;
			a.set(e, n), o.set(e, r);
		},
		unregister(e) {
			a.delete(e), o.delete(e);
		},
		get currentOffset() {
			return A(...a.values());
		},
		get total() {
			return r == null ? i.value ? Math.max(0, ...o.values()) : 0 : r;
		}
	};
	return s;
}
function Ee(e, t = 0) {
	var n, r, i;
	let a = (n = e == null || (r = e.meta.slide) == null ? void 0 : r.frontmatter.clicksStart) == null ? 0 : n, o = p(Math.max(te(t), a));
	return s(() => te(t), (e) => {
		o.value = Math.max(e, a);
	}), Te(o, a, e == null || (i = e.meta) == null ? void 0 : i.clicks);
}
//#endregion
//#region node_modules/@slidev/parser/dist/utils.mjs
var De = /[a-z]/i;
function Oe(e) {
	if (typeof e == "number") return {
		seconds: e,
		relative: !1
	};
	let t = e.startsWith("+");
	t && (e = e.slice(1));
	let n = 0;
	if (e.includes(":")) {
		let t = e.split(":").map(Number), r = 0, i = 0, a = 0;
		if (t.length === 3) r = t[0], i = t[1], a = t[2];
		else if (t.length === 2) i = t[0], a = t[1];
		else if (t.length === 1) a = t[0];
		else throw TypeError("Invalid timestamp format");
		if (Number.isNaN(r) || Number.isNaN(i) || Number.isNaN(a)) throw TypeError("Invalid timestamp format");
		n = (r || 0) * 3600 + (i || 0) * 60 + (a || 0);
	} else if (!De.test(e)) n = Number(e);
	else {
		let t = {
			s: 1,
			sec: 1,
			secs: 1,
			m: 60,
			min: 60,
			mins: 60,
			h: 3600,
			hr: 3600,
			hrs: 3600,
			hour: 3600,
			hours: 3600,
			day: 86400,
			days: 86400,
			week: 604800,
			weeks: 604800,
			month: 2629746,
			months: 2629746,
			year: 31556952,
			years: 31556952
		}, r = /([\d.]+)([a-z]+)/gi, i = e.matchAll(r);
		if (i) for (let e of i) {
			let r = Number(e[1]);
			if (Number.isNaN(r)) throw TypeError(`Invalid timestamp value: ${e[1]}`);
			let i = e[2].toLowerCase();
			if (!(i in t)) throw TypeError(`Invalid timestamp unit: ${i}`);
			n += r * t[i];
		}
		let a = e.replace(r, "").trim();
		if (a) throw TypeError(`Unknown timestamp remaining: ${a}`);
	}
	return {
		seconds: n,
		relative: t
	};
}
function ke(e, t) {
	if (!t || t === "all" || t === "*") return pe(1, e + 1);
	if (t === "none") return [];
	let n = [];
	for (let r of t.split(/[,;]/g)) if (!r.includes("-")) n.push(+r);
	else {
		let [t, i] = r.split("-", 2);
		n.push(...pe(+t, i ? +i + 1 : e + 1));
	}
	return fe(n).filter((t) => t <= e).sort((e, t) => e - t);
}
//#endregion
//#region node_modules/@slidev/client/layouts/error.vue
var Ae = {}, je = { class: "px-4 py-10 text-center text-red-700 dark:text-red-500 font-bold font-mono" };
function Me(e, n) {
	return r(), t("div", je, ee("Failed to fetch this slide. Please check your network connection."));
}
var N = /*#__PURE__*/ ne(Ae, [["render", Me]]), Ne = { class: "h-full w-full flex items-center justify-center gap-2 slidev-slide-loading" }, Pe = /* @__PURE__ */ o({
	__name: "SlideLoading",
	setup(n) {
		let i = p(!1);
		return e(() => {
			setTimeout(() => {
				i.value = !0;
			}, 200);
		}), (e, n) => (r(), t("div", Ne, [i.value ? (r(), t(u, { key: 0 }, [n[0] || (n[0] = d("div", { class: "i-svg-spinners-90-ring-with-bg text-xl" }, null, -1)), n[1] || (n[1] = d("div", null, "Loading slide...", -1))], 64)) : c("v-if", !0)]));
	}
}), P = b({
	theme: "default",
	background: "linear-gradient(135deg,",
	class: "text-center text-white",
	highlighter: "shiki",
	lineNumbers: !1,
	drawings: { persist: !1 },
	transition: "slide-left",
	title: "Toán 6 - Bài 2 (Slidev)",
	mdc: !0
}), Fe = v({
	get layout() {
		return P.layout;
	},
	get transition() {
		return P.transition;
	},
	get class() {
		return P.class;
	},
	get clicks() {
		return P.clicks;
	},
	get name() {
		return P.name;
	},
	get preload() {
		return P.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "79nbjp",
		frontmatterRaw: "theme: default\nbackground: linear-gradient(135deg, #0EA5E9 0%, #6366F1 50%, #8B5CF6 100%)\nclass: text-center text-white\nhighlighter: shiki\nlineNumbers: false\ndrawings:\n  persist: false\ntransition: slide-left\ntitle: Toán 6 - Bài 2 (Slidev)\nmdc: true\n",
		note: "",
		title: "Toán 6 - Bài 2 (Slidev)",
		index: 0,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: P,
		filepath: "",
		start: 0,
		sourceIndex: 0,
		id: 0,
		no: 1
	}),
	__clicksContext: null,
	__preloaded: !1
}), F = b({ layout: "default" }), Ie = v({
	get layout() {
		return F.layout;
	},
	get transition() {
		return F.transition;
	},
	get class() {
		return F.class;
	},
	get clicks() {
		return F.clicks;
	},
	get name() {
		return F.name;
	},
	get preload() {
		return F.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-onn0jl",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "🎯 3 Trạm Khám Phá Của Bài Học",
		level: 1,
		index: 1,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: F,
		filepath: "",
		start: 28,
		sourceIndex: 1,
		id: 1,
		no: 2
	}),
	__clicksContext: null,
	__preloaded: !1
}), I = b({ layout: "default" }), Le = v({
	get layout() {
		return I.layout;
	},
	get transition() {
		return I.transition;
	},
	get class() {
		return I.class;
	},
	get clicks() {
		return I.clicks;
	},
	get name() {
		return I.name;
	},
	get preload() {
		return I.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-r6x3gm",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "📏 1. Tia Số & So Sánh Số Tự Nhiên",
		level: 1,
		index: 2,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: I,
		filepath: "",
		start: 62,
		sourceIndex: 2,
		id: 2,
		no: 3
	}),
	__clicksContext: null,
	__preloaded: !1
}), L = b({ layout: "default" }), Re = v({
	get layout() {
		return L.layout;
	},
	get transition() {
		return L.transition;
	},
	get class() {
		return L.class;
	},
	get clicks() {
		return L.clicks;
	},
	get name() {
		return L.name;
	},
	get preload() {
		return L.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-j61ryk",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "Số Liền Trước & Số Liền Sau",
		level: 1,
		index: 3,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: L,
		filepath: "",
		start: 97,
		sourceIndex: 3,
		id: 3,
		no: 4
	}),
	__clicksContext: null,
	__preloaded: !1
}), R = b({ layout: "default" }), ze = v({
	get layout() {
		return R.layout;
	},
	get transition() {
		return R.transition;
	},
	get class() {
		return R.class;
	},
	get clicks() {
		return R.clicks;
	},
	get name() {
		return R.name;
	},
	get preload() {
		return R.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-mlhmph",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "🖐️ Bí Mật 10 Ngón Tay Hệ Thập Phân",
		level: 1,
		index: 4,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: R,
		filepath: "",
		start: 132,
		sourceIndex: 4,
		id: 4,
		no: 5
	}),
	__clicksContext: null,
	__preloaded: !1
}), z = b({ layout: "default" }), Be = v({
	get layout() {
		return z.layout;
	},
	get transition() {
		return z.transition;
	},
	get class() {
		return z.class;
	},
	get clicks() {
		return z.clicks;
	},
	get name() {
		return z.name;
	},
	get preload() {
		return z.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-uz58cj",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "👑 Vị Trí Ghế Ngồi Quyết Định Quyền Lực",
		level: 1,
		index: 5,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: z,
		filepath: "",
		start: 156,
		sourceIndex: 5,
		id: 5,
		no: 6
	}),
	__clicksContext: null,
	__preloaded: !1
}), B = b({ layout: "default" }), Ve = v({
	get layout() {
		return B.layout;
	},
	get transition() {
		return B.transition;
	},
	get class() {
		return B.class;
	},
	get clicks() {
		return B.clicks;
	},
	get name() {
		return B.name;
	},
	get preload() {
		return B.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-96tif0",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "📐 Công Thức Cấu Tạo Số $\\overline{ab}$ & $\\overline{abc}$",
		level: 1,
		index: 6,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: B,
		filepath: "",
		start: 186,
		sourceIndex: 6,
		id: 6,
		no: 7
	}),
	__clicksContext: null,
	__preloaded: !1
}), V = b({
	layout: "center",
	class: "text-center bg-gradient-to-br from-emerald-100 to-teal-200"
}), He = v({
	get layout() {
		return V.layout;
	},
	get transition() {
		return V.transition;
	},
	get class() {
		return V.class;
	},
	get clicks() {
		return V.clicks;
	},
	get name() {
		return V.name;
	},
	get preload() {
		return V.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "v72qbb",
		frontmatterRaw: "layout: center\nclass: text-center bg-gradient-to-br from-emerald-100 to-teal-200\n",
		note: "",
		title: "GIẢI LAO 5 - 10 PHÚT NHÉ!",
		level: 1,
		index: 7,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: V,
		filepath: "",
		start: 212,
		sourceIndex: 7,
		id: 7,
		no: 8
	}),
	__clicksContext: null,
	__preloaded: !1
}), H = b({ layout: "default" }), Ue = v({
	get layout() {
		return H.layout;
	},
	get transition() {
		return H.transition;
	},
	get class() {
		return H.class;
	},
	get clicks() {
		return H.clicks;
	},
	get name() {
		return H.name;
	},
	get preload() {
		return H.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-9qnopw",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "🏛️ 3 Ký Tự Gốc Từ Bàn Tay 🖐️",
		level: 1,
		index: 8,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: H,
		filepath: "",
		start: 226,
		sourceIndex: 8,
		id: 8,
		no: 9
	}),
	__clicksContext: null,
	__preloaded: !1
}), U = b({ layout: "default" }), We = v({
	get layout() {
		return U.layout;
	},
	get transition() {
		return U.transition;
	},
	get class() {
		return U.class;
	},
	get clicks() {
		return U.clicks;
	},
	get name() {
		return U.name;
	},
	get preload() {
		return U.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "8g75pm",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "🔑 Quy Tắc: \"Phải Cộng (+) - Trái Trừ (-)\"",
		level: 1,
		index: 9,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: U,
		filepath: "",
		start: 261,
		sourceIndex: 9,
		id: 9,
		no: 10
	}),
	__clicksContext: null,
	__preloaded: !1
}), W = b({ layout: "default" }), Ge = v({
	get layout() {
		return W.layout;
	},
	get transition() {
		return W.transition;
	},
	get class() {
		return W.class;
	},
	get clicks() {
		return W.clicks;
	},
	get name() {
		return W.name;
	},
	get preload() {
		return W.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-5s7g5y",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "📊 Bảng Tra Cứu Số La Mã Từ 1 Đến 30",
		level: 1,
		index: 10,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: W,
		filepath: "",
		start: 295,
		sourceIndex: 10,
		id: 10,
		no: 11
	}),
	__clicksContext: null,
	__preloaded: !1
}), G = b({ layout: "default" }), Ke = v({
	get layout() {
		return G.layout;
	},
	get transition() {
		return G.transition;
	},
	get class() {
		return G.class;
	},
	get clicks() {
		return G.clicks;
	},
	get name() {
		return G.name;
	},
	get preload() {
		return G.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "fgbu7j",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "🎮 Thám Hiểm Game: Mở Khóa Rương Báu",
		level: 1,
		index: 11,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: G,
		filepath: "",
		start: 325,
		sourceIndex: 11,
		id: 11,
		no: 12
	}),
	__clicksContext: null,
	__preloaded: !1
}), K = b({
	layout: "default",
	class: "bg-gradient-to-br from-indigo-900 to-indigo-950 text-white"
}), qe = v({
	get layout() {
		return K.layout;
	},
	get transition() {
		return K.transition;
	},
	get class() {
		return K.class;
	},
	get clicks() {
		return K.clicks;
	},
	get name() {
		return K.name;
	},
	get preload() {
		return K.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "chfbkc",
		frontmatterRaw: "layout: default\nclass: bg-gradient-to-br from-indigo-900 to-indigo-950 text-white\n",
		note: "",
		title: "✨ TỔNG KẾT: 3 ĐIỀU CỐT LÕI BỎ TÚI",
		level: 1,
		index: 12,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: K,
		filepath: "",
		start: 345,
		sourceIndex: 12,
		id: 12,
		no: 13
	}),
	__clicksContext: null,
	__preloaded: !1
}), q = b({ layout: "default" }), Je = v({
	get layout() {
		return q.layout;
	},
	get transition() {
		return q.transition;
	},
	get class() {
		return q.class;
	},
	get clicks() {
		return q.clicks;
	},
	get name() {
		return q.name;
	},
	get preload() {
		return q.preload;
	},
	slide: g(g({}, {
		content: "",
		revision: "-p5rn5v",
		frontmatterRaw: "layout: default\n",
		note: "",
		title: "🏆 Phiếu Thử Thách Nhận Điểm 10",
		level: 1,
		index: 13,
		noteHTML: "",
		images: [],
		raw: ""
	}), {}, {
		frontmatter: q,
		filepath: "",
		start: 371,
		sourceIndex: 13,
		id: 13,
		no: 14
	}),
	__clicksContext: null,
	__preloaded: !1
}), J = Array(14), Y = (e, t) => n({
	loader: t,
	delay: 300,
	loadingComponent: Pe,
	errorComponent: N,
	onError: (t) => console.error("Failed to load slide " + (e + 1), t)
}), Ye = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[0]) == null ? J[0] = yield import("./md-BayZqM-e.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), Xe = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[1]) == null ? J[1] = yield import("../md-BAnbl10Z.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), Ze = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[2]) == null ? J[2] = yield import("../md-CkrbkbR4.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), Qe = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[3]) == null ? J[3] = yield import("../md-rm8_MUrf.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), $e = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[4]) == null ? J[4] = yield import("../md-BVTjOPGl.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), et = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[5]) == null ? J[5] = yield import("../md-AmFXN0Dh.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), tt = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[6]) == null ? J[6] = yield import("../md-KtsKvkwO.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), nt = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[7]) == null ? J[7] = yield import("./md-C98b9j4N.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), rt = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[8]) == null ? J[8] = yield import("../md-o8qPGkGV.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), it = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[9]) == null ? J[9] = yield import("../md-Dtnhb9z5.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), at = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[10]) == null ? J[10] = yield import("../md-BzynlMie.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), ot = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[11]) == null ? J[11] = yield import("../md-De-4Rx2d.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), st = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[12]) == null ? J[12] = yield import("../md-ByIpa45v.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), ct = function() {
	var e = y(function* () {
		try {
			var e;
			return (e = J[13]) == null ? J[13] = yield import("../md-Bs8VkyEQ.js") : e;
		} catch (e) {
			return console.error("slide failed to load", e), N;
		}
	});
	return function() {
		return e.apply(this, arguments);
	};
}(), lt = [
	{
		no: 1,
		meta: Fe,
		load: Ye,
		component: Y(0, Ye)
	},
	{
		no: 2,
		meta: Ie,
		load: Xe,
		component: Y(1, Xe)
	},
	{
		no: 3,
		meta: Le,
		load: Ze,
		component: Y(2, Ze)
	},
	{
		no: 4,
		meta: Re,
		load: Qe,
		component: Y(3, Qe)
	},
	{
		no: 5,
		meta: ze,
		load: $e,
		component: Y(4, $e)
	},
	{
		no: 6,
		meta: Be,
		load: et,
		component: Y(5, et)
	},
	{
		no: 7,
		meta: Ve,
		load: tt,
		component: Y(6, tt)
	},
	{
		no: 8,
		meta: He,
		load: nt,
		component: Y(7, nt)
	},
	{
		no: 9,
		meta: Ue,
		load: rt,
		component: Y(8, rt)
	},
	{
		no: 10,
		meta: We,
		load: it,
		component: Y(9, it)
	},
	{
		no: 11,
		meta: Ge,
		load: at,
		component: Y(10, at)
	},
	{
		no: 12,
		meta: Ke,
		load: ot,
		component: Y(11, ot)
	},
	{
		no: 13,
		meta: qe,
		load: st,
		component: Y(12, st)
	},
	{
		no: 14,
		meta: Je,
		load: ct,
		component: Y(13, ct)
	}
], X = h(lt);
//#endregion
//#region node_modules/@slidev/client/logic/route.ts
function ut(e, t, { mode: n = "replace" } = {}) {
	let r = ie();
	return x({
		get() {
			let n = r.currentRoute.value.query[e];
			return n == null ? t == null ? null : t : Array.isArray(n) ? n.filter(Boolean) : n;
		},
		set(a) {
			i(() => {
				let i = r.currentRoute.value.query[e];
				(i == null ? t == null ? void 0 : t.toString() : i) !== a.toString() && r[f(n)]({ query: g(g({}, r.currentRoute.value.query), {}, { [e]: `${a}` === t ? void 0 : a }) });
			});
		}
	});
}
//#endregion
//#region node_modules/@slidev/client/logic/slidePath.ts
function dt(e, t, n = !1) {
	var r, i;
	let a = (r = (i = e.meta.slide) == null ? void 0 : i.frontmatter.routeAlias) == null ? e.no : r;
	return n ? `/export/${a}` : t ? `/presenter/${a}` : `/${a}`;
}
//#endregion
//#region node_modules/@slidev/client/logic/slides.ts
function Z(e) {
	return X.value.find((t) => {
		var n;
		return t.no === +e || ((n = t.meta.slide) == null ? void 0 : n.frontmatter.routeAlias) === e;
	});
}
function Q(e, t, n = !1) {
	return (typeof e == "number" || typeof e == "string") && (e = Z(e)), dt(e, t, n);
}
//#endregion
//#region node_modules/@slidev/client/logic/transition.ts
var ft = {
	"slide-left": "slide-left | slide-right",
	"slide-right": "slide-right | slide-left",
	"slide-up": "slide-up | slide-down",
	"slide-down": "slide-down | slide-up"
};
function pt(e, t = !1) {
	if (!e || (typeof e == "string" && (e = { name: e }), !e.name)) return;
	let n = e.name.includes("|") ? e.name : ft[e.name] || e.name;
	if (n.includes("|")) {
		let [e, r] = n.split("|").map((e) => e.trim());
		n = t ? r : e;
	}
	if (n) return g(g({}, e), {}, { name: n });
}
function mt(e, t, n) {
	var r, i;
	let a = e > 0 ? n == null || (r = n.meta) == null ? void 0 : r.transition : t == null || (i = t.meta) == null ? void 0 : i.transition;
	return a || (a = M.transition || void 0), pt(a, e < 0);
}
//#endregion
//#region node_modules/@slidev/client/state/storage.ts
var ht = p(!1), gt = p(!1), _t = p(!1), vt = p(!1), yt = p(!1), bt = p(!1), xt = p(!0), St = b(/* @__PURE__ */ new Set()), Ct = x(() => St.size > 0), wt = ce(g({ xs: 460 }, C)), Tt = oe(), Et = w(), Dt = x(() => Tt.height.value - Tt.width.value / _e.value > 120), Ot = D(re ? document.body : null), kt = se(), At = x(() => {
	var e;
	return ["INPUT", "TEXTAREA"].includes(((e = kt.value) == null ? void 0 : e.tagName) || "");
}), jt = x(() => {
	var e;
	return ["BUTTON", "A"].includes(((e = kt.value) == null ? void 0 : e.tagName) || "");
});
T("slidev-camera", "default", { listenToStorageChanges: !1 }), T("slidev-mic", "default", { listenToStorageChanges: !1 });
var Mt = T("slidev-scale", 0), Nt = T("slidev-wake-lock", !0), Pt = T("slidev-hide-cursor-idle", !0);
T("slidev-skip-export-pdf-tip", !1), T("slidev-export-capture-delay", 400, { listenToStorageChanges: !1 });
var Ft = T("slidev-presenter-cursor", !0, { listenToStorageChanges: !1 }), It = T("slidev-cursor-style", "cursor", { listenToStorageChanges: !1 });
function Lt() {
	Ft.value = !Ft.value;
}
var Rt = T("slidev-show-editor", !1, { listenToStorageChanges: !1 }), zt = T("slidev-editor-vertical", !1, { listenToStorageChanges: !1 }), Bt = T("slidev-editor-width", re ? window.innerWidth * .4 : 318, { listenToStorageChanges: !1 }), Vt = T("slidev-editor-height", re ? window.innerHeight * .4 : 300, { listenToStorageChanges: !1 }), Ht = h(null), $ = T("slidev-presenter-font-size", 1, { listenToStorageChanges: !1 }), Ut = T("slidev-presenter-layout", 1, { listenToStorageChanges: !1 }), Wt = {
	invert: !1,
	contrast: 1,
	brightness: 1,
	hueRotate: 0,
	saturate: 1,
	sepia: 0
}, Gt = T("slidev-viewer-css-filter", Wt, {
	listenToStorageChanges: !1,
	mergeDefaults: !0,
	deep: !0
}), Kt = x(() => Object.keys(Wt).some((e) => Gt.value[e] !== Wt[e]));
function qt() {
	Ut.value += 1, Ut.value > 3 && (Ut.value = 1);
}
function Jt() {
	$.value = Math.min(2, $.value + .1);
}
function Yt() {
	$.value = Math.max(.5, $.value - .1);
}
var Xt = ae(vt), Zt = T("slidev-sync-directions", {
	viewerSend: !0,
	viewerReceive: !0,
	presenterSend: !0,
	presenterReceive: !0
}, {
	listenToStorageChanges: !1,
	mergeDefaults: !0
});
//#endregion
//#region node_modules/@slidev/client/composables/useTocTree.ts
function Qt(e, t, n = 1) {
	var r;
	let i = (r = t.meta.slide.level) == null ? n : r;
	if (i && i > n && e.length > 0) Qt(e[e.length - 1].children, t, n + 1);
	else {
		var a, o, s, c;
		e.push({
			no: t.no,
			children: [],
			level: n,
			titleLevel: i,
			path: Q((a = (o = t.meta.slide) == null || (o = o.frontmatter) == null ? void 0 : o.routeAlias) == null ? t.no : a, !1),
			hideInToc: !!((s = t.meta) != null && (s = s.slide) != null && (s = s.frontmatter) != null && s.hideInToc),
			title: (c = t.meta) == null || (c = c.slide) == null ? void 0 : c.title
		});
	}
}
function $t(e, t, n = !1, r, i) {
	return e.map((e) => {
		let a = g(g({}, e), {}, {
			active: e.no === (i == null ? void 0 : i.value),
			hasActiveParent: n
		});
		return a.children.length > 0 && (a.children = $t(a.children, t, a.active || a.hasActiveParent, a, i)), r && (a.active || a.activeParent) && (r.activeParent = !0), a;
	});
}
function en(e, t = 1) {
	return e.filter((e) => !e.hideInToc).map((e) => g(g({}, e), {}, { children: en(e.children, t + 1) }));
}
function tn(e, t, n) {
	let r = x(() => e.value.filter((e) => {
		var t;
		return (t = e.meta) == null || (t = t.slide) == null ? void 0 : t.title;
	}).reduce((e, t) => (Qt(e, t), e), [])), i = x(() => $t(r.value, n.value, void 0, void 0, t));
	return x(() => en(i.value));
}
//#endregion
//#region node_modules/@slidev/client/composables/useNav.ts
function nn(e, t, n = p(0), r, i, a) {
	let o = x(() => X.value.length), c = p(0), l = p(0), u = x(() => Q(e.value, r.value)), d = x(() => e.value.no), f = x(() => {
		var t;
		return ((t = e.value.meta) == null ? void 0 : t.layout) || (d.value === 1 ? "cover" : "default");
	}), m = x(() => e.value.meta.slide.frontmatter), h = x(() => t.value.current), _ = x(() => t.value.clicksStart), v = x(() => t.value.total), b = x(() => X.value[Math.min(X.value.length, d.value + 1) - 1]), ee = x(() => X.value[Math.max(1, d.value - 1) - 1]), te = x(() => d.value < X.value.length || h.value < v.value), ne = x(() => d.value > 1 || h.value > 0), re = x(() => i.value ? void 0 : mt(c.value, e.value, ee.value));
	s(e, (e, t) => {
		c.value = e.no - t.no;
	});
	function ie(e) {
		return S.apply(this, arguments);
	}
	function S() {
		return S = y(function* (e) {
			return !1;
		}), S.apply(this, arguments);
	}
	let ae = tn(X, d, e);
	function oe() {
		return C.apply(this, arguments);
	}
	function C() {
		return C = y(function* () {
			l.value = 1, v.value <= n.value ? yield T() : n.value += 1;
		}), C.apply(this, arguments);
	}
	function se() {
		return w.apply(this, arguments);
	}
	function w() {
		return w = y(function* () {
			l.value = -1, n.value <= _.value ? yield ce(!0) : --n.value;
		}), w.apply(this, arguments);
	}
	function T() {
		return E.apply(this, arguments);
	}
	function E() {
		return E = y(function* (e = !1) {
			l.value = 1, d.value < X.value.length && (yield A(d.value + 1, e && !i.value ? O : void 0));
		}), E.apply(this, arguments);
	}
	function ce() {
		return D.apply(this, arguments);
	}
	function D() {
		return D = y(function* (e = !1) {
			l.value = -1, d.value > 1 && (yield A(d.value - 1, e && !i.value ? O : void 0));
		}), D.apply(this, arguments);
	}
	function le() {
		return A(1);
	}
	function ue() {
		return A(o.value);
	}
	function A(e) {
		return j.apply(this, arguments);
	}
	function j() {
		return j = y(function* (e, t = 0, i = !1) {
			var o, s, c, l, u;
			yt.value = !1;
			let f = d.value !== e, p = t !== n.value, m = (o = Z(e)) == null ? void 0 : o.meta, h = (s = m == null || (c = m.slide) == null ? void 0 : c.frontmatter.clicksStart) == null ? 0 : s;
			t = k(t, h, (l = m == null || (u = m.__clicksContext) == null ? void 0 : u.total) == null ? O : l), (i || f || p) && (yield a == null ? void 0 : a.push({
				path: Q(e, r.value, a.currentRoute.value.name === "export"),
				query: g(g({}, a.currentRoute.value.query), {}, {
					clicks: t === 0 ? void 0 : t.toString(),
					embedded: location.search.includes("embedded") ? "true" : void 0
				})
			}));
		}), j.apply(this, arguments);
	}
	function de() {
		a == null || a.push({
			path: Q(d.value, !0),
			query: g({}, a.currentRoute.value.query)
		});
	}
	function fe() {
		a == null || a.push({
			path: Q(d.value, !1),
			query: g({}, a.currentRoute.value.query)
		});
	}
	return {
		slides: X,
		total: o,
		currentPath: u,
		currentSlideNo: d,
		currentPage: d,
		currentSlideRoute: e,
		currentLayout: f,
		currentFrontmatter: m,
		currentTransition: re,
		clicksDirection: l,
		nextRoute: b,
		prevRoute: ee,
		clicksContext: t,
		clicks: h,
		clicksStart: _,
		clicksTotal: v,
		hasNext: te,
		hasPrev: ne,
		tocTree: ae,
		navDirection: c,
		openInEditor: ie,
		next: oe,
		prev: se,
		go: A,
		goLast: ue,
		goFirst: le,
		nextSlide: T,
		prevSlide: ce,
		enterPresenter: de,
		exitPresenter: fe
	};
}
var rn = S(() => {
	var e;
	let t = ie(), n = le(), r = x(() => {
		var e;
		return t == null || (e = t.currentRoute) == null || (e = e.value) == null || e.query, new URLSearchParams(location.search);
	}), i = x(() => r.value.has("print") || n.name === "export"), a = p(r.value.get("print") === "clicks"), o = x(() => r.value.has("embedded")), s = x(() => n.name === "play"), c = x(() => n.name === "presenter"), l = x(() => n.name === "notes"), u = x(() => !c.value && (!M.remote || r.value.get("password") === M.remote)), d = x(() => !!n.params.no), f = x(() => {
		var e, t;
		return d.value ? (e = (t = Z(n.params.no)) == null ? void 0 : t.no) == null ? 1 : e : 1;
	}), m = x(() => X.value[f.value - 1]), h = p(ke(X.value.length, n == null || (e = n.query) == null ? void 0 : e.range)), g = ut("clicks", "0"), _ = x(() => y(m.value)), v = x({
		get() {
			let e = +(g.value || 0);
			return Number.isNaN(e) && (e = 0), e;
		},
		set(e) {
			yt.value = !1, g.value = e.toString();
		}
	});
	function y(e) {
		var t, n, r;
		if (e != null && (t = e.meta) != null && t.__clicksContext) return e.meta.__clicksContext;
		let i = e.no, a = Te(x({
			get() {
				var e;
				return f.value === i ? Math.max(+((e = g.value) == null ? 0 : e), a.clicksStart) : f.value > i ? O : a.clicksStart;
			},
			set(e) {
				f.value === i && (g.value = e.toString());
			}
		}), (n = e == null || (r = e.meta.slide) == null ? void 0 : r.frontmatter.clicksStart) == null ? 0 : n, e == null ? void 0 : e.meta.clicks);
		return e != null && e.meta && (e.meta.__clicksContext = a), a;
	}
	return {
		router: t,
		currentRoute: x(() => n),
		isPrintMode: i,
		isPrintWithClicks: a,
		isEmbedded: o,
		isPlaying: s,
		isPresenter: c,
		isNotesViewer: l,
		isPresenterAvailable: u,
		hasPrimarySlide: d,
		currentSlideNo: f,
		currentSlideRoute: m,
		clicksContext: _,
		queryClicksRaw: g,
		queryClicks: v,
		printRange: h,
		getPrimaryClicks: y
	};
}), an = S(() => {
	let e = rn(), t = ie(), n = nn(e.currentSlideRoute, e.clicksContext, e.queryClicks, e.isPresenter, e.isPrintMode, t);
	return s([n.total, e.currentRoute], y(function* () {
		let t = e.currentRoute.value.params.no;
		e.hasPrimarySlide.value && !Z(t) && (t && t !== "index.html" ? yield n.go(n.total.value, 0, !0) : yield n.go(1, 0, !0));
	}), {
		flush: "pre",
		immediate: !0
	}), g(g({}, n), e);
});
function on() {
	let e = an(), t = a() ? E(ue, void 0) : void 0;
	if (!t) return e;
	let n = m(t).nav;
	return g(g({}, e), n);
}
//#endregion
export { k as $, Mt as A, Q as B, Ct as C, vt as D, gt as E, Gt as F, ge as G, Oe as H, Wt as I, ye as J, Se as K, Nt as L, Xt as M, Lt as N, Ft as O, qt as P, M as Q, Tt as R, xt as S, _t as T, Te as U, X as V, Ee as W, xe as X, ve as Y, be as Z, jt as _, It as a, Ut as b, Vt as c, Kt as d, pe as et, Pt as f, At as g, zt as h, wt as i, Zt as j, ht as k, Bt as l, Jt as m, Ht as n, Yt as o, yt as p, _e as q, kt as r, bt as s, on as t, Ot as u, Dt as v, Rt as w, $ as x, Et as y, Z as z };
