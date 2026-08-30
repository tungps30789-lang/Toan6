import { $ as e, L as t, M as n, N as r, R as i, at as a, c as o, ft as s, k as c, o as l, st as u, yt as d, z as f } from "./modules/shiki-BdJWbgyq.js";
//#region node_modules/unhead/dist/shared/unhead.CGPOfp5O.mjs
var p = /* @__PURE__ */ new Set([
	"link",
	"style",
	"script",
	"noscript"
]), m = /* @__PURE__ */ new Set([
	"title",
	"titleTemplate",
	"script",
	"style",
	"noscript"
]), h = /* @__PURE__ */ new Set([
	"base",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]), g = /* @__PURE__ */ new Set([
	"title",
	"base",
	"htmlAttrs",
	"bodyAttrs",
	"meta",
	"link",
	"style",
	"script",
	"noscript"
]), _ = /* @__PURE__ */ new Set([
	"base",
	"title",
	"titleTemplate",
	"bodyAttrs",
	"htmlAttrs",
	"templateParams"
]), v = /* @__PURE__ */ new Set([
	"key",
	"tagPosition",
	"tagPriority",
	"tagDuplicateStrategy",
	"innerHTML",
	"textContent",
	"processTemplateParams"
]), y = /* @__PURE__ */ new Set([
	"templateParams",
	"htmlAttrs",
	"bodyAttrs"
]), b = /* @__PURE__ */ new Set([
	"theme-color",
	"google-site-verification",
	"author",
	"og:locale:alternate",
	"og:image",
	"og:video",
	"og:audio",
	"article:author",
	"article:tag",
	"book:author",
	"book:tag",
	"twitter:image"
]), x = {
	critical: -8,
	high: -1,
	low: 2
}, S = (e) => typeof e == "number" ? Number.isFinite(e) : e;
// @__NO_SIDE_EFFECTS__
function C(e) {
	return e === "__proto__" || e === "constructor" || e === "prototype";
}
//#endregion
//#region node_modules/hookable/dist/index.mjs
function w(e, t, n, r) {
	for (let i = n; i < e.length; i += 1) try {
		let n = r ? r.run(() => e[i](...t)) : e[i](...t);
		if (n && typeof n.then == "function") return Promise.resolve(n).then(() => w(e, t, i + 1, r));
	} catch (e) {
		return Promise.reject(e);
	}
}
var T = class {
	constructor() {
		o(this, "_hooks", void 0), this._hooks = {};
	}
	hook(e, t) {
		return !e || typeof t != "function" ? () => {} : (this._hooks[e] = this._hooks[e] || [], this._hooks[e].push(t), () => {
			t && (this.removeHook(e, t), t = void 0);
		});
	}
	removeHook(e, t) {
		let n = this._hooks[e];
		if (n) {
			let r = n.indexOf(t);
			r !== -1 && n.splice(r, 1), n.length === 0 && (this._hooks[e] = void 0);
		}
	}
	callHook(e, ...t) {
		let n = this._hooks[e];
		if (!(!n || n.length === 0)) return w(n, t, 0);
	}
};
//#endregion
//#region node_modules/unhead/dist/shared/unhead.Bm4Y6XQI.mjs
function E(e) {
	let t = new T();
	for (let n in e || {}) t.hook(n, e[n]);
	return t;
}
function D(e, t, n) {
	var r, i;
	let a = (r = e.hooks) == null || (r = r._hooks) == null ? void 0 : r[t];
	if (a != null && a.length) return (i = e.hooks) == null ? void 0 : i.callHook(t, n);
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.-hZVKou0.mjs
var O = /^(?:viewport|description|keywords|robots)$/, k = [
	"name",
	"property",
	"http-equiv"
];
function A(e) {
	let t = e.indexOf(":");
	if (t === -1) return !1;
	let n = e.slice(t + 1);
	return b.has(n) || n.startsWith("og:image:") || n.startsWith("og:video:") || n.startsWith("og:audio:") || n.startsWith("twitter:image:");
}
function j(e) {
	let { props: t, tag: n, key: r } = e;
	if (_.has(n)) return n;
	if (n === "link") {
		if (t.rel === "canonical") return "canonical";
		if (t.rel === "alternate" && t.hreflang) return `alternate:${t.hreflang}`;
	}
	if (t.charset) return "charset";
	if (n === "meta") for (let e of k) {
		let n = t[e];
		if (n !== void 0) return `meta:${n}${(typeof n != "string" || !n.includes(":")) && !O.test(n) && r ? `:key:${r}` : ""}`;
	}
	return r ? `${n}:key:${r}` : t.id ? `${n}:id:${t.id}` : n === "link" && t.rel && t.href ? `link:${t.rel}:${t.href}` : m.has(n) && (e.textContent || e.innerHTML) ? `${n}:content:${e.textContent || e.innerHTML}` : void 0;
}
function M(e) {
	let t = e._h || e._d || e.textContent || e.innerHTML;
	if (t) return t;
	let n = Object.keys(e.props).sort(), r = `${e.tag}:`, i = "";
	for (let t of n) r += `${i}${t}:${String(e.props[t])}`, i = ",";
	return r;
}
function N(e, t, n) {
	if (n === "_resolver") return e;
	typeof e == "function" && (!n || n !== "titleTemplate" && !n.startsWith("on")) && (e = e());
	let r = t ? t(n, e) : e;
	if (Array.isArray(r)) {
		let e;
		for (let n = 0; n < r.length; n++) {
			let i = N(r[n], t);
			e ? e[n] = i : i !== r[n] && (e = r.slice(0, n), e[n] = i);
		}
		return e || r;
	}
	if ((r == null ? void 0 : r.constructor) === Object) {
		let e;
		for (let n in r) {
			let i = /* @__PURE__ */ C(n), a = i ? void 0 : N(r[n], t, n);
			if (!e && (i || a !== r[n])) {
				e = {};
				for (let t in r) {
					if (t === n) break;
					e[t] = r[t];
				}
			}
			e && !i && (e[n] = a);
		}
		return e || r;
	}
	return r;
}
var ee = /[\s"'<>/=\x00-\x1F\x7F]/;
function P(e, t) {
	let n = e === "style", r = n ? /* @__PURE__ */ new Map() : /* @__PURE__ */ new Set(), i = (e) => {
		if (e) {
			if (n) {
				let t = e.indexOf(":");
				t > 0 && r.set(e.slice(0, t).trim(), e.slice(t + 1).trim());
			} else e.split(" ").forEach((e) => e && r.add(e));
		}
	};
	if (typeof t == "string") (n ? t.split(";") : [t]).forEach(i);
	else if (Array.isArray(t)) t.forEach(i);
	else if (t && typeof t == "object") for (let e in t) {
		let a = t[e];
		a && a !== "false" && (n ? r.set(e.trim(), String(a)) : i(e));
	}
	return r;
}
function F(e, t) {
	if (e.props = e.props || {}, !t) return e;
	if (e.tag === "templateParams") return e.props = t, e;
	let n = h.has(e.tag) || e.tag === "htmlAttrs" || e.tag === "bodyAttrs";
	for (let r in t) {
		if (/* @__PURE__ */ C(r)) continue;
		let i = r.startsWith("data-"), a = n && !v.has(r), o = a && !i ? r.toLowerCase() : r;
		if (a && (!o || ee.test(o))) continue;
		let s = t[r];
		if (s === null) e.props[o] = null;
		else if (r === "class" || r === "style") e.props[r] = P(r, s);
		else if (v.has(r)) {
			if ((r === "textContent" || r === "innerHTML") && typeof s == "object") {
				let n = t.type || "application/json";
				(n.endsWith("json") || n === "speculationrules" || n === "importmap") && (e.props.type = n, e[r] = JSON.stringify(s));
			} else e[r] = s;
		} else if (s !== void 0) {
			let t = String(s), n = e.tag === "meta" && o === "content";
			e.props[o] = t === "true" || t === "" ? i || n ? t : !0 : !s && i && t === "false" ? "false" : s;
		}
	}
	return e;
}
function I(e, t) {
	let n;
	return t.length && (n = (e, n) => {
		for (let r = 0; r < t.length; r++) n = t[r](e, n);
		return n;
	}, e = n(void 0, e)), N(e, n);
}
function L(e, t) {
	let n = F({
		tag: e,
		props: {}
	}, typeof t == "object" && typeof t != "function" ? t : { [e === "script" || e === "noscript" || e === "style" ? "innerHTML" : "textContent"]: t });
	if (n.key && p.has(n.tag) && (n.props["data-hid"] = n._h = n.key), n.tag === "script" && typeof n.innerHTML == "object" && (n.innerHTML = JSON.stringify(n.innerHTML), n.props.type = n.props.type || "application/json"), Array.isArray(n.props.content)) {
		let e = [];
		for (let t of n.props.content) e.push(l(l({}, n), {}, { props: l(l({}, n.props), {}, { content: t }) }));
		return e;
	}
	return n;
}
function R(e, t) {
	if (Array.isArray(t)) for (let n of t) e.push(n);
	else e.push(t);
}
function z(e, t) {
	if (!e) return [];
	typeof e == "function" && (e = e()), e = I(e, t);
	let n = [];
	for (let t in e) {
		let r = e[t];
		if (r !== void 0) {
			if (Array.isArray(r)) for (let e of r) R(n, L(t, e));
			else R(n, L(t, r));
		}
	}
	return n;
}
var B = /</g, V = /<\/script/g, H = (e, t) => e._w === t._w ? e._p - t._p : e._w - t._w, U = () => 100;
function W(e) {
	for (let t in e) return !1;
	return !0;
}
var G = /^tags:|:render/;
function K(e, t) {
	var n, r;
	let i = (((n = t["entries:resolve"]) == null ? void 0 : n.length) || 0) + (((r = t["entries:normalize"]) == null ? void 0 : r.length) || 0);
	if (e._h !== i) {
		e._h = i;
		for (let t of e.entries.values()) delete t._tags;
	}
}
function q(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t], r = l({}, n.props);
		r.class instanceof Set && (r.class = new Set(r.class)), r.style instanceof Map && (r.style = new Map(r.style)), e[t] = l(l({}, n), {}, { props: r });
	}
}
function J(e, t) {
	let n = e.tags, r = 0;
	for (let t of e.tagMap.values()) if (Array.isArray(t)) for (let e of t) n[r++] = e;
	else n[r++] = t;
	n.length = r, t && n.sort(H);
}
function Y(e) {
	let t = !1;
	for (let n of e.tags.sort(H)) {
		let r = n._d || M(n);
		if (!r) continue;
		let i = e.tagMap.get(r);
		if (!i) {
			e.tagMap.set(r, n);
			continue;
		}
		if ((n.tagDuplicateStrategy || (y.has(n.tag) ? "merge" : null) || (n.key && n.key === i.key ? "merge" : null)) === "merge") {
			let t = l({}, i.props);
			for (let e in n.props) t[e] = e === "style" ? new Map([...i.props.style || /* @__PURE__ */ new Map(), ...n.props[e]]) : e === "class" ? /* @__PURE__ */ new Set([...i.props.class || [], ...n.props[e]]) : n.props[e];
			e.tagMap.set(r, l(l({}, n), {}, { props: t }));
		} else n._p >> 10 == i._p >> 10 && n.tag === "meta" && A(r) ? (e.tagMap.set(r, Object.assign([...Array.isArray(i) ? i : [i], n], n)), t = !0) : (n._w === i._w ? n._p > i._p : n._w < i._w) && e.tagMap.set(r, n);
	}
	return t;
}
function X(e, t) {
	let n = e.tagMap.get("title"), r = e.tagMap.get("titleTemplate");
	if (t._title = n == null ? void 0 : n.textContent, !r) return;
	let i = r.textContent;
	if (t._titleTemplate = i, !i) return;
	let a = typeof i == "function" ? i(n == null ? void 0 : n.textContent) : i;
	typeof a == "string" && !t.plugins.has("template-params") && (a = a.replace("%s", (n == null ? void 0 : n.textContent) || "")), n ? a === null ? e.tagMap.delete("title") : e.tagMap.set("title", l(l({}, n), {}, { textContent: a })) : e.tagMap.set("titleTemplate", l(l({}, r), {}, {
		tag: "title",
		textContent: a
	}));
}
function Z(e) {
	let t = 0;
	for (let n of e) {
		let { innerHTML: r, tag: i, props: a } = n;
		if (!(!g.has(i) || W(a) && !S(r) && !S(n.textContent)) && !(i === "meta" && !S(a.content) && !a["http-equiv"] && !a.charset)) {
			if (i === "script" && (r || n.textContent)) {
				let e = String(a.type), t = e.endsWith("json") || e === "importmap" || e === "speculationrules", i = (e) => t ? (typeof e == "string" ? e : JSON.stringify(e)).replace(B, "\\u003C") : typeof e == "string" ? e.replace(V, "<\\/script") : e;
				n = l({}, n), r && (n.innerHTML = i(r)), n.textContent && (n.textContent = i(n.textContent)), n._d = j(n);
			}
			e[t++] = n;
		}
	}
	return e.length = t, e;
}
function Q(e, t) {
	var n, r, i, a, o;
	let s = (n = (r = t == null ? void 0 : t.tagWeight) == null ? e.resolvedOptions._tagWeight : r) == null ? U : n, c = {
		tagMap: /* @__PURE__ */ new Map(),
		tags: []
	}, u = ((i = e.hooks) == null ? void 0 : i._hooks) || {};
	K(e, u);
	for (let t of e.entries.values()) t._pending !== void 0 && (t.input = t._pending, delete t._pending, delete t._tags, delete t._precomputedTags);
	let d;
	if ((a = u["entries:resolve"]) != null && a.length || (o = u["entries:normalize"]) != null && o.length) {
		var f;
		d = [...e.entries.values()], (f = u["entries:resolve"]) != null && f.length && D(e, "entries:resolve", l({ entries: d }, c));
	}
	K(e, u);
	for (let t of d || e.entries.values()) {
		let n = t._tags;
		if (!n) {
			var p, m;
			if (t._precomputedTags && s === e.resolvedOptions._tagWeight && !((p = u["entries:normalize"]) != null && p.length) && !((m = u["entries:resolve"]) != null && m.length) && (!t.options || W(t.options))) n = t._precomputedTags;
			else {
				var h;
				if (n = z(t.input, e.resolvedOptions.propResolvers || []), t.options && !W(t.options)) for (let e of n) Object.assign(e, t.options);
				if ((h = u["entries:normalize"]) != null && h.length) {
					let r = {
						tags: n,
						entry: t
					};
					D(e, "entries:normalize", r), n = r.tags;
				}
				for (let e = 0; e < n.length; e++) {
					let r = n[e];
					r._w = s(r), r._p = (t._i << 10) + e, r._d = j(r), r._d || (r._h = M(r));
				}
				t._tags = n;
			}
		}
		c.tags.push(...n);
	}
	for (let e in u) {
		var g;
		if ((g = u[e]) != null && g.length && G.test(e)) {
			q(c.tags);
			break;
		}
	}
	let _ = Y(c);
	return X(c, e), J(c, _), D(e, "tags:beforeResolve", c), D(e, "tags:resolve", c), D(e, "tags:afterResolve", c), Z(c.tags);
}
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.DKb5ZKVl.mjs
var $ = "usehead";
// @__NO_SIDE_EFFECTS__
function te() {
	if (n()) {
		let e = r($);
		if (e) return e;
	}
	throw Error("useHead() was called without provide context, ensure you call it through the setup() function.");
}
// @__NO_SIDE_EFFECTS__
function ne(e) {
	return { install(t) {
		t.config.globalProperties.$unhead = e, t.config.globalProperties.$head = e, t.provide($, e);
	} }.install;
}
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.D2XR8FqS.mjs
var re = /* @__PURE__ */ Object.assign((e, t) => u(t) ? d(t) : t, { _static: !0 });
//#endregion
//#region node_modules/@unhead/vue/dist/shared/vue.BHyNcdic.mjs
function ie(e, t = {}) {
	let n = t.head || /* @__PURE__ */ te();
	return n.ssr ? n.push(e || {}, t) : ae(n, e, t);
}
function ae(n, r, o = {}) {
	let u = a();
	if (u && !u.active) return {
		patch() {},
		dispose() {},
		_i: -1
	};
	let d = s(!1);
	if (o.onRendered && u) {
		let e = o.onRendered;
		o = l(l({}, o), {}, { onRendered: (t) => u.run(() => e(t)) });
	}
	let p;
	return e(() => {
		let e = d.value ? {} : N(r, re);
		p ? p.patch(e) : p = n.push(e, o);
	}), c() && (i(() => {
		p.dispose();
	}), f(() => {
		d.value = !0;
	}), t(() => {
		d.value = !1;
	})), p;
}
//#endregion
export { A as a, D as c, x as d, M as i, E as l, ne as n, F as o, j as r, Q as s, ie as t, h as u };
