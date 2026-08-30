import { $ as e, B as t, I as n, M as r, N as i, O as a, Q as o, U as s, V as c, X as l, _ as u, _t as d, a as f, at as p, bt as m, c as h, dt as g, ft as _, gt as v, ht as y, it as b, j as x, k as S, lt as C, mt as w, o as T, pt as E, rt as D, s as O, st as k, ut as A, vt as j, y as M, yt as N } from "./shiki-BdJWbgyq.js";
//#region node_modules/nostics/dist/index.mjs
function P(e) {
	var t;
	let n = `[${e.name}] ${e.message}`, r = [];
	return e.fix && r.push(`fix: ${e.fix}`), (t = e.sources) != null && t.length && r.push(`sources: ${e.sources.join(", ")}`), e.docs && r.push(`see: ${e.docs}`), r.length === 0 ? n : [n, ...r.map((e, t) => `${t < r.length - 1 ? "├▶" : "╰▶"} ${e}`)].join("\n");
}
function ee(e, ...t) {
	return typeof e == "function" ? e(...t) : e;
}
/* @__NO_SIDE_EFFECTS__ */
function te({ method: e = "warn", formatter: t = P } = {}) {
	return (n, { method: r = e } = {}) => {
		console[r](t(n));
	};
}
var ne = Error.captureStackTrace, re = class e extends Error {
	get why() {
		return this.message;
	}
	constructor(t, n = e) {
		super(t.why, { cause: t.cause }), h(this, "name", void 0), h(this, "code", void 0), h(this, "docs", void 0), h(this, "fix", void 0), h(this, "sources", void 0), this.code = this.name = t.code, this.fix = t.fix, this.docs = t.docs, this.sources = t.sources, ne == null || ne(this, n);
	}
	toJSON() {
		return {
			name: this.name,
			why: this.why,
			fix: this.fix,
			docs: this.docs,
			sources: this.sources,
			cause: this.cause,
			stack: this.stack
		};
	}
};
function ie(e, t) {
	return typeof e == "string" ? `${e}/${t.toLowerCase()}` : e == null ? void 0 : e(t);
}
/* @__NO_SIDE_EFFECTS__ */
function ae(e) {
	var t;
	let n = (t = e.reporters) == null ? [] : t, r = {}, { docsBase: i } = e;
	for (let t of Object.keys(e.codes)) {
		let a = e.codes[t], o = a.docs === !1 ? void 0 : a.docs || ie(i, t), s = (e = {}, r = {}) => {
			let i = new re({
				code: t,
				why: ee(a.why, e),
				fix: ee(a.fix, e),
				docs: o,
				cause: e.cause,
				sources: e.sources
			}, s);
			for (let e of n) e(i, r);
			return i;
		};
		r[t] = s;
	}
	return r;
}
//#endregion
//#region node_modules/vue-router/dist/useApi-CUgTH_jn.js
var oe = (e) => e.startsWith("/");
function se(e) {
	return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function ce(e) {
	return e.__esModule || e[Symbol.toStringTag] === "Module" || e.default && se(e.default);
}
var F = Object.assign;
function le(e, t) {
	let n = {};
	for (let r in t) {
		let i = t[r];
		n[r] = I(i) ? i.map(e) : e(i);
	}
	return n;
}
var ue = () => {}, I = Array.isArray;
function de(e, t) {
	let n = {};
	for (let r in e) n[r] = r in t ? t[r] : e[r];
	return n;
}
var fe = Symbol(process.env.NODE_ENV === "production" ? "" : "navigation failure"), pe = {
	1({ location: e, currentLocation: t }) {
		return `No match for\n ${JSON.stringify(e)}${t ? "\nwhile being at\n" + JSON.stringify(t) : ""}`;
	},
	2({ from: e, to: t }) {
		return `Redirected from "${e.fullPath}" to "${_e(t)}" via a navigation guard.`;
	},
	4({ from: e, to: t }) {
		return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
	},
	8({ from: e, to: t }) {
		return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
	},
	16({ from: e, to: t }) {
		return `Avoided redundant navigation to current location: "${e.fullPath}".`;
	}
};
function me(e, t) {
	return process.env.NODE_ENV === "production" ? F(/* @__PURE__ */ Error(), {
		type: e,
		[fe]: !0
	}, t) : F(Error(pe[e](t)), {
		type: e,
		[fe]: !0
	}, t);
}
function he(e, t) {
	return e instanceof Error && fe in e && (t == null || !!(e.type & t));
}
var ge = [
	"params",
	"query",
	"hash"
];
function _e(e) {
	if (!e || typeof e == "string") return e;
	if (e.path != null) return e.path;
	let t = {};
	for (let n of ge) n in e && (t[n] = e[n]);
	return JSON.stringify(t, null, 2);
}
var L = /*#__PURE__*/ ae({
	reporters: [/*#__PURE__*/ te()],
	codes: {
		VUE_ROUTER_R0001: {
			why: (e) => `Parent route "${e.name}" not found when adding child route`,
			fix: "Add the parent route before its children, or check the parent name for typos.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Adding-nested-routes"
		},
		VUE_ROUTER_R0002: {
			why: (e) => `Cannot remove non-existent route "${e.name}"`,
			fix: "Check the route name; it may already have been removed or was never added.",
			docs: "https://router.vuejs.org/guide/advanced/dynamic-routing.html#Removing-routes"
		},
		VUE_ROUTER_R0003: {
			why: (e) => `Location "${_e(e.location)}" resolved to "${e.href}". A resolved location cannot start with multiple slashes.`,
			fix: "Remove the leading slashes from the location or fix the route configuration."
		},
		VUE_ROUTER_R0004: {
			why: (e) => `No match found for location with path "${_e(e.path)}"`,
			fix: "Add a route matching this path or check for typos in the location.",
			docs: "https://router.vuejs.org/guide/essentials/dynamic-matching.html#Catch-all-404-Not-found-Route"
		},
		VUE_ROUTER_R0005: {
			why: (e) => `router.resolve() was passed an invalid location. This will fail in production.\nLocation: ${_e(e.rawLocation)}`,
			fix: "Pass a valid route location: a string path or an object with `path` or `name`."
		},
		VUE_ROUTER_R0006: {
			why: (e) => `Path "${e.path}" was passed with params but they will be ignored because a "path" was passed.`,
			fix: "Use a named route `{ name, params }` instead of `{ path, params }`.",
			docs: "https://router.vuejs.org/guide/essentials/navigation.html#Navigate-to-a-different-location"
		},
		VUE_ROUTER_R0007: {
			why: (e) => `A \`hash\` should always start with the character "#" but received "${e.hash}".`,
			fix: (e) => `Prepend "#" to the hash in your route location: use "#${e.hash}".`
		},
		VUE_ROUTER_R0008: {
			why: (e) => `Invalid redirect found:\n${e.target}\n when navigating to "${e.to}".\nThis will break in production.`,
			fix: "A redirect must resolve to a location with a `name` or `path`; return one of those (or a string path) from `redirect`.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Redirect"
		},
		VUE_ROUTER_R0009: {
			why: (e) => `Detected a possibly infinite redirection in a navigation guard when going from "${e.from}" to "${e.to}". Aborting to avoid a Stack Overflow. This might break in production if not fixed.`,
			fix: "A guard is returning a new location on every call; make that return conditional so it only redirects when actually needed.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Global-Before-Guards"
		},
		VUE_ROUTER_R0010: {
			why: "Uncaught error during route navigation",
			fix: "Register an error handler with `router.onError()` to handle navigation errors."
		},
		VUE_ROUTER_R0011: {
			why: "Unexpected error when starting the router:",
			fix: "Inspect the actual cause; a navigation guard or async component likely threw during the initial navigation."
		},
		VUE_ROUTER_R0020: {
			why: (e) => `No active route record was found when calling \`${e.fn}()\`. Maybe you called it inside of App.vue?`,
			fix: "Call it from a component rendered inside <router-view> (a page component or one of its children), not from App.vue.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0021: {
			why: "No active route record was found when reactivating component with navigation guard. This is likely a bug in vue-router.",
			fix: "Report with a minimal reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0022: {
			why: (e) => `${e.fn}() was called outside of component setup but it must be called at the top of a setup function`,
			fix: "Call it synchronously at the top of `setup()`, before any `await`.",
			docs: "https://router.vuejs.org/guide/advanced/composition-api.html#Navigation-Guards"
		},
		VUE_ROUTER_R0023: {
			why: (e) => `The "next" callback was never called inside of ${e.name ? `"${e.name}"` : ""}:\n${e.guard}`,
			fix: "Make sure `next()` runs on every branch, including early returns and async paths, or drop the `next` parameter and return the value instead.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0024: {
			why: (e) => `The "next" callback was called more than once in one navigation guard when going from "${e.from}" to "${e.to}". This will fail in production.`,
			fix: "Call `next()` exactly once per guard: remove the extra call, or migrate to returning the value you passed to `next()`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0025: {
			why: "The `next()` callback in navigation guards is deprecated.",
			fix: "Return the value instead: `next()` becomes `return`, `next(false)` becomes `return false`, `next(\"/path\")` becomes `return \"/path\"`.",
			docs: "https://router.vuejs.org/guide/advanced/navigation-guards.html#Optional-third-argument-next"
		},
		VUE_ROUTER_R0026: {
			why: (e) => `Record with path "${e.path}" is either missing a "component(s)" or "children" property.`,
			fix: "Add a `component`, `components`, or `children` to the route record.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0027: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is not a valid component. Received "${e.received}".`,
			fix: "Pass a component or a function returning a Promise that resolves to one."
		},
		VUE_ROUTER_R0028: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is a Promise instead of a function that returns a Promise. This will break in production if not fixed.`,
			fix: "Defer the import in an arrow function so it loads lazily: write \"() => import('./MyPage.vue')\", not \"import('./MyPage.vue')\".",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0029: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is defined using "defineAsyncComponent()".`,
			fix: "Drop the wrapper and pass \"() => import('./MyPage.vue')\" directly; the router handles lazy components itself.",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html#Relationship-to-async-components"
		},
		VUE_ROUTER_R0030: {
			why: (e) => `Component "${e.name}" in record with path "${e.path}" is a function that does not return a Promise. This will break in production if not fixed.`,
			fix: "Return a dynamic import (`() => import(\"./MyPage.vue\")`) from the function, or add a `displayName` if it is a functional component.",
			docs: "https://router.vuejs.org/guide/advanced/lazy-loading.html"
		},
		VUE_ROUTER_R0040: {
			why: (e) => `Because "${e.el}" starts with "#", scrollBehavior resolves it as an element id via document.getElementById("${e.el.slice(1)}"), not as a CSS selector. No element has that id, but "${e.el}" does match an element with document.querySelector().`,
			fix: (e) => `Resolve the element yourself and return the node: el: document.querySelector('${e.el}').`,
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0041: {
			why: (e) => `The selector "${e.el}" is invalid. See https://mathiasbynens.be/notes/css-escapes or CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape) for the escaping rules.`,
			fix: "Build an id selector as `#${CSS.escape(id)}` so special characters in the id are escaped.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0042: {
			why: (e) => `Couldn't find element using selector "${e.el}" returned by scrollBehavior.`,
			fix: "Return a selector that matches an existing element, or guard against missing elements.",
			docs: "https://router.vuejs.org/guide/advanced/scroll-behavior.html"
		},
		VUE_ROUTER_R0050: {
			why: (e) => {
				let t;
				try {
					t = e.to === void 0 ? "undefined" : JSON.stringify(e.to);
				} catch (n) {
					t = String(e.to);
				}
				return `Invalid value for prop "to" in useLink()\n- to: ${t}`;
			},
			fix: "Pass a valid route location (a string path or an object) to the \"to\" prop."
		},
		VUE_ROUTER_R0060: {
			why: (e) => `<router-view> can no longer be used directly inside <${e.comp}>.`,
			fix: (e) => `Wrap the slot's resolved component with <${e.comp}> instead of nesting <router-view> in it:\n\n<router-view v-slot="{ Component }">\n  <${e.comp}>\n    <component :is="Component" />\n  </${e.comp}>\n</router-view>`,
			docs: "https://router.vuejs.org/guide/advanced/router-view-slot.html#KeepAlive-Transition"
		},
		VUE_ROUTER_R0070: {
			why: (e) => `Cannot resolve a relative location without an absolute path. Trying to resolve "${e.to}" from "${e.from}".`,
			fix: (e) => `Resolve from an absolute \`from\` path that starts with "/", e.g. "/${e.from}".`
		},
		VUE_ROUTER_R0080: {
			why: (e) => `Error decoding "${e.text}". Using original value`,
			fix: "Ensure the value is correctly percent-encoded."
		},
		VUE_ROUTER_R0090: {
			why: (e) => `Found duplicated params with name "${e.name}" for path "${e.path}". Only the last one will be available on "$route.params".`,
			fix: "Give each param a unique name within the path.",
			docs: "https://router.vuejs.org/guide/essentials/route-matching-syntax.html"
		},
		VUE_ROUTER_R0100: {
			why: (e) => `Discarded invalid param(s) "${e.params}" when navigating.` + e.inherited + " See https://github.com/vuejs/router/commit/e887570 for more details.",
			fix: "Only pass params that exist on the target route."
		},
		VUE_ROUTER_R0101: {
			why: (e) => `The Matcher cannot resolve relative paths but received "${e.path}". Unless you directly called \`matcher.resolve("${e.path}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`,
			fix: "Pass an absolute path (starting with \"/\") to the matcher."
		},
		VUE_ROUTER_R0102: {
			why: (e) => `Alias "${e.alias}" and the original record: "${e.original}" must have the exact same param named "${e.name}"`,
			fix: "Use the same param names in the alias as in the original route.",
			docs: "https://router.vuejs.org/guide/essentials/redirect-and-alias.html#Alias"
		},
		VUE_ROUTER_R0103: {
			why: (e) => `The route named "${e.name}" has a child without a name, an empty path, and no children. Using that name won't render the empty path child, so this is probably a mistake.`,
			fix: "Move the `name` onto the empty-path child; or, if intentional, give the child its own name to silence this.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html#Nested-Named-Routes"
		},
		VUE_ROUTER_R0104: {
			why: (e) => `Absolute path "${e.path}" must have the exact same param named "${e.name}" as its parent "${e.parent}".`,
			fix: "Include the parent route params in the absolute child path.",
			docs: "https://router.vuejs.org/guide/essentials/nested-routes.html"
		},
		VUE_ROUTER_R0105: {
			why: (e) => `Finding ancestor route "${e.ancestor}" failed for "${e.record}"`,
			fix: "Report a reproduction at https://github.com/vuejs/router/issues/new/choose."
		},
		VUE_ROUTER_R0110: {
			why: "A hash base must end with a \"#\"",
			fix: (e) => `Append "#" to the "base" argument passed to "createWebHashHistory()": "${e.base}" should be "${e.suggestion}".`
		},
		VUE_ROUTER_R0120: {
			why: "Error with push/replace State",
			fix: "The browser rejected the history API call; check for cross-origin or rate-limit issues."
		},
		VUE_ROUTER_R0121: {
			why: "history.state seems to have been manually replaced without preserving the necessary values.\nYou can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state",
			fix: "Merge the router's state into your own when calling it manually: `history.replaceState({ ...history.state, ...yourState }, '', url)`.",
			docs: "https://router.vuejs.org/guide/migration.html#Usage-of-history-state"
		},
		VUE_ROUTER_R1001: {
			why: (e) => `Data loader "${String(e.key)}" has a different parent than the current context. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1002: {
			why: "Returning a NavigationResult is deprecated.",
			fix: "Replace `return new NavigationResult(to)` with `reroute(to)`, which throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		},
		VUE_ROUTER_R1003: {
			why: (e) => `Loader "${e.key}"'s "commit()" was called but there is no staged data.`,
			fix: "Ensure the loader resolved before calling `commit()`.",
			docs: "https://router.vuejs.org/data-loaders/defining-loaders.html#Delaying-data-updates-with-commit"
		},
		VUE_ROUTER_R1004: {
			why: (e) => "A loader returned a NavigationResult but is not registered on the route." + e.key,
			fix: "Export the loader from the page component so it gets registered, e.g. `export const useUserData = defineLoader(...)`.",
			docs: "https://router.vuejs.org/data-loaders/organization.html"
		},
		VUE_ROUTER_R1005: {
			why: (e) => `Data loader "${e.key}" has itself as parent. This shouldn't be happening.`,
			fix: "Report a bug with a minimal reproduction at https://github.com/vuejs/router/."
		},
		VUE_ROUTER_R1006: {
			why: (e) => `A query was defined with the same key as the loader "[${e.key}]".\nSee https://pinia-colada.esm.dev/#TODO`,
			fix: "If the key is meant to match, use the data loader directly; otherwise rename the `useQuery()` key so it no longer collides.",
			docs: "https://router.vuejs.org/data-loaders/colada.html"
		},
		VUE_ROUTER_R1007: {
			why: "Data Loader was setup twice.",
			fix: "Register `DataLoaderPlugin` a single time via `app.use()`.",
			docs: "https://router.vuejs.org/data-loaders.html#Installation"
		},
		VUE_ROUTER_R1008: {
			why: "Data Loader is experimental and subject to breaking changes in the future.",
			docs: "https://router.vuejs.org/data-loaders.html"
		},
		VUE_ROUTER_R1009: {
			why: "Returning a NavigationResult from a loader is deprecated.",
			fix: "Call `reroute(to)` inside the loader instead of returning `new NavigationResult(to)`; it throws internally to reroute.",
			docs: "https://router.vuejs.org/data-loaders/navigation-aware.html#Controlling-the-navigation-with-reroute-"
		}
	}
}), ve = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location matched"), ye = Symbol(process.env.NODE_ENV === "production" ? "" : "router view depth"), be = Symbol(process.env.NODE_ENV === "production" ? "" : "router"), xe = Symbol(process.env.NODE_ENV === "production" ? "" : "route location"), Se = Symbol(process.env.NODE_ENV === "production" ? "" : "router view location");
function Ce() {
	return i(be);
}
function we(e) {
	return i(xe);
}
//#endregion
//#region node_modules/@vue/devtools-shared/dist/index.js
var Te, Ee = Object.create, De = Object.defineProperty, Oe = Object.getOwnPropertyDescriptor, ke = Object.getOwnPropertyNames, Ae = Object.getPrototypeOf, je = Object.prototype.hasOwnProperty, Me = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), Ne = (e, t, n, r) => {
	if (t && typeof t == "object" || typeof t == "function") for (var i = ke(t), a = 0, o = i.length, s; a < o; a++) s = i[a], !je.call(e, s) && s !== n && De(e, s, {
		get: ((e) => t[e]).bind(null, s),
		enumerable: !(r = Oe(t, s)) || r.enumerable
	});
	return e;
}, Pe = (e, t, n) => (n = e == null ? {} : Ee(Ae(e)), Ne(t || !e || !e.__esModule ? De(n, "default", {
	value: e,
	enumerable: !0
}) : n, e)), Fe = typeof navigator < "u", R = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : typeof global < "u" ? global : {};
R.chrome !== void 0 && R.chrome.devtools, Fe && (R.self, R.top), typeof navigator < "u" && ((Te = navigator.userAgent) == null || Te.toLowerCase().includes("electron")), typeof window < "u" && window.__NUXT__;
var Ie = /* @__PURE__ */ Pe((/* @__PURE__ */ Me(((e, t) => {
	t.exports = r;
	function n(e) {
		return e instanceof Buffer ? Buffer.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length);
	}
	function r(e) {
		if (e = e || {}, e.circles) return i(e);
		let t = /* @__PURE__ */ new Map();
		if (t.set(Date, (e) => new Date(e)), t.set(Map, (e, t) => new Map(a(Array.from(e), t))), t.set(Set, (e, t) => new Set(a(Array.from(e), t))), e.constructorHandlers) for (let n of e.constructorHandlers) t.set(n[0], n[1]);
		let r = null;
		return e.proto ? s : o;
		function a(e, i) {
			let a = Object.keys(e), o = Array(a.length);
			for (let s = 0; s < a.length; s++) {
				let c = a[s], l = e[c];
				o[c] = typeof l != "object" || !l ? l : l.constructor !== Object && (r = t.get(l.constructor)) ? r(l, i) : ArrayBuffer.isView(l) ? n(l) : i(l);
			}
			return o;
		}
		function o(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, o);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, o);
			let i = {};
			for (let a in e) {
				if (Object.hasOwnProperty.call(e, a) === !1) continue;
				let s = e[a];
				i[a] = typeof s != "object" || !s ? s : s.constructor !== Object && (r = t.get(s.constructor)) ? r(s, o) : ArrayBuffer.isView(s) ? n(s) : o(s);
			}
			return i;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return a(e, s);
			if (e.constructor !== Object && (r = t.get(e.constructor))) return r(e, s);
			let i = {};
			for (let a in e) {
				let o = e[a];
				i[a] = typeof o != "object" || !o ? o : o.constructor !== Object && (r = t.get(o.constructor)) ? r(o, s) : ArrayBuffer.isView(o) ? n(o) : s(o);
			}
			return i;
		}
	}
	function i(e) {
		let t = [], r = [], i = /* @__PURE__ */ new Map();
		if (i.set(Date, (e) => new Date(e)), i.set(Map, (e, t) => new Map(o(Array.from(e), t))), i.set(Set, (e, t) => new Set(o(Array.from(e), t))), e.constructorHandlers) for (let t of e.constructorHandlers) i.set(t[0], t[1]);
		let a = null;
		return e.proto ? c : s;
		function o(e, o) {
			let s = Object.keys(e), c = Array(s.length);
			for (let l = 0; l < s.length; l++) {
				let u = s[l], d = e[u];
				if (typeof d != "object" || !d) c[u] = d;
				else if (d.constructor !== Object && (a = i.get(d.constructor))) c[u] = a(d, o);
				else if (ArrayBuffer.isView(d)) c[u] = n(d);
				else {
					let e = t.indexOf(d);
					c[u] = e === -1 ? o(d) : r[e];
				}
			}
			return c;
		}
		function s(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, s);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, s);
			let c = {};
			t.push(e), r.push(c);
			for (let o in e) {
				if (Object.hasOwnProperty.call(e, o) === !1) continue;
				let l = e[o];
				if (typeof l != "object" || !l) c[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) c[o] = a(l, s);
				else if (ArrayBuffer.isView(l)) c[o] = n(l);
				else {
					let e = t.indexOf(l);
					c[o] = e === -1 ? s(l) : r[e];
				}
			}
			return t.pop(), r.pop(), c;
		}
		function c(e) {
			if (typeof e != "object" || !e) return e;
			if (Array.isArray(e)) return o(e, c);
			if (e.constructor !== Object && (a = i.get(e.constructor))) return a(e, c);
			let s = {};
			t.push(e), r.push(s);
			for (let o in e) {
				let l = e[o];
				if (typeof l != "object" || !l) s[o] = l;
				else if (l.constructor !== Object && (a = i.get(l.constructor))) s[o] = a(l, c);
				else if (ArrayBuffer.isView(l)) s[o] = n(l);
				else {
					let e = t.indexOf(l);
					s[o] = e === -1 ? c(l) : r[e];
				}
			}
			return t.pop(), r.pop(), s;
		}
	}
})))(), 1), Le = /(?:^|[-_/])(\w)/g;
function Re(e, t) {
	return t ? t.toUpperCase() : "";
}
function ze(e) {
	return e && `${e}`.replace(Le, Re);
}
function Be(e, t) {
	let n = e.replace(/^[a-z]:/i, "").replace(/\\/g, "/");
	n.endsWith(`index${t}`) && (n = n.replace(`/index${t}`, t));
	let r = n.lastIndexOf("/"), i = n.substring(r + 1);
	if (t) {
		let e = i.lastIndexOf(t);
		return i.substring(0, e);
	}
	return "";
}
var Ve = (0, Ie.default)({ circles: !0 }), He = { trailing: !0 };
function Ue(e, t = 25, n = {}) {
	if (n = T(T({}, He), n), !Number.isFinite(t)) throw TypeError("Expected `wait` to be a finite number");
	let r, i, a = [], o, s, c = (t, r) => (o = We(e, t, r), o.finally(() => {
		if (o = null, n.trailing && s && !i) {
			let e = c(t, s);
			return s = null, e;
		}
	}), o), l = function(...e) {
		return n.trailing && (s = e), o || new Promise((o) => {
			let l = !i && n.leading;
			clearTimeout(i), i = setTimeout(() => {
				i = null;
				let t = n.leading ? r : c(this, e);
				s = null;
				for (let e of a) e(t);
				a = [];
			}, t), l ? (r = c(this, e), o(r)) : a.push(o);
		});
	}, u = (e) => {
		e && (clearTimeout(e), i = null);
	};
	return l.isPending = () => !!i, l.cancel = () => {
		u(i), a = [], s = null;
	}, l.flush = () => {
		if (u(i), !s || o) return;
		let e = s;
		return s = null, c(this, e);
	}, l;
}
function We(e, t, n) {
	return Ge.apply(this, arguments);
}
function Ge() {
	return Ge = O(function* (e, t, n) {
		return yield e.apply(t, n);
	}), Ge.apply(this, arguments);
}
//#endregion
//#region node_modules/@vue/devtools-kit/node_modules/hookable/dist/index.mjs
function Ke(e, t = {}, n) {
	for (let r in e) {
		let i = e[r], a = n ? `${n}:${r}` : r;
		typeof i == "object" && i ? Ke(i, t, a) : typeof i == "function" && (t[a] = i);
	}
	return t;
}
var qe = { run: (e) => e() }, Je = console.createTask === void 0 ? () => qe : console.createTask;
function Ye(e, t) {
	let n = Je(t.shift());
	return e.reduce((e, r) => e.then(() => n.run(() => r(...t))), Promise.resolve());
}
function Xe(e, t) {
	let n = Je(t.shift());
	return Promise.all(e.map((e) => n.run(() => e(...t))));
}
function Ze(e, t) {
	for (let n of [...e]) n(t);
}
var Qe = class {
	constructor() {
		this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this);
	}
	hook(e, t, n = {}) {
		if (!e || typeof t != "function") return () => {};
		let r = e, i;
		for (; this._deprecatedHooks[e];) i = this._deprecatedHooks[e], e = i.to;
		if (i && !n.allowDeprecated) {
			let e = i.message;
			e || (e = `${r} hook has been deprecated` + (i.to ? `, please use ${i.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = /* @__PURE__ */ new Set()), this._deprecatedMessages.has(e) || (console.warn(e), this._deprecatedMessages.add(e));
		}
		if (!t.name) try {
			Object.defineProperty(t, "name", {
				get: () => "_" + e.replace(/\W+/g, "_") + "_hook_cb",
				configurable: !0
			});
		} catch (e) {}
		return this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t && (this.removeHook(e, t), t = void 0);
		};
	}
	hookOnce(e, t) {
		let n, r = (...e) => (typeof n == "function" && n(), n = void 0, r = void 0, t(...e));
		return n = this.hook(e, r), n;
	}
	removeHook(e, t) {
		if (this._hooks[e]) {
			let n = this._hooks[e].indexOf(t);
			n !== -1 && this._hooks[e].splice(n, 1), this._hooks[e].length === 0 && delete this._hooks[e];
		}
	}
	deprecateHook(e, t) {
		this._deprecatedHooks[e] = typeof t == "string" ? { to: t } : t;
		let n = this._hooks[e] || [];
		delete this._hooks[e];
		for (let t of n) this.hook(e, t);
	}
	deprecateHooks(e) {
		Object.assign(this._deprecatedHooks, e);
		for (let t in e) this.deprecateHook(t, e[t]);
	}
	addHooks(e) {
		let t = Ke(e), n = Object.keys(t).map((e) => this.hook(e, t[e]));
		return () => {
			for (let e of n.splice(0, n.length)) e();
		};
	}
	removeHooks(e) {
		let t = Ke(e);
		for (let e in t) this.removeHook(e, t[e]);
	}
	removeAllHooks() {
		for (let e in this._hooks) delete this._hooks[e];
	}
	callHook(e, ...t) {
		return t.unshift(e), this.callHookWith(Ye, e, ...t);
	}
	callHookParallel(e, ...t) {
		return t.unshift(e), this.callHookWith(Xe, e, ...t);
	}
	callHookWith(e, t, ...n) {
		let r = this._before || this._after ? {
			name: t,
			args: n,
			context: {}
		} : void 0;
		this._before && Ze(this._before, r);
		let i = e(t in this._hooks ? [...this._hooks[t]] : [], n);
		return i instanceof Promise ? i.finally(() => {
			this._after && r && Ze(this._after, r);
		}) : (this._after && r && Ze(this._after, r), i);
	}
	beforeEach(e) {
		return this._before = this._before || [], this._before.push(e), () => {
			if (this._before !== void 0) {
				let t = this._before.indexOf(e);
				t !== -1 && this._before.splice(t, 1);
			}
		};
	}
	afterEach(e) {
		return this._after = this._after || [], this._after.push(e), () => {
			if (this._after !== void 0) {
				let t = this._after.indexOf(e);
				t !== -1 && this._after.splice(t, 1);
			}
		};
	}
};
function $e() {
	return new Qe();
}
//#endregion
//#region node_modules/@vue/devtools-kit/dist/index.js
var et, tt = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
function nt(e) {
	var t;
	if (typeof e == "function") return e.displayName || e.name || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || "";
	let n = e.name || e._componentTag || e.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ || e.__name;
	return n === "index" && (t = e.__file) != null && t.endsWith("index.vue") ? "" : n;
}
function rt(e) {
	let t = e.__file;
	if (t) return ze(Be(t, ".vue"));
}
function it(e, t) {
	return e.type.__VUE_DEVTOOLS_COMPONENT_GUSSED_NAME__ = t, t;
}
function at(e) {
	if (e.__VUE_DEVTOOLS_NEXT_APP_RECORD__) return e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
	if (e.root) return e.appContext.app.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
}
function ot(e) {
	var t, n;
	let r = (t = e.subTree) == null ? void 0 : t.type, i = at(e);
	return i ? (i == null || (n = i.types) == null ? void 0 : n.Fragment) === r : !1;
}
function st(e) {
	var t, n;
	let r = nt((e == null ? void 0 : e.type) || {});
	if (r) return r;
	if ((e == null ? void 0 : e.root) === e) return "Root";
	for (let n in (t = e.parent) == null || (t = t.type) == null ? void 0 : t.components) if (e.parent.type.components[n] === (e == null ? void 0 : e.type)) return it(e, n);
	for (let t in (n = e.appContext) == null ? void 0 : n.components) if (e.appContext.components[t] === (e == null ? void 0 : e.type)) return it(e, t);
	return rt((e == null ? void 0 : e.type) || {}) || "Anonymous Component";
}
function ct(e) {
	var t, n;
	return `${(t = e == null || (n = e.appContext) == null || (n = n.app) == null ? void 0 : n.__VUE_DEVTOOLS_NEXT_APP_RECORD_ID__) == null ? 0 : t}:${e === (e == null ? void 0 : e.root) ? "root" : e.uid}`;
}
function lt(e, t) {
	return t = t || `${e.id}:root`, e.instanceMap.get(t) || e.instanceMap.get(":root");
}
function ut() {
	let e = {
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		get width() {
			return e.right - e.left;
		},
		get height() {
			return e.bottom - e.top;
		}
	};
	return e;
}
var dt;
function ft(e) {
	return dt || (dt = document.createRange()), dt.selectNode(e), dt.getBoundingClientRect();
}
function pt(e) {
	let t = ut();
	if (!e.children) return t;
	for (let n = 0, r = e.children.length; n < r; n++) {
		let r = e.children[n], i;
		if (r.component) i = gt(r.component);
		else if (r.el) {
			let e = r.el;
			e.nodeType === 1 || e.getBoundingClientRect ? i = e.getBoundingClientRect() : e.nodeType === 3 && e.data.trim() && (i = ft(e));
		}
		i && mt(t, i);
	}
	return t;
}
function mt(e, t) {
	return (!e.top || t.top < e.top) && (e.top = t.top), (!e.bottom || t.bottom > e.bottom) && (e.bottom = t.bottom), (!e.left || t.left < e.left) && (e.left = t.left), (!e.right || t.right > e.right) && (e.right = t.right), e;
}
var ht = {
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	width: 0,
	height: 0
};
function gt(e) {
	let t = e.subTree.el;
	return typeof window > "u" ? ht : ot(e) ? pt(e.subTree) : (t == null ? void 0 : t.nodeType) === 1 ? t == null ? void 0 : t.getBoundingClientRect() : e.subTree.component ? gt(e.subTree.component) : ht;
}
function _t(e) {
	return ot(e) ? vt(e.subTree) : e.subTree ? [e.subTree.el] : [];
}
function vt(e) {
	if (!e.children) return [];
	let t = [];
	return e.children.forEach((e) => {
		e.component ? t.push(..._t(e.component)) : e != null && e.el && t.push(e.el);
	}), t;
}
var yt = "__vue-devtools-component-inspector__", bt = "__vue-devtools-component-inspector__card__", xt = "__vue-devtools-component-inspector__name__", St = "__vue-devtools-component-inspector__indicator__", Ct = {
	display: "block",
	zIndex: 2147483640,
	position: "fixed",
	backgroundColor: "#42b88325",
	border: "1px solid #42b88350",
	borderRadius: "5px",
	transition: "all 0.1s ease-in",
	pointerEvents: "none"
}, wt = {
	fontFamily: "Arial, Helvetica, sans-serif",
	padding: "5px 8px",
	borderRadius: "4px",
	textAlign: "left",
	position: "absolute",
	left: 0,
	color: "#e9e9e9",
	fontSize: "14px",
	fontWeight: 600,
	lineHeight: "24px",
	backgroundColor: "#42b883",
	boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)"
}, Tt = {
	display: "inline-block",
	fontWeight: 400,
	fontStyle: "normal",
	fontSize: "12px",
	opacity: .7
};
function Et() {
	return document.getElementById(yt);
}
function Dt() {
	return document.getElementById(bt);
}
function Ot() {
	return document.getElementById(St);
}
function kt() {
	return document.getElementById(xt);
}
function At(e) {
	return {
		left: `${Math.round(e.left * 100) / 100}px`,
		top: `${Math.round(e.top * 100) / 100}px`,
		width: `${Math.round(e.width * 100) / 100}px`,
		height: `${Math.round(e.height * 100) / 100}px`
	};
}
function jt(e) {
	var t;
	let n = document.createElement("div");
	n.id = (t = e.elementId) == null ? yt : t, Object.assign(n.style, T(T(T({}, Ct), At(e.bounds)), e.style));
	let r = document.createElement("span");
	r.id = bt, Object.assign(r.style, T(T({}, wt), {}, { top: e.bounds.top < 35 ? 0 : "-35px" }));
	let i = document.createElement("span");
	i.id = xt, i.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`;
	let a = document.createElement("i");
	return a.id = St, a.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`, Object.assign(a.style, Tt), r.appendChild(i), r.appendChild(a), n.appendChild(r), document.body.appendChild(n), n;
}
function Mt(e) {
	let t = Et(), n = Dt(), r = kt(), i = Ot();
	t && (Object.assign(t.style, T(T({}, Ct), At(e.bounds))), Object.assign(n.style, { top: e.bounds.top < 35 ? 0 : "-35px" }), r.innerHTML = `&lt;${e.name}&gt;&nbsp;&nbsp;`, i.innerHTML = `${Math.round(e.bounds.width * 100) / 100} x ${Math.round(e.bounds.height * 100) / 100}`);
}
function Nt(e) {
	let t = gt(e);
	if (!t.width && !t.height) return;
	let n = st(e);
	Et() ? Mt({
		bounds: t,
		name: n
	}) : jt({
		bounds: t,
		name: n
	});
}
function Pt() {
	let e = Et();
	e && (e.style.display = "none");
}
var Ft = null;
function It(e) {
	let t = e.target;
	if (t) {
		let e = t.__vueParentComponent;
		if (e && (Ft = e, e.vnode.el)) {
			let t = gt(e), n = st(e);
			Et() ? Mt({
				bounds: t,
				name: n
			}) : jt({
				bounds: t,
				name: n
			});
		}
	}
}
function Lt(e, t) {
	e.preventDefault(), e.stopPropagation(), Ft && t(ct(Ft));
}
var Rt = null;
function zt() {
	Pt(), window.removeEventListener("mouseover", It), window.removeEventListener("click", Rt, !0), Rt = null;
}
function Bt() {
	return window.addEventListener("mouseover", It), new Promise((e) => {
		function t(n) {
			n.preventDefault(), n.stopPropagation(), Lt(n, (n) => {
				window.removeEventListener("click", t, !0), Rt = null, window.removeEventListener("mouseover", It);
				let r = Et();
				r && (r.style.display = "none"), e(JSON.stringify({ id: n }));
			});
		}
		Rt = t, window.addEventListener("click", t, !0);
	});
}
function Vt(e) {
	let t = lt(V.value, e.id);
	if (t) {
		let [n] = _t(t);
		if (typeof n.scrollIntoView == "function") n.scrollIntoView({ behavior: "smooth" });
		else {
			let e = gt(t), n = document.createElement("div"), r = T(T({}, At(e)), {}, { position: "absolute" });
			Object.assign(n.style, r), document.body.appendChild(n), n.scrollIntoView({ behavior: "smooth" }), setTimeout(() => {
				document.body.removeChild(n);
			}, 2e3);
		}
		setTimeout(() => {
			let n = gt(t);
			if (n.width || n.height) {
				let r = st(t), i = Et();
				i ? Mt(T(T({}, e), {}, {
					name: r,
					bounds: n
				})) : jt(T(T({}, e), {}, {
					name: r,
					bounds: n
				})), setTimeout(() => {
					i && (i.style.display = "none");
				}, 1500);
			}
		}, 1200);
	}
}
R.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ != null || (R.__VUE_DEVTOOLS_COMPONENT_INSPECTOR_ENABLED__ = !0);
function Ht(e) {
	let t = 0, n = setInterval(() => {
		R.__VUE_INSPECTOR__ && (clearInterval(n), t += 30, e()), t >= 5e3 && clearInterval(n);
	}, 30);
}
function Ut() {
	let e = R.__VUE_INSPECTOR__, t = e.openInEditor;
	e.openInEditor = O(function* (...n) {
		e.disable(), t(...n);
	});
}
function Wt() {
	return new Promise((e) => {
		function t() {
			Ut(), e(R.__VUE_INSPECTOR__);
		}
		R.__VUE_INSPECTOR__ ? t() : Ht(() => {
			t();
		});
	});
}
var Gt = /* @__PURE__ */ function(e) {
	return e.SKIP = "__v_skip", e.IS_REACTIVE = "__v_isReactive", e.IS_READONLY = "__v_isReadonly", e.IS_SHALLOW = "__v_isShallow", e.RAW = "__v_raw", e;
}({});
function Kt(e) {
	return !!(e && e[Gt.IS_READONLY]);
}
function qt(e) {
	return Kt(e) ? qt(e[Gt.RAW]) : !!(e && e[Gt.IS_REACTIVE]);
}
function Jt(e) {
	return !!(e && e.__v_isRef === !0);
}
function Yt(e) {
	let t = e && e[Gt.RAW];
	return t ? Yt(t) : e;
}
var Xt = class {
	constructor() {
		this.refEditor = new Zt();
	}
	set(e, t, n, r) {
		let i = Array.isArray(t) ? t : t.split(".");
		for (; i.length > 1;) {
			let t = i.shift();
			e = e instanceof Map ? e.get(t) : e instanceof Set ? Array.from(e.values())[t] : e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		let a = i[0], o = this.refEditor.get(e)[a];
		r ? r(e, a, n) : this.refEditor.isRef(o) ? this.refEditor.set(o, n) : e[a] = n;
	}
	get(e, t) {
		let n = Array.isArray(t) ? t : t.split(".");
		for (let t = 0; t < n.length; t++) if (e = e instanceof Map ? e.get(n[t]) : e[n[t]], this.refEditor.isRef(e) && (e = this.refEditor.get(e)), !e) return;
		return e;
	}
	has(e, t, n = !1) {
		if (e === void 0) return !1;
		let r = Array.isArray(t) ? t.slice() : t.split("."), i = n ? 2 : 1;
		for (; e && r.length > i;) {
			let t = r.shift();
			e = e[t], this.refEditor.isRef(e) && (e = this.refEditor.get(e));
		}
		return e != null && Object.prototype.hasOwnProperty.call(e, r[0]);
	}
	createDefaultSetCallback(e) {
		return (t, n, r) => {
			if ((e.remove || e.newKey) && (Array.isArray(t) ? t.splice(n, 1) : Yt(t) instanceof Map ? t.delete(n) : Yt(t) instanceof Set ? t.delete(Array.from(t.values())[n]) : Reflect.deleteProperty(t, n)), !e.remove) {
				let i = t[e.newKey || n];
				this.refEditor.isRef(i) ? this.refEditor.set(i, r) : Yt(t) instanceof Map ? t.set(e.newKey || n, r) : Yt(t) instanceof Set ? t.add(r) : t[e.newKey || n] = r;
			}
		};
	}
}, Zt = class {
	set(e, t) {
		if (Jt(e)) e.value = t;
		else {
			if (e instanceof Set && Array.isArray(t)) {
				e.clear(), t.forEach((t) => e.add(t));
				return;
			}
			let n = Object.keys(t);
			if (e instanceof Map) {
				let r = new Set(e.keys());
				n.forEach((n) => {
					e.set(n, Reflect.get(t, n)), r.delete(n);
				}), r.forEach((t) => e.delete(t));
				return;
			}
			let r = new Set(Object.keys(e));
			n.forEach((n) => {
				Reflect.set(e, n, Reflect.get(t, n)), r.delete(n);
			}), r.forEach((t) => Reflect.deleteProperty(e, t));
		}
	}
	get(e) {
		return Jt(e) ? e.value : e;
	}
	isRef(e) {
		return Jt(e) || qt(e);
	}
};
new Xt();
var Qt = "__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS_STATE__";
function $t() {
	if (typeof window > "u" || !Fe || typeof localStorage > "u" || localStorage === null) return {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
	let e = localStorage.getItem === void 0 ? null : localStorage.getItem(Qt);
	return e ? JSON.parse(e) : {
		recordingState: !1,
		mouseEventEnabled: !1,
		keyboardEventEnabled: !1,
		componentEventEnabled: !1,
		performanceEventEnabled: !1,
		selected: ""
	};
}
R.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS != null || (R.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS = []);
var en = new Proxy(R.__VUE_DEVTOOLS_KIT_TIMELINE_LAYERS, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function tn(e, t) {
	H.timelineLayersState[t.id] = !1, en.push(T(T({}, e), {}, {
		descriptorId: t.id,
		appRecord: at(t.app)
	}));
}
R.__VUE_DEVTOOLS_KIT_INSPECTOR__ != null || (R.__VUE_DEVTOOLS_KIT_INSPECTOR__ = []);
var nn = new Proxy(R.__VUE_DEVTOOLS_KIT_INSPECTOR__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} }), rn = Ue(() => {
	Hn.hooks.callHook(cn.SEND_INSPECTOR_TO_CLIENT, on());
});
function an(e, t) {
	var n, r;
	nn.push({
		options: e,
		descriptor: t,
		treeFilterPlaceholder: (n = e.treeFilterPlaceholder) == null ? "Search tree..." : n,
		stateFilterPlaceholder: (r = e.stateFilterPlaceholder) == null ? "Search state..." : r,
		treeFilter: "",
		selectedNodeId: "",
		appRecord: at(t.app)
	}), rn();
}
function on() {
	return nn.filter((e) => e.descriptor.app === V.value.app).filter((e) => e.descriptor.id !== "components").map((e) => {
		var t;
		let n = e.descriptor, r = e.options;
		return {
			id: r.id,
			label: r.label,
			logo: n.logo,
			icon: `custom-ic-baseline-${r == null || (t = r.icon) == null ? void 0 : t.replace(/_/g, "-")}`,
			packageName: n.packageName,
			homepage: n.homepage,
			pluginId: n.id
		};
	});
}
function sn(e, t) {
	return nn.find((n) => n.options.id === e && (!t || n.descriptor.app === t));
}
var z = /* @__PURE__ */ function(e) {
	return e.VISIT_COMPONENT_TREE = "visitComponentTree", e.INSPECT_COMPONENT = "inspectComponent", e.EDIT_COMPONENT_STATE = "editComponentState", e.GET_INSPECTOR_TREE = "getInspectorTree", e.GET_INSPECTOR_STATE = "getInspectorState", e.EDIT_INSPECTOR_STATE = "editInspectorState", e.INSPECT_TIMELINE_EVENT = "inspectTimelineEvent", e.TIMELINE_CLEARED = "timelineCleared", e.SET_PLUGIN_SETTINGS = "setPluginSettings", e;
}({}), B = /* @__PURE__ */ function(e) {
	return e.ADD_INSPECTOR = "addInspector", e.SEND_INSPECTOR_TREE = "sendInspectorTree", e.SEND_INSPECTOR_STATE = "sendInspectorState", e.CUSTOM_INSPECTOR_SELECT_NODE = "customInspectorSelectNode", e.TIMELINE_LAYER_ADDED = "timelineLayerAdded", e.TIMELINE_EVENT_ADDED = "timelineEventAdded", e.GET_COMPONENT_INSTANCES = "getComponentInstances", e.GET_COMPONENT_BOUNDS = "getComponentBounds", e.GET_COMPONENT_NAME = "getComponentName", e.COMPONENT_HIGHLIGHT = "componentHighlight", e.COMPONENT_UNHIGHLIGHT = "componentUnhighlight", e;
}({}), cn = /* @__PURE__ */ function(e) {
	return e.SEND_INSPECTOR_TREE_TO_CLIENT = "sendInspectorTreeToClient", e.SEND_INSPECTOR_STATE_TO_CLIENT = "sendInspectorStateToClient", e.SEND_TIMELINE_EVENT_TO_CLIENT = "sendTimelineEventToClient", e.SEND_INSPECTOR_TO_CLIENT = "sendInspectorToClient", e.SEND_ACTIVE_APP_UNMOUNTED_TO_CLIENT = "sendActiveAppUpdatedToClient", e.DEVTOOLS_STATE_UPDATED = "devtoolsStateUpdated", e.DEVTOOLS_CONNECTED_UPDATED = "devtoolsConnectedUpdated", e.ROUTER_INFO_UPDATED = "routerInfoUpdated", e;
}({});
function ln() {
	let e = $e();
	e.hook(B.ADD_INSPECTOR, ({ inspector: e, plugin: t }) => {
		an(e, t.descriptor);
	});
	let t = Ue(function() {
		var t = O(function* ({ inspectorId: t, plugin: n }) {
			var r;
			if (!t || !(n != null && (r = n.descriptor) != null && r.app) || H.highPerfModeEnabled) return;
			let i = sn(t, n.descriptor.app), a = {
				app: n.descriptor.app,
				inspectorId: t,
				filter: (i == null ? void 0 : i.treeFilter) || "",
				rootNodes: []
			};
			yield new Promise((t) => {
				e.callHookWith(function() {
					var e = O(function* (e) {
						yield Promise.all(e.map((e) => e(a))), t();
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				}(), z.GET_INSPECTOR_TREE);
			}), e.callHookWith(function() {
				var e = O(function* (e) {
					yield Promise.all(e.map((e) => e({
						inspectorId: t,
						rootNodes: a.rootNodes
					})));
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			}(), cn.SEND_INSPECTOR_TREE_TO_CLIENT);
		});
		return function(e) {
			return t.apply(this, arguments);
		};
	}(), 120);
	e.hook(B.SEND_INSPECTOR_TREE, t);
	let n = Ue(function() {
		var t = O(function* ({ inspectorId: t, plugin: n }) {
			var r;
			if (!t || !(n != null && (r = n.descriptor) != null && r.app) || H.highPerfModeEnabled) return;
			let i = sn(t, n.descriptor.app), a = {
				app: n.descriptor.app,
				inspectorId: t,
				nodeId: (i == null ? void 0 : i.selectedNodeId) || "",
				state: null
			}, o = { currentTab: `custom-inspector:${t}` };
			a.nodeId && (yield new Promise((t) => {
				e.callHookWith(function() {
					var e = O(function* (e) {
						yield Promise.all(e.map((e) => e(a, o))), t();
					});
					return function(t) {
						return e.apply(this, arguments);
					};
				}(), z.GET_INSPECTOR_STATE);
			})), e.callHookWith(function() {
				var e = O(function* (e) {
					yield Promise.all(e.map((e) => e({
						inspectorId: t,
						nodeId: a.nodeId,
						state: a.state
					})));
				});
				return function(t) {
					return e.apply(this, arguments);
				};
			}(), cn.SEND_INSPECTOR_STATE_TO_CLIENT);
		});
		return function(e) {
			return t.apply(this, arguments);
		};
	}(), 120);
	return e.hook(B.SEND_INSPECTOR_STATE, n), e.hook(B.CUSTOM_INSPECTOR_SELECT_NODE, ({ inspectorId: e, nodeId: t, plugin: n }) => {
		let r = sn(e, n.descriptor.app);
		r && (r.selectedNodeId = t);
	}), e.hook(B.TIMELINE_LAYER_ADDED, ({ options: e, plugin: t }) => {
		tn(e, t.descriptor);
	}), e.hook(B.TIMELINE_EVENT_ADDED, ({ options: t, plugin: n }) => {
		var r;
		H.highPerfModeEnabled || !((r = H.timelineLayersState) != null && r[n.descriptor.id]) && ![
			"performance",
			"component-event",
			"keyboard",
			"mouse"
		].includes(t.layerId) || e.callHookWith(function() {
			var e = O(function* (e) {
				yield Promise.all(e.map((e) => e(t)));
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		}(), cn.SEND_TIMELINE_EVENT_TO_CLIENT);
	}), e.hook(B.GET_COMPONENT_INSTANCES, function() {
		var e = O(function* ({ app: e }) {
			let t = e.__VUE_DEVTOOLS_NEXT_APP_RECORD__;
			if (!t) return null;
			let n = t.id.toString();
			return [...t.instanceMap].filter(([e]) => e.split(":")[0] === n).map(([, e]) => e);
		});
		return function(t) {
			return e.apply(this, arguments);
		};
	}()), e.hook(B.GET_COMPONENT_BOUNDS, function() {
		var e = O(function* ({ instance: e }) {
			return gt(e);
		});
		return function(t) {
			return e.apply(this, arguments);
		};
	}()), e.hook(B.GET_COMPONENT_NAME, ({ instance: e }) => st(e)), e.hook(B.COMPONENT_HIGHLIGHT, ({ uid: e }) => {
		let t = V.value.instanceMap.get(e);
		t && Nt(t);
	}), e.hook(B.COMPONENT_UNHIGHLIGHT, () => {
		Pt();
	}), e;
}
R.__VUE_DEVTOOLS_KIT_APP_RECORDS__ != null || (R.__VUE_DEVTOOLS_KIT_APP_RECORDS__ = []), R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ != null || (R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = {}), R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ != null || (R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = ""), R.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ != null || (R.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ = []), R.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ != null || (R.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ = []);
var un = "__VUE_DEVTOOLS_KIT_GLOBAL_STATE__";
function dn() {
	return {
		connected: !1,
		clientConnected: !1,
		vitePluginDetected: !0,
		appRecords: [],
		activeAppRecordId: "",
		tabs: [],
		commands: [],
		highPerfModeEnabled: !0,
		devtoolsClientDetected: {},
		perfUniqueGroupId: 0,
		timelineLayersState: $t()
	};
}
R[un] != null || (R[un] = dn());
var fn = Ue((e) => {
	Hn.hooks.callHook(cn.DEVTOOLS_STATE_UPDATED, { state: e });
});
Ue((e, t) => {
	Hn.hooks.callHook(cn.DEVTOOLS_CONNECTED_UPDATED, {
		state: e,
		oldState: t
	});
});
var pn = new Proxy(R.__VUE_DEVTOOLS_KIT_APP_RECORDS__, { get(e, t, n) {
	return t === "value" ? R.__VUE_DEVTOOLS_KIT_APP_RECORDS__ : R.__VUE_DEVTOOLS_KIT_APP_RECORDS__[t];
} }), V = new Proxy(R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__, { get(e, t, n) {
	return t === "value" ? R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ : t === "id" ? R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ : R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__[t];
} });
function mn() {
	fn(T(T({}, R[un]), {}, {
		appRecords: pn.value,
		activeAppRecordId: V.id,
		tabs: R.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__,
		commands: R.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__
	}));
}
function hn(e) {
	R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD__ = e, mn();
}
function gn(e) {
	R.__VUE_DEVTOOLS_KIT_ACTIVE_APP_RECORD_ID__ = e, mn();
}
var H = new Proxy(R[un], {
	get(e, t) {
		return t === "appRecords" ? pn : t === "activeAppRecordId" ? V.id : t === "tabs" ? R.__VUE_DEVTOOLS_KIT_CUSTOM_TABS__ : t === "commands" ? R.__VUE_DEVTOOLS_KIT_CUSTOM_COMMANDS__ : R[un][t];
	},
	deleteProperty(e, t) {
		return delete e[t], !0;
	},
	set(e, t, n) {
		return e[t] = n, R[un][t] = n, !0;
	}
});
function _n(e = {}) {
	let { file: t, host: n, baseUrl: r = window.location.origin, line: i = 0, column: a = 0 } = e;
	if (t) {
		if (n === "chrome-extension") {
			var o, s;
			let e = t.replace(/\\/g, "\\\\"), n = (o = (s = window.VUE_DEVTOOLS_CONFIG) == null ? void 0 : s.openInEditorHost) == null ? "/" : o;
			fetch(`${n}__open-in-editor?file=${encodeURI(t)}`).then((t) => {
				if (!t.ok) {
					let t = `Opening component ${e} failed`;
					console.log(`%c${t}`, "color:red");
				}
			});
		} else if (H.vitePluginDetected) {
			var c;
			let e = (c = R.__VUE_DEVTOOLS_OPEN_IN_EDITOR_BASE_URL__) == null ? r : c;
			R.__VUE_INSPECTOR__.openInEditor(e, t, i, a);
		}
	}
}
R.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ != null || (R.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__ = []);
var vn = new Proxy(R.__VUE_DEVTOOLS_KIT_PLUGIN_BUFFER__, { get(e, t, n) {
	return Reflect.get(e, t, n);
} });
function yn(e) {
	let t = {};
	return Object.keys(e).forEach((n) => {
		t[n] = e[n].defaultValue;
	}), t;
}
function bn(e) {
	return `__VUE_DEVTOOLS_NEXT_PLUGIN_SETTINGS__${e}__`;
}
function xn(e) {
	var t, n, r, i;
	return (t = (n = (r = (i = vn.find((t) => {
		var n;
		return t[0].id === e && !!((n = t[0]) != null && n.settings);
	})) == null ? void 0 : i[0]) == null ? null : r) == null ? void 0 : n.settings) == null ? null : t;
}
function Sn(e, t) {
	var n, r, i, a;
	let o = bn(e);
	if (o) {
		let e = localStorage.getItem(o);
		if (e) return JSON.parse(e);
	}
	return yn(e ? (n = (r = (i = (a = vn.find((t) => t[0].id === e)) == null ? void 0 : a[0]) == null ? null : i) == null ? void 0 : r.settings) == null ? {} : n : t);
}
function Cn(e, t) {
	let n = bn(e);
	localStorage.getItem(n) || localStorage.setItem(n, JSON.stringify(yn(t)));
}
function wn(e, t, n) {
	let r = bn(e), i = localStorage.getItem(r), a = JSON.parse(i || "{}"), o = T(T({}, a), {}, { [t]: n });
	localStorage.setItem(r, JSON.stringify(o)), Hn.hooks.callHookWith((r) => {
		r.forEach((r) => r({
			pluginId: e,
			key: t,
			oldValue: a[t],
			newValue: n,
			settings: o
		}));
	}, z.SET_PLUGIN_SETTINGS);
}
var U = /* @__PURE__ */ function(e) {
	return e.APP_INIT = "app:init", e.APP_UNMOUNT = "app:unmount", e.COMPONENT_UPDATED = "component:updated", e.COMPONENT_ADDED = "component:added", e.COMPONENT_REMOVED = "component:removed", e.COMPONENT_EMIT = "component:emit", e.PERFORMANCE_START = "perf:start", e.PERFORMANCE_END = "perf:end", e.ADD_ROUTE = "router:add-route", e.REMOVE_ROUTE = "router:remove-route", e.RENDER_TRACKED = "render:tracked", e.RENDER_TRIGGERED = "render:triggered", e.APP_CONNECTED = "app:connected", e.SETUP_DEVTOOLS_PLUGIN = "devtools-plugin:setup", e;
}({}), W = (et = R.__VUE_DEVTOOLS_HOOK) == null ? R.__VUE_DEVTOOLS_HOOK = $e() : et, Tn = {
	on: {
		vueAppInit(e) {
			W.hook(U.APP_INIT, e);
		},
		vueAppUnmount(e) {
			W.hook(U.APP_UNMOUNT, e);
		},
		vueAppConnected(e) {
			W.hook(U.APP_CONNECTED, e);
		},
		componentAdded(e) {
			return W.hook(U.COMPONENT_ADDED, e);
		},
		componentEmit(e) {
			return W.hook(U.COMPONENT_EMIT, e);
		},
		componentUpdated(e) {
			return W.hook(U.COMPONENT_UPDATED, e);
		},
		componentRemoved(e) {
			return W.hook(U.COMPONENT_REMOVED, e);
		},
		setupDevtoolsPlugin(e) {
			W.hook(U.SETUP_DEVTOOLS_PLUGIN, e);
		},
		perfStart(e) {
			return W.hook(U.PERFORMANCE_START, e);
		},
		perfEnd(e) {
			return W.hook(U.PERFORMANCE_END, e);
		}
	},
	setupDevToolsPlugin(e, t) {
		return W.callHook(U.SETUP_DEVTOOLS_PLUGIN, e, t);
	}
}, En = class {
	constructor({ plugin: e, ctx: t }) {
		this.hooks = t.hooks, this.plugin = e;
	}
	get on() {
		return {
			visitComponentTree: (e) => {
				this.hooks.hook(z.VISIT_COMPONENT_TREE, e);
			},
			inspectComponent: (e) => {
				this.hooks.hook(z.INSPECT_COMPONENT, e);
			},
			editComponentState: (e) => {
				this.hooks.hook(z.EDIT_COMPONENT_STATE, e);
			},
			getInspectorTree: (e) => {
				this.hooks.hook(z.GET_INSPECTOR_TREE, e);
			},
			getInspectorState: (e) => {
				this.hooks.hook(z.GET_INSPECTOR_STATE, e);
			},
			editInspectorState: (e) => {
				this.hooks.hook(z.EDIT_INSPECTOR_STATE, e);
			},
			inspectTimelineEvent: (e) => {
				this.hooks.hook(z.INSPECT_TIMELINE_EVENT, e);
			},
			timelineCleared: (e) => {
				this.hooks.hook(z.TIMELINE_CLEARED, e);
			},
			setPluginSettings: (e) => {
				this.hooks.hook(z.SET_PLUGIN_SETTINGS, e);
			}
		};
	}
	notifyComponentUpdate(e) {
		if (H.highPerfModeEnabled) return;
		let t = on().find((e) => e.packageName === this.plugin.descriptor.packageName);
		if (t != null && t.id) {
			if (e) {
				var n;
				let t = [
					e.appContext.app,
					e.uid,
					(n = e.parent) == null ? void 0 : n.uid,
					e
				];
				W.callHook(U.COMPONENT_UPDATED, ...t);
			} else W.callHook(U.COMPONENT_UPDATED);
			this.hooks.callHook(B.SEND_INSPECTOR_STATE, {
				inspectorId: t.id,
				plugin: this.plugin
			});
		}
	}
	addInspector(e) {
		this.hooks.callHook(B.ADD_INSPECTOR, {
			inspector: e,
			plugin: this.plugin
		}), this.plugin.descriptor.settings && Cn(e.id, this.plugin.descriptor.settings);
	}
	sendInspectorTree(e) {
		H.highPerfModeEnabled || this.hooks.callHook(B.SEND_INSPECTOR_TREE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	sendInspectorState(e) {
		H.highPerfModeEnabled || this.hooks.callHook(B.SEND_INSPECTOR_STATE, {
			inspectorId: e,
			plugin: this.plugin
		});
	}
	selectInspectorNode(e, t) {
		this.hooks.callHook(B.CUSTOM_INSPECTOR_SELECT_NODE, {
			inspectorId: e,
			nodeId: t,
			plugin: this.plugin
		});
	}
	visitComponentTree(e) {
		return this.hooks.callHook(z.VISIT_COMPONENT_TREE, e);
	}
	now() {
		return H.highPerfModeEnabled ? 0 : Date.now();
	}
	addTimelineLayer(e) {
		this.hooks.callHook(B.TIMELINE_LAYER_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	addTimelineEvent(e) {
		H.highPerfModeEnabled || this.hooks.callHook(B.TIMELINE_EVENT_ADDED, {
			options: e,
			plugin: this.plugin
		});
	}
	getSettings(e) {
		return Sn(e == null ? this.plugin.descriptor.id : e, this.plugin.descriptor.settings);
	}
	getComponentInstances(e) {
		return this.hooks.callHook(B.GET_COMPONENT_INSTANCES, { app: e });
	}
	getComponentBounds(e) {
		return this.hooks.callHook(B.GET_COMPONENT_BOUNDS, { instance: e });
	}
	getComponentName(e) {
		return this.hooks.callHook(B.GET_COMPONENT_NAME, { instance: e });
	}
	highlightElement(e) {
		let t = e.__VUE_DEVTOOLS_NEXT_UID__;
		return this.hooks.callHook(B.COMPONENT_HIGHLIGHT, { uid: t });
	}
	unhighlightElement() {
		return this.hooks.callHook(B.COMPONENT_UNHIGHLIGHT);
	}
}, Dn = "__vue_devtool_undefined__", On = "__vue_devtool_infinity__", kn = "__vue_devtool_negative_infinity__", An = "__vue_devtool_nan__";
Object.entries({
	[Dn]: "undefined",
	[An]: "NaN",
	[On]: "Infinity",
	[kn]: "-Infinity"
}).reduce((e, [t, n]) => (e[n] = t, e), {}), R.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ != null || (R.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__ = /* @__PURE__ */ new Set());
function jn(e, t) {
	return Tn.setupDevToolsPlugin(e, t);
}
function Mn(e, t) {
	let [n, r] = e;
	if (n.app !== t) return;
	let i = new En({
		plugin: {
			setupFn: r,
			descriptor: n
		},
		ctx: Hn
	});
	n.packageName === "vuex" && i.on.editInspectorState((e) => {
		i.sendInspectorState(e.inspectorId);
	}), r(i);
}
function Nn(e, t) {
	R.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.has(e) || H.highPerfModeEnabled && !(t != null && t.inspectingComponent) || (R.__VUE_DEVTOOLS_KIT__REGISTERED_PLUGIN_APPS__.add(e), vn.forEach((t) => {
		Mn(t, e);
	}));
}
var Pn = "__VUE_DEVTOOLS_ROUTER__", Fn = "__VUE_DEVTOOLS_ROUTER_INFO__";
R.__VUE_DEVTOOLS_ROUTER_INFO__ != null || (R.__VUE_DEVTOOLS_ROUTER_INFO__ = {
	currentRoute: null,
	routes: []
}), R.__VUE_DEVTOOLS_ROUTER__ != null || (R.__VUE_DEVTOOLS_ROUTER__ = {}), new Proxy(R[Fn], { get(e, t) {
	return R[Fn][t];
} }), new Proxy(R[Pn], { get(e, t) {
	if (t === "value") return R[Pn];
} });
function In(e) {
	let t = /* @__PURE__ */ new Map();
	return ((e == null ? void 0 : e.getRoutes()) || []).filter((e) => !t.has(e.path) && t.set(e.path, 1));
}
function Ln(e) {
	return e.map((e) => {
		let { path: t, name: n, children: r, meta: i } = e;
		return r != null && r.length && (r = Ln(r)), {
			path: t,
			name: n,
			children: r,
			meta: i
		};
	});
}
function Rn(e) {
	if (e) {
		let { fullPath: t, hash: n, href: r, path: i, name: a, matched: o, params: s, query: c } = e;
		return {
			fullPath: t,
			hash: n,
			href: r,
			path: i,
			name: a,
			params: s,
			query: c,
			matched: Ln(o)
		};
	}
	return e;
}
function zn(e, t) {
	function n() {
		var t;
		let n = (t = e.app) == null ? void 0 : t.config.globalProperties.$router, r = Rn(n == null ? void 0 : n.currentRoute.value), i = Ln(In(n)), a = console.warn;
		console.warn = () => {}, R[Fn] = {
			currentRoute: r ? Ve(r) : {},
			routes: Ve(i)
		}, R[Pn] = n, console.warn = a;
	}
	n(), Tn.on.componentUpdated(Ue(() => {
		var r;
		((r = t.value) == null ? void 0 : r.app) === e.app && (n(), !H.highPerfModeEnabled && Hn.hooks.callHook(cn.ROUTER_INFO_UPDATED, { state: R[Fn] }));
	}, 200));
}
function Bn(e) {
	return {
		getInspectorTree(t) {
			return O(function* () {
				let n = T(T({}, t), {}, {
					app: V.value.app,
					rootNodes: []
				});
				return yield new Promise((t) => {
					e.callHookWith(function() {
						var e = O(function* (e) {
							yield Promise.all(e.map((e) => e(n))), t();
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					}(), z.GET_INSPECTOR_TREE);
				}), n.rootNodes;
			})();
		},
		getInspectorState(t) {
			return O(function* () {
				let n = T(T({}, t), {}, {
					app: V.value.app,
					state: null
				}), r = { currentTab: `custom-inspector:${t.inspectorId}` };
				return yield new Promise((t) => {
					e.callHookWith(function() {
						var e = O(function* (e) {
							yield Promise.all(e.map((e) => e(n, r))), t();
						});
						return function(t) {
							return e.apply(this, arguments);
						};
					}(), z.GET_INSPECTOR_STATE);
				}), n.state;
			})();
		},
		editInspectorState(t) {
			let n = new Xt(), r = T(T({}, t), {}, {
				app: V.value.app,
				set: (e, r = t.path, i = t.state.value, a) => {
					n.set(e, r, i, a || n.createDefaultSetCallback(t.state));
				}
			});
			e.callHookWith((e) => {
				e.forEach((e) => e(r));
			}, z.EDIT_INSPECTOR_STATE);
		},
		sendInspectorState(t) {
			let n = sn(t);
			e.callHook(B.SEND_INSPECTOR_STATE, {
				inspectorId: t,
				plugin: {
					descriptor: n.descriptor,
					setupFn: () => ({})
				}
			});
		},
		inspectComponentInspector() {
			return Bt();
		},
		cancelInspectComponentInspector() {
			return zt();
		},
		getComponentRenderCode(e) {
			let t = lt(V.value, e);
			if (t) return typeof (t == null ? void 0 : t.type) == "function" ? t.type.toString() : t.render.toString();
		},
		scrollToComponent(e) {
			return Vt({ id: e });
		},
		openInEditor: _n,
		getVueInspector: Wt,
		toggleApp(e, t) {
			let n = pn.value.find((t) => t.id === e);
			n && (gn(e), hn(n), zn(n, V), rn(), Nn(n.app, t));
		},
		inspectDOM(e) {
			let t = lt(V.value, e);
			if (t) {
				let [e] = _t(t);
				e && (R.__VUE_DEVTOOLS_INSPECT_DOM_TARGET__ = e);
			}
		},
		updatePluginSettings(e, t, n) {
			wn(e, t, n);
		},
		getPluginSettings(e) {
			return {
				options: xn(e),
				values: Sn(e)
			};
		}
	};
}
R.__VUE_DEVTOOLS_ENV__ != null || (R.__VUE_DEVTOOLS_ENV__ = { vitePluginDetected: !1 });
var Vn = ln();
R.__VUE_DEVTOOLS_KIT_CONTEXT__ != null || (R.__VUE_DEVTOOLS_KIT_CONTEXT__ = {
	hooks: Vn,
	get state() {
		return T(T({}, H), {}, {
			activeAppRecordId: V.id,
			activeAppRecord: V.value,
			appRecords: pn.value
		});
	},
	api: Bn(Vn)
});
var Hn = R.__VUE_DEVTOOLS_KIT_CONTEXT__, Un = /* @__PURE__ */ tt(((e, t) => {
	(function(e) {
		var n = {
			À: "A",
			Á: "A",
			Â: "A",
			Ã: "A",
			Ä: "Ae",
			Å: "A",
			Æ: "AE",
			Ç: "C",
			È: "E",
			É: "E",
			Ê: "E",
			Ë: "E",
			Ì: "I",
			Í: "I",
			Î: "I",
			Ï: "I",
			Ð: "D",
			Ñ: "N",
			Ò: "O",
			Ó: "O",
			Ô: "O",
			Õ: "O",
			Ö: "Oe",
			Ő: "O",
			Ø: "O",
			Ù: "U",
			Ú: "U",
			Û: "U",
			Ü: "Ue",
			Ű: "U",
			Ý: "Y",
			Þ: "TH",
			ß: "ss",
			à: "a",
			á: "a",
			â: "a",
			ã: "a",
			ä: "ae",
			å: "a",
			æ: "ae",
			ç: "c",
			è: "e",
			é: "e",
			ê: "e",
			ë: "e",
			ì: "i",
			í: "i",
			î: "i",
			ï: "i",
			ð: "d",
			ñ: "n",
			ò: "o",
			ó: "o",
			ô: "o",
			õ: "o",
			ö: "oe",
			ő: "o",
			ø: "o",
			ù: "u",
			ú: "u",
			û: "u",
			ü: "ue",
			ű: "u",
			ý: "y",
			þ: "th",
			ÿ: "y",
			ẞ: "SS",
			ا: "a",
			أ: "a",
			إ: "i",
			آ: "aa",
			ؤ: "u",
			ئ: "e",
			ء: "a",
			ب: "b",
			ت: "t",
			ث: "th",
			ج: "j",
			ح: "h",
			خ: "kh",
			د: "d",
			ذ: "th",
			ر: "r",
			ز: "z",
			س: "s",
			ش: "sh",
			ص: "s",
			ض: "dh",
			ط: "t",
			ظ: "z",
			ع: "a",
			غ: "gh",
			ف: "f",
			ق: "q",
			ك: "k",
			ل: "l",
			م: "m",
			ن: "n",
			ه: "h",
			و: "w",
			ي: "y",
			ى: "a",
			ة: "h",
			ﻻ: "la",
			ﻷ: "laa",
			ﻹ: "lai",
			ﻵ: "laa",
			گ: "g",
			چ: "ch",
			پ: "p",
			ژ: "zh",
			ک: "k",
			ی: "y",
			"َ": "a",
			"ً": "an",
			"ِ": "e",
			"ٍ": "en",
			"ُ": "u",
			"ٌ": "on",
			"ْ": "",
			"٠": "0",
			"١": "1",
			"٢": "2",
			"٣": "3",
			"٤": "4",
			"٥": "5",
			"٦": "6",
			"٧": "7",
			"٨": "8",
			"٩": "9",
			"۰": "0",
			"۱": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"۶": "6",
			"۷": "7",
			"۸": "8",
			"۹": "9",
			က: "k",
			ခ: "kh",
			ဂ: "g",
			ဃ: "ga",
			င: "ng",
			စ: "s",
			ဆ: "sa",
			ဇ: "z",
			စျ: "za",
			ည: "ny",
			ဋ: "t",
			ဌ: "ta",
			ဍ: "d",
			ဎ: "da",
			ဏ: "na",
			တ: "t",
			ထ: "ta",
			ဒ: "d",
			ဓ: "da",
			န: "n",
			ပ: "p",
			ဖ: "pa",
			ဗ: "b",
			ဘ: "ba",
			မ: "m",
			ယ: "y",
			ရ: "ya",
			လ: "l",
			ဝ: "w",
			သ: "th",
			ဟ: "h",
			ဠ: "la",
			အ: "a",
			"ြ": "y",
			"ျ": "ya",
			"ွ": "w",
			"ြွ": "yw",
			"ျွ": "ywa",
			"ှ": "h",
			ဧ: "e",
			"၏": "-e",
			ဣ: "i",
			ဤ: "-i",
			ဉ: "u",
			ဦ: "-u",
			ဩ: "aw",
			သြော: "aw",
			ဪ: "aw",
			"၀": "0",
			"၁": "1",
			"၂": "2",
			"၃": "3",
			"၄": "4",
			"၅": "5",
			"၆": "6",
			"၇": "7",
			"၈": "8",
			"၉": "9",
			"္": "",
			"့": "",
			"း": "",
			č: "c",
			ď: "d",
			ě: "e",
			ň: "n",
			ř: "r",
			š: "s",
			ť: "t",
			ů: "u",
			ž: "z",
			Č: "C",
			Ď: "D",
			Ě: "E",
			Ň: "N",
			Ř: "R",
			Š: "S",
			Ť: "T",
			Ů: "U",
			Ž: "Z",
			ހ: "h",
			ށ: "sh",
			ނ: "n",
			ރ: "r",
			ބ: "b",
			ޅ: "lh",
			ކ: "k",
			އ: "a",
			ވ: "v",
			މ: "m",
			ފ: "f",
			ދ: "dh",
			ތ: "th",
			ލ: "l",
			ގ: "g",
			ޏ: "gn",
			ސ: "s",
			ޑ: "d",
			ޒ: "z",
			ޓ: "t",
			ޔ: "y",
			ޕ: "p",
			ޖ: "j",
			ޗ: "ch",
			ޘ: "tt",
			ޙ: "hh",
			ޚ: "kh",
			ޛ: "th",
			ޜ: "z",
			ޝ: "sh",
			ޞ: "s",
			ޟ: "d",
			ޠ: "t",
			ޡ: "z",
			ޢ: "a",
			ޣ: "gh",
			ޤ: "q",
			ޥ: "w",
			"ަ": "a",
			"ާ": "aa",
			"ި": "i",
			"ީ": "ee",
			"ު": "u",
			"ޫ": "oo",
			"ެ": "e",
			"ޭ": "ey",
			"ޮ": "o",
			"ޯ": "oa",
			"ް": "",
			ა: "a",
			ბ: "b",
			გ: "g",
			დ: "d",
			ე: "e",
			ვ: "v",
			ზ: "z",
			თ: "t",
			ი: "i",
			კ: "k",
			ლ: "l",
			მ: "m",
			ნ: "n",
			ო: "o",
			პ: "p",
			ჟ: "zh",
			რ: "r",
			ს: "s",
			ტ: "t",
			უ: "u",
			ფ: "p",
			ქ: "k",
			ღ: "gh",
			ყ: "q",
			შ: "sh",
			ჩ: "ch",
			ც: "ts",
			ძ: "dz",
			წ: "ts",
			ჭ: "ch",
			ხ: "kh",
			ჯ: "j",
			ჰ: "h",
			α: "a",
			β: "v",
			γ: "g",
			δ: "d",
			ε: "e",
			ζ: "z",
			η: "i",
			θ: "th",
			ι: "i",
			κ: "k",
			λ: "l",
			μ: "m",
			ν: "n",
			ξ: "ks",
			ο: "o",
			π: "p",
			ρ: "r",
			σ: "s",
			τ: "t",
			υ: "y",
			φ: "f",
			χ: "x",
			ψ: "ps",
			ω: "o",
			ά: "a",
			έ: "e",
			ί: "i",
			ό: "o",
			ύ: "y",
			ή: "i",
			ώ: "o",
			ς: "s",
			ϊ: "i",
			ΰ: "y",
			ϋ: "y",
			ΐ: "i",
			Α: "A",
			Β: "B",
			Γ: "G",
			Δ: "D",
			Ε: "E",
			Ζ: "Z",
			Η: "I",
			Θ: "TH",
			Ι: "I",
			Κ: "K",
			Λ: "L",
			Μ: "M",
			Ν: "N",
			Ξ: "KS",
			Ο: "O",
			Π: "P",
			Ρ: "R",
			Σ: "S",
			Τ: "T",
			Υ: "Y",
			Φ: "F",
			Χ: "X",
			Ψ: "PS",
			Ω: "O",
			Ά: "A",
			Έ: "E",
			Ί: "I",
			Ό: "O",
			Ύ: "Y",
			Ή: "I",
			Ώ: "O",
			Ϊ: "I",
			Ϋ: "Y",
			ā: "a",
			ē: "e",
			ģ: "g",
			ī: "i",
			ķ: "k",
			ļ: "l",
			ņ: "n",
			ū: "u",
			Ā: "A",
			Ē: "E",
			Ģ: "G",
			Ī: "I",
			Ķ: "k",
			Ļ: "L",
			Ņ: "N",
			Ū: "U",
			Ќ: "Kj",
			ќ: "kj",
			Љ: "Lj",
			љ: "lj",
			Њ: "Nj",
			њ: "nj",
			Тс: "Ts",
			тс: "ts",
			ą: "a",
			ć: "c",
			ę: "e",
			ł: "l",
			ń: "n",
			ś: "s",
			ź: "z",
			ż: "z",
			Ą: "A",
			Ć: "C",
			Ę: "E",
			Ł: "L",
			Ń: "N",
			Ś: "S",
			Ź: "Z",
			Ż: "Z",
			Є: "Ye",
			І: "I",
			Ї: "Yi",
			Ґ: "G",
			є: "ye",
			і: "i",
			ї: "yi",
			ґ: "g",
			ă: "a",
			Ă: "A",
			ș: "s",
			Ș: "S",
			ț: "t",
			Ț: "T",
			ţ: "t",
			Ţ: "T",
			а: "a",
			б: "b",
			в: "v",
			г: "g",
			д: "d",
			е: "e",
			ё: "yo",
			ж: "zh",
			з: "z",
			и: "i",
			й: "i",
			к: "k",
			л: "l",
			м: "m",
			н: "n",
			о: "o",
			п: "p",
			р: "r",
			с: "s",
			т: "t",
			у: "u",
			ф: "f",
			х: "kh",
			ц: "c",
			ч: "ch",
			ш: "sh",
			щ: "sh",
			ъ: "",
			ы: "y",
			ь: "",
			э: "e",
			ю: "yu",
			я: "ya",
			А: "A",
			Б: "B",
			В: "V",
			Г: "G",
			Д: "D",
			Е: "E",
			Ё: "Yo",
			Ж: "Zh",
			З: "Z",
			И: "I",
			Й: "I",
			К: "K",
			Л: "L",
			М: "M",
			Н: "N",
			О: "O",
			П: "P",
			Р: "R",
			С: "S",
			Т: "T",
			У: "U",
			Ф: "F",
			Х: "Kh",
			Ц: "C",
			Ч: "Ch",
			Ш: "Sh",
			Щ: "Sh",
			Ъ: "",
			Ы: "Y",
			Ь: "",
			Э: "E",
			Ю: "Yu",
			Я: "Ya",
			ђ: "dj",
			ј: "j",
			ћ: "c",
			џ: "dz",
			Ђ: "Dj",
			Ј: "j",
			Ћ: "C",
			Џ: "Dz",
			ľ: "l",
			ĺ: "l",
			ŕ: "r",
			Ľ: "L",
			Ĺ: "L",
			Ŕ: "R",
			ş: "s",
			Ş: "S",
			ı: "i",
			İ: "I",
			ğ: "g",
			Ğ: "G",
			ả: "a",
			Ả: "A",
			ẳ: "a",
			Ẳ: "A",
			ẩ: "a",
			Ẩ: "A",
			đ: "d",
			Đ: "D",
			ẹ: "e",
			Ẹ: "E",
			ẽ: "e",
			Ẽ: "E",
			ẻ: "e",
			Ẻ: "E",
			ế: "e",
			Ế: "E",
			ề: "e",
			Ề: "E",
			ệ: "e",
			Ệ: "E",
			ễ: "e",
			Ễ: "E",
			ể: "e",
			Ể: "E",
			ỏ: "o",
			ọ: "o",
			Ọ: "o",
			ố: "o",
			Ố: "O",
			ồ: "o",
			Ồ: "O",
			ổ: "o",
			Ổ: "O",
			ộ: "o",
			Ộ: "O",
			ỗ: "o",
			Ỗ: "O",
			ơ: "o",
			Ơ: "O",
			ớ: "o",
			Ớ: "O",
			ờ: "o",
			Ờ: "O",
			ợ: "o",
			Ợ: "O",
			ỡ: "o",
			Ỡ: "O",
			Ở: "o",
			ở: "o",
			ị: "i",
			Ị: "I",
			ĩ: "i",
			Ĩ: "I",
			ỉ: "i",
			Ỉ: "i",
			ủ: "u",
			Ủ: "U",
			ụ: "u",
			Ụ: "U",
			ũ: "u",
			Ũ: "U",
			ư: "u",
			Ư: "U",
			ứ: "u",
			Ứ: "U",
			ừ: "u",
			Ừ: "U",
			ự: "u",
			Ự: "U",
			ữ: "u",
			Ữ: "U",
			ử: "u",
			Ử: "ư",
			ỷ: "y",
			Ỷ: "y",
			ỳ: "y",
			Ỳ: "Y",
			ỵ: "y",
			Ỵ: "Y",
			ỹ: "y",
			Ỹ: "Y",
			ạ: "a",
			Ạ: "A",
			ấ: "a",
			Ấ: "A",
			ầ: "a",
			Ầ: "A",
			ậ: "a",
			Ậ: "A",
			ẫ: "a",
			Ẫ: "A",
			ắ: "a",
			Ắ: "A",
			ằ: "a",
			Ằ: "A",
			ặ: "a",
			Ặ: "A",
			ẵ: "a",
			Ẵ: "A",
			"⓪": "0",
			"①": "1",
			"②": "2",
			"③": "3",
			"④": "4",
			"⑤": "5",
			"⑥": "6",
			"⑦": "7",
			"⑧": "8",
			"⑨": "9",
			"⑩": "10",
			"⑪": "11",
			"⑫": "12",
			"⑬": "13",
			"⑭": "14",
			"⑮": "15",
			"⑯": "16",
			"⑰": "17",
			"⑱": "18",
			"⑲": "18",
			"⑳": "18",
			"⓵": "1",
			"⓶": "2",
			"⓷": "3",
			"⓸": "4",
			"⓹": "5",
			"⓺": "6",
			"⓻": "7",
			"⓼": "8",
			"⓽": "9",
			"⓾": "10",
			"⓿": "0",
			"⓫": "11",
			"⓬": "12",
			"⓭": "13",
			"⓮": "14",
			"⓯": "15",
			"⓰": "16",
			"⓱": "17",
			"⓲": "18",
			"⓳": "19",
			"⓴": "20",
			"Ⓐ": "A",
			"Ⓑ": "B",
			"Ⓒ": "C",
			"Ⓓ": "D",
			"Ⓔ": "E",
			"Ⓕ": "F",
			"Ⓖ": "G",
			"Ⓗ": "H",
			"Ⓘ": "I",
			"Ⓙ": "J",
			"Ⓚ": "K",
			"Ⓛ": "L",
			"Ⓜ": "M",
			"Ⓝ": "N",
			"Ⓞ": "O",
			"Ⓟ": "P",
			"Ⓠ": "Q",
			"Ⓡ": "R",
			"Ⓢ": "S",
			"Ⓣ": "T",
			"Ⓤ": "U",
			"Ⓥ": "V",
			"Ⓦ": "W",
			"Ⓧ": "X",
			"Ⓨ": "Y",
			"Ⓩ": "Z",
			"ⓐ": "a",
			"ⓑ": "b",
			"ⓒ": "c",
			"ⓓ": "d",
			"ⓔ": "e",
			"ⓕ": "f",
			"ⓖ": "g",
			"ⓗ": "h",
			"ⓘ": "i",
			"ⓙ": "j",
			"ⓚ": "k",
			"ⓛ": "l",
			"ⓜ": "m",
			"ⓝ": "n",
			"ⓞ": "o",
			"ⓟ": "p",
			"ⓠ": "q",
			"ⓡ": "r",
			"ⓢ": "s",
			"ⓣ": "t",
			"ⓤ": "u",
			"ⓦ": "v",
			"ⓥ": "w",
			"ⓧ": "x",
			"ⓨ": "y",
			"ⓩ": "z",
			"“": "\"",
			"”": "\"",
			"‘": "'",
			"’": "'",
			"∂": "d",
			ƒ: "f",
			"™": "(TM)",
			"©": "(C)",
			œ: "oe",
			Œ: "OE",
			"®": "(R)",
			"†": "+",
			"℠": "(SM)",
			"…": "...",
			"˚": "o",
			º: "o",
			ª: "a",
			"•": "*",
			"၊": ",",
			"။": ".",
			$: "USD",
			"€": "EUR",
			"₢": "BRN",
			"₣": "FRF",
			"£": "GBP",
			"₤": "ITL",
			"₦": "NGN",
			"₧": "ESP",
			"₩": "KRW",
			"₪": "ILS",
			"₫": "VND",
			"₭": "LAK",
			"₮": "MNT",
			"₯": "GRD",
			"₱": "ARS",
			"₲": "PYG",
			"₳": "ARA",
			"₴": "UAH",
			"₵": "GHS",
			"¢": "cent",
			"¥": "CNY",
			元: "CNY",
			円: "YEN",
			"﷼": "IRR",
			"₠": "EWE",
			"฿": "THB",
			"₨": "INR",
			"₹": "INR",
			"₰": "PF",
			"₺": "TRY",
			"؋": "AFN",
			"₼": "AZN",
			лв: "BGN",
			"៛": "KHR",
			"₡": "CRC",
			"₸": "KZT",
			ден: "MKD",
			zł: "PLN",
			"₽": "RUB",
			"₾": "GEL"
		}, r = ["်", "ް"], i = {
			"ာ": "a",
			"ါ": "a",
			"ေ": "e",
			"ဲ": "e",
			"ိ": "i",
			"ီ": "i",
			"ို": "o",
			"ု": "u",
			"ူ": "u",
			"ေါင်": "aung",
			"ော": "aw",
			"ော်": "aw",
			"ေါ": "aw",
			"ေါ်": "aw",
			"်": "်",
			က်: "et",
			"ိုက်": "aik",
			"ောက်": "auk",
			င်: "in",
			"ိုင်": "aing",
			"ောင်": "aung",
			စ်: "it",
			ည်: "i",
			တ်: "at",
			"ိတ်": "eik",
			"ုတ်": "ok",
			"ွတ်": "ut",
			"ေတ်": "it",
			ဒ်: "d",
			"ိုဒ်": "ok",
			"ုဒ်": "ait",
			န်: "an",
			"ာန်": "an",
			"ိန်": "ein",
			"ုန်": "on",
			"ွန်": "un",
			ပ်: "at",
			"ိပ်": "eik",
			"ုပ်": "ok",
			"ွပ်": "ut",
			န်ုပ်: "nub",
			မ်: "an",
			"ိမ်": "ein",
			"ုမ်": "on",
			"ွမ်": "un",
			ယ်: "e",
			"ိုလ်": "ol",
			ဉ်: "in",
			"ံ": "an",
			"ိံ": "ein",
			"ုံ": "on",
			"ައް": "ah",
			"ަށް": "ah"
		}, a = {
			en: {},
			az: {
				ç: "c",
				ə: "e",
				ğ: "g",
				ı: "i",
				ö: "o",
				ş: "s",
				ü: "u",
				Ç: "C",
				Ə: "E",
				Ğ: "G",
				İ: "I",
				Ö: "O",
				Ş: "S",
				Ü: "U"
			},
			cs: {
				č: "c",
				ď: "d",
				ě: "e",
				ň: "n",
				ř: "r",
				š: "s",
				ť: "t",
				ů: "u",
				ž: "z",
				Č: "C",
				Ď: "D",
				Ě: "E",
				Ň: "N",
				Ř: "R",
				Š: "S",
				Ť: "T",
				Ů: "U",
				Ž: "Z"
			},
			fi: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			hu: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O",
				ü: "u",
				Ü: "U",
				ű: "u",
				Ű: "U"
			},
			lt: {
				ą: "a",
				č: "c",
				ę: "e",
				ė: "e",
				į: "i",
				š: "s",
				ų: "u",
				ū: "u",
				ž: "z",
				Ą: "A",
				Č: "C",
				Ę: "E",
				Ė: "E",
				Į: "I",
				Š: "S",
				Ų: "U",
				Ū: "U"
			},
			lv: {
				ā: "a",
				č: "c",
				ē: "e",
				ģ: "g",
				ī: "i",
				ķ: "k",
				ļ: "l",
				ņ: "n",
				š: "s",
				ū: "u",
				ž: "z",
				Ā: "A",
				Č: "C",
				Ē: "E",
				Ģ: "G",
				Ī: "i",
				Ķ: "k",
				Ļ: "L",
				Ņ: "N",
				Š: "S",
				Ū: "u",
				Ž: "Z"
			},
			pl: {
				ą: "a",
				ć: "c",
				ę: "e",
				ł: "l",
				ń: "n",
				ó: "o",
				ś: "s",
				ź: "z",
				ż: "z",
				Ą: "A",
				Ć: "C",
				Ę: "e",
				Ł: "L",
				Ń: "N",
				Ó: "O",
				Ś: "S",
				Ź: "Z",
				Ż: "Z"
			},
			sv: {
				ä: "a",
				Ä: "A",
				ö: "o",
				Ö: "O"
			},
			sk: {
				ä: "a",
				Ä: "A"
			},
			sr: {
				љ: "lj",
				њ: "nj",
				Љ: "Lj",
				Њ: "Nj",
				đ: "dj",
				Đ: "Dj"
			},
			tr: {
				Ü: "U",
				Ö: "O",
				ü: "u",
				ö: "o"
			}
		}, o = {
			ar: {
				"∆": "delta",
				"∞": "la-nihaya",
				"♥": "hob",
				"&": "wa",
				"|": "aw",
				"<": "aqal-men",
				">": "akbar-men",
				"∑": "majmou",
				"¤": "omla"
			},
			az: {},
			ca: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "amor",
				"&": "i",
				"|": "o",
				"<": "menys que",
				">": "mes que",
				"∑": "suma dels",
				"¤": "moneda"
			},
			cs: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "nebo",
				"<": "mensi nez",
				">": "vetsi nez",
				"∑": "soucet",
				"¤": "mena"
			},
			de: {
				"∆": "delta",
				"∞": "unendlich",
				"♥": "Liebe",
				"&": "und",
				"|": "oder",
				"<": "kleiner als",
				">": "groesser als",
				"∑": "Summe von",
				"¤": "Waehrung"
			},
			dv: {
				"∆": "delta",
				"∞": "kolunulaa",
				"♥": "loabi",
				"&": "aai",
				"|": "noonee",
				"<": "ah vure kuda",
				">": "ah vure bodu",
				"∑": "jumula",
				"¤": "faisaa"
			},
			en: {
				"∆": "delta",
				"∞": "infinity",
				"♥": "love",
				"&": "and",
				"|": "or",
				"<": "less than",
				">": "greater than",
				"∑": "sum",
				"¤": "currency"
			},
			es: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "y",
				"|": "u",
				"<": "menos que",
				">": "mas que",
				"∑": "suma de los",
				"¤": "moneda"
			},
			fa: {
				"∆": "delta",
				"∞": "bi-nahayat",
				"♥": "eshgh",
				"&": "va",
				"|": "ya",
				"<": "kamtar-az",
				">": "bishtar-az",
				"∑": "majmooe",
				"¤": "vahed"
			},
			fi: {
				"∆": "delta",
				"∞": "aarettomyys",
				"♥": "rakkaus",
				"&": "ja",
				"|": "tai",
				"<": "pienempi kuin",
				">": "suurempi kuin",
				"∑": "summa",
				"¤": "valuutta"
			},
			fr: {
				"∆": "delta",
				"∞": "infiniment",
				"♥": "Amour",
				"&": "et",
				"|": "ou",
				"<": "moins que",
				">": "superieure a",
				"∑": "somme des",
				"¤": "monnaie"
			},
			ge: {
				"∆": "delta",
				"∞": "usasruloba",
				"♥": "siqvaruli",
				"&": "da",
				"|": "an",
				"<": "naklebi",
				">": "meti",
				"∑": "jami",
				"¤": "valuta"
			},
			gr: {},
			hu: {
				"∆": "delta",
				"∞": "vegtelen",
				"♥": "szerelem",
				"&": "es",
				"|": "vagy",
				"<": "kisebb mint",
				">": "nagyobb mint",
				"∑": "szumma",
				"¤": "penznem"
			},
			it: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amore",
				"&": "e",
				"|": "o",
				"<": "minore di",
				">": "maggiore di",
				"∑": "somma",
				"¤": "moneta"
			},
			lt: {
				"∆": "delta",
				"∞": "begalybe",
				"♥": "meile",
				"&": "ir",
				"|": "ar",
				"<": "maziau nei",
				">": "daugiau nei",
				"∑": "suma",
				"¤": "valiuta"
			},
			lv: {
				"∆": "delta",
				"∞": "bezgaliba",
				"♥": "milestiba",
				"&": "un",
				"|": "vai",
				"<": "mazak neka",
				">": "lielaks neka",
				"∑": "summa",
				"¤": "valuta"
			},
			my: {
				"∆": "kwahkhyaet",
				"∞": "asaonasme",
				"♥": "akhyait",
				"&": "nhin",
				"|": "tho",
				"<": "ngethaw",
				">": "kyithaw",
				"∑": "paungld",
				"¤": "ngwekye"
			},
			mk: {},
			nl: {
				"∆": "delta",
				"∞": "oneindig",
				"♥": "liefde",
				"&": "en",
				"|": "of",
				"<": "kleiner dan",
				">": "groter dan",
				"∑": "som",
				"¤": "valuta"
			},
			pl: {
				"∆": "delta",
				"∞": "nieskonczonosc",
				"♥": "milosc",
				"&": "i",
				"|": "lub",
				"<": "mniejsze niz",
				">": "wieksze niz",
				"∑": "suma",
				"¤": "waluta"
			},
			pt: {
				"∆": "delta",
				"∞": "infinito",
				"♥": "amor",
				"&": "e",
				"|": "ou",
				"<": "menor que",
				">": "maior que",
				"∑": "soma",
				"¤": "moeda"
			},
			ro: {
				"∆": "delta",
				"∞": "infinit",
				"♥": "dragoste",
				"&": "si",
				"|": "sau",
				"<": "mai mic ca",
				">": "mai mare ca",
				"∑": "suma",
				"¤": "valuta"
			},
			ru: {
				"∆": "delta",
				"∞": "beskonechno",
				"♥": "lubov",
				"&": "i",
				"|": "ili",
				"<": "menshe",
				">": "bolshe",
				"∑": "summa",
				"¤": "valjuta"
			},
			sk: {
				"∆": "delta",
				"∞": "nekonecno",
				"♥": "laska",
				"&": "a",
				"|": "alebo",
				"<": "menej ako",
				">": "viac ako",
				"∑": "sucet",
				"¤": "mena"
			},
			sr: {},
			tr: {
				"∆": "delta",
				"∞": "sonsuzluk",
				"♥": "ask",
				"&": "ve",
				"|": "veya",
				"<": "kucuktur",
				">": "buyuktur",
				"∑": "toplam",
				"¤": "para birimi"
			},
			uk: {
				"∆": "delta",
				"∞": "bezkinechnist",
				"♥": "lubov",
				"&": "i",
				"|": "abo",
				"<": "menshe",
				">": "bilshe",
				"∑": "suma",
				"¤": "valjuta"
			},
			vn: {
				"∆": "delta",
				"∞": "vo cuc",
				"♥": "yeu",
				"&": "va",
				"|": "hoac",
				"<": "nho hon",
				">": "lon hon",
				"∑": "tong",
				"¤": "tien te"
			}
		}, s = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			",",
			"/"
		].join(""), c = [
			";",
			"?",
			":",
			"@",
			"&",
			"=",
			"+",
			"$",
			","
		].join(""), l = [
			".",
			"!",
			"~",
			"*",
			"'",
			"(",
			")"
		].join(""), u = function(e, t) {
			var u = "-", d = "", m = "", h = !0, g = {}, _, v, y, b, x, S, C, w, T, E, D, O, k, A, j = "";
			if (typeof e != "string") return "";
			if (typeof t == "string" && (u = t), C = o.en, w = a.en, typeof t == "object") for (D in _ = t.maintainCase || !1, g = t.custom && typeof t.custom == "object" ? t.custom : g, y = +t.truncate > 1 && t.truncate || !1, b = t.uric || !1, x = t.uricNoSlash || !1, S = t.mark || !1, h = t.symbols !== !1 && t.lang !== !1, u = t.separator || u, b && (j += s), x && (j += c), S && (j += l), C = t.lang && o[t.lang] && h ? o[t.lang] : h ? o.en : {}, w = t.lang && a[t.lang] ? a[t.lang] : t.lang === !1 || t.lang === !0 ? {} : a.en, t.titleCase && typeof t.titleCase.length == "number" && Array.prototype.toString.call(t.titleCase) ? (t.titleCase.forEach(function(e) {
				g[e + ""] = e + "";
			}), v = !0) : v = !!t.titleCase, t.custom && typeof t.custom.length == "number" && Array.prototype.toString.call(t.custom) && t.custom.forEach(function(e) {
				g[e + ""] = e + "";
			}), Object.keys(g).forEach(function(t) {
				var n = t.length > 1 ? RegExp("\\b" + f(t) + "\\b", "gi") : new RegExp(f(t), "gi");
				e = e.replace(n, g[t]);
			}), g) j += D;
			for (j += u, j = f(j), e = e.replace(/(^\s+|\s+$)/g, ""), k = !1, A = !1, E = 0, O = e.length; E < O; E++) D = e[E], p(D, g) ? k = !1 : w[D] ? (D = k && w[D].match(/[A-Za-z0-9]/) ? " " + w[D] : w[D], k = !1) : D in n ? (E + 1 < O && r.indexOf(e[E + 1]) >= 0 ? (m += D, D = "") : A === !0 ? (D = i[m] + n[D], m = "") : D = k && n[D].match(/[A-Za-z0-9]/) ? " " + n[D] : n[D], k = !1, A = !1) : D in i ? (m += D, D = "", E === O - 1 && (D = i[m]), A = !0) : C[D] && !(b && s.indexOf(D) !== -1) && !(x && c.indexOf(D) !== -1) ? (D = k || d.substr(-1).match(/[A-Za-z0-9]/) ? u + C[D] : C[D], D += e[E + 1] !== void 0 && e[E + 1].match(/[A-Za-z0-9]/) ? u : "", k = !0) : (A === !0 ? (D = i[m] + D, m = "", A = !1) : k && (/[A-Za-z0-9]/.test(D) || d.substr(-1).match(/A-Za-z0-9]/)) && (D = " " + D), k = !1), d += D.replace(RegExp("[^\\w\\s" + j + "_-]", "g"), u);
			return v && (d = d.replace(/(\w)(\S*)/g, function(e, t, n) {
				var r = t.toUpperCase() + (n === null ? "" : n);
				return Object.keys(g).indexOf(r.toLowerCase()) < 0 ? r : r.toLowerCase();
			})), d = d.replace(/\s+/g, u).replace(RegExp("\\" + u + "+", "g"), u).replace(RegExp("(^\\" + u + "+|\\" + u + "+$)", "g"), ""), y && d.length > y && (T = d.charAt(y) === u, d = d.slice(0, y), T || (d = d.slice(0, d.lastIndexOf(u)))), !_ && !v && (d = d.toLowerCase()), d;
		}, d = function(e) {
			return function(t) {
				return u(t, e);
			};
		}, f = function(e) {
			return e.replace(/[-\\^$*+?.()|[\]{}\/]/g, "\\$&");
		}, p = function(e, t) {
			for (var n in t) if (t[n] === e) return !0;
		};
		if (t !== void 0 && t.exports) t.exports = u, t.exports.createSlug = d;
		else if (typeof define < "u" && define.amd) define([], function() {
			return u;
		});
		else try {
			if (e.getSlug || e.createSlug) throw "speakingurl: globals exists /(getSlug|createSlug)/";
			e.getSlug = u, e.createSlug = d;
		} catch (e) {}
	})(e);
}));
(/* @__PURE__ */ tt(((e, t) => {
	t.exports = Un();
})))(), R.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ == null && (R.__VUE_DEVTOOLS_NEXT_APP_RECORD_INFO__ = {
	id: 0,
	appIds: /* @__PURE__ */ new Set()
});
function Wn(e) {
	H.highPerfModeEnabled = e == null ? !H.highPerfModeEnabled : e, !e && V.value && Nn(V.value.app);
}
function Gn(e) {
	H.devtoolsClientDetected = T(T({}, H.devtoolsClientDetected), e), Wn(!Object.values(H.devtoolsClientDetected).some(Boolean));
}
R.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ != null || (R.__VUE_DEVTOOLS_UPDATE_CLIENT_DETECTED__ = Gn);
var Kn = class {
	constructor() {
		this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
	}
	set(e, t) {
		this.keyToValue.set(e, t), this.valueToKey.set(t, e);
	}
	getByKey(e) {
		return this.keyToValue.get(e);
	}
	getByValue(e) {
		return this.valueToKey.get(e);
	}
	clear() {
		this.keyToValue.clear(), this.valueToKey.clear();
	}
}, qn = class {
	constructor(e) {
		this.generateIdentifier = e, this.kv = new Kn();
	}
	register(e, t) {
		this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
	}
	clear() {
		this.kv.clear();
	}
	getIdentifier(e) {
		return this.kv.getByValue(e);
	}
	getValue(e) {
		return this.kv.getByKey(e);
	}
}, Jn = class extends qn {
	constructor() {
		super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
	}
	register(e, t) {
		typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
	}
	getAllowedProps(e) {
		return this.classToAllowedProps.get(e);
	}
};
function Yn(e) {
	if ("values" in Object) return Object.values(e);
	let t = [];
	for (let n in e) e.hasOwnProperty(n) && t.push(e[n]);
	return t;
}
function Xn(e, t) {
	let n = Yn(e);
	if ("find" in n) return n.find(t);
	let r = n;
	for (let e = 0; e < r.length; e++) {
		let n = r[e];
		if (t(n)) return n;
	}
}
function Zn(e, t) {
	Object.entries(e).forEach(([e, n]) => t(n, e));
}
function Qn(e, t) {
	return e.indexOf(t) !== -1;
}
function $n(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (t(r)) return r;
	}
}
var er = class {
	constructor() {
		this.transfomers = {};
	}
	register(e) {
		this.transfomers[e.name] = e;
	}
	findApplicable(e) {
		return Xn(this.transfomers, (t) => t.isApplicable(e));
	}
	findByName(e) {
		return this.transfomers[e];
	}
}, tr = (e) => Object.prototype.toString.call(e).slice(8, -1), nr = (e) => e === void 0, rr = (e) => e === null, ir = (e) => typeof e != "object" || !e || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null || Object.getPrototypeOf(e) === Object.prototype, ar = (e) => ir(e) && Object.keys(e).length === 0, or = (e) => Array.isArray(e), sr = (e) => typeof e == "string", cr = (e) => typeof e == "number" && !isNaN(e), lr = (e) => typeof e == "boolean", ur = (e) => e instanceof RegExp, dr = (e) => e instanceof Map, fr = (e) => e instanceof Set, pr = (e) => tr(e) === "Symbol", mr = (e) => e instanceof Date && !isNaN(e.valueOf()), hr = (e) => e instanceof Error, gr = (e) => typeof e == "number" && isNaN(e), _r = (e) => lr(e) || rr(e) || nr(e) || cr(e) || sr(e) || pr(e), vr = (e) => typeof e == "bigint", yr = (e) => e === Infinity || e === -Infinity, br = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), xr = (e) => e instanceof URL, Sr = (e) => e.replace(/\./g, "\\."), Cr = (e) => e.map(String).map(Sr).join("."), wr = (e) => {
	let t = [], n = "";
	for (let r = 0; r < e.length; r++) {
		let i = e.charAt(r);
		if (i === "\\" && e.charAt(r + 1) === ".") {
			n += ".", r++;
			continue;
		}
		if (i === ".") {
			t.push(n), n = "";
			continue;
		}
		n += i;
	}
	let r = n;
	return t.push(r), t;
};
function Tr(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Er = [
	Tr(nr, "undefined", () => null, () => void 0),
	Tr(vr, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : (console.error("Please add a BigInt polyfill."), e)),
	Tr(mr, "Date", (e) => e.toISOString(), (e) => new Date(e)),
	Tr(hr, "Error", (e, t) => {
		let n = {
			name: e.name,
			message: e.message
		};
		return t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}, (e, t) => {
		let n = Error(e.message);
		return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((t) => {
			n[t] = e[t];
		}), n;
	}),
	Tr(ur, "regexp", (e) => "" + e, (e) => {
		let t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
		return new RegExp(t, n);
	}),
	Tr(fr, "set", (e) => [...e.values()], (e) => new Set(e)),
	Tr(dr, "map", (e) => [...e.entries()], (e) => new Map(e)),
	Tr((e) => gr(e) || yr(e), "number", (e) => gr(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
	Tr((e) => e === 0 && 1 / e == -Infinity, "number", () => "-0", Number),
	Tr(xr, "URL", (e) => e.toString(), (e) => new URL(e))
];
function Dr(e, t, n, r) {
	return {
		isApplicable: e,
		annotation: t,
		transform: n,
		untransform: r
	};
}
var Or = Dr((e, t) => pr(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
	let r = n.symbolRegistry.getValue(t[1]);
	if (!r) throw Error("Trying to deserialize unknown symbol");
	return r;
}), kr = [
	Int8Array,
	Uint8Array,
	Int16Array,
	Uint16Array,
	Int32Array,
	Uint32Array,
	Float32Array,
	Float64Array,
	Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Ar = Dr(br, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
	let n = kr[t[1]];
	if (!n) throw Error("Trying to deserialize unknown typed array");
	return new n(e);
});
function jr(e, t) {
	return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Mr = Dr(jr, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
	let n = t.classRegistry.getAllowedProps(e.constructor);
	if (!n) return T({}, e);
	let r = {};
	return n.forEach((t) => {
		r[t] = e[t];
	}), r;
}, (e, t, n) => {
	let r = n.classRegistry.getValue(t[1]);
	if (!r) throw Error(`Trying to deserialize unknown class '${t[1]}' - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564`);
	return Object.assign(Object.create(r.prototype), e);
}), Nr = Dr((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
	let r = n.customTransformerRegistry.findByName(t[1]);
	if (!r) throw Error("Trying to deserialize unknown custom value");
	return r.deserialize(e);
}), Pr = [
	Mr,
	Or,
	Nr,
	Ar
], Fr = (e, t) => {
	let n = $n(Pr, (n) => n.isApplicable(e, t));
	if (n) return {
		value: n.transform(e, t),
		type: n.annotation(e, t)
	};
	let r = $n(Er, (n) => n.isApplicable(e, t));
	if (r) return {
		value: r.transform(e, t),
		type: r.annotation
	};
}, Ir = {};
Er.forEach((e) => {
	Ir[e.annotation] = e;
});
var Lr = (e, t, n) => {
	if (or(t)) switch (t[0]) {
		case "symbol": return Or.untransform(e, t, n);
		case "class": return Mr.untransform(e, t, n);
		case "custom": return Nr.untransform(e, t, n);
		case "typed-array": return Ar.untransform(e, t, n);
		default: throw Error("Unknown transformation: " + t);
	}
	else {
		let r = Ir[t];
		if (!r) throw Error("Unknown transformation: " + t);
		return r.untransform(e, n);
	}
}, Rr = (e, t) => {
	if (t > e.size) throw Error("index out of bounds");
	let n = e.keys();
	for (; t > 0;) n.next(), t--;
	return n.next().value;
};
function zr(e) {
	if (Qn(e, "__proto__")) throw Error("__proto__ is not allowed as a property");
	if (Qn(e, "prototype")) throw Error("prototype is not allowed as a property");
	if (Qn(e, "constructor")) throw Error("constructor is not allowed as a property");
}
var Br = (e, t) => {
	zr(t);
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (fr(e)) e = Rr(e, +r);
		else if (dr(e)) {
			let i = +r, a = +t[++n] == 0 ? "key" : "value", o = Rr(e, i);
			switch (a) {
				case "key":
					e = o;
					break;
				case "value": e = e.get(o);
			}
		} else e = e[r];
	}
	return e;
}, Vr = (e, t, n) => {
	if (zr(t), t.length === 0) return n(e);
	let r = e;
	for (let e = 0; e < t.length - 1; e++) {
		let n = t[e];
		if (or(r)) {
			let e = +n;
			r = r[e];
		} else if (ir(r)) r = r[n];
		else if (fr(r)) {
			let e = +n;
			r = Rr(r, e);
		} else if (dr(r)) {
			if (e === t.length - 2) break;
			let i = +n, a = +t[++e] == 0 ? "key" : "value", o = Rr(r, i);
			switch (a) {
				case "key":
					r = o;
					break;
				case "value": r = r.get(o);
			}
		}
	}
	let i = t[t.length - 1];
	if (or(r) ? r[+i] = n(r[+i]) : ir(r) && (r[i] = n(r[i])), fr(r)) {
		let e = Rr(r, +i), t = n(e);
		e !== t && (r.delete(e), r.add(t));
	}
	if (dr(r)) {
		let e = +t[t.length - 2], a = Rr(r, e);
		switch (+i == 0 ? "key" : "value") {
			case "key": {
				let e = n(a);
				r.set(e, r.get(a)), e !== a && r.delete(a);
				break;
			}
			case "value": r.set(a, n(r.get(a)));
		}
	}
	return e;
};
function Hr(e, t, n = []) {
	if (!e) return;
	if (!or(e)) {
		Zn(e, (e, r) => Hr(e, t, [...n, ...wr(r)]));
		return;
	}
	let [r, i] = e;
	i && Zn(i, (e, r) => {
		Hr(e, t, [...n, ...wr(r)]);
	}), t(r, n);
}
function Ur(e, t, n) {
	return Hr(t, (t, r) => {
		e = Vr(e, r, (e) => Lr(e, t, n));
	}), e;
}
function Wr(e, t) {
	function n(t, n) {
		let r = Br(e, wr(n));
		t.map(wr).forEach((t) => {
			e = Vr(e, t, () => r);
		});
	}
	if (or(t)) {
		let [r, i] = t;
		r.forEach((t) => {
			e = Vr(e, wr(t), () => e);
		}), i && Zn(i, n);
	} else Zn(t, n);
	return e;
}
var Gr = (e, t) => ir(e) || or(e) || dr(e) || fr(e) || jr(e, t);
function Kr(e, t, n) {
	let r = n.get(e);
	r ? r.push(t) : n.set(e, [t]);
}
function qr(e, t) {
	let n = {}, r;
	return e.forEach((e) => {
		if (e.length <= 1) return;
		t || (e = e.map((e) => e.map(String)).sort((e, t) => e.length - t.length));
		let [i, ...a] = e;
		i.length === 0 ? r = a.map(Cr) : n[Cr(i)] = a.map(Cr);
	}), r ? ar(n) ? [r] : [r, n] : ar(n) ? void 0 : n;
}
var Jr = (e, t, n, r, i = [], a = [], o = /* @__PURE__ */ new Map()) => {
	var s;
	let c = _r(e);
	if (!c) {
		Kr(e, i, t);
		let n = o.get(e);
		if (n) return r ? { transformedValue: null } : n;
	}
	if (!Gr(e, n)) {
		let t = Fr(e, n), r = t ? {
			transformedValue: t.value,
			annotations: [t.type]
		} : { transformedValue: e };
		return c || o.set(e, r), r;
	}
	if (Qn(a, e)) return { transformedValue: null };
	let l = Fr(e, n), u = (s = l == null ? void 0 : l.value) == null ? e : s, d = or(u) ? [] : {}, f = {};
	Zn(u, (s, c) => {
		if (c === "__proto__" || c === "constructor" || c === "prototype") throw Error(`Detected property ${c}. This is a prototype pollution risk, please remove it from your object.`);
		let l = Jr(s, t, n, r, [...i, c], [...a, e], o);
		d[c] = l.transformedValue, or(l.annotations) ? f[c] = l.annotations : ir(l.annotations) && Zn(l.annotations, (e, t) => {
			f[Sr(c) + "." + t] = e;
		});
	});
	let p = ar(f) ? {
		transformedValue: d,
		annotations: l ? [l.type] : void 0
	} : {
		transformedValue: d,
		annotations: l ? [l.type, f] : f
	};
	return c || o.set(e, p), p;
};
function Yr(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function Xr(e) {
	return Yr(e) === "Array";
}
function Zr(e) {
	if (Yr(e) !== "Object") return !1;
	let t = Object.getPrototypeOf(e);
	return !!t && t.constructor === Object && t === Object.prototype;
}
function Qr(e, t, n, r, i) {
	let a = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
	a === "enumerable" && (e[t] = n), i && a === "nonenumerable" && Object.defineProperty(e, t, {
		value: n,
		enumerable: !1,
		writable: !0,
		configurable: !0
	});
}
function $r(e, t = {}) {
	if (Xr(e)) return e.map((e) => $r(e, t));
	if (!Zr(e)) return e;
	let n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
	return [...n, ...r].reduce((n, r) => {
		if (Xr(t.props) && !t.props.includes(r)) return n;
		let i = e[r];
		return Qr(n, r, $r(i, t), e, t.nonenumerable), n;
	}, {});
}
var G = class {
	constructor({ dedupe: e = !1 } = {}) {
		this.classRegistry = new Jn(), this.symbolRegistry = new qn((e) => {
			var t;
			return (t = e.description) == null ? "" : t;
		}), this.customTransformerRegistry = new er(), this.allowedErrorProps = [], this.dedupe = e;
	}
	serialize(e) {
		let t = /* @__PURE__ */ new Map(), n = Jr(e, t, this, this.dedupe), r = { json: n.transformedValue };
		n.annotations && (r.meta = T(T({}, r.meta), {}, { values: n.annotations }));
		let i = qr(t, this.dedupe);
		return i && (r.meta = T(T({}, r.meta), {}, { referentialEqualities: i })), r;
	}
	deserialize(e) {
		let { json: t, meta: n } = e, r = $r(t);
		return n != null && n.values && (r = Ur(r, n.values, this)), n != null && n.referentialEqualities && (r = Wr(r, n.referentialEqualities)), r;
	}
	stringify(e) {
		return JSON.stringify(this.serialize(e));
	}
	parse(e) {
		return this.deserialize(JSON.parse(e));
	}
	registerClass(e, t) {
		this.classRegistry.register(e, t);
	}
	registerSymbol(e, t) {
		this.symbolRegistry.register(e, t);
	}
	registerCustom(e, t) {
		this.customTransformerRegistry.register(T({ name: t }, e));
	}
	allowErrorProps(...e) {
		this.allowedErrorProps.push(...e);
	}
};
G.defaultInstance = new G(), G.serialize = G.defaultInstance.serialize.bind(G.defaultInstance), G.deserialize = G.defaultInstance.deserialize.bind(G.defaultInstance), G.stringify = G.defaultInstance.stringify.bind(G.defaultInstance), G.parse = G.defaultInstance.parse.bind(G.defaultInstance), G.registerClass = G.defaultInstance.registerClass.bind(G.defaultInstance), G.registerSymbol = G.defaultInstance.registerSymbol.bind(G.defaultInstance), G.registerCustom = G.defaultInstance.registerCustom.bind(G.defaultInstance), G.allowErrorProps = G.defaultInstance.allowErrorProps.bind(G.defaultInstance), G.serialize, G.deserialize, G.stringify, G.parse, G.registerClass, G.registerCustom, G.registerSymbol, G.allowErrorProps, R.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ != null || (R.__VUE_DEVTOOLS_KIT_MESSAGE_CHANNELS__ = []), R.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ != null || (R.__VUE_DEVTOOLS_KIT_RPC_CLIENT__ = null), R.__VUE_DEVTOOLS_KIT_RPC_SERVER__ != null || (R.__VUE_DEVTOOLS_KIT_RPC_SERVER__ = null), R.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ != null || (R.__VUE_DEVTOOLS_KIT_VITE_RPC_CLIENT__ = null), R.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ != null || (R.__VUE_DEVTOOLS_KIT_VITE_RPC_SERVER__ = null), R.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ != null || (R.__VUE_DEVTOOLS_KIT_BROADCAST_RPC_SERVER__ = null);
//#endregion
//#region node_modules/vue-router/dist/devtools-CLRpXhL7.js
var ei = typeof document < "u", ti = /#/g, ni = /&/g, ri = /\//g, ii = /=/g, ai = /\?/g, oi = /\+/g, si = /%5B/g, ci = /%5D/g, li = /%5E/g, ui = /%60/g, di = /%7B/g, fi = /%7C/g, pi = /%7D/g, mi = /%20/g;
function hi(e) {
	return e == null ? "" : encodeURI("" + e).replace(fi, "|").replace(si, "[").replace(ci, "]");
}
function gi(e) {
	return hi(e).replace(di, "{").replace(pi, "}").replace(li, "^");
}
function _i(e) {
	return hi(e).replace(oi, "%2B").replace(mi, "+").replace(ti, "%23").replace(ni, "%26").replace(ui, "`").replace(di, "{").replace(pi, "}").replace(li, "^");
}
function vi(e) {
	return _i(e).replace(ii, "%3D");
}
function yi(e) {
	return hi(e).replace(ti, "%23").replace(ai, "%3F");
}
function bi(e) {
	return yi(e).replace(ri, "%2F");
}
function xi(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch (t) {
		process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0080({ text: "" + e });
	}
	return "" + e;
}
var Si = /\/$/, Ci = (e) => e.replace(Si, "");
function wi(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r = r || t.slice(0, s), o = t.slice(s, t.length)), r = Mi(r == null ? t : r, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: xi(o)
	};
}
function Ti(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function Ei(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Di(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Oi(t.matched[r], n.matched[i]) && ki(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Oi(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function ki(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Ai(e[n], t[n])) return !1;
	return !0;
}
function Ai(e, t) {
	return I(e) ? ji(e, t) : I(t) ? ji(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function ji(e, t) {
	return I(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function Mi(e, t) {
	if (oe(e)) return e;
	if (process.env.NODE_ENV !== "production" && !oe(t)) return L.VUE_ROUTER_R0070({
		to: e,
		from: t
	}), e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
	(i === ".." || i === ".") && r.push("");
	let a = n.length - 1, o, s;
	for (o = 0; o < r.length; o++) if (s = r[o], s !== ".") {
		if (s === "..") a > 1 && a--;
		else break;
	}
	return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
var K = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
function Ni(e) {
	if (!e) {
		if (ei) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Ci(e);
}
var Pi = /^[^#]+#/;
function Fi(e, t) {
	return e.replace(Pi, "#") + t;
}
function Ii(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Li = () => history.scrollRestoration === "manual" ? {
	left: window.scrollX,
	top: window.scrollY
} : null;
function Ri(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#");
		if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!r || !document.getElementById(e.el.slice(1)))) try {
			let t = document.querySelector(e.el);
			if (r && t) {
				L.VUE_ROUTER_R0040({ el: e.el });
				return;
			}
		} catch (t) {
			L.VUE_ROUTER_R0041({ el: e.el });
			return;
		}
		let i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) {
			process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0042({ el: e.el });
			return;
		}
		t = Ii(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function zi(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Bi = /* @__PURE__ */ new Map();
function Vi(e) {
	Bi.set(e, Li());
}
function Hi(e) {
	let t = Bi.get(e);
	return Bi.delete(e), t;
}
function Ui(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Wi(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function Gi(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(oi, " "), i = r.indexOf("="), a = xi(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : xi(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			I(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Ki(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = vi(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(I(r) ? r.map((e) => e && _i(e)) : [r && _i(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function qi(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = I(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function Ji() {
	let e = [];
	function t(t) {
		return e.push(t), () => {
			let n = e.indexOf(t);
			n > -1 && e.splice(n, 1);
		};
	}
	function n() {
		e = [];
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	};
}
function Yi(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(me(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Ui(e) ? c(me(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, process.env.NODE_ENV === "production" ? l : Xi(Zi(l, t, n)))), d = Promise.resolve(u);
		if (e.length < 3 && (d = d.then(l)), process.env.NODE_ENV !== "production" && e.length > 2) {
			let t = {
				name: e.name,
				guard: e.toString()
			};
			if (typeof u == "object" && "then" in u) d = d.then((e) => l._called ? e : (L.VUE_ROUTER_R0023(t), Promise.reject(/* @__PURE__ */ Error("Invalid navigation guard"))));
			else if (u !== void 0 && !l._called) {
				L.VUE_ROUTER_R0023(t), c(/* @__PURE__ */ Error("Invalid navigation guard"));
				return;
			}
		}
		d.catch((e) => c(e));
	});
}
function Xi(e) {
	let t = !1;
	return function() {
		return t || (t = !0, L.VUE_ROUTER_R0025()), e.apply(this, arguments);
	};
}
function Zi(e, t, n) {
	let r = 0;
	return function() {
		r++ === 1 && L.VUE_ROUTER_R0024({
			from: n.fullPath,
			to: t.fullPath
		}), e._called = !0, r === 1 && e.apply(null, arguments);
	};
}
function Qi(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) {
		process.env.NODE_ENV !== "production" && !o.components && o.children && !o.children.length && L.VUE_ROUTER_R0026({ path: o.path });
		for (let e in o.components) {
			let s = o.components[e];
			if (process.env.NODE_ENV !== "production") {
				if (!s || typeof s != "object" && typeof s != "function") throw L.VUE_ROUTER_R0027({
					name: e,
					path: o.path,
					received: String(s)
				}), Error("Invalid route component");
				if ("then" in s) {
					L.VUE_ROUTER_R0028({
						name: e,
						path: o.path
					});
					let t = s;
					s = () => t;
				} else s.__asyncLoader && !s.__warnedDefineAsync && (s.__warnedDefineAsync = !0, L.VUE_ROUTER_R0029({
					name: e,
					path: o.path
				}));
			}
			if (!(t !== "beforeRouteEnter" && !o.instances[e])) {
				if (se(s)) {
					let c = (s.__vccOpts || s)[t];
					c && a.push(Yi(c, n, r, o, e, i));
				} else {
					let c = s();
					process.env.NODE_ENV !== "production" && !("catch" in c) && (L.VUE_ROUTER_R0030({
						name: e,
						path: o.path
					}), c = Promise.resolve(c)), a.push(() => c.then((a) => {
						if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
						let s = ce(a) ? a.default : a;
						o.mods[e] = a, o.components[e] = s;
						let c = (s.__vccOpts || s)[t];
						return c && Yi(c, n, r, o, e, i)();
					}));
				}
			}
		}
	}
	return a;
}
function $i(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Oi(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Oi(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
function ea(e, t) {
	let n = F({}, e, { matched: e.matched.map((e) => ba(e, [
		"instances",
		"children",
		"aliasOf"
	])) });
	return { _custom: {
		type: null,
		readOnly: !0,
		display: e.fullPath,
		tooltip: t,
		value: n
	} };
}
function ta(e) {
	return { _custom: { display: e } };
}
var na = 0;
function ra(e, t, n) {
	if (t.__hasDevtools) return;
	t.__hasDevtools = !0;
	let r = na++;
	jn({
		id: "org.vuejs.router" + (r ? "." + r : ""),
		label: "Vue Router",
		packageName: "vue-router",
		homepage: "https://router.vuejs.org",
		logo: "https://router.vuejs.org/logo.png",
		componentStateTypes: ["Routing"],
		app: e
	}, (i) => {
		i.on.inspectComponent((e) => {
			e.instanceData && e.instanceData.state.push({
				type: "Routing",
				key: "$route",
				editable: !1,
				value: ea(t.currentRoute.value, "Current Route")
			});
		}), i.on.visitComponentTree(({ treeNode: e, componentInstance: t }) => {
			if (t.__vrv_devtools) {
				let n = t.__vrv_devtools;
				e.tags.push({
					label: (n.name ? `${n.name.toString()}: ` : "") + n.path,
					textColor: 0,
					tooltip: "This component is rendered by &lt;router-view&gt;",
					backgroundColor: oa
				});
			}
			I(t.__vrl_devtools) && (t.__devtoolsApi = i, t.__vrl_devtools.forEach((t) => {
				let n = t.route.path, r = ua, i = "", a = 0;
				t.error ? (n = t.error, r = fa, a = pa) : t.isExactActive ? (r = ca, i = "This is exactly active") : t.isActive && (r = sa, i = "This link is active"), e.tags.push({
					label: n,
					textColor: a,
					tooltip: i,
					backgroundColor: r
				});
			}));
		}), o(t.currentRoute, () => {
			l(), i.notifyComponentUpdate(), i.sendInspectorTree(c), i.sendInspectorState(c);
		});
		let a = "router:navigations:" + r;
		i.addTimelineLayer({
			id: a,
			label: `Router${r ? " " + r : ""} Navigations`,
			color: 4237508
		}), t.onError((e, t) => {
			i.addTimelineEvent({
				layerId: a,
				event: {
					title: "Error during Navigation",
					subtitle: t.fullPath,
					logType: "error",
					time: i.now(),
					data: { error: e },
					groupId: t.meta.__navigationId
				}
			});
		});
		let s = 0;
		t.beforeEach((e, t) => {
			let n = {
				guard: ta("beforeEach"),
				from: ea(t, "Current Location during this navigation"),
				to: ea(e, "Target location")
			};
			Object.defineProperty(e.meta, "__navigationId", { value: s++ }), i.addTimelineEvent({
				layerId: a,
				event: {
					time: i.now(),
					title: "Start of navigation",
					subtitle: e.fullPath,
					data: n,
					groupId: e.meta.__navigationId
				}
			});
		}), t.afterEach((e, t, n) => {
			let r = { guard: ta("afterEach") };
			n ? (r.failure = { _custom: {
				type: Error,
				readOnly: !0,
				display: n ? n.message : "",
				tooltip: "Navigation Failure",
				value: n
			} }, r.status = ta("❌")) : r.status = ta("✅"), r.from = ea(t, "Current Location during this navigation"), r.to = ea(e, "Target location"), i.addTimelineEvent({
				layerId: a,
				event: {
					title: "End of navigation",
					subtitle: e.fullPath,
					time: i.now(),
					data: r,
					logType: n ? "warning" : "default",
					groupId: e.meta.__navigationId
				}
			});
		});
		let c = "router-inspector:" + r;
		i.addInspector({
			id: c,
			label: "Routes" + (r ? " " + r : ""),
			icon: "book",
			treeFilterPlaceholder: "Search routes"
		});
		function l() {
			if (!u) return;
			let e = u, r = n.getRoutes().filter((e) => !e.parent || !e.parent.record.components);
			r.forEach(va), e.filter && (r = r.filter((t) => ya(t, e.filter.toLowerCase()))), r.forEach((e) => _a(e, t.currentRoute.value)), e.rootNodes = r.map(ma);
		}
		let u;
		i.on.getInspectorTree((t) => {
			u = t, t.app === e && t.inspectorId === c && l();
		}), i.on.getInspectorState((t) => {
			if (t.app === e && t.inspectorId === c) {
				let e = n.getRoutes().find((e) => e.record.__vd_id === t.nodeId);
				e && (t.state = { options: aa(e) });
			}
		}), i.sendInspectorTree(c), i.sendInspectorState(c);
	});
}
function ia(e) {
	return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function aa(e) {
	let { record: t } = e, n = [{
		editable: !1,
		key: "path",
		value: t.path
	}];
	return t.name != null && n.push({
		editable: !1,
		key: "name",
		value: t.name
	}), n.push({
		editable: !1,
		key: "regexp",
		value: e.re
	}), e.keys.length && n.push({
		editable: !1,
		key: "keys",
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.keys.map((e) => `${e.name}${ia(e)}`).join(" "),
			tooltip: "Param keys",
			value: e.keys
		} }
	}), t.redirect != null && n.push({
		editable: !1,
		key: "redirect",
		value: t.redirect
	}), e.alias.length && n.push({
		editable: !1,
		key: "aliases",
		value: e.alias.map((e) => e.record.path)
	}), Object.keys(e.record.meta).length && n.push({
		editable: !1,
		key: "meta",
		value: e.record.meta
	}), n.push({
		key: "score",
		editable: !1,
		value: { _custom: {
			type: null,
			readOnly: !0,
			display: e.score.map((e) => e.join(", ")).join(" | "),
			tooltip: "Score used to sort routes",
			value: e.score
		} }
	}), n;
}
var oa = 15485081, sa = 2450411, ca = 8702998, la = 2282478, ua = 16486972, da = 6710886, fa = 16704226, pa = 12131356;
function ma(e) {
	let t = [], { record: n } = e;
	n.name != null && t.push({
		label: String(n.name),
		textColor: 0,
		backgroundColor: la
	}), n.aliasOf && t.push({
		label: "alias",
		textColor: 0,
		backgroundColor: ua
	}), e.__vd_match && t.push({
		label: "matches",
		textColor: 0,
		backgroundColor: oa
	}), e.__vd_exactActive && t.push({
		label: "exact",
		textColor: 0,
		backgroundColor: ca
	}), e.__vd_active && t.push({
		label: "active",
		textColor: 0,
		backgroundColor: sa
	}), n.redirect && t.push({
		label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
		textColor: 16777215,
		backgroundColor: da
	});
	let r = n.__vd_id;
	return r == null && (r = String(ha++), n.__vd_id = r), {
		id: r,
		label: n.path,
		tags: t,
		children: e.children.map(ma)
	};
}
var ha = 0, ga = /^\/(.*)\/([a-z]*)$/;
function _a(e, t) {
	let n = t.matched.length && Oi(t.matched[t.matched.length - 1], e.record);
	e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((t) => Oi(t, e.record))), e.children.forEach((e) => _a(e, t));
}
function va(e) {
	e.__vd_match = !1, e.children.forEach(va);
}
function ya(e, t) {
	let n = String(e.re).match(ga);
	if (e.__vd_match = !1, !n || n.length < 3) return !1;
	if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t)) return e.children.forEach((e) => ya(e, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
	let r = e.record.path.toLowerCase(), i = xi(r);
	return !oe(t) && (i.includes(t) || r.includes(t)) || i.startsWith(t) || r.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((e) => ya(e, t));
}
function ba(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || (n[r] = e[r]);
	return n;
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var xa = () => location.protocol + "//" + location.host;
function Sa(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), Ei(n, "");
	}
	return Ei(n, e) + r + i;
}
function Ca(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = Sa(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: "pop",
				direction: u ? u > 0 ? "forward" : "back" : ""
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		let { history: e } = window;
		e.state && e.replaceState(F({}, e.state, { scroll: Li() }), "");
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function wa(e, t, n, r = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: null
	};
}
function Ta(e) {
	let { history: t, location: n } = window, r = { value: Sa(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : xa() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			process.env.NODE_ENV === "production" ? console.error(e) : L.VUE_ROUTER_R0120({ cause: e }), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, F({}, t.state, wa(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = F({}, i.value, t.state, {
			forward: e,
			scroll: Li()
		});
		process.env.NODE_ENV !== "production" && !t.state && L.VUE_ROUTER_R0121(), a(o.current, o, !0), a(e, F({}, wa(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function Ea(e) {
	e = Ni(e);
	let t = Ta(e), n = Ca(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = F({
		location: "",
		base: e,
		go: r,
		createHref: Fi.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
var Da = {
	type: 0,
	value: ""
}, Oa = /[a-zA-Z0-9_]/;
function ka(e) {
	if (!e) return [[]];
	if (e === "/") return [[Da]];
	if (!oe(e)) throw Error(process.env.NODE_ENV === "production" ? `Invalid path "${e}"` : `Route paths should start with a "/": "${e}" should be "/${e}".`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = 0, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l && (n === 0 ? a.push({
			type: 0,
			value: l
		}) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: 1,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), l = "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) switch (c = e[s++], n) {
		case 0:
			c === "\\" ? (r = n, n = 4) : c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = 1) : f();
			break;
		case 4:
			f(), n = r;
			break;
		case 1:
			c === "(" ? n = 2 : Oa.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case 2:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
			break;
		case 3:
			d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var Aa = "[^/]+?", ja = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, Ma = /[.+*?^${}()[\]/\\]/g;
function Na(e, t) {
	let n = F({}, ja, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(Ma, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || Aa;
				if (u !== Aa) {
					s += 10;
					try {
						RegExp(`(${u})`);
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += 20, c && (s += -8), n && (s += -20), u === ".*" && (s += -50);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += .7000000000000001;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let o = new RegExp(i, n.sensitive ? "" : "i");
	function s(e) {
		let t = e.match(o), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function c(t) {
		let n = "", r = !1;
		for (let i of e) {
			(!r || !n.endsWith("/")) && (n += "/"), r = !1;
			for (let e of i) if (e.type === 0) n += e.value;
			else if (e.type === 1) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (I(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = I(c) ? c.join("/") : c;
				if (!l) {
					if (s) i.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0);
					else throw Error(`Missing required param "${a}"`);
				}
				n += l;
			}
		}
		return n || "/";
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	};
}
function Pa(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function Fa(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = Pa(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (Ia(r)) return 1;
		if (Ia(i)) return -1;
	}
	return i.length - r.length;
}
function Ia(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var La = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function Ra(e, t, n) {
	let r = Na(ka(e.path), n);
	if (process.env.NODE_ENV !== "production") {
		let t = /* @__PURE__ */ new Set();
		for (let n of r.keys) t.has(n.name) && L.VUE_ROUTER_R0090({
			name: n.name,
			path: e.path
		}), t.add(n.name);
	}
	let i = F(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function za(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = de(La, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = Va(e);
		process.env.NODE_ENV !== "production" && qa(s, n), s.aliasOf = r && r.record;
		let l = de(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(Va(F({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && !oe(u)) {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (process.env.NODE_ENV !== "production" && t.path === "*") throw Error("Catch all routes (\"*\") must now be defined using a param with a custom regexp.\nSee more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.");
			if (d = Ra(t, n, l), process.env.NODE_ENV !== "production" && n && oe(u) && Ya(d, n), r ? (r.alias.push(d), process.env.NODE_ENV !== "production" && Ka(r, d)) : (f = f || d, f !== d && f.alias.push(d), i && e.name && !Ua(d) && (process.env.NODE_ENV !== "production" && Ja(e, n), o(e.name))), Qa(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r = r || d;
		}
		return f ? () => {
			o(f);
		} : ue;
	}
	function o(e) {
		if (Wi(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
		}
	}
	function s() {
		return n;
	}
	function c(e) {
		let t = Xa(e, n);
		n.splice(t, 0, e), e.record.name && !Ua(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw me(1, { location: e });
			if (process.env.NODE_ENV !== "production") {
				let n = Object.keys(e.params || {}).filter((e) => !i.keys.find((t) => t.name === e));
				if (n.length) {
					let e = !i.keys.length && n.some((e) => e in t.params);
					L.VUE_ROUTER_R0100({
						params: n.join("\", \""),
						inherited: e ? " If you are using a catch-all route with a named redirect, pass an empty `params` object: `redirect: { name: '...', params: {} }`." : ""
					});
				}
			}
			s = i.record.name, a = F(Ba(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Ba(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, process.env.NODE_ENV !== "production" && !oe(o) && L.VUE_ROUTER_R0101({ path: o }), i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw me(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = F({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: Wa(c)
		};
	}
	e.forEach((e) => a(e));
	function u() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: u,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function Ba(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function Va(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Ha(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Ha(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Ua(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Wa(e) {
	return e.reduce((e, t) => F(e, t.meta), {});
}
function Ga(e, t) {
	return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Ka(e, t) {
	for (let n of e.keys) if (!n.optional && !t.keys.find(Ga.bind(null, n))) {
		L.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
	for (let n of t.keys) if (!n.optional && !e.keys.find(Ga.bind(null, n))) {
		L.VUE_ROUTER_R0102({
			alias: t.record.path,
			original: e.record.path,
			name: n.name
		});
		return;
	}
}
function qa(e, t) {
	t && t.record.name && !e.name && !e.path && e.children.length === 0 && L.VUE_ROUTER_R0103({ name: String(t.record.name) });
}
function Ja(e, t) {
	for (let n = t; n; n = n.parent) if (n.record.name === e.name) throw Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function Ya(e, t) {
	for (let n of t.keys) if (!e.keys.find(Ga.bind(null, n))) {
		L.VUE_ROUTER_R0104({
			path: e.record.path,
			name: n.name,
			parent: t.record.path
		});
		return;
	}
}
function Xa(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		Fa(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = Za(e);
	return i && (r = t.lastIndexOf(i, r - 1), process.env.NODE_ENV !== "production" && r < 0 && L.VUE_ROUTER_R0105({
		ancestor: i.record.path,
		record: e.record.path
	})), r;
}
function Za(e) {
	let t = e;
	for (; t = t.parent;) if (Qa(t) && Fa(e, t) === 0) return t;
}
function Qa({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function $a(t) {
	let n = i(be), r = i(xe), a = !1, o = null, s = M(() => {
		let e = m(t.to);
		return process.env.NODE_ENV !== "production" && (!a || e !== o) && (Ui(e) || L.VUE_ROUTER_R0050({ to: e }), o = e, a = !0), n.resolve(e);
	}), c = M(() => {
		let { matched: e } = s.value, { length: t } = e, n = e[t - 1], i = r.matched;
		if (!n || !i.length) return -1;
		let a = i.findIndex(Oi.bind(null, n));
		if (a > -1) return a;
		let o = io(e[t - 2]);
		return t > 1 && io(n) === o && i[i.length - 1].path !== o ? i.findIndex(Oi.bind(null, e[t - 2])) : a;
	}), l = M(() => c.value > -1 && ro(r.params, s.value.params)), u = M(() => c.value > -1 && c.value === r.matched.length - 1 && ki(r.params, s.value.params));
	function d(e = {}) {
		if (no(e)) {
			let e = n[m(t.replace) ? "replace" : "push"](m(t.to)).catch(ue);
			return t.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => e), e;
		}
		return Promise.resolve();
	}
	if (process.env.NODE_ENV !== "production" && ei) {
		let n = S();
		if (n) {
			let r = {
				route: s.value,
				isActive: l.value,
				isExactActive: u.value,
				error: null
			};
			n.__vrl_devtools = n.__vrl_devtools || [], n.__vrl_devtools.push(r), e(() => {
				r.route = s.value, r.isActive = l.value, r.isExactActive = u.value, r.error = Ui(m(t.to)) ? null : "Invalid \"to\" value";
			}, { flush: "post" });
		}
	}
	return {
		route: s,
		href: M(() => s.value.href),
		isActive: l,
		isExactActive: u,
		navigate: d
	};
}
function eo(e) {
	return e.length === 1 ? e[0] : e;
}
var to = /* @__PURE__ */ a({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: $a,
	setup(e, { slots: t }) {
		let n = A($a(e)), { options: r } = i(be), a = M(() => ({
			[ao(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[ao(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && eo(t.default(n));
			return e.custom ? r : x("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: a.value
			}, r);
		};
	}
});
function no(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function ro(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!I(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function io(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var ao = (e, t, n) => e == null ? t == null ? n : t : e, oo = /*#__PURE__*/ a({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: n }) {
		process.env.NODE_ENV !== "production" && lo();
		let r = i(Se), a = M(() => e.route || r.value), c = i(ye, 0), l = M(() => {
			let e = m(c), { matched: t } = a.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), u = M(() => a.value.matched[l.value]);
		s(ye, M(() => l.value + 1)), s(ve, u), s(Se, a);
		let d = _();
		return o(() => [
			d.value,
			u.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Oi(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = a.value, i = e.name, o = u.value, s = o && o.components[i];
			if (!s) return so(n.default, {
				Component: s,
				route: r
			});
			let c = o.props[i], f = c ? c === !0 ? r.params : typeof c == "function" ? c(r) : c : null, p = x(s, F({}, f, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (o.instances[i] = null);
				},
				ref: d
			}));
			if (process.env.NODE_ENV !== "production" && ei && p.ref) {
				let e = {
					depth: l.value,
					name: o.name,
					path: o.path,
					meta: o.meta
				};
				(I(p.ref) ? p.ref.map((e) => e.i) : [p.ref.i]).forEach((t) => {
					t && (t.__vrv_devtools = e);
				});
			}
			return so(n.default, {
				Component: p,
				route: r
			}) || p;
		};
	}
});
function so(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var co = oo;
function lo() {
	let e = S(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
	if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
		let e = t === "KeepAlive" ? "keep-alive" : "transition";
		L.VUE_ROUTER_R0060({ comp: e });
	}
}
function uo(e) {
	let t = za(e.routes, e), r = e.parseQuery || Gi, i = e.stringifyQuery || Ki, a = e.history;
	if (process.env.NODE_ENV !== "production" && !a) throw Error("Provide the \"history\" option when calling \"createRouter()\": https://router.vuejs.org/api/interfaces/RouterOptions.html#history");
	let o = Ji(), s = Ji(), c = Ji(), l = y(K), u = y(0), d = K;
	ei && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let f = le.bind(null, (e) => "" + e), p = le.bind(null, bi), h = le.bind(null, xi);
	function g(e, n) {
		let r, i;
		Wi(e) ? (r = t.getRecordMatcher(e), process.env.NODE_ENV !== "production" && !r && L.VUE_ROUTER_R0001({ name: String(e) }), i = n) : i = e;
		let a = t.addRoute(i, r);
		return u.value++, () => {
			a(), u.value++;
		};
	}
	function _(e) {
		let n = t.getRecordMatcher(e);
		n ? (t.removeRoute(n), u.value++) : process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0002({ name: String(e) });
	}
	function v() {
		t.clearRoutes(), u.value++;
	}
	function b() {
		return t.getRoutes().map((e) => e.record);
	}
	function x(e) {
		return !!t.getRecordMatcher(e);
	}
	function S(e, n) {
		if (u.value, typeof e == "string") {
			n = n || (e.startsWith("/") ? K : l.value);
			let i = wi(r, e, n.path), o = t.resolve({ path: i.path }, n), s = a.createHref(i.fullPath);
			return process.env.NODE_ENV !== "production" && (s.startsWith("//") ? L.VUE_ROUTER_R0003({
				location: e,
				href: s
			}) : o.matched.length || L.VUE_ROUTER_R0004({ path: e })), F(i, o, {
				params: h(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		if (process.env.NODE_ENV !== "production" && !Ui(e)) return L.VUE_ROUTER_R0005({ rawLocation: e }), S({});
		n = F({}, n || (e.path != null && e.path.startsWith("/") && !("name" in e && e.name) ? K : l.value));
		let o;
		if (e.path != null) process.env.NODE_ENV !== "production" && "params" in e && !("name" in e) && Object.keys(e.params).length && L.VUE_ROUTER_R0006({ path: e.path }), o = F({}, e, { path: wi(r, e.path, n.path).path });
		else {
			let t = F({}, e.params);
			for (let e in t) t[e] == null && delete t[e];
			o = F({}, e, { params: p(t) }), n.params = p(n.params);
		}
		let s = t.resolve(o, n), c = e.hash || "";
		process.env.NODE_ENV !== "production" && c && !c.startsWith("#") && L.VUE_ROUTER_R0007({ hash: c }), s.params = f(h(s.params));
		let d = Ti(i, F({}, e, {
			hash: gi(c),
			path: s.path
		})), m = a.createHref(d);
		return process.env.NODE_ENV !== "production" && (m.startsWith("//") ? L.VUE_ROUTER_R0003({
			location: e,
			href: m
		}) : s.matched.length || L.VUE_ROUTER_R0004({ path: e.path == null ? e : e.path })), F({
			fullPath: d,
			hash: c,
			query: i === Ki ? qi(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function C(e) {
		return typeof e == "string" ? wi(r, e, l.value.path) : F({}, e);
	}
	function w(e, t) {
		if (d !== e) return me(8, {
			from: t,
			to: e
		});
	}
	function T(e) {
		return k(e);
	}
	function D(e) {
		return T(F(C(e), { replace: !0 }));
	}
	function O(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			if (typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = C(i) : { path: i }, i.params = {}), process.env.NODE_ENV !== "production" && i.path == null && !("name" in i)) throw L.VUE_ROUTER_R0008({
				target: JSON.stringify(i, null, 2),
				to: e.fullPath
			}), Error("Invalid redirect");
			return F({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function k(e, t) {
		let n = d = S(e), r = l.value, a = e.state, o = e.force, s = e.replace === !0, c = O(n, r);
		if (c) return k(F(C(c), {
			state: typeof c == "object" ? F({}, a, c.state) : a,
			force: o,
			replace: s
		}), t || n);
		let u = n;
		u.redirectedFrom = t;
		let f;
		return !o && Di(i, r, n) && (f = me(16, {
			to: u,
			from: r
		}), ce(r, r, !0, !1)), (f ? Promise.resolve(f) : M(u, r)).catch((e) => he(e) ? he(e, 2) ? e : se(e) : ae(e, u, r)).then((e) => {
			if (e) {
				if (he(e, 2)) return process.env.NODE_ENV !== "production" && Di(i, S(e.to), u) && t && (t._count = t._count ? t._count + 1 : 1) > 30 ? (L.VUE_ROUTER_R0009({
					from: r.fullPath,
					to: u.fullPath
				}), Promise.reject(/* @__PURE__ */ Error("Infinite redirect in navigation guard"))) : k(F({ replace: s }, C(e.to), {
					state: typeof e.to == "object" ? F({}, a, e.to.state) : a,
					force: o
				}), t || u);
			} else e = P(u, r, !0, s, a);
			return N(u, r, e), e;
		});
	}
	function A(e, t) {
		let n = w(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function j(e) {
		let t = pe.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function M(e, t) {
		let n, [r, i, a] = $i(e, t);
		n = Qi(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(Yi(r, e, t));
		});
		let c = A.bind(null, e, t);
		return n.push(c), _e(n).then(() => {
			n = [];
			for (let r of o.list()) n.push(Yi(r, e, t));
			return n.push(c), _e(n);
		}).then(() => {
			n = Qi(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(Yi(r, e, t));
			});
			return n.push(c), _e(n);
		}).then(() => {
			n = [];
			for (let r of a) if (r.beforeEnter) {
				if (I(r.beforeEnter)) for (let i of r.beforeEnter) n.push(Yi(i, e, t));
				else n.push(Yi(r.beforeEnter, e, t));
			}
			return n.push(c), _e(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = Qi(a, "beforeRouteEnter", e, t, j), n.push(c), _e(n))).then(() => {
			n = [];
			for (let r of s.list()) n.push(Yi(r, e, t));
			return n.push(c), _e(n);
		}).catch((e) => he(e, 8) ? e : Promise.reject(e));
	}
	function N(e, t, n) {
		c.list().forEach((r) => j(() => r(e, t, n)));
	}
	function P(e, t, n, r, i) {
		let o = w(e, t);
		if (o) return o;
		let s = t === K, c = ei ? history.state : {};
		n && (r || s ? a.replace(e.fullPath, F({ scroll: s && c && c.scroll }, i)) : a.push(e.fullPath, i)), l.value = e, ce(e, t, n, s), se();
	}
	let ee;
	function te() {
		ee || (ee = a.listen((e, t, n) => {
			if (!ge.listening) return;
			let r = S(e), i = O(r, ge.currentRoute.value);
			if (i) {
				k(F(i, {
					replace: !0,
					force: !0
				}), r).catch(ue);
				return;
			}
			d = r;
			let o = l.value;
			ei && n.delta && Vi(zi(o.fullPath, n.delta)), M(r, o).catch((e) => he(e, 12) ? e : he(e, 2) ? (k(F(C(e.to), { force: !0 }), r).then((e) => {
				he(e, 20) && !n.delta && n.type === "pop" && a.go(-1, !1);
			}).catch(ue), Promise.reject()) : (n.delta && a.go(-n.delta, !1), ae(e, r, o))).then((e) => {
				e = e || P(r, o, !1), e && (n.delta && !he(e, 8) ? a.go(-n.delta, !1) : n.type === "pop" && he(e, 20) && a.go(-1, !1)), N(r, o, e);
			}).catch(ue);
		}));
	}
	let ne = Ji(), re = Ji(), ie;
	function ae(e, t, n) {
		se(e);
		let r = re.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : (process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0010(), console.error(e)), Promise.reject(e);
	}
	function oe() {
		return ie && l.value !== K ? Promise.resolve() : new Promise((e, t) => {
			ne.add([e, t]);
		});
	}
	function se(e) {
		return ie || (ie = !e, te(), ne.list().forEach(([t, n]) => e ? n(e) : t()), ne.reset()), e;
	}
	function ce(t, r, i, a) {
		let { scrollBehavior: o } = e;
		if (!ei || !o) return Promise.resolve();
		let s = !i && Hi(zi(t.fullPath, 0)) || (a || !i) && history.state && history.state.scroll || null;
		return n().then(() => o(t, r, s)).then((e) => t === l.value && e && Ri(e)).catch((e) => t === l.value && ae(e, t, r));
	}
	let de = (e) => a.go(e), fe, pe = /* @__PURE__ */ new Set(), ge = {
		currentRoute: l,
		listening: !0,
		addRoute: g,
		removeRoute: _,
		clearRoutes: v,
		hasRoute: x,
		getRoutes: b,
		resolve: S,
		options: e,
		push: T,
		replace: D,
		go: de,
		back: () => de(-1),
		forward: () => de(1),
		beforeEach: o.add,
		beforeResolve: s.add,
		afterEach: c.add,
		onError: re.add,
		isReady: oe,
		install(e) {
			e.component("RouterLink", to), e.component("RouterView", co), e.config.globalProperties.$router = ge, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => m(l)
			}), ei && !fe && l.value === K && (fe = !0, T(a.location).catch((e) => {
				process.env.NODE_ENV !== "production" && L.VUE_ROUTER_R0011({ cause: e });
			}));
			let n = {};
			for (let e in K) Object.defineProperty(n, e, {
				get: () => l.value[e],
				enumerable: !0
			});
			e.provide(be, ge), e.provide(xe, E(n)), e.provide(Se, l);
			let r = e.unmount;
			pe.add(e), e.unmount = function() {
				pe.delete(e), pe.size < 1 && (d = K, ee && ee(), ee = null, l.value = K, fe = !1, ie = !1), r();
			}, process.env.NODE_ENV !== "production" && ei && ra(e, ge, t);
		}
	};
	function _e(e) {
		return e.reduce((e, t) => e.then(() => j(t)), Promise.resolve());
	}
	return ge;
}
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
var fo = ["eventFilter"], po = ["eventFilter", "initialState"], mo = ["debounce", "maxWait"], ho = ["eventFilter"];
function go(e, t) {
	return p() ? (C(e, t), !0) : !1;
}
var _o = /* @__PURE__ */ new WeakMap(), vo = (...e) => {
	var t;
	let n = e[0], a = (t = S()) == null ? void 0 : t.proxy, o = a == null ? p() : a;
	if (o == null && !r()) throw Error("injectLocal must be called in setup");
	return o && _o.has(o) && n in _o.get(o) ? _o.get(o)[n] : i(...e);
};
function yo(e, t) {
	var n;
	let r = (n = S()) == null ? void 0 : n.proxy, i = r == null ? p() : r;
	if (i == null) throw Error("provideLocal must be called in setup");
	_o.has(i) || _o.set(i, Object.create(null));
	let a = _o.get(i);
	return a[e] = t, s(e, t);
}
var q = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var bo = (e) => e !== void 0, xo = (e) => e != null, So = Object.prototype.toString, Co = (e) => So.call(e) === "[object Object]", wo = () => +Date.now(), J = () => {}, To = /* #__PURE__ */ Eo();
function Eo() {
	var e, t, n;
	return q && !!((e = window) != null && (e = e.navigator) != null && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) == null || (t = t.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((n = window) == null ? void 0 : n.navigator.userAgent));
}
function Do(...e) {
	if (e.length !== 1) return d(...e);
	let t = e[0];
	return typeof t == "function" ? g(D(() => ({
		get: t,
		set: J
	}))) : _(t);
}
function Oo(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return "cancel" in e && Object.assign(n, {
		cancel: e.cancel,
		flush: e.flush,
		isPending: e.isPending
	}), n;
}
var ko = (e) => e();
function Ao(e, t = {}) {
	let n, r, i = J, a = J, o = y(!1), s = (e) => {
		clearTimeout(e), i(), i = J;
	}, c;
	return Object.assign((l) => {
		let u = N(e), d = N(t.maxWait);
		return n && s(n), u <= 0 || d !== void 0 && d <= 0 ? (r && (s(r), r = void 0), o.value = !1, Promise.resolve(l())) : (o.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, a = e, c = l, d && !r && (r = setTimeout(() => {
				n && s(n), r = void 0, o.value = !1, e(c());
			}, d)), n = setTimeout(() => {
				r && s(r), r = void 0, o.value = !1, e(l());
			}, u);
		}));
	}, {
		cancel: () => {
			n && (s(n), n = void 0), r && (s(r), r = void 0), o.value = !1, a = J;
		},
		flush: () => {
			if (o.value) {
				n && (clearTimeout(n), n = void 0), r && (clearTimeout(r), r = void 0), o.value = !1;
				let e = a;
				i = J, a = J, e(c());
			}
		},
		isPending: w(o)
	});
}
function jo(e = ko, t = {}) {
	let { initialState: n = "active" } = t, r = Do(n === "active");
	function i() {
		r.value = !1;
	}
	function a() {
		r.value = !0;
	}
	return {
		isActive: w(r),
		pause: i,
		resume: a,
		eventFilter: (...t) => {
			r.value && e(...t);
		}
	};
}
function Mo(e, t) {
	var n;
	if (typeof e == "number") return e + t;
	let r = ((n = e.match(/^-?\d+\.?\d*/)) == null ? void 0 : n[0]) || "", i = e.slice(r.length), a = Number.parseFloat(r) + t;
	return Number.isNaN(a) ? e : a + i;
}
function No(e) {
	return e.endsWith("rem") ? Number.parseFloat(e) * 16 : Number.parseFloat(e);
}
function Po(e, t, n = !1) {
	return Object.fromEntries(Object.entries(e).filter(([e, r]) => (!n || r !== void 0) && !t.includes(e)));
}
function Fo(e) {
	return Array.isArray(e) ? e : [e];
}
function Io(e) {
	return e || S();
}
function Lo(e) {
	if (!q) return e;
	let t = 0, n, r, i = () => {
		--t, r && t <= 0 && (r.stop(), n = void 0, r = void 0);
	};
	return ((...a) => (t += 1, r || (r = b(!0), n = r.run(() => e(...a))), go(i), n));
}
function Ro(e, t, n = {}) {
	let { eventFilter: r = ko } = n, i = f(n, fo);
	return o(e, Oo(r, t), i);
}
function zo(e, t, n = {}) {
	let { eventFilter: r, initialState: i = "active" } = n, a = f(n, po), { eventFilter: o, pause: s, resume: c, isActive: l } = jo(r, { initialState: i });
	return {
		stop: Ro(e, t, T(T({}, a), {}, { eventFilter: o })),
		pause: s,
		resume: c,
		isActive: l
	};
}
function Bo(e, t = {}) {
	if (!k(e)) return j(e);
	let n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
	for (let r in e.value) n[r] = D(() => ({
		get() {
			return e.value[r];
		},
		set(n) {
			var i;
			if ((i = N(t.replaceRef)) == null || i) {
				if (Array.isArray(e.value)) {
					let t = [...e.value];
					t[r] = n, e.value = t;
				} else {
					let t = T(T({}, e.value), {}, { [r]: n });
					Object.setPrototypeOf(t, Object.getPrototypeOf(e.value)), e.value = t;
				}
			} else e.value[r] = n;
		}
	}));
	return n;
}
function Vo(e, r = !0, i) {
	Io(i) ? t(e, i) : r ? e() : n(e);
}
function Ho(e, t = 1e3, n = {}) {
	let { immediate: r = !0, immediateCallback: i = !1 } = n, a = null, s = y(!1);
	function c() {
		a && (clearInterval(a), a = null);
	}
	function l() {
		s.value = !1, c();
	}
	function u() {
		let n = N(t);
		n <= 0 || (s.value = !0, i && e(), c(), s.value && (a = setInterval(e, n)));
	}
	return r && q && u(), (k(t) || typeof t == "function") && go(o(t, () => {
		s.value && q && u();
	})), go(l), {
		isActive: w(s),
		pause: l,
		resume: u
	};
}
function Uo(e = 1e3, t = {}) {
	let { controls: n = !1, immediate: r = !0, callback: i } = t, a = y(0), o = () => a.value += 1, s = () => {
		a.value = 0;
	}, c = Ho(i ? () => {
		o(), i(a.value);
	} : o, e, { immediate: r });
	return n ? T({
		counter: w(a),
		reset: s
	}, c) : w(a);
}
function Wo(e = !1, t = {}) {
	let { truthyValue: n = !0, falsyValue: r = !1 } = t, i = k(e), a = y(e);
	function o(e) {
		if (arguments.length) return a.value = e, a.value;
		{
			let e = N(n);
			return a.value = a.value === e ? N(r) : e, a.value;
		}
	}
	return i ? o : [a, o];
}
function Go(e, t, n = {}) {
	let { debounce: r = 0, maxWait: i = void 0 } = n, a = f(n, mo);
	return Ro(e, t, T(T({}, a), {}, { eventFilter: Ao(r, { maxWait: i }) }));
}
var Ko = Go;
function qo(e, t, n = {}) {
	let { eventFilter: r = ko } = n, i = f(n, ho), a = Oo(r, t), s, c, l;
	if (i.flush === "sync") {
		let t = !1;
		c = () => {}, s = (e) => {
			t = !0, e(), t = !1;
		}, l = o(e, (...e) => {
			t || a(...e);
		}, i);
	} else {
		let t = [], n = 0, r = 0;
		c = () => {
			n = r;
		}, t.push(o(e, () => {
			r++;
		}, T(T({}, i), {}, { flush: "sync" }))), s = (e) => {
			let t = r;
			e(), n += r - t;
		}, t.push(o(e, (...e) => {
			let t = n > 0 && n === r;
			n = 0, r = 0, !t && a(...e);
		}, i)), l = () => {
			t.forEach((e) => e());
		};
	}
	return {
		stop: l,
		ignoreUpdates: s,
		ignorePrevAsyncUpdates: c
	};
}
var Jo = qo;
function Yo(e, t, n) {
	return o(e, t, T(T({}, n), {}, { immediate: !0 }));
}
function Xo(e, t, r) {
	let i = o(e, (e, a, o) => {
		e && (r != null && r.once && n(() => i()), t(e, a, o));
	}, T(T({}, r), {}, { once: !1 }));
	return i;
}
//#endregion
//#region node_modules/@vueuse/core/dist/index.js
var Zo = ["window"], Qo = ["window"], Y = q ? window : void 0, $o = q ? window.document : void 0, es = q ? window.navigator : void 0;
q && window.location;
function X(e) {
	var t;
	let n = N(e);
	return (t = n == null ? void 0 : n.$el) == null ? n : t;
}
function Z(...e) {
	let t = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), n = M(() => {
		let t = Fo(N(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	});
	return Yo(() => {
		var t, r;
		return [
			(t = (r = n.value) == null ? void 0 : r.map((e) => X(e))) == null ? [Y].filter((e) => e != null) : t,
			Fo(N(n.value ? e[1] : e[0])),
			Fo(m(n.value ? e[2] : e[1])),
			N(n.value ? e[3] : e[2])
		];
	}, ([e, n, r, i], a, o) => {
		if (!(e != null && e.length) || !(n != null && n.length) || !(r != null && r.length)) return;
		let s = Co(i) ? T({}, i) : i, c = e.flatMap((e) => n.flatMap((n) => r.map((r) => t(e, n, r, s))));
		o(() => {
			c.forEach((e) => e());
		});
	}, { flush: "post" });
}
var ts = !1;
function ns(e, t, n = {}) {
	let { window: r = Y, ignore: i = [], capture: a = !0, detectIframe: o = !1, controls: s = !1 } = n;
	if (!r) return s ? {
		stop: J,
		cancel: J,
		trigger: J
	} : J;
	if (To && !ts) {
		ts = !0;
		let e = { passive: !0 };
		Array.from(r.document.body.children).forEach((t) => t.addEventListener("click", J, e)), r.document.documentElement.addEventListener("click", J, e);
	}
	let c = !0, l = (e) => N(i).some((t) => {
		if (typeof t == "string") return Array.from(r.document.querySelectorAll(t)).some((t) => t === e.target || e.composedPath().includes(t));
		{
			let n = X(t);
			return n && (e.target === n || e.composedPath().includes(n));
		}
	});
	function u(e) {
		let t = N(e);
		return t && t.$.subTree.shapeFlag === 16;
	}
	function d(e, t) {
		let n = N(e), r = n.$.subTree && n.$.subTree.children;
		return r == null || !Array.isArray(r) ? !1 : r.some((e) => e.el === t.target || t.composedPath().includes(e.el));
	}
	let f = (n) => {
		let r = X(e);
		if (n.target != null && !(!(r instanceof Element) && u(e) && d(e, n)) && !(!r || r === n.target || n.composedPath().includes(r))) {
			if ("detail" in n && n.detail === 0 && (c = !l(n)), !c) {
				c = !0;
				return;
			}
			t(n);
		}
	}, p = !1, m = [
		Z(r, "click", (e) => {
			p || (p = !0, setTimeout(() => {
				p = !1;
			}, 0), f(e));
		}, {
			passive: !0,
			capture: a
		}),
		Z(r, "pointerdown", (t) => {
			let n = X(e);
			c = !l(t) && !!(n && !t.composedPath().includes(n));
		}, { passive: !0 }),
		o && Z(r, "blur", (n) => {
			setTimeout(() => {
				let i = X(e), a = r.document.activeElement;
				for (; a != null && a.shadowRoot;) a = a.shadowRoot.activeElement;
				(a == null ? void 0 : a.tagName) === "IFRAME" && !(i != null && i.contains(r.document.activeElement)) && t(n);
			}, 0);
		}, { passive: !0 })
	].filter(Boolean), h = () => m.forEach((e) => e());
	return s ? {
		stop: h,
		cancel: () => {
			c = !1;
		},
		trigger: (e) => {
			c = !0, f(e), c = !1;
		}
	} : h;
}
function rs() {
	let e = y(!1), n = S();
	return n && t(() => {
		e.value = !0;
	}, n), e;
}
/* @__NO_SIDE_EFFECTS__ */
function is(e) {
	let t = rs();
	return M(() => (t.value, !!e()));
}
function as(e, t, n = {}) {
	let { window: r = Y } = n, i = f(n, Zo), a, s = /* @__PURE__ */ is(() => r && "MutationObserver" in r), c = () => {
		a && (a.disconnect(), a = void 0);
	}, l = o(M(() => {
		let t = Fo(N(e)).map(X).filter(xo);
		return new Set(t);
	}), (e) => {
		c(), s.value && e.size && (a = new MutationObserver(t), e.forEach((e) => a.observe(e, i)));
	}, {
		immediate: !0,
		flush: "post"
	}), u = () => a == null ? void 0 : a.takeRecords(), d = () => {
		l(), c();
	};
	return go(d), {
		isSupported: s,
		stop: d,
		takeRecords: u
	};
}
function os(t, n, r = {}) {
	let { window: i = Y, document: a = i == null ? void 0 : i.document, flush: o = "sync" } = r;
	if (!i || !a) return J;
	let s, c = (e) => {
		s == null || s(), s = e;
	}, l = e(() => {
		let e = X(t);
		if (e) {
			let { stop: t } = as(a, (t) => {
				t.map((e) => [...e.removedNodes]).flat().some((t) => t === e || t.contains(e)) && n(t);
			}, {
				window: i,
				childList: !0,
				subtree: !0
			});
			c(t);
		}
	}, { flush: o }), u = () => {
		l(), c();
	};
	return go(u), u;
}
function ss(e) {
	return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function cs(...e) {
	let t, n, r = {};
	e.length === 3 ? (t = e[0], n = e[1], r = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], r = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
	let { target: i = Y, eventName: a = "keydown", passive: o = !1, dedupe: s = !1 } = r, c = ss(t);
	return Z(i, a, (e) => {
		e.repeat && N(s) || c(e) && n(e);
	}, o);
}
function ls(e = {}) {
	var t;
	let { window: n = Y, deep: r = !0, triggerOnRemoval: i = !1 } = e, a = (t = e.document) == null ? n == null ? void 0 : n.document : t, o = () => {
		let e = a == null ? void 0 : a.activeElement;
		if (r) for (var t; e != null && e.shadowRoot;) e = e == null || (t = e.shadowRoot) == null ? void 0 : t.activeElement;
		return e;
	}, s = y(), c = () => {
		s.value = o();
	};
	if (n) {
		let e = {
			capture: !0,
			passive: !0
		};
		Z(n, "blur", (e) => {
			e.relatedTarget === null && c();
		}, e), Z(n, "focus", c, e);
	}
	return i && os(s, c, { document: a }), c(), s;
}
var us = Symbol("vueuse-ssr-width");
/* @__NO_SIDE_EFFECTS__ */
function ds() {
	let e = r() ? vo(us, null) : null;
	return typeof e == "number" ? e : void 0;
}
function fs(t, n = {}) {
	let { window: r = Y, ssrWidth: i = /* @__PURE__ */ ds() } = n, a = /* @__PURE__ */ is(() => r && "matchMedia" in r && typeof r.matchMedia == "function"), o = y(typeof i == "number"), s = y(), c = y(!1);
	return e(() => {
		if (o.value) {
			o.value = !a.value;
			let e = N(t).split(",");
			c.value = e.some((e) => {
				let t = e.includes("not all"), n = e.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), r = e.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/), a = !!(n || r);
				return n && a && (a = i >= No(n[1])), r && a && (a = i <= No(r[1])), t ? !a : a;
			});
			return;
		}
		a.value && (s.value = r.matchMedia(N(t)), c.value = s.value.matches);
	}), Z(s, "change", (e) => {
		c.value = e.matches;
	}, { passive: !0 }), M(() => c.value);
}
var ps = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280,
	"2xl": 1536
};
function ms(e, t = {}) {
	function n(t, n) {
		let r = N(e[N(t)]);
		return n != null && (r = Mo(r, n)), typeof r == "number" && (r = `${r}px`), r;
	}
	let { window: r = Y, strategy: i = "min-width", ssrWidth: a = /* @__PURE__ */ ds() } = t, o = typeof a == "number", s = o ? y(!1) : { value: !0 };
	o && Vo(() => s.value = !!r);
	function c(e, t) {
		return !s.value && o ? e === "min" ? a >= No(t) : a <= No(t) : r ? r.matchMedia(`(${e}-width: ${t})`).matches : !1;
	}
	let l = (e) => fs(() => `(min-width: ${n(e)})`, t), u = (e) => fs(() => `(max-width: ${n(e)})`, t), d = Object.keys(e).reduce((e, t) => (Object.defineProperty(e, t, {
		get: () => i === "min-width" ? l(t) : u(t),
		enumerable: !0,
		configurable: !0
	}), e), {});
	function f() {
		let t = Object.keys(e).map((e) => [
			e,
			d[e],
			No(n(e))
		]).sort((e, t) => e[2] - t[2]);
		return M(() => t.filter(([, e]) => e.value).map(([e]) => e));
	}
	return Object.assign(d, {
		greaterOrEqual: l,
		smallerOrEqual: u,
		greater(e) {
			return fs(() => `(min-width: ${n(e, .1)})`, t);
		},
		smaller(e) {
			return fs(() => `(max-width: ${n(e, -.1)})`, t);
		},
		between(e, r) {
			return fs(() => `(min-width: ${n(e)}) and (max-width: ${n(r, -.1)})`, t);
		},
		isGreater(e) {
			return c("min", n(e, .1));
		},
		isGreaterOrEqual(e) {
			return c("min", n(e));
		},
		isSmaller(e) {
			return c("max", n(e, -.1));
		},
		isSmallerOrEqual(e) {
			return c("max", n(e));
		},
		isInBetween(e, t) {
			return c("min", n(e)) && c("max", n(t, -.1));
		},
		current: f,
		active() {
			let e = f();
			return M(() => e.value.length === 0 ? "" : e.value.at(i === "min-width" ? -1 : 0));
		}
	});
}
function hs(e) {
	return JSON.parse(JSON.stringify(e));
}
var gs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, _s = "__vueuse_ssr_handlers__", vs = /* #__PURE__ */ ys();
function ys() {
	return _s in gs || (gs[_s] = gs[_s] || {}), gs[_s];
}
function bs(e, t) {
	return vs[e] || t;
}
function xs(e) {
	return fs("(prefers-color-scheme: dark)", e);
}
function Ss(e) {
	return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
var Cs = {
	boolean: {
		read: (e) => e === "true",
		write: (e) => String(e)
	},
	object: {
		read: (e) => JSON.parse(e),
		write: (e) => JSON.stringify(e)
	},
	number: {
		read: (e) => Number.parseFloat(e),
		write: (e) => String(e)
	},
	any: {
		read: (e) => e,
		write: (e) => String(e)
	},
	string: {
		read: (e) => e,
		write: (e) => String(e)
	},
	map: {
		read: (e) => new Map(JSON.parse(e)),
		write: (e) => JSON.stringify(Array.from(e.entries()))
	},
	set: {
		read: (e) => new Set(JSON.parse(e)),
		write: (e) => JSON.stringify(Array.from(e))
	},
	date: {
		read: (e) => new Date(e),
		write: (e) => e.toISOString()
	}
}, ws = "vueuse-storage";
function Ts(e, t, r, i = {}) {
	var a;
	let { flush: s = "pre", deep: c = !0, listenToStorageChanges: l = !0, writeDefaults: u = !0, mergeDefaults: d = !1, shallow: f, window: p = Y, eventFilter: m, onError: h = (e) => {
		console.error(e);
	}, initOnMounted: g } = i, v = (f ? y : _)(typeof t == "function" ? t() : t), b = M(() => N(e));
	if (!r) try {
		r = bs("getDefaultStorage", () => Y == null ? void 0 : Y.localStorage)();
	} catch (e) {
		h(e);
	}
	if (!r) return v;
	let x = N(t), S = Ss(x), C = (a = i.serializer) == null ? Cs[S] : a, { pause: w, resume: E } = zo(v, (e) => k(e), {
		flush: s,
		deep: c,
		eventFilter: m
	});
	o(b, () => j(), { flush: s });
	let D = !1;
	p && l && (r instanceof Storage ? Z(p, "storage", (e) => {
		g && !D || j(e);
	}, { passive: !0 }) : Z(p, ws, (e) => {
		g && !D || P(e);
	})), g ? Vo(() => {
		D = !0, j();
	}) : j();
	function O(e, t) {
		if (p) {
			let n = {
				key: b.value,
				oldValue: e,
				newValue: t,
				storageArea: r
			};
			p.dispatchEvent(r instanceof Storage ? new StorageEvent("storage", n) : new CustomEvent(ws, { detail: n }));
		}
	}
	function k(e) {
		try {
			let t = r.getItem(b.value);
			if (e == null) O(t, null), r.removeItem(b.value);
			else {
				let n = C.write(e);
				t !== n && (r.setItem(b.value, n), O(t, n));
			}
		} catch (e) {
			h(e);
		}
	}
	function A(e) {
		let t = e ? e.newValue : r.getItem(b.value);
		if (t == null) return u && x != null && r.setItem(b.value, C.write(x)), x;
		if (!e && d) {
			let e = C.read(t);
			return typeof d == "function" ? d(e, x) : S === "object" && !Array.isArray(e) ? T(T({}, x), e) : e;
		}
		return typeof t == "string" ? C.read(t) : t;
	}
	function j(e) {
		if (!(e && e.storageArea !== r)) {
			if (e && e.key == null) {
				v.value = x;
				return;
			}
			if (!(e && e.key !== b.value)) {
				w();
				try {
					let t = C.write(v.value);
					(e === void 0 || (e == null ? void 0 : e.newValue) !== t) && (v.value = A(e));
				} catch (e) {
					h(e);
				} finally {
					e ? n(E) : E();
				}
			}
		}
	}
	function P(e) {
		j(e.detail);
	}
	return v;
}
function Es(e = {}) {
	let { document: t = $o } = e;
	if (!t) return y("visible");
	let n = y(t.visibilityState);
	return Z(t, "visibilitychange", () => {
		n.value = t.visibilityState;
	}, { passive: !0 }), n;
}
var Ds = {
	speed: 2,
	margin: 30,
	direction: "both"
};
function Os(e) {
	e.scrollLeft > e.scrollWidth - e.clientWidth && (e.scrollLeft = Math.max(0, e.scrollWidth - e.clientWidth)), e.scrollTop > e.scrollHeight - e.clientHeight && (e.scrollTop = Math.max(0, e.scrollHeight - e.clientHeight));
}
function ks(e, t = {}) {
	var n, r, i, a;
	let { pointerTypes: s, preventDefault: c, stopPropagation: l, exact: u, onMove: d, onEnd: f, onStart: p, initialValue: m, axis: h = "both", draggingElement: g = Y, containerElement: v, handle: y = e, buttons: b = [0], restrictInView: x, autoScroll: S = !1 } = t, C = _((n = N(m)) == null ? {
		x: 0,
		y: 0
	} : n), w = _(), E = (e) => !s || s.includes(e.pointerType), D = (e) => {
		N(c) && e.preventDefault(), N(l) && e.stopPropagation();
	}, O = N(S), k = typeof O == "object" ? {
		speed: (r = N(O.speed)) == null ? Ds.speed : r,
		margin: (i = N(O.margin)) == null ? Ds.margin : i,
		direction: (a = O.direction) == null ? Ds.direction : a
	} : Ds, A = (e) => typeof e == "number" ? [e, e] : [e.x, e.y], j = (e, t, n) => {
		let { clientWidth: r, clientHeight: i, scrollLeft: a, scrollTop: o, scrollWidth: s, scrollHeight: c } = e, [l, u] = A(k.margin), [d, f] = A(k.speed), p = 0, m = 0;
		(k.direction === "x" || k.direction === "both") && (n.x < l && a > 0 ? p = -d : n.x + t.width > r - l && a < s - r && (p = d)), (k.direction === "y" || k.direction === "both") && (n.y < u && o > 0 ? m = -f : n.y + t.height > i - u && o < c - i && (m = f)), (p || m) && e.scrollBy({
			left: p,
			top: m,
			behavior: "auto"
		});
	}, P = null, ee = () => {
		let t = N(v);
		t && !P && (P = setInterval(() => {
			let n = N(e).getBoundingClientRect(), { x: r, y: i } = C.value, a = {
				x: r - t.scrollLeft,
				y: i - t.scrollTop
			};
			a.x >= 0 && a.y >= 0 && (j(t, n, a), a.x += t.scrollLeft, a.y += t.scrollTop, C.value = a);
		}, 1e3 / 60));
	}, te = () => {
		P && (clearInterval(P), P = null);
	}, ne = (e, t, n, r) => {
		let [i, a] = typeof n == "number" ? [n, n] : [n.x, n.y], { clientWidth: o, clientHeight: s } = t;
		return e.x < i || e.x + r.width > o - i || e.y < a || e.y + r.height > s - a;
	};
	N(S) && o(C, () => {
		if (N(t.disabled) || !w.value) return;
		let n = N(v);
		if (!n) return;
		let r = N(e).getBoundingClientRect(), { x: i, y: a } = C.value, o = {
			x: i - n.scrollLeft,
			y: a - n.scrollTop
		};
		ne(o, n, k.margin, r) ? ee() : te();
	});
	let re = (n) => {
		var r;
		if (!N(b).includes(n.button) || N(t.disabled) || !E(n) || N(u) && n.target !== N(e)) return;
		let i = N(v), a = i == null || (r = i.getBoundingClientRect) == null ? void 0 : r.call(i), o = N(e).getBoundingClientRect(), s = {
			x: n.clientX - (i ? o.left - a.left + (S ? 0 : i.scrollLeft) : o.left),
			y: n.clientY - (i ? o.top - a.top + (S ? 0 : i.scrollTop) : o.top)
		};
		(p == null ? void 0 : p(s, n)) !== !1 && (w.value = s, D(n));
	}, ie = (n) => {
		if (N(t.disabled) || !E(n) || !w.value) return;
		let r = N(v);
		r instanceof HTMLElement && Os(r);
		let i = N(e).getBoundingClientRect(), { x: a, y: o } = C.value;
		if ((h === "x" || h === "both") && (a = n.clientX - w.value.x, r && (a = Math.min(Math.max(0, a), r.scrollWidth - i.width))), (h === "y" || h === "both") && (o = n.clientY - w.value.y, r && (o = Math.min(Math.max(0, o), r.scrollHeight - i.height))), N(S) && r && (P === null && j(r, i, {
			x: a,
			y: o
		}), a += r.scrollLeft, o += r.scrollTop), r && (x || S)) {
			if (h !== "y") {
				let e = a - r.scrollLeft;
				e < 0 ? a = r.scrollLeft : e > r.clientWidth - i.width && (a = r.clientWidth - i.width + r.scrollLeft);
			}
			if (h !== "x") {
				let e = o - r.scrollTop;
				e < 0 ? o = r.scrollTop : e > r.clientHeight - i.height && (o = r.clientHeight - i.height + r.scrollTop);
			}
		}
		C.value = {
			x: a,
			y: o
		}, d == null || d(C.value, n), D(n);
	}, ae = (e) => {
		N(t.disabled) || !E(e) || w.value && (w.value = void 0, S && te(), f == null || f(C.value, e), D(e));
	};
	if (q) {
		let e = () => {
			var e;
			return {
				capture: (e = t.capture) == null || e,
				passive: !N(c)
			};
		};
		Z(y, "pointerdown", re, e), Z(g, "pointermove", ie, e), Z(g, ["pointerup", "pointercancel"], ae, e);
	}
	return T(T({}, Bo(C)), {}, {
		position: C,
		isDragging: M(() => !!w.value),
		style: M(() => `
      left: ${C.value.x}px;
      top: ${C.value.y}px;
      ${S ? "text-wrap: nowrap;" : ""}
    `)
	});
}
function As(e, t, n = {}) {
	let { window: r = Y } = n, i = f(n, Qo), a, s = /* @__PURE__ */ is(() => r && "ResizeObserver" in r), c = () => {
		a && (a.disconnect(), a = void 0);
	}, l = o(M(() => {
		let t = N(e);
		return Array.isArray(t) ? t.map((e) => X(e)) : [X(t)];
	}), (e) => {
		if (c(), s.value && r) {
			a = new ResizeObserver(t);
			for (let t of e) t && a.observe(t, i);
		}
	}, {
		immediate: !0,
		flush: "post"
	}), u = () => {
		c(), l();
	};
	return go(u), {
		isSupported: s,
		stop: u
	};
}
function js(e, t = {}) {
	let { reset: n = !0, windowResize: r = !0, windowScroll: i = !0, immediate: a = !0, updateTiming: s = "sync" } = t, c = y(0), l = y(0), u = y(0), d = y(0), f = y(0), p = y(0), m = y(0), h = y(0);
	function g() {
		let t = X(e);
		if (!t) {
			n && (c.value = 0, l.value = 0, u.value = 0, d.value = 0, f.value = 0, p.value = 0, m.value = 0, h.value = 0);
			return;
		}
		let r = t.getBoundingClientRect();
		c.value = r.height, l.value = r.bottom, u.value = r.left, d.value = r.right, f.value = r.top, p.value = r.width, m.value = r.x, h.value = r.y;
	}
	function _() {
		s === "sync" ? g() : s === "next-frame" && requestAnimationFrame(() => g());
	}
	return As(e, _), o(() => X(e), (e) => !e && _()), as(e, _, { attributeFilter: ["style", "class"] }), i && Z("scroll", _, {
		capture: !0,
		passive: !0
	}), r && Z("resize", _, { passive: !0 }), Vo(() => {
		a && _();
	}), {
		height: c,
		bottom: l,
		left: u,
		right: d,
		top: f,
		width: p,
		x: m,
		y: h,
		update: _
	};
}
function Ms(e, t = {
	width: 0,
	height: 0
}, n = {}) {
	let { window: r = Y, box: i = "content-box" } = n, a = M(() => {
		var t;
		return (t = X(e)) == null || (t = t.namespaceURI) == null ? void 0 : t.includes("svg");
	}), s = y(t.width), c = y(t.height), { stop: l } = As(e, ([t]) => {
		let n = i === "border-box" ? t.borderBoxSize : i === "content-box" ? t.contentBoxSize : t.devicePixelContentBoxSize;
		if (r && a.value) {
			let t = X(e);
			if (t) {
				let e = t.getBoundingClientRect();
				s.value = e.width, c.value = e.height;
			}
		} else if (n) {
			let e = Fo(n);
			s.value = e.reduce((e, { inlineSize: t }) => e + t, 0), c.value = e.reduce((e, { blockSize: t }) => e + t, 0);
		} else s.value = t.contentRect.width, c.value = t.contentRect.height;
	}, n);
	Vo(() => {
		let n = X(e);
		if (n && "offsetWidth" in n) {
			if (i === "content-box" && r) {
				let e = r.getComputedStyle(n), t = Number.parseFloat(e.paddingLeft) + Number.parseFloat(e.paddingRight), i = Number.parseFloat(e.paddingTop) + Number.parseFloat(e.paddingBottom), a = Number.parseFloat(e.borderLeftWidth) + Number.parseFloat(e.borderRightWidth), o = Number.parseFloat(e.borderTopWidth) + Number.parseFloat(e.borderBottomWidth);
				s.value = n.offsetWidth - t - a, c.value = n.offsetHeight - i - o;
			} else s.value = n.offsetWidth, c.value = n.offsetHeight;
		} else n && (s.value = t.width, c.value = t.height);
	});
	let u = o(() => X(e), (e) => {
		s.value = e ? t.width : 0, c.value = e ? t.height : 0;
	});
	function d() {
		l(), u();
	}
	return {
		width: s,
		height: c,
		stop: d
	};
}
var Ns = [
	"fullscreenchange",
	"webkitfullscreenchange",
	"webkitendfullscreen",
	"mozfullscreenchange",
	"MSFullscreenChange"
];
function Ps(e, t = {}) {
	let { document: n = $o, autoExit: r = !1 } = t, i = M(() => {
		var t;
		return (t = X(e)) == null ? n == null ? void 0 : n.documentElement : t;
	}), a = y(!1), o = M(() => [
		"requestFullscreen",
		"webkitRequestFullscreen",
		"webkitEnterFullscreen",
		"webkitEnterFullScreen",
		"webkitRequestFullScreen",
		"mozRequestFullScreen",
		"msRequestFullscreen"
	].find((e) => n && e in n || i.value && e in i.value)), s = M(() => [
		"exitFullscreen",
		"webkitExitFullscreen",
		"webkitExitFullScreen",
		"webkitCancelFullScreen",
		"mozCancelFullScreen",
		"msExitFullscreen"
	].find((e) => n && e in n || i.value && e in i.value)), c = M(() => [
		"fullScreen",
		"webkitIsFullScreen",
		"webkitDisplayingFullscreen",
		"mozFullScreen",
		"msFullscreenElement"
	].find((e) => n && e in n || i.value && e in i.value)), l = [
		"fullscreenElement",
		"webkitFullscreenElement",
		"mozFullScreenElement",
		"msFullscreenElement"
	].find((e) => n && e in n), u = /* @__PURE__ */ is(() => i.value && n && o.value !== void 0 && s.value !== void 0 && c.value !== void 0), d = () => l ? (n == null ? void 0 : n[l]) === i.value : !1, f = () => {
		if (c.value) {
			if (n && n[c.value] != null) return n[c.value];
			{
				let e = i.value;
				if ((e == null ? void 0 : e[c.value]) != null) return !!e[c.value];
			}
		}
		return !1;
	};
	function p() {
		return m.apply(this, arguments);
	}
	function m() {
		return m = O(function* () {
			if (!(!u.value || !a.value)) {
				if (s.value) {
					if ((n == null ? void 0 : n[s.value]) != null) yield n[s.value]();
					else {
						let e = i.value;
						(e == null ? void 0 : e[s.value]) != null && (yield e[s.value]());
					}
				}
				a.value = !1;
			}
		}), m.apply(this, arguments);
	}
	function h() {
		return g.apply(this, arguments);
	}
	function g() {
		return g = O(function* () {
			if (!u.value || a.value) return;
			f() && (yield p());
			let e = i.value;
			o.value && (e == null ? void 0 : e[o.value]) != null && (yield e[o.value](), a.value = !0);
		}), g.apply(this, arguments);
	}
	function _() {
		return v.apply(this, arguments);
	}
	function v() {
		return v = O(function* () {
			yield a.value ? p() : h();
		}), v.apply(this, arguments);
	}
	let b = () => {
		let e = f();
		(!e || e && d()) && (a.value = e);
	}, x = {
		capture: !1,
		passive: !0
	};
	return Z(n, Ns, b, x), Z(() => X(i), Ns, b, x), Vo(b, !1), r && go(p), {
		isSupported: u,
		isFullscreen: a,
		enter: h,
		exit: p,
		toggle: _
	};
}
function Fs(e, t, n = {}) {
	let { window: r = Y } = n;
	return Ts(e, t, r == null ? void 0 : r.localStorage, n);
}
var Is = {
	ctrl: "control",
	command: "meta",
	cmd: "meta",
	option: "alt",
	up: "arrowup",
	down: "arrowdown",
	left: "arrowleft",
	right: "arrowright"
};
function Ls(e = {}) {
	let { reactive: t = !1, target: n = Y, aliasMap: r = Is, passive: i = !0, onEventFired: a = J } = e, o = A(/* @__PURE__ */ new Set()), s = {
		toJSON() {
			return {};
		},
		current: o
	}, c = t ? A(s) : s, l = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Map([
		["Meta", l],
		["Shift", /* @__PURE__ */ new Set()],
		["Alt", /* @__PURE__ */ new Set()]
	]), d = /* @__PURE__ */ new Set();
	function f(e, n) {
		e in c && (t ? c[e] = n : c[e].value = n);
	}
	function p() {
		o.clear();
		for (let e of d) f(e, !1);
	}
	function m(e, t, n) {
		if (!(!e || typeof t.getModifierState != "function")) {
			for (let [e, r] of u) if (t.getModifierState(e)) {
				n.forEach((e) => r.add(e));
				break;
			}
		}
	}
	function h(e, t) {
		if (e) return;
		let n = `${t[0].toUpperCase()}${t.slice(1)}`, r = u.get(n);
		if (!["shift", "alt"].includes(t) || !r) return;
		let i = Array.from(r), a = i.indexOf(t);
		i.forEach((e, t) => {
			t >= a && (o.delete(e), f(e, !1));
		}), r.clear();
	}
	function g(e, t) {
		var n, r;
		let i = (n = e.key) == null ? void 0 : n.toLowerCase(), a = [(r = e.code) == null ? void 0 : r.toLowerCase(), i].filter(Boolean);
		if (i) {
			i && (t ? o.add(i) : o.delete(i));
			for (let e of a) d.add(e), f(e, t);
			m(t, e, [...o, ...a]), h(t, i), i === "meta" && !t && (l.forEach((e) => {
				o.delete(e), f(e, !1);
			}), l.clear());
		}
	}
	Z(n, "keydown", (e) => (g(e, !0), a(e)), { passive: i }), Z(n, "keyup", (e) => (g(e, !1), a(e)), { passive: i }), Z("blur", p, { passive: i }), Z("focus", p, { passive: i });
	let _ = new Proxy(c, { get(e, n, i) {
		if (typeof n != "string") return Reflect.get(e, n, i);
		if (n = n.toLowerCase(), n in r && (n = r[n]), !(n in c)) {
			if (/[+_-]/.test(n)) {
				let e = n.split(/[+_-]/g).map((e) => e.trim());
				c[n] = M(() => e.map((e) => N(_[e])).every(Boolean));
			} else c[n] = y(!1);
		}
		let a = Reflect.get(e, n, i);
		return t ? N(a) : a;
	} });
	return _;
}
var Rs = {
	page: (e) => [e.pageX, e.pageY],
	client: (e) => [e.clientX, e.clientY],
	screen: (e) => [e.screenX, e.screenY],
	movement: (e) => e instanceof MouseEvent ? [e.movementX, e.movementY] : null
};
function zs(e = {}) {
	let { type: t = "page", touch: n = !0, resetOnTouchEnds: r = !1, initialValue: i = {
		x: 0,
		y: 0
	}, window: a = Y, target: o = a, scroll: s = !0, eventFilter: c } = e, l = null, u = 0, d = 0, f = y(i.x), p = y(i.y), m = y(null), h = typeof t == "function" ? t : Rs[t], g = (e) => {
		let t = h(e);
		l = e, t && ([f.value, p.value] = t, m.value = "mouse"), a && (u = a.scrollX, d = a.scrollY);
	}, _ = (e) => {
		if (e.touches.length > 0) {
			let t = h(e.touches[0]);
			t && ([f.value, p.value] = t, m.value = "touch");
		}
	}, v = () => {
		if (!l || !a) return;
		let e = h(l);
		l instanceof MouseEvent && e && (f.value = e[0] + a.scrollX - u, p.value = e[1] + a.scrollY - d);
	}, b = () => {
		f.value = i.x, p.value = i.y;
	}, x = c ? (e) => c(() => g(e), {}) : (e) => g(e), S = c ? (e) => c(() => _(e), {}) : (e) => _(e), C = c ? () => c(() => v(), {}) : () => v();
	if (o) {
		let e = { passive: !0 };
		Z(o, ["mousemove", "dragover"], x, e), n && t !== "movement" && (Z(o, ["touchstart", "touchmove"], S, e), r && Z(o, "touchend", b, e)), s && t === "page" && Z(a, "scroll", C, e);
	}
	return {
		x: f,
		y: p,
		sourceType: m
	};
}
function Bs(e, t = {}) {
	let n = Do(e), { threshold: r = 50, onSwipe: i, onSwipeEnd: a, onSwipeStart: o, disableTextSelect: s = !1 } = t, c = A({
		x: 0,
		y: 0
	}), l = (e, t) => {
		c.x = e, c.y = t;
	}, u = A({
		x: 0,
		y: 0
	}), d = (e, t) => {
		u.x = e, u.y = t;
	}, f = M(() => c.x - u.x), p = M(() => c.y - u.y), { max: m, abs: h } = Math, _ = M(() => m(h(f.value), h(p.value)) >= r), v = y(!1), b = y(!1), x = M(() => _.value ? h(f.value) > h(p.value) ? f.value > 0 ? "left" : "right" : p.value > 0 ? "up" : "down" : "none"), S = (e) => {
		var n, r, i;
		let a = e.buttons === 0, o = e.buttons === 1;
		return (n = (r = (i = t.pointerTypes) == null ? void 0 : i.includes(e.pointerType)) == null ? a || o : r) == null || n;
	}, C = { passive: !0 }, T = [
		Z(e, "pointerdown", (e) => {
			if (!S(e)) return;
			b.value = !0;
			let t = e.target;
			t == null || t.setPointerCapture(e.pointerId);
			let { clientX: n, clientY: r } = e;
			l(n, r), d(n, r), o == null || o(e);
		}, C),
		Z(e, "pointermove", (e) => {
			if (!S(e) || !b.value) return;
			let { clientX: t, clientY: n } = e;
			d(t, n), !v.value && _.value && (v.value = !0), v.value && (i == null || i(e));
		}, C),
		Z(e, ["pointerup", "pointercancel"], (e) => {
			S(e) && (v.value && (a == null || a(e, x.value)), b.value = !1, v.value = !1);
		}, C)
	];
	return Vo(() => {
		var e;
		if ((e = n.value) == null || (e = e.style) == null || e.setProperty("touch-action", "pan-y"), s) {
			var t, r, i;
			(t = n.value) == null || (t = t.style) == null || t.setProperty("-webkit-user-select", "none"), (r = n.value) == null || (r = r.style) == null || r.setProperty("-ms-user-select", "none"), (i = n.value) == null || (i = i.style) == null || i.setProperty("user-select", "none");
		}
	}), {
		isSwiping: w(v),
		direction: w(x),
		posStart: g(c),
		posEnd: g(u),
		distanceX: f,
		distanceY: p,
		stop: () => T.forEach((e) => e())
	};
}
var Vs = 0, Hs = /* @__PURE__ */ new WeakMap();
function Us(e, t = {}) {
	let n = y(!1), { document: r = $o, immediate: i = !0, manual: a = !1, id: s = `vueuse_styletag_${++Vs}` } = t, c = y(e), l = () => {}, u = () => {
		var e;
		if (!r) return;
		let i = r.getElementById(s) || r.createElement("style");
		i.isConnected || (i.id = s, t.nonce && (i.nonce = t.nonce), t.media && (i.media = t.media), r.head.appendChild(i)), !n.value && (Hs.set(i, ((e = Hs.get(i)) == null ? 0 : e) + 1), l = o(c, (e) => {
			i.textContent = e;
		}, { immediate: !0 }), n.value = !0);
	}, d = () => {
		if (!r || !n.value) return;
		l();
		let e = r.getElementById(s);
		if (e) {
			var t;
			let n = ((t = Hs.get(e)) == null ? 1 : t) - 1;
			n <= 0 ? (Hs.delete(e), r.head.removeChild(e)) : Hs.set(e, n);
		}
		n.value = !1;
	};
	return i && !a && Vo(u), a || go(d), {
		id: s,
		css: c,
		unload: d,
		load: u,
		isLoaded: w(n)
	};
}
function Ws(e, t, r, i = {}) {
	var a, s;
	let { clone: c = !1, passive: l = !1, eventName: u, deep: d = !1, defaultValue: f, shouldEmit: p } = i, m = S(), h = r || (m == null ? void 0 : m.emit) || (m == null || (a = m.$emit) == null ? void 0 : a.bind(m)) || (m == null || (s = m.proxy) == null || (s = s.$emit) == null ? void 0 : s.bind(m == null ? void 0 : m.proxy)), g = u;
	t || (t = "modelValue"), g = g || `update:${t.toString()}`;
	let v = (e) => c ? typeof c == "function" ? c(e) : hs(e) : e, y = () => bo(e[t]) ? v(e[t]) : f, b = (e) => {
		p ? p(e) && h(g, e) : h(g, e);
	};
	if (l) {
		let r = _(y()), i = !1;
		return o(() => e[t], (e) => {
			i || (i = !0, r.value = v(e), n(() => i = !1));
		}), o(r, (n) => {
			!i && (n !== e[t] || d) && b(n);
		}, { deep: d }), r;
	}
	return M({
		get() {
			return y();
		},
		set(e) {
			b(e);
		}
	});
}
function Gs(e = {}) {
	let { navigator: t = es, document: n = $o } = e, r = y(!1), i = y(null), a = Es({ document: n }), o = /* @__PURE__ */ is(() => t && "wakeLock" in t), s = M(() => !!i.value && a.value === "visible");
	o.value && (Z(i, "release", () => {
		var e, t;
		r.value = (e = (t = i.value) == null ? void 0 : t.type) != null && e;
	}, { passive: !0 }), Xo(() => a.value === "visible" && (n == null ? void 0 : n.visibilityState) === "visible" && r.value, (e) => {
		r.value = !1, c(e);
	}));
	function c(e) {
		return l.apply(this, arguments);
	}
	function l() {
		return l = O(function* (e) {
			var n;
			yield (n = i.value) == null ? void 0 : n.release(), i.value = o.value ? yield t.wakeLock.request(e) : null;
		}), l.apply(this, arguments);
	}
	function u(e) {
		return d.apply(this, arguments);
	}
	function d() {
		return d = O(function* (e) {
			a.value === "visible" ? yield c(e) : r.value = e;
		}), d.apply(this, arguments);
	}
	function f() {
		return p.apply(this, arguments);
	}
	function p() {
		return p = O(function* () {
			r.value = !1;
			let e = i.value;
			i.value = null, yield e == null ? void 0 : e.release();
		}), p.apply(this, arguments);
	}
	return go(() => {
		f();
	}), {
		sentinel: i,
		isSupported: o,
		isActive: s,
		request: u,
		forceRequest: c,
		release: f
	};
}
function Ks(e = {}) {
	let { window: t = Y } = e;
	if (!t) return y(!1);
	let n = y(t.document.hasFocus()), r = { passive: !0 };
	return Z(t, "blur", () => {
		n.value = !1;
	}, r), Z(t, "focus", () => {
		n.value = !0;
	}, r), n;
}
function qs(e = {}) {
	let { window: t = Y, initialWidth: n = Infinity, initialHeight: r = Infinity, listenOrientation: i = !0, includeScrollbar: a = !0, type: s = "inner" } = e, c = y(n), l = y(r), u = () => {
		if (t) {
			if (s === "outer") c.value = t.outerWidth, l.value = t.outerHeight;
			else if (s === "visual" && t.visualViewport) {
				let { width: e, height: n, scale: r } = t.visualViewport;
				c.value = Math.round(e * r), l.value = Math.round(n * r);
			} else a ? (c.value = t.innerWidth, l.value = t.innerHeight) : (c.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight);
		}
	};
	u(), Vo(u);
	let d = { passive: !0 };
	return Z("resize", u, d), t && s === "visual" && t.visualViewport && Z(t.visualViewport, "resize", u, d), i && o(fs("(orientation: portrait)"), () => u()), {
		width: c,
		height: l
	};
}
//#endregion
//#region node_modules/defu/dist/defu.mjs
function Js(e) {
	if (typeof e != "object" || !e) return !1;
	let t = Object.getPrototypeOf(e);
	return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ys(e, t, n = ".", r) {
	if (!Js(t)) return Ys(e, {}, n, r);
	let i = T({}, t);
	for (let t of Object.keys(e)) {
		if (t === "__proto__" || t === "constructor") continue;
		let a = e[t];
		a != null && (r && r(i, t, a, n) || (i[t] = Array.isArray(a) && Array.isArray(i[t]) ? [...a, ...i[t]] : Js(a) && Js(i[t]) ? Ys(a, i[t], (n ? `${n}.` : "") + t.toString(), r) : a));
	}
	return i;
}
function Xs(e) {
	return (...t) => t.reduce((t, n) => Ys(t, n, "", e), {});
}
var Zs = Xs();
//#endregion
//#region node_modules/@vueuse/motion/node_modules/@vueuse/shared/index.mjs
function Qs(e) {
	return p() ? (C(e), !0) : !1;
}
var $s = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var ec = (e) => e != null, tc = Object.prototype.toString, nc = (e) => tc.call(e) === "[object Object]", rc = () => {};
function ic(e) {
	return Array.isArray(e) ? e : [e];
}
function ac(e) {
	return e || S();
}
function oc(e, t) {
	ac(t) && c(e, t);
}
function sc(e, t, n) {
	return o(e, t, T(T({}, n), {}, { immediate: !0 }));
}
//#endregion
//#region node_modules/@vueuse/motion/node_modules/@vueuse/core/index.mjs
var cc = $s ? window : void 0;
$s && window.document, $s && window.navigator, $s && window.location;
function lc(e) {
	var t;
	let n = N(e);
	return (t = n == null ? void 0 : n.$el) == null ? n : t;
}
function uc(...e) {
	let t = [], n = () => {
		t.forEach((e) => e()), t.length = 0;
	}, r = (e, t, n, r) => (e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)), i = M(() => {
		let t = ic(N(e[0])).filter((e) => e != null);
		return t.every((e) => typeof e != "string") ? t : void 0;
	}), a = sc(() => {
		var t, n;
		return [
			(n = (t = i.value) == null ? void 0 : t.map((e) => lc(e))) == null ? [cc].filter((e) => e != null) : n,
			ic(N(i.value ? e[1] : e[0])),
			ic(m(i.value ? e[2] : e[1])),
			N(i.value ? e[3] : e[2])
		];
	}, ([e, i, a, o]) => {
		if (n(), !(e != null && e.length) || !(i != null && i.length) || !(a != null && a.length)) return;
		let s = nc(o) ? T({}, o) : o;
		t.push(...e.flatMap((e) => i.flatMap((t) => a.map((n) => r(e, t, n, s)))));
	}, { flush: "post" });
	return Qs(n), () => {
		a(), n();
	};
}
// @__NO_SIDE_EFFECTS__
function dc() {
	let e = y(!1), n = S();
	return n && t(() => {
		e.value = !0;
	}, n), e;
}
// @__NO_SIDE_EFFECTS__
function fc(e) {
	let t = /* @__PURE__ */ dc();
	return M(() => (t.value, !!e()));
}
function pc(e, t, n = {}) {
	let { root: r, rootMargin: i = "0px", threshold: a = 0, window: s = cc, immediate: c = !0 } = n, l = /* @__PURE__ */ fc(() => s && "IntersectionObserver" in s), u = M(() => ic(N(e)).map(lc).filter(ec)), d = rc, f = y(c), p = l.value ? o(() => [
		u.value,
		lc(r),
		f.value
	], ([e, n]) => {
		if (d(), !f.value || !e.length) return;
		let r = new IntersectionObserver(t, {
			root: lc(n),
			rootMargin: i,
			threshold: a
		});
		e.forEach((e) => e && r.observe(e)), d = () => {
			r.disconnect(), d = rc;
		};
	}, {
		immediate: c,
		flush: "post"
	}) : rc, m = () => {
		d(), p(), f.value = !1;
	};
	return Qs(m), {
		isSupported: l,
		isActive: f,
		pause() {
			d(), f.value = !1;
		},
		resume() {
			f.value = !0;
		},
		stop: m
	};
}
//#endregion
//#region node_modules/framesync/dist/es/on-next-frame.mjs
var mc = 1 / 60 * 1e3, hc = typeof performance < "u" ? () => performance.now() : () => Date.now(), gc = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(hc()), mc);
//#endregion
//#region node_modules/framesync/dist/es/create-render-step.mjs
function _c(e) {
	let t = [], n = [], r = 0, i = !1, a = !1, o = /* @__PURE__ */ new WeakSet(), s = {
		schedule: (e, a = !1, s = !1) => {
			let c = s && i, l = c ? t : n;
			return a && o.add(e), l.indexOf(e) === -1 && (l.push(e), c && i && (r = t.length)), e;
		},
		cancel: (e) => {
			let t = n.indexOf(e);
			t !== -1 && n.splice(t, 1), o.delete(e);
		},
		process: (c) => {
			if (i) {
				a = !0;
				return;
			}
			if (i = !0, [t, n] = [n, t], n.length = 0, r = t.length, r) for (let n = 0; n < r; n++) {
				let r = t[n];
				r(c), o.has(r) && (s.schedule(r), e());
			}
			i = !1, a && (a = !1, s.process(c));
		}
	};
	return s;
}
//#endregion
//#region node_modules/framesync/dist/es/index.mjs
var vc = 40, yc = !0, bc = !1, xc = !1, Sc = {
	delta: 0,
	timestamp: 0
}, Cc = [
	"read",
	"update",
	"preRender",
	"render",
	"postRender"
], wc = Cc.reduce((e, t) => (e[t] = _c(() => bc = !0), e), {}), Tc = Cc.reduce((e, t) => {
	let n = wc[t];
	return e[t] = (e, t = !1, r = !1) => (bc || kc(), n.schedule(e, t, r)), e;
}, {}), Ec = Cc.reduce((e, t) => (e[t] = wc[t].cancel, e), {});
Cc.reduce((e, t) => (e[t] = () => wc[t].process(Sc), e), {});
var Dc = (e) => wc[e].process(Sc), Oc = (e) => {
	bc = !1, Sc.delta = yc ? mc : Math.max(Math.min(e - Sc.timestamp, vc), 1), Sc.timestamp = e, xc = !0, Cc.forEach(Dc), xc = !1, bc && (yc = !1, gc(Oc));
}, kc = () => {
	bc = !0, yc = !0, xc || gc(Oc);
}, Ac = () => Sc;
//#endregion
//#region node_modules/popmotion/node_modules/tslib/tslib.es6.js
function jc(e, t) {
	var n = {};
	for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
	return n;
}
//#endregion
//#region node_modules/hey-listen/dist/hey-listen.es.js
var Mc = function() {}, Nc = function() {};
process.env.NODE_ENV !== "production" && (Mc = function(e, t) {
	!e && typeof console < "u" && console.warn(t);
}, Nc = function(e, t) {
	if (!e) throw Error(t);
});
//#endregion
//#region node_modules/popmotion/dist/es/utils/clamp.mjs
var Pc = (e, t, n) => Math.min(Math.max(n, e), t), Fc = .001, Ic = .01, Lc = .05;
function Rc({ duration: e = 800, bounce: t = .25, velocity: n = 0, mass: r = 1 }) {
	let i, a;
	Mc(e <= 1e4, "Spring duration must be 10 seconds or less");
	let o = 1 - t;
	o = Pc(Lc, 1, o), e = Pc(Ic, 10, e / 1e3), o < 1 ? (i = (t) => {
		let r = t * o, i = r * e, a = r - n, s = Vc(t, o), c = Math.exp(-i);
		return Fc - a / s * c;
	}, a = (t) => {
		let r = t * o * e, a = r * n + n, s = Math.pow(o, 2) * Math.pow(t, 2) * e, c = Math.exp(-r), l = Vc(Math.pow(t, 2), o);
		return (-i(t) + Fc > 0 ? -1 : 1) * ((a - s) * c) / l;
	}) : (i = (t) => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), a = (t) => Math.exp(-t * e) * ((n - t) * (e * e)));
	let s = 5 / e, c = Bc(i, a, s);
	if (e *= 1e3, isNaN(c)) return {
		stiffness: 100,
		damping: 10,
		duration: e
	};
	{
		let t = Math.pow(c, 2) * r;
		return {
			stiffness: t,
			damping: o * 2 * Math.sqrt(r * t),
			duration: e
		};
	}
}
var zc = 12;
function Bc(e, t, n) {
	let r = n;
	for (let n = 1; n < zc; n++) r -= e(r) / t(r);
	return r;
}
function Vc(e, t) {
	return e * Math.sqrt(1 - t * t);
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/generators/spring.mjs
var Hc = ["duration", "bounce"], Uc = [
	"stiffness",
	"damping",
	"mass"
];
function Wc(e, t) {
	return t.some((t) => e[t] !== void 0);
}
function Gc(e) {
	let t = Object.assign({
		velocity: 0,
		stiffness: 100,
		damping: 10,
		mass: 1,
		isResolvedFromDuration: !1
	}, e);
	if (!Wc(e, Uc) && Wc(e, Hc)) {
		let n = Rc(e);
		t = Object.assign(Object.assign(Object.assign({}, t), n), {
			velocity: 0,
			mass: 1
		}), t.isResolvedFromDuration = !0;
	}
	return t;
}
function Kc(e) {
	var { from: t = 0, to: n = 1, restSpeed: r = 2, restDelta: i } = e, a = jc(e, [
		"from",
		"to",
		"restSpeed",
		"restDelta"
	]);
	let o = {
		done: !1,
		value: t
	}, { stiffness: s, damping: c, mass: l, velocity: u, duration: d, isResolvedFromDuration: f } = Gc(a), p = qc, m = qc;
	function h() {
		let e = u ? -(u / 1e3) : 0, r = n - t, a = c / (2 * Math.sqrt(s * l)), o = Math.sqrt(s / l) / 1e3;
		if (i === void 0 && (i = Math.min(Math.abs(n - t) / 100, .4)), a < 1) {
			let t = Vc(o, a);
			p = (i) => {
				let s = Math.exp(-a * o * i);
				return n - s * ((e + a * o * r) / t * Math.sin(t * i) + r * Math.cos(t * i));
			}, m = (n) => {
				let i = Math.exp(-a * o * n);
				return a * o * i * (Math.sin(t * n) * (e + a * o * r) / t + r * Math.cos(t * n)) - i * (Math.cos(t * n) * (e + a * o * r) - t * r * Math.sin(t * n));
			};
		} else if (a === 1) p = (t) => n - Math.exp(-o * t) * (r + (e + o * r) * t);
		else {
			let t = o * Math.sqrt(a * a - 1);
			p = (i) => {
				let s = Math.exp(-a * o * i), c = Math.min(t * i, 300);
				return n - s * ((e + a * o * r) * Math.sinh(c) + t * r * Math.cosh(c)) / t;
			};
		}
	}
	return h(), {
		next: (e) => {
			let t = p(e);
			if (f) o.done = e >= d;
			else {
				let a = m(e) * 1e3, s = Math.abs(a) <= r, c = Math.abs(n - t) <= i;
				o.done = s && c;
			}
			return o.value = o.done ? n : t, o;
		},
		flipTarget: () => {
			u = -u, [t, n] = [n, t], h();
		}
	};
}
Kc.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
var qc = (e) => 0, Jc = (e, t, n) => {
	let r = t - e;
	return r === 0 ? 1 : (n - e) / r;
}, Yc = (e, t, n) => -n * e + n * t + e, Xc = (e, t) => (n) => Math.max(Math.min(n, t), e), Zc = (e) => e % 1 ? Number(e.toFixed(5)) : e, Qc = /(-)?([\d]*\.?[\d])+/g, $c = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, el = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function tl(e) {
	return typeof e == "string";
}
//#endregion
//#region node_modules/style-value-types/dist/es/numbers/index.mjs
var nl = {
	test: (e) => typeof e == "number",
	parse: parseFloat,
	transform: (e) => e
}, rl = Object.assign(Object.assign({}, nl), { transform: Xc(0, 1) }), il = Object.assign(Object.assign({}, nl), { default: 1 }), al = (e) => ({
	test: (t) => tl(t) && t.endsWith(e) && t.split(" ").length === 1,
	parse: parseFloat,
	transform: (t) => `${t}${e}`
}), ol = al("deg"), sl = al("%"), Q = al("px"), cl = Object.assign(Object.assign({}, sl), {
	parse: (e) => sl.parse(e) / 100,
	transform: (e) => sl.transform(e * 100)
}), ll = (e, t) => (n) => !!(tl(n) && el.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), ul = (e, t, n) => (r) => {
	if (!tl(r)) return r;
	let [i, a, o, s] = r.match(Qc);
	return {
		[e]: parseFloat(i),
		[t]: parseFloat(a),
		[n]: parseFloat(o),
		alpha: s === void 0 ? 1 : parseFloat(s)
	};
}, dl = {
	test: ll("hsl", "hue"),
	parse: ul("hue", "saturation", "lightness"),
	transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + sl.transform(Zc(t)) + ", " + sl.transform(Zc(n)) + ", " + Zc(rl.transform(r)) + ")"
}, fl = Xc(0, 255), pl = Object.assign(Object.assign({}, nl), { transform: (e) => Math.round(fl(e)) }), ml = {
	test: ll("rgb", "red"),
	parse: ul("red", "green", "blue"),
	transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + pl.transform(e) + ", " + pl.transform(t) + ", " + pl.transform(n) + ", " + Zc(rl.transform(r)) + ")"
};
//#endregion
//#region node_modules/style-value-types/dist/es/color/hex.mjs
function hl(e) {
	let t = "", n = "", r = "", i = "";
	return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), i = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), i = e.substr(4, 1), t += t, n += n, r += r, i += i), {
		red: parseInt(t, 16),
		green: parseInt(n, 16),
		blue: parseInt(r, 16),
		alpha: i ? parseInt(i, 16) / 255 : 1
	};
}
var gl = {
	test: ll("#"),
	parse: hl,
	transform: ml.transform
}, $ = {
	test: (e) => ml.test(e) || gl.test(e) || dl.test(e),
	parse: (e) => ml.test(e) ? ml.parse(e) : dl.test(e) ? dl.parse(e) : gl.parse(e),
	transform: (e) => tl(e) ? e : e.hasOwnProperty("red") ? ml.transform(e) : dl.transform(e)
}, _l = "${c}", vl = "${n}";
function yl(e) {
	var t, n, r, i;
	return isNaN(e) && tl(e) && ((n = (t = e.match(Qc)) == null ? void 0 : t.length) == null ? 0 : n) + ((i = (r = e.match($c)) == null ? void 0 : r.length) == null ? 0 : i) > 0;
}
function bl(e) {
	typeof e == "number" && (e = `${e}`);
	let t = [], n = 0, r = e.match($c);
	r && (n = r.length, e = e.replace($c, _l), t.push(...r.map($.parse)));
	let i = e.match(Qc);
	return i && (e = e.replace(Qc, vl), t.push(...i.map(nl.parse))), {
		values: t,
		numColors: n,
		tokenised: e
	};
}
function xl(e) {
	return bl(e).values;
}
function Sl(e) {
	let { values: t, numColors: n, tokenised: r } = bl(e), i = t.length;
	return (e) => {
		let t = r;
		for (let r = 0; r < i; r++) t = t.replace(r < n ? _l : vl, r < n ? $.transform(e[r]) : Zc(e[r]));
		return t;
	};
}
var Cl = (e) => typeof e == "number" ? 0 : e;
function wl(e) {
	let t = xl(e);
	return Sl(e)(t.map(Cl));
}
var Tl = {
	test: yl,
	parse: xl,
	createTransformer: Sl,
	getAnimatableNone: wl
}, El = /* @__PURE__ */ new Set([
	"brightness",
	"contrast",
	"saturate",
	"opacity"
]);
function Dl(e) {
	let [t, n] = e.slice(0, -1).split("(");
	if (t === "drop-shadow") return e;
	let [r] = n.match(Qc) || [];
	if (!r) return e;
	let i = n.replace(r, ""), a = +!!El.has(t);
	return r !== n && (a *= 100), t + "(" + a + i + ")";
}
var Ol = /([a-z-]*)\(.*?\)/g, kl = Object.assign(Object.assign({}, Tl), { getAnimatableNone: (e) => {
	let t = e.match(Ol);
	return t ? t.map(Dl).join(" ") : e;
} });
//#endregion
//#region node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
function Al(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function jl({ hue: e, saturation: t, lightness: n, alpha: r }) {
	e /= 360, t /= 100, n /= 100;
	let i = 0, a = 0, o = 0;
	if (!t) i = a = o = n;
	else {
		let r = n < .5 ? n * (1 + t) : n + t - n * t, s = 2 * n - r;
		i = Al(s, r, e + 1 / 3), a = Al(s, r, e), o = Al(s, r, e - 1 / 3);
	}
	return {
		red: Math.round(i * 255),
		green: Math.round(a * 255),
		blue: Math.round(o * 255),
		alpha: r
	};
}
//#endregion
//#region node_modules/popmotion/dist/es/utils/mix-color.mjs
var Ml = (e, t, n) => {
	let r = e * e, i = t * t;
	return Math.sqrt(Math.max(0, n * (i - r) + r));
}, Nl = [
	gl,
	ml,
	dl
], Pl = (e) => Nl.find((t) => t.test(e)), Fl = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, Il = (e, t) => {
	let n = Pl(e), r = Pl(t);
	Nc(!!n, Fl(e)), Nc(!!r, Fl(t));
	let i = n.parse(e), a = r.parse(t);
	n === dl && (i = jl(i), n = ml), r === dl && (a = jl(a), r = ml);
	let o = Object.assign({}, i);
	return (e) => {
		for (let t in o) t !== "alpha" && (o[t] = Ml(i[t], a[t], e));
		return o.alpha = Yc(i.alpha, a.alpha, e), n.transform(o);
	};
}, Ll = (e) => typeof e == "number", Rl = (e, t) => (n) => t(e(n)), zl = (...e) => e.reduce(Rl);
//#endregion
//#region node_modules/popmotion/dist/es/utils/mix-complex.mjs
function Bl(e, t) {
	return Ll(e) ? (n) => Yc(e, t, n) : $.test(e) ? Il(e, t) : Wl(e, t);
}
var Vl = (e, t) => {
	let n = [...e], r = n.length, i = e.map((e, n) => Bl(e, t[n]));
	return (e) => {
		for (let t = 0; t < r; t++) n[t] = i[t](e);
		return n;
	};
}, Hl = (e, t) => {
	let n = Object.assign(Object.assign({}, e), t), r = {};
	for (let i in n) e[i] !== void 0 && t[i] !== void 0 && (r[i] = Bl(e[i], t[i]));
	return (e) => {
		for (let t in r) n[t] = r[t](e);
		return n;
	};
};
function Ul(e) {
	let t = Tl.parse(e), n = t.length, r = 0, i = 0, a = 0;
	for (let e = 0; e < n; e++) r || typeof t[e] == "number" ? r++ : t[e].hue === void 0 ? i++ : a++;
	return {
		parsed: t,
		numNumbers: r,
		numRGB: i,
		numHSL: a
	};
}
var Wl = (e, t) => {
	let n = Tl.createTransformer(t), r = Ul(e), i = Ul(t);
	return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers ? zl(Vl(r.parsed, i.parsed), n) : (Mc(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (n) => `${n > 0 ? t : e}`);
}, Gl = (e, t) => (n) => Yc(e, t, n);
function Kl(e) {
	if (typeof e == "number") return Gl;
	if (typeof e == "string") return $.test(e) ? Il : Wl;
	if (Array.isArray(e)) return Vl;
	if (typeof e == "object") return Hl;
}
function ql(e, t, n) {
	let r = [], i = n || Kl(e[0]), a = e.length - 1;
	for (let n = 0; n < a; n++) {
		let a = i(e[n], e[n + 1]);
		t && (a = zl(Array.isArray(t) ? t[n] : t, a)), r.push(a);
	}
	return r;
}
function Jl([e, t], [n]) {
	return (r) => n(Jc(e, t, r));
}
function Yl(e, t) {
	let n = e.length, r = n - 1;
	return (i) => {
		let a = 0, o = !1;
		if (i <= e[0] ? o = !0 : i >= e[r] && (a = r - 1, o = !0), !o) {
			let t = 1;
			for (; t < n && !(e[t] > i || t === r); t++);
			a = t - 1;
		}
		let s = Jc(e[a], e[a + 1], i);
		return t[a](s);
	};
}
function Xl(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
	let a = e.length;
	Nc(a === t.length, "Both input and output ranges must be the same length"), Nc(!r || !Array.isArray(r) || r.length === a - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[a - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
	let o = ql(t, r, i), s = a === 2 ? Jl(e, o) : Yl(e, o);
	return n ? (t) => s(Pc(e[0], e[a - 1], t)) : s;
}
//#endregion
//#region node_modules/popmotion/dist/es/easing/utils.mjs
var Zl = (e) => (t) => 1 - e(1 - t), Ql = (e) => (t) => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, $l = (e) => (t) => Math.pow(t, e), eu = (e) => (t) => t * t * ((e + 1) * t - e), tu = (e) => {
	let t = eu(e);
	return (e) => (e *= 2) < 1 ? .5 * t(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
}, nu = 1.525, ru = 4 / 11, iu = 8 / 11, au = 9 / 10, ou = (e) => e, su = $l(2), cu = Zl(su), lu = Ql(su), uu = (e) => 1 - Math.sin(Math.acos(e)), du = Zl(uu), fu = Ql(du), pu = eu(nu), mu = Zl(pu), hu = Ql(pu), gu = tu(nu), _u = 4356 / 361, vu = 35442 / 1805, yu = 16061 / 1805, bu = (e) => {
	if (e === 1 || e === 0) return e;
	let t = e * e;
	return e < ru ? 7.5625 * t : e < iu ? 9.075 * t - 9.9 * e + 3.4 : e < au ? _u * t - vu * e + yu : 10.8 * e * e - 20.52 * e + 10.72;
}, xu = Zl(bu), Su = (e) => e < .5 ? .5 * (1 - bu(1 - e * 2)) : .5 * bu(e * 2 - 1) + .5;
//#endregion
//#region node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function Cu(e, t) {
	return e.map(() => t || lu).splice(0, e.length - 1);
}
function wu(e) {
	let t = e.length;
	return e.map((e, n) => n === 0 ? 0 : n / (t - 1));
}
function Tu(e, t) {
	return e.map((e) => e * t);
}
function Eu({ from: e = 0, to: t = 1, ease: n, offset: r, duration: i = 300 }) {
	let a = {
		done: !1,
		value: e
	}, o = Array.isArray(t) ? t : [e, t], s = Tu(r && r.length === o.length ? r : wu(o), i);
	function c() {
		return Xl(s, o, { ease: Array.isArray(n) ? n : Cu(o, n) });
	}
	let l = c();
	return {
		next: (e) => (a.value = l(e), a.done = e >= i, a),
		flipTarget: () => {
			o.reverse(), l = c();
		}
	};
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/generators/decay.mjs
function Du({ velocity: e = 0, from: t = 0, power: n = .8, timeConstant: r = 350, restDelta: i = .5, modifyTarget: a }) {
	let o = {
		done: !1,
		value: t
	}, s = n * e, c = t + s, l = a === void 0 ? c : a(c);
	return l !== c && (s = l - t), {
		next: (e) => {
			let t = -s * Math.exp(-e / r);
			return o.done = !(t > i || t < -i), o.value = o.done ? l : l + t, o;
		},
		flipTarget: () => {}
	};
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var Ou = {
	keyframes: Eu,
	spring: Kc,
	decay: Du
};
function ku(e) {
	if (Array.isArray(e.to)) return Eu;
	if (Ou[e.type]) return Ou[e.type];
	let t = new Set(Object.keys(e));
	return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? Eu : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Kc : Eu;
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
function Au(e, t, n = 0) {
	return e - t - n;
}
function ju(e, t, n = 0, r = !0) {
	return r ? Au(t + -e, t, n) : t - (e - t) + n;
}
function Mu(e, t, n, r) {
	return r ? e >= t + n : e <= -n;
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/index.mjs
var Nu = (e) => {
	let t = ({ delta: t }) => e(t);
	return {
		start: () => Tc.update(t, !0),
		stop: () => Ec.update(t)
	};
};
function Pu(e) {
	var t, n, { from: r, autoplay: i = !0, driver: a = Nu, elapsed: o = 0, repeat: s = 0, repeatType: c = "loop", repeatDelay: l = 0, onPlay: u, onStop: d, onComplete: f, onRepeat: p, onUpdate: m } = e, h = jc(e, [
		"from",
		"autoplay",
		"driver",
		"elapsed",
		"repeat",
		"repeatType",
		"repeatDelay",
		"onPlay",
		"onStop",
		"onComplete",
		"onRepeat",
		"onUpdate"
	]);
	let { to: g } = h, _, v = 0, y = h.duration, b, x = !1, S = !0, C, w = ku(h);
	(n = (t = w).needsInterpolation) != null && n.call(t, r, g) && (C = Xl([0, 100], [r, g], { clamp: !1 }), r = 0, g = 100);
	let T = w(Object.assign(Object.assign({}, h), {
		from: r,
		to: g
	}));
	function E() {
		v++, c === "reverse" ? (S = v % 2 == 0, o = ju(o, y, l, S)) : (o = Au(o, y, l), c === "mirror" && T.flipTarget()), x = !1, p && p();
	}
	function D() {
		_.stop(), f && f();
	}
	function O(e) {
		if (S || (e = -e), o += e, !x) {
			let e = T.next(Math.max(0, o));
			b = e.value, C && (b = C(b)), x = S ? e.done : o <= 0;
		}
		m == null || m(b), x && (v === 0 && (y != null || (y = o)), v < s ? Mu(o, y, l, S) && E() : D());
	}
	function k() {
		u == null || u(), _ = a(O), _.start();
	}
	return i && k(), { stop: () => {
		d == null || d(), _.stop();
	} };
}
//#endregion
//#region node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
function Fu(e, t) {
	return t ? 1e3 / t * e : 0;
}
//#endregion
//#region node_modules/popmotion/dist/es/animations/inertia.mjs
function Iu({ from: e = 0, velocity: t = 0, min: n, max: r, power: i = .8, timeConstant: a = 750, bounceStiffness: o = 500, bounceDamping: s = 10, restDelta: c = 1, modifyTarget: l, driver: u, onUpdate: d, onComplete: f, onStop: p }) {
	let m;
	function h(e) {
		return n !== void 0 && e < n || r !== void 0 && e > r;
	}
	function g(e) {
		return n === void 0 ? r : r === void 0 || Math.abs(n - e) < Math.abs(r - e) ? n : r;
	}
	function _(e) {
		m == null || m.stop(), m = Pu(Object.assign(Object.assign({}, e), {
			driver: u,
			onUpdate: (t) => {
				var n;
				d == null || d(t), (n = e.onUpdate) == null || n.call(e, t);
			},
			onComplete: f,
			onStop: p
		}));
	}
	function v(e) {
		_(Object.assign({
			type: "spring",
			stiffness: o,
			damping: s,
			restDelta: c
		}, e));
	}
	if (h(e)) v({
		from: e,
		velocity: t,
		to: g(e)
	});
	else {
		let r = i * t + e;
		l !== void 0 && (r = l(r));
		let o = g(r), s = o === n ? -1 : 1, u, d;
		_({
			type: "decay",
			from: e,
			velocity: t,
			timeConstant: a,
			power: i,
			restDelta: c,
			modifyTarget: l,
			onUpdate: h(r) ? (e) => {
				u = d, d = e, t = Fu(e - u, Ac().delta), (s === 1 && e > o || s === -1 && e < o) && v({
					from: e,
					to: o,
					velocity: t
				});
			} : void 0
		});
	}
	return { stop: () => m == null ? void 0 : m.stop() };
}
//#endregion
//#region node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
var Lu = (e, t) => 1 - 3 * t + 3 * e, Ru = (e, t) => 3 * t - 6 * e, zu = (e) => 3 * e, Bu = (e, t, n) => ((Lu(t, n) * e + Ru(t, n)) * e + zu(t)) * e, Vu = (e, t, n) => 3 * Lu(t, n) * e * e + 2 * Ru(t, n) * e + zu(t), Hu = 1e-7, Uu = 10;
function Wu(e, t, n, r, i) {
	let a, o, s = 0;
	do
		o = t + (n - t) / 2, a = Bu(o, r, i) - e, a > 0 ? n = o : t = o;
	while (Math.abs(a) > Hu && ++s < Uu);
	return o;
}
var Gu = 8, Ku = .001;
function qu(e, t, n, r) {
	for (let i = 0; i < Gu; ++i) {
		let i = Vu(t, n, r);
		if (i === 0) return t;
		let a = Bu(t, n, r) - e;
		t -= a / i;
	}
	return t;
}
var Ju = 11, Yu = 1 / 10;
function Xu(e, t, n, r) {
	if (e === t && n === r) return ou;
	let i = new Float32Array(Ju);
	for (let t = 0; t < Ju; ++t) i[t] = Bu(t * Yu, e, n);
	function a(t) {
		let r = 0, a = 1;
		for (; a !== 10 && i[a] <= t; ++a) r += Yu;
		--a;
		let o = (t - i[a]) / (i[a + 1] - i[a]), s = r + o * Yu, c = Vu(s, e, n);
		return c >= Ku ? qu(t, s, e, n) : c === 0 ? s : Wu(t, r, r + Yu, e, n);
	}
	return (e) => e === 0 || e === 1 ? e : Bu(a(e), t, r);
}
//#endregion
//#region node_modules/@vueuse/motion/dist/index.mjs
var Zu = [
	"ease",
	"times",
	"delay"
], Qu = [
	"delay",
	"repeat",
	"repeatType",
	"repeatDelay",
	"from"
], $u = {}, ed = class {
	constructor() {
		h(this, "subscriptions", /* @__PURE__ */ new Set());
	}
	add(e) {
		return this.subscriptions.add(e), () => this.subscriptions.delete(e);
	}
	notify(e, t, n) {
		if (this.subscriptions.size) for (let r of this.subscriptions) r(e, t, n);
	}
	clear() {
		this.subscriptions.clear();
	}
};
function td(e) {
	return !Number.isNaN(Number.parseFloat(e));
}
var nd = class {
	constructor(e) {
		h(this, "current", void 0), h(this, "prev", void 0), h(this, "timeDelta", 0), h(this, "lastUpdated", 0), h(this, "updateSubscribers", new ed()), h(this, "stopAnimation", void 0), h(this, "canTrackVelocity", !1), h(this, "updateAndNotify", (e) => {
			this.prev = this.current, this.current = e;
			let { delta: t, timestamp: n } = Ac();
			this.lastUpdated !== n && (this.timeDelta = t, this.lastUpdated = n), Tc.postRender(this.scheduleVelocityCheck), this.updateSubscribers.notify(this.current);
		}), h(this, "scheduleVelocityCheck", () => Tc.postRender(this.velocityCheck)), h(this, "velocityCheck", ({ timestamp: e }) => {
			this.canTrackVelocity || (this.canTrackVelocity = td(this.current)), e !== this.lastUpdated && (this.prev = this.current);
		}), this.prev = this.current = e, this.canTrackVelocity = td(this.current);
	}
	onChange(e) {
		return this.updateSubscribers.add(e);
	}
	clearListeners() {
		this.updateSubscribers.clear();
	}
	set(e) {
		this.updateAndNotify(e);
	}
	get() {
		return this.current;
	}
	getPrevious() {
		return this.prev;
	}
	getVelocity() {
		return this.canTrackVelocity ? Fu(Number.parseFloat(this.current) - Number.parseFloat(this.prev), this.timeDelta) : 0;
	}
	start(e) {
		return this.stop(), new Promise((t) => {
			let { stop: n } = e(t);
			this.stopAnimation = n;
		}).then(() => this.clearAnimation());
	}
	stop() {
		this.stopAnimation && this.stopAnimation(), this.clearAnimation();
	}
	isAnimating() {
		return !!this.stopAnimation;
	}
	clearAnimation() {
		this.stopAnimation = null;
	}
	destroy() {
		this.updateSubscribers.clear(), this.stop();
	}
};
function rd(e) {
	return new nd(e);
}
var { isArray: id } = Array;
function ad() {
	let e = _({}), t = (t) => {
		let n = (t) => {
			e.value[t] && (e.value[t].stop(), e.value[t].destroy(), delete e.value[t]);
		};
		t ? id(t) ? t.forEach(n) : n(t) : Object.keys(e.value).forEach(n);
	};
	return oc(t), {
		motionValues: e,
		get: (t, n, r) => {
			if (e.value[t]) return e.value[t];
			let i = rd(n);
			return i.onChange((e) => r[t] = e), e.value[t] = i, i;
		},
		stop: t
	};
}
function od(e) {
	return Array.isArray(e);
}
function sd() {
	return {
		type: "spring",
		stiffness: 500,
		damping: 25,
		restDelta: .5,
		restSpeed: 10
	};
}
function cd(e) {
	return {
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 2 * Math.sqrt(550) : 30,
		restDelta: .01,
		restSpeed: 10
	};
}
function ld(e) {
	return {
		type: "spring",
		stiffness: 550,
		damping: e === 0 ? 100 : 30,
		restDelta: .01,
		restSpeed: 10
	};
}
function ud() {
	return {
		type: "keyframes",
		ease: "linear",
		duration: 300
	};
}
function dd(e) {
	return {
		type: "keyframes",
		duration: 800,
		values: e
	};
}
var fd = {
	default: ld,
	x: sd,
	y: sd,
	z: sd,
	rotate: sd,
	rotateX: sd,
	rotateY: sd,
	rotateZ: sd,
	scaleX: cd,
	scaleY: cd,
	scale: cd,
	backgroundColor: ud,
	color: ud,
	opacity: ud
};
function pd(e, t) {
	let n;
	return n = od(t) ? dd : fd[e] || fd.default, T({ to: t }, n(t));
}
var md = T(T({}, nl), {}, { transform: Math.round }), hd = {
	color: $,
	backgroundColor: $,
	outlineColor: $,
	fill: $,
	stroke: $,
	borderColor: $,
	borderTopColor: $,
	borderRightColor: $,
	borderBottomColor: $,
	borderLeftColor: $,
	borderWidth: Q,
	borderTopWidth: Q,
	borderRightWidth: Q,
	borderBottomWidth: Q,
	borderLeftWidth: Q,
	borderRadius: Q,
	radius: Q,
	borderTopLeftRadius: Q,
	borderTopRightRadius: Q,
	borderBottomRightRadius: Q,
	borderBottomLeftRadius: Q,
	width: Q,
	maxWidth: Q,
	height: Q,
	maxHeight: Q,
	size: Q,
	top: Q,
	right: Q,
	bottom: Q,
	left: Q,
	padding: Q,
	paddingTop: Q,
	paddingRight: Q,
	paddingBottom: Q,
	paddingLeft: Q,
	margin: Q,
	marginTop: Q,
	marginRight: Q,
	marginBottom: Q,
	marginLeft: Q,
	rotate: ol,
	rotateX: ol,
	rotateY: ol,
	rotateZ: ol,
	scale: il,
	scaleX: il,
	scaleY: il,
	scaleZ: il,
	skew: ol,
	skewX: ol,
	skewY: ol,
	distance: Q,
	translateX: Q,
	translateY: Q,
	translateZ: Q,
	x: Q,
	y: Q,
	z: Q,
	perspective: Q,
	transformPerspective: Q,
	opacity: rl,
	originX: cl,
	originY: cl,
	originZ: Q,
	zIndex: md,
	filter: kl,
	WebkitFilter: kl,
	fillOpacity: rl,
	strokeOpacity: rl,
	numOctaves: md
}, gd = (e) => hd[e];
function _d(e, t) {
	return t && typeof e == "number" && t.transform ? t.transform(e) : e;
}
function vd(e, t) {
	let n = gd(e);
	return n !== kl && (n = Tl), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
var yd = {
	linear: ou,
	easeIn: su,
	easeInOut: lu,
	easeOut: cu,
	circIn: uu,
	circInOut: fu,
	circOut: du,
	backIn: pu,
	backInOut: hu,
	backOut: mu,
	anticipate: gu,
	bounceIn: xu,
	bounceInOut: Su,
	bounceOut: bu
};
function bd(e) {
	if (Array.isArray(e)) {
		let [t, n, r, i] = e;
		return Xu(t, n, r, i);
	}
	return typeof e == "string" ? yd[e] : e;
}
function xd(e) {
	return Array.isArray(e) && typeof e[0] != "number";
}
function Sd(e, t) {
	return e !== "zIndex" && !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && Tl.test(t) && !t.startsWith("url("));
}
function Cd(e) {
	return Array.isArray(e.to) && e.to[0] === null && (e.to = [...e.to], e.to[0] = e.from), e;
}
function wd(e) {
	let { ease: t, times: n, delay: r } = e, i = f(e, Zu), a = T({}, i);
	return n && (a.offset = n), t && (a.ease = xd(t) ? t.map(bd) : bd(t)), r && (a.elapsed = -r), a;
}
function Td(e, t, n) {
	return Array.isArray(t.to) && (e.duration || (e.duration = 800)), Cd(t), Ed(e) || (e = T(T({}, e), pd(n, t.to))), T(T({}, t), wd(e));
}
function Ed(e) {
	let { delay: t, repeat: n, repeatType: r, repeatDelay: i, from: a } = e, o = f(e, Qu);
	return !!Object.keys(o).length;
}
function Dd(e, t) {
	return e[t] || e.default || e;
}
function Od(e, t, n, r, i) {
	let a = Dd(r, e), o = a.from === null || a.from === void 0 ? t.get() : a.from, s = Sd(e, n);
	o === "none" && s && typeof n == "string" && (o = vd(e, n));
	let c = Sd(e, o);
	function l(s) {
		let c = {
			from: o,
			to: n,
			velocity: r.velocity ? r.velocity : t.getVelocity(),
			onUpdate: (e) => t.set(e)
		};
		return a.type === "inertia" || a.type === "decay" ? Iu(T(T({}, c), a)) : Pu(T(T({}, Td(a, c, e)), {}, {
			onUpdate: (e) => {
				c.onUpdate(e), a.onUpdate && a.onUpdate(e);
			},
			onComplete: () => {
				i && i(), s && s();
			}
		}));
	}
	function u(e) {
		return t.set(n), i && i(), e && e(), { stop: () => {} };
	}
	return !c || !s || a.type === !1 ? u : l;
}
function kd() {
	let { motionValues: e, stop: t, get: n } = ad();
	return {
		motionValues: e,
		stop: t,
		push: (e, t, r, i = {}, a) => {
			let o = r[e], s = n(e, o, r);
			if (i && i.immediate) {
				s.set(t);
				return;
			}
			let c = Od(e, s, t, i, a);
			s.start(c);
		}
	};
}
function Ad(e, t = {}, { motionValues: n, push: r, stop: i } = kd()) {
	let a = m(t), s = _(!1);
	o(n, (e) => {
		s.value = Object.values(e).filter((e) => e.isAnimating()).length > 0;
	}, {
		immediate: !0,
		deep: !0
	});
	let c = (e) => {
		if (!a || !a[e]) throw Error(`The variant ${e} does not exist.`);
		return a[e];
	}, l = (t) => {
		typeof t == "string" && (t = c(t));
		let n = Object.entries(t).map(([n, i]) => {
			if (n !== "transition") return new Promise((a) => r(n, i, e, t.transition || pd(n, t[n]), a));
		}).filter(Boolean);
		function i() {
			return a.apply(this, arguments);
		}
		function a() {
			return a = O(function* () {
				var e, r;
				yield Promise.all(n), (e = t.transition) == null || (r = e.onComplete) == null || r.call(e);
			}), a.apply(this, arguments);
		}
		return Promise.all([i()]);
	};
	return {
		isAnimating: s,
		apply: l,
		set: (t) => {
			let n = nc(t) ? t : c(t);
			Object.entries(n).forEach(([t, n]) => {
				t !== "transition" && r(t, n, e, { immediate: !0 });
			});
		},
		leave: function() {
			var e = O(function* (e) {
				let t;
				if (a && (a.leave && (t = a.leave), !a.leave && a.initial && (t = a.initial)), !t) {
					e();
					return;
				}
				yield l(t), e();
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		}(),
		stop: i
	};
}
var jd = typeof window < "u", Md = () => jd && (window.onpointerdown === null || void 0), Nd = () => jd && (window.ontouchstart === null || void 0), Pd = () => jd && (window.onmousedown === null || void 0);
function Fd({ target: e, state: t, variants: n, apply: r }) {
	let i = m(n), a = _(!1), s = _(!1), c = _(!1), l = M(() => {
		let e = [...Object.keys(t.value || {})];
		return i ? (i.hovered && (e = [...e, ...Object.keys(i.hovered)]), i.tapped && (e = [...e, ...Object.keys(i.tapped)]), i.focused && (e = [...e, ...Object.keys(i.focused)]), e) : e;
	}), u = M(() => {
		let e = {};
		Object.assign(e, t.value), a.value && i.hovered && Object.assign(e, i.hovered), s.value && i.tapped && Object.assign(e, i.tapped), c.value && i.focused && Object.assign(e, i.focused);
		for (let t in e) l.value.includes(t) || delete e[t];
		return e;
	});
	i.hovered && (uc(e, "mouseenter", () => a.value = !0), uc(e, "mouseleave", () => {
		a.value = !1, s.value = !1;
	})), i.tapped && (Pd() && (uc(e, "mousedown", () => s.value = !0), uc(e, "mouseup", () => s.value = !1)), Md() && (uc(e, "pointerdown", () => s.value = !0), uc(e, "pointerup", () => s.value = !1)), Nd() && (uc(e, "touchstart", () => s.value = !0), uc(e, "touchend", () => s.value = !1))), i.focused && (uc(e, "focus", () => c.value = !0), uc(e, "blur", () => c.value = !1)), o([
		a,
		s,
		c
	], () => {
		r(u.value);
	});
}
function Id({ set: e, target: t, variants: n, variant: r }) {
	let i = m(n);
	o(() => t, () => {
		i && (i.initial && (e("initial"), r.value = "initial"), i.enter && (r.value = "enter"));
	}, {
		immediate: !0,
		flush: "pre"
	});
}
function Ld({ state: e, apply: t }) {
	o(e, (e) => {
		e && t(e);
	}, { immediate: !0 });
}
function Rd({ target: e, variants: t, variant: n }) {
	let r = m(t);
	r && (r.visible || r.visibleOnce) && pc(e, ([{ isIntersecting: e }]) => {
		r.visible ? n.value = e ? "visible" : "initial" : r.visibleOnce && (e && n.value !== "visibleOnce" ? n.value = "visibleOnce" : n.value || (n.value = "initial"));
	});
}
function zd(e, t = {
	syncVariants: !0,
	lifeCycleHooks: !0,
	visibilityHooks: !0,
	eventListeners: !0
}) {
	t.lifeCycleHooks && Id(e), t.syncVariants && Ld(e), t.visibilityHooks && Rd(e), t.eventListeners && Fd(e);
}
function Bd(e = {}) {
	let t = A(T({}, e)), n = _({});
	return o(t, () => {
		let e = {};
		for (let [n, r] of Object.entries(t)) e[n] = _d(r, gd(n));
		n.value = e;
	}, {
		immediate: !0,
		deep: !0
	}), {
		state: t,
		style: n
	};
}
function Vd(e, t) {
	o(() => lc(e), (e) => {
		e && t(e);
	}, { immediate: !0 });
}
var Hd = {
	x: "translateX",
	y: "translateY",
	z: "translateZ"
};
function Ud(e = {}, t = !0) {
	let n = A(T({}, e)), r = _("");
	return o(n, (e) => {
		let n = "", i = !1;
		if (t && (e.x || e.y || e.z)) {
			let t = [
				e.x || 0,
				e.y || 0,
				e.z || 0
			].map((e) => _d(e, Q)).join(",");
			n += `translate3d(${t}) `, i = !0;
		}
		for (let [r, i] of Object.entries(e)) {
			if (t && (r === "x" || r === "y" || r === "z")) continue;
			let e = _d(i, gd(r));
			n += `${Hd[r] || r}(${e}) `;
		}
		t && !i && (n += "translateZ(0px) "), r.value = n.trim();
	}, {
		immediate: !0,
		deep: !0
	}), {
		state: n,
		transform: r
	};
}
var Wd = [
	"",
	"X",
	"Y",
	"Z"
], Gd = [
	"perspective",
	"translate",
	"scale",
	"rotate",
	"skew"
], Kd = [
	"transformPerspective",
	"x",
	"y",
	"z"
];
Gd.forEach((e) => {
	Wd.forEach((t) => {
		let n = e + t;
		Kd.push(n);
	});
});
var qd = new Set(Kd);
function Jd(e) {
	return qd.has(e);
}
var Yd = /* @__PURE__ */ new Set([
	"originX",
	"originY",
	"originZ"
]);
function Xd(e) {
	return Yd.has(e);
}
function Zd(e) {
	let t = {}, n = {};
	return Object.entries(e).forEach(([e, r]) => {
		Jd(e) || Xd(e) ? t[e] = r : n[e] = r;
	}), {
		transform: t,
		style: n
	};
}
function Qd(e) {
	let { transform: t, style: n } = Zd(e), { transform: r } = Ud(t), { style: i } = Bd(n);
	return r.value && (i.value.transform = r.value), i.value;
}
function $d(e, t) {
	let n, r, { state: i, style: a } = Bd();
	return Vd(e, (e) => {
		r = e;
		for (let t of Object.keys(hd)) e.style[t] === null || e.style[t] === "" || Jd(t) || Xd(t) || (i[t] = e.style[t]);
		n && Object.entries(n).forEach(([t, n]) => e.style[t] = n), t && t(i);
	}), o(a, (e) => {
		if (!r) {
			n = e;
			return;
		}
		for (let t in e) r.style[t] = e[t];
	}, { immediate: !0 }), { style: i };
}
function ef(e) {
	let t = e.trim().split(/\) |\)/);
	if (t.length === 1) return {};
	let n = (e) => e.endsWith("px") || e.endsWith("deg") ? Number.parseFloat(e) : Number.isNaN(Number(e)) ? Number(e) : e;
	return t.reduce((e, t) => {
		if (!t) return e;
		let [r, i] = t.split("("), a = i.split(",").map((e) => n(e.endsWith(")") ? e.replace(")", "") : e.trim())), o = a.length === 1 ? a[0] : a;
		return T(T({}, e), {}, { [r]: o });
	}, {});
}
function tf(e, t) {
	Object.entries(ef(t)).forEach(([t, n]) => {
		let r = [
			"x",
			"y",
			"z"
		];
		if (t === "translate3d") {
			if (n === 0) {
				r.forEach((t) => e[t] = 0);
				return;
			}
			n.forEach((t, n) => e[r[n]] = t);
			return;
		}
		if (n = Number.parseFloat(`${n}`), t === "translateX") {
			e.x = n;
			return;
		}
		if (t === "translateY") {
			e.y = n;
			return;
		}
		if (t === "translateZ") {
			e.z = n;
			return;
		}
		e[t] = n;
	});
}
function nf(e, t) {
	let n, r, { state: i, transform: a } = Ud();
	return Vd(e, (e) => {
		r = e, e.style.transform && tf(i, e.style.transform), n && (e.style.transform = n), t && t(i);
	}), o(a, (e) => {
		if (!r) {
			n = e;
			return;
		}
		r.style.transform = e;
	}, { immediate: !0 }), { transform: i };
}
function rf(e) {
	return Object.entries(e);
}
function af(e, t) {
	let n = A({}), r = (e) => Object.entries(e).forEach(([e, t]) => n[e] = t), { style: i } = $d(e, r), { transform: a } = nf(e, r);
	return o(n, (e) => {
		rf(e).forEach(([e, t]) => {
			let n = Jd(e) ? a : i;
			n[e] && n[e] === t || (n[e] = t);
		});
	}, {
		immediate: !0,
		deep: !0
	}), Vd(e, () => t && r(t)), {
		motionProperties: n,
		style: i,
		transform: a
	};
}
function of(e = {}) {
	let t = m(e), n = _();
	return {
		state: M(() => {
			if (n.value) return t[n.value];
		}),
		variant: n
	};
}
function sf(e, t = {}, n) {
	let { motionProperties: r } = af(e), { variant: i, state: a } = of(t), o = Ad(r, t), s = T({
		target: e,
		variant: i,
		variants: t,
		state: a,
		motionProperties: r
	}, o);
	return zd(s, n), s;
}
var cf = ["delay", "duration"], lf = [
	"initial",
	"enter",
	"leave",
	"visible",
	"visible-once",
	"visibleOnce",
	"hovered",
	"tapped",
	"focused",
	...cf
];
function uf(e) {
	return cf.includes(e);
}
function df(e, t) {
	let n = e.props ? e.props : e.data && e.data.attrs ? e.data.attrs : {};
	if (n) {
		n.variants && nc(n.variants) && (t.value = T(T({}, t.value), n.variants));
		for (let e of lf) if (!(!n || !n[e])) {
			if (uf(e) && typeof n[e] == "number") {
				for (let r of [
					"enter",
					"visible",
					"visibleOnce"
				]) {
					let i = t.value[r];
					i != null && (i.transition != null || (i.transition = {}), i.transition[e] = n[e]);
				}
				continue;
			}
			if (nc(n[e])) {
				let r = n[e];
				e === "visible-once" && (e = "visibleOnce"), t.value[e] = r;
			}
		}
	}
}
function ff(e, t = !1) {
	return {
		created: (n, r, i) => {
			let a = r.value && typeof r.value == "string" ? r.value : i.key;
			a && $u[a] && $u[a].stop();
			let o = t ? structuredClone(v(e) || {}) : e || {}, s = _(o);
			typeof r.value == "object" && (s.value = r.value), df(i, s);
			let c = sf(n, s, {
				eventListeners: !0,
				lifeCycleHooks: !0,
				syncVariants: !0,
				visibilityHooks: !1
			});
			n.motionInstance = c, a && ($u[a] = c);
		},
		mounted: (e, t, n) => {
			e.motionInstance && Rd(e.motionInstance);
		},
		getSSRProps(t, n) {
			let { initial: r } = t.value || n && (n == null ? void 0 : n.props) || {};
			r = m(r);
			let i = Zs({}, (e == null ? void 0 : e.initial) || {}, r || {});
			if (!(!i || Object.keys(i).length === 0)) return { style: Qd(i) };
		}
	};
}
var pf = {
	__proto__: null,
	fade: {
		initial: { opacity: 0 },
		enter: { opacity: 1 }
	},
	fadeVisible: {
		initial: { opacity: 0 },
		visible: { opacity: 1 }
	},
	fadeVisibleOnce: {
		initial: { opacity: 0 },
		visibleOnce: { opacity: 1 }
	},
	pop: {
		initial: {
			scale: 0,
			opacity: 0
		},
		enter: {
			scale: 1,
			opacity: 1
		}
	},
	popVisible: {
		initial: {
			scale: 0,
			opacity: 0
		},
		visible: {
			scale: 1,
			opacity: 1
		}
	},
	popVisibleOnce: {
		initial: {
			scale: 0,
			opacity: 0
		},
		visibleOnce: {
			scale: 1,
			opacity: 1
		}
	},
	rollBottom: {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		enter: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollLeft: {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		enter: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollRight: {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		enter: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollTop: {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		enter: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleBottom: {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		visible: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleLeft: {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		visible: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceBottom: {
		initial: {
			y: 100,
			rotate: 90,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceLeft: {
		initial: {
			x: -100,
			rotate: 90,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceRight: {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleOnceTop: {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleRight: {
		initial: {
			x: 100,
			rotate: -90,
			opacity: 0
		},
		visible: {
			x: 0,
			rotate: 0,
			opacity: 1
		}
	},
	rollVisibleTop: {
		initial: {
			y: -100,
			rotate: -90,
			opacity: 0
		},
		visible: {
			y: 0,
			rotate: 0,
			opacity: 1
		}
	},
	slideBottom: {
		initial: {
			y: 100,
			opacity: 0
		},
		enter: {
			y: 0,
			opacity: 1
		}
	},
	slideLeft: {
		initial: {
			x: -100,
			opacity: 0
		},
		enter: {
			x: 0,
			opacity: 1
		}
	},
	slideRight: {
		initial: {
			x: 100,
			opacity: 0
		},
		enter: {
			x: 0,
			opacity: 1
		}
	},
	slideTop: {
		initial: {
			y: -100,
			opacity: 0
		},
		enter: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleBottom: {
		initial: {
			y: 100,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleLeft: {
		initial: {
			x: -100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleOnceBottom: {
		initial: {
			y: 100,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleOnceLeft: {
		initial: {
			x: -100,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleOnceRight: {
		initial: {
			x: 100,
			opacity: 0
		},
		visibleOnce: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleOnceTop: {
		initial: {
			y: -100,
			opacity: 0
		},
		visibleOnce: {
			y: 0,
			opacity: 1
		}
	},
	slideVisibleRight: {
		initial: {
			x: 100,
			opacity: 0
		},
		visible: {
			x: 0,
			opacity: 1
		}
	},
	slideVisibleTop: {
		initial: {
			y: -100,
			opacity: 0
		},
		visible: {
			y: 0,
			opacity: 1
		}
	}
}, mf = Symbol(""), hf = {
	preset: {
		type: String,
		required: !1
	},
	instance: {
		type: Object,
		required: !1
	},
	variants: {
		type: Object,
		required: !1
	},
	initial: {
		type: Object,
		required: !1
	},
	enter: {
		type: Object,
		required: !1
	},
	leave: {
		type: Object,
		required: !1
	},
	visible: {
		type: Object,
		required: !1
	},
	visibleOnce: {
		type: Object,
		required: !1
	},
	hovered: {
		type: Object,
		required: !1
	},
	tapped: {
		type: Object,
		required: !1
	},
	focused: {
		type: Object,
		required: !1
	},
	delay: {
		type: [Number, String],
		required: !1
	},
	duration: {
		type: [Number, String],
		required: !1
	}
};
function gf(e) {
	return Object.prototype.toString.call(e) === "[object Object]";
}
function _f(e) {
	if (Array.isArray(e)) return e.map(_f);
	if (gf(e)) {
		let t = {};
		for (let n in e) t[n] = _f(e[n]);
		return t;
	}
	return e;
}
function vf(e) {
	let t = A({}), n = i(mf, {}), r = M(() => e.preset == null ? {} : n != null && e.preset in n ? structuredClone(v(n)[e.preset]) : e.preset in pf ? structuredClone(pf[e.preset]) : {}), a = M(() => ({
		initial: e.initial,
		enter: e.enter,
		leave: e.leave,
		visible: e.visible,
		visibleOnce: e.visibleOnce,
		hovered: e.hovered,
		tapped: e.tapped,
		focused: e.focused
	}));
	function o(e, t) {
		for (let n of ["delay", "duration"]) {
			if (t[n] == null) continue;
			let r = Number.parseInt(t[n]);
			for (let t of [
				"enter",
				"visible",
				"visibleOnce"
			]) {
				let i = e[t];
				i != null && (i.transition != null || (i.transition = {}), i.transition[n] = r);
			}
		}
		return e;
	}
	let s = M(() => {
		let t = Zs({}, a.value, r.value, e.variants || {});
		return o(T({}, t), e);
	});
	function c(e, n, r) {
		var i;
		e.props != null || (e.props = {}), (i = e.props).style != null || (i.style = {}), e.props.style = T(T({}, e.props.style), r);
		let a = o(_f(s.value), e.props);
		return e.props.onVnodeMounted = ({ el: e }) => {
			t[n] = sf(e, a);
		}, e.props.onVnodeUpdated = ({ el: e }) => {
			let r = Qd(t[n].state);
			for (let [t, n] of Object.entries(r)) e.style[t] = n;
		}, e;
	}
	return {
		motionConfig: s,
		setNodeInstance: c
	};
}
a({
	name: "Motion",
	props: T(T({}, hf), {}, { is: {
		type: [String, Object],
		default: "div"
	} }),
	setup(e) {
		let t = l(), { motionConfig: n, setNodeInstance: r } = vf(e);
		return () => {
			let i = Qd(n.value.initial || {}), a = x(e.is, void 0, t);
			return r(a, 0, i), a;
		};
	}
}), a({
	name: "MotionGroup",
	props: T(T({}, hf), {}, { is: {
		type: [String, Object],
		required: !1
	} }),
	setup(e) {
		let t = l(), { motionConfig: n, setNodeInstance: r } = vf(e);
		return () => {
			var i;
			let a = Qd(n.value.initial || {}), o = ((i = t.default) == null ? void 0 : i.call(t)) || [];
			for (let e = 0; e < o.length; e++) {
				let t = o[e];
				t.type === u && Array.isArray(t.children) ? t.children.forEach(function e(t, n) {
					if (t != null) {
						if (Array.isArray(t)) {
							e(t, n);
							return;
						}
						typeof t == "object" && r(t, n, a);
					}
				}) : r(t, e, a);
			}
			return e.is ? x(e.is, void 0, o) : o;
		};
	}
});
//#endregion
//#region node_modules/@vueuse/math/dist/index.js
function yf(...e) {
	return M(() => e.every((e) => N(e)));
}
var bf = yf;
function xf(e) {
	return M(() => !N(e));
}
var Sf = xf;
function Cf(...e) {
	return M(() => e.some((e) => N(e)));
}
var wf = Cf;
//#endregion
export { q as A, Ce as B, Gs as C, Ko as D, Lo as E, Ho as F, Wo as I, uo as L, yo as M, wo as N, Jo as O, Uo as P, Ea as R, Ws as S, qs as T, fs as _, ps as a, xs as b, ls as c, js as d, Ms as f, Ls as g, Fs as h, ff as i, Po as j, vo as k, ms as l, Ps as m, Sf as n, ns as o, Z as p, wf as r, cs as s, bf as t, ks as u, zs as v, Ks as w, Us as x, Bs as y, we as z };
