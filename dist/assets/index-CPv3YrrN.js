import{r as x2,a as S2,g as j2,R as Ut,b as Jt,L as ia,B as z2,c as A2,d as Ul}from"./vendor-Dnr_ETmv.js";(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))o(g);new MutationObserver(g=>{for(const S of g)if(S.type==="childList")for(const M of S.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&o(M)}).observe(document,{childList:!0,subtree:!0});function d(g){const S={};return g.integrity&&(S.integrity=g.integrity),g.referrerPolicy&&(S.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?S.credentials="include":g.crossOrigin==="anonymous"?S.credentials="omit":S.credentials="same-origin",S}function o(g){if(g.ep)return;g.ep=!0;const S=d(g);fetch(g.href,S)}})();var gr={exports:{}},In={};var Qd;function T2(){if(Qd)return In;Qd=1;var u=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,g,S){var M=null;if(S!==void 0&&(M=""+S),g.key!==void 0&&(M=""+g.key),"key"in g){S={};for(var N in g)N!=="key"&&(S[N]=g[N])}else S=g;return g=S.ref,{$$typeof:u,type:o,key:M,ref:g!==void 0?g:null,props:S}}return In.Fragment=f,In.jsx=d,In.jsxs=d,In}var Ld;function E2(){return Ld||(Ld=1,gr.exports=T2()),gr.exports}var r=E2(),pr={exports:{}},Pn={},yr={exports:{}},vr={};var Zd;function M2(){return Zd||(Zd=1,(function(u){function f(T,C){var q=T.length;T.push(C);t:for(;0<q;){var I=q-1>>>1,ct=T[I];if(0<g(ct,C))T[I]=C,T[q]=ct,q=I;else break t}}function d(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var C=T[0],q=T.pop();if(q!==C){T[0]=q;t:for(var I=0,ct=T.length,Tt=ct>>>1;I<Tt;){var lt=2*(I+1)-1,et=T[lt],jt=lt+1,kt=T[jt];if(0>g(et,q))jt<ct&&0>g(kt,et)?(T[I]=kt,T[jt]=q,I=jt):(T[I]=et,T[lt]=q,I=lt);else if(jt<ct&&0>g(kt,q))T[I]=kt,T[jt]=q,I=jt;else break t}}return C}function g(T,C){var q=T.sortIndex-C.sortIndex;return q!==0?q:T.id-C.id}if(u.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var S=performance;u.unstable_now=function(){return S.now()}}else{var M=Date,N=M.now();u.unstable_now=function(){return M.now()-N}}var D=[],B=[],G=1,O=null,R=3,Q=!1,F=!1,tt=!1,Ot=!1,gt=typeof setTimeout=="function"?setTimeout:null,st=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function it(T){for(var C=d(B);C!==null;){if(C.callback===null)o(B);else if(C.startTime<=T)o(B),C.sortIndex=C.expirationTime,f(D,C);else break;C=d(B)}}function pt(T){if(tt=!1,it(T),!F)if(d(D)!==null)F=!0,V||(V=!0,Wt());else{var C=d(B);C!==null&&De(pt,C.startTime-T)}}var V=!1,Y=-1,Ht=5,Ce=-1;function oa(){return Ot?!0:!(u.unstable_now()-Ce<Ht)}function rl(){if(Ot=!1,V){var T=u.unstable_now();Ce=T;var C=!0;try{t:{F=!1,tt&&(tt=!1,st(Y),Y=-1),Q=!0;var q=R;try{e:{for(it(T),O=d(D);O!==null&&!(O.expirationTime>T&&oa());){var I=O.callback;if(typeof I=="function"){O.callback=null,R=O.priorityLevel;var ct=I(O.expirationTime<=T);if(T=u.unstable_now(),typeof ct=="function"){O.callback=ct,it(T),C=!0;break e}O===d(D)&&o(D),it(T)}else o(D);O=d(D)}if(O!==null)C=!0;else{var Tt=d(B);Tt!==null&&De(pt,Tt.startTime-T),C=!1}}break t}finally{O=null,R=q,Q=!1}C=void 0}}finally{C?Wt():V=!1}}}var Wt;if(typeof k=="function")Wt=function(){k(rl)};else if(typeof MessageChannel<"u"){var sa=new MessageChannel,ql=sa.port2;sa.port1.onmessage=rl,Wt=function(){ql.postMessage(null)}}else Wt=function(){gt(rl,0)};function De(T,C){Y=gt(function(){T(u.unstable_now())},C)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(T){T.callback=null},u.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ht=0<T?Math.floor(1e3/T):5},u.unstable_getCurrentPriorityLevel=function(){return R},u.unstable_next=function(T){switch(R){case 1:case 2:case 3:var C=3;break;default:C=R}var q=R;R=C;try{return T()}finally{R=q}},u.unstable_requestPaint=function(){Ot=!0},u.unstable_runWithPriority=function(T,C){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var q=R;R=T;try{return C()}finally{R=q}},u.unstable_scheduleCallback=function(T,C,q){var I=u.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?I+q:I):q=I,T){case 1:var ct=-1;break;case 2:ct=250;break;case 5:ct=1073741823;break;case 4:ct=1e4;break;default:ct=5e3}return ct=q+ct,T={id:G++,callback:C,priorityLevel:T,startTime:q,expirationTime:ct,sortIndex:-1},q>I?(T.sortIndex=q,f(B,T),d(D)===null&&T===d(B)&&(tt?(st(Y),Y=-1):tt=!0,De(pt,q-I))):(T.sortIndex=ct,f(D,T),F||Q||(F=!0,V||(V=!0,Wt()))),T},u.unstable_shouldYield=oa,u.unstable_wrapCallback=function(T){var C=R;return function(){var q=R;R=C;try{return T.apply(this,arguments)}finally{R=q}}}})(vr)),vr}var Vd;function O2(){return Vd||(Vd=1,yr.exports=M2()),yr.exports}var kd;function C2(){if(kd)return Pn;kd=1;var u=O2(),f=x2(),d=S2();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)e+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function S(t){var e=t,l=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(l=e.return),t=e.return;while(t)}return e.tag===3?l:null}function M(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function N(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function D(t){if(S(t)!==t)throw Error(o(188))}function B(t){var e=t.alternate;if(!e){if(e=S(t),e===null)throw Error(o(188));return e!==t?null:t}for(var l=t,a=e;;){var n=l.return;if(n===null)break;var i=n.alternate;if(i===null){if(a=n.return,a!==null){l=a;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===l)return D(n),t;if(i===a)return D(n),e;i=i.sibling}throw Error(o(188))}if(l.return!==a.return)l=n,a=i;else{for(var c=!1,s=n.child;s;){if(s===l){c=!0,l=n,a=i;break}if(s===a){c=!0,a=n,l=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===l){c=!0,l=i,a=n;break}if(s===a){c=!0,a=i,l=n;break}s=s.sibling}if(!c)throw Error(o(189))}}if(l.alternate!==a)throw Error(o(190))}if(l.tag!==3)throw Error(o(188));return l.stateNode.current===l?t:e}function G(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=G(t),e!==null)return e;t=t.sibling}return null}var O=Object.assign,R=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),F=Symbol.for("react.portal"),tt=Symbol.for("react.fragment"),Ot=Symbol.for("react.strict_mode"),gt=Symbol.for("react.profiler"),st=Symbol.for("react.consumer"),k=Symbol.for("react.context"),it=Symbol.for("react.forward_ref"),pt=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),Ht=Symbol.for("react.lazy"),Ce=Symbol.for("react.activity"),oa=Symbol.for("react.memo_cache_sentinel"),rl=Symbol.iterator;function Wt(t){return t===null||typeof t!="object"?null:(t=rl&&t[rl]||t["@@iterator"],typeof t=="function"?t:null)}var sa=Symbol.for("react.client.reference");function ql(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===sa?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case tt:return"Fragment";case gt:return"Profiler";case Ot:return"StrictMode";case pt:return"Suspense";case V:return"SuspenseList";case Ce:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case F:return"Portal";case k:return t.displayName||"Context";case st:return(t._context.displayName||"Context")+".Consumer";case it:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Y:return e=t.displayName||null,e!==null?e:ql(t.type)||"Memo";case Ht:e=t._payload,t=t._init;try{return ql(t(e))}catch{}}return null}var De=Array.isArray,T=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},I=[],ct=-1;function Tt(t){return{current:t}}function lt(t){0>ct||(t.current=I[ct],I[ct]=null,ct--)}function et(t,e){ct++,I[ct]=t.current,t.current=e}var jt=Tt(null),kt=Tt(null),Ft=Tt(null),Qe=Tt(null);function Ue(t,e){switch(et(Ft,e),et(kt,t),et(jt,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?sd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=sd(e),t=dd(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}lt(jt),et(jt,t)}function It(){lt(jt),lt(kt),lt(Ft)}function Yl(t){t.memoizedState!==null&&et(Qe,t);var e=jt.current,l=dd(e,t.type);e!==l&&(et(kt,t),et(jt,l))}function Le(t){kt.current===t&&(lt(jt),lt(kt)),Qe.current===t&&(lt(Qe),Jn._currentValue=q)}var ye,Gr;function Gl(t){if(ye===void 0)try{throw Error()}catch(l){var e=l.stack.trim().match(/\n( *(at )?)/);ye=e&&e[1]||"",Gr=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ye+t+Gr}var Fu=!1;function Iu(t,e){if(!t||Fu)return"";Fu=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var E=function(){throw Error()};if(Object.defineProperty(E.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(E,[])}catch(x){var b=x}Reflect.construct(t,[],E)}else{try{E.call()}catch(x){b=x}t.call(E.prototype)}}else{try{throw Error()}catch(x){b=x}(E=t())&&typeof E.catch=="function"&&E.catch(function(){})}}catch(x){if(x&&b&&typeof x.stack=="string")return[x.stack,b.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var h=c.split(`
`),v=s.split(`
`);for(n=a=0;a<h.length&&!h[a].includes("DetermineComponentFrameRoot");)a++;for(;n<v.length&&!v[n].includes("DetermineComponentFrameRoot");)n++;if(a===h.length||n===v.length)for(a=h.length-1,n=v.length-1;1<=a&&0<=n&&h[a]!==v[n];)n--;for(;1<=a&&0<=n;a--,n--)if(h[a]!==v[n]){if(a!==1||n!==1)do if(a--,n--,0>n||h[a]!==v[n]){var z=`
`+h[a].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=a&&0<=n);break}}}finally{Fu=!1,Error.prepareStackTrace=l}return(l=t?t.displayName||t.name:"")?Gl(l):""}function F1(t,e){switch(t.tag){case 26:case 27:case 5:return Gl(t.type);case 16:return Gl("Lazy");case 13:return t.child!==e&&e!==null?Gl("Suspense Fallback"):Gl("Suspense");case 19:return Gl("SuspenseList");case 0:case 15:return Iu(t.type,!1);case 11:return Iu(t.type.render,!1);case 1:return Iu(t.type,!0);case 31:return Gl("Activity");default:return""}}function Xr(t){try{var e="",l=null;do e+=F1(t,l),l=t,t=t.return;while(t);return e}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Pu=Object.prototype.hasOwnProperty,tc=u.unstable_scheduleCallback,ec=u.unstable_cancelCallback,I1=u.unstable_shouldYield,P1=u.unstable_requestPaint,ue=u.unstable_now,th=u.unstable_getCurrentPriorityLevel,Qr=u.unstable_ImmediatePriority,Lr=u.unstable_UserBlockingPriority,ci=u.unstable_NormalPriority,eh=u.unstable_LowPriority,Zr=u.unstable_IdlePriority,lh=u.log,ah=u.unstable_setDisableYieldValue,un=null,ce=null;function ol(t){if(typeof lh=="function"&&ah(t),ce&&typeof ce.setStrictMode=="function")try{ce.setStrictMode(un,t)}catch{}}var fe=Math.clz32?Math.clz32:uh,nh=Math.log,ih=Math.LN2;function uh(t){return t>>>=0,t===0?32:31-(nh(t)/ih|0)|0}var fi=256,ri=262144,oi=4194304;function Xl(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function si(t,e,l){var a=t.pendingLanes;if(a===0)return 0;var n=0,i=t.suspendedLanes,c=t.pingedLanes;t=t.warmLanes;var s=a&134217727;return s!==0?(a=s&~i,a!==0?n=Xl(a):(c&=s,c!==0?n=Xl(c):l||(l=s&~t,l!==0&&(n=Xl(l))))):(s=a&~i,s!==0?n=Xl(s):c!==0?n=Xl(c):l||(l=a&~t,l!==0&&(n=Xl(l)))),n===0?0:e!==0&&e!==n&&(e&i)===0&&(i=n&-n,l=e&-e,i>=l||i===32&&(l&4194048)!==0)?e:n}function cn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function ch(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vr(){var t=oi;return oi<<=1,(oi&62914560)===0&&(oi=4194304),t}function lc(t){for(var e=[],l=0;31>l;l++)e.push(t);return e}function fn(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function fh(t,e,l,a,n,i){var c=t.pendingLanes;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=l,t.entangledLanes&=l,t.errorRecoveryDisabledLanes&=l,t.shellSuspendCounter=0;var s=t.entanglements,h=t.expirationTimes,v=t.hiddenUpdates;for(l=c&~l;0<l;){var z=31-fe(l),E=1<<z;s[z]=0,h[z]=-1;var b=v[z];if(b!==null)for(v[z]=null,z=0;z<b.length;z++){var x=b[z];x!==null&&(x.lane&=-536870913)}l&=~E}a!==0&&kr(t,a,0),i!==0&&n===0&&t.tag!==0&&(t.suspendedLanes|=i&~(c&~e))}function kr(t,e,l){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-fe(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|l&261930}function Kr(t,e){var l=t.entangledLanes|=e;for(t=t.entanglements;l;){var a=31-fe(l),n=1<<a;n&e|t[a]&e&&(t[a]|=e),l&=~n}}function Jr(t,e){var l=e&-e;return l=(l&42)!==0?1:ac(l),(l&(t.suspendedLanes|e))!==0?0:l}function ac(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function nc(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function $r(){var t=C.p;return t!==0?t:(t=window.event,t===void 0?32:Ud(t.type))}function Wr(t,e){var l=C.p;try{return C.p=t,e()}finally{C.p=l}}var sl=Math.random().toString(36).slice(2),Xt="__reactFiber$"+sl,Pt="__reactProps$"+sl,da="__reactContainer$"+sl,ic="__reactEvents$"+sl,rh="__reactListeners$"+sl,oh="__reactHandles$"+sl,Fr="__reactResources$"+sl,rn="__reactMarker$"+sl;function uc(t){delete t[Xt],delete t[Pt],delete t[ic],delete t[rh],delete t[oh]}function ha(t){var e=t[Xt];if(e)return e;for(var l=t.parentNode;l;){if(e=l[da]||l[Xt]){if(l=e.alternate,e.child!==null||l!==null&&l.child!==null)for(t=bd(t);t!==null;){if(l=t[Xt])return l;t=bd(t)}return e}t=l,l=t.parentNode}return null}function ma(t){if(t=t[Xt]||t[da]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function on(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function ga(t){var e=t[Fr];return e||(e=t[Fr]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Rt(t){t[rn]=!0}var Ir=new Set,Pr={};function Ql(t,e){pa(t,e),pa(t+"Capture",e)}function pa(t,e){for(Pr[t]=e,t=0;t<e.length;t++)Ir.add(e[t])}var sh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),to={},eo={};function dh(t){return Pu.call(eo,t)?!0:Pu.call(to,t)?!1:sh.test(t)?eo[t]=!0:(to[t]=!0,!1)}function di(t,e,l){if(dh(e))if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+l)}}function hi(t,e,l){if(l===null)t.removeAttribute(e);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+l)}}function Ze(t,e,l,a){if(a===null)t.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(l);return}t.setAttributeNS(e,l,""+a)}}function ve(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function lo(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hh(t,e,l){var a=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(t,e,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function cc(t){if(!t._valueTracker){var e=lo(t)?"checked":"value";t._valueTracker=hh(t,e,""+t[e])}}function ao(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var l=e.getValue(),a="";return t&&(a=lo(t)?t.checked?"true":"false":t.value),t=a,t!==l?(e.setValue(t),!0):!1}function mi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var mh=/[\n"\\]/g;function be(t){return t.replace(mh,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function fc(t,e,l,a,n,i,c,s){t.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?t.type=c:t.removeAttribute("type"),e!=null?c==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ve(e)):t.value!==""+ve(e)&&(t.value=""+ve(e)):c!=="submit"&&c!=="reset"||t.removeAttribute("value"),e!=null?rc(t,c,ve(e)):l!=null?rc(t,c,ve(l)):a!=null&&t.removeAttribute("value"),n==null&&i!=null&&(t.defaultChecked=!!i),n!=null&&(t.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.name=""+ve(s):t.removeAttribute("name")}function no(t,e,l,a,n,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),e!=null||l!=null){if(!(i!=="submit"&&i!=="reset"||e!=null)){cc(t);return}l=l!=null?""+ve(l):"",e=e!=null?""+ve(e):l,s||e===t.value||(t.value=e),t.defaultValue=e}a=a??n,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=s?t.checked:!!a,t.defaultChecked=!!a,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.name=c),cc(t)}function rc(t,e,l){e==="number"&&mi(t.ownerDocument)===t||t.defaultValue===""+l||(t.defaultValue=""+l)}function ya(t,e,l,a){if(t=t.options,e){e={};for(var n=0;n<l.length;n++)e["$"+l[n]]=!0;for(l=0;l<t.length;l++)n=e.hasOwnProperty("$"+t[l].value),t[l].selected!==n&&(t[l].selected=n),n&&a&&(t[l].defaultSelected=!0)}else{for(l=""+ve(l),e=null,n=0;n<t.length;n++){if(t[n].value===l){t[n].selected=!0,a&&(t[n].defaultSelected=!0);return}e!==null||t[n].disabled||(e=t[n])}e!==null&&(e.selected=!0)}}function io(t,e,l){if(e!=null&&(e=""+ve(e),e!==t.value&&(t.value=e),l==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=l!=null?""+ve(l):""}function uo(t,e,l,a){if(e==null){if(a!=null){if(l!=null)throw Error(o(92));if(De(a)){if(1<a.length)throw Error(o(93));a=a[0]}l=a}l==null&&(l=""),e=l}l=ve(e),t.defaultValue=l,a=t.textContent,a===l&&a!==""&&a!==null&&(t.value=a),cc(t)}function va(t,e){if(e){var l=t.firstChild;if(l&&l===t.lastChild&&l.nodeType===3){l.nodeValue=e;return}}t.textContent=e}var gh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function co(t,e,l){var a=e.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,l):typeof l!="number"||l===0||gh.has(e)?e==="float"?t.cssFloat=l:t[e]=(""+l).trim():t[e]=l+"px"}function fo(t,e,l){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,l!=null){for(var a in l)!l.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var n in e)a=e[n],e.hasOwnProperty(n)&&l[n]!==a&&co(t,n,a)}else for(var i in e)e.hasOwnProperty(i)&&co(t,i,e[i])}function oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(t){return yh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ve(){}var sc=null;function dc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ba=null,xa=null;function ro(t){var e=ma(t);if(e&&(t=e.stateNode)){var l=t[Pt]||null;t:switch(t=e.stateNode,e.type){case"input":if(fc(t,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),e=l.name,l.type==="radio"&&e!=null){for(l=t;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+be(""+e)+'"][type="radio"]'),e=0;e<l.length;e++){var a=l[e];if(a!==t&&a.form===t.form){var n=a[Pt]||null;if(!n)throw Error(o(90));fc(a,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(e=0;e<l.length;e++)a=l[e],a.form===t.form&&ao(a)}break t;case"textarea":io(t,l.value,l.defaultValue);break t;case"select":e=l.value,e!=null&&ya(t,!!l.multiple,e,!1)}}}var hc=!1;function oo(t,e,l){if(hc)return t(e,l);hc=!0;try{var a=t(e);return a}finally{if(hc=!1,(ba!==null||xa!==null)&&(lu(),ba&&(e=ba,t=xa,xa=ba=null,ro(e),t)))for(e=0;e<t.length;e++)ro(t[e])}}function sn(t,e){var l=t.stateNode;if(l===null)return null;var a=l[Pt]||null;if(a===null)return null;l=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(l&&typeof l!="function")throw Error(o(231,e,typeof l));return l}var ke=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),mc=!1;if(ke)try{var dn={};Object.defineProperty(dn,"passive",{get:function(){mc=!0}}),window.addEventListener("test",dn,dn),window.removeEventListener("test",dn,dn)}catch{mc=!1}var dl=null,gc=null,pi=null;function so(){if(pi)return pi;var t,e=gc,l=e.length,a,n="value"in dl?dl.value:dl.textContent,i=n.length;for(t=0;t<l&&e[t]===n[t];t++);var c=l-t;for(a=1;a<=c&&e[l-a]===n[i-a];a++);return pi=n.slice(t,1<a?1-a:void 0)}function yi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function vi(){return!0}function ho(){return!1}function te(t){function e(l,a,n,i,c){this._reactName=l,this._targetInst=n,this.type=a,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(l=t[s],this[s]=l?l(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?vi:ho,this.isPropagationStopped=ho,this}return O(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=vi)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=vi)},persist:function(){},isPersistent:vi}),e}var Ll={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bi=te(Ll),hn=O({},Ll,{view:0,detail:0}),vh=te(hn),pc,yc,mn,xi=O({},hn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==mn&&(mn&&t.type==="mousemove"?(pc=t.screenX-mn.screenX,yc=t.screenY-mn.screenY):yc=pc=0,mn=t),pc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),mo=te(xi),bh=O({},xi,{dataTransfer:0}),xh=te(bh),Sh=O({},hn,{relatedTarget:0}),vc=te(Sh),jh=O({},Ll,{animationName:0,elapsedTime:0,pseudoElement:0}),zh=te(jh),Ah=O({},Ll,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Th=te(Ah),Eh=O({},Ll,{data:0}),go=te(Eh),Mh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Oh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ch={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dh(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ch[t])?!!e[t]:!1}function bc(){return Dh}var _h=O({},hn,{key:function(t){if(t.key){var e=Mh[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Oh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(t){return t.type==="keypress"?yi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),wh=te(_h),Nh=O({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),po=te(Nh),Bh=O({},hn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Uh=te(Bh),Hh=O({},Ll,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rh=te(Hh),qh=O({},xi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yh=te(qh),Gh=O({},Ll,{newState:0,oldState:0}),Xh=te(Gh),Qh=[9,13,27,32],xc=ke&&"CompositionEvent"in window,gn=null;ke&&"documentMode"in document&&(gn=document.documentMode);var Lh=ke&&"TextEvent"in window&&!gn,yo=ke&&(!xc||gn&&8<gn&&11>=gn),vo=" ",bo=!1;function xo(t,e){switch(t){case"keyup":return Qh.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function So(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Sa=!1;function Zh(t,e){switch(t){case"compositionend":return So(e);case"keypress":return e.which!==32?null:(bo=!0,vo);case"textInput":return t=e.data,t===vo&&bo?null:t;default:return null}}function Vh(t,e){if(Sa)return t==="compositionend"||!xc&&xo(t,e)?(t=so(),pi=gc=dl=null,Sa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yo&&e.locale!=="ko"?null:e.data;default:return null}}var kh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kh[t.type]:e==="textarea"}function zo(t,e,l,a){ba?xa?xa.push(a):xa=[a]:ba=a,e=ru(e,"onChange"),0<e.length&&(l=new bi("onChange","change",null,l,a),t.push({event:l,listeners:e}))}var pn=null,yn=null;function Kh(t){id(t,0)}function Si(t){var e=on(t);if(ao(e))return t}function Ao(t,e){if(t==="change")return e}var To=!1;if(ke){var Sc;if(ke){var jc="oninput"in document;if(!jc){var Eo=document.createElement("div");Eo.setAttribute("oninput","return;"),jc=typeof Eo.oninput=="function"}Sc=jc}else Sc=!1;To=Sc&&(!document.documentMode||9<document.documentMode)}function Mo(){pn&&(pn.detachEvent("onpropertychange",Oo),yn=pn=null)}function Oo(t){if(t.propertyName==="value"&&Si(yn)){var e=[];zo(e,yn,t,dc(t)),oo(Kh,e)}}function Jh(t,e,l){t==="focusin"?(Mo(),pn=e,yn=l,pn.attachEvent("onpropertychange",Oo)):t==="focusout"&&Mo()}function $h(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Si(yn)}function Wh(t,e){if(t==="click")return Si(e)}function Fh(t,e){if(t==="input"||t==="change")return Si(e)}function Ih(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var re=typeof Object.is=="function"?Object.is:Ih;function vn(t,e){if(re(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var l=Object.keys(t),a=Object.keys(e);if(l.length!==a.length)return!1;for(a=0;a<l.length;a++){var n=l[a];if(!Pu.call(e,n)||!re(t[n],e[n]))return!1}return!0}function Co(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Do(t,e){var l=Co(t);t=0;for(var a;l;){if(l.nodeType===3){if(a=t+l.textContent.length,t<=e&&a>=e)return{node:l,offset:e-t};t=a}t:{for(;l;){if(l.nextSibling){l=l.nextSibling;break t}l=l.parentNode}l=void 0}l=Co(l)}}function _o(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_o(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function wo(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=mi(t.document);e instanceof t.HTMLIFrameElement;){try{var l=typeof e.contentWindow.location.href=="string"}catch{l=!1}if(l)t=e.contentWindow;else break;e=mi(t.document)}return e}function zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var Ph=ke&&"documentMode"in document&&11>=document.documentMode,ja=null,Ac=null,bn=null,Tc=!1;function No(t,e,l){var a=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Tc||ja==null||ja!==mi(a)||(a=ja,"selectionStart"in a&&zc(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),bn&&vn(bn,a)||(bn=a,a=ru(Ac,"onSelect"),0<a.length&&(e=new bi("onSelect","select",null,e,l),t.push({event:e,listeners:a}),e.target=ja)))}function Zl(t,e){var l={};return l[t.toLowerCase()]=e.toLowerCase(),l["Webkit"+t]="webkit"+e,l["Moz"+t]="moz"+e,l}var za={animationend:Zl("Animation","AnimationEnd"),animationiteration:Zl("Animation","AnimationIteration"),animationstart:Zl("Animation","AnimationStart"),transitionrun:Zl("Transition","TransitionRun"),transitionstart:Zl("Transition","TransitionStart"),transitioncancel:Zl("Transition","TransitionCancel"),transitionend:Zl("Transition","TransitionEnd")},Ec={},Bo={};ke&&(Bo=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function Vl(t){if(Ec[t])return Ec[t];if(!za[t])return t;var e=za[t],l;for(l in e)if(e.hasOwnProperty(l)&&l in Bo)return Ec[t]=e[l];return t}var Uo=Vl("animationend"),Ho=Vl("animationiteration"),Ro=Vl("animationstart"),tm=Vl("transitionrun"),em=Vl("transitionstart"),lm=Vl("transitioncancel"),qo=Vl("transitionend"),Yo=new Map,Mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Mc.push("scrollEnd");function _e(t,e){Yo.set(t,e),Ql(e,[t])}var ji=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xe=[],Aa=0,Oc=0;function zi(){for(var t=Aa,e=Oc=Aa=0;e<t;){var l=xe[e];xe[e++]=null;var a=xe[e];xe[e++]=null;var n=xe[e];xe[e++]=null;var i=xe[e];if(xe[e++]=null,a!==null&&n!==null){var c=a.pending;c===null?n.next=n:(n.next=c.next,c.next=n),a.pending=n}i!==0&&Go(l,n,i)}}function Ai(t,e,l,a){xe[Aa++]=t,xe[Aa++]=e,xe[Aa++]=l,xe[Aa++]=a,Oc|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Cc(t,e,l,a){return Ai(t,e,l,a),Ti(t)}function kl(t,e){return Ai(t,null,null,e),Ti(t)}function Go(t,e,l){t.lanes|=l;var a=t.alternate;a!==null&&(a.lanes|=l);for(var n=!1,i=t.return;i!==null;)i.childLanes|=l,a=i.alternate,a!==null&&(a.childLanes|=l),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(n=!0)),t=i,i=i.return;return t.tag===3?(i=t.stateNode,n&&e!==null&&(n=31-fe(l),t=i.hiddenUpdates,a=t[n],a===null?t[n]=[e]:a.push(e),e.lane=l|536870912),i):null}function Ti(t){if(50<Xn)throw Xn=0,Yf=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Ta={};function am(t,e,l,a){this.tag=t,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function oe(t,e,l,a){return new am(t,e,l,a)}function Dc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ke(t,e){var l=t.alternate;return l===null?(l=oe(t.tag,e,t.key,t.mode),l.elementType=t.elementType,l.type=t.type,l.stateNode=t.stateNode,l.alternate=t,t.alternate=l):(l.pendingProps=e,l.type=t.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=t.flags&65011712,l.childLanes=t.childLanes,l.lanes=t.lanes,l.child=t.child,l.memoizedProps=t.memoizedProps,l.memoizedState=t.memoizedState,l.updateQueue=t.updateQueue,e=t.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},l.sibling=t.sibling,l.index=t.index,l.ref=t.ref,l.refCleanup=t.refCleanup,l}function Xo(t,e){t.flags&=65011714;var l=t.alternate;return l===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=l.childLanes,t.lanes=l.lanes,t.child=l.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=l.memoizedProps,t.memoizedState=l.memoizedState,t.updateQueue=l.updateQueue,t.type=l.type,e=l.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Ei(t,e,l,a,n,i){var c=0;if(a=t,typeof t=="function")Dc(t)&&(c=1);else if(typeof t=="string")c=f2(t,l,jt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case Ce:return t=oe(31,l,e,n),t.elementType=Ce,t.lanes=i,t;case tt:return Kl(l.children,n,i,e);case Ot:c=8,n|=24;break;case gt:return t=oe(12,l,e,n|2),t.elementType=gt,t.lanes=i,t;case pt:return t=oe(13,l,e,n),t.elementType=pt,t.lanes=i,t;case V:return t=oe(19,l,e,n),t.elementType=V,t.lanes=i,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case k:c=10;break t;case st:c=9;break t;case it:c=11;break t;case Y:c=14;break t;case Ht:c=16,a=null;break t}c=29,l=Error(o(130,t===null?"null":typeof t,"")),a=null}return e=oe(c,l,e,n),e.elementType=t,e.type=a,e.lanes=i,e}function Kl(t,e,l,a){return t=oe(7,t,a,e),t.lanes=l,t}function _c(t,e,l){return t=oe(6,t,null,e),t.lanes=l,t}function Qo(t){var e=oe(18,null,null,0);return e.stateNode=t,e}function wc(t,e,l){return e=oe(4,t.children!==null?t.children:[],t.key,e),e.lanes=l,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Lo=new WeakMap;function Se(t,e){if(typeof t=="object"&&t!==null){var l=Lo.get(t);return l!==void 0?l:(e={value:t,source:e,stack:Xr(e)},Lo.set(t,e),e)}return{value:t,source:e,stack:Xr(e)}}var Ea=[],Ma=0,Mi=null,xn=0,je=[],ze=0,hl=null,He=1,Re="";function Je(t,e){Ea[Ma++]=xn,Ea[Ma++]=Mi,Mi=t,xn=e}function Zo(t,e,l){je[ze++]=He,je[ze++]=Re,je[ze++]=hl,hl=t;var a=He;t=Re;var n=32-fe(a)-1;a&=~(1<<n),l+=1;var i=32-fe(e)+n;if(30<i){var c=n-n%5;i=(a&(1<<c)-1).toString(32),a>>=c,n-=c,He=1<<32-fe(e)+n|l<<n|a,Re=i+t}else He=1<<i|l<<n|a,Re=t}function Nc(t){t.return!==null&&(Je(t,1),Zo(t,1,0))}function Bc(t){for(;t===Mi;)Mi=Ea[--Ma],Ea[Ma]=null,xn=Ea[--Ma],Ea[Ma]=null;for(;t===hl;)hl=je[--ze],je[ze]=null,Re=je[--ze],je[ze]=null,He=je[--ze],je[ze]=null}function Vo(t,e){je[ze++]=He,je[ze++]=Re,je[ze++]=hl,He=e.id,Re=e.overflow,hl=t}var Qt=null,vt=null,P=!1,ml=null,Ae=!1,Uc=Error(o(519));function gl(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sn(Se(e,t)),Uc}function ko(t){var e=t.stateNode,l=t.type,a=t.memoizedProps;switch(e[Xt]=t,e[Pt]=a,l){case"dialog":J("cancel",e),J("close",e);break;case"iframe":case"object":case"embed":J("load",e);break;case"video":case"audio":for(l=0;l<Ln.length;l++)J(Ln[l],e);break;case"source":J("error",e);break;case"img":case"image":case"link":J("error",e),J("load",e);break;case"details":J("toggle",e);break;case"input":J("invalid",e),no(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":J("invalid",e);break;case"textarea":J("invalid",e),uo(e,a.value,a.defaultValue,a.children)}l=a.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||e.textContent===""+l||a.suppressHydrationWarning===!0||rd(e.textContent,l)?(a.popover!=null&&(J("beforetoggle",e),J("toggle",e)),a.onScroll!=null&&J("scroll",e),a.onScrollEnd!=null&&J("scrollend",e),a.onClick!=null&&(e.onclick=Ve),e=!0):e=!1,e||gl(t,!0)}function Ko(t){for(Qt=t.return;Qt;)switch(Qt.tag){case 5:case 31:case 13:Ae=!1;return;case 27:case 3:Ae=!0;return;default:Qt=Qt.return}}function Oa(t){if(t!==Qt)return!1;if(!P)return Ko(t),P=!0,!1;var e=t.tag,l;if((l=e!==3&&e!==27)&&((l=e===5)&&(l=t.type,l=!(l!=="form"&&l!=="button")||tr(t.type,t.memoizedProps)),l=!l),l&&vt&&gl(t),Ko(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));vt=vd(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));vt=vd(t)}else e===27?(e=vt,Cl(t.type)?(t=ir,ir=null,vt=t):vt=e):vt=Qt?Ee(t.stateNode.nextSibling):null;return!0}function Jl(){vt=Qt=null,P=!1}function Hc(){var t=ml;return t!==null&&(ne===null?ne=t:ne.push.apply(ne,t),ml=null),t}function Sn(t){ml===null?ml=[t]:ml.push(t)}var Rc=Tt(null),$l=null,$e=null;function pl(t,e,l){et(Rc,e._currentValue),e._currentValue=l}function We(t){t._currentValue=Rc.current,lt(Rc)}function qc(t,e,l){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===l)break;t=t.return}}function Yc(t,e,l,a){var n=t.child;for(n!==null&&(n.return=t);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;t:for(;i!==null;){var s=i;i=n;for(var h=0;h<e.length;h++)if(s.context===e[h]){i.lanes|=l,s=i.alternate,s!==null&&(s.lanes|=l),qc(i.return,l,t),a||(c=null);break t}i=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=l,i=c.alternate,i!==null&&(i.lanes|=l),qc(c,l,t),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===t){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Ca(t,e,l,a){t=null;for(var n=e,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var s=n.type;re(n.pendingProps.value,c.value)||(t!==null?t.push(s):t=[s])}}else if(n===Qe.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(t!==null?t.push(Jn):t=[Jn])}n=n.return}t!==null&&Yc(e,t,l,a),e.flags|=262144}function Oi(t){for(t=t.firstContext;t!==null;){if(!re(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wl(t){$l=t,$e=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Lt(t){return Jo($l,t)}function Ci(t,e){return $l===null&&Wl(t),Jo(t,e)}function Jo(t,e){var l=e._currentValue;if(e={context:e,memoizedValue:l,next:null},$e===null){if(t===null)throw Error(o(308));$e=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else $e=$e.next=e;return l}var nm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(l,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(l){return l()})}},im=u.unstable_scheduleCallback,um=u.unstable_NormalPriority,Ct={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Gc(){return{controller:new nm,data:new Map,refCount:0}}function jn(t){t.refCount--,t.refCount===0&&im(um,function(){t.controller.abort()})}var zn=null,Xc=0,Da=0,_a=null;function cm(t,e){if(zn===null){var l=zn=[];Xc=0,Da=Vf(),_a={status:"pending",value:void 0,then:function(a){l.push(a)}}}return Xc++,e.then($o,$o),e}function $o(){if(--Xc===0&&zn!==null){_a!==null&&(_a.status="fulfilled");var t=zn;zn=null,Da=0,_a=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function fm(t,e){var l=[],a={status:"pending",value:null,reason:null,then:function(n){l.push(n)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var n=0;n<l.length;n++)(0,l[n])(e)},function(n){for(a.status="rejected",a.reason=n,n=0;n<l.length;n++)(0,l[n])(void 0)}),a}var Wo=T.S;T.S=function(t,e){N0=ue(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&cm(t,e),Wo!==null&&Wo(t,e)};var Fl=Tt(null);function Qc(){var t=Fl.current;return t!==null?t:yt.pooledCache}function Di(t,e){e===null?et(Fl,Fl.current):et(Fl,e.pool)}function Fo(){var t=Qc();return t===null?null:{parent:Ct._currentValue,pool:t}}var wa=Error(o(460)),Lc=Error(o(474)),_i=Error(o(542)),wi={then:function(){}};function Io(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Po(t,e,l){switch(l=t[l],l===void 0?t.push(e):l!==e&&(e.then(Ve,Ve),e=l),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,es(t),t;default:if(typeof e.status=="string")e.then(Ve,Ve);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var n=e;n.status="fulfilled",n.value=a}},function(a){if(e.status==="pending"){var n=e;n.status="rejected",n.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,es(t),t}throw Pl=e,wa}}function Il(t){try{var e=t._init;return e(t._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Pl=l,wa):l}}var Pl=null;function ts(){if(Pl===null)throw Error(o(459));var t=Pl;return Pl=null,t}function es(t){if(t===wa||t===_i)throw Error(o(483))}var Na=null,An=0;function Ni(t){var e=An;return An+=1,Na===null&&(Na=[]),Po(Na,t,e)}function Tn(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bi(t,e){throw e.$$typeof===R?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function ls(t){function e(p,m){if(t){var y=p.deletions;y===null?(p.deletions=[m],p.flags|=16):y.push(m)}}function l(p,m){if(!t)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function a(p){for(var m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function n(p,m){return p=Ke(p,m),p.index=0,p.sibling=null,p}function i(p,m,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<m?(p.flags|=67108866,m):y):(p.flags|=67108866,m)):(p.flags|=1048576,m)}function c(p){return t&&p.alternate===null&&(p.flags|=67108866),p}function s(p,m,y,A){return m===null||m.tag!==6?(m=_c(y,p.mode,A),m.return=p,m):(m=n(m,y),m.return=p,m)}function h(p,m,y,A){var U=y.type;return U===tt?z(p,m,y.props.children,A,y.key):m!==null&&(m.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ht&&Il(U)===m.type)?(m=n(m,y.props),Tn(m,y),m.return=p,m):(m=Ei(y.type,y.key,y.props,null,p.mode,A),Tn(m,y),m.return=p,m)}function v(p,m,y,A){return m===null||m.tag!==4||m.stateNode.containerInfo!==y.containerInfo||m.stateNode.implementation!==y.implementation?(m=wc(y,p.mode,A),m.return=p,m):(m=n(m,y.children||[]),m.return=p,m)}function z(p,m,y,A,U){return m===null||m.tag!==7?(m=Kl(y,p.mode,A,U),m.return=p,m):(m=n(m,y),m.return=p,m)}function E(p,m,y){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=_c(""+m,p.mode,y),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Q:return y=Ei(m.type,m.key,m.props,null,p.mode,y),Tn(y,m),y.return=p,y;case F:return m=wc(m,p.mode,y),m.return=p,m;case Ht:return m=Il(m),E(p,m,y)}if(De(m)||Wt(m))return m=Kl(m,p.mode,y,null),m.return=p,m;if(typeof m.then=="function")return E(p,Ni(m),y);if(m.$$typeof===k)return E(p,Ci(p,m),y);Bi(p,m)}return null}function b(p,m,y,A){var U=m!==null?m.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return U!==null?null:s(p,m,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:return y.key===U?h(p,m,y,A):null;case F:return y.key===U?v(p,m,y,A):null;case Ht:return y=Il(y),b(p,m,y,A)}if(De(y)||Wt(y))return U!==null?null:z(p,m,y,A,null);if(typeof y.then=="function")return b(p,m,Ni(y),A);if(y.$$typeof===k)return b(p,m,Ci(p,y),A);Bi(p,y)}return null}function x(p,m,y,A,U){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return p=p.get(y)||null,s(m,p,""+A,U);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Q:return p=p.get(A.key===null?y:A.key)||null,h(m,p,A,U);case F:return p=p.get(A.key===null?y:A.key)||null,v(m,p,A,U);case Ht:return A=Il(A),x(p,m,y,A,U)}if(De(A)||Wt(A))return p=p.get(y)||null,z(m,p,A,U,null);if(typeof A.then=="function")return x(p,m,y,Ni(A),U);if(A.$$typeof===k)return x(p,m,y,Ci(m,A),U);Bi(m,A)}return null}function _(p,m,y,A){for(var U=null,at=null,w=m,L=m=0,W=null;w!==null&&L<y.length;L++){w.index>L?(W=w,w=null):W=w.sibling;var nt=b(p,w,y[L],A);if(nt===null){w===null&&(w=W);break}t&&w&&nt.alternate===null&&e(p,w),m=i(nt,m,L),at===null?U=nt:at.sibling=nt,at=nt,w=W}if(L===y.length)return l(p,w),P&&Je(p,L),U;if(w===null){for(;L<y.length;L++)w=E(p,y[L],A),w!==null&&(m=i(w,m,L),at===null?U=w:at.sibling=w,at=w);return P&&Je(p,L),U}for(w=a(w);L<y.length;L++)W=x(w,p,L,y[L],A),W!==null&&(t&&W.alternate!==null&&w.delete(W.key===null?L:W.key),m=i(W,m,L),at===null?U=W:at.sibling=W,at=W);return t&&w.forEach(function(Bl){return e(p,Bl)}),P&&Je(p,L),U}function H(p,m,y,A){if(y==null)throw Error(o(151));for(var U=null,at=null,w=m,L=m=0,W=null,nt=y.next();w!==null&&!nt.done;L++,nt=y.next()){w.index>L?(W=w,w=null):W=w.sibling;var Bl=b(p,w,nt.value,A);if(Bl===null){w===null&&(w=W);break}t&&w&&Bl.alternate===null&&e(p,w),m=i(Bl,m,L),at===null?U=Bl:at.sibling=Bl,at=Bl,w=W}if(nt.done)return l(p,w),P&&Je(p,L),U;if(w===null){for(;!nt.done;L++,nt=y.next())nt=E(p,nt.value,A),nt!==null&&(m=i(nt,m,L),at===null?U=nt:at.sibling=nt,at=nt);return P&&Je(p,L),U}for(w=a(w);!nt.done;L++,nt=y.next())nt=x(w,p,L,nt.value,A),nt!==null&&(t&&nt.alternate!==null&&w.delete(nt.key===null?L:nt.key),m=i(nt,m,L),at===null?U=nt:at.sibling=nt,at=nt);return t&&w.forEach(function(b2){return e(p,b2)}),P&&Je(p,L),U}function mt(p,m,y,A){if(typeof y=="object"&&y!==null&&y.type===tt&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Q:t:{for(var U=y.key;m!==null;){if(m.key===U){if(U=y.type,U===tt){if(m.tag===7){l(p,m.sibling),A=n(m,y.props.children),A.return=p,p=A;break t}}else if(m.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Ht&&Il(U)===m.type){l(p,m.sibling),A=n(m,y.props),Tn(A,y),A.return=p,p=A;break t}l(p,m);break}else e(p,m);m=m.sibling}y.type===tt?(A=Kl(y.props.children,p.mode,A,y.key),A.return=p,p=A):(A=Ei(y.type,y.key,y.props,null,p.mode,A),Tn(A,y),A.return=p,p=A)}return c(p);case F:t:{for(U=y.key;m!==null;){if(m.key===U)if(m.tag===4&&m.stateNode.containerInfo===y.containerInfo&&m.stateNode.implementation===y.implementation){l(p,m.sibling),A=n(m,y.children||[]),A.return=p,p=A;break t}else{l(p,m);break}else e(p,m);m=m.sibling}A=wc(y,p.mode,A),A.return=p,p=A}return c(p);case Ht:return y=Il(y),mt(p,m,y,A)}if(De(y))return _(p,m,y,A);if(Wt(y)){if(U=Wt(y),typeof U!="function")throw Error(o(150));return y=U.call(y),H(p,m,y,A)}if(typeof y.then=="function")return mt(p,m,Ni(y),A);if(y.$$typeof===k)return mt(p,m,Ci(p,y),A);Bi(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,m!==null&&m.tag===6?(l(p,m.sibling),A=n(m,y),A.return=p,p=A):(l(p,m),A=_c(y,p.mode,A),A.return=p,p=A),c(p)):l(p,m)}return function(p,m,y,A){try{An=0;var U=mt(p,m,y,A);return Na=null,U}catch(w){if(w===wa||w===_i)throw w;var at=oe(29,w,null,p.mode);return at.lanes=A,at.return=p,at}finally{}}}var ta=ls(!0),as=ls(!1),yl=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vc(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function vl(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function bl(t,e,l){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(ut&2)!==0){var n=a.pending;return n===null?e.next=e:(e.next=n.next,n.next=e),a.pending=e,e=Ti(t),Go(t,null,l),e}return Ai(t,a,e,l),Ti(t)}function En(t,e,l){if(e=e.updateQueue,e!==null&&(e=e.shared,(l&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Kr(t,l)}}function kc(t,e){var l=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,l===a)){var n=null,i=null;if(l=l.firstBaseUpdate,l!==null){do{var c={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,l=l.next}while(l!==null);i===null?n=i=e:i=i.next=e}else n=i=e;l={baseState:a.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=l;return}t=l.lastBaseUpdate,t===null?l.firstBaseUpdate=e:t.next=e,l.lastBaseUpdate=e}var Kc=!1;function Mn(){if(Kc){var t=_a;if(t!==null)throw t}}function On(t,e,l,a){Kc=!1;var n=t.updateQueue;yl=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var h=s,v=h.next;h.next=null,c===null?i=v:c.next=v,c=h;var z=t.alternate;z!==null&&(z=z.updateQueue,s=z.lastBaseUpdate,s!==c&&(s===null?z.firstBaseUpdate=v:s.next=v,z.lastBaseUpdate=h))}if(i!==null){var E=n.baseState;c=0,z=v=h=null,s=i;do{var b=s.lane&-536870913,x=b!==s.lane;if(x?($&b)===b:(a&b)===b){b!==0&&b===Da&&(Kc=!0),z!==null&&(z=z.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});t:{var _=t,H=s;b=e;var mt=l;switch(H.tag){case 1:if(_=H.payload,typeof _=="function"){E=_.call(mt,E,b);break t}E=_;break t;case 3:_.flags=_.flags&-65537|128;case 0:if(_=H.payload,b=typeof _=="function"?_.call(mt,E,b):_,b==null)break t;E=O({},E,b);break t;case 2:yl=!0}}b=s.callback,b!==null&&(t.flags|=64,x&&(t.flags|=8192),x=n.callbacks,x===null?n.callbacks=[b]:x.push(b))}else x={lane:b,tag:s.tag,payload:s.payload,callback:s.callback,next:null},z===null?(v=z=x,h=E):z=z.next=x,c|=b;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;x=s,s=x.next,x.next=null,n.lastBaseUpdate=x,n.shared.pending=null}}while(!0);z===null&&(h=E),n.baseState=h,n.firstBaseUpdate=v,n.lastBaseUpdate=z,i===null&&(n.shared.lanes=0),Al|=c,t.lanes=c,t.memoizedState=E}}function ns(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function is(t,e){var l=t.callbacks;if(l!==null)for(t.callbacks=null,t=0;t<l.length;t++)ns(l[t],e)}var Ba=Tt(null),Ui=Tt(0);function us(t,e){t=il,et(Ui,t),et(Ba,e),il=t|e.baseLanes}function Jc(){et(Ui,il),et(Ba,Ba.current)}function $c(){il=Ui.current,lt(Ba),lt(Ui)}var se=Tt(null),Te=null;function xl(t){var e=t.alternate;et(Et,Et.current&1),et(se,t),Te===null&&(e===null||Ba.current!==null||e.memoizedState!==null)&&(Te=t)}function Wc(t){et(Et,Et.current),et(se,t),Te===null&&(Te=t)}function cs(t){t.tag===22?(et(Et,Et.current),et(se,t),Te===null&&(Te=t)):Sl()}function Sl(){et(Et,Et.current),et(se,se.current)}function de(t){lt(se),Te===t&&(Te=null),lt(Et)}var Et=Tt(0);function Hi(t){for(var e=t;e!==null;){if(e.tag===13){var l=e.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||ar(l)||nr(l)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fe=0,X=null,dt=null,Dt=null,Ri=!1,Ua=!1,ea=!1,qi=0,Cn=0,Ha=null,rm=0;function zt(){throw Error(o(321))}function Fc(t,e){if(e===null)return!1;for(var l=0;l<e.length&&l<t.length;l++)if(!re(t[l],e[l]))return!1;return!0}function Ic(t,e,l,a,n,i){return Fe=i,X=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,T.H=t===null||t.memoizedState===null?Zs:mf,ea=!1,i=l(a,n),ea=!1,Ua&&(i=rs(e,l,a,n)),fs(t),i}function fs(t){T.H=wn;var e=dt!==null&&dt.next!==null;if(Fe=0,Dt=dt=X=null,Ri=!1,Cn=0,Ha=null,e)throw Error(o(300));t===null||_t||(t=t.dependencies,t!==null&&Oi(t)&&(_t=!0))}function rs(t,e,l,a){X=t;var n=0;do{if(Ua&&(Ha=null),Cn=0,Ua=!1,25<=n)throw Error(o(301));if(n+=1,Dt=dt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}T.H=Vs,i=e(l,a)}while(Ua);return i}function om(){var t=T.H,e=t.useState()[0];return e=typeof e.then=="function"?Dn(e):e,t=t.useState()[0],(dt!==null?dt.memoizedState:null)!==t&&(X.flags|=1024),e}function Pc(){var t=qi!==0;return qi=0,t}function tf(t,e,l){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~l}function ef(t){if(Ri){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Ri=!1}Fe=0,Dt=dt=X=null,Ua=!1,Cn=qi=0,Ha=null}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?X.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function Mt(){if(dt===null){var t=X.alternate;t=t!==null?t.memoizedState:null}else t=dt.next;var e=Dt===null?X.memoizedState:Dt.next;if(e!==null)Dt=e,dt=t;else{if(t===null)throw X.alternate===null?Error(o(467)):Error(o(310));dt=t,t={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Dt===null?X.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function Yi(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dn(t){var e=Cn;return Cn+=1,Ha===null&&(Ha=[]),t=Po(Ha,t,e),e=X,(Dt===null?e.memoizedState:Dt.next)===null&&(e=e.alternate,T.H=e===null||e.memoizedState===null?Zs:mf),t}function Gi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Dn(t);if(t.$$typeof===k)return Lt(t)}throw Error(o(438,String(t)))}function lf(t){var e=null,l=X.updateQueue;if(l!==null&&(e=l.memoCache),e==null){var a=X.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(n){return n.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),l===null&&(l=Yi(),X.updateQueue=l),l.memoCache=e,l=e.data[e.index],l===void 0)for(l=e.data[e.index]=Array(t),a=0;a<t;a++)l[a]=oa;return e.index++,l}function Ie(t,e){return typeof e=="function"?e(t):e}function Xi(t){var e=Mt();return af(e,dt,t)}function af(t,e,l){var a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=l;var n=t.baseQueue,i=a.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}e.baseQueue=n=i,a.pending=null}if(i=t.baseState,n===null)t.memoizedState=i;else{e=n.next;var s=c=null,h=null,v=e,z=!1;do{var E=v.lane&-536870913;if(E!==v.lane?($&E)===E:(Fe&E)===E){var b=v.revertLane;if(b===0)h!==null&&(h=h.next={lane:0,revertLane:0,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null}),E===Da&&(z=!0);else if((Fe&b)===b){v=v.next,b===Da&&(z=!0);continue}else E={lane:0,revertLane:v.revertLane,gesture:null,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},h===null?(s=h=E,c=i):h=h.next=E,X.lanes|=b,Al|=b;E=v.action,ea&&l(i,E),i=v.hasEagerState?v.eagerState:l(i,E)}else b={lane:E,revertLane:v.revertLane,gesture:v.gesture,action:v.action,hasEagerState:v.hasEagerState,eagerState:v.eagerState,next:null},h===null?(s=h=b,c=i):h=h.next=b,X.lanes|=E,Al|=E;v=v.next}while(v!==null&&v!==e);if(h===null?c=i:h.next=s,!re(i,t.memoizedState)&&(_t=!0,z&&(l=_a,l!==null)))throw l;t.memoizedState=i,t.baseState=c,t.baseQueue=h,a.lastRenderedState=i}return n===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function nf(t){var e=Mt(),l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=t;var a=l.dispatch,n=l.pending,i=e.memoizedState;if(n!==null){l.pending=null;var c=n=n.next;do i=t(i,c.action),c=c.next;while(c!==n);re(i,e.memoizedState)||(_t=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),l.lastRenderedState=i}return[i,a]}function os(t,e,l){var a=X,n=Mt(),i=P;if(i){if(l===void 0)throw Error(o(407));l=l()}else l=e();var c=!re((dt||n).memoizedState,l);if(c&&(n.memoizedState=l,_t=!0),n=n.queue,ff(hs.bind(null,a,n,t),[t]),n.getSnapshot!==e||c||Dt!==null&&Dt.memoizedState.tag&1){if(a.flags|=2048,Ra(9,{destroy:void 0},ds.bind(null,a,n,l,e),null),yt===null)throw Error(o(349));i||(Fe&127)!==0||ss(a,e,l)}return l}function ss(t,e,l){t.flags|=16384,t={getSnapshot:e,value:l},e=X.updateQueue,e===null?(e=Yi(),X.updateQueue=e,e.stores=[t]):(l=e.stores,l===null?e.stores=[t]:l.push(t))}function ds(t,e,l,a){e.value=l,e.getSnapshot=a,ms(e)&&gs(t)}function hs(t,e,l){return l(function(){ms(e)&&gs(t)})}function ms(t){var e=t.getSnapshot;t=t.value;try{var l=e();return!re(t,l)}catch{return!0}}function gs(t){var e=kl(t,2);e!==null&&ie(e,t,2)}function uf(t){var e=Kt();if(typeof t=="function"){var l=t;if(t=l(),ea){ol(!0);try{l()}finally{ol(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:t},e}function ps(t,e,l,a){return t.baseState=l,af(t,dt,typeof a=="function"?a:Ie)}function sm(t,e,l,a,n){if(Zi(t))throw Error(o(485));if(t=e.action,t!==null){var i={payload:n,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};T.T!==null?l(!0):i.isTransition=!1,a(i),l=e.pending,l===null?(i.next=e.pending=i,ys(e,i)):(i.next=l.next,e.pending=l.next=i)}}function ys(t,e){var l=e.action,a=e.payload,n=t.state;if(e.isTransition){var i=T.T,c={};T.T=c;try{var s=l(n,a),h=T.S;h!==null&&h(c,s),vs(t,e,s)}catch(v){cf(t,e,v)}finally{i!==null&&c.types!==null&&(i.types=c.types),T.T=i}}else try{i=l(n,a),vs(t,e,i)}catch(v){cf(t,e,v)}}function vs(t,e,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(a){bs(t,e,a)},function(a){return cf(t,e,a)}):bs(t,e,l)}function bs(t,e,l){e.status="fulfilled",e.value=l,xs(e),t.state=l,e=t.pending,e!==null&&(l=e.next,l===e?t.pending=null:(l=l.next,e.next=l,ys(t,l)))}function cf(t,e,l){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=l,xs(e),e=e.next;while(e!==a)}t.action=null}function xs(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function Ss(t,e){return e}function js(t,e){if(P){var l=yt.formState;if(l!==null){t:{var a=X;if(P){if(vt){e:{for(var n=vt,i=Ae;n.nodeType!==8;){if(!i){n=null;break e}if(n=Ee(n.nextSibling),n===null){n=null;break e}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){vt=Ee(n.nextSibling),a=n.data==="F!";break t}}gl(a)}a=!1}a&&(e=l[0])}}return l=Kt(),l.memoizedState=l.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:e},l.queue=a,l=Xs.bind(null,X,a),a.dispatch=l,a=uf(!1),i=hf.bind(null,X,!1,a.queue),a=Kt(),n={state:e,dispatch:null,action:t,pending:null},a.queue=n,l=sm.bind(null,X,n,i,l),n.dispatch=l,a.memoizedState=t,[e,l,!1]}function zs(t){var e=Mt();return As(e,dt,t)}function As(t,e,l){if(e=af(t,e,Ss)[0],t=Xi(Ie)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Dn(e)}catch(c){throw c===wa?_i:c}else a=e;e=Mt();var n=e.queue,i=n.dispatch;return l!==e.memoizedState&&(X.flags|=2048,Ra(9,{destroy:void 0},dm.bind(null,n,l),null)),[a,i,t]}function dm(t,e){t.action=e}function Ts(t){var e=Mt(),l=dt;if(l!==null)return As(e,l,t);Mt(),e=e.memoizedState,l=Mt();var a=l.queue.dispatch;return l.memoizedState=t,[e,a,!1]}function Ra(t,e,l,a){return t={tag:t,create:l,deps:a,inst:e,next:null},e=X.updateQueue,e===null&&(e=Yi(),X.updateQueue=e),l=e.lastEffect,l===null?e.lastEffect=t.next=t:(a=l.next,l.next=t,t.next=a,e.lastEffect=t),t}function Es(){return Mt().memoizedState}function Qi(t,e,l,a){var n=Kt();X.flags|=t,n.memoizedState=Ra(1|e,{destroy:void 0},l,a===void 0?null:a)}function Li(t,e,l,a){var n=Mt();a=a===void 0?null:a;var i=n.memoizedState.inst;dt!==null&&a!==null&&Fc(a,dt.memoizedState.deps)?n.memoizedState=Ra(e,i,l,a):(X.flags|=t,n.memoizedState=Ra(1|e,i,l,a))}function Ms(t,e){Qi(8390656,8,t,e)}function ff(t,e){Li(2048,8,t,e)}function hm(t){X.flags|=4;var e=X.updateQueue;if(e===null)e=Yi(),X.updateQueue=e,e.events=[t];else{var l=e.events;l===null?e.events=[t]:l.push(t)}}function Os(t){var e=Mt().memoizedState;return hm({ref:e,nextImpl:t}),function(){if((ut&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function Cs(t,e){return Li(4,2,t,e)}function Ds(t,e){return Li(4,4,t,e)}function _s(t,e){if(typeof e=="function"){t=t();var l=e(t);return function(){typeof l=="function"?l():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ws(t,e,l){l=l!=null?l.concat([t]):null,Li(4,4,_s.bind(null,e,t),l)}function rf(){}function Ns(t,e){var l=Mt();e=e===void 0?null:e;var a=l.memoizedState;return e!==null&&Fc(e,a[1])?a[0]:(l.memoizedState=[t,e],t)}function Bs(t,e){var l=Mt();e=e===void 0?null:e;var a=l.memoizedState;if(e!==null&&Fc(e,a[1]))return a[0];if(a=t(),ea){ol(!0);try{t()}finally{ol(!1)}}return l.memoizedState=[a,e],a}function of(t,e,l){return l===void 0||(Fe&1073741824)!==0&&($&261930)===0?t.memoizedState=e:(t.memoizedState=l,t=U0(),X.lanes|=t,Al|=t,l)}function Us(t,e,l,a){return re(l,e)?l:Ba.current!==null?(t=of(t,l,a),re(t,e)||(_t=!0),t):(Fe&42)===0||(Fe&1073741824)!==0&&($&261930)===0?(_t=!0,t.memoizedState=l):(t=U0(),X.lanes|=t,Al|=t,e)}function Hs(t,e,l,a,n){var i=C.p;C.p=i!==0&&8>i?i:8;var c=T.T,s={};T.T=s,hf(t,!1,e,l);try{var h=n(),v=T.S;if(v!==null&&v(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var z=fm(h,a);_n(t,e,z,ge(t))}else _n(t,e,a,ge(t))}catch(E){_n(t,e,{then:function(){},status:"rejected",reason:E},ge())}finally{C.p=i,c!==null&&s.types!==null&&(c.types=s.types),T.T=c}}function mm(){}function sf(t,e,l,a){if(t.tag!==5)throw Error(o(476));var n=Rs(t).queue;Hs(t,n,e,q,l===null?mm:function(){return qs(t),l(a)})}function Rs(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:q},next:null};var l={};return e.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ie,lastRenderedState:l},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function qs(t){var e=Rs(t);e.next===null&&(e=t.alternate.memoizedState),_n(t,e.next.queue,{},ge())}function df(){return Lt(Jn)}function Ys(){return Mt().memoizedState}function Gs(){return Mt().memoizedState}function gm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var l=ge();t=vl(l);var a=bl(e,t,l);a!==null&&(ie(a,e,l),En(a,e,l)),e={cache:Gc()},t.payload=e;return}e=e.return}}function pm(t,e,l){var a=ge();l={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zi(t)?Qs(e,l):(l=Cc(t,e,l,a),l!==null&&(ie(l,t,a),Ls(l,e,a)))}function Xs(t,e,l){var a=ge();_n(t,e,l,a)}function _n(t,e,l,a){var n={lane:a,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Zi(t))Qs(e,n);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var c=e.lastRenderedState,s=i(c,l);if(n.hasEagerState=!0,n.eagerState=s,re(s,c))return Ai(t,e,n,0),yt===null&&zi(),!1}catch{}finally{}if(l=Cc(t,e,n,a),l!==null)return ie(l,t,a),Ls(l,e,a),!0}return!1}function hf(t,e,l,a){if(a={lane:2,revertLane:Vf(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Zi(t)){if(e)throw Error(o(479))}else e=Cc(t,l,a,2),e!==null&&ie(e,t,2)}function Zi(t){var e=t.alternate;return t===X||e!==null&&e===X}function Qs(t,e){Ua=Ri=!0;var l=t.pending;l===null?e.next=e:(e.next=l.next,l.next=e),t.pending=e}function Ls(t,e,l){if((l&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,l|=a,e.lanes=l,Kr(t,l)}}var wn={readContext:Lt,use:Gi,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt};wn.useEffectEvent=zt;var Zs={readContext:Lt,use:Gi,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:Ms,useImperativeHandle:function(t,e,l){l=l!=null?l.concat([t]):null,Qi(4194308,4,_s.bind(null,e,t),l)},useLayoutEffect:function(t,e){return Qi(4194308,4,t,e)},useInsertionEffect:function(t,e){Qi(4,2,t,e)},useMemo:function(t,e){var l=Kt();e=e===void 0?null:e;var a=t();if(ea){ol(!0);try{t()}finally{ol(!1)}}return l.memoizedState=[a,e],a},useReducer:function(t,e,l){var a=Kt();if(l!==void 0){var n=l(e);if(ea){ol(!0);try{l(e)}finally{ol(!1)}}}else n=e;return a.memoizedState=a.baseState=n,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},a.queue=t,t=t.dispatch=pm.bind(null,X,t),[a.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:function(t){t=uf(t);var e=t.queue,l=Xs.bind(null,X,e);return e.dispatch=l,[t.memoizedState,l]},useDebugValue:rf,useDeferredValue:function(t,e){var l=Kt();return of(l,t,e)},useTransition:function(){var t=uf(!1);return t=Hs.bind(null,X,t.queue,!0,!1),Kt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,l){var a=X,n=Kt();if(P){if(l===void 0)throw Error(o(407));l=l()}else{if(l=e(),yt===null)throw Error(o(349));($&127)!==0||ss(a,e,l)}n.memoizedState=l;var i={value:l,getSnapshot:e};return n.queue=i,Ms(hs.bind(null,a,i,t),[t]),a.flags|=2048,Ra(9,{destroy:void 0},ds.bind(null,a,i,l,e),null),l},useId:function(){var t=Kt(),e=yt.identifierPrefix;if(P){var l=Re,a=He;l=(a&~(1<<32-fe(a)-1)).toString(32)+l,e="_"+e+"R_"+l,l=qi++,0<l&&(e+="H"+l.toString(32)),e+="_"}else l=rm++,e="_"+e+"r_"+l.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:df,useFormState:js,useActionState:js,useOptimistic:function(t){var e=Kt();e.memoizedState=e.baseState=t;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=l,e=hf.bind(null,X,!0,l),l.dispatch=e,[t,e]},useMemoCache:lf,useCacheRefresh:function(){return Kt().memoizedState=gm.bind(null,X)},useEffectEvent:function(t){var e=Kt(),l={impl:t};return e.memoizedState=l,function(){if((ut&2)!==0)throw Error(o(440));return l.impl.apply(void 0,arguments)}}},mf={readContext:Lt,use:Gi,useCallback:Ns,useContext:Lt,useEffect:ff,useImperativeHandle:ws,useInsertionEffect:Cs,useLayoutEffect:Ds,useMemo:Bs,useReducer:Xi,useRef:Es,useState:function(){return Xi(Ie)},useDebugValue:rf,useDeferredValue:function(t,e){var l=Mt();return Us(l,dt.memoizedState,t,e)},useTransition:function(){var t=Xi(Ie)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:Dn(t),e]},useSyncExternalStore:os,useId:Ys,useHostTransitionStatus:df,useFormState:zs,useActionState:zs,useOptimistic:function(t,e){var l=Mt();return ps(l,dt,t,e)},useMemoCache:lf,useCacheRefresh:Gs};mf.useEffectEvent=Os;var Vs={readContext:Lt,use:Gi,useCallback:Ns,useContext:Lt,useEffect:ff,useImperativeHandle:ws,useInsertionEffect:Cs,useLayoutEffect:Ds,useMemo:Bs,useReducer:nf,useRef:Es,useState:function(){return nf(Ie)},useDebugValue:rf,useDeferredValue:function(t,e){var l=Mt();return dt===null?of(l,t,e):Us(l,dt.memoizedState,t,e)},useTransition:function(){var t=nf(Ie)[0],e=Mt().memoizedState;return[typeof t=="boolean"?t:Dn(t),e]},useSyncExternalStore:os,useId:Ys,useHostTransitionStatus:df,useFormState:Ts,useActionState:Ts,useOptimistic:function(t,e){var l=Mt();return dt!==null?ps(l,dt,t,e):(l.baseState=t,[t,l.queue.dispatch])},useMemoCache:lf,useCacheRefresh:Gs};Vs.useEffectEvent=Os;function gf(t,e,l,a){e=t.memoizedState,l=l(a,e),l=l==null?e:O({},e,l),t.memoizedState=l,t.lanes===0&&(t.updateQueue.baseState=l)}var pf={enqueueSetState:function(t,e,l){t=t._reactInternals;var a=ge(),n=vl(a);n.payload=e,l!=null&&(n.callback=l),e=bl(t,n,a),e!==null&&(ie(e,t,a),En(e,t,a))},enqueueReplaceState:function(t,e,l){t=t._reactInternals;var a=ge(),n=vl(a);n.tag=1,n.payload=e,l!=null&&(n.callback=l),e=bl(t,n,a),e!==null&&(ie(e,t,a),En(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var l=ge(),a=vl(l);a.tag=2,e!=null&&(a.callback=e),e=bl(t,a,l),e!==null&&(ie(e,t,l),En(e,t,l))}};function ks(t,e,l,a,n,i,c){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,c):e.prototype&&e.prototype.isPureReactComponent?!vn(l,a)||!vn(n,i):!0}function Ks(t,e,l,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(l,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(l,a),e.state!==t&&pf.enqueueReplaceState(e,e.state,null)}function la(t,e){var l=e;if("ref"in e){l={};for(var a in e)a!=="ref"&&(l[a]=e[a])}if(t=t.defaultProps){l===e&&(l=O({},l));for(var n in t)l[n]===void 0&&(l[n]=t[n])}return l}function Js(t){ji(t)}function $s(t){console.error(t)}function Ws(t){ji(t)}function Vi(t,e){try{var l=t.onUncaughtError;l(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function Fs(t,e,l){try{var a=t.onCaughtError;a(l.value,{componentStack:l.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function yf(t,e,l){return l=vl(l),l.tag=3,l.payload={element:null},l.callback=function(){Vi(t,e)},l}function Is(t){return t=vl(t),t.tag=3,t}function Ps(t,e,l,a){var n=l.type.getDerivedStateFromError;if(typeof n=="function"){var i=a.value;t.payload=function(){return n(i)},t.callback=function(){Fs(e,l,a)}}var c=l.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(t.callback=function(){Fs(e,l,a),typeof n!="function"&&(Tl===null?Tl=new Set([this]):Tl.add(this));var s=a.stack;this.componentDidCatch(a.value,{componentStack:s!==null?s:""})})}function ym(t,e,l,a,n){if(l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=l.alternate,e!==null&&Ca(e,l,n,!0),l=se.current,l!==null){switch(l.tag){case 31:case 13:return Te===null?au():l.alternate===null&&At===0&&(At=3),l.flags&=-257,l.flags|=65536,l.lanes=n,a===wi?l.flags|=16384:(e=l.updateQueue,e===null?l.updateQueue=new Set([a]):e.add(a),Qf(t,a,n)),!1;case 22:return l.flags|=65536,a===wi?l.flags|=16384:(e=l.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},l.updateQueue=e):(l=e.retryQueue,l===null?e.retryQueue=new Set([a]):l.add(a)),Qf(t,a,n)),!1}throw Error(o(435,l.tag))}return Qf(t,a,n),au(),!1}if(P)return e=se.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=n,a!==Uc&&(t=Error(o(422),{cause:a}),Sn(Se(t,l)))):(a!==Uc&&(e=Error(o(423),{cause:a}),Sn(Se(e,l))),t=t.current.alternate,t.flags|=65536,n&=-n,t.lanes|=n,a=Se(a,l),n=yf(t.stateNode,a,n),kc(t,n),At!==4&&(At=2)),!1;var i=Error(o(520),{cause:a});if(i=Se(i,l),Gn===null?Gn=[i]:Gn.push(i),At!==4&&(At=2),e===null)return!0;a=Se(a,l),l=e;do{switch(l.tag){case 3:return l.flags|=65536,t=n&-n,l.lanes|=t,t=yf(l.stateNode,a,t),kc(l,t),!1;case 1:if(e=l.type,i=l.stateNode,(l.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Tl===null||!Tl.has(i))))return l.flags|=65536,n&=-n,l.lanes|=n,n=Is(n),Ps(n,t,l,a),kc(l,n),!1}l=l.return}while(l!==null);return!1}var vf=Error(o(461)),_t=!1;function Zt(t,e,l,a){e.child=t===null?as(e,null,l,a):ta(e,t.child,l,a)}function t0(t,e,l,a,n){l=l.render;var i=e.ref;if("ref"in a){var c={};for(var s in a)s!=="ref"&&(c[s]=a[s])}else c=a;return Wl(e),a=Ic(t,e,l,c,i,n),s=Pc(),t!==null&&!_t?(tf(t,e,n),Pe(t,e,n)):(P&&s&&Nc(e),e.flags|=1,Zt(t,e,a,n),e.child)}function e0(t,e,l,a,n){if(t===null){var i=l.type;return typeof i=="function"&&!Dc(i)&&i.defaultProps===void 0&&l.compare===null?(e.tag=15,e.type=i,l0(t,e,i,a,n)):(t=Ei(l.type,null,a,e,e.mode,n),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!Ef(t,n)){var c=i.memoizedProps;if(l=l.compare,l=l!==null?l:vn,l(c,a)&&t.ref===e.ref)return Pe(t,e,n)}return e.flags|=1,t=Ke(i,a),t.ref=e.ref,t.return=e,e.child=t}function l0(t,e,l,a,n){if(t!==null){var i=t.memoizedProps;if(vn(i,a)&&t.ref===e.ref)if(_t=!1,e.pendingProps=a=i,Ef(t,n))(t.flags&131072)!==0&&(_t=!0);else return e.lanes=t.lanes,Pe(t,e,n)}return bf(t,e,l,a,n)}function a0(t,e,l,a){var n=a.children,i=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((e.flags&128)!==0){if(i=i!==null?i.baseLanes|l:l,t!==null){for(a=e.child=t.child,n=0;a!==null;)n=n|a.lanes|a.childLanes,a=a.sibling;a=n&~i}else a=0,e.child=null;return n0(t,e,i,l,a)}if((l&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&Di(e,i!==null?i.cachePool:null),i!==null?us(e,i):Jc(),cs(e);else return a=e.lanes=536870912,n0(t,e,i!==null?i.baseLanes|l:l,l,a)}else i!==null?(Di(e,i.cachePool),us(e,i),Sl(),e.memoizedState=null):(t!==null&&Di(e,null),Jc(),Sl());return Zt(t,e,n,l),e.child}function Nn(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function n0(t,e,l,a,n){var i=Qc();return i=i===null?null:{parent:Ct._currentValue,pool:i},e.memoizedState={baseLanes:l,cachePool:i},t!==null&&Di(e,null),Jc(),cs(e),t!==null&&Ca(t,e,a,!0),e.childLanes=n,null}function ki(t,e){return e=Ji({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function i0(t,e,l){return ta(e,t.child,null,l),t=ki(e,e.pendingProps),t.flags|=2,de(e),e.memoizedState=null,t}function vm(t,e,l){var a=e.pendingProps,n=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(P){if(a.mode==="hidden")return t=ki(e,a),e.lanes=536870912,Nn(null,t);if(Wc(e),(t=vt)?(t=yd(t,Ae),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:hl!==null?{id:He,overflow:Re}:null,retryLane:536870912,hydrationErrors:null},l=Qo(t),l.return=e,e.child=l,Qt=e,vt=null)):t=null,t===null)throw gl(e);return e.lanes=536870912,null}return ki(e,a)}var i=t.memoizedState;if(i!==null){var c=i.dehydrated;if(Wc(e),n)if(e.flags&256)e.flags&=-257,e=i0(t,e,l);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(_t||Ca(t,e,l,!1),n=(l&t.childLanes)!==0,_t||n){if(a=yt,a!==null&&(c=Jr(a,l),c!==0&&c!==i.retryLane))throw i.retryLane=c,kl(t,c),ie(a,t,c),vf;au(),e=i0(t,e,l)}else t=i.treeContext,vt=Ee(c.nextSibling),Qt=e,P=!0,ml=null,Ae=!1,t!==null&&Vo(e,t),e=ki(e,a),e.flags|=4096;return e}return t=Ke(t.child,{mode:a.mode,children:a.children}),t.ref=e.ref,e.child=t,t.return=e,t}function Ki(t,e){var l=e.ref;if(l===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(o(284));(t===null||t.ref!==l)&&(e.flags|=4194816)}}function bf(t,e,l,a,n){return Wl(e),l=Ic(t,e,l,a,void 0,n),a=Pc(),t!==null&&!_t?(tf(t,e,n),Pe(t,e,n)):(P&&a&&Nc(e),e.flags|=1,Zt(t,e,l,n),e.child)}function u0(t,e,l,a,n,i){return Wl(e),e.updateQueue=null,l=rs(e,a,l,n),fs(t),a=Pc(),t!==null&&!_t?(tf(t,e,i),Pe(t,e,i)):(P&&a&&Nc(e),e.flags|=1,Zt(t,e,l,i),e.child)}function c0(t,e,l,a,n){if(Wl(e),e.stateNode===null){var i=Ta,c=l.contextType;typeof c=="object"&&c!==null&&(i=Lt(c)),i=new l(a,i),e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pf,e.stateNode=i,i._reactInternals=e,i=e.stateNode,i.props=a,i.state=e.memoizedState,i.refs={},Zc(e),c=l.contextType,i.context=typeof c=="object"&&c!==null?Lt(c):Ta,i.state=e.memoizedState,c=l.getDerivedStateFromProps,typeof c=="function"&&(gf(e,l,c,a),i.state=e.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&pf.enqueueReplaceState(i,i.state,null),On(e,a,i,n),Mn(),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){i=e.stateNode;var s=e.memoizedProps,h=la(l,s);i.props=h;var v=i.context,z=l.contextType;c=Ta,typeof z=="object"&&z!==null&&(c=Lt(z));var E=l.getDerivedStateFromProps;z=typeof E=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=e.pendingProps!==s,z||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||v!==c)&&Ks(e,i,a,c),yl=!1;var b=e.memoizedState;i.state=b,On(e,a,i,n),Mn(),v=e.memoizedState,s||b!==v||yl?(typeof E=="function"&&(gf(e,l,E,a),v=e.memoizedState),(h=yl||ks(e,l,h,a,b,v,c))?(z||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(e.flags|=4194308)):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=v),i.props=a,i.state=v,i.context=c,a=h):(typeof i.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{i=e.stateNode,Vc(t,e),c=e.memoizedProps,z=la(l,c),i.props=z,E=e.pendingProps,b=i.context,v=l.contextType,h=Ta,typeof v=="object"&&v!==null&&(h=Lt(v)),s=l.getDerivedStateFromProps,(v=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==E||b!==h)&&Ks(e,i,a,h),yl=!1,b=e.memoizedState,i.state=b,On(e,a,i,n),Mn();var x=e.memoizedState;c!==E||b!==x||yl||t!==null&&t.dependencies!==null&&Oi(t.dependencies)?(typeof s=="function"&&(gf(e,l,s,a),x=e.memoizedState),(z=yl||ks(e,l,z,a,b,x,h)||t!==null&&t.dependencies!==null&&Oi(t.dependencies))?(v||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,x,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,x,h)),typeof i.componentDidUpdate=="function"&&(e.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=x),i.props=a,i.state=x,i.context=h,a=z):(typeof i.componentDidUpdate!="function"||c===t.memoizedProps&&b===t.memoizedState||(e.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&b===t.memoizedState||(e.flags|=1024),a=!1)}return i=a,Ki(t,e),a=(e.flags&128)!==0,i||a?(i=e.stateNode,l=a&&typeof l.getDerivedStateFromError!="function"?null:i.render(),e.flags|=1,t!==null&&a?(e.child=ta(e,t.child,null,n),e.child=ta(e,null,l,n)):Zt(t,e,l,n),e.memoizedState=i.state,t=e.child):t=Pe(t,e,n),t}function f0(t,e,l,a){return Jl(),e.flags|=256,Zt(t,e,l,a),e.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(t){return{baseLanes:t,cachePool:Fo()}}function jf(t,e,l){return t=t!==null?t.childLanes&~l:0,e&&(t|=me),t}function r0(t,e,l){var a=e.pendingProps,n=!1,i=(e.flags&128)!==0,c;if((c=i)||(c=t!==null&&t.memoizedState===null?!1:(Et.current&2)!==0),c&&(n=!0,e.flags&=-129),c=(e.flags&32)!==0,e.flags&=-33,t===null){if(P){if(n?xl(e):Sl(),(t=vt)?(t=yd(t,Ae),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:hl!==null?{id:He,overflow:Re}:null,retryLane:536870912,hydrationErrors:null},l=Qo(t),l.return=e,e.child=l,Qt=e,vt=null)):t=null,t===null)throw gl(e);return nr(t)?e.lanes=32:e.lanes=536870912,null}var s=a.children;return a=a.fallback,n?(Sl(),n=e.mode,s=Ji({mode:"hidden",children:s},n),a=Kl(a,n,l,null),s.return=e,a.return=e,s.sibling=a,e.child=s,a=e.child,a.memoizedState=Sf(l),a.childLanes=jf(t,c,l),e.memoizedState=xf,Nn(null,a)):(xl(e),zf(e,s))}var h=t.memoizedState;if(h!==null&&(s=h.dehydrated,s!==null)){if(i)e.flags&256?(xl(e),e.flags&=-257,e=Af(t,e,l)):e.memoizedState!==null?(Sl(),e.child=t.child,e.flags|=128,e=null):(Sl(),s=a.fallback,n=e.mode,a=Ji({mode:"visible",children:a.children},n),s=Kl(s,n,l,null),s.flags|=2,a.return=e,s.return=e,a.sibling=s,e.child=a,ta(e,t.child,null,l),a=e.child,a.memoizedState=Sf(l),a.childLanes=jf(t,c,l),e.memoizedState=xf,e=Nn(null,a));else if(xl(e),nr(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var v=c.dgst;c=v,a=Error(o(419)),a.stack="",a.digest=c,Sn({value:a,source:null,stack:null}),e=Af(t,e,l)}else if(_t||Ca(t,e,l,!1),c=(l&t.childLanes)!==0,_t||c){if(c=yt,c!==null&&(a=Jr(c,l),a!==0&&a!==h.retryLane))throw h.retryLane=a,kl(t,a),ie(c,t,a),vf;ar(s)||au(),e=Af(t,e,l)}else ar(s)?(e.flags|=192,e.child=t.child,e=null):(t=h.treeContext,vt=Ee(s.nextSibling),Qt=e,P=!0,ml=null,Ae=!1,t!==null&&Vo(e,t),e=zf(e,a.children),e.flags|=4096);return e}return n?(Sl(),s=a.fallback,n=e.mode,h=t.child,v=h.sibling,a=Ke(h,{mode:"hidden",children:a.children}),a.subtreeFlags=h.subtreeFlags&65011712,v!==null?s=Ke(v,s):(s=Kl(s,n,l,null),s.flags|=2),s.return=e,a.return=e,a.sibling=s,e.child=a,Nn(null,a),a=e.child,s=t.child.memoizedState,s===null?s=Sf(l):(n=s.cachePool,n!==null?(h=Ct._currentValue,n=n.parent!==h?{parent:h,pool:h}:n):n=Fo(),s={baseLanes:s.baseLanes|l,cachePool:n}),a.memoizedState=s,a.childLanes=jf(t,c,l),e.memoizedState=xf,Nn(t.child,a)):(xl(e),l=t.child,t=l.sibling,l=Ke(l,{mode:"visible",children:a.children}),l.return=e,l.sibling=null,t!==null&&(c=e.deletions,c===null?(e.deletions=[t],e.flags|=16):c.push(t)),e.child=l,e.memoizedState=null,l)}function zf(t,e){return e=Ji({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ji(t,e){return t=oe(22,t,null,e),t.lanes=0,t}function Af(t,e,l){return ta(e,t.child,null,l),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function o0(t,e,l){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),qc(t.return,e,l)}function Tf(t,e,l,a,n,i){var c=t.memoizedState;c===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:l,tailMode:n,treeForkCount:i}:(c.isBackwards=e,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=l,c.tailMode=n,c.treeForkCount=i)}function s0(t,e,l){var a=e.pendingProps,n=a.revealOrder,i=a.tail;a=a.children;var c=Et.current,s=(c&2)!==0;if(s?(c=c&1|2,e.flags|=128):c&=1,et(Et,c),Zt(t,e,a,l),a=P?xn:0,!s&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&o0(t,l,e);else if(t.tag===19)o0(t,l,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(n){case"forwards":for(l=e.child,n=null;l!==null;)t=l.alternate,t!==null&&Hi(t)===null&&(n=l),l=l.sibling;l=n,l===null?(n=e.child,e.child=null):(n=l.sibling,l.sibling=null),Tf(e,!1,n,l,i,a);break;case"backwards":case"unstable_legacy-backwards":for(l=null,n=e.child,e.child=null;n!==null;){if(t=n.alternate,t!==null&&Hi(t)===null){e.child=n;break}t=n.sibling,n.sibling=l,l=n,n=t}Tf(e,!0,l,null,i,a);break;case"together":Tf(e,!1,null,null,void 0,a);break;default:e.memoizedState=null}return e.child}function Pe(t,e,l){if(t!==null&&(e.dependencies=t.dependencies),Al|=e.lanes,(l&e.childLanes)===0)if(t!==null){if(Ca(t,e,l,!1),(l&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,l=Ke(t,t.pendingProps),e.child=l,l.return=e;t.sibling!==null;)t=t.sibling,l=l.sibling=Ke(t,t.pendingProps),l.return=e;l.sibling=null}return e.child}function Ef(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Oi(t)))}function bm(t,e,l){switch(e.tag){case 3:Ue(e,e.stateNode.containerInfo),pl(e,Ct,t.memoizedState.cache),Jl();break;case 27:case 5:Yl(e);break;case 4:Ue(e,e.stateNode.containerInfo);break;case 10:pl(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Wc(e),null;break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(xl(e),e.flags|=128,null):(l&e.child.childLanes)!==0?r0(t,e,l):(xl(e),t=Pe(t,e,l),t!==null?t.sibling:null);xl(e);break;case 19:var n=(t.flags&128)!==0;if(a=(l&e.childLanes)!==0,a||(Ca(t,e,l,!1),a=(l&e.childLanes)!==0),n){if(a)return s0(t,e,l);e.flags|=128}if(n=e.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),et(Et,Et.current),a)break;return null;case 22:return e.lanes=0,a0(t,e,l,e.pendingProps);case 24:pl(e,Ct,t.memoizedState.cache)}return Pe(t,e,l)}function d0(t,e,l){if(t!==null)if(t.memoizedProps!==e.pendingProps)_t=!0;else{if(!Ef(t,l)&&(e.flags&128)===0)return _t=!1,bm(t,e,l);_t=(t.flags&131072)!==0}else _t=!1,P&&(e.flags&1048576)!==0&&Zo(e,xn,e.index);switch(e.lanes=0,e.tag){case 16:t:{var a=e.pendingProps;if(t=Il(e.elementType),e.type=t,typeof t=="function")Dc(t)?(a=la(t,a),e.tag=1,e=c0(null,e,t,a,l)):(e.tag=0,e=bf(null,e,t,a,l));else{if(t!=null){var n=t.$$typeof;if(n===it){e.tag=11,e=t0(null,e,t,a,l);break t}else if(n===Y){e.tag=14,e=e0(null,e,t,a,l);break t}}throw e=ql(t)||t,Error(o(306,e,""))}}return e;case 0:return bf(t,e,e.type,e.pendingProps,l);case 1:return a=e.type,n=la(a,e.pendingProps),c0(t,e,a,n,l);case 3:t:{if(Ue(e,e.stateNode.containerInfo),t===null)throw Error(o(387));a=e.pendingProps;var i=e.memoizedState;n=i.element,Vc(t,e),On(e,a,null,l);var c=e.memoizedState;if(a=c.cache,pl(e,Ct,a),a!==i.cache&&Yc(e,[Ct],l,!0),Mn(),a=c.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:c.cache},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){e=f0(t,e,a,l);break t}else if(a!==n){n=Se(Error(o(424)),e),Sn(n),e=f0(t,e,a,l);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(vt=Ee(t.firstChild),Qt=e,P=!0,ml=null,Ae=!0,l=as(e,null,a,l),e.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling}else{if(Jl(),a===n){e=Pe(t,e,l);break t}Zt(t,e,a,l)}e=e.child}return e;case 26:return Ki(t,e),t===null?(l=zd(e.type,null,e.pendingProps,null))?e.memoizedState=l:P||(l=e.type,t=e.pendingProps,a=ou(Ft.current).createElement(l),a[Xt]=e,a[Pt]=t,Vt(a,l,t),Rt(a),e.stateNode=a):e.memoizedState=zd(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Yl(e),t===null&&P&&(a=e.stateNode=xd(e.type,e.pendingProps,Ft.current),Qt=e,Ae=!0,n=vt,Cl(e.type)?(ir=n,vt=Ee(a.firstChild)):vt=n),Zt(t,e,e.pendingProps.children,l),Ki(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&P&&((n=a=vt)&&(a=$m(a,e.type,e.pendingProps,Ae),a!==null?(e.stateNode=a,Qt=e,vt=Ee(a.firstChild),Ae=!1,n=!0):n=!1),n||gl(e)),Yl(e),n=e.type,i=e.pendingProps,c=t!==null?t.memoizedProps:null,a=i.children,tr(n,i)?a=null:c!==null&&tr(n,c)&&(e.flags|=32),e.memoizedState!==null&&(n=Ic(t,e,om,null,null,l),Jn._currentValue=n),Ki(t,e),Zt(t,e,a,l),e.child;case 6:return t===null&&P&&((t=l=vt)&&(l=Wm(l,e.pendingProps,Ae),l!==null?(e.stateNode=l,Qt=e,vt=null,t=!0):t=!1),t||gl(e)),null;case 13:return r0(t,e,l);case 4:return Ue(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ta(e,null,a,l):Zt(t,e,a,l),e.child;case 11:return t0(t,e,e.type,e.pendingProps,l);case 7:return Zt(t,e,e.pendingProps,l),e.child;case 8:return Zt(t,e,e.pendingProps.children,l),e.child;case 12:return Zt(t,e,e.pendingProps.children,l),e.child;case 10:return a=e.pendingProps,pl(e,e.type,a.value),Zt(t,e,a.children,l),e.child;case 9:return n=e.type._context,a=e.pendingProps.children,Wl(e),n=Lt(n),a=a(n),e.flags|=1,Zt(t,e,a,l),e.child;case 14:return e0(t,e,e.type,e.pendingProps,l);case 15:return l0(t,e,e.type,e.pendingProps,l);case 19:return s0(t,e,l);case 31:return vm(t,e,l);case 22:return a0(t,e,l,e.pendingProps);case 24:return Wl(e),a=Lt(Ct),t===null?(n=Qc(),n===null&&(n=yt,i=Gc(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=l),n=i),e.memoizedState={parent:a,cache:n},Zc(e),pl(e,Ct,n)):((t.lanes&l)!==0&&(Vc(t,e),On(e,null,null,l),Mn()),n=t.memoizedState,i=e.memoizedState,n.parent!==a?(n={parent:a,cache:a},e.memoizedState=n,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=n),pl(e,Ct,a)):(a=i.cache,pl(e,Ct,a),a!==n.cache&&Yc(e,[Ct],l,!0))),Zt(t,e,e.pendingProps.children,l),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function tl(t){t.flags|=4}function Mf(t,e,l,a,n){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(n&335544128)===n)if(t.stateNode.complete)t.flags|=8192;else if(Y0())t.flags|=8192;else throw Pl=wi,Lc}else t.flags&=-16777217}function h0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Od(e))if(Y0())t.flags|=8192;else throw Pl=wi,Lc}function $i(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Vr():536870912,t.lanes|=e,Xa|=e)}function Bn(t,e){if(!P)switch(t.tailMode){case"hidden":e=t.tail;for(var l=null;e!==null;)e.alternate!==null&&(l=e),e=e.sibling;l===null?t.tail=null:l.sibling=null;break;case"collapsed":l=t.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,l=0,a=0;if(e)for(var n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags&65011712,a|=n.flags&65011712,n.return=t,n=n.sibling;else for(n=t.child;n!==null;)l|=n.lanes|n.childLanes,a|=n.subtreeFlags,a|=n.flags,n.return=t,n=n.sibling;return t.subtreeFlags|=a,t.childLanes=l,e}function xm(t,e,l){var a=e.pendingProps;switch(Bc(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(e),null;case 1:return bt(e),null;case 3:return l=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),We(Ct),It(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?tl(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Hc())),bt(e),null;case 26:var n=e.type,i=e.memoizedState;return t===null?(tl(e),i!==null?(bt(e),h0(e,i)):(bt(e),Mf(e,n,null,a,l))):i?i!==t.memoizedState?(tl(e),bt(e),h0(e,i)):(bt(e),e.flags&=-16777217):(t=t.memoizedProps,t!==a&&tl(e),bt(e),Mf(e,n,t,a,l)),null;case 27:if(Le(e),l=Ft.current,n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&tl(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return bt(e),null}t=jt.current,Oa(e)?ko(e):(t=xd(n,a,l),e.stateNode=t,tl(e))}return bt(e),null;case 5:if(Le(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&tl(e);else{if(!a){if(e.stateNode===null)throw Error(o(166));return bt(e),null}if(i=jt.current,Oa(e))ko(e);else{var c=ou(Ft.current);switch(i){case 1:i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=c.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=c.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=c.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?c.createElement("select",{is:a.is}):c.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?c.createElement(n,{is:a.is}):c.createElement(n)}}i[Xt]=e,i[Pt]=a;t:for(c=e.child;c!==null;){if(c.tag===5||c.tag===6)i.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break t;for(;c.sibling===null;){if(c.return===null||c.return===e)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}e.stateNode=i;t:switch(Vt(i,n,a),n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break t;case"img":a=!0;break t;default:a=!1}a&&tl(e)}}return bt(e),Mf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,l),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&tl(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(o(166));if(t=Ft.current,Oa(e)){if(t=e.stateNode,l=e.memoizedProps,a=null,n=Qt,n!==null)switch(n.tag){case 27:case 5:a=n.memoizedProps}t[Xt]=e,t=!!(t.nodeValue===l||a!==null&&a.suppressHydrationWarning===!0||rd(t.nodeValue,l)),t||gl(e,!0)}else t=ou(t).createTextNode(a),t[Xt]=e,e.stateNode=t}return bt(e),null;case 31:if(l=e.memoizedState,t===null||t.memoizedState!==null){if(a=Oa(e),l!==null){if(t===null){if(!a)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[Xt]=e}else Jl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bt(e),t=!1}else l=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),t=!0;if(!t)return e.flags&256?(de(e),e):(de(e),null);if((e.flags&128)!==0)throw Error(o(558))}return bt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(n=Oa(e),a!==null&&a.dehydrated!==null){if(t===null){if(!n)throw Error(o(318));if(n=e.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Xt]=e}else Jl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;bt(e),n=!1}else n=Hc(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),n=!0;if(!n)return e.flags&256?(de(e),e):(de(e),null)}return de(e),(e.flags&128)!==0?(e.lanes=l,e):(l=a!==null,t=t!==null&&t.memoizedState!==null,l&&(a=e.child,n=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(n=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048)),l!==t&&l&&(e.child.flags|=8192),$i(e,e.updateQueue),bt(e),null);case 4:return It(),t===null&&$f(e.stateNode.containerInfo),bt(e),null;case 10:return We(e.type),bt(e),null;case 19:if(lt(Et),a=e.memoizedState,a===null)return bt(e),null;if(n=(e.flags&128)!==0,i=a.rendering,i===null)if(n)Bn(a,!1);else{if(At!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(i=Hi(t),i!==null){for(e.flags|=128,Bn(a,!1),t=i.updateQueue,e.updateQueue=t,$i(e,t),e.subtreeFlags=0,t=l,l=e.child;l!==null;)Xo(l,t),l=l.sibling;return et(Et,Et.current&1|2),P&&Je(e,a.treeForkCount),e.child}t=t.sibling}a.tail!==null&&ue()>tu&&(e.flags|=128,n=!0,Bn(a,!1),e.lanes=4194304)}else{if(!n)if(t=Hi(i),t!==null){if(e.flags|=128,n=!0,t=t.updateQueue,e.updateQueue=t,$i(e,t),Bn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!P)return bt(e),null}else 2*ue()-a.renderingStartTime>tu&&l!==536870912&&(e.flags|=128,n=!0,Bn(a,!1),e.lanes=4194304);a.isBackwards?(i.sibling=e.child,e.child=i):(t=a.last,t!==null?t.sibling=i:e.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ue(),t.sibling=null,l=Et.current,et(Et,n?l&1|2:l&1),P&&Je(e,a.treeForkCount),t):(bt(e),null);case 22:case 23:return de(e),$c(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(l&536870912)!==0&&(e.flags&128)===0&&(bt(e),e.subtreeFlags&6&&(e.flags|=8192)):bt(e),l=e.updateQueue,l!==null&&$i(e,l.retryQueue),l=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==l&&(e.flags|=2048),t!==null&&lt(Fl),null;case 24:return l=null,t!==null&&(l=t.memoizedState.cache),e.memoizedState.cache!==l&&(e.flags|=2048),We(Ct),bt(e),null;case 25:return null;case 30:return null}throw Error(o(156,e.tag))}function Sm(t,e){switch(Bc(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return We(Ct),It(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Le(e),null;case 31:if(e.memoizedState!==null){if(de(e),e.alternate===null)throw Error(o(340));Jl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(de(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Jl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(Et),null;case 4:return It(),null;case 10:return We(e.type),null;case 22:case 23:return de(e),$c(),t!==null&&lt(Fl),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return We(Ct),null;case 25:return null;default:return null}}function m0(t,e){switch(Bc(e),e.tag){case 3:We(Ct),It();break;case 26:case 27:case 5:Le(e);break;case 4:It();break;case 31:e.memoizedState!==null&&de(e);break;case 13:de(e);break;case 19:lt(Et);break;case 10:We(e.type);break;case 22:case 23:de(e),$c(),t!==null&&lt(Fl);break;case 24:We(Ct)}}function Un(t,e){try{var l=e.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var n=a.next;l=n;do{if((l.tag&t)===t){a=void 0;var i=l.create,c=l.inst;a=i(),c.destroy=a}l=l.next}while(l!==n)}}catch(s){ot(e,e.return,s)}}function jl(t,e,l){try{var a=e.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&t)===t){var c=a.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=e;var h=l,v=s;try{v()}catch(z){ot(n,h,z)}}}a=a.next}while(a!==i)}}catch(z){ot(e,e.return,z)}}function g0(t){var e=t.updateQueue;if(e!==null){var l=t.stateNode;try{is(e,l)}catch(a){ot(t,t.return,a)}}}function p0(t,e,l){l.props=la(t.type,t.memoizedProps),l.state=t.memoizedState;try{l.componentWillUnmount()}catch(a){ot(t,e,a)}}function Hn(t,e){try{var l=t.ref;if(l!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof l=="function"?t.refCleanup=l(a):l.current=a}}catch(n){ot(t,e,n)}}function qe(t,e){var l=t.ref,a=t.refCleanup;if(l!==null)if(typeof a=="function")try{a()}catch(n){ot(t,e,n)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(n){ot(t,e,n)}else l.current=null}function y0(t){var e=t.type,l=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":l.autoFocus&&a.focus();break t;case"img":l.src?a.src=l.src:l.srcSet&&(a.srcset=l.srcSet)}}catch(n){ot(t,t.return,n)}}function Of(t,e,l){try{var a=t.stateNode;Lm(a,t.type,l,e),a[Pt]=e}catch(n){ot(t,t.return,n)}}function v0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Cl(t.type)||t.tag===4}function Cf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||v0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Cl(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Df(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(t,e):(e=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,e.appendChild(t),l=l._reactRootContainer,l!=null||e.onclick!==null||(e.onclick=Ve));else if(a!==4&&(a===27&&Cl(t.type)&&(l=t.stateNode,e=null),t=t.child,t!==null))for(Df(t,e,l),t=t.sibling;t!==null;)Df(t,e,l),t=t.sibling}function Wi(t,e,l){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?l.insertBefore(t,e):l.appendChild(t);else if(a!==4&&(a===27&&Cl(t.type)&&(l=t.stateNode),t=t.child,t!==null))for(Wi(t,e,l),t=t.sibling;t!==null;)Wi(t,e,l),t=t.sibling}function b0(t){var e=t.stateNode,l=t.memoizedProps;try{for(var a=t.type,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e,a,l),e[Xt]=t,e[Pt]=l}catch(i){ot(t,t.return,i)}}var el=!1,wt=!1,_f=!1,x0=typeof WeakSet=="function"?WeakSet:Set,qt=null;function jm(t,e){if(t=t.containerInfo,If=yu,t=wo(t),zc(t)){if("selectionStart"in t)var l={start:t.selectionStart,end:t.selectionEnd};else t:{l=(l=t.ownerDocument)&&l.defaultView||window;var a=l.getSelection&&l.getSelection();if(a&&a.rangeCount!==0){l=a.anchorNode;var n=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{l.nodeType,i.nodeType}catch{l=null;break t}var c=0,s=-1,h=-1,v=0,z=0,E=t,b=null;e:for(;;){for(var x;E!==l||n!==0&&E.nodeType!==3||(s=c+n),E!==i||a!==0&&E.nodeType!==3||(h=c+a),E.nodeType===3&&(c+=E.nodeValue.length),(x=E.firstChild)!==null;)b=E,E=x;for(;;){if(E===t)break e;if(b===l&&++v===n&&(s=c),b===i&&++z===a&&(h=c),(x=E.nextSibling)!==null)break;E=b,b=E.parentNode}E=x}l=s===-1||h===-1?null:{start:s,end:h}}else l=null}l=l||{start:0,end:0}}else l=null;for(Pf={focusedElem:t,selectionRange:l},yu=!1,qt=e;qt!==null;)if(e=qt,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,qt=t;else for(;qt!==null;){switch(e=qt,i=e.alternate,t=e.flags,e.tag){case 0:if((t&4)!==0&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(l=0;l<t.length;l++)n=t[l],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,l=e,n=i.memoizedProps,i=i.memoizedState,a=l.stateNode;try{var _=la(l.type,n);t=a.getSnapshotBeforeUpdate(_,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(H){ot(l,l.return,H)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,l=t.nodeType,l===9)lr(t);else if(l===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":lr(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(o(163))}if(t=e.sibling,t!==null){t.return=e.return,qt=t;break}qt=e.return}}function S0(t,e,l){var a=l.flags;switch(l.tag){case 0:case 11:case 15:al(t,l),a&4&&Un(5,l);break;case 1:if(al(t,l),a&4)if(t=l.stateNode,e===null)try{t.componentDidMount()}catch(c){ot(l,l.return,c)}else{var n=la(l.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(n,e,t.__reactInternalSnapshotBeforeUpdate)}catch(c){ot(l,l.return,c)}}a&64&&g0(l),a&512&&Hn(l,l.return);break;case 3:if(al(t,l),a&64&&(t=l.updateQueue,t!==null)){if(e=null,l.child!==null)switch(l.child.tag){case 27:case 5:e=l.child.stateNode;break;case 1:e=l.child.stateNode}try{is(t,e)}catch(c){ot(l,l.return,c)}}break;case 27:e===null&&a&4&&b0(l);case 26:case 5:al(t,l),e===null&&a&4&&y0(l),a&512&&Hn(l,l.return);break;case 12:al(t,l);break;case 31:al(t,l),a&4&&A0(t,l);break;case 13:al(t,l),a&4&&T0(t,l),a&64&&(t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(l=_m.bind(null,l),Fm(t,l))));break;case 22:if(a=l.memoizedState!==null||el,!a){e=e!==null&&e.memoizedState!==null||wt,n=el;var i=wt;el=a,(wt=e)&&!i?nl(t,l,(l.subtreeFlags&8772)!==0):al(t,l),el=n,wt=i}break;case 30:break;default:al(t,l)}}function j0(t){var e=t.alternate;e!==null&&(t.alternate=null,j0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&uc(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var St=null,ee=!1;function ll(t,e,l){for(l=l.child;l!==null;)z0(t,e,l),l=l.sibling}function z0(t,e,l){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(un,l)}catch{}switch(l.tag){case 26:wt||qe(l,e),ll(t,e,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:wt||qe(l,e);var a=St,n=ee;Cl(l.type)&&(St=l.stateNode,ee=!1),ll(t,e,l),Vn(l.stateNode),St=a,ee=n;break;case 5:wt||qe(l,e);case 6:if(a=St,n=ee,St=null,ll(t,e,l),St=a,ee=n,St!==null)if(ee)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(l.stateNode)}catch(i){ot(l,e,i)}else try{St.removeChild(l.stateNode)}catch(i){ot(l,e,i)}break;case 18:St!==null&&(ee?(t=St,gd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,l.stateNode),$a(t)):gd(St,l.stateNode));break;case 4:a=St,n=ee,St=l.stateNode.containerInfo,ee=!0,ll(t,e,l),St=a,ee=n;break;case 0:case 11:case 14:case 15:jl(2,l,e),wt||jl(4,l,e),ll(t,e,l);break;case 1:wt||(qe(l,e),a=l.stateNode,typeof a.componentWillUnmount=="function"&&p0(l,e,a)),ll(t,e,l);break;case 21:ll(t,e,l);break;case 22:wt=(a=wt)||l.memoizedState!==null,ll(t,e,l),wt=a;break;default:ll(t,e,l)}}function A0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{$a(t)}catch(l){ot(e,e.return,l)}}}function T0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{$a(t)}catch(l){ot(e,e.return,l)}}function zm(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new x0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new x0),e;default:throw Error(o(435,t.tag))}}function Fi(t,e){var l=zm(t);e.forEach(function(a){if(!l.has(a)){l.add(a);var n=wm.bind(null,t,a);a.then(n,n)}})}function le(t,e){var l=e.deletions;if(l!==null)for(var a=0;a<l.length;a++){var n=l[a],i=t,c=e,s=c;t:for(;s!==null;){switch(s.tag){case 27:if(Cl(s.type)){St=s.stateNode,ee=!1;break t}break;case 5:St=s.stateNode,ee=!1;break t;case 3:case 4:St=s.stateNode.containerInfo,ee=!0;break t}s=s.return}if(St===null)throw Error(o(160));z0(i,c,n),St=null,ee=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)E0(e,t),e=e.sibling}var we=null;function E0(t,e){var l=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:le(e,t),ae(t),a&4&&(jl(3,t,t.return),Un(3,t),jl(5,t,t.return));break;case 1:le(e,t),ae(t),a&512&&(wt||l===null||qe(l,l.return)),a&64&&el&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(l=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=l===null?a:l.concat(a))));break;case 26:var n=we;if(le(e,t),ae(t),a&512&&(wt||l===null||qe(l,l.return)),a&4){var i=l!==null?l.memoizedState:null;if(a=t.memoizedState,l===null)if(a===null)if(t.stateNode===null){t:{a=t.type,l=t.memoizedProps,n=n.ownerDocument||n;e:switch(a){case"title":i=n.getElementsByTagName("title")[0],(!i||i[rn]||i[Xt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(a),n.head.insertBefore(i,n.querySelector("head > title"))),Vt(i,a,l),i[Xt]=t,Rt(i),a=i;break t;case"link":var c=Ed("link","href",n).get(a+(l.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&i.getAttribute("rel")===(l.rel==null?null:l.rel)&&i.getAttribute("title")===(l.title==null?null:l.title)&&i.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){c.splice(s,1);break e}}i=n.createElement(a),Vt(i,a,l),n.head.appendChild(i);break;case"meta":if(c=Ed("meta","content",n).get(a+(l.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(l.content==null?null:""+l.content)&&i.getAttribute("name")===(l.name==null?null:l.name)&&i.getAttribute("property")===(l.property==null?null:l.property)&&i.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&i.getAttribute("charset")===(l.charSet==null?null:l.charSet)){c.splice(s,1);break e}}i=n.createElement(a),Vt(i,a,l),n.head.appendChild(i);break;default:throw Error(o(468,a))}i[Xt]=t,Rt(i),a=i}t.stateNode=a}else Md(n,t.type,t.stateNode);else t.stateNode=Td(n,a,t.memoizedProps);else i!==a?(i===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):i.count--,a===null?Md(n,t.type,t.stateNode):Td(n,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Of(t,t.memoizedProps,l.memoizedProps)}break;case 27:le(e,t),ae(t),a&512&&(wt||l===null||qe(l,l.return)),l!==null&&a&4&&Of(t,t.memoizedProps,l.memoizedProps);break;case 5:if(le(e,t),ae(t),a&512&&(wt||l===null||qe(l,l.return)),t.flags&32){n=t.stateNode;try{va(n,"")}catch(_){ot(t,t.return,_)}}a&4&&t.stateNode!=null&&(n=t.memoizedProps,Of(t,n,l!==null?l.memoizedProps:n)),a&1024&&(_f=!0);break;case 6:if(le(e,t),ae(t),a&4){if(t.stateNode===null)throw Error(o(162));a=t.memoizedProps,l=t.stateNode;try{l.nodeValue=a}catch(_){ot(t,t.return,_)}}break;case 3:if(hu=null,n=we,we=su(e.containerInfo),le(e,t),we=n,ae(t),a&4&&l!==null&&l.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(_){ot(t,t.return,_)}_f&&(_f=!1,M0(t));break;case 4:a=we,we=su(t.stateNode.containerInfo),le(e,t),ae(t),we=a;break;case 12:le(e,t),ae(t);break;case 31:le(e,t),ae(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fi(t,a)));break;case 13:le(e,t),ae(t),t.child.flags&8192&&t.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(Pi=ue()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fi(t,a)));break;case 22:n=t.memoizedState!==null;var h=l!==null&&l.memoizedState!==null,v=el,z=wt;if(el=v||n,wt=z||h,le(e,t),wt=z,el=v,ae(t),a&8192)t:for(e=t.stateNode,e._visibility=n?e._visibility&-2:e._visibility|1,n&&(l===null||h||el||wt||aa(t)),l=null,e=t;;){if(e.tag===5||e.tag===26){if(l===null){h=l=e;try{if(i=h.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=h.stateNode;var E=h.memoizedProps.style,b=E!=null&&E.hasOwnProperty("display")?E.display:null;s.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(_){ot(h,h.return,_)}}}else if(e.tag===6){if(l===null){h=e;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(_){ot(h,h.return,_)}}}else if(e.tag===18){if(l===null){h=e;try{var x=h.stateNode;n?pd(x,!0):pd(h.stateNode,!1)}catch(_){ot(h,h.return,_)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;l===e&&(l=null),e=e.return}l===e&&(l=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(l=a.retryQueue,l!==null&&(a.retryQueue=null,Fi(t,l))));break;case 19:le(e,t),ae(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Fi(t,a)));break;case 30:break;case 21:break;default:le(e,t),ae(t)}}function ae(t){var e=t.flags;if(e&2){try{for(var l,a=t.return;a!==null;){if(v0(a)){l=a;break}a=a.return}if(l==null)throw Error(o(160));switch(l.tag){case 27:var n=l.stateNode,i=Cf(t);Wi(t,i,n);break;case 5:var c=l.stateNode;l.flags&32&&(va(c,""),l.flags&=-33);var s=Cf(t);Wi(t,s,c);break;case 3:case 4:var h=l.stateNode.containerInfo,v=Cf(t);Df(t,v,h);break;default:throw Error(o(161))}}catch(z){ot(t,t.return,z)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function M0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;M0(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function al(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)S0(t,e.alternate,e),e=e.sibling}function aa(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:jl(4,e,e.return),aa(e);break;case 1:qe(e,e.return);var l=e.stateNode;typeof l.componentWillUnmount=="function"&&p0(e,e.return,l),aa(e);break;case 27:Vn(e.stateNode);case 26:case 5:qe(e,e.return),aa(e);break;case 22:e.memoizedState===null&&aa(e);break;case 30:aa(e);break;default:aa(e)}t=t.sibling}}function nl(t,e,l){for(l=l&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,n=t,i=e,c=i.flags;switch(i.tag){case 0:case 11:case 15:nl(n,i,l),Un(4,i);break;case 1:if(nl(n,i,l),a=i,n=a.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(v){ot(a,a.return,v)}if(a=i,n=a.updateQueue,n!==null){var s=a.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)ns(h[n],s)}catch(v){ot(a,a.return,v)}}l&&c&64&&g0(i),Hn(i,i.return);break;case 27:b0(i);case 26:case 5:nl(n,i,l),l&&a===null&&c&4&&y0(i),Hn(i,i.return);break;case 12:nl(n,i,l);break;case 31:nl(n,i,l),l&&c&4&&A0(n,i);break;case 13:nl(n,i,l),l&&c&4&&T0(n,i);break;case 22:i.memoizedState===null&&nl(n,i,l),Hn(i,i.return);break;case 30:break;default:nl(n,i,l)}e=e.sibling}}function wf(t,e){var l=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==l&&(t!=null&&t.refCount++,l!=null&&jn(l))}function Nf(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&jn(t))}function Ne(t,e,l,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)O0(t,e,l,a),e=e.sibling}function O0(t,e,l,a){var n=e.flags;switch(e.tag){case 0:case 11:case 15:Ne(t,e,l,a),n&2048&&Un(9,e);break;case 1:Ne(t,e,l,a);break;case 3:Ne(t,e,l,a),n&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&jn(t)));break;case 12:if(n&2048){Ne(t,e,l,a),t=e.stateNode;try{var i=e.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(h){ot(e,e.return,h)}}else Ne(t,e,l,a);break;case 31:Ne(t,e,l,a);break;case 13:Ne(t,e,l,a);break;case 23:break;case 22:i=e.stateNode,c=e.alternate,e.memoizedState!==null?i._visibility&2?Ne(t,e,l,a):Rn(t,e):i._visibility&2?Ne(t,e,l,a):(i._visibility|=2,qa(t,e,l,a,(e.subtreeFlags&10256)!==0||!1)),n&2048&&wf(c,e);break;case 24:Ne(t,e,l,a),n&2048&&Nf(e.alternate,e);break;default:Ne(t,e,l,a)}}function qa(t,e,l,a,n){for(n=n&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var i=t,c=e,s=l,h=a,v=c.flags;switch(c.tag){case 0:case 11:case 15:qa(i,c,s,h,n),Un(8,c);break;case 23:break;case 22:var z=c.stateNode;c.memoizedState!==null?z._visibility&2?qa(i,c,s,h,n):Rn(i,c):(z._visibility|=2,qa(i,c,s,h,n)),n&&v&2048&&wf(c.alternate,c);break;case 24:qa(i,c,s,h,n),n&&v&2048&&Nf(c.alternate,c);break;default:qa(i,c,s,h,n)}e=e.sibling}}function Rn(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var l=t,a=e,n=a.flags;switch(a.tag){case 22:Rn(l,a),n&2048&&wf(a.alternate,a);break;case 24:Rn(l,a),n&2048&&Nf(a.alternate,a);break;default:Rn(l,a)}e=e.sibling}}var qn=8192;function Ya(t,e,l){if(t.subtreeFlags&qn)for(t=t.child;t!==null;)C0(t,e,l),t=t.sibling}function C0(t,e,l){switch(t.tag){case 26:Ya(t,e,l),t.flags&qn&&t.memoizedState!==null&&r2(l,we,t.memoizedState,t.memoizedProps);break;case 5:Ya(t,e,l);break;case 3:case 4:var a=we;we=su(t.stateNode.containerInfo),Ya(t,e,l),we=a;break;case 22:t.memoizedState===null&&(a=t.alternate,a!==null&&a.memoizedState!==null?(a=qn,qn=16777216,Ya(t,e,l),qn=a):Ya(t,e,l));break;default:Ya(t,e,l)}}function D0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Yn(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];qt=a,w0(a,t)}D0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)_0(t),t=t.sibling}function _0(t){switch(t.tag){case 0:case 11:case 15:Yn(t),t.flags&2048&&jl(9,t,t.return);break;case 3:Yn(t);break;case 12:Yn(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Ii(t)):Yn(t);break;default:Yn(t)}}function Ii(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];qt=a,w0(a,t)}D0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:jl(8,e,e.return),Ii(e);break;case 22:l=e.stateNode,l._visibility&2&&(l._visibility&=-3,Ii(e));break;default:Ii(e)}t=t.sibling}}function w0(t,e){for(;qt!==null;){var l=qt;switch(l.tag){case 0:case 11:case 15:jl(8,l,e);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var a=l.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:jn(l.memoizedState.cache)}if(a=l.child,a!==null)a.return=l,qt=a;else t:for(l=t;qt!==null;){a=qt;var n=a.sibling,i=a.return;if(j0(a),a===l){qt=null;break t}if(n!==null){n.return=i,qt=n;break t}qt=i}}}var Am={getCacheForType:function(t){var e=Lt(Ct),l=e.data.get(t);return l===void 0&&(l=t(),e.data.set(t,l)),l},cacheSignal:function(){return Lt(Ct).controller.signal}},Tm=typeof WeakMap=="function"?WeakMap:Map,ut=0,yt=null,K=null,$=0,rt=0,he=null,zl=!1,Ga=!1,Bf=!1,il=0,At=0,Al=0,na=0,Uf=0,me=0,Xa=0,Gn=null,ne=null,Hf=!1,Pi=0,N0=0,tu=1/0,eu=null,Tl=null,Bt=0,El=null,Qa=null,ul=0,Rf=0,qf=null,B0=null,Xn=0,Yf=null;function ge(){return(ut&2)!==0&&$!==0?$&-$:T.T!==null?Vf():$r()}function U0(){if(me===0)if(($&536870912)===0||P){var t=ri;ri<<=1,(ri&3932160)===0&&(ri=262144),me=t}else me=536870912;return t=se.current,t!==null&&(t.flags|=32),me}function ie(t,e,l){(t===yt&&(rt===2||rt===9)||t.cancelPendingCommit!==null)&&(La(t,0),Ml(t,$,me,!1)),fn(t,l),((ut&2)===0||t!==yt)&&(t===yt&&((ut&2)===0&&(na|=l),At===4&&Ml(t,$,me,!1)),Ye(t))}function H0(t,e,l){if((ut&6)!==0)throw Error(o(327));var a=!l&&(e&127)===0&&(e&t.expiredLanes)===0||cn(t,e),n=a?Om(t,e):Xf(t,e,!0),i=a;do{if(n===0){Ga&&!a&&Ml(t,e,0,!1);break}else{if(l=t.current.alternate,i&&!Em(l)){n=Xf(t,e,!1),i=!1;continue}if(n===2){if(i=e,t.errorRecoveryDisabledLanes&i)var c=0;else c=t.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){e=c;t:{var s=t;n=Gn;var h=s.current.memoizedState.isDehydrated;if(h&&(La(s,c).flags|=256),c=Xf(s,c,!1),c!==2){if(Bf&&!h){s.errorRecoveryDisabledLanes|=i,na|=i,n=4;break t}i=ne,ne=n,i!==null&&(ne===null?ne=i:ne.push.apply(ne,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){La(t,0),Ml(t,e,0,!0);break}t:{switch(a=t,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e)break;case 6:Ml(a,e,me,!zl);break t;case 2:ne=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(n=Pi+300-ue(),10<n)){if(Ml(a,e,me,!zl),si(a,0,!0)!==0)break t;ul=e,a.timeoutHandle=hd(R0.bind(null,a,l,ne,eu,Hf,e,me,na,Xa,zl,i,"Throttled",-0,0),n);break t}R0(a,l,ne,eu,Hf,e,me,na,Xa,zl,i,null,-0,0)}}break}while(!0);Ye(t)}function R0(t,e,l,a,n,i,c,s,h,v,z,E,b,x){if(t.timeoutHandle=-1,E=e.subtreeFlags,E&8192||(E&16785408)===16785408){E={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ve},C0(e,i,E);var _=(i&62914560)===i?Pi-ue():(i&4194048)===i?N0-ue():0;if(_=o2(E,_),_!==null){ul=i,t.cancelPendingCommit=_(V0.bind(null,t,e,i,l,a,n,c,s,h,z,E,null,b,x)),Ml(t,i,c,!v);return}}V0(t,e,i,l,a,n,c,s,h)}function Em(t){for(var e=t;;){var l=e.tag;if((l===0||l===11||l===15)&&e.flags&16384&&(l=e.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var a=0;a<l.length;a++){var n=l[a],i=n.getSnapshot;n=n.value;try{if(!re(i(),n))return!1}catch{return!1}}if(l=e.child,e.subtreeFlags&16384&&l!==null)l.return=e,e=l;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ml(t,e,l,a){e&=~Uf,e&=~na,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var n=e;0<n;){var i=31-fe(n),c=1<<i;a[i]=-1,n&=~c}l!==0&&kr(t,l,e)}function lu(){return(ut&6)===0?(Qn(0),!1):!0}function Gf(){if(K!==null){if(rt===0)var t=K.return;else t=K,$e=$l=null,ef(t),Na=null,An=0,t=K;for(;t!==null;)m0(t.alternate,t),t=t.return;K=null}}function La(t,e){var l=t.timeoutHandle;l!==-1&&(t.timeoutHandle=-1,km(l)),l=t.cancelPendingCommit,l!==null&&(t.cancelPendingCommit=null,l()),ul=0,Gf(),yt=t,K=l=Ke(t.current,null),$=e,rt=0,he=null,zl=!1,Ga=cn(t,e),Bf=!1,Xa=me=Uf=na=Al=At=0,ne=Gn=null,Hf=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var n=31-fe(a),i=1<<n;e|=t[n],a&=~i}return il=e,zi(),l}function q0(t,e){X=null,T.H=wn,e===wa||e===_i?(e=ts(),rt=3):e===Lc?(e=ts(),rt=4):rt=e===vf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,he=e,K===null&&(At=1,Vi(t,Se(e,t.current)))}function Y0(){var t=se.current;return t===null?!0:($&4194048)===$?Te===null:($&62914560)===$||($&536870912)!==0?t===Te:!1}function G0(){var t=T.H;return T.H=wn,t===null?wn:t}function X0(){var t=T.A;return T.A=Am,t}function au(){At=4,zl||($&4194048)!==$&&se.current!==null||(Ga=!0),(Al&134217727)===0&&(na&134217727)===0||yt===null||Ml(yt,$,me,!1)}function Xf(t,e,l){var a=ut;ut|=2;var n=G0(),i=X0();(yt!==t||$!==e)&&(eu=null,La(t,e)),e=!1;var c=At;t:do try{if(rt!==0&&K!==null){var s=K,h=he;switch(rt){case 8:Gf(),c=6;break t;case 3:case 2:case 9:case 6:se.current===null&&(e=!0);var v=rt;if(rt=0,he=null,Za(t,s,h,v),l&&Ga){c=0;break t}break;default:v=rt,rt=0,he=null,Za(t,s,h,v)}}Mm(),c=At;break}catch(z){q0(t,z)}while(!0);return e&&t.shellSuspendCounter++,$e=$l=null,ut=a,T.H=n,T.A=i,K===null&&(yt=null,$=0,zi()),c}function Mm(){for(;K!==null;)Q0(K)}function Om(t,e){var l=ut;ut|=2;var a=G0(),n=X0();yt!==t||$!==e?(eu=null,tu=ue()+500,La(t,e)):Ga=cn(t,e);t:do try{if(rt!==0&&K!==null){e=K;var i=he;e:switch(rt){case 1:rt=0,he=null,Za(t,e,i,1);break;case 2:case 9:if(Io(i)){rt=0,he=null,L0(e);break}e=function(){rt!==2&&rt!==9||yt!==t||(rt=7),Ye(t)},i.then(e,e);break t;case 3:rt=7;break t;case 4:rt=5;break t;case 7:Io(i)?(rt=0,he=null,L0(e)):(rt=0,he=null,Za(t,e,i,7));break;case 5:var c=null;switch(K.tag){case 26:c=K.memoizedState;case 5:case 27:var s=K;if(c?Od(c):s.stateNode.complete){rt=0,he=null;var h=s.sibling;if(h!==null)K=h;else{var v=s.return;v!==null?(K=v,nu(v)):K=null}break e}}rt=0,he=null,Za(t,e,i,5);break;case 6:rt=0,he=null,Za(t,e,i,6);break;case 8:Gf(),At=6;break t;default:throw Error(o(462))}}Cm();break}catch(z){q0(t,z)}while(!0);return $e=$l=null,T.H=a,T.A=n,ut=l,K!==null?0:(yt=null,$=0,zi(),At)}function Cm(){for(;K!==null&&!I1();)Q0(K)}function Q0(t){var e=d0(t.alternate,t,il);t.memoizedProps=t.pendingProps,e===null?nu(t):K=e}function L0(t){var e=t,l=e.alternate;switch(e.tag){case 15:case 0:e=u0(l,e,e.pendingProps,e.type,void 0,$);break;case 11:e=u0(l,e,e.pendingProps,e.type.render,e.ref,$);break;case 5:ef(e);default:m0(l,e),e=K=Xo(e,il),e=d0(l,e,il)}t.memoizedProps=t.pendingProps,e===null?nu(t):K=e}function Za(t,e,l,a){$e=$l=null,ef(e),Na=null,An=0;var n=e.return;try{if(ym(t,n,e,l,$)){At=1,Vi(t,Se(l,t.current)),K=null;return}}catch(i){if(n!==null)throw K=n,i;At=1,Vi(t,Se(l,t.current)),K=null;return}e.flags&32768?(P||a===1?t=!0:Ga||($&536870912)!==0?t=!1:(zl=t=!0,(a===2||a===9||a===3||a===6)&&(a=se.current,a!==null&&a.tag===13&&(a.flags|=16384))),Z0(e,t)):nu(e)}function nu(t){var e=t;do{if((e.flags&32768)!==0){Z0(e,zl);return}t=e.return;var l=xm(e.alternate,e,il);if(l!==null){K=l;return}if(e=e.sibling,e!==null){K=e;return}K=e=t}while(e!==null);At===0&&(At=5)}function Z0(t,e){do{var l=Sm(t.alternate,t);if(l!==null){l.flags&=32767,K=l;return}if(l=t.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!e&&(t=t.sibling,t!==null)){K=t;return}K=t=l}while(t!==null);At=6,K=null}function V0(t,e,l,a,n,i,c,s,h){t.cancelPendingCommit=null;do iu();while(Bt!==0);if((ut&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));if(i=e.lanes|e.childLanes,i|=Oc,fh(t,l,i,c,s,h),t===yt&&(K=yt=null,$=0),Qa=e,El=t,ul=l,Rf=i,qf=n,B0=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Nm(ci,function(){return W0(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=T.T,T.T=null,n=C.p,C.p=2,c=ut,ut|=4;try{jm(t,e,l)}finally{ut=c,C.p=n,T.T=a}}Bt=1,k0(),K0(),J0()}}function k0(){if(Bt===1){Bt=0;var t=El,e=Qa,l=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||l){l=T.T,T.T=null;var a=C.p;C.p=2;var n=ut;ut|=4;try{E0(e,t);var i=Pf,c=wo(t.containerInfo),s=i.focusedElem,h=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&_o(s.ownerDocument.documentElement,s)){if(h!==null&&zc(s)){var v=h.start,z=h.end;if(z===void 0&&(z=v),"selectionStart"in s)s.selectionStart=v,s.selectionEnd=Math.min(z,s.value.length);else{var E=s.ownerDocument||document,b=E&&E.defaultView||window;if(b.getSelection){var x=b.getSelection(),_=s.textContent.length,H=Math.min(h.start,_),mt=h.end===void 0?H:Math.min(h.end,_);!x.extend&&H>mt&&(c=mt,mt=H,H=c);var p=Do(s,H),m=Do(s,mt);if(p&&m&&(x.rangeCount!==1||x.anchorNode!==p.node||x.anchorOffset!==p.offset||x.focusNode!==m.node||x.focusOffset!==m.offset)){var y=E.createRange();y.setStart(p.node,p.offset),x.removeAllRanges(),H>mt?(x.addRange(y),x.extend(m.node,m.offset)):(y.setEnd(m.node,m.offset),x.addRange(y))}}}}for(E=[],x=s;x=x.parentNode;)x.nodeType===1&&E.push({element:x,left:x.scrollLeft,top:x.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<E.length;s++){var A=E[s];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}yu=!!If,Pf=If=null}finally{ut=n,C.p=a,T.T=l}}t.current=e,Bt=2}}function K0(){if(Bt===2){Bt=0;var t=El,e=Qa,l=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||l){l=T.T,T.T=null;var a=C.p;C.p=2;var n=ut;ut|=4;try{S0(t,e.alternate,e)}finally{ut=n,C.p=a,T.T=l}}Bt=3}}function J0(){if(Bt===4||Bt===3){Bt=0,P1();var t=El,e=Qa,l=ul,a=B0;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Bt=5:(Bt=0,Qa=El=null,$0(t,t.pendingLanes));var n=t.pendingLanes;if(n===0&&(Tl=null),nc(l),e=e.stateNode,ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(un,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=T.T,n=C.p,C.p=2,T.T=null;try{for(var i=t.onRecoverableError,c=0;c<a.length;c++){var s=a[c];i(s.value,{componentStack:s.stack})}}finally{T.T=e,C.p=n}}(ul&3)!==0&&iu(),Ye(t),n=t.pendingLanes,(l&261930)!==0&&(n&42)!==0?t===Yf?Xn++:(Xn=0,Yf=t):Xn=0,Qn(0)}}function $0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,jn(e)))}function iu(){return k0(),K0(),J0(),W0()}function W0(){if(Bt!==5)return!1;var t=El,e=Rf;Rf=0;var l=nc(ul),a=T.T,n=C.p;try{C.p=32>l?32:l,T.T=null,l=qf,qf=null;var i=El,c=ul;if(Bt=0,Qa=El=null,ul=0,(ut&6)!==0)throw Error(o(331));var s=ut;if(ut|=4,_0(i.current),O0(i,i.current,c,l),ut=s,Qn(0,!1),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(un,i)}catch{}return!0}finally{C.p=n,T.T=a,$0(t,e)}}function F0(t,e,l){e=Se(l,e),e=yf(t.stateNode,e,2),t=bl(t,e,2),t!==null&&(fn(t,2),Ye(t))}function ot(t,e,l){if(t.tag===3)F0(t,t,l);else for(;e!==null;){if(e.tag===3){F0(e,t,l);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Tl===null||!Tl.has(a))){t=Se(l,t),l=Is(2),a=bl(e,l,2),a!==null&&(Ps(l,a,e,t),fn(a,2),Ye(a));break}}e=e.return}}function Qf(t,e,l){var a=t.pingCache;if(a===null){a=t.pingCache=new Tm;var n=new Set;a.set(e,n)}else n=a.get(e),n===void 0&&(n=new Set,a.set(e,n));n.has(l)||(Bf=!0,n.add(l),t=Dm.bind(null,t,e,l),e.then(t,t))}function Dm(t,e,l){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&l,t.warmLanes&=~l,yt===t&&($&l)===l&&(At===4||At===3&&($&62914560)===$&&300>ue()-Pi?(ut&2)===0&&La(t,0):Uf|=l,Xa===$&&(Xa=0)),Ye(t)}function I0(t,e){e===0&&(e=Vr()),t=kl(t,e),t!==null&&(fn(t,e),Ye(t))}function _m(t){var e=t.memoizedState,l=0;e!==null&&(l=e.retryLane),I0(t,l)}function wm(t,e){var l=0;switch(t.tag){case 31:case 13:var a=t.stateNode,n=t.memoizedState;n!==null&&(l=n.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(e),I0(t,l)}function Nm(t,e){return tc(t,e)}var uu=null,Va=null,Lf=!1,cu=!1,Zf=!1,Ol=0;function Ye(t){t!==Va&&t.next===null&&(Va===null?uu=Va=t:Va=Va.next=t),cu=!0,Lf||(Lf=!0,Um())}function Qn(t,e){if(!Zf&&cu){Zf=!0;do for(var l=!1,a=uu;a!==null;){if(t!==0){var n=a.pendingLanes;if(n===0)var i=0;else{var c=a.suspendedLanes,s=a.pingedLanes;i=(1<<31-fe(42|t)+1)-1,i&=n&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(l=!0,ld(a,i))}else i=$,i=si(a,a===yt?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(i&3)===0||cn(a,i)||(l=!0,ld(a,i));a=a.next}while(l);Zf=!1}}function Bm(){P0()}function P0(){cu=Lf=!1;var t=0;Ol!==0&&Vm()&&(t=Ol);for(var e=ue(),l=null,a=uu;a!==null;){var n=a.next,i=td(a,e);i===0?(a.next=null,l===null?uu=n:l.next=n,n===null&&(Va=l)):(l=a,(t!==0||(i&3)!==0)&&(cu=!0)),a=n}Bt!==0&&Bt!==5||Qn(t),Ol!==0&&(Ol=0)}function td(t,e){for(var l=t.suspendedLanes,a=t.pingedLanes,n=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var c=31-fe(i),s=1<<c,h=n[c];h===-1?((s&l)===0||(s&a)!==0)&&(n[c]=ch(s,e)):h<=e&&(t.expiredLanes|=s),i&=~s}if(e=yt,l=$,l=si(t,t===e?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,l===0||t===e&&(rt===2||rt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&ec(a),t.callbackNode=null,t.callbackPriority=0;if((l&3)===0||cn(t,l)){if(e=l&-l,e===t.callbackPriority)return e;switch(a!==null&&ec(a),nc(l)){case 2:case 8:l=Lr;break;case 32:l=ci;break;case 268435456:l=Zr;break;default:l=ci}return a=ed.bind(null,t),l=tc(l,a),t.callbackPriority=e,t.callbackNode=l,e}return a!==null&&a!==null&&ec(a),t.callbackPriority=2,t.callbackNode=null,2}function ed(t,e){if(Bt!==0&&Bt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var l=t.callbackNode;if(iu()&&t.callbackNode!==l)return null;var a=$;return a=si(t,t===yt?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(H0(t,a,e),td(t,ue()),t.callbackNode!=null&&t.callbackNode===l?ed.bind(null,t):null)}function ld(t,e){if(iu())return null;H0(t,e,!0)}function Um(){Km(function(){(ut&6)!==0?tc(Qr,Bm):P0()})}function Vf(){if(Ol===0){var t=Da;t===0&&(t=fi,fi<<=1,(fi&261888)===0&&(fi=256)),Ol=t}return Ol}function ad(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gi(""+t)}function nd(t,e){var l=e.ownerDocument.createElement("input");return l.name=e.name,l.value=e.value,t.id&&l.setAttribute("form",t.id),e.parentNode.insertBefore(l,e),t=new FormData(t),l.parentNode.removeChild(l),t}function Hm(t,e,l,a,n){if(e==="submit"&&l&&l.stateNode===n){var i=ad((n[Pt]||null).action),c=a.submitter;c&&(e=(e=c[Pt]||null)?ad(e.formAction):c.getAttribute("formAction"),e!==null&&(i=e,c=null));var s=new bi("action","action",null,a,n);t.push({event:s,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Ol!==0){var h=c?nd(n,c):new FormData(n);sf(l,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=c?nd(n,c):new FormData(n),sf(l,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var kf=0;kf<Mc.length;kf++){var Kf=Mc[kf],Rm=Kf.toLowerCase(),qm=Kf[0].toUpperCase()+Kf.slice(1);_e(Rm,"on"+qm)}_e(Uo,"onAnimationEnd"),_e(Ho,"onAnimationIteration"),_e(Ro,"onAnimationStart"),_e("dblclick","onDoubleClick"),_e("focusin","onFocus"),_e("focusout","onBlur"),_e(tm,"onTransitionRun"),_e(em,"onTransitionStart"),_e(lm,"onTransitionCancel"),_e(qo,"onTransitionEnd"),pa("onMouseEnter",["mouseout","mouseover"]),pa("onMouseLeave",["mouseout","mouseover"]),pa("onPointerEnter",["pointerout","pointerover"]),pa("onPointerLeave",["pointerout","pointerover"]),Ql("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ql("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ql("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ql("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ql("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ln="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ln));function id(t,e){e=(e&4)!==0;for(var l=0;l<t.length;l++){var a=t[l],n=a.event;a=a.listeners;t:{var i=void 0;if(e)for(var c=a.length-1;0<=c;c--){var s=a[c],h=s.instance,v=s.currentTarget;if(s=s.listener,h!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=v;try{i(n)}catch(z){ji(z)}n.currentTarget=null,i=h}else for(c=0;c<a.length;c++){if(s=a[c],h=s.instance,v=s.currentTarget,s=s.listener,h!==i&&n.isPropagationStopped())break t;i=s,n.currentTarget=v;try{i(n)}catch(z){ji(z)}n.currentTarget=null,i=h}}}}function J(t,e){var l=e[ic];l===void 0&&(l=e[ic]=new Set);var a=t+"__bubble";l.has(a)||(ud(e,t,2,!1),l.add(a))}function Jf(t,e,l){var a=0;e&&(a|=4),ud(l,t,a,e)}var fu="_reactListening"+Math.random().toString(36).slice(2);function $f(t){if(!t[fu]){t[fu]=!0,Ir.forEach(function(l){l!=="selectionchange"&&(Ym.has(l)||Jf(l,!1,t),Jf(l,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fu]||(e[fu]=!0,Jf("selectionchange",!1,e))}}function ud(t,e,l,a){switch(Ud(e)){case 2:var n=h2;break;case 8:n=m2;break;default:n=or}l=n.bind(null,e,l,t),n=void 0,!mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(n=!0),a?n!==void 0?t.addEventListener(e,l,{capture:!0,passive:n}):t.addEventListener(e,l,!0):n!==void 0?t.addEventListener(e,l,{passive:n}):t.addEventListener(e,l,!1)}function Wf(t,e,l,a,n){var i=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var c=a.tag;if(c===3||c===4){var s=a.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=a.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=ha(s),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){a=i=c;continue t}s=s.parentNode}}a=a.return}oo(function(){var v=i,z=dc(l),E=[];t:{var b=Yo.get(t);if(b!==void 0){var x=bi,_=t;switch(t){case"keypress":if(yi(l)===0)break t;case"keydown":case"keyup":x=wh;break;case"focusin":_="focus",x=vc;break;case"focusout":_="blur",x=vc;break;case"beforeblur":case"afterblur":x=vc;break;case"click":if(l.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=mo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=xh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Uh;break;case Uo:case Ho:case Ro:x=zh;break;case qo:x=Rh;break;case"scroll":case"scrollend":x=vh;break;case"wheel":x=Yh;break;case"copy":case"cut":case"paste":x=Th;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=po;break;case"toggle":case"beforetoggle":x=Xh}var H=(e&4)!==0,mt=!H&&(t==="scroll"||t==="scrollend"),p=H?b!==null?b+"Capture":null:b;H=[];for(var m=v,y;m!==null;){var A=m;if(y=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||y===null||p===null||(A=sn(m,p),A!=null&&H.push(Zn(m,A,y))),mt)break;m=m.return}0<H.length&&(b=new x(b,_,null,l,z),E.push({event:b,listeners:H}))}}if((e&7)===0){t:{if(b=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",b&&l!==sc&&(_=l.relatedTarget||l.fromElement)&&(ha(_)||_[da]))break t;if((x||b)&&(b=z.window===z?z:(b=z.ownerDocument)?b.defaultView||b.parentWindow:window,x?(_=l.relatedTarget||l.toElement,x=v,_=_?ha(_):null,_!==null&&(mt=S(_),H=_.tag,_!==mt||H!==5&&H!==27&&H!==6)&&(_=null)):(x=null,_=v),x!==_)){if(H=mo,A="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(H=po,A="onPointerLeave",p="onPointerEnter",m="pointer"),mt=x==null?b:on(x),y=_==null?b:on(_),b=new H(A,m+"leave",x,l,z),b.target=mt,b.relatedTarget=y,A=null,ha(z)===v&&(H=new H(p,m+"enter",_,l,z),H.target=y,H.relatedTarget=mt,A=H),mt=A,x&&_)e:{for(H=Gm,p=x,m=_,y=0,A=p;A;A=H(A))y++;A=0;for(var U=m;U;U=H(U))A++;for(;0<y-A;)p=H(p),y--;for(;0<A-y;)m=H(m),A--;for(;y--;){if(p===m||m!==null&&p===m.alternate){H=p;break e}p=H(p),m=H(m)}H=null}else H=null;x!==null&&cd(E,b,x,H,!1),_!==null&&mt!==null&&cd(E,mt,_,H,!0)}}t:{if(b=v?on(v):window,x=b.nodeName&&b.nodeName.toLowerCase(),x==="select"||x==="input"&&b.type==="file")var at=Ao;else if(jo(b))if(To)at=Fh;else{at=$h;var w=Jh}else x=b.nodeName,!x||x.toLowerCase()!=="input"||b.type!=="checkbox"&&b.type!=="radio"?v&&oc(v.elementType)&&(at=Ao):at=Wh;if(at&&(at=at(t,v))){zo(E,at,l,z);break t}w&&w(t,b,v),t==="focusout"&&v&&b.type==="number"&&v.memoizedProps.value!=null&&rc(b,"number",b.value)}switch(w=v?on(v):window,t){case"focusin":(jo(w)||w.contentEditable==="true")&&(ja=w,Ac=v,bn=null);break;case"focusout":bn=Ac=ja=null;break;case"mousedown":Tc=!0;break;case"contextmenu":case"mouseup":case"dragend":Tc=!1,No(E,l,z);break;case"selectionchange":if(Ph)break;case"keydown":case"keyup":No(E,l,z)}var L;if(xc)t:{switch(t){case"compositionstart":var W="onCompositionStart";break t;case"compositionend":W="onCompositionEnd";break t;case"compositionupdate":W="onCompositionUpdate";break t}W=void 0}else Sa?xo(t,l)&&(W="onCompositionEnd"):t==="keydown"&&l.keyCode===229&&(W="onCompositionStart");W&&(yo&&l.locale!=="ko"&&(Sa||W!=="onCompositionStart"?W==="onCompositionEnd"&&Sa&&(L=so()):(dl=z,gc="value"in dl?dl.value:dl.textContent,Sa=!0)),w=ru(v,W),0<w.length&&(W=new go(W,t,null,l,z),E.push({event:W,listeners:w}),L?W.data=L:(L=So(l),L!==null&&(W.data=L)))),(L=Lh?Zh(t,l):Vh(t,l))&&(W=ru(v,"onBeforeInput"),0<W.length&&(w=new go("onBeforeInput","beforeinput",null,l,z),E.push({event:w,listeners:W}),w.data=L)),Hm(E,t,v,l,z)}id(E,e)})}function Zn(t,e,l){return{instance:t,listener:e,currentTarget:l}}function ru(t,e){for(var l=e+"Capture",a=[];t!==null;){var n=t,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=sn(t,l),n!=null&&a.unshift(Zn(t,n,i)),n=sn(t,e),n!=null&&a.push(Zn(t,n,i))),t.tag===3)return a;t=t.return}return[]}function Gm(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function cd(t,e,l,a,n){for(var i=e._reactName,c=[];l!==null&&l!==a;){var s=l,h=s.alternate,v=s.stateNode;if(s=s.tag,h!==null&&h===a)break;s!==5&&s!==26&&s!==27||v===null||(h=v,n?(v=sn(l,i),v!=null&&c.unshift(Zn(l,v,h))):n||(v=sn(l,i),v!=null&&c.push(Zn(l,v,h)))),l=l.return}c.length!==0&&t.push({event:e,listeners:c})}var Xm=/\r\n?/g,Qm=/\u0000|\uFFFD/g;function fd(t){return(typeof t=="string"?t:""+t).replace(Xm,`
`).replace(Qm,"")}function rd(t,e){return e=fd(e),fd(t)===e}function ht(t,e,l,a,n,i){switch(l){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||va(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&va(t,""+a);break;case"className":hi(t,"class",a);break;case"tabIndex":hi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":hi(t,l,a);break;case"style":fo(t,a,i);break;case"data":if(e!=="object"){hi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||l!=="href")){t.removeAttribute(l);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=gi(""+a),t.setAttribute(l,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(l==="formAction"?(e!=="input"&&ht(t,e,"name",n.name,n,null),ht(t,e,"formEncType",n.formEncType,n,null),ht(t,e,"formMethod",n.formMethod,n,null),ht(t,e,"formTarget",n.formTarget,n,null)):(ht(t,e,"encType",n.encType,n,null),ht(t,e,"method",n.method,n,null),ht(t,e,"target",n.target,n,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(l);break}a=gi(""+a),t.setAttribute(l,a);break;case"onClick":a!=null&&(t.onclick=Ve);break;case"onScroll":a!=null&&J("scroll",t);break;case"onScrollEnd":a!=null&&J("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}l=gi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""+a):t.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,""):t.removeAttribute(l);break;case"capture":case"download":a===!0?t.setAttribute(l,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(l,a):t.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(l,a):t.removeAttribute(l);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(l):t.setAttribute(l,a);break;case"popover":J("beforetoggle",t),J("toggle",t),di(t,"popover",a);break;case"xlinkActuate":Ze(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Ze(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Ze(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Ze(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Ze(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Ze(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Ze(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":di(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=ph.get(l)||l,di(t,l,a))}}function Ff(t,e,l,a,n,i){switch(l){case"style":fo(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(l=a.__html,l!=null){if(n.children!=null)throw Error(o(60));t.innerHTML=l}}break;case"children":typeof a=="string"?va(t,a):(typeof a=="number"||typeof a=="bigint")&&va(t,""+a);break;case"onScroll":a!=null&&J("scroll",t);break;case"onScrollEnd":a!=null&&J("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Ve);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pr.hasOwnProperty(l))t:{if(l[0]==="o"&&l[1]==="n"&&(n=l.endsWith("Capture"),e=l.slice(2,n?l.length-7:void 0),i=t[Pt]||null,i=i!=null?i[l]:null,typeof i=="function"&&t.removeEventListener(e,i,n),typeof a=="function")){typeof i!="function"&&i!==null&&(l in t?t[l]=null:t.hasAttribute(l)&&t.removeAttribute(l)),t.addEventListener(e,a,n);break t}l in t?t[l]=a:a===!0?t.setAttribute(l,""):di(t,l,a)}}}function Vt(t,e,l){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",t),J("load",t);var a=!1,n=!1,i;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];if(c!=null)switch(i){case"src":a=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:ht(t,e,i,c,l,null)}}n&&ht(t,e,"srcSet",l.srcSet,l,null),a&&ht(t,e,"src",l.src,l,null);return;case"input":J("invalid",t);var s=i=c=n=null,h=null,v=null;for(a in l)if(l.hasOwnProperty(a)){var z=l[a];if(z!=null)switch(a){case"name":n=z;break;case"type":c=z;break;case"checked":h=z;break;case"defaultChecked":v=z;break;case"value":i=z;break;case"defaultValue":s=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,e));break;default:ht(t,e,a,z,l,null)}}no(t,i,s,h,v,c,n,!1);return;case"select":J("invalid",t),a=c=i=null;for(n in l)if(l.hasOwnProperty(n)&&(s=l[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":a=s;default:ht(t,e,n,s,l,null)}e=i,l=c,t.multiple=!!a,e!=null?ya(t,!!a,e,!1):l!=null&&ya(t,!!a,l,!0);return;case"textarea":J("invalid",t),i=n=a=null;for(c in l)if(l.hasOwnProperty(c)&&(s=l[c],s!=null))switch(c){case"value":a=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:ht(t,e,c,s,l,null)}uo(t,a,n,i);return;case"option":for(h in l)if(l.hasOwnProperty(h)&&(a=l[h],a!=null))switch(h){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:ht(t,e,h,a,l,null)}return;case"dialog":J("beforetoggle",t),J("toggle",t),J("cancel",t),J("close",t);break;case"iframe":case"object":J("load",t);break;case"video":case"audio":for(a=0;a<Ln.length;a++)J(Ln[a],t);break;case"image":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"embed":case"source":case"link":J("error",t),J("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(v in l)if(l.hasOwnProperty(v)&&(a=l[v],a!=null))switch(v){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:ht(t,e,v,a,l,null)}return;default:if(oc(e)){for(z in l)l.hasOwnProperty(z)&&(a=l[z],a!==void 0&&Ff(t,e,z,a,l,void 0));return}}for(s in l)l.hasOwnProperty(s)&&(a=l[s],a!=null&&ht(t,e,s,a,l,null))}function Lm(t,e,l,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,s=null,h=null,v=null,z=null;for(x in l){var E=l[x];if(l.hasOwnProperty(x)&&E!=null)switch(x){case"checked":break;case"value":break;case"defaultValue":h=E;default:a.hasOwnProperty(x)||ht(t,e,x,null,a,E)}}for(var b in a){var x=a[b];if(E=l[b],a.hasOwnProperty(b)&&(x!=null||E!=null))switch(b){case"type":i=x;break;case"name":n=x;break;case"checked":v=x;break;case"defaultChecked":z=x;break;case"value":c=x;break;case"defaultValue":s=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(o(137,e));break;default:x!==E&&ht(t,e,b,x,a,E)}}fc(t,c,s,h,v,z,i,n);return;case"select":x=c=s=b=null;for(i in l)if(h=l[i],l.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":x=h;default:a.hasOwnProperty(i)||ht(t,e,i,null,a,h)}for(n in a)if(i=a[n],h=l[n],a.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":b=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==h&&ht(t,e,n,i,a,h)}e=s,l=c,a=x,b!=null?ya(t,!!l,b,!1):!!a!=!!l&&(e!=null?ya(t,!!l,e,!0):ya(t,!!l,l?[]:"",!1));return;case"textarea":x=b=null;for(s in l)if(n=l[s],l.hasOwnProperty(s)&&n!=null&&!a.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ht(t,e,s,null,a,n)}for(c in a)if(n=a[c],i=l[c],a.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":b=n;break;case"defaultValue":x=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&ht(t,e,c,n,a,i)}io(t,b,x);return;case"option":for(var _ in l)if(b=l[_],l.hasOwnProperty(_)&&b!=null&&!a.hasOwnProperty(_))switch(_){case"selected":t.selected=!1;break;default:ht(t,e,_,null,a,b)}for(h in a)if(b=a[h],x=l[h],a.hasOwnProperty(h)&&b!==x&&(b!=null||x!=null))switch(h){case"selected":t.selected=b&&typeof b!="function"&&typeof b!="symbol";break;default:ht(t,e,h,b,a,x)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in l)b=l[H],l.hasOwnProperty(H)&&b!=null&&!a.hasOwnProperty(H)&&ht(t,e,H,null,a,b);for(v in a)if(b=a[v],x=l[v],a.hasOwnProperty(v)&&b!==x&&(b!=null||x!=null))switch(v){case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(o(137,e));break;default:ht(t,e,v,b,a,x)}return;default:if(oc(e)){for(var mt in l)b=l[mt],l.hasOwnProperty(mt)&&b!==void 0&&!a.hasOwnProperty(mt)&&Ff(t,e,mt,void 0,a,b);for(z in a)b=a[z],x=l[z],!a.hasOwnProperty(z)||b===x||b===void 0&&x===void 0||Ff(t,e,z,b,a,x);return}}for(var p in l)b=l[p],l.hasOwnProperty(p)&&b!=null&&!a.hasOwnProperty(p)&&ht(t,e,p,null,a,b);for(E in a)b=a[E],x=l[E],!a.hasOwnProperty(E)||b===x||b==null&&x==null||ht(t,e,E,b,a,x)}function od(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Zm(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,l=performance.getEntriesByType("resource"),a=0;a<l.length;a++){var n=l[a],i=n.transferSize,c=n.initiatorType,s=n.duration;if(i&&s&&od(c)){for(c=0,s=n.responseEnd,a+=1;a<l.length;a++){var h=l[a],v=h.startTime;if(v>s)break;var z=h.transferSize,E=h.initiatorType;z&&od(E)&&(h=h.responseEnd,c+=z*(h<s?1:(s-v)/(h-v)))}if(--a,e+=8*(i+c)/(n.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var If=null,Pf=null;function ou(t){return t.nodeType===9?t:t.ownerDocument}function sd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dd(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function tr(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var er=null;function Vm(){var t=window.event;return t&&t.type==="popstate"?t===er?!1:(er=t,!0):(er=null,!1)}var hd=typeof setTimeout=="function"?setTimeout:void 0,km=typeof clearTimeout=="function"?clearTimeout:void 0,md=typeof Promise=="function"?Promise:void 0,Km=typeof queueMicrotask=="function"?queueMicrotask:typeof md<"u"?function(t){return md.resolve(null).then(t).catch(Jm)}:hd;function Jm(t){setTimeout(function(){throw t})}function Cl(t){return t==="head"}function gd(t,e){var l=e,a=0;do{var n=l.nextSibling;if(t.removeChild(l),n&&n.nodeType===8)if(l=n.data,l==="/$"||l==="/&"){if(a===0){t.removeChild(n),$a(e);return}a--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")a++;else if(l==="html")Vn(t.ownerDocument.documentElement);else if(l==="head"){l=t.ownerDocument.head,Vn(l);for(var i=l.firstChild;i;){var c=i.nextSibling,s=i.nodeName;i[rn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&i.rel.toLowerCase()==="stylesheet"||l.removeChild(i),i=c}}else l==="body"&&Vn(t.ownerDocument.body);l=n}while(l);$a(e)}function pd(t,e){var l=t;t=0;do{var a=l.nextSibling;if(l.nodeType===1?e?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(e?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),a&&a.nodeType===8)if(l=a.data,l==="/$"){if(t===0)break;t--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||t++;l=a}while(l)}function lr(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var l=e;switch(e=e.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":lr(l),uc(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}t.removeChild(l)}}function $m(t,e,l,a){for(;t.nodeType===1;){var n=l;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[rn])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==n.rel||t.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||t.getAttribute("title")!==(n.title==null?null:n.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(n.src==null?null:n.src)||t.getAttribute("type")!==(n.type==null?null:n.type)||t.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Ee(t.nextSibling),t===null)break}return null}function Wm(t,e,l){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!l||(t=Ee(t.nextSibling),t===null))return null;return t}function yd(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Ee(t.nextSibling),t===null))return null;return t}function ar(t){return t.data==="$?"||t.data==="$~"}function nr(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Fm(t,e){var l=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||l.readyState!=="loading")e();else{var a=function(){e(),l.removeEventListener("DOMContentLoaded",a)};l.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Ee(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var ir=null;function vd(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="/$"||l==="/&"){if(e===0)return Ee(t.nextSibling);e--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||e++}t=t.nextSibling}return null}function bd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var l=t.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(e===0)return t;e--}else l!=="/$"&&l!=="/&"||e++}t=t.previousSibling}return null}function xd(t,e,l){switch(e=ou(l),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Vn(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);uc(t)}var Me=new Map,Sd=new Set;function su(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var cl=C.d;C.d={f:Im,r:Pm,D:t2,C:e2,L:l2,m:a2,X:i2,S:n2,M:u2};function Im(){var t=cl.f(),e=lu();return t||e}function Pm(t){var e=ma(t);e!==null&&e.tag===5&&e.type==="form"?qs(e):cl.r(t)}var ka=typeof document>"u"?null:document;function jd(t,e,l){var a=ka;if(a&&typeof e=="string"&&e){var n=be(e);n='link[rel="'+t+'"][href="'+n+'"]',typeof l=="string"&&(n+='[crossorigin="'+l+'"]'),Sd.has(n)||(Sd.add(n),t={rel:t,crossOrigin:l,href:e},a.querySelector(n)===null&&(e=a.createElement("link"),Vt(e,"link",t),Rt(e),a.head.appendChild(e)))}}function t2(t){cl.D(t),jd("dns-prefetch",t,null)}function e2(t,e){cl.C(t,e),jd("preconnect",t,e)}function l2(t,e,l){cl.L(t,e,l);var a=ka;if(a&&t&&e){var n='link[rel="preload"][as="'+be(e)+'"]';e==="image"&&l&&l.imageSrcSet?(n+='[imagesrcset="'+be(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(n+='[imagesizes="'+be(l.imageSizes)+'"]')):n+='[href="'+be(t)+'"]';var i=n;switch(e){case"style":i=Ka(t);break;case"script":i=Ja(t)}Me.has(i)||(t=O({rel:"preload",href:e==="image"&&l&&l.imageSrcSet?void 0:t,as:e},l),Me.set(i,t),a.querySelector(n)!==null||e==="style"&&a.querySelector(kn(i))||e==="script"&&a.querySelector(Kn(i))||(e=a.createElement("link"),Vt(e,"link",t),Rt(e),a.head.appendChild(e)))}}function a2(t,e){cl.m(t,e);var l=ka;if(l&&t){var a=e&&typeof e.as=="string"?e.as:"script",n='link[rel="modulepreload"][as="'+be(a)+'"][href="'+be(t)+'"]',i=n;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ja(t)}if(!Me.has(i)&&(t=O({rel:"modulepreload",href:t},e),Me.set(i,t),l.querySelector(n)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Kn(i)))return}a=l.createElement("link"),Vt(a,"link",t),Rt(a),l.head.appendChild(a)}}}function n2(t,e,l){cl.S(t,e,l);var a=ka;if(a&&t){var n=ga(a).hoistableStyles,i=Ka(t);e=e||"default";var c=n.get(i);if(!c){var s={loading:0,preload:null};if(c=a.querySelector(kn(i)))s.loading=5;else{t=O({rel:"stylesheet",href:t,"data-precedence":e},l),(l=Me.get(i))&&ur(t,l);var h=c=a.createElement("link");Rt(h),Vt(h,"link",t),h._p=new Promise(function(v,z){h.onload=v,h.onerror=z}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,du(c,e,a)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(i,c)}}}function i2(t,e){cl.X(t,e);var l=ka;if(l&&t){var a=ga(l).hoistableScripts,n=Ja(t),i=a.get(n);i||(i=l.querySelector(Kn(n)),i||(t=O({src:t,async:!0},e),(e=Me.get(n))&&cr(t,e),i=l.createElement("script"),Rt(i),Vt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function u2(t,e){cl.M(t,e);var l=ka;if(l&&t){var a=ga(l).hoistableScripts,n=Ja(t),i=a.get(n);i||(i=l.querySelector(Kn(n)),i||(t=O({src:t,async:!0,type:"module"},e),(e=Me.get(n))&&cr(t,e),i=l.createElement("script"),Rt(i),Vt(i,"link",t),l.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(n,i))}}function zd(t,e,l,a){var n=(n=Ft.current)?su(n):null;if(!n)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(e=Ka(l.href),l=ga(n).hoistableStyles,a=l.get(e),a||(a={type:"style",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){t=Ka(l.href);var i=ga(n).hoistableStyles,c=i.get(t);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,c),(i=n.querySelector(kn(t)))&&!i._p&&(c.instance=i,c.state.loading=5),Me.has(t)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},Me.set(t,l),i||c2(n,t,l,c.state))),e&&a===null)throw Error(o(528,""));return c}if(e&&a!==null)throw Error(o(529,""));return null;case"script":return e=l.async,l=l.src,typeof l=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Ja(l),l=ga(n).hoistableScripts,a=l.get(e),a||(a={type:"script",instance:null,count:0,state:null},l.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Ka(t){return'href="'+be(t)+'"'}function kn(t){return'link[rel="stylesheet"]['+t+"]"}function Ad(t){return O({},t,{"data-precedence":t.precedence,precedence:null})}function c2(t,e,l,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Vt(e,"link",l),Rt(e),t.head.appendChild(e))}function Ja(t){return'[src="'+be(t)+'"]'}function Kn(t){return"script[async]"+t}function Td(t,e,l){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+be(l.href)+'"]');if(a)return e.instance=a,Rt(a),a;var n=O({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Rt(a),Vt(a,"style",n),du(a,l.precedence,t),e.instance=a;case"stylesheet":n=Ka(l.href);var i=t.querySelector(kn(n));if(i)return e.state.loading|=4,e.instance=i,Rt(i),i;a=Ad(l),(n=Me.get(n))&&ur(a,n),i=(t.ownerDocument||t).createElement("link"),Rt(i);var c=i;return c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Vt(i,"link",a),e.state.loading|=4,du(i,l.precedence,t),e.instance=i;case"script":return i=Ja(l.src),(n=t.querySelector(Kn(i)))?(e.instance=n,Rt(n),n):(a=l,(n=Me.get(i))&&(a=O({},l),cr(a,n)),t=t.ownerDocument||t,n=t.createElement("script"),Rt(n),Vt(n,"link",a),t.head.appendChild(n),e.instance=n);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,du(a,l.precedence,t));return e.instance}function du(t,e,l){for(var a=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=a.length?a[a.length-1]:null,i=n,c=0;c<a.length;c++){var s=a[c];if(s.dataset.precedence===e)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(t,i.nextSibling):(e=l.nodeType===9?l.head:l,e.insertBefore(t,e.firstChild))}function ur(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function cr(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var hu=null;function Ed(t,e,l){if(hu===null){var a=new Map,n=hu=new Map;n.set(l,a)}else n=hu,a=n.get(l),a||(a=new Map,n.set(l,a));if(a.has(t))return a;for(a.set(t,null),l=l.getElementsByTagName(t),n=0;n<l.length;n++){var i=l[n];if(!(i[rn]||i[Xt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(e)||"";c=t+c;var s=a.get(c);s?s.push(i):a.set(c,[i])}}return a}function Md(t,e,l){t=t.ownerDocument||t,t.head.insertBefore(l,e==="title"?t.querySelector("head > title"):null)}function f2(t,e,l){if(l===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Od(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function r2(t,e,l,a){if(l.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var n=Ka(a.href),i=e.querySelector(kn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=mu.bind(t),e.then(t,t)),l.state.loading|=4,l.instance=i,Rt(i);return}i=e.ownerDocument||e,a=Ad(a),(n=Me.get(n))&&ur(a,n),i=i.createElement("link"),Rt(i);var c=i;c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Vt(i,"link",a),l.instance=i}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(l,e),(e=l.state.preload)&&(l.state.loading&3)===0&&(t.count++,l=mu.bind(t),e.addEventListener("load",l),e.addEventListener("error",l))}}var fr=0;function o2(t,e){return t.stylesheets&&t.count===0&&pu(t,t.stylesheets),0<t.count||0<t.imgCount?function(l){var a=setTimeout(function(){if(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend){var i=t.unsuspend;t.unsuspend=null,i()}},6e4+e);0<t.imgBytes&&fr===0&&(fr=62500*Zm());var n=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pu(t,t.stylesheets),t.unsuspend)){var i=t.unsuspend;t.unsuspend=null,i()}},(t.imgBytes>fr?50:800)+e);return t.unsuspend=l,function(){t.unsuspend=null,clearTimeout(a),clearTimeout(n)}}:null}function mu(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pu(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var gu=null;function pu(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,gu=new Map,e.forEach(s2,t),gu=null,mu.call(t))}function s2(t,e){if(!(e.state.loading&4)){var l=gu.get(t);if(l)var a=l.get(null);else{l=new Map,gu.set(t,l);for(var n=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(l.set(c.dataset.precedence,c),a=c)}a&&l.set(null,a)}n=e.instance,c=n.getAttribute("data-precedence"),i=l.get(c)||a,i===a&&l.set(null,n),l.set(c,n),this.count++,a=mu.bind(this),n.addEventListener("load",a),n.addEventListener("error",a),i?i.parentNode.insertBefore(n,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(n,t.firstChild)),e.state.loading|=4}}var Jn={$$typeof:k,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function d2(t,e,l,a,n,i,c,s,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=lc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.hiddenUpdates=lc(null),this.identifierPrefix=a,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function Cd(t,e,l,a,n,i,c,s,h,v,z,E){return t=new d2(t,e,l,c,h,v,z,E,s),e=1,i===!0&&(e|=24),i=oe(3,null,null,e),t.current=i,i.stateNode=t,e=Gc(),e.refCount++,t.pooledCache=e,e.refCount++,i.memoizedState={element:a,isDehydrated:l,cache:e},Zc(i),t}function Dd(t){return t?(t=Ta,t):Ta}function _d(t,e,l,a,n,i){n=Dd(n),a.context===null?a.context=n:a.pendingContext=n,a=vl(e),a.payload={element:l},i=i===void 0?null:i,i!==null&&(a.callback=i),l=bl(t,a,e),l!==null&&(ie(l,t,e),En(l,t,e))}function wd(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var l=t.retryLane;t.retryLane=l!==0&&l<e?l:e}}function rr(t,e){wd(t,e),(t=t.alternate)&&wd(t,e)}function Nd(t){if(t.tag===13||t.tag===31){var e=kl(t,67108864);e!==null&&ie(e,t,67108864),rr(t,67108864)}}function Bd(t){if(t.tag===13||t.tag===31){var e=ge();e=ac(e);var l=kl(t,e);l!==null&&ie(l,t,e),rr(t,e)}}var yu=!0;function h2(t,e,l,a){var n=T.T;T.T=null;var i=C.p;try{C.p=2,or(t,e,l,a)}finally{C.p=i,T.T=n}}function m2(t,e,l,a){var n=T.T;T.T=null;var i=C.p;try{C.p=8,or(t,e,l,a)}finally{C.p=i,T.T=n}}function or(t,e,l,a){if(yu){var n=sr(a);if(n===null)Wf(t,e,a,vu,l),Hd(t,a);else if(p2(n,t,e,l,a))a.stopPropagation();else if(Hd(t,a),e&4&&-1<g2.indexOf(t)){for(;n!==null;){var i=ma(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Xl(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var h=1<<31-fe(c);s.entanglements[1]|=h,c&=~h}Ye(i),(ut&6)===0&&(tu=ue()+500,Qn(0))}}break;case 31:case 13:s=kl(i,2),s!==null&&ie(s,i,2),lu(),rr(i,2)}if(i=sr(a),i===null&&Wf(t,e,a,vu,l),i===n)break;n=i}n!==null&&a.stopPropagation()}else Wf(t,e,a,null,l)}}function sr(t){return t=dc(t),dr(t)}var vu=null;function dr(t){if(vu=null,t=ha(t),t!==null){var e=S(t);if(e===null)t=null;else{var l=e.tag;if(l===13){if(t=M(e),t!==null)return t;t=null}else if(l===31){if(t=N(e),t!==null)return t;t=null}else if(l===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return vu=t,null}function Ud(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(th()){case Qr:return 2;case Lr:return 8;case ci:case eh:return 32;case Zr:return 268435456;default:return 32}default:return 32}}var hr=!1,Dl=null,_l=null,wl=null,$n=new Map,Wn=new Map,Nl=[],g2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hd(t,e){switch(t){case"focusin":case"focusout":Dl=null;break;case"dragenter":case"dragleave":_l=null;break;case"mouseover":case"mouseout":wl=null;break;case"pointerover":case"pointerout":$n.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(e.pointerId)}}function Fn(t,e,l,a,n,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:l,eventSystemFlags:a,nativeEvent:i,targetContainers:[n]},e!==null&&(e=ma(e),e!==null&&Nd(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,n!==null&&e.indexOf(n)===-1&&e.push(n),t)}function p2(t,e,l,a,n){switch(e){case"focusin":return Dl=Fn(Dl,t,e,l,a,n),!0;case"dragenter":return _l=Fn(_l,t,e,l,a,n),!0;case"mouseover":return wl=Fn(wl,t,e,l,a,n),!0;case"pointerover":var i=n.pointerId;return $n.set(i,Fn($n.get(i)||null,t,e,l,a,n)),!0;case"gotpointercapture":return i=n.pointerId,Wn.set(i,Fn(Wn.get(i)||null,t,e,l,a,n)),!0}return!1}function Rd(t){var e=ha(t.target);if(e!==null){var l=S(e);if(l!==null){if(e=l.tag,e===13){if(e=M(l),e!==null){t.blockedOn=e,Wr(t.priority,function(){Bd(l)});return}}else if(e===31){if(e=N(l),e!==null){t.blockedOn=e,Wr(t.priority,function(){Bd(l)});return}}else if(e===3&&l.stateNode.current.memoizedState.isDehydrated){t.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var l=sr(t.nativeEvent);if(l===null){l=t.nativeEvent;var a=new l.constructor(l.type,l);sc=a,l.target.dispatchEvent(a),sc=null}else return e=ma(l),e!==null&&Nd(e),t.blockedOn=l,!1;e.shift()}return!0}function qd(t,e,l){bu(t)&&l.delete(e)}function y2(){hr=!1,Dl!==null&&bu(Dl)&&(Dl=null),_l!==null&&bu(_l)&&(_l=null),wl!==null&&bu(wl)&&(wl=null),$n.forEach(qd),Wn.forEach(qd)}function xu(t,e){t.blockedOn===e&&(t.blockedOn=null,hr||(hr=!0,u.unstable_scheduleCallback(u.unstable_NormalPriority,y2)))}var Su=null;function Yd(t){Su!==t&&(Su=t,u.unstable_scheduleCallback(u.unstable_NormalPriority,function(){Su===t&&(Su=null);for(var e=0;e<t.length;e+=3){var l=t[e],a=t[e+1],n=t[e+2];if(typeof a!="function"){if(dr(a||l)===null)continue;break}var i=ma(l);i!==null&&(t.splice(e,3),e-=3,sf(i,{pending:!0,data:n,method:l.method,action:a},a,n))}}))}function $a(t){function e(h){return xu(h,t)}Dl!==null&&xu(Dl,t),_l!==null&&xu(_l,t),wl!==null&&xu(wl,t),$n.forEach(e),Wn.forEach(e);for(var l=0;l<Nl.length;l++){var a=Nl[l];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Nl.length&&(l=Nl[0],l.blockedOn===null);)Rd(l),l.blockedOn===null&&Nl.shift();if(l=(t.ownerDocument||t).$$reactFormReplay,l!=null)for(a=0;a<l.length;a+=3){var n=l[a],i=l[a+1],c=n[Pt]||null;if(typeof i=="function")c||Yd(l);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Pt]||null)s=c.formAction;else if(dr(n)!==null)continue}else s=c.action;typeof s=="function"?l[a+1]=s:(l.splice(a,3),a-=3),Yd(l)}}}function Gd(){function t(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(c){return n=c})},focusReset:"manual",scroll:"manual"})}function e(){n!==null&&(n(),n=null),a||setTimeout(l,20)}function l(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,n=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(l,100),function(){a=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),n!==null&&(n(),n=null)}}}function mr(t){this._internalRoot=t}ju.prototype.render=mr.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var l=e.current,a=ge();_d(l,a,t,e,null,null)},ju.prototype.unmount=mr.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_d(t.current,2,null,t,null,null),lu(),e[da]=null}};function ju(t){this._internalRoot=t}ju.prototype.unstable_scheduleHydration=function(t){if(t){var e=$r();t={blockedOn:null,target:t,priority:e};for(var l=0;l<Nl.length&&e!==0&&e<Nl[l].priority;l++);Nl.splice(l,0,t),l===0&&Rd(t)}};var Xd=f.version;if(Xd!=="19.2.1")throw Error(o(527,Xd,"19.2.1"));C.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=B(e),t=t!==null?G(t):null,t=t===null?null:t.stateNode,t};var v2={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:T,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zu.isDisabled&&zu.supportsFiber)try{un=zu.inject(v2),ce=zu}catch{}}return Pn.createRoot=function(t,e){if(!g(t))throw Error(o(299));var l=!1,a="",n=Js,i=$s,c=Ws;return e!=null&&(e.unstable_strictMode===!0&&(l=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(n=e.onUncaughtError),e.onCaughtError!==void 0&&(i=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError)),e=Cd(t,1,!1,null,null,l,a,null,n,i,c,Gd),t[da]=e.current,$f(t),new mr(e)},Pn.hydrateRoot=function(t,e,l){if(!g(t))throw Error(o(299));var a=!1,n="",i=Js,c=$s,s=Ws,h=null;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(c=l.onCaughtError),l.onRecoverableError!==void 0&&(s=l.onRecoverableError),l.formState!==void 0&&(h=l.formState)),e=Cd(t,1,!0,e,l??null,a,n,h,i,c,s,Gd),e.context=Dd(null),l=e.current,a=ge(),a=ac(a),n=vl(a),n.callback=null,bl(l,n,a),l=a,e.current.lanes=l,fn(e,l),Ye(e),t[da]=e.current,$f(t),new ju(e)},Pn.version="19.2.1",Pn}var Kd;function D2(){if(Kd)return pr.exports;Kd=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(f){console.error(f)}}return u(),pr.exports=C2(),pr.exports}var _2=D2();const w2=j2(_2);var Gt=function(){return Gt=Object.assign||function(f){for(var d,o=1,g=arguments.length;o<g;o++){d=arguments[o];for(var S in d)Object.prototype.hasOwnProperty.call(d,S)&&(f[S]=d[S])}return f},Gt.apply(this,arguments)};function Pa(u,f,d){if(d||arguments.length===2)for(var o=0,g=f.length,S;o<g;o++)(S||!(o in f))&&(S||(S=Array.prototype.slice.call(f,0,o)),S[o]=f[o]);return u.concat(S||Array.prototype.slice.call(f))}var xt="-ms-",ni="-moz-",ft="-webkit-",z1="comm",Zu="rule",Br="decl",N2="@import",A1="@keyframes",B2="@layer",T1=Math.abs,Ur=String.fromCharCode,Er=Object.assign;function U2(u,f){return Yt(u,0)^45?(((f<<2^Yt(u,0))<<2^Yt(u,1))<<2^Yt(u,2))<<2^Yt(u,3):0}function E1(u){return u.trim()}function fl(u,f){return(u=f.exec(u))?u[0]:u}function Z(u,f,d){return u.replace(f,d)}function wu(u,f,d){return u.indexOf(f,d)}function Yt(u,f){return u.charCodeAt(f)|0}function tn(u,f,d){return u.slice(f,d)}function Ge(u){return u.length}function M1(u){return u.length}function ai(u,f){return f.push(u),u}function H2(u,f){return u.map(f).join("")}function Jd(u,f){return u.filter(function(d){return!fl(d,f)})}var Vu=1,en=1,O1=0,Oe=0,Nt=0,nn="";function ku(u,f,d,o,g,S,M,N){return{value:u,root:f,parent:d,type:o,props:g,children:S,line:Vu,column:en,length:M,return:"",siblings:N}}function Hl(u,f){return Er(ku("",null,null,"",null,null,0,u.siblings),u,{length:-u.length},f)}function Wa(u){for(;u.root;)u=Hl(u.root,{children:[u]});ai(u,u.siblings)}function R2(){return Nt}function q2(){return Nt=Oe>0?Yt(nn,--Oe):0,en--,Nt===10&&(en=1,Vu--),Nt}function Be(){return Nt=Oe<O1?Yt(nn,Oe++):0,en++,Nt===10&&(en=1,Vu++),Nt}function ca(){return Yt(nn,Oe)}function Nu(){return Oe}function Ku(u,f){return tn(nn,u,f)}function Mr(u){switch(u){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y2(u){return Vu=en=1,O1=Ge(nn=u),Oe=0,[]}function G2(u){return nn="",u}function br(u){return E1(Ku(Oe-1,Or(u===91?u+2:u===40?u+1:u)))}function X2(u){for(;(Nt=ca())&&Nt<33;)Be();return Mr(u)>2||Mr(Nt)>3?"":" "}function Q2(u,f){for(;--f&&Be()&&!(Nt<48||Nt>102||Nt>57&&Nt<65||Nt>70&&Nt<97););return Ku(u,Nu()+(f<6&&ca()==32&&Be()==32))}function Or(u){for(;Be();)switch(Nt){case u:return Oe;case 34:case 39:u!==34&&u!==39&&Or(Nt);break;case 40:u===41&&Or(u);break;case 92:Be();break}return Oe}function L2(u,f){for(;Be()&&u+Nt!==57;)if(u+Nt===84&&ca()===47)break;return"/*"+Ku(f,Oe-1)+"*"+Ur(u===47?u:Be())}function Z2(u){for(;!Mr(ca());)Be();return Ku(u,Oe)}function V2(u){return G2(Bu("",null,null,null,[""],u=Y2(u),0,[0],u))}function Bu(u,f,d,o,g,S,M,N,D){for(var B=0,G=0,O=M,R=0,Q=0,F=0,tt=1,Ot=1,gt=1,st=0,k="",it=g,pt=S,V=o,Y=k;Ot;)switch(F=st,st=Be()){case 40:if(F!=108&&Yt(Y,O-1)==58){wu(Y+=Z(br(st),"&","&\f"),"&\f",T1(B?N[B-1]:0))!=-1&&(gt=-1);break}case 34:case 39:case 91:Y+=br(st);break;case 9:case 10:case 13:case 32:Y+=X2(F);break;case 92:Y+=Q2(Nu()-1,7);continue;case 47:switch(ca()){case 42:case 47:ai(k2(L2(Be(),Nu()),f,d,D),D);break;default:Y+="/"}break;case 123*tt:N[B++]=Ge(Y)*gt;case 125*tt:case 59:case 0:switch(st){case 0:case 125:Ot=0;case 59+G:gt==-1&&(Y=Z(Y,/\f/g,"")),Q>0&&Ge(Y)-O&&ai(Q>32?Wd(Y+";",o,d,O-1,D):Wd(Z(Y," ","")+";",o,d,O-2,D),D);break;case 59:Y+=";";default:if(ai(V=$d(Y,f,d,B,G,g,N,k,it=[],pt=[],O,S),S),st===123)if(G===0)Bu(Y,f,V,V,it,S,O,N,pt);else switch(R===99&&Yt(Y,3)===110?100:R){case 100:case 108:case 109:case 115:Bu(u,V,V,o&&ai($d(u,V,V,0,0,g,N,k,g,it=[],O,pt),pt),g,pt,O,N,o?it:pt);break;default:Bu(Y,V,V,V,[""],pt,0,N,pt)}}B=G=Q=0,tt=gt=1,k=Y="",O=M;break;case 58:O=1+Ge(Y),Q=F;default:if(tt<1){if(st==123)--tt;else if(st==125&&tt++==0&&q2()==125)continue}switch(Y+=Ur(st),st*tt){case 38:gt=G>0?1:(Y+="\f",-1);break;case 44:N[B++]=(Ge(Y)-1)*gt,gt=1;break;case 64:ca()===45&&(Y+=br(Be())),R=ca(),G=O=Ge(k=Y+=Z2(Nu())),st++;break;case 45:F===45&&Ge(Y)==2&&(tt=0)}}return S}function $d(u,f,d,o,g,S,M,N,D,B,G,O){for(var R=g-1,Q=g===0?S:[""],F=M1(Q),tt=0,Ot=0,gt=0;tt<o;++tt)for(var st=0,k=tn(u,R+1,R=T1(Ot=M[tt])),it=u;st<F;++st)(it=E1(Ot>0?Q[st]+" "+k:Z(k,/&\f/g,Q[st])))&&(D[gt++]=it);return ku(u,f,d,g===0?Zu:N,D,B,G,O)}function k2(u,f,d,o){return ku(u,f,d,z1,Ur(R2()),tn(u,2,-2),0,o)}function Wd(u,f,d,o,g){return ku(u,f,d,Br,tn(u,0,o),tn(u,o+1,-1),o,g)}function C1(u,f,d){switch(U2(u,f)){case 5103:return ft+"print-"+u+u;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ft+u+u;case 4789:return ni+u+u;case 5349:case 4246:case 4810:case 6968:case 2756:return ft+u+ni+u+xt+u+u;case 5936:switch(Yt(u,f+11)){case 114:return ft+u+xt+Z(u,/[svh]\w+-[tblr]{2}/,"tb")+u;case 108:return ft+u+xt+Z(u,/[svh]\w+-[tblr]{2}/,"tb-rl")+u;case 45:return ft+u+xt+Z(u,/[svh]\w+-[tblr]{2}/,"lr")+u}case 6828:case 4268:case 2903:return ft+u+xt+u+u;case 6165:return ft+u+xt+"flex-"+u+u;case 5187:return ft+u+Z(u,/(\w+).+(:[^]+)/,ft+"box-$1$2"+xt+"flex-$1$2")+u;case 5443:return ft+u+xt+"flex-item-"+Z(u,/flex-|-self/g,"")+(fl(u,/flex-|baseline/)?"":xt+"grid-row-"+Z(u,/flex-|-self/g,""))+u;case 4675:return ft+u+xt+"flex-line-pack"+Z(u,/align-content|flex-|-self/g,"")+u;case 5548:return ft+u+xt+Z(u,"shrink","negative")+u;case 5292:return ft+u+xt+Z(u,"basis","preferred-size")+u;case 6060:return ft+"box-"+Z(u,"-grow","")+ft+u+xt+Z(u,"grow","positive")+u;case 4554:return ft+Z(u,/([^-])(transform)/g,"$1"+ft+"$2")+u;case 6187:return Z(Z(Z(u,/(zoom-|grab)/,ft+"$1"),/(image-set)/,ft+"$1"),u,"")+u;case 5495:case 3959:return Z(u,/(image-set\([^]*)/,ft+"$1$`$1");case 4968:return Z(Z(u,/(.+:)(flex-)?(.*)/,ft+"box-pack:$3"+xt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ft+u+u;case 4200:if(!fl(u,/flex-|baseline/))return xt+"grid-column-align"+tn(u,f)+u;break;case 2592:case 3360:return xt+Z(u,"template-","")+u;case 4384:case 3616:return d&&d.some(function(o,g){return f=g,fl(o.props,/grid-\w+-end/)})?~wu(u+(d=d[f].value),"span",0)?u:xt+Z(u,"-start","")+u+xt+"grid-row-span:"+(~wu(d,"span",0)?fl(d,/\d+/):+fl(d,/\d+/)-+fl(u,/\d+/))+";":xt+Z(u,"-start","")+u;case 4896:case 4128:return d&&d.some(function(o){return fl(o.props,/grid-\w+-start/)})?u:xt+Z(Z(u,"-end","-span"),"span ","")+u;case 4095:case 3583:case 4068:case 2532:return Z(u,/(.+)-inline(.+)/,ft+"$1$2")+u;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ge(u)-1-f>6)switch(Yt(u,f+1)){case 109:if(Yt(u,f+4)!==45)break;case 102:return Z(u,/(.+:)(.+)-([^]+)/,"$1"+ft+"$2-$3$1"+ni+(Yt(u,f+3)==108?"$3":"$2-$3"))+u;case 115:return~wu(u,"stretch",0)?C1(Z(u,"stretch","fill-available"),f,d)+u:u}break;case 5152:case 5920:return Z(u,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,g,S,M,N,D,B){return xt+g+":"+S+B+(M?xt+g+"-span:"+(N?D:+D-+S)+B:"")+u});case 4949:if(Yt(u,f+6)===121)return Z(u,":",":"+ft)+u;break;case 6444:switch(Yt(u,Yt(u,14)===45?18:11)){case 120:return Z(u,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ft+(Yt(u,14)===45?"inline-":"")+"box$3$1"+ft+"$2$3$1"+xt+"$2box$3")+u;case 100:return Z(u,":",":"+xt)+u}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(u,"scroll-","scroll-snap-")+u}return u}function Ru(u,f){for(var d="",o=0;o<u.length;o++)d+=f(u[o],o,u,f)||"";return d}function K2(u,f,d,o){switch(u.type){case B2:if(u.children.length)break;case N2:case Br:return u.return=u.return||u.value;case z1:return"";case A1:return u.return=u.value+"{"+Ru(u.children,o)+"}";case Zu:if(!Ge(u.value=u.props.join(",")))return""}return Ge(d=Ru(u.children,o))?u.return=u.value+"{"+d+"}":""}function J2(u){var f=M1(u);return function(d,o,g,S){for(var M="",N=0;N<f;N++)M+=u[N](d,o,g,S)||"";return M}}function $2(u){return function(f){f.root||(f=f.return)&&u(f)}}function W2(u,f,d,o){if(u.length>-1&&!u.return)switch(u.type){case Br:u.return=C1(u.value,u.length,d);return;case A1:return Ru([Hl(u,{value:Z(u.value,"@","@"+ft)})],o);case Zu:if(u.length)return H2(d=u.props,function(g){switch(fl(g,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Wa(Hl(u,{props:[Z(g,/:(read-\w+)/,":"+ni+"$1")]})),Wa(Hl(u,{props:[g]})),Er(u,{props:Jd(d,o)});break;case"::placeholder":Wa(Hl(u,{props:[Z(g,/:(plac\w+)/,":"+ft+"input-$1")]})),Wa(Hl(u,{props:[Z(g,/:(plac\w+)/,":"+ni+"$1")]})),Wa(Hl(u,{props:[Z(g,/:(plac\w+)/,xt+"input-$1")]})),Wa(Hl(u,{props:[g]})),Er(u,{props:Jd(d,o)});break}return""})}}var F2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pe={},ln=typeof process<"u"&&pe!==void 0&&(pe.REACT_APP_SC_ATTR||pe.SC_ATTR)||"data-styled",D1="active",_1="data-styled-version",Ju="6.1.19",Hr=`/*!sc*/
`,qu=typeof window<"u"&&typeof document<"u",I2=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&pe!==void 0&&pe.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pe.REACT_APP_SC_DISABLE_SPEEDY!==""?pe.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pe.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&pe!==void 0&&pe.SC_DISABLE_SPEEDY!==void 0&&pe.SC_DISABLE_SPEEDY!==""&&pe.SC_DISABLE_SPEEDY!=="false"&&pe.SC_DISABLE_SPEEDY),P2={},$u=Object.freeze([]),an=Object.freeze({});function w1(u,f,d){return d===void 0&&(d=an),u.theme!==d.theme&&u.theme||f||d.theme}var N1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),tg=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,eg=/(^-|-$)/g;function Fd(u){return u.replace(tg,"-").replace(eg,"")}var lg=/(a)(d)/gi,Au=52,Id=function(u){return String.fromCharCode(u+(u>25?39:97))};function Cr(u){var f,d="";for(f=Math.abs(u);f>Au;f=f/Au|0)d=Id(f%Au)+d;return(Id(f%Au)+d).replace(lg,"$1-$2")}var xr,B1=5381,Ia=function(u,f){for(var d=f.length;d;)u=33*u^f.charCodeAt(--d);return u},U1=function(u){return Ia(B1,u)};function Rr(u){return Cr(U1(u)>>>0)}function ag(u){return u.displayName||u.name||"Component"}function Sr(u){return typeof u=="string"&&!0}var H1=typeof Symbol=="function"&&Symbol.for,R1=H1?Symbol.for("react.memo"):60115,ng=H1?Symbol.for("react.forward_ref"):60112,ig={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ug={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},q1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cg=((xr={})[ng]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},xr[R1]=q1,xr);function Pd(u){return("type"in(f=u)&&f.type.$$typeof)===R1?q1:"$$typeof"in u?cg[u.$$typeof]:ig;var f}var fg=Object.defineProperty,rg=Object.getOwnPropertyNames,t1=Object.getOwnPropertySymbols,og=Object.getOwnPropertyDescriptor,sg=Object.getPrototypeOf,e1=Object.prototype;function Y1(u,f,d){if(typeof f!="string"){if(e1){var o=sg(f);o&&o!==e1&&Y1(u,o,d)}var g=rg(f);t1&&(g=g.concat(t1(f)));for(var S=Pd(u),M=Pd(f),N=0;N<g.length;++N){var D=g[N];if(!(D in ug||d&&d[D]||M&&D in M||S&&D in S)){var B=og(f,D);try{fg(u,D,B)}catch{}}}}return u}function fa(u){return typeof u=="function"}function qr(u){return typeof u=="object"&&"styledComponentId"in u}function ua(u,f){return u&&f?"".concat(u," ").concat(f):u||f||""}function Yu(u,f){if(u.length===0)return"";for(var d=u[0],o=1;o<u.length;o++)d+=u[o];return d}function ii(u){return u!==null&&typeof u=="object"&&u.constructor.name===Object.name&&!("props"in u&&u.$$typeof)}function Dr(u,f,d){if(d===void 0&&(d=!1),!d&&!ii(u)&&!Array.isArray(u))return f;if(Array.isArray(f))for(var o=0;o<f.length;o++)u[o]=Dr(u[o],f[o]);else if(ii(f))for(var o in f)u[o]=Dr(u[o],f[o]);return u}function Yr(u,f){Object.defineProperty(u,"toString",{value:f})}function ra(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(u," for more information.").concat(f.length>0?" Args: ".concat(f.join(", ")):""))}var dg=(function(){function u(f){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=f}return u.prototype.indexOfGroup=function(f){for(var d=0,o=0;o<f;o++)d+=this.groupSizes[o];return d},u.prototype.insertRules=function(f,d){if(f>=this.groupSizes.length){for(var o=this.groupSizes,g=o.length,S=g;f>=S;)if((S<<=1)<0)throw ra(16,"".concat(f));this.groupSizes=new Uint32Array(S),this.groupSizes.set(o),this.length=S;for(var M=g;M<S;M++)this.groupSizes[M]=0}for(var N=this.indexOfGroup(f+1),D=(M=0,d.length);M<D;M++)this.tag.insertRule(N,d[M])&&(this.groupSizes[f]++,N++)},u.prototype.clearGroup=function(f){if(f<this.length){var d=this.groupSizes[f],o=this.indexOfGroup(f),g=o+d;this.groupSizes[f]=0;for(var S=o;S<g;S++)this.tag.deleteRule(o)}},u.prototype.getGroup=function(f){var d="";if(f>=this.length||this.groupSizes[f]===0)return d;for(var o=this.groupSizes[f],g=this.indexOfGroup(f),S=g+o,M=g;M<S;M++)d+="".concat(this.tag.getRule(M)).concat(Hr);return d},u})(),Uu=new Map,Gu=new Map,Hu=1,Tu=function(u){if(Uu.has(u))return Uu.get(u);for(;Gu.has(Hu);)Hu++;var f=Hu++;return Uu.set(u,f),Gu.set(f,u),f},hg=function(u,f){Hu=f+1,Uu.set(u,f),Gu.set(f,u)},mg="style[".concat(ln,"][").concat(_1,'="').concat(Ju,'"]'),gg=new RegExp("^".concat(ln,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pg=function(u,f,d){for(var o,g=d.split(","),S=0,M=g.length;S<M;S++)(o=g[S])&&u.registerName(f,o)},yg=function(u,f){for(var d,o=((d=f.textContent)!==null&&d!==void 0?d:"").split(Hr),g=[],S=0,M=o.length;S<M;S++){var N=o[S].trim();if(N){var D=N.match(gg);if(D){var B=0|parseInt(D[1],10),G=D[2];B!==0&&(hg(G,B),pg(u,G,D[3]),u.getTag().insertRules(B,g)),g.length=0}else g.push(N)}}},l1=function(u){for(var f=document.querySelectorAll(mg),d=0,o=f.length;d<o;d++){var g=f[d];g&&g.getAttribute(ln)!==D1&&(yg(u,g),g.parentNode&&g.parentNode.removeChild(g))}};function vg(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var G1=function(u){var f=document.head,d=u||f,o=document.createElement("style"),g=(function(N){var D=Array.from(N.querySelectorAll("style[".concat(ln,"]")));return D[D.length-1]})(d),S=g!==void 0?g.nextSibling:null;o.setAttribute(ln,D1),o.setAttribute(_1,Ju);var M=vg();return M&&o.setAttribute("nonce",M),d.insertBefore(o,S),o},bg=(function(){function u(f){this.element=G1(f),this.element.appendChild(document.createTextNode("")),this.sheet=(function(d){if(d.sheet)return d.sheet;for(var o=document.styleSheets,g=0,S=o.length;g<S;g++){var M=o[g];if(M.ownerNode===d)return M}throw ra(17)})(this.element),this.length=0}return u.prototype.insertRule=function(f,d){try{return this.sheet.insertRule(d,f),this.length++,!0}catch{return!1}},u.prototype.deleteRule=function(f){this.sheet.deleteRule(f),this.length--},u.prototype.getRule=function(f){var d=this.sheet.cssRules[f];return d&&d.cssText?d.cssText:""},u})(),xg=(function(){function u(f){this.element=G1(f),this.nodes=this.element.childNodes,this.length=0}return u.prototype.insertRule=function(f,d){if(f<=this.length&&f>=0){var o=document.createTextNode(d);return this.element.insertBefore(o,this.nodes[f]||null),this.length++,!0}return!1},u.prototype.deleteRule=function(f){this.element.removeChild(this.nodes[f]),this.length--},u.prototype.getRule=function(f){return f<this.length?this.nodes[f].textContent:""},u})(),Sg=(function(){function u(f){this.rules=[],this.length=0}return u.prototype.insertRule=function(f,d){return f<=this.length&&(this.rules.splice(f,0,d),this.length++,!0)},u.prototype.deleteRule=function(f){this.rules.splice(f,1),this.length--},u.prototype.getRule=function(f){return f<this.length?this.rules[f]:""},u})(),a1=qu,jg={isServer:!qu,useCSSOMInjection:!I2},Xu=(function(){function u(f,d,o){f===void 0&&(f=an),d===void 0&&(d={});var g=this;this.options=Gt(Gt({},jg),f),this.gs=d,this.names=new Map(o),this.server=!!f.isServer,!this.server&&qu&&a1&&(a1=!1,l1(this)),Yr(this,function(){return(function(S){for(var M=S.getTag(),N=M.length,D="",B=function(O){var R=(function(gt){return Gu.get(gt)})(O);if(R===void 0)return"continue";var Q=S.names.get(R),F=M.getGroup(O);if(Q===void 0||!Q.size||F.length===0)return"continue";var tt="".concat(ln,".g").concat(O,'[id="').concat(R,'"]'),Ot="";Q!==void 0&&Q.forEach(function(gt){gt.length>0&&(Ot+="".concat(gt,","))}),D+="".concat(F).concat(tt,'{content:"').concat(Ot,'"}').concat(Hr)},G=0;G<N;G++)B(G);return D})(g)})}return u.registerId=function(f){return Tu(f)},u.prototype.rehydrate=function(){!this.server&&qu&&l1(this)},u.prototype.reconstructWithOptions=function(f,d){return d===void 0&&(d=!0),new u(Gt(Gt({},this.options),f),this.gs,d&&this.names||void 0)},u.prototype.allocateGSInstance=function(f){return this.gs[f]=(this.gs[f]||0)+1},u.prototype.getTag=function(){return this.tag||(this.tag=(f=(function(d){var o=d.useCSSOMInjection,g=d.target;return d.isServer?new Sg(g):o?new bg(g):new xg(g)})(this.options),new dg(f)));var f},u.prototype.hasNameForId=function(f,d){return this.names.has(f)&&this.names.get(f).has(d)},u.prototype.registerName=function(f,d){if(Tu(f),this.names.has(f))this.names.get(f).add(d);else{var o=new Set;o.add(d),this.names.set(f,o)}},u.prototype.insertRules=function(f,d,o){this.registerName(f,d),this.getTag().insertRules(Tu(f),o)},u.prototype.clearNames=function(f){this.names.has(f)&&this.names.get(f).clear()},u.prototype.clearRules=function(f){this.getTag().clearGroup(Tu(f)),this.clearNames(f)},u.prototype.clearTag=function(){this.tag=void 0},u})(),zg=/&/g,Ag=/^\s*\/\/.*$/gm;function X1(u,f){return u.map(function(d){return d.type==="rule"&&(d.value="".concat(f," ").concat(d.value),d.value=d.value.replaceAll(",",",".concat(f," ")),d.props=d.props.map(function(o){return"".concat(f," ").concat(o)})),Array.isArray(d.children)&&d.type!=="@keyframes"&&(d.children=X1(d.children,f)),d})}function Tg(u){var f,d,o,g=an,S=g.options,M=S===void 0?an:S,N=g.plugins,D=N===void 0?$u:N,B=function(R,Q,F){return F.startsWith(d)&&F.endsWith(d)&&F.replaceAll(d,"").length>0?".".concat(f):R},G=D.slice();G.push(function(R){R.type===Zu&&R.value.includes("&")&&(R.props[0]=R.props[0].replace(zg,d).replace(o,B))}),M.prefix&&G.push(W2),G.push(K2);var O=function(R,Q,F,tt){Q===void 0&&(Q=""),F===void 0&&(F=""),tt===void 0&&(tt="&"),f=tt,d=Q,o=new RegExp("\\".concat(d,"\\b"),"g");var Ot=R.replace(Ag,""),gt=V2(F||Q?"".concat(F," ").concat(Q," { ").concat(Ot," }"):Ot);M.namespace&&(gt=X1(gt,M.namespace));var st=[];return Ru(gt,J2(G.concat($2(function(k){return st.push(k)})))),st};return O.hash=D.length?D.reduce(function(R,Q){return Q.name||ra(15),Ia(R,Q.name)},B1).toString():"",O}var Eg=new Xu,_r=Tg(),Q1=Ut.createContext({shouldForwardProp:void 0,styleSheet:Eg,stylis:_r});Q1.Consumer;Ut.createContext(void 0);function wr(){return Jt.useContext(Q1)}var L1=(function(){function u(f,d){var o=this;this.inject=function(g,S){S===void 0&&(S=_r);var M=o.name+S.hash;g.hasNameForId(o.id,M)||g.insertRules(o.id,M,S(o.rules,M,"@keyframes"))},this.name=f,this.id="sc-keyframes-".concat(f),this.rules=d,Yr(this,function(){throw ra(12,String(o.name))})}return u.prototype.getName=function(f){return f===void 0&&(f=_r),this.name+f.hash},u})(),Mg=function(u){return u>="A"&&u<="Z"};function n1(u){for(var f="",d=0;d<u.length;d++){var o=u[d];if(d===1&&o==="-"&&u[0]==="-")return u;Mg(o)?f+="-"+o.toLowerCase():f+=o}return f.startsWith("ms-")?"-"+f:f}var Z1=function(u){return u==null||u===!1||u===""},V1=function(u){var f,d,o=[];for(var g in u){var S=u[g];u.hasOwnProperty(g)&&!Z1(S)&&(Array.isArray(S)&&S.isCss||fa(S)?o.push("".concat(n1(g),":"),S,";"):ii(S)?o.push.apply(o,Pa(Pa(["".concat(g," {")],V1(S),!1),["}"],!1)):o.push("".concat(n1(g),": ").concat((f=g,(d=S)==null||typeof d=="boolean"||d===""?"":typeof d!="number"||d===0||f in F2||f.startsWith("--")?String(d).trim():"".concat(d,"px")),";")))}return o};function Rl(u,f,d,o){if(Z1(u))return[];if(qr(u))return[".".concat(u.styledComponentId)];if(fa(u)){if(!fa(S=u)||S.prototype&&S.prototype.isReactComponent||!f)return[u];var g=u(f);return Rl(g,f,d,o)}var S;return u instanceof L1?d?(u.inject(d,o),[u.getName(o)]):[u]:ii(u)?V1(u):Array.isArray(u)?Array.prototype.concat.apply($u,u.map(function(M){return Rl(M,f,d,o)})):[u.toString()]}function k1(u){for(var f=0;f<u.length;f+=1){var d=u[f];if(fa(d)&&!qr(d))return!1}return!0}var Og=U1(Ju),Cg=(function(){function u(f,d,o){this.rules=f,this.staticRulesId="",this.isStatic=(o===void 0||o.isStatic)&&k1(f),this.componentId=d,this.baseHash=Ia(Og,d),this.baseStyle=o,Xu.registerId(d)}return u.prototype.generateAndInjectStyles=function(f,d,o){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(f,d,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&d.hasNameForId(this.componentId,this.staticRulesId))g=ua(g,this.staticRulesId);else{var S=Yu(Rl(this.rules,f,d,o)),M=Cr(Ia(this.baseHash,S)>>>0);if(!d.hasNameForId(this.componentId,M)){var N=o(S,".".concat(M),void 0,this.componentId);d.insertRules(this.componentId,M,N)}g=ua(g,M),this.staticRulesId=M}else{for(var D=Ia(this.baseHash,o.hash),B="",G=0;G<this.rules.length;G++){var O=this.rules[G];if(typeof O=="string")B+=O;else if(O){var R=Yu(Rl(O,f,d,o));D=Ia(D,R+G),B+=R}}if(B){var Q=Cr(D>>>0);d.hasNameForId(this.componentId,Q)||d.insertRules(this.componentId,Q,o(B,".".concat(Q),void 0,this.componentId)),g=ua(g,Q)}}return g},u})(),ui=Ut.createContext(void 0);ui.Consumer;function Dg(u){var f=Ut.useContext(ui),d=Jt.useMemo(function(){return(function(o,g){if(!o)throw ra(14);if(fa(o)){var S=o(g);return S}if(Array.isArray(o)||typeof o!="object")throw ra(8);return g?Gt(Gt({},g),o):o})(u.theme,f)},[u.theme,f]);return u.children?Ut.createElement(ui.Provider,{value:d},u.children):null}var jr={};function _g(u,f,d){var o=qr(u),g=u,S=!Sr(u),M=f.attrs,N=M===void 0?$u:M,D=f.componentId,B=D===void 0?(function(it,pt){var V=typeof it!="string"?"sc":Fd(it);jr[V]=(jr[V]||0)+1;var Y="".concat(V,"-").concat(Rr(Ju+V+jr[V]));return pt?"".concat(pt,"-").concat(Y):Y})(f.displayName,f.parentComponentId):D,G=f.displayName,O=G===void 0?(function(it){return Sr(it)?"styled.".concat(it):"Styled(".concat(ag(it),")")})(u):G,R=f.displayName&&f.componentId?"".concat(Fd(f.displayName),"-").concat(f.componentId):f.componentId||B,Q=o&&g.attrs?g.attrs.concat(N).filter(Boolean):N,F=f.shouldForwardProp;if(o&&g.shouldForwardProp){var tt=g.shouldForwardProp;if(f.shouldForwardProp){var Ot=f.shouldForwardProp;F=function(it,pt){return tt(it,pt)&&Ot(it,pt)}}else F=tt}var gt=new Cg(d,R,o?g.componentStyle:void 0);function st(it,pt){return(function(V,Y,Ht){var Ce=V.attrs,oa=V.componentStyle,rl=V.defaultProps,Wt=V.foldedComponentIds,sa=V.styledComponentId,ql=V.target,De=Ut.useContext(ui),T=wr(),C=V.shouldForwardProp||T.shouldForwardProp,q=w1(Y,De,rl)||an,I=(function(kt,Ft,Qe){for(var Ue,It=Gt(Gt({},Ft),{className:void 0,theme:Qe}),Yl=0;Yl<kt.length;Yl+=1){var Le=fa(Ue=kt[Yl])?Ue(It):Ue;for(var ye in Le)It[ye]=ye==="className"?ua(It[ye],Le[ye]):ye==="style"?Gt(Gt({},It[ye]),Le[ye]):Le[ye]}return Ft.className&&(It.className=ua(It.className,Ft.className)),It})(Ce,Y,q),ct=I.as||ql,Tt={};for(var lt in I)I[lt]===void 0||lt[0]==="$"||lt==="as"||lt==="theme"&&I.theme===q||(lt==="forwardedAs"?Tt.as=I.forwardedAs:C&&!C(lt,ct)||(Tt[lt]=I[lt]));var et=(function(kt,Ft){var Qe=wr(),Ue=kt.generateAndInjectStyles(Ft,Qe.styleSheet,Qe.stylis);return Ue})(oa,I),jt=ua(Wt,sa);return et&&(jt+=" "+et),I.className&&(jt+=" "+I.className),Tt[Sr(ct)&&!N1.has(ct)?"class":"className"]=jt,Ht&&(Tt.ref=Ht),Jt.createElement(ct,Tt)})(k,it,pt)}st.displayName=O;var k=Ut.forwardRef(st);return k.attrs=Q,k.componentStyle=gt,k.displayName=O,k.shouldForwardProp=F,k.foldedComponentIds=o?ua(g.foldedComponentIds,g.styledComponentId):"",k.styledComponentId=R,k.target=o?g.target:u,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(it){this._foldedDefaultProps=o?(function(pt){for(var V=[],Y=1;Y<arguments.length;Y++)V[Y-1]=arguments[Y];for(var Ht=0,Ce=V;Ht<Ce.length;Ht++)Dr(pt,Ce[Ht],!0);return pt})({},g.defaultProps,it):it}}),Yr(k,function(){return".".concat(k.styledComponentId)}),S&&Y1(k,u,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function i1(u,f){for(var d=[u[0]],o=0,g=f.length;o<g;o+=1)d.push(f[o],u[o+1]);return d}var u1=function(u){return Object.assign(u,{isCss:!0})};function Wu(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];if(fa(u)||ii(u))return u1(Rl(i1($u,Pa([u],f,!0))));var o=u;return f.length===0&&o.length===1&&typeof o[0]=="string"?Rl(o):u1(Rl(i1(o,f)))}function Nr(u,f,d){if(d===void 0&&(d=an),!f)throw ra(1,f);var o=function(g){for(var S=[],M=1;M<arguments.length;M++)S[M-1]=arguments[M];return u(f,d,Wu.apply(void 0,Pa([g],S,!1)))};return o.attrs=function(g){return Nr(u,f,Gt(Gt({},d),{attrs:Array.prototype.concat(d.attrs,g).filter(Boolean)}))},o.withConfig=function(g){return Nr(u,f,Gt(Gt({},d),g))},o}var K1=function(u){return Nr(_g,u)},j=K1;N1.forEach(function(u){j[u]=K1(u)});var wg=(function(){function u(f,d){this.rules=f,this.componentId=d,this.isStatic=k1(f),Xu.registerId(this.componentId+1)}return u.prototype.createStyles=function(f,d,o,g){var S=g(Yu(Rl(this.rules,d,o,g)),""),M=this.componentId+f;o.insertRules(M,M,S)},u.prototype.removeStyles=function(f,d){d.clearRules(this.componentId+f)},u.prototype.renderStyles=function(f,d,o,g){f>2&&Xu.registerId(this.componentId+f),this.removeStyles(f,o),this.createStyles(f,d,o,g)},u})();function Ng(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];var o=Wu.apply(void 0,Pa([u],f,!1)),g="sc-global-".concat(Rr(JSON.stringify(o))),S=new wg(o,g),M=function(D){var B=wr(),G=Ut.useContext(ui),O=Ut.useRef(B.styleSheet.allocateGSInstance(g)).current;return B.styleSheet.server&&N(O,D,B.styleSheet,G,B.stylis),Ut.useLayoutEffect(function(){if(!B.styleSheet.server)return N(O,D,B.styleSheet,G,B.stylis),function(){return S.removeStyles(O,B.styleSheet)}},[O,D,B.styleSheet,G,B.stylis]),null};function N(D,B,G,O,R){if(S.isStatic)S.renderStyles(D,P2,G,R);else{var Q=Gt(Gt({},B),{theme:w1(B,O,M.defaultProps)});S.renderStyles(D,Q,G,R)}}return Ut.memo(M)}function Bg(u){for(var f=[],d=1;d<arguments.length;d++)f[d-1]=arguments[d];var o=Yu(Wu.apply(void 0,Pa([u],f,!1))),g=Rr(o);return new L1(g,o)}const Ug=j.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  padding-top: 7rem;
  background: linear-gradient(135deg, #0e0f1a, #1c2030);
  color: #fff;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    padding: 3rem 1.5rem;
    padding-top: 7rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    padding-top: 8rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
    padding-top: 7.5rem;
    gap: 1.5rem;
  }
`,Hg=j.div`
  flex: 1 1 500px;
  max-width: 600px;

  h4 {
    display: inline-block;
    padding: 0.35rem 0.9rem;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    color: #ffb74d;
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
  }

  h1 {
    font-size: 2.8rem;
    line-height: 1.3;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  p {
    color: #cfd2e2;
    font-size: 1.05rem;
    line-height: 1.7;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    text-align: center;
    h1 {
      font-size: 2.2rem;
    }
  }
`,Rg=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 2.2rem;
`,Eu=j.span`
  background: ${({color:u})=>u||"rgba(255,255,255,0.1)"};
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  font-weight: 500;
  color: #fff;
`,qg=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;
  max-width: 500px;
  text-align: center;
  gap: 1rem;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    font-size: 0.9rem;
    color: #bdbdbd;
  }
`,Yg=j.p`
  color: #eee;
  font-size: 1.05rem;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`,Gg=j.div`
  flex: 1 1 400px;
  max-width: 440px;
  background: #fff;
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  color: #111;

  @media (max-width: 768px) {
    width: 100%;
  }
`,Xg=j.h2`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  span {
    background: linear-gradient(90deg, #ff4081, #ff5722);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`,Mu=j.div`
  margin-bottom: 1.3rem;

  label {
    font-weight: 500;
    font-size: 0.95rem;
    display: block;
    margin-bottom: 0.4rem;
  }

  input {
    width: 100%;
    padding: 0.8rem;
    border: 1.5px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    outline: none;
    transition: 0.3s ease;
    &:focus {
      border-color: #ff5722;
      box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.2);
    }
  }
`,Qg=j.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 0.5rem;

  label {
    font-size: 0.95rem;
    color: #333;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.7rem;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
      color: #ff5722;
    }

    input {
      appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid #bbb;
      border-radius: 50%;
      display: inline-block;
      position: relative;
      cursor: pointer;
      transition: 0.3s ease;

      &:checked {
        border-color: #ff5722;
        background: radial-gradient(circle, #ff5722 45%, transparent 46%);
      }

      &:hover {
        border-color: #ff784e;
      }

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 87, 34, 0.25);
      }
    }
  }
`,Lg=j.button`
  width: 100%;
  background: #ff5722;
  color: #fff;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  margin-top: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #e14a17;
    transform: translateY(-1px);
  }
`,Zg=j.p`
  margin-top: 1rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #777;
  a {
    color: #ff5722;
    text-decoration: none;
  }
`,Vg=()=>r.jsxs(Ug,{children:[r.jsxs(Hg,{children:[r.jsx("h4",{children:"✨ For professionals"}),r.jsx("h1",{children:"Full Stack Web Development Job Bootcamp with GenAI"}),r.jsx("p",{children:"Choose MERN stack or Spring Boot and acquire expertise through practical application and real-world projects."}),r.jsxs(Rg,{children:[r.jsx(Eu,{color:"#1b5e20",children:"💼 Placement assistance"}),r.jsx(Eu,{color:"#4a148c",children:"🧠 AI-infused curriculum"}),r.jsx(Eu,{color:"#bf360c",children:"🤝 1:1 mentorship"}),r.jsx(Eu,{color:"#283593",children:"👩‍🏫 Faculty from MAANG"})]}),r.jsxs(qg,{children:[r.jsxs("div",{children:[r.jsx("h3",{children:"95%"}),r.jsx("p",{children:"Placement rate"})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"1200+"}),r.jsx("p",{children:"Companies Hiring"})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"128%"}),r.jsx("p",{children:"Average hike"})]}),r.jsxs("div",{children:[r.jsx("h3",{children:"1.5L+"}),r.jsx("p",{children:"Learners"})]})]}),r.jsx(Yg,{children:"Know in-depth details in our free webinar 👉"})]}),r.jsxs(Gg,{children:[r.jsxs(Xg,{children:["Book a ",r.jsx("span",{children:"free live webinar"})," to know more"]}),r.jsxs("form",{children:[r.jsxs(Mu,{children:[r.jsx("label",{children:"Name *"}),r.jsx("input",{type:"text",placeholder:"Enter name",required:!0})]}),r.jsxs(Mu,{children:[r.jsx("label",{children:"Email *"}),r.jsx("input",{type:"email",placeholder:"Enter email",required:!0})]}),r.jsxs(Mu,{children:[r.jsx("label",{children:"Phone Number *"}),r.jsx("input",{type:"tel",placeholder:"Enter phone number",required:!0})]}),r.jsxs(Mu,{children:[r.jsx("label",{children:"Experience *"}),r.jsxs(Qg,{children:[r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"exp"})," Working professional - Technical roles"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"exp"})," Working professional - Non technical"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"exp"})," College student - Final year"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"exp"})," College student - 1st to pre-final year"]}),r.jsxs("label",{children:[r.jsx("input",{type:"radio",name:"exp"})," Others"]})]})]}),r.jsx(Lg,{children:"Continue booking webinar →"})]}),r.jsxs(Zg,{children:["I authorise TechTrek to contact me with course updates & offers via Email/SMS/Whatsapp/Call. I have read and agree to"," ",r.jsx("a",{href:"#",children:"Privacy Policy"})," & ",r.jsx("a",{href:"#",children:"Terms of use"}),"."]})]})]}),kg="/assets/logo1-CqVuxuIC.jpg",Kg="/assets/logo2-fPiGazGn.png",Jg="/assets/logo3-DzgcSZxN.jpg",$g="/assets/logo5-B1Opmc4T.jpg",Wg="/assets/logo4-Bb_KXCQu.jpg",Fg=j.section`
  background: #fff;
  color: #111;
  padding: 5rem 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`,Ig=j.h2`
  font-size: 1.9rem;
  font-weight: 700;
  margin-bottom: 2rem;
`,Pg=j.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`,c1=j.a`
  background: #111;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  &:hover {
    background: #ff5722;
    transform: translateY(-3px);
  }
`,tp=j.div`
  margin-top: 4rem;
`,ep=j.h3`
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
`,lp=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-items: center;
`,ti=j.div`
  background: #fafafa;
  border-radius: 16px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1);
  padding: 1.2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`,ei=j.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
`,li=j.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.2rem;

  h4 {
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
  }

  p {
    font-size: 0.9rem;
    color: #6a6a6a;
  }

  span {
    background: #eef1ff;
    color: #3f51b5;
    font-weight: 600;
    border-radius: 8px;
    font-size: 0.85rem;
    padding: 0.25rem 0.6rem;
    width: fit-content;
  }
`,ap=()=>r.jsxs(Fg,{children:[r.jsx(Ig,{children:"Job Bootcamp brochure"}),r.jsxs(Pg,{children:[r.jsx(c1,{href:"#",children:"Download MERN brochure"}),r.jsx(c1,{href:"#",children:"Download Springboot brochure"})]}),r.jsxs(tp,{children:[r.jsx(ep,{children:"Trek who took this bootcamp got hired at"}),r.jsxs(lp,{children:[r.jsxs(ti,{children:[r.jsx(ei,{src:kg,alt:"Arcesium"}),r.jsxs(li,{children:[r.jsx("h4",{children:"Arcesium"}),r.jsx("span",{children:"100% hike"})]})]}),r.jsxs(ti,{children:[r.jsx(ei,{src:Kg,alt:"Converj"}),r.jsxs(li,{children:[r.jsx("h4",{children:"Converj"}),r.jsx("span",{children:"471% hike"})]})]}),r.jsxs(ti,{children:[r.jsx(ei,{src:Jg,alt:"Oracle"}),r.jsxs(li,{children:[r.jsx("h4",{children:"Oracle"}),r.jsx("span",{children:"300% hike"})]})]}),r.jsxs(ti,{children:[r.jsx(ei,{src:$g,alt:"Mastercard"}),r.jsxs(li,{children:[r.jsx("h4",{children:"Mastercard"}),r.jsx("span",{children:"First Job"})]})]}),r.jsxs(ti,{children:[r.jsx(ei,{src:Wg,alt:"Flipkart"}),r.jsxs(li,{children:[r.jsx("h4",{children:"Flipkart"}),r.jsx("span",{children:"120% hike"})]})]})]})]})]}),np=j.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 6rem;
  padding: 6rem 2rem;
  background-color: #f9f7fd;
  font-family: "Poppins", sans-serif;

  /* Center section horizontally and control width */
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 1.5rem;
    gap: 3rem;
    align-items: center;
  }
`,ip=j.div`
  flex: 1;
  min-width: 280px;

  h4 {
    color: #7b61ff;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-size: 2.5rem;
    line-height: 1.3;
    color: #111;
    font-weight: 700;
    margin-bottom: 1.5rem;

    span {
      color: #0073ff;
    }

    @media (max-width: 900px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  button {
    background-color: #ff6b35;
    color: #fff;
    border: none;
    padding: 0.9rem 1.8rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #ff4f00;
      transform: translateY(-2px);
    }

    @media (max-width: 900px) {
      display: block;
      margin: 0 auto;
    }
  }
`,up=j.div`
  flex: 1.5;
  position: relative;
  padding-left: 2rem;
  border-left: 2px solid #e2dff8;

  @media (max-width: 900px) {
    border-left: none;
    padding-left: 0;
  }
`,cp=j.div`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 1.5rem 2rem;
  margin-bottom: 3rem;
  max-width: 420px;
  position: relative;
  left: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }

  &::before {
    content: "";
    position: absolute;
    left: -2.1rem;
    top: 2rem;
    width: 10px;
    height: 10px;
    background-color: #7b61ff;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.1rem;
    color: #111;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0.2rem 0;
  }

  span {
    display: inline-block;
    font-size: 0.8rem;
    background-color: ${({tagcolor:u})=>u||"#eee"};
    color: #222;
    padding: 0.2rem 0.8rem;
    border-radius: 999px;
    font-weight: 600;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 900px) {
    left: 0;
    margin: 0 auto 2rem auto;
  }
`,fp=j.span`
  font-size: 1.6rem;
  margin-right: 0.5rem;
`,rp=()=>{const u=[{emoji:"🚀",tag:"Excited!",tagColor:"#FDCB82",title:"Kickstart your journey",points:["Orientation by Ankush Singla","Meet your program instructors","Meet your peers"]},{emoji:"😎",tag:"Confident",tagColor:"#F5B2A9",title:"Master full stack by solving real problems",points:["Build real-world projects","Get doubts resolved via 1:1 sessions","Meet industry experts"]},{emoji:"😇",tag:"Supported",tagColor:"#B6E4C1",title:"Experts to help you prepare for interviews",points:["Resume and profile creation","Mock interviews","Soft-skill training"]},{emoji:"🤔",tag:"Resilient",tagColor:"#E5E5E5",title:"Catch the eye of your dream companies",points:["Daily jobs shared","hirist.com highlights","Alumni referrals"]},{emoji:"🤩",tag:"Over the moon",tagColor:"#D1D7F6",title:"Nail the interview for your dream job",points:["Gain company insights","Apply for higher offers"]}];return r.jsxs(np,{children:[r.jsxs(ip,{children:[r.jsx("h4",{children:"Bootcamp Journey"}),r.jsxs("h2",{children:["Future-proof your career",r.jsx("br",{})," with ",r.jsx("span",{children:"GenAI skills"})]}),r.jsx("button",{children:"Book a free webinar"})]}),r.jsx(up,{children:u.map((f,d)=>r.jsxs(cp,{tagcolor:f.tagColor,children:[r.jsxs("span",{children:[r.jsx(fp,{children:f.emoji}),f.tag]}),r.jsx("h3",{children:f.title}),f.points.map((o,g)=>r.jsx("p",{children:o},g))]},d))})]})},op=j.section`
  background-color: #fff5f0;
  text-align: center;
  padding: 5rem 2rem 0;
  font-family: "Poppins", sans-serif;
`,sp=j.img`
  width: 120px;
  margin-bottom: 2rem;

  @media (max-width: 600px) {
    width: 90px;
  }
`,dp=j.h2`
  font-size: 1.6rem;
  color: #111;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`,hp=j.button`
  background-color: #f96939;
  color: #fff;
  border: none;
  width: 100%;
  padding: 1.2rem;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px 8px 0 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff4f00;
  }
`,mp=()=>r.jsxs(op,{children:[r.jsx(sp,{src:"https://cdn-icons-png.flaticon.com/512/5977/5977585.png",alt:"Call illustration"}),r.jsxs(dp,{children:["Have questions? ",r.jsx("br",{}),"Request a call from our counselors."]}),r.jsx(hp,{children:"Request callback"})]}),gp=j.section`
  padding: 5rem 2rem;
  background: #0e0e0e;
  color: #fff;
  text-align: center;
`,pp=j.h2`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,yp=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`,vp=j.button`
  background: ${({active:u})=>u?"#fff":"#1a1a1a"};
  color: ${({active:u})=>u?"#000":"#ccc"};
  border: none;
  border-radius: 999px;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background: ${({active:u})=>u?"#fff":"#222"};
  }
`,bp=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-bottom: 3rem;
`,xp=j.div`
  background: #1a1a1a;
  border-radius: 20px;
  padding: 2.5rem 1.5rem 2rem;
  position: relative;
  text-align: left;
  width: 100%;
  max-width: 400px;
  color: #ddd;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    background: #202020;
  }
`,Sp=j.img`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 3px solid #fff;
  object-fit: cover;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
`,jp=j.h3`
  text-align: center;
  color: #eee;
  margin-top: 50px;
  font-size: 1.1rem;
  font-weight: 600;
`,zp=j.p`
  text-align: center;
  color: #999;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`,Ap=j.p`
  font-size: 0.95rem;
  color: #ccc;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`,Tp=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #999;
`,Ep=j.img`
  width: 80px;
  height: 40px;
  object-fit: contain;
`,Mp=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,f1=j.button`
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  cursor: pointer;
  transition: 0.3s ease;
  ${({primary:u})=>u?`
    background: #ff5722;
    border: none;
    color: #fff;
    &:hover { background: #e14a17; }
  `:`
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    &:hover { background: #fff; color: #000; }
  `}
`,r1={"Non-tech to tech":[{name:"Samir Sayyed",role:"Product Engineer",avatar:"https://files.codingninjas.in/samir-sayyed-1-9998.jpg",quote:"As I wanted to switch my career from Mechanical to IT, I joined the bootcamp. My goal was to learn full stack development and get placed in a good company with a good package.",companyLogo:"https://upload.wikimedia.org/wikipedia/en/8/85/Phenom_People_logo.png"},{name:"Manikanta Sura",role:"Application Management Analyst",avatar:"https://files.codingninjas.in/manikanta-sura-10000.jpg",quote:"I was inspired by the first session which boosted my confidence. My goal was to have good technical knowledge to transform my career. It was overall a very good support and helped me gain a new job.",companyLogo:"https://upload.wikimedia.org/wikipedia/en/f/f5/Axa_logo.svg"},{name:"Rashid Khan",role:"Senior Software Engineer",avatar:"https://files.codingninjas.in/rashid-khan-10002.jpg",quote:"Before joining the program, I was trying to learn on my own but hit dead ends. Coding Ninjas helped me identify exactly what I needed to learn to build strong skills and kickstart my career.",companyLogo:"https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"}],"Service to product":[{name:"Shubham Sharma",role:"Software Engineer",avatar:"https://files.codingninjas.in/shubham-sharma-10003.jpg",quote:"The knowledge and practical skills gained from Coding Ninjas have been invaluable. Highly recommend to anyone looking to transition into tech.",companyLogo:"https://upload.wikimedia.org/wikipedia/commons/7/70/Uplers_logo.svg"},{name:"Akash Pal",role:"Senior Software Engineer",avatar:"https://files.codingninjas.in/akash-pal-10004.jpg",quote:"This Program was my bridge to a high-paying career in a product-based industry. Their projects and support prepared me for the shift.",companyLogo:"https://upload.wikimedia.org/wikipedia/en/6/65/British_Petroleum_logo.svg"},{name:"Supratik De",role:"Sr. Software Engineer",avatar:"https://files.codingninjas.in/supratik-de-10006.jpg",quote:"From a fresher to landing a great job, Coding Ninjas gave me the understanding of web development I needed to succeed.",companyLogo:"https://upload.wikimedia.org/wikipedia/commons/8/81/Unacademy_Logo.svg"}],"Landed the first job":[{name:"Himanshu Gusain",role:"Engineer",avatar:"https://files.codingninjas.in/himanshu-gusain-10007.jpg",quote:"This course can help anyone who wants to be a full stack developer and get placed in a good tech company. Their placement support was great!",companyLogo:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"},{name:"Siddhant Singh Rathore",role:"Software Engineer",avatar:"https://files.codingninjas.in/siddhant-singh-rathore-10009.jpg",quote:"I really liked the self-paced model. The frequent doubt support and weekly webinars were incredibly helpful.",companyLogo:"https://upload.wikimedia.org/wikipedia/commons/2/2e/Upstox_logo.svg"},{name:"Rahul Singla",role:"Engineer",avatar:"https://files.codingninjas.in/rahul-singla-10010.jpg",quote:"I chose this program for its structured learning and clear roadmap that aligned perfectly with my career goals.",companyLogo:"https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"}]},Op=()=>{const[u,f]=Jt.useState("Non-tech to tech");return r.jsxs(gp,{children:[r.jsx(pp,{children:"Voices of Trust & Love"}),r.jsx(yp,{children:Object.keys(r1).map(d=>r.jsx(vp,{active:u===d,onClick:()=>f(d),children:d},d))}),r.jsx(bp,{children:r1[u].map((d,o)=>r.jsxs(xp,{children:[r.jsx(Sp,{src:d.avatar,alt:d.name}),r.jsx(jp,{children:d.name}),r.jsx(zp,{children:d.role}),r.jsx(Ap,{children:d.quote}),r.jsxs(Tp,{children:[r.jsx("span",{children:"Post: TechTrek"}),r.jsx(Ep,{src:d.companyLogo,alt:"company"})]})]},o))}),r.jsxs(Mp,{children:[r.jsx(f1,{children:"Read all success stories ↗"}),r.jsx(f1,{primary:!0,children:"Book a free webinar"})]})]})},Cp=Bg`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,Dp=j.section`
  padding: 5rem 2rem;
  background: #f7fbff;
  text-align: center;
`,_p=j.h2`
  font-size: 2.2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 3rem;
`,wp=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  margin-bottom: 4rem;
`,Np=j.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
  padding: 2.5rem 2rem;
  max-width: 340px;
  text-align: center;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(40px);

  &.visible {
    animation: ${Cp} 0.6s ease forwards;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`,Bp=j.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`,Up=j.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.3rem;
`,Hp=j.p`
  color: #777;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
`,Rp=j.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
`,qp=j.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 1.5rem;
  p:first-child {
    font-weight: 600;
    color: #777;
    margin-bottom: 0.3rem;
  }
`,Yp=j.a`
  display: inline-block;
  color: #4460d4;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #2e47b8;
    text-decoration: underline;
  }
`,Gp=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,o1=j.button`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.9rem 2rem;
  cursor: pointer;
  transition: 0.3s ease;
  ${({primary:u})=>u?`
    background: #ff5722;
    color: #fff;
    &:hover {
      background: #e14a17;
    }
  `:`
    background: #111;
    color: #fff;
    &:hover {
      background: #333;
    }
  `}
`,Xp=()=>{const u=[{name:"Ankush Singla",role:"Co-Founder & Instructor",img:"https://files.codingninjas.in/ankush-singla-founder-coding-ninjas-1-10005.jpg",logos:["https://upload.wikimedia.org/wikipedia/en/4/4c/IIT_Delhi_logo.svg","https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg","https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png","https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg"],teaches:["Data Structures & Algorithms","Competitive Programming"],linkedin:"#"},{name:"Nidhi Aggarwal",role:"Instructor",img:"https://files.codingninjas.in/nidhi-aggrawal-coding-ninjas-9946.jpg",logos:["https://upload.wikimedia.org/wikipedia/en/6/6e/IIIT_Delhi_logo.png"],teaches:["Basics of Java with DSA"],linkedin:"#"},{name:"Manisha Khattar",role:"Instructor",img:"https://files.codingninjas.in/manisha-khattar-9987.jpg",logos:["https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg","https://upload.wikimedia.org/wikipedia/en/6/6e/IIIT_Delhi_logo.png"],teaches:["MERN Stack"],linkedin:"#"}];return Jt.useEffect(()=>{const f=document.querySelectorAll(".faculty-card"),d=()=>{f.forEach(o=>{o.getBoundingClientRect().top<window.innerHeight-100&&o.classList.add("visible")})};return window.addEventListener("scroll",d),d(),()=>window.removeEventListener("scroll",d)},[]),r.jsxs(Dp,{children:[r.jsx(_p,{children:"Faculty that brings out the best in you"}),r.jsx(wp,{children:u.map((f,d)=>r.jsxs(Np,{className:"faculty-card",children:[r.jsx(Bp,{src:f.img,alt:f.name}),r.jsx(Up,{children:f.name}),r.jsx(Hp,{children:f.role}),r.jsx(Rp,{children:f.logos.map((o,g)=>r.jsx("img",{src:o,alt:"affiliation logo"},g))}),r.jsxs(qp,{children:[r.jsx("p",{children:"Teaches"}),f.teaches.map((o,g)=>r.jsx("div",{children:o},g))]}),r.jsx(Yp,{href:f.linkedin,target:"_blank",children:"LinkedIn profile ↗"})]},d))}),r.jsxs(Gp,{children:[r.jsx(o1,{children:"Request callback"}),r.jsx(o1,{primary:!0,children:"Book a free webinar"})]})]})},Qp=j.section`
  padding: 5rem 2rem;
  text-align: center;
  background: #fff;
`,Lp=j.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: #111;
`,Zp=j.div`
  background: #0d0d0d;
  border-radius: 30px;
  padding: 3rem 2rem;
  max-width: 950px;
  margin: 0 auto 3rem auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  overflow: hidden;
  background-image: radial-gradient(
    rgba(255, 255, 255, 0.05) 1px,
    transparent 1px
  );
  background-size: 20px 20px;
`,Vp=j.div`
  width: ${({size:u})=>u};
  height: ${({size:u})=>u};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  border: 2px solid ${({color:u})=>u};
  background: rgba(255, 255, 255, 0.05);
  font-weight: 500;
  transition: transform 0.3s ease, background 0.3s ease;
  cursor: default;

  &:hover {
    background: ${({color:u})=>u};
    transform: scale(1.05);
  }

  h3 {
    font-size: 0.95rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 1.3rem;
    font-weight: 700;
  }
`,kp=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`,s1=j.button`
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.9rem 1.8rem;
  cursor: pointer;
  transition: 0.3s ease;
  ${({primary:u})=>u?`
    background: #ff5722;
    color: #fff;
    &:hover {
      background: #e14a17;
    }
  `:`
    background: #111;
    color: #fff;
    &:hover {
      background: #333;
    }
  `}
`,Kp=()=>{const u=[{label:"Final year students",percent:"12%",color:"#ff6b6b",size:"140px"},{label:"Non CS",percent:"14%",color:"#58a6ff",size:"150px"},{label:"Service company engineers",percent:"41%",color:"#f1c40f",size:"220px"},{label:"Non technical roles",percent:"27%",color:"#00c48c",size:"180px"},{label:"Others",percent:"6%",color:"#b083ff",size:"110px"}];return r.jsxs(Qp,{children:[r.jsx(Lp,{children:"Our learners bring varied backgrounds and experiences"}),r.jsx(Zp,{children:u.map((f,d)=>r.jsxs(Vp,{color:f.color,size:f.size,children:[r.jsx("h3",{children:f.label}),r.jsx("p",{children:f.percent})]},d))}),r.jsxs(kp,{children:[r.jsx(s1,{children:"Request callback"}),r.jsx(s1,{primary:!0,children:"Book a free webinar"})]})]})};var J1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},d1=Ut.createContext&&Ut.createContext(J1),Jp=["attr","size","title"];function $p(u,f){if(u==null)return{};var d=Wp(u,f),o,g;if(Object.getOwnPropertySymbols){var S=Object.getOwnPropertySymbols(u);for(g=0;g<S.length;g++)o=S[g],!(f.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(u,o)&&(d[o]=u[o])}return d}function Wp(u,f){if(u==null)return{};var d={};for(var o in u)if(Object.prototype.hasOwnProperty.call(u,o)){if(f.indexOf(o)>=0)continue;d[o]=u[o]}return d}function Qu(){return Qu=Object.assign?Object.assign.bind():function(u){for(var f=1;f<arguments.length;f++){var d=arguments[f];for(var o in d)Object.prototype.hasOwnProperty.call(d,o)&&(u[o]=d[o])}return u},Qu.apply(this,arguments)}function h1(u,f){var d=Object.keys(u);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(u);f&&(o=o.filter(function(g){return Object.getOwnPropertyDescriptor(u,g).enumerable})),d.push.apply(d,o)}return d}function Lu(u){for(var f=1;f<arguments.length;f++){var d=arguments[f]!=null?arguments[f]:{};f%2?h1(Object(d),!0).forEach(function(o){Fp(u,o,d[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(d)):h1(Object(d)).forEach(function(o){Object.defineProperty(u,o,Object.getOwnPropertyDescriptor(d,o))})}return u}function Fp(u,f,d){return f=Ip(f),f in u?Object.defineProperty(u,f,{value:d,enumerable:!0,configurable:!0,writable:!0}):u[f]=d,u}function Ip(u){var f=Pp(u,"string");return typeof f=="symbol"?f:f+""}function Pp(u,f){if(typeof u!="object"||!u)return u;var d=u[Symbol.toPrimitive];if(d!==void 0){var o=d.call(u,f);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(f==="string"?String:Number)(u)}function $1(u){return u&&u.map((f,d)=>Ut.createElement(f.tag,Lu({key:d},f.attr),$1(f.child)))}function $t(u){return f=>Ut.createElement(t4,Qu({attr:Lu({},u.attr)},f),$1(u.child))}function t4(u){var f=d=>{var{attr:o,size:g,title:S}=u,M=$p(u,Jp),N=g||d.size||"1em",D;return d.className&&(D=d.className),u.className&&(D=(D?D+" ":"")+u.className),Ut.createElement("svg",Qu({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},d.attr,o,M,{className:D,style:Lu(Lu({color:u.color||d.color},d.style),u.style),height:N,width:N,xmlns:"http://www.w3.org/2000/svg"}),S&&Ut.createElement("title",null,S),u.children)};return d1!==void 0?Ut.createElement(d1.Consumer,null,d=>f(d)):f(J1)}function e4(u){return $t({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"},child:[]}]})(u)}function l4(u){return $t({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(u)}function a4(u){return $t({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"},child:[]}]})(u)}function n4(u){return $t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(u)}function i4(u){return $t({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(u)}function u4(u){return $t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(u)}function c4(u){return $t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(u)}function f4(u){return $t({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(u)}function r4(u){return $t({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"},child:[]}]})(u)}function o4(u){return $t({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(u)}function s4(u){return $t({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(u)}function d4(u){return $t({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(u)}function h4(u){return $t({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"},child:[]}]})(u)}const m4=j.section`
  padding: 5rem 2rem;
  background: #fff;
`,g4=j.div`
  max-width: 1000px;
  margin: 0 auto;
`,p4=j.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
`,y4=j.div`
  background: #eaf0ff;
  display: flex;
  justify-content: center;
  border-radius: 50px;
  padding: 0.4rem;
  width: fit-content;
  margin: 0 auto 3rem;
`,m1=j.button`
  border: none;
  background: ${({active:u})=>u?"#fff":"transparent"};
  color: ${({active:u})=>u?"#000":"#4460d4"};
  border-radius: 50px;
  padding: 0.8rem 2rem;
  margin: 0 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #fff;
  }
`,v4=j.div`
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`,b4=j.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 1rem 1.5rem;
    text-align: left;
  }

  th {
    background: #fafafa;
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
  }

  tr:nth-child(even) {
    background: #fafafa;
  }

  td {
    color: #444;
    border-top: 1px solid #f1f1f1;
  }

  svg {
    color: #4c63e5;
  }
`,x4=j.div`
  text-align: center;
  margin-top: 2rem;

  h3 {
    font-size: 1.2rem;
    color: #333;
    font-weight: 500;
  }

  h2 {
    font-size: 1.6rem;
    color: #000;
    font-weight: 700;
    margin: 0.5rem 0;
  }
`,S4=j.button`
  background: #ff5722;
  color: #fff;
  border: none;
  padding: 0.9rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background: #e14a17;
  }
`,j4=()=>{const[u,f]=Jt.useState("MERN"),d=["Industry-standard curriculum by expert","Self Paced Classes","1:1 live doubt support (Unlimited)","Live Doubt Class","Relationship manager","Dedicated, focused, personalised placement assistance.","Peer Interaction and network building","1:1 Domain Expert Sessions","Full fees refundable within 7 days"];return r.jsx(m4,{id:"plans",children:r.jsxs(g4,{children:[r.jsx(p4,{children:"Plans and Pricing"}),r.jsxs(y4,{children:[r.jsxs(m1,{active:u==="MERN",onClick:()=>f("MERN"),children:[r.jsx(o4,{color:"#4db33d"})," ",r.jsx(r4,{color:"#000"})," ",r.jsx(d4,{color:"#61dafb"})," ",r.jsx(s4,{color:"#68a063"})," MERN"]}),r.jsxs(m1,{active:u==="Springboot",onClick:()=>f("Springboot"),children:[r.jsx(h4,{color:"#6db33f"})," Springboot"]})]}),r.jsx(v4,{children:r.jsxs(b4,{children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Perks"}),r.jsxs("th",{children:["TechTrek Job Bootcamp",r.jsx("br",{}),r.jsx("small",{style:{color:"#666"},children:"to help you transition faster into tech"})]})]})}),r.jsx("tbody",{children:d.map((o,g)=>r.jsxs("tr",{children:[r.jsx("td",{children:o}),r.jsx("td",{style:{textAlign:"center"},children:r.jsx(u4,{})})]},g))})]})}),r.jsxs(x4,{children:[r.jsx("h3",{children:"Price as low as"}),r.jsx("h2",{children:"₹7204 / month"}),r.jsx(S4,{children:"Apply now"})]})]})})},z4=j.section`
  background: #fff7f4;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
`,A4=j.img`
  width: 320px;
  max-width: 90%;
`,T4=j.form`
  background: #fff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.05);
  width: 400px;
  max-width: 100%;
`,E4=j.h2`
  font-size: 1.7rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #222;
`,Ou=j.label`
  font-weight: 500;
  display: block;
  margin-bottom: 0.25rem;
  color: #333;
`,zr=j.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1.25rem;
  font-size: 0.95rem;
  &:focus {
    border-color: #ff5722;
    outline: none;
  }
`,M4=j.div`
  margin-bottom: 1.5rem;
`,O4=j.label`
  display: block;
  margin: 0.4rem 0;
  cursor: pointer;
  color: #444;
  input {
    margin-right: 0.5rem;
  }
`,C4=j.button`
  background: #ff5722;
  color: #fff;
  border: none;
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #e14a17;
  }
`,D4=j.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #666;
  text-align: center;

  a {
    color: #ff5722;
    text-decoration: none;
  }
`,_4=()=>{const[u,f]=Jt.useState({name:"",email:"",phone:"",experience:""}),d=g=>{const{name:S,value:M}=g.target;f({...u,[S]:M})},o=g=>{g.preventDefault(),alert(`Callback requested by ${u.name}`)};return r.jsxs(z4,{children:[r.jsx(A4,{src:"https://cdni.iconscout.com/illustration/premium/thumb/customer-service-illustration-download-in-svg-png-gif-file-formats--call-support-agent-contact-helpline-pack-business-illustrations-6849286.png",alt:"Callback Illustration"}),r.jsxs(T4,{onSubmit:o,children:[r.jsx(E4,{children:"Request a Callback"}),r.jsx(Ou,{children:"Name *"}),r.jsx(zr,{type:"text",name:"name",placeholder:"Enter name",value:u.name,onChange:d,required:!0}),r.jsx(Ou,{children:"Email *"}),r.jsx(zr,{type:"email",name:"email",placeholder:"Enter email",value:u.email,onChange:d,required:!0}),r.jsx(Ou,{children:"Phone Number *"}),r.jsx(zr,{type:"tel",name:"phone",placeholder:"Enter phone number",value:u.phone,onChange:d,required:!0}),r.jsx(Ou,{children:"Experience *"}),r.jsx(M4,{children:["Working professional - Technical roles","Working professional - Non technical","College student - Final year","College student - 1st to pre-final year","Others"].map(g=>r.jsxs(O4,{children:[r.jsx("input",{type:"radio",name:"experience",value:g,onChange:d,required:!0}),g]},g))}),r.jsx(C4,{type:"submit",children:"Request callback"}),r.jsxs(D4,{children:["I authorise TechTrek to contact me with course updates via Email/SMS/WhatsApp/Call. I have read and agree to"," ",r.jsx("a",{href:"#",children:"Privacy Policy"})," & ",r.jsx("a",{href:"#",children:"Terms of use"}),"."]})]})]})};function w4(u){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(u)}function N4(u){return $t({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(u)}const B4=j.section`
  padding: 5rem 1.5rem;
  background: #fff;
  color: #222;
`,U4=j.div`
  max-width: 900px;
  margin: 0 auto;
`,H4=j.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 3rem;
  font-weight: 700;
`,R4=j.div`
  border-bottom: 1px solid #eee;
  padding: 1.25rem 0;
`,q4=j.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.05rem;
  color: #333;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #ff5722;
  }
`,Y4=j.div`
  margin-top: 0.8rem;
  color: #555;
  font-size: 0.95rem;
  line-height: 1.7;
  max-height: ${({open:u})=>u?"300px":"0"};
  opacity: ${({open:u})=>u?"1":"0"};
  overflow: hidden;
  transition: all 0.3s ease;
`,G4=()=>{const[u,f]=Jt.useState(null),d=[{question:"What is the Full Stack Web Development Job Bootcamp program?",answer:"The Full Stack Web Development Job Bootcamp is an intensive, mentor-led training program that teaches you front-end, back-end, and database technologies. It prepares you for job interviews and guarantees placement assistance upon successful completion."},{question:"What is the refund policy for the Full Stack Developer Bootcamp?",answer:"If you are not satisfied or unable to continue, you can request a refund within the first 14 days of enrollment. Please refer to our pricing & refund policy for detailed terms."},{question:"Who is eligible to enroll in the Full Stack Web Developer Bootcamp?",answer:"Anyone with basic programming knowledge and a strong desire to learn web development can enroll. Both fresh graduates and working professionals looking to upskill are welcome."},{question:"What is the duration of the Full Stack Web Development course?",answer:"The Bootcamp typically lasts 6 months, with live mentor sessions, guided projects, and self-paced practice assignments."},{question:"I have been working at a service-based MNC for 2 years with a 4 LPA CTC. Will I be able to get a job at a product-based company with a better package with the help of this program?",answer:"Yes! Many learners from service-based backgrounds have transitioned successfully to product-based companies after completing this Bootcamp. Our curriculum and interview prep modules are specifically designed to help you upgrade your skills and land better roles."},{question:"How good is the placement record for this Full Stack Web Developer Bootcamp?",answer:"The Bootcamp has an excellent placement record, with thousands of students placed in top tech companies like Amazon, Flipkart, and Paytm. Our dedicated placement team ensures every graduate gets interview opportunities."}],o=g=>{f(u===g?null:g)};return r.jsx(B4,{id:"faqs",children:r.jsxs(U4,{children:[r.jsx(H4,{children:"Frequently Asked Questions"}),d.map((g,S)=>r.jsxs(R4,{children:[r.jsxs(q4,{onClick:()=>o(S),children:[g.question,u===S?r.jsx(w4,{size:20,color:"#aaa"}):r.jsx(N4,{size:20,color:"#aaa"})]}),r.jsx(Y4,{open:u===S,children:g.answer})]},S))]})})},X4=j.footer`
  background-color: #1b120e;
  color: #e3e3e3;
  padding: 4rem 2rem 2rem;
  font-family: 'Inter', sans-serif;
`,Q4=j.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,L4=j.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,Z4=j.h3`
  color: #fff;
  font-weight: 700;
  font-size: 1.3rem;
  span {
    color: #ff5722;
  }
`,V4=j.div`
  p {
    margin: 0.5rem 0;
    font-size: 0.95rem;
    color: #dcdcdc;
  }
  svg {
    margin-right: 0.5rem;
  }
`,k4=j.div`
  h4 {
    color: #fff;
    margin-bottom: 1rem;
  }
  p {
    color: #aaa;
  }
`,Ar=j.div`
  h4 {
    color: #fff;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    color: #c5c5c5;
    font-size: 0.95rem;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: 0.2s;
  }

  a:hover {
    color: #ff5722;
  }
`,K4=j.div`
  border-top: 1px solid #3b2e26;
  margin-top: 3rem;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    font-size: 0.9rem;
    color: #999;
  }
`,J4=j.div`
  display: flex;
  gap: 1rem;

  a {
    color: #ccc;
    font-size: 1.25rem;
    transition: 0.3s;
  }

  a:hover {
    color: #ff5722;
  }
`,$4=()=>r.jsxs(X4,{children:[r.jsxs(Q4,{children:[r.jsxs(L4,{children:[r.jsx("div",{children:r.jsxs(Z4,{children:[r.jsx("span",{children:"©"})," Techtrek"]})}),r.jsxs(V4,{children:[r.jsx("h4",{children:"Contact us"}),r.jsxs("p",{children:[r.jsx(f4,{})," 1800-123-3598"]}),r.jsxs("p",{children:[r.jsx(c4,{})," contact@techtrek.com"]})]}),r.jsxs(k4,{children:[r.jsx("h4",{children:"Our offerings"}),r.jsxs("p",{children:[r.jsx("strong",{children:"TechTrek"})," /job-bootcamp"]}),r.jsxs("p",{children:[r.jsx("strong",{children:"code360"})," by techtrek"]})]})]}),r.jsxs(Ar,{children:[r.jsx("h4",{children:"Tech Trek"}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsx(ia,{className:"link",to:"/careers",children:"Careers"})}),r.jsx("li",{children:r.jsx(ia,{className:"link",to:"/privacy-policy",children:"Privacy policy"})}),r.jsx("li",{children:r.jsx(ia,{className:"link",to:"/terms-conditions",children:"Terms & conditions"})}),r.jsx("li",{children:r.jsx(ia,{className:"link",to:"/pricing-refund",children:"Pricing & refund policy"})}),r.jsx("li",{children:r.jsx(ia,{className:"link",to:"/bug-bounty",children:"Bug bounty"})}),r.jsx("li",{children:r.jsx(ia,{className:"link",to:"/review",children:"Review"})}),r.jsx("li",{children:r.jsx(ia,{className:"link",to:"/press-release",children:"Press release"})})]})]}),r.jsxs(Ar,{children:[r.jsx("h4",{children:"Products"}),r.jsx("a",{href:"#",children:"Job Bootcamp"}),r.jsx("a",{href:"#",children:"Code 360"}),r.jsx("a",{href:"#",children:"Professional Certifications"}),r.jsx("a",{href:"#",children:"Student Certifications"})]}),r.jsxs(Ar,{children:[r.jsx("h4",{children:"Community"}),r.jsx("a",{href:"#",children:"10X Club"}),r.jsx("a",{href:"#",children:"Student Chapters"}),r.jsx("a",{href:"#",children:"Hire from us"})]})]}),r.jsxs(K4,{children:[r.jsx("p",{children:"Copyright © Sunrise Mentors Pvt. Ltd."}),r.jsxs(J4,{children:[r.jsx("a",{href:"#",children:r.jsx(l4,{})}),r.jsx("a",{href:"#",children:r.jsx(e4,{})}),r.jsx("a",{href:"#",children:r.jsx(a4,{})}),r.jsx("a",{href:"#",children:r.jsx(n4,{})}),r.jsx("a",{href:"#",children:r.jsx(i4,{})})]})]})]}),W4=j.section`
  padding: 5rem 2rem;
  background: #fffaf8;
`,F4=j.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #111;
`,I4=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  justify-items: center;
`,Fa=j.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
  }

  &.wide {
    grid-column: span 2;
  }
`,Cu=j.div`
  padding: 1.8rem;
`,P4=j.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`,t3=j.span`
  position: absolute;
  top: 16px;
  left: 16px;
  background: #fff;
  color: #ff5722;
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 999px;
  padding: 0.4rem 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`,Du=j.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 0.4rem;
`,_u=j.p`
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`,e3=j.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`,Tr=j.span`
  background: #fff3ed;
  color: #ff5722;
  font-weight: 500;
  border-radius: 999px;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
`;j(Fa)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  img {
    width: 48px;
    height: 48px;
    object-fit: contain;
  }
  div {
    text-align: left;
  }
`;const l3=()=>r.jsxs(W4,{children:[r.jsx(F4,{children:"Your one stop destination to code, create & connect"}),r.jsxs(I4,{children:[r.jsx(Fa,{children:r.jsxs(Cu,{children:[r.jsx("img",{src:"https://files.codingninjas.in/10x-club-logo-9823.png",alt:"10X Club",style:{width:"100px",marginBottom:"1rem"}}),r.jsx(Du,{children:"Unlock learning, career opportunities & success from X to 10X"}),r.jsx(_u,{children:"Join our 10X Club for growth & networking"}),r.jsxs(e3,{children:[r.jsx(Tr,{children:"Industry Expert Session"}),r.jsx(Tr,{children:"CXO Cafe"}),r.jsx(Tr,{children:"Tech Conference"})]})]})}),r.jsxs(Fa,{children:[r.jsx(t3,{children:"🔥 Hackathons"}),r.jsx(P4,{src:"https://files.codingninjas.in/hackathon-banner-9824.jpg",alt:"Hackathon"})]}),r.jsx(Fa,{children:r.jsxs(Cu,{children:[r.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png",alt:"CXOs",style:{width:"40px",marginBottom:"0.8rem"}}),r.jsx(Du,{children:"Learn from CXOs, founders & more"}),r.jsx(_u,{children:"Exclusive insights from industry leaders"})]})}),r.jsx(Fa,{children:r.jsxs(Cu,{children:[r.jsx(Du,{children:"Hands on workshops"}),r.jsx(_u,{children:"Learn latest tools, make open-source contributions and more!"})]})}),r.jsx(Fa,{children:r.jsxs(Cu,{children:[r.jsx("img",{src:"https://cdn-icons-png.flaticon.com/512/942/942748.png",alt:"Partner Events",style:{width:"40px",marginBottom:"0.8rem"}}),r.jsx(Du,{children:"Partner events with clubs from IITs, IIMs"}),r.jsx(_u,{children:"Network with top student communities"})]})})]})]});const a3=u=>u.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),n3=u=>u.replace(/^([A-Z])|[\s-_]+(\w)/g,(f,d,o)=>o?o.toUpperCase():d.toLowerCase()),g1=u=>{const f=n3(u);return f.charAt(0).toUpperCase()+f.slice(1)},W1=(...u)=>u.filter((f,d,o)=>!!f&&f.trim()!==""&&o.indexOf(f)===d).join(" ").trim(),i3=u=>{for(const f in u)if(f.startsWith("aria-")||f==="role"||f==="title")return!0};var u3={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const c3=Jt.forwardRef(({color:u="currentColor",size:f=24,strokeWidth:d=2,absoluteStrokeWidth:o,className:g="",children:S,iconNode:M,...N},D)=>Jt.createElement("svg",{ref:D,...u3,width:f,height:f,stroke:u,strokeWidth:o?Number(d)*24/Number(f):d,className:W1("lucide",g),...!S&&!i3(N)&&{"aria-hidden":"true"},...N},[...M.map(([B,G])=>Jt.createElement(B,G)),...Array.isArray(S)?S:[S]]));const Xe=(u,f)=>{const d=Jt.forwardRef(({className:o,...g},S)=>Jt.createElement(c3,{ref:S,iconNode:f,className:W1(`lucide-${a3(g1(u))}`,`lucide-${u}`,o),...g}));return d.displayName=g1(u),d};const f3=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],r3=Xe("book",f3);const o3=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],s3=Xe("clock",o3);const d3=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],h3=Xe("file-text",d3);const m3=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],g3=Xe("github",m3);const p3=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],y3=Xe("graduation-cap",p3);const v3=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],b3=Xe("lightbulb",v3);const x3=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],S3=Xe("linkedin",x3);const j3=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],z3=Xe("pencil",j3);const A3=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],T3=Xe("users",A3);const E3=[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]],M3=Xe("users-round",E3),O3=j.section`
  background: #0d0d0d;
  color: #fff;
  padding: 5rem 2rem;
`,p1=j.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,y1=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.8rem;
  justify-items: center;
  margin-bottom: 5rem;
`,v1=j.div`
  background: #161616;
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 420px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  transition: 0.3s ease;
  &:hover {
    transform: translateY(-6px);
    background: #1c1c1c;
  }
`,b1=j.div`
  background: ${({color:u})=>u}22;
  color: ${({color:u})=>u};
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
`,x1=j.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`,S1=j.p`
  font-size: 0.95rem;
  color: #aaa;
  line-height: 1.6;
`,C3=()=>{const u=[{icon:r.jsx(T3,{size:22}),title:"1:1 expert session",text:"Connects theoretical understanding with practical implementation through their insights",color:"#4ade80"},{icon:r.jsx(y3,{size:22}),title:"Expert faculty from MAANG",text:"Top-tier education enriched by practical knowledge and innovation",color:"#7c3aed"},{icon:r.jsx(b3,{size:22}),title:"Projects & hackathons",text:"Hands-on learning to spark creative problem-solving",color:"#fb7185"},{icon:r.jsx(s3,{size:22}),title:"Fastest doubt support",text:"Personalised assistance for a clear understanding of concepts",color:"#f97316"},{icon:r.jsx(r3,{size:22}),title:"Self-paced classes",text:"Learn at your pace with practice and instant feedback",color:"#f97316"}],f=[{icon:r.jsx(g3,{size:22}),title:"Github profile",text:"Showcase your projects with professional code repositories.",color:"#22c55e"},{icon:r.jsx(S3,{size:22}),title:"LinkedIn profile",text:"Build your tech identity with a standout profile.",color:"#3b82f6"},{icon:r.jsx(h3,{size:22}),title:"Resume writing",text:"Create an impressive resume highlighting your technical skills.",color:"#facc15"},{icon:r.jsx(z3,{size:22}),title:"Soft skills",text:"Master communication and salary negotiation skills.",color:"#fb923c"},{icon:r.jsx(M3,{size:22}),title:"Interview preparation",text:"Mock interviews and expert sessions to make you job-ready.",color:"#ef4444"}];return r.jsxs(O3,{children:[r.jsx(p1,{children:"Job Bootcamp Benefits"}),r.jsx(y1,{children:u.map((d,o)=>r.jsxs(v1,{children:[r.jsx(b1,{color:d.color,children:d.icon}),r.jsx(x1,{children:d.title}),r.jsx(S1,{children:d.text})]},o))}),r.jsx(p1,{children:"Benefits Beyond Learning"}),r.jsx(y1,{children:f.map((d,o)=>r.jsxs(v1,{children:[r.jsx(b1,{color:d.color,children:d.icon}),r.jsx(x1,{children:d.title}),r.jsx(S1,{children:d.text})]},o))})]})},D3=j.section`
  background: #fff;
  color: #111;
  padding: 5rem 2rem;
  text-align: center;
`,_3=j.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`,w3=j.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem;
  justify-items: center;
  text-align: left;
  max-width: 1100px;
  margin: 0 auto 3rem auto;
`,N3=j.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  max-width: 320px;
`,B3=j.div`
  font-size: 2rem;
  flex-shrink: 0;
`,U3=j.div`
  h3 {
    font-size: 1.05rem;
    font-weight: 600;
    color: #111;
    margin-bottom: 0.4rem;
  }
  p {
    color: #666;
    font-size: 0.95rem;
    line-height: 1.5;
  }
`,H3=j.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`,j1=j.button`
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  ${({primary:u})=>u?`
    background: #ff5722;
    color: white;
    border: none;
    &:hover { background: #e14a17; }
  `:`
    background: transparent;
    color: #111;
    border: 1.5px solid #111;
    &:hover { background: #111; color: white; }
  `}
`,R3=()=>{const u=[{icon:"🏃‍♂️",title:"Profiles highlighted on hirist.com",text:"Get access to an abundance of job openings."},{icon:"👥",title:"1200+ Companies Hiring",text:"Expanded job search with a vast network of companies hiring."},{icon:"📤",title:"Profiles highlighted on naukri.com",text:"Make a distinct mark for yourself on India's leading job portal."},{icon:"👔",title:"Dedicated placement team",text:"Guiding and motivating you every step of the way."},{icon:"💼",title:"50+ Members placement team",text:"A dedicated team to help you get placed in your dream company."},{icon:"💬",title:"Job openings shared every day",text:"We send job openings daily to your WhatsApp directly."}];return r.jsxs(D3,{children:[r.jsx(_3,{children:"Placement Benefits"}),r.jsx(w3,{children:u.map((f,d)=>r.jsxs(N3,{children:[r.jsx(B3,{children:f.icon}),r.jsxs(U3,{children:[r.jsx("h3",{children:f.title}),r.jsx("p",{children:f.text})]})]},d))}),r.jsxs(H3,{children:[r.jsx(j1,{children:"Request callback"}),r.jsx(j1,{primary:!0,children:"Book a free webinar"})]})]})},q3="/assets/TechTrek-Logo-fM0ly1PS.jpg",Y3=j.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  z-index: 1000;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
    height: 60px;
  }

  @media (max-width: 480px) {
    padding: 0 1rem;
    height: 56px;
  }

  img {
    height: 32px;

    @media (max-width: 480px) {
      height: 28px;
    }
  }

  button {
    background-color: #ff6b35;
    color: white;
    border: none;
    padding: 0.6rem 1.4rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.95rem;
    transition: background 0.3s;

    &:hover {
      background-color: #ff4f00;
    }

    @media (max-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
    }

    @media (max-width: 480px) {
      padding: 0.4rem 0.8rem;
      font-size: 0.8rem;
    }
  }
`,G3=()=>r.jsxs(Y3,{children:[r.jsx("img",{src:q3,alt:"TechTrek Logo"}),r.jsx("button",{children:"Request callback"})]}),X3=j.nav`
  position: fixed;
  top: 70px; /* below the top navbar */
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  transition: all 0.4s ease-in-out;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    top: 60px;
    padding: 0 0.5rem;
  }

  @media (max-width: 480px) {
    top: 56px;
  }

  ul {
    display: flex;
    list-style: none;
    background-color: #fff;
    border-radius: 999px;
    padding: 0.6rem 2rem;
    gap: 1.5rem;
    align-items: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    transition: all 0.4s ease-in-out;
    margin: 0 auto;
    white-space: nowrap;

    @media (max-width: 768px) {
      padding: 0.5rem 1.5rem;
      gap: 1rem;
      border-radius: 12px;
    }

    @media (max-width: 480px) {
      padding: 0.5rem 1rem;
      gap: 0.5rem;
      border-radius: 12px;
    }
  }

  li {
    font-size: 0.95rem;
    font-weight: 500;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 999px;
    padding: 0.4rem 0.8rem;
    white-space: nowrap;

    &:hover {
      background-color: #f4f4f4;
    }

    &.active {
      background-color: #222;
      color: white;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      font-size: 0.85rem;
      padding: 0.35rem 0.7rem;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
      padding: 0.3rem 0.6rem;
    }
  }

  ${({isScrolled:u})=>u&&Wu`
      ul {
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
        transform: scale(0.98);
        background-color: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
      }
    `}
`,Q3=({isScrolled:u})=>r.jsx(X3,{isScrolled:u,children:r.jsxs("ul",{children:[r.jsx("li",{children:"About the course"}),r.jsx("li",{children:"Curriculum"}),r.jsx("li",{className:"active",children:"Course journey"}),r.jsx("li",{children:"Benefits"}),r.jsx("li",{children:"Plans"}),r.jsx("li",{children:"FAQs"})]})}),L3=j.div`
  font-family: "Poppins", sans-serif;
  background-color: #f8f7fc;
  min-height: 200vh; /* to allow scroll */
   margin: 0;
  padding: 0;
`,Z3=()=>{const[u,f]=Jt.useState(!1);return Jt.useEffect(()=>{const d=()=>{f(window.scrollY>50)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]),r.jsxs(L3,{children:[r.jsx(G3,{}),r.jsx(Q3,{isScrolled:u})]})},V3=j.div`
  padding: 6rem 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
`,k3=()=>r.jsxs(V3,{children:[r.jsx("h1",{children:"Careers at TechTrek"}),r.jsx("p",{children:"Explore exciting opportunities to join our growing team!"})]}),K3=j.div`
  padding: 6rem 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
`,J3=()=>r.jsxs(K3,{children:[r.jsx("h1",{children:"Privacy Policy"}),r.jsx("p",{children:"We value your privacy and ensure your data is secure."})]}),$3=()=>r.jsx("div",{children:"TermsConditions"}),W3=j.div`
  padding: 6rem 2rem;
  font-family: "Poppins", sans-serif;
  text-align: center;
`,F3=()=>r.jsxs(W3,{children:[r.jsx("h1",{children:"Pricing & Refund Policy"}),r.jsx("p",{children:"Our pricing and refund policy ensures transparency and customer satisfaction."})]}),I3=()=>r.jsx("div",{children:"BugBounty"}),P3=()=>r.jsx("div",{children:"Review"}),t5=()=>r.jsx("div",{children:"PressRelease"}),e5=()=>r.jsxs(r.Fragment,{children:[r.jsx(Z3,{}),r.jsx(Vg,{}),r.jsx(ap,{}),r.jsx(rp,{}),r.jsx(mp,{}),r.jsx(R3,{}),r.jsx(C3,{}),r.jsx(l3,{}),r.jsx(Op,{}),r.jsx(Xp,{}),r.jsx(Kp,{}),r.jsx(j4,{}),r.jsx(_4,{}),r.jsx(G4,{}),r.jsx($4,{})]});function l5(){return r.jsx(z2,{children:r.jsxs(A2,{children:[r.jsx(Ul,{path:"/",element:r.jsx(e5,{})}),r.jsx(Ul,{path:"/careers",element:r.jsx(k3,{})}),r.jsx(Ul,{path:"/privacy-policy",element:r.jsx(J3,{})}),r.jsx(Ul,{path:"/terms-conditions",element:r.jsx($3,{})}),r.jsx(Ul,{path:"/pricing-refund",element:r.jsx(F3,{})}),r.jsx(Ul,{path:"/bug-bounty",element:r.jsx(I3,{})}),r.jsx(Ul,{path:"/review",element:r.jsx(P3,{})}),r.jsx(Ul,{path:"/press-release",element:r.jsx(t5,{})})]})})}const a5={colors:{bg:"#0e0f1a",surface:"#15192c",primary:"#6C63FF",secondary:"#00D4FF",text:"#E6E8F0",muted:"#9aa3b2",success:"#22c55e",warning:"#f59e0b",danger:"#ef4444"},radii:{sm:"8px",md:"12px",lg:"20px",pill:"999px"},spacing:u=>`${u*4}px`},n5=Ng`
  *, *::before, *::after { box-sizing: border-box; }
  html, body, #root { height: 100%; }
  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, 'Helvetica Neue', Arial, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
    color: ${({theme:u})=>u.colors.text};
    background: ${({theme:u})=>u.colors.bg};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  img { max-width: 100%; display: block; }
  a { color: inherit; text-decoration: none; }
  button { cursor: pointer; }
`;w2.createRoot(document.getElementById("root")).render(r.jsx(Ut.StrictMode,{children:r.jsxs(Dg,{theme:a5,children:[r.jsx(n5,{}),r.jsx(l5,{})]})}));
