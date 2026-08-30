import { n as e } from "../rolldown-runtime-B0aSnxlc.js";
import { C as t, Ct as n, E as r, G as i, H as a, O as o, S as s, W as c, _ as l, b as u, bt as d, ft as f, m as p, nt as m, p as h, r as g, tt as _, wt as v, x as y, xt as b } from "../modules/shiki-BdJWbgyq.js";
import { h as x, u as S } from "../modules/vue-BdHhyihZ.js";
import { s as C } from "../SlideWrapper-BAhnJH9e.js";
import { t as w } from "./IconButton-BREksc9A.js";
import { p as T } from "./shortcuts-CsZgd8aZ.js";
//#endregion
//#region node_modules/@slidev/client/internals/Draggable.vue
var E = /* @__PURE__ */ o({
	__name: "Draggable",
	props: {
		storageKey: {},
		initial: {}
	},
	setup(e) {
		var r;
		let o = e, s = f(null), c = (r = o.initial) == null ? {
			x: 0,
			y: 0
		} : r, l = o.storageKey ? x(o.storageKey, c) : f(c), { style: u } = S(s, { initialValue: l });
		return (e, r) => (a(), t("div", {
			ref_key: "el",
			ref: s,
			class: "fixed",
			style: n(d(u))
		}, [i(e.$slots, "default")], 4));
	}
}), D = { class: "flex bg-main p-2" }, O = { class: "inline-block w-7 text-center" }, k = { class: "pt-.5" }, A = { class: "i-carbon:pin-filled transform -rotate-45" }, j = { class: "i-carbon:pin" }, M = { class: "i-carbon:error" }, N = { class: "i-carbon:close-outline" }, P = /*@__PURE__*/ o({
	__name: "DrawingControls",
	setup(e) {
		let { brush: i, canClear: o, canRedo: x, canUndo: S, clear: P, drauu: F, drawingEnabled: I, drawingMode: L, drawingPinned: R, brushColors: z } = C(), B = f(!1);
		function V(e) {
			e.preventDefault(), e.stopPropagation(), requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					B.value = !0;
				});
			});
		}
		function H(e) {
			e.pointerType !== "mouse" && V(e);
		}
		function U() {
			F.undo();
		}
		function W() {
			F.redo();
		}
		let G = "stylus";
		function K(e) {
			L.value = e, I.value = !0, e !== "eraseLine" && (G = e);
		}
		function q(e) {
			i.value.color = e, I.value = !0, L.value = G;
		}
		return (e, f) => d(I) || d(R) ? (a(), y(E, {
			key: 0,
			class: b(["flex flex-wrap text-xl p-2 gap-1 rounded-md bg-main shadow transition-opacity duration-200 z-nav border border-main", !d(I) && d(R) ? "opacity-40 hover:opacity-90" : ""]),
			"storage-key": "slidev-drawing-pos",
			"initial-x": 10,
			"initial-y": 10
		}, {
			default: _(() => [
				r(w, {
					title: "Draw with stylus",
					class: b({ shallow: d(L) !== "stylus" }),
					onClick: f[0] || (f[0] = (e) => K("stylus"))
				}, {
					default: _(() => [...f[14] || (f[14] = [u("div", { class: "i-carbon:pen" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(w, {
					title: "Draw a line",
					class: b({ shallow: d(L) !== "line" }),
					onClick: f[1] || (f[1] = (e) => K("line"))
				}, {
					default: _(() => [...f[15] || (f[15] = [u("svg", {
						width: "1em",
						height: "1em",
						class: "-mt-0.5",
						preserveAspectRatio: "xMidYMid meet",
						viewBox: "0 0 24 24"
					}, [u("path", {
						d: "M21.71 3.29a1 1 0 0 0-1.42 0l-18 18a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l18-18a1 1 0 0 0 0-1.42z",
						fill: "currentColor"
					})], -1)])]),
					_: 1
				}, 8, ["class"]),
				r(w, {
					title: "Draw an arrow",
					class: b({ shallow: d(L) !== "arrow" }),
					onClick: f[2] || (f[2] = (e) => K("arrow"))
				}, {
					default: _(() => [...f[16] || (f[16] = [u("div", { class: "i-carbon:arrow-up-right" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(w, {
					title: "Draw an ellipse",
					class: b({ shallow: d(L) !== "ellipse" }),
					onClick: f[3] || (f[3] = (e) => K("ellipse"))
				}, {
					default: _(() => [...f[17] || (f[17] = [u("div", { class: "i-carbon:radio-button" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(w, {
					title: "Draw a rectangle",
					class: b({ shallow: d(L) !== "rectangle" }),
					onClick: f[4] || (f[4] = (e) => K("rectangle"))
				}, {
					default: _(() => [...f[18] || (f[18] = [u("div", { class: "i-carbon:checkbox" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(w, {
					title: "Erase",
					class: b({ shallow: d(L) !== "eraseLine" }),
					onClick: f[5] || (f[5] = (e) => K("eraseLine"))
				}, {
					default: _(() => [...f[19] || (f[19] = [u("div", { class: "i-carbon:erase" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(T),
				r(d(g), {
					shown: B.value,
					"onUpdate:shown": f[8] || (f[8] = (e) => B.value = e),
					triggers: []
				}, {
					popper: _(() => [u("div", D, [u("div", O, v(d(i).size), 1), u("div", k, [m(u("input", {
						"onUpdate:modelValue": f[6] || (f[6] = (e) => d(i).size = e),
						type: "range",
						min: "1",
						max: "15",
						onChange: f[7] || (f[7] = (e) => L.value = d(G))
					}, null, 544), [[h, d(i).size]])])])]),
					default: _(() => [r(w, {
						title: "Adjust stroke width",
						class: b({ shallow: d(L) === "eraseLine" }),
						onClick: V,
						onPointerdown: H,
						onPointerup: H,
						onTouchend: V
					}, {
						default: _(() => [...f[20] || (f[20] = [u("svg", {
							viewBox: "0 0 32 32",
							width: "1.2em",
							height: "1.2em"
						}, [
							u("line", {
								x1: "2",
								y1: "15",
								x2: "22",
								y2: "4",
								stroke: "currentColor",
								"stroke-width": "1",
								"stroke-linecap": "round"
							}),
							u("line", {
								x1: "2",
								y1: "24",
								x2: "28",
								y2: "10",
								stroke: "currentColor",
								"stroke-width": "2",
								"stroke-linecap": "round"
							}),
							u("line", {
								x1: "7",
								y1: "31",
								x2: "29",
								y2: "19",
								stroke: "currentColor",
								"stroke-width": "3",
								"stroke-linecap": "round"
							})
						], -1)])]),
						_: 1
					}, 8, ["class"])]),
					_: 1
				}, 8, ["shown"]),
				(a(!0), t(l, null, c(d(z), (e) => (a(), y(w, {
					key: e,
					title: "Set brush color",
					class: b(d(i).color === e && d(L) !== "eraseLine" ? "active" : "shallow"),
					onClick: (t) => q(e)
				}, {
					default: _(() => [u("div", {
						class: b(["w-6 h-6 transition-all transform border", d(i).color === e ? "rounded-md border-gray-300/50" : "rounded-1/2 scale-85 border-white"]),
						style: n(d(I) ? { background: e } : { borderColor: e })
					}, null, 6)]),
					_: 2
				}, 1032, ["class", "onClick"]))), 128)),
				r(T),
				r(w, {
					title: "Undo",
					class: b({ disabled: !d(S) }),
					onClick: f[9] || (f[9] = (e) => U())
				}, {
					default: _(() => [...f[21] || (f[21] = [u("div", { class: "i-carbon:undo" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(w, {
					title: "Redo",
					class: b({ disabled: !d(x) }),
					onClick: f[10] || (f[10] = (e) => W())
				}, {
					default: _(() => [...f[22] || (f[22] = [u("div", { class: "i-carbon:redo" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(w, {
					title: "Delete",
					class: b({ disabled: !d(o) }),
					onClick: f[11] || (f[11] = (e) => d(P)())
				}, {
					default: _(() => [...f[23] || (f[23] = [u("div", { class: "i-carbon:trash-can" }, null, -1)])]),
					_: 1
				}, 8, ["class"]),
				r(T),
				r(w, {
					title: d(R) ? "Unpin drawing" : "Pin drawing",
					class: b({ shallow: !d(R) }),
					onClick: f[12] || (f[12] = (e) => R.value = !d(R))
				}, {
					default: _(() => [m(u("div", A, null, 512), [[p, d(R)]]), m(u("div", j, null, 512), [[p, !d(R)]])]),
					_: 1
				}, 8, ["title", "class"]),
				d(I) ? (a(), y(w, {
					key: 0,
					title: d(R) ? "Drawing pinned" : "Drawing unpinned",
					class: b({ shallow: !d(I) }),
					onClick: f[13] || (f[13] = (e) => I.value = !d(I))
				}, {
					default: _(() => [m(u("div", M, null, 512), [[p, d(R)]]), m(u("div", N, null, 512), [[p, !d(R)]])]),
					_: 1
				}, 8, ["title", "class"])) : s("v-if", !0)
			]),
			_: 1
		}, 8, ["class"])) : s("v-if", !0);
	}
}), F = /* @__PURE__ */ e({ default: () => I }), I = P;
//#endregion
export { F as n, I as t };
