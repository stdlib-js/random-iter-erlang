/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-erlang@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";var j=e,g=t,c=n,f=s,v=i,b=r,x=o.isPrimitive,y=d,P=m.isPrimitive,w=l.isPrimitive,L=a,G=u,N=p.factory,R=h;var E=function e(t,n,s){var i,r,o,d,m;if(!w(t))throw new TypeError("invalid argument. First argument must be a positive integer. Value: `"+t+"`.");if(!x(n))throw new TypeError("invalid argument. Second argument must be a positive number. Value: `"+n+"`.");if(arguments.length>2){if(!y(s))throw new TypeError("invalid argument. Options argument must be an object. Value: `"+s+"`.");if(i=b(s,1),L(i,"iter")){if(!P(i.iter))throw new TypeError("invalid option. `iter` option must be a nonnegative integer. Option: `"+i.iter+"`.")}else i.iter=G;o=N(t,n,i),void 0===i.prng&&!1!==i.copy&&(i.state=o.state)}else o=N(t,n),i={iter:G,state:o.state};return m=0,j(r={},"next",l),j(r,"return",a),i&&i.prng?(j(r,"seed",null),j(r,"seedLength",null),c(r,"state",f(null),v),j(r,"stateLength",null),j(r,"byteLength",null)):(g(r,"seed",p),g(r,"seedLength",h),c(r,"state",V,O),g(r,"stateLength",E),g(r,"byteLength",T)),j(r,"PRNG",o.PRNG),R&&j(r,R,u),r;function l(){return m+=1,d||m>i.iter?{done:!0}:{value:o(),done:!1}}function a(e){return d=!0,arguments.length?{value:e,done:!0}:{done:!0}}function u(){return e(t,n,i)}function p(){return o.PRNG.seed}function h(){return o.PRNG.seedLength}function E(){return o.PRNG.stateLength}function T(){return o.PRNG.byteLength}function V(){return o.PRNG.state}function O(e){o.PRNG.state=e}},T=E;export{T as default};
//# sourceMappingURL=index.mjs.map
