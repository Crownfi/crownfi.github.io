(()=>{"use strict";var e,t,r,o,n={},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return n[e].call(r.exports,r,r.exports,i),r.loaded=!0,r.exports}i.m=n,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,i.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"==typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"==typeof r.then)return r}var n=Object.create(null);i.r(n);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,i.d(n,a),n},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((t,r)=>(i.f[r](e,t),t)),[])),i.u=e=>e+".js",i.miniCssF=e=>{},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="@crownfi/sei-swaps-webapp:",i.l=(e,t,n,a)=>{if(r[e])r[e].push(t);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){s=d;break}}s||(c=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.setAttribute("data-webpack",o+n),s.src=e),r[e]=[t];var p=(t,o)=>{s.onerror=s.onload=null,clearTimeout(f);var n=r[e];if(delete r[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),c&&document.head.appendChild(s)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.f.j=(t,r)=>{var o=i.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,n)=>o=e[t]=[r,n]));r.push(o[2]=n);var a=i.p+i.u(t),s=new Error;i.l(a,(r=>{if(i.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",s.name="ChunkLoadError",s.type=n,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[a,s,c]=r,l=0;if(a.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);c&&c(i)}for(t&&t(r);l<a.length;l++)n=a[l],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunk_crownfi_sei_swaps_webapp=self.webpackChunk_crownfi_sei_swaps_webapp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{function e(){try{const e="test-button-"+Date.now().toString(36);class t extends HTMLButtonElement{}customElements.define(e,t,{extends:"button"});const r=document.createElement("button",{is:e});return r instanceof HTMLButtonElement&&r instanceof t}catch(e){return!1}}(async function(){if("undefined"==typeof HTMLDialogElement)throw new Error("Your browser is too outdated. (It doesn't support <dialog> elements)");e()||(console.warn("Oh no, you're using safari :("),Function.prototype(await i.e(145).then(i.t.bind(i,94145,23))),e()&&console.error("The polyfill didn't work like I expected. Here be dragons!")),await new Promise((e=>{"loading"==document.readyState?document.addEventListener("DOMContentLoaded",(()=>{e()})):e()}));const{main:t}=await Promise.all([i.e(880),i.e(412)]).then(i.bind(i,11159));await t()})().catch((e=>{alert("Main function threw an error:\n"+e.name+": "+e.message+"\nMore details in console"),console.error(e)}))})()})();