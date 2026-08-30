import { n as e } from "../rolldown-runtime-B0aSnxlc.js";
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function t(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var n = process.env.NODE_ENV === "production" ? {} : Object.freeze({}), r = process.env.NODE_ENV === "production" ? [] : Object.freeze([]), i = () => {}, a = () => !1, o = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), s = (e) => e.startsWith("onUpdate:"), c = Object.assign, l = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, u = Object.prototype.hasOwnProperty, d = (e, t) => u.call(e, t), f = Array.isArray, p = (e) => C(e) === "[object Map]", m = (e) => C(e) === "[object Set]", h = (e) => C(e) === "[object Date]", g = (e) => C(e) === "[object RegExp]", _ = (e) => typeof e == "function", v = (e) => typeof e == "string", y = (e) => typeof e == "symbol", b = (e) => typeof e == "object" && !!e, x = (e) => (b(e) || _(e)) && _(e.then) && _(e.catch), S = Object.prototype.toString, C = (e) => S.call(e), w = (e) => C(e).slice(8, -1), T = (e) => C(e) === "[object Object]", E = (e) => v(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, D = /* @__PURE__ */ t(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), ee = /* @__PURE__ */ t("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), O = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, k = /-\w/g, A = O((e) => e.replace(k, (e) => e.slice(1).toUpperCase())), te = /\B([A-Z])/g, ne = O((e) => e.replace(te, "-$1").toLowerCase()), re = O((e) => e.charAt(0).toUpperCase() + e.slice(1)), ie = O((e) => e ? `on${re(e)}` : ""), j = (e, t) => !Object.is(e, t), M = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, ae = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, oe = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, se = (e) => {
	let t = v(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, ce, le = () => ce || (ce = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ue(e, t) {
	return e + JSON.stringify(t, (e, t) => typeof t == "function" ? t.toString() : t);
}
var de = {
	1: "TEXT",
	2: "CLASS",
	4: "STYLE",
	8: "PROPS",
	16: "FULL_PROPS",
	32: "NEED_HYDRATION",
	64: "STABLE_FRAGMENT",
	128: "KEYED_FRAGMENT",
	256: "UNKEYED_FRAGMENT",
	512: "NEED_PATCH",
	1024: "DYNAMIC_SLOTS",
	2048: "DEV_ROOT_FRAGMENT",
	[-1]: "CACHED",
	[-2]: "BAIL"
}, fe = {
	1: "STABLE",
	2: "DYNAMIC",
	3: "FORWARDED"
}, pe = /* @__PURE__ */ t("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol"), me = 2;
function he(e, t = 0, n = e.length) {
	if (t = Math.max(0, Math.min(t, e.length)), n = Math.max(0, Math.min(n, e.length)), t > n) return "";
	let r = e.split(/(\r?\n)/), i = r.filter((e, t) => t % 2 == 1);
	r = r.filter((e, t) => t % 2 == 0);
	let a = 0, o = [];
	for (let e = 0; e < r.length; e++) if (a += r[e].length + (i[e] && i[e].length || 0), a >= t) {
		for (let s = e - me; s <= e + me || n > a; s++) {
			if (s < 0 || s >= r.length) continue;
			let c = s + 1;
			o.push(`${c}${" ".repeat(Math.max(3 - String(c).length, 0))}|  ${r[s]}`);
			let l = r[s].length, u = i[s] && i[s].length || 0;
			if (s === e) {
				let e = t - (a - (l + u)), r = Math.max(1, n > a ? l - e : n - t);
				o.push("   |  " + " ".repeat(e) + "^".repeat(r));
			} else if (s > e) {
				if (n > a) {
					let e = Math.max(Math.min(n - a, l), 1);
					o.push("   |  " + "^".repeat(e));
				}
				a += l + u;
			}
		}
		break;
	}
	return o.join("\n");
}
function ge(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = v(r) ? be(r) : ge(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (v(e) || b(e)) return e;
}
var _e = /;(?![^(]*\))/g, ve = /:([^]+)/, ye = /\/\*[^]*?\*\//g;
function be(e) {
	let t = {};
	return e.replace(ye, "").split(_e).forEach((e) => {
		if (e) {
			let n = e.split(ve);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function xe(e) {
	if (!e) return "";
	if (v(e)) return e;
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (v(r) || typeof r == "number") {
			let e = n.startsWith("--") ? n : ne(n);
			t += `${e}:${r};`;
		}
	}
	return t;
}
function Se(e) {
	let t = "";
	if (v(e)) t = e;
	else if (f(e)) for (let n = 0; n < e.length; n++) {
		let r = Se(e[n]);
		r && (t += r + " ");
	}
	else if (b(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function Ce(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !v(t) && (e.class = Se(t)), n && (e.style = ge(n)), e;
}
var we = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Te = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ee = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", De = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr", Oe = /* @__PURE__ */ t(we), ke = /* @__PURE__ */ t(Te), Ae = /* @__PURE__ */ t(Ee), je = /* @__PURE__ */ t(De), Me = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ne = /* @__PURE__ */ t(Me), Pe = /* @__PURE__ */ t(Me + ",async,autofocus,autoplay,controls,default,defer,disabled,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Fe(e) {
	return !!e || e === "";
}
var Ie = /* @__PURE__ */ t("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"), Le = /* @__PURE__ */ t("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
function Re(e) {
	if (e == null) return !1;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean";
}
var ze = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function Be(e, t) {
	return e.replace(ze, (e) => t ? e === "\"" ? "\\\\\\\"" : `\\\\${e}` : `\\${e}`);
}
function Ve(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = Ue(e[r], t[r]);
	return n;
}
function He(e, t) {
	if (e.size !== t.size) return !1;
	let n = Array.from(t), r = new Uint8Array(n.length);
	for (let t of e) {
		let e = -1;
		for (let i = 0; i < n.length; i++) if (!r[i] && Ue(t, n[i])) {
			e = i;
			break;
		}
		if (e < 0) return !1;
		r[e] = 1;
	}
	return !0;
}
function Ue(e, t) {
	if (e === t) return !0;
	let n = h(e), r = h(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = y(e), r = y(t), n || r) return e === t;
	if (n = f(e), r = f(t), n || r) return n && r ? Ve(e, t) : !1;
	if (n = b(e), r = b(t), n || r) {
		if (!n || !r) return !1;
		if (n = p(e), r = p(t), n || r || (n = m(e), r = m(t), n || r)) return n && r ? He(e, t) : !1;
		if (Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !Ue(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function We(e, t) {
	return e.findIndex((e) => Ue(e, t));
}
var Ge = (e) => !!(e && e.__v_isRef === !0), Ke = (e) => v(e) ? e : e == null ? "" : f(e) || b(e) && (e.toString === S || !_(e.toString)) ? Ge(e) ? Ke(e.value) : JSON.stringify(e, qe, 2) : String(e), qe = (e, t) => Ge(t) ? qe(e, t.value) : p(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[Je(t, r) + " =>"] = n, e), {}) } : m(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => Je(e)) } : y(t) ? Je(t) : b(t) && !f(t) && !T(t) ? String(t) : t, Je = (e, t = "") => {
	var n;
	return y(e) ? `Symbol(${(n = e.description) == null ? t : n})` : e;
};
function Ye(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : ((typeof e != "number" || !Number.isFinite(e)) && process.env.NODE_ENV !== "production" && console.warn("[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:", e), String(e));
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
function Xe(e, ...t) {
	console.warn(`[Vue warn] ${e}`, ...t);
}
var Ze, Qe = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && Ze && (Ze.active ? (this.parent = Ze, this.index = (Ze.scopes || (Ze.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = Ze;
			try {
				return Ze = this, e();
			} finally {
				Ze = t;
			}
		} else process.env.NODE_ENV !== "production" && this._warnOnRun && Xe("cannot run an inactive effect scope.");
	}
	on() {
		++this._on === 1 && (this.prevScope = Ze, Ze = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (Ze === this) Ze = this.prevScope;
			else {
				let e = Ze;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function $e(e) {
	return new Qe(e);
}
function et() {
	return Ze;
}
function tt(e, t = !1) {
	Ze ? Ze.cleanups.push(e) : process.env.NODE_ENV !== "production" && !t && Xe("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
var N, nt = /* @__PURE__ */ new WeakSet(), rt = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ze && (Ze.active ? Ze.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, nt.has(this) && (nt.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || st(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, St(this), ut(this);
		let e = N, t = vt;
		N = this, vt = !0;
		try {
			return this.fn();
		} finally {
			process.env.NODE_ENV !== "production" && N !== this && Xe("Active effect was not restored correctly - this is likely a Vue internal bug."), dt(this), N = e, vt = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) mt(e);
			this.deps = this.depsTail = void 0, St(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? nt.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		ft(this) && this.run();
	}
	get dirty() {
		return ft(this);
	}
}, it = 0, at, ot;
function st(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = ot, ot = e;
		return;
	}
	e.next = at, at = e;
}
function ct() {
	it++;
}
function lt() {
	if (--it > 0) return;
	if (ot) {
		let e = ot;
		for (ot = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; at;) {
		let t = at;
		for (at = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e || (e = t);
			}
			t = n;
		}
	}
	if (e) throw e;
}
function ut(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function dt(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), mt(r), ht(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function ft(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (pt(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function pt(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ct) || (e.globalVersion = Ct, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ft(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = N, r = vt;
	N = e, vt = !0;
	try {
		ut(e);
		let n = e.fn(e._value);
		(t.version === 0 || j(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		N = n, vt = r, dt(e), e.flags &= -3;
	}
}
function mt(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) mt(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function ht(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function gt(e, t) {
	e.effect instanceof rt && (e = e.effect.fn);
	let n = new rt(e);
	t && c(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function _t(e) {
	e.effect.stop();
}
var vt = !0, yt = [];
function bt() {
	yt.push(vt), vt = !1;
}
function xt() {
	let e = yt.pop();
	vt = e === void 0 || e;
}
function St(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = N;
		N = void 0;
		try {
			t();
		} finally {
			N = e;
		}
	}
}
var Ct = 0, wt = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Tt = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
	}
	track(e) {
		if (!N || !vt || N === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== N) t = this.activeLink = new wt(N, this), N.deps ? (t.prevDep = N.depsTail, N.depsTail.nextDep = t, N.depsTail = t) : N.deps = N.depsTail = t, Et(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = N.depsTail, t.nextDep = void 0, N.depsTail.nextDep = t, N.depsTail = t, N.deps === t && (N.deps = e);
		}
		return process.env.NODE_ENV !== "production" && N.onTrack && N.onTrack(c({ effect: N }, e)), t;
	}
	trigger(e) {
		this.version++, Ct++, this.notify(e);
	}
	notify(e) {
		ct();
		try {
			if (process.env.NODE_ENV !== "production") for (let t = this.subsHead; t; t = t.nextSub) t.sub.onTrigger && !(t.sub.flags & 8) && t.sub.onTrigger(c({ effect: t.sub }, e));
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			lt();
		}
	}
};
function Et(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Et(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
	}
}
var Dt = /* @__PURE__ */ new WeakMap(), Ot = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Object iterate"), kt = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Map keys iterate"), At = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Array iterate");
function jt(e, t, n) {
	if (vt && N) {
		let r = Dt.get(e);
		r || Dt.set(e, r = /* @__PURE__ */ new Map());
		let i = r.get(n);
		i || (r.set(n, i = new Tt()), i.map = r, i.key = n), process.env.NODE_ENV === "production" ? i.track() : i.track({
			target: e,
			type: t,
			key: n
		});
	}
}
function Mt(e, t, n, r, i, a) {
	let o = Dt.get(e);
	if (!o) {
		Ct++;
		return;
	}
	let s = (o) => {
		o && (process.env.NODE_ENV === "production" ? o.trigger() : o.trigger({
			target: e,
			type: t,
			key: n,
			newValue: r,
			oldValue: i,
			oldTarget: a
		}));
	};
	if (ct(), t === "clear") o.forEach(s);
	else {
		let i = f(e), a = i && E(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === At || !y(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(At)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(Ot)), p(e) && s(o.get(kt)));
				break;
			case "delete":
				i || (s(o.get(Ot)), p(e) && s(o.get(kt)));
				break;
			case "set": p(e) && s(o.get(Ot));
		}
	}
	lt();
}
function Nt(e, t) {
	let n = Dt.get(e);
	return n && n.get(t);
}
function Pt(e) {
	let t = /* @__PURE__ */ P(e);
	return t === e ? t : (jt(t, "iterate", At), /* @__PURE__ */ wn(e) ? t : t.map(Dn));
}
function Ft(e) {
	return jt(e = /* @__PURE__ */ P(e), "iterate", At), e;
}
function It(e, t) {
	return /* @__PURE__ */ Cn(e) ? On(/* @__PURE__ */ Sn(e) ? Dn(t) : t) : Dn(t);
}
var Lt = {
	__proto__: null,
	[Symbol.iterator]() {
		return Rt(this, Symbol.iterator, (e) => It(this, e));
	},
	concat(...e) {
		return Pt(this).concat(...e.map((e) => f(e) ? Pt(e) : e));
	},
	entries() {
		return Rt(this, "entries", (e) => (e[1] = It(this, e[1]), e));
	},
	every(e, t) {
		return Bt(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Bt(this, "filter", e, t, (e) => e.map((e) => It(this, e)), arguments);
	},
	find(e, t) {
		return Bt(this, "find", e, t, (e) => It(this, e), arguments);
	},
	findIndex(e, t) {
		return Bt(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Bt(this, "findLast", e, t, (e) => It(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Bt(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Bt(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return Ht(this, "includes", e);
	},
	indexOf(...e) {
		return Ht(this, "indexOf", e);
	},
	join(e) {
		return Pt(this).join(e);
	},
	lastIndexOf(...e) {
		return Ht(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Bt(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return Ut(this, "pop");
	},
	push(...e) {
		return Ut(this, "push", e);
	},
	reduce(e, ...t) {
		return Vt(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return Vt(this, "reduceRight", e, t);
	},
	shift() {
		return Ut(this, "shift");
	},
	some(e, t) {
		return Bt(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return Ut(this, "splice", e);
	},
	toReversed() {
		return Pt(this).toReversed();
	},
	toSorted(e) {
		return Pt(this).toSorted(e);
	},
	toSpliced(...e) {
		return Pt(this).toSpliced(...e);
	},
	unshift(...e) {
		return Ut(this, "unshift", e);
	},
	values() {
		return Rt(this, "values", (e) => It(this, e));
	}
};
function Rt(e, t, n) {
	let r = Ft(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ wn(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var zt = Array.prototype;
function Bt(e, t, n, r, i, a) {
	let o = Ft(e), s = o !== e && !/* @__PURE__ */ wn(e), c = o[t];
	if (c !== zt[t]) {
		let t = c.apply(e, a);
		return s ? Dn(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, It(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function Vt(e, t, n, r) {
	let i = Ft(e), a = i !== e && !/* @__PURE__ */ wn(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = It(e, t)), n.call(this, t, It(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? It(e, c) : c;
}
function Ht(e, t, n) {
	let r = /* @__PURE__ */ P(e);
	jt(r, "iterate", At);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Tn(n[0]) ? (n[0] = /* @__PURE__ */ P(n[0]), r[t](...n)) : i;
}
function Ut(e, t, n = []) {
	bt(), ct();
	let r = (/* @__PURE__ */ P(e))[t].apply(e, n);
	return lt(), xt(), r;
}
var Wt = /* @__PURE__ */ t("__proto__,__v_isRef,__isVue"), Gt = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(y));
function Kt(e) {
	y(e) || (e = String(e));
	let t = /* @__PURE__ */ P(this);
	return jt(t, "has", e), t.hasOwnProperty(e);
}
var qt = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? hn : mn : i ? pn : fn).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = f(e);
		if (!r) {
			let e;
			if (a && (e = Lt[t])) return e;
			if (t === "hasOwnProperty") return Kt;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ F(e) ? e : n);
		if ((y(t) ? Gt.has(t) : Wt(t)) || (r || jt(e, "get", t), i)) return o;
		if (/* @__PURE__ */ F(o)) {
			let e = a && E(t) ? o : o.value;
			return r && b(e) ? /* @__PURE__ */ yn(e) : e;
		}
		return b(o) ? r ? /* @__PURE__ */ yn(o) : /* @__PURE__ */ _n(o) : o;
	}
}, Jt = class extends qt {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = f(e) && E(t);
		if (!this._isShallow) {
			let r = /* @__PURE__ */ Cn(i);
			if (!/* @__PURE__ */ wn(n) && !/* @__PURE__ */ Cn(n) && (i = /* @__PURE__ */ P(i), n = /* @__PURE__ */ P(n)), !a && /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n)) return r ? (process.env.NODE_ENV !== "production" && Xe(`Set operation on key "${String(t)}" failed: target is readonly.`, e[t]), !0) : (i.value = n, !0);
		}
		let o = a ? Number(t) < e.length : d(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ F(e) ? e : r);
		return e === /* @__PURE__ */ P(r) && s && (o ? j(n, i) && Mt(e, "set", t, n, i) : Mt(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = d(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && Mt(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!y(t) || !Gt.has(t)) && jt(e, "has", t), n;
	}
	ownKeys(e) {
		return jt(e, "iterate", f(e) ? "length" : Ot), Reflect.ownKeys(e);
	}
}, Yt = class extends qt {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return process.env.NODE_ENV !== "production" && Xe(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
	deleteProperty(e, t) {
		return process.env.NODE_ENV !== "production" && Xe(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
	}
}, Xt = /* @__PURE__ */ new Jt(), Zt = /* @__PURE__ */ new Yt(), Qt = /* @__PURE__ */ new Jt(!0), $t = /* @__PURE__ */ new Yt(!0), en = (e) => e, tn = (e) => Reflect.getPrototypeOf(e);
function nn(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ P(i), o = p(a), s = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, u = i[e](...r), d = n ? en : t ? On : Dn;
		return !t && jt(a, "iterate", l ? kt : Ot), c(Object.create(u), { next() {
			let { value: e, done: t } = u.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [d(e[0]), d(e[1])] : d(e),
				done: t
			};
		} });
	};
}
function rn(e) {
	return function(...t) {
		if (process.env.NODE_ENV !== "production") {
			let n = t[0] ? `on key "${t[0]}" ` : "";
			Xe(`${re(e)} operation ${n}failed: target is readonly.`, /* @__PURE__ */ P(this));
		}
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function an(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ P(r), a = /* @__PURE__ */ P(n);
			e || (j(n, a) && jt(i, "get", n), jt(i, "get", a));
			let { has: o } = tn(i), s = t ? en : e ? On : Dn;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && jt(/* @__PURE__ */ P(t), "iterate", Ot), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ P(n), i = /* @__PURE__ */ P(t);
			return e || (j(t, i) && jt(r, "has", t), jt(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ P(a), s = t ? en : e ? On : Dn;
			return !e && jt(o, "iterate", Ot), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return c(n, e ? {
		add: rn("add"),
		set: rn("set"),
		delete: rn("delete"),
		clear: rn("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ P(this), r = tn(n), i = /* @__PURE__ */ P(e), a = !t && !/* @__PURE__ */ wn(e) && !/* @__PURE__ */ Cn(e) ? i : e;
			return r.has.call(n, a) || j(e, a) && r.has.call(n, e) || j(i, a) && r.has.call(n, i) || (n.add(a), Mt(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ wn(n) && !/* @__PURE__ */ Cn(n) && (n = /* @__PURE__ */ P(n));
			let r = /* @__PURE__ */ P(this), { has: i, get: a } = tn(r), o = i.call(r, e);
			o ? process.env.NODE_ENV !== "production" && dn(r, i, e) : (e = /* @__PURE__ */ P(e), o = i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? j(n, s) && Mt(r, "set", e, n, s) : Mt(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ P(this), { has: n, get: r } = tn(t), i = n.call(t, e);
			i ? process.env.NODE_ENV !== "production" && dn(t, n, e) : (e = /* @__PURE__ */ P(e), i = n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && Mt(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ P(this), t = e.size !== 0, n = process.env.NODE_ENV === "production" ? void 0 : p(e) ? new Map(e) : new Set(e), r = e.clear();
			return t && Mt(e, "clear", void 0, void 0, n), r;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = nn(r, e, t);
	}), n;
}
function on(e, t) {
	let n = an(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(d(n, r) && r in t ? n : t, r, i);
}
var sn = { get: /* @__PURE__ */ on(!1, !1) }, cn = { get: /* @__PURE__ */ on(!1, !0) }, ln = { get: /* @__PURE__ */ on(!0, !1) }, un = { get: /* @__PURE__ */ on(!0, !0) };
function dn(e, t, n) {
	let r = /* @__PURE__ */ P(n);
	if (r !== n && t.call(e, r)) {
		let t = w(e);
		Xe(`Reactive ${t} contains both the raw and reactive versions of the same object${t === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
	}
}
var fn = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap(), hn = /* @__PURE__ */ new WeakMap();
function gn(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function _n(e) {
	return /* @__PURE__ */ Cn(e) ? e : xn(e, !1, Xt, sn, fn);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
	return xn(e, !1, Qt, cn, pn);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
	return xn(e, !0, Zt, ln, mn);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
	return xn(e, !0, $t, un, hn);
}
function xn(e, t, n, r, i) {
	if (!b(e)) return process.env.NODE_ENV !== "production" && Xe(`value cannot be made ${t ? "readonly" : "reactive"}: ${String(e)}`), e;
	if (e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = gn(w(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
	return /* @__PURE__ */ Cn(e) ? /* @__PURE__ */ Sn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function wn(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function P(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ P(t) : e;
}
function En(e) {
	return !d(e, "__v_skip") && Object.isExtensible(e) && ae(e, "__v_skip", !0), e;
}
var Dn = (e) => b(e) ? /* @__PURE__ */ _n(e) : e, On = (e) => b(e) ? /* @__PURE__ */ yn(e) : e;
// @__NO_SIDE_EFFECTS__
function F(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
	return jn(e, !1);
}
// @__NO_SIDE_EFFECTS__
function An(e) {
	return jn(e, !0);
}
function jn(e, t) {
	return /* @__PURE__ */ F(e) ? e : new Mn(e, t);
}
var Mn = class {
	constructor(e, t) {
		this.dep = new Tt(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ P(e), this._value = t ? e : Dn(e), this.__v_isShallow = t;
	}
	get value() {
		return process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		}), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ wn(e) || /* @__PURE__ */ Cn(e);
		e = n ? e : /* @__PURE__ */ P(e), j(e, t) && (this._rawValue = e, this._value = n ? e : Dn(e), process.env.NODE_ENV === "production" ? this.dep.trigger() : this.dep.trigger({
			target: this,
			type: "set",
			key: "value",
			newValue: e,
			oldValue: t
		}));
	}
};
function Nn(e) {
	e.dep && (process.env.NODE_ENV === "production" ? e.dep.trigger() : e.dep.trigger({
		target: e,
		type: "set",
		key: "value",
		newValue: e._value
	}));
}
function Pn(e) {
	return /* @__PURE__ */ F(e) ? e.value : e;
}
function Fn(e) {
	return _(e) ? e() : Pn(e);
}
var In = {
	get: (e, t, n) => t === "__v_raw" ? e : Pn(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ F(i) && !/* @__PURE__ */ F(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Ln(e) {
	return /* @__PURE__ */ Sn(e) ? e : new Proxy(e, In);
}
var Rn = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new Tt(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function zn(e) {
	return new Rn(e);
}
// @__NO_SIDE_EFFECTS__
function Bn(e) {
	process.env.NODE_ENV !== "production" && !/* @__PURE__ */ Tn(e) && Xe("toRefs() expects a reactive object but received a plain one.");
	let t = f(e) ? Array(e.length) : {};
	for (let n in e) t[n] = Wn(e, n);
	return t;
}
var Vn = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = y(t) ? t : String(t), this._raw = /* @__PURE__ */ P(e);
		let r = !0, i = e;
		if (!f(e) || y(this._key) || !E(this._key)) do
			r = !/* @__PURE__ */ Tn(i) || /* @__PURE__ */ wn(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = Pn(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ F(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ F(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return Nt(this._raw, this._key);
	}
}, Hn = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Un(e, t, n) {
	return /* @__PURE__ */ F(e) ? e : _(e) ? new Hn(e) : b(e) && arguments.length > 1 ? Wn(e, t, n) : /* @__PURE__ */ kn(e);
}
function Wn(e, t, n) {
	return new Vn(e, t, n);
}
var Gn = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Tt(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ct - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && N !== this) return st(this, !0), !0;
		process.env.NODE_ENV;
	}
	get value() {
		let e = process.env.NODE_ENV === "production" ? this.dep.track() : this.dep.track({
			target: this,
			type: "get",
			key: "value"
		});
		return pt(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter ? this.setter(e) : process.env.NODE_ENV !== "production" && Xe("Write operation failed: computed value is readonly");
	}
};
// @__NO_SIDE_EFFECTS__
function Kn(e, t, n = !1) {
	let r, i;
	_(e) ? r = e : (r = e.get, i = e.set);
	let a = new Gn(r, i, n);
	return process.env.NODE_ENV !== "production" && t && !n && (a.onTrack = t.onTrack, a.onTrigger = t.onTrigger), a;
}
var qn = {
	GET: "get",
	HAS: "has",
	ITERATE: "iterate"
}, Jn = {
	SET: "set",
	ADD: "add",
	DELETE: "delete",
	CLEAR: "clear"
}, Yn = {}, Xn = /* @__PURE__ */ new WeakMap(), Zn = void 0;
function Qn() {
	return Zn;
}
function $n(e, t = !1, n = Zn) {
	if (n) {
		let t = Xn.get(n);
		t || Xn.set(n, t = []), t.push(e);
	} else process.env.NODE_ENV !== "production" && !t && Xe("onWatcherCleanup() was called when there was no active watcher to associate with.");
}
function er(e, t, r = n) {
	let { immediate: a, deep: o, once: s, scheduler: c, augmentJob: u, call: d } = r, p = (e) => {
		(r.onWarn || Xe)("Invalid watch source: ", e, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
	}, m = (e) => o ? e : /* @__PURE__ */ wn(e) || o === !1 || o === 0 ? tr(e, 1) : tr(e), h, g, v, y, b = !1, x = !1;
	if (/* @__PURE__ */ F(e) ? (g = () => e.value, b = /* @__PURE__ */ wn(e)) : /* @__PURE__ */ Sn(e) ? (g = () => m(e), b = !0) : f(e) ? (x = !0, b = e.some((e) => /* @__PURE__ */ Sn(e) || /* @__PURE__ */ wn(e)), g = () => e.map((e) => {
		if (/* @__PURE__ */ F(e)) return e.value;
		if (/* @__PURE__ */ Sn(e)) return m(e);
		if (_(e)) return d ? d(e, 2) : e();
		process.env.NODE_ENV !== "production" && p(e);
	})) : _(e) ? g = t ? d ? () => d(e, 2) : e : () => {
		if (v) {
			bt();
			try {
				v();
			} finally {
				xt();
			}
		}
		let t = Zn;
		Zn = h;
		try {
			return d ? d(e, 3, [y]) : e(y);
		} finally {
			Zn = t;
		}
	} : (g = i, process.env.NODE_ENV !== "production" && p(e)), t && o) {
		let e = g, t = o === !0 ? Infinity : o;
		g = () => tr(e(), t);
	}
	let S = et(), C = () => {
		h.stop(), S && S.active && l(S.effects, h);
	};
	if (s && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return C(), n;
		};
	}
	let w = x ? Array(e.length).fill(Yn) : Yn, T = (e) => {
		if (!(!(h.flags & 1) || !h.dirty && !e)) {
			if (t) {
				let n = h.run();
				if (e || o || b || (x ? n.some((e, t) => j(e, w[t])) : j(n, w))) {
					v && v();
					let e = Zn;
					Zn = h;
					try {
						let e = [
							n,
							w === Yn ? void 0 : x && w[0] === Yn ? [] : w,
							y
						];
						w = n, d ? d(t, 3, e) : t(...e);
					} finally {
						Zn = e;
					}
				}
			} else h.run();
		}
	};
	return u && u(T), h = new rt(g), h.scheduler = c ? () => c(T, !1) : T, y = (e) => $n(e, !1, h), v = h.onStop = () => {
		let e = Xn.get(h);
		if (e) {
			if (d) d(e, 4);
			else for (let t of e) t();
			Xn.delete(h);
		}
	}, process.env.NODE_ENV !== "production" && (h.onTrack = r.onTrack, h.onTrigger = r.onTrigger), t ? a ? T(!0) : w = h.run() : c ? c(T.bind(null, !0), !0) : h.run(), C.pause = h.pause.bind(h), C.resume = h.resume.bind(h), C.stop = C, C;
}
function tr(e, t = Infinity, n) {
	if (t <= 0 || !b(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ F(e)) tr(e.value, t, n);
	else if (f(e)) for (let r = 0; r < e.length; r++) tr(e[r], t, n);
	else if (m(e) || p(e)) e.forEach((e) => {
		tr(e, t, n);
	});
	else if (T(e)) {
		for (let r in e) tr(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && tr(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var nr = [];
function rr(e) {
	nr.push(e);
}
function ir() {
	nr.pop();
}
var ar = !1;
function I(e, ...t) {
	if (ar) return;
	ar = !0, bt();
	let n = nr.length ? nr[nr.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = or();
	if (r) mr(r, n, 11, [
		e + t.map((e) => {
			var t, n;
			return (n = (t = e.toString) == null ? void 0 : t.call(e)) == null ? JSON.stringify(e) : n;
		}).join(""),
		n && n.proxy,
		i.map(({ vnode: e }) => `at <${Zl(n, e.type)}>`).join("\n"),
		i
	]);
	else {
		let n = [`[Vue warn]: ${e}`, ...t];
		i.length && n.push("\n", ...sr(i)), console.warn(...n);
	}
	xt(), ar = !1;
}
function or() {
	let e = nr[nr.length - 1];
	if (!e) return [];
	let t = [];
	for (; e;) {
		let n = t[0];
		n && n.vnode === e ? n.recurseCount++ : t.push({
			vnode: e,
			recurseCount: 0
		});
		let r = e.component && e.component.parent;
		e = r && r.vnode;
	}
	return t;
}
function sr(e) {
	let t = [];
	return e.forEach((e, n) => {
		t.push(...n === 0 ? [] : ["\n"], ...cr(e));
	}), t;
}
function cr({ vnode: e, recurseCount: t }) {
	let n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${Zl(e.component, e.type, r)}`, a = ">" + n;
	return e.props ? [
		i,
		...lr(e.props),
		a
	] : [i + a];
}
function lr(e) {
	let t = [], n = Object.keys(e);
	return n.slice(0, 3).forEach((n) => {
		t.push(...ur(n, e[n]));
	}), n.length > 3 && t.push(" ..."), t;
}
function ur(e, t, n) {
	return v(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ F(t) ? (t = ur(e, /* @__PURE__ */ P(t.value), !0), n ? t : [
		`${e}=Ref<`,
		t,
		">"
	]) : _(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ P(t), n ? t : [`${e}=`, t]);
}
function dr(e, t) {
	process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e == "number" ? isNaN(e) && I(`${t} is NaN - the duration expression might be incorrect.`) : I(`${t} is not a valid number - got ${JSON.stringify(e)}.`));
}
var fr = {
	SETUP_FUNCTION: 0,
	0: "SETUP_FUNCTION",
	RENDER_FUNCTION: 1,
	1: "RENDER_FUNCTION",
	NATIVE_EVENT_HANDLER: 5,
	5: "NATIVE_EVENT_HANDLER",
	COMPONENT_EVENT_HANDLER: 6,
	6: "COMPONENT_EVENT_HANDLER",
	VNODE_HOOK: 7,
	7: "VNODE_HOOK",
	DIRECTIVE_HOOK: 8,
	8: "DIRECTIVE_HOOK",
	TRANSITION_HOOK: 9,
	9: "TRANSITION_HOOK",
	APP_ERROR_HANDLER: 10,
	10: "APP_ERROR_HANDLER",
	APP_WARN_HANDLER: 11,
	11: "APP_WARN_HANDLER",
	FUNCTION_REF: 12,
	12: "FUNCTION_REF",
	ASYNC_COMPONENT_LOADER: 13,
	13: "ASYNC_COMPONENT_LOADER",
	SCHEDULER: 14,
	14: "SCHEDULER",
	COMPONENT_UPDATE: 15,
	15: "COMPONENT_UPDATE",
	APP_UNMOUNT_CLEANUP: 16,
	16: "APP_UNMOUNT_CLEANUP"
}, pr = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function mr(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		gr(e, t, n);
	}
}
function hr(e, t, n, r) {
	if (_(e)) {
		let i = mr(e, t, n, r);
		return i && x(i) && i.catch((e) => {
			gr(e, t, n);
		}), i;
	}
	if (f(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(hr(e[a], t, n, r));
		return i;
	}
	process.env.NODE_ENV !== "production" && I(`Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`);
}
function gr(e, t, r, i = !0) {
	let a = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || n;
	if (t) {
		let n = t.parent, i = t.proxy, a = process.env.NODE_ENV === "production" ? `https://vuejs.org/error-reference/#runtime-${r}` : pr[r];
		for (; n;) {
			let t = n.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, a) === !1) return;
			}
			n = n.parent;
		}
		if (o) {
			bt(), mr(o, null, 10, [
				e,
				i,
				a
			]), xt();
			return;
		}
	}
	_r(e, r, a, i, s);
}
function _r(e, t, n, r = !0, i = !1) {
	if (process.env.NODE_ENV !== "production") {
		let i = pr[t];
		if (n && rr(n), I(`Unhandled error${i ? ` during execution of ${i}` : ""}`), n && ir(), r) throw e;
		console.error(e);
	} else if (i) throw e;
	else console.error(e);
}
var vr = [], yr = -1, br = [], xr = null, Sr = 0, Cr = /* @__PURE__ */ Promise.resolve(), wr = null, Tr = 100;
function Er(e) {
	let t = wr || Cr;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Dr(e) {
	let t = yr + 1, n = vr.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = vr[r], a = Nr(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Or(e) {
	if (!(e.flags & 1)) {
		let t = Nr(e), n = vr[vr.length - 1];
		!n || !(e.flags & 2) && t >= Nr(n) ? vr.push(e) : vr.splice(Dr(t), 0, e), e.flags |= 1, kr();
	}
}
function kr() {
	wr || (wr = Cr.then(Pr));
}
function Ar(e) {
	if (!f(e)) xr && e.id === -1 ? xr.splice(Sr + 1, 0, e) : e.flags & 1 || (br.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) br.push(e[t]);
	kr();
}
function jr(e, t, n = yr + 1) {
	for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < vr.length; n++) {
		let r = vr[n];
		if (r && r.flags & 2) {
			if (e && r.id !== e.uid || process.env.NODE_ENV !== "production" && Fr(t, r)) continue;
			vr.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
		}
	}
}
function Mr(e) {
	if (br.length) {
		let t = [...new Set(br)].sort((e, t) => Nr(e) - Nr(t));
		if (br.length = 0, xr) {
			for (let e = 0; e < t.length; e++) xr.push(t[e]);
			return;
		}
		for (xr = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Sr = 0; Sr < xr.length; Sr++) {
			let t = xr[Sr];
			process.env.NODE_ENV !== "production" && Fr(e, t) || (t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2);
		}
		xr = null, Sr = 0;
	}
}
var Nr = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Pr(e) {
	process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
	let t = process.env.NODE_ENV === "production" ? i : (t) => Fr(e, t);
	try {
		for (yr = 0; yr < vr.length; yr++) {
			let e = vr[yr];
			if (e && !(e.flags & 8)) {
				if (process.env.NODE_ENV !== "production" && t(e)) continue;
				e.flags & 4 && (e.flags &= -2), mr(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2);
			}
		}
	} finally {
		for (; yr < vr.length; yr++) {
			let e = vr[yr];
			e && (e.flags &= -2);
		}
		yr = -1, vr.length = 0, Mr(e), wr = null, (vr.length || br.length) && Pr(e);
	}
}
function Fr(e, t) {
	let n = e.get(t) || 0;
	if (n > Tr) {
		let e = t.i, n = e && Xl(e.type);
		return gr(`Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`, null, 10), !0;
	}
	return e.set(t, n + 1), !1;
}
var Ir = !1, Lr = (e) => {
	try {
		return Ir;
	} finally {
		Ir = e;
	}
}, Rr = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (le().__VUE_HMR_RUNTIME__ = {
	createRecord: qr(Hr),
	rerender: qr(Wr),
	reload: qr(Gr)
});
var zr = /* @__PURE__ */ new Map();
function Br(e) {
	let t = e.type.__hmrId, n = zr.get(t);
	n || (Hr(t, e.type), n = zr.get(t)), n.instances.add(e);
}
function Vr(e) {
	zr.get(e.type.__hmrId).instances.delete(e);
}
function Hr(e, t) {
	return !zr.has(e) && (zr.set(e, {
		initialDef: Ur(t),
		instances: /* @__PURE__ */ new Set()
	}), !0);
}
function Ur(e) {
	return Ql(e) ? e.__vccOpts : e;
}
function Wr(e, t) {
	let n = zr.get(e);
	n && (n.initialDef.render = t, [...n.instances].forEach((e) => {
		t && (e.render = t, Ur(e.type).render = t), e.renderCache = [], Ir = !0, e.job.flags & 8 || e.update(), Ir = !1;
	}));
}
function Gr(e, t) {
	let n = zr.get(e);
	if (!n) return;
	t = Ur(t), Kr(n.initialDef, t);
	let r = [...n.instances];
	for (let e = 0; e < r.length; e++) {
		let i = r[e], a = Ur(i.type), o = Rr.get(a);
		o || (a !== n.initialDef && Kr(a, t), Rr.set(a, o = /* @__PURE__ */ new Set())), o.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (o.add(i), i.ceReload(t.styles), o.delete(i)) : i.parent ? Or(() => {
			i.job.flags & 8 || (Ir = !0, i.parent.update(), Ir = !1, o.delete(i));
		}) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required."), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(a);
	}
	Ar(() => {
		Rr.clear();
	});
}
function Kr(e, t) {
	c(e, t);
	for (let n in e) n !== "__file" && !(n in t) && delete e[n];
}
function qr(e) {
	return (t, n) => {
		try {
			return e(t, n);
		} catch (e) {
			console.error(e), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
		}
	};
}
var Jr, Yr = [], Xr = !1;
function Zr(e, ...t) {
	Jr ? Jr.emit(e, ...t) : Xr || Yr.push({
		event: e,
		args: t
	});
}
function Qr(e, t) {
	var n, r;
	Jr = e, Jr ? (Jr.enabled = !0, Yr.forEach(({ event: e, args: t }) => Jr.emit(e, ...t)), Yr = []) : typeof window < "u" && window.HTMLElement && !((r = (n = window.navigator) == null ? void 0 : n.userAgent) != null && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		Qr(e, t);
	}), setTimeout(() => {
		Jr || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xr = !0, Yr = []);
	}, 3e3)) : (Xr = !0, Yr = []);
}
function $r(e, t) {
	Zr("app:init", e, t, {
		Fragment: z,
		Text: Kc,
		Comment: B,
		Static: qc
	});
}
function ei(e) {
	Zr("app:unmount", e);
}
var ti = /* @__PURE__ */ ai("component:added"), ni = /* @__PURE__ */ ai("component:updated"), ri = /* @__PURE__ */ ai("component:removed"), ii = (e) => {
	Jr && typeof Jr.cleanupBuffer == "function" && !Jr.cleanupBuffer(e) && ri(e);
};
// @__NO_SIDE_EFFECTS__
function ai(e) {
	return (t) => {
		Zr(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
	};
}
var oi = /* @__PURE__ */ ci("perf:start"), si = /* @__PURE__ */ ci("perf:end");
function ci(e) {
	return (t, n, r) => {
		Zr(e, t.appContext.app, t.uid, t, n, r);
	};
}
function li(e, t, n) {
	Zr("component:emit", e.appContext.app, e, t, n);
}
var L = null, ui = null;
function di(e) {
	let t = L;
	return L = e, ui = e && e.type.__scopeId || null, t;
}
function fi(e) {
	ui = e;
}
function pi() {
	ui = null;
}
var mi = (e) => hi;
function hi(e, t = L, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && $c(-1);
		let i = di(t), a = Jc.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Jc.length; e > a; e--) Zc();
			di(i), r._d && $c(1);
		}
		return process.env.NODE_ENV !== "production" && ni(t), o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function gi(e) {
	ee(e) && I("Do not use built-in directive ids as custom directive id: " + e);
}
function _i(e, t) {
	if (L === null) return process.env.NODE_ENV !== "production" && I("withDirectives can only be used inside render functions."), e;
	let r = ql(L), i = e.dirs || (e.dirs = []);
	for (let e = 0; e < t.length; e++) {
		let [a, o, s, c = n] = t[e];
		a && (_(a) && (a = {
			mounted: a,
			updated: a
		}), a.deep && tr(o), i.push({
			dir: a,
			instance: r,
			value: o,
			oldValue: void 0,
			arg: s,
			modifiers: c
		}));
	}
	return e;
}
function vi(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (bt(), hr(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), xt());
	}
}
function yi(e, t) {
	if (process.env.NODE_ENV !== "production" && (!H || H.isMounted) && I("provide() can only be used inside setup()."), H) {
		let n = H.provides, r = H.parent && H.parent.provides;
		r === n && (n = H.provides = Object.create(r)), n[e] = t;
	}
}
function bi(e, t, n = !1) {
	let r = Dl();
	if (r || Ss) {
		let i = Ss ? Ss._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && _(t) ? t.call(r && r.proxy) : t;
		process.env.NODE_ENV !== "production" && I(`injection "${String(e)}" not found.`);
	} else process.env.NODE_ENV !== "production" && I("inject() can only be used inside setup() or functional components.");
}
function xi() {
	return !!(Dl() || Ss);
}
var Si = /* @__PURE__ */ Symbol.for("v-scx"), Ci = () => {
	{
		let e = bi(Si);
		return e || process.env.NODE_ENV !== "production" && I("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
	}
};
function wi(e, t) {
	return Oi(e, null, t);
}
function Ti(e, t) {
	return Oi(e, null, process.env.NODE_ENV === "production" ? { flush: "post" } : c({}, t, { flush: "post" }));
}
function Ei(e, t) {
	return Oi(e, null, process.env.NODE_ENV === "production" ? { flush: "sync" } : c({}, t, { flush: "sync" }));
}
function Di(e, t, n) {
	return process.env.NODE_ENV !== "production" && !_(t) && I("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), Oi(e, t, n);
}
function Oi(e, t, r = n) {
	let { immediate: a, deep: o, flush: s, once: l } = r;
	process.env.NODE_ENV !== "production" && !t && (a !== void 0 && I("watch() \"immediate\" option is only respected when using the watch(source, callback, options?) signature."), o !== void 0 && I("watch() \"deep\" option is only respected when using the watch(source, callback, options?) signature."), l !== void 0 && I("watch() \"once\" option is only respected when using the watch(source, callback, options?) signature."));
	let u = c({}, r);
	process.env.NODE_ENV !== "production" && (u.onWarn = I);
	let d = t && a || !t && s !== "post", f;
	if (Fl) {
		if (s === "sync") {
			let e = Ci();
			f = e.__watcherHandles || (e.__watcherHandles = []);
		} else if (!d) {
			let e = () => {};
			return e.stop = i, e.resume = i, e.pause = i, e;
		}
	}
	let p = H;
	u.call = (e, t, n) => hr(e, p, t, n);
	let m = !1;
	s === "post" ? u.scheduler = (e) => {
		R(e, p && p.suspense);
	} : s !== "sync" && (m = !0, u.scheduler = (e, t) => {
		t ? e() : Or(e);
	}), u.augmentJob = (e) => {
		t && (e.flags |= 4), m && (e.flags |= 2, p && (e.id = p.uid, e.i = p));
	};
	let h = er(e, t, u);
	return Fl && (f ? f.push(h) : d && h()), h;
}
function ki(e, t, n) {
	let r = this.proxy, i = v(e) ? e.includes(".") ? Ai(r, e) : () => r[e] : e.bind(r, r), a;
	_(t) ? a = t : (a = t.handler, n = t);
	let o = Al(this), s = Oi(i, a.bind(r), n);
	return o(), s;
}
function Ai(e, t) {
	let n = t.split(".");
	return () => {
		let t = e;
		for (let e = 0; e < n.length && t; e++) t = t[n[e]];
		return t;
	};
}
var ji = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ Symbol("_vte"), Ni = (e) => e.__isTeleport, Pi = (e) => e && (e.disabled || e.disabled === ""), Fi = (e) => e && (e.defer || e.defer === ""), Ii = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Li = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ri = (e, t) => {
	let n = e && e.to;
	if (v(n)) {
		if (t) {
			let r = t(n);
			return process.env.NODE_ENV !== "production" && !r && !Pi(e) && I(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), r;
		}
		return process.env.NODE_ENV !== "production" && I("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
	}
	return process.env.NODE_ENV !== "production" && !n && !Pi(e) && I(`Invalid Teleport target: ${n}`), n;
}, zi = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = Pi(t.props), { dynamicChildren: y } = t;
		process.env.NODE_ENV !== "production" && Ir && (c = !1, y = null);
		let b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = Pi(e.props), r = e.target = Ri(e.props, m), a = Wi(r, e, h, p);
			r ? (o !== "svg" && Ii(r) ? o = "svg" : o !== "mathml" && Li(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), Ui(e, !1))) : process.env.NODE_ENV !== "production" && !n && I("Invalid Teleport target on mount:", r, `(${typeof r})`);
		}, S = (e) => {
			let t = () => {
				if (ji.get(e) === t) {
					if (ji.delete(e), Pi(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), Ui(e, !0);
					}
					x(e);
				}
			};
			ji.set(e, t), R(t, a);
		};
		if (e == null) {
			let e = t.el = process.env.NODE_ENV === "production" ? h("") : g("teleport start"), i = t.anchor = process.env.NODE_ENV === "production" ? h("") : g("teleport end");
			if (p(e, n, r), p(i, n, r), Fi(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), Ui(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = ji.get(e);
			if (u) {
				u.flags |= 8, ji.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = Pi(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || Ii(p) ? o = "svg" : (o === "mathml" || Li(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), Dc(e, t, process.env.NODE_ENV === "production")) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Bi(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = Ri(t.props, m);
				e ? (t.target = e, Bi(t, e, null, l, 0)) : process.env.NODE_ENV !== "production" && I("Invalid Teleport target on update:", p, `(${typeof p})`);
			} else g && Bi(t, p, h, l, 1);
			Ui(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = Pi(f), m = a || !p, h = ji.get(e);
		if (h && (h.flags |= 8, ji.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: Bi,
	hydrate: Vi
};
function Bi(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !ji.has(e) && (!d || Pi(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function Vi(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = Ri(t.props, c), h = Pi(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || Wi(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || Wi(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), Ui(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var Hi = zi;
function Ui(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function Wi(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[Mi] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var Gi = /* @__PURE__ */ Symbol("_leaveCb"), Ki = /* @__PURE__ */ Symbol("_enterCb");
function qi() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return so(() => {
		e.isMounted = !0;
	}), uo(() => {
		e.isUnmounting = !0;
	}), e;
}
var Ji = [Function, Array], Yi = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: Ji,
	onEnter: Ji,
	onAfterEnter: Ji,
	onEnterCancelled: Ji,
	onBeforeLeave: Ji,
	onLeave: Ji,
	onAfterLeave: Ji,
	onLeaveCancelled: Ji,
	onBeforeAppear: Ji,
	onAppear: Ji,
	onAfterAppear: Ji,
	onAppearCancelled: Ji
}, Xi = (e) => {
	let t = e.subTree;
	return t.component ? Xi(t.component) : t;
}, Zi = {
	name: "BaseTransition",
	props: Yi,
	setup(e, { slots: t }) {
		let n = Dl(), r = qi();
		return () => {
			let i = t.default && aa(t.default(), !0), a = i && i.length ? Qi(i) : n.subTree ? vl() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ P(e), { mode: s } = o;
			if (process.env.NODE_ENV !== "production" && s && s !== "in-out" && s !== "out-in" && s !== "default" && I(`invalid <transition> mode: ${s}`), r.isLeaving) return na(a);
			let c = ra(a);
			if (!c) return na(a);
			let l = ta(c, o, r, n, (e) => l = e);
			c.type !== B && ia(c, l);
			let u = n.subTree && ra(n.subTree);
			if (u && u.type !== B && !il(u, c) && Xi(n).type !== B) {
				let e = ta(u, o, r, n);
				if (ia(u, e), s === "out-in" && c.type !== B) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, na(a);
				s === "in-out" && c.type !== B ? e.delayLeave = (e, t, n) => {
					let i = ea(r, u);
					i[String(u.key)] = u, e[Gi] = () => {
						t(), e[Gi] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u && (u = void 0);
			return a;
		};
	}
};
function Qi(e) {
	let t = e[0];
	if (e.length > 1) {
		let n = !1;
		for (let r of e) if (r.type !== B) {
			if (process.env.NODE_ENV !== "production" && n) {
				I("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
				break;
			}
			if (t = r, n = !0, process.env.NODE_ENV === "production") break;
		}
	}
	return t;
}
var $i = Zi;
function ea(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function ta(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: p, onLeave: m, onAfterLeave: h, onLeaveCancelled: g, onBeforeAppear: _, onAppear: v, onAfterAppear: y, onAppearCancelled: b } = t, x = String(e.key), S = ea(n, e), C = (e, t) => {
		e && hr(e, r, 9, t);
	}, w = (e, t) => {
		let n = t[1];
		C(e, t), f(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, T = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) {
				if (a) r = _ || c;
				else return;
			}
			t[Gi] && t[Gi](!0);
			let i = S[x];
			i && il(e, i) && i.el[Gi] && i.el[Gi](), C(r, [t]);
		},
		enter(t) {
			if (!Ir && S[x] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) {
				if (a) r = v || l, i = y || u, o = b || d;
				else return;
			}
			let s = !1;
			t[Ki] = (e) => {
				s || (s = !0, C(e ? o : i, [t]), T.delayedLeave && T.delayedLeave(), t[Ki] = void 0);
			};
			let c = t[Ki].bind(null, !1);
			r ? w(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Ki] && t[Ki](!0), n.isUnmounting) return r();
			C(p, [t]);
			let a = !1;
			t[Gi] = (n) => {
				a || (a = !0, r(), C(n ? g : h, [t]), t[Gi] = void 0, S[i] === e && delete S[i]);
			};
			let o = t[Gi].bind(null, !1);
			S[i] = e, m ? w(m, [t, o]) : o();
		},
		clone(e) {
			let a = ta(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return T;
}
function na(e) {
	if (Ya(e)) return e = ml(e), e.children = null, e;
}
function ra(e) {
	if (!Ya(e)) return Ni(e.type) && e.children ? Qi(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && _(n.default)) return n.default();
	}
}
function ia(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		ia(Ni(n.type) && ra(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function aa(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === z ? (o.patchFlag & 128 && i++, r = r.concat(aa(o.children, t, s))) : (t || o.type !== B) && r.push(s == null ? o : ml(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
// @__NO_SIDE_EFFECTS__
function oa(e, t) {
	return _(e) ? /* @__PURE__ */ c({ name: e.name }, t, { setup: e }) : e;
}
function sa() {
	let e = Dl();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : (process.env.NODE_ENV !== "production" && I("useId() is called when there is no active component instance to be associated with."), "");
}
function ca(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
var la = /* @__PURE__ */ new WeakSet();
function ua(e) {
	let t = Dl(), r = /* @__PURE__ */ An(null);
	if (t) {
		let i = t.refs === n ? t.refs = {} : t.refs;
		process.env.NODE_ENV !== "production" && da(i, e) ? I(`useTemplateRef('${e}') already exists.`) : Object.defineProperty(i, e, {
			enumerable: !0,
			get: () => r.value,
			set: (e) => r.value = e
		});
	} else process.env.NODE_ENV !== "production" && I("useTemplateRef() is called when there is no active component instance to be associated with.");
	let i = process.env.NODE_ENV === "production" ? r : /* @__PURE__ */ yn(r);
	return process.env.NODE_ENV !== "production" && la.add(i), i;
}
function da(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var fa = /* @__PURE__ */ new WeakMap();
function pa(e, t, r, i, o = !1) {
	if (f(e)) {
		e.forEach((e, n) => pa(e, t && (f(t) ? t[n] : t), r, i, o));
		return;
	}
	if (Ka(i) && !o) {
		i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && pa(e, t, r, i.component.subTree);
		return;
	}
	let s = i.shapeFlag & 4 ? ql(i.component) : i.el, c = o ? null : s, { i: u, r: p } = e;
	if (process.env.NODE_ENV !== "production" && !u) {
		I("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
		return;
	}
	let m = t && t.r, h = u.refs === n ? u.refs = {} : u.refs, g = u.setupState, y = /* @__PURE__ */ P(g), b = g === n ? a : (e) => process.env.NODE_ENV !== "production" && (d(y, e) && !/* @__PURE__ */ F(y[e]) && I(`Template ref "${e}" used on a non-ref value. It will not work in the production build.`), la.has(y[e])) || da(h, e) ? !1 : d(y, e), x = (e, t) => !(process.env.NODE_ENV !== "production" && la.has(e) || t && da(h, t));
	if (m != null && m !== p) {
		if (ma(t), v(m)) h[m] = null, b(m) && (g[m] = null);
		else if (/* @__PURE__ */ F(m)) {
			let e = t;
			x(m, e.k) && (m.value = null), e.k && (h[e.k] = null);
		}
	}
	if (_(p)) mr(p, u, 12, [c, h]);
	else {
		let t = v(p), n = /* @__PURE__ */ F(p);
		if (t || n) {
			let i = () => {
				if (e.f) {
					let n = t ? b(p) ? g[p] : h[p] : x(p) || !e.k ? p.value : h[e.k];
					if (o) f(n) && l(n, s);
					else if (f(n)) n.includes(s) || n.push(s);
					else if (t) h[p] = [s], b(p) && (g[p] = h[p]);
					else {
						let t = [s];
						x(p, e.k) && (p.value = t), e.k && (h[e.k] = t);
					}
				} else t ? (h[p] = c, b(p) && (g[p] = c)) : n ? (x(p, e.k) && (p.value = c), e.k && (h[e.k] = c)) : process.env.NODE_ENV !== "production" && I("Invalid template ref type:", p, `(${typeof p})`);
			};
			if (c) {
				let t = () => {
					i(), fa.delete(e);
				};
				t.id = -1, fa.set(e, t), R(t, r);
			} else ma(e), i();
		} else process.env.NODE_ENV !== "production" && I("Invalid template ref type:", p, `(${typeof p})`);
	}
}
function ma(e) {
	let t = fa.get(e);
	t && (t.flags |= 8, fa.delete(e));
}
var ha = !1, ga = () => {
	ha || (console.error("Hydration completed but contains mismatches."), ha = !0);
}, _a = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", va = (e) => e.namespaceURI.includes("MathML"), ya = (e) => {
	if (e.nodeType === 1) {
		if (_a(e)) return "svg";
		if (va(e)) return "mathml";
	}
}, ba = (e) => e.nodeType === 8;
function xa(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: a, parentNode: s, remove: c, insert: l, createComment: u } } = e, d = (e, t) => {
		if (!t.hasChildNodes()) {
			process.env.NODE_ENV !== "production" && I("Attempting to hydrate existing markup but container is empty. Performing full mount instead."), n(null, e, t), Mr(), t._vnode = e;
			return;
		}
		f(t.firstChild, e, null, null, null), Mr(), t._vnode = e;
	}, f = (n, r, o, c, u, d = !1) => {
		d = d || !!r.dynamicChildren;
		let b = ba(n) && n.data === "[", x = () => g(n, r, o, c, u, b), { type: S, ref: C, shapeFlag: w, patchFlag: T } = r, E = n.nodeType;
		r.el = n, process.env.NODE_ENV !== "production" && (ae(n, "__vnode", r, !0), ae(n, "__vueParentComponent", o, !0)), T === -2 && (d = !1, r.dynamicChildren = null);
		let D = null;
		switch (S) {
			case Kc:
				E === 3 ? (n.data !== r.children && (process.env.NODE_ENV !== "production" && I("Hydration text mismatch in", n.parentNode, `
  - rendered on server: ${JSON.stringify(n.data)}
  - expected on client: ${JSON.stringify(r.children)}`), ga(), n.data = r.children), D = a(n)) : r.children === "" ? (l(r.el = i(""), s(n), n), D = n) : D = x();
				break;
			case B:
				y(n) ? (D = a(n), v(r.el = n.content.firstChild, n, o)) : D = E !== 8 || b ? x() : a(n);
				break;
			case qc:
				if (b && (n = a(n), E = n.nodeType), E === 1 || E === 3) {
					D = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += D.nodeType === 1 ? D.outerHTML : D.data), t === r.staticCount - 1 && (r.anchor = D), D = a(D);
					return b ? a(D) : D;
				}
				x();
				break;
			case z:
				D = b ? h(n, r, o, c, u, d) : x();
				break;
			default: if (w & 1) D = (E !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) && !y(n) ? x() : p(n, r, o, c, u, d);
			else if (w & 6) {
				r.slotScopeIds = u;
				let e = s(n);
				if (D = b ? _(n) : ba(n) && n.data === "teleport start" ? _(n, n.data, "teleport end") : a(n), t(r, e, null, o, c, ya(e), d), Ka(r) && !r.component.subTree) {
					let t;
					b ? (t = V(qc), t.anchor = D ? D.previousSibling : e.lastChild) : t = n.nodeType === 3 ? gl("") : V("div"), t.el = n, r.component.subTree = t;
				}
			} else w & 64 ? D = E === 8 ? r.type.hydrate(n, r, o, c, u, d, e, m) : x() : w & 128 ? D = r.type.hydrate(n, r, o, c, ya(s(n)), u, d, e, f) : process.env.NODE_ENV !== "production" && I("Invalid HostVNode type:", S, `(${typeof S})`);
		}
		return C != null && pa(C, null, c, r), D;
	}, p = (e, t, n, i, a, s) => {
		s = s || !!t.dynamicChildren;
		let { type: l, dynamicProps: u, props: d, patchFlag: f, shapeFlag: p, dirs: h, transition: g } = t, _ = l === "input" || l === "option", b = !!u;
		if (process.env.NODE_ENV !== "production" || _ || b || f !== -1) {
			h && vi(t, null, n, "created");
			let l = !1;
			if (y(e)) {
				l = Ec(null, g) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (l) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), g.beforeEnter(r);
				}
				v(r, e, n), t.el = e = r;
			}
			if (p & 16 && !(d && (d.innerHTML || d.textContent))) {
				let r = m(e.firstChild, t, e, n, i, a, s);
				for (r && !Na(e, 1) && (process.env.NODE_ENV !== "production" && I("Hydration children mismatch on", e, "\nServer rendered element contains more child nodes than client vdom."), ga()); r;) {
					let e = r;
					r = r.nextSibling, c(e);
				}
			} else if (p & 8) {
				let n = t.children;
				n[0] === "\n" && (e.tagName === "PRE" || e.tagName === "TEXTAREA") && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, "\n") && (Na(e, 0) || (process.env.NODE_ENV !== "production" && I("Hydration text content mismatch on", e, `
  - rendered on server: ${r}
  - expected on client: ${n}`), ga()), e.textContent = t.children);
			}
			if (d) {
				if (process.env.NODE_ENV !== "production" || _ || b || !s || f & 48) {
					let i = e.tagName.includes("-"), a = e.namespaceURI.includes("svg") ? "svg" : e.namespaceURI.includes("MathML") ? "mathml" : void 0;
					for (let s in d) if (process.env.NODE_ENV !== "production" && !(h && h.some((e) => e.dir.created)) && wa(e, s, d[s], t, n) && ga(), _ && (s.endsWith("value") || s === "indeterminate") || o(s) && !D(s) || s[0] === "." || i && !D(s) || u && u.includes(s)) {
						if (Ca(e, s, d[s])) continue;
						r(e, s, null, d[s], a, n);
					}
				} else if (d.onClick) r(e, "onClick", null, d.onClick, void 0, n);
				else if (f & 4 && /* @__PURE__ */ Sn(d.style)) for (let e in d.style) d.style[e];
			}
			let x;
			(x = d && d.onVnodeBeforeMount) && Cl(x, n, t), h && vi(t, null, n, "beforeMount"), ((x = d && d.onVnodeMounted) || h || l) && Uc(() => {
				x && Cl(x, n, t), l && g.enter(e), h && vi(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, m = (e, t, r, o, s, c, u) => {
		u = u || !!t.dynamicChildren;
		let d = t.children, p = d.length, m = !1;
		for (let t = 0; t < p; t++) {
			let h = u ? d[t] : d[t] = yl(d[t]), g = h.type === Kc;
			e ? (g && !u && t + 1 < p && yl(d[t + 1]).type === Kc && (l(i(e.data.slice(h.children.length)), r, a(e)), e.data = h.children), e = f(e, h, o, s, c, u)) : g && !h.children ? l(h.el = i(""), r) : (m || (m = !0, Na(r, 1) || (process.env.NODE_ENV !== "production" && I("Hydration children mismatch on", r, "\nServer rendered element contains fewer child nodes than client vdom."), ga())), n(null, h, r, null, o, s, ya(r), c));
		}
		return e;
	}, h = (e, t, n, r, i, o) => {
		let { slotScopeIds: c } = t;
		c && (i = i ? i.concat(c) : c);
		let d = s(e), f = m(a(e), t, d, n, r, i, o);
		return f && ba(f) && f.data === "]" ? a(t.anchor = f) : (ga(), l(t.anchor = u("]"), d, f), f);
	}, g = (e, t, r, i, o, l) => {
		if (Fa(e, t) || (process.env.NODE_ENV !== "production" && I("Hydration node mismatch:\n- rendered on server:", e, e.nodeType === 3 ? "(text)" : ba(e) && e.data === "[" ? "(start of fragment)" : "", "\n- expected on client:", t.type), ga()), t.el = null, l) {
			let t = _(e);
			for (;;) {
				let n = a(e);
				if (n && n !== t) c(n);
				else break;
			}
		}
		let u = a(e), d = s(e);
		return c(e), n(null, t, d, u, r, i, ya(d), o), r && (r.vnode.el = t.el, Bs(r, t.el)), u;
	}, _ = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if (e = a(e), e && ba(e) && (e.data === t && r++, e.data === n)) {
			if (r === 0) return a(e);
			r--;
		}
		return e;
	}, v = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, y = (e) => e.nodeType === 1 && e.tagName === "TEMPLATE";
	return [d, f];
}
var Sa = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"href",
	"poster"
]);
function Ca(e, t, n) {
	return Sa.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
function wa(e, t, n, r, i) {
	let a, o, s, c;
	if (t === "class") e.$cls ? (s = e.$cls, delete e.$cls) : s = e.getAttribute("class"), c = Se(n), Da(Ea(s || ""), Ea(c)) || (a = 2, o = "class");
	else if (t === "style") {
		s = e.getAttribute("style") || "", c = v(n) ? n : xe(ge(n));
		let t = Oa(s), l = Oa(c);
		if (r.dirs) for (let { dir: e, value: t } of r.dirs) e.name === "show" && !t && l.set("display", "none");
		i && Aa(i, r, l), ka(t, l) || (a = 3, o = "style");
	} else (e instanceof SVGElement && Le(t) || e instanceof HTMLElement && (Pe(t) || Ie(t))) && (t === "hidden" ? (s = Ta(e.getAttribute(t)), c = Ta(n)) : Pe(t) ? (s = e.hasAttribute(t), c = Fe(n)) : n == null ? (s = e.hasAttribute(t), c = !1) : (s = e.hasAttribute(t) ? e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" && e.value, c = Re(n) ? String(n) : !1), s !== c && (a = 4, o = t));
	if (a != null && !Na(e, a)) {
		let t = (e) => e === !1 ? "(not rendered)" : `${o}="${e}"`;
		return I(`Hydration ${Ma[a]} mismatch on`, e, `
  - rendered on server: ${t(s)}
  - expected on client: ${t(c)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`), !0;
	}
	return !1;
}
function Ta(e) {
	return Re(e) ? v(e) ? e.toLowerCase() === "until-found" ? "until-found" : "" : Fe(e) ? "" : !1 : !1;
}
function Ea(e) {
	return new Set(e.trim().split(/\s+/));
}
function Da(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function Oa(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.split(";")) {
		let [e, r] = n.split(":");
		e = e.trim(), r = r && r.trim(), e && r && t.set(e, r);
	}
	return t;
}
function ka(e, t) {
	if (e.size !== t.size) return !1;
	for (let [n, r] of e) if (r !== t.get(n)) return !1;
	return !0;
}
function Aa(e, t, n) {
	let r = e.subTree;
	if (e.getCssVars && (t === r || r && r.type === z && r.children.includes(t))) {
		let t = e.getCssVars();
		for (let e in t) {
			let r = Ye(t[e]);
			n.set(`--${Be(e, !1)}`, r);
		}
	}
	t === r && e.parent && Aa(e.parent, e.vnode, n);
}
var ja = "data-allow-mismatch", Ma = {
	0: "text",
	1: "children",
	2: "class",
	3: "style",
	4: "attribute"
};
function Na(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(ja);) e = e.parentElement;
	return Pa(e && e.getAttribute(ja), t);
}
function Pa(e, t) {
	if (e == null) return !1;
	if (e === "") return !0;
	{
		let n = e.split(",");
		return t === 0 && n.includes("children") ? !0 : n.includes(Ma[t]);
	}
}
function Fa(e, t) {
	return Na(e.parentElement, 1) || Ia(e) || La(t);
}
function Ia(e) {
	return e.nodeType === 1 && Pa(e.getAttribute(ja), 1);
}
function La({ props: e }) {
	let t = e && e[ja];
	return typeof t == "string" && Pa(t, 1);
}
var Ra = le().requestIdleCallback || ((e) => setTimeout(e, 1)), za = le().cancelIdleCallback || ((e) => clearTimeout(e)), Ba = (e = 1e4) => (t) => {
	let n = Ra(t, { timeout: e });
	return () => za(n);
};
function Va(e) {
	let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: a, innerWidth: o } = window;
	return (t > 0 && t < a || r > 0 && r < a) && (n > 0 && n < o || i > 0 && i < o);
}
var Ha = (e) => (t, n) => {
	let r = new IntersectionObserver((e) => {
		for (let n of e) if (n.isIntersecting) {
			r.disconnect(), t();
			break;
		}
	}, e);
	return n((e) => {
		if (e instanceof Element) {
			if (Va(e)) return t(), r.disconnect(), !1;
			r.observe(e);
		}
	}), () => r.disconnect();
}, Ua = (e) => (t) => {
	if (e) {
		let n = matchMedia(e);
		if (n.matches) t();
		else return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
	}
}, Wa = (e = []) => (t, n) => {
	v(e) && (e = [e]);
	let r = !1, i = (e) => {
		r || (r = !0, a(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
	}, a = () => {
		n((t) => {
			for (let n of e) t.removeEventListener(n, i);
		});
	};
	return n((t) => {
		for (let n of e) t.addEventListener(n, i, { once: !0 });
	}), a;
};
function Ga(e, t) {
	if (ba(e) && e.data === "[") {
		let n = 1, r = e.nextSibling;
		for (; r;) {
			if (r.nodeType === 1) {
				if (t(r) === !1) break;
			} else if (ba(r)) {
				if (r.data === "]") {
					if (--n === 0) break;
				} else r.data === "[" && n++;
			}
			r = r.nextSibling;
		}
	} else t(e);
}
var Ka = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function qa(e) {
	_(e) && (e = { loader: e });
	let { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, hydrate: a, timeout: o, suspensible: s = !0, onError: c } = e, l = null, u, d = 0, f = () => (d++, l = null, p()), p = () => {
		let e;
		return l || (e = l = t().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t(f()), () => n(e), d + 1);
			});
			throw e;
		}).then((t) => {
			if (e !== l && l) return l;
			if (process.env.NODE_ENV !== "production" && !t && I("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."), t && (t.__esModule || t[Symbol.toStringTag] === "Module") && (t = t.default), process.env.NODE_ENV !== "production" && t && !b(t) && !_(t)) throw Error(`Invalid async component load result: ${t}`);
			return u = t, t;
		}));
	};
	return /* @__PURE__ */ oa({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, t, n) {
			let r = e.isConnected, i = !1;
			(t.bu || (t.bu = [])).push(() => i = !0);
			let o = () => {
				if (i) {
					process.env.NODE_ENV !== "production" && I(`Skipping lazy hydration for component '${Xl(u) || u.__file}': it was updated before lazy hydration performed.`);
					return;
				}
				!e.parentNode || r && !e.isConnected || n();
			}, s = a ? () => {
				let n = a(o, (t) => Ga(e, t));
				n && (t.bum || (t.bum = [])).push(n);
			} : o;
			u ? s() : p().then(() => !t.isUnmounted && s());
		},
		get __asyncResolved() {
			return u;
		},
		setup() {
			let e = H;
			if (ca(e), u) return () => Ja(u, e);
			let t = (t) => {
				l = null, gr(t, e, 13, !r);
			};
			if (s && e.suspense || Fl) return p().then((t) => () => Ja(t, e)).catch((e) => (t(e), () => r ? V(r, { error: e }) : null));
			let a = /* @__PURE__ */ kn(!1), c = /* @__PURE__ */ kn(), d = /* @__PURE__ */ kn(!!i), f, m;
			return fo(() => {
				f != null && clearTimeout(f), m != null && clearTimeout(m);
			}), i && (m = setTimeout(() => {
				e.isUnmounted || (d.value = !1);
			}, i)), o != null && (f = setTimeout(() => {
				if (!e.isUnmounted && !a.value && !c.value) {
					let e = /* @__PURE__ */ Error(`Async component timed out after ${o}ms.`);
					t(e), c.value = e;
				}
			}, o)), p().then(() => {
				e.isUnmounted || (a.value = !0, e.parent && Ya(e.parent.vnode) && e.parent.update());
			}).catch((n) => {
				if (e.isUnmounted) {
					l = null;
					return;
				}
				t(n), c.value = n;
			}), () => {
				if (a.value && u) return Ja(u, e);
				if (c.value && r) return V(r, { error: c.value });
				if (n && !d.value) return Ja(n, e);
			};
		}
	});
}
function Ja(e, t) {
	let { ref: n, props: r, children: i, ce: a } = t.vnode, o = V(e, r, i);
	return o.ref = n, o.ce = a, delete t.vnode.ce, o;
}
var Ya = (e) => e.type.__isKeepAlive, Xa = {
	name: "KeepAlive",
	__isKeepAlive: !0,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(e, { slots: t }) {
		let n = Dl(), r = n.ctx;
		if (!r.renderer) return () => {
			let e = t.default && t.default();
			return e && e.length === 1 ? e[0] : e;
		};
		let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = null;
		process.env.NODE_ENV !== "production" && (n.__v_cache = i);
		let s = n.suspense, { renderer: { p: c, m: l, um: u, o: { createElement: d } } } = r, f = d("div");
		r.activate = (e, t, n, r, i) => {
			let a = e.component;
			l(e, t, n, 0, s), c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i), R(() => {
				a.isDeactivated = !1, a.a && M(a.a);
				let t = e.props && e.props.onVnodeMounted;
				t && Cl(t, a.parent, e);
			}, s), process.env.NODE_ENV !== "production" && ti(a);
		}, r.deactivate = (e) => {
			let t = e.component;
			Ac(t.m), Ac(t.a), l(e, f, null, 1, s), R(() => {
				t.da && M(t.da);
				let n = e.props && e.props.onVnodeUnmounted;
				n && Cl(n, t.parent, e), t.isDeactivated = !0;
			}, s), process.env.NODE_ENV !== "production" && ti(t), process.env.NODE_ENV !== "production" && (t.__keepAliveStorageContainer = f);
		};
		function p(e) {
			no(e), u(e, n, s, !0);
		}
		function m(e) {
			i.forEach((t, n) => {
				let r = Xl(Ka(t) ? t.type.__asyncResolved || {} : t.type);
				r && !e(r) && h(n);
			});
		}
		function h(e) {
			let t = i.get(e);
			t && (!o || !il(t, o)) ? p(t) : o && no(o), i.delete(e), a.delete(e);
		}
		Di(() => [e.include, e.exclude], ([e, t]) => {
			e && m((t) => Za(e, t)), t && m((e) => !Za(t, e));
		}, {
			flush: "post",
			deep: !0
		});
		let g = null, _ = () => {
			g != null && (Mc(n.subTree.type) ? R(() => {
				let e = ro(n.subTree);
				e.component && i.set(g, e);
			}, n.subTree.suspense) : i.set(g, ro(n.subTree)));
		};
		return so(_), lo(_), uo(() => {
			i.forEach((e) => {
				let { subTree: t, suspense: r } = n, i = ro(t);
				if (e.type === i.type && e.key === i.key) {
					no(i);
					let e = i.component.da;
					e && R(e, r);
					return;
				}
				p(e);
			});
		}), () => {
			if (g = null, !t.default) return o = null;
			let n = t.default(), r = n[0];
			if (n.length > 1) return process.env.NODE_ENV !== "production" && I("KeepAlive should contain exactly one component child."), o = null, n;
			if (!rl(r) || !(r.shapeFlag & 4) && !(r.shapeFlag & 128)) return o = null, r;
			let s = ro(r);
			if (s.type === B) return o = null, s;
			let c = s.type, l = Xl(Ka(s) ? s.type.__asyncResolved || {} : c), { include: u, exclude: d, max: f } = e;
			if (u && (!l || !Za(u, l)) || d && l && Za(d, l)) return s.shapeFlag &= -257, o = s, r;
			let p = s.key == null ? c : s.key, m = i.get(p);
			return s.el && (s = ml(s), r.shapeFlag & 128 && (r.ssContent = s)), g = p, m ? (s.el = m.el, s.component = m.component, s.transition && ia(s, s.transition), s.shapeFlag |= 512, a.delete(p), a.add(p)) : (a.add(p), f && a.size > parseInt(f, 10) && h(a.values().next().value)), s.shapeFlag |= 256, o = s, Mc(r.type) ? r : s;
		};
	}
};
function Za(e, t) {
	return f(e) ? e.some((e) => Za(e, t)) : v(e) ? e.split(",").includes(t) : g(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Qa(e, t) {
	eo(e, "a", t);
}
function $a(e, t) {
	eo(e, "da", t);
}
function eo(e, t, n = H) {
	let r = e.__wdc || (e.__wdc = () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	});
	if (io(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) Ya(e.parent.vnode) && to(r, t, n, e), e = e.parent;
	}
}
function to(e, t, n, r) {
	let i = io(t, e, r, !0);
	fo(() => {
		l(r[t], i);
	}, n);
}
function no(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function ro(e) {
	return e.shapeFlag & 128 ? e.ssContent : e;
}
function io(e, t, n = H, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...r) => {
			bt();
			let i = Al(n), a = hr(t, n, e, r);
			return i(), xt(), a;
		});
		return r ? i.unshift(a) : i.push(a), a;
	}
	process.env.NODE_ENV !== "production" && I(`${ie(pr[e].replace(/ hook$/, ""))} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
}
var ao = (e) => (t, n = H) => {
	(!Fl || e === "sp") && io(e, (...e) => t(...e), n);
}, oo = ao("bm"), so = ao("m"), co = ao("bu"), lo = ao("u"), uo = ao("bum"), fo = ao("um"), po = ao("sp"), mo = ao("rtg"), ho = ao("rtc");
function go(e, t = H) {
	io("ec", e, t);
}
var _o = "components", vo = "directives";
function yo(e, t) {
	return Co(_o, e, !0, t) || e;
}
var bo = /* @__PURE__ */ Symbol.for("v-ndc");
function xo(e) {
	return v(e) ? Co(_o, e, !1) || e : e || bo;
}
function So(e) {
	return Co(vo, e);
}
function Co(e, t, n = !0, r = !1) {
	let i = L || H;
	if (i) {
		let a = i.type;
		if (e === _o) {
			let e = Xl(a, !1);
			if (e && (e === t || e === A(t) || e === re(A(t)))) return a;
		}
		let o = wo(i[e] || a[e], t) || wo(i.appContext[e], t);
		if (!o && r) return a;
		if (process.env.NODE_ENV !== "production" && n && !o) {
			let n = e === _o ? "\nIf this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement." : "";
			I(`Failed to resolve ${e.slice(0, -1)}: ${t}${n}`);
		}
		return o;
	}
	process.env.NODE_ENV !== "production" && I(`resolve${re(e.slice(0, -1))} can only be used in render() or setup().`);
}
function wo(e, t) {
	return e && (e[t] || e[A(t)] || e[re(A(t))]);
}
function To(e, t, n, r) {
	let i, a = n && n[r], o = f(e);
	if (o || v(e)) {
		let n = o && /* @__PURE__ */ Sn(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ wn(e), s = /* @__PURE__ */ Cn(e), e = Ft(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? On(Dn(e[n])) : Dn(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		if (process.env.NODE_ENV !== "production" && (!Number.isInteger(e) || e < 0)) I(`The v-for range expects a positive integer value but got ${e}.`), i = [];
		else {
			i = Array(e);
			for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
		}
	} else if (b(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function Eo(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (f(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function Do(e, t, n, r, i, a) {
	if (n == null && (n = {}), L.ce || L.parent && Ka(L.parent) && L.parent.ce) {
		let e = a != null && n.key == null ? c({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), Xc(), nl(z, null, [V("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	process.env.NODE_ENV !== "production" && o && o.length > 1 && (I("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), o = () => []), o && o._c && (o._d = !1);
	let s = Jc.length;
	Xc();
	let l;
	try {
		let i = o && Oo(o(n)), s = n.key || a || i && i.key;
		l = nl(z, { key: (s && !y(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = Jc.length; e > s; e--) Zc();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), l;
}
function Oo(e) {
	return e.some((e) => !rl(e) || !(e.type === B || e.type === z && !Oo(e.children))) ? e : null;
}
function ko(e, t) {
	let n = {};
	if (process.env.NODE_ENV !== "production" && !b(e)) return I("v-on with no argument expects an object value."), n;
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : ie(r)] = e[r];
	return n;
}
var Ao = (e) => e ? Pl(e) ? ql(e) : Ao(e.parent) : null, jo = (e) => {
	let t = !1;
	for (;;) {
		if (e.patchFlag > 0 && e.patchFlag & 2048) {
			let n = Ns(e.children);
			if (!n) return;
			e = n, t = !0;
			continue;
		}
		let n = e.component;
		if (n && n.subTree) {
			e = n.subTree;
			continue;
		}
		let r = e.suspense;
		if (r && r.activeBranch) {
			e = r.activeBranch;
			continue;
		}
		return t ? e.el : void 0;
	}
}, Mo = (e) => {
	let t = e.subTree && jo(e.subTree);
	return t === void 0 ? e.vnode.el : t;
}, No = /* @__PURE__ */ c(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => process.env.NODE_ENV === "production" ? e.vnode.el : Mo(e),
	$data: (e) => e.data,
	$props: (e) => process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ bn(e.props),
	$attrs: (e) => process.env.NODE_ENV === "production" ? e.attrs : /* @__PURE__ */ bn(e.attrs),
	$slots: (e) => process.env.NODE_ENV === "production" ? e.slots : /* @__PURE__ */ bn(e.slots),
	$refs: (e) => process.env.NODE_ENV === "production" ? e.refs : /* @__PURE__ */ bn(e.refs),
	$parent: (e) => Ao(e.parent),
	$root: (e) => Ao(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => ls(e),
	$forceUpdate: (e) => e.f || (e.f = () => {
		Or(e.update);
	}),
	$nextTick: (e) => e.n || (e.n = Er.bind(e.proxy)),
	$watch: (e) => ki.bind(e)
}), Po = (e) => e === "_" || e === "$", Fo = (e, t) => e !== n && !e.__isScriptSetup && d(e, t), Io = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: r, setupState: i, data: a, props: o, accessCache: s, type: c, appContext: l } = e;
		if (process.env.NODE_ENV !== "production" && t === "__isVue") return !0;
		if (t[0] !== "$") {
			let e = s[t];
			if (e !== void 0) switch (e) {
				case 1: return i[t];
				case 2: return a[t];
				case 4: return r[t];
				case 3: return o[t];
			}
			else if (Fo(i, t)) return s[t] = 1, i[t];
			else if (a !== n && d(a, t)) return s[t] = 2, a[t];
			else if (d(o, t)) return s[t] = 3, o[t];
			else if (r !== n && d(r, t)) return s[t] = 4, r[t];
			else is && (s[t] = 0);
		}
		let u = No[t], f, p;
		if (u) return t === "$attrs" ? (jt(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && As()) : process.env.NODE_ENV !== "production" && t === "$slots" && jt(e, "get", t), u(e);
		if ((f = c.__cssModules) && (f = f[t])) return f;
		if (r !== n && d(r, t)) return s[t] = 4, r[t];
		if (p = l.config.globalProperties, d(p, t)) return p[t];
		process.env.NODE_ENV !== "production" && L && (!v(t) || t.indexOf("__v") !== 0) && (a !== n && Po(t[0]) && d(a, t) ? I(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === L && I(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
	},
	set({ _: e }, t, r) {
		let { data: i, setupState: a, ctx: o } = e;
		return Fo(a, t) ? (a[t] = r, !0) : process.env.NODE_ENV !== "production" && a.__isScriptSetup && d(a, t) ? (I(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : i !== n && d(i, t) ? (i[t] = r, !0) : d(e.props, t) ? (process.env.NODE_ENV !== "production" && I(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && I(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
			enumerable: !0,
			configurable: !0,
			value: r
		}) : o[t] = r, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: r, ctx: i, appContext: a, props: o, type: s } }, c) {
		let l;
		return !!(r[c] || e !== n && c[0] !== "$" && d(e, c) || Fo(t, c) || d(o, c) || d(i, c) || d(No, c) || d(a.config.globalProperties, c) || (l = s.__cssModules) && l[c]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? d(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
};
process.env.NODE_ENV !== "production" && (Io.ownKeys = (e) => (I("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
var Lo = /* @__PURE__ */ c({}, Io, {
	get(e, t) {
		if (t !== Symbol.unscopables) return Io.get(e, t, e);
	},
	has(e, t) {
		let n = t[0] !== "_" && !pe(t);
		return process.env.NODE_ENV !== "production" && !n && Io.has(e, t) && I(`Property ${JSON.stringify(t)} should not start with _ which is a reserved prefix for Vue internals.`), n;
	}
});
function Ro(e) {
	let t = {};
	return Object.defineProperty(t, "_", {
		configurable: !0,
		enumerable: !1,
		get: () => e
	}), Object.keys(No).forEach((n) => {
		Object.defineProperty(t, n, {
			configurable: !0,
			enumerable: !1,
			get: () => No[n](e),
			set: i
		});
	}), t;
}
function zo(e) {
	let { ctx: t, propsOptions: [n] } = e;
	n && Object.keys(n).forEach((n) => {
		Object.defineProperty(t, n, {
			enumerable: !0,
			configurable: !0,
			get: () => e.props[n],
			set: i
		});
	});
}
function Bo(e) {
	let { ctx: t, setupState: n } = e;
	Object.keys(/* @__PURE__ */ P(n)).forEach((e) => {
		if (!n.__isScriptSetup) {
			if (Po(e[0])) {
				I(`setup() return property ${JSON.stringify(e)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
				return;
			}
			Object.defineProperty(t, e, {
				enumerable: !0,
				configurable: !0,
				get: () => n[e],
				set: i
			});
		}
	});
}
var Vo = (e) => I(`${e}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function Ho() {
	return process.env.NODE_ENV !== "production" && Vo("defineProps"), null;
}
function Uo() {
	return process.env.NODE_ENV !== "production" && Vo("defineEmits"), null;
}
function Wo(e) {
	process.env.NODE_ENV !== "production" && Vo("defineExpose");
}
function Go(e) {
	process.env.NODE_ENV !== "production" && Vo("defineOptions");
}
function Ko() {
	return process.env.NODE_ENV !== "production" && Vo("defineSlots"), null;
}
function qo() {
	process.env.NODE_ENV !== "production" && Vo("defineModel");
}
function Jo(e, t) {
	return process.env.NODE_ENV !== "production" && Vo("withDefaults"), null;
}
function Yo() {
	return Zo("useSlots").slots;
}
function Xo() {
	return Zo("useAttrs").attrs;
}
function Zo(e) {
	let t = Dl();
	return process.env.NODE_ENV !== "production" && !t && I(`${e}() called without active instance.`), t.setupContext || (t.setupContext = Kl(t));
}
function Qo(e) {
	return f(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function $o(e, t) {
	let n = Qo(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? f(r) || _(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : r === null ? r = n[e] = { default: t[e] } : process.env.NODE_ENV !== "production" && I(`props default key "${e}" has no corresponding declaration.`), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function es(e, t) {
	return !e || !t ? e || t : f(e) && f(t) ? e.concat(t) : c({}, Qo(e), Qo(t));
}
function ts(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function ns(e) {
	let t = Dl(), n = Fl;
	process.env.NODE_ENV !== "production" && !t && I("withAsyncContext called without active current instance. This is likely a bug.");
	let r = e();
	jl(), n && kl(!1);
	let i = () => {
		Al(t), n && kl(!0);
	}, a = () => {
		Dl() !== t && t.scope.off(), jl(), n && kl(!1);
	};
	return x(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(a)), e;
	})), [r, () => {
		i(), Promise.resolve().then(a);
	}];
}
function rs() {
	let e = /* @__PURE__ */ Object.create(null);
	return (t, n) => {
		e[n] ? I(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
	};
}
var is = !0;
function as(e) {
	let t = ls(e), n = e.proxy, r = e.ctx;
	is = !1, t.beforeCreate && ss(t.beforeCreate, e, "bc");
	let { data: a, computed: o, methods: s, watch: c, provide: l, inject: u, created: d, beforeMount: p, mounted: m, beforeUpdate: h, updated: g, activated: v, deactivated: y, beforeDestroy: S, beforeUnmount: C, destroyed: w, unmounted: T, render: E, renderTracked: D, renderTriggered: ee, errorCaptured: O, serverPrefetch: k, expose: A, inheritAttrs: te, components: ne, directives: re, filters: ie } = t, j = process.env.NODE_ENV === "production" ? null : rs();
	if (process.env.NODE_ENV !== "production") {
		let [t] = e.propsOptions;
		if (t) for (let e in t) j("Props", e);
	}
	if (u && os(u, r, j), s) for (let e in s) {
		let t = s[e];
		_(t) ? (process.env.NODE_ENV === "production" ? r[e] = t.bind(n) : Object.defineProperty(r, e, {
			value: t.bind(n),
			configurable: !0,
			enumerable: !0,
			writable: !0
		}), process.env.NODE_ENV !== "production" && j("Methods", e)) : process.env.NODE_ENV !== "production" && I(`Method "${e}" has type "${typeof t}" in the component definition. Did you reference the function correctly?`);
	}
	if (a) {
		process.env.NODE_ENV !== "production" && !_(a) && I("The data option must be a function. Plain object usage is no longer supported.");
		let t = a.call(n, n);
		if (process.env.NODE_ENV !== "production" && x(t) && I("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !b(t)) process.env.NODE_ENV !== "production" && I("data() should return an object.");
		else if (e.data = /* @__PURE__ */ _n(t), process.env.NODE_ENV !== "production") for (let e in t) j("Data", e), Po(e[0]) || Object.defineProperty(r, e, {
			configurable: !0,
			enumerable: !0,
			get: () => t[e],
			set: i
		});
	}
	if (is = !0, o) for (let e in o) {
		let t = o[e], a = _(t) ? t.bind(n, n) : _(t.get) ? t.get.bind(n, n) : i;
		process.env.NODE_ENV !== "production" && a === i && I(`Computed property "${e}" has no getter.`);
		let s = $l({
			get: a,
			set: !_(t) && _(t.set) ? t.set.bind(n) : process.env.NODE_ENV === "production" ? i : () => {
				I(`Write operation failed: computed property "${e}" is readonly.`);
			}
		});
		Object.defineProperty(r, e, {
			enumerable: !0,
			configurable: !0,
			get: () => s.value,
			set: (e) => s.value = e
		}), process.env.NODE_ENV !== "production" && j("Computed", e);
	}
	if (c) for (let e in c) cs(c[e], r, n, e);
	if (l) {
		let e = _(l) ? l.call(n) : l;
		Reflect.ownKeys(e).forEach((t) => {
			yi(t, e[t]);
		});
	}
	d && ss(d, e, "c");
	function M(e, t) {
		f(t) ? t.forEach((t) => e(t.bind(n))) : t && e(t.bind(n));
	}
	if (M(oo, p), M(so, m), M(co, h), M(lo, g), M(Qa, v), M($a, y), M(go, O), M(ho, D), M(mo, ee), M(uo, C), M(fo, T), M(po, k), f(A)) {
		if (A.length) {
			let t = e.exposed || (e.exposed = {});
			A.forEach((e) => {
				Object.defineProperty(t, e, {
					get: () => n[e],
					set: (t) => n[e] = t,
					enumerable: !0
				});
			});
		} else e.exposed || (e.exposed = {});
	}
	E && e.render === i && (e.render = E), te != null && (e.inheritAttrs = te), ne && (e.components = ne), re && (e.directives = re), k && ca(e);
}
function os(e, t, n = i) {
	f(e) && (e = ms(e));
	for (let r in e) {
		let i = e[r], a;
		a = b(i) ? "default" in i ? bi(i.from || r, i.default, !0) : bi(i.from || r) : bi(i), /* @__PURE__ */ F(a) ? Object.defineProperty(t, r, {
			enumerable: !0,
			configurable: !0,
			get: () => a.value,
			set: (e) => a.value = e
		}) : t[r] = a, process.env.NODE_ENV !== "production" && n("Inject", r);
	}
}
function ss(e, t, n) {
	hr(f(e) ? e.map((e) => e.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function cs(e, t, n, r) {
	let i = r.includes(".") ? Ai(n, r) : () => n[r];
	if (v(e)) {
		let n = t[e];
		_(n) ? Di(i, n) : process.env.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e}"`, n);
	} else if (_(e)) Di(i, e.bind(n));
	else if (b(e)) {
		if (f(e)) e.forEach((e) => cs(e, t, n, r));
		else {
			let r = _(e.handler) ? e.handler.bind(n) : t[e.handler];
			_(r) ? Di(i, r, e) : process.env.NODE_ENV !== "production" && I(`Invalid watch handler specified by key "${e.handler}"`, r);
		}
	} else process.env.NODE_ENV !== "production" && I(`Invalid watch option: "${r}"`, e);
}
function ls(e) {
	let t = e.type, { mixins: n, extends: r } = t, { mixins: i, optionsCache: a, config: { optionMergeStrategies: o } } = e.appContext, s = a.get(t), c;
	return s ? c = s : !i.length && !n && !r ? c = t : (c = {}, i.length && i.forEach((e) => us(c, e, o, !0)), us(c, t, o)), b(t) && a.set(t, c), c;
}
function us(e, t, n, r = !1) {
	let { mixins: i, extends: a } = t;
	a && us(e, a, n, !0), i && i.forEach((t) => us(e, t, n, !0));
	for (let i in t) if (r && i === "expose") process.env.NODE_ENV !== "production" && I("\"expose\" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.");
	else {
		let r = ds[i] || n && n[i];
		e[i] = r ? r(e[i], t[i]) : t[i];
	}
	return e;
}
var ds = {
	data: fs,
	props: _s,
	emits: _s,
	methods: gs,
	computed: gs,
	beforeCreate: hs,
	created: hs,
	beforeMount: hs,
	mounted: hs,
	beforeUpdate: hs,
	updated: hs,
	beforeDestroy: hs,
	beforeUnmount: hs,
	destroyed: hs,
	unmounted: hs,
	activated: hs,
	deactivated: hs,
	errorCaptured: hs,
	serverPrefetch: hs,
	components: gs,
	directives: gs,
	watch: vs,
	provide: fs,
	inject: ps
};
function fs(e, t) {
	return t ? e ? function() {
		return c(_(e) ? e.call(this, this) : e, _(t) ? t.call(this, this) : t);
	} : t : e;
}
function ps(e, t) {
	return gs(ms(e), ms(t));
}
function ms(e) {
	if (f(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
		return t;
	}
	return e;
}
function hs(e, t) {
	return e ? [...new Set([].concat(e, t))] : t;
}
function gs(e, t) {
	return e ? c(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _s(e, t) {
	return e ? f(e) && f(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : c(/* @__PURE__ */ Object.create(null), Qo(e), Qo(t == null ? {} : t)) : t;
}
function vs(e, t) {
	if (!e) return t;
	if (!t) return e;
	let n = c(/* @__PURE__ */ Object.create(null), e);
	for (let r in t) n[r] = hs(e[r], t[r]);
	return n;
}
function ys() {
	return {
		app: null,
		config: {
			isNativeTag: a,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var bs = 0;
function xs(e, t) {
	return function(n, r = null) {
		_(n) || (n = c({}, n)), r != null && !b(r) && (process.env.NODE_ENV !== "production" && I("root props passed to app.mount() must be an object."), r = null);
		let i = ys(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, l = i.app = {
			_uid: bs++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: iu,
			get config() {
				return i.config;
			},
			set config(e) {
				process.env.NODE_ENV !== "production" && I("app.config cannot be replaced. Modify individual options instead.");
			},
			use(e, ...t) {
				return a.has(e) ? process.env.NODE_ENV !== "production" && I("Plugin has already been applied to target app.") : e && _(e.install) ? (a.add(e), e.install(l, ...t)) : _(e) ? (a.add(e), e(l, ...t)) : process.env.NODE_ENV !== "production" && I("A plugin must either be a function or an object with an \"install\" function."), l;
			},
			mixin(e) {
				return i.mixins.includes(e) ? process.env.NODE_ENV !== "production" && I("Mixin has already been applied to target app" + (e.name ? `: ${e.name}` : "")) : i.mixins.push(e), l;
			},
			component(e, t) {
				return process.env.NODE_ENV !== "production" && Nl(e, i.config), t ? (process.env.NODE_ENV !== "production" && i.components[e] && I(`Component "${e}" has already been registered in target app.`), i.components[e] = t, l) : i.components[e];
			},
			directive(e, t) {
				return process.env.NODE_ENV !== "production" && gi(e), t ? (process.env.NODE_ENV !== "production" && i.directives[e] && I(`Directive "${e}" has already been registered in target app.`), i.directives[e] = t, l) : i.directives[e];
			},
			mount(a, o, c) {
				if (s) process.env.NODE_ENV !== "production" && I("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
				else {
					process.env.NODE_ENV !== "production" && a.__vue_app__ && I("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
					let u = l._ceVNode || V(n, r);
					return u.appContext = i, c === !0 ? c = "svg" : c === !1 && (c = void 0), process.env.NODE_ENV !== "production" && (i.reload = () => {
						let t = ml(u);
						t.el = null, e(t, a, c);
					}), o && t ? t(u, a) : e(u, a, c), s = !0, l._container = a, a.__vue_app__ = l, process.env.NODE_ENV !== "production" && (l._instance = u.component, $r(l, iu)), ql(u.component);
				}
			},
			onUnmount(e) {
				process.env.NODE_ENV !== "production" && typeof e != "function" && I(`Expected function as first argument to app.onUnmount(), but got ${typeof e}`), o.push(e);
			},
			unmount() {
				s ? (hr(o, l._instance, 16), e(null, l._container), process.env.NODE_ENV !== "production" && (l._instance = null, ei(l)), delete l._container.__vue_app__) : process.env.NODE_ENV !== "production" && I("Cannot unmount an app that is not mounted.");
			},
			provide(e, t) {
				return process.env.NODE_ENV !== "production" && e in i.provides && (d(i.provides, e) ? I(`App already provides property with key "${String(e)}". It will be overwritten with the new value.`) : I(`App already provides property with key "${String(e)}" inherited from its parent element. It will be overwritten with the new value.`)), i.provides[e] = t, l;
			},
			runWithContext(e) {
				let t = Ss;
				Ss = l;
				try {
					return e();
				} finally {
					Ss = t;
				}
			}
		};
		return l;
	};
}
var Ss = null;
function Cs(e, t, r = n) {
	let i = Dl();
	if (process.env.NODE_ENV !== "production" && !i) return I("useModel() called without active instance."), /* @__PURE__ */ kn();
	let a = A(t);
	if (process.env.NODE_ENV !== "production" && !i.propsOptions[0][a]) return I(`useModel() called with prop "${t}" which is not declared.`), /* @__PURE__ */ kn();
	let o = ne(t), s = ws(e, a), c = zn((s, c) => {
		let l, u = n, d;
		return Ei(() => {
			let t = e[a];
			j(l, t) && (l = t, c());
		}), {
			get() {
				return s(), r.get ? r.get(l) : l;
			},
			set(e) {
				let s = r.set ? r.set(e) : e;
				if (!j(s, l) && !(u !== n && j(e, u))) return;
				let f = i.vnode.props, p = !!(f && (t in f || a in f || o in f) && (`onUpdate:${t}` in f || `onUpdate:${a}` in f || `onUpdate:${o}` in f));
				p || (l = e, c()), i.emit(`update:${t}`, s), j(e, u) && (j(e, s) && !j(s, d) || p && u !== n && !j(s, l)) && c(), u = e, d = s;
			}
		};
	});
	return c[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? s || n : c,
				done: !1
			} : { done: !0 };
		} };
	}, c;
}
var ws = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${A(t)}Modifiers`] || e[`${ne(t)}Modifiers`];
function Ts(e, t, ...r) {
	if (e.isUnmounted) return;
	let i = e.vnode.props || n;
	if (process.env.NODE_ENV !== "production") {
		let { emitsOptions: n, propsOptions: [i] } = e;
		if (n) {
			if (!(t in n)) (!i || !(ie(A(t)) in i)) && I(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ie(A(t))}" prop.`);
			else {
				let e = n[t];
				_(e) && (e(...r) || I(`Invalid event arguments: event validation failed for event "${t}".`));
			}
		}
	}
	let a = r, o = t.startsWith("update:"), s = o && ws(i, t.slice(7));
	if (s && (s.trim && (a = r.map((e) => v(e) ? e.trim() : e)), s.number && (a = a.map(oe))), process.env.NODE_ENV !== "production" && li(e, t, a), process.env.NODE_ENV !== "production") {
		let n = t.toLowerCase();
		n !== t && i[ie(n)] && I(`Event "${n}" is emitted in component ${Zl(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ne(t)}" instead of "${t}".`);
	}
	let c, l = i[c = ie(t)] || i[c = ie(A(t))];
	!l && o && (l = i[c = ie(ne(t))]), l && hr(l, e, 6, a);
	let u = i[c + "Once"];
	if (u) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[c]) return;
		e.emitted[c] = !0, hr(u, e, 6, a);
	}
}
var Es = /* @__PURE__ */ new WeakMap();
function Ds(e, t, n = !1) {
	let r = n ? Es : t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {}, s = !1;
	if (!_(e)) {
		let r = (e) => {
			let n = Ds(e, t, !0);
			n && (s = !0, c(o, n));
		};
		!n && t.mixins.length && t.mixins.forEach(r), e.extends && r(e.extends), e.mixins && e.mixins.forEach(r);
	}
	return !a && !s ? (b(e) && r.set(e, null), null) : (f(a) ? a.forEach((e) => o[e] = null) : c(o, a), b(e) && r.set(e, o), o);
}
function Os(e, t) {
	return !e || !o(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), d(e, t[0].toLowerCase() + t.slice(1)) || d(e, ne(t)) || d(e, t));
}
var ks = !1;
function As() {
	ks = !0;
}
function js(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: c, attrs: l, emit: u, render: d, renderCache: f, props: p, data: m, setupState: h, ctx: g, inheritAttrs: _ } = e, v = di(e), y, b;
	process.env.NODE_ENV !== "production" && (ks = !1);
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = process.env.NODE_ENV !== "production" && h.__isScriptSetup ? new Proxy(e, { get(e, t, n) {
				return I(`Property '${String(t)}' was accessed via 'this'. Avoid using 'this' in templates.`), Reflect.get(e, t, n);
			} }) : e;
			y = yl(d.call(t, e, f, process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ bn(p), h, m, g)), b = l;
		} else {
			let e = t;
			process.env.NODE_ENV !== "production" && l === p && As(), y = yl(e.length > 1 ? e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ bn(p), process.env.NODE_ENV === "production" ? {
				attrs: l,
				slots: c,
				emit: u
			} : {
				get attrs() {
					return As(), /* @__PURE__ */ bn(l);
				},
				slots: c,
				emit: u
			}) : e(process.env.NODE_ENV === "production" ? p : /* @__PURE__ */ bn(p), null)), b = t.props ? l : Ps(l);
		}
	} catch (t) {
		Jc.length = 0, gr(t, e, 1), y = V(B);
	}
	let x = y, S;
	if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([x, S] = Ms(y)), b && _ !== !1) {
		let e = Object.keys(b), { shapeFlag: t } = x;
		if (e.length) {
			if (t & 7) a && e.some(s) && (b = Fs(b, a)), x = ml(x, b, !1, !0);
			else if (process.env.NODE_ENV !== "production" && !ks && x.type !== B) {
				let e = Object.keys(l), t = [], n = [];
				for (let r = 0, i = e.length; r < i; r++) {
					let i = e[r];
					o(i) ? s(i) || t.push(i[2].toLowerCase() + i.slice(3)) : n.push(i);
				}
				n.length && I(`Extraneous non-props attributes (${n.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`), t.length && I(`Extraneous non-emits event listeners (${t.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
			}
		}
	}
	if (n.dirs && (process.env.NODE_ENV !== "production" && !Is(x) && I("Runtime directive used on component with non-element root node. The directives will not function as intended."), x = ml(x, null, !1, !0), x.dirs = x.dirs ? x.dirs.concat(n.dirs) : n.dirs), n.transition) {
		let e = Ni(x.type) && ra(x) || x;
		process.env.NODE_ENV !== "production" && !Is(e) && I("Component inside <Transition> renders non-element root node that cannot be animated."), ia(e, n.transition);
	}
	return process.env.NODE_ENV !== "production" && S ? S(x) : y = x, di(v), y;
}
var Ms = (e) => {
	let t = e.children, n = e.dynamicChildren, r = Ns(t, !1);
	if (!r) return [e, void 0];
	if (process.env.NODE_ENV !== "production" && r.patchFlag > 0 && r.patchFlag & 2048) return Ms(r);
	let i = t.indexOf(r), a = n ? n.indexOf(r) : -1;
	return [yl(r), (r) => {
		t[i] = r, n && (a > -1 ? n[a] = r : r.patchFlag > 0 && (e.dynamicChildren = [...n, r]));
	}];
};
function Ns(e, t = !0) {
	let n;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (rl(i)) {
			if (i.type !== B || i.children === "v-if") {
				if (n) return;
				if (n = i, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048) return Ns(n.children);
			}
		} else return;
	}
	return n;
}
var Ps = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || o(n)) && ((t || (t = {}))[n] = e[n]);
	return t;
}, Fs = (e, t) => {
	let n = {};
	for (let r in e) (!s(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
}, Is = (e) => e.shapeFlag & 7 || e.type === B;
function Ls(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (process.env.NODE_ENV !== "production" && (i || s) && Ir || t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Rs(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (zs(o, r, n) && !Os(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Rs(r, o, l) : !!o;
	return !1;
}
function Rs(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (zs(t, e, a) && !Os(n, a)) return !0;
	}
	return !1;
}
function zs(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && b(r) && b(i) ? !Ue(r, i) : r !== i;
}
function Bs({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Vs = {}, Hs = () => Object.create(Vs), Us = (e) => Object.getPrototypeOf(e) === Vs;
function Ws(e, t, n, r = !1) {
	let i = {}, a = Hs();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), qs(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	process.env.NODE_ENV !== "production" && $s(t || {}, i, e), e.props = n ? r ? i : /* @__PURE__ */ vn(i) : e.type.props ? i : a, e.attrs = a;
}
function Gs(e) {
	for (; e;) {
		if (e.type.__hmrId) return !0;
		e = e.parent;
	}
}
function Ks(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ P(i), [c] = e.propsOptions, l = !1;
	if (!(process.env.NODE_ENV !== "production" && Gs(e)) && (r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Os(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (d(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = A(o);
						i[t] = Js(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		qs(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !d(t, a) && ((r = ne(a)) === a || !d(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Js(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !d(t, e)) && (delete a[e], l = !0);
	}
	l && Mt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && $s(t || {}, i, e);
}
function qs(e, t, r, i) {
	let [a, o] = e.propsOptions, s = !1, c;
	if (t) for (let n in t) {
		if (D(n)) continue;
		let l = t[n], u;
		a && d(a, u = A(n)) ? !o || !o.includes(u) ? r[u] = l : (c || (c = {}))[u] = l : Os(e.emitsOptions, n) || (!(n in i) || l !== i[n]) && (i[n] = l, s = !0);
	}
	if (o) {
		let t = /* @__PURE__ */ P(r), i = c || n;
		for (let n = 0; n < o.length; n++) {
			let s = o[n];
			r[s] = Js(a, t, s, i[s], e, !d(i, s));
		}
	}
	return s;
}
function Js(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = d(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && _(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = Al(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === ne(n)) && (r = !0));
	}
	return r;
}
var Ys = /* @__PURE__ */ new WeakMap();
function Xs(e, t, i = !1) {
	let a = i ? Ys : t.propsCache, o = a.get(e);
	if (o) return o;
	let s = e.props, l = {}, u = [], p = !1;
	if (!_(e)) {
		let n = (e) => {
			p = !0;
			let [n, r] = Xs(e, t, !0);
			c(l, n), r && u.push(...r);
		};
		!i && t.mixins.length && t.mixins.forEach(n), e.extends && n(e.extends), e.mixins && e.mixins.forEach(n);
	}
	if (!s && !p) return b(e) && a.set(e, r), r;
	if (f(s)) for (let e = 0; e < s.length; e++) {
		process.env.NODE_ENV !== "production" && !v(s[e]) && I("props must be strings when using array syntax.", s[e]);
		let t = A(s[e]);
		Zs(t) && (l[t] = n);
	}
	else if (s) {
		process.env.NODE_ENV !== "production" && !b(s) && I("invalid props options", s);
		for (let e in s) {
			let t = A(e);
			if (Zs(t)) {
				let n = s[e], r = l[t] = f(n) || _(n) ? { type: n } : c({}, n), i = r.type, a = !1, o = !0;
				if (f(i)) for (let e = 0; e < i.length; ++e) {
					let t = i[e], n = _(t) && t.name;
					if (n === "Boolean") {
						a = !0;
						break;
					}
					n === "String" && (o = !1);
				}
				else a = _(i) && i.name === "Boolean";
				r[0] = a, r[1] = o, (a || d(r, "default")) && u.push(t);
			}
		}
	}
	let m = [l, u];
	return b(e) && a.set(e, m), m;
}
function Zs(e) {
	return e[0] !== "$" && !D(e) || (process.env.NODE_ENV !== "production" && I(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Qs(e) {
	return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function $s(e, t, n) {
	let r = /* @__PURE__ */ P(t), i = n.propsOptions[0], a = Object.keys(e).map((e) => A(e));
	for (let e in i) {
		let t = i[e];
		t != null && ec(e, r[e], t, process.env.NODE_ENV === "production" ? r : /* @__PURE__ */ bn(r), !a.includes(e));
	}
}
function ec(e, t, n, r, i) {
	let { type: a, required: o, validator: s, skipCheck: c } = n;
	if (o && i) {
		I("Missing required prop: \"" + e + "\"");
		return;
	}
	if (!(t == null && !o)) {
		if (a != null && a !== !0 && !c) {
			let n = !1, r = f(a) ? a : [a], i = [];
			for (let e = 0; e < r.length && !n; e++) {
				let { valid: a, expectedType: o } = nc(t, r[e]);
				i.push(o || ""), n = a;
			}
			if (!n) {
				I(rc(e, t, i));
				return;
			}
		}
		s && !s(t, r) && I("Invalid prop: custom validator check failed for prop \"" + e + "\".");
	}
}
var tc = /* @__PURE__ */ t("String,Number,Boolean,Function,Symbol,BigInt");
function nc(e, t) {
	let n, r = Qs(t);
	if (r === "null") n = e === null;
	else if (tc(r)) {
		let i = typeof e;
		n = i === r.toLowerCase(), !n && i === "object" && (n = e instanceof t);
	} else n = r === "Object" ? b(e) : r === "Array" ? f(e) : e instanceof t;
	return {
		valid: n,
		expectedType: r
	};
}
function rc(e, t, n) {
	if (n.length === 0) return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
	let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(re).join(" | ")}`, i = n[0], a = w(t), o = ic(t, i), s = ic(t, a);
	return n.length === 1 && ac(i) && oc(i, a) && (r += ` with value ${o}`), r += `, got ${a} `, ac(a) && (r += `with value ${s}.`), r;
}
function ic(e, t) {
	return y(e) ? e.toString() : t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ac(e) {
	return [
		"string",
		"number",
		"boolean"
	].some((t) => e.toLowerCase() === t);
}
function oc(...e) {
	return e.every((e) => {
		let t = e.toLowerCase();
		return t !== "boolean" && t !== "symbol";
	});
}
var sc = (e) => e === "_" || e === "_ctx" || e === "$stable", cc = (e) => f(e) ? e.map(yl) : [yl(e)], lc = (e, t, n) => {
	if (t._n) return t;
	let r = hi((...r) => (process.env.NODE_ENV !== "production" && H && !(n === null && L) && !(n && n.root !== H.root) && I(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), cc(t(...r))), n);
	return r._c = !1, r;
}, uc = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (sc(n)) continue;
		let i = e[n];
		if (_(i)) t[n] = lc(n, i, r);
		else if (i != null) {
			process.env.NODE_ENV !== "production" && I(`Non-function value encountered for slot "${n}". Prefer function slots for better performance.`);
			let e = cc(i);
			t[n] = () => e;
		}
	}
}, dc = (e, t) => {
	process.env.NODE_ENV !== "production" && !Ya(e.vnode) && I("Non-function value encountered for default slot. Prefer function slots for better performance.");
	let n = cc(t);
	e.slots.default = () => n;
}, fc = (e, t, n) => {
	for (let r in t) (n || !sc(r)) && (e[r] = t[r]);
}, pc = (e, t, n) => {
	let r = e.slots = Hs();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (fc(r, t, n), n && ae(r, "_", e, !0)) : uc(t, r);
	} else t && dc(e, t);
}, mc = (e, t, r) => {
	let { vnode: i, slots: a } = e, o = !0, s = n;
	if (i.shapeFlag & 32) {
		let n = t._;
		n ? process.env.NODE_ENV !== "production" && Ir ? (fc(a, t, r), Mt(e, "set", "$slots")) : r && n === 1 ? o = !1 : fc(a, t, r) : (o = !t.$stable, uc(t, a)), s = t;
	} else t && (dc(e, t), s = { default: 1 });
	if (o) for (let e in a) !sc(e) && s[e] == null && delete a[e];
}, hc, gc;
function _c(e, t) {
	e.appContext.config.performance && yc() && gc.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && oi(e, t, yc() ? gc.now() : Date.now());
}
function vc(e, t) {
	if (e.appContext.config.performance && yc()) {
		let n = `vue-${t}-${e.uid}`, r = n + ":end", i = `<${Zl(e, e.type)}> ${t}`;
		gc.mark(r), gc.measure(i, n, r), gc.clearMeasures(i), gc.clearMarks(n), gc.clearMarks(r);
	}
	process.env.NODE_ENV !== "production" && si(e, t, yc() ? gc.now() : Date.now());
}
function yc() {
	return hc === void 0 && (typeof window < "u" && window.performance ? (hc = !0, gc = window.performance) : hc = !1), hc;
}
function bc() {
	let e = [];
	if (process.env.NODE_ENV !== "production" && e.length) {
		let t = e.length > 1;
		console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
	}
}
var R = Uc;
function xc(e) {
	return Cc(e);
}
function Sc(e) {
	return Cc(e, xa);
}
function Cc(e, t) {
	bc();
	let a = le();
	a.__VUE__ = !0, process.env.NODE_ENV !== "production" && Qr(a.__VUE_DEVTOOLS_GLOBAL_HOOK__, a);
	let { insert: o, remove: s, patchProp: c, createElement: l, createText: u, createComment: d, setText: f, setElementText: p, parentNode: m, nextSibling: h, setScopeId: g = i, insertStaticContent: _ } = e, v = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = process.env.NODE_ENV !== "production" && Ir ? !1 : !!t.dynamicChildren) => {
		if (e === t) return;
		e && !il(e, t) && (r = ve(e), pe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Kc:
				y(e, t, n, r);
				break;
			case B:
				b(e, t, n, r);
				break;
			case qc:
				e == null ? x(t, n, r, o) : process.env.NODE_ENV !== "production" && S(e, t, n, o);
				break;
			case z:
				ne(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? T(e, t, n, r, i, a, o, s, c) : d & 6 ? re(e, t, n, r, i, a, o, s, c) : d & 64 || d & 128 ? l.process(e, t, n, r, i, a, o, s, c, xe) : process.env.NODE_ENV !== "production" && I("Invalid VNode type:", l, `(${typeof l})`);
		}
		u != null && i ? pa(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && pa(e.ref, null, a, e, !0);
	}, y = (e, t, n, r) => {
		if (e == null) o(t.el = u(t.children), n, r);
		else {
			let n = t.el = e.el;
			t.children !== e.children && f(n, t.children);
		}
	}, b = (e, t, n, r) => {
		e == null ? o(t.el = d(t.children || ""), n, r) : t.el = e.el;
	}, x = (e, t, n, r) => {
		[e.el, e.anchor] = _(e.children, t, n, r, e.el, e.anchor);
	}, S = (e, t, n, r) => {
		if (t.children !== e.children) {
			let i = h(e.anchor);
			w(e), [t.el, t.anchor] = _(t.children, n, i, r);
		} else t.el = e.el, t.anchor = e.anchor;
	}, C = ({ el: e, anchor: t }, n, r) => {
		let i;
		for (; e && e !== t;) i = h(e), o(e, n, r), e = i;
		o(t, n, r);
	}, w = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, T = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) E(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), k(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, E = (e, t, n, r, i, a, s, u) => {
		let d, f, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (d = e.el = l(e.type, a, m && m.is, m), h & 8 ? p(d, e.children) : h & 16 && O(e.children, d, null, r, i, wc(e, a), s, u), _ && vi(e, null, r, "created"), ee(d, e, e.scopeId, s, r), m) {
			for (let e in m) e !== "value" && !D(e) && c(d, e, null, m[e], a, r);
			"value" in m && c(d, "value", null, m.value, a), (f = m.onVnodeBeforeMount) && Cl(f, r, e);
		}
		process.env.NODE_ENV !== "production" && (ae(d, "__vnode", e, !0), ae(d, "__vueParentComponent", r, !0)), _ && vi(e, null, r, "beforeMount");
		let v = Ec(i, g);
		if (v && g.beforeEnter(d), o(d, t, n), (f = m && m.onVnodeMounted) || v || _) {
			let t = process.env.NODE_ENV !== "production" && Ir;
			R(() => {
				let n;
				process.env.NODE_ENV !== "production" && (n = Lr(t));
				try {
					f && Cl(f, r, e), v && g.enter(d), _ && vi(e, null, r, "mounted");
				} finally {
					process.env.NODE_ENV !== "production" && Lr(n);
				}
			}, i);
		}
	}, ee = (e, t, n, r, i) => {
		if (n && g(e, n), r) for (let t = 0; t < r.length; t++) g(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (process.env.NODE_ENV !== "production" && n.patchFlag > 0 && n.patchFlag & 2048 && (n = Ns(n.children) || n), t === n || Mc(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				ee(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, O = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? bl(e[l]) : yl(e[l]);
			v(null, c, t, n, r, i, a, o, s);
		}
	}, k = (e, t, r, i, a, o, s) => {
		let l = t.el = e.el;
		process.env.NODE_ENV !== "production" && (l.__vnode = t);
		let { patchFlag: u, dynamicChildren: d, dirs: f } = t;
		u |= e.patchFlag & 16;
		let m = e.props || n, h = t.props || n, g;
		if (r && Tc(r, !1), (g = h.onVnodeBeforeUpdate) && Cl(g, r, t, e), f && vi(t, e, r, "beforeUpdate"), r && Tc(r, !0), (process.env.NODE_ENV !== "production" && Ir || d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length)) && (u = 0, s = !1, d = null), (m.innerHTML && h.innerHTML == null || m.textContent && h.textContent == null) && p(l, ""), d ? (A(e.dynamicChildren, d, l, r, i, wc(t, a), o), process.env.NODE_ENV !== "production" && Dc(e, t)) : s || ce(e, t, l, null, r, i, wc(t, a), o, !1), u > 0) {
			if (u & 16) te(l, m, h, r, a);
			else if (u & 2 && m.class !== h.class && c(l, "class", null, h.class, a), u & 4 && c(l, "style", m.style, h.style, a), u & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let n = e[t], i = m[n], o = h[n];
					(o !== i || n === "value") && c(l, n, i, o, a, r);
				}
			}
			u & 1 && e.children !== t.children && p(l, t.children);
		} else !s && d == null && te(l, m, h, r, a);
		((g = h.onVnodeUpdated) || f) && R(() => {
			g && Cl(g, r, t, e), f && vi(t, e, r, "updated");
		}, i);
	}, A = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === z || !il(c, l) || c.shapeFlag & 198) ? m(c.el) : n;
			v(c, l, u, null, r, i, a, o, !0);
		}
	}, te = (e, t, r, i, a) => {
		if (t !== r) {
			if (t !== n) for (let n in t) !D(n) && !(n in r) && c(e, n, t[n], null, a, i);
			for (let n in r) {
				if (D(n)) continue;
				let o = r[n], s = t[n];
				o !== s && n !== "value" && c(e, n, s, o, a, i);
			}
			"value" in r && c(e, "value", t.value, r.value, a);
		}
	}, ne = (e, t, n, r, i, a, s, c, l) => {
		let d = t.el = e ? e.el : u(""), f = t.anchor = e ? e.anchor : u(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		process.env.NODE_ENV !== "production" && (Ir || p & 2048) && (p = 0, l = !1, m = null), h && (c = c ? c.concat(h) : h), e == null ? (o(d, n, r), o(f, n, r), O(t.children || [], n, f, i, a, s, c, l)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (A(e.dynamicChildren, m, n, i, a, s, c), process.env.NODE_ENV === "production" ? (t.key != null || i && t === i.subTree) && Dc(e, t, !0) : Dc(e, t)) : ce(e, t, n, f, i, a, s, c, l);
	}, re = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ie(t, n, r, i, a, o, c) : j(e, t, c);
	}, ie = (e, t, n, r, i, a, o) => {
		let s = e.component = El(e, r, i);
		if (process.env.NODE_ENV !== "production" && s.type.__hmrId && Br(s), process.env.NODE_ENV !== "production" && (rr(e), _c(s, "mount")), Ya(e) && (s.ctx.renderer = xe), process.env.NODE_ENV !== "production" && _c(s, "init"), Il(s, !1, o), process.env.NODE_ENV !== "production" && vc(s, "init"), process.env.NODE_ENV !== "production" && Ir && (e.el = null), s.asyncDep) {
			if (i && i.registerDep(s, oe, o), !e.el) {
				let r = s.subTree = V(B);
				b(null, r, t, n), e.placeholder = r.el;
			}
		} else oe(s, e, t, n, i, a, o);
		process.env.NODE_ENV !== "production" && (ir(), vc(s, "mount"));
	}, j = (e, t, n) => {
		let r = t.component = e.component;
		if (Ls(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				process.env.NODE_ENV !== "production" && rr(t), se(r, t, n), process.env.NODE_ENV !== "production" && ir();
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, oe = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = kc(e);
					if (n) {
						t && (t.el = c.el, se(e, t, o)), n.asyncDep.then(() => {
							R(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, d;
				process.env.NODE_ENV !== "production" && rr(t || e.vnode), Tc(e, !1), t ? (t.el = c.el, se(e, t, o)) : t = c, n && M(n), (d = t.props && t.props.onVnodeBeforeUpdate) && Cl(d, s, t, c), Tc(e, !0), process.env.NODE_ENV !== "production" && _c(e, "render");
				let f = js(e);
				process.env.NODE_ENV !== "production" && vc(e, "render");
				let p = e.subTree;
				e.subTree = f, process.env.NODE_ENV !== "production" && _c(e, "patch"), v(p, f, m(p.el), ve(p), e, i, a), process.env.NODE_ENV !== "production" && vc(e, "patch"), t.el = f.el, u === null && Bs(e, f.el), r && R(r, i), (d = t.props && t.props.onVnodeUpdated) && R(() => Cl(d, s, t, c), i), process.env.NODE_ENV !== "production" && ni(e), process.env.NODE_ENV !== "production" && ir();
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Ka(t);
				if (Tc(e, !1), l && M(l), !m && (o = c && c.onVnodeBeforeMount) && Cl(o, d, t), Tc(e, !0), s && Ce) {
					let t = () => {
						process.env.NODE_ENV !== "production" && _c(e, "render"), e.subTree = js(e), process.env.NODE_ENV !== "production" && vc(e, "render"), process.env.NODE_ENV !== "production" && _c(e, "hydrate"), Ce(s, e.subTree, e, i, null), process.env.NODE_ENV !== "production" && vc(e, "hydrate");
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0), process.env.NODE_ENV !== "production" && _c(e, "render");
					let o = e.subTree = js(e);
					process.env.NODE_ENV !== "production" && vc(e, "render"), process.env.NODE_ENV !== "production" && _c(e, "patch"), v(null, o, n, r, e, i, a), process.env.NODE_ENV !== "production" && vc(e, "patch"), t.el = o.el;
				}
				if (u && R(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					R(() => Cl(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Ka(d.vnode) && d.vnode.shapeFlag & 256) && e.a && R(e.a, i), e.isMounted = !0, process.env.NODE_ENV !== "production" && ti(e), t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new rt(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Or(u), Tc(e, !0), process.env.NODE_ENV !== "production" && (c.onTrack = e.rtc ? (t) => M(e.rtc, t) : void 0, c.onTrigger = e.rtg ? (t) => M(e.rtg, t) : void 0), l();
	}, se = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Ks(e, t.props, r, n), mc(e, t.children, n), bt(), jr(e), xt();
	}, ce = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, u = e ? e.shapeFlag : 0, d = t.children, { patchFlag: f, shapeFlag: m } = t;
		if (f > 0) {
			if (f & 128) {
				de(l, d, n, r, i, a, o, s, c);
				return;
			}
			if (f & 256) {
				ue(l, d, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (u & 16 && _e(l, i, a), d !== l && p(n, d)) : u & 16 ? m & 16 ? de(l, d, n, r, i, a, o, s, c) : _e(l, i, a, !0) : (u & 8 && p(n, ""), m & 16 && O(d, n, r, i, a, o, s, c));
	}, ue = (e, t, n, i, a, o, s, c, l) => {
		e = e || r, t = t || r;
		let u = e.length, d = t.length, f = Math.min(u, d), p;
		for (p = 0; p < f; p++) {
			let r = t[p] = l ? bl(t[p]) : yl(t[p]);
			v(e[p], r, n, null, a, o, s, c, l);
		}
		u > d ? _e(e, a, o, !0, !1, f) : O(t, n, i, a, o, s, c, l, f);
	}, de = (e, t, n, i, a, o, s, c, l) => {
		let u = 0, d = t.length, f = e.length - 1, p = d - 1;
		for (; u <= f && u <= p;) {
			let r = e[u], i = t[u] = l ? bl(t[u]) : yl(t[u]);
			if (il(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			u++;
		}
		for (; u <= f && u <= p;) {
			let r = e[f], i = t[p] = l ? bl(t[p]) : yl(t[p]);
			if (il(r, i)) v(r, i, n, null, a, o, s, c, l);
			else break;
			f--, p--;
		}
		if (u > f) {
			if (u <= p) {
				let e = p + 1, r = e < d ? t[e].el : i;
				for (; u <= p;) v(null, t[u] = l ? bl(t[u]) : yl(t[u]), n, r, a, o, s, c, l), u++;
			}
		} else if (u > p) for (; u <= f;) pe(e[u], a, o, !0), u++;
		else {
			let m = u, h = u, g = /* @__PURE__ */ new Map();
			for (u = h; u <= p; u++) {
				let e = t[u] = l ? bl(t[u]) : yl(t[u]);
				e.key != null && (process.env.NODE_ENV !== "production" && g.has(e.key) && I("Duplicate keys found during update:", JSON.stringify(e.key), "Make sure keys are unique."), g.set(e.key, u));
			}
			let _, y = 0, b = p - h + 1, x = !1, S = 0, C = Array(b);
			for (u = 0; u < b; u++) C[u] = 0;
			for (u = m; u <= f; u++) {
				let r = e[u];
				if (y >= b) {
					pe(r, a, o, !0);
					continue;
				}
				let i;
				if (r.key != null) i = g.get(r.key);
				else for (_ = h; _ <= p; _++) if (C[_ - h] === 0 && il(r, t[_])) {
					i = _;
					break;
				}
				i === void 0 ? pe(r, a, o, !0) : (C[i - h] = u + 1, i >= S ? S = i : x = !0, v(r, t[i], n, null, a, o, s, c, l), y++);
			}
			let w = x ? Oc(C) : r;
			for (_ = w.length - 1, u = b - 1; u >= 0; u--) {
				let e = h + u, r = t[e], f = t[e + 1], p = e + 1 < d ? f.el || jc(f) : i;
				C[u] === 0 ? v(null, r, n, p, a, o, s, c, l) : x && (_ < 0 || u !== w[_] ? fe(r, n, p, 2) : _--);
			}
		}
	}, fe = (e, t, n, r, i = null) => {
		let { el: a, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			fe(e.component.subTree, t, n, r);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, r);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, xe);
			return;
		}
		if (c === z) {
			o(a, t, n);
			for (let e = 0; e < u.length; e++) fe(u[e], t, n, r);
			o(e.anchor, t, n);
			return;
		}
		if (c === qc) {
			C(e, t, n);
			return;
		}
		if (r !== 2 && d & 1 && l) {
			if (r === 0) l.persisted && !a[Gi] ? o(a, t, n) : (l.beforeEnter(a), o(a, t, n), R(() => l.enter(a), i));
			else {
				let { leave: r, delayLeave: i, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? s(a) : o(a, t, n);
				}, d = () => {
					let e = a._isLeaving || !!a[Gi];
					a._isLeaving && a[Gi](!0), l.persisted && !e ? u() : r(a, () => {
						u(), c && c();
					});
				};
				i ? i(a, u, d) : d();
			}
		} else o(a, t, n);
	}, pe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (bt(), pa(s, null, n, e, !0), xt()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Ka(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && Cl(_, t, e), u & 6) ge(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && vi(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, xe, r) : l && !l.hasOnce && (a !== z || d > 0 && d & 64) ? _e(l, t, n, !1, !0) : (a === z && d & 384 || !i && u & 16) && _e(c, t, n), r && me(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && R(() => {
			_ && Cl(_, t, e), h && vi(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, me = (e) => {
		let { type: t, el: n, anchor: r, transition: i } = e;
		if (t === z) {
			process.env.NODE_ENV !== "production" && e.patchFlag > 0 && e.patchFlag & 2048 && i && !i.persisted ? e.children.forEach((e) => {
				e.type === B ? s(e.el) : me(e);
			}) : he(n, r);
			return;
		}
		if (t === qc) {
			w(e);
			return;
		}
		let a = () => {
			s(n), i && !i.persisted && i.afterLeave && i.afterLeave();
		};
		if (e.shapeFlag & 1 && i && !i.persisted) {
			let { leave: t, delayLeave: r } = i, o = () => t(n, a);
			r ? r(e.el, a, o) : o();
		} else a();
	}, he = (e, t) => {
		let n;
		for (; e !== t;) n = h(e), s(e), e = n;
		s(t);
	}, ge = (e, t, n) => {
		process.env.NODE_ENV !== "production" && e.type.__hmrId && Vr(e);
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		Ac(c), Ac(l), r && M(r), i.stop(), a && (a.flags |= 8, pe(o, e, t, n)), s && R(s, t), R(() => {
			e.isUnmounted = !0;
		}, t), process.env.NODE_ENV !== "production" && ii(e);
	}, _e = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) pe(e[o], t, n, r, i);
	}, ve = (e) => {
		if (e.shapeFlag & 6) return ve(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = h(e.anchor || e.el), n = t && t[Mi];
		return n ? h(n) : t;
	}, ye = !1, be = (e, t, n) => {
		let r;
		e == null ? t._vnode && (pe(t._vnode, null, null, !0), r = t._vnode.component) : v(t._vnode || null, e, t, null, null, null, n), t._vnode = e, ye || (ye = !0, jr(r), Mr(), ye = !1);
	}, xe = {
		p: v,
		um: pe,
		m: fe,
		r: me,
		mt: ie,
		mc: O,
		pc: ce,
		pbc: A,
		n: ve,
		o: e
	}, Se, Ce;
	return t && ([Se, Ce] = t(xe)), {
		render: be,
		hydrate: Se,
		createApp: xs(be, Se)
	};
}
function wc({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Tc({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ec(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Dc(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (f(r) && f(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = bl(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && Dc(t, a)), a.type === Kc && (a.patchFlag === -1 && (a = i[e] = bl(a)), a.el = t.el), a.type === B && !a.el && (a.el = t.el), process.env.NODE_ENV !== "production" && a.el && (a.el.__vnode = a);
	}
}
function Oc(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function kc(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : kc(t);
}
function Ac(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function jc(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? jc(t.subTree) : null;
}
var Mc = (e) => e.__isSuspense, Nc = 0, Pc = {
	name: "Suspense",
	__isSuspense: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		if (e == null) Ic(t, n, r, i, a, o, s, c, l);
		else {
			if (a && a.deps > 0 && !e.suspense.isInFallback) {
				t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
				return;
			}
			Lc(e, t, n, r, i, o, s, c, l);
		}
	},
	hydrate: Bc,
	normalize: Vc
};
function Fc(e, t) {
	let n = e.props && e.props[t];
	_(n) && n();
}
function Ic(e, t, n, r, i, a, o, s, c) {
	let { p: l, o: { createElement: u } } = c, d = u("div"), f = e.suspense = zc(e, i, r, t, d, n, a, o, s, c);
	l(null, f.pendingBranch = e.ssContent, d, null, r, f, a, o), f.deps > 0 ? (Fc(e, "onPending"), Fc(e, "onFallback"), l(null, e.ssFallback, t, n, r, null, a, o), Wc(f, e.ssFallback)) : f.resolve(!1, !0);
}
function Lc(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
	let d = t.suspense = e.suspense;
	d.vnode = t, t.el = e.el;
	let f = t.ssContent, p = t.ssFallback, { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
	if (h) d.pendingBranch = f, il(h, f) ? (c(h, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : g && !_ && !d.isFallbackMountPending && (c(m, p, n, r, i, null, a, o, s), Wc(d, p))) : (d.pendingId = Nc++, _ ? (d.isHydrating = !1, d.activeBranch = h) : l(h, i, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), g ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : d.isFallbackMountPending || (c(m, p, n, r, i, null, a, o, s), Wc(d, p))) : m && il(m, f) ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0)) : (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 && d.resolve()));
	else if (m && il(m, f)) c(m, f, n, r, i, d, a, o, s), Wc(d, f);
	else if (Fc(t, "onPending"), d.pendingBranch = f, d.pendingId = f.shapeFlag & 512 ? f.component.suspenseId : Nc++, c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0) d.resolve();
	else {
		let { timeout: e, pendingId: t } = d;
		e > 0 ? setTimeout(() => {
			d.pendingId === t && d.fallback(p);
		}, e) : e === 0 && d.fallback(p);
	}
}
var Rc = !1;
function zc(e, t, n, r, i, a, o, s, c, l, u = !1) {
	process.env.NODE_ENV !== "production" && !Rc && (Rc = !0, console[console.info ? "info" : "log"]("<Suspense> is an experimental feature and its API will likely change."));
	let { p: d, m: f, um: p, n: m, o: { parentNode: h, remove: g } } = l, _, v = Gc(e);
	v && t && t.pendingBranch && (_ = t.pendingId, t.deps++);
	let y = e.props ? se(e.props.timeout) : void 0;
	process.env.NODE_ENV !== "production" && dr(y, "Suspense timeout");
	let b = a, x = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: o,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: Nc++,
		timeout: typeof y == "number" ? y : -1,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			if (process.env.NODE_ENV !== "production") {
				if (!e && !x.pendingBranch) throw Error("suspense.resolve() is called without a pending branch.");
				if (x.isUnmounted) throw Error("suspense.resolve() is called on an already unmounted suspense boundary.");
			}
			let { vnode: r, activeBranch: i, pendingBranch: o, pendingId: s, effects: c, parentComponent: l, container: u, isInFallback: d } = x, g = !1;
			if (x.isHydrating) x.isHydrating = !1;
			else if (!e) {
				g = i && o.transition && o.transition.mode === "out-in";
				let e = !1;
				g && (i.transition.afterLeave = () => {
					s === x.pendingId && (f(o, u, a === b && !e ? m(i) : a, 0), Ar(c), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !x.isFallbackMountPending && (h(i.el) === u && (a = m(i), e = !0), p(i, l, x, !0), !g && d && r.ssFallback && R(() => r.ssFallback.el = null, x)), g || f(o, u, a, 0);
			}
			x.isFallbackMountPending = !1, Wc(x, o), x.pendingBranch = null, x.isInFallback = !1;
			let y = x.parent, S = !1;
			for (; y;) {
				if (y.pendingBranch) {
					for (let e = 0; e < c.length; e++) y.effects.push(c[e]);
					S = !0;
					break;
				}
				y = y.parent;
			}
			!S && !g && Ar(c), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (t.deps--, t.deps === 0 && !n && t.resolve()), Fc(r, "onResolve");
		},
		fallback(e) {
			if (!x.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: a } = x;
			Fc(t, "onFallback");
			let o = m(n), l = () => {
				if (x.isFallbackMountPending = !1, !x.isInFallback) return;
				let e = x.vnode.ssFallback;
				d(null, e, i, o, r, null, a, s, c), Wc(x, e);
			}, u = e.transition && e.transition.mode === "out-in";
			u && (x.isFallbackMountPending = !0, n.transition.afterLeave = l), x.isInFallback = !0, p(n, r, null, !0), u || l();
		},
		move(e, t, n) {
			x.activeBranch && f(x.activeBranch, e, t, n), x.container = e;
		},
		next() {
			return x.activeBranch && m(x.activeBranch);
		},
		registerDep(e, t, n) {
			let r = !!x.pendingBranch;
			r && x.deps++;
			let i = e.vnode.el;
			e.asyncDep.catch((t) => {
				gr(t, e, 0);
			}).then((a) => {
				if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId) return;
				jl(), e.asyncResolved = !0;
				let { vnode: s } = e;
				process.env.NODE_ENV !== "production" && rr(s), Rl(e, a, !1), i && (s.el = i);
				let c = !i && e.subTree.el;
				t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n), c && (s.placeholder = null, g(c)), Bs(e, s.el), process.env.NODE_ENV !== "production" && ir(), r && --x.deps === 0 && x.resolve();
			});
		},
		unmount(e, t) {
			x.isUnmounted = !0, x.activeBranch && p(x.activeBranch, n, e, t), x.pendingBranch && p(x.pendingBranch, n, e, t);
		}
	};
	return x;
}
function Bc(e, t, n, r, i, a, o, s, c) {
	let l = t.suspense = zc(t, r, n, e.parentNode, document.createElement("div"), null, i, a, o, s, !0), u = c(e, l.pendingBranch = t.ssContent, n, l, a, o);
	return l.deps === 0 && l.resolve(!1, !0), u;
}
function Vc(e) {
	let { shapeFlag: t, children: n } = e, r = t & 32;
	e.ssContent = Hc(r ? n.default : n), e.ssFallback = r ? Hc(n.fallback) : V(B);
}
function Hc(e) {
	let t;
	if (_(e)) {
		let n = Qc && e._c;
		n && (e._d = !1, Xc()), e = e(), n && (e._d = !0, t = Yc, Zc());
	}
	if (f(e)) {
		let t = Ns(e);
		process.env.NODE_ENV !== "production" && !t && e.filter((e) => e !== bo).length > 0 && I("<Suspense> slots expect a single root node."), e = t;
	}
	return e = yl(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function Uc(e, t) {
	t && t.pendingBranch ? f(e) ? t.effects.push(...e) : t.effects.push(e) : Ar(e);
}
function Wc(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) t = t.component.subTree, i = t.el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, Bs(r, i));
}
function Gc(e) {
	let t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
var z = /* @__PURE__ */ Symbol.for("v-fgt"), Kc = /* @__PURE__ */ Symbol.for("v-txt"), B = /* @__PURE__ */ Symbol.for("v-cmt"), qc = /* @__PURE__ */ Symbol.for("v-stc"), Jc = [], Yc = null;
function Xc(e = !1) {
	Jc.push(Yc = e ? null : []);
}
function Zc() {
	Jc.pop(), Yc = Jc[Jc.length - 1] || null;
}
var Qc = 1;
function $c(e, t = !1) {
	Qc += e, e < 0 && Yc && t && (Yc.hasOnce = !0);
}
function el(e) {
	return e.dynamicChildren = Qc > 0 ? Yc || r : null, Zc(), Qc > 0 && Yc && Yc.push(e), e;
}
function tl(e, t, n, r, i, a) {
	return el(ul(e, t, n, r, i, a, !0));
}
function nl(e, t, n, r, i) {
	return el(V(e, t, n, r, i, !0));
}
function rl(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function il(e, t) {
	if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
		let n = Rr.get(t.type);
		if (n && n.has(e.component)) return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
	}
	return e.type === t.type && e.key === t.key;
}
var al;
function ol(e) {
	al = e;
}
var sl = (...e) => fl(...al ? al(e, L) : e), cl = ({ key: e }) => e == null ? null : e, ll = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : v(e) || /* @__PURE__ */ F(e) || _(e) ? {
	i: L,
	r: e,
	k: t,
	f: !!n
} : e);
function ul(e, t = null, n = null, r = 0, i = null, a = e === z ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && cl(t),
		ref: t && ll(t),
		scopeId: ui,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: L
	};
	if (s ? (xl(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= v(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && I("VNode created with invalid key (NaN). VNode type:", c.type), process.env.NODE_ENV !== "production" && t && c.shapeFlag & 1) {
		let e = t.innerHTML == null ? t.textContent == null ? null : "textContent" : "innerHTML";
		e && dl(c.children) && I(`The \`${e}\` prop on <${c.type}> will override its children. Remove either the \`${e}\` prop or the children.`);
	}
	return Qc > 0 && !o && Yc && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Yc.push(c), c;
}
function dl(e) {
	return v(e) ? e !== "" : f(e) ? e.length > 0 : !1;
}
var V = process.env.NODE_ENV === "production" ? fl : sl;
function fl(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === bo) && (process.env.NODE_ENV !== "production" && !e && I(`Invalid vnode type when creating vnode: ${e}.`), e = B), rl(e)) {
		let r = ml(e, t, !0);
		return n && xl(r, n), Qc > 0 && !a && Yc && (r.shapeFlag & 6 ? Yc[Yc.indexOf(e)] = r : Yc.push(r)), r.patchFlag = -2, r;
	}
	if (Ql(e) && (e = e.__vccOpts), t) {
		t = pl(t);
		let { class: e, style: n } = t;
		e && !v(e) && (t.class = Se(e)), b(n) && (/* @__PURE__ */ Tn(n) && !f(n) && (n = c({}, n)), t.style = ge(n));
	}
	let o = v(e) ? 1 : Mc(e) ? 128 : Ni(e) ? 64 : b(e) ? 4 : _(e) ? 2 : 0;
	return process.env.NODE_ENV !== "production" && o & 4 && /* @__PURE__ */ Tn(e) && (e = /* @__PURE__ */ P(e), I("Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", "\nComponent that was made reactive: ", e)), ul(e, t, n, r, i, o, a, !0);
}
function pl(e) {
	return e ? /* @__PURE__ */ Tn(e) || Us(e) ? c({}, e) : e : null;
}
function ml(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? Sl(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && cl(l),
		ref: t && t.ref ? n && a ? f(a) ? a.concat(ll(t)) : [a, ll(t)] : ll(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: process.env.NODE_ENV !== "production" && o === -1 && f(s) ? s.map(hl) : s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== z ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && ml(e.ssContent),
		ssFallback: e.ssFallback && ml(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && ia(u, c.clone(u)), u;
}
function hl(e) {
	let t = ml(e);
	return f(e.children) && (t.children = e.children.map(hl)), t;
}
function gl(e = " ", t = 0) {
	return V(Kc, null, e, t);
}
function _l(e, t) {
	let n = V(qc, null, e);
	return n.staticCount = t, n;
}
function vl(e = "", t = !1) {
	return t ? (Xc(), nl(B, null, e)) : V(B, null, e);
}
function yl(e) {
	return e == null || typeof e == "boolean" ? V(B) : f(e) ? V(z, null, e.slice()) : rl(e) ? bl(e) : V(Kc, null, String(e));
}
function bl(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : ml(e);
}
function xl(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (f(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), xl(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Us(t) ? t._ctx = L : r === 3 && L && (L.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (_(t)) {
		if (r & 65) {
			xl(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: L
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [gl(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function Sl(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Se([t.class, r.class]));
		else if (e === "style") t.style = ge([t.style, r.style]);
		else if (o(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(f(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !s(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function Cl(e, t, n, r = null) {
	hr(e, t, 7, [n, r]);
}
var wl = ys(), Tl = 0;
function El(e, t, r) {
	let i = e.type, a = (t ? t.appContext : e.appContext) || wl, o = {
		uid: Tl++,
		vnode: e,
		type: i,
		parent: t,
		appContext: a,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new Qe(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(a.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: Xs(i, a),
		emitsOptions: Ds(i, a),
		emit: null,
		emitted: null,
		propsDefaults: n,
		inheritAttrs: i.inheritAttrs,
		ctx: n,
		data: n,
		props: n,
		attrs: n,
		slots: n,
		refs: n,
		setupState: n,
		setupContext: null,
		suspense: r,
		suspenseId: r ? r.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return o.ctx = process.env.NODE_ENV === "production" ? { _: o } : Ro(o), o.root = t ? t.root : o, o.emit = Ts.bind(null, o), e.ce && e.ce(o), o;
}
var H = null, Dl = () => H || L, Ol, kl;
{
	let e = le(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	Ol = t("__VUE_INSTANCE_SETTERS__", (e) => H = e), kl = t("__VUE_SSR_SETTERS__", (e) => Fl = e);
}
var Al = (e) => {
	let t = H;
	return Ol(e), e.scope.on(), () => {
		e.scope.off(), Ol(t);
	};
}, jl = () => {
	H && H.scope.off(), Ol(null);
}, Ml = /* @__PURE__ */ t("slot,component");
function Nl(e, { isNativeTag: t }) {
	(Ml(e) || t(e)) && I("Do not use built-in or reserved HTML elements as component id: " + e);
}
function Pl(e) {
	return e.vnode.shapeFlag & 4;
}
var Fl = !1;
function Il(e, t = !1, n = !1) {
	t && kl(t);
	let { props: r, children: i } = e.vnode, a = Pl(e);
	Ws(e, r, a, t), pc(e, i, n || t);
	let o = a ? Ll(e, t) : void 0;
	return t && kl(!1), o;
}
function Ll(e, t) {
	let n = e.type;
	if (process.env.NODE_ENV !== "production") {
		if (n.name && Nl(n.name, e.appContext.config), n.components) {
			let t = Object.keys(n.components);
			for (let n = 0; n < t.length; n++) Nl(t[n], e.appContext.config);
		}
		if (n.directives) {
			let e = Object.keys(n.directives);
			for (let t = 0; t < e.length; t++) gi(e[t]);
		}
		n.compilerOptions && Hl() && I("\"compilerOptions\" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.");
	}
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Io), process.env.NODE_ENV !== "production" && zo(e);
	let { setup: r } = n;
	if (r) {
		bt();
		let i = e.setupContext = r.length > 1 ? Kl(e) : null, a = Al(e), o = mr(r, e, 0, [process.env.NODE_ENV === "production" ? e.props : /* @__PURE__ */ bn(e.props), i]), s = x(o);
		if (xt(), a(), (s || e.sp) && !Ka(e) && ca(e), s) {
			if (o.then(jl, jl), t) return o.then((n) => {
				kl(!0);
				try {
					Rl(e, n, t);
				} finally {
					kl(!1);
				}
			}).catch((t) => {
				gr(t, e, 0);
			});
			e.asyncDep = o, process.env.NODE_ENV !== "production" && !e.suspense && I(`Component <${Zl(e, n)}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
		} else Rl(e, o, t);
	} else Ul(e, t);
}
function Rl(e, t, n) {
	_(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : b(t) ? (process.env.NODE_ENV !== "production" && rl(t) && I("setup() should not return VNodes directly - return a render function instead."), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Ln(t), process.env.NODE_ENV !== "production" && Bo(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && I(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), Ul(e, n);
}
var zl, Bl;
function Vl(e) {
	zl = e, Bl = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, Lo));
	};
}
var Hl = () => !zl;
function Ul(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && zl && !r.render) {
			let t = r.template || ls(e).template;
			if (t) {
				process.env.NODE_ENV !== "production" && _c(e, "compile");
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r, s = c(c({
					isCustomElement: n,
					delimiters: a
				}, i), o);
				r.render = zl(t, s), process.env.NODE_ENV !== "production" && vc(e, "compile");
			}
		}
		e.render = r.render || i, Bl && Bl(e);
	}
	{
		let t = Al(e);
		bt();
		try {
			as(e);
		} finally {
			xt(), t();
		}
	}
	process.env.NODE_ENV !== "production" && !r.render && e.render === i && !t && (!zl && r.template ? I("Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias \"vue\" to \"vue/dist/vue.esm-bundler.js\".") : I("Component is missing template or render function: ", r));
}
var Wl = process.env.NODE_ENV === "production" ? { get(e, t) {
	return jt(e, "get", ""), e[t];
} } : {
	get(e, t) {
		return As(), jt(e, "get", ""), e[t];
	},
	set() {
		return I("setupContext.attrs is readonly."), !1;
	},
	deleteProperty() {
		return I("setupContext.attrs is readonly."), !1;
	}
};
function Gl(e) {
	return new Proxy(e.slots, { get(t, n) {
		return jt(e, "get", "$slots"), t[n];
	} });
}
function Kl(e) {
	let t = (t) => {
		if (process.env.NODE_ENV !== "production" && (e.exposed && I("expose() should be called only once per setup()."), t != null)) {
			let e = typeof t;
			e === "object" && (f(t) ? e = "array" : /* @__PURE__ */ F(t) && (e = "ref")), e !== "object" && I(`expose() should be passed a plain object, received ${e}.`);
		}
		e.exposed = t || {};
	};
	if (process.env.NODE_ENV !== "production") {
		let n, r;
		return Object.freeze({
			get attrs() {
				return n || (n = new Proxy(e.attrs, Wl));
			},
			get slots() {
				return r || (r = Gl(e));
			},
			get emit() {
				return (t, ...n) => e.emit(t, ...n);
			},
			expose: t
		});
	}
	return {
		attrs: new Proxy(e.attrs, Wl),
		slots: e.slots,
		emit: e.emit,
		expose: t
	};
}
function ql(e) {
	return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ln(En(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in No) return No[n](e);
		},
		has(e, t) {
			return t in e || t in No;
		}
	})) : e.proxy;
}
var Jl = /(?:^|[-_])\w/g, Yl = (e) => e.replace(Jl, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Xl(e, t = !0) {
	return _(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zl(e, t, n = !1) {
	let r = Xl(t);
	if (!r && t.__file) {
		let e = t.__file.match(/([^/\\]+)\.\w+$/);
		e && (r = e[1]);
	}
	if (!r && e) {
		let n = (e) => {
			for (let n in e) if (e[n] === t) return n;
		};
		r = n(e.components) || e.parent && n(e.parent.type.components) || n(e.appContext.components);
	}
	return r ? Yl(r) : n ? "App" : "Anonymous";
}
function Ql(e) {
	return _(e) && "__vccOpts" in e;
}
var $l = (e, t) => {
	let n = /* @__PURE__ */ Kn(e, t, Fl);
	if (process.env.NODE_ENV !== "production") {
		let e = Dl();
		e && e.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
	}
	return n;
};
function eu(e, t, n) {
	try {
		$c(-1);
		let r = arguments.length;
		return r === 2 ? b(t) && !f(t) ? rl(t) ? V(e, null, [t]) : V(e, t) : V(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && rl(n) && (n = [n]), V(e, t, n));
	} finally {
		$c(1);
	}
}
function tu() {
	if (process.env.NODE_ENV === "production" || typeof window > "u") return;
	let e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, i = { style: "color:#eb2f96" }, a = {
		__vue_custom_formatter: !0,
		header(t) {
			if (!b(t)) return null;
			if (t.__isVue) return [
				"div",
				e,
				"VueInstance"
			];
			if (/* @__PURE__ */ F(t)) {
				bt();
				let n = t.value;
				return xt(), [
					"div",
					{},
					[
						"span",
						e,
						p(t)
					],
					"<",
					l(n),
					">"
				];
			}
			return /* @__PURE__ */ Sn(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ wn(t) ? "ShallowReactive" : "Reactive"
				],
				"<",
				l(t),
				`>${/* @__PURE__ */ Cn(t) ? " (readonly)" : ""}`
			] : /* @__PURE__ */ Cn(t) ? [
				"div",
				{},
				[
					"span",
					e,
					/* @__PURE__ */ wn(t) ? "ShallowReadonly" : "Readonly"
				],
				"<",
				l(t),
				">"
			] : null;
		},
		hasBody(e) {
			return e && e.__isVue;
		},
		body(e) {
			if (e && e.__isVue) return [
				"div",
				{},
				...o(e.$)
			];
		}
	};
	function o(e) {
		let t = [];
		e.type.props && e.props && t.push(s("props", /* @__PURE__ */ P(e.props))), e.setupState !== n && t.push(s("setup", e.setupState)), e.data !== n && t.push(s("data", /* @__PURE__ */ P(e.data)));
		let r = u(e, "computed");
		r && t.push(s("computed", r));
		let a = u(e, "inject");
		return a && t.push(s("injected", a)), t.push([
			"div",
			{},
			[
				"span",
				{ style: i.style + ";opacity:0.66" },
				"$ (internal): "
			],
			["object", { object: e }]
		]), t;
	}
	function s(e, t) {
		return t = c({}, t), Object.keys(t).length ? [
			"div",
			{ style: "line-height:1.25em;margin-bottom:0.6em" },
			[
				"div",
				{ style: "color:#476582" },
				e
			],
			[
				"div",
				{ style: "padding-left:1.25em" },
				...Object.keys(t).map((e) => [
					"div",
					{},
					[
						"span",
						i,
						e + ": "
					],
					l(t[e], !1)
				])
			]
		] : ["span", {}];
	}
	function l(e, n = !0) {
		return typeof e == "number" ? [
			"span",
			t,
			e
		] : typeof e == "string" ? [
			"span",
			r,
			JSON.stringify(e)
		] : typeof e == "boolean" ? [
			"span",
			i,
			e
		] : b(e) ? ["object", { object: n ? /* @__PURE__ */ P(e) : e }] : [
			"span",
			r,
			String(e)
		];
	}
	function u(e, t) {
		let n = e.type;
		if (_(n)) return;
		let r = {};
		for (let i in e.ctx) d(n, i, t) && (r[i] = e.ctx[i]);
		return r;
	}
	function d(e, t, n) {
		let r = e[n];
		if (f(r) && r.includes(t) || b(r) && t in r || e.extends && d(e.extends, t, n) || e.mixins && e.mixins.some((e) => d(e, t, n))) return !0;
	}
	function p(e) {
		return /* @__PURE__ */ wn(e) ? "ShallowRef" : e.effect ? "ComputedRef" : "Ref";
	}
	window.devtoolsFormatters ? window.devtoolsFormatters.push(a) : window.devtoolsFormatters = [a];
}
function nu(e, t, n, r) {
	let i = n[r];
	if (i && ru(i, e)) return i;
	let a = t();
	return a.memo = e.slice(), a.cacheIndex = r, n[r] = a;
}
function ru(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (j(n[e], t[e])) return !1;
	return Qc > 0 && Yc && Yc.push(e), !0;
}
var iu = "3.5.42", U = process.env.NODE_ENV === "production" ? i : I, au = pr, ou = (process.env.NODE_ENV, Jr), su = (process.env.NODE_ENV, Qr), cu = {
	createComponentInstance: El,
	setupComponent: Il,
	renderComponentRoot: js,
	setCurrentRenderingInstance: di,
	isVNode: rl,
	normalizeVNode: yl,
	getComponentPublicInstance: ql,
	ensureValidVNode: Oo,
	pushWarningContext: rr,
	popWarningContext: ir
}, lu = /* @__PURE__ */ e({
	BaseTransition: () => $i,
	BaseTransitionPropsValidators: () => Yi,
	Comment: () => B,
	DeprecationTypes: () => null,
	EffectScope: () => Qe,
	ErrorCodes: () => fr,
	ErrorTypeStrings: () => au,
	Fragment: () => z,
	KeepAlive: () => Xa,
	ReactiveEffect: () => rt,
	Static: () => qc,
	Suspense: () => Pc,
	Teleport: () => Hi,
	Text: () => Kc,
	TrackOpTypes: () => qn,
	Transition: () => Cu,
	TransitionGroup: () => Pd,
	TriggerOpTypes: () => Jn,
	VueElement: () => Ed,
	assertNumber: () => dr,
	callWithAsyncErrorHandling: () => hr,
	callWithErrorHandling: () => mr,
	camelize: () => A,
	capitalize: () => re,
	cloneVNode: () => ml,
	compatUtils: () => null,
	computed: () => $l,
	createApp: () => vf,
	createBlock: () => nl,
	createCommentVNode: () => vl,
	createElementBlock: () => tl,
	createElementVNode: () => ul,
	createHydrationRenderer: () => Sc,
	createPropsRestProxy: () => ts,
	createRenderer: () => xc,
	createSSRApp: () => yf,
	createSlots: () => Eo,
	createStaticVNode: () => _l,
	createTextVNode: () => gl,
	createVNode: () => V,
	customRef: () => zn,
	defineAsyncComponent: () => qa,
	defineComponent: () => oa,
	defineCustomElement: () => Cd,
	defineEmits: () => Uo,
	defineExpose: () => Wo,
	defineModel: () => qo,
	defineOptions: () => Go,
	defineProps: () => Ho,
	defineSSRCustomElement: () => wd,
	defineSlots: () => Ko,
	devtools: () => ou,
	effect: () => gt,
	effectScope: () => $e,
	getCurrentInstance: () => Dl,
	getCurrentScope: () => et,
	getCurrentWatcher: () => Qn,
	getTransitionRawChildren: () => aa,
	guardReactiveProps: () => pl,
	h: () => eu,
	handleError: () => gr,
	hasInjectionContext: () => xi,
	hydrate: () => _f,
	hydrateOnIdle: () => Ba,
	hydrateOnInteraction: () => Wa,
	hydrateOnMediaQuery: () => Ua,
	hydrateOnVisible: () => Ha,
	initCustomFormatter: () => tu,
	initDirectivesForSSR: () => Tf,
	inject: () => bi,
	isMemoSame: () => ru,
	isProxy: () => Tn,
	isReactive: () => Sn,
	isReadonly: () => Cn,
	isRef: () => F,
	isRuntimeOnly: () => Hl,
	isShallow: () => wn,
	isVNode: () => rl,
	markRaw: () => En,
	mergeDefaults: () => $o,
	mergeModels: () => es,
	mergeProps: () => Sl,
	nextTick: () => Er,
	nodeOps: () => _u,
	normalizeClass: () => Se,
	normalizeProps: () => Ce,
	normalizeStyle: () => ge,
	onActivated: () => Qa,
	onBeforeMount: () => oo,
	onBeforeUnmount: () => uo,
	onBeforeUpdate: () => co,
	onDeactivated: () => $a,
	onErrorCaptured: () => go,
	onMounted: () => so,
	onRenderTracked: () => ho,
	onRenderTriggered: () => mo,
	onScopeDispose: () => tt,
	onServerPrefetch: () => po,
	onUnmounted: () => fo,
	onUpdated: () => lo,
	onWatcherCleanup: () => $n,
	openBlock: () => Xc,
	patchProp: () => yd,
	popScopeId: () => pi,
	provide: () => yi,
	proxyRefs: () => Ln,
	pushScopeId: () => fi,
	queuePostFlushCb: () => Ar,
	reactive: () => _n,
	readonly: () => yn,
	ref: () => kn,
	registerRuntimeCompiler: () => Vl,
	render: () => gf,
	renderList: () => To,
	renderSlot: () => Do,
	resolveComponent: () => yo,
	resolveDirective: () => So,
	resolveDynamicComponent: () => xo,
	resolveFilter: () => null,
	resolveTransitionHooks: () => ta,
	setBlockTracking: () => $c,
	setDevtoolsHook: () => su,
	setTransitionHooks: () => ia,
	shallowReactive: () => vn,
	shallowReadonly: () => bn,
	shallowRef: () => An,
	ssrContextKey: () => Si,
	ssrUtils: () => cu,
	stop: () => _t,
	toDisplayString: () => Ke,
	toHandlerKey: () => ie,
	toHandlers: () => ko,
	toRaw: () => P,
	toRef: () => Un,
	toRefs: () => Bn,
	toValue: () => Fn,
	transformVNodeArgs: () => ol,
	triggerRef: () => Nn,
	unref: () => Pn,
	useAttrs: () => Xo,
	useCssModule: () => kd,
	useCssVars: () => Gu,
	useHost: () => Dd,
	useId: () => sa,
	useModel: () => Cs,
	useSSRContext: () => Ci,
	useShadowRoot: () => Od,
	useSlots: () => Yo,
	useTemplateRef: () => ua,
	useTransitionState: () => qi,
	vModelCheckbox: () => qd,
	vModelDynamic: () => tf,
	vModelRadio: () => Yd,
	vModelSelect: () => Xd,
	vModelText: () => Kd,
	vShow: () => Vu,
	version: () => iu,
	warn: () => U,
	watch: () => Di,
	watchEffect: () => wi,
	watchPostEffect: () => Ti,
	watchSyncEffect: () => Ei,
	withAsyncContext: () => ns,
	withCtx: () => hi,
	withDefaults: () => Jo,
	withDirectives: () => _i,
	withKeys: () => uf,
	withMemo: () => nu,
	withModifiers: () => cf,
	withScopeId: () => mi
}), uu = void 0, du = typeof window < "u" && window.trustedTypes;
if (du) try {
	uu = /* @__PURE__ */ du.createPolicy("vue", { createHTML: (e) => e });
} catch (e) {
	process.env.NODE_ENV !== "production" && U(`Error creating trusted types policy: ${e}`);
}
var fu = uu ? (e) => uu.createHTML(e) : (e) => e, pu = "http://www.w3.org/2000/svg", mu = "http://www.w3.org/1998/Math/MathML", hu = typeof document < "u" ? document : null, gu = hu && /* @__PURE__ */ hu.createElement("template"), _u = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? hu.createElementNS(pu, e) : t === "mathml" ? hu.createElementNS(mu, e) : n ? hu.createElement(e, { is: n }) : hu.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => hu.createTextNode(e),
	createComment: (e) => hu.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => hu.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			gu.innerHTML = fu(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = gu.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, vu = "transition", yu = "animation", bu = /* @__PURE__ */ Symbol("_vtc"), xu = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, Su = /* @__PURE__ */ c({}, Yi, xu), Cu = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = Su, e))((e, { slots: t }) => eu($i, Eu(e), t)), wu = (e, t = []) => {
	f(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, Tu = (e) => e ? f(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function Eu(e) {
	let t = {};
	for (let n in e) n in xu || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: u = o, appearToClass: d = s, leaveFromClass: f = `${n}-leave-from`, leaveActiveClass: p = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, h = Du(i), g = h && h[0], _ = h && h[1], { onBeforeEnter: v, onEnter: y, onEnterCancelled: b, onLeave: x, onLeaveCancelled: S, onBeforeAppear: C = v, onAppear: w = y, onAppearCancelled: T = b } = t, E = (e, t, n, r) => {
		e._enterCancelled = r, Au(e, t ? d : s), Au(e, t ? u : o), n && n();
	}, D = (e, t) => {
		e._isLeaving = !1, Au(e, f), Au(e, m), Au(e, p), t && t();
	}, ee = (e) => (t, n) => {
		let i = e ? w : y, o = () => E(t, e, n);
		wu(i, [t, o]), ju(() => {
			Au(t, e ? l : a), ku(t, e ? d : s), Tu(i) || Nu(t, r, g, o);
		});
	};
	return c(t, {
		onBeforeEnter(e) {
			wu(v, [e]), ku(e, a), ku(e, o);
		},
		onBeforeAppear(e) {
			wu(C, [e]), ku(e, l), ku(e, u);
		},
		onEnter: ee(!1),
		onAppear: ee(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => D(e, t);
			ku(e, f), e._enterCancelled ? (ku(e, p), Lu(e)) : (Lu(e), ku(e, p)), ju(() => {
				e._isLeaving && (Au(e, f), ku(e, m), Tu(x) || Nu(e, r, _, n));
			}), wu(x, [e, n]);
		},
		onEnterCancelled(e) {
			E(e, !1, void 0, !0), wu(b, [e]);
		},
		onAppearCancelled(e) {
			E(e, !0, void 0, !0), wu(T, [e]);
		},
		onLeaveCancelled(e) {
			D(e), wu(S, [e]);
		}
	});
}
function Du(e) {
	if (e == null) return null;
	if (b(e)) return [Ou(e.enter), Ou(e.leave)];
	{
		let t = Ou(e);
		return [t, t];
	}
}
function Ou(e) {
	let t = se(e);
	return process.env.NODE_ENV !== "production" && dr(t, "<transition> explicit duration"), t;
}
function ku(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[bu] || (e[bu] = /* @__PURE__ */ new Set())).add(t);
}
function Au(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[bu];
	n && (n.delete(t), n.size || (e[bu] = void 0));
}
function ju(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var Mu = 0;
function Nu(e, t, n, r) {
	let i = e._endId = ++Mu, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = Pu(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function Pu(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${vu}Delay`), a = r(`${vu}Duration`), o = Fu(i, a), s = r(`${yu}Delay`), c = r(`${yu}Duration`), l = Fu(s, c), u = null, d = 0, f = 0;
	t === vu ? o > 0 && (u = vu, d = o, f = a.length) : t === yu ? l > 0 && (u = yu, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? vu : yu : null, f = u ? u === vu ? a.length : c.length : 0);
	let p = u === vu && /\b(?:transform|all)(?:,|$)/.test(r(`${vu}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function Fu(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => Iu(t) + Iu(e[n])));
}
function Iu(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Lu(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ru(e, t, n) {
	let r = e[bu];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var zu = /* @__PURE__ */ Symbol("_vod"), Bu = /* @__PURE__ */ Symbol("_vsh"), Vu = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[zu] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Hu(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Hu(e, !0), r.enter(e)) : r.leave(e, () => {
			Hu(e, !1);
		}) : Hu(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Hu(e, t);
	}
};
function Hu(e, t) {
	e.style.display = t ? e[zu] : "none", e[Bu] = !t;
}
function Uu() {
	Vu.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var Wu = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "CSS_VAR_TEXT");
function Gu(e) {
	let t = Dl();
	if (!t) {
		process.env.NODE_ENV !== "production" && U("useCssVars is called without current active component instance.");
		return;
	}
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => qu(e, n));
	};
	process.env.NODE_ENV !== "production" && (t.getCssVars = () => e(t.proxy));
	let r = () => {
		let r = e(t.proxy);
		t.ce ? qu(t.ce, r) : Ku(t.subTree, r), n(r);
	};
	co(() => {
		Ar(r);
	}), so(() => {
		Di(r, i, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), fo(() => e.disconnect());
	});
}
function Ku(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			Ku(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) qu(e.el, t);
	else if (e.type === z) e.children.forEach((e) => Ku(e, t));
	else if (e.type === qc) {
		let { el: n, anchor: r } = e;
		for (; n && (qu(n, t), n !== r);) n = n.nextSibling;
	}
}
function qu(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = Ye(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[Wu] = r;
	}
}
var Ju = /(?:^|;)\s*display\s*:/;
function Yu(e, t, n) {
	let r = e.style, i = v(n), a = !1;
	if (n && !i) {
		if (t) {
			if (v(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] == null && Qu(r, t, "");
			}
			else for (let e in t) n[e] == null && Qu(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Qu(r, i, "") : nd(e, i, !v(t) && t ? t[i] : void 0, o) || Qu(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Wu];
			e && (n += ";" + e), r.cssText = n, a = Ju.test(n);
		}
	} else t && e.removeAttribute("style");
	zu in e && (e[zu] = a ? r.display : "", e[Bu] && (r.display = "none"));
}
var Xu = /[^\\];\s*$/, Zu = /\s*!important$/;
function Qu(e, t, n) {
	if (f(n)) n.forEach((n) => Qu(e, t, n));
	else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Xu.test(n) && U(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--")) Zu.test(n) ? e.setProperty(t, n.replace(Zu, ""), "important") : e.setProperty(t, n);
	else {
		let r = td(e, t);
		Zu.test(n) ? e.setProperty(ne(r), n.replace(Zu, ""), "important") : e[r] = n;
	}
}
var $u = [
	"Webkit",
	"Moz",
	"ms"
], ed = {};
function td(e, t) {
	let n = ed[t];
	if (n) return n;
	let r = A(t);
	if (r !== "filter" && r in e) return ed[t] = r;
	r = re(r);
	for (let n = 0; n < $u.length; n++) {
		let i = $u[n] + r;
		if (i in e) return ed[t] = i;
	}
	return t;
}
function nd(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && v(r) && n === r;
}
var rd = "http://www.w3.org/1999/xlink";
function id(e, t, n, r, i, a = Ne(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(rd, t.slice(6, t.length)) : e.setAttributeNS(rd, t, n) : n == null || a && !Fe(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : y(n) ? String(n) : n);
}
function ad(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? fu(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n == null && e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Fe(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch (e) {
		process.env.NODE_ENV !== "production" && !o && U(`Failed setting prop "${t}" on <${a.toLowerCase()}>: value ${n} is invalid.`, e);
	}
	o && e.removeAttribute(i || t);
}
function od(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function sd(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var cd = /* @__PURE__ */ Symbol("_vei");
function ld(e, t, n, r, i = null) {
	let a = e[cd] || (e[cd] = {}), o = a[t];
	if (r && o) o.value = process.env.NODE_ENV === "production" ? r : _d(r, t);
	else {
		let [n, s] = fd(t);
		r ? od(e, n, a[t] = gd(process.env.NODE_ENV === "production" ? r : _d(r, t), i), s) : o && (sd(e, n, o, s), a[t] = void 0);
	}
}
var ud = /(Once|Passive|Capture)$/, dd = /^on:?(?:Once|Passive|Capture)$/;
function fd(e) {
	let t, n;
	for (; (n = e.match(ud)) && !dd.test(e);) t || (t = {}), e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : ne(e.slice(2)), t];
}
var pd = 0, md = /* @__PURE__ */ Promise.resolve(), hd = () => pd || (md.then(() => pd = 0), pd = Date.now());
function gd(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (f(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && hr(e, t, 5, a);
			}
		} else hr(r, t, 5, [e]);
	};
	return n.value = e, n.attached = hd(), n;
}
function _d(e, t) {
	return _(e) || f(e) ? e : (U(`Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`), i);
}
var vd = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, yd = (e, t, n, r, i, a) => {
	let c = i === "svg";
	t === "class" ? Ru(e, r, c) : t === "style" ? Yu(e, n, r) : o(t) ? s(t) || ld(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : bd(e, t, r, c)) ? (ad(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && id(e, t, r, c, a, t !== "value")) : e._isVueCE && (xd(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !v(r))) ? ad(e, A(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), id(e, t, r, c));
};
function bd(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && vd(t) && _(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return vd(t) && v(n) ? !1 : t in e;
}
function xd(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = A(t);
	return Array.isArray(n) ? n.some((e) => A(e) === r) : Object.keys(n).some((e) => A(e) === r);
}
var Sd = {};
// @__NO_SIDE_EFFECTS__
function Cd(e, t, n) {
	let r = /* @__PURE__ */ oa(e, t);
	T(r) && (r = c({}, r, t));
	class i extends Ed {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var wd = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ Cd(e, t, yf)), Td = typeof HTMLElement < "u" ? HTMLElement : class {}, Ed = class e extends Td {
	constructor(e, t = {}, n = vf) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== vf ? this._root = this.shadowRoot : (process.env.NODE_ENV !== "production" && this.shadowRoot && U("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), e.shadowRoot === !1 ? this._root = this : (this.attachShadow(c({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot));
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t = t && (t.assignedSlot || t.parentNode || t.host);) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, Er(() => {
			this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !f(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = se(this._props[e])), (i || (i = /* @__PURE__ */ Object.create(null)))[A(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot ? this._applyStyles(r) : process.env.NODE_ENV !== "production" && r && U("Custom element style injection is not supported when using shadowRoot: false"), this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		process.env.NODE_ENV !== "production" && !e.name && (e.name = "VueElement"), this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) d(this, e) ? process.env.NODE_ENV !== "production" && U(`Exposed property "${e}" already exists on custom element.`) : Object.defineProperty(this, e, { get: () => Pn(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = f(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(A)) process.env.NODE_ENV !== "production" && e in Object.getPrototypeOf(this) && U(`Custom element prop "${e}" conflicts with an existing property on the element and will overwrite it.`), Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : Sd, r = A(e);
		t && this._numberProps && this._numberProps[r] && (n = se(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === Sd ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(ne(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(ne(e), t + "") : t || this.removeAttribute(ne(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), gf(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = V(this._def, c(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0, process.env.NODE_ENV !== "production" && (e.ceReload = (e) => {
				this._styles && (this._styles.forEach((e) => this._root.removeChild(e)), this._styles.length = 0), this._styleAnchors.delete(this._def), this._applyStyles(e), this._instance = null, this._update();
			});
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, T(t[0]) ? c({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), ne(e) !== e && t(ne(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			if (r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c)), process.env.NODE_ENV !== "production") {
				if (t) {
					if (t.__hmrId) {
						this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
						let e = this._childStyles.get(t.__hmrId);
						e || this._childStyles.set(t.__hmrId, e = []), e.push(c);
					}
				} else (this._styles || (this._styles = [])).push(c);
			}
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {
		if (process.env.NODE_ENV !== "production" && (this._styleChildren.delete(e), this._styleAnchors.delete(e), this._childStyles && e.__hmrId)) {
			let t = this._childStyles.get(e.__hmrId);
			t && (t.forEach((e) => this._root.removeChild(e)), t.length = 0);
		}
	}
};
function Dd(e) {
	let t = Dl();
	return t && t.ce || (process.env.NODE_ENV !== "production" && U(t ? `${e || "useHost"} can only be used in components defined via defineCustomElement.` : `${e || "useHost"} called without an active component instance.`), null);
}
function Od() {
	let e = process.env.NODE_ENV === "production" ? Dd() : Dd("useShadowRoot");
	return e && e.shadowRoot;
}
function kd(e = "$style") {
	{
		let t = Dl();
		if (!t) return process.env.NODE_ENV !== "production" && U("useCssModule must be called inside setup()"), n;
		let r = t.type.__cssModules;
		return r ? r[e] || (process.env.NODE_ENV !== "production" && U(`Current instance does not have CSS module named "${e}".`), n) : (process.env.NODE_ENV !== "production" && U("Current instance does not have CSS modules injected."), n);
	}
}
var Ad = /* @__PURE__ */ new WeakMap(), jd = /* @__PURE__ */ new WeakMap(), Md = /* @__PURE__ */ Symbol("_moveCb"), Nd = /* @__PURE__ */ Symbol("_enterCb"), Pd = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ c({}, Su, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = Dl(), r = qi(), i, a;
		return lo(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!zd(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach(Fd), i.forEach(Id);
			let r = i.filter(Ld);
			Lu(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				ku(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[Md] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[Md] = null, Au(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ P(e), s = Eu(o), c = o.tag || z;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[Bu] && (i.push(t), ia(t, ta(t, s, r, n)), Ad.set(t, Rd(t.el)));
			}
			a = t.default ? aa(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key == null ? process.env.NODE_ENV !== "production" && t.type !== Kc && U("<TransitionGroup> children must be keyed.") : ia(t, ta(t, s, r, n));
			}
			return V(c, null, a);
		};
	}
});
function Fd(e) {
	let t = e.el;
	t[Md] && t[Md](), t[Nd] && t[Nd]();
}
function Id(e) {
	jd.set(e, Rd(e.el));
}
function Ld(e) {
	let t = Ad.get(e), n = jd.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function Rd(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function zd(e, t, n) {
	let r = e.cloneNode(), i = e[bu];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = Pu(r);
	return a.removeChild(r), o;
}
var Bd = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return f(t) ? (e) => M(t, e) : t;
};
function Vd(e) {
	e.target.composing = !0;
}
function Hd(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Ud = /* @__PURE__ */ Symbol("_assign"), Wd = /* @__PURE__ */ Symbol("_initialValue");
function Gd(e, t, n) {
	return t && (e = e.trim()), n && (e = oe(e)), e;
}
var Kd = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Wd] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Wd] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Ud] = Bd(i);
		let a = r || i.props && i.props.type === "number";
		od(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Ud](Gd(e.value, n, a));
		}), (n || a) && od(e, "change", () => {
			e.value = Gd(e.value, n, a);
		}), t || (od(e, "compositionstart", Vd), od(e, "compositionend", Hd), od(e, "change", Hd));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t == null ? "" : t, a = e[Wd];
		delete e[Wd], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Ud](Gd(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Ud] = Bd(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? oe(e.value) : e.value, c = t == null ? "" : t;
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, qd = {
	deep: !0,
	created(e, t, n) {
		e[Ud] = Bd(n), od(e, "change", () => {
			let t = e._modelValue, n = $d(e), r = e.checked, i = e[Ud];
			if (f(t)) {
				let e = We(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (m(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(ef(e, r));
		});
	},
	mounted: Jd,
	beforeUpdate(e, t, n) {
		e[Ud] = Bd(n), Jd(e, t, n);
	}
};
function Jd(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (f(t)) i = We(t, r.props.value) > -1;
	else if (m(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = Ue(t, ef(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Yd = {
	created(e, { value: t }, n) {
		e.checked = Ue(t, n.props.value), e[Ud] = Bd(n), od(e, "change", () => {
			e[Ud]($d(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[Ud] = Bd(r), t !== n && (e.checked = Ue(t, r.props.value));
	}
}, Xd = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, od(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? oe($d(e)) : $d(e)), r = e.multiple, i = r ? m(e._modelValue) ? new Set(t) : t : t[0], a = e._pendingValue = [r, r ? f(i) ? t.slice() : t : i];
			try {
				e[Ud](i);
			} finally {
				Er(() => {
					e._pendingValue === a && (e._pendingValue = void 0);
				});
			}
		}), e[Ud] = Bd(r);
	},
	mounted(e, { value: t }) {
		Qd(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Ud] = Bd(n);
	},
	updated(e, { value: t }) {
		let n = e._pendingValue;
		e._pendingValue = void 0, (!n || n[0] !== e.multiple || !Zd(t, n[1], n[0])) && Qd(e, t);
	}
};
function Zd(e, t, n) {
	if (!n || f(e)) return Ue(e, t);
	if (m(e)) {
		if (e.size !== t.length) return !1;
		for (let n of t) if (!e.has(n)) return !1;
		return !0;
	}
	return !1;
}
function Qd(e, t) {
	let n = e.multiple, r = f(t);
	if (n && !r && !m(t)) {
		process.env.NODE_ENV !== "production" && U(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
		return;
	}
	for (let i = 0, a = e.options.length; i < a; i++) {
		let a = e.options[i], o = $d(a);
		if (n) {
			if (r) {
				let e = typeof o;
				a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : We(t, o) > -1;
			} else a.selected = t.has(o);
		} else if (Ue($d(a), t)) {
			e.selectedIndex !== i && (e.selectedIndex = i);
			return;
		}
	}
	!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function $d(e) {
	return "_value" in e ? e._value : e.value;
}
function ef(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var tf = {
	created(e, t, n) {
		rf(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		rf(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		rf(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		rf(e, t, n, r, "updated");
	}
};
function nf(e, t) {
	switch (e) {
		case "SELECT": return Xd;
		case "TEXTAREA": return Kd;
		default: switch (t) {
			case "checkbox": return qd;
			case "radio": return Yd;
			default: return Kd;
		}
	}
}
function rf(e, t, n, r, i) {
	let a = nf(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function af() {
	Kd.getSSRProps = ({ value: e }) => ({ value: e }), Yd.getSSRProps = ({ value: e }, t) => {
		if (t.props && Ue(t.props.value, e)) return { checked: !0 };
	}, qd.getSSRProps = ({ value: e }, t) => {
		if (f(e)) {
			if (t.props && We(e, t.props.value) > -1) return { checked: !0 };
		} else if (m(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, tf.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = nf(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var of = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], sf = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => of.some((n) => e[`${n}Key`] && !t.includes(n))
}, cf = (e, t) => {
	if (!e) return e;
	let n = e._withMods || (e._withMods = {}), r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = sf[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, lf = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, uf = (e, t) => {
	let n = e._withKeys || (e._withKeys = {}), r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = ne(n.key);
		if (t.some((e) => e === r || lf[e] === r)) return e(n);
	}));
}, df = /* @__PURE__ */ c({ patchProp: yd }, _u), ff, pf = !1;
function mf() {
	return ff || (ff = xc(df));
}
function hf() {
	return ff = pf ? ff : Sc(df), pf = !0, ff;
}
var gf = ((...e) => {
	mf().render(...e);
}), _f = ((...e) => {
	hf().hydrate(...e);
}), vf = ((...e) => {
	let t = mf().createApp(...e);
	process.env.NODE_ENV !== "production" && (xf(t), Sf(t));
	let { mount: n } = t;
	return t.mount = (e) => {
		let r = Cf(e);
		if (!r) return;
		let i = t._component;
		!_(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, bf(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), yf = ((...e) => {
	let t = hf().createApp(...e);
	process.env.NODE_ENV !== "production" && (xf(t), Sf(t));
	let { mount: n } = t;
	return t.mount = (e) => {
		let t = Cf(e);
		if (t) return n(t, !0, bf(t));
	}, t;
});
function bf(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function xf(e) {
	Object.defineProperty(e.config, "isNativeTag", {
		value: (e) => Oe(e) || ke(e) || Ae(e),
		writable: !1
	});
}
function Sf(e) {
	if (Hl()) {
		let t = e.config.isCustomElement;
		Object.defineProperty(e.config, "isCustomElement", {
			get() {
				return t;
			},
			set() {
				U("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
			}
		});
		let n = e.config.compilerOptions, r = "The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka \"full build\"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader's `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc";
		Object.defineProperty(e.config, "compilerOptions", {
			get() {
				return U(r), n;
			},
			set() {
				U(r);
			}
		});
	}
}
function Cf(e) {
	if (v(e)) {
		let t = document.querySelector(e);
		return process.env.NODE_ENV !== "production" && !t && U(`Failed to mount app: mount target selector "${e}" returned null.`), t;
	}
	return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && U("mounting on a ShadowRoot with `{mode: \"closed\"}` may lead to unpredictable bugs"), e;
}
var wf = !1, Tf = () => {
	wf || (wf = !0, af(), Uu());
}, Ef = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Fragment"), Df = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Teleport"), Of = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Suspense"), kf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "KeepAlive"), Af = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "BaseTransition"), jf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "openBlock"), Mf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createBlock"), Nf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createElementBlock"), Pf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createVNode"), Ff = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createElementVNode"), If = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createCommentVNode"), Lf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createTextVNode"), Rf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createStaticVNode"), zf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "resolveComponent"), Bf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "resolveDynamicComponent"), Vf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "resolveDirective"), Hf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "resolveFilter"), Uf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "withDirectives"), Wf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "renderList"), Gf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "renderSlot"), Kf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "createSlots"), qf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "toDisplayString"), Jf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "mergeProps"), Yf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "normalizeClass"), Xf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "normalizeStyle"), Zf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "normalizeProps"), Qf = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "guardReactiveProps"), $f = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "toHandlers"), ep = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "camelize"), tp = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "capitalize"), np = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "toHandlerKey"), rp = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "setBlockTracking"), ip = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "pushScopeId"), ap = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "popScopeId"), op = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "withCtx"), sp = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "unref"), cp = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "isRef"), lp = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "withMemo"), up = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "isMemoSame"), dp = {
	[Ef]: "Fragment",
	[Df]: "Teleport",
	[Of]: "Suspense",
	[kf]: "KeepAlive",
	[Af]: "BaseTransition",
	[jf]: "openBlock",
	[Mf]: "createBlock",
	[Nf]: "createElementBlock",
	[Pf]: "createVNode",
	[Ff]: "createElementVNode",
	[If]: "createCommentVNode",
	[Lf]: "createTextVNode",
	[Rf]: "createStaticVNode",
	[zf]: "resolveComponent",
	[Bf]: "resolveDynamicComponent",
	[Vf]: "resolveDirective",
	[Hf]: "resolveFilter",
	[Uf]: "withDirectives",
	[Wf]: "renderList",
	[Gf]: "renderSlot",
	[Kf]: "createSlots",
	[qf]: "toDisplayString",
	[Jf]: "mergeProps",
	[Yf]: "normalizeClass",
	[Xf]: "normalizeStyle",
	[Zf]: "normalizeProps",
	[Qf]: "guardReactiveProps",
	[$f]: "toHandlers",
	[ep]: "camelize",
	[tp]: "capitalize",
	[np]: "toHandlerKey",
	[rp]: "setBlockTracking",
	[ip]: "pushScopeId",
	[ap]: "popScopeId",
	[op]: "withCtx",
	[sp]: "unref",
	[cp]: "isRef",
	[lp]: "withMemo",
	[up]: "isMemoSame"
};
function fp(e) {
	Object.getOwnPropertySymbols(e).forEach((t) => {
		dp[t] = e[t];
	});
}
var pp = {
	start: {
		line: 1,
		column: 1,
		offset: 0
	},
	end: {
		line: 1,
		column: 1,
		offset: 0
	},
	source: ""
};
function mp(e, t = "") {
	return {
		type: 0,
		source: t,
		children: e,
		helpers: /* @__PURE__ */ new Set(),
		components: [],
		directives: [],
		hoists: [],
		imports: [],
		cached: [],
		temps: 0,
		codegenNode: void 0,
		loc: pp
	};
}
function hp(e, t, n, r, i, a, o, s = !1, c = !1, l = !1, u = pp) {
	return e && (s ? (e.helper(jf), e.helper(Tp(e.inSSR, l))) : e.helper(wp(e.inSSR, l)), o && e.helper(Uf)), {
		type: 13,
		tag: t,
		props: n,
		children: r,
		patchFlag: i,
		dynamicProps: a,
		directives: o,
		isBlock: s,
		disableTracking: c,
		isComponent: l,
		loc: u
	};
}
function gp(e, t = pp) {
	return {
		type: 17,
		loc: t,
		elements: e
	};
}
function _p(e, t = pp) {
	return {
		type: 15,
		loc: t,
		properties: e
	};
}
function W(e, t) {
	return {
		type: 16,
		loc: pp,
		key: v(e) ? G(e, !0) : e,
		value: t
	};
}
function G(e, t = !1, n = pp, r = 0) {
	return {
		type: 4,
		loc: n,
		content: e,
		isStatic: t,
		constType: t ? 3 : r
	};
}
function vp(e, t = pp) {
	return {
		type: 8,
		loc: t,
		children: e
	};
}
function yp(e, t = [], n = pp) {
	return {
		type: 14,
		loc: n,
		callee: e,
		arguments: t
	};
}
function bp(e, t = void 0, n = !1, r = !1, i = pp) {
	return {
		type: 18,
		params: e,
		returns: t,
		newline: n,
		isSlot: r,
		loc: i
	};
}
function xp(e, t, n, r = !0) {
	return {
		type: 19,
		test: e,
		consequent: t,
		alternate: n,
		newline: r,
		loc: pp
	};
}
function Sp(e, t, n = !1, r = !1) {
	return {
		type: 20,
		index: e,
		value: t,
		needPauseTracking: n,
		inVOnce: r,
		needArraySpread: !1,
		loc: pp
	};
}
function Cp(e) {
	return {
		type: 21,
		body: e,
		loc: pp
	};
}
function wp(e, t) {
	return e || t ? Pf : Ff;
}
function Tp(e, t) {
	return e || t ? Mf : Nf;
}
function Ep(e, { helper: t, removeHelper: n, inSSR: r }) {
	e.isBlock || (e.isBlock = !0, n(wp(r, e.isComponent)), t(jf), t(Tp(r, e.isComponent)));
}
var Dp = new Uint8Array([123, 123]), Op = new Uint8Array([125, 125]);
function kp(e) {
	return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Ap(e) {
	return e === 32 || e === 10 || e === 9 || e === 12 || e === 13;
}
function jp(e) {
	return e === 47 || e === 62 || Ap(e);
}
function Mp(e) {
	let t = new Uint8Array(e.length);
	for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
	return t;
}
var Np = {
	Cdata: new Uint8Array([
		67,
		68,
		65,
		84,
		65,
		91
	]),
	CdataEnd: new Uint8Array([
		93,
		93,
		62
	]),
	CommentEnd: new Uint8Array([
		45,
		45,
		62
	]),
	ScriptEnd: new Uint8Array([
		60,
		47,
		115,
		99,
		114,
		105,
		112,
		116
	]),
	StyleEnd: new Uint8Array([
		60,
		47,
		115,
		116,
		121,
		108,
		101
	]),
	TitleEnd: new Uint8Array([
		60,
		47,
		116,
		105,
		116,
		108,
		101
	]),
	TextareaEnd: new Uint8Array([
		60,
		47,
		116,
		101,
		120,
		116,
		97,
		114,
		101,
		97
	])
}, Pp = class {
	constructor(e, t) {
		this.stack = e, this.cbs = t, this.state = 1, this.buffer = "", this.sectionStart = 0, this.index = 0, this.entityStart = 0, this.baseState = 1, this.inRCDATA = !1, this.inXML = !1, this.inVPre = !1, this.newlines = [], this.mode = 0, this.delimiterOpen = Dp, this.delimiterClose = Op, this.delimiterIndex = -1, this.currentSequence = void 0, this.sequenceIndex = 0;
	}
	get inSFCRoot() {
		return this.mode === 2 && this.stack.length === 0;
	}
	reset() {
		this.state = 1, this.mode = 0, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = 1, this.inRCDATA = !1, this.currentSequence = void 0, this.newlines.length = 0, this.delimiterOpen = Dp, this.delimiterClose = Op;
	}
	getPos(e) {
		let t = 1, n = e + 1, r = this.newlines.length, i = -1;
		if (r > 100) {
			let t = -1, n = r;
			for (; t + 1 < n;) {
				let r = t + n >>> 1;
				this.newlines[r] < e ? t = r : n = r;
			}
			i = t;
		} else for (let t = r - 1; t >= 0; t--) if (e > this.newlines[t]) {
			i = t;
			break;
		}
		return i >= 0 && (t = i + 2, n = e - this.newlines[i]), {
			column: n,
			line: t,
			offset: e
		};
	}
	peek() {
		return this.buffer.charCodeAt(this.index + 1);
	}
	stateText(e) {
		e === 60 ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = 5, this.sectionStart = this.index) : !this.inVPre && e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e));
	}
	stateInterpolationOpen(e) {
		if (e === this.delimiterOpen[this.delimiterIndex]) {
			if (this.delimiterIndex === this.delimiterOpen.length - 1) {
				let e = this.index + 1 - this.delimiterOpen.length;
				e > this.sectionStart && this.cbs.ontext(this.sectionStart, e), this.state = 3, this.sectionStart = e;
			} else this.delimiterIndex++;
		} else this.inRCDATA ? (this.state = 32, this.stateInRCDATA(e)) : (this.state = 1, this.stateText(e));
	}
	stateInterpolation(e) {
		e === this.delimiterClose[0] && (this.state = 4, this.delimiterIndex = 0, this.stateInterpolationClose(e));
	}
	stateInterpolationClose(e) {
		e === this.delimiterClose[this.delimiterIndex] ? this.delimiterIndex === this.delimiterClose.length - 1 ? (this.cbs.oninterpolation(this.sectionStart, this.index + 1), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : this.delimiterIndex++ : (this.state = 3, this.stateInterpolation(e));
	}
	stateSpecialStartSequence(e) {
		let t = this.sequenceIndex === this.currentSequence.length;
		if (!(t ? jp(e) : (e | 32) === this.currentSequence[this.sequenceIndex])) this.inRCDATA = !1;
		else if (!t) {
			this.sequenceIndex++;
			return;
		}
		this.sequenceIndex = 0, this.state = 6, this.stateInTagName(e);
	}
	stateInRCDATA(e) {
		if (this.sequenceIndex === this.currentSequence.length) {
			if (e === 62 || Ap(e)) {
				let t = this.index - this.currentSequence.length;
				if (this.sectionStart < t) {
					let e = this.index;
					this.index = t, this.cbs.ontext(this.sectionStart, t), this.index = e;
				}
				this.sectionStart = t + 2, this.stateInClosingTagName(e), this.inRCDATA = !1;
				return;
			}
			this.sequenceIndex = 0;
		}
		(e | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === Np.TitleEnd || this.currentSequence === Np.TextareaEnd && !this.inSFCRoot ? !this.inVPre && e === this.delimiterOpen[0] && (this.state = 2, this.delimiterIndex = 0, this.stateInterpolationOpen(e)) : this.fastForwardTo(60) && (this.sequenceIndex = 1) : this.sequenceIndex = Number(e === 60);
	}
	stateCDATASequence(e) {
		e === Np.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === Np.Cdata.length && (this.state = 28, this.currentSequence = Np.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = 23, this.stateInDeclaration(e));
	}
	fastForwardTo(e) {
		for (; ++this.index < this.buffer.length;) {
			let t = this.buffer.charCodeAt(this.index);
			if (t === 10 && this.newlines.push(this.index), t === e) return !0;
		}
		return this.index = this.buffer.length - 1, !1;
	}
	stateInCommentLike(e) {
		e === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === Np.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index - 2) : this.cbs.oncomment(this.sectionStart, this.index - 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = 1) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : e !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
	}
	startSpecial(e, t) {
		this.enterRCDATA(e, t), this.state = 31;
	}
	enterRCDATA(e, t) {
		this.inRCDATA = !0, this.currentSequence = e, this.sequenceIndex = t;
	}
	stateBeforeTagName(e) {
		e === 33 ? (this.state = 22, this.sectionStart = this.index + 1) : e === 63 ? (this.state = 24, this.sectionStart = this.index + 1) : kp(e) ? (this.sectionStart = this.index, this.state = this.mode === 0 ? 6 : this.inSFCRoot ? 34 : this.inXML ? 6 : e === 116 ? 30 : e === 115 ? 29 : 6) : e === 47 ? this.state = 8 : (this.state = 1, this.stateText(e));
	}
	stateInTagName(e) {
		jp(e) && this.handleTagName(e);
	}
	stateInSFCRootTagName(e) {
		if (jp(e)) {
			let t = this.buffer.slice(this.sectionStart, this.index);
			t !== "template" && this.enterRCDATA(Mp("</" + t), 0), this.handleTagName(e);
		}
	}
	handleTagName(e) {
		this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e);
	}
	stateBeforeClosingTagName(e) {
		Ap(e) || (e === 62 ? (process.env.NODE_ENV !== "production" && this.cbs.onerr(14, this.index), this.state = 1, this.sectionStart = this.index + 1) : (this.state = kp(e) ? 9 : 27, this.sectionStart = this.index));
	}
	stateInClosingTagName(e) {
		(e === 62 || Ap(e)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = 10, this.stateAfterClosingTagName(e));
	}
	stateAfterClosingTagName(e) {
		e === 62 && (this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeAttrName(e) {
		e === 62 ? (this.cbs.onopentagend(this.index), this.state = this.inRCDATA ? 32 : 1, this.sectionStart = this.index + 1) : e === 47 ? (this.state = 7, process.env.NODE_ENV !== "production" && this.peek() !== 62 && this.cbs.onerr(22, this.index)) : e === 60 && this.peek() === 47 ? (this.cbs.onopentagend(this.index), this.state = 5, this.sectionStart = this.index) : Ap(e) || (process.env.NODE_ENV !== "production" && e === 61 && this.cbs.onerr(19, this.index), this.handleAttrStart(e));
	}
	handleAttrStart(e) {
		e === 118 && this.peek() === 45 ? (this.state = 13, this.sectionStart = this.index) : e === 46 || e === 58 || e === 64 || e === 35 ? (this.cbs.ondirname(this.index, this.index + 1), this.state = 14, this.sectionStart = this.index + 1) : (this.state = 12, this.sectionStart = this.index);
	}
	stateInSelfClosingTag(e) {
		e === 62 ? (this.cbs.onselfclosingtag(this.index), this.state = 1, this.sectionStart = this.index + 1, this.inRCDATA = !1) : Ap(e) || (this.state = 11, this.stateBeforeAttrName(e));
	}
	stateInAttrName(e) {
		e === 61 || jp(e) ? (this.cbs.onattribname(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : process.env.NODE_ENV !== "production" && (e === 34 || e === 39 || e === 60) && this.cbs.onerr(17, this.index);
	}
	stateInDirName(e) {
		e === 61 || jp(e) ? (this.cbs.ondirname(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 58 ? (this.cbs.ondirname(this.sectionStart, this.index), this.state = 14, this.sectionStart = this.index + 1) : e === 46 && (this.cbs.ondirname(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
	}
	stateInDirArg(e) {
		e === 61 || jp(e) ? (this.cbs.ondirarg(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 91 ? this.state = 15 : e === 46 && (this.cbs.ondirarg(this.sectionStart, this.index), this.state = 16, this.sectionStart = this.index + 1);
	}
	stateInDynamicDirArg(e) {
		e === 93 ? this.state = 14 : (e === 61 || jp(e)) && (this.cbs.ondirarg(this.sectionStart, this.index + 1), this.handleAttrNameEnd(e), process.env.NODE_ENV !== "production" && this.cbs.onerr(27, this.index));
	}
	stateInDirModifier(e) {
		e === 61 || jp(e) ? (this.cbs.ondirmodifier(this.sectionStart, this.index), this.handleAttrNameEnd(e)) : e === 46 && (this.cbs.ondirmodifier(this.sectionStart, this.index), this.sectionStart = this.index + 1);
	}
	handleAttrNameEnd(e) {
		this.sectionStart = this.index, this.state = 17, this.cbs.onattribnameend(this.index), this.stateAfterAttrName(e);
	}
	stateAfterAttrName(e) {
		e === 61 ? this.state = 18 : e === 47 || e === 62 ? (this.cbs.onattribend(0, this.sectionStart), this.sectionStart = -1, this.state = 11, this.stateBeforeAttrName(e)) : Ap(e) || (this.cbs.onattribend(0, this.sectionStart), this.handleAttrStart(e));
	}
	stateBeforeAttrValue(e) {
		e === 34 ? (this.state = 19, this.sectionStart = this.index + 1) : e === 39 ? (this.state = 20, this.sectionStart = this.index + 1) : Ap(e) || (this.sectionStart = this.index, this.state = 21, this.stateInAttrValueNoQuotes(e));
	}
	handleInAttrValue(e, t) {
		(e === t || this.fastForwardTo(t)) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(t === 34 ? 3 : 2, this.index + 1), this.state = 11);
	}
	stateInAttrValueDoubleQuotes(e) {
		this.handleInAttrValue(e, 34);
	}
	stateInAttrValueSingleQuotes(e) {
		this.handleInAttrValue(e, 39);
	}
	stateInAttrValueNoQuotes(e) {
		Ap(e) || e === 62 ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(1, this.index), this.state = 11, this.stateBeforeAttrName(e)) : (process.env.NODE_ENV !== "production" && e === 34 || e === 39 || e === 60 || e === 61 || e === 96) && this.cbs.onerr(18, this.index);
	}
	stateBeforeDeclaration(e) {
		e === 91 ? (this.state = 26, this.sequenceIndex = 0) : this.state = e === 45 ? 25 : 23;
	}
	stateInDeclaration(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.state = 1, this.sectionStart = this.index + 1);
	}
	stateInProcessingInstruction(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeComment(e) {
		e === 45 ? (this.state = 28, this.currentSequence = Np.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = 23;
	}
	stateInSpecialComment(e) {
		(e === 62 || this.fastForwardTo(62)) && (this.cbs.oncomment(this.sectionStart, this.index), this.state = 1, this.sectionStart = this.index + 1);
	}
	stateBeforeSpecialS(e) {
		e === Np.ScriptEnd[3] ? this.startSpecial(Np.ScriptEnd, 4) : e === Np.StyleEnd[3] ? this.startSpecial(Np.StyleEnd, 4) : (this.state = 6, this.stateInTagName(e));
	}
	stateBeforeSpecialT(e) {
		e === Np.TitleEnd[3] ? this.startSpecial(Np.TitleEnd, 4) : e === Np.TextareaEnd[3] ? this.startSpecial(Np.TextareaEnd, 4) : (this.state = 6, this.stateInTagName(e));
	}
	startEntity() {}
	stateInEntity() {}
	parse(e) {
		for (this.buffer = e; this.index < this.buffer.length;) {
			let e = this.buffer.charCodeAt(this.index);
			switch (e === 10 && this.state !== 33 && this.newlines.push(this.index), this.state) {
				case 1:
					this.stateText(e);
					break;
				case 2:
					this.stateInterpolationOpen(e);
					break;
				case 3:
					this.stateInterpolation(e);
					break;
				case 4:
					this.stateInterpolationClose(e);
					break;
				case 31:
					this.stateSpecialStartSequence(e);
					break;
				case 32:
					this.stateInRCDATA(e);
					break;
				case 26:
					this.stateCDATASequence(e);
					break;
				case 19:
					this.stateInAttrValueDoubleQuotes(e);
					break;
				case 12:
					this.stateInAttrName(e);
					break;
				case 13:
					this.stateInDirName(e);
					break;
				case 14:
					this.stateInDirArg(e);
					break;
				case 15:
					this.stateInDynamicDirArg(e);
					break;
				case 16:
					this.stateInDirModifier(e);
					break;
				case 28:
					this.stateInCommentLike(e);
					break;
				case 27:
					this.stateInSpecialComment(e);
					break;
				case 11:
					this.stateBeforeAttrName(e);
					break;
				case 6:
					this.stateInTagName(e);
					break;
				case 34:
					this.stateInSFCRootTagName(e);
					break;
				case 9:
					this.stateInClosingTagName(e);
					break;
				case 5:
					this.stateBeforeTagName(e);
					break;
				case 17:
					this.stateAfterAttrName(e);
					break;
				case 20:
					this.stateInAttrValueSingleQuotes(e);
					break;
				case 18:
					this.stateBeforeAttrValue(e);
					break;
				case 8:
					this.stateBeforeClosingTagName(e);
					break;
				case 10:
					this.stateAfterClosingTagName(e);
					break;
				case 29:
					this.stateBeforeSpecialS(e);
					break;
				case 30:
					this.stateBeforeSpecialT(e);
					break;
				case 21:
					this.stateInAttrValueNoQuotes(e);
					break;
				case 7:
					this.stateInSelfClosingTag(e);
					break;
				case 23:
					this.stateInDeclaration(e);
					break;
				case 22:
					this.stateBeforeDeclaration(e);
					break;
				case 25:
					this.stateBeforeComment(e);
					break;
				case 24:
					this.stateInProcessingInstruction(e);
					break;
				case 33: this.stateInEntity();
			}
			this.index++;
		}
		this.cleanup(), this.finish();
	}
	cleanup() {
		this.sectionStart !== this.index && (this.state === 1 || this.state === 32 && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === 19 || this.state === 20 || this.state === 21) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
	}
	finish() {
		this.handleTrailingData(), this.cbs.onend();
	}
	handleTrailingData() {
		let e = this.buffer.length;
		this.sectionStart >= e || (this.state === 28 ? this.currentSequence === Np.CdataEnd ? this.cbs.oncdata(this.sectionStart, e) : this.cbs.oncomment(this.sectionStart, e) : this.state === 6 || this.state === 11 || this.state === 18 || this.state === 17 || this.state === 12 || this.state === 13 || this.state === 14 || this.state === 15 || this.state === 16 || this.state === 20 || this.state === 19 || this.state === 21 || this.state === 9 || this.cbs.ontext(this.sectionStart, e));
	}
	emitCodePoint(e, t) {}
}, Fp = {
	COMPILER_IS_ON_ELEMENT: {
		message: "Platform-native elements with \"is\" prop will no longer be treated as components in Vue 3 unless the \"is\" value is explicitly prefixed with \"vue:\".",
		link: "https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"
	},
	COMPILER_V_BIND_SYNC: {
		message: (e) => `.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,
		link: "https://v3-migration.vuejs.org/breaking-changes/v-model.html"
	},
	COMPILER_V_BIND_OBJECT_ORDER: {
		message: "v-bind=\"obj\" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.",
		link: "https://v3-migration.vuejs.org/breaking-changes/v-bind.html"
	},
	COMPILER_V_ON_NATIVE: {
		message: ".native modifier for v-on has been removed as is no longer necessary.",
		link: "https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"
	},
	COMPILER_V_IF_V_FOR_PRECEDENCE: {
		message: "v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",
		link: "https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"
	},
	COMPILER_NATIVE_TEMPLATE: { message: "<template> with no special directives will render as a native template element instead of its inner content in Vue 3." },
	COMPILER_INLINE_TEMPLATE: {
		message: "\"inline-template\" has been removed in Vue 3.",
		link: "https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"
	},
	COMPILER_FILTERS: {
		message: "filters have been removed in Vue 3. The \"|\" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.",
		link: "https://v3-migration.vuejs.org/breaking-changes/filters.html"
	}
};
function Ip(e, { compatConfig: t }) {
	let n = t && t[e];
	return e === "MODE" ? n || 3 : n;
}
function Lp(e, t) {
	let n = Ip("MODE", t), r = Ip(e, t);
	return n === 3 ? r === !0 : r !== !1;
}
function Rp(e, t, n, ...r) {
	let i = Lp(e, t);
	return process.env.NODE_ENV !== "production" && i && zp(e, t, n, ...r), i;
}
function zp(e, t, n, ...r) {
	if (Ip(e, t) === "suppress-warning") return;
	let { message: i, link: a } = Fp[e], o = `(deprecation ${e}) ${typeof i == "function" ? i(...r) : i}${a ? `
  Details: ${a}` : ""}`, s = SyntaxError(o);
	s.code = e, n && (s.loc = n), t.onWarn(s);
}
function Bp(e) {
	throw e;
}
function Vp(e) {
	process.env.NODE_ENV !== "production" && console.warn(`[Vue warn] ${e.message}`);
}
function K(e, t, n, r) {
	let i = process.env.NODE_ENV === "production" ? `https://vuejs.org/error-reference/#compiler-${e}` : (n || Hp)[e] + (r || ""), a = SyntaxError(String(i));
	return a.code = e, a.loc = t, a;
}
var Hp = {
	0: "Illegal comment.",
	1: "CDATA section is allowed only in XML context.",
	2: "Duplicate attribute.",
	3: "End tag cannot have attributes.",
	4: "Illegal '/' in tags.",
	5: "Unexpected EOF in tag.",
	6: "Unexpected EOF in CDATA section.",
	7: "Unexpected EOF in comment.",
	8: "Unexpected EOF in script.",
	9: "Unexpected EOF in tag.",
	10: "Incorrectly closed comment.",
	11: "Incorrectly opened comment.",
	12: "Illegal tag name. Use '&lt;' to print '<'.",
	13: "Attribute value was expected.",
	14: "End tag name was expected.",
	15: "Whitespace was expected.",
	16: "Unexpected '<!--' in comment.",
	17: "Attribute name cannot contain U+0022 (\"), U+0027 ('), and U+003C (<).",
	18: "Unquoted attribute value cannot contain U+0022 (\"), U+0027 ('), U+003C (<), U+003D (=), and U+0060 (`).",
	19: "Attribute name cannot start with '='.",
	21: "'<?' is allowed only in XML context.",
	20: "Unexpected null character.",
	22: "Illegal '/' in tags.",
	23: "Invalid end tag.",
	24: "Element is missing end tag.",
	25: "Interpolation end sign was not found.",
	27: "End bracket for dynamic directive argument was not found. Note that dynamic directive argument cannot contain spaces.",
	26: "Legal directive name was expected.",
	28: "v-if/v-else-if is missing expression.",
	29: "v-if/else branches must use unique keys.",
	30: "v-else/v-else-if has no adjacent v-if or v-else-if.",
	31: "v-for is missing expression.",
	32: "v-for has invalid expression.",
	33: "<template v-for> key should be placed on the <template> tag.",
	34: "v-bind is missing expression.",
	53: "v-bind with same-name shorthand only allows static argument.",
	35: "v-on is missing expression.",
	36: "Unexpected custom directive on <slot> outlet.",
	37: "Mixed v-slot usage on both the component and nested <template>. When there are multiple named slots, all slots should use <template> syntax to avoid scope ambiguity.",
	38: "Duplicate slot names found. ",
	39: "Extraneous children found when component already has explicitly named default slot. These children will be ignored.",
	40: "v-slot can only be used on components or <template> tags.",
	41: "v-model is missing expression.",
	42: "v-model value must be a valid JavaScript member expression.",
	43: "v-model cannot be used on v-for or v-slot scope variables because they are not writable.",
	44: "v-model cannot be used on a prop, because local prop bindings are not writable.\nUse a v-bind binding combined with a v-on listener that emits update:x event instead.",
	45: "v-model cannot be used on a const binding because it is not writable.",
	46: "Error parsing JavaScript expression: ",
	47: "<KeepAlive> expects exactly one child component.",
	52: "@vnode-* hooks in templates are no longer supported. Use the vue: prefix instead. For example, @vnode-mounted should be changed to @vue:mounted. @vnode-* hooks support has been removed in 3.4.",
	48: "\"prefixIdentifiers\" option is not supported in this build of compiler.",
	49: "ES module mode is not supported in this build of compiler.",
	50: "\"cacheHandlers\" option is only supported when the \"prefixIdentifiers\" option is enabled.",
	51: "\"scopeId\" option is only supported in module mode.",
	54: ""
}, Up = (e) => e.type === 4 && e.isStatic;
function Wp(e) {
	switch (e) {
		case "Teleport":
		case "teleport": return Df;
		case "Suspense":
		case "suspense": return Of;
		case "KeepAlive":
		case "keep-alive": return kf;
		case "BaseTransition":
		case "base-transition": return Af;
	}
}
var Gp = /^$|^\d|[^\$\w\xA0-\uFFFF]/, Kp = (e) => !Gp.test(e), qp = /[A-Za-z_$\xA0-\uFFFF]/, Jp = /[\.\?\w$\xA0-\uFFFF]/, Yp = /\s+[.[]\s*|\s*[.[]\s+/g, Xp = (e) => e.type === 4 ? e.content : e.loc.source, Zp = (e) => {
	let t = Xp(e).trim().replace(Yp, (e) => e.trim()), n = 0, r = [], i = 0, a = 0, o = null;
	for (let e = 0; e < t.length; e++) {
		let s = t.charAt(e);
		switch (n) {
			case 0:
				if (s === "[") r.push(n), n = 1, i++;
				else if (s === "(") r.push(n), n = 2, a++;
				else if (!(e === 0 ? qp : Jp).test(s)) return !1;
				break;
			case 1:
				s === "'" || s === "\"" || s === "`" ? (r.push(n), n = 3, o = s) : s === "[" ? i++ : s === "]" && (--i || (n = r.pop()));
				break;
			case 2:
				if (s === "'" || s === "\"" || s === "`") r.push(n), n = 3, o = s;
				else if (s === "(") a++;
				else if (s === ")") {
					if (e === t.length - 1) return !1;
					--a || (n = r.pop());
				}
				break;
			case 3: s === o && (n = r.pop(), o = null);
		}
	}
	return !i && !a;
}, Qp = /^\s*(?:async\s*)?(?:\([^)]*?\)|[\w$_]+)\s*(?::[^=]+)?=>|^\s*(?:async\s+)?function(?:\s+[\w$]+)?\s*\(/, $p = (e) => Qp.test(Xp(e));
function em(e, t) {
	if (!e) throw Error(t || "unexpected compiler condition");
}
function tm(e, t, n = !1) {
	for (let r = 0; r < e.props.length; r++) {
		let i = e.props[r];
		if (i.type === 7 && (n || i.exp) && (v(t) ? i.name === t : t.test(i.name))) return i;
	}
}
function nm(e, t, n = !1, r = !1) {
	for (let i = 0; i < e.props.length; i++) {
		let a = e.props[i];
		if (a.type === 6) {
			if (n) continue;
			if (a.name === t && (a.value || r)) return a;
		} else if (a.name === "bind" && (a.exp || r) && rm(a.arg, t)) return a;
	}
}
function rm(e, t) {
	return !!(e && Up(e) && e.content === t);
}
function im(e) {
	return e.props.some((e) => e.type === 7 && e.name === "bind" && (!e.arg || e.arg.type !== 4 || !e.arg.isStatic));
}
function am(e) {
	return e.type === 5 || e.type === 2;
}
function om(e) {
	return e.type === 7 && e.name === "pre";
}
function sm(e) {
	return e.type === 7 && e.name === "slot";
}
function cm(e) {
	return e.type === 1 && e.tagType === 3;
}
function lm(e) {
	return e.type === 1 && e.tagType === 2;
}
var um = /* @__PURE__ */ new Set([Zf, Qf]);
function dm(e, t = []) {
	if (e && !v(e) && e.type === 14) {
		let n = e.callee;
		if (!v(n) && um.has(n)) return dm(e.arguments[0], t.concat(e));
	}
	return [e, t];
}
function fm(e, t, n) {
	if (e.type !== 13 && pm(e, t)) return;
	let r, i = e.type === 13 ? e.props : e.arguments[2], a = [], o;
	if (i && !v(i) && i.type === 14) {
		let e = dm(i);
		i = e[0], a = e[1], o = a[a.length - 1];
	}
	if (i == null || v(i)) r = _p([t]);
	else if (i.type === 14) {
		let e = i.arguments[0];
		!v(e) && e.type === 15 ? mm(t, e) || e.properties.unshift(t) : i.callee === $f ? r = yp(n.helper(Jf), [_p([t]), i]) : i.arguments.unshift(_p([t])), !r && (r = i);
	} else i.type === 15 ? (mm(t, i) || i.properties.unshift(t), r = i) : (r = yp(n.helper(Jf), [_p([t]), i]), o && o.callee === Qf && (o = a[a.length - 2]));
	e.type === 13 ? o ? o.arguments[0] = r : e.props = r : o ? o.arguments[0] = r : e.arguments[2] = r;
}
function pm(e, t) {
	var n, r, i;
	if (t.key.type !== 4 || t.key.content !== "key") return !1;
	let a = e.arguments[2];
	if (a && !v(a)) {
		let [e] = dm(a);
		if (e && !v(e) && e.type === 15 && mm(t, e)) return !0;
	}
	return (n = e.arguments)[2] || (n[2] = "{}"), (r = e.arguments)[3] || (r[3] = "undefined"), (i = e.arguments)[4] || (i[4] = "undefined"), e.arguments[5] = t.value, !0;
}
function mm(e, t) {
	let n = !1;
	if (e.key.type === 4) {
		let r = e.key.content;
		n = t.properties.some((e) => e.key.type === 4 && e.key.content === r);
	}
	return n;
}
function hm(e, t) {
	return `_${t}_${e.replace(/[^\w]/g, (t, n) => t === "-" ? "_" : e.charCodeAt(n).toString())}`;
}
function gm(e) {
	return e.type === 14 && e.callee === lp ? e.arguments[1].returns : e;
}
var _m = /([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/;
function vm(e) {
	for (let t = 0; t < e.length; t++) if (!Ap(e.charCodeAt(t))) return !1;
	return !0;
}
function ym(e) {
	return e.type === 2 && vm(e.content) || e.type === 12 && ym(e.content);
}
function bm(e) {
	return e.type === 3 || ym(e);
}
var xm = {
	parseMode: "base",
	ns: 0,
	delimiters: ["{{", "}}"],
	getNamespace: () => 0,
	isVoidTag: a,
	isPreTag: a,
	isIgnoreNewlineTag: a,
	isCustomElement: a,
	onError: Bp,
	onWarn: Vp,
	comments: process.env.NODE_ENV !== "production",
	prefixIdentifiers: !1
}, q = xm, Sm = null, Cm = "", wm = null, J = null, Tm = "", Em = -1, Dm = -1, Om = 0, km = !1, Am = null, Y = [], X = new Pp(Y, {
	onerr: $m,
	ontext(e, t) {
		Im(Pm(e, t), e, t);
	},
	ontextentity(e, t, n) {
		Im(e, t, n);
	},
	oninterpolation(e, t) {
		if (km) return Im(Pm(e, t), e, t);
		let n = e + X.delimiterOpen.length, r = t - X.delimiterClose.length;
		for (; Ap(Cm.charCodeAt(n));) n++;
		for (; Ap(Cm.charCodeAt(r - 1));) r--;
		let i = Pm(n, r);
		i.includes("&") && (i = q.decodeEntities(i, !1)), Jm({
			type: 5,
			content: Qm(i, !1, Z(n, r)),
			loc: Z(e, t)
		});
	},
	onopentagname(e, t) {
		let n = Pm(e, t);
		wm = {
			type: 1,
			tag: n,
			ns: q.getNamespace(n, Y[0], q.ns),
			tagType: 0,
			props: [],
			children: [],
			loc: Z(e - 1, t),
			codegenNode: void 0
		};
	},
	onopentagend(e) {
		Fm(e);
	},
	onclosetag(e, t) {
		let n = Pm(e, t);
		if (!q.isVoidTag(n)) {
			let r = !1;
			for (let e = 0; e < Y.length; e++) if (Y[e].tag.toLowerCase() === n.toLowerCase()) {
				r = !0, e > 0 && $m(24, Y[0].loc.start.offset);
				for (let n = 0; n <= e; n++) Lm(Y.shift(), t, n < e);
				break;
			}
			r || $m(23, zm(e, 60));
		}
	},
	onselfclosingtag(e) {
		let t = wm.tag;
		wm.isSelfClosing = !0, Fm(e), Y[0] && Y[0].tag === t && Lm(Y.shift(), e);
	},
	onattribname(e, t) {
		J = {
			type: 6,
			name: Pm(e, t),
			nameLoc: Z(e, t),
			value: void 0,
			loc: Z(e)
		};
	},
	ondirname(e, t) {
		let n = Pm(e, t), r = n === "." || n === ":" ? "bind" : n === "@" ? "on" : n === "#" ? "slot" : n.slice(2);
		if (!km && r === "" && $m(26, e), km || r === "") J = {
			type: 6,
			name: n,
			nameLoc: Z(e, t),
			value: void 0,
			loc: Z(e)
		};
		else if (J = {
			type: 7,
			name: r,
			rawName: n,
			exp: void 0,
			arg: void 0,
			modifiers: n === "." ? [G("prop")] : [],
			loc: Z(e)
		}, r === "pre") {
			km = X.inVPre = !0, Am = wm;
			let e = wm.props;
			for (let t = 0; t < e.length; t++) e[t].type === 7 && (e[t] = Zm(e[t]));
		}
	},
	ondirarg(e, t) {
		if (e === t) return;
		let n = Pm(e, t);
		if (km && !om(J)) J.name += n, Xm(J.nameLoc, t);
		else {
			let r = n[0] !== "[";
			J.arg = Qm(r ? n : n.slice(1, -1), r, Z(e, t), r ? 3 : 0);
		}
	},
	ondirmodifier(e, t) {
		let n = Pm(e, t);
		if (km && !om(J)) J.name += "." + n, Xm(J.nameLoc, t);
		else if (J.name === "slot") {
			let e = J.arg;
			e && (e.content += "." + n, Xm(e.loc, t));
		} else {
			let r = G(n, !0, Z(e, t));
			J.modifiers.push(r);
		}
	},
	onattribdata(e, t) {
		Tm += Pm(e, t), Em < 0 && (Em = e), Dm = t;
	},
	onattribentity(e, t, n) {
		Tm += e, Em < 0 && (Em = t), Dm = n;
	},
	onattribnameend(e) {
		let t = J.loc.start.offset, n = Pm(t, e);
		J.type === 7 && (J.rawName = n), wm.props.some((e) => (e.type === 7 ? e.rawName : e.name) === n) && $m(2, t);
	},
	onattribend(e, t) {
		if (wm && J) {
			if (Xm(J.loc, t), e !== 0) {
				if (Tm.includes("&") && (Tm = q.decodeEntities(Tm, !0)), J.type === 6) J.name === "class" && (Tm = qm(Tm).trim()), e === 1 && !Tm && $m(13, t), J.value = {
					type: 2,
					content: Tm,
					loc: e === 1 ? Z(Em, Dm) : Z(Em - 1, Dm + 1)
				}, X.inSFCRoot && wm.tag === "template" && J.name === "lang" && Tm && Tm !== "html" && X.enterRCDATA(Mp("</template"), 0);
				else {
					J.exp = Qm(Tm, !1, Z(Em, Dm), 0, 0), J.name === "for" && (J.forParseResult = Nm(J.exp));
					let e = -1;
					J.name === "bind" && (e = J.modifiers.findIndex((e) => e.content === "sync")) > -1 && Rp("COMPILER_V_BIND_SYNC", q, J.loc, J.arg.loc.source) && (J.name = "model", J.modifiers.splice(e, 1));
				}
			}
			(J.type !== 7 || J.name !== "pre") && wm.props.push(J);
		}
		Tm = "", Em = Dm = -1;
	},
	oncomment(e, t) {
		q.comments && Jm({
			type: 3,
			content: Pm(e, t),
			loc: Z(e - 4, t + 3)
		});
	},
	onend() {
		let e = Cm.length;
		if (process.env.NODE_ENV !== "production" && X.state !== 1) switch (X.state) {
			case 5:
			case 8:
				$m(5, e);
				break;
			case 3:
			case 4:
				$m(25, X.sectionStart);
				break;
			case 28:
				X.currentSequence === Np.CdataEnd ? $m(6, e) : $m(7, e);
				break;
			case 6:
			case 7:
			case 9:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21: $m(9, e);
		}
		for (let t = 0; t < Y.length; t++) Lm(Y[t], e - 1), $m(24, Y[t].loc.start.offset);
	},
	oncdata(e, t) {
		(Y[0] ? Y[0].ns : q.ns) === 0 ? $m(1, e - 9) : Im(Pm(e, t), e, t);
	},
	onprocessinginstruction(e) {
		(Y[0] ? Y[0].ns : q.ns) === 0 && $m(21, e - 1);
	}
}), jm = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, Mm = /^\(|\)$/g;
function Nm(e) {
	let t = e.loc, n = e.content, r = n.match(_m);
	if (!r) return;
	let [, i, a] = r, o = (e, n, r = !1) => {
		let i = t.start.offset + n;
		return Qm(e, !1, Z(i, i + e.length), 0, +!!r);
	}, s = {
		source: o(a.trim(), n.indexOf(a, i.length)),
		value: void 0,
		key: void 0,
		index: void 0,
		finalized: !1
	}, c = i.trim().replace(Mm, "").trim(), l = i.indexOf(c), u = c.match(jm);
	if (u) {
		c = c.replace(jm, "").trim();
		let e = u[1].trim(), t;
		if (e && (t = n.indexOf(e, l + c.length), s.key = o(e, t, !0)), u[2]) {
			let r = u[2].trim();
			r && (s.index = o(r, n.indexOf(r, s.key ? t + e.length : l + c.length), !0));
		}
	}
	return c && (s.value = o(c, l, !0)), s;
}
function Pm(e, t) {
	return Cm.slice(e, t);
}
function Fm(e) {
	X.inSFCRoot && (wm.innerLoc = Z(e + 1, e + 1)), Jm(wm);
	let { tag: t, ns: n } = wm;
	n === 0 && q.isPreTag(t) && Om++, q.isVoidTag(t) ? Lm(wm, e) : (Y.unshift(wm), (n === 1 || n === 2) && (X.inXML = !0)), wm = null;
}
function Im(e, t, n) {
	{
		let t = Y[0] && Y[0].tag;
		t !== "script" && t !== "style" && e.includes("&") && (e = q.decodeEntities(e, !1));
	}
	let r = Y[0] || Sm, i = r.children[r.children.length - 1];
	i && i.type === 2 ? (i.content += e, Xm(i.loc, n)) : r.children.push({
		type: 2,
		content: e,
		loc: Z(t, n)
	});
}
function Lm(e, t, n = !1) {
	n ? Xm(e.loc, zm(t, 60)) : Xm(e.loc, Rm(t, 62) + 1), X.inSFCRoot && (e.children.length ? e.innerLoc.end = c({}, e.children[e.children.length - 1].loc.end) : e.innerLoc.end = c({}, e.innerLoc.start), e.innerLoc.source = Pm(e.innerLoc.start.offset, e.innerLoc.end.offset));
	let { tag: r, ns: i, children: a } = e;
	if (km || (r === "slot" ? e.tagType = 2 : Vm(e) ? e.tagType = 3 : Hm(e) && (e.tagType = 1)), X.inRCDATA || (e.children = Gm(a)), i === 0 && q.isIgnoreNewlineTag(r)) {
		let e = a[0];
		e && e.type === 2 && (e.content = e.content.replace(/^\r?\n/, ""));
	}
	i === 0 && q.isPreTag(r) && Om--, Am === e && (km = X.inVPre = !1, Am = null), X.inXML && (Y[0] ? Y[0].ns : q.ns) === 0 && (X.inXML = !1);
	{
		let t = e.props;
		if (process.env.NODE_ENV !== "production" && Lp("COMPILER_V_IF_V_FOR_PRECEDENCE", q)) {
			let n = !1, r = !1;
			for (let i = 0; i < t.length; i++) {
				let a = t[i];
				if (a.type === 7 && (a.name === "if" ? n = !0 : a.name === "for" && (r = !0)), n && r) {
					zp("COMPILER_V_IF_V_FOR_PRECEDENCE", q, e.loc);
					break;
				}
			}
		}
		if (!X.inSFCRoot && Lp("COMPILER_NATIVE_TEMPLATE", q) && e.tag === "template" && !Vm(e)) {
			process.env.NODE_ENV !== "production" && zp("COMPILER_NATIVE_TEMPLATE", q, e.loc);
			let t = Y[0] || Sm, n = t.children.indexOf(e);
			t.children.splice(n, 1, ...e.children);
		}
		let n = t.find((e) => e.type === 6 && e.name === "inline-template");
		n && Rp("COMPILER_INLINE_TEMPLATE", q, n.loc) && e.children.length && (n.value = {
			type: 2,
			content: Pm(e.children[0].loc.start.offset, e.children[e.children.length - 1].loc.end.offset),
			loc: n.loc
		});
	}
}
function Rm(e, t) {
	let n = e;
	for (; Cm.charCodeAt(n) !== t && n < Cm.length - 1;) n++;
	return n;
}
function zm(e, t) {
	let n = e;
	for (; Cm.charCodeAt(n) !== t && n >= 0;) n--;
	return n;
}
var Bm = /* @__PURE__ */ new Set([
	"if",
	"else",
	"else-if",
	"for",
	"slot"
]);
function Vm({ tag: e, props: t }) {
	if (e === "template") {
		for (let e = 0; e < t.length; e++) if (t[e].type === 7 && Bm.has(t[e].name)) return !0;
	}
	return !1;
}
function Hm({ tag: e, props: t }) {
	if (q.isCustomElement(e)) return !1;
	if (e === "component" || Um(e.charCodeAt(0)) || Wp(e) || q.isBuiltInComponent && q.isBuiltInComponent(e) || q.isNativeTag && !q.isNativeTag(e)) return !0;
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		if (n.type === 6) {
			if (n.name === "is" && n.value && (n.value.content.startsWith("vue:") || Rp("COMPILER_IS_ON_ELEMENT", q, n.loc))) return !0;
		} else if (n.name === "bind" && rm(n.arg, "is") && Rp("COMPILER_IS_ON_ELEMENT", q, n.loc)) return !0;
	}
	return !1;
}
function Um(e) {
	return e > 64 && e < 91;
}
var Wm = /\r\n/g;
function Gm(e) {
	let t = q.whitespace !== "preserve", n = !1;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i.type === 2) {
			if (Om) i.content = i.content.replace(Wm, "\n");
			else if (vm(i.content)) {
				let a = e[r - 1] && e[r - 1].type, o = e[r + 1] && e[r + 1].type;
				!a || !o || t && (a === 3 && (o === 3 || o === 1) || a === 1 && (o === 3 || o === 1 && Km(i.content))) ? (n = !0, e[r] = null) : i.content = " ";
			} else t && (i.content = qm(i.content));
		}
	}
	return n ? e.filter(Boolean) : e;
}
function Km(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e.charCodeAt(t);
		if (n === 10 || n === 13) return !0;
	}
	return !1;
}
function qm(e) {
	let t = "", n = !1;
	for (let r = 0; r < e.length; r++) Ap(e.charCodeAt(r)) ? n || (t += " ", n = !0) : (t += e[r], n = !1);
	return t;
}
function Jm(e) {
	(Y[0] || Sm).children.push(e);
}
function Z(e, t) {
	return {
		start: X.getPos(e),
		end: t == null ? t : X.getPos(t),
		source: t == null ? t : Pm(e, t)
	};
}
function Ym(e) {
	return Z(e.start.offset, e.end.offset);
}
function Xm(e, t) {
	e.end = X.getPos(t), e.source = Pm(e.start.offset, t);
}
function Zm(e) {
	let t = {
		type: 6,
		name: e.rawName,
		nameLoc: Z(e.loc.start.offset, e.loc.start.offset + e.rawName.length),
		value: void 0,
		loc: e.loc
	};
	if (e.exp) {
		let n = e.exp.loc;
		n.end.offset < e.loc.end.offset && (n.start.offset--, n.start.column--, n.end.offset++, n.end.column++), t.value = {
			type: 2,
			content: e.exp.content,
			loc: n
		};
	}
	return t;
}
function Qm(e, t = !1, n, r = 0, i = 0) {
	return G(e, t, n, r);
}
function $m(e, t, n) {
	q.onError(K(e, Z(t, t), void 0, n));
}
function eh() {
	X.reset(), wm = null, J = null, Tm = "", Em = -1, Dm = -1, Y.length = 0;
}
function th(e, t) {
	if (eh(), Cm = e, q = c({}, xm), t) {
		let e;
		for (e in t) t[e] != null && (q[e] = t[e]);
	}
	if (process.env.NODE_ENV !== "production" && !q.decodeEntities) throw Error("[@vue/compiler-core] decodeEntities option is required in browser builds.");
	X.mode = q.parseMode === "html" ? 1 : q.parseMode === "sfc" ? 2 : 0, X.inXML = q.ns === 1 || q.ns === 2;
	let n = t && t.delimiters;
	n && (X.delimiterOpen = Mp(n[0]), X.delimiterClose = Mp(n[1]));
	let r = Sm = mp([], e);
	return X.parse(Cm), r.loc = Z(0, e.length), r.children = Gm(r.children), Sm = null, r;
}
function nh(e, t) {
	ih(e, void 0, t, !!rh(e));
}
function rh(e) {
	let t = e.children.filter((e) => e.type !== 3);
	return t.length === 1 && t[0].type === 1 && !lm(t[0]) ? t[0] : null;
}
function ih(e, t, n, r = !1, i = !1) {
	let { children: a } = e, o = [];
	for (let t = 0; t < a.length; t++) {
		let s = a[t];
		if (s.type === 1 && s.tagType === 0) {
			let e = r ? 0 : ah(s, n);
			if (e > 0) {
				if (e >= 2) {
					s.codegenNode.patchFlag = -1, o.push(s);
					continue;
				}
			} else {
				let e = s.codegenNode;
				if (e.type === 13) {
					let t = e.patchFlag;
					if ((t === void 0 || t === 512 || t === 1) && ch(s, n) >= 2) {
						let t = lh(s);
						t && (e.props = n.hoist(t));
					}
					e.dynamicProps && (e.dynamicProps = n.hoist(e.dynamicProps));
				}
			}
		} else if (s.type === 12 && (r ? 0 : ah(s, n)) >= 2) {
			s.codegenNode.type === 14 && s.codegenNode.arguments.length > 0 && s.codegenNode.arguments.push(-1 + (process.env.NODE_ENV === "production" ? "" : ` /* ${de[-1]} */`)), o.push(s);
			continue;
		}
		if (s.type === 1) {
			let t = s.tagType === 1;
			t && n.scopes.vSlot++, ih(s, e, n, !1, i), t && n.scopes.vSlot--;
		} else if (s.type === 11) ih(s, e, n, s.children.length === 1, !0);
		else if (s.type === 9) for (let t = 0; t < s.branches.length; t++) ih(s.branches[t], e, n, s.branches[t].children.length === 1, i);
	}
	let s = !1;
	if (o.length === a.length && e.type === 1) {
		if (e.tagType === 0 && e.codegenNode && e.codegenNode.type === 13 && f(e.codegenNode.children)) e.codegenNode.children = c(gp(e.codegenNode.children)), s = !0;
		else if (e.tagType === 1 && e.codegenNode && e.codegenNode.type === 13 && e.codegenNode.children && !f(e.codegenNode.children) && e.codegenNode.children.type === 15) {
			let t = l(e.codegenNode, "default");
			t && (t.returns = c(gp(t.returns)), s = !0);
		} else if (e.tagType === 3 && t && t.type === 1 && t.tagType === 1 && t.codegenNode && t.codegenNode.type === 13 && t.codegenNode.children && !f(t.codegenNode.children) && t.codegenNode.children.type === 15) {
			let n = tm(e, "slot", !0), r = n && n.arg && l(t.codegenNode, n.arg);
			r && (r.returns = c(gp(r.returns)), s = !0);
		}
	}
	if (!s) for (let e of o) e.codegenNode = n.cache(e.codegenNode);
	function c(e) {
		let t = n.cache(e);
		return t.needArraySpread = !0, t;
	}
	function l(e, t) {
		if (e.children && !f(e.children) && e.children.type === 15) {
			let n = e.children.properties.find((e) => e.key === t || e.key.content === t);
			return n && n.value;
		}
	}
	o.length && n.transformHoist && n.transformHoist(a, n, e);
}
function ah(e, t) {
	let { constantCache: n } = t;
	switch (e.type) {
		case 1:
			if (e.tagType !== 0) return 0;
			let r = n.get(e);
			if (r !== void 0) return r;
			let i = e.codegenNode;
			if (i.type !== 13 || i.isBlock && e.tag !== "svg" && e.tag !== "foreignObject" && e.tag !== "math") return 0;
			if (i.patchFlag === void 0) {
				let r = 3, a = ch(e, t);
				if (a === 0) return n.set(e, 0), 0;
				a < r && (r = a);
				for (let i = 0; i < e.children.length; i++) {
					let a = ah(e.children[i], t);
					if (a === 0) return n.set(e, 0), 0;
					a < r && (r = a);
				}
				if (r > 1) for (let i = 0; i < e.props.length; i++) {
					let a = e.props[i];
					if (a.type === 7 && a.name === "bind" && a.exp) {
						let i = ah(a.exp, t);
						if (i === 0) return n.set(e, 0), 0;
						i < r && (r = i);
					}
				}
				if (i.isBlock) {
					for (let t = 0; t < e.props.length; t++) if (e.props[t].type === 7) return n.set(e, 0), 0;
					t.removeHelper(jf), t.removeHelper(Tp(t.inSSR, i.isComponent)), i.isBlock = !1, t.helper(wp(t.inSSR, i.isComponent));
				}
				return n.set(e, r), r;
			}
			return n.set(e, 0), 0;
		case 2:
		case 3: return 3;
		case 9:
		case 11:
		case 10: return 0;
		case 5:
		case 12: return ah(e.content, t);
		case 4: return e.constType;
		case 8:
			let a = 3;
			for (let n = 0; n < e.children.length; n++) {
				let r = e.children[n];
				if (v(r) || y(r)) continue;
				let i = ah(r, t);
				if (i === 0) return 0;
				i < a && (a = i);
			}
			return a;
		case 20: return 2;
		default: return process.env.NODE_ENV, 0;
	}
}
var oh = /* @__PURE__ */ new Set([
	Yf,
	Xf,
	Zf,
	Qf
]);
function sh(e, t) {
	if (e.type === 14 && !v(e.callee) && oh.has(e.callee)) {
		let n = e.arguments[0];
		if (n.type === 4) return ah(n, t);
		if (n.type === 14) return sh(n, t);
	}
	return 0;
}
function ch(e, t) {
	let n = 3, r = lh(e);
	if (r && r.type === 15) {
		let { properties: e } = r;
		for (let r = 0; r < e.length; r++) {
			let { key: i, value: a } = e[r], o = ah(i, t);
			if (o === 0) return o;
			o < n && (n = o);
			let s;
			if (s = a.type === 4 ? ah(a, t) : a.type === 14 ? sh(a, t) : 0, s === 0) return s;
			s < n && (n = s);
		}
	}
	return n;
}
function lh(e) {
	let t = e.codegenNode;
	if (t.type === 13) return t.props;
}
function uh(e, { filename: t = "", prefixIdentifiers: r = !1, hoistStatic: a = !1, hmr: o = !1, cacheHandlers: s = !1, nodeTransforms: c = [], directiveTransforms: l = {}, transformHoist: u = null, isBuiltInComponent: d = i, isCustomElement: f = i, expressionPlugins: p = [], scopeId: m = null, slotted: h = !0, ssr: g = !1, inSSR: _ = !1, ssrCssVars: y = "", bindingMetadata: b = n, inline: x = !1, isTS: S = !1, onError: C = Bp, onWarn: w = Vp, compatConfig: T }) {
	let E = t.replace(/\?.*$/, "").match(/([^/\\]+)\.\w+$/), D = {
		filename: t,
		selfName: E && re(A(E[1])),
		prefixIdentifiers: r,
		hoistStatic: a,
		hmr: o,
		cacheHandlers: s,
		nodeTransforms: c,
		directiveTransforms: l,
		transformHoist: u,
		isBuiltInComponent: d,
		isCustomElement: f,
		expressionPlugins: p,
		scopeId: m,
		slotted: h,
		ssr: g,
		inSSR: _,
		ssrCssVars: y,
		bindingMetadata: b,
		inline: x,
		isTS: S,
		onError: C,
		onWarn: w,
		compatConfig: T,
		root: e,
		helpers: /* @__PURE__ */ new Map(),
		components: /* @__PURE__ */ new Set(),
		directives: /* @__PURE__ */ new Set(),
		hoists: [],
		imports: [],
		cached: [],
		constantCache: /* @__PURE__ */ new WeakMap(),
		vForMemoKeyedNodes: /* @__PURE__ */ new WeakSet(),
		temps: 0,
		identifiers: /* @__PURE__ */ Object.create(null),
		scopes: {
			vFor: 0,
			vSlot: 0,
			vPre: 0,
			vOnce: 0
		},
		parent: null,
		grandParent: null,
		currentNode: e,
		childIndex: 0,
		inVOnce: !1,
		helper(e) {
			let t = D.helpers.get(e) || 0;
			return D.helpers.set(e, t + 1), e;
		},
		removeHelper(e) {
			let t = D.helpers.get(e);
			if (t) {
				let n = t - 1;
				n ? D.helpers.set(e, n) : D.helpers.delete(e);
			}
		},
		helperString(e) {
			return `_${dp[D.helper(e)]}`;
		},
		replaceNode(e) {
			if (process.env.NODE_ENV !== "production") {
				if (!D.currentNode) throw Error("Node being replaced is already removed.");
				if (!D.parent) throw Error("Cannot replace root node.");
			}
			D.parent.children[D.childIndex] = D.currentNode = e;
		},
		removeNode(e) {
			if (process.env.NODE_ENV !== "production" && !D.parent) throw Error("Cannot remove root node.");
			let t = D.parent.children, n = e ? t.indexOf(e) : D.currentNode ? D.childIndex : -1;
			if (process.env.NODE_ENV !== "production" && n < 0) throw Error("node being removed is not a child of current parent");
			!e || e === D.currentNode ? (D.currentNode = null, D.onNodeRemoved()) : D.childIndex > n && (D.childIndex--, D.onNodeRemoved()), D.parent.children.splice(n, 1);
		},
		onNodeRemoved: i,
		addIdentifiers(e) {},
		removeIdentifiers(e) {},
		hoist(e) {
			v(e) && (e = G(e)), D.hoists.push(e);
			let t = G(`_hoisted_${D.hoists.length}`, !1, e.loc, 2);
			return t.hoisted = e, t;
		},
		cache(e, t = !1, n = !1) {
			let r = Sp(D.cached.length, e, t, n);
			return D.cached.push(r), r;
		}
	};
	return D.filters = /* @__PURE__ */ new Set(), D;
}
function dh(e, t) {
	let n = uh(e, t);
	mh(e, n), t.hoistStatic && nh(e, n), t.ssr || fh(e, n), e.helpers = /* @__PURE__ */ new Set([...n.helpers.keys()]), e.components = [...n.components], e.directives = [...n.directives], e.imports = n.imports, e.hoists = n.hoists, e.temps = n.temps, e.cached = n.cached, e.transformed = !0, e.filters = [...n.filters];
}
function fh(e, t) {
	let { helper: n } = t, { children: r } = e;
	if (r.length === 1) {
		let n = rh(e);
		if (n && n.codegenNode) {
			let r = n.codegenNode;
			r.type === 13 && Ep(r, t), e.codegenNode = r;
		} else e.codegenNode = r[0];
	} else if (r.length > 1) {
		let i = 64;
		process.env.NODE_ENV !== "production" && r.filter((e) => e.type !== 3).length === 1 && (i |= 2048), e.codegenNode = hp(t, n(Ef), void 0, e.children, i, void 0, void 0, !0, void 0, !1);
	}
}
function ph(e, t) {
	let n = 0, r = () => {
		n--;
	};
	for (; n < e.children.length; n++) {
		let i = e.children[n];
		v(i) || (t.grandParent = t.parent, t.parent = e, t.childIndex = n, t.onNodeRemoved = r, mh(i, t));
	}
}
function mh(e, t) {
	t.currentNode = e;
	let { nodeTransforms: n } = t, r = [];
	for (let i = 0; i < n.length; i++) {
		let a = n[i](e, t);
		if (a && (f(a) ? r.push(...a) : r.push(a)), t.currentNode) e = t.currentNode;
		else return;
	}
	switch (e.type) {
		case 3:
			t.ssr || t.helper(If);
			break;
		case 5:
			t.ssr || t.helper(qf);
			break;
		case 9:
			for (let n = 0; n < e.branches.length; n++) mh(e.branches[n], t);
			break;
		case 10:
		case 11:
		case 1:
		case 0: ph(e, t);
	}
	t.currentNode = e;
	let i = r.length;
	for (; i--;) r[i]();
}
function hh(e, t) {
	let n = v(e) ? (t) => t === e : (t) => e.test(t);
	return (e, r) => {
		if (e.type === 1) {
			let { props: i } = e;
			if (e.tagType === 3 && i.some(sm)) return;
			let a = [];
			for (let o = 0; o < i.length; o++) {
				let s = i[o];
				if (s.type === 7 && n(s.name)) {
					i.splice(o, 1), o--;
					let n = t(e, s, r);
					n && a.push(n);
				}
			}
			return a;
		}
	};
}
var gh = "/*@__PURE__*/", _h = (e) => `${dp[e]}: _${dp[e]}`;
function vh(e, { mode: t = "function", prefixIdentifiers: n = t === "module", sourceMap: r = !1, filename: i = "template.vue.html", scopeId: a = null, optimizeImports: o = !1, runtimeGlobalName: s = "Vue", runtimeModuleName: c = "vue", ssrRuntimeModuleName: l = "vue/server-renderer", ssr: u = !1, isTS: d = !1, inSSR: f = !1 }) {
	let p = {
		mode: t,
		prefixIdentifiers: n,
		sourceMap: r,
		filename: i,
		scopeId: a,
		optimizeImports: o,
		runtimeGlobalName: s,
		runtimeModuleName: c,
		ssrRuntimeModuleName: l,
		ssr: u,
		isTS: d,
		inSSR: f,
		source: e.source,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		indentLevel: 0,
		pure: !1,
		map: void 0,
		helper(e) {
			return `_${dp[e]}`;
		},
		push(e, t = -2, n) {
			p.code += e;
		},
		indent() {
			m(++p.indentLevel);
		},
		deindent(e = !1) {
			e ? --p.indentLevel : m(--p.indentLevel);
		},
		newline() {
			m(p.indentLevel);
		}
	};
	function m(e) {
		p.push("\n" + "  ".repeat(e), 0);
	}
	return p;
}
function yh(e, t = {}) {
	let n = vh(e, t);
	t.onContextCreated && t.onContextCreated(n);
	let { mode: r, push: i, prefixIdentifiers: a, indent: o, deindent: s, newline: c, scopeId: l, ssr: u } = n, d = Array.from(e.helpers), f = d.length > 0, p = !a && r !== "module";
	if (bh(e, n), i(`function ${u ? "ssrRender" : "render"}(${(u ? [
		"_ctx",
		"_push",
		"_parent",
		"_attrs"
	] : ["_ctx", "_cache"]).join(", ")}) {`), o(), p && (i("with (_ctx) {"), o(), f && (i(`const { ${d.map(_h).join(", ")} } = _Vue
`, -1), c())), e.components.length && (xh(e.components, "component", n), (e.directives.length || e.temps > 0) && c()), e.directives.length && (xh(e.directives, "directive", n), e.temps > 0 && c()), e.filters && e.filters.length && (c(), xh(e.filters, "filter", n), c()), e.temps > 0) {
		i("let ");
		for (let t = 0; t < e.temps; t++) i(`${t > 0 ? ", " : ""}_temp${t}`);
	}
	return (e.components.length || e.directives.length || e.temps) && (i("\n", 0), c()), u || i("return "), e.codegenNode ? Eh(e.codegenNode, n) : i("null"), p && (s(), i("}")), s(), i("}"), {
		ast: e,
		code: n.code,
		preamble: "",
		map: n.map ? n.map.toJSON() : void 0
	};
}
function bh(e, t) {
	let { ssr: n, prefixIdentifiers: r, push: i, newline: a, runtimeModuleName: o, runtimeGlobalName: s, ssrRuntimeModuleName: c } = t, l = s, u = Array.from(e.helpers);
	u.length > 0 && (i(`const _Vue = ${l}
`, -1), e.hoists.length && i(`const { ${[
		Pf,
		Ff,
		If,
		Lf,
		Rf
	].filter((e) => u.includes(e)).map(_h).join(", ")} } = _Vue
`, -1)), Sh(e.hoists, t), a(), i("return ");
}
function xh(e, t, { helper: n, push: r, newline: i, isTS: a }) {
	let o = n(t === "filter" ? Hf : t === "component" ? zf : Vf);
	for (let n = 0; n < e.length; n++) {
		let s = e[n], c = s.endsWith("__self");
		c && (s = s.slice(0, -6)), r(`const ${hm(s, t)} = ${o}(${JSON.stringify(s)}${c ? ", true" : ""})${a ? "!" : ""}`), n < e.length - 1 && i();
	}
}
function Sh(e, t) {
	if (!e.length) return;
	t.pure = !0;
	let { push: n, newline: r } = t;
	r();
	for (let i = 0; i < e.length; i++) {
		let a = e[i];
		a && (n(`const _hoisted_${i + 1} = `), Eh(a, t), r());
	}
	t.pure = !1;
}
function Ch(e) {
	return v(e) || e.type === 4 || e.type === 2 || e.type === 5 || e.type === 8;
}
function wh(e, t) {
	let n = e.length > 3 || process.env.NODE_ENV !== "production" && e.some((e) => f(e) || !Ch(e));
	t.push("["), n && t.indent(), Th(e, t, n), n && t.deindent(), t.push("]");
}
function Th(e, t, n = !1, r = !0) {
	let { push: i, newline: a } = t;
	for (let o = 0; o < e.length; o++) {
		let s = e[o];
		v(s) ? i(s, -3) : f(s) ? wh(s, t) : Eh(s, t), o < e.length - 1 && (n ? (r && i(","), a()) : r && i(", "));
	}
}
function Eh(e, t) {
	if (v(e)) {
		t.push(e, -3);
		return;
	}
	if (y(e)) {
		t.push(t.helper(e));
		return;
	}
	switch (e.type) {
		case 1:
		case 9:
		case 11:
			process.env.NODE_ENV !== "production" && em(e.codegenNode != null, "Codegen node is missing for element/if/for node. Apply appropriate transforms first."), Eh(e.codegenNode, t);
			break;
		case 2:
			Dh(e, t);
			break;
		case 4:
			Oh(e, t);
			break;
		case 5:
			kh(e, t);
			break;
		case 12:
			Eh(e.codegenNode, t);
			break;
		case 8:
			Ah(e, t);
			break;
		case 3:
			Mh(e, t);
			break;
		case 13:
			Nh(e, t);
			break;
		case 14:
			Fh(e, t);
			break;
		case 15:
			Ih(e, t);
			break;
		case 17:
			Lh(e, t);
			break;
		case 18:
			Rh(e, t);
			break;
		case 19:
			zh(e, t);
			break;
		case 20:
			Bh(e, t);
			break;
		case 21:
			Th(e.body, t, !0, !1);
			break;
		case 22: break;
		case 23: break;
		case 24: break;
		case 25: break;
		case 26: break;
		/* v8 ignore start */
		case 10: break;
		default: if (process.env.NODE_ENV !== "production") return em(!1, `unhandled codegen node type: ${e.type}`), e;
	}
}
function Dh(e, t) {
	t.push(JSON.stringify(e.content), -3, e);
}
function Oh(e, t) {
	let { content: n, isStatic: r } = e;
	t.push(r ? JSON.stringify(n) : n, -3, e);
}
function kh(e, t) {
	let { push: n, helper: r, pure: i } = t;
	i && n(gh), n(`${r(qf)}(`), Eh(e.content, t), n(")");
}
function Ah(e, t) {
	for (let n = 0; n < e.children.length; n++) {
		let r = e.children[n];
		v(r) ? t.push(r, -3) : Eh(r, t);
	}
}
function jh(e, t) {
	let { push: n } = t;
	e.type === 8 ? (n("["), Ah(e, t), n("]")) : e.isStatic ? n(Kp(e.content) ? e.content : JSON.stringify(e.content), -2, e) : n(`[${e.content}]`, -3, e);
}
function Mh(e, t) {
	let { push: n, helper: r, pure: i } = t;
	i && n(gh), n(`${r(If)}(${JSON.stringify(e.content)})`, -3, e);
}
function Nh(e, t) {
	let { push: n, helper: r, pure: i } = t, { tag: a, props: o, children: s, patchFlag: c, dynamicProps: l, directives: u, isBlock: d, disableTracking: f, isComponent: p } = e, m;
	c && (m = process.env.NODE_ENV === "production" ? String(c) : c < 0 ? c + ` /* ${de[c]} */` : c + ` /* ${Object.keys(de).map(Number).filter((e) => e > 0 && c & e).map((e) => de[e]).join(", ")} */`), u && n(r(Uf) + "("), d && n(`(${r(jf)}(${f ? "true" : ""}), `), i && n(gh), n(r(d ? Tp(t.inSSR, p) : wp(t.inSSR, p)) + "(", -2, e), Th(Ph([
		a,
		o,
		s,
		m,
		l
	]), t), n(")"), d && n(")"), u && (n(", "), Eh(u, t), n(")"));
}
function Ph(e) {
	let t = e.length;
	for (; t-- && e[t] == null;);
	return e.slice(0, t + 1).map((e) => e || "null");
}
function Fh(e, t) {
	let { push: n, helper: r, pure: i } = t, a = v(e.callee) ? e.callee : r(e.callee);
	i && n(gh), n(a + "(", -2, e), Th(e.arguments, t), n(")");
}
function Ih(e, t) {
	let { push: n, indent: r, deindent: i, newline: a } = t, { properties: o } = e;
	if (!o.length) {
		n("{}", -2, e);
		return;
	}
	let s = o.length > 1 || process.env.NODE_ENV !== "production" && o.some((e) => e.value.type !== 4);
	n(s ? "{" : "{ "), s && r();
	for (let e = 0; e < o.length; e++) {
		let { key: r, value: i } = o[e];
		jh(r, t), n(": "), Eh(i, t), e < o.length - 1 && (n(","), a());
	}
	s && i(), n(s ? "}" : " }");
}
function Lh(e, t) {
	wh(e.elements, t);
}
function Rh(e, t) {
	let { push: n, indent: r, deindent: i } = t, { params: a, returns: o, body: s, newline: c, isSlot: l } = e;
	l && n(`_${dp[op]}(`), n("(", -2, e), f(a) ? Th(a, t) : a && Eh(a, t), n(") => "), (c || s) && (n("{"), r()), o ? (c && n("return "), f(o) ? wh(o, t) : Eh(o, t)) : s && Eh(s, t), (c || s) && (i(), n("}")), l && (e.isNonScopedSlot && n(", undefined, true"), n(")"));
}
function zh(e, t) {
	let { test: n, consequent: r, alternate: i, newline: a } = e, { push: o, indent: s, deindent: c, newline: l } = t;
	if (n.type === 4) {
		let e = !Kp(n.content);
		e && o("("), Oh(n, t), e && o(")");
	} else o("("), Eh(n, t), o(")");
	a && s(), t.indentLevel++, a || o(" "), o("? "), Eh(r, t), t.indentLevel--, a && l(), a || o(" "), o(": ");
	let u = i.type === 19;
	u || t.indentLevel++, Eh(i, t), u || t.indentLevel--, a && c(!0);
}
function Bh(e, t) {
	let { push: n, helper: r, indent: i, deindent: a, newline: o } = t, { needPauseTracking: s, needArraySpread: c } = e;
	c && n("[...("), n(`_cache[${e.index}] || (`), s && (i(), n(`${r(rp)}(-1`), e.inVOnce && n(", true"), n("),"), o(), n("(")), n(`_cache[${e.index}] = `), Eh(e.value, t), s && (n(`).cacheIndex = ${e.index},`), o(), n(`${r(rp)}(1),`), o(), n(`_cache[${e.index}]`), a()), n(")"), c && n(")]");
}
var Vh = RegExp("\\b" + "arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b") + "\\b"), Hh = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;
function Uh(e, t, n = !1, r = !1) {
	let i = e.content;
	if (i.trim()) try {
		Function(r ? ` ${i} ` : `return ${n ? `(${i}) => {}` : `(${i})`}`);
	} catch (n) {
		let r = n.message, a = i.replace(Hh, "").match(Vh);
		a && (r = `avoid using JavaScript keyword as property name: "${a[0]}"`), t.onError(K(46, e.loc, void 0, r));
	}
}
var Wh = (e, t) => {
	if (e.type === 5) e.content = Gh(e.content, t);
	else if (e.type === 1) {
		let n = tm(e, "memo");
		for (let r = 0; r < e.props.length; r++) {
			let i = e.props[r];
			if (i.type === 7 && i.name !== "for") {
				let r = i.exp, a = i.arg;
				r && r.type === 4 && !(i.name === "on" && a) && !(n && t.vForMemoKeyedNodes.has(e) && a && a.type === 4 && a.content === "key") && (i.exp = Gh(r, t, i.name === "slot")), a && a.type === 4 && !a.isStatic && (i.arg = Gh(a, t));
			}
		}
	}
};
function Gh(e, t, n = !1, r = !1, i = Object.create(t.identifiers)) {
	return process.env.NODE_ENV !== "production" && Uh(e, t, n, r), e;
}
var Kh = hh(/^(?:if|else|else-if)$/, (e, t, n) => qh(e, t, n, (e, t, r) => {
	let i = n.parent.children, a = i.indexOf(e), o = 0;
	for (; a-- >= 0;) {
		let e = i[a];
		e && e.type === 9 && (o += e.branches.length);
	}
	return () => {
		if (r) e.codegenNode = Yh(t, o, n);
		else {
			let r = Qh(e.codegenNode);
			r.alternate = Yh(t, o + e.branches.length - 1, n);
		}
	};
}));
function qh(e, t, n, r) {
	if (t.name !== "else" && (!t.exp || !t.exp.content.trim())) {
		let r = t.exp ? t.exp.loc : e.loc;
		n.onError(K(28, t.loc)), t.exp = G("true", !1, r);
	}
	if (process.env.NODE_ENV !== "production" && t.exp && Uh(t.exp, n), t.name === "if") {
		let i = Jh(e, t), a = {
			type: 9,
			loc: Ym(e.loc),
			branches: [i]
		};
		if (n.replaceNode(a), r) return r(a, i, !0);
	} else {
		let i = n.parent.children, a = [], o = i.indexOf(e);
		for (; o-- >= -1;) {
			let s = i[o];
			if (s && bm(s)) {
				n.removeNode(s), process.env.NODE_ENV !== "production" && s.type === 3 && a.unshift(s);
				continue;
			}
			if (s && s.type === 9) {
				(t.name === "else-if" || t.name === "else") && s.branches[s.branches.length - 1].condition === void 0 && n.onError(K(30, e.loc)), n.removeNode();
				let i = Jh(e, t);
				if (process.env.NODE_ENV !== "production" && a.length && !(n.parent && n.parent.type === 1 && (n.parent.tag === "transition" || n.parent.tag === "Transition")) && (i.children = [...a, ...i.children]), process.env.NODE_ENV !== "production") {
					let e = i.userKey;
					e && s.branches.forEach(({ userKey: t }) => {
						Zh(t, e) && n.onError(K(29, i.userKey.loc));
					});
				}
				s.branches.push(i);
				let o = r && r(s, i, !1);
				mh(i, n), o && o(), n.currentNode = null;
			} else n.onError(K(30, e.loc));
			break;
		}
	}
}
function Jh(e, t) {
	let n = e.tagType === 3;
	return {
		type: 10,
		loc: e.loc,
		condition: t.name === "else" ? void 0 : t.exp,
		children: n && !tm(e, "for") ? e.children : [e],
		userKey: nm(e, "key"),
		isTemplateIf: n
	};
}
function Yh(e, t, n) {
	return e.condition ? xp(e.condition, Xh(e, t, n), yp(n.helper(If), [process.env.NODE_ENV === "production" ? "\"\"" : "\"v-if\"", "true"])) : Xh(e, t, n);
}
function Xh(e, t, n) {
	let { helper: r } = n, i = W("key", G(`${t}`, !1, pp, 2)), { children: a } = e, o = a[0];
	if (a.length !== 1 || o.type !== 1) {
		if (a.length === 1 && o.type === 11) {
			let e = o.codegenNode;
			return fm(e, i, n), e;
		}
		{
			let t = 64;
			return process.env.NODE_ENV !== "production" && !e.isTemplateIf && a.filter((e) => e.type !== 3).length === 1 && (t |= 2048), hp(n, r(Ef), _p([i]), a, t, void 0, void 0, !0, !1, !1, e.loc);
		}
	}
	{
		let e = o.codegenNode, t = gm(e);
		return t.type === 13 && Ep(t, n), fm(t, i, n), e;
	}
}
function Zh(e, t) {
	if (!e || e.type !== t.type) return !1;
	if (e.type === 6) {
		if (e.value.content !== t.value.content) return !1;
	} else {
		let n = e.exp, r = t.exp;
		if (n.type !== r.type || n.type !== 4 || n.isStatic !== r.isStatic || n.content !== r.content) return !1;
	}
	return !0;
}
function Qh(e) {
	for (;;) if (e.type === 19) {
		if (e.alternate.type === 19) e = e.alternate;
		else return e;
	} else e.type === 20 && (e = e.value);
}
var $h = hh("for", (e, t, n) => {
	let { helper: r, removeHelper: i } = n;
	return eg(e, t, n, (t) => {
		let a = yp(r(Wf), [t.source]), o = cm(e), s = tm(e, "memo"), c = nm(e, "key", !1, !0);
		c && c.type;
		let l = c && (c.type === 6 ? c.value ? G(c.value.content, !0) : void 0 : c.exp), u = l ? W("key", l) : null, d = t.source.type === 4 && t.source.constType > 0, f = d ? 64 : c ? 128 : 256;
		return t.codegenNode = hp(n, r(Ef), void 0, a, f, void 0, void 0, !0, !d, !1, e.loc), () => {
			var c;
			let f, { children: p } = t;
			process.env.NODE_ENV !== "production" && o && e.children.some((e) => {
				if (e.type === 1) {
					let t = nm(e, "key");
					if (t) return n.onError(K(33, t.loc)), !0;
				}
			});
			let m = p.length !== 1 || p[0].type !== 1, h = lm(e) ? e : o && e.children.length === 1 && lm(e.children[0]) ? e.children[0] : null;
			if (h) f = h.codegenNode, o && u && fm(f, u, n);
			else if (m) f = hp(n, r(Ef), u ? _p([u]) : void 0, e.children, 64, void 0, void 0, !0, void 0, !1);
			else {
				f = p[0].codegenNode, o && u && fm(f, u, n);
				let e = !d || f.isBlockRequired === !0;
				f.isBlock !== e && (f.isBlock ? (i(jf), i(Tp(n.inSSR, f.isComponent))) : i(wp(n.inSSR, f.isComponent))), f.isBlock = e, f.isBlock ? (r(jf), r(Tp(n.inSSR, f.isComponent))) : (r(wp(n.inSSR, f.isComponent)), f.needsPatch && (f.patchFlag = ((c = f.patchFlag) == null ? 0 : c) | 512));
			}
			if (s) {
				let e = bp(ng(t.parseResult, [G("_cached")]));
				e.body = Cp([
					vp([
						"const _memo = (",
						s.exp,
						")"
					]),
					vp([
						"if (_cached && _cached.el",
						...l ? [" && _cached.key === ", l] : [],
						` && ${n.helperString(up)}(_cached, _memo)) return _cached`
					]),
					vp(["const _item = ", f]),
					G("_item.memo = _memo"),
					G("return _item")
				]), a.arguments.push(e, G("_cache"), G(String(n.cached.length))), n.cached.push(null);
			} else a.arguments.push(bp(ng(t.parseResult), f, !0));
		};
	});
});
function eg(e, t, n, r) {
	if (!t.exp) {
		n.onError(K(31, t.loc));
		return;
	}
	let i = t.forParseResult;
	if (!i) {
		n.onError(K(32, t.loc));
		return;
	}
	tg(i, n);
	let { addIdentifiers: a, removeIdentifiers: o, scopes: s } = n, { source: c, value: l, key: u, index: d } = i, f = {
		type: 11,
		loc: t.loc,
		source: c,
		valueAlias: l,
		keyAlias: u,
		objectIndexAlias: d,
		parseResult: i,
		children: cm(e) ? e.children : [e]
	};
	n.replaceNode(f), s.vFor++;
	let p = r && r(f);
	return () => {
		s.vFor--, p && p();
	};
}
function tg(e, t) {
	e.finalized || (process.env.NODE_ENV !== "production" && (Uh(e.source, t), e.key && Uh(e.key, t, !0), e.index && Uh(e.index, t, !0), e.value && Uh(e.value, t, !0)), e.finalized = !0);
}
function ng({ value: e, key: t, index: n }, r = []) {
	return rg([
		e,
		t,
		n,
		...r
	]);
}
function rg(e) {
	let t = e.length;
	for (; t-- && !e[t];);
	return e.slice(0, t + 1).map((e, t) => e || G("_".repeat(t + 1), !1));
}
var ig = G("undefined", !1), ag = (e, t) => {
	if (e.type === 1 && (e.tagType === 1 || e.tagType === 3)) {
		let n = tm(e, "slot");
		if (n) return n.exp, t.scopes.vSlot++, () => {
			t.scopes.vSlot--;
		};
	}
}, og = (e, t, n, r) => bp(e, n, !1, !0, n.length ? n[0].loc : r);
function sg(e, t, n = og) {
	t.helper(op);
	let { children: r, loc: i } = e, a = [], o = [], s = t.scopes.vSlot > 0 || t.scopes.vFor > 0, c = tm(e, "slot", !0);
	if (c) {
		let { arg: e, exp: t } = c;
		e && !Up(e) && (s = !0), a.push(W(e || G("default", !0), n(t, void 0, r, i)));
	}
	let l = !1, u = !1, d = [], f = /* @__PURE__ */ new Set(), p = 0;
	for (let e = 0; e < r.length; e++) {
		let i = r[e], m;
		if (!cm(i) || !(m = tm(i, "slot", !0))) {
			i.type !== 3 && d.push(i);
			continue;
		}
		if (c) {
			t.onError(K(37, m.loc));
			break;
		}
		l = !0;
		let { children: h, loc: g } = i, { arg: _ = G("default", !0), exp: v, loc: y } = m, b;
		Up(_) ? b = _ ? _.content : "default" : s = !0;
		let x = tm(i, "for"), S = n(v, x, h, g), C, w;
		if (C = tm(i, "if")) s = !0, o.push(xp(C.exp, cg(_, S, p++), ig));
		else if (w = tm(i, /^else(?:-if)?$/, !0)) {
			let n = e, i;
			for (; n-- && (i = r[n], bm(i)););
			if (i && cm(i) && tm(i, /^(?:else-)?if$/)) {
				let e = o[o.length - 1];
				for (; e.alternate.type === 19;) e = e.alternate;
				e.alternate = w.exp ? xp(w.exp, cg(_, S, p++), ig) : cg(_, S, p++);
			} else t.onError(K(30, w.loc));
		} else if (x) {
			s = !0;
			let e = x.forParseResult;
			e ? (tg(e, t), o.push(yp(t.helper(Wf), [e.source, bp(ng(e), cg(_, S), !0)]))) : t.onError(K(32, x.loc));
		} else {
			if (b) {
				if (f.has(b)) {
					t.onError(K(38, y));
					continue;
				}
				f.add(b), b === "default" && (u = !0);
			}
			a.push(W(_, S));
		}
	}
	if (!c) {
		let e = (e, r) => {
			let a = n(e, void 0, r, i);
			return t.compatConfig && (a.isNonScopedSlot = !0), W("default", a);
		};
		l ? d.length && !d.every(ym) && (u ? t.onError(K(39, d[0].loc)) : a.push(e(void 0, d))) : a.push(e(void 0, r));
	}
	let m = s ? 2 : lg(e.children) ? 3 : 1, h = _p(a.concat(W("_", G(m + (process.env.NODE_ENV === "production" ? "" : ` /* ${fe[m]} */`), !1))), i);
	return o.length && (h = yp(t.helper(Kf), [h, gp(o)])), {
		slots: h,
		hasDynamicSlots: s
	};
}
function cg(e, t, n) {
	let r = [W("name", e), W("fn", t)];
	return n != null && r.push(W("key", G(String(n), !0))), _p(r);
}
function lg(e) {
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		switch (n.type) {
			case 1:
				if (n.tagType === 2 || lg(n.children)) return !0;
				break;
			case 9:
				if (lg(n.branches)) return !0;
				break;
			case 10:
			case 11: if (lg(n.children)) return !0;
		}
	}
	return !1;
}
var ug = /* @__PURE__ */ new WeakMap(), dg = (e, t) => function() {
	if (e = t.currentNode, e.type !== 1 || e.tagType !== 0 && e.tagType !== 1) return;
	let { tag: n, props: r } = e, i = e.tagType === 1, a = i ? fg(e, t) : `"${n}"`, o = b(a) && a.callee === Bf, s, c, l = 0, u, d, f, p = !1, m = !1, h = o || a === Df || a === Of || !i && (n === "svg" || n === "foreignObject" || n === "math");
	if (r.length > 0) {
		let n = pg(e, t, void 0, i, o);
		s = n.props, l = n.patchFlag, d = n.dynamicPropNames, p = n.needsPatch, m = n.isBlockRequired;
		let r = n.directives;
		f = r && r.length ? gp(r.map((e) => gg(e, t))) : void 0, n.shouldUseBlock && (h = !0);
	}
	if (e.children.length > 0) {
		if (a === kf && (h = !0, l |= 1024, process.env.NODE_ENV !== "production" && e.children.length > 1 && t.onError(K(47, {
			start: e.children[0].loc.start,
			end: e.children[e.children.length - 1].loc.end,
			source: ""
		}))), i && a !== Df && a !== kf) {
			let { slots: n, hasDynamicSlots: r } = sg(e, t);
			c = n, r && (l |= 1024);
		} else if (e.children.length === 1 && a !== Df) {
			let n = e.children[0], r = n.type, i = r === 5 || r === 8;
			i && ah(n, t) === 0 && (l |= 1), c = i || r === 2 ? n : e.children;
		} else c = e.children;
	}
	d && d.length && (u = _g(d));
	let g = e.codegenNode = hp(t, a, s, c, l === 0 ? void 0 : l, u, f, !!h, !1, i, e.loc);
	p = p && (l === 0 || l === 32), p && (g.needsPatch = !0), m && (g.isBlockRequired = !0);
};
function fg(e, t, n = !1) {
	let { tag: r } = e, i = vg(r), a = nm(e, "is", !1, !0);
	if (a) {
		if (i || Lp("COMPILER_IS_ON_ELEMENT", t)) {
			let e;
			if (a.type === 6 ? e = a.value && G(a.value.content, !0) : (e = a.exp, e || (e = G("is", !1, a.arg.loc))), e) return yp(t.helper(Bf), [e]);
		} else a.type === 6 && a.value.content.startsWith("vue:") && (r = a.value.content.slice(4));
	}
	let o = Wp(r) || t.isBuiltInComponent(r);
	return o ? (n || t.helper(o), o) : (t.helper(zf), t.components.add(r), hm(r, "component"));
}
function pg(e, t, n = e.props, r, i, a = !1) {
	let { tag: s, loc: c, children: l } = e, u = [], d = [], f = [], p = l.length > 0, m = !1, h = !1, g = 0, _ = !1, v = !1, b = !1, x = !1, S = !1, C = !1, w = [], T = (e) => {
		u.length && (d.push(_p(mg(u), c)), u = []), e && d.push(e);
	}, E = () => {
		t.scopes.vFor > 0 && u.push(W(G("ref_for", !0), G("true")));
	}, O = ({ key: e, value: n }) => {
		if (Up(e)) {
			let a = e.content, s = o(a);
			if (s && (!r || i) && a.toLowerCase() !== "onclick" && a !== "onUpdate:modelValue" && !D(a) && (x = !0), s && D(a) && (C = !0), a === "ref" && (_ = !0), s && n.type === 14 && (n = n.arguments[0]), n.type === 20 || (n.type === 4 || n.type === 8) && ah(n, t) > 0) return;
			a === "class" ? v = !0 : a === "style" ? b = !0 : a !== "ref" && a !== "key" && !w.includes(a) && w.push(a), r && (a === "class" || a === "style") && !w.includes(a) && w.push(a);
		} else S = !0;
	};
	for (let i = 0; i < n.length; i++) {
		let l = n[i];
		if (l.type === 6) {
			let { loc: e, name: n, nameLoc: r, value: i } = l;
			if (n === "ref" && (_ = !0, E()), n === "is" && (vg(s) || i && i.content.startsWith("vue:") || Lp("COMPILER_IS_ON_ELEMENT", t))) continue;
			u.push(W(G(n, !0, r), G(i ? i.content : "", !0, i ? i.loc : e)));
		} else {
			let { name: n, arg: i, exp: _, loc: v, modifiers: b } = l, x = n === "bind", C = n === "on";
			if (n === "slot") {
				r || t.onError(K(40, v));
				continue;
			}
			if (n === "once" || n === "memo" || n === "is" || x && rm(i, "is") && (vg(s) || Lp("COMPILER_IS_ON_ELEMENT", t)) || C && a) continue;
			if (x && rm(i, "key") && (m = !0), C && p && i && Up(i) && A(i.content) === "vue:beforeUpdate" && (m = !0, h = !0), x && rm(i, "ref") && E(), !i && (x || C)) {
				if (S = !0, _) {
					if (x) {
						if (T(), process.env.NODE_ENV !== "production" && d.some((e) => e.type !== 15 || e.properties.some(({ key: e }) => e.type !== 4 || !e.isStatic || e.content !== "class" && e.content !== "style" && !o(e.content))) && Rp("COMPILER_V_BIND_OBJECT_ORDER", t, v), Lp("COMPILER_V_BIND_OBJECT_ORDER", t)) {
							d.unshift(_);
							continue;
						}
						E(), T(), d.push(_);
					} else T({
						type: 14,
						loc: v,
						callee: t.helper($f),
						arguments: r ? [_] : [_, "true"]
					});
				} else t.onError(K(x ? 34 : 35, v));
				continue;
			}
			x && b.some((e) => e.content === "prop") && (g |= 32);
			let w = t.directiveTransforms[n];
			if (w) {
				let { props: n, needRuntime: r } = w(l, e, t);
				!a && n.forEach(O), C && i && !Up(i) ? T(_p(n, c)) : u.push(...n), r && (f.push(l), y(r) && ug.set(l, r));
			} else ee(n) || (f.push(l), p && (m = !0, h = !0));
		}
	}
	let k;
	d.length ? (T(), k = d.length > 1 ? yp(t.helper(Jf), d, c) : d[0]) : u.length && (k = _p(mg(u), c)), S ? g |= 16 : (v && !r && (g |= 2), b && !r && (g |= 4), w.length && (g |= 8), x && (g |= 32));
	let te = (g === 0 || g === 32) && (_ || C || f.length > 0);
	if (!m && te && (g |= 512), !t.inSSR && k) switch (k.type) {
		case 15:
			let e = -1, n = -1, r = !1;
			for (let t = 0; t < k.properties.length; t++) {
				let i = k.properties[t].key;
				Up(i) ? i.content === "class" ? e = t : i.content === "style" && (n = t) : i.isHandlerKey || (r = !0);
			}
			let i = k.properties[e], a = k.properties[n];
			r ? k = yp(t.helper(Zf), [k]) : (i && !Up(i.value) && (i.value = yp(t.helper(Yf), [i.value])), a && (b || a.value.type === 4 && a.value.content.trim()[0] === "[" || a.value.type === 17) && (a.value = yp(t.helper(Xf), [a.value])));
			break;
		case 14: break;
		default: k = yp(t.helper(Zf), [yp(t.helper(Qf), [k])]);
	}
	return {
		props: k,
		directives: f,
		patchFlag: g,
		dynamicPropNames: w,
		shouldUseBlock: m,
		needsPatch: te,
		isBlockRequired: h
	};
}
function mg(e) {
	let t = /* @__PURE__ */ new Map(), n = [];
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i.key.type === 8 || !i.key.isStatic) {
			n.push(i);
			continue;
		}
		let a = i.key.content, s = t.get(a);
		s ? (a === "style" || a === "class" || o(a)) && hg(s, i) : (t.set(a, i), n.push(i));
	}
	return n;
}
function hg(e, t) {
	e.value.type === 17 ? e.value.elements.push(t.value) : e.value = gp([e.value, t.value], e.loc);
}
function gg(e, t) {
	let n = [], r = ug.get(e);
	r ? n.push(t.helperString(r)) : (t.helper(Vf), t.directives.add(e.name), n.push(hm(e.name, "directive")));
	let { loc: i } = e;
	if (e.exp && n.push(e.exp), e.arg && (e.exp || n.push("void 0"), n.push(e.arg)), Object.keys(e.modifiers).length) {
		e.arg || (e.exp || n.push("void 0"), n.push("void 0"));
		let t = G("true", !1, i);
		n.push(_p(e.modifiers.map((e) => W(e, t)), i));
	}
	return gp(n, e.loc);
}
function _g(e) {
	let t = "[";
	for (let n = 0, r = e.length; n < r; n++) t += JSON.stringify(e[n]), n < r - 1 && (t += ", ");
	return t + "]";
}
function vg(e) {
	return e === "component" || e === "Component";
}
var yg = (e, t) => {
	if (lm(e)) {
		let { children: n, loc: r } = e, { slotName: i, slotProps: a } = bg(e, t), o = [
			t.prefixIdentifiers ? "_ctx.$slots" : "$slots",
			i,
			"{}",
			"undefined",
			"true"
		], s = 2;
		a && (o[2] = a, s = 3), n.length && (o[3] = bp([], n, !1, !1, r), s = 4), t.scopeId && !t.slotted && (s = 5), o.splice(s), e.codegenNode = yp(t.helper(Gf), o, r);
	}
};
function bg(e, t) {
	let n = "\"default\"", r, i = [];
	for (let t = 0; t < e.props.length; t++) {
		let r = e.props[t];
		r.type === 6 ? r.value && (r.name === "name" ? n = JSON.stringify(r.value.content) : (r.name = A(r.name), i.push(r))) : r.name === "bind" && rm(r.arg, "name") ? r.exp ? n = r.exp : r.arg && r.arg.type === 4 && (n = r.exp = G(A(r.arg.content), !1, r.arg.loc)) : (r.name === "bind" && r.arg && Up(r.arg) && (r.arg.content = A(r.arg.content)), i.push(r));
	}
	if (i.length > 0) {
		let { props: n, directives: a } = pg(e, t, i, !1, !1);
		r = n, a.length && t.onError(K(36, a[0].loc));
	}
	return {
		slotName: n,
		slotProps: r
	};
}
var xg = (e, t, n, r) => {
	let { loc: i, modifiers: a, arg: o } = e;
	!e.exp && !a.length && n.onError(K(35, i));
	let s;
	if (o.type === 4) {
		if (o.isStatic) {
			let e = o.content;
			process.env.NODE_ENV !== "production" && e.startsWith("vnode") && n.onError(K(52, o.loc)), e.startsWith("vue:") && (e = `vnode-${e.slice(4)}`), s = G(t.tagType !== 0 || e.startsWith("vnode") || !/[A-Z]/.test(e) ? ie(A(e)) : `on:${e}`, !0, o.loc);
		} else s = vp([
			`${n.helperString(np)}(`,
			o,
			")"
		]);
	} else s = o, s.children.unshift(`${n.helperString(np)}(`), s.children.push(")");
	let c = e.exp;
	c && !c.content.trim() && (c = void 0);
	let l = n.cacheHandlers && !c && !n.inVOnce;
	if (c) {
		let e = Zp(c), t = !(e || $p(c)), r = c.content.includes(";");
		process.env.NODE_ENV !== "production" && Uh(c, n, !1, r), (t || l && e) && (c = vp([
			`${t ? "$event" : "(...args)"} => ${r ? "{" : "("}`,
			c,
			r ? "}" : ")"
		]));
	}
	let u = { props: [W(s, c || G("() => {}", !1, i))] };
	return r && (u = r(u)), l && (u.props[0].value = n.cache(u.props[0].value)), u.props.forEach((e) => e.key.isHandlerKey = !0), u;
}, Sg = (e, t, n) => {
	let { modifiers: r, loc: i } = e, a = e.arg, { exp: o } = e;
	return o && o.type === 4 && !o.content.trim() && (o = void 0), a.type === 4 ? a.isStatic || (a.content = a.content ? `${a.content} || ""` : "\"\"") : (a.children.unshift("("), a.children.push(") || \"\"")), r.some((e) => e.content === "camel") && (a.type === 4 ? a.content = a.isStatic ? A(a.content) : `${n.helperString(ep)}(${a.content})` : (a.children.unshift(`${n.helperString(ep)}(`), a.children.push(")"))), n.inSSR || (r.some((e) => e.content === "prop") && Cg(a, "."), r.some((e) => e.content === "attr") && Cg(a, "^")), { props: [W(a, o)] };
}, Cg = (e, t) => {
	e.type === 4 ? e.content = e.isStatic ? t + e.content : `\`${t}\${${e.content}}\`` : (e.children.unshift(`'${t}' + (`), e.children.push(")"));
}, wg = (e, t) => {
	if (e.type === 0 || e.type === 1 || e.type === 11 || e.type === 10) return () => {
		let n = e.children, r, i = !1;
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			if (am(t)) {
				i = !0;
				for (let i = e + 1; i < n.length; i++) {
					let a = n[i];
					if (am(a)) r || (r = n[e] = vp([t], t.loc)), r.children.push(" + ", a), n.splice(i, 1), i--;
					else {
						r = void 0;
						break;
					}
				}
			}
		}
		if (!(!i || n.length === 1 && (e.type === 0 || e.type === 1 && e.tagType === 0 && !e.props.find((e) => e.type === 7 && !t.directiveTransforms[e.name]) && e.tag !== "template"))) for (let e = 0; e < n.length; e++) {
			let r = n[e];
			if (am(r) || r.type === 8) {
				let i = [];
				(r.type !== 2 || r.content !== " ") && i.push(r), !t.ssr && ah(r, t) === 0 && i.push(1 + (process.env.NODE_ENV === "production" ? "" : ` /* ${de[1]} */`)), n[e] = {
					type: 12,
					content: r,
					loc: r.loc,
					codegenNode: yp(t.helper(Lf), i)
				};
			}
		}
	};
}, Tg = /* @__PURE__ */ new WeakSet(), Eg = (e, t) => {
	if (e.type === 1 && tm(e, "once", !0)) return Tg.has(e) || t.inVOnce || t.inSSR ? void 0 : (Tg.add(e), t.inVOnce = !0, t.helper(rp), () => {
		t.inVOnce = !1;
		let e = t.currentNode;
		e.codegenNode && (e.codegenNode = t.cache(e.codegenNode, !0, !0));
	});
}, Dg = (e, t, n) => {
	let { exp: r, arg: i } = e;
	if (!r) return n.onError(K(41, e.loc)), Og();
	let a = r.loc.source.trim(), o = r.type === 4 ? r.content : a, s = n.bindingMetadata[a];
	if (s === "props" || s === "props-aliased") return n.onError(K(44, r.loc)), Og();
	if (s === "literal-const" || s === "setup-const") return n.onError(K(45, r.loc)), Og();
	if (!o.trim() || !Zp(r)) return n.onError(K(42, r.loc)), Og();
	let c = i || G("modelValue", !0), l = i ? Up(i) ? `onUpdate:${A(i.content)}` : vp(["\"onUpdate:\" + ", i]) : "onUpdate:modelValue", u;
	u = vp([
		`${n.isTS ? "($event: any)" : "$event"} => ((`,
		r,
		") = $event)"
	]);
	let d = [W(c, e.exp), W(l, u)];
	if (e.modifiers.length && t.tagType === 1) {
		let t = e.modifiers.map((e) => e.content).map((e) => (Kp(e) ? e : JSON.stringify(e)) + ": true").join(", "), n = i ? Up(i) ? `${i.content}Modifiers` : vp([i, " + \"Modifiers\""]) : "modelModifiers";
		d.push(W(n, G(`{ ${t} }`, !1, e.loc, 2)));
	}
	return Og(d);
};
function Og(e = []) {
	return { props: e };
}
var kg = /[\w).+\-_$\]]/, Ag = (e, t) => {
	Lp("COMPILER_FILTERS", t) && (e.type === 5 ? jg(e.content, t) : e.type === 1 && e.props.forEach((e) => {
		e.type === 7 && e.name !== "for" && e.exp && jg(e.exp, t);
	}));
};
function jg(e, t) {
	if (e.type === 4) Mg(e, t);
	else for (let n = 0; n < e.children.length; n++) {
		let r = e.children[n];
		typeof r == "object" && (r.type === 4 ? Mg(r, t) : r.type === 8 ? jg(r, t) : r.type === 5 && jg(r.content, t));
	}
}
function Mg(e, t) {
	let n = e.content, r = !1, i = !1, a = !1, o = !1, s = 0, c = 0, l = 0, u = 0, d, f, p, m, h = [];
	for (p = 0; p < n.length; p++) if (f = d, d = n.charCodeAt(p), r) d === 39 && f !== 92 && (r = !1);
	else if (i) d === 34 && f !== 92 && (i = !1);
	else if (a) d === 96 && f !== 92 && (a = !1);
	else if (o) d === 47 && f !== 92 && (o = !1);
	else if (d === 124 && n.charCodeAt(p + 1) !== 124 && n.charCodeAt(p - 1) !== 124 && !s && !c && !l) m === void 0 ? (u = p + 1, m = n.slice(0, p).trim()) : g();
	else {
		switch (d) {
			case 34:
				i = !0;
				break;
			case 39:
				r = !0;
				break;
			case 96:
				a = !0;
				break;
			case 40:
				l++;
				break;
			case 41:
				l--;
				break;
			case 91:
				c++;
				break;
			case 93:
				c--;
				break;
			case 123:
				s++;
				break;
			case 125: s--;
		}
		if (d === 47) {
			let e = p - 1, t;
			for (; e >= 0 && (t = n.charAt(e), t === " "); e--);
			(!t || !kg.test(t)) && (o = !0);
		}
	}
	m === void 0 ? m = n.slice(0, p).trim() : u !== 0 && g();
	function g() {
		h.push(n.slice(u, p).trim()), u = p + 1;
	}
	if (h.length) {
		for (process.env.NODE_ENV !== "production" && zp("COMPILER_FILTERS", t, e.loc), p = 0; p < h.length; p++) m = Ng(m, h[p], t);
		e.content = m, e.ast = void 0;
	}
}
function Ng(e, t, n) {
	n.helper(Hf);
	let r = t.indexOf("(");
	if (r < 0) return n.filters.add(t), `${hm(t, "filter")}(${e})`;
	{
		let i = t.slice(0, r), a = t.slice(r + 1);
		return n.filters.add(i), `${hm(i, "filter")}(${e}${a === ")" ? a : "," + a}`;
	}
}
var Pg = /* @__PURE__ */ new WeakSet(), Fg = (e, t) => {
	if (e.type === 1) {
		let n = tm(e, "memo");
		return !n || Pg.has(e) || t.inSSR ? void 0 : (Pg.add(e), () => {
			let r = e.codegenNode || t.currentNode.codegenNode;
			r && r.type === 13 && (e.tagType !== 1 && Ep(r, t), e.codegenNode = yp(t.helper(lp), [
				n.exp,
				bp(void 0, r),
				"_cache",
				String(t.cached.length)
			]), t.cached.push(null));
		});
	}
}, Ig = (e, t) => {
	if (e.type === 1) {
		for (let n of e.props) if (n.type === 7 && n.name === "bind" && (!n.exp || n.exp.type === 4 && !n.exp.content.trim()) && n.arg) {
			let e = n.arg;
			if (e.type !== 4 || !e.isStatic) t.onError(K(53, e.loc)), n.exp = G("", !0, e.loc);
			else {
				let t = A(e.content);
				(qp.test(t[0]) || t[0] === "-") && (n.exp = G(t, !1, e.loc));
			}
		}
	}
};
function Lg(e) {
	return [[
		Ig,
		Eg,
		Kh,
		Fg,
		$h,
		Ag,
		...process.env.NODE_ENV === "production" ? [] : [Wh],
		yg,
		dg,
		ag,
		wg
	], {
		on: xg,
		bind: Sg,
		model: Dg
	}];
}
function Rg(e, t = {}) {
	let n = t.onError || Bp, r = t.mode === "module";
	t.prefixIdentifiers === !0 ? n(K(48)) : r && n(K(49)), t.cacheHandlers && n(K(50)), t.scopeId && !r && n(K(51));
	let i = c({}, t, { prefixIdentifiers: !1 }), a = v(e) ? th(e, i) : e, [o, s] = Lg();
	return dh(a, c({}, i, {
		nodeTransforms: [...o, ...t.nodeTransforms || []],
		directiveTransforms: c({}, s, t.directiveTransforms || {})
	})), yh(a, i);
}
var zg = () => ({ props: [] }), Bg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vModelRadio"), Vg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vModelCheckbox"), Hg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vModelText"), Ug = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vModelSelect"), Wg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vModelDynamic"), Gg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vOnModifiersGuard"), Kg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vOnKeysGuard"), qg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "vShow"), Jg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "Transition"), Yg = /* @__PURE__ */ Symbol(process.env.NODE_ENV === "production" ? "" : "TransitionGroup");
fp({
	[Bg]: "vModelRadio",
	[Vg]: "vModelCheckbox",
	[Hg]: "vModelText",
	[Ug]: "vModelSelect",
	[Wg]: "vModelDynamic",
	[Gg]: "withModifiers",
	[Kg]: "withKeys",
	[qg]: "vShow",
	[Jg]: "Transition",
	[Yg]: "TransitionGroup"
});
var Xg;
function Zg(e, t = !1) {
	return Xg || (Xg = document.createElement("div")), t ? (Xg.innerHTML = `<div foo="${e.replace(/"/g, "&quot;")}">`, Xg.children[0].getAttribute("foo")) : (Xg.innerHTML = e, Xg.textContent);
}
var Qg = {
	parseMode: "html",
	isVoidTag: je,
	isNativeTag: (e) => Oe(e) || ke(e) || Ae(e),
	isPreTag: (e) => e === "pre",
	isIgnoreNewlineTag: (e) => e === "pre" || e === "textarea",
	decodeEntities: Zg,
	isBuiltInComponent: (e) => {
		if (e === "Transition" || e === "transition") return Jg;
		if (e === "TransitionGroup" || e === "transition-group") return Yg;
	},
	getNamespace(e, t, n) {
		let r = t ? t.ns : n;
		if (t && r === 2) {
			if (t.tag === "annotation-xml") {
				if (e === "svg") return 1;
				t.props.some((e) => e.type === 6 && e.name === "encoding" && e.value != null && (e.value.content === "text/html" || e.value.content === "application/xhtml+xml")) && (r = 0);
			} else /^m(?:[ions]|text)$/.test(t.tag) && e !== "mglyph" && e !== "malignmark" && (r = 0);
		} else t && r === 1 && (t.tag === "foreignObject" || t.tag === "desc" || t.tag === "title") && (r = 0);
		if (r === 0) {
			if (e === "svg") return 1;
			if (e === "math") return 2;
		}
		return r;
	}
}, $g = (e) => {
	e.type === 1 && e.props.forEach((t, n) => {
		t.type === 6 && t.name === "style" && t.value && (e.props[n] = {
			type: 7,
			name: "bind",
			arg: G("style", !0, t.loc),
			exp: e_(t.value.content, t.loc),
			modifiers: [],
			loc: t.loc
		});
	});
}, e_ = (e, t) => {
	let n = be(e);
	return G(JSON.stringify(n), !1, t, 3);
};
function t_(e, t) {
	return K(e, t, process.env.NODE_ENV === "production" ? void 0 : n_);
}
var n_ = {
	54: "v-html is missing expression.",
	55: "v-html will override element children.",
	56: "v-text is missing expression.",
	57: "v-text will override element children.",
	58: "v-model can only be used on <input>, <textarea> and <select> elements.",
	59: "v-model argument is not supported on plain elements.",
	60: "v-model cannot be used on file inputs since they are read-only. Use a v-on:change listener instead.",
	61: "Unnecessary value binding used alongside v-model. It will interfere with v-model's behavior.",
	62: "v-show is missing expression.",
	63: "<Transition> expects exactly one child element or component.",
	64: "Tags with side effect (<script> and <style>) are ignored in client component templates."
}, r_ = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(t_(54, i)), t.children.length && (n.onError(t_(55, i)), t.children.length = 0), { props: [W(G("innerHTML", !0, i), r || G("", !0))] };
}, i_ = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(t_(56, i)), t.children.length && (n.onError(t_(57, i)), t.children.length = 0), { props: [W(G("textContent", !0), r ? ah(r, n) > 0 ? r : yp(n.helperString(qf), [r], i) : G("", !0))] };
}, a_ = (e, t, n) => {
	let r = Dg(e, t, n);
	if (!r.props.length || t.tagType === 1) return r;
	e.arg && n.onError(t_(59, e.arg.loc));
	function i() {
		let e = tm(t, "bind");
		e && rm(e.arg, "value") && n.onError(t_(61, e.loc));
	}
	let { tag: a } = t, o = n.isCustomElement(a);
	if (a === "input" || a === "textarea" || a === "select" || o) {
		let s = Hg, c = !1;
		if (a === "input" || o) {
			let r = nm(t, "type");
			if (r) {
				if (r.type === 7) s = Wg;
				else if (r.value) switch (r.value.content) {
					case "radio":
						s = Bg;
						break;
					case "checkbox":
						s = Vg;
						break;
					case "file":
						c = !0, n.onError(t_(60, e.loc));
						break;
					default: process.env.NODE_ENV !== "production" && i();
				}
			} else im(t) ? s = Wg : process.env.NODE_ENV !== "production" && i();
		} else a === "select" ? s = Ug : process.env.NODE_ENV !== "production" && i();
		c || (r.needRuntime = n.helper(s));
	} else n.onError(t_(58, e.loc));
	return r.props = r.props.filter((e) => e.key.type !== 4 || e.key.content !== "modelValue"), r;
}, o_ = /* @__PURE__ */ t("passive,once,capture"), s_ = /* @__PURE__ */ t("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"), c_ = /* @__PURE__ */ t("left,right"), l_ = /* @__PURE__ */ t("onkeyup,onkeydown,onkeypress"), u_ = (e, t, n, r) => {
	let i = [], a = [], o = [];
	for (let s = 0; s < t.length; s++) {
		let c = t[s].content;
		c === "native" && Rp("COMPILER_V_ON_NATIVE", n, r) || o_(c) ? o.push(c) : c_(c) ? Up(e) ? l_(e.content.toLowerCase()) ? i.push(c) : a.push(c) : (i.push(c), a.push(c)) : s_(c) ? a.push(c) : i.push(c);
	}
	return {
		keyModifiers: i,
		nonKeyModifiers: a,
		eventOptionModifiers: o
	};
}, d_ = (e, t) => Up(e) && e.content.toLowerCase() === "onclick" ? G(t, !0) : e.type === 4 ? e : vp([
	"(",
	e,
	`) === "onClick" ? "${t}" : (`,
	e,
	")"
]), f_ = (e, t, n) => xg(e, t, n, (t) => {
	let { modifiers: r } = e;
	if (!r.length) return t;
	let { key: i, value: a } = t.props[0], { keyModifiers: o, nonKeyModifiers: s, eventOptionModifiers: c } = u_(i, r, n, e.loc);
	if (s.includes("right") && (i = d_(i, "onContextmenu")), s.includes("middle") && (i = d_(i, "onMouseup")), s.length && (a = yp(n.helper(Gg), [a, JSON.stringify(s)])), o.length && (!Up(i) || l_(i.content.toLowerCase())) && (a = yp(n.helper(Kg), [a, JSON.stringify(o)])), c.length) {
		let e = c.map(re).join("");
		i = Up(i) ? G(`${i.content}${e}`, !0) : vp([
			"(",
			i,
			`) + "${e}"`
		]);
	}
	return { props: [W(i, a)] };
}), p_ = (e, t, n) => {
	let { exp: r, loc: i } = e;
	return r || n.onError(t_(62, i)), {
		props: [],
		needRuntime: n.helper(qg)
	};
}, m_ = (e, t) => {
	if (e.type === 1 && e.tagType === 1 && t.isBuiltInComponent(e.tag) === Jg) return () => {
		if (!e.children.length) return;
		h_(e) && t.onError(t_(63, {
			start: e.children[0].loc.start,
			end: e.children[e.children.length - 1].loc.end,
			source: ""
		}));
		let n = e.children[0];
		if (n.type === 1) for (let t of n.props) t.type === 7 && t.name === "show" && e.props.push({
			type: 6,
			name: "persisted",
			nameLoc: e.loc,
			value: void 0,
			loc: e.loc
		});
	};
};
function h_(e) {
	let t = e.children = e.children.filter((e) => !bm(e)), n = t[0];
	return t.length !== 1 || n.type === 11 || n.type === 9 && n.branches.some(h_);
}
var g_ = (e, t) => {
	e.type === 1 && e.tagType === 0 && (e.tag === "script" || e.tag === "style") && (process.env.NODE_ENV !== "production" && t.onError(t_(64, e.loc)), t.removeNode());
};
function __(e, t) {
	return e === "template" ? !0 : e in b_ ? b_[e].has(t) : t in x_ ? x_[t].has(e) : !(e in S_ && S_[e].has(t) || t in C_ && C_[t].has(e));
}
var v_ = /* @__PURE__ */ new Set([
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6"
]), y_ = /* @__PURE__ */ new Set([]), b_ = {
	head: /* @__PURE__ */ new Set([
		"base",
		"basefront",
		"bgsound",
		"link",
		"meta",
		"title",
		"noscript",
		"noframes",
		"style",
		"script",
		"template"
	]),
	optgroup: /* @__PURE__ */ new Set(["option"]),
	select: /* @__PURE__ */ new Set([
		"optgroup",
		"option",
		"hr"
	]),
	table: /* @__PURE__ */ new Set([
		"caption",
		"colgroup",
		"tbody",
		"tfoot",
		"thead"
	]),
	tr: /* @__PURE__ */ new Set(["td", "th"]),
	colgroup: /* @__PURE__ */ new Set(["col"]),
	tbody: /* @__PURE__ */ new Set(["tr"]),
	thead: /* @__PURE__ */ new Set(["tr"]),
	tfoot: /* @__PURE__ */ new Set(["tr"]),
	script: y_,
	iframe: y_,
	option: y_,
	textarea: y_,
	style: y_,
	title: y_
}, x_ = {
	html: y_,
	body: /* @__PURE__ */ new Set(["html"]),
	head: /* @__PURE__ */ new Set(["html"]),
	td: /* @__PURE__ */ new Set(["tr"]),
	colgroup: /* @__PURE__ */ new Set(["table"]),
	caption: /* @__PURE__ */ new Set(["table"]),
	tbody: /* @__PURE__ */ new Set(["table"]),
	tfoot: /* @__PURE__ */ new Set(["table"]),
	col: /* @__PURE__ */ new Set(["colgroup"]),
	th: /* @__PURE__ */ new Set(["tr"]),
	thead: /* @__PURE__ */ new Set(["table"]),
	tr: /* @__PURE__ */ new Set([
		"tbody",
		"thead",
		"tfoot"
	]),
	dd: /* @__PURE__ */ new Set(["dl", "div"]),
	dt: /* @__PURE__ */ new Set(["dl", "div"]),
	figcaption: /* @__PURE__ */ new Set(["figure"]),
	summary: /* @__PURE__ */ new Set(["details"]),
	area: /* @__PURE__ */ new Set(["map"])
}, S_ = {
	p: /* @__PURE__ */ new Set(/* @__PURE__ */ "address.article.aside.blockquote.center.details.dialog.dir.div.dl.fieldset.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.li.main.nav.menu.ol.p.pre.section.table.ul".split(".")),
	svg: /* @__PURE__ */ new Set(/* @__PURE__ */ "b.blockquote.br.code.dd.div.dl.dt.em.embed.h1.h2.h3.h4.h5.h6.hr.i.img.li.menu.meta.ol.p.pre.ruby.s.small.span.strong.sub.sup.table.u.ul.var".split("."))
}, C_ = {
	a: /* @__PURE__ */ new Set(["a"]),
	button: /* @__PURE__ */ new Set(["button"]),
	dd: /* @__PURE__ */ new Set(["dd", "dt"]),
	dt: /* @__PURE__ */ new Set(["dd", "dt"]),
	form: /* @__PURE__ */ new Set(["form"]),
	li: /* @__PURE__ */ new Set(["li"]),
	h1: v_,
	h2: v_,
	h3: v_,
	h4: v_,
	h5: v_,
	h6: v_
}, w_ = [$g, ...process.env.NODE_ENV === "production" ? [] : [m_, (e, t) => {
	if (e.type === 1 && e.tagType === 0 && t.parent && t.parent.type === 1 && t.parent.tagType === 0 && !__(t.parent.tag, e.tag)) {
		let n = /* @__PURE__ */ SyntaxError(`<${e.tag}> cannot be child of <${t.parent.tag}>, according to HTML specifications. This can cause hydration errors or potentially disrupt future functionality.`);
		n.loc = e.loc, t.onWarn(n);
	}
}]], T_ = {
	cloak: zg,
	html: r_,
	text: i_,
	model: a_,
	on: f_,
	show: p_
};
function E_(e, t = {}) {
	return Rg(e, c({}, Qg, t, {
		nodeTransforms: [
			g_,
			...w_,
			...t.nodeTransforms || []
		],
		directiveTransforms: c({}, T_, t.directiveTransforms || {}),
		transformHoist: null
	}));
}
//#endregion
//#region node_modules/vue/dist/vue.esm-bundler.js
function D_() {
	tu();
}
process.env.NODE_ENV !== "production" && D_();
var O_ = /* @__PURE__ */ Object.create(null);
function k_(e, t) {
	if (!v(e)) {
		if (e.nodeType) e = e.innerHTML;
		else return process.env.NODE_ENV !== "production" && U("invalid template option: ", e), i;
	}
	let n = ue(e, t), r = O_[n];
	if (r) return r;
	if (e[0] === "#") {
		let t = document.querySelector(e);
		process.env.NODE_ENV !== "production" && !t && U(`Template element not found or is empty: ${e}`), e = t ? t.innerHTML : "";
	}
	let a = c({
		hoistStatic: !0,
		onError: process.env.NODE_ENV === "production" ? void 0 : s,
		onWarn: process.env.NODE_ENV === "production" ? i : (e) => s(e, !0)
	}, t);
	!a.isCustomElement && typeof customElements < "u" && (a.isCustomElement = (e) => !!customElements.get(e));
	let { code: o } = E_(e, a);
	function s(t, n = !1) {
		let r = n ? t.message : `Template compilation error: ${t.message}`, i = t.loc && he(e, t.loc.start.offset, t.loc.end.offset);
		U(i ? `${r}
${i}` : r);
	}
	let l = Function("Vue", o)(lu);
	return l._rc = !0, O_[n] = l;
}
Vl(k_);
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/typeof.js
function A_(e) {
	"@babel/helpers - typeof";
	return A_ = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, A_(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/toPrimitive.js
function j_(e, t) {
	if (A_(e) != "object" || !e) return e;
	var n = e[Symbol.toPrimitive];
	if (n !== void 0) {
		var r = n.call(e, t || "default");
		if (A_(r) != "object") return r;
		throw TypeError("@@toPrimitive must return a primitive value.");
	}
	return (t === "string" ? String : Number)(e);
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/toPropertyKey.js
function M_(e) {
	var t = j_(e, "string");
	return A_(t) == "symbol" ? t : t + "";
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/defineProperty.js
function N_(e, t, n) {
	return (t = M_(t)) in e ? Object.defineProperty(e, t, {
		value: n,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[t] = n, e;
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/asyncToGenerator.js
function P_(e, t, n, r, i, a, o) {
	try {
		var s = e[a](o), c = s.value;
	} catch (e) {
		n(e);
		return;
	}
	s.done ? t(c) : Promise.resolve(c).then(r, i);
}
function F_(e) {
	return function() {
		var t = this, n = arguments;
		return new Promise(function(r, i) {
			var a = e.apply(t, n);
			function o(e) {
				P_(a, r, i, o, s, "next", e);
			}
			function s(e) {
				P_(a, r, i, o, s, "throw", e);
			}
			o(void 0);
		});
	};
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/objectSpread2.js
function I_(e, t) {
	var n = Object.keys(e);
	if (Object.getOwnPropertySymbols) {
		var r = Object.getOwnPropertySymbols(e);
		t && (r = r.filter(function(t) {
			return Object.getOwnPropertyDescriptor(e, t).enumerable;
		})), n.push.apply(n, r);
	}
	return n;
}
function Q(e) {
	for (var t = 1; t < arguments.length; t++) {
		var n = arguments[t] == null ? {} : arguments[t];
		t % 2 ? I_(Object(n), !0).forEach(function(t) {
			N_(e, t, n[t]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : I_(Object(n)).forEach(function(t) {
			Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
		});
	}
	return e;
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/objectWithoutPropertiesLoose.js
function L_(e, t) {
	if (e == null) return {};
	var n = {};
	for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
		if (t.includes(r)) continue;
		n[r] = e[r];
	}
	return n;
}
//#endregion
//#region \0@oxc-project+runtime@0.146.0/helpers/esm/objectWithoutProperties.js
function R_(e, t) {
	if (e == null) return {};
	var n, r, i = L_(e, t);
	if (Object.getOwnPropertySymbols) {
		var a = Object.getOwnPropertySymbols(e);
		for (r = 0; r < a.length; r++) n = a[r], t.includes(n) || {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
	}
	return i;
}
//#endregion
//#region node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var z_ = [
	"top",
	"right",
	"bottom",
	"left"
], B_ = ["start", "end"], V_ = /*#__PURE__*/ z_.reduce((e, t) => e.concat(t, t + "-" + B_[0], t + "-" + B_[1]), []), H_ = Math.min, U_ = Math.max, W_ = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function G_(e, t, n) {
	return U_(e, H_(t, n));
}
function K_(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function q_(e) {
	return e.split("-")[0];
}
function J_(e) {
	return e.split("-")[1];
}
function Y_(e) {
	return e === "x" ? "y" : "x";
}
function X_(e) {
	return e === "y" ? "height" : "width";
}
function Z_(e) {
	let t = e[0];
	return t === "t" || t === "b" ? "y" : "x";
}
function Q_(e) {
	return Y_(Z_(e));
}
function $_(e, t, n) {
	n === void 0 && (n = !1);
	let r = J_(e), i = Q_(e), a = X_(i), o = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
	return t.reference[a] > t.floating[a] && (o = cv(o)), [o, cv(o)];
}
function ev(e) {
	let t = cv(e);
	return [
		tv(e),
		t,
		tv(t)
	];
}
function tv(e) {
	return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
var nv = ["left", "right"], rv = ["right", "left"], iv = ["top", "bottom"], av = ["bottom", "top"];
function ov(e, t, n) {
	switch (e) {
		case "top":
		case "bottom": return n ? t ? rv : nv : t ? nv : rv;
		case "left":
		case "right": return t ? iv : av;
		default: return [];
	}
}
function sv(e, t, n, r) {
	let i = J_(e), a = ov(q_(e), n === "start", r);
	return i && (a = a.map((e) => e + "-" + i), t && (a = a.concat(a.map(tv)))), a;
}
function cv(e) {
	let t = q_(e);
	return W_[t] + e.slice(t.length);
}
function lv(e) {
	var t, n, r, i;
	return {
		top: (t = e.top) == null ? 0 : t,
		right: (n = e.right) == null ? 0 : n,
		bottom: (r = e.bottom) == null ? 0 : r,
		left: (i = e.left) == null ? 0 : i
	};
}
function uv(e) {
	return typeof e == "number" ? {
		top: e,
		right: e,
		bottom: e,
		left: e
	} : lv(e);
}
function dv(e) {
	let { x: t, y: n, width: r, height: i } = e;
	return {
		width: r,
		height: i,
		top: n,
		left: t,
		right: t + r,
		bottom: n + i,
		x: t,
		y: n
	};
}
//#endregion
//#region node_modules/@floating-ui/core/dist/floating-ui.core.mjs
var fv = [
	"crossAxis",
	"alignment",
	"allowedPlacements",
	"autoAlignment"
], pv = [
	"mainAxis",
	"crossAxis",
	"fallbackPlacements",
	"fallbackStrategy",
	"fallbackAxisSideDirection",
	"flipAlignment"
], mv = [
	"mainAxis",
	"crossAxis",
	"limiter"
], hv = ["apply"];
function gv(e, t, n) {
	let { reference: r, floating: i } = e, a = Z_(t), o = Q_(t), s = X_(o), c = q_(t), l = a === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, f = r[s] / 2 - i[s] / 2, p;
	switch (c) {
		case "top":
			p = {
				x: u,
				y: r.y - i.height
			};
			break;
		case "bottom":
			p = {
				x: u,
				y: r.y + r.height
			};
			break;
		case "right":
			p = {
				x: r.x + r.width,
				y: d
			};
			break;
		case "left":
			p = {
				x: r.x - i.width,
				y: d
			};
			break;
		default: p = {
			x: r.x,
			y: r.y
		};
	}
	let m = J_(t);
	return m && (p[o] += f * (m === "end" ? 1 : -1) * (n && l ? -1 : 1)), p;
}
function _v(e, t) {
	return vv.apply(this, arguments);
}
function vv() {
	return vv = F_(function* (e, t) {
		var n;
		t === void 0 && (t = {});
		let { x: r, y: i, platform: a, rects: o, elements: s, strategy: c } = e, { boundary: l = "clippingAncestors", rootBoundary: u = "viewport", elementContext: d = "floating", altBoundary: f = !1, padding: p = 0 } = K_(t, e), m = uv(p), h = s[f ? d === "floating" ? "reference" : "floating" : d], g = dv(yield a.getClippingRect({
			element: (n = yield a.isElement == null ? void 0 : a.isElement(h)) == null || n ? h : h.contextElement || (yield a.getDocumentElement == null ? void 0 : a.getDocumentElement(s.floating)),
			boundary: l,
			rootBoundary: u,
			strategy: c
		})), _ = d === "floating" ? {
			x: r,
			y: i,
			width: o.floating.width,
			height: o.floating.height
		} : o.reference, v = yield a.getOffsetParent == null ? void 0 : a.getOffsetParent(s.floating), y = (yield a.isElement == null ? void 0 : a.isElement(v)) && (yield a.getScale == null ? void 0 : a.getScale(v)) || {
			x: 1,
			y: 1
		}, b = dv(a.convertOffsetParentRelativeRectToViewportRelativeRect ? yield a.convertOffsetParentRelativeRectToViewportRelativeRect({
			elements: s,
			rect: _,
			offsetParent: v,
			strategy: c
		}) : _);
		return {
			top: (g.top - b.top + m.top) / y.y,
			bottom: (b.bottom - g.bottom + m.bottom) / y.y,
			left: (g.left - b.left + m.left) / y.x,
			right: (b.right - g.right + m.right) / y.x
		};
	}), vv.apply(this, arguments);
}
var yv = 50, bv = function() {
	var e = F_(function* (e, t, n) {
		let { placement: r = "bottom", strategy: i = "absolute", middleware: a = [], platform: o } = n, s = o.detectOverflow ? o : Q(Q({}, o), {}, { detectOverflow: _v }), c = yield o.isRTL == null ? void 0 : o.isRTL(t), l = yield o.getElementRects({
			reference: e,
			floating: t,
			strategy: i
		}), { x: u, y: d } = gv(l, r, c), f = r, p = 0, m = {};
		for (let n = 0; n < a.length; n++) {
			let h = a[n];
			if (!h) continue;
			let { name: g, fn: _ } = h, { x: v, y, data: b, reset: x } = yield _({
				x: u,
				y: d,
				initialPlacement: r,
				placement: f,
				strategy: i,
				middlewareData: m,
				rects: l,
				platform: s,
				elements: {
					reference: e,
					floating: t
				}
			});
			u = v == null ? u : v, d = y == null ? d : y, m[g] = Q(Q({}, m[g]), b), x && p < yv && (p++, typeof x == "object" && (x.placement && (f = x.placement), x.rects && (l = x.rects === !0 ? yield o.getElementRects({
				reference: e,
				floating: t,
				strategy: i
			}) : x.rects), {x: u, y: d} = gv(l, f, c)), n = -1);
		}
		return {
			x: u,
			y: d,
			placement: f,
			strategy: i,
			middlewareData: m
		};
	});
	return function(t, n, r) {
		return e.apply(this, arguments);
	};
}(), xv = (e) => ({
	name: "arrow",
	options: e,
	fn(t) {
		return F_(function* () {
			let { x: n, y: r, placement: i, rects: a, platform: o, elements: s, middlewareData: c } = t, { element: l, padding: u = 0 } = K_(e, t) || {};
			if (l == null) return {};
			let d = uv(u), f = {
				x: n,
				y: r
			}, p = Q_(i), m = X_(p), h = yield o.getDimensions(l), g = p === "y", _ = g ? "top" : "left", v = g ? "bottom" : "right", y = g ? "clientHeight" : "clientWidth", b = a.reference[m] + a.reference[p] - f[p] - a.floating[m], x = f[p] - a.reference[p], S = yield o.getOffsetParent == null ? void 0 : o.getOffsetParent(l), C = S ? S[y] : 0;
			(!C || !(yield o.isElement == null ? void 0 : o.isElement(S))) && (C = s.floating[y] || a.floating[m]);
			let w = b / 2 - x / 2, T = C / 2 - h[m] / 2 - 1, E = H_(d[_], T), D = H_(d[v], T), ee = C - h[m] - D, O = C / 2 - h[m] / 2 + w, k = G_(E, O, ee), A = !c.arrow && J_(i) != null && O !== k && a.reference[m] / 2 - (O < E ? E : D) - h[m] / 2 < 0, te = A ? O < E ? O - E : O - ee : 0;
			return {
				[p]: f[p] + te,
				data: Q({
					[p]: k,
					centerOffset: O - k - te
				}, A && { alignmentOffset: te }),
				reset: A
			};
		})();
	}
});
function Sv(e, t, n) {
	return (e ? [...n.filter((t) => J_(t) === e), ...n.filter((t) => J_(t) !== e)] : n.filter((e) => q_(e) === e)).filter((n) => !e || J_(n) === e || (t ? tv(n) !== n : !1));
}
var Cv = function(e) {
	return e === void 0 && (e = {}), {
		name: "autoPlacement",
		options: e,
		fn(t) {
			return F_(function* () {
				var n, r, i;
				let { rects: a, middlewareData: o, placement: s, platform: c, elements: l } = t, u = K_(e, t), { crossAxis: d = !1, alignment: f, allowedPlacements: p = V_, autoAlignment: m = !0 } = u, h = R_(u, fv), g = f !== void 0 || p === V_ ? Sv(f || null, m, p) : p, _ = ((n = o.autoPlacement) == null ? void 0 : n.index) || 0, v = g[_];
				if (v == null) return {};
				if (s !== v) return { reset: { placement: g[0] } };
				let y = yield c.detectOverflow(t, h), b = $_(v, a, yield c.isRTL == null ? void 0 : c.isRTL(l.floating)), x = [
					y[q_(v)],
					y[b[0]],
					y[b[1]]
				], S = [...((r = o.autoPlacement) == null ? void 0 : r.overflows) || [], {
					placement: v,
					overflows: x
				}], C = g[_ + 1];
				if (C) return {
					data: {
						index: _ + 1,
						overflows: S
					},
					reset: { placement: C }
				};
				let w = S.map((e) => {
					let t = J_(e.placement);
					return [
						e.placement,
						t && d ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
						e.overflows
					];
				}).sort((e, t) => e[1] - t[1]), T = ((i = w.filter((e) => e[2].slice(0, J_(e[0]) ? 2 : 3).every((e) => e <= 0))[0]) == null ? void 0 : i[0]) || w[0][0];
				return T === s ? {} : {
					data: {
						index: _ + 1,
						overflows: S
					},
					reset: { placement: T }
				};
			})();
		}
	};
}, wv = function(e) {
	return e === void 0 && (e = {}), {
		name: "flip",
		options: e,
		fn(t) {
			return F_(function* () {
				var n, r;
				let { placement: i, middlewareData: a, rects: o, initialPlacement: s, platform: c, elements: l } = t, u = K_(e, t), { mainAxis: d = !0, crossAxis: f = !0, fallbackPlacements: p, fallbackStrategy: m = "bestFit", fallbackAxisSideDirection: h = "none", flipAlignment: g = !0 } = u, _ = R_(u, pv);
				if ((n = a.arrow) != null && n.alignmentOffset) return {};
				let v = q_(i), y = Z_(s), b = q_(s) === s, x = yield c.isRTL == null ? void 0 : c.isRTL(l.floating), S = p || (b || !g ? [cv(s)] : ev(s)), C = h !== "none";
				!p && C && S.push(...sv(s, g, h, x));
				let w = [s, ...S], T = yield c.detectOverflow(t, _), E = [], D = ((r = a.flip) == null ? void 0 : r.overflows) || [];
				if (d && E.push(T[v]), f) {
					let e = $_(i, o, x);
					E.push(T[e[0]], T[e[1]]);
				}
				if (D = [...D, {
					placement: i,
					overflows: E
				}], !E.every((e) => e <= 0)) {
					var ee, O;
					let e = (((ee = a.flip) == null ? void 0 : ee.index) || 0) + 1, t = w[e];
					if (t && (f !== "alignment" || y === Z_(t) || D.every((e) => Z_(e.placement) !== y || e.overflows[0] > 0))) return {
						data: {
							index: e,
							overflows: D
						},
						reset: { placement: t }
					};
					let n = (O = D.filter((e) => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) == null ? void 0 : O.placement;
					if (!n) switch (m) {
						case "bestFit": {
							var k;
							let e = (k = D.filter((e) => {
								if (C) {
									let t = Z_(e.placement);
									return t === y || t === "y";
								}
								return !0;
							}).map((e) => [e.placement, e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) == null ? void 0 : k[0];
							e && (n = e);
							break;
						}
						case "initialPlacement": n = s;
					}
					if (i !== n) return { reset: { placement: n } };
				}
				return {};
			})();
		}
	};
}, Tv = /*#__PURE__*/ new Set(["left", "top"]);
function Ev(e, t) {
	return Dv.apply(this, arguments);
}
function Dv() {
	return Dv = F_(function* (e, t) {
		let { placement: n, platform: r, elements: i } = e, a = yield r.isRTL == null ? void 0 : r.isRTL(i.floating), o = q_(n), s = J_(n), c = Z_(n) === "y", l = Tv.has(o) ? -1 : 1, u = a && c ? -1 : 1, d = K_(t, e), { mainAxis: f, crossAxis: p, alignmentAxis: m } = typeof d == "number" ? {
			mainAxis: d,
			crossAxis: 0,
			alignmentAxis: null
		} : {
			mainAxis: d.mainAxis || 0,
			crossAxis: d.crossAxis || 0,
			alignmentAxis: d.alignmentAxis
		};
		return s && typeof m == "number" && (p = s === "end" ? m * -1 : m), c ? {
			x: p * u,
			y: f * l
		} : {
			x: f * l,
			y: p * u
		};
	}), Dv.apply(this, arguments);
}
var Ov = function(e) {
	return e === void 0 && (e = 0), {
		name: "offset",
		options: e,
		fn(t) {
			return F_(function* () {
				var n, r;
				let { x: i, y: a, placement: o, middlewareData: s } = t, c = yield Ev(t, e);
				return o === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
					x: i + c.x,
					y: a + c.y,
					data: Q(Q({}, c), {}, { placement: o })
				};
			})();
		}
	};
}, kv = function(e) {
	return e === void 0 && (e = {}), {
		name: "shift",
		options: e,
		fn(t) {
			return F_(function* () {
				let { x: n, y: r, placement: i, platform: a } = t, o = K_(e, t), { mainAxis: s = !0, crossAxis: c = !1, limiter: l = { fn: (e) => {
					let { x: t, y: n } = e;
					return {
						x: t,
						y: n
					};
				} } } = o, u = R_(o, mv), d = {
					x: n,
					y: r
				}, f = yield a.detectOverflow(t, u), p = Z_(i), m = Y_(p), h = d[m], g = d[p], _ = (e, t) => G_(t + f[e === "y" ? "top" : "left"], t, t - f[e === "y" ? "bottom" : "right"]);
				s && (h = _(m, h)), c && (g = _(p, g));
				let v = l.fn(Q(Q({}, t), {}, {
					[m]: h,
					[p]: g
				}));
				return Q(Q({}, v), {}, { data: {
					x: v.x - n,
					y: v.y - r,
					enabled: {
						[m]: s,
						[p]: c
					}
				} });
			})();
		}
	};
}, Av = function(e) {
	return e === void 0 && (e = {}), {
		name: "size",
		options: e,
		fn(t) {
			return F_(function* () {
				let { placement: n, rects: r, platform: i, elements: a } = t, o = K_(e, t), { apply: s = () => {} } = o, c = R_(o, hv), l = yield i.detectOverflow(t, c), u = q_(n), d = J_(n), f = Z_(n) === "y", { width: p, height: m } = r.floating, h, g;
				u === "top" || u === "bottom" ? (h = u, g = d === ((yield i.isRTL == null ? void 0 : i.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (g = u, h = d === "end" ? "top" : "bottom");
				let _ = m - l.top - l.bottom, v = p - l.left - l.right, y = H_(m - l[h], _), b = H_(p - l[g], v), x = t.middlewareData.shift, S = !x, C = y, w = b;
				x != null && x.enabled.x && (w = v), x != null && x.enabled.y && (C = _), S && !d && (f ? w = p - 2 * U_(l.left, l.right) : C = m - 2 * U_(l.top, l.bottom)), yield s(Q(Q({}, t), {}, {
					availableWidth: w,
					availableHeight: C
				}));
				let T = yield i.getDimensions(a.floating);
				return p !== T.width || m !== T.height ? { reset: { rects: !0 } } : {};
			})();
		}
	};
};
//#endregion
//#region node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs
function jv(e) {
	var t;
	return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Mv(e) {
	return jv(e).getComputedStyle(e);
}
var Nv = Math.min, Pv = Math.max, Fv = Math.round;
function Iv(e) {
	let t = Mv(e), n = parseFloat(t.width), r = parseFloat(t.height), i = e.offsetWidth, a = e.offsetHeight, o = Fv(n) !== i || Fv(r) !== a;
	return o && (n = i, r = a), {
		width: n,
		height: r,
		fallback: o
	};
}
function Lv(e) {
	return Hv(e) ? (e.nodeName || "").toLowerCase() : "";
}
var Rv;
function zv() {
	if (Rv) return Rv;
	let e = navigator.userAgentData;
	return e && Array.isArray(e.brands) ? (Rv = e.brands.map(((e) => e.brand + "/" + e.version)).join(" "), Rv) : navigator.userAgent;
}
function Bv(e) {
	return e instanceof jv(e).HTMLElement;
}
function Vv(e) {
	return e instanceof jv(e).Element;
}
function Hv(e) {
	return e instanceof jv(e).Node;
}
function Uv(e) {
	return typeof ShadowRoot > "u" ? !1 : e instanceof jv(e).ShadowRoot || e instanceof ShadowRoot;
}
function Wv(e) {
	let { overflow: t, overflowX: n, overflowY: r, display: i } = Mv(e);
	return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function Gv(e) {
	return [
		"table",
		"td",
		"th"
	].includes(Lv(e));
}
function Kv(e) {
	let t = /firefox/i.test(zv()), n = Mv(e), r = n.backdropFilter || n.WebkitBackdropFilter;
	return n.transform !== "none" || n.perspective !== "none" || !!r && r !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some(((e) => n.willChange.includes(e))) || [
		"paint",
		"layout",
		"strict",
		"content"
	].some(((e) => {
		let t = n.contain;
		return t != null && t.includes(e);
	}));
}
function qv() {
	return !/^((?!chrome|android).)*safari/i.test(zv());
}
function Jv(e) {
	return [
		"html",
		"body",
		"#document"
	].includes(Lv(e));
}
function Yv(e) {
	return Vv(e) ? e : e.contextElement;
}
var Xv = {
	x: 1,
	y: 1
};
function Zv(e) {
	let t = Yv(e);
	if (!Bv(t)) return Xv;
	let n = t.getBoundingClientRect(), { width: r, height: i, fallback: a } = Iv(t), o = (a ? Fv(n.width) : n.width) / r, s = (a ? Fv(n.height) : n.height) / i;
	return o && Number.isFinite(o) || (o = 1), s && Number.isFinite(s) || (s = 1), {
		x: o,
		y: s
	};
}
function Qv(e, t, n, r) {
	var i, a;
	t === void 0 && (t = !1), n === void 0 && (n = !1);
	let o = e.getBoundingClientRect(), s = Yv(e), c = Xv;
	t && (r ? Vv(r) && (c = Zv(r)) : c = Zv(e));
	let l = s ? jv(s) : window, u = !qv() && n, d = (o.left + (u && ((i = l.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / c.x, f = (o.top + (u && ((a = l.visualViewport) == null ? void 0 : a.offsetTop) || 0)) / c.y, p = o.width / c.x, m = o.height / c.y;
	if (s) {
		let e = jv(s), t = r && Vv(r) ? jv(r) : r, n = e.frameElement;
		for (; n && r && t !== e;) {
			let e = Zv(n), t = n.getBoundingClientRect(), r = getComputedStyle(n);
			t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, d *= e.x, f *= e.y, p *= e.x, m *= e.y, d += t.x, f += t.y, n = jv(n).frameElement;
		}
	}
	return {
		width: p,
		height: m,
		top: f,
		right: d + p,
		bottom: f + m,
		left: d,
		x: d,
		y: f
	};
}
function $v(e) {
	return ((Hv(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function ey(e) {
	return Vv(e) ? {
		scrollLeft: e.scrollLeft,
		scrollTop: e.scrollTop
	} : {
		scrollLeft: e.pageXOffset,
		scrollTop: e.pageYOffset
	};
}
function ty(e) {
	return Qv($v(e)).left + ey(e).scrollLeft;
}
function ny(e) {
	if (Lv(e) === "html") return e;
	let t = e.assignedSlot || e.parentNode || Uv(e) && e.host || $v(e);
	return Uv(t) ? t.host : t;
}
function ry(e) {
	let t = ny(e);
	return Jv(t) ? t.ownerDocument.body : Bv(t) && Wv(t) ? t : ry(t);
}
function iy(e, t) {
	var n;
	t === void 0 && (t = []);
	let r = ry(e), i = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = jv(r);
	return i ? t.concat(a, a.visualViewport || [], Wv(r) ? r : []) : t.concat(r, iy(r));
}
function ay(e, t, n) {
	return t === "viewport" ? dv(function(e, t) {
		let n = jv(e), r = $v(e), i = n.visualViewport, a = r.clientWidth, o = r.clientHeight, s = 0, c = 0;
		if (i) {
			a = i.width, o = i.height;
			let e = qv();
			(e || !e && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
		}
		return {
			width: a,
			height: o,
			x: s,
			y: c
		};
	}(e, n)) : Vv(t) ? dv(function(e, t) {
		let n = Qv(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, a = Bv(e) ? Zv(e) : {
			x: 1,
			y: 1
		};
		return {
			width: e.clientWidth * a.x,
			height: e.clientHeight * a.y,
			x: i * a.x,
			y: r * a.y
		};
	}(t, n)) : dv(function(e) {
		let t = $v(e), n = ey(e), r = e.ownerDocument.body, i = Pv(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), a = Pv(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight), o = -n.scrollLeft + ty(e), s = -n.scrollTop;
		return Mv(r).direction === "rtl" && (o += Pv(t.clientWidth, r.clientWidth) - i), {
			width: i,
			height: a,
			x: o,
			y: s
		};
	}($v(e)));
}
function oy(e) {
	return Bv(e) && Mv(e).position !== "fixed" ? e.offsetParent : null;
}
function sy(e) {
	let t = jv(e), n = oy(e);
	for (; n && Gv(n) && Mv(n).position === "static";) n = oy(n);
	return n && (Lv(n) === "html" || Lv(n) === "body" && Mv(n).position === "static" && !Kv(n)) ? t : n || function(e) {
		let t = ny(e);
		for (; Bv(t) && !Jv(t);) {
			if (Kv(t)) return t;
			t = ny(t);
		}
		return null;
	}(e) || t;
}
function cy(e, t, n) {
	let r = Bv(t), i = $v(t), a = Qv(e, !0, n === "fixed", t), o = {
		scrollLeft: 0,
		scrollTop: 0
	}, s = {
		x: 0,
		y: 0
	};
	if (r || !r && n !== "fixed") {
		if ((Lv(t) !== "body" || Wv(i)) && (o = ey(t)), Bv(t)) {
			let e = Qv(t, !0);
			s.x = e.x + t.clientLeft, s.y = e.y + t.clientTop;
		} else i && (s.x = ty(i));
	}
	return {
		x: a.left + o.scrollLeft - s.x,
		y: a.top + o.scrollTop - s.y,
		width: a.width,
		height: a.height
	};
}
var ly = {
	getClippingRect: function(e) {
		let { element: t, boundary: n, rootBoundary: r, strategy: i } = e, a = [...n === "clippingAncestors" ? function(e, t) {
			let n = t.get(e);
			if (n) return n;
			let r = iy(e).filter(((e) => Vv(e) && Lv(e) !== "body")), i = null, a = Mv(e).position === "fixed", o = a ? ny(e) : e;
			for (; Vv(o) && !Jv(o);) {
				let e = Mv(o), t = Kv(o);
				(a ? t || i : t || e.position !== "static" || !i || !["absolute", "fixed"].includes(i.position)) ? i = e : r = r.filter(((e) => e !== o)), o = ny(o);
			}
			return t.set(e, r), r;
		}(t, this._c) : [].concat(n), r], o = a[0], s = a.reduce(((e, n) => {
			let r = ay(t, n, i);
			return e.top = Pv(r.top, e.top), e.right = Nv(r.right, e.right), e.bottom = Nv(r.bottom, e.bottom), e.left = Pv(r.left, e.left), e;
		}), ay(t, o, i));
		return {
			width: s.right - s.left,
			height: s.bottom - s.top,
			x: s.left,
			y: s.top
		};
	},
	convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
		let { rect: t, offsetParent: n, strategy: r } = e, i = Bv(n), a = $v(n);
		if (n === a) return t;
		let o = {
			scrollLeft: 0,
			scrollTop: 0
		}, s = {
			x: 1,
			y: 1
		}, c = {
			x: 0,
			y: 0
		};
		if ((i || !i && r !== "fixed") && ((Lv(n) !== "body" || Wv(a)) && (o = ey(n)), Bv(n))) {
			let e = Qv(n);
			s = Zv(n), c.x = e.x + n.clientLeft, c.y = e.y + n.clientTop;
		}
		return {
			width: t.width * s.x,
			height: t.height * s.y,
			x: t.x * s.x - o.scrollLeft * s.x + c.x,
			y: t.y * s.y - o.scrollTop * s.y + c.y
		};
	},
	isElement: Vv,
	getDimensions: function(e) {
		return Bv(e) ? Iv(e) : e.getBoundingClientRect();
	},
	getOffsetParent: sy,
	getDocumentElement: $v,
	getScale: Zv,
	getElementRects(e) {
		var t = this;
		return F_(function* () {
			let { reference: n, floating: r, strategy: i } = e, a = t.getOffsetParent || sy, o = t.getDimensions;
			return {
				reference: cy(n, yield a(r), i),
				floating: Q({
					x: 0,
					y: 0
				}, yield o(r))
			};
		})();
	},
	getClientRects: (e) => Array.from(e.getClientRects()),
	isRTL: (e) => Mv(e).direction === "rtl"
}, uy = (e, t, n) => {
	let r = /* @__PURE__ */ new Map(), i = Q({ platform: ly }, n), a = Q(Q({}, i.platform), {}, { _c: r });
	return bv(e, t, Q(Q({}, i), {}, { platform: a }));
};
//#endregion
//#region node_modules/floating-vue/dist/floating-vue.mjs
function dy(e, t) {
	for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (typeof t[n] == "object" && e[n] ? dy(e[n], t[n]) : e[n] = t[n]);
}
var fy = {
	disabled: !1,
	distance: 5,
	skidding: 0,
	container: "body",
	boundary: void 0,
	instantMove: !1,
	disposeTimeout: 150,
	popperTriggers: [],
	strategy: "absolute",
	preventOverflow: !0,
	flip: !0,
	shift: !0,
	overflowPadding: 0,
	arrowPadding: 0,
	arrowOverflow: !0,
	autoHideOnMousedown: !1,
	themes: {
		tooltip: {
			placement: "top",
			triggers: [
				"hover",
				"focus",
				"touch"
			],
			hideTriggers: (e) => [...e, "click"],
			delay: {
				show: 200,
				hide: 0
			},
			handleResize: !1,
			html: !1,
			loadingContent: "..."
		},
		dropdown: {
			placement: "bottom",
			triggers: ["click"],
			delay: 0,
			handleResize: !0,
			autoHide: !0
		},
		menu: {
			$extend: "dropdown",
			triggers: ["hover", "focus"],
			popperTriggers: ["hover"],
			delay: {
				show: 0,
				hide: 400
			}
		}
	}
};
function py(e, t) {
	let n = fy.themes[e] || {}, r;
	do
		r = n[t], typeof r > "u" ? n.$extend ? n = fy.themes[n.$extend] || {} : (n = null, r = fy[t]) : n = null;
	while (n);
	return r;
}
function my(e) {
	let t = [e], n = fy.themes[e] || {};
	do
		n.$extend && !n.$resetCss ? (t.push(n.$extend), n = fy.themes[n.$extend] || {}) : n = null;
	while (n);
	return t.map((e) => `v-popper--theme-${e}`);
}
function hy(e) {
	let t = [e], n = fy.themes[e] || {};
	do
		n.$extend ? (t.push(n.$extend), n = fy.themes[n.$extend] || {}) : n = null;
	while (n);
	return t;
}
var gy = !1;
if (typeof window < "u") {
	gy = !1;
	try {
		let e = Object.defineProperty({}, "passive", { get() {
			gy = !0;
		} });
		window.addEventListener("test", null, e);
	} catch (e) {}
}
var _y = !1;
typeof window < "u" && typeof navigator < "u" && (_y = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream);
var vy = [
	"auto",
	"top",
	"bottom",
	"left",
	"right"
].reduce((e, t) => e.concat([
	t,
	`${t}-start`,
	`${t}-end`
]), []), yy = {
	hover: "mouseenter",
	focus: "focus",
	click: "click",
	touch: "touchstart",
	pointer: "pointerdown"
}, by = {
	hover: "mouseleave",
	focus: "blur",
	click: "click",
	touch: "touchend",
	pointer: "pointerup"
};
function xy(e, t) {
	let n = e.indexOf(t);
	n !== -1 && e.splice(n, 1);
}
function Sy() {
	return new Promise((e) => requestAnimationFrame(() => {
		requestAnimationFrame(e);
	}));
}
var Cy = [], wy = null, Ty = {};
function Ey(e) {
	let t = Ty[e];
	return t || (t = Ty[e] = []), t;
}
var Dy = function() {};
typeof window < "u" && (Dy = window.Element);
function $(e) {
	return function(t) {
		return py(t.theme, e);
	};
}
var Oy = "__floating-vue__popper", ky = () => /* @__PURE__ */ oa({
	name: "VPopper",
	provide() {
		return { [Oy]: { parentPopper: this } };
	},
	inject: { [Oy]: { default: null } },
	props: {
		theme: {
			type: String,
			required: !0
		},
		targetNodes: {
			type: Function,
			required: !0
		},
		referenceNode: {
			type: Function,
			default: null
		},
		popperNode: {
			type: Function,
			required: !0
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: $("disabled")
		},
		positioningDisabled: {
			type: Boolean,
			default: $("positioningDisabled")
		},
		placement: {
			type: String,
			default: $("placement"),
			validator: (e) => vy.includes(e)
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: $("delay")
		},
		distance: {
			type: [Number, String],
			default: $("distance")
		},
		skidding: {
			type: [Number, String],
			default: $("skidding")
		},
		triggers: {
			type: Array,
			default: $("triggers")
		},
		showTriggers: {
			type: [Array, Function],
			default: $("showTriggers")
		},
		hideTriggers: {
			type: [Array, Function],
			default: $("hideTriggers")
		},
		popperTriggers: {
			type: Array,
			default: $("popperTriggers")
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: $("popperShowTriggers")
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: $("popperHideTriggers")
		},
		container: {
			type: [
				String,
				Object,
				Dy,
				Boolean
			],
			default: $("container")
		},
		boundary: {
			type: [String, Dy],
			default: $("boundary")
		},
		strategy: {
			type: String,
			validator: (e) => ["absolute", "fixed"].includes(e),
			default: $("strategy")
		},
		autoHide: {
			type: [Boolean, Function],
			default: $("autoHide")
		},
		handleResize: {
			type: Boolean,
			default: $("handleResize")
		},
		instantMove: {
			type: Boolean,
			default: $("instantMove")
		},
		eagerMount: {
			type: Boolean,
			default: $("eagerMount")
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: $("popperClass")
		},
		computeTransformOrigin: {
			type: Boolean,
			default: $("computeTransformOrigin")
		},
		autoMinSize: {
			type: Boolean,
			default: $("autoMinSize")
		},
		autoSize: {
			type: [Boolean, String],
			default: $("autoSize")
		},
		autoMaxSize: {
			type: Boolean,
			default: $("autoMaxSize")
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: $("autoBoundaryMaxSize")
		},
		preventOverflow: {
			type: Boolean,
			default: $("preventOverflow")
		},
		overflowPadding: {
			type: [Number, String],
			default: $("overflowPadding")
		},
		arrowPadding: {
			type: [Number, String],
			default: $("arrowPadding")
		},
		arrowOverflow: {
			type: Boolean,
			default: $("arrowOverflow")
		},
		flip: {
			type: Boolean,
			default: $("flip")
		},
		shift: {
			type: Boolean,
			default: $("shift")
		},
		shiftCrossAxis: {
			type: Boolean,
			default: $("shiftCrossAxis")
		},
		noAutoFocus: {
			type: Boolean,
			default: $("noAutoFocus")
		},
		disposeTimeout: {
			type: Number,
			default: $("disposeTimeout")
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	data() {
		return {
			isShown: !1,
			isMounted: !1,
			skipTransition: !1,
			classes: {
				showFrom: !1,
				showTo: !1,
				hideFrom: !1,
				hideTo: !0
			},
			result: {
				x: 0,
				y: 0,
				placement: "",
				strategy: this.strategy,
				arrow: {
					x: 0,
					y: 0,
					centerOffset: 0
				},
				transformOrigin: null
			},
			randomId: `popper_${[Math.random(), Date.now()].map((e) => e.toString(36).substring(2, 10)).join("_")}`,
			shownChildren: /* @__PURE__ */ new Set(),
			lastAutoHide: !0,
			pendingHide: !1,
			containsGlobalTarget: !1,
			isDisposed: !0,
			mouseDownContains: !1
		};
	},
	computed: {
		popperId() {
			return this.ariaId == null ? this.randomId : this.ariaId;
		},
		shouldMountContent() {
			return this.eagerMount || this.isMounted;
		},
		slotData() {
			return {
				popperId: this.popperId,
				isShown: this.isShown,
				shouldMountContent: this.shouldMountContent,
				skipTransition: this.skipTransition,
				autoHide: typeof this.autoHide == "function" ? this.lastAutoHide : this.autoHide,
				show: this.show,
				hide: this.hide,
				handleResize: this.handleResize,
				onResize: this.onResize,
				classes: Q(Q({}, this.classes), {}, { popperClass: this.popperClass }),
				result: this.positioningDisabled ? null : this.result,
				attrs: this.$attrs
			};
		},
		parentPopper() {
			var e;
			return (e = this[Oy]) == null ? void 0 : e.parentPopper;
		},
		hasPopperShowTriggerHover() {
			var e, t;
			return ((e = this.popperTriggers) == null ? void 0 : e.includes("hover")) || ((t = this.popperShowTriggers) == null ? void 0 : t.includes("hover"));
		}
	},
	watch: Q({
		shown: "$_autoShowHide",
		disabled(e) {
			e ? this.dispose() : this.init();
		},
		container() {
			var e = this;
			return F_(function* () {
				e.isShown && (e.$_ensureTeleport(), yield e.$_computePosition());
			})();
		},
		triggers: {
			handler: "$_refreshListeners",
			deep: !0
		},
		positioningDisabled: "$_refreshListeners"
	}, [
		"placement",
		"distance",
		"skidding",
		"boundary",
		"strategy",
		"overflowPadding",
		"arrowPadding",
		"preventOverflow",
		"shift",
		"shiftCrossAxis",
		"flip"
	].reduce((e, t) => (e[t] = "$_computePosition", e), {})),
	created() {
		this.autoMinSize && console.warn("[floating-vue] `autoMinSize` option is deprecated. Use `autoSize=\"min\"` instead."), this.autoMaxSize && console.warn("[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.");
	},
	mounted() {
		this.init(), this.$_detachPopperNode();
	},
	activated() {
		this.$_autoShowHide();
	},
	deactivated() {
		this.hide();
	},
	beforeUnmount() {
		this.dispose();
	},
	methods: {
		show({ event: e = null, skipDelay: t = !1, force: n = !1 } = {}) {
			var r, i;
			(r = this.parentPopper) != null && r.lockedChild && this.parentPopper.lockedChild !== this || (this.pendingHide = !1, (n || !this.disabled) && (((i = this.parentPopper) == null ? void 0 : i.lockedChild) === this && (this.parentPopper.lockedChild = null), this.$_scheduleShow(e, t), this.$emit("show"), this.$_showFrameLocked = !0, requestAnimationFrame(() => {
				this.$_showFrameLocked = !1;
			})), this.$emit("update:shown", !0));
		},
		hide({ event: e = null, skipDelay: t = !1 } = {}) {
			var n;
			if (!this.$_hideInProgress) {
				if (this.shownChildren.size > 0) {
					this.pendingHide = !0;
					return;
				}
				if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
					this.parentPopper && (this.parentPopper.lockedChild = this, clearTimeout(this.parentPopper.lockedChildTimer), this.parentPopper.lockedChildTimer = setTimeout(() => {
						this.parentPopper.lockedChild === this && (this.parentPopper.lockedChild.hide({ skipDelay: t }), this.parentPopper.lockedChild = null);
					}, 1e3));
					return;
				}
				((n = this.parentPopper) == null ? void 0 : n.lockedChild) === this && (this.parentPopper.lockedChild = null), this.pendingHide = !1, this.$_scheduleHide(e, t), this.$emit("hide"), this.$emit("update:shown", !1);
			}
		},
		init() {
			var e, t;
			this.isDisposed && (this.isDisposed = !1, this.isMounted = !1, this.$_events = [], this.$_preventShow = !1, this.$_referenceNode = (e = (t = this.referenceNode) == null ? void 0 : t.call(this)) == null ? this.$el : e, this.$_targetNodes = this.targetNodes().filter((e) => e.nodeType === e.ELEMENT_NODE), this.$_popperNode = this.popperNode(), this.$_innerNode = this.$_popperNode.querySelector(".v-popper__inner"), this.$_arrowNode = this.$_popperNode.querySelector(".v-popper__arrow-container"), this.$_swapTargetAttrs("title", "data-original-title"), this.$_detachPopperNode(), this.triggers.length && this.$_addEventListeners(), this.shown && this.show());
		},
		dispose() {
			this.isDisposed || (this.isDisposed = !0, this.$_removeEventListeners(), this.hide({ skipDelay: !0 }), this.$_detachPopperNode(), this.isMounted = !1, this.isShown = !1, this.$_updateParentShownChildren(!1), this.$_swapTargetAttrs("data-original-title", "title"));
		},
		onResize() {
			var e = this;
			return F_(function* () {
				e.isShown && (yield e.$_computePosition(), e.$emit("resize"));
			})();
		},
		$_computePosition() {
			var e = this;
			return F_(function* () {
				var t;
				if (e.isDisposed || e.positioningDisabled) return;
				let n = {
					strategy: e.strategy,
					middleware: []
				};
				(e.distance || e.skidding) && n.middleware.push(Ov({
					mainAxis: e.distance,
					crossAxis: e.skidding
				}));
				let r = e.placement.startsWith("auto");
				if (r ? n.middleware.push(Cv({ alignment: (t = e.placement.split("-")[1]) == null ? "" : t })) : n.placement = e.placement, e.preventOverflow && (e.shift && n.middleware.push(kv({
					padding: e.overflowPadding,
					boundary: e.boundary,
					crossAxis: e.shiftCrossAxis
				})), !r && e.flip && n.middleware.push(wv({
					padding: e.overflowPadding,
					boundary: e.boundary
				}))), n.middleware.push(xv({
					element: e.$_arrowNode,
					padding: e.arrowPadding
				})), e.arrowOverflow && n.middleware.push({
					name: "arrowOverflow",
					fn: ({ placement: e, rects: t, middlewareData: n }) => {
						let r, { centerOffset: i } = n.arrow;
						return r = e.startsWith("top") || e.startsWith("bottom") ? Math.abs(i) > t.reference.width / 2 : Math.abs(i) > t.reference.height / 2, { data: { overflow: r } };
					}
				}), e.autoMinSize || e.autoSize) {
					let t = e.autoSize ? e.autoSize : e.autoMinSize ? "min" : null;
					n.middleware.push({
						name: "autoSize",
						fn: ({ rects: n, placement: r, middlewareData: i }) => {
							var a;
							if ((a = i.autoSize) != null && a.skip) return {};
							let o, s;
							return r.startsWith("top") || r.startsWith("bottom") ? o = n.reference.width : s = n.reference.height, e.$_innerNode.style[t === "min" ? "minWidth" : t === "max" ? "maxWidth" : "width"] = o == null ? null : `${o}px`, e.$_innerNode.style[t === "min" ? "minHeight" : t === "max" ? "maxHeight" : "height"] = s == null ? null : `${s}px`, {
								data: { skip: !0 },
								reset: { rects: !0 }
							};
						}
					});
				}
				(e.autoMaxSize || e.autoBoundaryMaxSize) && (e.$_innerNode.style.maxWidth = null, e.$_innerNode.style.maxHeight = null, n.middleware.push(Av({
					boundary: e.boundary,
					padding: e.overflowPadding,
					apply: ({ availableWidth: t, availableHeight: n }) => {
						e.$_innerNode.style.maxWidth = t == null ? null : `${t}px`, e.$_innerNode.style.maxHeight = n == null ? null : `${n}px`;
					}
				})));
				let i = yield uy(e.$_referenceNode, e.$_popperNode, n);
				Object.assign(e.result, {
					x: i.x,
					y: i.y,
					placement: i.placement,
					strategy: i.strategy,
					arrow: Q(Q({}, i.middlewareData.arrow), i.middlewareData.arrowOverflow)
				});
			})();
		},
		$_scheduleShow(e, t = !1) {
			if (this.$_updateParentShownChildren(!0), this.$_hideInProgress = !1, clearTimeout(this.$_scheduleTimer), wy && this.instantMove && wy.instantMove && wy !== this.parentPopper) {
				wy.$_applyHide(!0), this.$_applyShow(!0);
				return;
			}
			t ? this.$_applyShow() : this.$_scheduleTimer = setTimeout(this.$_applyShow.bind(this), this.$_computeDelay("show"));
		},
		$_scheduleHide(e, t = !1) {
			if (this.shownChildren.size > 0) {
				this.pendingHide = !0;
				return;
			}
			this.$_updateParentShownChildren(!1), this.$_hideInProgress = !0, clearTimeout(this.$_scheduleTimer), this.isShown && (wy = this), t ? this.$_applyHide() : this.$_scheduleTimer = setTimeout(this.$_applyHide.bind(this), this.$_computeDelay("hide"));
		},
		$_computeDelay(e) {
			let t = this.delay;
			return parseInt(t && t[e] || t || 0);
		},
		$_applyShow() {
			var e = this;
			return F_(function* (t = !1) {
				clearTimeout(e.$_disposeTimer), clearTimeout(e.$_scheduleTimer), e.skipTransition = t, !e.isShown && (e.$_ensureTeleport(), yield Sy(), yield e.$_computePosition(), yield e.$_applyShowEffect(), e.positioningDisabled || e.$_registerEventListeners([...iy(e.$_referenceNode), ...iy(e.$_popperNode)], "scroll", () => {
					e.$_computePosition();
				}));
			}).apply(this, arguments);
		},
		$_applyShowEffect() {
			var e = this;
			return F_(function* () {
				if (e.$_hideInProgress) return;
				if (e.computeTransformOrigin) {
					let t = e.$_referenceNode.getBoundingClientRect(), n = e.$_popperNode.querySelector(".v-popper__wrapper"), r = n.parentNode.getBoundingClientRect(), i = t.x + t.width / 2 - (r.left + n.offsetLeft), a = t.y + t.height / 2 - (r.top + n.offsetTop);
					e.result.transformOrigin = `${i}px ${a}px`;
				}
				e.isShown = !0, e.$_applyAttrsToTarget({
					"aria-describedby": e.popperId,
					"data-popper-shown": ""
				});
				let t = e.showGroup;
				if (t) {
					let e;
					for (let n = 0; n < Cy.length; n++) e = Cy[n], e.showGroup !== t && (e.hide(), e.$emit("close-group"));
				}
				Cy.push(e), document.body.classList.add("v-popper--some-open");
				for (let t of hy(e.theme)) Ey(t).push(e), document.body.classList.add(`v-popper--some-open--${t}`);
				e.$emit("apply-show"), e.classes.showFrom = !0, e.classes.showTo = !1, e.classes.hideFrom = !1, e.classes.hideTo = !1, yield Sy(), e.classes.showFrom = !1, e.classes.showTo = !0, e.noAutoFocus || e.$_popperNode.focus();
			})();
		},
		$_applyHide() {
			var e = this;
			return F_(function* (t = !1) {
				if (e.shownChildren.size > 0) {
					e.pendingHide = !0, e.$_hideInProgress = !1;
					return;
				}
				if (clearTimeout(e.$_scheduleTimer), !e.isShown) return;
				e.skipTransition = t, xy(Cy, e), Cy.length === 0 && document.body.classList.remove("v-popper--some-open");
				for (let t of hy(e.theme)) {
					let n = Ey(t);
					xy(n, e), n.length === 0 && document.body.classList.remove(`v-popper--some-open--${t}`);
				}
				wy === e && (wy = null), e.isShown = !1, e.$_applyAttrsToTarget({
					"aria-describedby": void 0,
					"data-popper-shown": void 0
				}), clearTimeout(e.$_disposeTimer);
				let n = e.disposeTimeout;
				n !== null && (e.$_disposeTimer = setTimeout(() => {
					e.$_popperNode && (e.$_detachPopperNode(), e.isMounted = !1);
				}, n)), e.$_removeEventListeners("scroll"), e.$emit("apply-hide"), e.classes.showFrom = !1, e.classes.showTo = !1, e.classes.hideFrom = !0, e.classes.hideTo = !1, yield Sy(), e.classes.hideFrom = !1, e.classes.hideTo = !0;
			}).apply(this, arguments);
		},
		$_autoShowHide() {
			this.shown ? this.show() : this.hide();
		},
		$_ensureTeleport() {
			if (this.isDisposed) return;
			let e = this.container;
			if (typeof e == "string" ? e = window.document.querySelector(e) : e === !1 && (e = this.$_targetNodes[0].parentNode), !e) throw Error("No container for popover: " + this.container);
			e.appendChild(this.$_popperNode), this.isMounted = !0;
		},
		$_addEventListeners() {
			let e = (e) => {
				this.isShown && !this.$_hideInProgress || (e.usedByTooltip = !0, !this.$_preventShow && this.show({ event: e }));
			};
			this.$_registerTriggerListeners(this.$_targetNodes, yy, this.triggers, this.showTriggers, e), this.$_registerTriggerListeners([this.$_popperNode], yy, this.popperTriggers, this.popperShowTriggers, e);
			let t = (e) => {
				e.usedByTooltip || this.hide({ event: e });
			};
			this.$_registerTriggerListeners(this.$_targetNodes, by, this.triggers, this.hideTriggers, t), this.$_registerTriggerListeners([this.$_popperNode], by, this.popperTriggers, this.popperHideTriggers, t);
		},
		$_registerEventListeners(e, t, n) {
			this.$_events.push({
				targetNodes: e,
				eventType: t,
				handler: n
			}), e.forEach((e) => e.addEventListener(t, n, gy ? { passive: !0 } : void 0));
		},
		$_registerTriggerListeners(e, t, n, r, i) {
			let a = n;
			r != null && (a = typeof r == "function" ? r(a) : r), a.forEach((n) => {
				let r = t[n];
				r && this.$_registerEventListeners(e, r, i);
			});
		},
		$_removeEventListeners(e) {
			let t = [];
			this.$_events.forEach((n) => {
				let { targetNodes: r, eventType: i, handler: a } = n;
				!e || e === i ? r.forEach((e) => e.removeEventListener(i, a)) : t.push(n);
			}), this.$_events = t;
		},
		$_refreshListeners() {
			this.isDisposed || (this.$_removeEventListeners(), this.$_addEventListeners());
		},
		$_handleGlobalClose(e, t = !1) {
			this.$_showFrameLocked || (this.hide({ event: e }), e.closePopover ? this.$emit("close-directive") : this.$emit("auto-hide"), t && (this.$_preventShow = !0, setTimeout(() => {
				this.$_preventShow = !1;
			}, 300)));
		},
		$_detachPopperNode() {
			this.$_popperNode.parentNode && this.$_popperNode.parentNode.removeChild(this.$_popperNode);
		},
		$_swapTargetAttrs(e, t) {
			for (let n of this.$_targetNodes) {
				let r = n.getAttribute(e);
				r && (n.removeAttribute(e), n.setAttribute(t, r));
			}
		},
		$_applyAttrsToTarget(e) {
			for (let t of this.$_targetNodes) for (let n in e) {
				let r = e[n];
				r == null ? t.removeAttribute(n) : t.setAttribute(n, r);
			}
		},
		$_updateParentShownChildren(e) {
			let t = this.parentPopper;
			for (; t;) e ? t.shownChildren.add(this.randomId) : (t.shownChildren.delete(this.randomId), t.pendingHide && t.hide()), t = t.parentPopper;
		},
		$_isAimingPopper() {
			let e = this.$_referenceNode.getBoundingClientRect();
			if (Ry >= e.left && Ry <= e.right && zy >= e.top && zy <= e.bottom) {
				let e = this.$_popperNode.getBoundingClientRect(), t = Ry - Iy, n = zy - Ly, r = e.left + e.width / 2 - Iy + (e.top + e.height / 2) - Ly + e.width + e.height, i = Iy + t * r, a = Ly + n * r;
				return By(Iy, Ly, i, a, e.left, e.top, e.left, e.bottom) || By(Iy, Ly, i, a, e.left, e.top, e.right, e.top) || By(Iy, Ly, i, a, e.right, e.top, e.right, e.bottom) || By(Iy, Ly, i, a, e.left, e.bottom, e.right, e.bottom);
			}
			return !1;
		}
	},
	render() {
		return this.$slots.default(this.slotData);
	}
});
if (typeof document < "u" && typeof window < "u") {
	if (_y) {
		let e = !gy || {
			passive: !0,
			capture: !0
		};
		document.addEventListener("touchstart", (e) => Ay(e, !0), e), document.addEventListener("touchend", (e) => jy(e, !0), e);
	} else window.addEventListener("mousedown", (e) => Ay(e, !1), !0), window.addEventListener("click", (e) => jy(e, !1), !0);
	window.addEventListener("resize", Fy);
}
function Ay(e, t) {
	if (fy.autoHideOnMousedown) My(e, t);
	else for (let t = 0; t < Cy.length; t++) {
		let n = Cy[t];
		try {
			n.mouseDownContains = n.popperNode().contains(e.target);
		} catch (e) {}
	}
}
function jy(e, t) {
	fy.autoHideOnMousedown || My(e, t);
}
function My(e, t) {
	let n = {};
	for (let r = Cy.length - 1; r >= 0; r--) {
		let i = Cy[r];
		try {
			let r = i.containsGlobalTarget = i.mouseDownContains || i.popperNode().contains(e.target);
			i.pendingHide = !1, requestAnimationFrame(() => {
				if (i.pendingHide = !1, !n[i.randomId] && Ny(i, r, e)) {
					if (i.$_handleGlobalClose(e, t), !e.closeAllPopover && e.closePopover && r) {
						let e = i.parentPopper;
						for (; e;) n[e.randomId] = !0, e = e.parentPopper;
						return;
					}
					let a = i.parentPopper;
					for (; a && Ny(a, a.containsGlobalTarget, e);) a.$_handleGlobalClose(e, t), a = a.parentPopper;
				}
			});
		} catch (e) {}
	}
}
function Ny(e, t, n) {
	return n.closeAllPopover || n.closePopover && t || Py(e, n) && !t;
}
function Py(e, t) {
	if (typeof e.autoHide == "function") {
		let n = e.autoHide(t);
		return e.lastAutoHide = n, n;
	}
	return e.autoHide;
}
function Fy() {
	for (let e = 0; e < Cy.length; e++) Cy[e].$_computePosition();
}
var Iy = 0, Ly = 0, Ry = 0, zy = 0;
typeof window < "u" && window.addEventListener("mousemove", (e) => {
	Iy = Ry, Ly = zy, Ry = e.clientX, zy = e.clientY;
}, gy ? { passive: !0 } : void 0);
function By(e, t, n, r, i, a, o, s) {
	let c = ((o - i) * (t - a) - (s - a) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t)), l = ((n - e) * (t - a) - (r - t) * (e - i)) / ((s - a) * (n - e) - (o - i) * (r - t));
	return c >= 0 && c <= 1 && l >= 0 && l <= 1;
}
var Vy = { extends: ky() }, Hy = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
};
function Uy(e, t, n, r, i, a) {
	return Xc(), tl("div", {
		ref: "reference",
		class: Se(["v-popper", { "v-popper--shown": e.slotData.isShown }])
	}, [Do(e.$slots, "default", Ce(pl(e.slotData)))], 2);
}
var Wy = /* @__PURE__ */ Hy(Vy, [["render", Uy]]);
function Gy() {
	var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
	if (t > 0) return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
	if (e.indexOf("Trident/") > 0) {
		var n = e.indexOf("rv:");
		return parseInt(e.substring(n + 3, e.indexOf(".", n)), 10);
	}
	var r = e.indexOf("Edge/");
	return r > 0 ? parseInt(e.substring(r + 5, e.indexOf(".", r)), 10) : -1;
}
var Ky;
function qy() {
	qy.init || (qy.init = !0, Ky = Gy() !== -1);
}
var Jy = {
	name: "ResizeObserver",
	props: {
		emitOnMount: {
			type: Boolean,
			default: !1
		},
		ignoreWidth: {
			type: Boolean,
			default: !1
		},
		ignoreHeight: {
			type: Boolean,
			default: !1
		}
	},
	emits: ["notify"],
	mounted() {
		qy(), Er(() => {
			this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitOnMount && this.emitSize();
		});
		let e = document.createElement("object");
		this._resizeObject = e, e.setAttribute("aria-hidden", "true"), e.setAttribute("tabindex", -1), e.onload = this.addResizeHandlers, e.type = "text/html", Ky && this.$el.appendChild(e), e.data = "about:blank", Ky || this.$el.appendChild(e);
	},
	beforeUnmount() {
		this.removeResizeHandlers();
	},
	methods: {
		compareAndNotify() {
			(!this.ignoreWidth && this._w !== this.$el.offsetWidth || !this.ignoreHeight && this._h !== this.$el.offsetHeight) && (this._w = this.$el.offsetWidth, this._h = this.$el.offsetHeight, this.emitSize());
		},
		emitSize() {
			this.$emit("notify", {
				width: this._w,
				height: this._h
			});
		},
		addResizeHandlers() {
			this._resizeObject.contentDocument.defaultView.addEventListener("resize", this.compareAndNotify), this.compareAndNotify();
		},
		removeResizeHandlers() {
			this._resizeObject && this._resizeObject.onload && (!Ky && this._resizeObject.contentDocument && this._resizeObject.contentDocument.defaultView.removeEventListener("resize", this.compareAndNotify), this.$el.removeChild(this._resizeObject), this._resizeObject.onload = null, this._resizeObject = null);
		}
	}
}, Yy = /* @__PURE__ */ mi("data-v-b329ee4c");
fi("data-v-b329ee4c");
var Xy = {
	class: "resize-observer",
	tabindex: "-1"
};
pi(), Jy.render = /* @__PURE__ */ Yy((e, t, n, r, i, a) => (Xc(), nl("div", Xy))), Jy.__scopeId = "data-v-b329ee4c", Jy.__file = "src/components/ResizeObserver.vue";
var Zy = (e = "theme") => ({ computed: { themeClass() {
	return my(this[e]);
} } }), Qy = /* @__PURE__ */ oa({
	name: "VPopperContent",
	components: { ResizeObserver: Jy },
	mixins: [Zy()],
	props: {
		popperId: String,
		theme: String,
		shown: Boolean,
		mounted: Boolean,
		skipTransition: Boolean,
		autoHide: Boolean,
		handleResize: Boolean,
		classes: Object,
		result: Object
	},
	emits: ["hide", "resize"],
	methods: { toPx(e) {
		return e != null && !isNaN(e) ? `${e}px` : null;
	} }
}), $y = [
	"id",
	"aria-hidden",
	"tabindex",
	"data-popper-placement"
], eb = {
	ref: "inner",
	class: "v-popper__inner"
}, tb = [/* @__PURE__ */ ul("div", { class: "v-popper__arrow-outer" }, null, -1), /* @__PURE__ */ ul("div", { class: "v-popper__arrow-inner" }, null, -1)];
function nb(e, t, n, r, i, a) {
	let o = yo("ResizeObserver");
	return Xc(), tl("div", {
		id: e.popperId,
		ref: "popover",
		class: Se(["v-popper__popper", [
			e.themeClass,
			e.classes.popperClass,
			{
				"v-popper__popper--shown": e.shown,
				"v-popper__popper--hidden": !e.shown,
				"v-popper__popper--show-from": e.classes.showFrom,
				"v-popper__popper--show-to": e.classes.showTo,
				"v-popper__popper--hide-from": e.classes.hideFrom,
				"v-popper__popper--hide-to": e.classes.hideTo,
				"v-popper__popper--skip-transition": e.skipTransition,
				"v-popper__popper--arrow-overflow": e.result && e.result.arrow.overflow,
				"v-popper__popper--no-positioning": !e.result
			}
		]]),
		style: ge(e.result ? {
			position: e.result.strategy,
			transform: `translate3d(${Math.round(e.result.x)}px,${Math.round(e.result.y)}px,0)`
		} : void 0),
		"aria-hidden": e.shown ? "false" : "true",
		tabindex: e.autoHide ? 0 : void 0,
		"data-popper-placement": e.result ? e.result.placement : void 0,
		onKeyup: t[2] || (t[2] = uf((t) => e.autoHide && e.$emit("hide"), ["esc"]))
	}, [ul("div", {
		class: "v-popper__backdrop",
		onClick: t[0] || (t[0] = (t) => e.autoHide && e.$emit("hide"))
	}), ul("div", {
		class: "v-popper__wrapper",
		style: ge(e.result ? { transformOrigin: e.result.transformOrigin } : void 0)
	}, [ul("div", eb, [e.mounted ? (Xc(), tl(z, { key: 0 }, [ul("div", null, [Do(e.$slots, "default")]), e.handleResize ? (Xc(), nl(o, {
		key: 0,
		onNotify: t[1] || (t[1] = (t) => e.$emit("resize", t))
	})) : vl("", !0)], 64)) : vl("", !0)], 512), ul("div", {
		ref: "arrow",
		class: "v-popper__arrow-container",
		style: ge(e.result ? {
			left: e.toPx(e.result.arrow.x),
			top: e.toPx(e.result.arrow.y)
		} : void 0)
	}, tb, 4)], 4)], 46, $y);
}
var rb = /* @__PURE__ */ Hy(Qy, [["render", nb]]), ib = { methods: {
	show(...e) {
		return this.$refs.popper.show(...e);
	},
	hide(...e) {
		return this.$refs.popper.hide(...e);
	},
	dispose(...e) {
		return this.$refs.popper.dispose(...e);
	},
	onResize(...e) {
		return this.$refs.popper.onResize(...e);
	}
} }, ab = function() {};
typeof window < "u" && (ab = window.Element);
var ob = /* @__PURE__ */ oa({
	name: "VPopperWrapper",
	components: {
		Popper: Wy,
		PopperContent: rb
	},
	mixins: [ib, Zy("finalTheme")],
	props: {
		theme: {
			type: String,
			default: null
		},
		referenceNode: {
			type: Function,
			default: null
		},
		shown: {
			type: Boolean,
			default: !1
		},
		showGroup: {
			type: String,
			default: null
		},
		ariaId: { default: null },
		disabled: {
			type: Boolean,
			default: void 0
		},
		positioningDisabled: {
			type: Boolean,
			default: void 0
		},
		placement: {
			type: String,
			default: void 0
		},
		delay: {
			type: [
				String,
				Number,
				Object
			],
			default: void 0
		},
		distance: {
			type: [Number, String],
			default: void 0
		},
		skidding: {
			type: [Number, String],
			default: void 0
		},
		triggers: {
			type: Array,
			default: void 0
		},
		showTriggers: {
			type: [Array, Function],
			default: void 0
		},
		hideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperTriggers: {
			type: Array,
			default: void 0
		},
		popperShowTriggers: {
			type: [Array, Function],
			default: void 0
		},
		popperHideTriggers: {
			type: [Array, Function],
			default: void 0
		},
		container: {
			type: [
				String,
				Object,
				ab,
				Boolean
			],
			default: void 0
		},
		boundary: {
			type: [String, ab],
			default: void 0
		},
		strategy: {
			type: String,
			default: void 0
		},
		autoHide: {
			type: [Boolean, Function],
			default: void 0
		},
		handleResize: {
			type: Boolean,
			default: void 0
		},
		instantMove: {
			type: Boolean,
			default: void 0
		},
		eagerMount: {
			type: Boolean,
			default: void 0
		},
		popperClass: {
			type: [
				String,
				Array,
				Object
			],
			default: void 0
		},
		computeTransformOrigin: {
			type: Boolean,
			default: void 0
		},
		autoMinSize: {
			type: Boolean,
			default: void 0
		},
		autoSize: {
			type: [Boolean, String],
			default: void 0
		},
		autoMaxSize: {
			type: Boolean,
			default: void 0
		},
		autoBoundaryMaxSize: {
			type: Boolean,
			default: void 0
		},
		preventOverflow: {
			type: Boolean,
			default: void 0
		},
		overflowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowPadding: {
			type: [Number, String],
			default: void 0
		},
		arrowOverflow: {
			type: Boolean,
			default: void 0
		},
		flip: {
			type: Boolean,
			default: void 0
		},
		shift: {
			type: Boolean,
			default: void 0
		},
		shiftCrossAxis: {
			type: Boolean,
			default: void 0
		},
		noAutoFocus: {
			type: Boolean,
			default: void 0
		},
		disposeTimeout: {
			type: Number,
			default: void 0
		}
	},
	emits: {
		show: () => !0,
		hide: () => !0,
		"update:shown": (e) => !0,
		"apply-show": () => !0,
		"apply-hide": () => !0,
		"close-group": () => !0,
		"close-directive": () => !0,
		"auto-hide": () => !0,
		resize: () => !0
	},
	computed: { finalTheme() {
		var e;
		return (e = this.theme) == null ? this.$options.vPopperTheme : e;
	} },
	methods: { getTargetNodes() {
		return Array.from(this.$el.children).filter((e) => e !== this.$refs.popperContent.$el);
	} }
});
function sb(e, t, n, r, i, a) {
	let o = yo("PopperContent"), s = yo("Popper");
	return Xc(), nl(s, Sl({ ref: "popper" }, e.$props, {
		theme: e.finalTheme,
		"target-nodes": e.getTargetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		class: [e.themeClass],
		onShow: t[0] || (t[0] = () => e.$emit("show")),
		onHide: t[1] || (t[1] = () => e.$emit("hide")),
		"onUpdate:shown": t[2] || (t[2] = (t) => e.$emit("update:shown", t)),
		onApplyShow: t[3] || (t[3] = () => e.$emit("apply-show")),
		onApplyHide: t[4] || (t[4] = () => e.$emit("apply-hide")),
		onCloseGroup: t[5] || (t[5] = () => e.$emit("close-group")),
		onCloseDirective: t[6] || (t[6] = () => e.$emit("close-directive")),
		onAutoHide: t[7] || (t[7] = () => e.$emit("auto-hide")),
		onResize: t[8] || (t[8] = () => e.$emit("resize"))
	}), {
		default: hi(({ popperId: t, isShown: n, shouldMountContent: r, skipTransition: i, autoHide: a, show: s, hide: c, handleResize: l, onResize: u, classes: d, result: f }) => [Do(e.$slots, "default", {
			shown: n,
			show: s,
			hide: c
		}), V(o, {
			ref: "popperContent",
			"popper-id": t,
			theme: e.finalTheme,
			shown: n,
			mounted: r,
			"skip-transition": i,
			"auto-hide": a,
			"handle-resize": l,
			classes: d,
			result: f,
			onHide: c,
			onResize: u
		}, {
			default: hi(() => [Do(e.$slots, "popper", {
				shown: n,
				hide: c
			})]),
			_: 2
		}, 1032, [
			"popper-id",
			"theme",
			"shown",
			"mounted",
			"skip-transition",
			"auto-hide",
			"handle-resize",
			"classes",
			"result",
			"onHide",
			"onResize"
		])]),
		_: 3
	}, 16, [
		"theme",
		"target-nodes",
		"popper-node",
		"class"
	]);
}
var cb = /* @__PURE__ */ Hy(ob, [["render", sb]]), lb = Q(Q({}, cb), {}, {
	name: "VDropdown",
	vPopperTheme: "dropdown"
}), ub = Q(Q({}, cb), {}, {
	name: "VMenu",
	vPopperTheme: "menu"
}), db = Q(Q({}, cb), {}, {
	name: "VTooltip",
	vPopperTheme: "tooltip"
}), fb = /* @__PURE__ */ oa({
	name: "VTooltipDirective",
	components: {
		Popper: ky(),
		PopperContent: rb
	},
	mixins: [ib],
	inheritAttrs: !1,
	props: {
		theme: {
			type: String,
			default: "tooltip"
		},
		html: {
			type: Boolean,
			default: (e) => py(e.theme, "html")
		},
		content: {
			type: [
				String,
				Number,
				Function
			],
			default: null
		},
		loadingContent: {
			type: String,
			default: (e) => py(e.theme, "loadingContent")
		},
		targetNodes: {
			type: Function,
			required: !0
		}
	},
	data() {
		return { asyncContent: null };
	},
	computed: {
		isContentAsync() {
			return typeof this.content == "function";
		},
		loading() {
			return this.isContentAsync && this.asyncContent == null;
		},
		finalContent() {
			return this.isContentAsync ? this.loading ? this.loadingContent : this.asyncContent : this.content;
		}
	},
	watch: {
		content: {
			handler() {
				this.fetchContent(!0);
			},
			immediate: !0
		},
		finalContent() {
			var e = this;
			return F_(function* () {
				yield e.$nextTick(), e.$refs.popper.onResize();
			})();
		}
	},
	created() {
		this.$_fetchId = 0;
	},
	methods: {
		fetchContent(e) {
			if (typeof this.content == "function" && this.$_isShown && (e || !this.$_loading && this.asyncContent == null)) {
				this.asyncContent = null, this.$_loading = !0;
				let e = ++this.$_fetchId, t = this.content(this);
				t.then ? t.then((t) => this.onResult(e, t)) : this.onResult(e, t);
			}
		},
		onResult(e, t) {
			e === this.$_fetchId && (this.$_loading = !1, this.asyncContent = t);
		},
		onShow() {
			this.$_isShown = !0, this.fetchContent();
		},
		onHide() {
			this.$_isShown = !1;
		}
	}
}), pb = ["innerHTML"], mb = ["textContent"];
function hb(e, t, n, r, i, a) {
	let o = yo("PopperContent"), s = yo("Popper");
	return Xc(), nl(s, Sl({ ref: "popper" }, e.$attrs, {
		theme: e.theme,
		"target-nodes": e.targetNodes,
		"popper-node": () => e.$refs.popperContent.$el,
		onApplyShow: e.onShow,
		onApplyHide: e.onHide
	}), {
		default: hi(({ popperId: t, isShown: n, shouldMountContent: r, skipTransition: i, autoHide: a, hide: s, handleResize: c, onResize: l, classes: u, result: d }) => [V(o, {
			ref: "popperContent",
			class: Se({ "v-popper--tooltip-loading": e.loading }),
			"popper-id": t,
			theme: e.theme,
			shown: n,
			mounted: r,
			"skip-transition": i,
			"auto-hide": a,
			"handle-resize": c,
			classes: u,
			result: d,
			onHide: s,
			onResize: l
		}, {
			default: hi(() => [e.html ? (Xc(), tl("div", {
				key: 0,
				innerHTML: e.finalContent
			}, null, 8, pb)) : (Xc(), tl("div", {
				key: 1,
				textContent: Ke(e.finalContent)
			}, null, 8, mb))]),
			_: 2
		}, 1032, [
			"class",
			"popper-id",
			"theme",
			"shown",
			"mounted",
			"skip-transition",
			"auto-hide",
			"handle-resize",
			"classes",
			"result",
			"onHide",
			"onResize"
		])]),
		_: 1
	}, 16, [
		"theme",
		"target-nodes",
		"popper-node",
		"onApplyShow",
		"onApplyHide"
	]);
}
var gb = /* @__PURE__ */ Hy(fb, [["render", hb]]), _b = "v-popper--has-tooltip";
function vb(e, t) {
	let n = e.placement;
	if (!n && t) for (let e of vy) t[e] && (n = e);
	return n || (n = py(e.theme || "tooltip", "placement")), n;
}
function yb(e, t, n) {
	let r, i = typeof t;
	return r = i === "string" ? { content: t } : t && i === "object" ? t : { content: !1 }, r.placement = vb(r, n), r.targetNodes = () => [e], r.referenceNode = () => e, r;
}
var bb, xb, Sb = 0;
function Cb() {
	if (bb) return;
	xb = /* @__PURE__ */ kn([]), bb = vf({
		name: "VTooltipDirectiveApp",
		setup() {
			return { directives: xb };
		},
		render() {
			return this.directives.map((e) => eu(gb, Q(Q({}, e.options), {}, {
				shown: e.shown || e.options.shown,
				key: e.id
			})));
		},
		devtools: { hide: !0 }
	});
	let e = document.createElement("div");
	document.body.appendChild(e), bb.mount(e);
}
function wb(e, t, n) {
	Cb();
	let r = /* @__PURE__ */ kn(yb(e, t, n)), i = /* @__PURE__ */ kn(!1), a = {
		id: Sb++,
		options: r,
		shown: i
	};
	return xb.value.push(a), e.classList && e.classList.add(_b), e.$_popper = {
		options: r,
		item: a,
		show() {
			i.value = !0;
		},
		hide() {
			i.value = !1;
		}
	};
}
function Tb(e) {
	if (e.$_popper) {
		let t = xb.value.indexOf(e.$_popper.item);
		t !== -1 && xb.value.splice(t, 1), delete e.$_popper, delete e.$_popperOldShown, delete e.$_popperMountTarget;
	}
	e.classList && e.classList.remove(_b);
}
function Eb(e, { value: t, modifiers: n }) {
	let r = yb(e, t, n);
	if (!r.content || py(r.theme || "tooltip", "disabled")) Tb(e);
	else {
		let i;
		e.$_popper ? (i = e.$_popper, i.options.value = r) : i = wb(e, t, n), typeof t.shown < "u" && t.shown !== e.$_popperOldShown && (e.$_popperOldShown = t.shown, t.shown ? i.show() : i.hide());
	}
}
var Db = {
	beforeMount: Eb,
	updated: Eb,
	beforeUnmount(e) {
		Tb(e);
	}
};
function Ob(e) {
	e.addEventListener("mousedown", Ab), e.addEventListener("click", Ab), e.addEventListener("touchstart", jb, gy ? { passive: !0 } : !1);
}
function kb(e) {
	e.removeEventListener("mousedown", Ab), e.removeEventListener("click", Ab), e.removeEventListener("touchstart", jb), e.removeEventListener("touchend", Mb), e.removeEventListener("touchcancel", Nb);
}
function Ab(e) {
	let t = e.currentTarget;
	e.closePopover = !t.$_vclosepopover_touch, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
}
function jb(e) {
	if (e.changedTouches.length === 1) {
		let t = e.currentTarget;
		t.$_vclosepopover_touch = !0, t.$_vclosepopover_touchPoint = e.changedTouches[0], t.addEventListener("touchend", Mb), t.addEventListener("touchcancel", Nb);
	}
}
function Mb(e) {
	let t = e.currentTarget;
	if (t.$_vclosepopover_touch = !1, e.changedTouches.length === 1) {
		let n = e.changedTouches[0], r = t.$_vclosepopover_touchPoint;
		e.closePopover = Math.abs(n.screenY - r.screenY) < 20 && Math.abs(n.screenX - r.screenX) < 20, e.closeAllPopover = t.$_closePopoverModifiers && !!t.$_closePopoverModifiers.all;
	}
}
function Nb(e) {
	let t = e.currentTarget;
	t.$_vclosepopover_touch = !1;
}
var Pb = {
	beforeMount(e, { value: t, modifiers: n }) {
		e.$_closePopoverModifiers = n, (typeof t > "u" || t) && Ob(e);
	},
	updated(e, { value: t, oldValue: n, modifiers: r }) {
		e.$_closePopoverModifiers = r, t !== n && (typeof t > "u" || t ? Ob(e) : kb(e));
	},
	beforeUnmount(e) {
		kb(e);
	}
}, Fb = lb, Ib = db;
function Lb(e, t = {}) {
	e.$_vTooltipInstalled || (e.$_vTooltipInstalled = !0, dy(fy, t), e.directive("tooltip", Db), e.directive("close-popper", Pb), e.component("VTooltip", db), e.component("VDropdown", lb), e.component("VMenu", ub));
}
var Rb = {
	version: "5.2.2",
	install: Lb,
	options: fy
}, zb = typeof navigator < "u" && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), Bb = { install: (e, t = {}) => {
	var n, r, i, a, o, s;
	if (typeof window < "u" && (window.addEventListener("vitepress:codeGroupTabActivate", Fy, { passive: !0 }), window.addEventListener("click", (e) => {
		e.composedPath().some((e) => {
			var t, n, r, i;
			return (e == null || (t = e.classList) == null || (n = t.contains) == null ? void 0 : n.call(t, "vp-code-group")) || (e == null || (r = e.classList) == null || (i = r.contains) == null ? void 0 : i.call(r, "tabs"));
		}) && Fy();
	}, { passive: !0 }), !zb)) {
		let t = !1;
		window.addEventListener("mousedown", () => {
			t = !0;
		}, { passive: !0 }), window.addEventListener("mouseup", () => {
			t = !1;
		}, { passive: !0 });
		let n = e.component;
		e.component = function(...e) {
			let r = n.apply(this, e);
			if (e.length >= 2 && e[0] === "VMenu") try {
				let n = e[1].components.Popper.extends, r = n.methods.show;
				n.methods.show = function(...e) {
					if (!t) return r.apply(this, e);
				};
				let i = n.methods.hide;
				n.methods.hide = function(...e) {
					if (!t) return i.apply(this, e);
				};
			} catch (e) {
				console.error("Failed to patch FloatingVue", e);
			}
			return r;
		};
	}
	e.use(Rb, Q(Q({ strategy: "fixed" }, t), {}, { themes: Q(Q({}, t.themes), {}, {
		twoslash: Q({
			$extend: "dropdown",
			triggers: zb ? ["touch"] : ["hover", "touch"],
			popperTriggers: zb ? ["touch"] : ["hover", "touch"],
			placement: "bottom-start",
			overflowPadding: 10,
			delay: {
				show: 200,
				hide: 0
			},
			handleResize: !1,
			autoHide: !0,
			noAutoFocus: !0,
			instantMove: !0,
			flip: !1,
			arrowPadding: 8,
			autoBoundaryMaxSize: !0
		}, (n = (r = t.themes) == null ? void 0 : r.twoslash) == null ? {} : n),
		"twoslash-query": Q({
			$extend: "twoslash",
			triggers: ["click"],
			popperTriggers: ["click"],
			autoHide: !1,
			noAutoFocus: !0
		}, (i = (a = t.themes) == null ? void 0 : a["twoslash-query"]) == null ? {} : i),
		"twoslash-completion": Q({
			$extend: "twoslash-query",
			triggers: ["click"],
			popperTriggers: ["click"],
			autoHide: !1,
			noAutoFocus: !0,
			distance: 0,
			arrowOverflow: !0
		}, (o = (s = t.themes) == null ? void 0 : s["twoslash-completion"]) == null ? {} : o)
	}) }));
} };
//#endregion
export { wi as $, pl as A, so as B, tl as C, ge as Ct, qa as D, V as E, Sl as F, Do as G, Xc as H, Er as I, xo as J, yo as K, Qa as L, xi as M, bi as N, oa as O, es as P, Di as Q, uo as R, vl as S, Ce as St, gl as T, yi as U, fo as V, To as W, Yo as X, Cs as Y, ua as Z, z as _, Un as _t, R_ as a, et as at, ul as b, Pn as bt, N_ as c, En as ct, vf as d, yn as dt, Ei as et, qd as f, kn as ft, cf as g, P as gt, uf as h, An as ht, Fy as i, $e as it, eu as j, Dl as k, Cu as l, tt as lt, Vu as m, bn as mt, Ib as n, _i as nt, Q as o, Cn as ot, Kd as p, vn as pt, So as q, Fb as r, zn as rt, F_ as s, F as st, Bb as t, hi as tt, Pd as u, _n as ut, Xa as v, Bn as vt, _l as w, Ke as wt, nl as x, Se as xt, $l as y, Fn as yt, $a as z };
