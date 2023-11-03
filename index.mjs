// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.1.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.1.1-esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-erlang@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.1.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function f(u,c,g){var b,x,y,w,G;if(!l(u))throw new TypeError(v("0pb4b,Ht",u));if(!o(c))throw new TypeError(v("0pb72,Go",c));if(arguments.length>2){if(!d(g))throw new TypeError(v("0pb2V,FD",g));if(b=i({},g),p(b,"iter")){if(!m(b.iter))throw new TypeError(v("0pb2t,G9","iter",b.iter))}else b.iter=j;y=h(u,c,b),void 0===b.prng&&!1!==b.copy&&(b.state=y.state)}else y=h(u,c),b={iter:j,state:y.state};return G=0,e(x={},"next",P),e(x,"return",L),b&&b.prng?(e(x,"seed",null),e(x,"seedLength",null),s(x,"state",n(null),r),e(x,"stateLength",null),e(x,"byteLength",null)):(t(x,"seed",R),t(x,"seedLength",E),s(x,"state",F,H),t(x,"stateLength",T),t(x,"byteLength",D)),e(x,"PRNG",y.PRNG),a&&e(x,a,N),x;function P(){return G+=1,w||G>b.iter?{done:!0}:{value:y(),done:!1}}function L(e){return w=!0,arguments.length?{value:e,done:!0}:{done:!0}}function N(){return f(u,c,b)}function R(){return y.PRNG.seed}function E(){return y.PRNG.seedLength}function T(){return y.PRNG.stateLength}function D(){return y.PRNG.byteLength}function F(){return y.PRNG.state}function H(e){y.PRNG.state=e}}export{f as default};
//# sourceMappingURL=index.mjs.map
