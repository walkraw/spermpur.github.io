!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=26)}([function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(10);function r(t){return"function"==typeof t||"Function"===Object(i.a)(t)}},function(t,e,n){"use strict";function i(...t){}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";function i(t=window){try{return(t.navigator||{}).userAgent||""}catch(e){return""}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i=(t,e,n)=>{const i=new Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.call(n,t[r],r,t);return i}},function(t,e,n){"use strict";function i(t){const e=typeof t;return Boolean(t)&&("object"===e||"function"===e)}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";n.r(e),n.d(e,"getBoundingClientRect",function(){return i});const i=t=>{try{const{left:n,right:i,top:r,bottom:o}=t.getBoundingClientRect();return{left:n,right:i,top:r,bottom:o,width:i-n,height:o-r}}catch(e){return{left:0,width:0,top:0,height:0,right:0,bottom:0}}}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});const i=n(25),r=(t=window)=>{const e=i(t);return"boolean"==typeof e?-1:e}},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});const i=["","webkit","moz","o","ms"],r=["","-webkit-","-ms-","-moz-","-o-"]},function(t,e,n){"use strict";function i(t){return"string"==typeof t}n.r(e),n.d(e,"isString",function(){return i})},function(t,e,n){"use strict";n.d(e,"a",function(){return i});const i=(t=window)=>{const e=t.navigator.userAgent;return-1!==e.indexOf("Opera Mini")||(-1!==e.indexOf("; wv)")&&-1!==e.indexOf(" OPR/")||-1!==e.indexOf(" OPiOS/"))}},function(t,e,n){"use strict";n.d(e,"a",function(){return o});const i={}.toString,r=/\[object (\w+)\]/,o=t=>{const e=i.call(t);if(!e)return null;const n=e.match(r);if(!n)return null;const o=n[1];return o||null}},function(t,e,n){"use strict";n.d(e,"a",function(){return r});var i=n(13);const r=Object(i.a)()},function(t,e,n){"use strict";var i=n(6);const r=(t=window)=>Object(i.a)(t)>11;function o(t){return function(t){return Boolean(t.PointerEvent)}(t)&&function(t){const e=t.navigator||{},{msMaxTouchPoints:n,maxTouchPoints:i}=e;return n||i||0}(t)>0&&!r(t)}var s=n(3),a=n(0),c=n(4);function l(t,e){if(!Object(a.a)(t.matchMedia))return!1;const n=t.matchMedia(e);return Object(c.a)(n)&&Boolean(n.matches)}var d=n(7);const h=Object(s.a)(d.a,t=>`(${t}any-pointer:coarse)`).join(",");const u=Object(s.a)(d.a,t=>`(${t}touch-enabled)`).join(",");function p(t=window){return o(t)||function(t){return l(t,h)}(t)||function(t){return l(t,u)}(t)||function(t){const{DocumentTouch:e}=t;return Boolean(e)&&t.document instanceof e}(t)||function(t){return"ontouchstart"in t}(t)}n.d(e,"a",function(){return p})},function(t,e,n){"use strict";var i=n(2);n.d(e,"a",function(){return r});const r=(t=window)=>{const e=Object(i.a)(t).toLowerCase();return-1!==e.indexOf("safari")&&-1===e.indexOf("chrome")&&-1===e.indexOf("android")&&-1===e.indexOf("phantomjs")&&!((t=window)=>Object(i.a)(t).toLowerCase().indexOf("tizen")>-1)(t)}},function(t,e){function n(t,e){var n=[],i=[];return null==e&&(e=function(t,e){return n[0]===e?"[Circular ~]":"[Circular ~."+i.slice(0,n.indexOf(e)).join(".")+"]"}),function(r,o){if(n.length>0){var s=n.indexOf(this);~s?n.splice(s+1):n.push(this),~s?i.splice(s,1/0,r):i.push(r),~n.indexOf(o)&&(o=e.call(this,r,o))}else n.push(o);return null==t?o:t.call(this,r,o)}}(t.exports=function(t,e,i,r){return JSON.stringify(t,n(e,r),i)}).getSerialize=n},function(t,e){},function(t,e,n){"use strict";n.r(e),n.d(e,"getMraid",function(){return r}),n.d(e,"isAvailable",function(){return o}),n.d(e,"isReady",function(){return s}),n.d(e,"open",function(){return a}),n.d(e,"on",function(){return c});var i=n(1);function r(t=window){try{const n="ownerDocument"in t&&"defaultView"in t.ownerDocument?t.ownerDocument.defaultView:t,i=n.mraid||n.top.mraid;return i&&i.getState&&i.addEventListener?i:void 0}catch(e){return}}function o(t=window){return void 0!==r(t)}function s(t=window){return o(t)&&"loading"!==r(t).getState()}function a(t=window,e){o(t)&&r(t).open(e)}function c(t=window,e,n,s){if(!o(t))return i.a;const a=r(t);return a.addEventListener(e,n),()=>{a.removeEventListener(e,n)}}},function(t,e,n){"use strict";n(15);var i=n(16);n.d(e,"MraidHelpers",function(){return i})},function(t,e){t.exports=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(t,e){return t.__proto__=e,t}:function(t,e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n]);return t})},function(t,e,n){t.exports=n(20).isObject},function(t,e,n){"use strict";function i(t){const e=typeof t;return Boolean(t)&&("object"===e||"function"===e)}n.r(e),n.d(e,"isObject",function(){return i})},function(t,e,n){t.exports=n(8).isString},function(t,e,n){t.exports=n(23).getWindowSize},function(t,e,n){"use strict";function i(){const t=window;let e=t.innerWidth,n=t.innerHeight;if(!e){const i=t.document.documentElement;e=i.clientWidth,n=i.clientHeight}return{width:e,height:n}}n.r(e),n.d(e,"getWindowSize",function(){return i})},function(t,e,n){const i=n(27).isOperaMini;t.exports={isOperaMini:i}},function(t,e){t.exports=function(t){t||(t=window);var e=t.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return parseInt(e.substring(n+5,e.indexOf(".",n)),10);if(e.indexOf("Trident/")>0){var i=e.indexOf("rv:");return parseInt(e.substring(i+3,e.indexOf(".",i)),10)}var r=e.indexOf("Edge/");return r>0&&parseInt(e.substring(r+5,e.indexOf(".",r)),10)}},function(t,e,n){"use strict";n.r(e);const i=(t,e,n)=>{const i=[];for(let r=0;r<t.length;r++){const o=t[r];e.call(n,o,r,t)&&i.push(o)}return i};const r={message:"DEFAULT_ERROR_MESSAGE",code:0,details:"",stack:"?:?:?",isFatal:!0},o=n(14),s=n(18);class a extends Error{constructor(t,e={}){const n="object"==typeof t?t:{message:String(t||r.message)};super(),s(this,a.prototype),this.message=e.message||n.message||r.message,this.code=e.code||n.code||n.id||r.code,this.isFatal=Boolean(function(t){const[e]=i(t,t=>void 0!==t);return e}([e.isFatal,n.isFatal,r.isFatal])),this.details=e.details||n.details||r.details;const c=e.stack||n.stack||function(t){const{url:e,line:n,col:i,fileName:r,columnNumber:o,lineNumber:s}=t;return`${e||r||"?"}:${n||s||"?"}:${i||o||"?"}`}(n);let l=c===r.stack?this.stack:c;if(l&&l!==r.stack)this.stack=l;else if(!this.stack)try{throw new Error(this.message)}catch(d){this.stack=l=d.stack||r.stack}this.toString=()=>o(this.toJSON()),this.toJSON=()=>({message:this.message,code:this.code,isFatal:this.isFatal,details:this.details,stack:l})}}function c(t){if(t&&t.location){const{location:e}=t;return"function"==typeof e.toString?e.toString():e.href||""}return""}function l(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function d(t){if("function"==typeof Object.keys)return Object.keys(t);{const e=[];for(const n in t)l(t,n)&&e.push(n);return e}}function h(t){let e=function(){e=()=>n;const n=t.apply(this,arguments);return n};return function(){return e.apply(this,arguments)}}const u=(t,e,n)=>{let i=t.getItem(e);return i||(i=n(e),t.setItem(e,i)),i};function p(t){if(!t)return[];const e=[];for(let n=0;n<t.length;n++)e.push(t[n]);return e}var f=n(4);const g=(t,e)=>{for(const n of e.split(".")){if(!Object(f.a)(t)){t=void 0;break}t=t[n]}return t},m=(t,e,n)=>{if(!Object(f.a)(t))return t;const i=t,r=e.split("."),o=r.pop();for(const s of r){const e=t[s];t=Object(f.a)(e)?e:t[s]={}}return t[o]=n,i};var y=n(0);const v=t=>{try{return t()}catch(e){return}},b=(t,e,n,i)=>(function(){try{return e.apply(n||this,arguments)}catch(r){if(Object(y.a)(i)&&i(r),!0===r.preventProtect)throw r;b.log(r,t)}});function w(...t){return t.join("")}b.log=function(t,e){console.log("LOG:"+e+":"+t)},b.setTimeout=(t,e,n,i)=>window.setTimeout(b("timeout",t,n,i),e);class x{}x.YaContextCallbacks=w("Ya.C","ontext._callbacks"),x.YaContextCallbacksCalls=w("Ya.C","ontext._callbacks_call"),x.AdvManager=w("A","dvManager"),x.AdvBlock=w("A","dvBlock"),x.RTB=w("R","TB"),x.Rtb=w("R","tb"),x.MetrikaAdtune=w("metrika_a","dtune");class k{constructor(t){this.obj=t}getItem(t){return this.obj[t]}setItem(t,e){this.obj[t]=e}}const _=h(()=>((t,e,n)=>{let i;return((t,e)=>{const n=t.slice();for(;n.length;){const t=e(n.shift());if(!t)return;n.push(...t)}})([t.top],t=>{if(!(i=v(()=>g(t,e))))return v(()=>p(t.frames))||[]}),i||(i=n()),m(t,e,i),i})(self,"Ya.pcodeCrossFrameData",()=>new k({}))),O=t=>u(_(),t,()=>new k({})),S=h(()=>((t,e,n)=>{let i=g(t,e);return i||(i=n(),m(t,e,i)),i})(self,"Ya.pcodeWindowData",()=>new k({}))),C=t=>u(S(),t,()=>new k({})),$=b("metrika::pushEvent",(t,e)=>{const n=g(t,"Ya._metrika.dataLayer")||[];m(t,"Ya._metrika.dataLayer",n),n.push({ymetrikaEvent:{type:"params",parent:1,data:{__ym:Object.assign({},e)}}})}),E=b("sessionId::configureMetrika",(t,e)=>{$(t,{adSessionID:e})});function P(t){if(!t||!t.toString)return!1;const e=t.toString();return/\[native code\]/.test(e)||/\/\* source code not available \*\//.test(e)}const j=!P(Math.random)||Math.random()==Math.random(),R=Date&&Object(y.a)(Date.now)?()=>Date.now():()=>(new Date).getTime(),A="undefined"==typeof window?void 0:window.performance,T=A&&Object(y.a)(A.now),N=A&&A.timing&&A.timing.navigationStart?A.timing.navigationStart:R(),M=T?()=>A.now():()=>(()=>R()-N)(),I=2147483647,L=16807;let D=Date.now()*M()%I;const B=I-1;const V=j?function(){return((D=D*L%I)-1)/B}:function(){return Math.random()},z=()=>(1e6*V()).toFixed(0)+(new Date).valueOf().toString();let F;const U=()=>(F||(F=((t,e,n,i)=>{let r=e.getItem("sessionId");return r||(r=n.getItem("sessionId")||t(),i(window,r)),e.setItem("sessionId",r),n.setItem("sessionId",r),r})(z,C("common"),O("common"),E)),F),W=t=>{const e=[];for(;t;)try{if(c(t),e.push(t),t.parent===t)break;t=t.parent}catch(n){break}return e},H="__ADB_CONFIG__",Y=Object(f.a)(H)&&H.fn&&Object(y.a)(H.fn.encodeUrl)?H.fn.encodeUrl:void 0,q=void 0!==Y?t=>Y(t):void 0,G=((t=window)=>{if(q)return q;const e=W(t);for(;e.length;){const t=e.pop();if(!t)continue;const n=g(t,"ya.videoAd.encodeUrl");if(Object(y.a)(n))return n}return null})(window),Q=t=>"hidden"in t?"hidden":"webkitHidden"in t?"webkitHidden":void 0;function X(t,e=!0){const n=Q(t);return n?!t[n]:e}var J=n(11);function K(t,e=!0){if(J.a&&e)return[];{const e=[];let i=t;for(;;)try{if(!(i=i.ownerDocument.defaultView.frameElement))return e;e.push(i)}catch(n){return e}}}const Z=K(document.documentElement),{length:tt}=Z,et=tt>0?Z[tt-1].contentWindow:window;function nt(){if(et&&et.document&&"function"==typeof et.document.hasFocus)try{return et.document.hasFocus()}catch(t){}}function it(t){setTimeout(()=>{throw t},0)}const rt=Boolean(window.location.ancestorOrigins);function ot(t){return rt?p(t.location.ancestorOrigins):[]}const st=ot(window);function at(t){let e="",n="";if(t){(function(t){const e=K(t.documentElement).map(t=>t.ownerDocument);return e.unshift(t),e.map(t=>({location:c(t.defaultView),referrer:t.referrer}))})(t).reverse().forEach(({location:t,referrer:i})=>{e=e||t,n=n||i})}return{location:e,referrer:n}}var ct=n(3);const lt=function(){const t=Object(ct.a)(Z,t=>t.ownerDocument),{length:e}=t,n=(e?t[e-1]:document).defaultView;return!!n&&n.self!==n.parent}();var dt=n(10);function ht(t,e){let n=t[e];if(!P(n)){const r=n;try{delete t[e];const o=t[e];"function"==typeof o&&(n=o),t[e]=r}catch(i){}}return n}const ut=ht(Array,"isArray"),pt=Boolean(ut)?t=>ut.call(Array,t):t=>"Array"===Object(dt.a)(t);class ft{constructor(t){this.cache=t}get(t){return this.cache[t]}has(t){return t in this.cache}set(t,e){this.cache[t]=e}}const gt=(t,e=(t=>t),n=new ft({}))=>(function(){const i=e.apply(this,arguments);if(n.has(i))return n.get(i);const r=t.apply(this,arguments);return n.set(i,r),r});function mt(t,e,n){for(const i in t)l(t,i)&&e.call(n,t[i],i,t)}const yt=document.createElement("a");gt(t=>{const e=vt(t);return Object.assign({},e)});function vt(t){yt.href=t;let e=yt.pathname||"";"/"!==e.charAt(0)&&(e=`/${e}`);const n=(yt.search||"")+(yt.hash||""),i=t.lastIndexOf(n),r=-1===i?t:t.slice(0,i),o=yt.protocol&&/^[a-z]+:/i.test(yt.protocol)?yt.protocol:"";return{originalPath:r,href:yt.href,protocol:o,host:yt.host,hostname:yt.hostname,port:yt.port,pathname:e,search:yt.search,hash:yt.hash}}function bt(t,e=!1){if(e){const e=t.originalPath,n="/"===t.pathname&&"/"!==e[e.length-1];return`${t.originalPath}${n?"/":""}${t.search}${t.hash}`}const n="443"===t.port||"80"===t.port?t.hostname:t.host;return`${t.protocol}//${n}${t.pathname}${t.search}${t.hash}`}const wt=t=>{try{return decodeURIComponent(t)}catch(e){return t}};function xt(t){const e={},n=t.replace(/^[?#]+/,"").replace(/#.*$/,"").split("&");for(let i=0;i<n.length;i++){const t=n[i].indexOf("=");let r,o;if(-1===t?(r=wt(n[i]),o=""):(r=wt(n[i].slice(0,t)),o=n[i].slice(t+1)),r){const t=Boolean(/(\[\])$/.exec(r));r=r.replace(/\[\]$/,""),t?void 0===e[r]?e[r]=[wt(o)]:e[r]=[].concat(e[r],wt(o)):e[r]=wt(o)}}return e}const kt=(t,e)=>e.map(e=>`${t}[]=${encodeURIComponent(e)}`).join("&");function _t(t){const e=[];for(const n in t)if(t.hasOwnProperty(n)){const i=t[n];pt(i)?e.push(kt(n,i)):void 0!==i&&e.push(`${n}=${encodeURIComponent(i)}`)}return`?${e.join("&")}`}function Ot(t,e,{override:n=!0,saveOriginalPath:i=!1}={}){const r=vt(t),o=xt(r.search);mt(e,(t,e)=>{(void 0===o[e]||n)&&(o[e]=t)});const s=_t(o);return bt(Object.assign({},r,{search:s}),i)}const{topAncestor:St,isTrusted:Ct}=function(t=window){const e=ot(t);if(e.length>0)return{topAncestor:e[e.length-1],isTrusted:!0};const{location:n,referrer:i}=at(t.document),r=lt?i:n,o=!lt||function(t){let e=t;const n=[t],{top:i}=t;for(;e!==i;)e=e.parent,n.push(e);return n}(et).length<2,{protocol:s,hostname:a,host:c,port:l}=vt(r);return{topAncestor:bt({protocol:s,hostname:a,host:c,port:l,originalPath:"",href:"",pathname:"",search:"",hash:""}),isTrusted:o}}(),$t=St,Et=Ct;const Pt=function(t=document,e){const n=t.currentScript;if(n)return n;{const n=t.getElementsByTagName("script"),i=[];for(let t=0;t<n.length;t++)i.push(n[t]);if("function"==typeof e){const t=i.filter(e);return t[t.length-1]}return i[i.length-1]}}(),jt=Pt?Pt.src:"";function Rt(t){let e="";for(let n=0;n<t;n++)e+=(16*V()|0).toString(16);return e}var At=n(1);const Tt=200,Nt=4;function Mt(t){const{method:e,url:n,async:i=!0,data:r,responseType:o="text",onBeforeSend:s=At.a,onError:a=At.a,onSuccess:c=At.a,onRetry:l=At.a,checkStatus:d=(t=>Tt===t),headers:h={},xhrConstructor:u=XMLHttpRequest,retries:p=0,timeout:f=0,withCredentials:g,onAbort:m,onSetup:y}=t;let v,b=!1,w=t=>{b=!0,w=At.a,v=t,x(new Error("Abort request")),"function"==typeof m&&m(t)};const x=e=>{if(k.onerror=null,k.onreadystatechange=null,_&&clearTimeout(_),_&&k.readyState!==Nt||b)try{k.abort()}catch(e){}if(!b)if(p>0){const n=l(e,k);if("boolean"!=typeof n||n||w(),b)return;Mt(Object.assign({},t,{onSetup:({abort:t})=>{w=e=>t(e),b&&t(v)},retries:p-1}))}else w=At.a,a(e,k)},k=new u;try{k.open(e,n,i)}catch(O){return void x(O)}let _;if(k.responseType=o,k.withCredentials=Boolean(g),mt(h,(t,e)=>{try{k.setRequestHeader(e,t)}catch(O){}}),f>0&&isFinite(f)&&(_=window.setTimeout(()=>{x(new Error(`Request timeout, ${n}`))},f)),k.onerror=x,k.onreadystatechange=()=>{if(k.readyState===Nt){const{status:t}=k;d(t)?(w=At.a,clearTimeout(_),c(k)):x(new Error(`Invalid request status ${t}, ${n}`))}},!("function"==typeof y&&(y({abort:t=>w(t)}),b)||(s(k,t),b)))try{k.send(r)}catch(O){x(O)}}function It(t){const e={};return t.forEach(([t,n])=>{e[t]=n}),e}function Lt(t){return"function"==typeof Object.entries?Object.entries(t):d(t).map(e=>[e,t[e]])}const Dt=V();const Bt=(t=>P(t.navigator.sendBeacon))(window);const Vt=64,zt="https://an.yandex.ru/jstracer",Ft="https://jstracer.yandex.ru/jstracer",Ut="https://strm.yandex.ru/log",Wt="_$".split("").reverse().join(""),Ht=t=>`_$invalid_${t}${Wt}`,Yt={sensorName:Ht("sensor_name"),labelKey:Ht("label_key"),labelValue:Ht("label_value")};var qt;!function(t){t.event="event",t.error="error",t.deprecated="deprecated",t.warning="warning",t.value="value",t.values="values"}(qt||(qt={}));const Gt=At.a,Qt=At.a,Xt=At.a;(({win:t,propertyName:e})=>({call:n=>Gt(Object.assign({win:t,propertyName:e},n)),subscribe:n=>Xt(Object.assign({win:t,propertyName:e},n)),wait:n=>(({propertyName:t,win:e})=>new Promise(n=>{Xt({callback:(...t)=>n(t),propertyName:t,win:e})}))(Object.assign({win:t,propertyName:e},n)),waitUntil:n=>(({propertyName:t,win:e,comparator:n})=>new Promise(i=>{Xt({propertyName:t,win:e,callback:(...t)=>{n(...t)&&i()}})}))(Object.assign({win:t,propertyName:e},n)),clear:n=>Qt(Object.assign({win:t,propertyName:e},n))}))({propertyName:"YANDEX_STATS_GLOBAL_CALLBACK_PROPERTY_NAME",win:window});var Jt=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]])}return n};const Kt=n(14),Zt=({eventType:t,eventName:e,value:n,values:i})=>{const r={};return mt(i,(n,i)=>{r[`${t}_${e}_${i}`]=n}),Object.assign({[`${t}_${e}`]:n},r)},te=/^\w(\-|_|:|\s|\.|\w){1,20}$/,ee=/^\w(\-|_|:|\s|\.|\w){0,70}$/,ne=/^\w(\-|_|:|\s|\.|\w){1,70}$/;class ie{constructor(t){this.rootFields={},this.labels={},this.event=({name:t,data:e,labels:n,probability:i,extraRootFields:r})=>{this.push({eventType:qt.event,eventName:t,data:e,additionalStatsLabels:n,probability:i,extraRootFields:r})},this.error=({error:t,labels:e,probability:n,extraRootFields:i})=>{const r=new a(t);this.push({eventName:String(r.code),eventType:qt.error,data:r,additionalStatsLabels:e,probability:n,extraRootFields:i})},this.value=({name:t,value:e,data:n,labels:i,probability:r,extraRootFields:o})=>{this.push({eventName:t,value:e,eventType:qt.value,data:n,additionalStatsLabels:i,probability:r,extraRootFields:o})},this.values=({name:t,values:e,data:n,labels:i,probability:r,extraRootFields:o})=>{this.push({eventName:t,eventType:qt.values,data:n,additionalStatsLabels:i,probability:r,values:e,extraRootFields:o})},this.warning=({name:t,message:e,probability:n,extraRootFields:i})=>{Object(f.a)(console)&&Object(y.a)(console.warn)&&console.warn(e),this.push({eventName:t,eventType:qt.warning,data:{message:e},probability:n,extraRootFields:i})},this.getParams=()=>{const t=this.params,{onLogError:e}=t;return Jt(t,["onLogError"])},this.setRootFields=t=>{Lt(t).forEach(([t,e])=>{void 0===e?delete this.rootFields[t]:this.rootFields[t]=e})},this.setLabels=t=>{Lt(t).forEach(([t,e])=>{void 0===e?delete this.labels[t]:this.labels[t]=e})},this.eventToStats=(t,e,n,i)=>{this.push({eventType:qt.event,eventName:t,data:e,additionalStatsLabels:n,extraRootFields:i})},this.errorToStats=(t,e,n)=>{const i=new a(t);this.push({eventName:String(i.code),eventType:qt.error,data:i,additionalStatsLabels:e,extraRootFields:n})},this.deprecated=(t,e)=>{Object(f.a)(console)&&Object(y.a)(console.warn)&&console.warn(e),this.push({eventName:t,eventType:qt.deprecated,data:{message:e}})},this.valueToStats=(t,e,n,i)=>{this.push({eventName:t,value:e,eventType:qt.value,data:n,additionalStatsLabels:i})};const{onLogError:e}=t;this.params=Object.assign({},t,{sid:t.sid||Rt(Vt),onLogError:e?t=>{try{e(t)}catch(t){it(t)}}:it}),this.logUrl=ie.getLogUrl(t),this.isStrmLogUrl=this.logUrl===Ut}static getLogUrl(t){return t.logUrl?t.logUrl:!0===t.useAlias?Ft:zt}push({eventName:t,eventType:e,data:n={},additionalStatsLabels:i,value:r=1,probability:o=1,values:s={},extraRootFields:c}){if(!function(t,e,n,i=!1){const r=(i?V():Dt)<t,o=r?e:n;return"function"==typeof o&&o(),r}(o))return;const{service:l,version:d}=this.params,h={service:l,version:d,data:n,eventName:t,eventType:e,additionalStatsLabels:i,value:r,values:s};if(ie.isSendingData)throw new a({message:"RecursiveStatsRequests",details:{service:l,version:d,eventType:e,eventName:t}});ie.isSendingData=!0;try{let n=this.logUrl;this.params.sendOnlyPrimaryParams||(n=Ot(this.logUrl,Object.assign({[l]:d,[e]:t},i)));const r=this.createFullStatsObject(h,c);this.isStrmLogUrl&&(r.routeToJSTracer=!0),this.sendData(n,Kt(r))}catch(u){ie.isSendingData=!1,this.params.onLogError(new a(u,{details:{service:l,version:d,eventType:e,eventName:t}}))}ie.isSendingData=!1}sendData(t,e){if(this.params.useSendBeacon){if(function(t,e){return!!Bt&&window.navigator.sendBeacon(t,e)}(t,e))return}Mt({url:t,data:e,method:"POST",onBeforeSend:this.params.onBeforeSend})}createFullStatsObject(t,e){const{service:n,version:i,eventName:r,eventType:o,data:s,additionalStatsLabels:a,value:l}=t,d=(this.params.createTagsFunction||Zt)(t),h=Object.assign({},this.labels,a,{version:this.params.version}),u={service:n,tags:It(Lt(d).map(([t,e])=>ne.test(t)?[t,e]:[Yt.sensorName,e])),labels:It(Lt(h).map(([t,e])=>{let n=t,i=e;return te.test(n)||(n=Yt.labelKey),ee.test(i)||(i=Yt.labelValue),[n,i]}))},{location:p,referrer:f}=at(document);return Object.assign({},e,this.rootFields,u,{timestamp:Date.now(),eventType:o,eventName:r,data:s,sid:this.params.sid,version:i,location:c(window),topLocation:p,topAncestor:$t,isTopAncestorUndetermined:!Et||void 0,ancestorOrigins:st,documentIsVisible:X(document),referrer:window.document.referrer,topReferrer:f,currentScriptSrc:jt,secureIFrame:lt,isVideoADB:Object(y.a)(G),value:l,rnd:Dt,topDocumentFocus:nt()})}}ie.isSendingData=!1;new ie({service:"CommonPcode",version:"0",sid:Rt(Vt)}),["//yasta","tic.net/pcode-nat","ive-bundles"].join("");function re(){const t=function(){if(!window.yaads)return;return window.yaads}();if(t&&void 0!==t.version)return t}const oe=gt(()=>{return 332});const se=new ie({service:"pcode_native_error",version:oe().toString(),sid:U()});function ae(t){return function(t,e){const n={};return d(t).forEach(i=>{n[i]=e(t[i],i)}),n}(Object.assign({widget_ver:oe().toString(),widget_pf:"no",bundle:"widget"},t),t=>void 0===t||""===t?"-":t)}function ce(t,e,n){try{const r=new a(t,{code:e,type:"ERROR",href:c(window),details:n});se.error({error:r,labels:ae()})}catch(i){}}function le(t){try{se.event({name:t.name,data:Object.assign({},t.data),labels:ae()})}catch(e){}}const de=(t,e=window)=>{let n;return{promise:new Promise((i,r)=>{const o=e.setTimeout(r,t);n=()=>{e.clearTimeout(o),i()}}),stop:n}};const he=(t,e,n)=>{for(let i=0;i<t.length;i++)e.call(n,t[i],i,t)},ue=(t,e,n)=>{const i=new Array(t.length);for(let r=0;r<t.length;r++)i[r]=e.call(n,t[r],r,t);return i};function pe(t){const e=[];for(const[n,i]of t){const t=fe(i,n);e.push(t)}return function(t){if(t.length>53)throw new Error("bitUtils.toDecimal: больше 53 бит не поддерживается из-за ограниченной точности, но передана строка длиной "+t.length+" бит.");return parseInt(t,2)}(e.reverse().join(""))}function fe(t,e){return ge(function(t,e){return Number(t)&Math.pow(2,e)-1}(t,e).toString(2),e)}function ge(t,e){return function(t,e,n=" "){const i=e-t.length;if(i>0){let e=n;for(;e.length<i;)e+=e;return(e.length>i?e.substr(0,i):e)+t}return t}(t,e,"0")}const me=n(19);class ye{constructor(t={}){this.props={},this.setProps(Object.assign({},this.defaults(),t))}static sliceBits(t,e,n){return function(t,e,n){const i=e+n,r=ge(t.toString(2),i).substr(-i,n);return parseInt(r,2)}(t,e,n)}defaults(){return{}}toString(){return this.serialize().toString()}setProps(t){return me(t)&&he(this.getTemplate(),([,e])=>{e&&t.hasOwnProperty(e)&&(this.props[e]=t[e])},this),this}getProps(){return Object.assign({},this.props)}clone(){return new(0,this.constructor)(this.props)}serialize(){var t,e;return pe((t=this.getTemplate(),e=this.props,ue(t,([t,n])=>[t,n&&e[n]||null])))}slice(t,e){return ye.sliceBits(this.serialize(),t,e)}}const ve={DIRECT:1,RTB:2,PERFORMANCE:3,DISTRIBUTION:4,ADFOX:5,WIDGET:13,OLD_BUILD:14,LONG_SESSION:15};class be extends ye{getTemplate(){return[[4,"marker"],[6,"format"],[4,null],[1,"isRefresh"],[1,"emptyLoaderTesttag"],[1,"isIframe"],[1,"isHover"],[10,"loaderVer"],[2,"preloadExp"],[7,null],[1,null],[1,null],[10,"codeVer"],[1,"adblock"],[3,"polyfill"]]}defaults(){return{marker:ve.WIDGET,adblock:!1,isIframe:(t=window,t.top!==t.self)};var t}}const we=/z-index\s*:\s*(\d+)/gm,xe=/((^|[\s\n\t.,+~>}])((grid|grid-row|grid-item|unit-wrapper|ya-grid-template|ya-unit-wrapper)[\s\n\t.,+~>:{\[(][^}]*))(z-index\s*:\s*-?\d+;?)/gm,ke=999;function _e(t){let e=function(t){const e=[],n=t.replace(/ya-ad-(age|warning)/gm,t=>(e.push(t),"replacedByCssSanitizer"));e.length&&ce(new Error("Из шаблона удалены селекторы дисклеймеров"),"cssSanitizer",{replacedClasses:e});return n}(t);return function(t){const e=[];let n=we.exec(t);for(;null!==n;){const i=n[1];i&&e.push(parseInt(i,10)),n=we.exec(t)}if(e.sort((t,e)=>t-e),!e.length||e[e.length-1]<ke)return t;const i=e.reduce((t,e,n)=>(t[e]=(n+1).toString(),t),{}),r=t.replace(we,t=>{const e=t.split(":")[1].trim();return`z-index: ${i[e.toString()]}`});return ce(new Error("Шаблон содержит элементы, потенциально закрывающие дисклеймер (z-index > 999)"),"cssSanitizer"),r}(e=function(t){if(!xe.test(t))return t;return ce(new Error("Запрещено назначение свойства z-index для группы объявлений"),"cssSanitizer"),t.replace(xe,"$1")}(e))}var Oe,Se=n(8);function Ce(t,e=!1){const n=Object(Se.isString)(t)?parseInt(t,10):t;return e&&(void 0===n||isNaN(n))?NaN:n||0}function $e({x:t,y:e,w:n,h:i}){const r={x:Ce(t,!0),y:Ce(e,!0),w:Ce(n,!0),h:Ce(i,!0)};return isNaN(r.x)||isNaN(r.y)||isNaN(r.w)||isNaN(r.h)?null:r}function Ee(t){return t}function Pe(t,e,n){const i=[],{seatbid:r=[]}=t||{};return r.forEach(t=>{const{bid:r,directPositions:o,imptrackers:s}=t,a=pt(r)?r:[],c=pt(o)?o:[];a.forEach((t,r)=>{const o=function(t,e,n,i,r){if(!t.id)return;const o=t.adm.native||{},{beacon:s,rendertracker:a,category:c,ts:l,age:d,warning:h,abuseUrl:u}=o.ext||{beacon:void 0,rendertracker:void 0,category:void 0,ts:void 0,age:void 0,warning:void 0,abuseUrl:void 0},p=o.imptrackers||[],f={"test-tag":n.toString(),"stat-id":r},g=t=>Ee(Ot(t,f)),m={id:t.id,link:e?g(o.link):o.link,imptrackers:e?p.map(g):p.map(Ee),adsImptrackers:i?i.map(g):void 0,rendertracker:Ee(a),beacon:Ee(s),abuseUrl:u,category:c,age:d,warning:h,ad:e,date:l&&new Date(1e3*parseInt(String(l),10))||void 0,images:[]},{assets:y=[]}=o;return y.forEach(t=>{const e=t.ext&&parseInt(t.ext.type,10)||void 0;if(t.title&&t.title.value)m.title=t.title.value;else if(2===e&&t.data&&t.data.value)m.desc=t.data.value;else if(11===e&&t.data&&t.data.value)m.domain=t.data.value;else if(6===e&&t.data&&t.data.value)m.oldPrice=parseInt(t.data.value,10);else if(7===e&&t.data&&t.data.value)m.price=parseInt(t.data.value,10);else if(8===e&&t.data&&t.data.value)m.phone=t.data.value;else if(9===e&&t.data&&t.data.value)m.address=t.data.value;else if(t.img&&t.img.url){const e=function(t){const{w:e,h:n,url:i}=t,r={width:Ce(e),height:Ce(n),url:i},o=t["smart-centers"];if(pt(o)){const t=o.map($e).filter(t=>null!==t);t&&t.length>0&&(r.smartCenters=t)}return r}(t.img);m.images.push(e)}}),m}(t,c.indexOf(r+1)>=0,e,s,n);o&&i.push(o)})}),i}function je(t,e){return t.name?t:t[e]}function Re(t,e){const n=je(t,e);if(n&&"grid"===n.name){return d(n.props||{}).length>0?Oe.GRID_PROPS:Oe.GRID_TEMPLATE}return Oe.UNKNOWN}!function(t){t[t.GRID_PROPS=0]="GRID_PROPS",t[t.GRID_TEMPLATE=1]="GRID_TEMPLATE",t[t.UNKNOWN=63]="UNKNOWN"}(Oe||(Oe={}));const Ae=(t,e)=>{if(!t)return;const n="click"===e?"clickYrwSessionID":"renderYrwSessionID";$(window,{adSessionID:U(),[n]:t})};let Te;const Ne=(t=window)=>(Te||(Te=t.document.createElement("div")),Te);"boolean"==typeof __test__&&!0===__test__&&(Ne.__RESET_TEST_DIV_=()=>{Te=void 0});const Me=n(21),Ie=Ne(window),Le=(t,e)=>{const n=void 0!==Ie.style[t];if(n&&e&&Me(e))try{Ie.style.cssText=`${t}: ${e};`;const n=Boolean(Ie.style.cssText);return Ie.style.cssText="",n}catch(i){return!1}return n};var De=n(7);const Be={};const Ve=(t="")=>Be[t]||function(t){const e=`${t[0].toUpperCase()}${t.slice(1)}`;for(let n=0;n<De.b.length;n++){const i=De.b[n],r=i?`${i}${e}`:t;if(Le(r))return Be[t]=r}return Be[t]=t}(t);function ze(t,e){const n=t.style;for(const i in e)if(e.hasOwnProperty(i)){n[Ve(i)]=e[i]}}var Fe,Ue=n(5);!function(t){t[t.doNotMatch=0]="doNotMatch",t[t.image=1]="image",t[t.refresh=2]="refresh",t[t.all=3]="all",t[t.scrumble=4]="scrumble"}(Fe||(Fe={}));const We=H,He={pid:"",encode:{key:""},replaceClasses:[],detect:{links:[],custom:[],iframes:[]},cookieMatching:{publisherTag:"",publisherKey:"",types:[],type:Fe.doNotMatch,redirectUrl:["//an.yand","ex.ru/map","uid/"].join(""),imageUrl:"/static/img/logo.gif/",cryptedUidUrl:"https://http-check-headers.yandex.ru",cryptedUidCookie:"crookie",cryptedUidTTL:336},cookieTTL:336,extuidCookies:[],debug:!1,force:!1,disableShadow:!1,forcecry:{enabled:!1,expires:0,percent:0},treeProtection:{enabled:!1}};const Ye="string"==typeof We?He:We;function qe(t){return!!Boolean(t)&&(Object(y.a)(t.encodeCSS)&&Object(y.a)(t.encodeUrl)&&Object(y.a)(t.decodeUrl)&&Object(y.a)(t.isEncodedUrl))}function Ge(t){const e=t.document;let n=e.getElementsByTagName("head")[0];return n||(n=e.createElement("head"),e.documentElement.appendChild(n)),n}function Qe(t){const e=t.win.document.createElement("script");return e.async=!0,t.nonce&&(e.nonce=t.nonce),Object(y.a)(t.onLoad)&&(e.onload=()=>{e.onload=()=>{},Object(y.a)(t.onLoad)&&t.onLoad()}),t.hasCors="boolean"!=typeof t.hasCors||t.hasCors,t.hasCors&&e.setAttribute("crossorigin","anonymous"),e.src=t.src,t.container?t.container.appendChild(e):Ge(t.win).appendChild(e),e}var Xe;function Je(t){if(!t)return;const{parentElement:e}=t;e&&e.removeChild(t)}function Ke(t,e){let n=t+V()*(e+1-t);return n=Math.floor(n)}function Ze(t="a",e="z"){const n=Ke(t.charCodeAt(0),e.charCodeAt(0));return String.fromCharCode(n)}function tn(t){const e=[];for(let n=0;n<t;n++)e.push(Ze());return e.join("")}!function(t){t.LOAD_SCRIPT_ERROR="LOAD_SCRIPT_ERROR",t.STATS_SENSOR_NAME_ERROR="STATS_SENSOR_NAME_ERROR",t.STATS_LABEL_KEY_ERROR="STATS_LABEL_KEY_ERROR",t.STATS_LABEL_VALUE_ERROR="STATS_LABEL_VALUE_ERROR"}(Xe||(Xe={}));const en=4294967295,nn="yaSafeFrameAsyncCallbacks",rn="host.js",on="host_adb.js",sn=window;sn.yaSafeFrameCallbacksStorage=sn.yaSafeFrameCallbacksStorage||{};const an="loader.js",cn="loader_adb.js",ln=(dn="https://yastatic.net/safeframe/1-1-0/",!!qe(Ye.fn)&&Ye.fn.isEncodedUrl(dn));var dn;function hn(){const t=ln?on:rn,e=ln?cn:an,n="undefined"==typeof __safeframe_version__?`${["https://yastatic",".net/safeframe/1-1-0/"].join("")}${e}`:`${["https://yastatic",`.net/safeframe-bundles/0.${__safeframe_version__}/`].join("")}${t}`;return ln?function(t){return qe(Ye.fn)?Ye.fn.encodeUrl(t):t}(n):n}function un(t){t.isLoadingSafeframeStarted||(t.isLoadingSafeframeStarted=!0,function(t,e,n,i=!0){Qe({win:t,src:e,onLoad:n,hasCors:i})}(t,hn(),At.a,!ln))}function pn(t){const e=t[nn]||[];return t[nn]=e,e}function fn(t,e,n,i=At.a,r=At.a,o=At.a){un(t);const s=pn(t),a=n.id instanceof Element?"":n.id,c=function(t,e){return e||t.id||`sf-${Math.floor(Math.random()*en)+1}`}(e,a);s.push(()=>{t.yaSafeFrameCallbacksStorage=t.yaSafeFrameCallbacksStorage||{},t.yaSafeFrameCallbacksStorage[c]={onError:i,onRender:r,onAction:o},function(t){t.yaSafeFrameCallbacksStorage=t.yaSafeFrameCallbacksStorage||{};const e=t.yaSafeFrameCallbacksStorage;new t.$sf.host.Config({auto:!1,onFailure:(t,n,i)=>{e[t]&&e[t].onError(t,i)},onEndPosRender:(t,n,i)=>{e[t]&&e[t].onRender(t,i)},onPosMsg:(n,i,r)=>{e[n]&&e[n].onAction(i,r),"nuke"===i&&mn(t,n)}})}(t),function(t,e,n,i){e.id=i;const{html:r,width:o,height:s,basePath:a,nonce:c}=n,l={id:i,html:r,conf:{nonce:c,w:o,h:s,dest:ln?e:i,protected:n.protected,sandbox:n.sandbox,basePath:a}};n.supports&&(l.conf.supports=n.supports),t.$sf.host.render(l)}(t,e,n,c)})}function gn(t,e){un(t),pn(t).push(()=>{mn(t,e),t.$sf.host.nuke(e)})}function mn({yaSafeFrameCallbacksStorage:t},e){delete t[e]}const yn=300,vn=(t,e={})=>(n,i)=>{let r;const o={portion:void 0!==e.portion?e.portion:0,interval:void 0!==e.interval?e.interval:yn,overlappedPoints:void 0!==e.overlappedPoints?e.overlappedPoints:[[0,0]]},s=t({portion:Math.max(Number.MIN_VALUE,o.portion),interval:o.interval,overlappedPoints:o.overlappedPoints,element:n,callback:b("visibilityObserver",t=>{r!==t&&(r=t,i(t))})});if(!s)throw new Error("visibilityObserver: no strategy");return s.start(),h(()=>s.stop())};class bn{constructor(t){this.args=t,this.runningCount=0,this.callback=(t,e)=>{const n=t+1;e?n===this.strategies.length?this.args.callback(e):n===this.runningCount&&this.startNext():(this.stopUntil(n),this.args.callback(e))},this.strategies=Object(ct.a)(t.strategyFactories,(t,e)=>t(t=>this.callback(e,t)))}static from(...t){return e=>{const n=[];for(const i of t){let t=()=>null;const r=i(Object.assign({},e,{callback:e=>t(e)}));if(!r)return null;n.push(e=>(t=e,r))}return new bn({callback:e.callback,strategyFactories:n})}}start(){!this.runningCount&&this.strategies.length&&this.startNext()}stop(){this.stopUntil(0)}getIsVisible(){for(let t=0;t<this.strategies.length;t++)if(!this.strategies[t].getIsVisible())return!1;return!0}startNext(){this.strategies[this.runningCount++].start()}stopUntil(t){for(;this.runningCount>t;)this.strategies[--this.runningCount].stop()}}const wn=(t,e)=>{for(let n=0;n<t.length;n++)if(e(t[n],n,t))return!0;return!1};var xn=n(9);const kn=Object(xn.a)();function _n(t,e){if(kn)return!1;const{left:n,right:i,top:r,bottom:o}=Object(Ue.getBoundingClientRect)(t),s=i-n,a=o-r;return!wn(e,([e,i])=>{const o=n+(s-1)*(1+e)/2,c=r+(a-1)*(1+i)/2,l=document.elementFromPoint(o,c);if(!l||t===l||t.contains(l))return!0;if(Object(y.a)(t.getRootNode)){if(function t(e,n){const i=e.getRootNode();if(!i||!i.host)return!1;if(n.contains(i.host))return!0;return t(i.host,n)}(l,t))return!0;if(function t(e,n){const i=n.getRootNode();if(!i||!i.host)return!1;if(e===i.host)return!0;return t(e,i.host)}(l,t))return!0}return!1})}class On{constructor(t){this.args=t}start(){this.timer=window.setInterval(b("visibilityObserver",()=>{this.args.callback(this.isVisible())}),this.args.interval)}stop(){window.clearInterval(this.timer)}getIsVisible(){return this.isVisible()}}class Sn extends On{static factory(t){return t.element?new Sn(t):null}isVisible(){return!_n(this.args.element,this.args.overlappedPoints)}}const Cn=function(t,e,n){let i=0;for(arguments.length<3&&(i=1,n=t[0]);i<t.length;i++)n=e(n,t[i],i,t);return n};class $n extends On{constructor(){super(...arguments),this.windowChain=W(window).reverse()}static factory(t){return t.element?new $n(t):null}isVisible(){const t=Object(Ue.getBoundingClientRect)(this.args.element),e=t.width*t.height;if(e<=0)return!1;const n=Cn(this.windowChain,(t,e)=>this.getFrameVisiblePart(e,t),void 0),i=Math.max(t.left,n.left),r=Math.max(t.top,n.top);return(Math.min(t.right,n.right)-i)*(Math.min(t.bottom,n.bottom)-r)>=Math.floor(e*this.args.portion)}getFrameVisiblePart(t,e){if(!e||!t.frameElement)return{left:0,right:t.innerWidth,top:0,bottom:t.innerHeight};const n=Object(Ue.getBoundingClientRect)(t.frameElement);return{left:Math.max(e.left-n.left,0),right:t.innerWidth-Math.max(n.right-e.right,0),top:Math.max(e.top-n.top,0),bottom:t.innerHeight-Math.max(n.bottom-e.bottom,0)}}}function En(){this.returnValue=!1}function Pn(){this.cancelBubble=!0}function jn(t){return function(e){const n=function(t){return t.stopPropagation||(t.stopPropagation=Pn),t.preventDefault||(t.preventDefault=En),t.target||(t.target=t.srcElement),t}(e);t.call(this,n)}}let Rn=function(t,e,n){t.attachEvent("on"+e,n)},An=function(t,e,n){t.detachEvent("on"+e,n)};ht(document,"addEventListener")&&ht(document,"removeEventListener")&&(Rn=function(t,e,n,i){const r=t&&ht(t,"addEventListener");r&&r.call(t,e,n,i)},An=function(t,e,n,i){const r=t&&ht(t,"removeEventListener");r&&r.call(t,e,n,i)});let Tn=!1,Nn=!1,Mn=!1;try{if(((t=window)=>{const e=t.Object;try{const t={};return e.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(n){return!1}})()){const t=document.createElement("div"),e={};Object.defineProperty(e,"once",{get:()=>Tn=!0}),Object.defineProperty(e,"passive",{get:()=>Nn=!0}),Object.defineProperty(e,"capture",{get:()=>Mn=!0}),Rn(t,"click",At.a,e)}}catch(Qa){}function In(t,e,n,i,r){if(!t||!n)return null;let o=jn(b("handler:"+e,n,i));const s={un(){An(t,e,o)}};var a;return r&&r.once&&!Tn&&(a=o,o=function(t){a.call(this,t),Ln(s)}),Rn(t,e,o,Nn?r:r&&r.capture),s}function Ln(t){t&&t.un()}let Dn="hidden",Bn="visibilitychange";if(!(Dn in document)){const t=["webkit","moz","ms","o"];for(const e of t){const t=`${e}Hidden`;if(t in document){Dn=t,Bn=`${e}visibilitychange`;break}}}const Vn=new class{constructor(t=window){this.windowObj=t,this.initYaBrowserApi()}canUseYaBroApi(){return Boolean(this.yaBroApiInstance&&this.yaBroApiInstance.isInCustoPage)}isPageHiddenYaBroApi(){return!(this.yaBroApiInstance&&this.yaBroApiInstance.pageVisible)}initYaBrowserApi(){this.windowObj.browser&&this.windowObj.browser.BrowserEmbeddedApi&&this.windowObj.browser.BrowserEmbeddedApi.getInstance().then(t=>{this.yaBroApiInstance=t})}};class zn{constructor(t){this.args=t,this.onVisibilityChangeCallback=()=>{this.args.callback(this.getIsVisible())}}static factory(t){return new zn(t)}start(){this.timer=window.setTimeout(()=>{this.onVisibilityChangeCallback(),this.subscription=In(document,Bn,this.onVisibilityChangeCallback)})}stop(){window.clearTimeout(this.timer),Ln(this.subscription)}getIsVisible(){return!(Vn.canUseYaBroApi()?Vn.isPageHiddenYaBroApi():Boolean(document[Dn]))}}class Fn{static factory(){return new Fn}start(){}stop(){}getIsVisible(){return!0}}const Un=n(22),Wn=n(24),Hn=n(5).getBoundingClientRect;function Yn(t,e,n){return Math.max(Math.min(e,n)-Math.max(t,0),0)}function qn(t){const e=Hn(t),n=e.width,i=e.height;let r=0;if(n>0&&i>0){const t=Un();r=Yn(e.left,e.right,t.width)*Yn(e.top,e.bottom,t.height)/(n*i)}return r}const Gn=Math.pow(2,-149);class Qn{constructor(t){this.args=t,this.callback=t=>{const e=t[0].intersectionRatio>=this.observer.thresholds[0];this.args.callback(e)},this.threshold=Math.max(Gn,this.args.portion),this.observer=new IntersectionObserver(this.callback,{threshold:this.threshold})}static factory(t){return"undefined"==typeof IntersectionObserver?null:"thresholds"in IntersectionObserver.prototype&&t.element?new Qn(t):null}start(){this.observer.observe(this.args.element)}stop(){this.observer.disconnect()}getIsVisible(){return t=this.args.element,e=this.threshold,Wn.isOperaMini?t.offsetWidth>0&&t.offsetHeight>0:qn(t)>=(e||Number.MIN_VALUE);var t,e}}var Xn=n(17);class Jn{constructor(t){this.args=t,this.onViewableChange=b("MRAID::viewableChange",()=>{const{mraid:t}=this.args;this.check(t.isViewable())},this),this.onExposureChange=b("MRAID::exposureChange",t=>{const{portion:e}=this.args,n=t/100;this.check(n>=e)},this);const{mraid:e}=t,n=e.getVersion();this.onViewableChange.toString=Jn.getProtectedToStringFunction(),this.onExposureChange.toString=Jn.getProtectedToStringFunction(),(parseInt(n,10)>=3||e.__PRIV__&&e.__PRIV__.isYaMraid3FeatureSupported&&e.__PRIV__.isYaMraid3FeatureSupported("exposureChange"))&&(this.isSupportExposureChange=!0)}static factory(t){const{element:e}=t;if(!e)return null;const n=Xn.MraidHelpers.getMraid(e);return n?new Jn(Object.assign({},t,{mraid:n})):null}start(){const{mraid:t}=this.args;this.isSupportExposureChange?t.addEventListener("exposureChange",this.onExposureChange):(t.addEventListener("viewableChange",this.onViewableChange),setTimeout(this.onViewableChange))}stop(){const{mraid:t}=this.args;this.isSupportExposureChange?t.removeEventListener("exposureChange",this.onExposureChange):t.removeEventListener("viewableChange",this.onViewableChange)}getIsVisible(){return!0}check(t){const{callback:e}=this.args;e(t)}}Jn.callbackCount=0,Jn.getProtectedToStringFunction=()=>{const t=Jn.callbackCount++;return()=>`pcode-protected-callback-${t}`};class Kn{}Kn.factory=class{static from(...t){return e=>{for(const n of t){const t=n(e);if(t)return t}return null}}}.from(Jn.factory,bn.from(zn.factory,Qn.factory,Sn.factory),bn.from(zn.factory,class{static factory(t){return bn.from($n.factory,Sn.factory)(t)}}.factory),Fn.factory);var Zn=n(12);const ti=Object(Zn.a)();function ei(t){const e=new Image;Object(y.a)(t.onLoad)&&In(e,"load",t.onLoad,t.ctx),Object(y.a)(t.onError)&&In(e,"error",t.onError,t.ctx),e.src=t.src}const ni={Metrika:"yandex_metrika_callbacks",Metrika2:"yandex_metrika_callbacks2"},ii=1,ri="https://mc.yandex.ru/metrika/watch.js",oi="https://d93ih7uy3azjp.cloudfront.net/metrika/watch.js";class si{constructor(t,e,n){this.getYa=t,this.needLoadMetrika=e,this.loadMetrika=h(()=>{if(!this.needLoadMetrika||this.win.YA_TURBO_METRIKA)return;Qe({src:this.getYa().relHostname?oi:ri,win:this.win})}),this.win=n||window,Boolean(t().Metrika)?this.metrikaName="Metrika":Boolean(t().Metrika2)?this.metrikaName="Metrika2":this.metrikaName="tag"===this.win.YA_TURBO_METRIKA?"Metrika2":"Metrika",this.metrikaCallbacksName=ni[this.metrikaName]}static getInstance(t,e=!0){return this.instance||(this.instance=new si(t,e)),this.instance}requestCounter(t,e){this.isLoaded()?e(this.getCounter(t)):(this.loadMetrika(),this.addCallback(()=>{e(this.getCounter(t))}))}getCounter(t){const e="yaCounter"+t.id;return this.win[e]||(this.win[e]=this.createCounter(t)),this.win[e]}isLoaded(){return Boolean(this.getYa()[this.metrikaName])}addCallback(t){this.win[this.metrikaCallbacksName]||(this.win[this.metrikaCallbacksName]=[]),this.win[this.metrikaCallbacksName].push(t)}createCounter(t){const e=this.getYa()[this.metrikaName];if(!e)throw new Error(`metrika counter creation error: ${this.metrikaName} is not in context`);try{return new e({id:t.id,type:t.isYAN?ii:void 0,defer:!0,nck:!t.enableCookies})}catch(n){throw new Error("metrika counter creation error: "+n.message)}}}const ai=new WeakMap,ci=t=>(...e)=>{const n=t(...e);return ai.set(n,!0),n},li=t=>"function"==typeof t&&ai.has(t),di=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,hi=(t,e,n=null,i=null)=>{let r=e;for(;r!==n;){const e=r.nextSibling;t.insertBefore(r,i),r=e}},ui=(t,e,n=null)=>{let i=e;for(;i!==n;){const e=i.nextSibling;t.removeChild(i),i=e}},pi={},fi=`{{lit-${String(Math.random()).slice(2)}}}`,gi=`\x3c!--${fi}--\x3e`,mi=new RegExp(`${fi}|${gi}`),yi="$lit$";class vi{constructor(t,e){this.parts=[],this.element=e;let n=-1,i=0;const r=[],o=e=>{const s=e.content,a=document.createTreeWalker(s,133,null,!1);let c,l;for(;a.nextNode();){n++,c=l;const e=l=a.currentNode;if(1===e.nodeType){if(e.hasAttributes()){const r=e.attributes;let o=0;for(let t=0;t<r.length;t++)r[t].value.indexOf(fi)>=0&&o++;for(;o-- >0;){const r=t.strings[i],o=xi.exec(r)[2],s=o.toLowerCase()+yi,a=e.getAttribute(s).split(mi);this.parts.push({type:"attribute",index:n,name:o,strings:a}),e.removeAttribute(s),i+=a.length-1}}"TEMPLATE"===e.tagName&&o(e)}else if(3===e.nodeType){const t=e.nodeValue;if(t.indexOf(fi)<0)continue;const o=e.parentNode,s=t.split(mi),a=s.length-1;i+=a;for(let i=0;i<a;i++)o.insertBefore(""===s[i]?wi():document.createTextNode(s[i]),e),this.parts.push({type:"node",index:n++});o.insertBefore(""===s[a]?wi():document.createTextNode(s[a]),e),r.push(e)}else if(8===e.nodeType)if(e.nodeValue===fi){const t=e.parentNode,o=e.previousSibling;null===o||o!==c||o.nodeType!==Node.TEXT_NODE?t.insertBefore(wi(),e):n--,this.parts.push({type:"node",index:n++}),r.push(e),null===e.nextSibling?t.insertBefore(wi(),e):n--,l=c,i++}else{let t=-1;for(;-1!==(t=e.nodeValue.indexOf(fi,t+1));)this.parts.push({type:"node",index:-1})}}};o(e);for(const s of r)s.parentNode.removeChild(s)}}const bi=t=>-1!==t.index,wi=()=>document.createComment(""),xi=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class ki{constructor(t,e,n){this._parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this._parts)void 0!==n&&n.setValue(t[e]),e++;for(const n of this._parts)void 0!==n&&n.commit()}_clone(){const t=di?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=this.template.parts;let n=0,i=0;const r=t=>{const o=document.createTreeWalker(t,133,null,!1);let s=o.nextNode();for(;n<e.length&&null!==s;){const t=e[n];if(bi(t))if(i===t.index){if("node"===t.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(s),this._parts.push(t)}else this._parts.push(...this.processor.handleAttributeExpressions(s,t.name,t.strings,this.options));n++}else i++,"TEMPLATE"===s.nodeName&&r(s.content),s=o.nextNode();else this._parts.push(void 0),n++}};return r(t),di&&(document.adoptNode(t),customElements.upgrade(t)),t}}class _i{constructor(t,e,n,i){this.strings=t,this.values=e,this.type=n,this.processor=i}getHTML(){const t=this.strings.length-1;let e="";for(let n=0;n<t;n++){const t=this.strings[n];let i=!1;e+=t.replace(xi,(t,e,n,r)=>(i=!0,e+n+yi+r+fi)),i||(e+=gi)}return e+this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const Oi=t=>null===t||!("object"==typeof t||"function"==typeof t);class Si{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let i=0;i<n.length-1;i++)this.parts[i]=this._createPart()}_createPart(){return new Ci(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let i=0;i<e;i++){n+=t[i];const e=this.parts[i];if(void 0!==e){const t=e.value;if(null!=t&&(Array.isArray(t)||"string"!=typeof t&&t[Symbol.iterator]))for(const e of t)n+="string"==typeof e?e:String(e);else n+="string"==typeof t?t:String(t)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class Ci{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===pi||Oi(t)&&t===this.value||(this.value=t,li(t)||(this.committer.dirty=!0))}commit(){for(;li(this.value);){const t=this.value;this.value=pi,t(this)}this.value!==pi&&this.committer.commit()}}class $i{constructor(t){this.value=void 0,this._pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(wi()),this.endNode=t.appendChild(wi())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t._insert(this.startNode=wi()),t._insert(this.endNode=wi())}insertAfterPart(t){t._insert(this.startNode=wi()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this._pendingValue=t}commit(){for(;li(this._pendingValue);){const t=this._pendingValue;this._pendingValue=pi,t(this)}const t=this._pendingValue;t!==pi&&(Oi(t)?t!==this.value&&this._commitText(t):t instanceof _i?this._commitTemplateResult(t):t instanceof Node?this._commitNode(t):Array.isArray(t)||t[Symbol.iterator]?this._commitIterable(t):this._commitText(t))}_insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}_commitNode(t){this.value!==t&&(this.clear(),this._insert(t),this.value=t)}_commitText(t){const e=this.startNode.nextSibling;t=null==t?"":t,e===this.endNode.previousSibling&&e.nodeType===Node.TEXT_NODE?e.textContent=t:this._commitNode(document.createTextNode("string"==typeof t?t:String(t))),this.value=t}_commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value&&this.value.template===e)this.value.update(t.values);else{const n=new ki(e,t.processor,this.options),i=n._clone();n.update(t.values),this._commitNode(i),this.value=n}}_commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,i=0;for(const r of t)void 0===(n=e[i])&&(n=new $i(this.options),e.push(n),0===i?n.appendIntoPart(this):n.insertAfterPart(e[i-1])),n.setValue(r),n.commit(),i++;i<e.length&&(e.length=i,this.clear(n&&n.endNode))}clear(t=this.startNode){ui(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Ei{constructor(t,e,n){if(this.value=void 0,this._pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this._pendingValue=t}commit(){for(;li(this._pendingValue);){const t=this._pendingValue;this._pendingValue=pi,t(this)}if(this._pendingValue===pi)return;const t=!!this._pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)),this.value=t,this._pendingValue=pi}}class Pi extends Si{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new ji(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class ji extends Ci{}let Ri=!1;try{const t={get capture(){return Ri=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(Xa){}class Ai{constructor(t,e,n){this.value=void 0,this._pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this._boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this._pendingValue=t}commit(){for(;li(this._pendingValue);){const t=this._pendingValue;this._pendingValue=pi,t(this)}if(this._pendingValue===pi)return;const t=this._pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),i=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this._boundHandleEvent,this._options),i&&(this._options=Ti(t),this.element.addEventListener(this.eventName,this._boundHandleEvent,this._options)),this.value=t,this._pendingValue=pi}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Ti=t=>t&&(Ri?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);const Ni=new class{handleAttributeExpressions(t,e,n,i){const r=e[0];if("."===r){return new Pi(t,e.slice(1),n).parts}return"@"===r?[new Ai(t,e.slice(1),i.eventContext)]:"?"===r?[new Ei(t,e.slice(1),n)]:new Si(t,e,n).parts}handleTextExpression(t){return new $i(t)}};function Mi(t){let e=Ii.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Ii.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(fi);return void 0===(n=e.keyString.get(i))&&(n=new vi(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const Ii=new Map,Li=new WeakMap,Di=(t,...e)=>new _i(t,e,"html",Ni),Bi=NodeFilter.SHOW_ELEMENT|NodeFilter.SHOW_COMMENT|NodeFilter.SHOW_TEXT;function Vi(t,e){const{element:{content:n},parts:i}=t,r=document.createTreeWalker(n,Bi,null,!1);let o=Fi(i),s=i[o],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const t=r.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(l.push(t),null===d&&(d=t)),null!==d&&c++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-c,s=i[o=Fi(i,o)]}l.forEach(t=>t.parentNode.removeChild(t))}const zi=t=>{let e=t.nodeType===Node.DOCUMENT_FRAGMENT_NODE?0:1;const n=document.createTreeWalker(t,Bi,null,!1);for(;n.nextNode();)e++;return e},Fi=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(bi(e))return n}return-1};const Ui=(t,e)=>`${t}--${e}`;let Wi=!0;void 0===window.ShadyCSS?Wi=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected.Please update to at least @webcomponents/webcomponentsjs@2.0.2 and@webcomponents/shadycss@1.3.1."),Wi=!1);const Hi=t=>e=>{const n=Ui(e.type,t);let i=Ii.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},Ii.set(n,i));let r=i.stringsArray.get(e.strings);if(void 0!==r)return r;const o=e.strings.join(fi);if(void 0===(r=i.keyString.get(o))){const n=e.getTemplateElement();Wi&&window.ShadyCSS.prepareTemplateDom(n,t),r=new vi(e,n),i.keyString.set(o,r)}return i.stringsArray.set(e.strings,r),r},Yi=["html","svg"],qi=new Set,Gi=(t,e,n)=>{qi.add(n);const i=t.querySelectorAll("style");if(0===i.length)return;const r=document.createElement("style");for(let o=0;o<i.length;o++){const t=i[o];t.parentNode.removeChild(t),r.textContent+=t.textContent}if((t=>{Yi.forEach(e=>{const n=Ii.get(Ui(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),Vi(t,n)})})})(n),function(t,e,n=null){const{element:{content:i},parts:r}=t;if(null==n)return void i.appendChild(e);const o=document.createTreeWalker(i,Bi,null,!1);let s=Fi(r),a=0,c=-1;for(;o.nextNode();){for(c++,o.currentNode===n&&(a=zi(e),n.parentNode.insertBefore(e,n));-1!==s&&r[s].index===c;){if(a>0){for(;-1!==s;)r[s].index+=a,s=Fi(r,s);return}s=Fi(r,s)}}}(e,r,e.element.content.firstChild),window.ShadyCSS.prepareTemplateStyles(e.element,n),window.ShadyCSS.nativeShadow){const n=e.element.content.querySelector("style");t.insertBefore(n.cloneNode(!0),t.firstChild)}else{e.element.content.insertBefore(r,e.element.content.firstChild);const t=new Set;t.add(r),Vi(e,t)}},Qi=t=>null!==t,Xi=t=>t?"":null,Ji=(t,e)=>e!==t&&(e==e||t==t),Ki={attribute:!0,type:String,reflect:!1,hasChanged:Ji},Zi=new Promise(t=>t(!0)),tr=1,er=4,nr=8;class ir extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=Zi,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this._finalize();const t=[];for(const[e,n]of this._classProperties){const i=this._attributeNameForProperty(e,n);void 0!==i&&(this._attributeToPropertyMap.set(i,e),t.push(i))}return t}static createProperty(t,e=Ki){if(!this.hasOwnProperty("_classProperties")){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}if(this._classProperties.set(t,e),this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():`__${t}`;Object.defineProperty(this.prototype,t,{get(){return this[n]},set(i){const r=this[t];this[n]=i,this._requestPropertyUpdate(t,r,e)},configurable:!0,enumerable:!0})}static _finalize(){if(this.hasOwnProperty("_finalized")&&this._finalized)return;const t=Object.getPrototypeOf(this);"function"==typeof t._finalize&&t._finalize(),this._finalized=!0,this._attributeToPropertyMap=new Map;const e=this.properties,n=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of n)this.createProperty(i,e[i])}static _attributeNameForProperty(t,e){const n=void 0!==e&&e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=Ji){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e&&e.type;if(void 0===n)return t;const i=n===Boolean?Qi:"function"==typeof n?n:n.fromAttribute;return i?i(t):t}static _propertyValueToAttribute(t,e){if(void 0===e||void 0===e.reflect)return;return(e.type===Boolean?Xi:e.type&&e.type.toAttribute||String)(t)}initialize(){this.renderRoot=this.createRenderRoot(),this._saveInstanceProperties()}_saveInstanceProperties(){for(const[t]of this.constructor._classProperties)if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}_applyInstanceProperties(){for(const[t,e]of this._instanceProperties)this[t]=e;this._instanceProperties=void 0}createRenderRoot(){return this.attachShadow({mode:"open"})}connectedCallback(){this._updateState&tr?void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this):this.requestUpdate()}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=Ki){const i=this.constructor,r=i._propertyValueToAttribute(e,n);if(void 0!==r){const e=i._attributeNameForProperty(t,n);void 0!==e&&(this._updateState=this._updateState|nr,null===r?this.removeAttribute(e):this.setAttribute(e,r),this._updateState=this._updateState&~nr)}}_attributeToProperty(t,e){if(!(this._updateState&nr)){const n=this.constructor,i=n._attributeToPropertyMap.get(t);if(void 0!==i){const t=n._classProperties.get(i);this[i]=n._propertyValueFromAttribute(e,t)}}}requestUpdate(t,e){if(void 0!==t){const n=this.constructor._classProperties.get(t)||Ki;return this._requestPropertyUpdate(t,e,n)}return this._invalidate()}_requestPropertyUpdate(t,e,n){return this.constructor._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0===n.reflect&&(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n)),this._invalidate()):this.updateComplete}async _invalidate(){if(!this._hasRequestedUpdate){let t;this._updateState=this._updateState|er;const e=this._updatePromise;this._updatePromise=new Promise(e=>t=e),await e,this._validate(),t(!this._hasRequestedUpdate)}return this.updateComplete}get _hasRequestedUpdate(){return this._updateState&er}_validate(){if(this._instanceProperties&&this._applyInstanceProperties(),this.shouldUpdate(this._changedProperties)){const t=this._changedProperties;this.update(t),this._markUpdated(),this._updateState&tr||(this._updateState=this._updateState|tr,this.firstUpdated(t)),this.updated(t)}else this._markUpdated()}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~er}get updateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){if(void 0!==this._reflectingProperties&&this._reflectingProperties.size>0){for(const[t,e]of this._reflectingProperties)this._propertyToAttribute(t,this[t],e);this._reflectingProperties=void 0}}updated(t){}firstUpdated(t){}}ir._attributeToPropertyMap=new Map,ir._finalized=!0,ir._classProperties=new Map,ir.properties={};const rr=t=>(e,n)=>{e.constructor.createProperty(n,t)},or=sr((t,e)=>t.querySelector(e));sr((t,e)=>t.querySelectorAll(e));function sr(t){return e=>(n,i)=>{Object.defineProperty(n,i,{get(){return t(this.renderRoot,e)},enumerable:!0,configurable:!0})}}class ar extends ir{update(t){super.update(t);const e=this.render();e instanceof _i&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this})}render(){}}function cr(){return window.Ya||(window.Ya={})}ar.render=(t,e,n)=>{const i=n.scopeName,r=Li.has(e),o=e instanceof ShadowRoot&&Wi&&t instanceof _i,s=o&&!qi.has(i),a=s?document.createDocumentFragment():e;if(((t,e,n)=>{let i=Li.get(e);void 0===i&&(ui(e,e.firstChild),Li.set(e,i=new $i(Object.assign({templateFactory:Mi},n))),i.appendInto(e)),i.setValue(t),i.commit()})(t,a,Object.assign({templateFactory:Hi(i)},n)),s){const t=Li.get(a);Li.delete(a),t.value instanceof ki&&Gi(a,t.value.template,i),ui(e,e.firstChild),e.appendChild(a),Li.set(e,t)}!r&&o&&window.ShadyCSS.styleElement(e.host)};const lr={NOT_INTERESTING:{"reason-id":3,"action-id":2,description:{large:{1:"Не интересуюсь этой темой",3:"This doesn't interest me",6:"Bununla ilgilenmiyorum"},small:{1:"Не интересуюсь",3:"Not interested",6:"İlgilenmiyorum"}}},ALREADY_BOUGHT:{"reason-id":14,"action-id":2,description:{large:{1:"Товар куплен или услуга найдена",3:"Already found product or service",6:"Hizmeti veya ürünü satın aldım"},small:{1:"Уже купил",3:"Already purchased",6:"Satın aldım"}}},SPAM:{"reason-id":5,"action-id":3,description:{large:{1:"Нарушает закон или спам",3:"Illegal or spam",6:"Yasa ihlali veya spam"},small:{1:"Спам",3:"Spam",6:"Spam"}}},PREVENTS_BROWSING:{"reason-id":9,"action-id":1,description:{large:{1:"Мешает просмотру контента",3:"Interferes with content",6:"İçeriği görüntülemeyi engelliyor"},small:{1:"Мешает",3:"Intrusive",6:"Engelliyor"}}}},dr={1:"Скрыть рекламу",3:"Hide ad",6:"Reklamları gizle"},hr={1:"Спасибо, объявление скрыто.",3:"Thank you, this ad is hidden now.",6:"Teşekkürler, reklam kapatıldı."},ur="//an.yandex.ru",pr="//an.webvisor.org";function fr(t,e){const n=Ot(t||"",e||{});return function(){const t=cr();return Boolean(t&&t.relHostname)}()?n.replace(ur,pr):n}const gr={},mr=t=>e=>(window.customElements.define(t,e),e);var yr=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let vr=class extends ar{constructor(t,e,n){super(),this.sideSize=t,this.onClick=e,this.language=n,this.addEventListener("click",t=>this.onCloseClick(t))}render(){return Di`
            ${this.getStyle()}
            <div class="root">
                <div class="tooltip">${dr[this.language]}</div><div class="arrow"></div>
                <div class="iconContainer">
                    <div class="iconImage">
                        <svg
                            width="${this.sideSize}px"
                            height="${this.sideSize}px"
                            viewBox="0 0 14 14"
                            style="display: block"
                        >
                            <polygon
                                style="fill: white"
                                points="8.286 7.020 13.663 12.398 12.3984 13.663 7.020 8.286 1.643 13.663 0.377 12.398 5.755 7.020 0.377 1.643 1.643 0.377 7.020 5.755 12.398 0.377 13.663 1.643"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        `}hide(){this.root.classList.add("hidden")}onCloseClick(t){t.stopPropagation(),t.preventDefault(),this.onClick()}getStyle(){const t=10+this.sideSize;return Di`
            <style>
                .root {
                    user-select: none;
                    position: absolute;
                    right: 0;
                    top: 0;
                    z-index: 20;
                    cursor: pointer;
                }
                .hidden {
                    display: none;
                }
                .iconContainer {
                    position: relative;
                    border-radius: 0 0 0 20%;
                    box-sizing: content-box;
                    background-color: rgba(0, 0, 0, 0.25);
                    padding: ${5}px;
                    display: inline-block;
                }
                .iconImage {
                    width: ${this.sideSize};
                    height: ${this.sideSize};
                }
                .tooltip {
                    font-family: Arial, sans-serif;
                    height: ${t}px;
                    line-height: ${t}px;
                    vertical-align: top;
                    display: none;
                    max-width: 160px;
                    font-size: 13px;
                    color: white;
                    background: #333;
                    background-color: rgba(0, 0, 0, 0.8);
                    border-radius: 1px;
                    padding: 0 4px;
                }
                .arrow {
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 6px 0 6px 6px;
                    border-color: transparent transparent transparent rgba(0, 0, 0, 0.8);
                    display: none;
                    vertical-align: center;
                    position: relative;
                    bottom: ${(10+this.sideSize-12)/2}px;
                    margin-right: 2px;
                }
                .root:hover > .tooltip,
                .root:hover > .arrow {
                    display: inline-block;
                }
            </style>
        `}};yr([or(".root")],vr.prototype,"root",void 0),vr=yr([mr("ya-adtune-close")],vr);var br=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let wr=class extends ar{constructor(t,e){super(),this.language=t,this.onAbused=e,this.visible=!1,this.isTextBig=!0,this.actionTypes=["NOT_INTERESTING","ALREADY_BOUGHT","SPAM","PREVENTS_BROWSING"]}render(){return Di`
            ${this.getStyle()}
            <div class="root">
                <div class="slide">
                    <div class="form">
                        <div class="messages">
                            <div class="title">${dr[this.language]}:</div>
                            <div class="complains-container">
                                <div class="complains complains-large">
                                    ${this.actionTypes.map((t,e)=>this.createAction(t,e))}
                                </div>
                                <div class="abuse-message">
                                    <div class="abuse-icon">${this.renderDoneIcon()}</div>
                                    <div class="abuse-text">${hr[this.language]}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `}toggleVisiblitiy(){this.visible?this.root.classList.remove("visible"):this.root.classList.add("visible"),this.visible=!this.visible}updated(){const{clientWidth:t,clientHeight:e}=this.root,n=t/e;n<1?this.alignVertical(e):n<5&&e>100?this.alignHorizontal(e):this.alignRow(e,n)}createAction(t,e){return Di`
            <div
                class="complain complain-${e}"
                @click=${e=>this.handleClick(e,t)}
            >
                <span class="complain-text complain-text-large">
                    ${lr[t].description.large[this.language]}
                </span>
                <span class="complain-text complain-text-short">
                    ${lr[t].description.small[this.language]}
                </span>
            </div>
        `}isTextFits(){const t=this.root.querySelector(".complain").offsetWidth-10;let e=!0;const n=this.isTextBig?".complain-text-large":".complain-text-short";return this.root.querySelectorAll(n).forEach(n=>{n.offsetWidth>t&&(e=!1)}),e}decreaseText(t=!1){this.isTextBig&&(!t&&this.isTextFits()||(this.isTextBig=!1,this.complains.classList.remove("complains-large"),this.complains.classList.add("complains-short")))}alignVertical(t){for(let e=1;e<4&&this.messages.clientHeight>t;e++)this.messages.classList.add("messages-vertical-size-"+e);this.decreaseText()}alignHorizontal(t){if(this.messages.clientHeight<t)this.decreaseText();else if(this.complains.classList.add("complains-square"),this.decreaseText(),!(this.messages.clientHeight<t&&this.isTextFits()||(this.complains.classList.remove("complains-square"),this.complains.classList.add("complains-row"),this.messages.clientHeight<t&&this.isTextFits())))for(let e=1;e<4&&this.messages.clientHeight>t;e++)this.messages.classList.add("messages-horizontal-size-"+e)}alignRow(t,e){if(this.complains.classList.add("complains-row"),!(this.messages.clientHeight<t||(this.decreaseText(!0),this.messages.clientHeight<t||e>5&&(this.messages.classList.add("messages-row"),this.messages.clientHeight<t))))for(let n=1;n<4&&this.messages.clientHeight>t;n++)this.messages.classList.add("messages-row-size-"+n)}handleClick(t,e){t.stopPropagation(),t.preventDefault(),this.messages.classList.add("messages-abused"),this.onAbused(e,this.isTextBig)}renderDoneIcon(){return Di`
            <svg width="18" height="18">
                <path
                    d="M5.485 11.07L2.45 8.037 1.036 9.45l3.035 3.035-.034.036 1.414 1.415 8.485-8.485-1.414-1.414-7.035 7.035z"
                />
            </svg>
        `}getStyle(){return Di`
            <style>
                .root {
                    font-family: Arial, sans-serif;
                    font-size: 13px;
                    border: solid 1px #cccccc;
                    position: absolute;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: -1;
                    transition: z-index 0s linear 0.4s;
                    cursor: default;
                    line-height: 1.25;
                }
                .slide {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    margin-left: 100%;
                    overflow: hidden;
                    transition: margin-left 0.4s ease-out;
                }
                .form {
                    align-items: center;
                    position: absolute;
                    display: flex;
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.98);
                    justify-content: center;
                }
                .messages {
                    box-sizing: border-box;
                    padding: 10px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
                .messages-row {
                    flex-direction: row;
                }
                .title {
                    font-weight: bold;
                    text-align: center;
                    padding-bottom: 15px;
                }
                .complains-container {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                }
                .complains {
                    width: 100%;
                    max-width: 250px;
                    display: flex;
                    align-items: stretch;
                    flex-direction: column;
                    align-content: center;
                }
                .complains-square,
                .complains-row {
                    flex-direction: row;
                    flex-wrap: wrap;
                }
                .complains-row {
                    max-width: none;
                    justify-content: center;
                }
                .complains-square .complain {
                    width: 47.5%;
                }
                .complains-square .complain:nth-child(odd) {
                    margin-right: 5%;
                }
                .complains-large .complain-text-short {
                    display: none;
                }
                .complains-short .complain-text-large {
                    display: none;
                }
                .complains-row .complain {
                    width: auto;
                    margin-right: 3%;
                }
                .complain {
                    user-select: none;
                    margin-top: 5px;
                    box-sizing: border-box;
                    width: 100%;
                    padding: ${5}px;
                    background-color: #fff;
                    border: 1px solid #c8c8c8;
                    border-radius: 4px;
                    text-align: center;
                    color: #555;
                    transition-property: border, color;
                    transition-duration: 0.2s;
                }
                .complain-text {
                    white-space: nowrap;
                }
                .complain:hover {
                    color: #333;
                    border-color: #333;
                }
                .root.visible {
                    transition: z-index 0s;
                    z-index: 2;
                }
                .root.visible > .slide {
                    margin-left: 0;
                }

                .abuse-message {
                    display: none;
                }
                .messages-abused .abuse-message {
                    display: flex;
                    align-items: center;
                }
                .messages-abused .complains {
                    display: none;
                }
                .abuse-text {
                    margin-left: 10px;
                }

                .messages-vertical-size-1 {
                    font-size: 12px;
                    padding: 5px;
                }
                .messages-vertical-size-1 .title {
                    padding-bottom: 5px;
                }
                .messages-vertical-size-1 .complain {
                    margin-top: 3px;
                }

                .messages-vertical-size-2 {
                    padding: 3px;
                }
                .messages-vertical-size-2 .title {
                    padding-bottom: 3px;
                }
                .messages-vertical-size-2 .complain {
                    margin-top: 2px;
                }

                .messages-vertical-size-3 {
                    padding: 1px;
                }
                .messages-vertical-size-3 .title {
                    padding-bottom: 1px;
                }
                .messages-vertical-size-3 .complain {
                    margin-top: 1px;
                }

                .messages-horizontal-size-1 {
                    padding: 3px;
                }
                .messages-horizontal-size-1 .title {
                    padding-bottom: 10px;
                }

                .messages-horizontal-size-2 {
                    padding: 1px;
                }
                .messages-horizontal-size-2 .title {
                    padding-bottom: 5px;
                }

                .messages-horizontal-size-3 {
                    font-size: 12px;
                }

                .messages-row-size-1 {
                    padding: 5px;
                }
                .messages-row-size-1 .title {
                    padding-botom: 5px;
                }

                .messages-row-size-2 {
                    padding: 3px;
                    font-size: 12px;
                }
                .messages-row-size-2 .title {
                    padding-bottom: 2px;
                }
                .messages-row-size-2 .complain {
                    padding: 3px;
                }

                .messages-row-size-3 .complain {
                    padding: 1px;
                }
            </style>
        `}};br([or(".root")],wr.prototype,"root",void 0),br([or(".messages")],wr.prototype,"messages",void 0),br([or(".complains")],wr.prototype,"complains",void 0),wr=br([mr("ya-adtune-feedback")],wr);var xr=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const kr={type:"inline",verison:function(){const t=re();return t&&t.version||0}(),isTouch:ti,widget:!0};let _r=class extends ar{constructor(t,e,n){super(),this.language=e,this.abuseUrl=n,this.sideSize=t>75e3?9:8,this.metrikaManager=si.getInstance(cr,!0)}render(){return this.adtuneFeedback=new wr(this.language,(t,e)=>{this.onAdAbused(t,e)}),this.adtuneClose=new vr(this.sideSize,()=>this.onAdCloseClicked(),this.language),Di`
            ${this.adtuneClose} ${this.adtuneFeedback}
        `}onAdCloseClicked(){this.adtuneFeedback.toggleVisiblitiy();this.metrikaManager.requestCounter({id:22596877},t=>{t.hit(window.location.href,{params:kr})})}onAdAbused(t,e){this.adtuneClose.hide();const n={"reason-id":lr[t]["reason-id"]+"","action-id":lr[t]["action-id"]+""};ei({src:fr(this.abuseUrl,n)}),this.sendMetrikaAbused(t,e)}sendMetrikaAbused(t,e){this.metrikaManager.requestCounter({id:22596877},n=>{const i=e?"large":"small",r=Object.assign({},kr,{blockType:i,optionId:`${lr[t]["reason-id"]}-${lr[t]["action-id"]}`,optionText:lr[t].description[i][this.language]});n.reachGoal("send",r)})}};_r=xr([mr("ya-adtune")],_r);const Or="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";function Sr(t){return function(t){const e=[];let n=0;for(;n<t.length;){const i=t.charCodeAt(n);if(i<128)e.push(String.fromCharCode(i)),n++;else if(i>191&&i<224){const r=t.charCodeAt(n+1);e.push(String.fromCharCode((31&i)<<6|63&r)),n+=2}else{const r=t.charCodeAt(n+1),o=t.charCodeAt(n+2);e.push(String.fromCharCode((15&i)<<12|(63&r)<<6|63&o)),n+=3}}return e.join("")}(function(t){const e=[];let n=0;t=t.replace(/[^A-Za-z0-9\-_=]/g,"");for(;n<t.length;){const i=Or.indexOf(t.charAt(n++)),r=Or.indexOf(t.charAt(n++)),o=Or.indexOf(t.charAt(n++)),s=Or.indexOf(t.charAt(n++)),a=i<<2|r>>4,c=(15&r)<<4|o>>2,l=(3&o)<<6|s;e.push(String.fromCharCode(a)),64!==o&&e.push(String.fromCharCode(c)),64!==s&&e.push(String.fromCharCode(l))}return e.join("")}(t))}class Cr{constructor(t,e){if(!t.rtb.html&&!t.rtb.url)throw new Error("Meta resource has not url and html");this.isHtml5=Boolean(t.rtb.html5),this.width=parseInt(t.rtb.width||"",10)||0,this.height=parseInt(t.rtb.height||"",10)||0,this.html=t.rtb.html?Sr(t.rtb.html):"",this.url=t.rtb.url||"",this.basePath=this.isHtml5?t.rtb.basePath:void 0,this.isAdaptive=Boolean(Number(t.rtb.flexible)),this.useSafeframe=Boolean(this.html),this.cssWidth=this.width?this.width+"px":"100%",this.cssHeight=this.height+"px",this.abuseUrl=t.rtb.abuseLink||"",this.lang=t.common&&t.common.pageLang||"1";const n=e.split("-");this.settings=t.settings[n[n.length-1]]}}const $r=(t,e,n)=>{for(let i=0;i<t.length;i++)e.call(n,t[i],i,t)},Er=(t,e,n=0,i=Pr)=>{for(let r=n;r<t.length;r++)if(i(t[r],e))return r;return-1},Pr=(t,e)=>t===e;var jr;!function(t){t.MRC="mrc",t.YA="ya"}(jr||(jr={}));const Rr={[jr.YA]:2100,[jr.MRC]:1e3};function Ar(t){return Rr[t]}const Tr=242500,Nr=.3,Mr=.5;function Ir(t,e){if(!e)return Mr;return(e.clientWidth||0)*(e.clientHeight||0)>=Tr?Nr:Mr}class Lr{static factory(t,e){const n={portion:e.factoryOptions.portion,overlappedPoints:e.factoryOptions.overlappedPoints,interval:e.factoryOptions.interval,element:t,strategy:e.factory,preventStop:e.preventStop,onVisibilityChange:e.onVisibilityChange,confirmations:[{delay:e.delay,onConfirm:e.onConfirm,confirmOnHover:!1}]};return new Lr(n)}constructor(t){this.onChange=t=>this.check(t);const e={portion:void 0!==t.portion?t.portion:Ir(jr.YA,t.element),interval:void 0!==t.interval?t.interval:yn,overlappedPoints:void 0!==t.overlappedPoints?t.overlappedPoints:[[0,0]]},n=(t.strategy?t.strategy:Kn.factory)({portion:Math.max(Number.MIN_VALUE,e.portion),interval:e.interval,overlappedPoints:e.overlappedPoints,element:t.element,callback:b("visibilityObserver",this.onChange)});if(!n)throw new Error("VisibilityConfirmer: no strategy");this.strategy=n,this.confirmationEntries=Object(ct.a)(t.confirmations||[],t=>Object.assign({confirmOnHover:!0,delay:Ar(jr.YA)},t,{confirmTimeoutId:null,isConfirmed:!1})),this.preventStop=t.preventStop,this.onVisibilityChange=t.onVisibilityChange;const i=In(t.element,"mouseover",()=>this.onHover());this.stopMouseoverTracking=()=>Ln(i),!1!==t.autostart&&this.start()}start(){this.strategy.start()}stop(t=!1){this.cancelConfirmSchedule(),this.preventStop&&!t||(this.strategy.stop(),this.stopMouseoverTracking())}confirm(){$r(this.confirmationEntries,t=>this.confirmEntry(t,-1))}getIsVisible(){return this.strategy.getIsVisible()}onHover(){this.stopMouseoverTracking(),$r(this.confirmationEntries,t=>{!t.isConfirmed&&t.confirmOnHover&&this.confirmEntry(t,-1)})}confirmEntry(t,e){t.isConfirmed||(t.isConfirmed=!0,null!==t.confirmTimeoutId&&(clearTimeout(t.confirmTimeoutId),t.confirmTimeoutId=null),t.onConfirm(e),this.confirmationEntries.splice(Er(this.confirmationEntries,t),1),0===this.confirmationEntries.length&&this.stop())}check(t){this.onVisibilityChange&&this.onVisibilityChange(t),t?this.scheduleConfirm():this.cancelConfirmSchedule()}scheduleConfirm(){const t=Date.now();$r(this.confirmationEntries,e=>{e.delay?null===e.confirmTimeoutId&&(e.confirmTimeoutId=setTimeout(()=>this.confirmEntry(e,t),e.delay)):this.confirmEntry(e,t)})}cancelConfirmSchedule(){$r(this.confirmationEntries,t=>{null!==t.confirmTimeoutId&&(clearTimeout(t.confirmTimeoutId),t.confirmTimeoutId=null)})}}function Dr(t){for(let e=0;e<t.length;e++)(new Image).src=t[e]}function Br(t,e){const n=["<scr",'ipt>"use strict";(',Dr,')(["',t.join('","'),'"])</scr',"ipt>"].join("");return new Promise((t,i)=>{!function(t){const e=document.createElement("div");document.body.appendChild(e),e.style.position="fixed",e.style.left="-99px";const n=document.createElement("div");e.appendChild(n);const i=Rt(10),r={nonce:t.nonce,width:1,height:1,html:t.html,id:i},o=h(()=>{gn(window,i),Je(e)}),s=()=>{setTimeout(o,t.wait)};fn(window,n,r,()=>{Object(y.a)(t.onError)&&t.onError(),s()},()=>{Object(y.a)(t.onLoad)&&t.onLoad(),s()},(e,n)=>{t.onAction(e,n)})}({nonce:e,onAction:(t,e)=>{"error"===t&&ce(new Error(e),"confirm.html")},onLoad:t,onError:i,html:n,wait:5e3})})}class Vr{constructor(t){this.confirmRendered=h(()=>{this.params.winNotice&&Br([this.params.winNotice],this.nonce)}),this.confirm=h(()=>{if(this.isConfirmSent=!0,this.params.container.removeEventListener("mouseover",this.onMouseOverConfirmer),this.visibilityConfirmer.stop(),!this.params.linkTail)return;const t=this.getAuxProps(),e=this.getConfirmUrl(t);this.params.viewNotices&&this.params.viewNotices.length?Br(this.params.viewNotices,this.nonce).then(()=>{ei({src:e})},()=>{ce(new Error("View notices load error"),"RTB_visibility_manager_error")}):ei({src:e})}),this.isVisible=!1,this.params=Object.assign({},t,{nonce:t.nonce||""});const e=vn(Kn.factory,{portion:t.portion});this.visibilityConfirmer=new Lr({element:t.container,observer:e,delay:this.params.visibilityTimeout,onVisibilityChange:t=>this.onVisibilityChanged(t),onConfirm:()=>this.confirm()}),this.onMouseOverConfirmer=()=>this.confirm(),this.params.container.addEventListener("mouseover",this.onMouseOverConfirmer)}getIsVisible(){return this.isVisible}getWasVisible(){return this.isConfirmSent}destroy(){this.visibilityConfirmer&&this.visibilityConfirmer.stop(),this.params.container.removeEventListener("mouseover",this.onMouseOverConfirmer)}onVisibilityChanged(t){this.confirmTimeStart=t?this.confirmTimeStart||performance.now():0}getAuxProps(){let t=-1;this.confirmTimeStart&&(t=performance.now()-this.confirmTimeStart,t=Math.round(1e3*t));let e=Number(qn(this.params.container));return e=Math.round(1e6*e),{testtagProps:(new be).getProps(),renderSize:(n=this.params.container,{width:n.clientWidth,height:n.clientHeight}),extParams:{confirmTime:t+"",confirmRatio:e+""}};var n}getConfirmUrl(t){const{testtagProps:e,renderSize:n,extParams:i}=t,r=new be(e),o=Object.assign({},i,{"test-tag":r.toString(),rnd:Ke(1e12,1e13)+""});return n&&(o.renderWidth=n.width+"",o.renderHeight=n.height+""),fr(this.params.linkTail,o)}}const zr=242500,Fr=.3,Ur=.5,Wr={position:"relative",margin:"0",display:"flex","justify-content":"flex-start","align-items":"center",overflow:"hidden"},Hr={position:"relative",top:"0",left:"0"},Yr=(t,e,n)=>{const i=document.createElement(t);return ze(i,e),n&&n.appendChild(i),i};class qr{constructor(t,e,n,i){this.container=e,this.nonce=i,this.destroyed=!1,this.wasRendered=!1,this.mediaData=new Cr(t,n),this.initialSizes=Object(Ue.getBoundingClientRect)(e)}destroy(){this.destroyed||(this.destroyed=!0,clearTimeout(this.visibilityInterval),this.iframe||gn(window,this.container.id),this.visibilityManager&&this.visibilityManager.destroy(),this.stopVisibilityObserver&&this.stopVisibilityObserver(),this.root.remove())}getState(){const{visibilityManager:t}=this,e=Boolean(t&&t.getIsVisible()),n=Boolean(t&&t.getWasVisible()),i=this.destroyed||this.root&&this.root.parentElement!==this.container;return i&&this.destroy(),{isWidget:!1,isVisibleNow:e,wasVisible:n,disconnected:i,wasRendered:this.wasRendered}}render(){const{cssWidth:t,cssHeight:e,useSafeframe:n}=this.mediaData;this.root=Yr("div",Wr),this.body=Yr("div",Object.assign({width:t,height:e},Hr),this.root),this.body.id=Rt(12),n||(this.iframe=Yr("iframe",{width:"100%",height:"100%"},this.body),this.iframe.scrolling="no",this.iframe.marginWidth="0",this.iframe.marginHeight="0",this.iframe.frameBorder="0"),this.container.appendChild(this.root),this.initFrames()}getVisibilityTimeout(){if(this.mediaData.settings&&void 0!==this.mediaData.settings.exposureTimeout){const t=parseInt(this.mediaData.settings.exposureTimeout,10);if(!isNaN(t))return t}return 7*yn}initVisibilityManager(){const{settings:t}=this.mediaData;let e=[];t&&t.viewNotices&&t.viewNotices.length&&(e=e.concat(t.viewNotices)),t&&"string"==typeof t.viewNotice&&""!==t.viewNotice&&e.push(t.viewNotice),e=(e=function(t){const e={};for(let n=0;n<t.length;n++)e[t[n]]=n;return d(e)}(e)).map(t=>fr(t));const n=fr(t&&t.winNotice||"");this.createVisibilityHandler(),this.visibilityManager=new Vr({nonce:this.nonce,linkTail:t&&t.linkTail||"",viewNotices:e,winNotice:n,container:this.container,portion:this.getVisiblePortion(),visibilityTimeout:this.getVisibilityTimeout()})}createVisibilityHandler(){let t=!1;const e=e=>{t=e;try{const e=JSON.stringify({action:"pcode:"+(t?"visible":"invisible")}),i=this.root.querySelector("iframe");i&&i.contentWindow&&i.contentWindow.postMessage(e,"*")}catch(n){!function(t,e){0}()}};this.visibilityInterval=setInterval(()=>e(t),yn);const n=vn(Kn.factory,{portion:this.getVisiblePortion()});this.stopVisibilityObserver=n(this.container,e)}initFrames(){this.setBannerSizes(),this.mediaData.isAdaptive&&window.addEventListener("resize",()=>this.setBannerSizes()),this.mediaData.useSafeframe?this.initSafeFrame():this.initFriendlyFrame()}setBannerSizes(){const{isAdaptive:t,cssWidth:e,cssHeight:n}=this.mediaData;if(t){const t=0===this.initialSizes.width||0===this.initialSizes.height,i={width:t?e:"100%",height:t?n:"100%","min-width":"160px","min-height":"50px"};return ze(this.root,i),void ze(this.body,i)}ze(this.body,{width:e,height:n})}initSafeFrame(){const{html:t,basePath:e,isHtml5:n}=this.mediaData;fn(window,this.body,{id:this.body.id,html:t,basePath:e||void 0,width:"100%",height:"100%",nonce:this.nonce,protected:n},void 0,()=>this.onRender(),(e,n)=>this.onActionSafeFrame(e,n,t))}onActionSafeFrame(t,e,n){if("error"===t){let t;try{const r=JSON.parse(e);t=Object.assign({},r,{name:r.type}),"ReferenceError"===r.type&&(t.stack=`${r.line}:HTML:\n${n}`)}catch(i){(t=i).name=`UnknownSafeframeError:${t.name}`,t.stack=`${t.stack}:HTML:\n${n}`}this.onError(t)}}initFriendlyFrame(){const t=this.getTemplate();try{const e=this.iframe;if("srcdoc"in e)e.srcdoc=t;else{const n=e.contentDocument;n.open(),n.write(t),n.close()}this.onRender()}catch(Qa){Qa.name="RTBBanner.initFriendlyFrame",Qa.stack=`${Qa.stack}:HTML:\n${t}`,this.onError(Qa)}}getTemplate(){const{url:t,html:e,basePath:n}=this.mediaData,i=(Boolean(t),!Boolean(e));let r;return`\n            <!DOCTYPE html>\n            <html lang="en">\n            <head>\n                <meta charset="UTF-8">\n                <base href="${i?"":n}" target="_blank"/>\n            </head>\n            <body>\n                ${r=i?`\n                <script nonce="${this.nonce}">\n                    window.location = "${t}";\n                <\/script>`:e}\n            </body>\n            </html>\n        `}onRender(){this.wasRendered=!0,this.initVisibilityManager(),this.visibilityManager.confirmRendered(),this.renderAdtune()}onError(t){ce(t,t.name?t.name:"UnknownRtbBlockError")}renderAdtune(){const{abuseUrl:t,width:e,height:n,lang:i}=this.mediaData;if(!t)return;const r=new _r(e*n,i,t);this.body.appendChild(r)}getVisiblePortion(){return(this.container.clientWidth||0)*(this.container.clientHeight||0)>=zr?Fr:Ur}}const Gr=(t,...e)=>{return Object(ct.a)(t,(t,n)=>n>0?`${e[n-1]}${t}`:t).join("")},Qr=(t,e)=>{t.classList.add(...e.split(" ").map(Kr))},Xr=(t,e)=>{t.classList.remove(...e.split(" ").map(Kr))},Jr=(t,e)=>{mt(e,(e,n)=>((t,e,n)=>{t.style.setProperty(e,n)})(t,n,e))},Kr=t=>t,Zr=(t,...e)=>{return new _i(t,e,"html",Ni)},to=(gt(()=>{const t=(()=>d(gr))(),e=new RegExp(`(<\\/?)(${t.join("|")})(\\/?>|\\s)`,"igm"),n=/class\=(([^\"\'\s>]+)|[\"\']?([\w\d\-\_\s]+)[\"\']?)/gim,i=(t,e,n,i)=>`${e}${(t=>gr[t])(n)}${i}`,r=(t,e)=>{return`class="${e.replace(/[\"\']/g,"").split(" ").map(Kr).join(" ")}"`};return t=>t.replace(e,i).replace(n,r)}),t=>t),eo=(t,e)=>t.querySelector(to(e)),no=(t,e)=>Array.from(t.querySelectorAll(to(e))),io=t=>or(to(t)),ro=/.*var\s*\(.*\,\s*(.*)\).*/,oo=function(){const t=window.CSS;return t&&Object(y.a)(t.supports)&&(t.supports("--fake-var",0)||t.supports("font-weight","var(--fake-var)"))}();function so(...t){const e=[];if(t.forEach(t=>{Object(Se.isString)(t)?e.push(t):d(t).forEach(n=>{t[n]&&e.push(n)})}),e.length)return e.map(Kr).join(" ")}function ao(t,e){return void 0===e||oo||(e=function(t){return t.replace(ro,"$1")}(`${e}`)),e?`${t}: ${e};`:""}function co(t){return`\n        ${ao("padding-top",t["padding-top"])}\n        ${ao("padding-right",t["padding-right"])}\n        ${ao("padding-bottom",t["padding-bottom"])}\n        ${ao("padding-left",t["padding-left"])}\n    `}function lo(t){return`\n        ${ao("margin-top",t["offset-top"])}\n        ${ao("margin-right",t["offset-right"])}\n        ${ao("margin-bottom",t["offset-bottom"])}\n        ${ao("margin-left",t["offset-left"])}\n    `}function ho(t){return`\n        ${ao("border-top",t["border-top"])}\n        ${ao("border-right",t["border-right"])}\n        ${ao("border-bottom",t["border-bottom"])}\n        ${ao("border-left",t["border-left"])}\n        ${ao("border-radius",t["border-radius"])}\n    `}function uo(t){return`\n        ${ao("color",t.color)}\n        ${ao("font-size",t["font-size"])}\n        ${ao("font-family",t["font-family"])}\n        ${ao("font-weight",t["font-weight"])}\n        ${ao("font-style",t["font-style"])}\n        ${ao("line-height",t["line-height"])}\n        ${ao("letter-spacing",t["letter-spacing"])}\n        ${ao("text-decoration",t["text-decoration"])}\n        ${ao("text-transform",t["text-transform"])}\n        ${ao("text-align",t["text-align"])}\n    `}function po(t){return`\n        ${ao("width",t.width)}\n        ${ao("height",t.height)}\n        ${ao("max-width",t["max-width"])}\n        ${ao("max-height",t["max-height"])}\n    `}function fo(t){return`\n        ${ao("background-color",t["background-color"])}\n        ${ao("opacity",t["background-opacity"])}\n        ${ao("filter",t["background-filter"])}\n    `}function go(t){return`\n        ${ao("top",t["background-top"]||"0px")}\n        ${ao("bottom",t["background-bottom"]||"0px")}\n        ${ao("left",t["background-left"]||"0px")}\n        ${ao("right",t["background-right"]||"0px")}\n    `}const mo="object"==typeof window.ShadyCSS&&!window.ShadyCSS.nativeShadow,yo=/\:host(\(([^\)]*)\))?([^\,\{]*)/g,vo=/(?:^|([\}]\s*))(((?!(\:host|\s+))[^\,\{\}]){1,})/g,bo=/(\s{2,}|[\s\r\n\t]+)/g;function wo(t,e,n){const i=t.replace(bo," ");return e?n?i.replace(vo,`$1.${n} $2`).replace(yo,`${e}.${n}$2$3`):i.replace(yo,`${e}$2$3`):i}function xo(t,e){return function(t,e=window){return("function"==typeof e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle)||{}}(t)[e]}function ko(t,e=!1){mo||e?setTimeout(t,0):t()}class _o extends ar{constructor(){super(),this._scope=`${this.localName}_${_o.getUniqScope()}`,this._scopeClass=`.${this._scope}`,Qr(this,this._scope)}static getUniqScope(){let t,e=5;for(;!t||_o.usedScopes.indexOf(t)>=0;)t=tn(e++);return _o.usedScopes.push(t),t}update(t){const e=this.render();e instanceof _i&&ar.render(e,this.renderRoot,{scopeName:this._scope,eventContext:this})}_style(t){return this.renderRoot instanceof window.ShadowRoot&&mo?wo(Gr`
                    ${t}
                `,this.localName):wo(Gr`
                ${t}
            `)}_toggleClass(t,e=!1){e?Qr(this,t):Xr(this,t)}}_o.usedScopes=[];var Oo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let So=class extends _o{render(){const{labelPosition:t,labelSpacing:e,styleProps:n}=this,i="tl"===t||"tr"===t,r="tl"===t||"bl"===t,o=so("yrw-block-label",this._scope,{"yrw-block-label__right":!r,"yrw-block-label__top":i,"yrw-block-label__bottom":!i});return Zr`
            <style>
                ${this._style(`\n                :host {\n                    position: relative;\n                    display: flex;\n                    flex-direction: column;\n                    box-sizing: border-box;\n                    ${po(n)}\n                    ${fo(n)}\n                    ${ho(n)}\n                    ${co(n)}\n                    ${lo(n)}\n                }\n\n                .yrw-block-label {\n                    display: block;\n                    width: 100%;\n                }\n\n                .yrw-block-label__top {\n                    order: 0;\n                    ${ao("margin-bottom",e)}\n                }\n\n                .yrw-block-label__bottom {\n                    order: 1;\n                    ${ao("margin-top",e)}\n                }\n\n                .yrw-block-label__right {\n                    text-align: right;\n                }\n            `)}
            </style>
            <div class=${o}><slot name="label"></slot></div>
            <slot name="headline"></slot>
            <slot></slot>
        `}};function Co(t){const e=/^[\s\n\r]+$/;return pt(t)||(t=$o(t)),t.filter(t=>{const n=8===t.nodeType,i=Eo(t);return!n&&!t.hide&&i&&!e.test(i)})}function $o(t){return Array.from(t.childNodes)}function Eo(t){return t.nodeValue||t.textContent||t.innerText||""}function Po(t,e){if(!e)return t;const n=t.shadowRoot?t.shadowRoot:t;return eo(n,e)}Oo([rr({type:String})],So.prototype,"labelPosition",void 0),Oo([rr({type:String})],So.prototype,"labelSpacing",void 0),Oo([rr({type:Object})],So.prototype,"styleProps",void 0),So=Oo([mr("ya-block")],So);const jo="…";function Ro(t,e){return function(t){const e=xo(t,"line-height");return"normal"===e?1.2*parseInt(xo(t,"font-size"),10):parseInt(e,10)}(t)*e+parseInt(xo(t,"padding-top"),10)+parseInt(xo(t,"padding-bottom"),10)}function Ao(t,e,n,i){const r=Po(t,n);if(!r)return;const{style:o}=r;if(void 0!==o.webkitLineClamp)o.overflow="hidden",o.textOverflow="ellipsis",o.webkitBoxOrient="vertical",o.display="-webkit-box",o.webkitLineClamp=e,i&&(r.innerText=i);else{const r=()=>{!function(t,e,n,i){const r=Po(t,n);i&&(r.innerText=i);const o=Ro(t,e);if(!o||o>=t.clientHeight)return;const s=t=>{r.innerText=t+jo},a=Eo(r).split(" ");if(a.length<2)return;let c,l=a.length-1,d=0;for(;d<l;)c=d+l+1>>1,s(a.slice(0,c).join(" ")),t.clientHeight>o?l=c-1:d=c;s(a.slice(0,l).join(" "))}(t,e,n,i),o.removeProperty("visibility")};o.visibility="hidden",ko(r)}}const To=[].find,No=P(To)?(t,e)=>To.call(t,e):(t,e)=>{for(let n=0;n<t.length;n++){const i=t[n];if(e(i,n,t))return i}};var Mo;!function(t){t.adCategory="ad-category-",t.adDate="ad-date-",t.adDesc="ad-desc-",t.adDomain="ad-domain-",t.adImage="ad-image-",t.adMeta="ad-meta-",t.adTitle="ad-title-",t.adUnit="ad-unit-",t.blockGrid="block-grid-",t.blockHeadline="block-headline-",t.blockLabel="block-label-",t.block="block-"}(Mo||(Mo={}));const Io="hover-",Lo={hide:"hidden","spacing-width":"spacing-horizontal","spacing-height":"spacing-vertical"};function Do(t){const e={};return d(Mo).forEach(t=>e[t]={}),d(t).forEach(n=>{const i=function(t){const e=No(d(Mo),e=>0===t.indexOf(Mo[e]));if(!e)return;let n=t.slice(Mo[e].length);return Lo[n]&&(n=Lo[n]),[e,n]}(n);if(!i)return;const[r,o]=i;e[r][o]=e[r][o]||t[n]}),function(t){switch(t.adUnit["image-position"]){case"top":case"bottom":t.adImage.width="100%"}return t}(e)}function Bo(t){const e={};return d(t).forEach(n=>{if(0===n.indexOf(Io)){const i=n.slice(Io.length);e[i]=t[n]}}),e}var Vo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let zo=class extends _o{constructor(){super(...arguments),this.styleProps={}}render(){this._toggleClass("yrw-hidden",this.hide);const{styleProps:t,maxLength:e}=this,n=Bo(t),i=function(t,e){return void 0!==e&&e<t.length?t.substr(0,e-3)+jo:t}(Eo(this),e);return Zr`
            <style>
                ${this._style(`\n                :host {\n                    position: relative;\n                    display: block;\n                    ${ao("order",t.order)}\n                    ${fo(t)}\n                    ${uo(t)}\n                    ${ho(t)}\n                    ${co(t)}\n                    ${lo(t)}\n                }\n                :host(.yrw-hidden) {\n                    display: none;\n                }\n                :host(.yrw-hovered) {\n                    ${uo(n)}\n                }\n                .yrw-content {\n                    text-decoration: inherit;\n                }\n            `)}
            </style>
            <span class=${so("yrw-content",this._scope)}>${i}</span>
        `}shouldUpdate(t){if(!super.shouldUpdate(t))return!1;let e=0;return t.has("hide")&&(this._toggleClass("yrw-hidden",this.hide),e+=1),t.has("hovered")&&(this._toggleClass("yrw-hovered",this.hovered),e+=1),!(t.size<=e)}updated(){const{lineClamp:t}=this;t&&Ao(this,t,".yrw-content")}};Vo([rr({type:Boolean})],zo.prototype,"hide",void 0),Vo([rr({type:Boolean})],zo.prototype,"hovered",void 0),Vo([rr({type:Number})],zo.prototype,"lineClamp",void 0),Vo([rr({type:Number})],zo.prototype,"maxLength",void 0),Vo([rr({type:Object})],zo.prototype,"styleProps",void 0),zo=Vo([mr("ya-clamped-text")],zo);const Fo=(t,e)=>{const n=t.startNode.parentNode,i=void 0===e?t.endNode:e.startNode,r=n.insertBefore(wi(),i);n.insertBefore(wi(),i);const o=new $i(t.options);return o.insertAfterNode(r),o},Uo=(t,e)=>(t.setValue(e),t.commit(),t),Wo=(t,e,n)=>{const i=t.startNode.parentNode,r=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==r&&hi(i,e.startNode,o,r)},Ho=t=>{ui(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},Yo=(t,e,n)=>{const i=new Map;for(let r=e;r<=n;r++)i.set(t[r],r);return i},qo=new WeakMap,Go=new WeakMap,Qo=ci((t,e,n)=>{let i;return void 0===n?n=e:void 0!==e&&(i=e),e=>{if(!(e instanceof $i))throw new Error("repeat can only be used in text bindings");const r=qo.get(e)||[],o=Go.get(e)||[],s=[],a=[],c=[];let l,d,h=0;for(const m of t)c[h]=i?i(m,h):h,a[h]=n(m,h),h++;let u=0,p=r.length-1,f=0,g=a.length-1;for(;u<=p&&f<=g;)if(null===r[u])u++;else if(null===r[p])p--;else if(o[u]===c[f])s[f]=Uo(r[u],a[f]),u++,f++;else if(o[p]===c[g])s[g]=Uo(r[p],a[g]),p--,g--;else if(o[u]===c[g])s[g]=Uo(r[u],a[g]),Wo(e,r[u],s[g+1]),u++,g--;else if(o[p]===c[f])s[f]=Uo(r[p],a[f]),Wo(e,r[p],r[u]),p--,f++;else if(void 0===l&&(l=Yo(c,f,g),d=Yo(o,u,p)),l.has(o[u]))if(l.has(o[p])){const t=d.get(c[f]),n=void 0!==t?r[t]:null;if(null===n){const t=Fo(e,r[u]);Uo(t,a[f]),s[f]=t}else s[f]=Uo(n,a[f]),Wo(e,n,r[u]),r[t]=null;f++}else Ho(r[p]),p--;else Ho(r[u]),u++;for(;f<=g;){const t=Fo(e,s[g+1]);Uo(t,a[f]),s[f++]=t}for(;u<=p;){const t=r[u++];null!==t&&Ho(t)}qo.set(e,s),Go.set(e,c)}});function Xo(t,e){const n=[];for(let i=0;i<t;i++)n.push(e(i));return n}function Jo({rows:t=1,cols:e=1,items:n,fillEmpty:i}){return Xo(t,t=>{const r=(t=>n.slice(t*e,(t+1)*e))(t);if(!r.length)return[];if(r.length<e){const n=Xo(e-r.length,e=>i(t,e));r.push(...n)}return r})}function Ko({rows:t,cols:e,items:n,template:i,scope:r,prefix:o=""}){const s=Jo({rows:t,cols:e,items:n,fillEmpty:(t,e)=>({id:`empty_${t}_${e}`,empty:!0})});return Zr`
        <div class=${so(`${o}grid`,r)}>
            ${Qo(s,t=>t.map(t=>t.id).join(""),t=>Zr`
                    <div class=${so(`${o}grid-row`,r)}>
                        ${Qo(t,t=>t.id,t=>Zr`
                                <div class=${so(`${o}grid-item`,r)}>
                                    ${t.empty?void 0:i(t)}
                                </div>
                            `)}
                    </div>
                `)}
        </div>
    `}var Zo=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ts=class extends _o{constructor(){super(...arguments),this.items=[],this.styleProps={}}render(){const{cols:t,rows:e,items:n,template:i}=this,{styleProps:r}=this,o=r["spacing-vertical"]||r.spacing||"0px",s=r["spacing-horizontal"]||r.spacing||"0px";return Zr`
            <style>
                ${this._style(`\n                :host {\n                    display: block;\n                }\n                .yrw-grid {\n                    display: flex;\n                    flex-direction: column;\n                    flex-wrap: wrap;\n                    justify-content: flex-start;\n                    align-items: stretch;\n                    align-content: flex-start;\n                    width: 100%;\n                    box-sizing: border-box;\n                }\n                .yrw-grid-row {\n                    position: relative;\n                    display: flex;\n                    flex-direction: row;\n                    flex-wrap: nowrap;\n                    justify-content: flex-start;\n                    align-items: stretch;\n                    align-content: flex-start;\n                    width: 100%;\n                    ${ao("margin-top",o)}\n                }\n                .yrw-grid-row:first-child {\n                    margin-top: 0;\n                }\n                .yrw-grid-item {\n                    position: relative;\n                    flex: 1 1 0px;\n                    ${ao("margin-left",s)}\n                }\n                .yrw-grid-item:first-child {\n                    margin-left: 0;\n                }\n                .yrw-grid-row:before {\n                    content: "";\n                    position: absolute;\n                    display: block;\n                    left: 0;\n                    right: 0;\n                    top: calc(-${o} / 2);\n                    ${ao("border-top",r["border-vertical"])}\n                }\n                .yrw-grid-row:first-child:before {\n                    border-top: none;\n                }\n                .yrw-grid-item:before {\n                    content: "";\n                    position: absolute;\n                    display: block;\n                    top: 0;\n                    bottom: 0;\n                    left: calc(-${s} / 2);\n                    ${ao("border-left",r["border-horizontal"])}\n                }\n                .yrw-grid-item:first-child:before {\n                    border-left: none;\n                }\n            `)}
            </style>
            ${Ko({rows:e,cols:t,items:n,template:i,scope:this._scope,prefix:"yrw-"})}
        `}};Zo([rr({type:Number})],ts.prototype,"cols",void 0),Zo([rr({type:Number})],ts.prototype,"rows",void 0),Zo([rr({type:Array})],ts.prototype,"items",void 0),Zo([rr({type:Function})],ts.prototype,"template",void 0),Zo([rr({type:Object})],ts.prototype,"styleProps",void 0),ts=Zo([mr("ya-grid")],ts);const es=new WeakMap,ns=ci(t=>e=>{if(!(e instanceof $i))throw new Error("unsafeHTML can only be used in text bindings");if(es.get(e)===t&&Oi(t))return;const n=document.createElement("template");n.innerHTML=t,e.setValue(document.importNode(n.content,!0)),es.set(e,t)});function is(t){return t&&ns(t)}var rs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let os=class extends _o{constructor(){super(...arguments),this._visibleChilds=[]}render(){const t=this._itemWithDelimiter(),{styleProps:e}=this,n=this.delimiter||e.spacing?e.spacing:"6px";return Zr`
            <style>
                ${this._style(`\n                :host {\n                    display: block;\n                    ${ao("order",e.order)}\n                    ${fo(e)}\n                    ${uo(e)}\n                    ${ho(e)}\n                    ${co(e)}\n                }\n                :host(.yrw-hidden) {\n                    display: none;\n                }\n                .yrw-delimiter {\n                    ${ao("padding-left",n)}\n                    ${ao("padding-right",n)}\n                }\n                .yrw-delimiter__empty {\n                    padding-right: 0;\n                }\n            `)}
            </style>
            <div>${t}</div>
        `}updated(){this._toggleClass("yrw-hidden",this.hide||!this._visibleChilds.length)}_getDelimiter(){const{delimiter:t}=this,e=so("yrw-delimiter",{"yrw-delimiter__empty":!t});return Zr`
            <span class=${e}>${is(t)}</span>
        `}_itemWithDelimiter(){const t=[],e=this._getDelimiter();return this._getChilds().forEach(n=>{t.length&&t.push(e),t.push(n)}),t}_getChilds(){return this._childs||(this._childs=$o(this)),this._visibleChilds=Co(this._childs),this._visibleChilds}};function ss(t,e,n,i){const r=function(t,e,n,i){const r=(e-i)/(t-n),o=e-r*t;return function(t){return r*t+o}}(t,e,n,i);return function(t){const n=r(t);return o=n,s=e,a=i,Math.max(s,Math.min(o,a));var o,s,a}}rs([rr({type:Boolean})],os.prototype,"hide",void 0),rs([rr({type:Boolean})],os.prototype,"hovered",void 0),rs([rr({type:String})],os.prototype,"delimiter",void 0),rs([rr({type:Object})],os.prototype,"styleProps",void 0),os=rs([mr("ya-meta")],os);const as=(t,e,n)=>{let{x:i,y:r}=t;const o=(t,e)=>{return ss(.5,0,e-.5,1)(t*e)};return e>n?r=o(r,e/n):e<n&&(i=o(i,n/e)),{x:i,y:r}};function cs(t,e,n){if(!n)return{x:.5,y:.5};const i=n.x+n.w/2,r=n.y+n.h/2,o={x:i/t.w,y:r/t.h},s=e.w/e.h,a=t.w/t.h;return as(o,s,a)}function ls(t,e){if(!t||0===t.length)return;const n=t.map(t=>(function(t,e){const n=t.w/t.h,i=n<=e.w/e.h,r=i?e.w:e.h*n,o=i?e.w/n:e.h;return{area:Math.min(r,t.w)*Math.min(o,t.h),originArea:t.w*t.h,smartCenter:t}})(t,e));return n.reduce((t,e)=>((t,e)=>t.area>e.area||t.area===e.area&&t.originArea<e.originArea?t:e)(t,e),n[0]).smartCenter}const ds=50;var hs,us=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((i=i.apply(t,e||[])).next())})};!function(t){t[t.top=0]="top",t[t.bottom=1]="bottom",t[t.left=2]="left",t[t.right=3]="right"}(hs||(hs={}));const ps={width:0,height:0,url:""};function fs(t=[],{width:e,height:n}){const i=Math.max(window.devicePixelRatio||1,2),r=e*i,o=n*i;return t.reduce((t,i)=>{const s=Number((i.width/i.height).toFixed(2)),a=function(t,e,n,i=!0){return i?e=t/n:t=e*n,{width:t,height:e}}(r,o,s,s<=e/n),c=Math.min(a.width,i.width)*Math.min(a.height,i.height),l=i.width*i.height;return!t.img||c>t.area||c===t.area&&l<t.originArea?{img:i,area:c,originArea:l}:t},{img:null,area:0,originArea:0}).img||ps}function gs(t=[]){return(t.reduce((t,e)=>{const n=e.width*e.height;return!t.img||n<t.area?{img:e,area:n}:t},{img:null,area:0}).img||ps).url}function ms(t){return new Promise((e,n)=>{!function({src:t,crossOrigin:e="Anonymous",callback:n}){const i=new Image;i.crossOrigin=e,i.onload=()=>{try{const e=document.createElement("canvas"),r=e.getContext("2d");e.width=ds,e.height=ds,r.drawImage(i,0,0,ds,ds);const o=r.getImageData(0,0,ds,ds).data;n(o)}catch(t){n()}},i.src=t}({src:t,callback:t=>{const i=function(t){let e=0,n=0,i=0;if(!t)return null;for(let r=0;r<t.length;r+=4)e+=t[r],n+=t[r+1],i+=t[r+2];if(0!==t.length){const r=t.length/4;e=Math.floor(e/r),n=Math.floor(n/r),i=Math.floor(i/r)}return[e,n,i]}(t);i?e(i):n()}})})}var ys=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let vs=class extends _o{constructor(){super(...arguments),this.sources=[],this.styleProps={},this._actualWidth=0}render(){const{sources:t,styleProps:e}=this,n=gs(t);return Zr`
            <style>
                ${this._style(`\n                :host {\n                    display: block;\n                    position: relative;\n                    overflow: hidden;\n                    ${ao("width",e.width||"100%")}\n                    ${ao("max-height",e["max-height"]||"400px")}\n                }\n                .yrw-img {\n                    display: block;\n                    position: relative;\n                    width: 100%;\n                    padding-bottom: calc(${e.width||"100%"} * ${e.ratio||1/1.5});\n                }\n                .img-source {\n                    display: block;\n                    position: absolute;\n                    top: 0;\n                    left: 0;\n                    bottom: 0;\n                    right: 0;\n                    background-position: center center;\n                    background-repeat: no-repeat;\n                    background-origin: content-box;\n                    background-size: cover;\n                    background-image: url(${n});\n                    ${ao("max-height",e["max-height"]||"400px")}\n                }\n            `)}
            </style>
            <div class=${so("yrw-img",this._scope)}>
                <div class=${so("img-source",this._scope)}></div>
            </div>
        `}updated(){ko(()=>this.updateImageSize(),!0)}updateImageSize(){if(!this.sources.length)return;const t=parseFloat(xo(this,"width")),e=parseFloat(xo(this,"height"));if(isNaN(t))return;if(t===this._actualWidth)return;this._actualWidth=t;const n=fs(this.sources,{width:t,height:e});if(e){const i=ls(n.smartCenters,{width:t,height:e});if(i){const r=cs({width:n.width,height:n.height},{width:t,height:e},i);this.imageContainer.style.paddingBottom=`${e}px`,this.img.style.backgroundPosition=`${100*r.x}% ${100*r.y}%`}else this.imageContainer.style.paddingBottom=`calc(${this.styleProps.width||"100%"} * ${this.styleProps.ratio||1/1.5})`,this.img.style.backgroundPosition="center center"}this.img.style.backgroundImage=`url(${n.url})`}};ys([rr({type:Array})],vs.prototype,"sources",void 0),ys([rr({type:Object})],vs.prototype,"styleProps",void 0),ys([io(".img-source")],vs.prototype,"img",void 0),ys([io(".yrw-img")],vs.prototype,"imageContainer",void 0),vs=ys([mr("ya-styled-image")],vs);var bs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ws=class extends _o{render(){const{styleProps:t}=this;return this._toggleClass("yrw-hidden",this.hide),Zr`
            <style>
                ${this._style(`\n                :host {\n                    display: inline-block;\n                    ${fo(t)}\n                    ${uo(t)}\n                    ${ho(t)}\n                    ${co(t)}\n                }\n                :host(.yrw-hidden) {\n                    display: none;\n                }\n            `)}
            </style>
            <slot></slot>
        `}shouldUpdate(t){return!!super.shouldUpdate(t)&&(!t.has("hide")||(this._toggleClass("yrw-hidden",this.hide),1!==t.size))}};bs([rr({type:Boolean})],ws.prototype,"hide",void 0),bs([rr({type:Object})],ws.prototype,"styleProps",void 0),ws=bs([mr("ya-styled-text")],ws);let xs=class extends ar{render(){return Zr`
            <style>
                :host {
                    position: absolute;
                    font-family: Verdana, Geneva, Tahoma, sans-serif;
                    font-size: 11px;
                    color: #ffffff;
                    top: 5px;
                    left: 5px;
                    padding: 2px 3px 3px 5px;
                    border-radius: 2px;
                    background: rgba(0, 0, 0, 0.3);
                    z-index: 910;
                }
            </style>
            <slot></slot>
        `}};xs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-ad-age")],xs);var ks=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let _s=class extends ar{constructor(){super(),this.addEventListener("mouseenter",()=>{this._startDrag()}),this.addEventListener("mouseleave",()=>{this._endDrag()}),this.addEventListener("mousemove",t=>{this._onDrag(t.offsetX)}),this.addEventListener("touchstart",()=>{this._startDrag()}),this.addEventListener("touchend",()=>{this._endDrag()}),this.addEventListener("touchcancel",()=>{this._endDrag()}),this.addEventListener("touchmove",t=>{if(t.target&&t.touches.length){const e=Object(Ue.getBoundingClientRect)(t.target);this._onDrag(t.touches[0].pageX-e.left,!0)}})}get styles(){return Gr`
            :host {
                position: absolute;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 11px;
                color: #ffffff;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                overflow: hidden;
                z-index: 910;
            }
            .yrw-warning-container {
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: block;
                background: rgba(0, 0, 0, 0.3);
            }
            .yrw-warning-wrapper {
                display: block;
                padding: 5px 7px;
                -webkit-mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
                mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 1) 0%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
            }
            .yrw-warning-text {
                display: block;
                min-height: 14px;
                line-height: 1.3;
                white-space: nowrap;
                text-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
                margin-left: 0px;
            }
            :host(.yrw-hovered) .yrw-warning-text {
                transition: margin 0.5s linear 0s;
            }
            :host(.yrw-hovered) .yrw-warning-wrapper {
                -webkit-mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0) 2%,
                    rgba(0, 0, 0, 1) 3%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
                mask-image: linear-gradient(
                    to right,
                    rgba(0, 0, 0, 0) 2%,
                    rgba(0, 0, 0, 1) 3%,
                    rgba(0, 0, 0, 1) 95%,
                    rgba(0, 0, 0, 0) 98%
                );
            }
        `}render(){return Zr`
            <style>
                ${this.styles}
            </style>
            <div class="yrw-warning-container">
                <div class="yrw-warning-wrapper">
                    <div class="yrw-warning-text">
                        <span class="yrw-warning-content">
                            <slot></slot>
                        </span>
                    </div>
                </div>
            </div>
        `}_startDrag(){this._diff=this.warningContainer.offsetWidth-this.clientWidth+34,this._diff<=10||Qr(this,"yrw-hovered")}_endDrag(){Xr(this,"yrw-hovered"),this._setTextOffset(0)}_onDrag(t,e=!1){if(this._diff<=10)return;const n=this.clientWidth-40;let i=t-20;i<0?i=0:i>n&&(i=n),e&&(i=n-i);const r=-i*(this._diff/n)+10;this._setTextOffset(r)}_setTextOffset(t){Jr(this.warningText,{"margin-left":`${t}px`})}};function Os(t){return t.age?Zr`
              <ya-ad-age>${ns(t.age)}</ya-ad-age>
          `:void 0}function Ss(t){return t.warning?Zr`
              <ya-ad-warning>${ns(t.warning)}</ya-ad-warning>
          `:void 0}function Cs(t){return t&&Zr`
            <div class="yrw-body_warning unit-warning">${t}</div>
        `}function $s(t,e,n){return new Lr({element:t,onVisibilityChange:n,preventStop:Object(y.a)(n),confirmations:[{onConfirm:e}]})}ks([io(".yrw-warning-content")],_s.prototype,"warningContainer",void 0),ks([io(".yrw-warning-text")],_s.prototype,"warningText",void 0),_s=ks([mr("ya-ad-warning")],_s);var Es=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ps=class extends _o{constructor(){super(),this._menuClosed=!0,this.addEventListener("click",t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("clicked")),this._changeClickLink(new CustomEvent("clicked"))}),this.addEventListener("mouseenter",()=>{this.dispatchEvent(new CustomEvent("hovered"))}),this.addEventListener("mouseleave",()=>{this.dispatchEvent(new CustomEvent("leaved"))}),this.addEventListener("contextmenu",()=>{this._changeClickLink(new CustomEvent("contextmenu"))}),window.addEventListener("click",()=>this._changeClickLink(new CustomEvent("clicked")))}render(){const{imagePosition:t,unit:e,styleProps:n}=this,i=Bo(n),r=function(t=""){switch(t.toLowerCase()){case"left":return hs.left;case"right":return hs.right;case"bottom":return hs.bottom;default:return hs.top}}(t),o=so("yrw-unit",this._scope,{"yrw-unit__row":r===hs.left,"yrw-unit__row_right":r===hs.right,"yrw-unit__column":r===hs.top,"yrw-unit__column_bottom":r===hs.bottom}),{age:s,imageWarning:a,bodyWarning:c}=function(t,e){const n=Os(t),i=Ss(t),r=void 0!==e&&[hs.left,hs.right].indexOf(e)>=0;return{age:n,warning:i,imageWarning:!r&&i||void 0,bodyWarning:r&&Cs(i)||void 0}}(e,r);return Zr`
            <style>
                ${this._style(`\n                :host {\n                    position: relative;\n                    display: flex;\n                    box-sizing: border-box;\n                    margin: 0 auto;\n                    overflow: hidden;\n                    transition: box-shadow 600ms ease 0s;\n                    ${po(n)}\n                    ${uo(n)}\n                    ${ho(n)}\n                    ${co(n)}\n                    ${ao("color",n.color)}\n                    ${ao("box-shadow",n["box-shadow"])}\n                }\n                :host::before {\n                    content: "";\n                    position: absolute;\n                    ${fo(n)}\n                    ${go(n)}\n                }\n                :host(:hover) {\n                    ${ao("box-shadow",i["box-shadow"])}\n                }\n                :host(:hover)::before {\n                    ${fo(i)}\n                    ${go(i)}\n                }\n                .yrw-unit {\n                    position: relative;\n                    display: flex;\n                    flex-direction: column;\n                    flex-wrap: nowrap;\n                    text-decoration: none;\n                    color: black;\n                    width: 100%;\n                    cursor: pointer;\n                }\n                .yrw-unit__column .yrw-image {\n                    ${ao("margin-bottom",n["image-spacing"])}\n                }\n                .yrw-unit__row {\n                    flex-direction: row;\n                }\n                .yrw-unit__row .yrw-image {\n                    ${ao("margin-right",n["image-spacing"])}\n                }\n                .yrw-unit__row_right {\n                    flex-direction: row-reverse;\n                }\n                .yrw-unit__row_right .yrw-image {\n                    ${ao("margin-left",n["image-spacing"])}\n                }\n                .yrw-unit__column_bottom {\n                    flex-direction: column-reverse;\n                }\n                .yrw-unit__column_bottom .yrw-image {\n                    ${ao("margin-top",n["image-spacing"])}\n                }\n                .yrw-image {\n                    position: relative;\n                    display: block;\n                    flex-grow: 0;\n                    flex-shrink: 0;\n                    overflow: hidden;\n                }\n                .yrw-body {\n                    position: relative;\n                    display: flex;\n                    flex-direction: column;\n                    width: 100%;\n                }\n                .yrw-body_warning {\n                    display: block;\n                    order: 9;\n                    margin-bottom: 30px;\n                }\n                .yrw-url {\n                    width: 100%;\n                    height: 100%;\n                    text-decoration: none;\n                }\n            `)}
            </style>
            <a href=${e.link} class=${so("yrw-url",this._scope)}>
                <div class=${o}>
                    <div class=${so("yrw-image",this._scope)}>
                        <slot name="image"></slot>
                        ${s} ${a}
                    </div>
                    <div class=${so("yrw-body",this._scope)}>
                        <slot name="title"></slot>
                        <slot name="desc"></slot>
                        <slot name="meta"></slot>
                        ${c}
                    </div>
                </div>
            </a>
        `}updated(){this.dispatchEvent(new CustomEvent("rendered")),this._initVisibilityChecker();const t=this.styleProps["background-color"];t&&t.indexOf("--unit-average-color")>=0&&this._getAvgColor()}_getAvgColor(){if(void 0===this._avgColor){const t=gs(this.unit.images);this._avgColor=ms(t).then(t=>`rgb(${t.join(",")})`)}this._applyAvgColor()}_applyAvgColor(){this._avgColor.then(t=>{oo&&this.style.setProperty("--unit-average-color",t)})}_initVisibilityChecker(){this._checker||(this._checker=$s(this,()=>{this.dispatchEvent(new CustomEvent("visible"))},t=>{this.dispatchEvent(new CustomEvent(t?"visibleNow":"hiddenNow"))}))}_changeClickLink(t){"clicked"!==t.type||this._menuClosed||(this._menuClosed=!0,this.urlEl.href=this.unit.link||""),"contextmenu"===t.type&&(this._menuClosed=!1,this.urlEl.href=this.unit.beacon||this.unit.link||"")}};function js(t,e,n){let i,r=0;const o=(...e)=>{t.call(n,...e)};return function(...t){const n=Date.now(),s=n-r;clearTimeout(i),s<e?i=window.setTimeout(o,e-s,...t):(r=n,o(...t))}}Es([rr({type:Object})],Ps.prototype,"unit",void 0),Es([rr({type:String})],Ps.prototype,"imagePosition",void 0),Es([rr({type:Object})],Ps.prototype,"styleProps",void 0),Es([io("a")],Ps.prototype,"urlEl",void 0),Ps=Es([mr("ya-unit")],Ps);const Rs=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMs])\1?|[Ll]|"[^"]*"|'[^']*'/g;function As(t,e){if(!t||isNaN(t))return;const n=e||"dd.mm.yyyy",i=t.getDate(),r=t.getMonth(),o=t.getFullYear(),s=t.getHours(),a=t.getMinutes(),c=t.getSeconds(),l=t.getMilliseconds(),d={d:String(i),dd:Ts(i),m:String(r+1),mm:Ts(r+1),yy:String(o).slice(2),yyyy:String(o),h:String(s%12||12),hh:Ts(s%12||12),H:String(s),HH:Ts(s),M:String(a),MM:Ts(a),s:String(c),ss:Ts(c),l:Ts(l,"000"),L:Ts(Math.round(l/10))};return n.replace(Rs,function(t){return t in d?d[t]:t.slice(1,t.length-1)})}function Ts(t,e="00"){return(e+t).slice(-e.length)}const Ns=/(\((max-width|min-width):(\d+)(px)?\))?(\d+)(x(\d+))?/;function Ms(t){const e=Is(function(t){const e=[];return t.replace(/\s+/g,"").toLowerCase().split(",").forEach(t=>{const n=t.match(Ns);if(n){const t=parseInt(n[5],10)||1,i=parseInt(n[7],10)||1,r=parseInt(n[3],10)||0,o=n[2];e.push({cols:i,rows:t,[o]:r})}}),e}(t));if(e.cols&&e.rows)return[e.cols,e.rows]}function Is(t){const e=document.body.clientWidth;return t.reduce((t,n)=>(!n["max-width"]||e<=n["max-width"])&&(!n["min-width"]||e>=n["min-width"])&&Ls(n)<=Ls(t)?n:t,{})}function Ls(t){return Math.abs(t["max-width"]||9007199254740991)-(t["min-width"]||0)}const Ds={};var Bs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Vs=class extends ar{constructor(){super(),this.cacheScopedProps=new WeakMap;const t=js(()=>this.requestUpdate(),200);window.addEventListener("resize",t)}render(){const{units:t}=this,{block:e,blockHeadline:n,blockLabel:i,blockGrid:r,adUnit:o,adImage:s,adTitle:a,adDesc:c,adMeta:l,adCategory:d,adDate:h,adDomain:u}=this.getProps();return Zr`
            <style>
                :host {
                    display: block;
                    width: 100%;
                    position: relative;
                    z-index: 1;
                }
            </style>
            <ya-block
                .labelPosition=${i.position}
                .labelSpacing=${i.spacing}
                .styleProps=${e}
            >
                <ya-clamped-text
                    slot="headline"
                    ?hide=${n.hidden}
                    .styleProps=${n}
                    >${is(n.text)}</ya-clamped-text
                >
                <ya-styled-text slot="label" ?hide=${i.hidden} .styleProps=${i}
                    >${is(i.text)||"Яндекс.Рекомендации"}</ya-styled-text
                >
                <ya-grid
                    .cols=${r.cols}
                    .rows=${r.rows}
                    .styleProps=${r}
                    .items=${t}
                    .template=${t=>Zr`
                        <ya-unit
                            @clicked=${this.eventFactory("click",t)}
                            @rendered=${this.eventFactory("render",t)}
                            @visible=${this.eventFactory("visible",t)}
                            @hovered=${this.eventFactory("hover",t)}
                            @leaved=${this.eventFactory("leave",t)}
                            @visibleNow=${this.eventFactory("visibleNow",t)}
                            @hiddenNow=${this.eventFactory("hiddenNow",t)}
                            .unit=${t}
                            .imagePosition=${o["image-position"]}
                            .styleProps=${o}
                        >
                            <ya-styled-image
                                slot="image"
                                .sources=${t.images}
                                .styleProps=${s}
                            ></ya-styled-image>
                            <ya-clamped-text
                                slot="title"
                                ?hovered=${this.hoveredUnit===t.id}
                                ?hide=${a.hidden}
                                .lineClamp=${a["line-clamp"]}
                                .maxLength=${a["max-length"]}
                                .styleProps=${a}
                                >${is(t.title)}</ya-clamped-text
                            >
                            <ya-clamped-text
                                slot="desc"
                                ?hovered=${this.hoveredUnit===t.id}
                                ?hide=${c.hidden}
                                .lineClamp=${c["line-clamp"]}
                                .maxLength=${c["max-length"]}
                                .styleProps=${c}
                                >${is(t.desc)}</ya-clamped-text
                            >
                            <ya-meta
                                slot="meta"
                                ?hovered=${this.hoveredUnit===t.id}
                                ?hide=${l.hidden}
                                .delimiter=${l.delimiter}
                                .styleProps=${l}
                            >
                                <ya-styled-text
                                    ?hide=${!t.ad&&(d.hidden||!t.category)}
                                    .styleProps=${d}
                                    >${is(t.category)}</ya-styled-text
                                >
                                <ya-styled-text
                                    ?hide=${h.hidden||!t.date}
                                    .styleProps=${h}
                                    >${As(t.date,h.format)}</ya-styled-text
                                >
                                <ya-styled-text
                                    ?hide=${u.hidden||!t.domain}
                                    .styleProps=${u}
                                    >${is(t.domain)}</ya-styled-text
                                >
                            </ya-meta>
                        </ya-unit>
                    `}
                ></ya-grid>
            </ya-block>
        `}getProps(){const t=function(t){const e=Is(t["media-query"]||[]);return e&&e.props||Ds}(this.props),e=this.cacheScopedProps.get(t);if(e)return e;const n=Do(Object.assign({},this.props,t));return this.cacheScopedProps.set(t,n),n}eventFactory(t,e){const n=this.props["ad-unit-link-inblank"];return()=>{"hover"===t&&(this.hoveredUnit=e.id,this.requestUpdate()),"leave"===t&&this.hoveredUnit===e.id&&(this.hoveredUnit=void 0,this.requestUpdate()),this.dispatchEvent(new CustomEvent("unitEvent",{detail:{unit:e,eventName:t,openInBlank:n}}))}}};Bs([rr({type:Array})],Vs.prototype,"units",void 0),Bs([rr({type:Object})],Vs.prototype,"props",void 0),Vs=Bs([mr("ya-grid-props")],Vs);let zs=class extends ar{constructor(){super(),this.addEventListener("click",t=>{t.preventDefault(),this.dispatchEvent(new CustomEvent("closeClicked"))})}get styles(){return Gr`
            :host {
                position: absolute;
                top: 0;
                right: 0;
                width: 20px;
                height: 20px;
                border-bottom-left-radius: 4px;
                background: rgba(0, 0, 0, 0.5);
                opacity: 0.5;
                box-sizing: border-box;
                z-index: 960;
            }
            :host(:hover) {
                opacity: 1;
            }
            :host(.transparent) {
                background: none;
            }
            .tip {
                display: none;
                position: absolute;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 10px;
                color: #ffffff;

                padding: 2px 5px 3px 3px;
                border-radius: 1px;
                background: rgba(0, 0, 0, 0.5);
                white-space: nowrap;
                right: 26px;
                top: 2px;
            }
            :host(:hover) .tip {
                display: block;
            }
            :host(.transparent) .tip {
                right: 24px;
                top: 0px;
            }
            .tip::before {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                bottom: 0;
                right: -6px;
                width: 6px;
            }
            .tip::after {
                content: '';
                position: absolute;
                display: block;
                top: 4px;
                right: -4px;
                width: 0;
                height: 0;
                overflow: hide;
                border-style: solid;
                border-width: 4px 0 4px 4px;
                border-color: transparent transparent transparent rgba(0, 0, 0, 0.5);
            }
            .cross {
                position: absolute;
                display: block;
                top: 5px;
                right: 5px;
                width: 10px;
                height: 10px;
                background-position: center center;
                background-repeat: no-repeat;
                background-origin: content-box;
                background-size: cover;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAAQBJREFUOBGtk0sKwkAQRIN7XbkQV3oH8YNHVFFxpefxAgriMfws3MZXcVqTMJlMwIaiM91dL5NMkiT/jDRN56jblIlnJGU+B3mRzygaJgC6OQ0SmZEgihOqhTFjEHl23yeRGUXBmPNDjOZg2pHCuzPqYUgMLBoSgjWGVMAugHQ6it+LteG6jEkHIIjFIeRpBZpDev1cfwKx9tPIzSf6tsbo7rayJwdPs2C2BSbd2SBb1VnrMeNhDE/RAyk2Bm8EwzhDBlnnIXZNP7wzB3mSFSsz+jJ9P4yG3olBlj5zueZgxX+TYg9d0aJsCK0dTAdwRO1slotOyFTVc7APpGqoaf0NMq/bjpp8tDkAAAAASUVORK5CYII=');
            }
            :host(.transparent) .cross {
                top: 3px;
                right: 3px;
                background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAABGdBTUEAALGPC/xhBQAAAZhJREFUOBGtlD9Lw0AYxnuBNlOrg5OTroIFQaziFIUkn0QnUcGPoaLipKsfIv80CB0ydxAEBx3c3JyStsTnOYyk7eVPwYPrvcnd87vnfXPXRuM/m+d5u2EYLs3LhG6TnTpBSJqmPuK3Vqu1ZxjGVx0gAb+6BnQbWrPZfCUEL9fjOH6s4yyDQLMohHjA5u+Cu1OcJMkTYXgc6Lq+X+QsD9E07dY0zSMyNP5QxLQQDtC7Rc6KIGRIRwzY6IwQhF30CWdlEGonQHyhgg2HwxUWljXJp8P1WZsBcWIK9oKCLpdBqFGCcrBnxGtyoRD3lmUdMFY1WWzVxHg8XqWTbA6OenSaPU+PSpDjOFsAyZoAdgdR6dckdAbkum4PYg8OFjDeIJ1Dnqsq2ATI9/1tACQEwmtAjrkbz1kV7A8UBMEO0nGh68DJlW3bJ4RkrQomQYSMRiMJgfASTk4zQH4sgwnWBOnw9rdx2C5wd87yYlXMrzd9NzXcsQ+k8ol+XgdCcP5uQveNf5BYbhhFUUe1c9U7Ouv3++2qdXPN/wDnQRX5Zj8RlQAAAABJRU5ErkJggg==');
            }
        `}render(){return Zr`
            <style>
                ${this.styles}
            </style>
            <i class="cross close"></i>
            <div class="tip close">Скрыть объявление</div>
        `}};zs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-ad-close")],zs);class Fs extends ar{constructor(){super(...arguments),this.unit={}}createRenderRoot(){return this}render(){return this.value?Zr`
            ${is(this.value.trim())}
        `:Zr``}}(function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);o>3&&s&&Object.defineProperty(e,n,s)})([rr({type:Object})],Fs.prototype,"unit",void 0);let Us=class extends Fs{get value(){return this.unit.age}};Us=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-age")],Us);var Ws=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Hs=class extends Fs{constructor(){super(...arguments),this.value=void 0}render(){return this.adOnly&&!this.unit.ad?(Qr(this,"yrw-hidden"),Zr``):Zr`
            ${this.unit.category}
        `}};Ws([rr({type:Boolean,attribute:"ad-only"})],Hs.prototype,"adOnly",void 0),Hs=Ws([mr("ya-unit-category")],Hs);var Ys=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};const qs=[{title:"Не интересуюсь",id:3,action:2},{title:"Уже купил",id:14,action:2},{title:"Спам",id:5,action:3}];let Gs=class extends ar{constructor(){super(),this.addEventListener("click",t=>{t.preventDefault()})}get styles(){return Gr`
            :host {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background: rgba(255, 255, 255, 0.98);
                font-size: 12px;
                z-index: 950;
                cursor: initial;
            }
            .yrw-options-wrapper {
                width: 100%;
                height: 100%;
                box-sizing: content-box;

                display: flex;
                flex-direction: column;
                justify-content: center;
            }
            .yrw-options,
            .yrw-selected {
                padding: 10px;
                text-align: center;
            }
            .yrw-selected {
                color: #000;
            }
            .yrw-options-title {
                color: #222222;
                padding-bottom: 15px;
                font-weight: bold;
            }
            .yrw-option {
                display: block;
                color: #555555;
                border: 1px solid #c8c8c8;
                border-radius: 4px;
                padding: 5px;
                margin-top: 5px;
                margin-bottom: 5px;
                cursor: pointer;
            }
            .yrw-option:hover {
                border-color: #333333;
                color: #333333;
            }
            .yrw-selected-icon,
            .yrw-selected-text {
                vertical-align: middle;
            }
            .yrw-hidden {
                display: none;
            }
        `}render(){return Zr`
            <style>
                ${this.styles}
            </style>
            <div class="yrw-options-wrapper">
                <div class="yrw-options">
                    <div class="yrw-options-title">Скрыть объявление:</div>
                    <div class="options">
                        ${qs.map(t=>Zr`
                                    <a
                                        class="yrw-option"
                                        @click=${this.eventFactory({reason:t.id,action:t.action})}
                                        >${t.title}</a
                                    >
                                `)}
                    </div>
                </div>
                <div class="yrw-selected yrw-hidden">
                    <div class="yrw-selected-title">
                        <svg class="yrw-selected-icon" width="18" height="18">
                            <path
                                d="M5.485 11.07L2.45 8.037 1.036 9.45l3.035 3.035-.034.036 1.414 1.415 8.485-8.485-1.414-1.414-7.035 7.035z"
                            ></path>
                        </svg>
                        <span class="yrw-selected-text">Спасибо, объявление скрыто.</span>
                    </div>
                </div>
            </div>
        `}eventFactory({reason:t,action:e}){return()=>{Qr(this.optoionsEl,"yrw-hidden"),Xr(this.selectedEl,"yrw-hidden"),this.dispatchEvent(new CustomEvent("closeOptionChoosed",{detail:{reason:t,action:e}}))}}};Ys([io(".yrw-options")],Gs.prototype,"optoionsEl",void 0),Ys([io(".yrw-selected")],Gs.prototype,"selectedEl",void 0),Gs=Ys([mr("ya-ad-close-options")],Gs);var Qs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Xs=class extends Fs{constructor(){super(...arguments),this.value=void 0,this.optionsShown=!1}get styles(){return Gr`
            .yrw-hidden {
                display: none;
            }
        `}render(){return this.unit.ad?Zr`
            <style>
                ${this.styles}
            </style>
            <ya-ad-close @closeClicked=${()=>this.closeClick()}></ya-ad-close>
            <ya-ad-close-options
                @closeOptionChoosed=${t=>this.optionSelected(t.detail)}
                class="yrw-hidden"
            ></ya-ad-close-options>
        `:Zr``}closeClick(){this.optionsShown=!this.optionsShown,this.optionsShown?Xr(this.optionsEl,"yrw-hidden"):Qr(this.optionsEl,"yrw-hidden")}optionSelected(t){Qr(this.closeEl,"yrw-hidden"),this.dispatchEvent(new CustomEvent("closed",{detail:t}))}};Qs([io("ya-ad-close")],Xs.prototype,"closeEl",void 0),Qs([io("ya-ad-close-options")],Xs.prototype,"optionsEl",void 0),Xs=Qs([mr("ya-unit-close")],Xs);var Js=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ks=class extends Fs{get value(){return As(this.unit.date,this.format)}};Js([rr({type:String})],Ks.prototype,"format",void 0),Ks=Js([mr("ya-unit-date")],Ks);let Zs=class extends Fs{get value(){return this.unit.desc}};function ta({price:t,decimalCount:e,decimal:n,thousands:i,prefix:r,suffix:o}){const s=new RegExp(`\\d(?=(\\d{3})+${e>0?"\\D":"$"})`,"g"),a=t.toFixed(e);return`${r}${(n?a.replace(".",n):a).replace(s,`$&${i}`)}${o}`}Zs=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-desc")],Zs);var ea=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let na=class extends Fs{constructor(){super(...arguments),this.decimalCount=2,this.decimal=".",this.thousands=" ",this.suffix=" руб",this.prefix=""}get value(){if(void 0!==this.unit.price&&void 0!==this.unit.oldPrice&&this.unit.price!==this.unit.oldPrice)return ta({price:Math.abs(this.unit.price-this.unit.oldPrice),decimalCount:this.decimalCount,decimal:this.decimal,thousands:this.thousands,prefix:this.prefix,suffix:this.suffix})}};ea([rr({type:Number,attribute:"decimal-count"})],na.prototype,"decimalCount",void 0),ea([rr({type:String})],na.prototype,"decimal",void 0),ea([rr({type:String})],na.prototype,"thousands",void 0),ea([rr({type:String})],na.prototype,"suffix",void 0),ea([rr({type:String})],na.prototype,"prefix",void 0),na=ea([mr("ya-unit-discount")],na);let ia=class extends Fs{get value(){return this.unit.domain}};ia=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-domain")],ia);var ra=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let oa=class extends ar{constructor(){super(...arguments),this.sources=[],this.ratio=1/1.5,this._actualWidth=0}get styles(){return Gr`
            :host {
                display: block;
                position: relative;
                overflow: hidden;
                width: 100%;
            }
            .yrw-img {
                display: block;
                position: relative;
                width: 100%;
            }
            .img-source {
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                background-position: center center;
                background-repeat: no-repeat;
                background-origin: content-box;
                background-size: cover;
            }
        `}render(){return Qr(this,"unit-image"),Zr`
            <style>
                ${this.styles}
            </style>
            <div class="yrw-img" style="padding-bottom: ${this.getPaddingBottom()}">
                <div
                    class="img-source"
                    style="background-image: ${this.getBackgroundImage()};"
                ></div>
            </div>
        `}updated(){ko(()=>this.updateImageSize(),!0)}updateImageSize(){if(!this.sources.length)return;const t=parseFloat(xo(this,"width")),e=parseFloat(xo(this,"height"));if(isNaN(t))return;if(t===this._actualWidth)return;this._actualWidth=t;const n=fs(this.sources,{width:t,height:e});if(e){const i=ls(n.smartCenters,{w:t,h:e});if(i){const r=cs({w:n.width,h:n.height},{w:t,h:e},i);Jr(this.imageContainer,{"padding-bottom":`${e}px`}),Jr(this.img,{"background-position":`${100*r.x}% ${100*r.y}%`})}}Jr(this.img,{"background-image":this.getBackgroundImage(n.url)})}getPaddingBottom(){return`${100*(this.ratio||1/1.5)}%`}getBackgroundImage(t=this.getDefaultSrc()){return`url(${t})`}getDefaultSrc(){return gs(this.sources)}};ra([rr({type:Array})],oa.prototype,"sources",void 0),ra([rr({type:Number})],oa.prototype,"ratio",void 0),ra([io(".img-source")],oa.prototype,"img",void 0),ra([io(".yrw-img")],oa.prototype,"imageContainer",void 0),oa=ra([mr("ya-image")],oa);var sa=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let aa=class extends Fs{constructor(){super(...arguments),this.skipAge=!1,this.skipWarning=!1,this.value=void 0,this._showDisclaimer=!0}set showDisclaimer(t){t!==this._showDisclaimer&&(this._showDisclaimer=t,this.requestUpdate())}getImageSource(t,e){return t.images&&t.images.length?t.images:e?[{width:0,height:0,url:e}]:[]}render(){if(Qr(this,"yrw-ya-unit-image"),!this.unit.images)return Zr``;const t=this._showDisclaimer&&!this.skipAge?Os(this.unit):void 0,e=this._showDisclaimer&&!this.skipWarning?Ss(this.unit):void 0,n=this.getImageSource(this.unit,this.src);return Zr`
            <ya-image .sources=${n} .ratio=${this.ratio}></ya-image>
            ${t} ${e}
        `}};sa([rr({type:Number})],aa.prototype,"ratio",void 0),sa([rr({type:String})],aa.prototype,"src",void 0),sa([rr({type:Boolean,attribute:!1})],aa.prototype,"skipAge",void 0),sa([rr({type:Boolean,attribute:!1})],aa.prototype,"skipWarning",void 0),aa=sa([mr("ya-unit-image")],aa);var ca=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let la=class extends Fs{constructor(){super(...arguments),this.decimalCount=2,this.decimal=".",this.thousands=" ",this.suffix="",this.prefix=""}get value(){if(void 0!==this.unit.oldPrice)return ta({price:this.unit.oldPrice,decimalCount:this.decimalCount,decimal:this.decimal,thousands:this.thousands,prefix:this.prefix,suffix:this.suffix})}};ca([rr({type:Number,attribute:"decimal-count"})],la.prototype,"decimalCount",void 0),ca([rr({type:String})],la.prototype,"decimal",void 0),ca([rr({type:String})],la.prototype,"thousands",void 0),ca([rr({type:String})],la.prototype,"suffix",void 0),ca([rr({type:String})],la.prototype,"prefix",void 0),la=ca([mr("ya-unit-old-price")],la);var da=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ha=class extends Fs{constructor(){super(...arguments),this.decimalCount=2,this.decimal=".",this.thousands=" ",this.suffix="",this.prefix=""}get value(){if(void 0!==this.unit.price)return ta({price:this.unit.price,decimalCount:this.decimalCount,decimal:this.decimal,thousands:this.thousands,prefix:this.prefix,suffix:this.suffix})}};da([rr({type:Number,attribute:"decimal-count"})],ha.prototype,"decimalCount",void 0),da([rr({type:String})],ha.prototype,"decimal",void 0),da([rr({type:String})],ha.prototype,"thousands",void 0),da([rr({type:String})],ha.prototype,"suffix",void 0),da([rr({type:String})],ha.prototype,"prefix",void 0),ha=da([mr("ya-unit-price")],ha);let ua=class extends Fs{get value(){return this.unit.title}};ua=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-title")],ua);let pa=class extends Fs{get value(){return this.unit.warning}};pa=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s}([mr("ya-unit-warning")],pa);var fa=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ga=class extends ar{constructor(){super(),this.checked=!1;const t=(t,e)=>{t&&this.dispatchEvent(new CustomEvent("unitClass",{detail:{classes:t,action:e},bubbles:!0}))};this.addEventListener("click",e=>{e.preventDefault(),this.checked=!this.checked,t(this.clickClass,this.checked?"add":"remove")}),this.addEventListener("mouseenter",e=>{e.preventDefault(),t(this.hoverClass,"add")}),this.addEventListener("mouseleave",e=>{e.preventDefault(),t(this.hoverClass,"remove")})}render(){return Zr`
            <slot></slot>
        `}};fa([rr({type:String,attribute:"click-class"})],ga.prototype,"clickClass",void 0),fa([rr({type:String,attribute:"hover-class"})],ga.prototype,"hoverClass",void 0),ga=fa([mr("ya-button")],ga);var ma=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ya=class extends ar{constructor(){super(...arguments),this.fullText=""}get styles(){return Gr`
            :host {
                position: relative;
                display: block;
            }
            .yrw-hidden {
                display: none;
            }
            .yrw-content {
                text-decoration: inherit;
            }
        `}render(){return Zr`
            <style>
                ${this.styles}
            </style>
            <span class="yrw-content"></span>
            <div class="yrw-hidden"><slot @slotchange=${this.onSlotChange}></slot></div>
        `}updated(){setTimeout(()=>this.onSlotChange(),0)}onSlotChange(){const t=this.textSlot.assignedNodes().map(t=>Eo(t)).join("");this.fullText!==t&&(this.fullText=t,this.applyText(t))}applyText(t){Ao(this,this.lines,".yrw-content",t.trim())}};ma([rr({type:Number})],ya.prototype,"lines",void 0),ma([io("slot")],ya.prototype,"textSlot",void 0),ya=ma([mr("ya-clamp")],ya);var va=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ba=class extends ar{get styles(){return Gr`
            :host {
                display: block;
                text-align: right;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 12px;
                color: #999999;
                padding-top: 10px;
            }
        `}render(){Qr(this,"recommendation-label");const t=this.text||"Яндекс.Рекомендации";return Zr`
            <style>
                ${this.styles}
            </style>
            ${t}
        `}};va([rr({type:String})],ba.prototype,"text",void 0),ba=va([mr("ya-recommendation-label")],ba);const wa=new WeakMap,xa=["ya-unit-title","ya-unit-desc","ya-unit-image","ya-unit-category","ya-unit-date","ya-unit-domain","ya-unit-price","ya-unit-old-price","ya-unit-discount","ya-unit-close","ya-unit-age","ya-unit-warning"].join(", "),ka=ci((t,e)=>n=>{if(!(n instanceof $i))throw new Error("repeat can only be used in text bindings");if(wa.get(n)===t&&Oi(t))return;const i=document.createElement("template");i.innerHTML=t;const r=document.importNode(i.content,!0);e(r),n.setValue(r),wa.set(n,t)}),_a=ci((t,e,n)=>{let i=(t=>t.replace(/<(ya-[\w-]*)([^>]*)(\/>)/gm,"<$1$2></$1>"))(t);return ka(i,t=>{const i={index:void 0,used:[]};no(t,"*").forEach(t=>Qr(t,"ya-grid-template"));const r=no(t,"ya-unit-close");r.forEach(t=>{t.parentNode.removeChild(t)}),no(t,"ya-units-grid").forEach((o,s)=>{const a=o.innerHTML,c=r.length?r[0].outerHTML:null,l=0!==no(t,"ya-unit-age").length,d=0!==no(t,"ya-unit-warning").length;Sa(o,"items",e),Sa(o,"template",n({unitTemplate:a,closeTemplate:c,customAge:l,customWarning:d})),Sa(o,"config",Object.assign({},i,{index:s}))})})}),Oa=ci((t,e,n)=>ka(t,t=>{no(t,"ya-unit-image").forEach(t=>{Sa(t,"skipAge",n.customAge),Sa(t,"skipWarning",n.customWarning)}),no(t,xa).forEach(t=>{Sa(t,"unit",e)})}));function Sa(t,e,n){const i=new Pi(t,e,["",""]);i.parts[0].setValue(n),i.commit()}var Ca=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},$a=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((i=i.apply(t,e||[])).next())})};let Ea=class extends ar{constructor(){super(...arguments),this.showDisclaimer=!1}createRenderRoot(){return this}render(){Qr(this,"unit-container");const t=this.showDisclaimer&&!this.meta.customAge?Os(this.unit):void 0,e=this.showDisclaimer&&!this.meta.customWarning?Cs(Ss(this.unit)):void 0;return Zr`
            ${Oa(this.template,this.unit,this.meta)} ${t} ${e}
        `}updated(){return $a(this,void 0,void 0,function*(){if(!(this.showDisclaimer||this.meta.customAge&&this.meta.customWarning))if(yield this.updateComplete,this.imgEl){parseFloat(xo(this.imgEl,"width"))<=160&&(this.showDisclaimer=!0,this.imgEl.showDisclaimer=!1,this.requestUpdate())}else this.showDisclaimer=!0,this.requestUpdate()})}};Ca([rr({type:Object})],Ea.prototype,"unit",void 0),Ca([rr({type:String})],Ea.prototype,"template",void 0),Ca([rr({type:Object})],Ea.prototype,"meta",void 0),Ca([io("ya-unit-image")],Ea.prototype,"imgEl",void 0),Ea=Ca([mr("ya-unit-item")],Ea);var Pa=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let ja=class extends ar{constructor(){super(...arguments),this.cols=1,this.rows=1,this.sizes="",this.openInBlank=!1,this.items=[]}createRenderRoot(){return this}render(){const{items:t,template:e,config:n}=this;if(!e)return Zr``;const[i,r]=this.sizes&&Ms(this.sizes)||[this.cols,this.rows];let o=0;n&&(n.used[n.index]=i*r,o=Cn(d(n.used),(t,e)=>t+(e<n.index?n.used[e]:0),0));const s=t.slice(o),a=e({openInBlank:this.openInBlank});return Zr`
            ${Ko({rows:r,cols:i,items:s,template:a,scope:"ya-grid-template"})}
        `}};Pa([rr({type:Number})],ja.prototype,"cols",void 0),Pa([rr({type:Number})],ja.prototype,"rows",void 0),Pa([rr({type:String})],ja.prototype,"sizes",void 0),Pa([rr({type:Boolean,attribute:"target-blank"})],ja.prototype,"openInBlank",void 0),Pa([rr({type:Array})],ja.prototype,"items",void 0),Pa([rr({type:Object})],ja.prototype,"config",void 0),Pa([rr({type:Function})],ja.prototype,"template",void 0),ja=Pa([mr("ya-units-grid")],ja);var Ra=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s},Aa=function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{c(i.next(t))}catch(e){o(e)}}function a(t){try{c(i.throw(t))}catch(e){o(e)}}function c(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}c((i=i.apply(t,e||[])).next())})};let Ta=class extends ar{constructor(){super(),this.avgColorApplied=!1,this.contextMenuOpen=!1,this.addEventListener("click",t=>{t.defaultPrevented||(t.preventDefault(),this.dispatchEvent(new CustomEvent("clicked")),this.changeClickLink(new CustomEvent("clicked")))}),this.addEventListener("mouseenter",()=>{this.dispatchEvent(new CustomEvent("hovered"))}),this.addEventListener("mouseleave",()=>{this.dispatchEvent(new CustomEvent("leaved"))}),this.addEventListener("contextmenu",()=>{this.changeClickLink(new CustomEvent("contextmenu"))}),window.addEventListener("click",()=>this.changeClickLink(new CustomEvent("clicked")))}get styles(){return Gr`
            .yrw-body_warning {
                display: block;
                margin-bottom: 30px;
            }
            .yrw-url {
                text-decoration: none;
                height: inherit;
            }
        `}render(){return Qr(this,"unit-wrapper"),Qr(this,"ya-grid-template"),this.unit.age&&Qr(this,"unit-with-age"),this.unit.warning&&Qr(this,"unit-with-warning"),this.unit.images&&this.unit.images.length||Qr(this,"unit-without-image"),Zr`
            <style>
                ${this.styles}
            </style>
            <a href=${this.unit.link} class="yrw-url">
                <slot @unitClass=${this.updateClasses}></slot>
            </a>
            ${this.close&&Zr`
                    <ya-unit-close
                        .unit=${this.unit}
                        @closed=${t=>this.onClose(t.detail)}
                    ></ya-unit-close>
                `}
        `}updated(){this.dispatchEvent(new CustomEvent("rendered")),this.initVisibilityChecker(),this.applyAvgColor()}updateClasses({detail:{classes:t,action:e}}){"add"===e?Qr(this,t):Xr(this,t)}initVisibilityChecker(){this.visibilityChecker||(this.visibilityChecker=$s(this,()=>{this.dispatchEvent(new CustomEvent("visible"))},t=>{this.dispatchEvent(new CustomEvent(t?"visibleNow":"hiddenNow"))}))}applyAvgColor(){return Aa(this,void 0,void 0,function*(){if(!this.unit.images||this.avgColorApplied)return;const t=yield function({images:t}){return us(this,void 0,void 0,function*(){const e=gs(t);if(e)try{return ms(e)}catch(n){return}})}(this.unit);if(!t)return;const e=t.join(",");oo&&Jr(this,{"--unit-average-color":`rgb(${e})`,"--unit-average-color-rgb":e});const n=function(t,e=127){return function([t,e,n]){return(299*t+587*e+114*n)/1e3}(t)>e}(t);Qr(this,n?"unit-image-light":"unit-image-dark"),this.avgColorApplied=!0})}changeClickLink(t){"clicked"===t.type&&this.contextMenuOpen&&(this.contextMenuOpen=!1,this.urlEl.href=this.unit.link||this.unit.beacon||""),"contextmenu"===t.type&&(this.contextMenuOpen=!0,this.urlEl.href=this.unit.beacon||this.unit.link||"")}onClose(t){this.dispatchEvent(new CustomEvent("closed",{detail:t}))}};Ra([rr({type:Object})],Ta.prototype,"unit",void 0),Ra([rr({type:Object})],Ta.prototype,"close",void 0),Ra([io("a")],Ta.prototype,"urlEl",void 0),Ta=Ra([mr("ya-unit-wrapper")],Ta);var Na=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ma=class extends ar{constructor(){super();const t=js(()=>this.grid.requestUpdate(),200);window.addEventListener("resize",t)}render(){const{units:t,template:e,css:n}=this;return Zr`
            <style>
                ${this.styles}
                ${Gr`
                    ${n}
                `}
            </style>
            ${_a(e,t,({unitTemplate:t,closeTemplate:e,customAge:n,customWarning:i})=>({openInBlank:r=!1})=>o=>{const s={customAge:n,customWarning:i};return Zr`
                <ya-unit-wrapper
                    @clicked=${this.eventFactory("click",o,r)}
                    @rendered=${this.eventFactory("render",o)}
                    @visible=${this.eventFactory("visible",o)}
                    @hovered=${this.eventFactory("hover",o)}
                    @leaved=${this.eventFactory("leave",o)}
                    @visibleNow=${this.eventFactory("visibleNow",o)}
                    @hiddenNow=${this.eventFactory("hiddenNow",o)}
                    @closed=${this.eventFactory("close",o)}
                    .unit=${o}
                    .close=${e}
                >
                    <ya-unit-item .unit=${o} .template=${t} .meta=${s} />
                </ya-unit-wrapper>
            `})}
        `}eventFactory(t,e,n=!1){return i=>{this.dispatchEvent(new CustomEvent("unitEvent",{detail:{unit:e,eventName:t,openInBlank:n,orig:i.detail}}))}}get styles(){return Gr`
            :host {
                display: block;
                width: 100%;
                position: relative;
                z-index: 1;
                font-family: 'Open Sans', Arial, sans-serif;
            }

            /* unit */
            .unit-wrapper {
                position: relative;
                display: flex;
                flex-direction: column;
                flex-wrap: nowrap;
                box-sizing: border-box;
                margin: 0 auto;
                overflow: hidden;
                width: 100%;
                cursor: pointer;
            }

            /* grid */
            .grid {
                display: flex;
                flex-direction: column;
                flex-wrap: wrap;
                justify-content: flex-start;
                align-items: stretch;
                align-content: flex-start;
                width: 100%;
                box-sizing: border-box;
            }
            .grid-row {
                position: relative;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: stretch;
                align-content: flex-start;
                width: 100%;
            }
            .grid-row:first-child {
                margin-top: 0;
            }
            .grid-item {
                position: relative;
                flex: 1 1 0px;
            }
            .grid-item:first-child {
                margin-left: 0;
            }
            .yrw-ya-unit-image {
                position: relative;
                display: block;
            }
            .yrw-hidden {
                display: none;
            }
        `}};function Ia(t){const e=Object.values;if("function"==typeof e)return e(t);{const e=[];for(const n in t)l(t,n)&&e.push(t[n]);return e}}function La(t,e){Object(Se.isString)(t)?Da(Ba(t,e)):t&&t.length&&t.forEach(t=>Da(Ba(t,e)))}function Da(t){if(!t)return;return Mt({method:"GET",url:Ee(t),headers:{},withCredentials:!0})}function Ba(t,e){return t&&e?Ee(Ot(function(t){return t}(t),e)):t}Na([rr({type:Array})],Ma.prototype,"units",void 0),Na([rr({type:String})],Ma.prototype,"template",void 0),Na([rr({type:String})],Ma.prototype,"css",void 0),Na([io("ya-units-grid")],Ma.prototype,"grid",void 0),Ma=Na([mr("ya-grid-template")],Ma);const Va=void 0!==window.YandexMultifeedAPI,za=void 0!==window.YandexApplicationsAPIBackend,Fa=Va||za;function Ua(t){null!==window.open(t,"_blank")||Fa||Wa(t)}function Wa(t){window.location.href=t}var Ha=function(t,e,n,i){var r,o=arguments.length,s=o<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(s=(o<3?r(s):o>3?r(e,n,s):r(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let Ya=class extends ar{constructor(t,e,n,i,r,o){super(),this.isRefreshEnabled=r,this.isRefreshExp=o,this.rendered=!1,this._cb=[],this.disconnected=!1,this.unitsState={adsWasVisible:!1,wasVisible:{},wasRendered:{},visible:{}},this.counters={visible:0,click:0},this.getState=()=>Object.assign({},this.unitsState,{isVisibleNow:wn(Ia(this.unitsState.visible),t=>t),adsCount:this.units.reduce((t,e)=>t+Number(e.ad),0),disconnected:this.disconnected,isWidget:!0}),this.props=this.props||e||{},this.units=this.units||t||[],this.template=this.template||n||"",this.css=this.css||i||""}on(t,e){this._cb.push({event:t,callback:e})}createRenderRoot(){return this.attachShadow({mode:"closed"})}disconnectedCallback(){this.disconnected=!0}render(){const{units:t,props:e,template:n,css:i}=this,r=d(e).length>0;return Zr`
            <style>
                :host {
                    display: block;
                    width: 100%;

                    color: initial;
                    font-family: initial;
                    font-size: initial;
                    font-weight: initial;
                    font-style: initial;
                    line-height: initial;
                    letter-spacing: initial;
                    text-align: initial;
                    text-decoration: initial;
                }
            </style>
            ${t.length?r?Zr`
                      <ya-grid-props
                          .units=${t}
                          .props=${e}
                          @unitEvent=${this.onEvent}
                      ></ya-grid-props>
                  `:Zr`
                      <ya-grid-template
                          .units=${t}
                          .template=${n}
                          .css=${i}
                          @unitEvent=${this.onEvent}
                      ></ya-grid-template>
                  `:Zr``}
        `}_emit(t){this._cb.forEach(e=>{e.event===t&&e.callback()})}onUnitClick(t,e=!1){this.isRefreshExp&&le({name:"refresh_exp_clicked",data:{is_ad:Boolean(t.ad),is_refresh_enabled:this.isRefreshEnabled}}),t.ad||La(t.beacon,{"event-counter":String(++this.counters.click)}),t.link&&(t.ad?Ua(t.link):(this._emit("click"),e?Ua(t.link):Wa(t.link)))}onUnitRender(t){this.rendered||(this.rendered=!0,this._emit("render")),this.unitsState.wasRendered[t.id]||(this.unitsState.wasRendered[t.id]=!0,this.isRefreshExp&&le({name:"refresh_exp_rendered",data:{is_ad:Boolean(t.ad),is_refresh_enabled:this.isRefreshEnabled}}),La(t.rendertracker))}onUnitVisible(t){this.unitsState.wasVisible[t.id]||(t.ad&&!this.unitsState.adsWasVisible&&(La(t.adsImptrackers),this.unitsState.adsWasVisible=!0),La(t.imptrackers,t.ad?void 0:{"event-counter":String(++this.counters.visible)}),this.unitsState.wasVisible[t.id]=!0)}onUnitClose(t,{reason:e,action:n}){if(!t.abuseUrl)return;La(Ot(t.abuseUrl,{"reason-id":String(e),"action-id":String(n)}))}onEvent({detail:{unit:t,eventName:e,openInBlank:n,orig:i}}){switch(e){case"render":return this.onUnitRender(t);case"hover":case"visible":return this.onUnitVisible(t);case"click":return this.onUnitClick(t,n);case"visibleNow":return void(this.unitsState.visible[t.id]=!0);case"hiddenNow":return void(this.unitsState.visible[t.id]=!1);case"close":return this.onUnitClose(t,i)}}};Ha([rr({type:Array})],Ya.prototype,"units",void 0),Ha([rr({type:Object})],Ya.prototype,"props",void 0),Ha([rr({type:String})],Ya.prototype,"template",void 0),Ha([rr({type:String})],Ya.prototype,"css",void 0),Ya=Ha([mr("ya-recommendation-widget")],Ya);const qa=5e3;const Ga=new class{constructor(){this.mediaBlocks={}}render(t,e,n,i){const{id:r,render:o,statId:s,nonce:a}=t;return this.clearBlock(t.render),e.rtb?(t.media=e,this.renderMedia({block:{id:r,render:o,statId:s},settings:n,meta:t.media,nonce:a,additional:i})):(t.meta=e,this.renderWidget({block:{id:r,render:o,statId:s},settings:n,meta:t.meta,additional:i}))}renderMedia({block:t,meta:e,nonce:n}){return new Promise((i,r)=>{const o=t.render,s=document.querySelector(o);if(!s)return void r(new a({message:`Can not find element with selector "${o}"`,code:"containerNotFound"}));s.innerHTML="";const c=new qr(e,s,t.id,n);this.mediaBlocks[o]=c,c.render(),i(()=>c.getState())})}renderWidget({block:t,settings:e,meta:n,additional:i={}}){return new Promise((r,o)=>{const s=document.querySelector(t.render);if(!s)return void o(new a({message:`Can not find element with selector "${t.render}"`,code:"containerNotFound"}));let{testtag:c}=i;const{isRefreshEnabled:l,isRefreshExp:h}=i;c||(c=new be({emptyLoaderTesttag:!0})),c.setProps({format:Re(e,t.id)});const u=Pe(n,c,t.statId),p=function(t){return t?t.session_label:void 0}(n),f=function(t,e){const n=je(t,e),{props:i={}}=n||{};return d(i).length?i:void 0}(e,t.id),[g="",m=""]=function(t,e){const n=je(t,e);return n.template&&n.css?[n.template,n.css]:void 0}(e,t.id)||[];if(!u.length)throw new a({message:"Meta has no items",code:"noItemsForWidget"});if(!(f||g&&m))throw new a({message:"Props and template are empty",code:"wrongWidgetSettings"});try{const t=_e(m),e=new Ya(u,f,g,t,l,h),n=()=>{Ae(p,"render"),r(e.getState)},i=()=>{le({name:"waitForRender",data:{timeout:qa.toString()}})},{promise:a,stop:c}=de(qa);a.then(n).catch(i),e.on("render",c),e.on("click",()=>Ae(p,"click")),s.innerHTML="",s.appendChild(e)}catch(y){ce(y,"renderFail"),o("widgetRenderFail")}})}clearBlock(t){this.mediaBlocks[t]&&this.mediaBlocks[t].destroy()}};window.yaads||(ce(new Error('"window.yaads" does not exists'),"attachRenderMethod"),window.yaads=[]),window.yaads&&window.yaads.renderWidget&&ce(new Error('"window.yaads" already has "renderWidget"'),"attachRenderMethod"),window.yaads.renderWidget=t=>Ga.renderWidget(t),window.yaads.render=(t,e,n,i)=>Ga.render(t,e,n,i)},function(t,e,n){"use strict";n.r(e);var i=n(6);const r=(t=window)=>t.navigator.userAgent.indexOf("UCBrowser")>-1;function o(t=window){const e=t.navigator.userAgent.toLowerCase();return/ipad|iphone|ipod/.test(e)&&!t.MSStream&&!r(t)}const s=(t=window)=>/Windows Phone/i.test(t.navigator.userAgent);function a(t=window){const{userAgent:e=""}=t.navigator,n=/Android/.test(e),i=s(t),r=/com\.yandex\.mobile\.metrica\.ads\.sdk.*?Android/.test(e);return n&&!i||r}var c=n(2);const l=(t=window)=>/YaBrowser/.test(Object(c.a)(t));var d=n(9);var h=n(13),u=n(12),p=n(11);var f=n(7);const g=(t,e=f.a)=>{if(!t)return!1;let[n,i]=t.split(":");if(i||(i="none"),window.CSS&&window.CSS.supports){for(let t=0;t<e.length;t++)if(window.CSS.supports(e[t]+n,i))return!0;return!1}const r=new Image;for(let o=0;o<e.length;o++)if(r.style.cssText=`${e[o]+n}:${i}`,r.style.length)return!0;return!1},m=g("flex"),y=g("transform"),v=g("transition"),b=(g("animation"),g("filter:blur(2px)"));var w=n(0);const x=(t=window)=>"BackCompat"===t.document.compatMode,k=(t=window)=>{const e=Object(c.a)(t),n=e.match(/(opera|chrome|safari|firefox|ucbrowser|msie|trident(?=\/))\/?\s*(\d+)/i)||[];if(/trident/i.test(n[1]))return"MSIE";if("Chrome"===n[1]){const t=e.match(/\b(OPR|Edge|YaBrowser)\/(\d+)/);if(null!==t)return t[1].replace("OPR","Opera")}return n[1]};n.d(e,"isQuirks",function(){return O}),n.d(e,"isOpera",function(){return S}),n.d(e,"isOperaMini",function(){return C}),n.d(e,"ieVersion",function(){return $}),n.d(e,"isIE10",function(){return E}),n.d(e,"isIE11",function(){return P}),n.d(e,"isIE",function(){return j}),n.d(e,"isIEQuirks",function(){return R}),n.d(e,"isEdge",function(){return A}),n.d(e,"isSafari",function(){return T}),n.d(e,"safariVersion",function(){return N}),n.d(e,"isFirefox",function(){return M}),n.d(e,"isChrome",function(){return I}),n.d(e,"isYaBrowser",function(){return L}),n.d(e,"isUCBrowser",function(){return D}),n.d(e,"isIOS",function(){return B}),n.d(e,"iOSVersion",function(){return V}),n.d(e,"isAndroid",function(){return z}),n.d(e,"androidVersion",function(){return F}),n.d(e,"isWindowsPhone",function(){return U}),n.d(e,"isMobile",function(){return W}),n.d(e,"isPhone",function(){return H}),n.d(e,"isHDPIScreen",function(){return Y}),n.d(e,"flashVer",function(){return q}),n.d(e,"getDeviceName",function(){return G}),n.d(e,"support",function(){return Q}),n.d(e,"testProperty",function(){return g}),n.d(e,"getBrowserName",function(){return k});const _=window,O=x(_),S=((t=window)=>t.navigator.userAgent.indexOf("Opera")>-1||t.navigator.userAgent.indexOf("OPR")>-1)(_),C=Object(d.a)(_),$=Object(i.a)(_),E=10===$,P=11===$,j=$>0,R=((t=window)=>{const e=Object(i.a)(t);return e>0&&(5===t.document.documentMode||10!==e&&x(t))})(_),A=$&&$>11||!1,T=Object(h.a)(_),N=function(t=window){if(p.a&&t.navigator&&t.navigator.userAgent){const e=t.navigator.userAgent.match(/version\/(\d+)/i);if(e){const t=Number(e[1]);if(t)return t}}return-1}(_),M=((t=window)=>/firefox/.test(t.navigator.userAgent.toLowerCase()))(_),I=((t=window)=>/Chrome/.test(t.navigator.userAgent)&&/Google Inc/.test(t.navigator.vendor)&&!l(t))(_),L=l(_),D=r(_),B=o(_),V=function(t=window){if(o(t)&&t.navigator){const{platform:e}=t.navigator;if(e&&/iP(hone|od|ad)/.test(e)){const e=t.navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);if(e)return parseInt(e[1],10)}}return-1}(_),z=a(_),F=function(t=window){const e=t.navigator.userAgent,n=e.indexOf("Android");return-1===n?-1:parseFloat(e.slice(n+8))}(_),U=s(_),W=((t=window)=>/Mobi|Android/i.test(t.navigator.userAgent))(_),H=((t=window)=>((t=window)=>o(t)&&Object(c.a)(t).toLowerCase().indexOf("iphone")>-1)(t)||a(t)&&Object(c.a)(t).toLowerCase().indexOf("mobile")>-1)(_),Y=((t=window)=>{return(t.devicePixelRatio||t.screen.deviceXDPI&&t.screen.deviceXDPI/t.screen.logicalXDPI||1)>1})(_),q=[0,0,0];function G(){return(H?"phone":W&&"tablet")||"desktop"}const Q={cssFlex:m,cssTransform:y,cssTransition:v,cssFilterBlur:b,touch:Object(u.a)(_),postMessage:((t=window)=>Object(w.a)(t.postMessage)&&-1===Object(i.a)(t)&&!Object(d.a)(t))(_),longUrls:((t=window)=>!((t=window)=>-1!==Object(i.a)(t))(t))(_)}}]);