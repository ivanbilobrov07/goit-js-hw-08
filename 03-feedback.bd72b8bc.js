!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}));var i,u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var a="Expected a function",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,d=/^0o[0-7]+$/i,s=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,p="object"==typeof self&&self&&self.Object===Object&&self,y=v||p||Function("return this")(),b=Object.prototype.toString,m=Math.max,g=Math.min,O=function(){return y.Date.now()};function h(e,t,r){var n,o,i,u,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(a);function p(t){var r=n,i=o;return n=o=void 0,c=t,u=e.apply(i,r)}function y(e){return c=e,f=setTimeout(h,t),d?p(e):u}function b(e){var r=e-l;return void 0===l||r>=t||r<0||s&&e-c>=i}function h(){var e=O();if(b(e))return S(e);f=setTimeout(h,function(e){var r=t-(e-l);return s?g(r,i-(e-c)):r}(e))}function S(e){return f=void 0,v&&n?p(e):(n=o=void 0,u)}function x(){var e=O(),r=b(e);if(n=arguments,o=this,l=e,r){if(void 0===f)return y(l);if(s)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=w(t)||0,j(r)&&(d=!!r.leading,i=(s="maxWait"in r)?m(w(r.maxWait)||0,t):i,v="trailing"in r?!!r.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),c=0,n=l=o=f=void 0},x.flush=function(){return void 0===f?u:S(O())},x}function j(t){var r=void 0===t?"undefined":e(u)(t);return!!t&&("object"==r||"function"==r)}function w(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(u)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==b.call(t)}(t))return NaN;if(j(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=j(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(f,"");var n=c.test(t);return n||d.test(t)?s(t.slice(2),n?2:8):l.test(t)?NaN:+t}i=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(a);return j(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),h(e,t,{leading:n,maxWait:t,trailing:o})};var S="feedback-form-state",x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){_.default(e,t,r[t])}))}return e};var T,_=(T=o("hKHmD"))&&T.__esModule?T:{default:T};var E=JSON.parse(localStorage.getItem(S)),N=E?e(x)({},E):{},I=function(e){var t=e.currentTarget.elements,r=Object.entries(t),n=[],o=!0,i=!0,u=!1,a=void 0;try{for(var f,l=r[Symbol.iterator]();!(i=(f=l.next()).done);i=!0){var c=f.value;t.namedItem(c[0])&&n.push(c)}}catch(e){u=!0,a=e}finally{try{i||null==l.return||l.return()}finally{if(u)throw a}}return n.forEach((function(e){""===e[1].value&&(console.log(e),o=!1)})),o},M=document.querySelector(".feedback-form");M.addEventListener("input",e(i)((function(e){N[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(N))}),500)),M.addEventListener("submit",(function(e){I(e)&&(e.preventDefault(),localStorage.removeItem(S),e.currentTarget.reset())})),localStorage.getItem(S)&&function(e){var t=JSON.parse(localStorage.getItem(S)),r=e.elements,n=Object.entries(t),o=!0,i=!1,u=void 0;try{for(var a,f=n[Symbol.iterator]();!(o=(a=f.next()).done);o=!0){var l=a.value,c=l[0];r.namedItem(c).value=l[1]}}catch(e){i=!0,u=e}finally{try{o||null==f.return||f.return()}finally{if(i)throw u}}}(M)}();
//# sourceMappingURL=03-feedback.bd72b8bc.js.map
