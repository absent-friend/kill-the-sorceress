import{p as Qe}from"./chunk-BcbBGIHA.js";/* empty css              */const d={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return be(this.context.count)},getNextContextId(){return be(this.context.count++)}};function be(e){const t=String(e),n=t.length-1;return d.context.id+(n?String.fromCharCode(96+n):"")+t}function we(e){d.context=e}function Je(){return{...d.context,id:d.getNextContextId(),count:0}}const Ze=(e,t)=>e===t,P=Symbol("solid-proxy"),et=typeof Proxy=="function",oe=Symbol("solid-track"),ee={equals:Ze};let tt=De;const k=1,te=2,je={owned:null,cleanups:null,context:null,owner:null};var y=null;let re=null,nt=null,b=null,m=null,M=null,se=0;function Z(e,t){const n=b,i=y,r=e.length===0,s=t===void 0?i:t,l=r?je:{owned:null,cleanups:null,context:s?s.context:null,owner:s},o=r?e:()=>e(()=>O(()=>V(l)));y=l,b=null;try{return K(o,!0)}finally{b=n,y=i}}function ve(e,t){t=t?Object.assign({},ee,t):ee;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=r=>(typeof r=="function"&&(r=r(n.value)),He(n,r));return[ke.bind(n),i]}function it(e,t,n){const i=ye(e,t,!0,k);z(i)}function T(e,t,n){const i=ye(e,t,!1,k);z(i)}function v(e,t,n){n=n?Object.assign({},ee,n):ee;const i=ye(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,z(i),ke.bind(i)}function st(e){return K(e,!1)}function O(e){if(b===null)return e();const t=b;b=null;try{return e()}finally{b=t}}function rt(e){return y===null||(y.cleanups===null?y.cleanups=[e]:y.cleanups.push(e)),e}function fe(){return b}function lt(e,t){const n=Symbol("context");return{id:n,Provider:at(n),defaultValue:e}}function ot(e){let t;return y&&y.context&&(t=y.context[e.id])!==void 0?t:e.defaultValue}function Le(e){const t=v(e),n=v(()=>ce(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function ke(){if(this.sources&&this.state)if(this.state===k)z(this);else{const e=m;m=null,K(()=>ne(this),!1),m=e}if(b){const e=this.observers?this.observers.length:0;b.sources?(b.sources.push(this),b.sourceSlots.push(e)):(b.sources=[this],b.sourceSlots=[e]),this.observers?(this.observers.push(b),this.observerSlots.push(b.sources.length-1)):(this.observers=[b],this.observerSlots=[b.sources.length-1])}return this.value}function He(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&K(()=>{for(let r=0;r<e.observers.length;r+=1){const s=e.observers[r],l=re&&re.running;l&&re.disposed.has(s),(l?!s.tState:!s.state)&&(s.pure?m.push(s):M.push(s),s.observers&&Ie(s)),l||(s.state=k)}if(m.length>1e6)throw m=[],new Error},!1)),t}function z(e){if(!e.fn)return;V(e);const t=se;ft(e,e.value,t)}function ft(e,t,n){let i;const r=y,s=b;b=y=e;try{i=e.fn(t)}catch(l){return e.pure&&(e.state=k,e.owned&&e.owned.forEach(V),e.owned=null),e.updatedAt=n+1,Fe(l)}finally{b=s,y=r}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?He(e,i):e.value=i,e.updatedAt=n)}function ye(e,t,n,i=k,r){const s={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:y,context:y?y.context:null,pure:n};return y===null||y!==je&&(y.owned?y.owned.push(s):y.owned=[s]),s}function Me(e){if(e.state===0)return;if(e.state===te)return ne(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<se);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===k)z(e);else if(e.state===te){const i=m;m=null,K(()=>ne(e,t[0]),!1),m=i}}function K(e,t){if(m)return e();let n=!1;t||(m=[]),M?n=!0:M=[],se++;try{const i=e();return ct(n),i}catch(i){n||(M=null),m=null,Fe(i)}}function ct(e){if(m&&(De(m),m=null),e)return;const t=M;M=null,t.length&&K(()=>tt(t),!1)}function De(e){for(let t=0;t<e.length;t++)Me(e[t])}function ne(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const r=i.state;r===k?i!==t&&(!i.updatedAt||i.updatedAt<se)&&Me(i):r===te&&ne(i,t)}}}function Ie(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=te,n.pure?m.push(n):M.push(n),n.observers&&Ie(n))}}function V(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const s=r.pop(),l=n.observerSlots.pop();i<r.length&&(s.sourceSlots[l]=i,r[i]=s,n.observerSlots[i]=l)}}if(e.tOwned){for(t=e.tOwned.length-1;t>=0;t--)V(e.tOwned[t]);delete e.tOwned}if(e.owned){for(t=e.owned.length-1;t>=0;t--)V(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0}function ut(e){return e instanceof Error?e:new Error(typeof e=="string"?e:"Unknown error",{cause:e})}function Fe(e,t=y){throw ut(e)}function ce(e){if(typeof e=="function"&&!e.length)return ce(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ce(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function at(e,t){return function(i){let r;return T(()=>r=O(()=>(y.context={...y.context,[e]:i.value},Le(()=>i.children))),void 0),r}}const dt=Symbol("fallback");function me(e){for(let t=0;t<e.length;t++)e[t]()}function ht(e,t,n={}){let i=[],r=[],s=[],l=0,o=t.length>1?[]:null;return rt(()=>me(s)),()=>{let f=e()||[],a=f.length,c,u;return f[oe],O(()=>{let g,w,p,S,$,A,C,_,I;if(a===0)l!==0&&(me(s),s=[],i=[],r=[],l=0,o&&(o=[])),n.fallback&&(i=[dt],r[0]=Z(ze=>(s[0]=ze,n.fallback())),l=1);else if(l===0){for(r=new Array(a),u=0;u<a;u++)i[u]=f[u],r[u]=Z(h);l=a}else{for(p=new Array(a),S=new Array(a),o&&($=new Array(a)),A=0,C=Math.min(l,a);A<C&&i[A]===f[A];A++);for(C=l-1,_=a-1;C>=A&&_>=A&&i[C]===f[_];C--,_--)p[_]=r[C],S[_]=s[C],o&&($[_]=o[C]);for(g=new Map,w=new Array(_+1),u=_;u>=A;u--)I=f[u],c=g.get(I),w[u]=c===void 0?-1:c,g.set(I,u);for(c=A;c<=C;c++)I=i[c],u=g.get(I),u!==void 0&&u!==-1?(p[u]=r[c],S[u]=s[c],o&&($[u]=o[c]),u=w[u],g.set(I,u)):s[c]();for(u=A;u<a;u++)u in p?(r[u]=p[u],s[u]=S[u],o&&(o[u]=$[u],o[u](u))):r[u]=Z(h);r=r.slice(0,l=a),i=f.slice(0)}return r});function h(g){if(s[u]=g,o){const[w,p]=ve(u);return o[u]=p,t(f[u],w)}return t(f[u])}}}let Re=!1;function gt(){Re=!0}function j(e,t){if(Re&&d.context){const n=d.context;we(Je());const i=O(()=>e(t||{}));return we(n),i}return O(()=>e(t||{}))}function Q(){return!0}const Ae={get(e,t,n){return t===P?n:e.get(t)},has(e,t){return t===P?!0:e.has(t)},set:Q,deleteProperty:Q,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:Q,deleteProperty:Q}},ownKeys(e){return e.keys()}};function yt(e,...t){if(et&&P in e){const r=new Set(t.length>1?t.flat():t[0]),s=t.map(l=>new Proxy({get(o){return l.includes(o)?e[o]:void 0},has(o){return l.includes(o)&&o in e},keys(){return l.filter(o=>o in e)}},Ae));return s.push(new Proxy({get(l){return r.has(l)?void 0:e[l]},has(l){return r.has(l)?!1:l in e},keys(){return Object.keys(e).filter(l=>!r.has(l))}},Ae)),s}const n={},i=t.map(()=>({}));for(const r of Object.getOwnPropertyNames(e)){const s=Object.getOwnPropertyDescriptor(e,r),l=!s.get&&!s.set&&s.enumerable&&s.writable&&s.configurable;let o=!1,f=0;for(const a of t)a.includes(r)&&(o=!0,l?i[f][r]=s.value:Object.defineProperty(i[f],r,s)),++f;o||(l?n[r]=s.value:Object.defineProperty(n,r,s))}return[...i,n]}const bt=e=>`Stale read from <${e}>.`;function yn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return v(ht(()=>e.each,e.children,t||void 0))}function bn(e){let t=!1;const n=(s,l)=>(t?s[1]===l[1]:!s[1]==!l[1])&&s[2]===l[2],i=Le(()=>e.children),r=v(()=>{let s=i();Array.isArray(s)||(s=[s]);for(let l=0;l<s.length;l++){const o=s[l].when;if(o)return t=!!s[l].keyed,[l,o,s[l]]}return[-1]},void 0,{equals:n});return v(()=>{const[s,l,o]=r();if(s<0)return e.fallback;const f=o.children;return typeof f=="function"&&f.length>0?O(()=>f(t?l:()=>{if(O(r)[0]!==s)throw bt("Match");return o.when})):f},void 0,void 0)}function wn(e){return e}const wt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],mt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...wt]),At=new Set(["innerHTML","textContent","innerText","children"]),xt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),pt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function St(e,t){const n=pt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const $t=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Ct=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Pt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ot(e,t,n){let i=n.length,r=t.length,s=i,l=0,o=0,f=t[r-1].nextSibling,a=null;for(;l<r||o<s;){if(t[l]===n[o]){l++,o++;continue}for(;t[r-1]===n[s-1];)r--,s--;if(r===l){const c=s<i?o?n[o-1].nextSibling:n[s-o]:f;for(;o<s;)e.insertBefore(n[o++],c)}else if(s===o)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[s-1]&&n[o]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--s],c),t[r]=n[s]}else{if(!a){a=new Map;let u=o;for(;u<s;)a.set(n[u],u++)}const c=a.get(t[l]);if(c!=null)if(o<c&&c<s){let u=l,h=1,g;for(;++u<r&&u<s&&!((g=a.get(t[u]))==null||g!==c+h);)h++;if(h>c-o){const w=t[l];for(;o<c;)e.insertBefore(n[o++],w)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const xe="_$DX_DELEGATE";function ue(e,t,n,i={}){let r;return Z(s=>{r=s,t===document?e():N(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{r(),t.textContent=""}}function G(e,t,n){let i;const r=()=>{const l=document.createElement("template");return l.innerHTML=e,l.content.firstChild},s=()=>(i||(i=r())).cloneNode(!0);return s.cloneNode=s,s}function _t(e,t=window.document){const n=t[xe]||(t[xe]=new Set);for(let i=0,r=e.length;i<r;i++){const s=e[i];n.has(s)||(n.add(s),t.addEventListener(s,Ue))}}function Y(e,t,n){H(e)||(n==null?e.removeAttribute(t):e.setAttribute(t,n))}function Et(e,t,n,i){H(e)||(i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i))}function Nt(e,t,n){H(e)||(n?e.setAttribute(t,""):e.removeAttribute(t))}function Tt(e,t){H(e)||(t==null?e.removeAttribute("class"):e.className=t)}function jt(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=s=>r.call(e,n[1],s))}else e.addEventListener(t,n,typeof n!="function"&&n)}function Be(e,t,n={}){const i=Object.keys(t||{}),r=Object.keys(n);let s,l;for(s=0,l=r.length;s<l;s++){const o=r[s];!o||o==="undefined"||t[o]||(pe(e,o,!1),delete n[o])}for(s=0,l=i.length;s<l;s++){const o=i[s],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(pe(e,o,!0),n[o]=f)}return n}function vt(e,t,n){if(!t)return n?Y(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let r,s;for(s in n)t[s]==null&&i.removeProperty(s),delete n[s];for(s in t)r=t[s],r!==n[s]&&(i.setProperty(s,r),n[s]=r);return n}function Lt(e,t={},n,i){const r={};return T(()=>r.children=W(e,t.children,r.children)),T(()=>typeof t.ref=="function"&&kt(t.ref,e)),T(()=>Ht(e,t,n,!0,r,!0)),r}function kt(e,t,n){return O(()=>e(t,n))}function N(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return W(e,t,i,n);T(r=>W(e,t(),r,n),i)}function Ht(e,t,n,i,r={},s=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Se(e,l,null,r[l],n,s,t)}for(const l in t){if(l==="children")continue;const o=t[l];r[l]=Se(e,l,o,r[l],n,s,t)}}function Mt(e,t,n={}){if(globalThis._$HY.done)return ue(e,t,[...t.childNodes],n);d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=i=>globalThis._$HY.r[i],d.has=i=>i in globalThis._$HY.r,d.gather=i=>Ce(t,i),d.registry=new Map,d.context={id:n.renderId||"",count:0};try{return Ce(t,n.renderId),ue(e,t,[...t.childNodes],n)}finally{d.context=null}}function D(e){let t,n;return!H()||!(t=d.registry.get(n=It()))?e():(d.completed&&d.completed.add(t),d.registry.delete(n),t)}function le(e){let t=e,n=0,i=[];if(H(e))for(;t;){if(t.nodeType===8){const r=t.nodeValue;if(r==="$")n++;else if(r==="/"){if(n===0)return[t,i];n--}}i.push(t),t=t.nextSibling}return[t,i]}function mn(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;if(t){for(t.queued=!1;t.length;){const[n,i]=t[0];if(!e.has(n))return;t.shift(),Ue(i)}d.done&&(d.events=_$HY.events=null,d.completed=_$HY.completed=null)}}),d.events.queued=!0)}function H(e){return!!d.context&&!d.done&&(!e||e.isConnected)}function Dt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function pe(e,t,n){const i=t.trim().split(/\s+/);for(let r=0,s=i.length;r<s;r++)e.classList.toggle(i[r],n)}function Se(e,t,n,i,r,s,l){let o,f,a,c,u;if(t==="style")return vt(e,n,i);if(t==="classList")return Be(e,n,i);if(n===i)return i;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const h=t.slice(3);i&&e.removeEventListener(h,i,typeof i!="function"&&i),n&&e.addEventListener(h,n,typeof n!="function"&&n)}else if(t.slice(0,10)==="oncapture:"){const h=t.slice(10);i&&e.removeEventListener(h,i,!0),n&&e.addEventListener(h,n,!0)}else if(t.slice(0,2)==="on"){const h=t.slice(2).toLowerCase(),g=$t.has(h);if(!g&&i){const w=Array.isArray(i)?i[0]:i;e.removeEventListener(h,w)}(g||n)&&(jt(e,h,n,g),g&&_t([h]))}else if(t.slice(0,5)==="attr:")Y(e,t.slice(5),n);else if(t.slice(0,5)==="bool:")Nt(e,t.slice(5),n);else if((u=t.slice(0,5)==="prop:")||(a=At.has(t))||!r&&((c=St(t,e.tagName))||(f=mt.has(t)))||(o=e.nodeName.includes("-")||"is"in l)){if(u)t=t.slice(5),f=!0;else if(H(e))return n;t==="class"||t==="className"?Tt(e,n):o&&!f&&!a?e[Dt(t)]=n:e[c||t]=n}else{const h=r&&t.indexOf(":")>-1&&Pt[t.split(":")[0]];h?Et(e,h,t,n):Y(e,xt[t]||t,n)}return n}function Ue(e){if(d.registry&&d.events&&d.events.find(([f,a])=>a===e))return;let t=e.target;const n=`$$${e.type}`,i=e.target,r=e.currentTarget,s=f=>Object.defineProperty(e,"target",{configurable:!0,value:f}),l=()=>{const f=t[n];if(f&&!t.disabled){const a=t[`${n}Data`];if(a!==void 0?f.call(t,a,e):f.call(t,e),e.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(e.target)&&s(t.host),!0},o=()=>{for(;l()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0),e.composedPath){const f=e.composedPath();s(f[0]);for(let a=0;a<f.length-2&&(t=f[a],!!l());a++){if(t._$host){t=t._$host,o();break}if(t.parentNode===r)break}}else o();s(i)}function W(e,t,n,i,r){const s=H(e);if(s){!n&&(n=[...e.childNodes]);let f=[];for(let a=0;a<n.length;a++){const c=n[a];c.nodeType===8&&c.data.slice(0,2)==="!$"?c.remove():f.push(c)}n=f}for(;typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,o=i!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(s||l==="number"&&(t=t.toString(),t===n))return n;if(o){let f=n[0];f&&f.nodeType===3?f.data!==t&&(f.data=t):f=document.createTextNode(t),n=F(e,n,i,f)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(s)return n;n=F(e,n,i)}else{if(l==="function")return T(()=>{let f=t();for(;typeof f=="function";)f=f();n=W(e,f,n,i)}),()=>n;if(Array.isArray(t)){const f=[],a=n&&Array.isArray(n);if(ae(f,t,n,r))return T(()=>n=W(e,f,n,i,!0)),()=>n;if(s){if(!f.length)return n;if(i===void 0)return n=[...e.childNodes];let c=f[0];if(c.parentNode!==e)return n;const u=[c];for(;(c=c.nextSibling)!==i;)u.push(c);return n=u}if(f.length===0){if(n=F(e,n,i),o)return n}else a?n.length===0?$e(e,f,i):Ot(e,n,f):(n&&F(e),$e(e,f));n=f}else if(t.nodeType){if(s&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=F(e,n,i,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ae(e,t,n,i){let r=!1;for(let s=0,l=t.length;s<l;s++){let o=t[s],f=n&&n[e.length],a;if(!(o==null||o===!0||o===!1))if((a=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))r=ae(e,o,f)||r;else if(a==="function")if(i){for(;typeof o=="function";)o=o();r=ae(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||r}else e.push(o),r=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return r}function $e(e,t,n=null){for(let i=0,r=t.length;i<r;i++)e.insertBefore(t[i],n)}function F(e,t,n,i){if(n===void 0)return e.textContent="";const r=i||document.createTextNode("");if(t.length){let s=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(r!==o){const f=o.parentNode===e;!s&&!l?f?e.replaceChild(r,o):e.insertBefore(r,n):f&&o.remove()}else s=!0}}else e.insertBefore(r,n);return[r]}function Ce(e,t){const n=e.querySelectorAll("*[data-hk]");for(let i=0;i<n.length;i++){const r=n[i],s=r.getAttribute("data-hk");(!t||s.startsWith(t))&&!d.registry.has(s)&&d.registry.set(s,r)}}function It(){return d.getNextContextId()}const Ft="http://www.w3.org/2000/svg";function Rt(e,t=!1){return t?document.createElementNS(Ft,e):document.createElement(e)}const Bt=(...e)=>(gt(),Mt(...e));function Ut(e){const[t,n]=yt(e,["component"]),i=v(()=>t.component);return v(()=>{const r=i();switch(typeof r){case"function":return O(()=>r(n));case"string":const s=Ct.has(r),l=d.context?D():Rt(r,s);return Lt(l,n,s),l}})}const Kt=["Head","bodyAttributes","htmlAttributes"];function Gt(e,t){return e.includes(t)}function qt(e,t){const n=globalThis[Pe]=globalThis[Pe]||{};return n[e]=n[e]||t}const Pe="_vike_solid",Ke=qt("PageContextProvider.ts",{solidContext:lt(void 0)});function Vt(e){const{solidContext:t}=Ke;return j(t.Provider,{get value(){return e.pageContext},get children(){return e.children}})}function Ge(){const{solidContext:e}=Ke;return ot(e)}const de=Symbol("store-raw"),B=Symbol("store-node"),E=Symbol("store-has"),qe=Symbol("store-self");function Ve(e){let t=e[P];if(!t&&(Object.defineProperty(e,P,{value:t=new Proxy(e,Xt)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let r=0,s=n.length;r<s;r++){const l=n[r];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(t)})}}return t}function L(e){let t;return e!=null&&typeof e=="object"&&(e[P]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function U(e,t=new Set){let n,i,r,s;if(n=e!=null&&e[de])return n;if(!L(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)r=e[l],(i=U(r,t))!==r&&(e[l]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let f=0,a=l.length;f<a;f++)s=l[f],!o[s].get&&(r=e[s],(i=U(r,t))!==r&&(e[s]=i))}return e}function ie(e,t){let n=e[t];return n||Object.defineProperty(e,t,{value:n=Object.create(null)}),n}function X(e,t,n){if(e[t])return e[t];const[i,r]=ve(n,{equals:!1,internal:!0});return i.$=r,e[t]=i}function Yt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===P||t===B||(delete n.value,delete n.writable,n.get=()=>e[P][t]),n}function Ye(e){fe()&&X(ie(e,B),qe)()}function Wt(e){return Ye(e),Reflect.ownKeys(e)}const Xt={get(e,t,n){if(t===de)return e;if(t===P)return n;if(t===oe)return Ye(e),n;const i=ie(e,B),r=i[t];let s=r?r():e[t];if(t===B||t===E||t==="__proto__")return s;if(!r){const l=Object.getOwnPropertyDescriptor(e,t);fe()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(s=X(i,t,s)())}return L(s)?Ve(s):s},has(e,t){return t===de||t===P||t===oe||t===B||t===E||t==="__proto__"?!0:(fe()&&X(ie(e,E),t)(),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Wt,getOwnPropertyDescriptor:Yt};function x(e,t,n,i=!1){if(!i&&e[t]===n)return;const r=e[t],s=e.length;n===void 0?(delete e[t],e[E]&&e[E][t]&&r!==void 0&&e[E][t].$()):(e[t]=n,e[E]&&e[E][t]&&r===void 0&&e[E][t].$());let l=ie(e,B),o;if((o=X(l,t,r))&&o.$(()=>n),Array.isArray(e)&&e.length!==s){for(let f=e.length;f<s;f++)(o=l[f])&&o.$();(o=X(l,"length",s))&&o.$(e.length)}(o=l[qe])&&o.$()}function We(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const r=n[i];x(e,r,t[r])}}function zt(e,t){if(typeof t=="function"&&(t=t(e)),t=U(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const r=t[n];e[n]!==r&&x(e,n,r)}x(e,"length",i)}else We(e,t)}function q(e,t,n=[]){let i,r=e;if(t.length>1){i=t.shift();const l=typeof i,o=Array.isArray(e);if(Array.isArray(i)){for(let f=0;f<i.length;f++)q(e,[i[f]].concat(t),n);return}else if(o&&l==="function"){for(let f=0;f<e.length;f++)i(e[f],f)&&q(e,[f].concat(t),n);return}else if(o&&l==="object"){const{from:f=0,to:a=e.length-1,by:c=1}=i;for(let u=f;u<=a;u+=c)q(e,[u].concat(t),n);return}else if(t.length>1){q(e[i],t,[i].concat(n));return}r=e[i],n=[i].concat(n)}let s=t[0];typeof s=="function"&&(s=s(r,n),s===r)||i===void 0&&s==null||(s=U(s),i===void 0||L(r)&&L(s)&&!Array.isArray(s)?We(r,s):x(e,i,s))}function Xe(...[e,t]){const n=U(e||{}),i=Array.isArray(n),r=Ve(n);function s(...l){st(()=>{i&&l.length===1?zt(n,l[0]):q(n,l)})}return[r,s]}const he=Symbol("store-root");function R(e,t,n,i,r){const s=t[n];if(e===s)return;const l=Array.isArray(e);if(n!==he&&(!L(e)||!L(s)||l!==Array.isArray(s)||r&&e[r]!==s[r])){x(t,n,e);return}if(l){if(e.length&&s.length&&(!i||r&&e[0]&&e[0][r]!=null)){let a,c,u,h,g,w,p,S;for(u=0,h=Math.min(s.length,e.length);u<h&&(s[u]===e[u]||r&&s[u]&&e[u]&&s[u][r]===e[u][r]);u++)R(e[u],s,u,i,r);const $=new Array(e.length),A=new Map;for(h=s.length-1,g=e.length-1;h>=u&&g>=u&&(s[h]===e[g]||r&&s[u]&&e[u]&&s[h][r]===e[g][r]);h--,g--)$[g]=s[h];if(u>g||u>h){for(c=u;c<=g;c++)x(s,c,e[c]);for(;c<e.length;c++)x(s,c,$[c]),R(e[c],s,c,i,r);s.length>e.length&&x(s,"length",e.length);return}for(p=new Array(g+1),c=g;c>=u;c--)w=e[c],S=r&&w?w[r]:w,a=A.get(S),p[c]=a===void 0?-1:a,A.set(S,c);for(a=u;a<=h;a++)w=s[a],S=r&&w?w[r]:w,c=A.get(S),c!==void 0&&c!==-1&&($[c]=s[a],c=p[c],A.set(S,c));for(c=u;c<e.length;c++)c in $?(x(s,c,$[c]),R(e[c],s,c,i,r)):x(s,c,e[c])}else for(let a=0,c=e.length;a<c;a++)R(e[a],s,a,i,r);s.length>e.length&&x(s,"length",e.length);return}const o=Object.keys(e);for(let a=0,c=o.length;a<c;a++)R(e[o[a]],s,o[a],i,r);const f=Object.keys(s);for(let a=0,c=f.length;a<c;a++)e[f[a]]===void 0&&x(s,f[a],void 0)}function Qt(e,t={}){const{merge:n,key:i="id"}=t,r=U(e);return s=>{if(!L(s)||!L(r))return r;const l=R(r,{[he]:s},he,n,i);return l===void 0?s:l}}function Jt(e,t){e!==void 0&&(document.title=e||""),t!==void 0&&(document.documentElement.lang=t||"en")}function Zt(e){return e instanceof Function||typeof e=="function"}function Oe(e,t){var s;const n=(s=t._configFromHook)==null?void 0:s[e],i=t.config[e],r=l=>Zt(l)?l(t):l;return Gt(Kt,e)?[...(i??[]).map(r),...n??[]]:n!==void 0?n:r(i)}function _e(e){return j(Vt,{pageContext:e,get children(){return j(en,{get children(){return j(tn,{})}})}})}function en(e){const t=Ge(),[n,i]=Xe([]);it(()=>{i(Qt([...t.config.Layout||[],...t.config.Wrapper||[]]))});const r=(s=0)=>{let l=n.at(-(s+1));return l?(typeof l!="function"&&(l=nn),j(l,{get children(){return r(s+1)}})):e.children};return r()}function tn(){const e=Ge();return j(Ut,{get component(){return e.Page}})}function nn(e){return v(()=>e.children)}async function sn(e,t){if(!e)return[];const n=e.map(r=>typeof r=="function"?(Qe(t),r(t)):r);return await Promise.all(n)}const[Ee,Ne]=Xe({});let J,Te=!1;const An=async e=>{if(e._headAlreadySet=e.isHydration,Te)Ne(e);else{J&&J(),Ne(e);const t=document.getElementById("root");t.innerHTML!==""&&e.isHydration?J=Bt(()=>_e(Ee),t):J=ue(()=>_e(Ee),t),Te=!0}e.isHydration||(e._headAlreadySet=!0,rn(e)),await sn(e.config.onAfterRenderClient,e)};function rn(e){const t=Oe("title",e),n=Oe("lang",e);Jt(t,n)}var ln=G("<a>");function on(e){return"/"+e.split("/").filter(Boolean).join("/")}function ge(e){const t=on("/"+e.href),n=Object.fromEntries((e.class||"").split(" ").map(i=>[i,!0]));return(()=>{var i=D(ln);return Y(i,"href",t),N(i,()=>e.children),T(r=>Be(i,{invisible:e.invisible,underline:!e.noUnderline,...n},r)),i})()}var fn=G('<img class="inline size-12 lg:size-auto">'),cn=G('<span class="align-middle font-bold italic ms-1 text-4xl lg:text-6xl text-violet-900 dark:text-violet-300">Kill the Sorceress!'),un=G('<div class="grid grid-rows-[auto_1fr] max-h-screen max-w-screen-md min-h-screen mx-auto"><header class="border-b border-zinc-400 grid p-4"></header><div class=overflow-auto style=scrollbar-width:thin;>');function xn(e){return(()=>{var t=D(un),n=t.firstChild,i=n.nextSibling;return N(n,j(ge,{href:"/",noUnderline:!0,get children(){return[(()=>{var r=D(fn);return T(()=>Y(r,"src","/favicon.png")),r})(),D(cn)]}})),N(i,()=>e.children),t})()}var an=G('<div class="grid grid-rows-[1fr_auto] h-full"><main id=main-content class=p-4><h1 class="font-bold text-3xl"></h1><!$><!/></main><nav aria-labelledby=chapter-nav-label class="border-t border-zinc-400 grid grid-cols-[1fr_2fr_1fr] p-4"><!$><!/><span id=chapter-nav-label class=text-center>Chapter Navigation</span><!$><!/>');function pn(e){return(()=>{var t=D(an),n=t.firstChild,i=n.firstChild,r=i.nextSibling,[s,l]=le(r.nextSibling),o=n.nextSibling,f=o.firstChild,[a,c]=le(f.nextSibling),u=a.nextSibling,h=u.nextSibling,[g,w]=le(h.nextSibling);return N(i,()=>e.title),N(n,()=>e.children,s,l),N(o,j(ge,{get href(){return e.previous||""},get invisible(){return!e.previous},children:"← Previous"}),a,c),N(o,j(ge,{get href(){return e.next||""},class:"text-end",get invisible(){return!e.next},children:"Next →"}),g,w),t})()}var dn=G("<p class=my-2>");function Sn(e){return(()=>{var t=D(dn);return N(t,()=>e.children),t})()}export{pn as C,yn as F,xn as L,wn as M,Sn as P,bn as S,le as a,T as b,j as c,_t as d,Le as e,ve as f,D as g,Be as h,N as i,Tt as j,lt as k,ge as l,An as o,mn as r,Y as s,G as t,ot as u};
