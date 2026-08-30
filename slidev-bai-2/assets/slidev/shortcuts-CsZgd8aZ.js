import { $ as e, A as t, B as n, C as r, Ct as i, E as a, F as o, G as s, H as c, J as l, N as u, O as d, P as f, Q as p, S as m, St as h, T as g, W as _, Y as v, _ as y, a as b, b as x, bt as S, f as C, ft as w, g as ee, h as T, ht as E, i as D, l as O, m as k, n as te, nt as A, o as j, p as ne, s as re, st as ie, tt as M, u as N, v as ae, w as oe, wt as P, x as F, xt as I, y as L } from "../modules/shiki-BdJWbgyq.js";
import { $ as se, A as ce, C as le, D as R, E as ue, F as z, I as B, J as de, K as fe, L as pe, M as me, N as he, O as ge, P as _e, Q as V, R as ve, S as ye, T as H, V as be, W as xe, Y as Se, _ as Ce, a as we, b as Te, d as Ee, f as De, g as Oe, i as ke, j as U, n as Ae, p as je, r as Me, s as Ne, t as W, u as Pe, w as Fe, y as Ie, z as Le } from "./useNav-CEJIfsQz.js";
import { t as Re } from "../_plugin-vue_export-helper-B3ysoDQm.js";
import { B as ze, C as Be, F as Ve, N as He, S as Ue, d as We, n as G, o as Ge, p as Ke, r as qe, s as Je, t as K, v as Ye, w as Xe, y as Ze } from "../modules/vue-BdHhyihZ.js";
import { _ as Qe, l as $e, n as et } from "./context-NjknmJDY.js";
import { a as tt, i as nt, n as rt, o as it } from "./utils-i2fWjTfO.js";
import { i as at } from "../shared-9xxIzB5f.js";
import { t as ot } from "./useSlideBounds-F79hVx0C.js";
import { t as st } from "./useSlideInfo-BbQC2fgf.js";
import { a as ct, i as lt, n as ut, o as dt, r as ft, s as pt, t as mt } from "../SlideWrapper-BAhnJH9e.js";
import { t as q } from "./IconButton-BREksc9A.js";
//#region node_modules/@slidev/client/internals/VerticalDivider.vue
var ht = {}, gt = { class: "w-1px opacity-10 bg-current m-1 lg:m-2" };
function _t(e, t) {
	return c(), r("div", gt);
}
var vt = /*#__PURE__*/ Re(ht, [["render", _t]]);
//#endregion
//#region node_modules/@slidev/client/composables/useSwipeControls.ts
function yt(e) {
	let { next: t, nextSlide: n, prev: r, prevSlide: i } = W(), { isDrawing: a } = pt(), o = w(0), { direction: s, distanceX: c, distanceY: l } = Ze(e, {
		pointerTypes: ["touch"],
		onSwipeStart() {
			a.value || (o.value = He());
		},
		onSwipeEnd() {
			if (!o.value || a.value) return;
			let e = Math.abs(c.value), u = Math.abs(l.value);
			e / window.innerWidth > .3 || e > 75 ? s.value === "left" ? t() : r() : (u / window.innerHeight > .4 || u > 200) && (s.value === "down" ? i() : n());
		}
	});
}
//#endregion
//#region node_modules/@slidev/client/composables/useWakeLock.ts
function bt() {
	let { request: e, release: t } = Be();
	p(pe, (n) => {
		n ? e("screen") : t();
	}, { immediate: !0 });
}
//#endregion
//#region node_modules/.slidev/virtual/import-glob.a54cc2bfd6.ts
var xt = /* #__PURE__ */ Object.assign({}), St = /* #__PURE__ */ Object.assign({}), Ct = [Object.values(xt)[0], Object.values(St)[0]].filter(Boolean), wt, Tt = () => {
	if (wt) return wt;
	let { next: e, nextSlide: t, prev: n, prevSlide: r, hasNext: i, hasPrev: a, currentPage: o, total: s, isPresenter: c, enterPresenter: l, exitPresenter: u, isEmbedded: d, isPresenterAvailable: f } = W(), { drawingEnabled: p } = pt(), { isFullscreen: m, toggle: h } = Pe;
	return wt = Ct.reduce((e, t) => t(e), L(() => [
		{
			small: !0,
			icon: "i-carbon:arrow-left",
			label: "Previous Click",
			action: n,
			disabled: !a.value
		},
		{
			small: !0,
			icon: "i-carbon:arrow-right",
			label: "Next Click",
			action: e,
			disabled: !i.value
		},
		{
			small: !0,
			icon: "i-carbon:arrow-up",
			label: "Previous Slide",
			action: r,
			disabled: o.value <= 1
		},
		{
			small: !0,
			icon: "i-carbon:arrow-down",
			label: "Next Slide",
			action: t,
			disabled: o.value >= s.value
		},
		"separator",
		{
			icon: "i-carbon:text-annotation-toggle",
			label: Fe.value ? "Hide editor" : "Show editor",
			action: () => Fe.value = !Fe.value,
			show: !1
		},
		{
			icon: "i-carbon:pen",
			label: p.value ? "Hide drawing toolbar" : "Show drawing toolbar",
			action: () => p.value = !p.value
		},
		{
			icon: "i-carbon:apps",
			label: "Show slide overview",
			action: me
		},
		c.value && {
			icon: "i-carbon:presentation-file",
			label: "Exit Presenter Mode",
			action: u
		},
		f.value && {
			icon: "i-carbon:user-speaker",
			label: "Enter Presenter Mode",
			action: l
		},
		!d.value && {
			icon: m.value ? "i-carbon:minimize" : "i-carbon:maximize",
			label: m.value ? "Close fullscreen" : "Enter fullscreen",
			action: h
		}
	].filter(Boolean)));
}, Et = E(null);
function Dt(e, t) {
	Et.value = {
		x: e,
		y: t,
		items: Tt()
	};
}
function Ot() {
	Et.value = null;
}
function kt(e) {
	if (V.contextMenu !== !0 && V.contextMenu != null && V.contextMenu !== "build" || e.shiftKey || e.defaultPrevented) return;
	let { isEmbedded: t } = W();
	t.value || (Dt(e.pageX, e.pageY), e.preventDefault(), e.stopPropagation());
}
//#endregion
//#region node_modules/@slidev/client/internals/ContextMenu.vue?vue&type=script&setup=true&lang.ts
var At = ["title", "onClick"], jt = ["onClick"], Mt = { class: "mx-auto flex" }, Nt = { key: 0 }, Pt = { class: "w-full text-xs p2" }, Ft = { class: "text-main text-opacity-50!" }, It = /* @__PURE__ */ d({
	__name: "ContextMenu",
	setup(e) {
		let t = w();
		Ge(t, Ot), Ke(document, "mousedown", (e) => {
			e.buttons & 2 && Ot();
		}, {
			passive: !0,
			capture: !0
		});
		let n = L(() => V.contextMenu != null), a = Xe();
		p(a, (e) => {
			e || Ot();
		}), st(1);
		let { width: o, height: s } = We(t), u = L(() => {
			var e;
			let t = (e = Et.value) == null ? void 0 : e.x;
			return t ? t + o.value > ve.width.value ? ve.width.value - o.value : t : 0;
		}), d = L(() => {
			var e;
			let t = (e = Et.value) == null ? void 0 : e.y;
			return t ? t + s.value > ve.height.value ? ve.height.value - s.value : t : 0;
		});
		return (e, a) => S(Et) ? (c(), r("div", {
			key: 0,
			ref_key: "container",
			ref: t,
			style: i(`left:${u.value}px;top:${d.value}px`),
			class: "slidev-glass-effect fixed z-context-menu w-60 flex flex-wrap justify-items-start p-1 animate-fade-in animate-duration-100 rounded-md shadow overflow-hidden select-none",
			onContextmenu: a[1] || (a[1] = ee(() => {}, ["prevent"])),
			onClick: a[2] || (a[2] = (...e) => S(Ot) && S(Ot)(...e))
		}, [(c(!0), r(y, null, _(S(Et).items.value, (e, t) => {
			var n;
			return c(), r(y, { key: t }, [e === "separator" ? (c(), r("div", {
				key: t,
				class: "w-full my1 border-t border-main"
			})) : (n = e.show) == null || n ? (c(), r(y, { key: 1 }, [e.small ? (c(), r("div", {
				key: 0,
				class: I(["p-2 w-[40px] h-[40px] inline-block text-center cursor-pointer rounded flex", e.disabled ? "op40" : "hover:bg-active"]),
				title: e.label,
				onClick: e.action
			}, [typeof e.icon == "string" ? (c(), r("div", {
				key: 0,
				class: I([e.icon, "text-1.2em ma"])
			}, null, 2)) : (c(), F(l(e.icon), { key: 1 }))], 10, At)) : (c(), r("div", {
				key: 1,
				class: I(["w-full grid grid-cols-[35px_1fr] p-2 pl-0 cursor-pointer rounded", e.disabled ? "op40" : "hover:bg-active"]),
				onClick: e.action
			}, [x("div", Mt, [typeof e.icon == "string" ? (c(), r("div", {
				key: 0,
				class: I([e.icon, "text-1.2em ma"])
			}, null, 2)) : (c(), F(l(e.icon), { key: 1 }))]), typeof e.label == "string" ? (c(), r("div", Nt, P(e.label), 1)) : (c(), F(l(e.label), { key: 1 }))], 10, jt))], 64)) : m("v-if", !0)], 64);
		}), 128)), n.value ? m("v-if", !0) : (c(), r(y, { key: 0 }, [a[6] || (a[6] = x("div", { class: "w-full my1 border-t border-main" }, null, -1)), x("div", Pt, [x("div", Ft, [
			a[3] || (a[3] = g(" Hold ", -1)),
			a[4] || (a[4] = x("kbd", { class: "border px1 py0.5 border-main rounded text-primary" }, "Shift", -1)),
			a[5] || (a[5] = g(" and right click to open the native context menu ", -1)),
			m("v-if", !0)
		])])], 64))], 36)) : m("v-if", !0);
	}
}), Lt = ["getFn"];
function Rt(e) {
	return Array.isArray ? Array.isArray(e) : Kt(e) === "[object Array]";
}
function zt(e) {
	if (typeof e == "string") return e;
	if (typeof e == "bigint") return e.toString();
	let t = e + "";
	return t == "0" && 1 / e == -Infinity ? "-0" : t;
}
function Bt(e) {
	return e == null ? "" : zt(e);
}
function J(e) {
	return typeof e == "string";
}
function Vt(e) {
	return typeof e == "number";
}
function Ht(e) {
	return e === !0 || e === !1 || Wt(e) && Kt(e) == "[object Boolean]";
}
function Ut(e) {
	return typeof e == "object";
}
function Wt(e) {
	return Ut(e) && e !== null;
}
function Y(e) {
	return e != null;
}
function Gt(e) {
	return !e.trim().length;
}
function Kt(e) {
	return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e);
}
var qt = "Incorrect 'index' type", Jt = "Invalid doc index: must be a non-negative integer within the bounds of the docs array", Yt = (e) => `Invalid value for key ${e}`, Xt = (e) => `Pattern length exceeds max of ${e}.`, Zt = (e) => `Missing ${e} property in key`, Qt = (e) => `Property 'weight' in key '${e}' must be a positive integer`, $t = "Fuse.match does not support useTokenSearch: token search requires corpus-level statistics (df, fieldCount) that a one-off string comparison does not have. Use new Fuse(...).search(...) instead.", en = Object.prototype.hasOwnProperty, tn = class {
	constructor(e) {
		this._keys = [], this._keyMap = {};
		let t = 0;
		e.forEach((e) => {
			let n = nn(e);
			this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
		}), this._keys.forEach((e) => {
			e.weight /= t;
		});
	}
	get(e) {
		return this._keyMap[e];
	}
	keys() {
		return this._keys;
	}
	toJSON() {
		return JSON.stringify(this._keys);
	}
};
function nn(e) {
	let t = null, n = null, r = null, i = 1, a = null;
	if (J(e) || Rt(e)) r = e, t = rn(e), n = an(e);
	else {
		var o;
		if (!en.call(e, "name")) throw Error(Zt("name"));
		let s = e.name;
		if (r = s, en.call(e, "weight") && e.weight !== void 0 && (i = e.weight, i <= 0)) throw Error(Qt(an(s)));
		t = rn(s), n = an(s), a = (o = e.getFn) == null ? null : o;
	}
	return {
		path: t,
		id: n,
		weight: i,
		src: r,
		getFn: a
	};
}
function rn(e) {
	return Rt(e) ? e : e.split(".");
}
function an(e) {
	return Rt(e) ? e.join(".") : e;
}
function on(e, t) {
	let n = [], r = !1, i = (e, t, a, o) => {
		if (Y(e)) {
			if (!t[a]) n.push(o === void 0 ? e : {
				v: e,
				i: o
			});
			else {
				let s = e[t[a]];
				if (!Y(s)) return;
				if (a === t.length - 1 && (J(s) || Vt(s) || Ht(s) || typeof s == "bigint")) n.push(o === void 0 ? Bt(s) : {
					v: Bt(s),
					i: o
				});
				else if (Rt(s)) {
					r = !0;
					for (let e = 0, n = s.length; e < n; e += 1) i(s[e], t, a + 1, e);
				} else t.length && i(s, t, a + 1, o);
			}
		}
	};
	return i(e, J(t) ? t.split(".") : t, 0), r ? n : n[0];
}
var sn = {
	includeMatches: !1,
	findAllMatches: !1,
	minMatchCharLength: 1
}, cn = {
	isCaseSensitive: !1,
	ignoreDiacritics: !1,
	includeScore: !1,
	keys: [],
	shouldSort: !0,
	sortFn: (e, t) => e.score === t.score ? e.idx < t.idx ? -1 : 1 : e.score < t.score ? -1 : 1
}, ln = {
	location: 0,
	threshold: .6,
	distance: 100
}, un = {
	useExtendedSearch: !1,
	useTokenSearch: !1,
	tokenize: void 0,
	tokenMatch: "any",
	getFn: on,
	ignoreLocation: !1,
	ignoreFieldNorm: !1,
	fieldNormWeight: 1
}, X = Object.freeze(j(j(j(j({}, cn), sn), ln), un));
function dn(e) {
	return e >= 9 && e <= 13 || e === 32 || e === 160;
}
function fn(e = 1, t = 3) {
	let n = /* @__PURE__ */ new Map(), r = Math.pow(10, t);
	return {
		get(t) {
			let i = 0, a = !1;
			for (let e = 0; e < t.length; e++) dn(t.charCodeAt(e)) ? a = !1 : a || (i++, a = !0);
			if (i === 0 && (i = 1), n.has(i)) return n.get(i);
			let o = Math.round(r / Math.pow(i, .5 * e)) / r;
			return n.set(i, o), o;
		},
		clear() {
			n.clear();
		}
	};
}
var pn = class {
	constructor({ getFn: e = X.getFn, fieldNormWeight: t = X.fieldNormWeight } = {}) {
		this.norm = fn(t, 3), this.getFn = e, this.isCreated = !1, this.docs = [], this.keys = [], this._keysMap = {}, this.setIndexRecords();
	}
	setSources(e = []) {
		this.docs = e;
	}
	setIndexRecords(e = []) {
		this.records = e;
	}
	setKeys(e = []) {
		this.keys = e, this._keysMap = {}, e.forEach((e, t) => {
			this._keysMap[e.id] = t;
		});
	}
	create() {
		if (this.isCreated || !this.docs.length) return;
		this.isCreated = !0;
		let e = this.docs.length;
		this.records = Array(e);
		let t = 0;
		if (J(this.docs[0])) for (let n = 0; n < e; n++) {
			let e = this._createStringRecord(this.docs[n], n);
			e && (this.records[t++] = e);
		}
		else for (let n = 0; n < e; n++) this.records[t++] = this._createObjectRecord(this.docs[n], n);
		this.records.length = t, this.norm.clear();
	}
	add(e, t) {
		if (!Number.isInteger(t) || t < 0) throw Error(Jt);
		if (J(e)) {
			let n = this._createStringRecord(e, t);
			return n && this.records.push(n), n;
		}
		let n = this._createObjectRecord(e, t);
		return this.records.push(n), n;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0) throw Error(Jt);
		for (let t = 0, n = this.records.length; t < n; t += 1) if (this.records[t].i === e) {
			this.records.splice(t, 1);
			break;
		}
		for (let t = 0, n = this.records.length; t < n; t += 1) this.records[t].i > e && --this.records[t].i;
	}
	removeAll(e) {
		let t = /* @__PURE__ */ new Set();
		for (let n of e) Number.isInteger(n) && n >= 0 && t.add(n);
		if (t.size === 0) return;
		this.records = this.records.filter((e) => !t.has(e.i));
		let n = Array.from(t).sort((e, t) => e - t);
		for (let e of this.records) {
			let t = 0, r = n.length;
			for (; t < r;) {
				let i = t + r >>> 1;
				n[i] < e.i ? t = i + 1 : r = i;
			}
			e.i -= t;
		}
	}
	getValueForItemAtKeyId(e, t) {
		return e[this._keysMap[t]];
	}
	size() {
		return this.records.length;
	}
	_createStringRecord(e, t) {
		return !Y(e) || Gt(e) ? null : {
			v: e,
			i: t,
			n: this.norm.get(e)
		};
	}
	_createObjectRecord(e, t) {
		let n = {
			i: t,
			$: {}
		};
		for (let t = 0, r = this.keys.length; t < r; t++) {
			let r = this.keys[t], i = r.getFn ? r.getFn(e) : this.getFn(e, r.path);
			if (Y(i)) {
				if (Rt(i)) {
					let e = [];
					for (let t = 0, n = i.length; t < n; t += 1) {
						let n = i[t];
						if (Y(n)) {
							if (J(n)) {
								if (!Gt(n)) {
									let r = {
										v: n,
										i: t,
										n: this.norm.get(n)
									};
									e.push(r);
								}
							} else if (Y(n.v)) {
								let t = J(n.v) ? n.v : Bt(n.v);
								if (!Gt(t)) {
									let r = {
										v: t,
										i: n.i,
										n: this.norm.get(t)
									};
									e.push(r);
								}
							}
						}
					}
					n.$[t] = e;
				} else if (J(i) && !Gt(i)) {
					let e = {
						v: i,
						n: this.norm.get(i)
					};
					n.$[t] = e;
				}
			}
		}
		return n;
	}
	toJSON() {
		return {
			keys: this.keys.map((e) => {
				let { getFn: t } = e;
				return b(e, Lt);
			}),
			records: this.records
		};
	}
};
function mn(e, t, { getFn: n = X.getFn, fieldNormWeight: r = X.fieldNormWeight } = {}) {
	let i = new pn({
		getFn: n,
		fieldNormWeight: r
	});
	return i.setKeys(e.map(nn)), i.setSources(t), i.create(), i;
}
function hn(e, { getFn: t = X.getFn, fieldNormWeight: n = X.fieldNormWeight } = {}) {
	let { keys: r, records: i } = e, a = new pn({
		getFn: t,
		fieldNormWeight: n
	});
	return a.setKeys(r), a.setIndexRecords(i), a;
}
function gn(e = [], t = X.minMatchCharLength) {
	let n = [], r = -1, i = -1, a = 0;
	for (let o = e.length; a < o; a += 1) {
		let o = e[a];
		o && r === -1 ? r = a : !o && r !== -1 && (i = a - 1, i - r + 1 >= t && n.push([r, i]), r = -1);
	}
	return e[a - 1] && a - r >= t && n.push([r, a - 1]), n;
}
function _n(e, t, n, { location: r = X.location, distance: i = X.distance, threshold: a = X.threshold, findAllMatches: o = X.findAllMatches, minMatchCharLength: s = X.minMatchCharLength, includeMatches: c = X.includeMatches, ignoreLocation: l = X.ignoreLocation } = {}) {
	if (t.length > 32) throw Error(Xt(32));
	let u = t.length, d = e.length, f = Math.max(0, Math.min(r, d)), p = a, m = f, h = (e, t) => {
		let n = e / u;
		if (l) return n;
		let r = Math.abs(f - t);
		return i ? n + r / i : r ? 1 : n;
	}, g = s > 1 || c, _ = g ? Array(d) : [], v;
	for (; (v = e.indexOf(t, m)) > -1;) {
		let e = h(0, v);
		if (p = Math.min(e, p), m = v + u, g) {
			let e = 0;
			for (; e < u;) _[v + e] = 1, e += 1;
		}
	}
	m = -1;
	let y = [], b = 1, x = 0, S = u + d, C = 1 << u - 1;
	for (let t = 0; t < u; t += 1) {
		let r = 0, i = S;
		for (; r < i;) h(t, f + i) <= p ? r = i : S = i, i = Math.floor((S - r) / 2 + r);
		S = i;
		let a = Math.max(1, f - i + 1), s = o ? d : Math.min(f + i, d) + u, c = Array(s + 2);
		c[s + 1] = (1 << t) - 1;
		for (let r = s; r >= a; --r) {
			let i = r - 1, o = n[e[i]];
			if (c[r] = (c[r + 1] << 1 | 1) & o, t && (c[r] |= (y[r + 1] | y[r]) << 1 | 1 | y[r + 1]), c[r] & C && (b = h(t, i), b <= p)) {
				if (p = b, m = i, x = t, m <= f) break;
				a = Math.max(1, 2 * f - m);
			}
		}
		if (h(t + 1, f) > p) break;
		y = c;
	}
	if (g && m >= 0) {
		let t = Math.min(d - 1, m + u - 1 + x);
		for (let r = m; r <= t; r += 1) n[e[r]] && (_[r] = 1);
	}
	let w = {
		isMatch: m >= 0,
		score: Math.max(.001, b)
	};
	if (g) {
		let e = gn(_, s);
		e.length ? c && (w.indices = e) : w.isMatch = !1;
	}
	return w;
}
function vn(e) {
	let t = {};
	for (let n = 0, r = e.length; n < r; n += 1) {
		let i = e.charAt(n);
		t[i] = (t[i] || 0) | 1 << r - n - 1;
	}
	return t;
}
function yn(e) {
	if (e.length <= 1) return e;
	e.sort((e, t) => e[0] - t[0] || e[1] - t[1]);
	let t = [e[0]];
	for (let n = 1, r = e.length; n < r; n += 1) {
		let r = t[t.length - 1], i = e[n];
		i[0] <= r[1] + 1 ? r[1] = Math.max(r[1], i[1]) : t.push(i);
	}
	return t;
}
var bn = {
	ł: "l",
	Ł: "L",
	đ: "d",
	Đ: "D",
	ø: "o",
	Ø: "O",
	ħ: "h",
	Ħ: "H",
	ŧ: "t",
	Ŧ: "T",
	ı: "i",
	ß: "ss"
}, xn = RegExp("[" + Object.keys(bn).join("") + "]", "g"), Sn = typeof String.prototype.normalize == "function" ? (e) => e.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "").replace(xn, (e) => bn[e]) : (e) => e, Cn = class {
	constructor(e, { location: t = X.location, threshold: n = X.threshold, distance: r = X.distance, includeMatches: i = X.includeMatches, findAllMatches: a = X.findAllMatches, minMatchCharLength: o = X.minMatchCharLength, isCaseSensitive: s = X.isCaseSensitive, ignoreDiacritics: c = X.ignoreDiacritics, ignoreLocation: l = X.ignoreLocation } = {}) {
		if (this.options = {
			location: t,
			threshold: n,
			distance: r,
			includeMatches: i,
			findAllMatches: a,
			minMatchCharLength: o,
			isCaseSensitive: s,
			ignoreDiacritics: c,
			ignoreLocation: l
		}, e = s ? e : e.toLowerCase(), e = c ? Sn(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
		let u = (e, t) => {
			this.chunks.push({
				pattern: e,
				alphabet: vn(e),
				startIndex: t
			});
		}, d = this.pattern.length;
		if (d > 32) {
			let e = 0, t = d % 32, n = d - t;
			for (; e < n;) u(this.pattern.substr(e, 32), e), e += 32;
			if (t) {
				let e = d - 32;
				u(this.pattern.substr(e), e);
			}
		} else u(this.pattern, 0);
	}
	searchIn(e) {
		let { isCaseSensitive: t, ignoreDiacritics: n, includeMatches: r } = this.options;
		if (e = t ? e : e.toLowerCase(), e = n ? Sn(e) : e, this.pattern === e) {
			if (e.length < this.options.minMatchCharLength) return {
				isMatch: !1,
				score: 1
			};
			let t = {
				isMatch: !0,
				score: 0
			};
			return r && (t.indices = [[0, e.length - 1]]), t;
		}
		let { location: i, distance: a, threshold: o, findAllMatches: s, minMatchCharLength: c, ignoreLocation: l } = this.options, u = [], d = 0, f = !1;
		this.chunks.forEach(({ pattern: t, alphabet: n, startIndex: p }) => {
			let { isMatch: m, score: h, indices: g } = _n(e, t, n, {
				location: i + p,
				distance: a,
				threshold: o,
				findAllMatches: s,
				minMatchCharLength: c,
				includeMatches: r,
				ignoreLocation: l
			});
			m && (f = !0), d += h, m && g && u.push(...g);
		});
		let p = {
			isMatch: f,
			score: f ? d / this.chunks.length : 1
		};
		return f && r && (p.indices = yn(u)), p;
	}
}, wn = /* @__PURE__ */ new Set(["fuzzy", "include"]);
function Tn(e) {
	return e.startsWith("inverse");
}
var En = [
	{
		type: "exact",
		multiRegex: /^="(.*)"$/,
		singleRegex: /^=(.*)$/,
		create: (e) => ({
			type: "exact",
			search(t) {
				let n = t === e;
				return {
					isMatch: n,
					score: +!n,
					indices: [0, e.length - 1]
				};
			}
		})
	},
	{
		type: "include",
		multiRegex: /^'"(.*)"$/,
		singleRegex: /^'(.*)$/,
		create: (e) => ({
			type: "include",
			search(t) {
				let n = 0, r, i = [], a = e.length;
				for (; (r = t.indexOf(e, n)) > -1;) n = r + a, i.push([r, n - 1]);
				let o = !!i.length;
				return {
					isMatch: o,
					score: +!o,
					indices: i
				};
			}
		})
	},
	{
		type: "prefix-exact",
		multiRegex: /^\^"(.*)"$/,
		singleRegex: /^\^(.*)$/,
		create: (e) => ({
			type: "prefix-exact",
			search(t) {
				let n = t.startsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [0, e.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-prefix-exact",
		multiRegex: /^!\^"(.*)"$/,
		singleRegex: /^!\^(.*)$/,
		create: (e) => ({
			type: "inverse-prefix-exact",
			search(t) {
				let n = !t.startsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [0, t.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-suffix-exact",
		multiRegex: /^!"(.*)"\$$/,
		singleRegex: /^!(.*)\$$/,
		create: (e) => ({
			type: "inverse-suffix-exact",
			search(t) {
				let n = !t.endsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [0, t.length - 1]
				};
			}
		})
	},
	{
		type: "suffix-exact",
		multiRegex: /^"(.*)"\$$/,
		singleRegex: /^(.*)\$$/,
		create: (e) => ({
			type: "suffix-exact",
			search(t) {
				let n = t.endsWith(e);
				return {
					isMatch: n,
					score: +!n,
					indices: [t.length - e.length, t.length - 1]
				};
			}
		})
	},
	{
		type: "inverse-exact",
		multiRegex: /^!"(.*)"$/,
		singleRegex: /^!(.*)$/,
		create: (e) => ({
			type: "inverse-exact",
			search(t) {
				let n = t.indexOf(e) === -1;
				return {
					isMatch: n,
					score: +!n,
					indices: [0, t.length - 1]
				};
			}
		})
	},
	{
		type: "fuzzy",
		multiRegex: /^"(.*)"$/,
		singleRegex: /^(.*)$/,
		create: (e, t = {}) => {
			var n, r, i, a, o, s, c, l, u;
			let d = new Cn(e, {
				location: (n = t.location) == null ? X.location : n,
				threshold: (r = t.threshold) == null ? X.threshold : r,
				distance: (i = t.distance) == null ? X.distance : i,
				includeMatches: (a = t.includeMatches) == null ? X.includeMatches : a,
				findAllMatches: (o = t.findAllMatches) == null ? X.findAllMatches : o,
				minMatchCharLength: (s = t.minMatchCharLength) == null ? X.minMatchCharLength : s,
				isCaseSensitive: (c = t.isCaseSensitive) == null ? X.isCaseSensitive : c,
				ignoreDiacritics: (l = t.ignoreDiacritics) == null ? X.ignoreDiacritics : l,
				ignoreLocation: (u = t.ignoreLocation) == null ? X.ignoreLocation : u
			});
			return {
				type: "fuzzy",
				search(e) {
					return d.searchIn(e);
				}
			};
		}
	}
], Dn = En.length, On = "\0", kn = "|";
function An(e) {
	let t = [], n = e.length, r = 0;
	for (; r < n;) {
		for (; r < n && e[r] === " ";) r++;
		if (r >= n) break;
		let i = r;
		for (; i < n && e[i] !== " " && e[i] !== "\"";) i++;
		if (i < n && e[i] === "\"") {
			for (i++; i < n;) {
				if (e[i] === "\"") {
					let t = i + 1;
					if (t >= n || e[t] === " ") {
						i++;
						break;
					}
					if (e[t] === "$" && (t + 1 >= n || e[t + 1] === " ")) {
						i += 2;
						break;
					}
				}
				i++;
			}
			t.push(e.substring(r, i)), r = i;
		} else {
			for (; i < n && e[i] !== " ";) i++;
			t.push(e.substring(r, i)), r = i;
		}
	}
	return t;
}
function jn(e, t) {
	let n = e.match(t);
	return n ? n[1] : null;
}
function Mn(e, t = {}) {
	return e.replace(/\\\|/g, On).split(kn).map((e) => {
		let n = An(e.replace(/\u0000/g, "|").trim()).filter((e) => e && !!e.trim()), r = [];
		for (let e = 0, i = n.length; e < i; e += 1) {
			let i = n[e], a = !1, o = -1;
			for (; !a && ++o < Dn;) {
				let e = En[o], n = jn(i, e.multiRegex);
				n && (r.push(e.create(n, t)), a = !0);
			}
			if (!a) for (o = -1; ++o < Dn;) {
				let e = En[o], n = jn(i, e.singleRegex);
				if (n) {
					r.push(e.create(n, t));
					break;
				}
			}
		}
		return r;
	});
}
var Nn = class {
	constructor(e, { isCaseSensitive: t = X.isCaseSensitive, ignoreDiacritics: n = X.ignoreDiacritics, includeMatches: r = X.includeMatches, minMatchCharLength: i = X.minMatchCharLength, ignoreLocation: a = X.ignoreLocation, findAllMatches: o = X.findAllMatches, location: s = X.location, threshold: c = X.threshold, distance: l = X.distance } = {}) {
		this.query = null, this.options = {
			isCaseSensitive: t,
			ignoreDiacritics: n,
			includeMatches: r,
			minMatchCharLength: i,
			findAllMatches: o,
			ignoreLocation: a,
			location: s,
			threshold: c,
			distance: l
		}, e = t ? e : e.toLowerCase(), e = n ? Sn(e) : e, this.pattern = e, this.query = Mn(this.pattern, this.options);
	}
	static condition(e, t) {
		return t.useExtendedSearch;
	}
	searchIn(e) {
		let t = this.query;
		if (!t) return {
			isMatch: !1,
			score: 1
		};
		let { includeMatches: n, isCaseSensitive: r, ignoreDiacritics: i } = this.options;
		e = r ? e : e.toLowerCase(), e = i ? Sn(e) : e;
		let a = 0, o = [], s = 0, c = !1;
		for (let r = 0, i = t.length; r < i; r += 1) {
			let i = t[r];
			o.length = 0, a = 0, c = !1;
			for (let t = 0, r = i.length; t < r; t += 1) {
				let r = i[t], { isMatch: l, indices: u, score: d } = r.search(e);
				if (l) a += 1, s += d, Tn(r.type) && (c = !0), n && (wn.has(r.type) ? o.push(...u) : o.push(u));
				else {
					s = 0, a = 0, o.length = 0, c = !1;
					break;
				}
			}
			if (a) {
				let e = {
					isMatch: !0,
					score: s / a
				};
				return c && (e.hasInverse = !0), n && (e.indices = yn(o)), e;
			}
		}
		return {
			isMatch: !1,
			score: 1
		};
	}
}, Pn = [];
function Fn(...e) {
	Pn.push(...e);
}
function In(e, t) {
	for (let n = 0, r = Pn.length; n < r; n += 1) {
		let r = Pn[n];
		if (r.condition(e, t)) return new r(e, t);
	}
	return new Cn(e, t);
}
var Ln = {
	AND: "$and",
	OR: "$or"
}, Rn = {
	PATH: "$path",
	PATTERN: "$val"
}, zn = (e) => !!(e[Ln.AND] || e[Ln.OR]), Bn = (e) => !!e[Rn.PATH], Vn = (e) => !Rt(e) && Ut(e) && !zn(e), Hn = (e) => ({ [Ln.AND]: Object.keys(e).map((t) => ({ [t]: e[t] })) });
function Un(e, t, { auto: n = !0 } = {}) {
	let r = (e) => {
		if (J(e)) {
			let r = {
				keyId: null,
				pattern: e
			};
			return n && (r.searcher = In(e, t)), r;
		}
		let i = Object.keys(e), a = Bn(e);
		if (!a && i.length > 1 && !zn(e)) return r(Hn(e));
		if (Vn(e)) {
			let r = a ? e[Rn.PATH] : i[0], o = a ? e[Rn.PATTERN] : e[r];
			if (!J(o)) throw Error(Yt(r));
			let s = {
				keyId: an(r),
				pattern: o
			};
			return n && (s.searcher = In(o, t)), s;
		}
		let o = {
			children: [],
			operator: i[0]
		};
		return i.forEach((t) => {
			let n = e[t];
			Rt(n) && n.forEach((e) => {
				o.children.push(r(e));
			});
		}), o;
	};
	return zn(e) || (e = Hn(e)), r(e);
}
function Wn(e, { ignoreFieldNorm: t = X.ignoreFieldNorm }) {
	let n = 1;
	return e.forEach(({ key: e, norm: r, score: i }) => {
		let a = e ? e.weight : null;
		n *= Math.pow(i === 0 && a ? Number.EPSILON : i, (a || 1) * (t ? 1 : r));
	}), n;
}
function Gn(e, { ignoreFieldNorm: t = X.ignoreFieldNorm }) {
	e.forEach((e) => {
		e.score = Wn(e.matches, { ignoreFieldNorm: t });
	});
}
var Kn = class {
	constructor(e, t) {
		this.limit = e, this.heap = [], this.comparator = t;
	}
	get size() {
		return this.heap.length;
	}
	insert(e) {
		this.size < this.limit ? (this.heap.push(e), this._bubbleUp(this.size - 1)) : this.comparator(e, this.heap[0]) < 0 && (this.heap[0] = e, this._sinkDown(0));
	}
	extractSorted() {
		return this.heap.sort(this.comparator);
	}
	_bubbleUp(e) {
		let t = this.heap;
		for (; e > 0;) {
			let n = e - 1 >> 1;
			if (this.comparator(t[e], t[n]) <= 0) break;
			let r = t[e];
			t[e] = t[n], t[n] = r, e = n;
		}
	}
	_sinkDown(e) {
		let t = this.heap, n = t.length, r = e;
		do {
			e = r;
			let i = 2 * e + 1, a = 2 * e + 2;
			if (i < n && this.comparator(t[i], t[r]) > 0 && (r = i), a < n && this.comparator(t[a], t[r]) > 0 && (r = a), r !== e) {
				let n = t[e];
				t[e] = t[r], t[r] = n;
			}
		} while (r !== e);
	}
};
function qn(e) {
	let t = [];
	return e.matches.forEach((e) => {
		if (!Y(e.indices) || !e.indices.length) return;
		let n = {
			indices: e.indices,
			value: e.value
		};
		e.key && (n.key = e.key.id), e.idx > -1 && (n.refIndex = e.idx), t.push(n);
	}), t;
}
function Jn(e, t, { includeMatches: n = X.includeMatches, includeScore: r = X.includeScore } = {}) {
	return e.map((e) => {
		let { idx: i } = e, a = {
			item: t[i],
			refIndex: i
		};
		return n && (a.matches = qn(e)), r && (a.score = e.score), a;
	});
}
var Yn = RegExp("[\\p{L}\\p{M}\\p{N}_]+", "gu"), Xn = /* @__PURE__ */ new WeakSet();
function Zn(e) {
	Xn.has(e) || (Xn.add(e), console.warn(`[Fuse] tokenize regex ${e} lacks the global flag; only the first match per text will be returned. Add the 'g' flag.`));
}
function Qn(e) {
	if (typeof e == "function") {
		let t = !1;
		return (n) => {
			let r = e(n);
			if (!t && (t = !0, !Array.isArray(r) || r.some((e) => typeof e != "string"))) throw Error(`[Fuse] tokenize function must return string[]; received ${Array.isArray(r) ? "array containing non-strings" : typeof r}.`);
			return r;
		};
	}
	return e instanceof RegExp ? (e.global || Zn(e), (t) => t.match(e) || []) : (e) => e.match(Yn) || [];
}
function $n({ isCaseSensitive: e = !1, ignoreDiacritics: t = !1, tokenize: n } = {}) {
	let r = Qn(n);
	return { tokenize(n) {
		return e || (n = n.toLowerCase()), t && (n = Sn(n)), r(n);
	} };
}
var er = class {
	static condition(e, t) {
		return t.useTokenSearch;
	}
	constructor(e, t) {
		this.options = t, this.analyzer = $n({
			isCaseSensitive: t.isCaseSensitive,
			ignoreDiacritics: t.ignoreDiacritics,
			tokenize: t.tokenize
		});
		let n = this.analyzer.tokenize(e), { df: r, fieldCount: i } = t._invertedIndex;
		this.termSearchers = [], this.idfWeights = [];
		for (let e of n) {
			this.termSearchers.push(new Cn(e, {
				location: t.location,
				threshold: t.threshold,
				distance: t.distance,
				includeMatches: t.includeMatches,
				findAllMatches: t.findAllMatches,
				minMatchCharLength: t.minMatchCharLength,
				isCaseSensitive: t.isCaseSensitive,
				ignoreDiacritics: t.ignoreDiacritics,
				ignoreLocation: !0
			}));
			let n = r.get(e) || 0, a = Math.log(1 + (i - n + .5) / (n + .5));
			this.idfWeights.push(a);
		}
		this.combineAll = t.tokenMatch === "all", this.numTerms = this.termSearchers.length, this.useMask = this.numTerms <= 31;
	}
	searchIn(e) {
		if (!this.termSearchers.length) return {
			isMatch: !1,
			score: 1
		};
		let t = [], n = 0, r = 0, i = 0, a = 0, o = this.combineAll && !this.useMask ? /* @__PURE__ */ new Set() : null;
		for (let s = 0; s < this.termSearchers.length; s++) {
			let c = this.termSearchers[s].searchIn(e), l = this.idfWeights[s];
			r += l, c.isMatch && (i++, n += l * (1 - c.score), c.indices && t.push(...c.indices), this.combineAll && (this.useMask ? a |= 1 << s : o.add(s)));
		}
		if (i === 0) return {
			isMatch: !1,
			score: 1
		};
		let s = r > 0 ? 1 - n / r : 0, c = {
			isMatch: !0,
			score: Math.max(.001, s)
		};
		return this.options.includeMatches && t.length && (c.indices = yn(t)), this.combineAll && (this.useMask ? c.matchedMask = a : c.matchedTerms = o, c.termCount = this.numTerms), c;
	}
};
function tr(e, t, n, r) {
	let i = r.tokenize(t);
	if (!i.length) return;
	e.fieldCount++, e.docFieldCount.set(n, (e.docFieldCount.get(n) || 0) + 1);
	let a = new Set(i), o = e.docTermFieldHits.get(n);
	o || (o = /* @__PURE__ */ new Map(), e.docTermFieldHits.set(n, o));
	for (let t of a) o.set(t, (o.get(t) || 0) + 1), e.df.set(t, (e.df.get(t) || 0) + 1);
}
function nr(e, t, n, r) {
	let { i, v: a, $: o } = t;
	if (a !== void 0) {
		tr(e, a, i, r);
		return;
	}
	if (o) for (let t = 0; t < n; t++) {
		let n = o[t];
		if (n) {
			if (Array.isArray(n)) for (let t of n) tr(e, t.v, i, r);
			else tr(e, n.v, i, r);
		}
	}
}
function rr(e, t, n) {
	let r = {
		fieldCount: 0,
		df: /* @__PURE__ */ new Map(),
		docFieldCount: /* @__PURE__ */ new Map(),
		docTermFieldHits: /* @__PURE__ */ new Map()
	};
	for (let i of e) nr(r, i, t, n);
	return r;
}
function ir(e, t, n, r) {
	nr(e, t, n, r);
}
function ar(e, t) {
	let n = e.docFieldCount.get(t);
	if (n === void 0) return;
	e.fieldCount -= n, e.docFieldCount.delete(t);
	let r = e.docTermFieldHits.get(t);
	if (r) {
		for (let [t, n] of r) {
			let r = (e.df.get(t) || 0) - n;
			r <= 0 ? e.df.delete(t) : e.df.set(t, r);
		}
		e.docTermFieldHits.delete(t);
	}
}
function or(e, t) {
	if (t.length === 0) return;
	let n = Array.from(new Set(t)).sort((e, t) => e - t);
	for (let t of n) ar(e, t);
	let r = (e) => {
		let t = 0, r = n.length;
		for (; t < r;) {
			let i = t + r >>> 1;
			n[i] < e ? t = i + 1 : r = i;
		}
		return e - t;
	}, i = n[0], a = /* @__PURE__ */ new Map();
	for (let [t, n] of e.docFieldCount) a.set(t > i ? r(t) : t, n);
	e.docFieldCount = a;
	let o = /* @__PURE__ */ new Map();
	for (let [t, n] of e.docTermFieldHits) o.set(t > i ? r(t) : t, n);
	e.docTermFieldHits = o;
}
var sr = class {
	constructor(e, t, n) {
		this.options = j(j({}, X), t), this.options.useExtendedSearch, this.options.useTokenSearch, this._keyStore = new tn(this.options.keys), this._docs = e, this._myIndex = null, this._invertedIndex = null, this.setCollection(e, n), this._lastQuery = null, this._lastSearcher = null;
	}
	_getSearcher(e) {
		if (this._lastQuery === e) return this._lastSearcher;
		let t = In(e, this._invertedIndex ? j(j({}, this.options), {}, { _invertedIndex: this._invertedIndex }) : this.options);
		return this._lastQuery = e, this._lastSearcher = t, t;
	}
	setCollection(e, t) {
		if (this._docs = e, t && !(t instanceof pn)) throw Error(qt);
		if (this._myIndex = t || mn(this.options.keys, this._docs, {
			getFn: this.options.getFn,
			fieldNormWeight: this.options.fieldNormWeight
		}), this.options.useTokenSearch) {
			let e = $n({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			this._invertedIndex = rr(this._myIndex.records, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	add(e) {
		if (!Y(e)) return;
		this._docs.push(e);
		let t = this._myIndex.add(e, this._docs.length - 1);
		if (this._invertedIndex && t) {
			let e = $n({
				isCaseSensitive: this.options.isCaseSensitive,
				ignoreDiacritics: this.options.ignoreDiacritics,
				tokenize: this.options.tokenize
			});
			ir(this._invertedIndex, t, this._myIndex.keys.length, e);
		}
		this._invalidateSearcherCache();
	}
	remove(e = () => !1) {
		let t = [], n = [];
		for (let r = 0, i = this._docs.length; r < i; r += 1) e(this._docs[r], r) && (t.push(this._docs[r]), n.push(r));
		if (n.length) {
			this._invertedIndex && or(this._invertedIndex, n);
			let e = new Set(n);
			this._docs = this._docs.filter((t, n) => !e.has(n)), this._myIndex.removeAll(n), this._invalidateSearcherCache();
		}
		return t;
	}
	removeAt(e) {
		if (!Number.isInteger(e) || e < 0 || e >= this._docs.length) throw Error(Jt);
		this._invertedIndex && or(this._invertedIndex, [e]);
		let t = this._docs.splice(e, 1)[0];
		return this._myIndex.removeAt(e), this._invalidateSearcherCache(), t;
	}
	_invalidateSearcherCache() {
		this._lastQuery = null, this._lastSearcher = null;
	}
	getIndex() {
		return this._myIndex;
	}
	_normalizedKeys() {
		return this._myIndex.keys.map((e) => this._keyStore.get(e.id) || e);
	}
	search(e, t) {
		let { limit: n = -1 } = t || {}, { includeMatches: r, includeScore: i, shouldSort: a, sortFn: o, ignoreFieldNorm: s } = this.options;
		if (J(e) && !e.trim()) {
			let e = this._docs.map((e, t) => ({
				item: e,
				refIndex: t
			}));
			return Vt(n) && n > -1 && (e = e.slice(0, n)), e;
		}
		let c = a && Vt(n) && n > 0 && J(e), l = o, u = (e, t) => l(e, t) || e.idx - t.idx, d;
		if (c) {
			let t = new Kn(n, u);
			J(this._docs[0]) ? this._searchStringList(e, {
				heap: t,
				ignoreFieldNorm: s
			}) : this._searchObjectList(e, {
				heap: t,
				ignoreFieldNorm: s
			}), d = t.extractSorted();
		} else d = J(e) ? J(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e), Gn(d, { ignoreFieldNorm: s }), a && d.sort(J(e) ? u : l), Vt(n) && n > -1 && (d = d.slice(0, n));
		return Jn(d, this._docs, {
			includeMatches: r,
			includeScore: i
		});
	}
	_searchStringList(e, { heap: t, ignoreFieldNorm: n } = {}) {
		let r = this._getSearcher(e), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: a } = this._myIndex, o = t ? null : [];
		return a.forEach(({ v: e, i: a, n: s }) => {
			if (!Y(e)) return;
			let c = r.searchIn(e);
			if (c.isMatch) {
				let r = {
					score: c.score,
					value: e,
					norm: s,
					indices: c.indices
				};
				i && (r.matchedMask = c.matchedMask, r.matchedTerms = c.matchedTerms, r.termCount = c.termCount);
				let l = [r];
				if (!i || this._coversAllTokens(l)) {
					let r = {
						item: e,
						idx: a,
						matches: l
					};
					t ? (r.score = Wn(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : o.push(r);
				}
			}
		}), o;
	}
	_searchLogical(e) {
		let t = Un(e, this.options), n = this._normalizedKeys(), r = (e, t, i) => {
			if (!("children" in e)) {
				let { keyId: r, searcher: a } = e, o;
				return r === null ? (o = [], n.forEach((e, n) => {
					o.push(...this._findMatches({
						key: e,
						value: t[n],
						searcher: a
					}));
				})) : o = this._findMatches({
					key: this._keyStore.get(r),
					value: this._myIndex.getValueForItemAtKeyId(t, r),
					searcher: a
				}), o && o.length ? [{
					idx: i,
					item: t,
					matches: o
				}] : [];
			}
			let { children: a, operator: o } = e, s = [];
			for (let e = 0, n = a.length; e < n; e += 1) {
				let n = a[e], c = r(n, t, i);
				if (c.length) s.push(...c);
				else if (o === Ln.AND) return [];
			}
			return s;
		}, i = this._myIndex.records, a = /* @__PURE__ */ new Map(), o = [];
		return i.forEach(({ $: e, i: n }) => {
			if (Y(e)) {
				let i = r(t, e, n);
				i.length && (a.has(n) || (a.set(n, {
					idx: n,
					item: e,
					matches: []
				}), o.push(a.get(n))), i.forEach(({ matches: e }) => {
					a.get(n).matches.push(...e);
				}));
			}
		}), o;
	}
	_searchObjectList(e, { heap: t, ignoreFieldNorm: n } = {}) {
		let r = this._getSearcher(e), i = this.options.useTokenSearch && this.options.tokenMatch === "all", { records: a } = this._myIndex, o = this._normalizedKeys(), s = t ? null : [];
		return a.forEach(({ $: e, i: a }) => {
			if (!Y(e)) return;
			let c = [], l = !1, u = !1;
			if (o.forEach((t, n) => {
				let i = this._findMatches({
					key: t,
					value: e[n],
					searcher: r
				});
				i.length ? (c.push(...i), i[0].hasInverse && (u = !0)) : l = !0;
			}), !(u && l) && c.length && (!i || this._coversAllTokens(c))) {
				let r = {
					idx: a,
					item: e,
					matches: c
				};
				t ? (r.score = Wn(r.matches, { ignoreFieldNorm: n }), t.insert(r)) : s.push(r);
			}
		}), s;
	}
	_findMatches({ key: e, value: t, searcher: n }) {
		if (!Y(t)) return [];
		let r = [];
		if (Rt(t)) t.forEach(({ v: t, i, n: a }) => {
			if (!Y(t)) return;
			let o = n.searchIn(t);
			if (o.isMatch) {
				let n = {
					score: o.score,
					key: e,
					value: t,
					idx: i,
					norm: a,
					indices: o.indices,
					hasInverse: o.hasInverse
				};
				o.termCount !== void 0 && (n.matchedMask = o.matchedMask, n.matchedTerms = o.matchedTerms, n.termCount = o.termCount), r.push(n);
			}
		});
		else {
			let { v: i, n: a } = t, o = n.searchIn(i);
			if (o.isMatch) {
				let t = {
					score: o.score,
					key: e,
					value: i,
					norm: a,
					indices: o.indices,
					hasInverse: o.hasInverse
				};
				o.termCount !== void 0 && (t.matchedMask = o.matchedMask, t.matchedTerms = o.matchedTerms, t.termCount = o.termCount), r.push(t);
			}
		}
		return r;
	}
	_coversAllTokens(e) {
		let t = e.length ? e[0].termCount : void 0;
		if (t === void 0) return !0;
		if (t <= 31) {
			let n = 0;
			for (let t = 0; t < e.length; t++) n |= e[t].matchedMask || 0;
			return n === Math.pow(2, t) - 1;
		}
		let n = /* @__PURE__ */ new Set();
		for (let t = 0; t < e.length; t++) {
			let r = e[t].matchedTerms;
			if (r) for (let e of r) n.add(e);
		}
		return n.size === t;
	}
};
sr.version = "7.5.0", sr.createIndex = mn, sr.parseIndex = hn, sr.config = X, sr.match = function(e, t, n) {
	if (n && n.useTokenSearch) throw Error($t);
	return In(e, j(j({}, X), n)).searchIn(t);
}, sr.parseQuery = Un, Fn(Nn), Fn(er), sr.use = function(...e) {
	e.forEach((e) => Fn(e));
};
var cr = sr, lr = { key: 0 }, ur = { key: 1 }, dr = { key: 2 }, fr = { key: 3 }, pr = { key: 4 }, mr = { key: 5 }, hr = { key: 6 }, gr = { key: 7 }, _r = { key: 8 }, vr = { key: 9 }, yr = { key: 10 }, br = { key: 11 }, xr = { key: 12 }, Sr = { key: 13 }, Cr = /* @__PURE__ */ d({
	__name: "title-renderer",
	props: { no: {} },
	setup(e) {
		let t = e, { $page: n } = et(), i = L(() => {
			var e;
			return +((e = t.no) == null ? n.value : e);
		});
		return (e, t) => (c(), r("div", null, [i.value === 1 ? (c(), r("p", lr, "Toán 6 - Bài 2 (Slidev)")) : i.value === 2 ? (c(), r("p", ur, "🎯 3 Trạm Khám Phá Của Bài Học")) : i.value === 3 ? (c(), r("p", dr, "📏 1. Tia Số & So Sánh Số Tự Nhiên")) : i.value === 4 ? (c(), r("p", fr, "Số Liền Trước & Số Liền Sau")) : i.value === 5 ? (c(), r("p", pr, "🖐️ Bí Mật 10 Ngón Tay Hệ Thập Phân")) : i.value === 6 ? (c(), r("p", mr, "👑 Vị Trí Ghế Ngồi Quyết Định Quyền Lực")) : i.value === 7 ? (c(), r("p", hr, [...t[0] || (t[0] = [oe("📐 Công Thức Cấu Tạo Số <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mrow><mi>a</mi><mi>b</mi></mrow><mo stretchy=\"true\">‾</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{ab}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8944em;\"></span><span class=\"mord katex-overline\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8944em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ab</span></span></span><span style=\"top:-3.8144em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"overline-line\" style=\"border-bottom-width:0.04em;\"></span></span></span></span></span></span></span></span></span> &amp; <span class=\"katex\"><span class=\"katex-mathml\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\"><semantics><mrow><mover accent=\"true\"><mrow><mi>a</mi><mi>b</mi><mi>c</mi></mrow><mo stretchy=\"true\">‾</mo></mover></mrow><annotation encoding=\"application/x-tex\">\\overline{abc}</annotation></semantics></math></span><span class=\"katex-html\" aria-hidden=\"true\"><span class=\"katex-base\"><span class=\"katex-strut\" style=\"height:0.8944em;\"></span><span class=\"mord katex-overline\"><span class=\"vlist-t\"><span class=\"vlist-r\"><span class=\"vlist\" style=\"height:0.8944em;\"><span style=\"top:-3em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"mord\"><span class=\"mord mathnormal\">ab</span><span class=\"mord mathnormal\">c</span></span></span><span style=\"top:-3.8144em;\"><span class=\"pstrut\" style=\"height:3em;\"></span><span class=\"overline-line\" style=\"border-bottom-width:0.04em;\"></span></span></span></span></span></span></span></span></span>", 4)])])) : i.value === 8 ? (c(), r("p", gr, "GIẢI LAO 5 - 10 PHÚT NHÉ!")) : i.value === 9 ? (c(), r("p", _r, "🏛️ 3 Ký Tự Gốc Từ Bàn Tay 🖐️")) : i.value === 10 ? (c(), r("p", vr, "🔑 Quy Tắc: \"Phải Cộng (+) - Trái Trừ (-)\"")) : i.value === 11 ? (c(), r("p", yr, "📊 Bảng Tra Cứu Số La Mã Từ 1 Đến 30")) : i.value === 12 ? (c(), r("p", br, "🎮 Thám Hiểm Game: Mở Khóa Rương Báu")) : i.value === 13 ? (c(), r("p", xr, "✨ TỔNG KẾT: 3 ĐIỀU CỐT LÕI BỎ TÚI")) : i.value === 14 ? (c(), r("p", Sr, "🏆 Phiếu Thử Thách Nhận Điểm 10")) : m("v-if", !0)]));
	}
}), wr = {
	class: "bg-main transform",
	shadow: "~",
	p: "x-4 y-2",
	border: "~ transparent rounded dark:main"
}, Tr = ["value", "disabled"], Er = {
	table: "",
	"w-full": "",
	"border-collapse": ""
}, Dr = ["border", "onClick"], Or = {
	"text-right": "",
	op50: "",
	"text-sm": "",
	"table-cell": "",
	"py-2": "",
	"pl-4": "",
	"pr-3": "",
	"vertical-middle": ""
}, kr = /*#__PURE__*/ Re(/* @__PURE__ */ d({
	__name: "Goto",
	setup(e) {
		let t = w(), n = w(), i = w(), o = w(), s = w(""), l = w(0), { go: u, slides: d } = W();
		function f(e) {
			return e != null;
		}
		let h = L(() => new cr(d.value.map((e) => {
			var t;
			return (t = e.meta) == null ? void 0 : t.slide;
		}).filter(f), {
			keys: ["no", "title"],
			threshold: .3,
			shouldSort: !0,
			minMatchCharLength: 1
		})), g = L(() => s.value.startsWith("/") ? s.value.substring(1) : s.value), v = L(() => g.value ? h.value.search(g.value).map((e) => e.item) : []), b = L(() => !!v.value.length);
		function C() {
			if (b.value) {
				let e = v.value.at(l.value || 0);
				e && u(e.no);
			}
			E();
		}
		function E() {
			s.value = "", H.value = !1;
		}
		function D(e) {
			e.preventDefault(), l.value++, l.value >= v.value.length && (l.value = 0), k();
		}
		function O(e) {
			e.preventDefault(), l.value--, l.value <= -2 && (l.value = v.value.length - 1), k();
		}
		function k() {
			var e;
			let t = (e = o.value) == null ? void 0 : e[l.value];
			t && i.value && (t.offsetTop + t.offsetHeight > i.value.offsetHeight + i.value.scrollTop ? i.value.scrollTo({
				behavior: "smooth",
				top: t.offsetTop + t.offsetHeight - i.value.offsetHeight + 1
			}) : t.offsetTop < i.value.scrollTop && i.value.scrollTo({
				behavior: "smooth",
				top: t.offsetTop
			}));
		}
		function te(e) {
			l.value = 0, s.value = e.target.value;
		}
		function A(e) {
			u(e), E();
		}
		return p(H, function() {
			var e = re(function* (e) {
				if (e) s.value = "", l.value = 0, setTimeout(() => {
					var e;
					return (e = n.value) == null ? void 0 : e.focus();
				}, 0);
				else {
					var t;
					(t = n.value) == null || t.blur();
				}
			});
			return function(t) {
				return e.apply(this, arguments);
			};
		}()), p(Me, () => {
			var e;
			(e = t.value) != null && e.contains(Me.value) || E();
		}), (e, u) => (c(), r("div", {
			id: "slidev-goto-dialog",
			ref_key: "container",
			ref: t,
			class: I(["fixed right-5 transition-all", S(H) ? "top-5" : "-top-20 op0 pointer-events-none"]),
			"w-90": "",
			"max-w-90": "",
			"min-w-90": ""
		}, [x("div", wr, [x("input", {
			id: "slidev-goto-input",
			ref_key: "input",
			ref: n,
			value: s.value,
			type: "text",
			disabled: !S(H),
			class: I(["outline-none bg-transparent", { "text-red-400": !b.value && s.value }]),
			placeholder: "Goto...",
			onKeydown: [
				T(C, ["enter"]),
				T(E, ["escape"]),
				T(D, ["down"]),
				T(O, ["up"])
			],
			onInput: te
		}, null, 42, Tr)]), S(H) && v.value.length > 0 ? (c(), r("div", {
			key: 0,
			ref_key: "list",
			ref: i,
			class: "autocomplete-list",
			shadow: "~",
			border: "~ transparent rounded dark:main"
		}, [x("ul", Er, [(c(!0), r(y, null, _(v.value, (e, t) => (c(), r("li", {
			ref_for: !0,
			ref_key: "items",
			ref: o,
			key: e.id,
			role: "button",
			tabindex: "0",
			"cursor-pointer": "",
			hover: "op100",
			"table-row": "",
			"items-center": "",
			border: t === 0 ? void 0 : "t main",
			class: I(l.value === t ? "bg-active op100" : "op80"),
			onClick: ee((t) => A(e.no), ["stop", "prevent"])
		}, [x("div", Or, P(e.no), 1), a(S(Cr), {
			"table-cell": "",
			"py-2": "",
			"pr-4": "",
			"w-full": "",
			no: e.no
		}, null, 8, ["no"])], 10, Dr))), 128))])], 512)) : m("v-if", !0)], 2));
	}
}), [["__scopeId", "data-v-6a338f52"]]), Ar = w(1), jr = L(() => be.value.length), Z = w(0), Mr = w(0);
function Nr() {
	Z.value > Ar.value && --Z.value;
}
function Pr() {
	Z.value < jr.value && (Z.value += 1);
}
function Fr() {
	if (Z.value > Ar.value) {
		let e = Z.value - Mr.value;
		e < Ar.value && (e = Ar.value), Z.value = e;
	}
}
function Ir() {
	if (Z.value < jr.value) {
		let e = Z.value + Mr.value;
		e > jr.value && (e = jr.value), Z.value = e;
	}
}
//#endregion
//#region node_modules/@slidev/client/internals/QuickOverview.vue?vue&type=script&setup=true&lang.ts
var Lr = ["onClick"], Rr = { class: "text-green font-bold" }, zr = { class: "opacity-50" }, Br = {
	key: 1,
	class: "opacity-50"
}, Vr = { class: "fixed top-4 right-4 z-modal text-gray-400 flex flex-col items-center gap-2" }, Hr = 128, Ur = 32, Wr = /* @__PURE__ */ d({
	__name: "QuickOverview",
	setup(t) {
		let { currentSlideNo: n, go: o, slides: s } = W();
		function l() {
			R.value = !1;
		}
		function u(e) {
			o(e), l();
		}
		function d(e) {
			return e === Z.value;
		}
		let f = ke.smaller("xs"), p = ke.smaller("sm"), h = L(() => f.value ? ve.width.value - Hr : p.value ? (ve.width.value - Hr - Ur) / 2 : 300), g = L(() => Math.floor((ve.width.value - Hr) / (h.value + Ur))), v = w("");
		return Ke("keypress", (e) => {
			if (!R.value) {
				v.value = "";
				return;
			}
			if (e.key === "Enter") {
				e.preventDefault(), v.value ? (u(+v.value), v.value = "") : u(Z.value);
				return;
			}
			let t = Number.parseInt(e.key.replace(/\D/g, ""));
			if (Number.isNaN(t)) {
				v.value = "";
				return;
			}
			if (!v.value && t === 0) return;
			if (v.value += String(t), +v.value > s.value.length) {
				v.value = "";
				return;
			}
			let n = s.value.findIndex((e) => `/${e.no}` === v.value);
			n !== -1 && (Z.value = n + 1), v.value * 10 > s.value.length && (u(+v.value), v.value = "");
		}), e(() => {
			Z.value = n.value, Mr.value = g.value;
		}), (e, t) => (c(), r(y, null, [a(O, {
			"enter-active-class": "duration-150 ease-out",
			"enter-from-class": "opacity-0 scale-102 !backdrop-blur-0px",
			"leave-active-class": "duration-200 ease-in",
			"leave-to-class": "opacity-0 scale-102 !backdrop-blur-0px"
		}, {
			default: M(() => [S(R) ? (c(), r("div", {
				key: 0,
				class: "fixed left-0 right-0 top-0 h-[calc(var(--vh,1vh)*100)] z-modal bg-main !bg-opacity-75 p-16 py-20 overflow-y-auto backdrop-blur-5px select-none",
				onClick: l
			}, [x("div", {
				class: "grid gap-y-4 gap-x-8 w-full",
				style: i(`grid-template-columns: repeat(auto-fit,minmax(${h.value}px,1fr))`)
			}, [(c(!0), r(y, null, _(S(s), (e, t) => (c(), r("div", {
				key: e.no,
				class: "relative"
			}, [x("div", {
				class: I(["inline-block border rounded overflow-hidden bg-main hover:border-primary transition", d(t + 1) || S(Z) === t + 1 ? "border-primary" : "border-main"]),
				onClick: (t) => u(e.no)
			}, [(c(), F(lt, {
				key: e.no,
				no: e.no,
				"use-snapshot": !0,
				width: h.value,
				class: "pointer-events-none"
			}, {
				default: M(() => [a(mt, {
					"clicks-context": S(xe)(e, S($e)),
					route: e,
					"render-context": "overview"
				}, null, 8, ["clicks-context", "route"]), a(dt, { page: e.no }, null, 8, ["page"])]),
				_: 2
			}, 1032, ["no", "width"]))], 10, Lr), x("div", {
				class: "absolute top-0",
				style: i(`left: ${h.value + 5}px`)
			}, [v.value && String(t + 1).startsWith(v.value) ? (c(), r(y, { key: 0 }, [x("span", Rr, P(v.value), 1), x("span", zr, P(String(t + 1).slice(v.value.length)), 1)], 64)) : (c(), r("span", Br, P(t + 1), 1))], 4)]))), 128))], 4)])) : m("v-if", !0)]),
			_: 1
		}), A(x("div", Vr, [
			a(q, {
				title: "Close",
				class: "text-2xl",
				onClick: l
			}, {
				default: M(() => [...t[0] || (t[0] = [x("div", { class: "i-carbon:close" }, null, -1)])]),
				_: 1
			}),
			(c(), F(q, {
				key: 0,
				as: "a",
				title: "Slides Overview",
				target: "_blank",
				href: `${S(fe)}overview`,
				"tab-index": "-1",
				class: "text-2xl"
			}, {
				default: M(() => [...t[1] || (t[1] = [x("div", { class: "i-carbon:list-boxes" }, null, -1)])]),
				_: 1
			}, 8, ["href"])),
			m("v-if", !0)
		], 512), [[k, S(R)]])], 64));
	}
});
//#endregion
//#region node_modules/@slidev/client/composables/useMousePosInSlide.ts
function Gr() {
	let e = Ye();
	return L(() => {
		var t;
		let n = (t = ct.value) == null ? void 0 : t.getBoundingClientRect();
		if (!n) return;
		let r = (e.x.value - n.left) / n.width * 100, i = (e.y.value - n.top) / n.height * 100;
		if (!(r < 0 || r > 100 || i < 0 || i > 100)) return {
			x: r,
			y: i
		};
	});
}
//#endregion
//#region node_modules/@slidev/client/internals/LaserPointer.vue?vue&type=script&setup=true&lang.ts
var Kr = {
	key: 0,
	class: "absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"
}, qr = /*#__PURE__*/ Re(/* @__PURE__ */ d({
	__name: "LaserPointer",
	setup(t) {
		let a = Gr(), { isPresenter: o } = W(), s = L(() => {
			var e;
			return !o.value && ((e = at.cursor) == null ? void 0 : e.style) === "laser" ? at.cursor : we.value === "laser" ? a.value : null;
		});
		return n(() => {
			e(() => {
				document.body.classList.toggle("slidev-self-laser-active", we.value === "laser" && !!s.value);
			});
		}), (e, t) => s.value ? (c(), r("div", Kr, [x("div", {
			class: "laser-pointer",
			style: i({
				left: `${s.value.x}%`,
				top: `${s.value.y}%`
			})
		}, null, 4)])) : m("v-if", !0);
	}
}), [["__scopeId", "data-v-9cef461a"]]), Jr = { render: () => [] }, Yr = {
	key: 0,
	class: "bg-main text-main shadow-xl absolute bottom-10 left-0 z-menu py2",
	border: "~ main rounded-md"
}, Xr = /* @__PURE__ */ d({
	__name: "MenuButton",
	props: {
		modelValue: { default: !1 },
		disabled: { default: !1 }
	},
	setup(e, { emit: t }) {
		let n = Ue(e, "modelValue", t, { passive: !0 }), i = w();
		return Ge(i, () => {
			n.value = !1;
		}), (t, a) => (c(), r("div", {
			ref_key: "el",
			ref: i,
			class: "flex relative"
		}, [x("button", {
			class: I({ disabled: e.disabled }),
			onClick: a[0] || (a[0] = (e) => n.value = !S(n))
		}, [s(t.$slots, "button", {
			value: S(n),
			class: I({ disabled: e.disabled })
		})], 2), (c(), F(ae, null, [S(n) ? (c(), r("div", Yr, [s(t.$slots, "menu")])) : m("v-if", !0)], 1024))], 512));
	}
}), Zr = {
	border: "~ main rounded",
	flex: "~ gap-2 items-center",
	relative: "",
	"h-5": "",
	"w-5": "",
	"p0.5": "",
	"hover:bg-active": "",
	p1: ""
}, Qr = ["disabled"], $r = /* @__PURE__ */ d({
	__name: "FormCheckbox",
	props: /*@__PURE__*/ f({ disabled: { type: Boolean } }, {
		modelValue: j({ type: Boolean }, { type: Boolean }),
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = v(e, "modelValue");
		return (n, i) => (c(), r("div", Zr, [x("div", {
			"i-ri-check-line": "",
			class: I(t.value ? "" : "op0")
		}, null, 2), A(x("input", {
			"onUpdate:modelValue": i[0] || (i[0] = (e) => t.value = e),
			type: "checkbox",
			absolute: "",
			"inset-0": "",
			"opacity-10": "",
			disabled: e.disabled
		}, null, 8, Qr), [[C, t.value]])]));
	}
}), ei = {
	"w-30": "",
	"h-8": "",
	flex: "~ gap-1 items-center"
}, ti = {
	key: 0,
	"w-1.5": "",
	"h-1.5": "",
	"bg-primary": "",
	rounded: "",
	absolute: "",
	"top-0": "",
	"right--2": ""
}, ni = {
	key: 0,
	"w-1.5": "",
	"h-1.5": "",
	"bg-primary": "",
	rounded: "",
	absolute: "",
	"top-0": "",
	"right--2": ""
}, ri = ["innerHTML"], Q = /* @__PURE__ */ d({
	__name: "FormItem",
	props: {
		title: {},
		nested: { type: [Boolean, Number] },
		div: { type: Boolean },
		description: {},
		dot: { type: Boolean }
	},
	emits: ["reset"],
	setup(e, { emit: t }) {
		let n = t;
		function a() {
			n("reset");
		}
		return (t, n) => (c(), F(l(e.div ? "div" : "label"), {
			flex: "~ row gap-2 items-center",
			"select-none": ""
		}, {
			default: M(() => [x("div", ei, [e.nested ? (c(), r("div", {
				key: 0,
				"i-ri-corner-down-right-line": "",
				op40: "",
				style: i(typeof e.nested == "number" ? { marginLeft: `${e.nested * .5 + .5}rem` } : { marginLeft: "0.25rem" })
			}, null, 4)) : m("v-if", !0), e.description ? (c(), F(S(te), {
				key: 2,
				distance: "10"
			}, {
				popper: M(() => [x("div", {
					"text-sm": "",
					"min-w-90": "",
					innerHTML: e.description
				}, null, 8, ri)]),
				default: M(() => [x("div", {
					op75: "",
					"text-right": "",
					relative: "",
					onDblclick: a
				}, [g(P(e.title) + " ", 1), e.dot ? (c(), r("div", ni)) : m("v-if", !0)], 32)]),
				_: 1
			})) : (c(), r("div", {
				key: 1,
				op75: "",
				relative: "",
				onDblclick: a
			}, [g(P(e.title) + " ", 1), e.dot ? (c(), r("div", ti)) : m("v-if", !0)], 32))]), s(t.$slots, "default")]),
			_: 3
		}));
	}
}), ii = {
	relative: "",
	"h-22px": ""
}, ai = {
	key: 0,
	"pointer-events-none": "",
	absolute: "",
	"right-1": "",
	"top-0.5": "",
	"text-xs": "",
	op25: ""
}, oi = /* @__PURE__ */ d({
	__name: "FormSlider",
	props: /*@__PURE__*/ f({
		max: {},
		min: {},
		step: {},
		unit: {},
		default: {}
	}, {
		modelValue: { type: Number },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = e, n = v(e, "modelValue");
		return (a, s) => (c(), r(y, null, [x("div", {
			relative: "",
			"h-22px": "",
			"w-60": "",
			"flex-auto": "",
			onDblclick: s[1] || (s[1] = (e) => t.default === void 0 ? null : n.value = t.default)
		}, [A(x("input", o({
			"onUpdate:modelValue": s[0] || (s[0] = (e) => n.value = e),
			type: "range",
			class: "slider"
		}, t, {
			absolute: "",
			"bottom-0": "",
			"left-0": "",
			"right-0": "",
			"top-0": "",
			"z-10": "",
			"w-full": "",
			"align-top": ""
		}), null, 16), [[
			ne,
			n.value,
			void 0,
			{ number: !0 }
		]]), t.default == null ? m("v-if", !0) : (c(), r("span", {
			key: 0,
			border: "r main",
			absolute: "",
			"bottom-0": "",
			"top-0": "",
			"h-full": "",
			"w-1px": "",
			op75: "",
			style: i({ left: `${(t.default - e.min) / (e.max - e.min) * 100}%` })
		}, null, 4))], 32), x("div", ii, [A(x("input", o({
			"onUpdate:modelValue": s[2] || (s[2] = (e) => n.value = e),
			type: "number"
		}, t, {
			border: "~ main rounded",
			m0: "",
			"w-20": "",
			"bg-gray:5": "",
			pl2: "",
			"align-top": "",
			"text-sm": ""
		}), null, 16), [[
			ne,
			n.value,
			void 0,
			{ number: !0 }
		]]), t.unit ? (c(), r("span", ai, P(t.unit), 1)) : m("v-if", !0)])], 64));
	}
}), si = {
	error: 0,
	client: 60,
	Light: 60,
	Dark: 240
};
function ci(e, t = 1) {
	if (si[e]) return li(si[e], t);
	let n = 0;
	for (let t = 0; t < e.length; t++) n = e.charCodeAt(t) + ((n << 5) - n);
	return li(n % 360, t);
}
function li(e, t = 1) {
	return `hsla(${e}, ${e === -1 ? 0 : tt.value ? 50 : 100}%, ${tt.value ? 60 : 20}%, ${t})`;
}
//#endregion
//#region node_modules/@slidev/client/internals/Badge.vue?vue&type=script&setup=true&lang.ts
var ui = ["textContent"], di = /* @__PURE__ */ d({
	__name: "Badge",
	props: {
		text: {},
		color: {
			type: [Boolean, Number],
			default: !0
		},
		as: {},
		size: {}
	},
	setup(e) {
		let t = e, n = L(() => !t.text || t.color === !1 ? {} : {
			color: typeof t.color == "number" ? li(t.color) : ci(t.text),
			background: typeof t.color == "number" ? li(t.color, .1) : ci(t.text, .1)
		}), r = L(() => (t.size || "sm") === "sm" ? "px-1.5 text-11px leading-1.6em" : "");
		return (a, o) => (c(), F(l(e.as || "span"), {
			"ws-nowrap": "",
			rounded: "",
			class: I(r.value),
			style: i(n.value)
		}, {
			default: M(() => [s(a.$slots, "default", {}, () => [x("span", { textContent: P(t.text) }, null, 8, ui)])]),
			_: 3
		}, 8, ["class", "style"]));
	}
}), fi = {
	flex: "~ gap-1 items-center",
	rounded: "",
	"bg-gray:4": "",
	p1: "",
	"m--1": ""
}, pi = /* @__PURE__ */ d({
	__name: "SegmentControl",
	props: {
		options: {},
		modelValue: {}
	},
	emits: ["update:modelValue"],
	setup(e) {
		return (t, n) => (c(), r("div", fi, [(c(!0), r(y, null, _(e.options, (n) => (c(), F(di, {
			key: n.value,
			class: I(["px-2 py-1 text-xs font-mono", n.value === e.modelValue ? "" : "op50"]),
			color: n.value === e.modelValue,
			"aria-pressed": n.value === e.modelValue,
			size: "none",
			text: n.label,
			as: "button",
			onClick: (e) => t.$emit("update:modelValue", n.value)
		}, null, 8, [
			"class",
			"color",
			"aria-pressed",
			"text",
			"onClick"
		]))), 128))]));
	}
}), mi = {
	"text-sm": "",
	"select-none": "",
	flex: "~ col gap-1",
	"min-w-30": "",
	px4: ""
}, hi = /* @__PURE__ */ d({
	__name: "Settings",
	setup(e) {
		let { isPresenter: t } = W(), { isSupported: n } = Be();
		return (e, i) => (c(), r("div", mi, [
			a(Q, {
				title: "Invert",
				dot: S(z).invert !== S(B).invert,
				onReset: i[1] || (i[1] = (e) => S(z).invert = S(B).invert)
			}, {
				default: M(() => [a($r, {
					modelValue: S(z).invert,
					"onUpdate:modelValue": i[0] || (i[0] = (e) => S(z).invert = e)
				}, null, 8, ["modelValue"])]),
				_: 1
			}, 8, ["dot"]),
			a(Q, {
				title: "Brightness",
				dot: S(z).brightness !== S(B).brightness,
				onReset: i[3] || (i[3] = (e) => S(z).brightness = S(B).brightness)
			}, {
				default: M(() => [a(oi, {
					modelValue: S(z).brightness,
					"onUpdate:modelValue": i[2] || (i[2] = (e) => S(z).brightness = e),
					max: 1.5,
					min: .5,
					step: .02,
					default: S(B).brightness
				}, null, 8, ["modelValue", "default"])]),
				_: 1
			}, 8, ["dot"]),
			a(Q, {
				title: "Contrast",
				dot: S(z).contrast !== S(B).contrast,
				onReset: i[5] || (i[5] = (e) => S(z).contrast = S(B).contrast)
			}, {
				default: M(() => [a(oi, {
					modelValue: S(z).contrast,
					"onUpdate:modelValue": i[4] || (i[4] = (e) => S(z).contrast = e),
					max: 1.5,
					min: .5,
					step: .02,
					default: S(B).contrast
				}, null, 8, ["modelValue", "default"])]),
				_: 1
			}, 8, ["dot"]),
			a(Q, {
				title: "Saturation",
				dot: S(z).saturate !== S(B).saturate,
				onReset: i[7] || (i[7] = (e) => S(z).saturate = S(B).saturate)
			}, {
				default: M(() => [a(oi, {
					modelValue: S(z).saturate,
					"onUpdate:modelValue": i[6] || (i[6] = (e) => S(z).saturate = e),
					max: 1.5,
					min: .5,
					step: .02,
					default: S(B).saturate
				}, null, 8, ["modelValue", "default"])]),
				_: 1
			}, 8, ["dot"]),
			a(Q, {
				title: "Sepia",
				dot: S(z).sepia !== S(B).sepia,
				onReset: i[9] || (i[9] = (e) => S(z).sepia = S(B).sepia)
			}, {
				default: M(() => [a(oi, {
					modelValue: S(z).sepia,
					"onUpdate:modelValue": i[8] || (i[8] = (e) => S(z).sepia = e),
					max: 2,
					min: -2,
					step: .02,
					default: S(B).sepia
				}, null, 8, ["modelValue", "default"])]),
				_: 1
			}, 8, ["dot"]),
			a(Q, {
				title: "Hue Rotate",
				dot: S(z).hueRotate !== S(B).hueRotate,
				onReset: i[11] || (i[11] = (e) => S(z).hueRotate = S(B).hueRotate)
			}, {
				default: M(() => [a(oi, {
					modelValue: S(z).hueRotate,
					"onUpdate:modelValue": i[10] || (i[10] = (e) => S(z).hueRotate = e),
					max: 180,
					min: -180,
					step: .1,
					default: S(B).hueRotate
				}, null, 8, ["modelValue", "default"])]),
				_: 1
			}, 8, ["dot"]),
			i[16] || (i[16] = x("div", { class: "h-1px opacity-5 bg-current w-full my2" }, null, -1)),
			a(Q, { title: "Cursor Style" }, {
				default: M(() => [a(pi, {
					modelValue: S(we),
					"onUpdate:modelValue": i[12] || (i[12] = (e) => ie(we) ? we.value = e : null),
					options: [{
						label: "Cursor",
						value: "cursor"
					}, {
						label: "Laser",
						value: "laser"
					}]
				}, null, 8, ["modelValue"])]),
				_: 1
			}),
			S(t) ? m("v-if", !0) : (c(), F(Q, {
				key: 0,
				title: "Slide Scale"
			}, {
				default: M(() => [a(pi, {
					modelValue: S(ce),
					"onUpdate:modelValue": i[13] || (i[13] = (e) => ie(ce) ? ce.value = e : null),
					options: [{
						label: "Fit",
						value: 0
					}, {
						label: "1:1",
						value: 1
					}]
				}, null, 8, ["modelValue"])]),
				_: 1
			})),
			S(n) ? (c(), F(Q, {
				key: 1,
				title: "Wake Lock"
			}, {
				default: M(() => [a($r, {
					modelValue: S(pe),
					"onUpdate:modelValue": i[14] || (i[14] = (e) => ie(pe) ? pe.value = e : null)
				}, null, 8, ["modelValue"])]),
				_: 1
			})) : m("v-if", !0),
			S(t) ? m("v-if", !0) : (c(), F(Q, {
				key: 2,
				title: "Hide Idle Cursor"
			}, {
				default: M(() => [a($r, {
					modelValue: S(De),
					"onUpdate:modelValue": i[15] || (i[15] = (e) => ie(De) ? De.value = e : null)
				}, null, 8, ["modelValue"])]),
				_: 1
			}))
		]));
	}
}), gi = { class: "select-list" }, _i = { class: "title" }, vi = { class: "items" }, yi = ["onClick"], bi = /*#__PURE__*/ Re(/* @__PURE__ */ d({
	__name: "SelectList",
	props: {
		modelValue: { type: [
			Object,
			String,
			Number,
			Boolean
		] },
		title: { type: String },
		items: { type: Array }
	},
	setup(e, { emit: t }) {
		let n = Ue(e, "modelValue", t, { passive: !0 });
		return (t, i) => (c(), r("div", gi, [x("div", _i, P(e.title), 1), x("div", vi, [(c(!0), r(y, null, _(e.items, (e) => (c(), r("div", {
			key: e.value,
			class: I(["item", { active: S(n) === e.value }]),
			onClick: () => {
				var t;
				n.value = e.value, (t = e.onClick) == null || t.call(e);
			}
		}, [x("div", { class: I(["i-carbon:checkmark text-green-500 mya", { "opacity-0": S(n) !== e.value }]) }, null, 2), x("div", { class: I({ "opacity-50": S(n) !== e.value }) }, P(e.display || e.value), 3)], 10, yi))), 128))])]));
	}
}), [["__scopeId", "data-v-6cd69f25"]]), xi = {
	"text-sm": "",
	flex: "~ col gap-2"
}, Si = {
	px3: "",
	"ws-nowrap": ""
}, Ci = {
	"font-bold": "",
	"text-primary": ""
}, wi = /* @__PURE__ */ d({
	__name: "SyncControls",
	setup(e) {
		let { isPresenter: t } = W(), n = L({
			get: () => t.value ? U.value.presenterReceive : U.value.viewerReceive,
			set(e) {
				t.value ? U.value.presenterReceive = e : U.value.viewerReceive = e;
			}
		}), r = L({
			get: () => t.value ? U.value.presenterSend : U.value.viewerSend,
			set(e) {
				t.value ? U.value.presenterSend = e : U.value.viewerSend = e;
			}
		}), i = L({
			get: () => n.value && r.value ? "bidirectional" : n.value && !r.value ? "receive-only" : !n.value && r.value ? "send-only" : "off",
			set(e) {
				switch (e) {
					case "bidirectional":
						n.value = !0, r.value = !0;
						break;
					case "receive-only":
						n.value = !0, r.value = !1;
						break;
					case "send-only":
						n.value = !1, r.value = !0;
						break;
					case "off": n.value = !1, r.value = !1;
				}
			}
		});
		return (e, o) => (c(), F(Xr, null, {
			button: M(() => [a(q, { title: "Change sync settings" }, {
				default: M(() => [x("div", { class: I(["i-ph:arrow-up-bold mx--1.2 scale-x-80", r.value ? "text-green6 dark:text-green" : "op30"]) }, null, 2), x("div", { class: I(["i-ph:arrow-down-bold mx--1.2 scale-x-80", n.value ? "text-green6 dark:text-green" : "op30"]) }, null, 2)]),
				_: 1
			})]),
			menu: M(() => [x("div", xi, [
				x("div", Si, [o[1] || (o[1] = x("span", { op75: "" }, "Slides navigation syncing for ", -1)), x("span", Ci, P(S(t) ? "presenter" : "viewer"), 1)]),
				o[2] || (o[2] = x("div", { class: "h-1px opacity-10 bg-current w-full" }, null, -1)),
				a(bi, {
					modelValue: i.value,
					"onUpdate:modelValue": o[0] || (o[0] = (e) => i.value = e),
					title: "Sync Mode",
					items: [
						{
							value: "bidirectional",
							display: "Bidirectional Sync"
						},
						{
							value: "receive-only",
							display: "Receive Only"
						},
						{
							value: "send-only",
							display: "Send Only"
						},
						{
							value: "off",
							display: "Disable"
						}
					]
				}, null, 8, ["modelValue"])
			])]),
			_: 1
		}));
	}
}), Ti = {
	key: 0,
	class: "i-carbon:minimize"
}, Ei = {
	key: 1,
	class: "i-carbon:maximize"
}, Di = {
	key: 0,
	class: "i-carbon-moon"
}, Oi = {
	key: 1,
	class: "i-carbon-sun"
}, ki = {
	key: 0,
	class: "i-carbon-magic-wand-filled color-red-600 dark:color-red-400"
}, Ai = {
	key: 1,
	class: "i-carbon-magic-wand"
}, ji = {
	key: 0,
	class: "i-ph-cursor-fill"
}, Mi = {
	key: 1,
	class: "i-ph-cursor-duotone"
}, Ni = {
	key: 0,
	"w-2": "",
	"h-2": "",
	"bg-primary": "",
	"rounded-full": "",
	absolute: "",
	"top-0.5": "",
	"right-0.5": ""
}, Pi = { class: "px2 my-auto" }, Fi = { class: "text-lg" }, Ii = { class: "opacity-50 text-sm" }, Li = /* @__PURE__ */ d({
	__name: "NavControls",
	props: { persist: { default: !1 } },
	setup(e) {
		let t = e, { currentSlideNo: n, hasNext: o, hasPrev: s, isEmbedded: l, isPresenter: u, isPresenterAvailable: d, next: f, prev: p, total: h, enterPresenter: _, exitPresenter: v } = W(), { brush: b, drawingEnabled: C } = pt(), ee = ke.smaller("md"), { isFullscreen: T, toggle: D } = Pe, O = w();
		function k() {
			O.value && Me.value && O.value.contains(Me.value) && Me.value.blur();
		}
		let te = L(() => t.persist ? "text-$slidev-controls-foreground bg-transparent" : "rounded-md bg-main shadow-xl border border-main"), A = E();
		return (e, t) => (c(), r("nav", {
			ref_key: "root",
			ref: O,
			class: "flex flex-col"
		}, [x("div", {
			class: I(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:p-2", te.value]),
			onMouseleave: k
		}, [
			S(l) ? m("v-if", !0) : (c(), F(q, {
				key: 0,
				title: S(T) ? "Close fullscreen" : "Enter fullscreen",
				onClick: S(D)
			}, {
				default: M(() => [S(T) ? (c(), r("div", Ti)) : (c(), r("div", Ei))]),
				_: 1
			}, 8, ["title", "onClick"])),
			a(q, {
				disabled: !S(s),
				title: "Go to previous slide",
				onClick: S(p)
			}, {
				default: M(() => [...t[6] || (t[6] = [x("div", { class: "i-carbon:arrow-left" }, null, -1)])]),
				_: 1
			}, 8, ["disabled", "onClick"]),
			a(q, {
				disabled: !S(o),
				title: "Go to next slide",
				onClick: S(f)
			}, {
				default: M(() => [...t[7] || (t[7] = [x("div", { class: "i-carbon:arrow-right" }, null, -1)])]),
				_: 1
			}, 8, ["disabled", "onClick"]),
			S(l) ? m("v-if", !0) : (c(), F(q, {
				key: 1,
				title: "Show slide overview",
				onClick: t[0] || (t[0] = (e) => S(me)())
			}, {
				default: M(() => [...t[8] || (t[8] = [x("div", { class: "i-carbon:apps" }, null, -1)])]),
				_: 1
			})),
			S(nt) ? m("v-if", !0) : (c(), F(q, {
				key: 2,
				title: S(tt) ? "Switch to light mode theme" : "Switch to dark mode theme",
				onClick: t[1] || (t[1] = (e) => S(it)())
			}, {
				default: M(() => [S(tt) ? (c(), r("div", Di)) : (c(), r("div", Oi))]),
				_: 1
			}, 8, ["title"])),
			a(vt),
			S(l) ? m("v-if", !0) : (c(), r(y, { key: 3 }, [
				!S(u) && !S(ee) && A.value ? (c(), r(y, { key: 0 }, [a(S(A)), a(vt)], 64)) : m("v-if", !0),
				S(u) ? (c(), F(q, {
					key: 1,
					title: S(we) === "laser" ? S(ge) ? "Disable laser pointer" : "Enable laser pointer" : S(ge) ? "Hide presenter cursor" : "Show presenter cursor",
					active: S(ge),
					onClick: t[2] || (t[2] = (e) => S(he)())
				}, {
					default: M(() => [S(we) === "laser" ? (c(), r(y, { key: 0 }, [S(ge) ? (c(), r("div", ki)) : (c(), r("div", Ai))], 64)) : (c(), r(y, { key: 1 }, [S(ge) ? (c(), r("div", ji)) : (c(), r("div", Mi))], 64))]),
					_: 1
				}, 8, ["title", "active"])) : m("v-if", !0),
				!S(V).drawings.presenterOnly || S(u) ? (c(), F(q, {
					key: 2,
					class: "relative",
					title: S(C) ? "Hide drawing toolbar" : "Show drawing toolbar",
					active: S(C),
					onClick: t[3] || (t[3] = (e) => C.value = !S(C))
				}, {
					default: M(() => [t[9] || (t[9] = x("div", { class: "i-carbon:pen" }, null, -1)), S(C) ? (c(), r("div", {
						key: 0,
						class: "absolute left-1 right-1 bottom-0 h-0.7 rounded-full",
						style: i({ background: S(b).color })
					}, null, 4)) : m("v-if", !0)]),
					_: 1
				}, 8, ["title", "active"])) : m("v-if", !0),
				a(vt),
				S(u) ? (c(), F(q, {
					key: 3,
					title: "Play Mode",
					onClick: S(v)
				}, {
					default: M(() => [...t[10] || (t[10] = [x("div", { class: "i-carbon:presentation-file" }, null, -1)])]),
					_: 1
				}, 8, ["onClick"])) : m("v-if", !0),
				S(d) ? (c(), F(q, {
					key: 4,
					title: "Presenter Mode",
					onClick: S(_)
				}, {
					default: M(() => [...t[11] || (t[11] = [x("div", { class: "i-carbon:user-speaker" }, null, -1)])]),
					_: 1
				}, 8, ["onClick"])) : m("v-if", !0),
				m("v-if", !0)
			], 64)),
			(c(), r(y, { key: 4 }, [S(V).download ? (c(), F(q, {
				key: 0,
				title: "Download as PDF",
				onClick: S(rt)
			}, {
				default: M(() => [...t[13] || (t[13] = [x("div", { class: "i-carbon:download" }, null, -1)])]),
				_: 1
			}, 8, ["onClick"])) : m("v-if", !0)], 64)),
			m("v-if", !0),
			!S(u) && S(V).info && !S(l) ? (c(), F(q, {
				key: 6,
				title: "Show info",
				onClick: t[5] || (t[5] = (e) => ue.value = !S(ue))
			}, {
				default: M(() => [...t[15] || (t[15] = [x("div", { class: "i-carbon:information" }, null, -1)])]),
				_: 1
			})) : m("v-if", !0),
			S(l) ? m("v-if", !0) : (c(), r(y, { key: 7 }, [
				a(vt),
				S(u) ? (c(), F(q, {
					key: 0,
					title: "Toggle Presenter Layout",
					class: "aspect-ratio-initial flex items-center",
					onClick: S(_e)
				}, {
					default: M(() => [t[16] || (t[16] = x("div", { class: "i-carbon:template" }, null, -1)), g(" " + P(S(Te)), 1)]),
					_: 1
				}, 8, ["onClick"])) : m("v-if", !0),
				(c(), F(wi, { key: 1 })),
				a(Xr, null, {
					button: M(({ value: e }) => [a(q, {
						title: "More Options",
						active: e
					}, {
						default: M(() => [t[17] || (t[17] = x("div", { class: "i-carbon:settings-adjust" }, null, -1)), S(Ee) ? (c(), r("div", Ni)) : m("v-if", !0)]),
						_: 1
					}, 8, ["active"])]),
					menu: M(() => [a(hi)]),
					_: 1
				})
			], 64)),
			S(l) ? m("v-if", !0) : (c(), F(vt, { key: 8 })),
			x("div", Pi, [x("span", Fi, P(S(n)), 1), x("span", Ii, " / " + P(S(h)), 1)]),
			a(S(Jr))
		], 34)], 512));
	}
}), Ri = /* @__PURE__ */ new Set(), zi = /* @__PURE__ */ new Set(), Bi = /\/$/;
function Vi(e) {
	return e.startsWith("http") || e.startsWith("//") ? e : `${"/Toan6/slidev-bai-2/".replace(Bi, "")}${e.startsWith("/") ? e : `/${e}`}`;
}
var Hi = 2, Ui = /* @__PURE__ */ new Map(), Wi = w(0), Gi = w(0), Ki = L(() => Gi.value === 0 ? 1 : Wi.value / Gi.value);
L(() => Ki.value >= 1);
function qi(e) {
	let t = Vi(e);
	if (Ri.has(t) || zi.has(t)) return;
	zi.add(t);
	let n = new Image();
	n.onload = () => {
		zi.delete(t), Ri.add(t), Ui.delete(t), Wi.value = Ri.size;
	}, n.onerror = () => {
		var n;
		zi.delete(t);
		let r = (n = Ui.get(t)) == null ? 0 : n;
		r < Hi && (Ui.set(t, r + 1), setTimeout(qi, 1e3 * (r + 1), e));
	}, n.src = t;
}
function Ji(e) {
	var t;
	let n = (t = e.meta) == null || (t = t.slide) == null ? void 0 : t.images;
	if (n != null && n.length) for (let e of n) qi(e);
}
function Yi(t, n, r, i) {
	let a = V.preloadImages;
	if (a === !1) return;
	let o = typeof a == "object" && (a == null ? void 0 : a.ahead) || 3;
	e(() => {
		let e = i.value;
		if (!(e != null && e.length)) return;
		let t = /* @__PURE__ */ new Set();
		for (let i of e) {
			var n, r;
			for (let e of (n = (r = i.meta) == null || (r = r.slide) == null ? void 0 : r.images) == null ? [] : n) t.add(Vi(e));
		}
		Gi.value = t.size;
	}), e(() => {
		let e = t.value, a = i.value;
		if (!e || !(a != null && a.length)) return;
		Ji(e), Ji(n.value), Ji(r.value);
		let s = e.no - 1;
		for (let e = 1; e <= o; e++) {
			let t = s + e;
			t < a.length && Ji(a[t]);
		}
	}), e((e) => {
		let t = i.value, n = setTimeout(() => {
			if (t != null && t.length) for (let e of t) Ji(e);
		}, 3e3);
		e(() => clearTimeout(n));
	});
}
//#endregion
//#region node_modules/@slidev/client/composables/useViewTransition.ts
function Xi() {
	let e = ze(), t = w(!1), n, r, i = typeof document < "u" && "startViewTransition" in document;
	return e.beforeResolve((e, a) => {
		var o, s, c, l, u;
		let d = (o = Le(a.params.no)) == null ? void 0 : o.meta, f = (s = Le(e.params.no)) == null ? void 0 : s.meta, p = d == null || (c = d.slide) == null ? void 0 : c.no, m = f == null || (l = f.slide) == null ? void 0 : l.no;
		if ((p != null && m != null && p !== m && ((u = p < m ? d == null ? void 0 : d.transition : f == null ? void 0 : f.transition) == null ? V.transition : u)) !== "view-transition") {
			t.value = !1;
			return;
		}
		if (!i) {
			t.value = !1, console.warn("View transition is not supported in your browser, fallback to normal transition.");
			return;
		}
		t.value = !0;
		let h = new Promise((e, t) => {
			n = e, r = t;
		}), g, _ = new Promise((e) => g = e);
		return setTimeout(() => {
			document.startViewTransition(() => (g(), h));
		}, 50), _;
	}), i && e.afterEach(() => {
		n == null || n(), r == null || r();
	}), t;
}
//#endregion
//#region node_modules/@slidev/client/internals/DragControl.vue?vue&type=script&setup=true&lang.ts
var Zi = ["data-drag-id"], $ = 10, Qi = 10, $i = "absolute border border-gray bg-gray dark:border-gray-500 dark:bg-gray-800 bg-opacity-30 ", ea = 20, ta = /* @__PURE__ */ d({
	__name: "DragControl",
	props: { data: {} },
	setup(n) {
		let { dragId: a, zoom: o, autoHeight: s, x0: l, y0: d, width: f, height: p, rotate: g, isArrow: _ } = n.data, v = u(Qe, w(1)), b = L(() => v.value * o.value), { left: C, top: ee } = ot(), T = _ ? -Infinity : 40, E = L(() => g.value * Math.PI / 180), D = L(() => Math.sin(E.value)), O = L(() => Math.cos(E.value)), k = L(() => f.value * O.value + p.value * D.value), te = L(() => f.value * D.value + p.value * O.value), A = L(() => l.value - k.value / 2), j = L(() => d.value - te.value / 2), ne = L(() => l.value + k.value / 2), re = L(() => d.value + te.value / 2), ie = L(() => _ && f.value < 0), M = L(() => _ && p.value < 0), N = null;
		function ae(e) {
			if (e.buttons !== 1) return;
			e.preventDefault(), e.stopPropagation();
			let t = e.target.getBoundingClientRect(), n = f.value * O.value - p.value * D.value, r = f.value * D.value + p.value * O.value, i = f.value * O.value + p.value * D.value, a = -f.value * D.value + p.value * O.value;
			N = {
				x0: l.value,
				y0: d.value,
				width: f.value,
				height: p.value,
				rotate: g.value,
				dx0: e.clientX - (t.left + t.right) / 2,
				dy0: e.clientY - (t.top + t.bottom) / 2,
				ltx: l.value - n / 2,
				lty: d.value - r / 2,
				rtx: l.value + i / 2,
				rty: d.value - a / 2,
				lbx: l.value - i / 2,
				lby: d.value + a / 2,
				rbx: l.value + n / 2,
				rby: d.value + r / 2
			}, e.currentTarget.setPointerCapture(e.pointerId);
		}
		function oe(e) {
			if (!N || e.buttons !== 1) return;
			e.preventDefault(), e.stopPropagation();
			let t = (e.clientX - C.value - N.dx0) / b.value, n = (e.clientY - ee.value - N.dy0) / b.value;
			l.value = se(t, -k.value / 2 + Qi, Se.value + k.value / 2 - Qi), d.value = se(n, -te.value / 2 + Qi, de.value + te.value / 2 - Qi);
		}
		function P(e) {
			N && (e.preventDefault(), e.stopPropagation(), N = null);
		}
		function F(e, t) {
			return {
				onPointerdown: ae,
				onPointermove: (n) => {
					if (!N || n.buttons !== 1) return;
					n.preventDefault(), n.stopPropagation();
					let r = (n.clientX - C.value) / b.value, i = (n.clientY - ee.value) / b.value, { ltx: a, lty: o, rtx: s, rty: c, lbx: u, lby: m, rbx: h, rby: g } = N, _ = N.width / N.height, v = Math.max(T, T * _);
					function y(e, t) {
						if (n.shiftKey) {
							let n = Math.max(e, t * _, v);
							return {
								w: n,
								h: n / _
							};
						}
						return {
							w: Math.max(e, T),
							h: Math.max(t, T)
						};
					}
					if (e) {
						if (t) {
							let { w: e, h: t } = y((h - r) * O.value + (g - i) * D.value, -(h - r) * D.value + (g - i) * O.value);
							r = h - e * O.value + t * D.value, i = g - e * D.value - t * O.value;
						} else {
							let { w: e, h: t } = y((s - r) * O.value - (i - c) * D.value, (s - r) * D.value + (i - c) * O.value);
							r = s - e * O.value - t * D.value, i = c - e * D.value + t * O.value;
						}
					} else if (t) {
						let { w: e, h: t } = y((r - u) * O.value - (m - i) * D.value, (r - u) * D.value + (m - i) * O.value);
						r = u + e * O.value + t * D.value, i = m + e * D.value - t * O.value;
					} else {
						let { w: e, h: t } = y((r - a) * O.value + (i - o) * D.value, -(r - a) * D.value + (i - o) * O.value);
						r = a + e * O.value - t * D.value, i = o + e * D.value + t * O.value;
					}
					e ? t ? (l.value = (r + h) / 2, d.value = (i + g) / 2, f.value = (h - r) * O.value + (g - i) * D.value, p.value = -(h - r) * D.value + (g - i) * O.value) : (l.value = (r + s) / 2, d.value = (i + c) / 2, f.value = (s - r) * O.value - (i - c) * D.value, p.value = (s - r) * D.value + (i - c) * O.value) : t ? (l.value = (r + u) / 2, d.value = (i + m) / 2, f.value = (r - u) * O.value - (m - i) * D.value, p.value = (r - u) * D.value + (m - i) * O.value) : (l.value = (r + a) / 2, d.value = (i + o) / 2, f.value = (r - a) * O.value + (i - o) * D.value, p.value = -(r - a) * D.value + (i - o) * O.value);
				},
				onPointerup: P,
				style: {
					width: `${$}px`,
					height: `${$}px`,
					margin: `-${$ / 2}px`,
					left: e === ie.value ? void 0 : "0",
					right: e === ie.value ? "0" : void 0,
					top: t === M.value ? void 0 : "0",
					bottom: t === M.value ? "0" : void 0,
					cursor: _ ? "move" : +e + +t == 1 ? "nesw-resize" : "nwse-resize",
					borderRadius: _ ? "50%" : void 0
				},
				class: $i
			};
		}
		function ce(e) {
			return {
				onPointerdown: ae,
				onPointermove: (t) => {
					if (!N || t.buttons !== 1) return;
					t.preventDefault(), t.stopPropagation();
					let n = (t.clientX - C.value) / b.value, r = (t.clientY - ee.value) / b.value, { ltx: i, lty: a, rtx: o, rty: s, lbx: c, lby: u, rbx: m, rby: h } = N;
					if (e === "l") {
						let e = (o + m) / 2, t = (s + h) / 2;
						f.value = Math.max((e - n) * O.value + (t - r) * D.value, T), l.value = e - f.value * O.value / 2, d.value = t - f.value * D.value / 2;
					} else if (e === "r") {
						let e = (i + c) / 2, t = (a + u) / 2;
						f.value = Math.max((n - e) * O.value + (r - t) * D.value, T), l.value = e + f.value * O.value / 2, d.value = t + f.value * D.value / 2;
					} else if (e === "t") {
						let e = (c + m) / 2, t = (u + h) / 2;
						p.value = Math.max((t - r) * O.value - (e - n) * D.value, T), l.value = e + p.value * D.value / 2, d.value = t - p.value * O.value / 2;
					} else if (e === "b") {
						let e = (i + o) / 2, t = (a + s) / 2;
						p.value = Math.max((r - t) * O.value - (n - e) * D.value, T), l.value = e - p.value * D.value / 2, d.value = t + p.value * O.value / 2;
					}
				},
				onPointerup: P,
				style: {
					width: `${$}px`,
					height: `${$}px`,
					margin: `-${$ / 2}px`,
					left: e === "l" ? "0" : e === "r" ? "100%" : "50%",
					top: e === "t" ? "0" : e === "b" ? "100%" : "50%",
					cursor: "lr".includes(e) ? "ew-resize" : "ns-resize",
					borderRadius: "50%"
				},
				class: $i
			};
		}
		function le() {
			return {
				onPointerdown: ae,
				onPointermove: (e) => {
					if (!N || e.buttons !== 1) return;
					e.preventDefault(), e.stopPropagation();
					let t = (e.clientX - C.value - N.dx0) / b.value - $ / 4, n = (e.clientY - ee.value - N.dy0) / b.value - $ / 4, r = Math.atan2(n - d.value, t - l.value) * 180 / Math.PI + 90;
					for (let e of [
						0,
						90,
						180,
						270,
						360
					]) if (Math.abs(r - e) < 5) {
						r = e % 360;
						break;
					}
					g.value = r;
				},
				onPointerup: P,
				style: {
					width: `${$}px`,
					height: `${$}px`,
					margin: `-${$ / 2}px`,
					left: "50%",
					top: "-20px",
					cursor: "grab",
					borderRadius: "50%"
				},
				class: $i
			};
		}
		let R = {
			immediate: !1,
			immediateCallback: !1
		}, ue = Ve(() => {
			ne.value <= Qi || l.value--;
		}, ea, R), z = Ve(() => {
			A.value >= Se.value - Qi || l.value++;
		}, ea, R), B = Ve(() => {
			re.value <= Qi || d.value--;
		}, ea, R), fe = Ve(() => {
			j.value >= de.value - Qi || d.value++;
		}, ea, R);
		return e(() => {
			function e(e, t) {
				Ie[e].value ? t.resume() : t.pause();
			}
			e("left", ue), e("right", z), e("up", B), e("down", fe);
		}), (e, n) => Number.isFinite(S(l)) ? (c(), r("div", {
			key: 0,
			id: "drag-control-container",
			"data-drag-id": S(a),
			style: i({
				position: "absolute",
				zIndex: 100,
				left: `${S(o) * (S(l) - Math.abs(S(f)) / 2)}px`,
				top: `${S(o) * (S(d) - Math.abs(S(p)) / 2)}px`,
				width: `${S(o) * Math.abs(S(f))}px`,
				height: `${S(o) * Math.abs(S(p))}px`,
				transformOrigin: "center center",
				transform: `rotate(${S(g)}deg)`
			}),
			onPointerdown: ae,
			onPointermove: oe,
			onPointerup: P
		}, [x("div", { class: I(["absolute inset-0 z-nav dark:b-gray-400", S(_) ? "" : "b b-dark"]) }, [S(s) ? m("v-if", !0) : (c(), r(y, { key: 0 }, [
			x("div", h(t(F(!0, !0))), null, 16),
			x("div", h(t(F(!1, !1))), null, 16),
			S(_) ? m("v-if", !0) : (c(), r(y, { key: 0 }, [x("div", h(t(F(!0, !1))), null, 16), x("div", h(t(F(!1, !0))), null, 16)], 64))
		], 64)), S(_) ? m("v-if", !0) : (c(), r(y, { key: 1 }, [
			x("div", h(t(ce("l"))), null, 16),
			x("div", h(t(ce("r"))), null, 16),
			S(s) ? m("v-if", !0) : (c(), r(y, { key: 0 }, [x("div", h(t(ce("t"))), null, 16), x("div", h(t(ce("b"))), null, 16)], 64)),
			x("div", h(t(le())), null, 16),
			x("div", {
				class: "absolute -top-15px w-0 b b-dashed b-dark dark:b-gray-400",
				style: i({
					left: "calc(50% - 1px)",
					height: S(s) ? "14px" : "10px"
				})
			}, null, 4)
		], 64))], 2)], 44, Zi)) : m("v-if", !0);
	}
}), na = /*#__PURE__*/ Re(/* @__PURE__ */ d({
	__name: "SlidesShow",
	props: { renderContext: {} },
	setup(t) {
		let { currentSlideRoute: n, currentTransition: i, getPrimaryClicks: s, prevRoute: u, nextRoute: d, slides: f, isPrintMode: p, isPrintWithClicks: h, clicksDirection: g, printRange: v } = W();
		function b(e) {
			e.meta.preload !== !1 && (e.meta.__preloaded = !0, e.load());
		}
		e(() => {
			b(n.value), b(u.value), b(d.value);
		}), e((e) => {
			let t = f.value, n = setTimeout(() => {
				t.forEach(b);
			}, 3e3);
			e(() => clearTimeout(n));
		}), Yi(n, u, d, f);
		let x = Xi(), C = E();
		import("./DrawingLayer-D2KRMjLg.js").then((e) => C.value = e.default);
		let w = L(() => p.value ? v.value.map((e) => f.value[e - 1]) : f.value.filter((e) => {
			var t;
			return ((t = e.meta) == null ? void 0 : t.__preloaded) || e === n.value;
		}));
		function ee() {
			je.value = !0, D();
		}
		return (e, u) => (c(), r(y, null, [
			m(" Global Bottom "),
			a(S(ut)),
			m(" Slides "),
			(c(), F(l(S(x) && !S(p) && !S(je) && !S(Ne) ? "div" : N), o(S(je) || S(Ne) || S(p) ? {} : S(i), {
				id: "slideshow",
				tag: "div",
				class: {
					"slidev-nav-go-forward": S(g) > 0,
					"slidev-nav-go-backward": S(g) < 0
				},
				onAfterLeave: ee
			}), {
				default: M(() => [(c(!0), r(y, null, _(w.value, (e) => A((c(), F(mt, {
					key: e.no,
					"clicks-context": S(p) && !S(h) ? S(xe)(e, S($e)) : S(s)(e),
					route: e,
					"render-context": t.renderContext
				}, null, 8, [
					"clicks-context",
					"route",
					"render-context"
				])), [[k, e === S(n)]])), 128))]),
				_: 1
			}, 16, ["class"])),
			S(Ae) ? (c(), F(ta, {
				key: 0,
				data: S(Ae)
			}, null, 8, ["data"])) : m("v-if", !0),
			m(" Global Top "),
			a(S(ft)),
			C.value ? (c(), F(S(C), { key: 1 })) : m("v-if", !0)
		], 64));
	}
}), [["__scopeId", "data-v-7fa97661"]]), ra = /* #__PURE__ */ Object.assign({}), ia = /* #__PURE__ */ Object.assign({}), aa = [Object.values(ra)[0], Object.values(ia)[0]].filter(Boolean);
//#endregion
//#region node_modules/@slidev/client/setup/shortcuts.ts
function oa() {
	let { go: e, goFirst: t, goLast: n, next: r, nextSlide: i, prev: a, prevSlide: o } = W(), { drawingEnabled: s } = pt(), { escape: c, space: l, shift: u, left: d, right: f, up: p, down: m, enter: h, d: g, g: _, o: v, "`": y } = Ie, b = {
		next: r,
		prev: a,
		nextSlide: i,
		prevSlide: o,
		go: e,
		goFirst: t,
		goLast: n,
		downloadPDF: rt,
		toggleDark: it,
		toggleOverview: me,
		toggleDrawing: () => s.value = !s.value,
		escapeOverview: () => R.value = !1,
		showGotoDialog: () => H.value = !H.value
	}, x = K(G(R), G(Ae)), S = [
		{
			name: "next_space",
			key: K(l, G(u)),
			fn: r,
			autoRepeat: !0
		},
		{
			name: "prev_space",
			key: K(l, u),
			fn: a,
			autoRepeat: !0
		},
		{
			name: "next_right",
			key: K(f, G(u), x),
			fn: r,
			autoRepeat: !0
		},
		{
			name: "prev_left",
			key: K(d, G(u), x),
			fn: a,
			autoRepeat: !0
		},
		{
			name: "next_page_key",
			key: "pageDown",
			fn: r,
			autoRepeat: !0
		},
		{
			name: "prev_page_key",
			key: "pageUp",
			fn: a,
			autoRepeat: !0
		},
		{
			name: "next_down",
			key: K(m, x),
			fn: i,
			autoRepeat: !0
		},
		{
			name: "prev_up",
			key: K(p, x),
			fn: o,
			autoRepeat: !0
		},
		{
			name: "next_shift",
			key: K(f, u),
			fn: i,
			autoRepeat: !0
		},
		{
			name: "prev_shift",
			key: K(d, u),
			fn: o,
			autoRepeat: !0
		},
		{
			name: "toggle_dark",
			key: K(g, G(s)),
			fn: it
		},
		{
			name: "toggle_overview",
			key: K(qe(v, y), G(s)),
			fn: me
		},
		{
			name: "hide_overview",
			key: K(c, G(s)),
			fn: () => R.value = !1
		},
		{
			name: "goto",
			key: K(_, G(s)),
			fn: () => H.value = !H.value
		},
		{
			name: "next_overview",
			key: K(f, R),
			fn: Pr
		},
		{
			name: "prev_overview",
			key: K(d, R),
			fn: Nr
		},
		{
			name: "up_overview",
			key: K(p, R),
			fn: Fr
		},
		{
			name: "down_overview",
			key: K(m, R),
			fn: Ir
		},
		{
			name: "goto_from_overview",
			key: K(h, R),
			fn: () => {
				e(Z.value), R.value = !1;
			}
		}
	], C = new Set(S.map((e) => e.name));
	for (let e of aa) S = e(b, S);
	if (S.filter((e) => e.name && C.has(e.name)).length === 0) {
		let e = [
			"========== WARNING ==========",
			"defineShortcutsSetup did not return any of the base shortcuts.",
			"See https://sli.dev/custom/config-shortcuts.html for migration.",
			"If it is intentional, return at least one shortcut with one of the base names (e.g. name:\"goto\")."
		].join("\n\n");
		alert(e), console.warn(e);
	}
	return S;
}
//#endregion
//#region node_modules/@slidev/client/logic/shortcuts.ts
function sa() {
	let { isPrintMode: e } = W(), t = K(G(Oe), G(Ce), G(e), ye, G(le)), n = oa();
	new Map(n.map((e) => [e.key, e])).forEach((e) => {
		e.fn && r(e.key, e.fn, e.autoRepeat);
	}), i("f", () => Pe.toggle());
	function r(e, n, r = !1) {
		typeof e == "string" && (e = Ie[e]);
		let i = K(e, t), a = 0, o, s = () => {
			if (clearTimeout(o), !i.value) {
				a = 0;
				return;
			}
			r && (o = setTimeout(s, Math.max(1e3 - a * 250, 150)), a++), n();
		};
		return p(i, s, { flush: "sync" });
	}
	function i(e, n) {
		return Je(e, (e) => {
			t.value && (e.repeat || n());
		});
	}
}
//#endregion
export { qr as a, kr as c, bt as d, yt as f, pi as i, It as l, na as n, Gr as o, vt as p, Li as r, Wr as s, sa as t, kt as u };
