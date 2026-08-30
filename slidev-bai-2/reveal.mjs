import { $ as e, C as t, E as n, H as r, K as i, O as a, Q as o, S as s, _ as c, d as l, ft as u, ht as d, k as f, o as p, s as m, t as h, ut as g, y as _ } from "./assets/modules/shiki-BdJWbgyq.js";
import { B as v, J as y, Q as b, W as x, X as S, Y as ee, Z as C, j as w, n as te, p as T, t as ne } from "./assets/slidev/useNav-CEJIfsQz.js";
import { a as E, c as re, d as ie, i as D, l as O, n as ae, o as oe, r as se, s as ce, t as le, u as ue } from "./assets/vue.BHyNcdic-CBJ3DIw7.js";
import { B as k, L as de, R as fe, i as pe, k as me, o as he, w as ge, x as A } from "./assets/modules/vue-BdHhyihZ.js";
import { a as j, c as M, d as _e, f as ve, i as N, m as ye, o as be, p as xe, r as Se, s as Ce, u as we, y as Te } from "./assets/slidev/context-NjknmJDY.js";
import { t as P } from "./assets/slidev/utils-i2fWjTfO.js";
import { n as Ee } from "./assets/drawings-C2cDgg9b.js";
import { n as De, r as Oe, t as ke } from "./assets/shared-9xxIzB5f.js";
import { t as Ae } from "./assets/slidev/useSlideBounds-F79hVx0C.js";
import "./assets/slidev/useSlideInfo-BbQC2fgf.js";
(function() {
	let e = document.createElement("link").relList;
	if (e && e.supports && e.supports("modulepreload")) return;
	for (let e of document.querySelectorAll("link[rel=\"modulepreload\"]")) n(e);
	new MutationObserver((e) => {
		for (let t of e) if (t.type === "childList") for (let e of t.addedNodes) e.tagName === "LINK" && e.rel === "modulepreload" && n(e);
	}).observe(document, {
		childList: !0,
		subtree: !0
	});
	function t(e) {
		let t = {};
		return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), t.credentials = e.crossOrigin === "use-credentials" ? "include" : e.crossOrigin === "anonymous" ? "omit" : "same-origin", t;
	}
	function n(e) {
		if (e.ep) return;
		e.ep = !0;
		let n = t(e);
		fetch(e.href, n);
	}
})(), u(!1), u(!1);
//#endregion
//#region node_modules/unhead/dist/shared/unhead.D7HkBzZn.mjs
function je(e, t) {
	if (typeof t == "function" && t.key && e.plugins.has(t.key)) return;
	let n = typeof t == "function" ? t(e) : t, r = n.key || String(e.plugins.size + 1);
	if (!e.plugins.get(r)) {
		var i;
		e.plugins.set(r, n);
		for (let t in n.hooks || {}) (i = e.hooks) == null || i.hook(t, n.hooks[t]);
	}
}
// @__NO_SIDE_EFFECTS__
function Me(e, t = {}) {
	var n;
	let r = !t.document, i = /* @__PURE__ */ new Map(), a = {
		_entryCount: 1,
		_h: 0,
		plugins: /* @__PURE__ */ new Map(),
		resolvedOptions: t,
		ssr: r,
		entries: i,
		hooks: void 0,
		render: () => e(a),
		use: (e) => je(a, e),
		push(e, t) {
			var n;
			let o = (n = t == null ? void 0 : t._index) == null ? a._entryCount++ : n, s = t ? p({}, t) : {};
			delete s.head, delete s.onRendered, delete s._index;
			let c = {
				_i: o,
				input: e,
				options: s
			};
			return i.set(o, c), {
				_i: o,
				dispose() {
					i.delete(o);
				},
				patch(e) {
					r ? (c.input = e, delete c._tags) : c._pending = e, i.has(o) || i.set(o, c);
				}
			};
		}
	};
	return (n = t.init) == null || n.forEach((e) => e && a.push(e)), a;
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.44a2ac915d.ts
var Ne = /* #__PURE__ */ Object.assign({}), Pe = /* #__PURE__ */ Object.assign({}), Fe = [Object.values(Ne)[0], Object.values(Pe)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/composables/usePrintStyles.ts
function Ie() {
	let { isPrintMode: e } = ne();
	A(_(() => e.value ? `
@page {
  size: ${ee.value}px ${y.value}px;
  margin: 0px;
}

* {
  transition: none !important;
  transition-duration: 0s !important;
}` : ""));
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/identity.js
var Le = Symbol.for("yaml.alias"), Re = Symbol.for("yaml.document"), F = Symbol.for("yaml.map"), ze = Symbol.for("yaml.pair"), Be = Symbol.for("yaml.scalar"), Ve = Symbol.for("yaml.seq"), I = Symbol.for("yaml.node.type"), He = (e) => !!e && typeof e == "object" && e[I] === Le, Ue = (e) => !!e && typeof e == "object" && e[I] === Re, We = (e) => !!e && typeof e == "object" && e[I] === F, L = (e) => !!e && typeof e == "object" && e[I] === ze, R = (e) => !!e && typeof e == "object" && e[I] === Be, Ge = (e) => !!e && typeof e == "object" && e[I] === Ve;
function z(e) {
	if (e && typeof e == "object") switch (e[I]) {
		case F:
		case Ve: return !0;
	}
	return !1;
}
function B(e) {
	if (e && typeof e == "object") switch (e[I]) {
		case Le:
		case F:
		case Be:
		case Ve: return !0;
	}
	return !1;
}
var Ke = (e) => (R(e) || z(e)) && !!e.anchor, qe = Symbol("break visit"), Je = Symbol("skip children"), Ye = Symbol("remove node");
function Xe(e, t) {
	let n = Qe(t);
	Ue(e) ? Ze(null, e.contents, n, Object.freeze([e])) === Ye && (e.contents = null) : Ze(null, e, n, Object.freeze([]));
}
Xe.BREAK = qe, Xe.SKIP = Je, Xe.REMOVE = Ye;
function Ze(e, t, n, r) {
	let i = $e(e, t, n, r);
	if (B(i) || L(i)) return et(e, r, i), Ze(e, i, n, r);
	if (typeof i != "symbol") {
		if (z(t)) {
			r = Object.freeze(r.concat(t));
			for (let e = 0; e < t.items.length; ++e) {
				let i = Ze(e, t.items[e], n, r);
				if (typeof i == "number") e = i - 1;
				else if (i === qe) return qe;
				else i === Ye && (t.items.splice(e, 1), --e);
			}
		} else if (L(t)) {
			r = Object.freeze(r.concat(t));
			let e = Ze("key", t.key, n, r);
			if (e === qe) return qe;
			e === Ye && (t.key = null);
			let i = Ze("value", t.value, n, r);
			if (i === qe) return qe;
			i === Ye && (t.value = null);
		}
	}
	return i;
}
function Qe(e) {
	return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
		Alias: e.Node,
		Map: e.Node,
		Scalar: e.Node,
		Seq: e.Node
	}, e.Value && {
		Map: e.Value,
		Scalar: e.Value,
		Seq: e.Value
	}, e.Collection && {
		Map: e.Collection,
		Seq: e.Collection
	}, e) : e;
}
function $e(e, t, n, r) {
	var i, a, o, s, c;
	if (typeof n == "function") return n(e, t, r);
	if (We(t)) return (i = n.Map) == null ? void 0 : i.call(n, e, t, r);
	if (Ge(t)) return (a = n.Seq) == null ? void 0 : a.call(n, e, t, r);
	if (L(t)) return (o = n.Pair) == null ? void 0 : o.call(n, e, t, r);
	if (R(t)) return (s = n.Scalar) == null ? void 0 : s.call(n, e, t, r);
	if (He(t)) return (c = n.Alias) == null ? void 0 : c.call(n, e, t, r);
}
function et(e, t, n) {
	let r = t[t.length - 1];
	if (z(r)) r.items[e] = n;
	else if (L(r)) e === "key" ? r.key = n : r.value = n;
	else if (Ue(r)) r.contents = n;
	else {
		let e = He(r) ? "alias" : "scalar";
		throw Error(`Cannot replace node with ${e} parent`);
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/doc/anchors.js
function tt(e) {
	if (/[\x00-\x19\s,[\]{}]/.test(e)) {
		let t = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
		throw Error(t);
	}
	return !0;
}
//#endregion
//#region node_modules/yaml/browser/dist/doc/applyReviver.js
function nt(e, t, n, r) {
	if (r && typeof r == "object") {
		if (Array.isArray(r)) for (let t = 0, n = r.length; t < n; ++t) {
			let n = r[t], i = nt(e, r, String(t), n);
			i === void 0 ? delete r[t] : i !== n && (r[t] = i);
		}
		else if (r instanceof Map) for (let t of Array.from(r.keys())) {
			let n = r.get(t), i = nt(e, r, t, n);
			i === void 0 ? r.delete(t) : i !== n && r.set(t, i);
		}
		else if (r instanceof Set) for (let t of Array.from(r)) {
			let n = nt(e, r, t, t);
			n === void 0 ? r.delete(t) : n !== t && (r.delete(t), r.add(n));
		}
		else for (let [t, n] of Object.entries(r)) {
			let i = nt(e, r, t, n);
			i === void 0 ? delete r[t] : i !== n && (r[t] = i);
		}
	}
	return e.call(t, n, r);
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/toJS.js
function V(e, t, n) {
	if (Array.isArray(e)) return e.map((e, t) => V(e, String(t), n));
	if (e && typeof e.toJSON == "function") {
		if (!n || !Ke(e)) return e.toJSON(t, n);
		let r = {
			aliasCount: 0,
			count: 1,
			res: void 0
		};
		n.anchors.set(e, r), n.onCreate = (e) => {
			r.res = e, delete n.onCreate;
		};
		let i = e.toJSON(t, n);
		return n.onCreate && n.onCreate(i), i;
	}
	return typeof e == "bigint" && !(n != null && n.keep) ? Number(e) : e;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Node.js
var rt = class {
	constructor(e) {
		Object.defineProperty(this, I, { value: e });
	}
	clone() {
		let e = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
		return this.range && (e.range = this.range.slice()), e;
	}
	toJS(e, { mapAsMap: t, maxAliasCount: n, onAnchor: r, reviver: i } = {}) {
		if (!Ue(e)) throw TypeError("A document argument is required");
		let a = {
			anchors: /* @__PURE__ */ new Map(),
			doc: e,
			keep: !0,
			mapAsMap: t === !0,
			mapKeyWarned: !1,
			maxAliasCount: typeof n == "number" ? n : 100
		}, o = V(this, "", a);
		if (typeof r == "function") for (let { count: e, res: t } of a.anchors.values()) r(t, e);
		return typeof i == "function" ? nt(i, { "": o }, "", o) : o;
	}
}, it = class extends rt {
	constructor(e) {
		super(Le), this.source = e, Object.defineProperty(this, "tag", { set() {
			throw Error("Alias nodes cannot have tags");
		} });
	}
	resolve(e, t) {
		if ((t == null ? void 0 : t.maxAliasCount) === 0) throw ReferenceError("Alias resolution is disabled");
		let n;
		t != null && t.aliasResolveCache ? n = t.aliasResolveCache : (n = [], Xe(e, { Node: (e, t) => {
			(He(t) || Ke(t)) && n.push(t);
		} }), t && (t.aliasResolveCache = n));
		let r;
		for (let e of n) {
			if (e === this) break;
			e.anchor === this.source && (r = e);
		}
		return r;
	}
	toJSON(e, t) {
		if (!t) return { source: this.source };
		let { anchors: n, doc: r, maxAliasCount: i } = t, a = this.resolve(r, t);
		if (!a) {
			let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
			throw ReferenceError(e);
		}
		let o = n.get(a);
		/* istanbul ignore if */
		if (o || (V(a, null, t), o = n.get(a)), (o == null ? void 0 : o.res) === void 0) throw ReferenceError("This should not happen: Alias anchor was not resolved?");
		if (i >= 0 && (o.count += 1, o.aliasCount === 0 && (o.aliasCount = at(r, a, n)), o.count * o.aliasCount > i)) throw ReferenceError("Excessive alias count indicates a resource exhaustion attack");
		return o.res;
	}
	toString(e, t, n) {
		let r = `*${this.source}`;
		if (e) {
			if (tt(this.source), e.options.verifyAliasOrder && !e.anchors.has(this.source)) {
				let e = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
				throw Error(e);
			}
			if (e.implicitKey) return `${r} `;
		}
		return r;
	}
};
function at(e, t, n) {
	if (He(t)) {
		let r = t.resolve(e), i = n && r && n.get(r);
		return i ? i.count * i.aliasCount : 0;
	}
	if (z(t)) {
		let r = 0;
		for (let i of t.items) {
			let t = at(e, i, n);
			t > r && (r = t);
		}
		return r;
	}
	if (L(t)) {
		let r = at(e, t.key, n), i = at(e, t.value, n);
		return Math.max(r, i);
	}
	return 1;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Scalar.js
var ot = (e) => !e || typeof e != "function" && typeof e != "object", H = class extends rt {
	constructor(e) {
		super(Be), this.value = e;
	}
	toJSON(e, t) {
		return t != null && t.keep ? this.value : V(this.value, e, t);
	}
	toString() {
		return String(this.value);
	}
};
H.BLOCK_FOLDED = "BLOCK_FOLDED", H.BLOCK_LITERAL = "BLOCK_LITERAL", H.PLAIN = "PLAIN", H.QUOTE_DOUBLE = "QUOTE_DOUBLE", H.QUOTE_SINGLE = "QUOTE_SINGLE";
//#endregion
//#region node_modules/yaml/browser/dist/doc/createNode.js
var st = "tag:yaml.org,2002:";
function ct(e, t, n) {
	if (t) {
		var r;
		let e = n.filter((e) => e.tag === t), i = (r = e.find((e) => !e.format)) == null ? e[0] : r;
		if (!i) throw Error(`Tag ${t} not found`);
		return i;
	}
	return n.find((t) => {
		var n;
		return ((n = t.identify) == null ? void 0 : n.call(t, e)) && !t.format;
	});
}
function lt(e, t, n) {
	var r;
	if (Ue(e) && (e = e.contents), B(e)) return e;
	if (L(e)) {
		var i, a;
		let t = (i = (a = n.schema[F]).createNode) == null ? void 0 : i.call(a, n.schema, null, n);
		return t.items.push(e), t;
	}
	(e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
	let { aliasDuplicateObjects: o, onAnchor: s, onTagObj: c, schema: l, sourceObjects: u } = n, d;
	if (o && e && typeof e == "object") {
		if (d = u.get(e), d) return d.anchor != null || (d.anchor = s(e)), new it(d.anchor);
		d = {
			anchor: null,
			node: null
		}, u.set(e, d);
	}
	t != null && t.startsWith("!!") && (t = st + t.slice(2));
	let f = ct(e, t, l.tags);
	if (!f) {
		if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
			let t = new H(e);
			return d && (d.node = t), t;
		}
		f = e instanceof Map ? l[F] : Symbol.iterator in Object(e) ? l[Ve] : l[F];
	}
	c && (c(f), delete n.onTagObj);
	let p = f != null && f.createNode ? f.createNode(n.schema, e, n) : typeof (f == null || (r = f.nodeClass) == null ? void 0 : r.from) == "function" ? f.nodeClass.from(n.schema, e, n) : new H(e);
	return t ? p.tag = t : f.default || (p.tag = f.tag), d && (d.node = p), p;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Collection.js
function ut(e, t, n) {
	let r = n;
	for (let e = t.length - 1; e >= 0; --e) {
		let n = t[e];
		if (typeof n == "number" && Number.isInteger(n) && n >= 0) {
			let e = [];
			e[n] = r, r = e;
		} else r = /* @__PURE__ */ new Map([[n, r]]);
	}
	return lt(r, void 0, {
		aliasDuplicateObjects: !1,
		keepUndefined: !1,
		onAnchor: () => {
			throw Error("This should not happen, please report a bug.");
		},
		schema: e,
		sourceObjects: /* @__PURE__ */ new Map()
	});
}
var dt = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done, ft = class extends rt {
	constructor(e, t) {
		super(e), Object.defineProperty(this, "schema", {
			value: t,
			configurable: !0,
			enumerable: !1,
			writable: !0
		});
	}
	clone(e) {
		let t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
		return e && (t.schema = e), t.items = t.items.map((t) => B(t) || L(t) ? t.clone(e) : t), this.range && (t.range = this.range.slice()), t;
	}
	addIn(e, t) {
		if (dt(e)) this.add(t);
		else {
			let [n, ...r] = e, i = this.get(n, !0);
			if (z(i)) i.addIn(r, t);
			else if (i === void 0 && this.schema) this.set(n, ut(this.schema, r, t));
			else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
		}
	}
	deleteIn(e) {
		let [t, ...n] = e;
		if (n.length === 0) return this.delete(t);
		let r = this.get(t, !0);
		if (z(r)) return r.deleteIn(n);
		throw Error(`Expected YAML collection at ${t}. Remaining path: ${n}`);
	}
	getIn(e, t) {
		let [n, ...r] = e, i = this.get(n, !0);
		return r.length === 0 ? !t && R(i) ? i.value : i : z(i) ? i.getIn(r, t) : void 0;
	}
	hasAllNullValues(e) {
		return this.items.every((t) => {
			if (!L(t)) return !1;
			let n = t.value;
			return n == null || e && R(n) && n.value == null && !n.commentBefore && !n.comment && !n.tag;
		});
	}
	hasIn(e) {
		let [t, ...n] = e;
		if (n.length === 0) return this.has(t);
		let r = this.get(t, !0);
		return z(r) ? r.hasIn(n) : !1;
	}
	setIn(e, t) {
		let [n, ...r] = e;
		if (r.length === 0) this.set(n, t);
		else {
			let e = this.get(n, !0);
			if (z(e)) e.setIn(r, t);
			else if (e === void 0 && this.schema) this.set(n, ut(this.schema, r, t));
			else throw Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
		}
	}
}, pt = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
function mt(e, t) {
	return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
}
var ht = (e, t, n) => e.endsWith("\n") ? mt(n, t) : n.includes("\n") ? "\n" + mt(n, t) : (e.endsWith(" ") ? "" : " ") + n, gt = "flow", _t = "block", vt = "quoted";
function yt(e, t, n = "flow", { indentAtStart: r, lineWidth: i = 80, minContentWidth: a = 20, onFold: o, onOverflow: s } = {}) {
	if (!i || i < 0) return e;
	i < a && (a = 0);
	let c = Math.max(1 + a, 1 + i - t.length);
	if (e.length <= c) return e;
	let l = [], u = {}, d = i - t.length;
	typeof r == "number" && (r > i - Math.max(2, a) ? l.push(0) : d = i - r);
	let f, p, m = !1, h = -1, g = -1, _ = -1;
	n === "block" && (h = bt(e, h, t.length), h !== -1 && (d = h + c));
	for (let r; r = e[h += 1];) {
		if (n === "quoted" && r === "\\") {
			switch (g = h, e[h + 1]) {
				case "x":
					h += 3;
					break;
				case "u":
					h += 5;
					break;
				case "U":
					h += 9;
					break;
				default: h += 1;
			}
			_ = h;
		}
		if (r === "\n") n === "block" && (h = bt(e, h, t.length)), d = h + t.length + c, f = void 0;
		else {
			if (r === " " && p && p !== " " && p !== "\n" && p !== "	") {
				let t = e[h + 1];
				t && t !== " " && t !== "\n" && t !== "	" && (f = h);
			}
			if (h >= d) {
				if (f) l.push(f), d = f + c, f = void 0;
				else if (n === "quoted") {
					for (; p === " " || p === "	";) p = r, r = e[h += 1], m = !0;
					let t = h > _ + 1 ? h - 2 : g - 1;
					if (u[t]) return e;
					l.push(t), u[t] = !0, d = t + c, f = void 0;
				} else m = !0;
			}
		}
		p = r;
	}
	if (m && s && s(), l.length === 0) return e;
	o && o();
	let v = e.slice(0, l[0]);
	for (let r = 0; r < l.length; ++r) {
		let i = l[r], a = l[r + 1] || e.length;
		i === 0 ? v = `\n${t}${e.slice(0, a)}` : (n === "quoted" && u[i] && (v += `${e[i]}\\`), v += `\n${t}${e.slice(i + 1, a)}`);
	}
	return v;
}
function bt(e, t, n) {
	let r = t, i = t + 1, a = e[i];
	for (; a === " " || a === "	";) if (t < i + n) a = e[++t];
	else {
		do
			a = e[++t];
		while (a && a !== "\n");
		r = t, i = t + 1, a = e[i];
	}
	return r;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyString.js
var xt = (e, t) => ({
	indentAtStart: t ? e.indent.length : e.indentAtStart,
	lineWidth: e.options.lineWidth,
	minContentWidth: e.options.minContentWidth
}), St = (e) => /^(%|---|\.\.\.)/m.test(e);
function Ct(e, t, n) {
	if (!t || t < 0) return !1;
	let r = t - n, i = e.length;
	if (i <= r) return !1;
	for (let t = 0, n = 0; t < i; ++t) if (e[t] === "\n") {
		if (t - n > r) return !0;
		if (n = t + 1, i - n <= r) return !1;
	}
	return !0;
}
function wt(e, t) {
	let n = JSON.stringify(e);
	if (t.options.doubleQuotedAsJSON) return n;
	let { implicitKey: r } = t, i = t.options.doubleQuotedMinMultiLineLength, a = t.indent || (St(e) ? "  " : ""), o = "", s = 0;
	for (let e = 0, t = n[e]; t; t = n[++e]) if (t === " " && n[e + 1] === "\\" && n[e + 2] === "n" && (o += n.slice(s, e) + "\\ ", e += 1, s = e, t = "\\"), t === "\\") switch (n[e + 1]) {
		case "u":
			{
				o += n.slice(s, e);
				let t = n.substr(e + 2, 4);
				switch (t) {
					case "0000":
						o += "\\0";
						break;
					case "0007":
						o += "\\a";
						break;
					case "000b":
						o += "\\v";
						break;
					case "001b":
						o += "\\e";
						break;
					case "0085":
						o += "\\N";
						break;
					case "00a0":
						o += "\\_";
						break;
					case "2028":
						o += "\\L";
						break;
					case "2029":
						o += "\\P";
						break;
					default: t.substr(0, 2) === "00" ? o += "\\x" + t.substr(2) : o += n.substr(e, 6);
				}
				e += 5, s = e + 1;
			}
			break;
		case "n":
			if (r || n[e + 2] === "\"" || n.length < i) e += 1;
			else {
				for (o += n.slice(s, e) + "\n\n"; n[e + 2] === "\\" && n[e + 3] === "n" && n[e + 4] !== "\"";) o += "\n", e += 2;
				o += a, n[e + 2] === " " && (o += "\\"), e += 1, s = e + 1;
			}
			break;
		default: e += 1;
	}
	return o = s ? o + n.slice(s) : n, r ? o : yt(o, a, vt, xt(t, !1));
}
function Tt(e, t) {
	if (t.options.singleQuote === !1 || t.implicitKey && e.includes("\n") || /[ \t]\n|\n[ \t]/.test(e)) return wt(e, t);
	let n = t.indent || (St(e) ? "  " : ""), r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&\n${n}`) + "'";
	return t.implicitKey ? r : yt(r, n, gt, xt(t, !1));
}
function Et(e, t) {
	let { singleQuote: n } = t.options, r;
	if (n === !1) r = wt;
	else {
		let t = e.includes("\""), i = e.includes("'");
		r = t && !i ? Tt : i && !t ? wt : n ? Tt : wt;
	}
	return r(e, t);
}
var Dt;
try {
	Dt = RegExp("(^|(?<!\n))\n+(?!\n|$)", "g");
} catch (e) {
	Dt = /\n+(?!\n|$)/g;
}
function Ot({ comment: e, type: t, value: n }, r, i, a) {
	let { blockQuote: o, commentString: s, lineWidth: c } = r.options;
	if (!o || /\n[\t ]+$/.test(n)) return Et(n, r);
	let l = r.indent || (r.forceBlockIndent || St(n) ? "  " : ""), u = o === "literal" ? !0 : o === "folded" || t === H.BLOCK_FOLDED ? !1 : t === H.BLOCK_LITERAL || !Ct(n, c, l.length);
	if (!n) return u ? "|\n" : ">\n";
	let d, f;
	for (f = n.length; f > 0; --f) {
		let e = n[f - 1];
		if (e !== "\n" && e !== "	" && e !== " ") break;
	}
	let p = n.substring(f), m = p.indexOf("\n");
	m === -1 ? d = "-" : n === p || m !== p.length - 1 ? (d = "+", a && a()) : d = "", p && (n = n.slice(0, -p.length), p[p.length - 1] === "\n" && (p = p.slice(0, -1)), p = p.replace(Dt, `$&${l}`));
	let h = !1, g, _ = -1;
	for (g = 0; g < n.length; ++g) {
		let e = n[g];
		if (e === " ") h = !0;
		else if (e === "\n") _ = g;
		else break;
	}
	let v = n.substring(0, _ < g ? _ + 1 : g);
	v && (n = n.substring(v.length), v = v.replace(/\n+/g, `$&${l}`));
	let y = (h ? l ? "2" : "1" : "") + d;
	if (e && (y += " " + s(e.replace(/ ?[\r\n]+/g, " ")), i && i()), !u) {
		let e = n.replace(/\n+/g, "\n$&").replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${l}`), i = !1, a = xt(r, !0);
		o !== "folded" && t !== H.BLOCK_FOLDED && (a.onOverflow = () => {
			i = !0;
		});
		let s = yt(`${v}${e}${p}`, l, _t, a);
		if (!i) return `>${y}\n${l}${s}`;
	}
	return n = n.replace(/\n+/g, `$&${l}`), `|${y}\n${l}${v}${n}${p}`;
}
function kt(e, t, n, r) {
	let { type: i, value: a } = e, { actualString: o, implicitKey: s, indent: c, indentStep: l, inFlow: u } = t;
	if (s && a.includes("\n") || u && /[[\]{},]/.test(a)) return Et(a, t);
	if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(a)) return s || u || !a.includes("\n") ? Et(a, t) : Ot(e, t, n, r);
	if (!s && !u && i !== H.PLAIN && a.includes("\n")) return Ot(e, t, n, r);
	if (St(a)) {
		if (c === "") return t.forceBlockIndent = !0, Ot(e, t, n, r);
		if (s && c === l) return Et(a, t);
	}
	let d = a.replace(/\n+/g, `$&\n${c}`);
	if (o) {
		let e = (e) => {
			var t;
			return e.default && e.tag !== "tag:yaml.org,2002:str" && ((t = e.test) == null ? void 0 : t.test(d));
		}, { compat: n, tags: r } = t.doc.schema;
		if (r.some(e) || n != null && n.some(e)) return Et(a, t);
	}
	return s ? d : yt(d, c, gt, xt(t, !1));
}
function At(e, t, n, r) {
	let { implicitKey: i, inFlow: a } = t, o = typeof e.value == "string" ? e : Object.assign({}, e, { value: String(e.value) }), { type: s } = e;
	s !== H.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(o.value) && (s = H.QUOTE_DOUBLE);
	let c = (e) => {
		switch (e) {
			case H.BLOCK_FOLDED:
			case H.BLOCK_LITERAL: return i || a ? Et(o.value, t) : Ot(o, t, n, r);
			case H.QUOTE_DOUBLE: return wt(o.value, t);
			case H.QUOTE_SINGLE: return Tt(o.value, t);
			case H.PLAIN: return kt(o, t, n, r);
			default: return null;
		}
	}, l = c(s);
	if (l === null) {
		let { defaultKeyType: e, defaultStringType: n } = t.options, r = i && e || n;
		if (l = c(r), l === null) throw Error(`Unsupported default string type ${r}`);
	}
	return l;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringify.js
function jt(e, t) {
	let n = Object.assign({
		blockQuote: !0,
		commentString: pt,
		defaultKeyType: null,
		defaultStringType: "PLAIN",
		directives: null,
		doubleQuotedAsJSON: !1,
		doubleQuotedMinMultiLineLength: 40,
		falseStr: "false",
		flowCollectionPadding: !0,
		indentSeq: !0,
		lineWidth: 80,
		minContentWidth: 20,
		nullStr: "null",
		simpleKeys: !1,
		singleQuote: null,
		trailingComma: !1,
		trueStr: "true",
		verifyAliasOrder: !0
	}, e.schema.toStringOptions, t), r;
	switch (n.collectionStyle) {
		case "block":
			r = !1;
			break;
		case "flow":
			r = !0;
			break;
		default: r = null;
	}
	return {
		anchors: /* @__PURE__ */ new Set(),
		doc: e,
		flowCollectionPadding: n.flowCollectionPadding ? " " : "",
		indent: "",
		indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
		inFlow: r,
		options: n
	};
}
function Mt(e, t) {
	if (t.tag) {
		var n;
		let r = e.filter((e) => e.tag === t.tag);
		if (r.length > 0) return (n = r.find((e) => e.format === t.format)) == null ? r[0] : n;
	}
	let r, i;
	if (R(t)) {
		var a;
		i = t.value;
		let n = e.filter((e) => {
			var t;
			return (t = e.identify) == null ? void 0 : t.call(e, i);
		});
		if (n.length > 1) {
			let e = n.filter((e) => e.test);
			e.length > 0 && (n = e);
		}
		r = (a = n.find((e) => e.format === t.format)) == null ? n.find((e) => !e.format) : a;
	} else i = t, r = e.find((e) => e.nodeClass && i instanceof e.nodeClass);
	if (!r) {
		var o, s;
		let e = (o = i == null || (s = i.constructor) == null ? void 0 : s.name) == null ? i === null ? "null" : typeof i : o;
		throw Error(`Tag not resolved for ${e} value`);
	}
	return r;
}
function Nt(e, t, { anchors: n, doc: r }) {
	var i;
	if (!r.directives) return "";
	let a = [], o = (R(e) || z(e)) && e.anchor;
	o && tt(o) && (n.add(o), a.push(`&${o}`));
	let s = (i = e.tag) == null ? t.default ? null : t.tag : i;
	return s && a.push(r.directives.tagString(s)), a.join(" ");
}
function Pt(e, t, n, r) {
	var i;
	if (L(e)) return e.toString(t, n, r);
	if (He(e)) {
		var a;
		if (t.doc.directives) return e.toString(t);
		if ((a = t.resolvedAliases) != null && a.has(e)) throw TypeError("Cannot stringify circular structure without alias nodes");
		t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([e]), e = e.resolve(t.doc);
	}
	let o, s = B(e) ? e : t.doc.createNode(e, { onTagObj: (e) => o = e });
	o != null || (o = Mt(t.doc.schema.tags, s));
	let c = Nt(s, o, t);
	c.length > 0 && (t.indentAtStart = ((i = t.indentAtStart) == null ? 0 : i) + c.length + 1);
	let l = typeof o.stringify == "function" ? o.stringify(s, t, n, r) : R(s) ? At(s, t, n, r) : s.toString(t, n, r);
	return c ? R(s) || l[0] === "{" || l[0] === "[" ? `${c} ${l}` : `${c}\n${t.indent}${l}` : l;
}
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyPair.js
function Ft({ key: e, value: t }, n, r, i) {
	let { allNullValues: a, doc: o, indent: s, indentStep: c, options: { commentString: l, indentSeq: u, simpleKeys: d } } = n, f = B(e) && e.comment || null;
	if (d) {
		if (f) throw Error("With simple keys, key nodes cannot have comments");
		if (z(e) || !B(e) && typeof e == "object") throw Error("With simple keys, collection cannot be used as a key value");
	}
	let p = !d && (!e || f && t == null && !n.inFlow || z(e) || (R(e) ? e.type === H.BLOCK_FOLDED || e.type === H.BLOCK_LITERAL : typeof e == "object"));
	n = Object.assign({}, n, {
		allNullValues: !1,
		implicitKey: !p && (d || !a),
		indent: s + c
	});
	let m = !1, h = !1, g = Pt(e, n, () => m = !0, () => h = !0);
	if (!p && !n.inFlow && g.length > 1024) {
		if (d) throw Error("With simple keys, single line scalar must not span more than 1024 characters");
		p = !0;
	}
	if (n.inFlow) {
		if (a || t == null) return m && r && r(), g === "" ? "?" : p ? `? ${g}` : g;
	} else if (a && !d || t == null && p) return g = `? ${g}`, f && !m ? g += ht(g, n.indent, l(f)) : h && i && i(), g;
	m && (f = null), p ? (f && (g += ht(g, n.indent, l(f))), g = `? ${g}\n${s}:`) : (g = `${g}:`, f && (g += ht(g, n.indent, l(f))));
	let _, v, y;
	B(t) ? (_ = !!t.spaceBefore, v = t.commentBefore, y = t.comment) : (_ = !1, v = null, y = null, t && typeof t == "object" && (t = o.createNode(t))), n.implicitKey = !1, !p && !f && R(t) && (n.indentAtStart = g.length + 1), h = !1, !u && c.length >= 2 && !n.inFlow && !p && Ge(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
	let b = !1, x = Pt(t, n, () => b = !0, () => h = !0), S = " ";
	if (f || _ || v) {
		if (S = _ ? "\n" : "", v) {
			let e = l(v);
			S += `\n${mt(e, n.indent)}`;
		}
		x === "" && !n.inFlow ? S === "\n" && y && (S = "\n\n") : S += `\n${n.indent}`;
	} else if (!p && z(t)) {
		var ee, C;
		let e = x[0], r = x.indexOf("\n"), i = r !== -1, a = (ee = (C = n.inFlow) == null ? t.flow : C) == null ? t.items.length === 0 : ee;
		if (i || !a) {
			let t = !1;
			if (i && (e === "&" || e === "!")) {
				let n = x.indexOf(" ");
				e === "&" && n !== -1 && n < r && x[n + 1] === "!" && (n = x.indexOf(" ", n + 1)), (n === -1 || r < n) && (t = !0);
			}
			t || (S = `\n${n.indent}`);
		}
	} else (x === "" || x[0] === "\n") && (S = "");
	return g += S + x, n.inFlow ? b && r && r() : y && !b ? g += ht(g, n.indent, l(y)) : h && i && i(), g;
}
//#endregion
//#region node_modules/yaml/browser/dist/log.js
function It(e, t) {
	(e === "debug" || e === "warn") && console.warn(t);
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/merge.js
var Lt = "<<", Rt = {
	identify: (e) => e === Lt || typeof e == "symbol" && e.description === Lt,
	default: "key",
	tag: "tag:yaml.org,2002:merge",
	test: /^<<$/,
	resolve: () => Object.assign(new H(Symbol(Lt)), { addToJSMap: Bt }),
	stringify: () => Lt
}, zt = (e, t) => (Rt.identify(t) || R(t) && (!t.type || t.type === H.PLAIN) && Rt.identify(t.value)) && (e == null ? void 0 : e.doc.schema.tags.some((e) => e.tag === Rt.tag && e.default));
function Bt(e, t, n) {
	let r = Ht(e, n);
	if (Ge(r)) for (let n of r.items) Vt(e, t, n);
	else if (Array.isArray(r)) for (let n of r) Vt(e, t, n);
	else Vt(e, t, r);
}
function Vt(e, t, n) {
	let r = Ht(e, n);
	if (!We(r)) throw Error("Merge sources must be maps or map aliases");
	let i = r.toJSON(null, e, Map);
	for (let [e, n] of i) t instanceof Map ? t.has(e) || t.set(e, n) : t instanceof Set ? t.add(e) : Object.prototype.hasOwnProperty.call(t, e) || Object.defineProperty(t, e, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
	return t;
}
function Ht(e, t) {
	return e && He(t) ? t.resolve(e.doc, e) : t;
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/addPairToJSMap.js
function Ut(e, t, { key: n, value: r }) {
	if (B(n) && n.addToJSMap) n.addToJSMap(e, t, r);
	else if (zt(e, n)) Bt(e, t, r);
	else {
		let i = V(n, "", e);
		if (t instanceof Map) t.set(i, V(r, i, e));
		else if (t instanceof Set) t.add(i);
		else {
			let a = Wt(n, i, e), o = V(r, a, e);
			a in t ? Object.defineProperty(t, a, {
				value: o,
				writable: !0,
				enumerable: !0,
				configurable: !0
			}) : t[a] = o;
		}
	}
	return t;
}
function Wt(e, t, n) {
	if (t === null) return "";
	if (typeof t != "object") return String(t);
	if (B(e) && n != null && n.doc) {
		let t = jt(n.doc, {});
		t.anchors = /* @__PURE__ */ new Set();
		for (let e of n.anchors.keys()) t.anchors.add(e.anchor);
		t.inFlow = !0, t.inStringifyKey = !0;
		let r = e.toString(t);
		if (!n.mapKeyWarned) {
			let e = JSON.stringify(r);
			e.length > 40 && (e = e.substring(0, 36) + "...\""), It(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${e}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = !0;
		}
		return r;
	}
	return JSON.stringify(t);
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/Pair.js
function Gt(e, t, n) {
	return new U(lt(e, void 0, n), lt(t, void 0, n));
}
var U = class e {
	constructor(e, t = null) {
		Object.defineProperty(this, I, { value: ze }), this.key = e, this.value = t;
	}
	clone(t) {
		let { key: n, value: r } = this;
		return B(n) && (n = n.clone(t)), B(r) && (r = r.clone(t)), new e(n, r);
	}
	toJSON(e, t) {
		return Ut(t, t != null && t.mapAsMap ? /* @__PURE__ */ new Map() : {}, this);
	}
	toString(e, t, n) {
		return e != null && e.doc ? Ft(this, e, t, n) : JSON.stringify(this);
	}
};
//#endregion
//#region node_modules/yaml/browser/dist/stringify/stringifyCollection.js
function Kt(e, t, n) {
	var r;
	return (((r = t.inFlow) == null ? e.flow : r) ? Jt : qt)(e, t, n);
}
function qt({ comment: e, items: t }, n, { blockItemPrefix: r, flowChars: i, itemIndent: a, onChompKeep: o, onComment: s }) {
	let { indent: c, options: { commentString: l } } = n, u = Object.assign({}, n, {
		indent: a,
		type: null
	}), d = !1, f = [];
	for (let e = 0; e < t.length; ++e) {
		let i = t[e], o = null;
		if (B(i)) !d && i.spaceBefore && f.push(""), Yt(n, f, i.commentBefore, d), i.comment && (o = i.comment);
		else if (L(i)) {
			let e = B(i.key) ? i.key : null;
			e && (!d && e.spaceBefore && f.push(""), Yt(n, f, e.commentBefore, d));
		}
		d = !1;
		let s = Pt(i, u, () => o = null, () => d = !0);
		o && (s += ht(s, a, l(o))), d && o && (d = !1), f.push(r + s);
	}
	let p;
	if (f.length === 0) p = i.start + i.end;
	else {
		p = f[0];
		for (let e = 1; e < f.length; ++e) {
			let t = f[e];
			p += t ? `\n${c}${t}` : "\n";
		}
	}
	return e ? (p += "\n" + mt(l(e), c), s && s()) : d && o && o(), p;
}
function Jt({ items: e }, t, { flowChars: n, itemIndent: r }) {
	let { indent: i, indentStep: a, flowCollectionPadding: o, options: { commentString: s } } = t;
	r += a;
	let c = Object.assign({}, t, {
		indent: r,
		inFlow: !0,
		type: null
	}), l = !1, u = 0, d = [];
	for (let n = 0; n < e.length; ++n) {
		let i = e[n], a = null;
		if (B(i)) i.spaceBefore && d.push(""), Yt(t, d, i.commentBefore, !1), i.comment && (a = i.comment);
		else if (L(i)) {
			let e = B(i.key) ? i.key : null;
			e && (e.spaceBefore && d.push(""), Yt(t, d, e.commentBefore, !1), e.comment && (l = !0));
			let n = B(i.value) ? i.value : null;
			n ? (n.comment && (a = n.comment), n.commentBefore && (l = !0)) : i.value == null && e != null && e.comment && (a = e.comment);
		}
		a && (l = !0);
		let o = Pt(i, c, () => a = null);
		l || (l = d.length > u || o.includes("\n")), n < e.length - 1 ? o += "," : t.options.trailingComma && (t.options.lineWidth > 0 && (l || (l = d.reduce((e, t) => e + t.length + 2, 2) + (o.length + 2) > t.options.lineWidth)), l && (o += ",")), a && (o += ht(o, r, s(a))), d.push(o), u = d.length;
	}
	let { start: f, end: p } = n;
	if (d.length === 0) return f + p;
	if (!l) {
		let e = d.reduce((e, t) => e + t.length + 2, 2);
		l = t.options.lineWidth > 0 && e > t.options.lineWidth;
	}
	if (l) {
		let e = f;
		for (let t of d) e += t ? `\n${a}${i}${t}` : "\n";
		return `${e}\n${i}${p}`;
	}
	return `${f}${o}${d.join(" ")}${o}${p}`;
}
function Yt({ indent: e, options: { commentString: t } }, n, r, i) {
	if (r && i && (r = r.replace(/^\n+/, "")), r) {
		let i = mt(t(r), e);
		n.push(i.trimStart());
	}
}
//#endregion
//#region node_modules/yaml/browser/dist/nodes/YAMLMap.js
function W(e, t) {
	let n = R(t) ? t.value : t;
	for (let r of e) if (L(r) && (r.key === t || r.key === n || R(r.key) && r.key.value === n)) return r;
}
var G = class extends ft {
	static get tagName() {
		return "tag:yaml.org,2002:map";
	}
	constructor(e) {
		super(F, e), this.items = [];
	}
	static from(e, t, n) {
		let { keepUndefined: r, replacer: i } = n, a = new this(e), o = (e, o) => {
			if (typeof i == "function") o = i.call(t, e, o);
			else if (Array.isArray(i) && !i.includes(e)) return;
			(o !== void 0 || r) && a.items.push(Gt(e, o, n));
		};
		if (t instanceof Map) for (let [e, n] of t) o(e, n);
		else if (t && typeof t == "object") for (let e of Object.keys(t)) o(e, t[e]);
		return typeof e.sortMapEntries == "function" && a.items.sort(e.sortMapEntries), a;
	}
	add(e, t) {
		var n;
		let r;
		r = L(e) ? e : !e || typeof e != "object" || !("key" in e) ? new U(e, e == null ? void 0 : e.value) : new U(e.key, e.value);
		let i = W(this.items, r.key), a = (n = this.schema) == null ? void 0 : n.sortMapEntries;
		if (i) {
			if (!t) throw Error(`Key ${r.key} already set`);
			R(i.value) && ot(r.value) ? i.value.value = r.value : i.value = r.value;
		} else if (a) {
			let e = this.items.findIndex((e) => a(r, e) < 0);
			e === -1 ? this.items.push(r) : this.items.splice(e, 0, r);
		} else this.items.push(r);
	}
	delete(e) {
		let t = W(this.items, e);
		return t ? this.items.splice(this.items.indexOf(t), 1).length > 0 : !1;
	}
	get(e, t) {
		var n;
		let r = W(this.items, e), i = r == null ? void 0 : r.value;
		return (n = !t && R(i) ? i.value : i) == null ? void 0 : n;
	}
	has(e) {
		return !!W(this.items, e);
	}
	set(e, t) {
		this.add(new U(e, t), !0);
	}
	toJSON(e, t, n) {
		let r = n ? new n() : t != null && t.mapAsMap ? /* @__PURE__ */ new Map() : {};
		t != null && t.onCreate && t.onCreate(r);
		for (let e of this.items) Ut(t, r, e);
		return r;
	}
	toString(e, t, n) {
		if (!e) return JSON.stringify(this);
		for (let e of this.items) if (!L(e)) throw Error(`Map items must all be pairs; found ${JSON.stringify(e)} instead`);
		return !e.allNullValues && this.hasAllNullValues(!1) && (e = Object.assign({}, e, { allNullValues: !0 })), Kt(this, e, {
			blockItemPrefix: "",
			flowChars: {
				start: "{",
				end: "}"
			},
			itemIndent: e.indent || "",
			onChompKeep: n,
			onComment: t
		});
	}
}, Xt = {
	collection: "map",
	default: !0,
	nodeClass: G,
	tag: "tag:yaml.org,2002:map",
	resolve(e, t) {
		return We(e) || t("Expected a mapping for this tag"), e;
	},
	createNode: (e, t, n) => G.from(e, t, n)
}, Zt = class extends ft {
	static get tagName() {
		return "tag:yaml.org,2002:seq";
	}
	constructor(e) {
		super(Ve, e), this.items = [];
	}
	add(e) {
		this.items.push(e);
	}
	delete(e) {
		let t = Qt(e);
		return typeof t == "number" && this.items.splice(t, 1).length > 0;
	}
	get(e, t) {
		let n = Qt(e);
		if (typeof n != "number") return;
		let r = this.items[n];
		return !t && R(r) ? r.value : r;
	}
	has(e) {
		let t = Qt(e);
		return typeof t == "number" && t < this.items.length;
	}
	set(e, t) {
		let n = Qt(e);
		if (typeof n != "number") throw Error(`Expected a valid index, not ${e}.`);
		let r = this.items[n];
		R(r) && ot(t) ? r.value = t : this.items[n] = t;
	}
	toJSON(e, t) {
		let n = [];
		t != null && t.onCreate && t.onCreate(n);
		let r = 0;
		for (let e of this.items) n.push(V(e, String(r++), t));
		return n;
	}
	toString(e, t, n) {
		return e ? Kt(this, e, {
			blockItemPrefix: "- ",
			flowChars: {
				start: "[",
				end: "]"
			},
			itemIndent: (e.indent || "") + "  ",
			onChompKeep: n,
			onComment: t
		}) : JSON.stringify(this);
	}
	static from(e, t, n) {
		let { replacer: r } = n, i = new this(e);
		if (t && Symbol.iterator in Object(t)) {
			let e = 0;
			for (let a of t) {
				if (typeof r == "function") {
					let n = t instanceof Set ? a : String(e++);
					a = r.call(t, n, a);
				}
				i.items.push(lt(a, void 0, n));
			}
		}
		return i;
	}
};
function Qt(e) {
	let t = R(e) ? e.value : e;
	return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/common/seq.js
var $t = {
	collection: "seq",
	default: !0,
	nodeClass: Zt,
	tag: "tag:yaml.org,2002:seq",
	resolve(e, t) {
		return Ge(e) || t("Expected a sequence for this tag"), e;
	},
	createNode: (e, t, n) => Zt.from(e, t, n)
};
//#endregion
//#region node_modules/yaml/browser/dist/schema/json/schema.js
function en(e) {
	return typeof e == "bigint" || Number.isInteger(e);
}
var tn = ({ value: e }) => JSON.stringify(e), nn = [
	{
		identify: (e) => typeof e == "string",
		default: !0,
		tag: "tag:yaml.org,2002:str",
		resolve: (e) => e,
		stringify: tn
	},
	{
		identify: (e) => e == null,
		createNode: () => new H(null),
		default: !0,
		tag: "tag:yaml.org,2002:null",
		test: /^null$/,
		resolve: () => null,
		stringify: tn
	},
	{
		identify: (e) => typeof e == "boolean",
		default: !0,
		tag: "tag:yaml.org,2002:bool",
		test: /^true$|^false$/,
		resolve: (e) => e === "true",
		stringify: tn
	},
	{
		identify: en,
		default: !0,
		tag: "tag:yaml.org,2002:int",
		test: /^-?(?:0|[1-9][0-9]*)$/,
		resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
		stringify: ({ value: e }) => en(e) ? e.toString() : JSON.stringify(e)
	},
	{
		identify: (e) => typeof e == "number",
		default: !0,
		tag: "tag:yaml.org,2002:float",
		test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
		resolve: (e) => parseFloat(e),
		stringify: tn
	}
];
[Xt, $t].concat(nn, {
	default: !0,
	tag: "",
	test: /^/,
	resolve(e, t) {
		return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
	}
});
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/pairs.js
function rn(e, t, n) {
	let { replacer: r } = n, i = new Zt(e);
	i.tag = "tag:yaml.org,2002:pairs";
	let a = 0;
	if (t && Symbol.iterator in Object(t)) for (let e of t) {
		typeof r == "function" && (e = r.call(t, String(a++), e));
		let o, s;
		if (Array.isArray(e)) {
			if (e.length === 2) o = e[0], s = e[1];
			else throw TypeError(`Expected [key, value] tuple: ${e}`);
		} else if (e && e instanceof Object) {
			let t = Object.keys(e);
			if (t.length === 1) o = t[0], s = e[o];
			else throw TypeError(`Expected tuple with one key, not ${t.length} keys`);
		} else o = e;
		i.items.push(Gt(o, s, n));
	}
	return i;
}
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/omap.js
var an = class e extends Zt {
	constructor() {
		super(), this.add = G.prototype.add.bind(this), this.delete = G.prototype.delete.bind(this), this.get = G.prototype.get.bind(this), this.has = G.prototype.has.bind(this), this.set = G.prototype.set.bind(this), this.tag = e.tag;
	}
	toJSON(e, t) {
		if (!t) return super.toJSON(e);
		let n = /* @__PURE__ */ new Map();
		t != null && t.onCreate && t.onCreate(n);
		for (let e of this.items) {
			let r, i;
			if (L(e) ? (r = V(e.key, "", t), i = V(e.value, r, t)) : r = V(e, "", t), n.has(r)) throw Error("Ordered maps must not include duplicate keys");
			n.set(r, i);
		}
		return n;
	}
	static from(e, t, n) {
		let r = rn(e, t, n), i = new this();
		return i.items = r.items, i;
	}
};
an.tag = "tag:yaml.org,2002:omap";
//#endregion
//#region node_modules/yaml/browser/dist/schema/yaml-1.1/set.js
var on = class e extends G {
	constructor(t) {
		super(t), this.tag = e.tag;
	}
	add(e) {
		let t;
		t = L(e) ? e : e && typeof e == "object" && "key" in e && "value" in e && e.value === null ? new U(e.key, null) : new U(e, null), W(this.items, t.key) || this.items.push(t);
	}
	get(e, t) {
		let n = W(this.items, e);
		return !t && L(n) ? R(n.key) ? n.key.value : n.key : n;
	}
	set(e, t) {
		if (typeof t != "boolean") throw Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof t}`);
		let n = W(this.items, e);
		n && !t ? this.items.splice(this.items.indexOf(n), 1) : !n && t && this.items.push(new U(e));
	}
	toJSON(e, t) {
		return super.toJSON(e, t, Set);
	}
	toString(e, t, n) {
		if (!e) return JSON.stringify(this);
		if (this.hasAllNullValues(!0)) return super.toString(Object.assign({}, e, { allNullValues: !0 }), t, n);
		throw Error("Set items must all have null values");
	}
	static from(e, t, n) {
		let { replacer: r } = n, i = new this(e);
		if (t && Symbol.iterator in Object(t)) for (let e of t) typeof r == "function" && (e = r.call(t, e, e)), i.items.push(Gt(e, null, n));
		return i;
	}
};
on.tag = "tag:yaml.org,2002:set";
//#endregion
//#region node_modules/yaml/browser/dist/parse/cst-visit.js
var sn = Symbol("break visit"), cn = Symbol("skip children"), ln = Symbol("remove item");
function un(e, t) {
	"type" in e && e.type === "document" && (e = {
		start: e.start,
		value: e.value
	}), dn(Object.freeze([]), e, t);
}
un.BREAK = sn, un.SKIP = cn, un.REMOVE = ln, un.itemAtPath = (e, t) => {
	let n = e;
	for (let [e, r] of t) {
		let t = n == null ? void 0 : n[e];
		if (t && "items" in t) n = t.items[r];
		else return;
	}
	return n;
}, un.parentCollection = (e, t) => {
	let n = un.itemAtPath(e, t.slice(0, -1)), r = t[t.length - 1][0], i = n == null ? void 0 : n[r];
	if (i && "items" in i) return i;
	throw Error("Parent collection not found");
};
function dn(e, t, n) {
	let r = n(t, e);
	if (typeof r == "symbol") return r;
	for (let i of ["key", "value"]) {
		let a = t[i];
		if (a && "items" in a) {
			for (let t = 0; t < a.items.length; ++t) {
				let r = dn(Object.freeze(e.concat([[i, t]])), a.items[t], n);
				if (typeof r == "number") t = r - 1;
				else if (r === sn) return sn;
				else r === ln && (a.items.splice(t, 1), --t);
			}
			typeof r == "function" && i === "key" && (r = r(t, e));
		}
	}
	return typeof r == "function" ? r(t, e) : r;
}
//#endregion
//#region node_modules/@slidev/client/logic/utils.ts
function fn(e = 5) {
	let t = [];
	for (let n = 0; n < e; n++) t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(Math.floor(Math.random() * 52)));
	return t.join("");
}
//#endregion
//#region node_modules/@slidev/client/setup/root.ts
function pn() {
	let e = f().appContext.app, t = g({
		nav: ne(),
		configs: b,
		themeConfigs: _(() => b.themeConfig)
	});
	e.provide(ye, u("none")), e.provide(Te, t), e.provide(ve, _(() => t.nav.currentSlideNo)), e.provide(_e, d(x()));
	for (let e of Fe) e();
	let { clicksContext: n, currentSlideNo: r, hasPrimarySlide: i, isNotesViewer: a, isPresenter: s, isPrintMode: c } = ne();
	le({
		title: S,
		htmlAttrs: b.htmlAttrs
	}), Ie(), ke(`${S} - shared`), Ee(`${S} - drawings`);
	let l = `${location.origin}_${fn()}`, m = _(() => s.value ? "presenter" : "viewer");
	function h() {
		(s.value ? w.value.presenterSend : w.value.viewerSend) && (a.value || c.value || !s.value && !we.includes(location.host.split(":")[0]) || (Oe("page", +r.value), Oe("clicks", n.value.current), Oe("clicksTotal", n.value.total), Oe("lastUpdate", {
			id: l,
			type: m.value,
			time: Date.now()
		})));
	}
	let y = k();
	y.afterEach(h), o(n, h), De((e) => {
		var t;
		(s.value ? w.value.presenterReceive : w.value.viewerReceive) && (!i.value || c.value || ((t = e.lastUpdate) == null ? void 0 : t.type) !== m.value && (+e.page != +r.value || +n.value.current != +e.clicks) && (T.value = !1, y.replace({
			path: v(e.page, s.value),
			query: p(p({}, y.currentRoute.value.query), {}, { clicks: e.clicks || 0 })
		})));
	});
}
//#endregion
//#region node_modules/@slidev/client/App.vue
var mn = /* @__PURE__ */ a({
	__name: "App",
	setup(a) {
		return pn(), e(() => {
			for (let [e, t] of Object.entries(C.value)) document.body.style.setProperty(e, t.toString());
		}), (e, a) => {
			let o = i("RouterView");
			return r(), t(c, null, [n(o), s("v-if", !0)], 64);
		};
	}
});
//#endregion
//#region node_modules/unhead/dist/shared/unhead.C5Bksi2B.mjs
function hn(e, t, n) {
	let r = e.push, i = e;
	i.ssr = !1, i.hooks = t, i.dirty = !!i.dirty, i.use = (e) => je(i, e), i.render = () => n(i);
	function a() {
		t.callHook("entries:updated", i), i._b || i.render();
	}
	return i.invalidate = () => {
		for (let e of i.entries.values()) delete e._tags;
		i.dirty = !0, a();
	}, i.push = (n, o) => {
		let s = o != null && o.onRendered ? t.hook("dom:rendered", o.onRendered) : void 0, c = r(n, o), l = e.entries.get(c._i);
		return l && (l._o = n), i.dirty = !0, a(), {
			_i: c._i,
			patch(e) {
				c.patch(e), i.dirty = !0, a();
			},
			dispose() {
				s == null || s(), e.entries.has(c._i) && (c.dispose(), i.invalidate());
			}
		};
	}, i;
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.Bjbp1C8D.mjs
var gn = /\s+/;
// @__NO_SIDE_EFFECTS__
function _n(e = {}) {
	return (t) => bn(t, e);
}
function vn(e) {
	for (let t of e.entries.values()) if (t._pending !== void 0) return !0;
	return !1;
}
function yn(e, t) {
	let n = {
		_d: t,
		_t: t.title,
		_e: /* @__PURE__ */ new Map([["htmlAttrs", t.documentElement], ["bodyAttrs", t.body]]),
		_p: {},
		_s: {},
		_l: /* @__PURE__ */ new Map()
	};
	for (let t of e.entries.values()) if (t._o !== void 0) {
		let e = t._o;
		for (let t of ["bodyAttrs", "htmlAttrs"]) {
			var r;
			let i = (r = e[t]) == null ? void 0 : r.class;
			if (typeof i == "string") {
				let e = n._e.get(t);
				for (let r of i.split(gn)) r && (n._p[`${t}:attr:class:${r}`] = () => e.classList.remove(r));
			}
		}
	}
	return n;
}
function bn(e, t = {}) {
	let n = t.document || e.resolvedOptions.document, r = e._dom;
	if (!n || e._du || r && r._d === n && !e.dirty && !vn(e)) return !1;
	let i = n.defaultView;
	e._du = !0;
	let a = !1;
	try {
		let c = function(e, t, n) {
			p._s[e] = !n && m[e] || t, delete m[e];
		}, l = function(e, t, n, r, i, a) {
			let o = `${e}:event:${t}`, s = p._l.get(o);
			if (s && s[0] === a && s[1] === n && s[2] === r) {
				c(o, s[4]);
				return;
			}
			s == null || s[4]();
			let l = `data-${t}`, u = ((e) => r.call(i, e)), d = () => {
				var e;
				a.removeEventListener(n, u), i.getAttribute(l) === "" && i.removeAttribute(l), ((e = p._l.get(o)) == null ? void 0 : e[3]) === u && p._l.delete(o);
			};
			a.addEventListener(n, u), p._l.set(o, [
				a,
				n,
				r,
				u,
				d
			]), i.setAttribute(l, ""), c(o, d, !0);
		}, u = function({ id: e, $el: t, tag: n }) {
			if (p._e.set(e, t), !n.tag.endsWith("Attrs")) {
				let r = n.textContent;
				r != null && r !== "" && (r !== t.textContent && (t.textContent = r), c(`${e}:text`, () => {
					t.textContent === r && (t.textContent = "");
				}, !0));
				let i = n.innerHTML;
				i != null && i !== "" && (i !== t.innerHTML && (t.innerHTML = i), c(`${e}:html`, () => {
					t.innerHTML === i && (t.innerHTML = "");
				}, !0));
				let a = `${e}:el`;
				c(a, m[a] || (() => {
					t == null || t.remove(), p._e.delete(e);
				}));
			}
			for (let a in n.props) {
				let o = n.props[a];
				if (a[0] === "o" && a[1] === "n" && typeof o == "function") {
					var r;
					let s = a.slice(2);
					t != null && (r = t.dataset) != null && r[`${a}fired`] && o.call(t, new ((i == null ? void 0 : i.Event) || Event)(s)), l(e, a, s, o, t, n.tag === "bodyAttrs" && i ? i : t);
					continue;
				}
				let s = `${e}:attr:${a}`;
				if (a === "class" && o) for (let e of o) {
					let n = `${s}:${e}`;
					c(n, m[n] || (() => t.classList.remove(e))), t.classList.contains(e) || t.classList.add(e);
				}
				else if (a === "style" && o) for (let [e, n] of o) {
					let r = `${s}:${e}`;
					c(r, m[r] || (() => t.style.removeProperty(e))), t.style.setProperty(e, n);
				}
				else o !== !1 && o !== null && (t.getAttribute(a) !== o && t.setAttribute(a, o === !0 ? "" : String(o)), c(s, m[s] || (() => t.removeAttribute(a))));
			}
		}, d = {
			shouldRender: !0,
			tags: []
		};
		if (re(e, "dom:beforeRender", d), !d.shouldRender) return !1;
		let f = r;
		if ((f == null ? void 0 : f._d) !== n) {
			if (f) {
				for (let e in f._s) f._s[e]();
				for (let e in f._p) f._p[e]();
				f._s = f._p = {}, f._e.clear(), f._l.clear();
			}
			f = void 0;
		}
		f ? f._p = f._s : f = yn(e, n), f._s = {};
		let p = f, m = p._p, h = [], g = {};
		e.dirty = !1;
		let _ = ce(e, t.tagWeight ? { tagWeight: t.tagWeight } : void 0), v = [], y = {};
		for (let e of _) {
			let t = y[e._d] || 0, r = (t ? `${e._d}:${t}` : e._d) || e._h, i = {
				tag: e,
				id: r,
				shouldRender: !0
			};
			if (e.tag === "meta" && e._d && E(e._d) && (y[e._d] = t + 1), v.push(i), e.tag === "title") {
				n.title = e.textContent, c("title:", () => n.title = p._t);
				continue;
			}
			i.$el = p._e.get(r), i.$el ? u(i) : ue.has(e.tag) && h.push(i);
		}
		if (h.length) {
			let e = new Set(p._e.values());
			for (let t of [...n.body.children, ...n.head.children]) {
				let n = t.tagName.toLowerCase();
				if (!ue.has(n) || e.has(t)) continue;
				let r = { innerHTML: t.innerHTML };
				for (let e of t.getAttributeNames()) r[e] = t.getAttribute(e);
				let i = oe({
					tag: n,
					props: {}
				}, r);
				i.key = t.getAttribute("data-hid") || void 0;
				let a = se(i) || D(i), o = a, s = 1;
				for (; p._e.has(o);) o = `${a}:${s++}`;
				p._e.set(o, t);
			}
		}
		for (let e of h) {
			var o, s;
			let t = p._e.get(e.id);
			e.$el = t || n.createElement(e.tag.tag), u(e), t || ((s = g[o = e.tag.tagPosition || "head"]) == null ? g[o] = n.createDocumentFragment() : s).appendChild(e.$el);
		}
		g.head && n.head.appendChild(g.head), g.bodyOpen && n.body.insertBefore(g.bodyOpen, n.body.firstChild), g.bodyClose && n.body.appendChild(g.bodyClose);
		for (let e in m) m[e]();
		e._dom = p, a = !0, re(e, "dom:rendered", { renders: v });
	} catch (t) {
		throw e.dirty = !0, t;
	} finally {
		e._du = !1;
	}
	return a && (e.dirty || vn(e)) && bn(e, t), a;
}
//#endregion
//#region node_modules/unhead/dist/shared/unhead.oZ7pkTV1.mjs
var xn = (e) => typeof e.tagPriority == "number" ? e.tagPriority : 100 + (ie[e.tagPriority] || 0);
function Sn(e = {}) {
	var t, n;
	e.document = e.document || (typeof window < "u" ? document : void 0);
	let r = e.render || /* @__PURE__ */ _n({ document: e.document }), i = hn(/* @__PURE__ */ Me(r, {
		document: e.document,
		propResolvers: e.propResolvers,
		_tagWeight: xn,
		init: []
	}), O(e.hooks), r);
	return (t = e.plugins) == null || t.forEach((e) => i.use(e)), (n = e.init) == null || n.forEach((e) => e && i.push(e)), i;
}
//#endregion
//#region node_modules/@unhead/vue/dist/client.mjs
// @__NO_SIDE_EFFECTS__
function Cn(e = {}) {
	let t = /* @__PURE__ */ _n(), n, r = 0;
	return n = Sn(p({ render: () => {
		let e = ++r;
		setTimeout(() => {
			e === r && t(n);
		}, 0);
	} }, e)), n.install = ae(n), n;
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.960a00578b.ts
var wn = /* #__PURE__ */ Object.assign({}), Tn = /* #__PURE__ */ Object.assign({}), En = [Object.values(wn)[0], Object.values(Tn)[0]].filter(Boolean), Dn = /[\s,]+/;
function On(e, t) {
	let n = t.map((e) => `${Se}${e}`);
	e.classList.forEach((t) => {
		t.startsWith("slidev-vclick-anim-") && !n.includes(t) && e.classList.remove(t);
	}), n.forEach((t) => e.classList.add(t));
}
function kn() {
	return { install(t) {
		t.directive("click", {
			name: "v-click",
			mounted(t, n) {
				let r = jn(t, n, n.value);
				r != null && (t.classList.toggle(M, !0), t.dataset.slidevClicksStart = String(r.start), Number.isFinite(r.end) && (t.dataset.slidevClicksEnd = String(r.end)), t.watchStopHandle = e(() => {
					let e = r.isActive.value, n = r.isCurrent.value, i = e && !n;
					r.flagHide ? (t.classList.toggle(j, e), t.classList.toggle(be, e)) : t.classList.toggle(j, !e), On(t, r.flagAnimations.value), t.classList.toggle(N, n), t.classList.toggle(Ce, i);
				}));
			},
			unmounted: Mn
		}), t.directive("after", {
			name: "v-after",
			mounted(t, n) {
				let r = jn(t, n, "+0");
				r != null && (t.classList.toggle(M, !0), t.watchStopHandle = e(() => {
					let e = r.isActive.value, n = r.isCurrent.value, i = e && !n;
					r.flagHide ? (t.classList.toggle(j, e), t.classList.toggle(be, e)) : t.classList.toggle(j, !e), On(t, r.flagAnimations.value), t.classList.toggle(N, n), t.classList.toggle(Ce, i);
				}));
			},
			unmounted: Mn
		}), t.directive("click-hide", {
			name: "v-click-hide",
			mounted(t, n) {
				let r = jn(t, n, n.value, !0);
				r != null && (t.classList.toggle(M, !0), t.watchStopHandle = e(() => {
					let e = r.isActive.value, n = r.isCurrent.value, i = e && !n;
					t.classList.toggle(j, e), t.classList.toggle(be, e), On(t, r.flagAnimations.value), t.classList.toggle(N, n), t.classList.toggle(Ce, i);
				}));
			},
			unmounted: Mn
		});
	} };
}
var An = /* @__PURE__ */ new Map();
function jn(e, t, n, r = !1) {
	var i;
	let a = (i = P(t, "$$slidev-clicks-context")) == null ? void 0 : i.value, o = P(t, xe);
	if (!e || !a) return null;
	let s = r || t.modifiers.hide !== !1 && t.modifiers.hide != null, c = Object.keys(p({}, t.modifiers)).filter((e) => e !== "hide"), l = _(() => {
		if (c.length > 0) return c;
		let e = (o == null ? void 0 : o.clickAnimation) || b.clickAnimation;
		return e ? e.split(Dn).filter(Boolean) : [];
	}), u = a.calculate(n);
	if (!u) return null;
	a.register(e, u);
	let d = _(() => s ? !u.isActive.value : u.isActive.value), f = _(() => d.value ? "shown" : Number.isFinite(u.end) ? a.current < u.start ? "before" : "after" : s ? "after" : "before"), m = p(p({}, u), {}, {
		isShown: d,
		visibilityState: f,
		flagHide: s,
		flagAnimations: l
	});
	return An.set(e, m), m;
}
function Mn(e, t) {
	var n, r;
	e.classList.toggle(M, !1);
	let i = (n = P(t, "$$slidev-clicks-context")) == null ? void 0 : n.value;
	i == null || i.unregister(e), (r = e.watchStopHandle) == null || r.call(e);
}
//#endregion
//#region node_modules/@slidev/client/composables/useDragElements.ts
function Nn(e) {
	return () => {};
}
function Pn(e, t, n, r = !1) {
	var i, a, s, c, l, d;
	function f(t) {
		return e ? P(e, t) : me(t);
	}
	let p = f(ye), m = (i = f("$$slidev-fontmatter")) == null ? {} : i, h = f(ve), g = _(() => Nn(h.value)), v = (a = f("$$slidev-slide-scale")) == null ? u(1) : a, y = (s = f("$$slidev-slide-zoom")) == null ? u(1) : s, { left: b, top: x, stop: S } = Ae((c = f("$$slidev-slide-element")) == null ? u() : c), { isPrintMode: ee } = ne(), C = ["slide", "presenter"].includes(p.value) && !ee.value, w = e ? "directive" : "prop", T = fn(), E;
	if (Array.isArray(t)) E = t;
	else if (typeof t == "string" && t.includes(",")) E = t.split(",").map(Number);
	else if (t != null) {
		var re;
		w = "frontmatter", T = `${t}`, t = m == null || (re = m.dragPos) == null ? void 0 : re[T], E = t == null ? void 0 : t.split(",").map(Number);
	}
	if (w !== "frontmatter" && !n) throw Error("[Slidev] Can not identify the source position of the v-drag element, please provide an explicit `id` prop.");
	let ie = [S], D = !r && t != null && !Number.isFinite(E == null ? void 0 : E[3]);
	E != null || (E = [
		NaN,
		NaN,
		0
	]);
	let O = u(E[2]), ae = u(E[0] + E[2] / 2), oe = u(r || (l = E[4]) == null ? 0 : l), se = _(() => oe.value * Math.PI / 180), ce = _(() => Math.sin(se.value)), le = _(() => Math.cos(se.value)), ue = u(), k = u({
		left: 0,
		top: 0,
		width: 0,
		height: 0
	}), de = u(0);
	function fe() {
		if (!ue.value) return;
		let e = ue.value.getBoundingClientRect();
		k.value = {
			left: e.left / y.value,
			top: e.top / y.value,
			width: e.width / y.value,
			height: e.height / y.value
		}, de.value = (k.value.width + k.value.height) / v.value / (Math.abs(ce.value) + Math.abs(le.value)) - O.value;
	}
	ie.push(o(O, fe, { flush: "post" }));
	let pe = u((d = E[3]) == null ? 0 : d), A = D ? _({
		get: () => (D ? de.value : pe.value) || 0,
		set: (e) => !D && (pe.value = e)
	}) : pe, j = u(D ? E[1] : E[1] + E[3] / 2), M = D ? _({
		get: () => j.value + A.value / 2,
		set: (e) => j.value = e - A.value / 2
	}) : j, _e = _(() => Number.isFinite(ae.value) ? {
		position: "absolute",
		zIndex: 100,
		left: `${ae.value - O.value / 2}px`,
		top: `${M.value - A.value / 2}px`,
		width: `${O.value}px`,
		height: D ? void 0 : `${A.value}px`,
		transformOrigin: "center center",
		transform: `rotate(${oe.value}deg)`
	} : {
		position: "absolute",
		zIndex: 100
	});
	ie.push(o([
		ae,
		M,
		O,
		A,
		oe
	], ([e, t, r, i, a]) => {
		let o = [
			e - r / 2,
			t - i / 2,
			r
		].map(Math.round).join();
		o += D ? w === "directive" ? ",NaN" : ",_" : `,${Math.round(i)}`, Math.round(a) !== 0 && (o += `,${Math.round(a)}`), w === "directive" && (o = `[${o}]`), g.value(T, o, w, n);
	}));
	let N = {
		dragId: T,
		dataSource: w,
		markdownSource: n,
		isArrow: r,
		zoom: y,
		autoHeight: D,
		x0: ae,
		y0: M,
		width: O,
		height: A,
		rotate: oe,
		container: ue,
		containerStyle: _e,
		watchStopHandles: ie,
		dragging: _(() => te.value === N),
		mounted() {
			C && (fe(), t || setTimeout(() => {
				fe(), ae.value = (k.value.left + k.value.width / 2 - b.value) / v.value, M.value = (k.value.top - x.value) / v.value, O.value = k.value.width / v.value, A.value = k.value.height / v.value;
			}, 100));
		},
		unmounted() {
			C && N.stopDragging();
		},
		startDragging() {
			C && (fe(), te.value = N);
		},
		stopDragging() {
			C && te.value === N && (te.value = null);
		}
	};
	return ie.push(he(ue, (e) => {
		let t = document.querySelector("#drag-control-container");
		t && e.target && t.contains(e.target) || N.stopDragging();
	}), o(ge(), (e) => {
		e || N.stopDragging();
	})), N;
}
//#endregion
//#region node_modules/@slidev/client/modules/v-drag.ts
function Fn() {
	return { install(e) {
		e.directive("drag", {
			name: "v-drag",
			created(e, t, n) {
				var r;
				let i = Pn(t, t.value, (r = n.props) == null ? void 0 : r.markdownSource);
				n.props && (n.props = p({}, n.props), delete n.props.markdownSource), i.container.value = e, e.draggingState = i, e.dataset.dragId = i.dragId, i.watchStopHandles.push(o(i.containerStyle, (t) => {
					for (let [n, r] of Object.entries(t)) r && (e.style[n] = r);
				}, { immediate: !0 })), e.addEventListener("dblclick", i.startDragging);
			},
			mounted(e) {
				e.draggingState.mounted();
			},
			unmounted(e) {
				let t = e.draggingState;
				t.unmounted(), e.removeEventListener("dblclick", t.startDragging), t.watchStopHandles.forEach((e) => e());
			}
		});
	} };
}
//#endregion
//#region node_modules/roughjs/bin/math.js
function In() {
	return Math.floor(Math.random() * Math.pow(2, 31));
}
var Ln = class {
	constructor(e) {
		this.seed = e;
	}
	next() {
		return this.seed ? (Math.pow(2, 31) - 1 & (this.seed = Math.imul(48271, this.seed))) / Math.pow(2, 31) : Math.random();
	}
};
//#endregion
//#region node_modules/hachure-fill/bin/hachure.js
function Rn(e, t, n) {
	if (e && e.length) {
		let [r, i] = t, a = Math.PI / 180 * n, o = Math.cos(a), s = Math.sin(a);
		for (let t of e) {
			let [e, n] = t;
			t[0] = (e - r) * o - (n - i) * s + r, t[1] = (e - r) * s + (n - i) * o + i;
		}
	}
}
function zn(e, t, n) {
	let r = [];
	e.forEach((e) => r.push(...e)), Rn(r, t, n);
}
function Bn(e, t) {
	return e[0] === t[0] && e[1] === t[1];
}
function Vn(e, t, n, r = 1) {
	let i = n, a = Math.max(t, .1), o = e[0] && e[0][0] && typeof e[0][0] == "number" ? [e] : e, s = [0, 0];
	if (i) for (let e of o) Rn(e, s, i);
	let c = Hn(o, a, r);
	if (i) {
		for (let e of o) Rn(e, s, -i);
		zn(c, s, -i);
	}
	return c;
}
function Hn(e, t, n) {
	let r = [];
	for (let t of e) {
		let e = [...t];
		Bn(e[0], e[e.length - 1]) || e.push([e[0][0], e[0][1]]), e.length > 2 && r.push(e);
	}
	let i = [];
	t = Math.max(t, .1);
	let a = [];
	for (let e of r) for (let t = 0; t < e.length - 1; t++) {
		let n = e[t], r = e[t + 1];
		if (n[1] !== r[1]) {
			let e = Math.min(n[1], r[1]);
			a.push({
				ymin: e,
				ymax: Math.max(n[1], r[1]),
				x: e === n[1] ? n[0] : r[0],
				islope: (r[0] - n[0]) / (r[1] - n[1])
			});
		}
	}
	if (a.sort((e, t) => e.ymin < t.ymin ? -1 : e.ymin > t.ymin ? 1 : e.x < t.x ? -1 : e.x > t.x ? 1 : e.ymax === t.ymax ? 0 : (e.ymax - t.ymax) / Math.abs(e.ymax - t.ymax)), !a.length) return i;
	let o = [], s = a[0].ymin, c = 0;
	for (; o.length || a.length;) {
		if (a.length) {
			let e = -1;
			for (let t = 0; t < a.length && !(a[t].ymin > s); t++) e = t;
			a.splice(0, e + 1).forEach((e) => {
				o.push({
					s,
					edge: e
				});
			});
		}
		if (o = o.filter((e) => !(e.edge.ymax <= s)), o.sort((e, t) => e.edge.x === t.edge.x ? 0 : (e.edge.x - t.edge.x) / Math.abs(e.edge.x - t.edge.x)), (n !== 1 || c % t === 0) && o.length > 1) for (let e = 0; e < o.length; e += 2) {
			let t = e + 1;
			if (t >= o.length) break;
			let n = o[e].edge, r = o[t].edge;
			i.push([[Math.round(n.x), s], [Math.round(r.x), s]]);
		}
		s += n, o.forEach((e) => {
			e.edge.x = e.edge.x + n * e.edge.islope;
		}), c++;
	}
	return i;
}
//#endregion
//#region node_modules/roughjs/bin/fillers/scan-line-hachure.js
function Un(e, t) {
	var n;
	let r = t.hachureAngle + 90, i = t.hachureGap;
	i < 0 && (i = t.strokeWidth * 4), i = Math.round(Math.max(i, .1));
	let a = 1;
	return t.roughness >= 1 && (((n = t.randomizer) == null ? void 0 : n.next()) || Math.random()) > .7 && (a = i), Vn(e, i, r, a || 1);
}
//#endregion
//#region node_modules/roughjs/bin/fillers/hachure-filler.js
var Wn = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		return this._fillPolygons(e, t);
	}
	_fillPolygons(e, t) {
		let n = Un(e, t);
		return {
			type: "fillSketch",
			ops: this.renderLines(n, t)
		};
	}
	renderLines(e, t) {
		let n = [];
		for (let r of e) n.push(...this.helper.doubleLineOps(r[0][0], r[0][1], r[1][0], r[1][1], t));
		return n;
	}
};
//#endregion
//#region node_modules/roughjs/bin/geometry.js
function Gn(e) {
	let t = e[0], n = e[1];
	return Math.sqrt(Math.pow(t[0] - n[0], 2) + Math.pow(t[1] - n[1], 2));
}
//#endregion
//#region node_modules/roughjs/bin/fillers/zigzag-filler.js
var Kn = class extends Wn {
	fillPolygons(e, t) {
		let n = t.hachureGap;
		n < 0 && (n = t.strokeWidth * 4), n = Math.max(n, .1);
		let r = Un(e, Object.assign({}, t, { hachureGap: n })), i = Math.PI / 180 * t.hachureAngle, a = [], o = n * .5 * Math.cos(i), s = n * .5 * Math.sin(i);
		for (let [e, t] of r) Gn([e, t]) && a.push([[e[0] - o, e[1] + s], [...t]], [[e[0] + o, e[1] - s], [...t]]);
		return {
			type: "fillSketch",
			ops: this.renderLines(a, t)
		};
	}
}, qn = class extends Wn {
	fillPolygons(e, t) {
		let n = this._fillPolygons(e, t), r = Object.assign({}, t, { hachureAngle: t.hachureAngle + 90 }), i = this._fillPolygons(e, r);
		return n.ops = n.ops.concat(i.ops), n;
	}
}, Jn = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		t = Object.assign({}, t, { hachureAngle: 0 });
		let n = Un(e, t);
		return this.dotsOnLines(n, t);
	}
	dotsOnLines(e, t) {
		let n = [], r = t.hachureGap;
		r < 0 && (r = t.strokeWidth * 4), r = Math.max(r, .1);
		let i = t.fillWeight;
		i < 0 && (i = t.strokeWidth / 2);
		let a = r / 4;
		for (let o of e) {
			let e = Gn(o), s = e / r, c = Math.ceil(s) - 1, l = e - c * r, u = (o[0][0] + o[1][0]) / 2 - r / 4, d = Math.min(o[0][1], o[1][1]);
			for (let e = 0; e < c; e++) {
				let o = d + l + e * r, s = u - a + Math.random() * 2 * a, c = o - a + Math.random() * 2 * a, f = this.helper.ellipse(s, c, i, i, t);
				n.push(...f.ops);
			}
		}
		return {
			type: "fillSketch",
			ops: n
		};
	}
}, Yn = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		let n = Un(e, t);
		return {
			type: "fillSketch",
			ops: this.dashedLine(n, t)
		};
	}
	dashedLine(e, t) {
		let n = t.dashOffset < 0 ? t.hachureGap < 0 ? t.strokeWidth * 4 : t.hachureGap : t.dashOffset, r = t.dashGap < 0 ? t.hachureGap < 0 ? t.strokeWidth * 4 : t.hachureGap : t.dashGap, i = [];
		return e.forEach((e) => {
			let a = Gn(e), o = Math.floor(a / (n + r)), s = (a + r - o * (n + r)) / 2, c = e[0], l = e[1];
			c[0] > l[0] && (c = e[1], l = e[0]);
			let u = Math.atan((l[1] - c[1]) / (l[0] - c[0]));
			for (let e = 0; e < o; e++) {
				let a = e * (n + r), o = a + n, l = [c[0] + a * Math.cos(u) + s * Math.cos(u), c[1] + a * Math.sin(u) + s * Math.sin(u)], d = [c[0] + o * Math.cos(u) + s * Math.cos(u), c[1] + o * Math.sin(u) + s * Math.sin(u)];
				i.push(...this.helper.doubleLineOps(l[0], l[1], d[0], d[1], t));
			}
		}), i;
	}
}, Xn = class {
	constructor(e) {
		this.helper = e;
	}
	fillPolygons(e, t) {
		let n = t.hachureGap < 0 ? t.strokeWidth * 4 : t.hachureGap, r = t.zigzagOffset < 0 ? n : t.zigzagOffset;
		t = Object.assign({}, t, { hachureGap: n + r });
		let i = Un(e, t);
		return {
			type: "fillSketch",
			ops: this.zigzagLines(i, r, t)
		};
	}
	zigzagLines(e, t, n) {
		let r = [];
		return e.forEach((e) => {
			let i = Gn(e), a = Math.round(i / (2 * t)), o = e[0], s = e[1];
			o[0] > s[0] && (o = e[1], s = e[0]);
			let c = Math.atan((s[1] - o[1]) / (s[0] - o[0]));
			for (let e = 0; e < a; e++) {
				let i = e * 2 * t, a = (e + 1) * 2 * t, s = Math.sqrt(2 * Math.pow(t, 2)), l = [o[0] + i * Math.cos(c), o[1] + i * Math.sin(c)], u = [o[0] + a * Math.cos(c), o[1] + a * Math.sin(c)], d = [l[0] + s * Math.cos(c + Math.PI / 4), l[1] + s * Math.sin(c + Math.PI / 4)];
				r.push(...this.helper.doubleLineOps(l[0], l[1], d[0], d[1], n), ...this.helper.doubleLineOps(d[0], d[1], u[0], u[1], n));
			}
		}), r;
	}
}, K = {};
function Zn(e, t) {
	let n = e.fillStyle || "hachure";
	if (!K[n]) switch (n) {
		case "zigzag":
			K[n] || (K[n] = new Kn(t));
			break;
		case "cross-hatch":
			K[n] || (K[n] = new qn(t));
			break;
		case "dots":
			K[n] || (K[n] = new Jn(t));
			break;
		case "dashed":
			K[n] || (K[n] = new Yn(t));
			break;
		case "zigzag-line":
			K[n] || (K[n] = new Xn(t));
			break;
		default: n = "hachure", K[n] || (K[n] = new Wn(t));
	}
	return K[n];
}
//#endregion
//#region node_modules/path-data-parser/lib/parser.js
var Qn = 0, $n = 1, er = 2, tr = {
	A: 7,
	a: 7,
	C: 6,
	c: 6,
	H: 1,
	h: 1,
	L: 2,
	l: 2,
	M: 2,
	m: 2,
	Q: 4,
	q: 4,
	S: 4,
	s: 4,
	T: 2,
	t: 2,
	V: 1,
	v: 1,
	Z: 0,
	z: 0
};
function nr(e) {
	let t = [];
	for (; e !== "";) if (e.match(/^([ \t\r\n,]+)/)) e = e.substr(RegExp.$1.length);
	else if (e.match(/^([aAcChHlLmMqQsStTvVzZ])/)) t[t.length] = {
		type: Qn,
		text: RegExp.$1
	}, e = e.substr(RegExp.$1.length);
	else if (e.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/)) t[t.length] = {
		type: $n,
		text: `${parseFloat(RegExp.$1)}`
	}, e = e.substr(RegExp.$1.length);
	else return [];
	return t[t.length] = {
		type: er,
		text: ""
	}, t;
}
function rr(e, t) {
	return e.type === t;
}
function ir(e) {
	let t = [], n = nr(e), r = "BOD", i = 0, a = n[i];
	for (; !rr(a, er);) {
		let o = 0, s = [];
		if (r === "BOD") {
			if (a.text === "M" || a.text === "m") i++, o = tr[a.text], r = a.text;
			else return ir("M0,0" + e);
		} else rr(a, $n) ? o = tr[r] : (i++, o = tr[a.text], r = a.text);
		if (i + o < n.length) {
			for (let e = i; e < i + o; e++) {
				let t = n[e];
				if (rr(t, $n)) s[s.length] = +t.text;
				else throw Error("Param not a number: " + r + "," + t.text);
			}
			if (typeof tr[r] == "number") {
				let e = {
					key: r,
					data: s
				};
				t.push(e), i += o, a = n[i], r === "M" && (r = "L"), r === "m" && (r = "l");
			} else throw Error("Bad segment: " + r);
		} else throw Error("Path data ended short");
	}
	return t;
}
//#endregion
//#region node_modules/path-data-parser/lib/absolutize.js
function ar(e) {
	let t = 0, n = 0, r = 0, i = 0, a = [];
	for (let { key: o, data: s } of e) switch (o) {
		case "M":
			a.push({
				key: "M",
				data: [...s]
			}), [t, n] = s, [r, i] = s;
			break;
		case "m":
			t += s[0], n += s[1], a.push({
				key: "M",
				data: [t, n]
			}), r = t, i = n;
			break;
		case "L":
			a.push({
				key: "L",
				data: [...s]
			}), [t, n] = s;
			break;
		case "l":
			t += s[0], n += s[1], a.push({
				key: "L",
				data: [t, n]
			});
			break;
		case "C":
			a.push({
				key: "C",
				data: [...s]
			}), t = s[4], n = s[5];
			break;
		case "c": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "C",
				data: e
			}), t = e[4], n = e[5];
			break;
		}
		case "Q":
			a.push({
				key: "Q",
				data: [...s]
			}), t = s[2], n = s[3];
			break;
		case "q": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "Q",
				data: e
			}), t = e[2], n = e[3];
			break;
		}
		case "A":
			a.push({
				key: "A",
				data: [...s]
			}), t = s[5], n = s[6];
			break;
		case "a":
			t += s[5], n += s[6], a.push({
				key: "A",
				data: [
					s[0],
					s[1],
					s[2],
					s[3],
					s[4],
					t,
					n
				]
			});
			break;
		case "H":
			a.push({
				key: "H",
				data: [...s]
			}), t = s[0];
			break;
		case "h":
			t += s[0], a.push({
				key: "H",
				data: [t]
			});
			break;
		case "V":
			a.push({
				key: "V",
				data: [...s]
			}), n = s[0];
			break;
		case "v":
			n += s[0], a.push({
				key: "V",
				data: [n]
			});
			break;
		case "S":
			a.push({
				key: "S",
				data: [...s]
			}), t = s[2], n = s[3];
			break;
		case "s": {
			let e = s.map((e, r) => r % 2 ? e + n : e + t);
			a.push({
				key: "S",
				data: e
			}), t = e[2], n = e[3];
			break;
		}
		case "T":
			a.push({
				key: "T",
				data: [...s]
			}), t = s[0], n = s[1];
			break;
		case "t":
			t += s[0], n += s[1], a.push({
				key: "T",
				data: [t, n]
			});
			break;
		case "Z":
		case "z": a.push({
			key: "Z",
			data: []
		}), t = r, n = i;
	}
	return a;
}
//#endregion
//#region node_modules/path-data-parser/lib/normalize.js
function or(e) {
	let t = [], n = "", r = 0, i = 0, a = 0, o = 0, s = 0, c = 0;
	for (let { key: l, data: u } of e) {
		switch (l) {
			case "M":
				t.push({
					key: "M",
					data: [...u]
				}), [r, i] = u, [a, o] = u;
				break;
			case "C":
				t.push({
					key: "C",
					data: [...u]
				}), r = u[4], i = u[5], s = u[2], c = u[3];
				break;
			case "L":
				t.push({
					key: "L",
					data: [...u]
				}), [r, i] = u;
				break;
			case "H":
				r = u[0], t.push({
					key: "L",
					data: [r, i]
				});
				break;
			case "V":
				i = u[0], t.push({
					key: "L",
					data: [r, i]
				});
				break;
			case "S": {
				let e = 0, a = 0;
				n === "C" || n === "S" ? (e = r + (r - s), a = i + (i - c)) : (e = r, a = i), t.push({
					key: "C",
					data: [
						e,
						a,
						...u
					]
				}), s = u[0], c = u[1], r = u[2], i = u[3];
				break;
			}
			case "T": {
				let [e, a] = u, o = 0, l = 0;
				n === "Q" || n === "T" ? (o = r + (r - s), l = i + (i - c)) : (o = r, l = i);
				let d = r + 2 * (o - r) / 3, f = i + 2 * (l - i) / 3, p = e + 2 * (o - e) / 3, m = a + 2 * (l - a) / 3;
				t.push({
					key: "C",
					data: [
						d,
						f,
						p,
						m,
						e,
						a
					]
				}), s = o, c = l, r = e, i = a;
				break;
			}
			case "Q": {
				let [e, n, a, o] = u, l = r + 2 * (e - r) / 3, d = i + 2 * (n - i) / 3, f = a + 2 * (e - a) / 3, p = o + 2 * (n - o) / 3;
				t.push({
					key: "C",
					data: [
						l,
						d,
						f,
						p,
						a,
						o
					]
				}), s = e, c = n, r = a, i = o;
				break;
			}
			case "A": {
				let e = Math.abs(u[0]), n = Math.abs(u[1]), a = u[2], o = u[3], s = u[4], c = u[5], l = u[6];
				e === 0 || n === 0 ? (t.push({
					key: "C",
					data: [
						r,
						i,
						c,
						l,
						c,
						l
					]
				}), r = c, i = l) : (r !== c || i !== l) && (lr(r, i, c, l, e, n, a, o, s).forEach(function(e) {
					t.push({
						key: "C",
						data: e
					});
				}), r = c, i = l);
				break;
			}
			case "Z": t.push({
				key: "Z",
				data: []
			}), r = a, i = o;
		}
		n = l;
	}
	return t;
}
function sr(e) {
	return Math.PI * e / 180;
}
function cr(e, t, n) {
	return [e * Math.cos(n) - t * Math.sin(n), e * Math.sin(n) + t * Math.cos(n)];
}
function lr(e, t, n, r, i, a, o, s, c, l) {
	let u = sr(o), d = [], f = 0, p = 0, m = 0, h = 0;
	if (l) [f, p, m, h] = l;
	else {
		[e, t] = cr(e, t, -u), [n, r] = cr(n, r, -u);
		let o = (e - n) / 2, l = (t - r) / 2, d = o * o / (i * i) + l * l / (a * a);
		d > 1 && (d = Math.sqrt(d), i = d * i, a = d * a);
		let g = s === c ? -1 : 1, _ = i * i, v = a * a, y = _ * v - _ * l * l - v * o * o, b = _ * l * l + v * o * o, x = g * Math.sqrt(Math.abs(y / b));
		m = x * i * l / a + (e + n) / 2, h = x * -a * o / i + (t + r) / 2, f = Math.asin(parseFloat(((t - h) / a).toFixed(9))), p = Math.asin(parseFloat(((r - h) / a).toFixed(9))), e < m && (f = Math.PI - f), n < m && (p = Math.PI - p), f < 0 && (f = Math.PI * 2 + f), p < 0 && (p = Math.PI * 2 + p), c && f > p && (f -= Math.PI * 2), !c && p > f && (p -= Math.PI * 2);
	}
	let g = p - f;
	if (Math.abs(g) > Math.PI * 120 / 180) {
		let e = p, t = n, s = r;
		p = c && p > f ? f + Math.PI * 120 / 180 * 1 : f + Math.PI * 120 / 180 * -1, n = m + i * Math.cos(p), r = h + a * Math.sin(p), d = lr(n, r, t, s, i, a, o, 0, c, [
			p,
			e,
			m,
			h
		]);
	}
	g = p - f;
	let _ = Math.cos(f), v = Math.sin(f), y = Math.cos(p), b = Math.sin(p), x = Math.tan(g / 4), S = 4 / 3 * i * x, ee = 4 / 3 * a * x, C = [e, t], w = [e + S * v, t - ee * _], te = [n + S * b, r - ee * y], T = [n, r];
	if (w[0] = 2 * C[0] - w[0], w[1] = 2 * C[1] - w[1], l) return [
		w,
		te,
		T
	].concat(d);
	{
		d = [
			w,
			te,
			T
		].concat(d);
		let e = [];
		for (let t = 0; t < d.length; t += 3) {
			let n = cr(d[t][0], d[t][1], u), r = cr(d[t + 1][0], d[t + 1][1], u), i = cr(d[t + 2][0], d[t + 2][1], u);
			e.push([
				n[0],
				n[1],
				r[0],
				r[1],
				i[0],
				i[1]
			]);
		}
		return e;
	}
}
//#endregion
//#region node_modules/roughjs/bin/renderer.js
var ur = {
	randOffset: Cr,
	randOffsetWithRange: wr,
	ellipse: hr,
	doubleLineOps: Tr
};
function q(e, t, n, r, i) {
	return {
		type: "path",
		ops: Y(e, t, n, r, i)
	};
}
function dr(e, t, n) {
	let r = (e || []).length;
	if (r > 2) {
		let i = [];
		for (let t = 0; t < r - 1; t++) i.push(...Y(e[t][0], e[t][1], e[t + 1][0], e[t + 1][1], n));
		return t && i.push(...Y(e[r - 1][0], e[r - 1][1], e[0][0], e[0][1], n)), {
			type: "path",
			ops: i
		};
	}
	return r === 2 ? q(e[0][0], e[0][1], e[1][0], e[1][1], n) : {
		type: "path",
		ops: []
	};
}
function fr(e, t) {
	return dr(e, !0, t);
}
function pr(e, t, n, r, i) {
	return fr([
		[e, t],
		[e + n, t],
		[e + n, t + r],
		[e, t + r]
	], i);
}
function mr(e, t) {
	if (e.length) {
		let n = typeof e[0][0] == "number" ? [e] : e, r = Ar(n[0], 1 * (1 + t.roughness * .2), t), i = t.disableMultiStroke ? [] : Ar(n[0], 1.5 * (1 + t.roughness * .22), Er(t));
		for (let e = 1; e < n.length; e++) {
			let a = n[e];
			if (a.length) {
				let e = Ar(a, 1 * (1 + t.roughness * .2), t), n = t.disableMultiStroke ? [] : Ar(a, 1.5 * (1 + t.roughness * .22), Er(t));
				for (let t of e) t.op !== "move" && r.push(t);
				for (let e of n) e.op !== "move" && i.push(e);
			}
		}
		return {
			type: "path",
			ops: r.concat(i)
		};
	}
	return {
		type: "path",
		ops: []
	};
}
function hr(e, t, n, r, i) {
	return _r(e, t, i, gr(n, r, i)).opset;
}
function gr(e, t, n) {
	let r = Math.sqrt(Math.PI * 2 * Math.sqrt((Math.pow(e / 2, 2) + Math.pow(t / 2, 2)) / 2)), i = Math.ceil(Math.max(n.curveStepCount, n.curveStepCount / Math.sqrt(200) * r)), a = Math.PI * 2 / i, o = Math.abs(e / 2), s = Math.abs(t / 2), c = 1 - n.curveFitting;
	return o += J(o * c, n), s += J(s * c, n), {
		increment: a,
		rx: o,
		ry: s
	};
}
function _r(e, t, n, r) {
	let [i, a] = Mr(r.increment, e, t, r.rx, r.ry, 1, r.increment * Or(.1, Or(.4, 1, n), n), n), o = jr(i, null, n);
	if (!n.disableMultiStroke && n.roughness !== 0) {
		let [i] = Mr(r.increment, e, t, r.rx, r.ry, 1.5, 0, n), a = jr(i, null, n);
		o = o.concat(a);
	}
	return {
		estimatedPoints: a,
		opset: {
			type: "path",
			ops: o
		}
	};
}
function vr(e, t, n, r, i, a, o, s, c) {
	let l = e, u = t, d = Math.abs(n / 2), f = Math.abs(r / 2);
	d += J(d * .01, c), f += J(f * .01, c);
	let p = i, m = a;
	for (; p < 0;) p += Math.PI * 2, m += Math.PI * 2;
	m - p > Math.PI * 2 && (p = 0, m = Math.PI * 2);
	let h = Math.PI * 2 / c.curveStepCount, g = Math.min(h / 2, (m - p) / 2), _ = Nr(g, l, u, d, f, p, m, 1, c);
	if (!c.disableMultiStroke) {
		let e = Nr(g, l, u, d, f, p, m, 1.5, c);
		_.push(...e);
	}
	return o && (s ? _.push(...Y(l, u, l + d * Math.cos(p), u + f * Math.sin(p), c), ...Y(l, u, l + d * Math.cos(m), u + f * Math.sin(m), c)) : _.push({
		op: "lineTo",
		data: [l, u]
	}, {
		op: "lineTo",
		data: [l + d * Math.cos(p), u + f * Math.sin(p)]
	})), {
		type: "path",
		ops: _
	};
}
function yr(e, t) {
	let n = or(ar(ir(e))), r = [], i = [0, 0], a = [0, 0];
	for (let { key: e, data: o } of n) switch (e) {
		case "M":
			a = [o[0], o[1]], i = [o[0], o[1]];
			break;
		case "L":
			r.push(...Y(a[0], a[1], o[0], o[1], t)), a = [o[0], o[1]];
			break;
		case "C": {
			let [e, n, i, s, c, l] = o;
			r.push(...Pr(e, n, i, s, c, l, a, t)), a = [c, l];
			break;
		}
		case "Z": r.push(...Y(a[0], a[1], i[0], i[1], t)), a = [i[0], i[1]];
	}
	return {
		type: "path",
		ops: r
	};
}
function br(e, t) {
	let n = [];
	for (let r of e) if (r.length) {
		let e = t.maxRandomnessOffset || 0, i = r.length;
		if (i > 2) {
			n.push({
				op: "move",
				data: [r[0][0] + J(e, t), r[0][1] + J(e, t)]
			});
			for (let a = 1; a < i; a++) n.push({
				op: "lineTo",
				data: [r[a][0] + J(e, t), r[a][1] + J(e, t)]
			});
		}
	}
	return {
		type: "fillPath",
		ops: n
	};
}
function xr(e, t) {
	return Zn(t, ur).fillPolygons(e, t);
}
function Sr(e, t, n, r, i, a, o) {
	let s = e, c = t, l = Math.abs(n / 2), u = Math.abs(r / 2);
	l += J(l * .01, o), u += J(u * .01, o);
	let d = i, f = a;
	for (; d < 0;) d += Math.PI * 2, f += Math.PI * 2;
	f - d > Math.PI * 2 && (d = 0, f = Math.PI * 2);
	let p = (f - d) / o.curveStepCount, m = [];
	for (let e = d; e <= f; e += p) m.push([s + l * Math.cos(e), c + u * Math.sin(e)]);
	return m.push([s + l * Math.cos(f), c + u * Math.sin(f)]), m.push([s, c]), xr([m], o);
}
function Cr(e, t) {
	return J(e, t);
}
function wr(e, t, n) {
	return Or(e, t, n);
}
function Tr(e, t, n, r, i) {
	return Y(e, t, n, r, i, !0);
}
function Er(e) {
	let t = Object.assign({}, e);
	return t.randomizer = void 0, e.seed && (t.seed = e.seed + 1), t;
}
function Dr(e) {
	return e.randomizer || (e.randomizer = new Ln(e.seed || 0)), e.randomizer.next();
}
function Or(e, t, n, r = 1) {
	return n.roughness * r * (Dr(n) * (t - e) + e);
}
function J(e, t, n = 1) {
	return Or(-e, e, t, n);
}
function Y(e, t, n, r, i, a = !1) {
	let o = a ? i.disableMultiStrokeFill : i.disableMultiStroke, s = kr(e, t, n, r, i, !0, !1);
	if (o) return s;
	let c = kr(e, t, n, r, i, !0, !0);
	return s.concat(c);
}
function kr(e, t, n, r, i, a, o) {
	let s = Math.pow(e - n, 2) + Math.pow(t - r, 2), c = Math.sqrt(s), l = 1;
	l = c < 200 ? 1 : c > 500 ? .4 : -.0016668 * c + 1.233334;
	let u = i.maxRandomnessOffset || 0;
	u * u * 100 > s && (u = c / 10);
	let d = u / 2, f = .2 + Dr(i) * .2, p = i.bowing * i.maxRandomnessOffset * (r - t) / 200, m = i.bowing * i.maxRandomnessOffset * (e - n) / 200;
	p = J(p, i, l), m = J(m, i, l);
	let h = [], g = () => J(d, i, l), _ = () => J(u, i, l), v = i.preserveVertices;
	return a && (o ? h.push({
		op: "move",
		data: [e + (v ? 0 : g()), t + (v ? 0 : g())]
	}) : h.push({
		op: "move",
		data: [e + (v ? 0 : J(u, i, l)), t + (v ? 0 : J(u, i, l))]
	})), o ? h.push({
		op: "bcurveTo",
		data: [
			p + e + (n - e) * f + g(),
			m + t + (r - t) * f + g(),
			p + e + 2 * (n - e) * f + g(),
			m + t + 2 * (r - t) * f + g(),
			n + (v ? 0 : g()),
			r + (v ? 0 : g())
		]
	}) : h.push({
		op: "bcurveTo",
		data: [
			p + e + (n - e) * f + _(),
			m + t + (r - t) * f + _(),
			p + e + 2 * (n - e) * f + _(),
			m + t + 2 * (r - t) * f + _(),
			n + (v ? 0 : _()),
			r + (v ? 0 : _())
		]
	}), h;
}
function Ar(e, t, n) {
	if (!e.length) return [];
	let r = [];
	r.push([e[0][0] + J(t, n), e[0][1] + J(t, n)]), r.push([e[0][0] + J(t, n), e[0][1] + J(t, n)]);
	for (let i = 1; i < e.length; i++) r.push([e[i][0] + J(t, n), e[i][1] + J(t, n)]), i === e.length - 1 && r.push([e[i][0] + J(t, n), e[i][1] + J(t, n)]);
	return jr(r, null, n);
}
function jr(e, t, n) {
	let r = e.length, i = [];
	if (r > 3) {
		let a = [], o = 1 - n.curveTightness;
		i.push({
			op: "move",
			data: [e[1][0], e[1][1]]
		});
		for (let t = 1; t + 2 < r; t++) {
			let n = e[t];
			a[0] = [n[0], n[1]], a[1] = [n[0] + (o * e[t + 1][0] - o * e[t - 1][0]) / 6, n[1] + (o * e[t + 1][1] - o * e[t - 1][1]) / 6], a[2] = [e[t + 1][0] + (o * e[t][0] - o * e[t + 2][0]) / 6, e[t + 1][1] + (o * e[t][1] - o * e[t + 2][1]) / 6], a[3] = [e[t + 1][0], e[t + 1][1]], i.push({
				op: "bcurveTo",
				data: [
					a[1][0],
					a[1][1],
					a[2][0],
					a[2][1],
					a[3][0],
					a[3][1]
				]
			});
		}
		if (t && t.length === 2) {
			let e = n.maxRandomnessOffset;
			i.push({
				op: "lineTo",
				data: [t[0] + J(e, n), t[1] + J(e, n)]
			});
		}
	} else r === 3 ? (i.push({
		op: "move",
		data: [e[1][0], e[1][1]]
	}), i.push({
		op: "bcurveTo",
		data: [
			e[1][0],
			e[1][1],
			e[2][0],
			e[2][1],
			e[2][0],
			e[2][1]
		]
	})) : r === 2 && i.push(...kr(e[0][0], e[0][1], e[1][0], e[1][1], n, !0, !0));
	return i;
}
function Mr(e, t, n, r, i, a, o, s) {
	let c = s.roughness === 0, l = [], u = [];
	if (c) {
		e /= 4, u.push([t + r * Math.cos(-e), n + i * Math.sin(-e)]);
		for (let a = 0; a <= Math.PI * 2; a += e) {
			let e = [t + r * Math.cos(a), n + i * Math.sin(a)];
			l.push(e), u.push(e);
		}
		u.push([t + r * Math.cos(0), n + i * Math.sin(0)]), u.push([t + r * Math.cos(e), n + i * Math.sin(e)]);
	} else {
		let c = J(.5, s) - Math.PI / 2;
		u.push([J(a, s) + t + .9 * r * Math.cos(c - e), J(a, s) + n + .9 * i * Math.sin(c - e)]);
		let d = Math.PI * 2 + c - .01;
		for (let o = c; o < d; o += e) {
			let e = [J(a, s) + t + r * Math.cos(o), J(a, s) + n + i * Math.sin(o)];
			l.push(e), u.push(e);
		}
		u.push([J(a, s) + t + r * Math.cos(c + Math.PI * 2 + o * .5), J(a, s) + n + i * Math.sin(c + Math.PI * 2 + o * .5)]), u.push([J(a, s) + t + .98 * r * Math.cos(c + o), J(a, s) + n + .98 * i * Math.sin(c + o)]), u.push([J(a, s) + t + .9 * r * Math.cos(c + o * .5), J(a, s) + n + .9 * i * Math.sin(c + o * .5)]);
	}
	return [u, l];
}
function Nr(e, t, n, r, i, a, o, s, c) {
	let l = a + J(.1, c), u = [];
	u.push([J(s, c) + t + .9 * r * Math.cos(l - e), J(s, c) + n + .9 * i * Math.sin(l - e)]);
	for (let a = l; a <= o; a += e) u.push([J(s, c) + t + r * Math.cos(a), J(s, c) + n + i * Math.sin(a)]);
	return u.push([t + r * Math.cos(o), n + i * Math.sin(o)]), u.push([t + r * Math.cos(o), n + i * Math.sin(o)]), jr(u, null, c);
}
function Pr(e, t, n, r, i, a, o, s) {
	let c = [], l = [s.maxRandomnessOffset || 1, (s.maxRandomnessOffset || 1) + .3], u = [0, 0], d = s.disableMultiStroke ? 1 : 2, f = s.preserveVertices;
	for (let p = 0; p < d; p++) p === 0 ? c.push({
		op: "move",
		data: [o[0], o[1]]
	}) : c.push({
		op: "move",
		data: [o[0] + (f ? 0 : J(l[0], s)), o[1] + (f ? 0 : J(l[0], s))]
	}), u = f ? [i, a] : [i + J(l[p], s), a + J(l[p], s)], c.push({
		op: "bcurveTo",
		data: [
			e + J(l[p], s),
			t + J(l[p], s),
			n + J(l[p], s),
			r + J(l[p], s),
			u[0],
			u[1]
		]
	});
	return c;
}
//#endregion
//#region node_modules/points-on-curve/lib/curve-to-bezier.js
function Fr(e) {
	return [...e];
}
function Ir(e, t = 0) {
	let n = e.length;
	if (n < 3) throw Error("A curve must have at least three points.");
	let r = [];
	if (n === 3) r.push(Fr(e[0]), Fr(e[1]), Fr(e[2]), Fr(e[2]));
	else {
		let n = [];
		n.push(e[0], e[0]);
		for (let t = 1; t < e.length; t++) n.push(e[t]), t === e.length - 1 && n.push(e[t]);
		let i = [], a = 1 - t;
		r.push(Fr(n[0]));
		for (let e = 1; e + 2 < n.length; e++) {
			let t = n[e];
			i[0] = [t[0], t[1]], i[1] = [t[0] + (a * n[e + 1][0] - a * n[e - 1][0]) / 6, t[1] + (a * n[e + 1][1] - a * n[e - 1][1]) / 6], i[2] = [n[e + 1][0] + (a * n[e][0] - a * n[e + 2][0]) / 6, n[e + 1][1] + (a * n[e][1] - a * n[e + 2][1]) / 6], i[3] = [n[e + 1][0], n[e + 1][1]], r.push(i[1], i[2], i[3]);
		}
	}
	return r;
}
//#endregion
//#region node_modules/points-on-curve/lib/index.js
function Lr(e, t) {
	return Math.sqrt(Rr(e, t));
}
function Rr(e, t) {
	return Math.pow(e[0] - t[0], 2) + Math.pow(e[1] - t[1], 2);
}
function zr(e, t, n) {
	let r = Rr(t, n);
	if (r === 0) return Rr(e, t);
	let i = ((e[0] - t[0]) * (n[0] - t[0]) + (e[1] - t[1]) * (n[1] - t[1])) / r;
	return i = Math.max(0, Math.min(1, i)), Rr(e, X(t, n, i));
}
function X(e, t, n) {
	return [e[0] + (t[0] - e[0]) * n, e[1] + (t[1] - e[1]) * n];
}
function Br(e, t) {
	let n = e[t + 0], r = e[t + 1], i = e[t + 2], a = e[t + 3], o = 3 * r[0] - 2 * n[0] - a[0];
	o *= o;
	let s = 3 * r[1] - 2 * n[1] - a[1];
	s *= s;
	let c = 3 * i[0] - 2 * a[0] - n[0];
	c *= c;
	let l = 3 * i[1] - 2 * a[1] - n[1];
	return l *= l, o < c && (o = c), s < l && (s = l), o + s;
}
function Vr(e, t, n, r) {
	let i = r || [];
	if (Br(e, t) < n) {
		let n = e[t + 0];
		i.length ? Lr(i[i.length - 1], n) > 1 && i.push(n) : i.push(n), i.push(e[t + 3]);
	} else {
		let r = .5, a = e[t + 0], o = e[t + 1], s = e[t + 2], c = e[t + 3], l = X(a, o, r), u = X(o, s, r), d = X(s, c, r), f = X(l, u, r), p = X(u, d, r), m = X(f, p, r);
		Vr([
			a,
			l,
			f,
			m
		], 0, n, i), Vr([
			m,
			p,
			d,
			c
		], 0, n, i);
	}
	return i;
}
function Hr(e, t) {
	return Ur(e, 0, e.length, t);
}
function Ur(e, t, n, r, i) {
	let a = i || [], o = e[t], s = e[n - 1], c = 0, l = 1;
	for (let r = t + 1; r < n - 1; ++r) {
		let t = zr(e[r], o, s);
		t > c && (c = t, l = r);
	}
	return Math.sqrt(c) > r ? (Ur(e, t, l + 1, r, a), Ur(e, l, n, r, a)) : (a.length || a.push(o), a.push(s)), a;
}
function Wr(e, t = .15, n) {
	let r = [], i = (e.length - 1) / 3;
	for (let n = 0; n < i; n++) Vr(e, n * 3, t, r);
	return n && n > 0 ? Ur(r, 0, r.length, n) : r;
}
//#endregion
//#region node_modules/points-on-path/lib/index.js
function Gr(e, t, n) {
	let r = or(ar(ir(e))), i = [], a = [], o = [0, 0], s = [], c = () => {
		s.length >= 4 && a.push(...Wr(s, t)), s = [];
	}, l = () => {
		c(), a.length && (i.push(a), a = []);
	};
	for (let { key: e, data: t } of r) switch (e) {
		case "M":
			l(), o = [t[0], t[1]], a.push(o);
			break;
		case "L":
			c(), a.push([t[0], t[1]]);
			break;
		case "C":
			if (!s.length) {
				let e = a.length ? a[a.length - 1] : o;
				s.push([e[0], e[1]]);
			}
			s.push([t[0], t[1]]), s.push([t[2], t[3]]), s.push([t[4], t[5]]);
			break;
		case "Z": c(), a.push([o[0], o[1]]);
	}
	if (l(), !n) return i;
	let u = [];
	for (let e of i) {
		let t = Hr(e, n);
		t.length && u.push(t);
	}
	return u;
}
//#endregion
//#region node_modules/roughjs/bin/generator.js
var Z = "none", Kr = class {
	constructor(e) {
		this.defaultOptions = {
			maxRandomnessOffset: 2,
			roughness: 1,
			bowing: 1,
			stroke: "#000",
			strokeWidth: 1,
			curveTightness: 0,
			curveFitting: .95,
			curveStepCount: 9,
			fillStyle: "hachure",
			fillWeight: -1,
			hachureAngle: -41,
			hachureGap: -1,
			dashOffset: -1,
			dashGap: -1,
			zigzagOffset: -1,
			seed: 0,
			disableMultiStroke: !1,
			disableMultiStrokeFill: !1,
			preserveVertices: !1,
			fillShapeRoughnessGain: .8
		}, this.config = e || {}, this.config.options && (this.defaultOptions = this._o(this.config.options));
	}
	static newSeed() {
		return In();
	}
	_o(e) {
		return e ? Object.assign({}, this.defaultOptions, e) : this.defaultOptions;
	}
	_d(e, t, n) {
		return {
			shape: e,
			sets: t || [],
			options: n || this.defaultOptions
		};
	}
	line(e, t, n, r, i) {
		let a = this._o(i);
		return this._d("line", [q(e, t, n, r, a)], a);
	}
	rectangle(e, t, n, r, i) {
		let a = this._o(i), o = [], s = pr(e, t, n, r, a);
		if (a.fill) {
			let i = [
				[e, t],
				[e + n, t],
				[e + n, t + r],
				[e, t + r]
			];
			a.fillStyle === "solid" ? o.push(br([i], a)) : o.push(xr([i], a));
		}
		return a.stroke !== Z && o.push(s), this._d("rectangle", o, a);
	}
	ellipse(e, t, n, r, i) {
		let a = this._o(i), o = [], s = gr(n, r, a), c = _r(e, t, a, s);
		if (a.fill) {
			if (a.fillStyle === "solid") {
				let n = _r(e, t, a, s).opset;
				n.type = "fillPath", o.push(n);
			} else o.push(xr([c.estimatedPoints], a));
		}
		return a.stroke !== Z && o.push(c.opset), this._d("ellipse", o, a);
	}
	circle(e, t, n, r) {
		let i = this.ellipse(e, t, n, n, r);
		return i.shape = "circle", i;
	}
	linearPath(e, t) {
		let n = this._o(t);
		return this._d("linearPath", [dr(e, !1, n)], n);
	}
	arc(e, t, n, r, i, a, o = !1, s) {
		let c = this._o(s), l = [], u = vr(e, t, n, r, i, a, o, !0, c);
		if (o && c.fill) {
			if (c.fillStyle === "solid") {
				let o = Object.assign({}, c);
				o.disableMultiStroke = !0;
				let s = vr(e, t, n, r, i, a, !0, !1, o);
				s.type = "fillPath", l.push(s);
			} else l.push(Sr(e, t, n, r, i, a, c));
		}
		return c.stroke !== Z && l.push(u), this._d("arc", l, c);
	}
	curve(e, t) {
		let n = this._o(t), r = [], i = mr(e, n);
		if (n.fill && n.fill !== Z) {
			if (n.fillStyle === "solid") {
				let t = mr(e, Object.assign(Object.assign({}, n), {
					disableMultiStroke: !0,
					roughness: n.roughness ? n.roughness + n.fillShapeRoughnessGain : 0
				}));
				r.push({
					type: "fillPath",
					ops: this._mergedShape(t.ops)
				});
			} else {
				let t = [], i = e;
				if (i.length) {
					let e = typeof i[0][0] == "number" ? [i] : i;
					for (let r of e) r.length < 3 ? t.push(...r) : r.length === 3 ? t.push(...Wr(Ir([
						r[0],
						r[0],
						r[1],
						r[2]
					]), 10, (1 + n.roughness) / 2)) : t.push(...Wr(Ir(r), 10, (1 + n.roughness) / 2));
				}
				t.length && r.push(xr([t], n));
			}
		}
		return n.stroke !== Z && r.push(i), this._d("curve", r, n);
	}
	polygon(e, t) {
		let n = this._o(t), r = [], i = dr(e, !0, n);
		return n.fill && (n.fillStyle === "solid" ? r.push(br([e], n)) : r.push(xr([e], n))), n.stroke !== Z && r.push(i), this._d("polygon", r, n);
	}
	path(e, t) {
		let n = this._o(t), r = [];
		if (!e) return this._d("path", r, n);
		e = (e || "").replace(/\n/g, " ").replace(/(-\s)/g, "-").replace("/(ss)/g", " ");
		let i = n.fill && n.fill !== "transparent" && n.fill !== Z, a = n.stroke !== Z, o = !!(n.simplification && n.simplification < 1), s = o ? 4 - 4 * (n.simplification || 1) : (1 + n.roughness) / 2, c = Gr(e, 1, s), l = yr(e, n);
		if (i) {
			if (n.fillStyle === "solid") {
				if (c.length === 1) {
					let t = yr(e, Object.assign(Object.assign({}, n), {
						disableMultiStroke: !0,
						roughness: n.roughness ? n.roughness + n.fillShapeRoughnessGain : 0
					}));
					r.push({
						type: "fillPath",
						ops: this._mergedShape(t.ops)
					});
				} else r.push(br(c, n));
			} else r.push(xr(c, n));
		}
		return a && (o ? c.forEach((e) => {
			r.push(dr(e, !1, n));
		}) : r.push(l)), this._d("path", r, n);
	}
	opsToPath(e, t) {
		let n = "";
		for (let r of e.ops) {
			let e = typeof t == "number" && t >= 0 ? r.data.map((e) => +e.toFixed(t)) : r.data;
			switch (r.op) {
				case "move":
					n += `M${e[0]} ${e[1]} `;
					break;
				case "bcurveTo":
					n += `C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;
					break;
				case "lineTo": n += `L${e[0]} ${e[1]} `;
			}
		}
		return n.trim();
	}
	toPaths(e) {
		let t = e.sets || [], n = e.options || this.defaultOptions, r = [];
		for (let e of t) {
			let t = null;
			switch (e.type) {
				case "path":
					t = {
						d: this.opsToPath(e),
						stroke: n.stroke,
						strokeWidth: n.strokeWidth,
						fill: Z
					};
					break;
				case "fillPath":
					t = {
						d: this.opsToPath(e),
						stroke: Z,
						strokeWidth: 0,
						fill: n.fill || Z
					};
					break;
				case "fillSketch": t = this.fillSketch(e, n);
			}
			t && r.push(t);
		}
		return r;
	}
	fillSketch(e, t) {
		let n = t.fillWeight;
		return n < 0 && (n = t.strokeWidth / 2), {
			d: this.opsToPath(e),
			stroke: t.fill || Z,
			strokeWidth: n,
			fill: Z
		};
	}
	_mergedShape(e) {
		return e.filter((e, t) => t === 0 || e.op !== "move");
	}
}, qr = "http://www.w3.org/2000/svg", Jr = 800, Yr = null;
function Xr() {
	return Yr || (Yr = new Kr().defaultOptions), Yr;
}
function Zr(e, t, n) {
	return p(p({}, Xr()), {}, {
		maxRandomnessOffset: 2,
		roughness: e === "highlight" ? 3 : 1.5,
		bowing: 1,
		stroke: "#000",
		strokeWidth: 1.5,
		curveTightness: 0,
		curveFitting: .95,
		curveStepCount: 9,
		fillStyle: "hachure",
		fillWeight: -1,
		hachureAngle: -41,
		hachureGap: -1,
		dashOffset: -1,
		dashGap: -1,
		zigzagOffset: -1,
		disableMultiStroke: e !== "double",
		disableMultiStrokeFill: !1,
		seed: t
	}, n);
}
function Qr(e) {
	let t = e.padding;
	if (t || t === 0) {
		if (typeof t == "number") return [
			t,
			t,
			t,
			t
		];
		if (Array.isArray(t)) {
			let e = t;
			if (e.length) switch (e.length) {
				case 4: return [...e];
				case 1: return [
					e[0],
					e[0],
					e[0],
					e[0]
				];
				case 2: return [...e, ...e];
				case 3: return [...e, e[1]];
				default: return [
					e[0],
					e[1],
					e[2],
					e[3]
				];
			}
		}
	}
	return [
		5,
		5,
		5,
		5
	];
}
function $r(e, t, n, r, i, a) {
	let o = [], s = n.strokeWidth || 2, c = Qr(n), l = n.animate === void 0 || !!n.animate, u = n.iterations || 2, d = +!!n.rtl, f = Zr("single", a, n);
	switch (n.type) {
		case "underline": {
			let e = t.y + t.h + c[2];
			for (let n = d; n < u + d; n++) n % 2 ? o.push(q(t.x + t.w, e, t.x, e, f)) : o.push(q(t.x, e, t.x + t.w, e, f));
			break;
		}
		case "strike-through": {
			let e = t.y + t.h / 2;
			for (let n = d; n < u + d; n++) n % 2 ? o.push(q(t.x + t.w, e, t.x, e, f)) : o.push(q(t.x, e, t.x + t.w, e, f));
			break;
		}
		case "box": {
			let e = t.x - c[3], n = t.y - c[0], r = t.w + (c[1] + c[3]), i = t.h + (c[0] + c[2]);
			for (let t = 0; t < u; t++) o.push(pr(e, n, r, i, f));
			break;
		}
		case "bracket": {
			let e = Array.isArray(n.brackets) ? n.brackets : n.brackets ? [n.brackets] : ["right"], r = t.x - c[3] * 2, i = t.x + t.w + c[1] * 2, a = t.y - c[0] * 2, s = t.y + t.h + c[2] * 2;
			for (let n of e) {
				let e;
				switch (n) {
					case "bottom":
						e = [
							[r, t.y + t.h],
							[r, s],
							[i, s],
							[i, t.y + t.h]
						];
						break;
					case "top":
						e = [
							[r, t.y],
							[r, a],
							[i, a],
							[i, t.y]
						];
						break;
					case "left":
						e = [
							[t.x, a],
							[r, a],
							[r, s],
							[t.x, s]
						];
						break;
					case "right": e = [
						[t.x + t.w, a],
						[i, a],
						[i, s],
						[t.x + t.w, s]
					];
				}
				e && o.push(dr(e, !1, f));
			}
			break;
		}
		case "crossed-off": {
			let e = t.x, n = t.y, r = e + t.w, i = n + t.h;
			for (let t = d; t < u + d; t++) t % 2 ? o.push(q(r, i, e, n, f)) : o.push(q(e, n, r, i, f));
			for (let t = d; t < u + d; t++) t % 2 ? o.push(q(e, i, r, n, f)) : o.push(q(r, n, e, i, f));
			break;
		}
		case "circle": {
			let e = Zr("double", a, n), r = t.w + (c[1] + c[3]), i = t.h + (c[0] + c[2]), s = t.x - c[3] + r / 2, l = t.y - c[0] + i / 2, d = Math.floor(u / 2), p = u - d * 2;
			for (let t = 0; t < d; t++) o.push(hr(s, l, r, i, e));
			for (let e = 0; e < p; e++) o.push(hr(s, l, r, i, f));
			break;
		}
		case "highlight": {
			let e = Zr("highlight", a, n);
			s = t.h * .95;
			let r = t.y + t.h / 2;
			for (let n = d; n < u + d; n++) n % 2 ? o.push(q(t.x + t.w, r, t.x, r, e)) : o.push(q(t.x, r, t.x + t.w, r, e));
			break;
		}
	}
	if (o.length) {
		let t = ti(o), a = [], c = [], u = 0, d = (e, t, n) => e.setAttribute(t, n);
		for (let r of t) {
			let t = document.createElementNS(qr, "path");
			if (d(t, "d", r), d(t, "fill", "none"), d(t, "stroke", n.color || "currentColor"), d(t, "stroke-width", `${s}`), n.opacity !== void 0 && d(t, "style", `opacity:${n.opacity}`), l) {
				let e = t.getTotalLength();
				a.push(e), u += e;
			}
			e.appendChild(t), c.push(t);
		}
		if (l) {
			let e = 0;
			for (let t = 0; t < c.length; t++) {
				let n = c[t], o = a[t], s = u ? o / u * i : 0, l = r + e, d = n.style;
				d.strokeDashoffset = `${o}`, d.strokeDasharray = `${o}`, d.animation = `rough-notation-dash ${s}ms ease-out ${l}ms forwards`, e += s;
			}
			return ei(i + r);
		}
	}
	return ei(0);
}
function ei(e) {
	return new Promise((t) => setTimeout(t, e));
}
function ti(e) {
	let t = [];
	for (let n of e) {
		let e = "";
		for (let r of n.ops) {
			let n = r.data;
			switch (r.op) {
				case "move":
					e.trim() && t.push(e.trim()), e = `M${n[0]} ${n[1]} `;
					break;
				case "bcurveTo":
					e += `C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;
					break;
				case "lineTo": e += `L${n[0]} ${n[1]} `;
			}
		}
		e.trim() && t.push(e.trim());
	}
	return t;
}
function ni() {
	if (!window.__rno_kf_s) {
		let e = window.__rno_kf_s = document.createElement("style");
		e.textContent = "@keyframes rough-notation-dash { to { stroke-dashoffset: 0; } }", document.head.appendChild(e);
	}
}
var ri = Object.defineProperty, ii = (e, t, n) => t in e ? ri(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, Q = (e, t, n) => (ii(e, typeof t == "symbol" ? t : t + "", n), n), ai = class {
	constructor(e, t) {
		Q(this, "_state", "unattached"), Q(this, "_config"), Q(this, "_resizing", !1), Q(this, "_ro"), Q(this, "_seed", In()), Q(this, "_e"), Q(this, "_svg"), Q(this, "_lastSizes", []), Q(this, "_animationDelay", 0), Q(this, "_resizeListener", () => {
			this._resizing || (this._resizing = !0, setTimeout(() => {
				this._resizing = !1, this._state === "showing" && this.haveRectsChanged() && this.show();
			}, 400));
		}), Q(this, "pendingRefresh"), this._e = e, this._config = JSON.parse(JSON.stringify(t)), this.attach();
	}
	getConfig(e) {
		return this._config[e];
	}
	setConfig(e, t) {
		this._config[e] !== t && (this._config[e] = t, this.refresh());
	}
	get animate() {
		return this._config.animate;
	}
	set animate(e) {
		this._config.animate = e;
	}
	get animationDuration() {
		return this._config.animationDuration;
	}
	set animationDuration(e) {
		this._config.animationDuration = e;
	}
	get iterations() {
		return this._config.iterations;
	}
	set iterations(e) {
		this._config.iterations = e;
	}
	get color() {
		return this._config.color;
	}
	set color(e) {
		this._config.color !== e && (this._config.color = e, this.refresh());
	}
	get class() {
		return this._config.class;
	}
	set class(e) {
		this._config.class !== e && (this._config.class = e, this._svg && this._svg.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" ")));
	}
	get strokeWidth() {
		return this._config.strokeWidth;
	}
	set strokeWidth(e) {
		this._config.strokeWidth !== e && (this._config.strokeWidth = e, this.refresh());
	}
	get padding() {
		return this._config.padding;
	}
	set padding(e) {
		this._config.padding !== e && (this._config.padding = e, this.refresh());
	}
	attach() {
		if (this._state === "unattached" && this._e.parentElement) {
			ni();
			let e = this._svg = document.createElementNS(qr, "svg");
			e.setAttribute("class", ["rough-annotation", this._config.class || ""].filter(Boolean).join(" "));
			let t = e.style;
			t.position = "absolute", t.top = "0", t.left = "0", t.overflow = "visible", t.pointerEvents = "none", t.width = "100px", t.height = "100px";
			let n = this._config.type === "highlight";
			if (this._e.insertAdjacentElement(n ? "beforebegin" : "afterend", e), this._state = "not-showing", n) {
				let e = window.getComputedStyle(this._e).position;
				(!e || e === "static") && (this._e.style.position = "relative");
			}
			this.attachListeners();
		}
	}
	detachListeners() {
		window.removeEventListener("resize", this._resizeListener), this._ro && this._ro.unobserve(this._e);
	}
	attachListeners() {
		this.detachListeners(), window.addEventListener("resize", this._resizeListener, { passive: !0 }), !this._ro && "ResizeObserver" in window && (this._ro = new window.ResizeObserver((e) => {
			for (let t of e) t.contentRect && this._resizeListener();
		})), this._ro && this._ro.observe(this._e);
	}
	haveRectsChanged() {
		if (this._lastSizes.length) {
			let e = this.rects();
			if (e.length === this._lastSizes.length) {
				for (let t = 0; t < e.length; t++) if (!this.isSameRect(e[t], this._lastSizes[t])) return !0;
			} else return !0;
		}
		return !1;
	}
	isSameRect(e, t) {
		let n = (e, t) => Math.round(e) === Math.round(t);
		return n(e.x, t.x) && n(e.y, t.y) && n(e.w, t.w) && n(e.h, t.h);
	}
	isShowing() {
		return this._state !== "not-showing";
	}
	refresh() {
		this.isShowing() && !this.pendingRefresh && (this.pendingRefresh = Promise.resolve().then(() => {
			this.isShowing() && this.show(), delete this.pendingRefresh;
		}));
	}
	show() {
		var e = this;
		return m(function* () {
			switch (e._state) {
				case "unattached": break;
				case "showing":
					e.hide(), e._svg && (yield e.render(e._svg, !0));
					break;
				case "not-showing": e.attach(), e._svg && (yield e.render(e._svg, !1));
			}
		})();
	}
	hide() {
		if (this._svg) for (; this._svg.lastChild;) this._svg.removeChild(this._svg.lastChild);
		this._state = "not-showing";
	}
	remove() {
		this._svg && this._svg.parentElement && this._svg.parentElement.removeChild(this._svg), this._svg = void 0, this._state = "unattached", this.detachListeners();
	}
	render(e, t) {
		var n = this;
		return m(function* () {
			let r = n._config;
			t && (r = JSON.parse(JSON.stringify(n._config)), r.animate = !1);
			let i = n.rects(), a = 0;
			i.forEach((e) => a += e.w);
			let o = r.animationDuration || Jr, s = 0, c = [];
			for (let t = 0; t < i.length; t++) {
				let l = o * (i[t].w / a);
				c.push($r(e, i[t], r, s + n._animationDelay + (n._config.delay || 0), l, n._seed)), s += l;
			}
			return n._lastSizes = i, n._state = "showing", yield Promise.all(c);
		})();
	}
	rects() {
		let e = [];
		if (this._svg) {
			if (this._config.multiline) {
				let t = this._e.getClientRects();
				for (let n = 0; n < t.length; n++) e.push(this.svgRect(this._svg, t[n]));
			} else e.push(this.svgRect(this._svg, this._e.getBoundingClientRect()));
		}
		return e;
	}
	svgRect(e, t) {
		let n = e.getBoundingClientRect(), r = t;
		return {
			x: (r.x || r.left) - (n.x || n.left),
			y: (r.y || r.top) - (n.y || n.top),
			w: r.width,
			h: r.height
		};
	}
};
function oi(e, t) {
	return new ai(e, t);
}
//#endregion
//#region node_modules/@slidev/client/modules/v-mark.ts
function $(e, t) {
	return e.class = [e.class, t].filter(Boolean).join(" "), e;
}
var si = {
	box: (e) => Object.assign(e, { type: "box" }),
	circle: (e) => Object.assign(e, { type: "circle" }),
	underline: (e) => Object.assign(e, { type: "underline" }),
	highlight: (e) => Object.assign(e, { type: "highlight" }),
	"strike-through": (e) => Object.assign(e, { type: "strike-through" }),
	"crossed-off": (e) => Object.assign(e, { type: "crossed-off" }),
	bracket: (e) => Object.assign(e, { type: "bracket" }),
	strike: (e) => Object.assign(e, { type: "strike-through" }),
	cross: (e) => Object.assign(e, { type: "crossed-off" }),
	crossed: (e) => Object.assign(e, { type: "crossed-off" }),
	linethrough: (e) => Object.assign(e, { type: "strike-through" }),
	"line-through": (e) => Object.assign(e, { type: "strike-through" }),
	black: (e) => $(e, "text-black"),
	blue: (e) => $(e, "text-blue"),
	cyan: (e) => $(e, "text-cyan"),
	gray: (e) => $(e, "text-gray"),
	green: (e) => $(e, "text-green"),
	indigo: (e) => $(e, "text-indigo"),
	lime: (e) => $(e, "text-lime"),
	orange: (e) => $(e, "text-orange"),
	pink: (e) => $(e, "text-pink"),
	purple: (e) => $(e, "text-purple"),
	red: (e) => $(e, "text-red"),
	teal: (e) => $(e, "text-teal"),
	white: (e) => $(e, "text-white"),
	yellow: (e) => $(e, "text-yellow")
}, ci = [[/^delay-?(\d+)?$/, (e, t, n) => (t.delay = (e[1] ? Number.parseInt(e[1]) : n) || 300, t)], [/^(?:op|opacity)-?(\d+)?$/, (e, t, n) => (t.opacity = ((e[1] ? Number.parseInt(e[1]) : n) || 100) / 100, t)]];
function li() {
	return { install(t) {
		t.directive("mark", {
			name: "v-mark",
			mounted: (t, n) => {
				let { isPrintMode: r } = ne(), i = _(() => {
					let e = typeof n.value == "object" && !Array.isArray(n.value) ? p({}, n.value) : { at: n.value }, t = { at: e.at }, i = Object.entries(n.modifiers).filter(([e, n]) => {
						if (si[e]) return t = si[e](t, n), !1;
						for (let [r, i] of ci) {
							let a = e.match(r);
							if (a) return t = i(a, t, n), !1;
						}
						return !0;
					});
					i.length && console.warn("[Slidev] Invalid modifiers for v-mark:", i);
					let a = p(p({}, t), e);
					return a.type || (a.type = "underline"), r.value && (a.animationDuration = 1), a;
				}), a = oi(t, i.value), o = jn(t, n, i.value.at);
				if (!o) {
					a.show();
					return;
				}
				t.watchStopHandle = e(() => {
					let e;
					i.value.class && (a.class = i.value.class), i.value.color && (a.color = i.value.color);
					let t = i.value.at;
					e = t === !0 || t !== !1 && o.isActive.value, e != null && (e ? a.show() : a.hide());
				});
			},
			unmounted: (e) => {
				var t;
				(t = e.watchStopHandle) == null || t.call(e);
			}
		});
	} };
}
//#endregion
//#region node_modules/@slidev/client/modules/v-motion.ts
function ui() {
	return { install(e) {
		let t = pe();
		e.directive("motion", {
			name: "v-motion",
			mounted(e, n, r, i) {
				var a, s, c;
				let l = P(n, _e), u = P(n, ve), d = P(n, ye), { currentPage: f, clicks: m, isPrintMode: h } = ne(), g = r.props = p({}, r.props), _ = p(p({}, g.initial), (a = g.variants) == null ? void 0 : a["slidev-initial"]), v = p(p({}, g.enter), (s = g.variants) == null ? void 0 : s["slidev-enter"]), y = p(p({}, g.leave), (c = g.variants) == null ? void 0 : c["slidev-leave"]);
				delete g.initial, delete g.enter, delete g.leave;
				let b = `${fn()}-`, x = [];
				for (let e of Object.keys(g)) if (e.startsWith("click-")) {
					let t = e.slice(6), n = t.includes("-") ? t.split("-").map(Number) : +t, r = b + t;
					x.push({
						id: r,
						at: n,
						variant: p({}, g[e]),
						info: l == null ? void 0 : l.value.calculate(n)
					}), delete g[e];
				}
				x.sort((e, t) => (Array.isArray(e.at) ? e.at[0] : e.at) - (Array.isArray(t.at) ? t.at[0] : t.at)), t.created(e, n, r, i), t.mounted(e, n, r, i);
				let S = e.motionInstance;
				S.clickIds = x.map((e) => e.id), S.set(_), S.watchStopHandle = o([
					u,
					f,
					m
				].filter(Boolean), () => {
					var t, n, r;
					let i = (t = (n = An.get(e)) == null ? void 0 : n.visibilityState.value) == null ? "shown" : t;
					if (!(l != null && l.value) || !["slide", "presenter"].includes((r = d == null ? void 0 : d.value) == null ? "" : r)) {
						let e = p(p({}, _), v);
						for (let { variant: t } of x) Object.assign(e, t);
						S.set(e);
					} else if (h.value || (u == null ? void 0 : u.value) === f.value) {
						if (i === "shown") {
							let e = p(p({}, _), v);
							for (let { variant: t, info: n } of x) (!n || n.isActive.value) && Object.assign(e, t);
							h.value ? S.set(e) : S.apply(e);
						} else S.apply(i === "before" ? _ : y);
					} else {
						var a;
						S.apply(((a = u == null ? void 0 : u.value) == null ? -1 : a) > f.value ? _ : y);
					}
				}, { immediate: !0 });
			},
			unmounted(e) {
				e.motionInstance.watchStopHandle();
			}
		});
	} };
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.bb2b8c0123.ts
var di = /* #__PURE__ */ Object.assign({}), fi = /* #__PURE__ */ Object.assign({}), pi = [Object.values(di)[0], Object.values(fi)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/setup/routes.ts
function mi() {
	let e = [];
	function t(e) {
		if (!b.remote || b.remote === e.query.password) return !0;
		if (b.remote && e.query.password === void 0) {
			let e = prompt("Enter password");
			if (b.remote === e) return !0;
		}
		return e.params.no ? { path: `/${e.params.no}` } : { path: "" };
	}
	return e.push({
		name: "entry",
		path: "/entry",
		component: () => import("./assets/slidev/entry-Cly9VWpX.js"),
		beforeEnter: t
	}, {
		name: "overview",
		path: "/overview",
		component: () => import("./assets/slidev/overview-Bk3SgUz6.js"),
		beforeEnter: t
	}, {
		name: "notes",
		path: "/notes",
		component: () => import("./assets/slidev/notes-D3vFY7sL.js"),
		beforeEnter: t
	}, {
		name: "notes-edit",
		path: "/notes-edit",
		component: () => import("./assets/slidev/notes-edit-Bo59qa58.js"),
		beforeEnter: t
	}, {
		name: "presenter",
		path: "/presenter/:no",
		component: () => import("./assets/slidev/presenter-pBa7mAKY.js"),
		beforeEnter: t
	}, {
		path: "/presenter",
		redirect: { path: "/presenter/1" }
	}), e.push({
		name: "play",
		path: "/:no",
		component: () => import("./assets/slidev/play-Ceb6rNjL.js")
	}, {
		path: "",
		redirect: { path: "/1" }
	}, {
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("./assets/slidev/404-DGaJkhGa.js")
	}), pi.reduce((e, t) => t(e), e);
}
//#endregion
//#region node_modules/@slidev/client/setup/main.ts
function hi(e) {
	return gi.apply(this, arguments);
}
function gi() {
	return gi = m(function* (e) {
		function t() {
			document.documentElement.style.setProperty("--vh", `${window.innerHeight * .01}px`);
		}
		t(), window.addEventListener("resize", t);
		let n = de({
			history: fe("/Toan6/slidev-bai-2/"),
			routes: mi()
		});
		e.use(n), e.use(/* @__PURE__ */ Cn()), e.use(kn()), e.use(li()), e.use(Fn()), e.use(ui()), e.use(h, { container: "#twoslash-container" });
		let r = {
			app: e,
			router: n
		};
		for (let e of En) yield e(r);
	}), gi.apply(this, arguments);
}
//#endregion
//#region node_modules/@slidev/client/main.ts
function _i() {
	return vi.apply(this, arguments);
}
function vi() {
	return vi = m(function* () {
		let e = l(mn);
		yield hi(e), e.mount("#app");
	}), vi.apply(this, arguments);
}
_i();
//#endregion
