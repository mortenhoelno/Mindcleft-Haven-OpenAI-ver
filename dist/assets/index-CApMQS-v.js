(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function lS(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var yh={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pv;function cS(){if(pv)return ae;pv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),v=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=v&&I[v]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,x={};function y(I,Z,yt){this.props=I,this.context=Z,this.refs=x,this.updater=yt||M}y.prototype.isReactComponent={},y.prototype.setState=function(I,Z){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,Z,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function T(){}T.prototype=y.prototype;function w(I,Z,yt){this.props=I,this.context=Z,this.refs=x,this.updater=yt||M}var L=w.prototype=new T;L.constructor=w,b(L,y.prototype),L.isPureReactComponent=!0;var F=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function z(I,Z,yt){var J=yt.ref;return{$$typeof:c,type:I,key:Z,ref:J!==void 0?J:null,props:yt}}function R(I,Z){return z(I.type,Z,I.props)}function H(I){return typeof I=="object"&&I!==null&&I.$$typeof===c}function et(I){var Z={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(yt){return Z[yt]})}var G=/\/+/g;function Q(I,Z){return typeof I=="object"&&I!==null&&I.key!=null?et(""+I.key):Z.toString(36)}function K(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(B,B):(I.status="pending",I.then(function(Z){I.status==="pending"&&(I.status="fulfilled",I.value=Z)},function(Z){I.status==="pending"&&(I.status="rejected",I.reason=Z)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function N(I,Z,yt,J,pt){var Et=typeof I;(Et==="undefined"||Et==="boolean")&&(I=null);var St=!1;if(I===null)St=!0;else switch(Et){case"bigint":case"string":case"number":St=!0;break;case"object":switch(I.$$typeof){case c:case t:St=!0;break;case g:return St=I._init,N(St(I._payload),Z,yt,J,pt)}}if(St)return pt=pt(I),St=J===""?"."+Q(I,0):J,F(pt)?(yt="",St!=null&&(yt=St.replace(G,"$&/")+"/"),N(pt,Z,yt,"",function(re){return re})):pt!=null&&(H(pt)&&(pt=R(pt,yt+(pt.key==null||I&&I.key===pt.key?"":(""+pt.key).replace(G,"$&/")+"/")+St)),Z.push(pt)),1;St=0;var Yt=J===""?".":J+":";if(F(I))for(var It=0;It<I.length;It++)J=I[It],Et=Yt+Q(J,It),St+=N(J,Z,yt,Et,pt);else if(It=S(I),typeof It=="function")for(I=It.call(I),It=0;!(J=I.next()).done;)J=J.value,Et=Yt+Q(J,It++),St+=N(J,Z,yt,Et,pt);else if(Et==="object"){if(typeof I.then=="function")return N(K(I),Z,yt,J,pt);throw Z=String(I),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return St}function Y(I,Z,yt){if(I==null)return I;var J=[],pt=0;return N(I,J,"","",function(Et){return Z.call(yt,Et,pt++)}),J}function X(I){if(I._status===-1){var Z=I._result;Z=Z(),Z.then(function(yt){(I._status===0||I._status===-1)&&(I._status=1,I._result=yt)},function(yt){(I._status===0||I._status===-1)&&(I._status=2,I._result=yt)}),I._status===-1&&(I._status=0,I._result=Z)}if(I._status===1)return I._result.default;throw I._result}var mt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},Mt={map:Y,forEach:function(I,Z,yt){Y(I,function(){Z.apply(this,arguments)},yt)},count:function(I){var Z=0;return Y(I,function(){Z++}),Z},toArray:function(I){return Y(I,function(Z){return Z})||[]},only:function(I){if(!H(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return ae.Activity=_,ae.Children=Mt,ae.Component=y,ae.Fragment=n,ae.Profiler=r,ae.PureComponent=w,ae.StrictMode=a,ae.Suspense=d,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ae.__COMPILER_RUNTIME={__proto__:null,c:function(I){return O.H.useMemoCache(I)}},ae.cache=function(I){return function(){return I.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(I,Z,yt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var J=b({},I.props),pt=I.key;if(Z!=null)for(Et in Z.key!==void 0&&(pt=""+Z.key),Z)!q.call(Z,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&Z.ref===void 0||(J[Et]=Z[Et]);var Et=arguments.length-2;if(Et===1)J.children=yt;else if(1<Et){for(var St=Array(Et),Yt=0;Yt<Et;Yt++)St[Yt]=arguments[Yt+2];J.children=St}return z(I.type,pt,J)},ae.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:l,_context:I},I},ae.createElement=function(I,Z,yt){var J,pt={},Et=null;if(Z!=null)for(J in Z.key!==void 0&&(Et=""+Z.key),Z)q.call(Z,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(pt[J]=Z[J]);var St=arguments.length-2;if(St===1)pt.children=yt;else if(1<St){for(var Yt=Array(St),It=0;It<St;It++)Yt[It]=arguments[It+2];pt.children=Yt}if(I&&I.defaultProps)for(J in St=I.defaultProps,St)pt[J]===void 0&&(pt[J]=St[J]);return z(I,Et,pt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(I){return{$$typeof:f,render:I}},ae.isValidElement=H,ae.lazy=function(I){return{$$typeof:g,_payload:{_status:-1,_result:I},_init:X}},ae.memo=function(I,Z){return{$$typeof:p,type:I,compare:Z===void 0?null:Z}},ae.startTransition=function(I){var Z=O.T,yt={};O.T=yt;try{var J=I(),pt=O.S;pt!==null&&pt(yt,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(B,mt)}catch(Et){mt(Et)}finally{Z!==null&&yt.types!==null&&(Z.types=yt.types),O.T=Z}},ae.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ae.use=function(I){return O.H.use(I)},ae.useActionState=function(I,Z,yt){return O.H.useActionState(I,Z,yt)},ae.useCallback=function(I,Z){return O.H.useCallback(I,Z)},ae.useContext=function(I){return O.H.useContext(I)},ae.useDebugValue=function(){},ae.useDeferredValue=function(I,Z){return O.H.useDeferredValue(I,Z)},ae.useEffect=function(I,Z){return O.H.useEffect(I,Z)},ae.useEffectEvent=function(I){return O.H.useEffectEvent(I)},ae.useId=function(){return O.H.useId()},ae.useImperativeHandle=function(I,Z,yt){return O.H.useImperativeHandle(I,Z,yt)},ae.useInsertionEffect=function(I,Z){return O.H.useInsertionEffect(I,Z)},ae.useLayoutEffect=function(I,Z){return O.H.useLayoutEffect(I,Z)},ae.useMemo=function(I,Z){return O.H.useMemo(I,Z)},ae.useOptimistic=function(I,Z){return O.H.useOptimistic(I,Z)},ae.useReducer=function(I,Z,yt){return O.H.useReducer(I,Z,yt)},ae.useRef=function(I){return O.H.useRef(I)},ae.useState=function(I){return O.H.useState(I)},ae.useSyncExternalStore=function(I,Z,yt){return O.H.useSyncExternalStore(I,Z,yt)},ae.useTransition=function(){return O.H.useTransition()},ae.version="19.2.0",ae}var mv;function xd(){return mv||(mv=1,yh.exports=cS()),yh.exports}var fd=xd();const Kc=lS(fd);var xh={exports:{}},Yo={},Sh={exports:{}},Mh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv;function uS(){return gv||(gv=1,(function(c){function t(N,Y){var X=N.length;N.push(Y);t:for(;0<X;){var mt=X-1>>>1,Mt=N[mt];if(0<r(Mt,Y))N[mt]=Y,N[X]=Mt,X=mt;else break t}}function n(N){return N.length===0?null:N[0]}function a(N){if(N.length===0)return null;var Y=N[0],X=N.pop();if(X!==Y){N[0]=X;t:for(var mt=0,Mt=N.length,I=Mt>>>1;mt<I;){var Z=2*(mt+1)-1,yt=N[Z],J=Z+1,pt=N[J];if(0>r(yt,X))J<Mt&&0>r(pt,yt)?(N[mt]=pt,N[J]=X,mt=J):(N[mt]=yt,N[Z]=X,mt=Z);else if(J<Mt&&0>r(pt,X))N[mt]=pt,N[J]=X,mt=J;else break t}}return Y}function r(N,Y){var X=N.sortIndex-Y.sortIndex;return X!==0?X:N.id-Y.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;c.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();c.unstable_now=function(){return u.now()-f}}var d=[],p=[],g=1,_=null,v=3,S=!1,M=!1,b=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function L(N){for(var Y=n(p);Y!==null;){if(Y.callback===null)a(p);else if(Y.startTime<=N)a(p),Y.sortIndex=Y.expirationTime,t(d,Y);else break;Y=n(p)}}function F(N){if(b=!1,L(N),!M)if(n(d)!==null)M=!0,B||(B=!0,et());else{var Y=n(p);Y!==null&&K(F,Y.startTime-N)}}var B=!1,O=-1,q=5,z=-1;function R(){return x?!0:!(c.unstable_now()-z<q)}function H(){if(x=!1,B){var N=c.unstable_now();z=N;var Y=!0;try{t:{M=!1,b&&(b=!1,T(O),O=-1),S=!0;var X=v;try{e:{for(L(N),_=n(d);_!==null&&!(_.expirationTime>N&&R());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,v=_.priorityLevel;var Mt=mt(_.expirationTime<=N);if(N=c.unstable_now(),typeof Mt=="function"){_.callback=Mt,L(N),Y=!0;break e}_===n(d)&&a(d),L(N)}else a(d);_=n(d)}if(_!==null)Y=!0;else{var I=n(p);I!==null&&K(F,I.startTime-N),Y=!1}}break t}finally{_=null,v=X,S=!1}Y=void 0}}finally{Y?et():B=!1}}}var et;if(typeof w=="function")et=function(){w(H)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,Q=G.port2;G.port1.onmessage=H,et=function(){Q.postMessage(null)}}else et=function(){y(H,0)};function K(N,Y){O=y(function(){N(c.unstable_now())},Y)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(N){N.callback=null},c.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<N?Math.floor(1e3/N):5},c.unstable_getCurrentPriorityLevel=function(){return v},c.unstable_next=function(N){switch(v){case 1:case 2:case 3:var Y=3;break;default:Y=v}var X=v;v=Y;try{return N()}finally{v=X}},c.unstable_requestPaint=function(){x=!0},c.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var X=v;v=N;try{return Y()}finally{v=X}},c.unstable_scheduleCallback=function(N,Y,X){var mt=c.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?mt+X:mt):X=mt,N){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=X+Mt,N={id:g++,callback:Y,priorityLevel:N,startTime:X,expirationTime:Mt,sortIndex:-1},X>mt?(N.sortIndex=X,t(p,N),n(d)===null&&N===n(p)&&(b?(T(O),O=-1):b=!0,K(F,X-mt))):(N.sortIndex=Mt,t(d,N),M||S||(M=!0,B||(B=!0,et()))),N},c.unstable_shouldYield=R,c.unstable_wrapCallback=function(N){var Y=v;return function(){var X=v;v=Y;try{return N.apply(this,arguments)}finally{v=X}}}})(Mh)),Mh}var vv;function fS(){return vv||(vv=1,Sh.exports=uS()),Sh.exports}var Eh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _v;function hS(){if(_v)return Rn;_v=1;var c=xd();function t(d){var p="https://react.dev/errors/"+d;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+d+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},r=Symbol.for("react.portal");function l(d,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:_==null?null:""+_,children:d,containerInfo:p,implementation:g}}var u=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(d,p){if(d==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Rn.createPortal=function(d,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return l(d,p,null,g)},Rn.flushSync=function(d){var p=u.T,g=a.p;try{if(u.T=null,a.p=2,d)return d()}finally{u.T=p,a.p=g,a.d.f()}},Rn.preconnect=function(d,p){typeof d=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(d,p))},Rn.prefetchDNS=function(d){typeof d=="string"&&a.d.D(d)},Rn.preinit=function(d,p){if(typeof d=="string"&&p&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?a.d.S(d,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:v,fetchPriority:S}):g==="script"&&a.d.X(d,{crossOrigin:_,integrity:v,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Rn.preinitModule=function(d,p){if(typeof d=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);a.d.M(d,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(d)},Rn.preload=function(d,p){if(typeof d=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin);a.d.L(d,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Rn.preloadModule=function(d,p){if(typeof d=="string")if(p){var g=f(p.as,p.crossOrigin);a.d.m(d,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(d)},Rn.requestFormReset=function(d){a.d.r(d)},Rn.unstable_batchedUpdates=function(d,p){return d(p)},Rn.useFormState=function(d,p,g){return u.H.useFormState(d,p,g)},Rn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Rn.version="19.2.0",Rn}var yv;function dS(){if(yv)return Eh.exports;yv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),Eh.exports=hS(),Eh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xv;function pS(){if(xv)return Yo;xv=1;var c=fS(),t=xd(),n=dS();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function u(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function d(e){if(l(e)!==e)throw Error(a(188))}function p(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,o=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(o=h.return,o!==null){s=o;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return d(h),e;if(m===o)return d(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==o.return)s=h,o=m;else{for(var E=!1,D=h.child;D;){if(D===s){E=!0,s=h,o=m;break}if(D===o){E=!0,o=h,s=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===s){E=!0,s=m,o=h;break}if(D===o){E=!0,o=m,s=h;break}D=D.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==o)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function g(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=g(e),i!==null)return i;e=e.sibling}return null}var _=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),T=Symbol.for("react.consumer"),w=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var G=Symbol.for("react.client.reference");function Q(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===G?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case F:return"Suspense";case B:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case w:return e.displayName||"Context";case T:return(e._context.displayName||"Context")+".Consumer";case L:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return i=e.displayName||null,i!==null?i:Q(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return Q(e(i))}catch{}}return null}var K=Array.isArray,N=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X={pending:!1,data:null,method:null,action:null},mt=[],Mt=-1;function I(e){return{current:e}}function Z(e){0>Mt||(e.current=mt[Mt],mt[Mt]=null,Mt--)}function yt(e,i){Mt++,mt[Mt]=e.current,e.current=i}var J=I(null),pt=I(null),Et=I(null),St=I(null);function Yt(e,i){switch(yt(Et,i),yt(pt,e),yt(J,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?Bg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=Bg(i),e=Ig(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(J),yt(J,e)}function It(){Z(J),Z(pt),Z(Et)}function re(e){e.memoizedState!==null&&yt(St,e);var i=J.current,s=Ig(i,e.type);i!==s&&(yt(pt,e),yt(J,s))}function j(e){pt.current===e&&(Z(J),Z(pt)),St.current===e&&(Z(St),ko._currentValue=X)}var ue,fe;function Se(e){if(ue===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ue=i&&i[1]||"",fe=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+e+fe}var jt=!1;function me(e,i){if(!e||jt)return"";jt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ut){var ot=ut}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ut){ot=ut}e.call(_t.prototype)}}else{try{throw Error()}catch(ut){ot=ut}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ut){if(ut&&ot&&typeof ut.stack=="string")return[ut.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=o.DetermineComponentFrameRoot(),E=m[0],D=m[1];if(E&&D){var k=E.split(`
`),st=D.split(`
`);for(h=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;h<st.length&&!st[h].includes("DetermineComponentFrameRoot");)h++;if(o===k.length||h===st.length)for(o=k.length-1,h=st.length-1;1<=o&&0<=h&&k[o]!==st[h];)h--;for(;1<=o&&0<=h;o--,h--)if(k[o]!==st[h]){if(o!==1||h!==1)do if(o--,h--,0>h||k[o]!==st[h]){var gt=`
`+k[o].replace(" at new "," at ");return e.displayName&&gt.includes("<anonymous>")&&(gt=gt.replace("<anonymous>",e.displayName)),gt}while(1<=o&&0<=h);break}}}finally{jt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?Se(s):""}function le(e,i){switch(e.tag){case 26:case 27:case 5:return Se(e.type);case 16:return Se("Lazy");case 13:return e.child!==i&&i!==null?Se("Suspense Fallback"):Se("Suspense");case 19:return Se("SuspenseList");case 0:case 15:return me(e.type,!1);case 11:return me(e.type.render,!1);case 1:return me(e.type,!0);case 31:return Se("Activity");default:return""}}function ne(e){try{var i="",s=null;do i+=le(e,s),s=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var He=Object.prototype.hasOwnProperty,V=c.unstable_scheduleCallback,U=c.unstable_cancelCallback,ft=c.unstable_shouldYield,Tt=c.unstable_requestPaint,xt=c.unstable_now,At=c.unstable_getCurrentPriorityLevel,qt=c.unstable_ImmediatePriority,Lt=c.unstable_UserBlockingPriority,Dt=c.unstable_NormalPriority,ie=c.unstable_LowPriority,wt=c.unstable_IdlePriority,Vt=c.log,he=c.unstable_setDisableYieldValue,Qt=null,Ct=null;function $t(e){if(typeof Vt=="function"&&he(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Qt,e)}catch{}}var Xt=Math.clz32?Math.clz32:ht,Ye=Math.log,A=Math.LN2;function ht(e){return e>>>=0,e===0?32:31-(Ye(e)/A|0)|0}var rt=256,dt=262144,bt=4194304;function Gt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ee(e,i,s){var o=e.pendingLanes;if(o===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~m,o!==0?h=Gt(o):(E&=D,E!==0?h=Gt(E):s||(s=D&~e,s!==0&&(h=Gt(s))))):(D=o&~m,D!==0?h=Gt(D):E!==0?h=Gt(E):s||(s=o&~e,s!==0&&(h=Gt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Pe(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ke(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=bt;return bt<<=1,(bt&62914560)===0&&(bt=4194304),e}function je(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Ve(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Un(e,i,s,o,h,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var D=e.entanglements,k=e.expirationTimes,st=e.hiddenUpdates;for(s=E&~s;0<s;){var gt=31-Xt(s),_t=1<<gt;D[gt]=0,k[gt]=-1;var ot=st[gt];if(ot!==null)for(st[gt]=null,gt=0;gt<ot.length;gt++){var ut=ot[gt];ut!==null&&(ut.lane&=-536870913)}s&=~_t}o!==0&&An(e,o,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function An(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Xt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|s&261930}function _i(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var o=31-Xt(s),h=1<<o;h&i|e[o]&i&&(e[o]|=i),s&=~h}}function Li(e,i){var s=i&-i;return s=(s&42)!==0?1:yi(s),(s&(e.suspendedLanes|i))!==0?0:s}function yi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Vs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function cs(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:ov(e.type))}function io(e,i){var s=Y.p;try{return Y.p=e,i()}finally{Y.p=s}}var xi=Math.random().toString(36).slice(2),hn="__reactFiber$"+xi,wn="__reactProps$"+xi,Ma="__reactContainer$"+xi,P="__reactEvents$"+xi,$="__reactListeners$"+xi,lt="__reactHandles$"+xi,ct="__reactResources$"+xi,nt="__reactMarker$"+xi;function Rt(e){delete e[hn],delete e[wn],delete e[P],delete e[$],delete e[lt]}function Ut(e){var i=e[hn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[Ma]||s[hn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=Xg(e);e!==null;){if(s=e[hn])return s;e=Xg(e)}return i}e=s,s=e.parentNode}return null}function Ot(e){if(e=e[hn]||e[Ma]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Ft(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function Kt(e){var i=e[ct];return i||(i=e[ct]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Pt(e){e[nt]=!0}var Jt=new Set,Ee={};function Le(e,i){Ue(e,i),Ue(e+"Capture",i)}function Ue(e,i){for(Ee[e]=i,e=0;e<i.length;e++)Jt.add(i[e])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Te={},Wt={};function xn(e){return He.call(Wt,e)?!0:He.call(Te,e)?!1:Nn.test(e)?Wt[e]=!0:(Te[e]=!0,!1)}function be(e,i,s){if(xn(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Bn(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function In(e,i,s,o){if(o===null)e.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+o)}}function nn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ks(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function an(e,i,s){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,m=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function ri(e){if(!e._valueTracker){var i=ks(e)?"checked":"value";e._valueTracker=an(e,i,""+e[i])}}function qs(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),o="";return e&&(o=ks(e)?e.checked?"true":"false":e.value),e=o,e!==s?(i.setValue(e),!0):!1}function Sn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ao=/[\n"\\]/g;function Fn(e){return e.replace(ao,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Xs(e,i,s,o,h,m,E,D){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+nn(i)):e.value!==""+nn(i)&&(e.value=""+nn(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?du(e,E,nn(i)):s!=null?du(e,E,nn(s)):o!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+nn(D):e.removeAttribute("name")}function Ld(e,i,s,o,h,m,E,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){ri(e);return}s=s!=null?""+nn(s):"",i=i!=null?""+nn(i):s,D||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),ri(e)}function du(e,i,s){i==="number"&&Sn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ws(e,i,s,o){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&o&&(e[s].defaultSelected=!0)}else{for(s=""+nn(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Ud(e,i,s){if(i!=null&&(i=""+nn(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+nn(s):""}function Nd(e,i,s,o){if(i==null){if(o!=null){if(s!=null)throw Error(a(92));if(K(o)){if(1<o.length)throw Error(a(93));o=o[0]}s=o}s==null&&(s=""),i=s}s=nn(i),e.defaultValue=s,o=e.textContent,o===s&&o!==""&&o!==null&&(e.value=o),ri(e)}function Ys(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var iy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Od(e,i,s){var o=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,s):typeof s!="number"||s===0||iy.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function zd(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var o in s)!s.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&s[h]!==o&&Od(e,h,o)}else for(var m in i)i.hasOwnProperty(m)&&Od(e,m,i[m])}function pu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ay=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),sy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function dl(e){return sy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var mu=null;function gu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var js=null,Zs=null;function Pd(e){var i=Ot(e);if(i&&(e=i.stateNode)){var s=e[wn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Xs(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Fn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var o=s[i];if(o!==e&&o.form===e.form){var h=o[wn]||null;if(!h)throw Error(a(90));Xs(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)o=s[i],o.form===e.form&&qs(o)}break t;case"textarea":Ud(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Ws(e,!!s.multiple,i,!1)}}}var vu=!1;function Bd(e,i,s){if(vu)return e(i,s);vu=!0;try{var o=e(i);return o}finally{if(vu=!1,(js!==null||Zs!==null)&&(tc(),js&&(i=js,e=Zs,Zs=js=null,Pd(i),e)))for(i=0;i<e.length;i++)Pd(e[i])}}function so(e,i){var s=e.stateNode;if(s===null)return null;var o=s[wn]||null;if(o===null)return null;s=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_u=!1;if(ji)try{var ro={};Object.defineProperty(ro,"passive",{get:function(){_u=!0}}),window.addEventListener("test",ro,ro),window.removeEventListener("test",ro,ro)}catch{_u=!1}var Ea=null,yu=null,pl=null;function Id(){if(pl)return pl;var e,i=yu,s=i.length,o,h="value"in Ea?Ea.value:Ea.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(o=1;o<=E&&i[s-o]===h[m-o];o++);return pl=h.slice(e,1<o?1-o:void 0)}function ml(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function Fd(){return!1}function Hn(e){function i(s,o,h,m,E){this._reactName=s,this._targetInst=h,this.type=o,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(s=e[D],this[D]=s?s(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?gl:Fd,this.isPropagationStopped=Fd,this}return _(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Hn(us),oo=_({},us,{view:0,detail:0}),ry=Hn(oo),xu,Su,lo,_l=_({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lo&&(lo&&e.type==="mousemove"?(xu=e.screenX-lo.screenX,Su=e.screenY-lo.screenY):Su=xu=0,lo=e),xu)},movementY:function(e){return"movementY"in e?e.movementY:Su}}),Hd=Hn(_l),oy=_({},_l,{dataTransfer:0}),ly=Hn(oy),cy=_({},oo,{relatedTarget:0}),Mu=Hn(cy),uy=_({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),fy=Hn(uy),hy=_({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dy=Hn(hy),py=_({},us,{data:0}),Gd=Hn(py),my={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _y(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=vy[e])?!!i[e]:!1}function Eu(){return _y}var yy=_({},oo,{key:function(e){if(e.key){var i=my[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=ml(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Eu,charCode:function(e){return e.type==="keypress"?ml(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ml(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xy=Hn(yy),Sy=_({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vd=Hn(Sy),My=_({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Eu}),Ey=Hn(My),by=_({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ty=Hn(by),Ay=_({},_l,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),wy=Hn(Ay),Ry=_({},us,{newState:0,oldState:0}),Cy=Hn(Ry),Dy=[9,13,27,32],bu=ji&&"CompositionEvent"in window,co=null;ji&&"documentMode"in document&&(co=document.documentMode);var Ly=ji&&"TextEvent"in window&&!co,kd=ji&&(!bu||co&&8<co&&11>=co),qd=" ",Xd=!1;function Wd(e,i){switch(e){case"keyup":return Dy.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ks=!1;function Uy(e,i){switch(e){case"compositionend":return Yd(i);case"keypress":return i.which!==32?null:(Xd=!0,qd);case"textInput":return e=i.data,e===qd&&Xd?null:e;default:return null}}function Ny(e,i){if(Ks)return e==="compositionend"||!bu&&Wd(e,i)?(e=Id(),pl=yu=Ea=null,Ks=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return kd&&i.locale!=="ko"?null:i.data;default:return null}}var Oy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jd(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Oy[e.type]:i==="textarea"}function Zd(e,i,s,o){js?Zs?Zs.push(o):Zs=[o]:js=o,i=oc(i,"onChange"),0<i.length&&(s=new vl("onChange","change",null,s,o),e.push({event:s,listeners:i}))}var uo=null,fo=null;function zy(e){Lg(e,0)}function yl(e){var i=Ft(e);if(qs(i))return e}function Kd(e,i){if(e==="change")return i}var Qd=!1;if(ji){var Tu;if(ji){var Au="oninput"in document;if(!Au){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),Au=typeof Jd.oninput=="function"}Tu=Au}else Tu=!1;Qd=Tu&&(!document.documentMode||9<document.documentMode)}function $d(){uo&&(uo.detachEvent("onpropertychange",tp),fo=uo=null)}function tp(e){if(e.propertyName==="value"&&yl(fo)){var i=[];Zd(i,fo,e,gu(e)),Bd(zy,i)}}function Py(e,i,s){e==="focusin"?($d(),uo=i,fo=s,uo.attachEvent("onpropertychange",tp)):e==="focusout"&&$d()}function By(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(fo)}function Iy(e,i){if(e==="click")return yl(i)}function Fy(e,i){if(e==="input"||e==="change")return yl(i)}function Hy(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:Hy;function ho(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),o=Object.keys(i);if(s.length!==o.length)return!1;for(o=0;o<s.length;o++){var h=s[o];if(!He.call(i,h)||!Kn(e[h],i[h]))return!1}return!0}function ep(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function np(e,i){var s=ep(e);e=0;for(var o;s;){if(s.nodeType===3){if(o=e+s.textContent.length,e<=i&&o>=i)return{node:s,offset:i-e};e=o}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=ep(s)}}function ip(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?ip(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function ap(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Sn(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=Sn(e.document)}return i}function wu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Gy=ji&&"documentMode"in document&&11>=document.documentMode,Qs=null,Ru=null,po=null,Cu=!1;function sp(e,i,s){var o=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Cu||Qs==null||Qs!==Sn(o)||(o=Qs,"selectionStart"in o&&wu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),po&&ho(po,o)||(po=o,o=oc(Ru,"onSelect"),0<o.length&&(i=new vl("onSelect","select",null,i,s),e.push({event:i,listeners:o}),i.target=Qs)))}function fs(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Js={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Du={},rp={};ji&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function hs(e){if(Du[e])return Du[e];if(!Js[e])return e;var i=Js[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in rp)return Du[e]=i[s];return e}var op=hs("animationend"),lp=hs("animationiteration"),cp=hs("animationstart"),Vy=hs("transitionrun"),ky=hs("transitionstart"),qy=hs("transitioncancel"),up=hs("transitionend"),fp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Si(e,i){fp.set(e,i),Le(i,[e])}var xl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],$s=0,Uu=0;function Sl(){for(var e=$s,i=Uu=$s=0;i<e;){var s=oi[i];oi[i++]=null;var o=oi[i];oi[i++]=null;var h=oi[i];oi[i++]=null;var m=oi[i];if(oi[i++]=null,o!==null&&h!==null){var E=o.pending;E===null?h.next=h:(h.next=E.next,E.next=h),o.pending=h}m!==0&&hp(s,h,m)}}function Ml(e,i,s,o){oi[$s++]=e,oi[$s++]=i,oi[$s++]=s,oi[$s++]=o,Uu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Nu(e,i,s,o){return Ml(e,i,s,o),El(e)}function ds(e,i){return Ml(e,null,null,i),El(e)}function hp(e,i,s){e.lanes|=s;var o=e.alternate;o!==null&&(o.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,o=m.alternate,o!==null&&(o.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Xt(s),e=m.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=s|536870912),m):null}function El(e){if(50<Po)throw Po=0,kf=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var tr={};function Xy(e,i,s,o){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,i,s,o){return new Xy(e,i,s,o)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,i){var s=e.alternate;return s===null?(s=Qn(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function dp(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function bl(e,i,s,o,h,m){var E=0;if(o=e,typeof e=="function")Ou(e)&&(E=1);else if(typeof e=="string")E=Kx(e,s,J.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case z:return e=Qn(31,s,i,h),e.elementType=z,e.lanes=m,e;case b:return ps(s.children,h,m,i);case x:E=8,h|=24;break;case y:return e=Qn(12,s,i,h|2),e.elementType=y,e.lanes=m,e;case F:return e=Qn(13,s,i,h),e.elementType=F,e.lanes=m,e;case B:return e=Qn(19,s,i,h),e.elementType=B,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:E=10;break t;case T:E=9;break t;case L:E=11;break t;case O:E=14;break t;case q:E=16,o=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),o=null}return i=Qn(E,s,i,h),i.elementType=e,i.type=o,i.lanes=m,i}function ps(e,i,s,o){return e=Qn(7,e,o,i),e.lanes=s,e}function zu(e,i,s){return e=Qn(6,e,null,i),e.lanes=s,e}function pp(e){var i=Qn(18,null,null,0);return i.stateNode=e,i}function Pu(e,i,s){return i=Qn(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var mp=new WeakMap;function li(e,i){if(typeof e=="object"&&e!==null){var s=mp.get(e);return s!==void 0?s:(i={value:e,source:i,stack:ne(i)},mp.set(e,i),i)}return{value:e,source:i,stack:ne(i)}}var er=[],nr=0,Tl=null,mo=0,ci=[],ui=0,ba=null,Ui=1,Ni="";function Ki(e,i){er[nr++]=mo,er[nr++]=Tl,Tl=e,mo=i}function gp(e,i,s){ci[ui++]=Ui,ci[ui++]=Ni,ci[ui++]=ba,ba=e;var o=Ui;e=Ni;var h=32-Xt(o)-1;o&=~(1<<h),s+=1;var m=32-Xt(i)+h;if(30<m){var E=h-h%5;m=(o&(1<<E)-1).toString(32),o>>=E,h-=E,Ui=1<<32-Xt(i)+h|s<<h|o,Ni=m+e}else Ui=1<<m|s<<h|o,Ni=e}function Bu(e){e.return!==null&&(Ki(e,1),gp(e,1,0))}function Iu(e){for(;e===Tl;)Tl=er[--nr],er[nr]=null,mo=er[--nr],er[nr]=null;for(;e===ba;)ba=ci[--ui],ci[ui]=null,Ni=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null}function vp(e,i){ci[ui++]=Ui,ci[ui++]=Ni,ci[ui++]=ba,Ui=i.id,Ni=i.overflow,ba=e}var Mn=null,ke=null,xe=!1,Ta=null,fi=!1,Fu=Error(a(519));function Aa(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw go(li(i,e)),Fu}function _p(e){var i=e.stateNode,s=e.type,o=e.memoizedProps;switch(i[hn]=e,i[wn]=o,s){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(s=0;s<Io.length;s++)ve(Io[s],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),Ld(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),Nd(i,o.value,o.defaultValue,o.children)}s=o.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||o.suppressHydrationWarning===!0||zg(i.textContent,s)?(o.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),o.onScroll!=null&&ve("scroll",i),o.onScrollEnd!=null&&ve("scrollend",i),o.onClick!=null&&(i.onclick=Yi),i=!0):i=!1,i||Aa(e,!0)}function yp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Mn=Mn.return}}function ir(e){if(e!==Mn)return!1;if(!xe)return yp(e),xe=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ah(e.type,e.memoizedProps)),s=!s),s&&ke&&Aa(e),yp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ke=qg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));ke=qg(e)}else i===27?(i=ke,Ha(e.type)?(e=ch,ch=null,ke=e):ke=i):ke=Mn?di(e.stateNode.nextSibling):null;return!0}function ms(){ke=Mn=null,xe=!1}function Hu(){var e=Ta;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Ta=null),e}function go(e){Ta===null?Ta=[e]:Ta.push(e)}var Gu=I(null),gs=null,Qi=null;function wa(e,i,s){yt(Gu,i._currentValue),i._currentValue=s}function Ji(e){e._currentValue=Gu.current,Z(Gu)}function Vu(e,i,s){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===s)break;e=e.return}}function ku(e,i,s,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var D=m;m=h;for(var k=0;k<i.length;k++)if(D.context===i[k]){m.lanes|=s,D=m.alternate,D!==null&&(D.lanes|=s),Vu(m.return,s,e),o||(E=null);break t}m=D.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),Vu(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function ar(e,i,s,o){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var D=h.type;Kn(h.pendingProps.value,E.value)||(e!==null?e.push(D):e=[D])}}else if(h===St.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ko):e=[ko])}h=h.return}e!==null&&ku(i,e,s,o),i.flags|=262144}function Al(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){gs=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return xp(gs,e)}function wl(e,i){return gs===null&&vs(e),xp(e,i)}function xp(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Qi===null){if(e===null)throw Error(a(308));Qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Qi=Qi.next=i;return s}var Wy=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},Yy=c.unstable_scheduleCallback,jy=c.unstable_NormalPriority,sn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function qu(){return{controller:new Wy,data:new Map,refCount:0}}function vo(e){e.refCount--,e.refCount===0&&Yy(jy,function(){e.controller.abort()})}var _o=null,Xu=0,sr=0,rr=null;function Zy(e,i){if(_o===null){var s=_o=[];Xu=0,sr=Zf(),rr={status:"pending",value:void 0,then:function(o){s.push(o)}}}return Xu++,i.then(Sp,Sp),i}function Sp(){if(--Xu===0&&_o!==null){rr!==null&&(rr.status="fulfilled");var e=_o;_o=null,sr=0,rr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function Ky(e,i){var s=[],o={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),o}var Mp=N.S;N.S=function(e,i){sg=xt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&Zy(e,i),Mp!==null&&Mp(e,i)};var _s=I(null);function Wu(){var e=_s.current;return e!==null?e:Ge.pooledCache}function Rl(e,i){i===null?yt(_s,_s.current):yt(_s,i.pool)}function Ep(){var e=Wu();return e===null?null:{parent:sn._currentValue,pool:e}}var or=Error(a(460)),Yu=Error(a(474)),Cl=Error(a(542)),Dl={then:function(){}};function bp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tp(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Yi,Yi),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,wp(e),e;default:if(typeof i.status=="string")i.then(Yi,Yi);else{if(e=Ge,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,wp(e),e}throw xs=i,or}}function ys(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(xs=s,or):s}}var xs=null;function Ap(){if(xs===null)throw Error(a(459));var e=xs;return xs=null,e}function wp(e){if(e===or||e===Cl)throw Error(a(483))}var lr=null,yo=0;function Ll(e){var i=yo;return yo+=1,lr===null&&(lr=[]),Tp(lr,e,i)}function xo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Ul(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Rp(e){function i(tt,W){if(e){var at=tt.deletions;at===null?(tt.deletions=[W],tt.flags|=16):at.push(W)}}function s(tt,W){if(!e)return null;for(;W!==null;)i(tt,W),W=W.sibling;return null}function o(tt){for(var W=new Map;tt!==null;)tt.key!==null?W.set(tt.key,tt):W.set(tt.index,tt),tt=tt.sibling;return W}function h(tt,W){return tt=Zi(tt,W),tt.index=0,tt.sibling=null,tt}function m(tt,W,at){return tt.index=at,e?(at=tt.alternate,at!==null?(at=at.index,at<W?(tt.flags|=67108866,W):at):(tt.flags|=67108866,W)):(tt.flags|=1048576,W)}function E(tt){return e&&tt.alternate===null&&(tt.flags|=67108866),tt}function D(tt,W,at,vt){return W===null||W.tag!==6?(W=zu(at,tt.mode,vt),W.return=tt,W):(W=h(W,at),W.return=tt,W)}function k(tt,W,at,vt){var Zt=at.type;return Zt===b?gt(tt,W,at.props.children,vt,at.key):W!==null&&(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===q&&ys(Zt)===W.type)?(W=h(W,at.props),xo(W,at),W.return=tt,W):(W=bl(at.type,at.key,at.props,null,tt.mode,vt),xo(W,at),W.return=tt,W)}function st(tt,W,at,vt){return W===null||W.tag!==4||W.stateNode.containerInfo!==at.containerInfo||W.stateNode.implementation!==at.implementation?(W=Pu(at,tt.mode,vt),W.return=tt,W):(W=h(W,at.children||[]),W.return=tt,W)}function gt(tt,W,at,vt,Zt){return W===null||W.tag!==7?(W=ps(at,tt.mode,vt,Zt),W.return=tt,W):(W=h(W,at),W.return=tt,W)}function _t(tt,W,at){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zu(""+W,tt.mode,at),W.return=tt,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case S:return at=bl(W.type,W.key,W.props,null,tt.mode,at),xo(at,W),at.return=tt,at;case M:return W=Pu(W,tt.mode,at),W.return=tt,W;case q:return W=ys(W),_t(tt,W,at)}if(K(W)||et(W))return W=ps(W,tt.mode,at,null),W.return=tt,W;if(typeof W.then=="function")return _t(tt,Ll(W),at);if(W.$$typeof===w)return _t(tt,wl(tt,W),at);Ul(tt,W)}return null}function ot(tt,W,at,vt){var Zt=W!==null?W.key:null;if(typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint")return Zt!==null?null:D(tt,W,""+at,vt);if(typeof at=="object"&&at!==null){switch(at.$$typeof){case S:return at.key===Zt?k(tt,W,at,vt):null;case M:return at.key===Zt?st(tt,W,at,vt):null;case q:return at=ys(at),ot(tt,W,at,vt)}if(K(at)||et(at))return Zt!==null?null:gt(tt,W,at,vt,null);if(typeof at.then=="function")return ot(tt,W,Ll(at),vt);if(at.$$typeof===w)return ot(tt,W,wl(tt,at),vt);Ul(tt,at)}return null}function ut(tt,W,at,vt,Zt){if(typeof vt=="string"&&vt!==""||typeof vt=="number"||typeof vt=="bigint")return tt=tt.get(at)||null,D(W,tt,""+vt,Zt);if(typeof vt=="object"&&vt!==null){switch(vt.$$typeof){case S:return tt=tt.get(vt.key===null?at:vt.key)||null,k(W,tt,vt,Zt);case M:return tt=tt.get(vt.key===null?at:vt.key)||null,st(W,tt,vt,Zt);case q:return vt=ys(vt),ut(tt,W,at,vt,Zt)}if(K(vt)||et(vt))return tt=tt.get(at)||null,gt(W,tt,vt,Zt,null);if(typeof vt.then=="function")return ut(tt,W,at,Ll(vt),Zt);if(vt.$$typeof===w)return ut(tt,W,at,wl(W,vt),Zt);Ul(W,vt)}return null}function Bt(tt,W,at,vt){for(var Zt=null,Ae=null,kt=W,ce=W=0,ye=null;kt!==null&&ce<at.length;ce++){kt.index>ce?(ye=kt,kt=null):ye=kt.sibling;var we=ot(tt,kt,at[ce],vt);if(we===null){kt===null&&(kt=ye);break}e&&kt&&we.alternate===null&&i(tt,kt),W=m(we,W,ce),Ae===null?Zt=we:Ae.sibling=we,Ae=we,kt=ye}if(ce===at.length)return s(tt,kt),xe&&Ki(tt,ce),Zt;if(kt===null){for(;ce<at.length;ce++)kt=_t(tt,at[ce],vt),kt!==null&&(W=m(kt,W,ce),Ae===null?Zt=kt:Ae.sibling=kt,Ae=kt);return xe&&Ki(tt,ce),Zt}for(kt=o(kt);ce<at.length;ce++)ye=ut(kt,tt,ce,at[ce],vt),ye!==null&&(e&&ye.alternate!==null&&kt.delete(ye.key===null?ce:ye.key),W=m(ye,W,ce),Ae===null?Zt=ye:Ae.sibling=ye,Ae=ye);return e&&kt.forEach(function(Xa){return i(tt,Xa)}),xe&&Ki(tt,ce),Zt}function te(tt,W,at,vt){if(at==null)throw Error(a(151));for(var Zt=null,Ae=null,kt=W,ce=W=0,ye=null,we=at.next();kt!==null&&!we.done;ce++,we=at.next()){kt.index>ce?(ye=kt,kt=null):ye=kt.sibling;var Xa=ot(tt,kt,we.value,vt);if(Xa===null){kt===null&&(kt=ye);break}e&&kt&&Xa.alternate===null&&i(tt,kt),W=m(Xa,W,ce),Ae===null?Zt=Xa:Ae.sibling=Xa,Ae=Xa,kt=ye}if(we.done)return s(tt,kt),xe&&Ki(tt,ce),Zt;if(kt===null){for(;!we.done;ce++,we=at.next())we=_t(tt,we.value,vt),we!==null&&(W=m(we,W,ce),Ae===null?Zt=we:Ae.sibling=we,Ae=we);return xe&&Ki(tt,ce),Zt}for(kt=o(kt);!we.done;ce++,we=at.next())we=ut(kt,tt,ce,we.value,vt),we!==null&&(e&&we.alternate!==null&&kt.delete(we.key===null?ce:we.key),W=m(we,W,ce),Ae===null?Zt=we:Ae.sibling=we,Ae=we);return e&&kt.forEach(function(oS){return i(tt,oS)}),xe&&Ki(tt,ce),Zt}function Fe(tt,W,at,vt){if(typeof at=="object"&&at!==null&&at.type===b&&at.key===null&&(at=at.props.children),typeof at=="object"&&at!==null){switch(at.$$typeof){case S:t:{for(var Zt=at.key;W!==null;){if(W.key===Zt){if(Zt=at.type,Zt===b){if(W.tag===7){s(tt,W.sibling),vt=h(W,at.props.children),vt.return=tt,tt=vt;break t}}else if(W.elementType===Zt||typeof Zt=="object"&&Zt!==null&&Zt.$$typeof===q&&ys(Zt)===W.type){s(tt,W.sibling),vt=h(W,at.props),xo(vt,at),vt.return=tt,tt=vt;break t}s(tt,W);break}else i(tt,W);W=W.sibling}at.type===b?(vt=ps(at.props.children,tt.mode,vt,at.key),vt.return=tt,tt=vt):(vt=bl(at.type,at.key,at.props,null,tt.mode,vt),xo(vt,at),vt.return=tt,tt=vt)}return E(tt);case M:t:{for(Zt=at.key;W!==null;){if(W.key===Zt)if(W.tag===4&&W.stateNode.containerInfo===at.containerInfo&&W.stateNode.implementation===at.implementation){s(tt,W.sibling),vt=h(W,at.children||[]),vt.return=tt,tt=vt;break t}else{s(tt,W);break}else i(tt,W);W=W.sibling}vt=Pu(at,tt.mode,vt),vt.return=tt,tt=vt}return E(tt);case q:return at=ys(at),Fe(tt,W,at,vt)}if(K(at))return Bt(tt,W,at,vt);if(et(at)){if(Zt=et(at),typeof Zt!="function")throw Error(a(150));return at=Zt.call(at),te(tt,W,at,vt)}if(typeof at.then=="function")return Fe(tt,W,Ll(at),vt);if(at.$$typeof===w)return Fe(tt,W,wl(tt,at),vt);Ul(tt,at)}return typeof at=="string"&&at!==""||typeof at=="number"||typeof at=="bigint"?(at=""+at,W!==null&&W.tag===6?(s(tt,W.sibling),vt=h(W,at),vt.return=tt,tt=vt):(s(tt,W),vt=zu(at,tt.mode,vt),vt.return=tt,tt=vt),E(tt)):s(tt,W)}return function(tt,W,at,vt){try{yo=0;var Zt=Fe(tt,W,at,vt);return lr=null,Zt}catch(kt){if(kt===or||kt===Cl)throw kt;var Ae=Qn(29,kt,null,tt.mode);return Ae.lanes=vt,Ae.return=tt,Ae}finally{}}}var Ss=Rp(!0),Cp=Rp(!1),Ra=!1;function ju(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Zu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Da(e,i,s){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=El(e),hp(e,null,s),i}return Ml(e,o,i,s),El(e)}function So(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,_i(e,s)}}function Ku(e,i){var s=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,s===o)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:o.shared,callbacks:o.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Qu=!1;function Mo(){if(Qu){var e=rr;if(e!==null)throw e}}function Eo(e,i,s,o){Qu=!1;var h=e.updateQueue;Ra=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,D=h.shared.pending;if(D!==null){h.shared.pending=null;var k=D,st=k.next;k.next=null,E===null?m=st:E.next=st,E=k;var gt=e.alternate;gt!==null&&(gt=gt.updateQueue,D=gt.lastBaseUpdate,D!==E&&(D===null?gt.firstBaseUpdate=st:D.next=st,gt.lastBaseUpdate=k))}if(m!==null){var _t=h.baseState;E=0,gt=st=k=null,D=m;do{var ot=D.lane&-536870913,ut=ot!==D.lane;if(ut?(_e&ot)===ot:(o&ot)===ot){ot!==0&&ot===sr&&(Qu=!0),gt!==null&&(gt=gt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Bt=e,te=D;ot=i;var Fe=s;switch(te.tag){case 1:if(Bt=te.payload,typeof Bt=="function"){_t=Bt.call(Fe,_t,ot);break t}_t=Bt;break t;case 3:Bt.flags=Bt.flags&-65537|128;case 0:if(Bt=te.payload,ot=typeof Bt=="function"?Bt.call(Fe,_t,ot):Bt,ot==null)break t;_t=_({},_t,ot);break t;case 2:Ra=!0}}ot=D.callback,ot!==null&&(e.flags|=64,ut&&(e.flags|=8192),ut=h.callbacks,ut===null?h.callbacks=[ot]:ut.push(ot))}else ut={lane:ot,tag:D.tag,payload:D.payload,callback:D.callback,next:null},gt===null?(st=gt=ut,k=_t):gt=gt.next=ut,E|=ot;if(D=D.next,D===null){if(D=h.shared.pending,D===null)break;ut=D,D=ut.next,ut.next=null,h.lastBaseUpdate=ut,h.shared.pending=null}}while(!0);gt===null&&(k=_t),h.baseState=k,h.firstBaseUpdate=st,h.lastBaseUpdate=gt,m===null&&(h.shared.lanes=0),za|=E,e.lanes=E,e.memoizedState=_t}}function Dp(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function Lp(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Dp(s[e],i)}var cr=I(null),Nl=I(0);function Up(e,i){e=oa,yt(Nl,e),yt(cr,i),oa=e|i.baseLanes}function Ju(){yt(Nl,oa),yt(cr,cr.current)}function $u(){oa=Nl.current,Z(cr),Z(Nl)}var Jn=I(null),hi=null;function La(e){var i=e.alternate;yt($e,$e.current&1),yt(Jn,e),hi===null&&(i===null||cr.current!==null||i.memoizedState!==null)&&(hi=e)}function tf(e){yt($e,$e.current),yt(Jn,e),hi===null&&(hi=e)}function Np(e){e.tag===22?(yt($e,$e.current),yt(Jn,e),hi===null&&(hi=e)):Ua()}function Ua(){yt($e,$e.current),yt(Jn,Jn.current)}function $n(e){Z(Jn),hi===e&&(hi=null),Z($e)}var $e=I(0);function Ol(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||oh(s)||lh(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var $i=0,oe=null,Be=null,rn=null,zl=!1,ur=!1,Ms=!1,Pl=0,bo=0,fr=null,Qy=0;function Qe(){throw Error(a(321))}function ef(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!Kn(e[s],i[s]))return!1;return!0}function nf(e,i,s,o,h,m){return $i=m,oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,N.H=e===null||e.memoizedState===null?gm:_f,Ms=!1,m=s(o,h),Ms=!1,ur&&(m=zp(i,s,o,h)),Op(e),m}function Op(e){N.H=wo;var i=Be!==null&&Be.next!==null;if($i=0,rn=Be=oe=null,zl=!1,bo=0,fr=null,i)throw Error(a(300));e===null||on||(e=e.dependencies,e!==null&&Al(e)&&(on=!0))}function zp(e,i,s,o){oe=e;var h=0;do{if(ur&&(fr=null),bo=0,ur=!1,25<=h)throw Error(a(301));if(h+=1,rn=Be=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}N.H=vm,m=i(s,o)}while(ur);return m}function Jy(){var e=N.H,i=e.useState()[0];return i=typeof i.then=="function"?To(i):i,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(oe.flags|=1024),i}function af(){var e=Pl!==0;return Pl=0,e}function sf(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function rf(e){if(zl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}zl=!1}$i=0,rn=Be=oe=null,ur=!1,bo=Pl=0,fr=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?oe.memoizedState=rn=e:rn=rn.next=e,rn}function tn(){if(Be===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var i=rn===null?oe.memoizedState:rn.next;if(i!==null)rn=i,Be=e;else{if(e===null)throw oe.alternate===null?Error(a(467)):Error(a(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},rn===null?oe.memoizedState=rn=e:rn=rn.next=e}return rn}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var i=bo;return bo+=1,fr===null&&(fr=[]),e=Tp(fr,e,i),i=oe,(rn===null?i.memoizedState:rn.next)===null&&(i=i.alternate,N.H=i===null||i.memoizedState===null?gm:_f),e}function Il(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return To(e);if(e.$$typeof===w)return En(e)}throw Error(a(438,String(e)))}function of(e){var i=null,s=oe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Bl(),oe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),o=0;o<e;o++)s[o]=R;return i.index++,s}function ta(e,i){return typeof i=="function"?i(e):i}function Fl(e){var i=tn();return lf(i,Be,e)}function lf(e,i,s){var o=e.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=s;var h=e.baseQueue,m=o.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,o.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var D=E=null,k=null,st=i,gt=!1;do{var _t=st.lane&-536870913;if(_t!==st.lane?(_e&_t)===_t:($i&_t)===_t){var ot=st.revertLane;if(ot===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null}),_t===sr&&(gt=!0);else if(($i&ot)===ot){st=st.next,ot===sr&&(gt=!0);continue}else _t={lane:0,revertLane:st.revertLane,gesture:null,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(D=k=_t,E=m):k=k.next=_t,oe.lanes|=ot,za|=ot;_t=st.action,Ms&&s(m,_t),m=st.hasEagerState?st.eagerState:s(m,_t)}else ot={lane:_t,revertLane:st.revertLane,gesture:st.gesture,action:st.action,hasEagerState:st.hasEagerState,eagerState:st.eagerState,next:null},k===null?(D=k=ot,E=m):k=k.next=ot,oe.lanes|=_t,za|=_t;st=st.next}while(st!==null&&st!==i);if(k===null?E=m:k.next=D,!Kn(m,e.memoizedState)&&(on=!0,gt&&(s=rr,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=k,o.lastRenderedState=m}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function cf(e){var i=tn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var o=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);Kn(m,i.memoizedState)||(on=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,o]}function Pp(e,i,s){var o=oe,h=tn(),m=xe;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!Kn((Be||h).memoizedState,s);if(E&&(h.memoizedState=s,on=!0),h=h.queue,hf(Fp.bind(null,o,h,e),[e]),h.getSnapshot!==i||E||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Ip.bind(null,o,h,s,i),null),Ge===null)throw Error(a(349));m||($i&127)!==0||Bp(o,i,s)}return s}function Bp(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=oe.updateQueue,i===null?(i=Bl(),oe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function Ip(e,i,s,o){i.value=s,i.getSnapshot=o,Hp(i)&&Gp(e)}function Fp(e,i,s){return s(function(){Hp(i)&&Gp(e)})}function Hp(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!Kn(e,s)}catch{return!0}}function Gp(e){var i=ds(e,2);i!==null&&Xn(i,e,2)}function uf(e){var i=On();if(typeof e=="function"){var s=e;if(e=s(),Ms){$t(!0);try{s()}finally{$t(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},i}function Vp(e,i,s,o){return e.baseState=s,lf(e,Be,typeof o=="function"?o:ta)}function $y(e,i,s,o,h){if(Vl(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};N.T!==null?s(!0):m.isTransition=!1,o(m),s=i.pending,s===null?(m.next=i.pending=m,kp(i,m)):(m.next=s.next,i.pending=s.next=m)}}function kp(e,i){var s=i.action,o=i.payload,h=e.state;if(i.isTransition){var m=N.T,E={};N.T=E;try{var D=s(h,o),k=N.S;k!==null&&k(E,D),qp(e,i,D)}catch(st){ff(e,i,st)}finally{m!==null&&E.types!==null&&(m.types=E.types),N.T=m}}else try{m=s(h,o),qp(e,i,m)}catch(st){ff(e,i,st)}}function qp(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(o){Xp(e,i,o)},function(o){return ff(e,i,o)}):Xp(e,i,s)}function Xp(e,i,s){i.status="fulfilled",i.value=s,Wp(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,kp(e,s)))}function ff(e,i,s){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=s,Wp(i),i=i.next;while(i!==o)}e.action=null}function Wp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Yp(e,i){return i}function jp(e,i){if(xe){var s=Ge.formState;if(s!==null){t:{var o=oe;if(xe){if(ke){e:{for(var h=ke,m=fi;h.nodeType!==8;){if(!m){h=null;break e}if(h=di(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){ke=di(h.nextSibling),o=h.data==="F!";break t}}Aa(o)}o=!1}o&&(i=s[0])}}return s=On(),s.memoizedState=s.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yp,lastRenderedState:i},s.queue=o,s=dm.bind(null,oe,o),o.dispatch=s,o=uf(!1),m=vf.bind(null,oe,!1,o.queue),o=On(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,s=$y.bind(null,oe,h,m,s),h.dispatch=s,o.memoizedState=e,[i,s,!1]}function Zp(e){var i=tn();return Kp(i,Be,e)}function Kp(e,i,s){if(i=lf(e,i,Yp)[0],e=Fl(ta)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=To(i)}catch(E){throw E===or?Cl:E}else o=i;i=tn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(oe.flags|=2048,hr(9,{destroy:void 0},tx.bind(null,h,s),null)),[o,m,e]}function tx(e,i){e.action=i}function Qp(e){var i=tn(),s=Be;if(s!==null)return Kp(i,s,e);tn(),i=i.memoizedState,s=tn();var o=s.queue.dispatch;return s.memoizedState=e,[i,o,!1]}function hr(e,i,s,o){return e={tag:e,create:s,deps:o,inst:i,next:null},i=oe.updateQueue,i===null&&(i=Bl(),oe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(o=s.next,s.next=e,e.next=o,i.lastEffect=e),e}function Jp(){return tn().memoizedState}function Hl(e,i,s,o){var h=On();oe.flags|=e,h.memoizedState=hr(1|i,{destroy:void 0},s,o===void 0?null:o)}function Gl(e,i,s,o){var h=tn();o=o===void 0?null:o;var m=h.memoizedState.inst;Be!==null&&o!==null&&ef(o,Be.memoizedState.deps)?h.memoizedState=hr(i,m,s,o):(oe.flags|=e,h.memoizedState=hr(1|i,m,s,o))}function $p(e,i){Hl(8390656,8,e,i)}function hf(e,i){Gl(2048,8,e,i)}function ex(e){oe.flags|=4;var i=oe.updateQueue;if(i===null)i=Bl(),oe.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function tm(e){var i=tn().memoizedState;return ex({ref:i,nextImpl:e}),function(){if((Ce&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function em(e,i){return Gl(4,2,e,i)}function nm(e,i){return Gl(4,4,e,i)}function im(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function am(e,i,s){s=s!=null?s.concat([e]):null,Gl(4,4,im.bind(null,i,e),s)}function df(){}function sm(e,i){var s=tn();i=i===void 0?null:i;var o=s.memoizedState;return i!==null&&ef(i,o[1])?o[0]:(s.memoizedState=[e,i],e)}function rm(e,i){var s=tn();i=i===void 0?null:i;var o=s.memoizedState;if(i!==null&&ef(i,o[1]))return o[0];if(o=e(),Ms){$t(!0);try{e()}finally{$t(!1)}}return s.memoizedState=[o,i],o}function pf(e,i,s){return s===void 0||($i&1073741824)!==0&&(_e&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=og(),oe.lanes|=e,za|=e,s)}function om(e,i,s,o){return Kn(s,i)?s:cr.current!==null?(e=pf(e,s,o),Kn(e,i)||(on=!0),e):($i&42)===0||($i&1073741824)!==0&&(_e&261930)===0?(on=!0,e.memoizedState=s):(e=og(),oe.lanes|=e,za|=e,i)}function lm(e,i,s,o,h){var m=Y.p;Y.p=m!==0&&8>m?m:8;var E=N.T,D={};N.T=D,vf(e,!1,i,s);try{var k=h(),st=N.S;if(st!==null&&st(D,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var gt=Ky(k,o);Ao(e,i,gt,ni(e))}else Ao(e,i,o,ni(e))}catch(_t){Ao(e,i,{then:function(){},status:"rejected",reason:_t},ni())}finally{Y.p=m,E!==null&&D.types!==null&&(E.types=D.types),N.T=E}}function nx(){}function mf(e,i,s,o){if(e.tag!==5)throw Error(a(476));var h=cm(e).queue;lm(e,h,i,X,s===null?nx:function(){return um(e),s(o)})}function cm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:X,baseState:X,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:X},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function um(e){var i=cm(e);i.next===null&&(i=e.alternate.memoizedState),Ao(e,i.next.queue,{},ni())}function gf(){return En(ko)}function fm(){return tn().memoizedState}function hm(){return tn().memoizedState}function ix(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=ni();e=Ca(s);var o=Da(i,e,s);o!==null&&(Xn(o,i,s),So(o,i,s)),i={cache:qu()},e.payload=i;return}i=i.return}}function ax(e,i,s){var o=ni();s={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Vl(e)?pm(i,s):(s=Nu(e,i,s,o),s!==null&&(Xn(s,e,o),mm(s,i,o)))}function dm(e,i,s){var o=ni();Ao(e,i,s,o)}function Ao(e,i,s,o){var h={lane:o,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Vl(e))pm(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,s);if(h.hasEagerState=!0,h.eagerState=D,Kn(D,E))return Ml(e,i,h,0),Ge===null&&Sl(),!1}catch{}finally{}if(s=Nu(e,i,h,o),s!==null)return Xn(s,e,o),mm(s,i,o),!0}return!1}function vf(e,i,s,o){if(o={lane:2,revertLane:Zf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(e)){if(i)throw Error(a(479))}else i=Nu(e,s,o,2),i!==null&&Xn(i,e,2)}function Vl(e){var i=e.alternate;return e===oe||i!==null&&i===oe}function pm(e,i){ur=zl=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function mm(e,i,s){if((s&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,s|=o,i.lanes=s,_i(e,s)}}var wo={readContext:En,use:Il,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};wo.useEffectEvent=Qe;var gm={readContext:En,use:Il,useCallback:function(e,i){return On().memoizedState=[e,i===void 0?null:i],e},useContext:En,useEffect:$p,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,Hl(4194308,4,im.bind(null,i,e),s)},useLayoutEffect:function(e,i){return Hl(4194308,4,e,i)},useInsertionEffect:function(e,i){Hl(4,2,e,i)},useMemo:function(e,i){var s=On();i=i===void 0?null:i;var o=e();if(Ms){$t(!0);try{e()}finally{$t(!1)}}return s.memoizedState=[o,i],o},useReducer:function(e,i,s){var o=On();if(s!==void 0){var h=s(i);if(Ms){$t(!0);try{s(i)}finally{$t(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=ax.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var i=On();return e={current:e},i.memoizedState=e},useState:function(e){e=uf(e);var i=e.queue,s=dm.bind(null,oe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:df,useDeferredValue:function(e,i){var s=On();return pf(s,e,i)},useTransition:function(){var e=uf(!1);return e=lm.bind(null,oe,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var o=oe,h=On();if(xe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),Ge===null)throw Error(a(349));(_e&127)!==0||Bp(o,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,$p(Fp.bind(null,o,m,e),[e]),o.flags|=2048,hr(9,{destroy:void 0},Ip.bind(null,o,m,s,i),null),s},useId:function(){var e=On(),i=Ge.identifierPrefix;if(xe){var s=Ni,o=Ui;s=(o&~(1<<32-Xt(o)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Pl++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=Qy++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:gf,useFormState:jp,useActionState:jp,useOptimistic:function(e){var i=On();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=vf.bind(null,oe,!0,s),s.dispatch=i,[e,i]},useMemoCache:of,useCacheRefresh:function(){return On().memoizedState=ix.bind(null,oe)},useEffectEvent:function(e){var i=On(),s={impl:e};return i.memoizedState=s,function(){if((Ce&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},_f={readContext:En,use:Il,useCallback:sm,useContext:En,useEffect:hf,useImperativeHandle:am,useInsertionEffect:em,useLayoutEffect:nm,useMemo:rm,useReducer:Fl,useRef:Jp,useState:function(){return Fl(ta)},useDebugValue:df,useDeferredValue:function(e,i){var s=tn();return om(s,Be.memoizedState,e,i)},useTransition:function(){var e=Fl(ta)[0],i=tn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Pp,useId:fm,useHostTransitionStatus:gf,useFormState:Zp,useActionState:Zp,useOptimistic:function(e,i){var s=tn();return Vp(s,Be,e,i)},useMemoCache:of,useCacheRefresh:hm};_f.useEffectEvent=tm;var vm={readContext:En,use:Il,useCallback:sm,useContext:En,useEffect:hf,useImperativeHandle:am,useInsertionEffect:em,useLayoutEffect:nm,useMemo:rm,useReducer:cf,useRef:Jp,useState:function(){return cf(ta)},useDebugValue:df,useDeferredValue:function(e,i){var s=tn();return Be===null?pf(s,e,i):om(s,Be.memoizedState,e,i)},useTransition:function(){var e=cf(ta)[0],i=tn().memoizedState;return[typeof e=="boolean"?e:To(e),i]},useSyncExternalStore:Pp,useId:fm,useHostTransitionStatus:gf,useFormState:Qp,useActionState:Qp,useOptimistic:function(e,i){var s=tn();return Be!==null?Vp(s,Be,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:of,useCacheRefresh:hm};vm.useEffectEvent=tm;function yf(e,i,s,o){i=e.memoizedState,s=s(o,i),s=s==null?i:_({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var xf={enqueueSetState:function(e,i,s){e=e._reactInternals;var o=ni(),h=Ca(o);h.payload=i,s!=null&&(h.callback=s),i=Da(e,h,o),i!==null&&(Xn(i,e,o),So(i,e,o))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var o=ni(),h=Ca(o);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=Da(e,h,o),i!==null&&(Xn(i,e,o),So(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=ni(),o=Ca(s);o.tag=2,i!=null&&(o.callback=i),i=Da(e,o,s),i!==null&&(Xn(i,e,s),So(i,e,s))}};function _m(e,i,s,o,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,m,E):i.prototype&&i.prototype.isPureReactComponent?!ho(s,o)||!ho(h,m):!0}function ym(e,i,s,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,o),i.state!==e&&xf.enqueueReplaceState(i,i.state,null)}function Es(e,i){var s=i;if("ref"in i){s={};for(var o in i)o!=="ref"&&(s[o]=i[o])}if(e=e.defaultProps){s===i&&(s=_({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function xm(e){xl(e)}function Sm(e){console.error(e)}function Mm(e){xl(e)}function kl(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Em(e,i,s){try{var o=e.onCaughtError;o(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Sf(e,i,s){return s=Ca(s),s.tag=3,s.payload={element:null},s.callback=function(){kl(e,i)},s}function bm(e){return e=Ca(e),e.tag=3,e}function Tm(e,i,s,o){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=o.value;e.payload=function(){return h(m)},e.callback=function(){Em(i,s,o)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Em(i,s,o),typeof h!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function sx(e,i,s,o,h){if(s.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=s.alternate,i!==null&&ar(i,s,h,!0),s=Jn.current,s!==null){switch(s.tag){case 31:case 13:return hi===null?ec():s.alternate===null&&Je===0&&(Je=3),s.flags&=-257,s.flags|=65536,s.lanes=h,o===Dl?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([o]):i.add(o),Wf(e,o,h)),!1;case 22:return s.flags|=65536,o===Dl?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([o]):s.add(o)),Wf(e,o,h)),!1}throw Error(a(435,s.tag))}return Wf(e,o,h),ec(),!1}if(xe)return i=Jn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Fu&&(e=Error(a(422),{cause:o}),go(li(e,s)))):(o!==Fu&&(i=Error(a(423),{cause:o}),go(li(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=li(o,s),h=Sf(e.stateNode,o,h),Ku(e,h),Je!==4&&(Je=2)),!1;var m=Error(a(520),{cause:o});if(m=li(m,s),zo===null?zo=[m]:zo.push(m),Je!==4&&(Je=2),i===null)return!0;o=li(o,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=Sf(s.stateNode,o,e),Ku(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Pa===null||!Pa.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=bm(h),Tm(h,e,s,o),Ku(s,h),!1}s=s.return}while(s!==null);return!1}var Mf=Error(a(461)),on=!1;function bn(e,i,s,o){i.child=e===null?Cp(i,null,s,o):Ss(i,e.child,s,o)}function Am(e,i,s,o,h){s=s.render;var m=i.ref;if("ref"in o){var E={};for(var D in o)D!=="ref"&&(E[D]=o[D])}else E=o;return vs(i),o=nf(e,i,s,E,m,h),D=af(),e!==null&&!on?(sf(e,i,h),ea(e,i,h)):(xe&&D&&Bu(i),i.flags|=1,bn(e,i,o,h),i.child)}function wm(e,i,s,o,h){if(e===null){var m=s.type;return typeof m=="function"&&!Ou(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Rm(e,i,m,o,h)):(e=bl(s.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Df(e,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:ho,s(E,o)&&e.ref===i.ref)return ea(e,i,h)}return i.flags|=1,e=Zi(m,o),e.ref=i.ref,e.return=i,i.child=e}function Rm(e,i,s,o,h){if(e!==null){var m=e.memoizedProps;if(ho(m,o)&&e.ref===i.ref)if(on=!1,i.pendingProps=o=m,Df(e,h))(e.flags&131072)!==0&&(on=!0);else return i.lanes=e.lanes,ea(e,i,h)}return Ef(e,i,s,o,h)}function Cm(e,i,s,o){var h=o.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(o=i.child=e.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~m}else o=0,i.child=null;return Dm(e,i,m,s,o)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rl(i,m!==null?m.cachePool:null),m!==null?Up(i,m):Ju(),Np(i);else return o=i.lanes=536870912,Dm(e,i,m!==null?m.baseLanes|s:s,s,o)}else m!==null?(Rl(i,m.cachePool),Up(i,m),Ua(),i.memoizedState=null):(e!==null&&Rl(i,null),Ju(),Ua());return bn(e,i,h,s),i.child}function Ro(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Dm(e,i,s,o,h){var m=Wu();return m=m===null?null:{parent:sn._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&Rl(i,null),Ju(),Np(i),e!==null&&ar(e,i,o,!0),i.childLanes=h,null}function ql(e,i){return i=Wl({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Lm(e,i,s){return Ss(i,e.child,null,s),e=ql(i,i.pendingProps),e.flags|=2,$n(i),i.memoizedState=null,e}function rx(e,i,s){var o=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(xe){if(o.mode==="hidden")return e=ql(i,o),i.lanes=536870912,Ro(null,e);if(tf(i),(e=ke)?(e=kg(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},s=pp(e),s.return=i,i.child=s,Mn=i,ke=null)):e=null,e===null)throw Aa(i);return i.lanes=536870912,null}return ql(i,o)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(tf(i),h)if(i.flags&256)i.flags&=-257,i=Lm(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(on||ar(e,i,s,!1),h=(s&e.childLanes)!==0,on||h){if(o=Ge,o!==null&&(E=Li(o,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,ds(e,E),Xn(o,e,E),Mf;ec(),i=Lm(e,i,s)}else e=m.treeContext,ke=di(E.nextSibling),Mn=i,xe=!0,Ta=null,fi=!1,e!==null&&vp(i,e),i=ql(i,o),i.flags|=4096;return i}return e=Zi(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Xl(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function Ef(e,i,s,o,h){return vs(i),s=nf(e,i,s,o,void 0,h),o=af(),e!==null&&!on?(sf(e,i,h),ea(e,i,h)):(xe&&o&&Bu(i),i.flags|=1,bn(e,i,s,h),i.child)}function Um(e,i,s,o,h,m){return vs(i),i.updateQueue=null,s=zp(i,o,s,h),Op(e),o=af(),e!==null&&!on?(sf(e,i,m),ea(e,i,m)):(xe&&o&&Bu(i),i.flags|=1,bn(e,i,s,m),i.child)}function Nm(e,i,s,o,h){if(vs(i),i.stateNode===null){var m=tr,E=s.contextType;typeof E=="object"&&E!==null&&(m=En(E)),m=new s(o,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=xf,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=o,m.state=i.memoizedState,m.refs={},ju(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?En(E):tr,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(yf(i,s,E,o),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&xf.enqueueReplaceState(m,m.state,null),Eo(i,o,m,h),Mo(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){m=i.stateNode;var D=i.memoizedProps,k=Es(s,D);m.props=k;var st=m.context,gt=s.contextType;E=tr,typeof gt=="object"&&gt!==null&&(E=En(gt));var _t=s.getDerivedStateFromProps;gt=typeof _t=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,gt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||st!==E)&&ym(i,m,o,E),Ra=!1;var ot=i.memoizedState;m.state=ot,Eo(i,o,m,h),Mo(),st=i.memoizedState,D||ot!==st||Ra?(typeof _t=="function"&&(yf(i,s,_t,o),st=i.memoizedState),(k=Ra||_m(i,s,k,o,ot,st,E))?(gt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=st),m.props=o,m.state=st,m.context=E,o=k):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{m=i.stateNode,Zu(e,i),E=i.memoizedProps,gt=Es(s,E),m.props=gt,_t=i.pendingProps,ot=m.context,st=s.contextType,k=tr,typeof st=="object"&&st!==null&&(k=En(st)),D=s.getDerivedStateFromProps,(st=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==_t||ot!==k)&&ym(i,m,o,k),Ra=!1,ot=i.memoizedState,m.state=ot,Eo(i,o,m,h),Mo();var ut=i.memoizedState;E!==_t||ot!==ut||Ra||e!==null&&e.dependencies!==null&&Al(e.dependencies)?(typeof D=="function"&&(yf(i,s,D,o),ut=i.memoizedState),(gt=Ra||_m(i,s,gt,o,ot,ut,k)||e!==null&&e.dependencies!==null&&Al(e.dependencies))?(st||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(o,ut,k),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(o,ut,k)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=ut),m.props=o,m.state=ut,m.context=k,o=gt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&ot===e.memoizedState||(i.flags|=1024),o=!1)}return m=o,Xl(e,i),o=(i.flags&128)!==0,m||o?(m=i.stateNode,s=o&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&o?(i.child=Ss(i,e.child,null,h),i.child=Ss(i,null,s,h)):bn(e,i,s,h),i.memoizedState=m.state,e=i.child):e=ea(e,i,h),e}function Om(e,i,s,o){return ms(),i.flags|=256,bn(e,i,s,o),i.child}var bf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Tf(e){return{baseLanes:e,cachePool:Ep()}}function Af(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=ei),e}function zm(e,i,s){var o=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:($e.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(xe){if(h?La(i):Ua(),(e=ke)?(e=kg(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:ba!==null?{id:Ui,overflow:Ni}:null,retryLane:536870912,hydrationErrors:null},s=pp(e),s.return=i,i.child=s,Mn=i,ke=null)):e=null,e===null)throw Aa(i);return lh(e)?i.lanes=32:i.lanes=536870912,null}var D=o.children;return o=o.fallback,h?(Ua(),h=i.mode,D=Wl({mode:"hidden",children:D},h),o=ps(o,h,s,null),D.return=i,o.return=i,D.sibling=o,i.child=D,o=i.child,o.memoizedState=Tf(s),o.childLanes=Af(e,E,s),i.memoizedState=bf,Ro(null,o)):(La(i),wf(i,D))}var k=e.memoizedState;if(k!==null&&(D=k.dehydrated,D!==null)){if(m)i.flags&256?(La(i),i.flags&=-257,i=Rf(e,i,s)):i.memoizedState!==null?(Ua(),i.child=e.child,i.flags|=128,i=null):(Ua(),D=o.fallback,h=i.mode,o=Wl({mode:"visible",children:o.children},h),D=ps(D,h,s,null),D.flags|=2,o.return=i,D.return=i,o.sibling=D,i.child=o,Ss(i,e.child,null,s),o=i.child,o.memoizedState=Tf(s),o.childLanes=Af(e,E,s),i.memoizedState=bf,i=Ro(null,o));else if(La(i),lh(D)){if(E=D.nextSibling&&D.nextSibling.dataset,E)var st=E.dgst;E=st,o=Error(a(419)),o.stack="",o.digest=E,go({value:o,source:null,stack:null}),i=Rf(e,i,s)}else if(on||ar(e,i,s,!1),E=(s&e.childLanes)!==0,on||E){if(E=Ge,E!==null&&(o=Li(E,s),o!==0&&o!==k.retryLane))throw k.retryLane=o,ds(e,o),Xn(E,e,o),Mf;oh(D)||ec(),i=Rf(e,i,s)}else oh(D)?(i.flags|=192,i.child=e.child,i=null):(e=k.treeContext,ke=di(D.nextSibling),Mn=i,xe=!0,Ta=null,fi=!1,e!==null&&vp(i,e),i=wf(i,o.children),i.flags|=4096);return i}return h?(Ua(),D=o.fallback,h=i.mode,k=e.child,st=k.sibling,o=Zi(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,st!==null?D=Zi(st,D):(D=ps(D,h,s,null),D.flags|=2),D.return=i,o.return=i,o.sibling=D,i.child=o,Ro(null,o),o=i.child,D=e.child.memoizedState,D===null?D=Tf(s):(h=D.cachePool,h!==null?(k=sn._currentValue,h=h.parent!==k?{parent:k,pool:k}:h):h=Ep(),D={baseLanes:D.baseLanes|s,cachePool:h}),o.memoizedState=D,o.childLanes=Af(e,E,s),i.memoizedState=bf,Ro(e.child,o)):(La(i),s=e.child,e=s.sibling,s=Zi(s,{mode:"visible",children:o.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function wf(e,i){return i=Wl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Wl(e,i){return e=Qn(22,e,null,i),e.lanes=0,e}function Rf(e,i,s){return Ss(i,e.child,null,s),e=wf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Pm(e,i,s){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Vu(e.return,i,s)}function Cf(e,i,s,o,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:s,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=o,E.tail=s,E.tailMode=h,E.treeForkCount=m)}function Bm(e,i,s){var o=i.pendingProps,h=o.revealOrder,m=o.tail;o=o.children;var E=$e.current,D=(E&2)!==0;if(D?(E=E&1|2,i.flags|=128):E&=1,yt($e,E),bn(e,i,o,s),o=xe?mo:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pm(e,s,i);else if(e.tag===19)Pm(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&Ol(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Cf(i,!1,h,s,m,o);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&Ol(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}Cf(i,!0,s,null,m,o);break;case"together":Cf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function ea(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),za|=i.lanes,(s&i.childLanes)===0)if(e!==null){if(ar(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=Zi(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=Zi(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function Df(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Al(e)))}function ox(e,i,s){switch(i.tag){case 3:Yt(i,i.stateNode.containerInfo),wa(i,sn,e.memoizedState.cache),ms();break;case 27:case 5:re(i);break;case 4:Yt(i,i.stateNode.containerInfo);break;case 10:wa(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,tf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(La(i),i.flags|=128,null):(s&i.child.childLanes)!==0?zm(e,i,s):(La(i),e=ea(e,i,s),e!==null?e.sibling:null);La(i);break;case 19:var h=(e.flags&128)!==0;if(o=(s&i.childLanes)!==0,o||(ar(e,i,s,!1),o=(s&i.childLanes)!==0),h){if(o)return Bm(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),yt($e,$e.current),o)break;return null;case 22:return i.lanes=0,Cm(e,i,s,i.pendingProps);case 24:wa(i,sn,e.memoizedState.cache)}return ea(e,i,s)}function Im(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)on=!0;else{if(!Df(e,s)&&(i.flags&128)===0)return on=!1,ox(e,i,s);on=(e.flags&131072)!==0}else on=!1,xe&&(i.flags&1048576)!==0&&gp(i,mo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=ys(i.elementType),i.type=e,typeof e=="function")Ou(e)?(o=Es(e,o),i.tag=1,i=Nm(null,i,e,o,s)):(i.tag=0,i=Ef(null,i,e,o,s));else{if(e!=null){var h=e.$$typeof;if(h===L){i.tag=11,i=Am(null,i,e,o,s);break t}else if(h===O){i.tag=14,i=wm(null,i,e,o,s);break t}}throw i=Q(e)||e,Error(a(306,i,""))}}return i;case 0:return Ef(e,i,i.type,i.pendingProps,s);case 1:return o=i.type,h=Es(o,i.pendingProps),Nm(e,i,o,h,s);case 3:t:{if(Yt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));o=i.pendingProps;var m=i.memoizedState;h=m.element,Zu(e,i),Eo(i,o,null,s);var E=i.memoizedState;if(o=E.cache,wa(i,sn,o),o!==m.cache&&ku(i,[sn],s,!0),Mo(),o=E.element,m.isDehydrated)if(m={element:o,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Om(e,i,o,s);break t}else if(o!==h){h=li(Error(a(424)),i),go(h),i=Om(e,i,o,s);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ke=di(e.firstChild),Mn=i,xe=!0,Ta=null,fi=!0,s=Cp(i,null,o,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ms(),o===h){i=ea(e,i,s);break t}bn(e,i,o,s)}i=i.child}return i;case 26:return Xl(e,i),e===null?(s=Zg(i.type,null,i.pendingProps,null))?i.memoizedState=s:xe||(s=i.type,e=i.pendingProps,o=lc(Et.current).createElement(s),o[hn]=i,o[wn]=e,Tn(o,s,e),Pt(o),i.stateNode=o):i.memoizedState=Zg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return re(i),e===null&&xe&&(o=i.stateNode=Wg(i.type,i.pendingProps,Et.current),Mn=i,fi=!0,h=ke,Ha(i.type)?(ch=h,ke=di(o.firstChild)):ke=h),bn(e,i,i.pendingProps.children,s),Xl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&xe&&((h=o=ke)&&(o=Bx(o,i.type,i.pendingProps,fi),o!==null?(i.stateNode=o,Mn=i,ke=di(o.firstChild),fi=!1,h=!0):h=!1),h||Aa(i)),re(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,o=m.children,ah(h,m)?o=null:E!==null&&ah(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=nf(e,i,Jy,null,null,s),ko._currentValue=h),Xl(e,i),bn(e,i,o,s),i.child;case 6:return e===null&&xe&&((e=s=ke)&&(s=Ix(s,i.pendingProps,fi),s!==null?(i.stateNode=s,Mn=i,ke=null,e=!0):e=!1),e||Aa(i)),null;case 13:return zm(e,i,s);case 4:return Yt(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ss(i,null,o,s):bn(e,i,o,s),i.child;case 11:return Am(e,i,i.type,i.pendingProps,s);case 7:return bn(e,i,i.pendingProps,s),i.child;case 8:return bn(e,i,i.pendingProps.children,s),i.child;case 12:return bn(e,i,i.pendingProps.children,s),i.child;case 10:return o=i.pendingProps,wa(i,i.type,o.value),bn(e,i,o.children,s),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,vs(i),h=En(h),o=o(h),i.flags|=1,bn(e,i,o,s),i.child;case 14:return wm(e,i,i.type,i.pendingProps,s);case 15:return Rm(e,i,i.type,i.pendingProps,s);case 19:return Bm(e,i,s);case 31:return rx(e,i,s);case 22:return Cm(e,i,s,i.pendingProps);case 24:return vs(i),o=En(sn),e===null?(h=Wu(),h===null&&(h=Ge,m=qu(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:o,cache:h},ju(i),wa(i,sn,h)):((e.lanes&s)!==0&&(Zu(e,i),Eo(i,null,null,s),Mo()),h=e.memoizedState,m=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),wa(i,sn,o)):(o=m.cache,wa(i,sn,o),o!==h.cache&&ku(i,[sn],s,!0))),bn(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function na(e){e.flags|=4}function Lf(e,i,s,o,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(fg())e.flags|=8192;else throw xs=Dl,Yu}else e.flags&=-16777217}function Fm(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tv(i))if(fg())e.flags|=8192;else throw xs=Dl,Yu}function Yl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Me():536870912,e.lanes|=i,gr|=i)}function Co(e,i){if(!xe)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,o=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=s,i}function lx(e,i,s){var o=i.pendingProps;switch(Iu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(i),null;case 1:return qe(i),null;case 3:return s=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ji(sn),It(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ir(i)?na(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Hu())),qe(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(na(i),m!==null?(qe(i),Fm(i,m)):(qe(i),Lf(i,h,null,o,s))):m?m!==e.memoizedState?(na(i),qe(i),Fm(i,m)):(qe(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&na(i),qe(i),Lf(i,h,e,o,s)),null;case 27:if(j(i),s=Et.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&na(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return qe(i),null}e=J.current,ir(i)?_p(i):(e=Wg(h,o,s),i.stateNode=e,na(i))}return qe(i),null;case 5:if(j(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&na(i);else{if(!o){if(i.stateNode===null)throw Error(a(166));return qe(i),null}if(m=J.current,ir(i))_p(i);else{var E=lc(Et.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof o.is=="string"?E.createElement("select",{is:o.is}):E.createElement("select"),o.multiple?m.multiple=!0:o.size&&(m.size=o.size);break;default:m=typeof o.is=="string"?E.createElement(h,{is:o.is}):E.createElement(h)}}m[hn]=i,m[wn]=o;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Tn(m,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&na(i)}}return qe(i),Lf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&na(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(a(166));if(e=Et.current,ir(i)){if(e=i.stateNode,s=i.memoizedProps,o=null,h=Mn,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[hn]=i,e=!!(e.nodeValue===s||o!==null&&o.suppressHydrationWarning===!0||zg(e.nodeValue,s)),e||Aa(i,!0)}else e=lc(e).createTextNode(o),e[hn]=i,i.stateNode=e}return qe(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(o=ir(i),s!==null){if(e===null){if(!o)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[hn]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),e=!1}else s=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?($n(i),i):($n(i),null);if((i.flags&128)!==0)throw Error(a(558))}return qe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ir(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[hn]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;qe(i),h=!1}else h=Hu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?($n(i),i):($n(i),null)}return $n(i),(i.flags&128)!==0?(i.lanes=s,i):(s=o!==null,e=e!==null&&e.memoizedState!==null,s&&(o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),m=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(m=o.memoizedState.cachePool.pool),m!==h&&(o.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),Yl(i,i.updateQueue),qe(i),null);case 4:return It(),e===null&&$f(i.stateNode.containerInfo),qe(i),null;case 10:return Ji(i.type),qe(i),null;case 19:if(Z($e),o=i.memoizedState,o===null)return qe(i),null;if(h=(i.flags&128)!==0,m=o.rendering,m===null)if(h)Co(o,!1);else{if(Je!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=Ol(e),m!==null){for(i.flags|=128,Co(o,!1),e=m.updateQueue,i.updateQueue=e,Yl(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)dp(s,e),s=s.sibling;return yt($e,$e.current&1|2),xe&&Ki(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&xt()>Jl&&(i.flags|=128,h=!0,Co(o,!1),i.lanes=4194304)}else{if(!h)if(e=Ol(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Yl(i,e),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!m.alternate&&!xe)return qe(i),null}else 2*xt()-o.renderingStartTime>Jl&&s!==536870912&&(i.flags|=128,h=!0,Co(o,!1),i.lanes=4194304);o.isBackwards?(m.sibling=i.child,i.child=m):(e=o.last,e!==null?e.sibling=m:i.child=m,o.last=m)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=xt(),e.sibling=null,s=$e.current,yt($e,h?s&1|2:s&1),xe&&Ki(i,o.treeForkCount),e):(qe(i),null);case 22:case 23:return $n(i),$u(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(s&536870912)!==0&&(i.flags&128)===0&&(qe(i),i.subtreeFlags&6&&(i.flags|=8192)):qe(i),s=i.updateQueue,s!==null&&Yl(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==s&&(i.flags|=2048),e!==null&&Z(_s),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ji(sn),qe(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function cx(e,i){switch(Iu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ji(sn),It(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return j(i),null;case 31:if(i.memoizedState!==null){if($n(i),i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if($n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Z($e),null;case 4:return It(),null;case 10:return Ji(i.type),null;case 22:case 23:return $n(i),$u(),e!==null&&Z(_s),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ji(sn),null;case 25:return null;default:return null}}function Hm(e,i){switch(Iu(i),i.tag){case 3:Ji(sn),It();break;case 26:case 27:case 5:j(i);break;case 4:It();break;case 31:i.memoizedState!==null&&$n(i);break;case 13:$n(i);break;case 19:Z($e);break;case 10:Ji(i.type);break;case 22:case 23:$n(i),$u(),e!==null&&Z(_s);break;case 24:Ji(sn)}}function Do(e,i){try{var s=i.updateQueue,o=s!==null?s.lastEffect:null;if(o!==null){var h=o.next;s=h;do{if((s.tag&e)===e){o=void 0;var m=s.create,E=s.inst;o=m(),E.destroy=o}s=s.next}while(s!==h)}}catch(D){Oe(i,i.return,D)}}function Na(e,i,s){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var m=h.next;o=m;do{if((o.tag&e)===e){var E=o.inst,D=E.destroy;if(D!==void 0){E.destroy=void 0,h=i;var k=s,st=D;try{st()}catch(gt){Oe(h,k,gt)}}}o=o.next}while(o!==m)}}catch(gt){Oe(i,i.return,gt)}}function Gm(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{Lp(i,s)}catch(o){Oe(e,e.return,o)}}}function Vm(e,i,s){s.props=Es(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(o){Oe(e,i,o)}}function Lo(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof s=="function"?e.refCleanup=s(o):s.current=o}}catch(h){Oe(e,i,h)}}function Oi(e,i){var s=e.ref,o=e.refCleanup;if(s!==null)if(typeof o=="function")try{o()}catch(h){Oe(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Oe(e,i,h)}else s.current=null}function km(e){var i=e.type,s=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&o.focus();break t;case"img":s.src?o.src=s.src:s.srcSet&&(o.srcset=s.srcSet)}}catch(h){Oe(e,e.return,h)}}function Uf(e,i,s){try{var o=e.stateNode;Lx(o,e.type,s,i),o[wn]=i}catch(h){Oe(e,e.return,h)}}function qm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function Nf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||qm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Of(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Yi));else if(o!==4&&(o===27&&Ha(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(Of(e,i,s),e=e.sibling;e!==null;)Of(e,i,s),e=e.sibling}function jl(e,i,s){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(o!==4&&(o===27&&Ha(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(jl(e,i,s),e=e.sibling;e!==null;)jl(e,i,s),e=e.sibling}function Xm(e){var i=e.stateNode,s=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Tn(i,o,s),i[hn]=e,i[wn]=s}catch(m){Oe(e,e.return,m)}}var ia=!1,ln=!1,zf=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,vn=null;function ux(e,i){if(e=e.containerInfo,nh=mc,e=ap(e),wu(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var o=s.getSelection&&s.getSelection();if(o&&o.rangeCount!==0){s=o.anchorNode;var h=o.anchorOffset,m=o.focusNode;o=o.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,D=-1,k=-1,st=0,gt=0,_t=e,ot=null;e:for(;;){for(var ut;_t!==s||h!==0&&_t.nodeType!==3||(D=E+h),_t!==m||o!==0&&_t.nodeType!==3||(k=E+o),_t.nodeType===3&&(E+=_t.nodeValue.length),(ut=_t.firstChild)!==null;)ot=_t,_t=ut;for(;;){if(_t===e)break e;if(ot===s&&++st===h&&(D=E),ot===m&&++gt===o&&(k=E),(ut=_t.nextSibling)!==null)break;_t=ot,ot=_t.parentNode}_t=ut}s=D===-1||k===-1?null:{start:D,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(ih={focusedElem:e,selectionRange:s},mc=!1,vn=i;vn!==null;)if(i=vn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,vn=e;else for(;vn!==null;){switch(i=vn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,o=s.stateNode;try{var Bt=Es(s.type,h);e=o.getSnapshotBeforeUpdate(Bt,m),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Oe(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)rh(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":rh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,vn=e;break}vn=i.return}}function Ym(e,i,s){var o=s.flags;switch(s.tag){case 0:case 11:case 15:sa(e,s),o&4&&Do(5,s);break;case 1:if(sa(e,s),o&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){Oe(s,s.return,E)}else{var h=Es(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Oe(s,s.return,E)}}o&64&&Gm(s),o&512&&Lo(s,s.return);break;case 3:if(sa(e,s),o&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Lp(e,i)}catch(E){Oe(s,s.return,E)}}break;case 27:i===null&&o&4&&Xm(s);case 26:case 5:sa(e,s),i===null&&o&4&&km(s),o&512&&Lo(s,s.return);break;case 12:sa(e,s);break;case 31:sa(e,s),o&4&&Km(e,s);break;case 13:sa(e,s),o&4&&Qm(e,s),o&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=yx.bind(null,s),Fx(e,s))));break;case 22:if(o=s.memoizedState!==null||ia,!o){i=i!==null&&i.memoizedState!==null||ln,h=ia;var m=ln;ia=o,(ln=i)&&!m?ra(e,s,(s.subtreeFlags&8772)!==0):sa(e,s),ia=h,ln=m}break;case 30:break;default:sa(e,s)}}function jm(e){var i=e.alternate;i!==null&&(e.alternate=null,jm(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Rt(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ze=null,Gn=!1;function aa(e,i,s){for(s=s.child;s!==null;)Zm(e,i,s),s=s.sibling}function Zm(e,i,s){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Qt,s)}catch{}switch(s.tag){case 26:ln||Oi(s,i),aa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ln||Oi(s,i);var o=Ze,h=Gn;Ha(s.type)&&(Ze=s.stateNode,Gn=!1),aa(e,i,s),Ho(s.stateNode),Ze=o,Gn=h;break;case 5:ln||Oi(s,i);case 6:if(o=Ze,h=Gn,Ze=null,aa(e,i,s),Ze=o,Gn=h,Ze!==null)if(Gn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(s.stateNode)}catch(m){Oe(s,i,m)}else try{Ze.removeChild(s.stateNode)}catch(m){Oe(s,i,m)}break;case 18:Ze!==null&&(Gn?(e=Ze,Gg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),br(e)):Gg(Ze,s.stateNode));break;case 4:o=Ze,h=Gn,Ze=s.stateNode.containerInfo,Gn=!0,aa(e,i,s),Ze=o,Gn=h;break;case 0:case 11:case 14:case 15:Na(2,s,i),ln||Na(4,s,i),aa(e,i,s);break;case 1:ln||(Oi(s,i),o=s.stateNode,typeof o.componentWillUnmount=="function"&&Vm(s,i,o)),aa(e,i,s);break;case 21:aa(e,i,s);break;case 22:ln=(o=ln)||s.memoizedState!==null,aa(e,i,s),ln=o;break;default:aa(e,i,s)}}function Km(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{br(e)}catch(s){Oe(i,i.return,s)}}}function Qm(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{br(e)}catch(s){Oe(i,i.return,s)}}function fx(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Wm),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Wm),i;default:throw Error(a(435,e.tag))}}function Zl(e,i){var s=fx(e);i.forEach(function(o){if(!s.has(o)){s.add(o);var h=xx.bind(null,e,o);o.then(h,h)}})}function Vn(e,i){var s=i.deletions;if(s!==null)for(var o=0;o<s.length;o++){var h=s[o],m=e,E=i,D=E;t:for(;D!==null;){switch(D.tag){case 27:if(Ha(D.type)){Ze=D.stateNode,Gn=!1;break t}break;case 5:Ze=D.stateNode,Gn=!1;break t;case 3:case 4:Ze=D.stateNode.containerInfo,Gn=!0;break t}D=D.return}if(Ze===null)throw Error(a(160));Zm(m,E,h),Ze=null,Gn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Jm(i,e),i=i.sibling}var Mi=null;function Jm(e,i){var s=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Vn(i,e),kn(e),o&4&&(Na(3,e,e.return),Do(3,e),Na(5,e,e.return));break;case 1:Vn(i,e),kn(e),o&512&&(ln||s===null||Oi(s,s.return)),o&64&&ia&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?o:s.concat(o))));break;case 26:var h=Mi;if(Vn(i,e),kn(e),o&512&&(ln||s===null||Oi(s,s.return)),o&4){var m=s!==null?s.memoizedState:null;if(o=e.memoizedState,s===null)if(o===null)if(e.stateNode===null){t:{o=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":m=h.getElementsByTagName("title")[0],(!m||m[nt]||m[hn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(o),h.head.insertBefore(m,h.querySelector("head > title"))),Tn(m,o,s),m[hn]=e,Pt(m),o=m;break t;case"link":var E=Jg("link","href",h).get(o+(s.href||""));if(E){for(var D=0;D<E.length;D++)if(m=E[D],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(D,1);break e}}m=h.createElement(o),Tn(m,o,s),h.head.appendChild(m);break;case"meta":if(E=Jg("meta","content",h).get(o+(s.content||""))){for(D=0;D<E.length;D++)if(m=E[D],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(D,1);break e}}m=h.createElement(o),Tn(m,o,s),h.head.appendChild(m);break;default:throw Error(a(468,o))}m[hn]=e,Pt(m),o=m}e.stateNode=o}else $g(h,e.type,e.stateNode);else e.stateNode=Qg(h,o,e.memoizedProps);else m!==o?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,o===null?$g(h,e.type,e.stateNode):Qg(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Uf(e,e.memoizedProps,s.memoizedProps)}break;case 27:Vn(i,e),kn(e),o&512&&(ln||s===null||Oi(s,s.return)),s!==null&&o&4&&Uf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(Vn(i,e),kn(e),o&512&&(ln||s===null||Oi(s,s.return)),e.flags&32){h=e.stateNode;try{Ys(h,"")}catch(Bt){Oe(e,e.return,Bt)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,Uf(e,h,s!==null?s.memoizedProps:h)),o&1024&&(zf=!0);break;case 6:if(Vn(i,e),kn(e),o&4){if(e.stateNode===null)throw Error(a(162));o=e.memoizedProps,s=e.stateNode;try{s.nodeValue=o}catch(Bt){Oe(e,e.return,Bt)}}break;case 3:if(fc=null,h=Mi,Mi=cc(i.containerInfo),Vn(i,e),Mi=h,kn(e),o&4&&s!==null&&s.memoizedState.isDehydrated)try{br(i.containerInfo)}catch(Bt){Oe(e,e.return,Bt)}zf&&(zf=!1,$m(e));break;case 4:o=Mi,Mi=cc(e.stateNode.containerInfo),Vn(i,e),kn(e),Mi=o;break;case 12:Vn(i,e),kn(e);break;case 31:Vn(i,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 13:Vn(i,e),kn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Ql=xt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 22:h=e.memoizedState!==null;var k=s!==null&&s.memoizedState!==null,st=ia,gt=ln;if(ia=st||h,ln=gt||k,Vn(i,e),ln=gt,ia=st,kn(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||k||ia||ln||bs(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){k=s=i;try{if(m=k.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{D=k.stateNode;var _t=k.memoizedProps.style,ot=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;D.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(Bt){Oe(k,k.return,Bt)}}}else if(i.tag===6){if(s===null){k=i;try{k.stateNode.nodeValue=h?"":k.memoizedProps}catch(Bt){Oe(k,k.return,Bt)}}}else if(i.tag===18){if(s===null){k=i;try{var ut=k.stateNode;h?Vg(ut,!0):Vg(k.stateNode,!1)}catch(Bt){Oe(k,k.return,Bt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(s=o.retryQueue,s!==null&&(o.retryQueue=null,Zl(e,s))));break;case 19:Vn(i,e),kn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Zl(e,o)));break;case 30:break;case 21:break;default:Vn(i,e),kn(e)}}function kn(e){var i=e.flags;if(i&2){try{for(var s,o=e.return;o!==null;){if(qm(o)){s=o;break}o=o.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=Nf(e);jl(e,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(Ys(E,""),s.flags&=-33);var D=Nf(e);jl(e,D,E);break;case 3:case 4:var k=s.stateNode.containerInfo,st=Nf(e);Of(e,st,k);break;default:throw Error(a(161))}}catch(gt){Oe(e,e.return,gt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function $m(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;$m(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function sa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Ym(e,i.alternate,i),i=i.sibling}function bs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Na(4,i,i.return),bs(i);break;case 1:Oi(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Vm(i,i.return,s),bs(i);break;case 27:Ho(i.stateNode);case 26:case 5:Oi(i,i.return),bs(i);break;case 22:i.memoizedState===null&&bs(i);break;case 30:bs(i);break;default:bs(i)}e=e.sibling}}function ra(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:ra(h,m,s),Do(4,m);break;case 1:if(ra(h,m,s),o=m,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(st){Oe(o,o.return,st)}if(o=m,h=o.updateQueue,h!==null){var D=o.stateNode;try{var k=h.shared.hiddenCallbacks;if(k!==null)for(h.shared.hiddenCallbacks=null,h=0;h<k.length;h++)Dp(k[h],D)}catch(st){Oe(o,o.return,st)}}s&&E&64&&Gm(m),Lo(m,m.return);break;case 27:Xm(m);case 26:case 5:ra(h,m,s),s&&o===null&&E&4&&km(m),Lo(m,m.return);break;case 12:ra(h,m,s);break;case 31:ra(h,m,s),s&&E&4&&Km(h,m);break;case 13:ra(h,m,s),s&&E&4&&Qm(h,m);break;case 22:m.memoizedState===null&&ra(h,m,s),Lo(m,m.return);break;case 30:break;default:ra(h,m,s)}i=i.sibling}}function Pf(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&vo(s))}function Bf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e))}function Ei(e,i,s,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)tg(e,i,s,o),i=i.sibling}function tg(e,i,s,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ei(e,i,s,o),h&2048&&Do(9,i);break;case 1:Ei(e,i,s,o);break;case 3:Ei(e,i,s,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&vo(e)));break;case 12:if(h&2048){Ei(e,i,s,o),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,D=m.onPostCommit;typeof D=="function"&&D(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Oe(i,i.return,k)}}else Ei(e,i,s,o);break;case 31:Ei(e,i,s,o);break;case 13:Ei(e,i,s,o);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Ei(e,i,s,o):Uo(e,i):m._visibility&2?Ei(e,i,s,o):(m._visibility|=2,dr(e,i,s,o,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Pf(E,i);break;case 24:Ei(e,i,s,o),h&2048&&Bf(i.alternate,i);break;default:Ei(e,i,s,o)}}function dr(e,i,s,o,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,D=s,k=o,st=E.flags;switch(E.tag){case 0:case 11:case 15:dr(m,E,D,k,h),Do(8,E);break;case 23:break;case 22:var gt=E.stateNode;E.memoizedState!==null?gt._visibility&2?dr(m,E,D,k,h):Uo(m,E):(gt._visibility|=2,dr(m,E,D,k,h)),h&&st&2048&&Pf(E.alternate,E);break;case 24:dr(m,E,D,k,h),h&&st&2048&&Bf(E.alternate,E);break;default:dr(m,E,D,k,h)}i=i.sibling}}function Uo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,o=i,h=o.flags;switch(o.tag){case 22:Uo(s,o),h&2048&&Pf(o.alternate,o);break;case 24:Uo(s,o),h&2048&&Bf(o.alternate,o);break;default:Uo(s,o)}i=i.sibling}}var No=8192;function pr(e,i,s){if(e.subtreeFlags&No)for(e=e.child;e!==null;)eg(e,i,s),e=e.sibling}function eg(e,i,s){switch(e.tag){case 26:pr(e,i,s),e.flags&No&&e.memoizedState!==null&&Qx(s,Mi,e.memoizedState,e.memoizedProps);break;case 5:pr(e,i,s);break;case 3:case 4:var o=Mi;Mi=cc(e.stateNode.containerInfo),pr(e,i,s),Mi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=No,No=16777216,pr(e,i,s),No=o):pr(e,i,s));break;default:pr(e,i,s)}}function ng(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Oo(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];vn=o,ag(o,e)}ng(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ig(e),e=e.sibling}function ig(e){switch(e.tag){case 0:case 11:case 15:Oo(e),e.flags&2048&&Na(9,e,e.return);break;case 3:Oo(e);break;case 12:Oo(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,Kl(e)):Oo(e);break;default:Oo(e)}}function Kl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var o=i[s];vn=o,ag(o,e)}ng(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Na(8,i,i.return),Kl(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Kl(i));break;default:Kl(i)}e=e.sibling}}function ag(e,i){for(;vn!==null;){var s=vn;switch(s.tag){case 0:case 11:case 15:Na(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var o=s.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:vo(s.memoizedState.cache)}if(o=s.child,o!==null)o.return=s,vn=o;else t:for(s=e;vn!==null;){o=vn;var h=o.sibling,m=o.return;if(jm(o),o===s){vn=null;break t}if(h!==null){h.return=m,vn=h;break t}vn=m}}}var hx={getCacheForType:function(e){var i=En(sn),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return En(sn).controller.signal}},dx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,Ge=null,ge=null,_e=0,Ne=0,ti=null,Oa=!1,mr=!1,If=!1,oa=0,Je=0,za=0,Ts=0,Ff=0,ei=0,gr=0,zo=null,qn=null,Hf=!1,Ql=0,sg=0,Jl=1/0,$l=null,Pa=null,dn=0,Ba=null,vr=null,la=0,Gf=0,Vf=null,rg=null,Po=0,kf=null;function ni(){return(Ce&2)!==0&&_e!==0?_e&-_e:N.T!==null?Zf():cs()}function og(){if(ei===0)if((_e&536870912)===0||xe){var e=dt;dt<<=1,(dt&3932160)===0&&(dt=262144),ei=e}else ei=536870912;return e=Jn.current,e!==null&&(e.flags|=32),ei}function Xn(e,i,s){(e===Ge&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(_r(e,0),Ia(e,_e,ei,!1)),Ve(e,s),((Ce&2)===0||e!==Ge)&&(e===Ge&&((Ce&2)===0&&(Ts|=s),Je===4&&Ia(e,_e,ei,!1)),zi(e))}function lg(e,i,s){if((Ce&6)!==0)throw Error(a(327));var o=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Pe(e,i),h=o?gx(e,i):Xf(e,i,!0),m=o;do{if(h===0){mr&&!o&&Ia(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!px(s)){h=Xf(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var D=e;h=zo;var k=D.current.memoizedState.isDehydrated;if(k&&(_r(D,E).flags|=256),E=Xf(D,E,!1),E!==2){if(If&&!k){D.errorRecoveryDisabledLanes|=m,Ts|=m,h=4;break t}m=qn,qn=h,m!==null&&(qn===null?qn=m:qn.push.apply(qn,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){_r(e,0),Ia(e,i,0,!0);break}t:{switch(o=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Ia(o,i,ei,!Oa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Ql+300-xt(),10<h)){if(Ia(o,i,ei,!Oa),ee(o,0,!0)!==0)break t;la=i,o.timeoutHandle=Fg(cg.bind(null,o,s,qn,$l,Hf,i,ei,Ts,gr,Oa,m,"Throttled",-0,0),h);break t}cg(o,s,qn,$l,Hf,i,ei,Ts,gr,Oa,m,null,-0,0)}}break}while(!0);zi(e)}function cg(e,i,s,o,h,m,E,D,k,st,gt,_t,ot,ut){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},eg(i,m,_t);var Bt=(m&62914560)===m?Ql-xt():(m&4194048)===m?sg-xt():0;if(Bt=Jx(_t,Bt),Bt!==null){la=m,e.cancelPendingCommit=Bt(vg.bind(null,e,i,m,s,o,h,E,D,k,gt,_t,null,ot,ut)),Ia(e,m,E,!st);return}}vg(e,i,m,s,o,h,E,D,k)}function px(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var o=0;o<s.length;o++){var h=s[o],m=h.getSnapshot;h=h.value;try{if(!Kn(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ia(e,i,s,o){i&=~Ff,i&=~Ts,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var m=31-Xt(h),E=1<<m;o[m]=-1,h&=~E}s!==0&&An(e,s,i)}function tc(){return(Ce&6)===0?(Bo(0),!1):!0}function qf(){if(ge!==null){if(Ne===0)var e=ge.return;else e=ge,Qi=gs=null,rf(e),lr=null,yo=0,e=ge;for(;e!==null;)Hm(e.alternate,e),e=e.return;ge=null}}function _r(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ox(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),la=0,qf(),Ge=e,ge=s=Zi(e.current,null),_e=i,Ne=0,ti=null,Oa=!1,mr=Pe(e,i),If=!1,gr=ei=Ff=Ts=za=Je=0,qn=zo=null,Hf=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-Xt(o),m=1<<h;i|=e[h],o&=~m}return oa=i,Sl(),s}function ug(e,i){oe=null,N.H=wo,i===or||i===Cl?(i=Ap(),Ne=3):i===Yu?(i=Ap(),Ne=4):Ne=i===Mf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ti=i,ge===null&&(Je=1,kl(e,li(i,e.current)))}function fg(){var e=Jn.current;return e===null?!0:(_e&4194048)===_e?hi===null:(_e&62914560)===_e||(_e&536870912)!==0?e===hi:!1}function hg(){var e=N.H;return N.H=wo,e===null?wo:e}function dg(){var e=N.A;return N.A=hx,e}function ec(){Je=4,Oa||(_e&4194048)!==_e&&Jn.current!==null||(mr=!0),(za&134217727)===0&&(Ts&134217727)===0||Ge===null||Ia(Ge,_e,ei,!1)}function Xf(e,i,s){var o=Ce;Ce|=2;var h=hg(),m=dg();(Ge!==e||_e!==i)&&($l=null,_r(e,i)),i=!1;var E=Je;t:do try{if(Ne!==0&&ge!==null){var D=ge,k=ti;switch(Ne){case 8:qf(),E=6;break t;case 3:case 2:case 9:case 6:Jn.current===null&&(i=!0);var st=Ne;if(Ne=0,ti=null,yr(e,D,k,st),s&&mr){E=0;break t}break;default:st=Ne,Ne=0,ti=null,yr(e,D,k,st)}}mx(),E=Je;break}catch(gt){ug(e,gt)}while(!0);return i&&e.shellSuspendCounter++,Qi=gs=null,Ce=o,N.H=h,N.A=m,ge===null&&(Ge=null,_e=0,Sl()),E}function mx(){for(;ge!==null;)pg(ge)}function gx(e,i){var s=Ce;Ce|=2;var o=hg(),h=dg();Ge!==e||_e!==i?($l=null,Jl=xt()+500,_r(e,i)):mr=Pe(e,i);t:do try{if(Ne!==0&&ge!==null){i=ge;var m=ti;e:switch(Ne){case 1:Ne=0,ti=null,yr(e,i,m,1);break;case 2:case 9:if(bp(m)){Ne=0,ti=null,mg(i);break}i=function(){Ne!==2&&Ne!==9||Ge!==e||(Ne=7),zi(e)},m.then(i,i);break t;case 3:Ne=7;break t;case 4:Ne=5;break t;case 7:bp(m)?(Ne=0,ti=null,mg(i)):(Ne=0,ti=null,yr(e,i,m,7));break;case 5:var E=null;switch(ge.tag){case 26:E=ge.memoizedState;case 5:case 27:var D=ge;if(E?tv(E):D.stateNode.complete){Ne=0,ti=null;var k=D.sibling;if(k!==null)ge=k;else{var st=D.return;st!==null?(ge=st,nc(st)):ge=null}break e}}Ne=0,ti=null,yr(e,i,m,5);break;case 6:Ne=0,ti=null,yr(e,i,m,6);break;case 8:qf(),Je=6;break t;default:throw Error(a(462))}}vx();break}catch(gt){ug(e,gt)}while(!0);return Qi=gs=null,N.H=o,N.A=h,Ce=s,ge!==null?0:(Ge=null,_e=0,Sl(),Je)}function vx(){for(;ge!==null&&!ft();)pg(ge)}function pg(e){var i=Im(e.alternate,e,oa);e.memoizedProps=e.pendingProps,i===null?nc(e):ge=i}function mg(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Um(s,i,i.pendingProps,i.type,void 0,_e);break;case 11:i=Um(s,i,i.pendingProps,i.type.render,i.ref,_e);break;case 5:rf(i);default:Hm(s,i),i=ge=dp(i,oa),i=Im(s,i,oa)}e.memoizedProps=e.pendingProps,i===null?nc(e):ge=i}function yr(e,i,s,o){Qi=gs=null,rf(i),lr=null,yo=0;var h=i.return;try{if(sx(e,h,i,s,_e)){Je=1,kl(e,li(s,e.current)),ge=null;return}}catch(m){if(h!==null)throw ge=h,m;Je=1,kl(e,li(s,e.current)),ge=null;return}i.flags&32768?(xe||o===1?e=!0:mr||(_e&536870912)!==0?e=!1:(Oa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),gg(i,e)):nc(i)}function nc(e){var i=e;do{if((i.flags&32768)!==0){gg(i,Oa);return}e=i.return;var s=lx(i.alternate,i,oa);if(s!==null){ge=s;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=e}while(i!==null);Je===0&&(Je=5)}function gg(e,i){do{var s=cx(e.alternate,e);if(s!==null){s.flags&=32767,ge=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){ge=e;return}ge=e=s}while(e!==null);Je=6,ge=null}function vg(e,i,s,o,h,m,E,D,k){e.cancelPendingCommit=null;do ic();while(dn!==0);if((Ce&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Uu,Un(e,s,m,E,D,k),e===Ge&&(ge=Ge=null,_e=0),vr=i,Ba=e,la=s,Gf=m,Vf=h,rg=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sx(Dt,function(){return Mg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=N.T,N.T=null,h=Y.p,Y.p=2,E=Ce,Ce|=4;try{ux(e,i,s)}finally{Ce=E,Y.p=h,N.T=o}}dn=1,_g(),yg(),xg()}}function _g(){if(dn===1){dn=0;var e=Ba,i=vr,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var o=Y.p;Y.p=2;var h=Ce;Ce|=4;try{Jm(i,e);var m=ih,E=ap(e.containerInfo),D=m.focusedElem,k=m.selectionRange;if(E!==D&&D&&D.ownerDocument&&ip(D.ownerDocument.documentElement,D)){if(k!==null&&wu(D)){var st=k.start,gt=k.end;if(gt===void 0&&(gt=st),"selectionStart"in D)D.selectionStart=st,D.selectionEnd=Math.min(gt,D.value.length);else{var _t=D.ownerDocument||document,ot=_t&&_t.defaultView||window;if(ot.getSelection){var ut=ot.getSelection(),Bt=D.textContent.length,te=Math.min(k.start,Bt),Fe=k.end===void 0?te:Math.min(k.end,Bt);!ut.extend&&te>Fe&&(E=Fe,Fe=te,te=E);var tt=np(D,te),W=np(D,Fe);if(tt&&W&&(ut.rangeCount!==1||ut.anchorNode!==tt.node||ut.anchorOffset!==tt.offset||ut.focusNode!==W.node||ut.focusOffset!==W.offset)){var at=_t.createRange();at.setStart(tt.node,tt.offset),ut.removeAllRanges(),te>Fe?(ut.addRange(at),ut.extend(W.node,W.offset)):(at.setEnd(W.node,W.offset),ut.addRange(at))}}}}for(_t=[],ut=D;ut=ut.parentNode;)ut.nodeType===1&&_t.push({element:ut,left:ut.scrollLeft,top:ut.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<_t.length;D++){var vt=_t[D];vt.element.scrollLeft=vt.left,vt.element.scrollTop=vt.top}}mc=!!nh,ih=nh=null}finally{Ce=h,Y.p=o,N.T=s}}e.current=i,dn=2}}function yg(){if(dn===2){dn=0;var e=Ba,i=vr,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var o=Y.p;Y.p=2;var h=Ce;Ce|=4;try{Ym(e,i.alternate,i)}finally{Ce=h,Y.p=o,N.T=s}}dn=3}}function xg(){if(dn===4||dn===3){dn=0,Tt();var e=Ba,i=vr,s=la,o=rg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?dn=5:(dn=0,vr=Ba=null,Sg(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Pa=null),Vs(s),i=i.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Qt,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=N.T,h=Y.p,Y.p=2,N.T=null;try{for(var m=e.onRecoverableError,E=0;E<o.length;E++){var D=o[E];m(D.value,{componentStack:D.stack})}}finally{N.T=i,Y.p=h}}(la&3)!==0&&ic(),zi(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===kf?Po++:(Po=0,kf=e):Po=0,Bo(0)}}function Sg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,vo(i)))}function ic(){return _g(),yg(),xg(),Mg()}function Mg(){if(dn!==5)return!1;var e=Ba,i=Gf;Gf=0;var s=Vs(la),o=N.T,h=Y.p;try{Y.p=32>s?32:s,N.T=null,s=Vf,Vf=null;var m=Ba,E=la;if(dn=0,vr=Ba=null,la=0,(Ce&6)!==0)throw Error(a(331));var D=Ce;if(Ce|=4,ig(m.current),tg(m,m.current,E,s),Ce=D,Bo(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Qt,m)}catch{}return!0}finally{Y.p=h,N.T=o,Sg(e,i)}}function Eg(e,i,s){i=li(s,i),i=Sf(e.stateNode,i,2),e=Da(e,i,2),e!==null&&(Ve(e,2),zi(e))}function Oe(e,i,s){if(e.tag===3)Eg(e,e,s);else for(;i!==null;){if(i.tag===3){Eg(i,e,s);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){e=li(s,e),s=bm(2),o=Da(i,s,2),o!==null&&(Tm(s,o,i,e),Ve(o,2),zi(o));break}}i=i.return}}function Wf(e,i,s){var o=e.pingCache;if(o===null){o=e.pingCache=new dx;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(s)||(If=!0,h.add(s),e=_x.bind(null,e,i,s),i.then(e,e))}function _x(e,i,s){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ge===e&&(_e&s)===s&&(Je===4||Je===3&&(_e&62914560)===_e&&300>xt()-Ql?(Ce&2)===0&&_r(e,0):Ff|=s,gr===_e&&(gr=0)),zi(e)}function bg(e,i){i===0&&(i=Me()),e=ds(e,i),e!==null&&(Ve(e,i),zi(e))}function yx(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),bg(e,s)}function xx(e,i){var s=0;switch(e.tag){case 31:case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(i),bg(e,s)}function Sx(e,i){return V(e,i)}var ac=null,xr=null,Yf=!1,sc=!1,jf=!1,Fa=0;function zi(e){e!==xr&&e.next===null&&(xr===null?ac=xr=e:xr=xr.next=e),sc=!0,Yf||(Yf=!0,Ex())}function Bo(e,i){if(!jf&&sc){jf=!0;do for(var s=!1,o=ac;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var m=0;else{var E=o.suspendedLanes,D=o.pingedLanes;m=(1<<31-Xt(42|e)+1)-1,m&=h&~(E&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Rg(o,m))}else m=_e,m=ee(o,o===Ge?m:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(m&3)===0||Pe(o,m)||(s=!0,Rg(o,m));o=o.next}while(s);jf=!1}}function Mx(){Tg()}function Tg(){sc=Yf=!1;var e=0;Fa!==0&&Nx()&&(e=Fa);for(var i=xt(),s=null,o=ac;o!==null;){var h=o.next,m=Ag(o,i);m===0?(o.next=null,s===null?ac=h:s.next=h,h===null&&(xr=s)):(s=o,(e!==0||(m&3)!==0)&&(sc=!0)),o=h}dn!==0&&dn!==5||Bo(e),Fa!==0&&(Fa=0)}function Ag(e,i){for(var s=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Xt(m),D=1<<E,k=h[E];k===-1?((D&s)===0||(D&o)!==0)&&(h[E]=Ke(D,i)):k<=i&&(e.expiredLanes|=D),m&=~D}if(i=Ge,s=_e,s=ee(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,s===0||e===i&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Pe(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(o!==null&&U(o),Vs(s)){case 2:case 8:s=Lt;break;case 32:s=Dt;break;case 268435456:s=wt;break;default:s=Dt}return o=wg.bind(null,e),s=V(s,o),e.callbackPriority=i,e.callbackNode=s,i}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function wg(e,i){if(dn!==0&&dn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(ic()&&e.callbackNode!==s)return null;var o=_e;return o=ee(e,e===Ge?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(lg(e,o,i),Ag(e,xt()),e.callbackNode!=null&&e.callbackNode===s?wg.bind(null,e):null)}function Rg(e,i){if(ic())return null;lg(e,i,!0)}function Ex(){zx(function(){(Ce&6)!==0?V(qt,Mx):Tg()})}function Zf(){if(Fa===0){var e=sr;e===0&&(e=rt,rt<<=1,(rt&261888)===0&&(rt=256)),Fa=e}return Fa}function Cg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:dl(""+e)}function Dg(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function bx(e,i,s,o,h){if(i==="submit"&&s&&s.stateNode===h){var m=Cg((h[wn]||null).action),E=o.submitter;E&&(i=(i=E[wn]||null)?Cg(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var D=new vl("action","action",null,o,h);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Fa!==0){var k=E?Dg(h,E):new FormData(h);mf(s,{pending:!0,data:k,method:h.method,action:m},null,k)}}else typeof m=="function"&&(D.preventDefault(),k=E?Dg(h,E):new FormData(h),mf(s,{pending:!0,data:k,method:h.method,action:m},m,k))},currentTarget:h}]})}}for(var Kf=0;Kf<Lu.length;Kf++){var Qf=Lu[Kf],Tx=Qf.toLowerCase(),Ax=Qf[0].toUpperCase()+Qf.slice(1);Si(Tx,"on"+Ax)}Si(op,"onAnimationEnd"),Si(lp,"onAnimationIteration"),Si(cp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Vy,"onTransitionRun"),Si(ky,"onTransitionStart"),Si(qy,"onTransitionCancel"),Si(up,"onTransitionEnd"),Ue("onMouseEnter",["mouseout","mouseover"]),Ue("onMouseLeave",["mouseout","mouseover"]),Ue("onPointerEnter",["pointerout","pointerover"]),Ue("onPointerLeave",["pointerout","pointerover"]),Le("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Le("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Le("onBeforeInput",["compositionend","keypress","textInput","paste"]),Le("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Le("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Io));function Lg(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var o=e[s],h=o.event;o=o.listeners;t:{var m=void 0;if(i)for(var E=o.length-1;0<=E;E--){var D=o[E],k=D.instance,st=D.currentTarget;if(D=D.listener,k!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=st;try{m(h)}catch(gt){xl(gt)}h.currentTarget=null,m=k}else for(E=0;E<o.length;E++){if(D=o[E],k=D.instance,st=D.currentTarget,D=D.listener,k!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=st;try{m(h)}catch(gt){xl(gt)}h.currentTarget=null,m=k}}}}function ve(e,i){var s=i[P];s===void 0&&(s=i[P]=new Set);var o=e+"__bubble";s.has(o)||(Ug(i,e,2,!1),s.add(o))}function Jf(e,i,s){var o=0;i&&(o|=4),Ug(s,e,o,i)}var rc="_reactListening"+Math.random().toString(36).slice(2);function $f(e){if(!e[rc]){e[rc]=!0,Jt.forEach(function(s){s!=="selectionchange"&&(wx.has(s)||Jf(s,!1,e),Jf(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[rc]||(i[rc]=!0,Jf("selectionchange",!1,i))}}function Ug(e,i,s,o){switch(ov(i)){case 2:var h=eS;break;case 8:h=nS;break;default:h=ph}s=h.bind(null,i,s,e),h=void 0,!_u||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function th(e,i,s,o,h){var m=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var E=o.tag;if(E===3||E===4){var D=o.stateNode.containerInfo;if(D===h)break;if(E===4)for(E=o.return;E!==null;){var k=E.tag;if((k===3||k===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;D!==null;){if(E=Ut(D),E===null)return;if(k=E.tag,k===5||k===6||k===26||k===27){o=m=E;continue t}D=D.parentNode}}o=o.return}Bd(function(){var st=m,gt=gu(s),_t=[];t:{var ot=fp.get(e);if(ot!==void 0){var ut=vl,Bt=e;switch(e){case"keypress":if(ml(s)===0)break t;case"keydown":case"keyup":ut=xy;break;case"focusin":Bt="focus",ut=Mu;break;case"focusout":Bt="blur",ut=Mu;break;case"beforeblur":case"afterblur":ut=Mu;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ut=Hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ut=ly;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ut=Ey;break;case op:case lp:case cp:ut=fy;break;case up:ut=Ty;break;case"scroll":case"scrollend":ut=ry;break;case"wheel":ut=wy;break;case"copy":case"cut":case"paste":ut=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ut=Vd;break;case"toggle":case"beforetoggle":ut=Cy}var te=(i&4)!==0,Fe=!te&&(e==="scroll"||e==="scrollend"),tt=te?ot!==null?ot+"Capture":null:ot;te=[];for(var W=st,at;W!==null;){var vt=W;if(at=vt.stateNode,vt=vt.tag,vt!==5&&vt!==26&&vt!==27||at===null||tt===null||(vt=so(W,tt),vt!=null&&te.push(Fo(W,vt,at))),Fe)break;W=W.return}0<te.length&&(ot=new ut(ot,Bt,null,s,gt),_t.push({event:ot,listeners:te}))}}if((i&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",ut=e==="mouseout"||e==="pointerout",ot&&s!==mu&&(Bt=s.relatedTarget||s.fromElement)&&(Ut(Bt)||Bt[Ma]))break t;if((ut||ot)&&(ot=gt.window===gt?gt:(ot=gt.ownerDocument)?ot.defaultView||ot.parentWindow:window,ut?(Bt=s.relatedTarget||s.toElement,ut=st,Bt=Bt?Ut(Bt):null,Bt!==null&&(Fe=l(Bt),te=Bt.tag,Bt!==Fe||te!==5&&te!==27&&te!==6)&&(Bt=null)):(ut=null,Bt=st),ut!==Bt)){if(te=Hd,vt="onMouseLeave",tt="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(te=Vd,vt="onPointerLeave",tt="onPointerEnter",W="pointer"),Fe=ut==null?ot:Ft(ut),at=Bt==null?ot:Ft(Bt),ot=new te(vt,W+"leave",ut,s,gt),ot.target=Fe,ot.relatedTarget=at,vt=null,Ut(gt)===st&&(te=new te(tt,W+"enter",Bt,s,gt),te.target=at,te.relatedTarget=Fe,vt=te),Fe=vt,ut&&Bt)e:{for(te=Rx,tt=ut,W=Bt,at=0,vt=tt;vt;vt=te(vt))at++;vt=0;for(var Zt=W;Zt;Zt=te(Zt))vt++;for(;0<at-vt;)tt=te(tt),at--;for(;0<vt-at;)W=te(W),vt--;for(;at--;){if(tt===W||W!==null&&tt===W.alternate){te=tt;break e}tt=te(tt),W=te(W)}te=null}else te=null;ut!==null&&Ng(_t,ot,ut,te,!1),Bt!==null&&Fe!==null&&Ng(_t,Fe,Bt,te,!0)}}t:{if(ot=st?Ft(st):window,ut=ot.nodeName&&ot.nodeName.toLowerCase(),ut==="select"||ut==="input"&&ot.type==="file")var Ae=Kd;else if(jd(ot))if(Qd)Ae=Fy;else{Ae=By;var kt=Py}else ut=ot.nodeName,!ut||ut.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?st&&pu(st.elementType)&&(Ae=Kd):Ae=Iy;if(Ae&&(Ae=Ae(e,st))){Zd(_t,Ae,s,gt);break t}kt&&kt(e,ot,st),e==="focusout"&&st&&ot.type==="number"&&st.memoizedProps.value!=null&&du(ot,"number",ot.value)}switch(kt=st?Ft(st):window,e){case"focusin":(jd(kt)||kt.contentEditable==="true")&&(Qs=kt,Ru=st,po=null);break;case"focusout":po=Ru=Qs=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,sp(_t,s,gt);break;case"selectionchange":if(Gy)break;case"keydown":case"keyup":sp(_t,s,gt)}var ce;if(bu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else Ks?Wd(e,s)&&(ye="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(kd&&s.locale!=="ko"&&(Ks||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ks&&(ce=Id()):(Ea=gt,yu="value"in Ea?Ea.value:Ea.textContent,Ks=!0)),kt=oc(st,ye),0<kt.length&&(ye=new Gd(ye,e,null,s,gt),_t.push({event:ye,listeners:kt}),ce?ye.data=ce:(ce=Yd(s),ce!==null&&(ye.data=ce)))),(ce=Ly?Uy(e,s):Ny(e,s))&&(ye=oc(st,"onBeforeInput"),0<ye.length&&(kt=new Gd("onBeforeInput","beforeinput",null,s,gt),_t.push({event:kt,listeners:ye}),kt.data=ce)),bx(_t,e,st,s,gt)}Lg(_t,i)})}function Fo(e,i,s){return{instance:e,listener:i,currentTarget:s}}function oc(e,i){for(var s=i+"Capture",o=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=so(e,s),h!=null&&o.unshift(Fo(e,h,m)),h=so(e,i),h!=null&&o.push(Fo(e,h,m))),e.tag===3)return o;e=e.return}return[]}function Rx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ng(e,i,s,o,h){for(var m=i._reactName,E=[];s!==null&&s!==o;){var D=s,k=D.alternate,st=D.stateNode;if(D=D.tag,k!==null&&k===o)break;D!==5&&D!==26&&D!==27||st===null||(k=st,h?(st=so(s,m),st!=null&&E.unshift(Fo(s,st,k))):h||(st=so(s,m),st!=null&&E.push(Fo(s,st,k)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var Cx=/\r\n?/g,Dx=/\u0000|\uFFFD/g;function Og(e){return(typeof e=="string"?e:""+e).replace(Cx,`
`).replace(Dx,"")}function zg(e,i){return i=Og(i),Og(e)===i}function Ie(e,i,s,o,h,m){switch(s){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Ys(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Ys(e,""+o);break;case"className":Bn(e,"class",o);break;case"tabIndex":Bn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bn(e,s,o);break;case"style":zd(e,o,m);break;case"data":if(i!=="object"){Bn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=dl(""+o),e.setAttribute(s,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&Ie(e,i,"name",h.name,h,null),Ie(e,i,"formEncType",h.formEncType,h,null),Ie(e,i,"formMethod",h.formMethod,h,null),Ie(e,i,"formTarget",h.formTarget,h,null)):(Ie(e,i,"encType",h.encType,h,null),Ie(e,i,"method",h.method,h,null),Ie(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(s);break}o=dl(""+o),e.setAttribute(s,o);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}s=dl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""+o):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":o===!0?e.setAttribute(s,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(s,o):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(s,o):e.removeAttribute(s);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(s):e.setAttribute(s,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),be(e,"popover",o);break;case"xlinkActuate":In(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":In(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":In(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":In(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":In(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":In(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":In(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":In(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":In(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":be(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ay.get(s)||s,be(e,s,o))}}function eh(e,i,s,o,h,m){switch(s){case"style":zd(e,o,m);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(s=o.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof o=="string"?Ys(e,o):(typeof o=="number"||typeof o=="bigint")&&Ys(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ee.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[wn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof o=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,o,h);break t}s in e?e[s]=o:o===!0?e.setAttribute(s,""):be(e,s,o)}}}function Tn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ie(e,i,m,E,s,null)}}h&&Ie(e,i,"srcSet",s.srcSet,s,null),o&&Ie(e,i,"src",s.src,s,null);return;case"input":ve("invalid",e);var D=m=E=h=null,k=null,st=null;for(o in s)if(s.hasOwnProperty(o)){var gt=s[o];if(gt!=null)switch(o){case"name":h=gt;break;case"type":E=gt;break;case"checked":k=gt;break;case"defaultChecked":st=gt;break;case"value":m=gt;break;case"defaultValue":D=gt;break;case"children":case"dangerouslySetInnerHTML":if(gt!=null)throw Error(a(137,i));break;default:Ie(e,i,o,gt,s,null)}}Ld(e,m,D,k,st,E,h,!1);return;case"select":ve("invalid",e),o=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(D=s[h],D!=null))switch(h){case"value":m=D;break;case"defaultValue":E=D;break;case"multiple":o=D;default:Ie(e,i,h,D,s,null)}i=m,s=E,e.multiple=!!o,i!=null?Ws(e,!!o,i,!1):s!=null&&Ws(e,!!o,s,!0);return;case"textarea":ve("invalid",e),m=h=o=null;for(E in s)if(s.hasOwnProperty(E)&&(D=s[E],D!=null))switch(E){case"value":o=D;break;case"defaultValue":h=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:Ie(e,i,E,D,s,null)}Nd(e,o,h,m);return;case"option":for(k in s)if(s.hasOwnProperty(k)&&(o=s[k],o!=null))switch(k){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ie(e,i,k,o,s,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Io.length;o++)ve(Io[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(st in s)if(s.hasOwnProperty(st)&&(o=s[st],o!=null))switch(st){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ie(e,i,st,o,s,null)}return;default:if(pu(i)){for(gt in s)s.hasOwnProperty(gt)&&(o=s[gt],o!==void 0&&eh(e,i,gt,o,s,void 0));return}}for(D in s)s.hasOwnProperty(D)&&(o=s[D],o!=null&&Ie(e,i,D,o,s,null))}function Lx(e,i,s,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,D=null,k=null,st=null,gt=null;for(ut in s){var _t=s[ut];if(s.hasOwnProperty(ut)&&_t!=null)switch(ut){case"checked":break;case"value":break;case"defaultValue":k=_t;default:o.hasOwnProperty(ut)||Ie(e,i,ut,null,o,_t)}}for(var ot in o){var ut=o[ot];if(_t=s[ot],o.hasOwnProperty(ot)&&(ut!=null||_t!=null))switch(ot){case"type":m=ut;break;case"name":h=ut;break;case"checked":st=ut;break;case"defaultChecked":gt=ut;break;case"value":E=ut;break;case"defaultValue":D=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(a(137,i));break;default:ut!==_t&&Ie(e,i,ot,ut,o,_t)}}Xs(e,E,D,k,st,gt,m,h);return;case"select":ut=E=D=ot=null;for(m in s)if(k=s[m],s.hasOwnProperty(m)&&k!=null)switch(m){case"value":break;case"multiple":ut=k;default:o.hasOwnProperty(m)||Ie(e,i,m,null,o,k)}for(h in o)if(m=o[h],k=s[h],o.hasOwnProperty(h)&&(m!=null||k!=null))switch(h){case"value":ot=m;break;case"defaultValue":D=m;break;case"multiple":E=m;default:m!==k&&Ie(e,i,h,m,o,k)}i=D,s=E,o=ut,ot!=null?Ws(e,!!s,ot,!1):!!o!=!!s&&(i!=null?Ws(e,!!s,i,!0):Ws(e,!!s,s?[]:"",!1));return;case"textarea":ut=ot=null;for(D in s)if(h=s[D],s.hasOwnProperty(D)&&h!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ie(e,i,D,null,o,h)}for(E in o)if(h=o[E],m=s[E],o.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":ot=h;break;case"defaultValue":ut=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Ie(e,i,E,h,o,m)}Ud(e,ot,ut);return;case"option":for(var Bt in s)if(ot=s[Bt],s.hasOwnProperty(Bt)&&ot!=null&&!o.hasOwnProperty(Bt))switch(Bt){case"selected":e.selected=!1;break;default:Ie(e,i,Bt,null,o,ot)}for(k in o)if(ot=o[k],ut=s[k],o.hasOwnProperty(k)&&ot!==ut&&(ot!=null||ut!=null))switch(k){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:Ie(e,i,k,ot,o,ut)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)ot=s[te],s.hasOwnProperty(te)&&ot!=null&&!o.hasOwnProperty(te)&&Ie(e,i,te,null,o,ot);for(st in o)if(ot=o[st],ut=s[st],o.hasOwnProperty(st)&&ot!==ut&&(ot!=null||ut!=null))switch(st){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(a(137,i));break;default:Ie(e,i,st,ot,o,ut)}return;default:if(pu(i)){for(var Fe in s)ot=s[Fe],s.hasOwnProperty(Fe)&&ot!==void 0&&!o.hasOwnProperty(Fe)&&eh(e,i,Fe,void 0,o,ot);for(gt in o)ot=o[gt],ut=s[gt],!o.hasOwnProperty(gt)||ot===ut||ot===void 0&&ut===void 0||eh(e,i,gt,ot,o,ut);return}}for(var tt in s)ot=s[tt],s.hasOwnProperty(tt)&&ot!=null&&!o.hasOwnProperty(tt)&&Ie(e,i,tt,null,o,ot);for(_t in o)ot=o[_t],ut=s[_t],!o.hasOwnProperty(_t)||ot===ut||ot==null&&ut==null||Ie(e,i,_t,ot,o,ut)}function Pg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ux(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),o=0;o<s.length;o++){var h=s[o],m=h.transferSize,E=h.initiatorType,D=h.duration;if(m&&D&&Pg(E)){for(E=0,D=h.responseEnd,o+=1;o<s.length;o++){var k=s[o],st=k.startTime;if(st>D)break;var gt=k.transferSize,_t=k.initiatorType;gt&&Pg(_t)&&(k=k.responseEnd,E+=gt*(k<D?1:(D-st)/(k-st)))}if(--o,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var nh=null,ih=null;function lc(e){return e.nodeType===9?e:e.ownerDocument}function Bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ig(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function ah(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var sh=null;function Nx(){var e=window.event;return e&&e.type==="popstate"?e===sh?!1:(sh=e,!0):(sh=null,!1)}var Fg=typeof setTimeout=="function"?setTimeout:void 0,Ox=typeof clearTimeout=="function"?clearTimeout:void 0,Hg=typeof Promise=="function"?Promise:void 0,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hg<"u"?function(e){return Hg.resolve(null).then(e).catch(Px)}:Fg;function Px(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function Gg(e,i){var s=i,o=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(o===0){e.removeChild(h),br(i);return}o--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")o++;else if(s==="html")Ho(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Ho(s);for(var m=s.firstChild;m;){var E=m.nextSibling,D=m.nodeName;m[nt]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&Ho(e.ownerDocument.body);s=h}while(s);br(i)}function Vg(e,i){var s=e;e=0;do{var o=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),o&&o.nodeType===8)if(s=o.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=o}while(s)}function rh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":rh(s),Rt(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function Bx(e,i,s,o){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[nt])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function Ix(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=di(e.nextSibling),e===null))return null;return e}function kg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=di(e.nextSibling),e===null))return null;return e}function oh(e){return e.data==="$?"||e.data==="$~"}function lh(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Fx(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var o=function(){i(),s.removeEventListener("DOMContentLoaded",o)};s.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function di(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var ch=null;function qg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return di(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function Xg(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function Wg(e,i,s){switch(i=lc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Ho(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Rt(e)}var pi=new Map,Yg=new Set;function cc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ca=Y.d;Y.d={f:Hx,r:Gx,D:Vx,C:kx,L:qx,m:Xx,X:Yx,S:Wx,M:jx};function Hx(){var e=ca.f(),i=tc();return e||i}function Gx(e){var i=Ot(e);i!==null&&i.tag===5&&i.type==="form"?um(i):ca.r(e)}var Sr=typeof document>"u"?null:document;function jg(e,i,s){var o=Sr;if(o&&typeof i=="string"&&i){var h=Fn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Yg.has(h)||(Yg.add(h),e={rel:e,crossOrigin:s,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),Tn(i,"link",e),Pt(i),o.head.appendChild(i)))}}function Vx(e){ca.D(e),jg("dns-prefetch",e,null)}function kx(e,i){ca.C(e,i),jg("preconnect",e,i)}function qx(e,i,s){ca.L(e,i,s);var o=Sr;if(o&&e&&i){var h='link[rel="preload"][as="'+Fn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Fn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Fn(s.imageSizes)+'"]')):h+='[href="'+Fn(e)+'"]';var m=h;switch(i){case"style":m=Mr(e);break;case"script":m=Er(e)}pi.has(m)||(e=_({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),pi.set(m,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(Go(m))||i==="script"&&o.querySelector(Vo(m))||(i=o.createElement("link"),Tn(i,"link",e),Pt(i),o.head.appendChild(i)))}}function Xx(e,i){ca.m(e,i);var s=Sr;if(s&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Fn(o)+'"][href="'+Fn(e)+'"]',m=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Er(e)}if(!pi.has(m)&&(e=_({rel:"modulepreload",href:e},i),pi.set(m,e),s.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Vo(m)))return}o=s.createElement("link"),Tn(o,"link",e),Pt(o),s.head.appendChild(o)}}}function Wx(e,i,s){ca.S(e,i,s);var o=Sr;if(o&&e){var h=Kt(o).hoistableStyles,m=Mr(e);i=i||"default";var E=h.get(m);if(!E){var D={loading:0,preload:null};if(E=o.querySelector(Go(m)))D.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":i},s),(s=pi.get(m))&&uh(e,s);var k=E=o.createElement("link");Pt(k),Tn(k,"link",e),k._p=new Promise(function(st,gt){k.onload=st,k.onerror=gt}),k.addEventListener("load",function(){D.loading|=1}),k.addEventListener("error",function(){D.loading|=2}),D.loading|=4,uc(E,i,o)}E={type:"stylesheet",instance:E,count:1,state:D},h.set(m,E)}}}function Yx(e,i){ca.X(e,i);var s=Sr;if(s&&e){var o=Kt(s).hoistableScripts,h=Er(e),m=o.get(h);m||(m=s.querySelector(Vo(h)),m||(e=_({src:e,async:!0},i),(i=pi.get(h))&&fh(e,i),m=s.createElement("script"),Pt(m),Tn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(h,m))}}function jx(e,i){ca.M(e,i);var s=Sr;if(s&&e){var o=Kt(s).hoistableScripts,h=Er(e),m=o.get(h);m||(m=s.querySelector(Vo(h)),m||(e=_({src:e,async:!0,type:"module"},i),(i=pi.get(h))&&fh(e,i),m=s.createElement("script"),Pt(m),Tn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},o.set(h,m))}}function Zg(e,i,s,o){var h=(h=Et.current)?cc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=Mr(s.href),s=Kt(h).hoistableStyles,o=s.get(i),o||(o={type:"style",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Mr(s.href);var m=Kt(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(Go(e)))&&!m._p&&(E.instance=m,E.state.loading=5),pi.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pi.set(e,s),m||Zx(h,e,s,E.state))),i&&o===null)throw Error(a(528,""));return E}if(i&&o!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Er(s),s=Kt(h).hoistableScripts,o=s.get(i),o||(o={type:"script",instance:null,count:0,state:null},s.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Mr(e){return'href="'+Fn(e)+'"'}function Go(e){return'link[rel="stylesheet"]['+e+"]"}function Kg(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Zx(e,i,s,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Tn(i,"link",s),Pt(i),e.head.appendChild(i))}function Er(e){return'[src="'+Fn(e)+'"]'}function Vo(e){return"script[async]"+e}function Qg(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Fn(s.href)+'"]');if(o)return i.instance=o,Pt(o),o;var h=_({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Pt(o),Tn(o,"style",h),uc(o,s.precedence,e),i.instance=o;case"stylesheet":h=Mr(s.href);var m=e.querySelector(Go(h));if(m)return i.state.loading|=4,i.instance=m,Pt(m),m;o=Kg(s),(h=pi.get(h))&&uh(o,h),m=(e.ownerDocument||e).createElement("link"),Pt(m);var E=m;return E._p=new Promise(function(D,k){E.onload=D,E.onerror=k}),Tn(m,"link",o),i.state.loading|=4,uc(m,s.precedence,e),i.instance=m;case"script":return m=Er(s.src),(h=e.querySelector(Vo(m)))?(i.instance=h,Pt(h),h):(o=s,(h=pi.get(m))&&(o=_({},s),fh(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),Pt(h),Tn(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,uc(o,s.precedence,e));return i.instance}function uc(e,i,s){for(var o=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,m=h,E=0;E<o.length;E++){var D=o[E];if(D.dataset.precedence===i)m=D;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function uh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function fh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var fc=null;function Jg(e,i,s){if(fc===null){var o=new Map,h=fc=new Map;h.set(s,o)}else h=fc,o=h.get(s),o||(o=new Map,h.set(s,o));if(o.has(e))return o;for(o.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[nt]||m[hn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var D=o.get(E);D?D.push(m):o.set(E,[m])}}return o}function $g(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function Kx(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function tv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qx(e,i,s,o){if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=Mr(o.href),m=i.querySelector(Go(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=hc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,Pt(m);return}m=i.ownerDocument||i,o=Kg(o),(h=pi.get(h))&&uh(o,h),m=m.createElement("link"),Pt(m);var E=m;E._p=new Promise(function(D,k){E.onload=D,E.onerror=k}),Tn(m,"link",o),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=hc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var hh=0;function Jx(e,i){return e.stylesheets&&e.count===0&&pc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var o=setTimeout(function(){if(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&hh===0&&(hh=62500*Ux());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>hh?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function hc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var dc=null;function pc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,dc=new Map,i.forEach($x,e),dc=null,hc.call(e))}function $x(e,i){if(!(i.state.loading&4)){var s=dc.get(e);if(s)var o=s.get(null);else{s=new Map,dc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),o=E)}o&&s.set(null,o)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||o,m===o&&s.set(null,h),s.set(E,h),this.count++,o=hc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ko={$$typeof:w,Provider:null,Consumer:null,_currentValue:X,_currentValue2:X,_threadCount:0};function tS(e,i,s,o,h,m,E,D,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=je(0),this.hiddenUpdates=je(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function ev(e,i,s,o,h,m,E,D,k,st,gt,_t){return e=new tS(e,i,s,E,k,st,gt,_t,D),i=1,m===!0&&(i|=24),m=Qn(3,null,null,i),e.current=m,m.stateNode=e,i=qu(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:o,isDehydrated:s,cache:i},ju(m),e}function nv(e){return e?(e=tr,e):tr}function iv(e,i,s,o,h,m){h=nv(h),o.context===null?o.context=h:o.pendingContext=h,o=Ca(i),o.payload={element:s},m=m===void 0?null:m,m!==null&&(o.callback=m),s=Da(e,o,i),s!==null&&(Xn(s,e,i),So(s,e,i))}function av(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function dh(e,i){av(e,i),(e=e.alternate)&&av(e,i)}function sv(e){if(e.tag===13||e.tag===31){var i=ds(e,67108864);i!==null&&Xn(i,e,67108864),dh(e,67108864)}}function rv(e){if(e.tag===13||e.tag===31){var i=ni();i=yi(i);var s=ds(e,i);s!==null&&Xn(s,e,i),dh(e,i)}}var mc=!0;function eS(e,i,s,o){var h=N.T;N.T=null;var m=Y.p;try{Y.p=2,ph(e,i,s,o)}finally{Y.p=m,N.T=h}}function nS(e,i,s,o){var h=N.T;N.T=null;var m=Y.p;try{Y.p=8,ph(e,i,s,o)}finally{Y.p=m,N.T=h}}function ph(e,i,s,o){if(mc){var h=mh(o);if(h===null)th(e,i,o,gc,s),lv(e,o);else if(aS(h,e,i,s,o))o.stopPropagation();else if(lv(e,o),i&4&&-1<iS.indexOf(e)){for(;h!==null;){var m=Ot(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Gt(m.pendingLanes);if(E!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;E;){var k=1<<31-Xt(E);D.entanglements[1]|=k,E&=~k}zi(m),(Ce&6)===0&&(Jl=xt()+500,Bo(0))}}break;case 31:case 13:D=ds(m,2),D!==null&&Xn(D,m,2),tc(),dh(m,2)}if(m=mh(o),m===null&&th(e,i,o,gc,s),m===h)break;h=m}h!==null&&o.stopPropagation()}else th(e,i,o,null,s)}}function mh(e){return e=gu(e),gh(e)}var gc=null;function gh(e){if(gc=null,e=Ut(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=u(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return gc=e,null}function ov(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(At()){case qt:return 2;case Lt:return 8;case Dt:case ie:return 32;case wt:return 268435456;default:return 32}default:return 32}}var vh=!1,Ga=null,Va=null,ka=null,qo=new Map,Xo=new Map,qa=[],iS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function lv(e,i){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":qo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xo.delete(i.pointerId)}}function Wo(e,i,s,o,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:o,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ot(i),i!==null&&sv(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function aS(e,i,s,o,h){switch(i){case"focusin":return Ga=Wo(Ga,e,i,s,o,h),!0;case"dragenter":return Va=Wo(Va,e,i,s,o,h),!0;case"mouseover":return ka=Wo(ka,e,i,s,o,h),!0;case"pointerover":var m=h.pointerId;return qo.set(m,Wo(qo.get(m)||null,e,i,s,o,h)),!0;case"gotpointercapture":return m=h.pointerId,Xo.set(m,Wo(Xo.get(m)||null,e,i,s,o,h)),!0}return!1}function cv(e){var i=Ut(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){e.blockedOn=i,io(e.priority,function(){rv(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,io(e.priority,function(){rv(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=mh(e.nativeEvent);if(s===null){s=e.nativeEvent;var o=new s.constructor(s.type,s);mu=o,s.target.dispatchEvent(o),mu=null}else return i=Ot(s),i!==null&&sv(i),e.blockedOn=s,!1;i.shift()}return!0}function uv(e,i,s){vc(e)&&s.delete(i)}function sS(){vh=!1,Ga!==null&&vc(Ga)&&(Ga=null),Va!==null&&vc(Va)&&(Va=null),ka!==null&&vc(ka)&&(ka=null),qo.forEach(uv),Xo.forEach(uv)}function _c(e,i){e.blockedOn===i&&(e.blockedOn=null,vh||(vh=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,sS)))}var yc=null;function fv(e){yc!==e&&(yc=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var i=0;i<e.length;i+=3){var s=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(gh(o||s)===null)continue;break}var m=Ot(s);m!==null&&(e.splice(i,3),i-=3,mf(m,{pending:!0,data:h,method:s.method,action:o},o,h))}}))}function br(e){function i(k){return _c(k,e)}Ga!==null&&_c(Ga,e),Va!==null&&_c(Va,e),ka!==null&&_c(ka,e),qo.forEach(i),Xo.forEach(i);for(var s=0;s<qa.length;s++){var o=qa[s];o.blockedOn===e&&(o.blockedOn=null)}for(;0<qa.length&&(s=qa[0],s.blockedOn===null);)cv(s),s.blockedOn===null&&qa.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(o=0;o<s.length;o+=3){var h=s[o],m=s[o+1],E=h[wn]||null;if(typeof m=="function")E||fv(s);else if(E){var D=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[wn]||null)D=E.formAction;else if(gh(h)!==null)continue}else D=E.action;typeof D=="function"?s[o+1]=D:(s.splice(o,3),o-=3),fv(s)}}}function hv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),o||setTimeout(s,20)}function s(){if(!o&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function _h(e){this._internalRoot=e}xc.prototype.render=_h.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,o=ni();iv(s,o,e,i,null,null)},xc.prototype.unmount=_h.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;iv(e.current,2,null,e,null,null),tc(),i[Ma]=null}};function xc(e){this._internalRoot=e}xc.prototype.unstable_scheduleHydration=function(e){if(e){var i=cs();e={blockedOn:null,target:e,priority:i};for(var s=0;s<qa.length&&i!==0&&i<qa[s].priority;s++);qa.splice(s,0,e),s===0&&cv(e)}};var dv=t.version;if(dv!=="19.2.0")throw Error(a(527,dv,"19.2.0"));Y.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=p(i),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var rS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Qt=Sc.inject(rS),Ct=Sc}catch{}}return Yo.createRoot=function(e,i){if(!r(e))throw Error(a(299));var s=!1,o="",h=xm,m=Sm,E=Mm;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=ev(e,1,!1,null,null,s,o,null,h,m,E,hv),e[Ma]=i.current,$f(e),new _h(i)},Yo.hydrateRoot=function(e,i,s){if(!r(e))throw Error(a(299));var o=!1,h="",m=xm,E=Sm,D=Mm,k=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(D=s.onRecoverableError),s.formState!==void 0&&(k=s.formState)),i=ev(e,1,!0,i,s??null,o,h,k,m,E,D,hv),i.context=nv(null),s=i.current,o=ni(),o=yi(o),h=Ca(o),h.callback=null,Da(s,h,o),s=o,i.current.lanes=s,Ve(i,s),zi(i),e[Ma]=i.current,$f(e),new xc(i)},Yo.version="19.2.0",Yo}var Sv;function mS(){if(Sv)return xh.exports;Sv=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(t){console.error(t)}}return c(),xh.exports=pS(),xh.exports}var gS=mS(),bh={exports:{}},jo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mv;function vS(){if(Mv)return jo;Mv=1;var c=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,r,l){var u=null;if(l!==void 0&&(u=""+l),r.key!==void 0&&(u=""+r.key),"key"in r){l={};for(var f in r)f!=="key"&&(l[f]=r[f])}else l=r;return r=l.ref,{$$typeof:c,type:a,key:u,ref:r!==void 0?r:null,props:l}}return jo.Fragment=t,jo.jsx=n,jo.jsxs=n,jo}var Ev;function _S(){return Ev||(Ev=1,bh.exports=vS()),bh.exports}var yS=_S();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sd="165",Tr={ROTATE:0,DOLLY:1,PAN:2},Ar={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},xS=0,bv=1,SS=2,g_=1,MS=2,xa=3,as=0,jn=1,Gi=2,ns=0,Yr=1,Tv=2,Av=3,wv=4,ES=5,Os=100,bS=101,TS=102,AS=103,wS=104,RS=200,CS=201,DS=202,LS=203,hd=204,dd=205,US=206,NS=207,OS=208,zS=209,PS=210,BS=211,IS=212,FS=213,HS=214,GS=0,VS=1,kS=2,$c=3,qS=4,XS=5,WS=6,YS=7,v_=0,jS=1,ZS=2,is=0,KS=1,QS=2,JS=3,$S=4,tM=5,eM=6,nM=7,__=300,Kr=301,Qr=302,pd=303,md=304,ou=306,gd=1e3,Bs=1001,vd=1002,vi=1003,iM=1004,Mc=1005,Ri=1006,Th=1007,Is=1008,ss=1009,aM=1010,sM=1011,tu=1012,y_=1013,Jr=1014,es=1015,lu=1016,x_=1017,S_=1018,$r=1020,rM=35902,oM=1021,lM=1022,ki=1023,cM=1024,uM=1025,jr=1026,to=1027,fM=1028,M_=1029,hM=1030,E_=1031,b_=1033,Ah=33776,wh=33777,Rh=33778,Ch=33779,Rv=35840,Cv=35841,Dv=35842,Lv=35843,Uv=36196,Nv=37492,Ov=37496,zv=37808,Pv=37809,Bv=37810,Iv=37811,Fv=37812,Hv=37813,Gv=37814,Vv=37815,kv=37816,qv=37817,Xv=37818,Wv=37819,Yv=37820,jv=37821,Dh=36492,Zv=36494,Kv=36495,dM=36283,Qv=36284,Jv=36285,$v=36286,pM=3200,mM=3201,T_=0,gM=1,ts="",Fi="srgb",os="srgb-linear",Md="display-p3",cu="display-p3-linear",eu="linear",We="srgb",nu="rec709",iu="p3",wr=7680,t0=519,vM=512,_M=513,yM=514,A_=515,xM=516,SM=517,MM=518,EM=519,e0=35044,n0="300 es",Sa=2e3,au=2001;class Gs{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const a=this._listeners[t.type];if(a!==void 0){t.target=this;const r=a.slice(0);for(let l=0,u=r.length;l<u;l++)r[l].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qc=Math.PI/180,_d=180/Math.PI;function ol(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Cn[c&255]+Cn[c>>8&255]+Cn[c>>16&255]+Cn[c>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[n&63|128]+Cn[n>>8&255]+"-"+Cn[n>>16&255]+Cn[n>>24&255]+Cn[a&255]+Cn[a>>8&255]+Cn[a>>16&255]+Cn[a>>24&255]).toLowerCase()}function Pn(c,t,n){return Math.max(t,Math.min(n,c))}function bM(c,t){return(c%t+t)%t}function Lh(c,t,n){return(1-n)*c+n*t}function Zo(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return c/4294967295;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int32Array:return Math.max(c/2147483647,-1);case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Wn(c,t){switch(t.constructor){case Float32Array:return c;case Uint32Array:return Math.round(c*4294967295);case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int32Array:return Math.round(c*2147483647);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}const TM={DEG2RAD:Qc};class se{constructor(t=0,n=0){se.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,r=t.elements;return this.x=r[0]*n+r[3]*a+r[6],this.y=r[1]*n+r[4]*a+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Pn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),r=Math.sin(n),l=this.x-t.x,u=this.y-t.y;return this.x=l*a-u*r+t.x,this.y=l*r+u*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,n,a,r,l,u,f,d,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,u,f,d,p)}set(t,n,a,r,l,u,f,d,p){const g=this.elements;return g[0]=t,g[1]=r,g[2]=f,g[3]=n,g[4]=l,g[5]=d,g[6]=a,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,u=a[0],f=a[3],d=a[6],p=a[1],g=a[4],_=a[7],v=a[2],S=a[5],M=a[8],b=r[0],x=r[3],y=r[6],T=r[1],w=r[4],L=r[7],F=r[2],B=r[5],O=r[8];return l[0]=u*b+f*T+d*F,l[3]=u*x+f*w+d*B,l[6]=u*y+f*L+d*O,l[1]=p*b+g*T+_*F,l[4]=p*x+g*w+_*B,l[7]=p*y+g*L+_*O,l[2]=v*b+S*T+M*F,l[5]=v*x+S*w+M*B,l[8]=v*y+S*L+M*O,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8];return n*u*g-n*f*p-a*l*g+a*f*d+r*l*p-r*u*d}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],_=g*u-f*p,v=f*d-g*l,S=p*l-u*d,M=n*_+a*v+r*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return t[0]=_*b,t[1]=(r*p-g*a)*b,t[2]=(f*a-r*u)*b,t[3]=v*b,t[4]=(g*n-r*d)*b,t[5]=(r*l-f*n)*b,t[6]=S*b,t[7]=(a*d-p*n)*b,t[8]=(u*n-a*l)*b,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,r,l,u,f){const d=Math.cos(l),p=Math.sin(l);return this.set(a*d,a*p,-a*(d*u+p*f)+u+t,-r*p,r*d,-r*(-p*u+d*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Uh.makeScale(t,n)),this}rotate(t){return this.premultiply(Uh.makeRotation(-t)),this}translate(t,n){return this.premultiply(Uh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<9;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Uh=new pe;function w_(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function su(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function AM(){const c=su("canvas");return c.style.display="block",c}const i0={};function R_(c){c in i0||(i0[c]=!0,console.warn(c))}function wM(c,t,n){return new Promise(function(a,r){function l(){switch(c.clientWaitSync(t,c.SYNC_FLUSH_COMMANDS_BIT,0)){case c.WAIT_FAILED:r();break;case c.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}const a0=new pe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),s0=new pe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ec={[os]:{transfer:eu,primaries:nu,toReference:c=>c,fromReference:c=>c},[Fi]:{transfer:We,primaries:nu,toReference:c=>c.convertSRGBToLinear(),fromReference:c=>c.convertLinearToSRGB()},[cu]:{transfer:eu,primaries:iu,toReference:c=>c.applyMatrix3(s0),fromReference:c=>c.applyMatrix3(a0)},[Md]:{transfer:We,primaries:iu,toReference:c=>c.convertSRGBToLinear().applyMatrix3(s0),fromReference:c=>c.applyMatrix3(a0).convertLinearToSRGB()}},RM=new Set([os,cu]),ze={enabled:!0,_workingColorSpace:os,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(c){if(!RM.has(c))throw new Error(`Unsupported working color space, "${c}".`);this._workingColorSpace=c},convert:function(c,t,n){if(this.enabled===!1||t===n||!t||!n)return c;const a=Ec[t].toReference,r=Ec[n].fromReference;return r(a(c))},fromWorkingColorSpace:function(c,t){return this.convert(c,this._workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this._workingColorSpace)},getPrimaries:function(c){return Ec[c].primaries},getTransfer:function(c){return c===ts?eu:Ec[c].transfer}};function Zr(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function Nh(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}let Rr;class CM{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rr===void 0&&(Rr=su("canvas")),Rr.width=t.width,Rr.height=t.height;const a=Rr.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=su("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const r=a.getImageData(0,0,t.width,t.height),l=r.data;for(let u=0;u<l.length;u++)l[u]=Zr(l[u]/255)*255;return a.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Zr(n[a]/255)*255):n[a]=Zr(n[a]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DM=0;class C_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=ol(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},r=this.data;if(r!==null){let l;if(Array.isArray(r)){l=[];for(let u=0,f=r.length;u<f;u++)r[u].isDataTexture?l.push(Oh(r[u].image)):l.push(Oh(r[u]))}else l=Oh(r);a.url=l}return n||(t.images[this.uuid]=a),a}}function Oh(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?CM.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let LM=0;class Zn extends Gs{constructor(t=Zn.DEFAULT_IMAGE,n=Zn.DEFAULT_MAPPING,a=Bs,r=Bs,l=Ri,u=Is,f=ki,d=ss,p=Zn.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:LM++}),this.uuid=ol(),this.name="",this.source=new C_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=r,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=d,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==__)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gd:t.x=t.x-Math.floor(t.x);break;case Bs:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gd:t.y=t.y-Math.floor(t.y);break;case Bs:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=__;Zn.DEFAULT_ANISOTROPY=1;class yn{constructor(t=0,n=0,a=0,r=1){yn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=this.w,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*r+u[12]*l,this.y=u[1]*n+u[5]*a+u[9]*r+u[13]*l,this.z=u[2]*n+u[6]*a+u[10]*r+u[14]*l,this.w=u[3]*n+u[7]*a+u[11]*r+u[15]*l,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,r,l;const d=t.elements,p=d[0],g=d[4],_=d[8],v=d[1],S=d[5],M=d[9],b=d[2],x=d[6],y=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+b)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(p+1)/2,L=(S+1)/2,F=(y+1)/2,B=(g+v)/4,O=(_+b)/4,q=(M+x)/4;return w>L&&w>F?w<.01?(a=0,r=.707106781,l=.707106781):(a=Math.sqrt(w),r=B/a,l=O/a):L>F?L<.01?(a=.707106781,r=0,l=.707106781):(r=Math.sqrt(L),a=B/r,l=q/r):F<.01?(a=.707106781,r=.707106781,l=0):(l=Math.sqrt(F),a=O/l,r=q/l),this.set(a,r,l,n),this}let T=Math.sqrt((x-M)*(x-M)+(_-b)*(_-b)+(v-g)*(v-g));return Math.abs(T)<.001&&(T=1),this.x=(x-M)/T,this.y=(_-b)/T,this.z=(v-g)/T,this.w=Math.acos((p+S+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UM extends Gs{constructor(t=1,n=1,a={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new yn(0,0,t,n),this.scissorTest=!1,this.viewport=new yn(0,0,t,n);const r={width:t,height:n,depth:1};a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},a);const l=new Zn(r,a.mapping,a.wrapS,a.wrapT,a.magFilter,a.minFilter,a.format,a.type,a.anisotropy,a.colorSpace);l.flipY=!1,l.generateMipmaps=a.generateMipmaps,l.internalFormat=a.internalFormat,this.textures=[];const u=a.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.depthTexture=a.depthTexture,this.samples=a.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let r=0,l=this.textures.length;r<l;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=a;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let a=0,r=t.textures.length;a<r;a++)this.textures[a]=t.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new C_(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fs extends UM{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class D_ extends Zn{constructor(t=null,n=1,a=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=vi,this.minFilter=vi,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class NM extends Zn{constructor(t=null,n=1,a=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:r},this.magFilter=vi,this.minFilter=vi,this.wrapR=Bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Hs=class{constructor(t=0,n=0,a=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=r}static slerpFlat(t,n,a,r,l,u,f){let d=a[r+0],p=a[r+1],g=a[r+2],_=a[r+3];const v=l[u+0],S=l[u+1],M=l[u+2],b=l[u+3];if(f===0){t[n+0]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_;return}if(f===1){t[n+0]=v,t[n+1]=S,t[n+2]=M,t[n+3]=b;return}if(_!==b||d!==v||p!==S||g!==M){let x=1-f;const y=d*v+p*S+g*M+_*b,T=y>=0?1:-1,w=1-y*y;if(w>Number.EPSILON){const F=Math.sqrt(w),B=Math.atan2(F,y*T);x=Math.sin(x*B)/F,f=Math.sin(f*B)/F}const L=f*T;if(d=d*x+v*L,p=p*x+S*L,g=g*x+M*L,_=_*x+b*L,x===1-f){const F=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=F,p*=F,g*=F,_*=F}}t[n]=d,t[n+1]=p,t[n+2]=g,t[n+3]=_}static multiplyQuaternionsFlat(t,n,a,r,l,u){const f=a[r],d=a[r+1],p=a[r+2],g=a[r+3],_=l[u],v=l[u+1],S=l[u+2],M=l[u+3];return t[n]=f*M+g*_+d*S-p*v,t[n+1]=d*M+g*v+p*_-f*S,t[n+2]=p*M+g*S+f*v-d*_,t[n+3]=g*M-f*_-d*v-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,r){return this._x=t,this._y=n,this._z=a,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,r=t._y,l=t._z,u=t._order,f=Math.cos,d=Math.sin,p=f(a/2),g=f(r/2),_=f(l/2),v=d(a/2),S=d(r/2),M=d(l/2);switch(u){case"XYZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"YXZ":this._x=v*g*_+p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"ZXY":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_-v*S*M;break;case"ZYX":this._x=v*g*_-p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_+v*S*M;break;case"YZX":this._x=v*g*_+p*S*M,this._y=p*S*_+v*g*M,this._z=p*g*M-v*S*_,this._w=p*g*_-v*S*M;break;case"XZY":this._x=v*g*_-p*S*M,this._y=p*S*_-v*g*M,this._z=p*g*M+v*S*_,this._w=p*g*_+v*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,r=Math.sin(a);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],r=n[4],l=n[8],u=n[1],f=n[5],d=n[9],p=n[2],g=n[6],_=n[10],v=a+f+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(u-r)*S}else if(a>f&&a>_){const S=2*Math.sqrt(1+a-f-_);this._w=(g-d)/S,this._x=.25*S,this._y=(r+u)/S,this._z=(l+p)/S}else if(f>_){const S=2*Math.sqrt(1+f-a-_);this._w=(l-p)/S,this._x=(r+u)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-a-f);this._w=(u-r)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<Number.EPSILON?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pn(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const r=Math.min(1,n/a);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,r=t._y,l=t._z,u=t._w,f=n._x,d=n._y,p=n._z,g=n._w;return this._x=a*g+u*f+r*p-l*d,this._y=r*g+u*d+l*f-a*p,this._z=l*g+u*p+a*d-r*f,this._w=u*g-a*f-r*d-l*p,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const a=this._x,r=this._y,l=this._z,u=this._w;let f=u*t._w+a*t._x+r*t._y+l*t._z;if(f<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,f=-f):this.copy(t),f>=1)return this._w=u,this._x=a,this._y=r,this._z=l,this;const d=1-f*f;if(d<=Number.EPSILON){const S=1-n;return this._w=S*u+n*this._w,this._x=S*a+n*this._x,this._y=S*r+n*this._y,this._z=S*l+n*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,f),_=Math.sin((1-n)*g)/p,v=Math.sin(n*g)/p;return this._w=u*_+this._w*v,this._x=a*_+this._x*v,this._y=r*_+this._y*v,this._z=l*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),r=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(r*Math.sin(t),r*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class it{constructor(t=0,n=0,a=0){it.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(r0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(r0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*r,this.y=l[1]*n+l[4]*a+l[7]*r,this.z=l[2]*n+l[5]*a+l[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,r=this.z,l=t.elements,u=1/(l[3]*n+l[7]*a+l[11]*r+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*r+l[12])*u,this.y=(l[1]*n+l[5]*a+l[9]*r+l[13])*u,this.z=(l[2]*n+l[6]*a+l[10]*r+l[14])*u,this}applyQuaternion(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,f=t.z,d=t.w,p=2*(u*r-f*a),g=2*(f*n-l*r),_=2*(l*a-u*n);return this.x=n+d*p+u*_-f*g,this.y=a+d*g+f*p-l*_,this.z=r+d*_+l*g-u*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,r=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*r,this.y=l[1]*n+l[5]*a+l[9]*r,this.z=l[2]*n+l[6]*a+l[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Math.max(t,Math.min(n,a)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,r=t.y,l=t.z,u=n.x,f=n.y,d=n.z;return this.x=r*d-l*f,this.y=l*u-a*d,this.z=a*f-r*u,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return zh.copy(this).projectOnVector(t),this.sub(zh)}reflect(t){return this.sub(zh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Pn(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,r=this.z-t.z;return n*n+a*a+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const r=Math.sin(n)*t;return this.x=r*Math.sin(a),this.y=Math.cos(n)*t,this.z=r*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zh=new it,r0=new Hs;class ll{constructor(t=new it(1/0,1/0,1/0),n=new it(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(bi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(bi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=bi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)t.isMesh===!0?t.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),bc.copy(a.boundingBox)),bc.applyMatrix4(t.matrixWorld),this.union(bc)}const r=t.children;for(let l=0,u=r.length;l<u;l++)this.expandByObject(r[l],n);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ko),Tc.subVectors(this.max,Ko),Cr.subVectors(t.a,Ko),Dr.subVectors(t.b,Ko),Lr.subVectors(t.c,Ko),Wa.subVectors(Dr,Cr),Ya.subVectors(Lr,Dr),As.subVectors(Cr,Lr);let n=[0,-Wa.z,Wa.y,0,-Ya.z,Ya.y,0,-As.z,As.y,Wa.z,0,-Wa.x,Ya.z,0,-Ya.x,As.z,0,-As.x,-Wa.y,Wa.x,0,-Ya.y,Ya.x,0,-As.y,As.x,0];return!Ph(n,Cr,Dr,Lr,Tc)||(n=[1,0,0,0,1,0,0,0,1],!Ph(n,Cr,Dr,Lr,Tc))?!1:(Ac.crossVectors(Wa,Ya),n=[Ac.x,Ac.y,Ac.z],Ph(n,Cr,Dr,Lr,Tc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ua[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ua[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ua[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ua[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ua[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ua[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ua[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ua[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ua),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ua=[new it,new it,new it,new it,new it,new it,new it,new it],bi=new it,bc=new ll,Cr=new it,Dr=new it,Lr=new it,Wa=new it,Ya=new it,As=new it,Ko=new it,Tc=new it,Ac=new it,ws=new it;function Ph(c,t,n,a,r){for(let l=0,u=c.length-3;l<=u;l+=3){ws.fromArray(c,l);const f=r.x*Math.abs(ws.x)+r.y*Math.abs(ws.y)+r.z*Math.abs(ws.z),d=t.dot(ws),p=n.dot(ws),g=a.dot(ws);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>f)return!1}return!0}const OM=new ll,Qo=new it,Bh=new it;let Ed=class{constructor(t=new it,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):OM.setFromPoints(t).getCenter(a);let r=0;for(let l=0,u=t.length;l<u;l++)r=Math.max(r,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qo.subVectors(t,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),r=(a-this.radius)*.5;this.center.addScaledVector(Qo,r/a),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qo.copy(t.center).add(Bh)),this.expandByPoint(Qo.copy(t.center).sub(Bh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const fa=new it,Ih=new it,wc=new it,ja=new it,Fh=new it,Rc=new it,Hh=new it;let L_=class{constructor(t=new it,n=new it(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=fa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,n),fa.distanceToSquared(t))}distanceSqToSegment(t,n,a,r){Ih.copy(t).add(n).multiplyScalar(.5),wc.copy(n).sub(t).normalize(),ja.copy(this.origin).sub(Ih);const l=t.distanceTo(n)*.5,u=-this.direction.dot(wc),f=ja.dot(this.direction),d=-ja.dot(wc),p=ja.lengthSq(),g=Math.abs(1-u*u);let _,v,S,M;if(g>0)if(_=u*d-f,v=u*f-d,M=l*g,_>=0)if(v>=-M)if(v<=M){const b=1/g;_*=b,v*=b,S=_*(_+u*v+2*f)+v*(u*_+v+2*d)+p}else v=l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*d)+p;else v=-l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*d)+p;else v<=-M?(_=Math.max(0,-(-u*l+f)),v=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p):v<=M?(_=0,v=Math.min(Math.max(-l,-d),l),S=v*(v+2*d)+p):(_=Math.max(0,-(u*l+f)),v=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+v*(v+2*d)+p);else v=u>0?-l:l,_=Math.max(0,-(u*v+f)),S=-_*_+v*(v+2*d)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,_),r&&r.copy(Ih).addScaledVector(wc,v),S}intersectSphere(t,n){fa.subVectors(t.center,this.origin);const a=fa.dot(this.direction),r=fa.dot(fa)-a*a,l=t.radius*t.radius;if(r>l)return null;const u=Math.sqrt(l-r),f=a-u,d=a+u;return d<0?null:f<0?this.at(d,n):this.at(f,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,r,l,u,f,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return p>=0?(a=(t.min.x-v.x)*p,r=(t.max.x-v.x)*p):(a=(t.max.x-v.x)*p,r=(t.min.x-v.x)*p),g>=0?(l=(t.min.y-v.y)*g,u=(t.max.y-v.y)*g):(l=(t.max.y-v.y)*g,u=(t.min.y-v.y)*g),a>u||l>r||((l>a||isNaN(a))&&(a=l),(u<r||isNaN(r))&&(r=u),_>=0?(f=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(f=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),a>d||f>r)||((f>a||a!==a)&&(a=f),(d<r||r!==r)&&(r=d),r<0)?null:this.at(a>=0?a:r,n)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,n,a,r,l){Fh.subVectors(n,t),Rc.subVectors(a,t),Hh.crossVectors(Fh,Rc);let u=this.direction.dot(Hh),f;if(u>0){if(r)return null;f=1}else if(u<0)f=-1,u=-u;else return null;ja.subVectors(this.origin,t);const d=f*this.direction.dot(Rc.crossVectors(ja,Rc));if(d<0)return null;const p=f*this.direction.dot(Fh.cross(ja));if(p<0||d+p>u)return null;const g=-f*ja.dot(Hh);return g<0?null:this.at(g/u,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class en{constructor(t,n,a,r,l,u,f,d,p,g,_,v,S,M,b,x){en.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,r,l,u,f,d,p,g,_,v,S,M,b,x)}set(t,n,a,r,l,u,f,d,p,g,_,v,S,M,b,x){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=r,y[1]=l,y[5]=u,y[9]=f,y[13]=d,y[2]=p,y[6]=g,y[10]=_,y[14]=v,y[3]=S,y[7]=M,y[11]=b,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new en().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,a=t.elements,r=1/Ur.setFromMatrixColumn(t,0).length(),l=1/Ur.setFromMatrixColumn(t,1).length(),u=1/Ur.setFromMatrixColumn(t,2).length();return n[0]=a[0]*r,n[1]=a[1]*r,n[2]=a[2]*r,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*u,n[9]=a[9]*u,n[10]=a[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,r=t.y,l=t.z,u=Math.cos(a),f=Math.sin(a),d=Math.cos(r),p=Math.sin(r),g=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=u*g,S=u*_,M=f*g,b=f*_;n[0]=d*g,n[4]=-d*_,n[8]=p,n[1]=S+M*p,n[5]=v-b*p,n[9]=-f*d,n[2]=b-v*p,n[6]=M+S*p,n[10]=u*d}else if(t.order==="YXZ"){const v=d*g,S=d*_,M=p*g,b=p*_;n[0]=v+b*f,n[4]=M*f-S,n[8]=u*p,n[1]=u*_,n[5]=u*g,n[9]=-f,n[2]=S*f-M,n[6]=b+v*f,n[10]=u*d}else if(t.order==="ZXY"){const v=d*g,S=d*_,M=p*g,b=p*_;n[0]=v-b*f,n[4]=-u*_,n[8]=M+S*f,n[1]=S+M*f,n[5]=u*g,n[9]=b-v*f,n[2]=-u*p,n[6]=f,n[10]=u*d}else if(t.order==="ZYX"){const v=u*g,S=u*_,M=f*g,b=f*_;n[0]=d*g,n[4]=M*p-S,n[8]=v*p+b,n[1]=d*_,n[5]=b*p+v,n[9]=S*p-M,n[2]=-p,n[6]=f*d,n[10]=u*d}else if(t.order==="YZX"){const v=u*d,S=u*p,M=f*d,b=f*p;n[0]=d*g,n[4]=b-v*_,n[8]=M*_+S,n[1]=_,n[5]=u*g,n[9]=-f*g,n[2]=-p*g,n[6]=S*_+M,n[10]=v-b*_}else if(t.order==="XZY"){const v=u*d,S=u*p,M=f*d,b=f*p;n[0]=d*g,n[4]=-_,n[8]=p*g,n[1]=v*_+b,n[5]=u*g,n[9]=S*_-M,n[2]=M*_-S,n[6]=f*g,n[10]=b*_+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zM,t,PM)}lookAt(t,n,a){const r=this.elements;return ii.subVectors(t,n),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(a,ii),Za.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(a,ii)),Za.normalize(),Cc.crossVectors(ii,Za),r[0]=Za.x,r[4]=Cc.x,r[8]=ii.x,r[1]=Za.y,r[5]=Cc.y,r[9]=ii.y,r[2]=Za.z,r[6]=Cc.z,r[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,r=n.elements,l=this.elements,u=a[0],f=a[4],d=a[8],p=a[12],g=a[1],_=a[5],v=a[9],S=a[13],M=a[2],b=a[6],x=a[10],y=a[14],T=a[3],w=a[7],L=a[11],F=a[15],B=r[0],O=r[4],q=r[8],z=r[12],R=r[1],H=r[5],et=r[9],G=r[13],Q=r[2],K=r[6],N=r[10],Y=r[14],X=r[3],mt=r[7],Mt=r[11],I=r[15];return l[0]=u*B+f*R+d*Q+p*X,l[4]=u*O+f*H+d*K+p*mt,l[8]=u*q+f*et+d*N+p*Mt,l[12]=u*z+f*G+d*Y+p*I,l[1]=g*B+_*R+v*Q+S*X,l[5]=g*O+_*H+v*K+S*mt,l[9]=g*q+_*et+v*N+S*Mt,l[13]=g*z+_*G+v*Y+S*I,l[2]=M*B+b*R+x*Q+y*X,l[6]=M*O+b*H+x*K+y*mt,l[10]=M*q+b*et+x*N+y*Mt,l[14]=M*z+b*G+x*Y+y*I,l[3]=T*B+w*R+L*Q+F*X,l[7]=T*O+w*H+L*K+F*mt,l[11]=T*q+w*et+L*N+F*Mt,l[15]=T*z+w*G+L*Y+F*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],r=t[8],l=t[12],u=t[1],f=t[5],d=t[9],p=t[13],g=t[2],_=t[6],v=t[10],S=t[14],M=t[3],b=t[7],x=t[11],y=t[15];return M*(+l*d*_-r*p*_-l*f*v+a*p*v+r*f*S-a*d*S)+b*(+n*d*S-n*p*v+l*u*v-r*u*S+r*p*g-l*d*g)+x*(+n*p*_-n*f*S-l*u*_+a*u*S+l*f*g-a*p*g)+y*(-r*f*g-n*d*_+n*f*v+r*u*_-a*u*v+a*d*g)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],r=t[2],l=t[3],u=t[4],f=t[5],d=t[6],p=t[7],g=t[8],_=t[9],v=t[10],S=t[11],M=t[12],b=t[13],x=t[14],y=t[15],T=_*x*p-b*v*p+b*d*S-f*x*S-_*d*y+f*v*y,w=M*v*p-g*x*p-M*d*S+u*x*S+g*d*y-u*v*y,L=g*b*p-M*_*p+M*f*S-u*b*S-g*f*y+u*_*y,F=M*_*d-g*b*d-M*f*v+u*b*v+g*f*x-u*_*x,B=n*T+a*w+r*L+l*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=T*O,t[1]=(b*v*l-_*x*l-b*r*S+a*x*S+_*r*y-a*v*y)*O,t[2]=(f*x*l-b*d*l+b*r*p-a*x*p-f*r*y+a*d*y)*O,t[3]=(_*d*l-f*v*l-_*r*p+a*v*p+f*r*S-a*d*S)*O,t[4]=w*O,t[5]=(g*x*l-M*v*l+M*r*S-n*x*S-g*r*y+n*v*y)*O,t[6]=(M*d*l-u*x*l-M*r*p+n*x*p+u*r*y-n*d*y)*O,t[7]=(u*v*l-g*d*l+g*r*p-n*v*p-u*r*S+n*d*S)*O,t[8]=L*O,t[9]=(M*_*l-g*b*l-M*a*S+n*b*S+g*a*y-n*_*y)*O,t[10]=(u*b*l-M*f*l+M*a*p-n*b*p-u*a*y+n*f*y)*O,t[11]=(g*f*l-u*_*l-g*a*p+n*_*p+u*a*S-n*f*S)*O,t[12]=F*O,t[13]=(g*b*r-M*_*r+M*a*v-n*b*v-g*a*x+n*_*x)*O,t[14]=(M*f*r-u*b*r-M*a*d+n*b*d+u*a*x-n*f*x)*O,t[15]=(u*_*r-g*f*r+g*a*d-n*_*d-u*a*v+n*f*v)*O,this}scale(t){const n=this.elements,a=t.x,r=t.y,l=t.z;return n[0]*=a,n[4]*=r,n[8]*=l,n[1]*=a,n[5]*=r,n[9]*=l,n[2]*=a,n[6]*=r,n[10]*=l,n[3]*=a,n[7]*=r,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,r))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),r=Math.sin(n),l=1-a,u=t.x,f=t.y,d=t.z,p=l*u,g=l*f;return this.set(p*u+a,p*f-r*d,p*d+r*f,0,p*f+r*d,g*f+a,g*d-r*u,0,p*d-r*f,g*d+r*u,l*d*d+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,r,l,u){return this.set(1,a,l,0,t,1,u,0,n,r,1,0,0,0,0,1),this}compose(t,n,a){const r=this.elements,l=n._x,u=n._y,f=n._z,d=n._w,p=l+l,g=u+u,_=f+f,v=l*p,S=l*g,M=l*_,b=u*g,x=u*_,y=f*_,T=d*p,w=d*g,L=d*_,F=a.x,B=a.y,O=a.z;return r[0]=(1-(b+y))*F,r[1]=(S+L)*F,r[2]=(M-w)*F,r[3]=0,r[4]=(S-L)*B,r[5]=(1-(v+y))*B,r[6]=(x+T)*B,r[7]=0,r[8]=(M+w)*O,r[9]=(x-T)*O,r[10]=(1-(v+b))*O,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,a){const r=this.elements;let l=Ur.set(r[0],r[1],r[2]).length();const u=Ur.set(r[4],r[5],r[6]).length(),f=Ur.set(r[8],r[9],r[10]).length();this.determinant()<0&&(l=-l),t.x=r[12],t.y=r[13],t.z=r[14],Ti.copy(this);const p=1/l,g=1/u,_=1/f;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=g,Ti.elements[5]*=g,Ti.elements[6]*=g,Ti.elements[8]*=_,Ti.elements[9]*=_,Ti.elements[10]*=_,n.setFromRotationMatrix(Ti),a.x=l,a.y=u,a.z=f,this}makePerspective(t,n,a,r,l,u,f=Sa){const d=this.elements,p=2*l/(n-t),g=2*l/(a-r),_=(n+t)/(n-t),v=(a+r)/(a-r);let S,M;if(f===Sa)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===au)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,r,l,u,f=Sa){const d=this.elements,p=1/(n-t),g=1/(a-r),_=1/(u-l),v=(n+t)*p,S=(a+r)*g;let M,b;if(f===Sa)M=(u+l)*_,b=-2*_;else if(f===au)M=l*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=b,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let r=0;r<16;r++)if(n[r]!==a[r])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Ur=new it,Ti=new en,zM=new it(0,0,0),PM=new it(1,1,1),Za=new it,Cc=new it,ii=new it,o0=new en,l0=new Hs;class Wi{constructor(t=0,n=0,a=0,r=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,r=this._order){return this._x=t,this._y=n,this._z=a,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const r=t.elements,l=r[0],u=r[4],f=r[8],d=r[1],p=r[5],g=r[9],_=r[2],v=r[6],S=r[10];switch(n){case"XYZ":this._y=Math.asin(Pn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return o0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(o0,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return l0.setFromEuler(this),this.setFromQuaternion(l0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class U_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let BM=0;const c0=new it,Nr=new Hs,ha=new en,Dc=new it,Jo=new it,IM=new it,FM=new Hs,u0=new it(1,0,0),f0=new it(0,1,0),h0=new it(0,0,1),d0={type:"added"},HM={type:"removed"},Or={type:"childadded",child:null},Gh={type:"childremoved",child:null};class Ln extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new it,n=new Wi,a=new Hs,r=new it(1,1,1);function l(){a.setFromEuler(n,!1)}function u(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new en},normalMatrix:{value:new pe}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new U_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(t,n){return Nr.setFromAxisAngle(t,n),this.quaternion.premultiply(Nr),this}rotateX(t){return this.rotateOnAxis(u0,t)}rotateY(t){return this.rotateOnAxis(f0,t)}rotateZ(t){return this.rotateOnAxis(h0,t)}translateOnAxis(t,n){return c0.copy(t).applyQuaternion(this.quaternion),this.position.add(c0.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(u0,t)}translateY(t){return this.translateOnAxis(f0,t)}translateZ(t){return this.translateOnAxis(h0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Dc.copy(t):Dc.set(t,n,a);const r=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Jo,Dc,this.up):ha.lookAt(Dc,Jo,this.up),this.quaternion.setFromRotationMatrix(ha),r&&(ha.extractRotation(r.matrixWorld),Nr.setFromRotationMatrix(ha),this.quaternion.premultiply(Nr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(d0),Or.child=t,this.dispatchEvent(Or),Or.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(HM),Gh.child=t,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(d0),Or.child=t,this.dispatchEvent(Or),Or.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,r=this.children.length;a<r;a++){const u=this.children[a].getObjectByProperty(t,n);if(u!==void 0)return u}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const r=this.children;for(let l=0,u=r.length;l<u;l++)r[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,t,IM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,FM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,r=n.length;a<r;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,r=n.length;a<r;a++){const l=n[a];(l.matrixWorldAutoUpdate===!0||t===!0)&&l.updateMatrixWorld(t)}}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let l=0,u=r.length;l<u;l++){const f=r[l];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(t.shapes,_)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,p=this.material.length;d<p;d++)f.push(l(t.materials,this.material[d]));r.material=f}else r.material=l(t.materials,this.material);if(this.children.length>0){r.children=[];for(let f=0;f<this.children.length;f++)r.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];r.animations.push(l(t.animations,d))}}if(n){const f=u(t.geometries),d=u(t.materials),p=u(t.textures),g=u(t.images),_=u(t.shapes),v=u(t.skeletons),S=u(t.animations),M=u(t.nodes);f.length>0&&(a.geometries=f),d.length>0&&(a.materials=d),p.length>0&&(a.textures=p),g.length>0&&(a.images=g),_.length>0&&(a.shapes=_),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=r,a;function u(f){const d=[];for(const p in f){const g=f[p];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const r=t.children[a];this.add(r.clone())}return this}}Ln.DEFAULT_UP=new it(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new it,da=new it,Vh=new it,pa=new it,zr=new it,Pr=new it,p0=new it,kh=new it,qh=new it,Xh=new it;class Vi{constructor(t=new it,n=new it,a=new it){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,r){r.subVectors(a,n),Ai.subVectors(t,n),r.cross(Ai);const l=r.lengthSq();return l>0?r.multiplyScalar(1/Math.sqrt(l)):r.set(0,0,0)}static getBarycoord(t,n,a,r,l){Ai.subVectors(r,n),da.subVectors(a,n),Vh.subVectors(t,n);const u=Ai.dot(Ai),f=Ai.dot(da),d=Ai.dot(Vh),p=da.dot(da),g=da.dot(Vh),_=u*p-f*f;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(p*d-f*g)*v,M=(u*g-f*d)*v;return l.set(1-S-M,M,S)}static containsPoint(t,n,a,r){return this.getBarycoord(t,n,a,r,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,n,a,r,l,u,f,d){return this.getBarycoord(t,n,a,r,pa)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,pa.x),d.addScaledVector(u,pa.y),d.addScaledVector(f,pa.z),d)}static isFrontFacing(t,n,a,r){return Ai.subVectors(a,n),da.subVectors(t,n),Ai.cross(da).dot(r)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,r){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,a,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ai.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Vi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,r,l){return Vi.getInterpolation(t,this.a,this.b,this.c,n,a,r,l)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,r=this.b,l=this.c;let u,f;zr.subVectors(r,a),Pr.subVectors(l,a),kh.subVectors(t,a);const d=zr.dot(kh),p=Pr.dot(kh);if(d<=0&&p<=0)return n.copy(a);qh.subVectors(t,r);const g=zr.dot(qh),_=Pr.dot(qh);if(g>=0&&_<=g)return n.copy(r);const v=d*_-g*p;if(v<=0&&d>=0&&g<=0)return u=d/(d-g),n.copy(a).addScaledVector(zr,u);Xh.subVectors(t,l);const S=zr.dot(Xh),M=Pr.dot(Xh);if(M>=0&&S<=M)return n.copy(l);const b=S*p-d*M;if(b<=0&&p>=0&&M<=0)return f=p/(p-M),n.copy(a).addScaledVector(Pr,f);const x=g*M-S*_;if(x<=0&&_-g>=0&&S-M>=0)return p0.subVectors(l,r),f=(_-g)/(_-g+(S-M)),n.copy(r).addScaledVector(p0,f);const y=1/(x+b+v);return u=b*y,f=v*y,n.copy(a).addScaledVector(zr,u).addScaledVector(Pr,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Wh(c,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?c+(t-c)*6*n:n<1/2?t:n<2/3?c+(t-c)*6*(2/3-n):c}class Re{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ze.toWorkingColorSpace(this,n),this}setRGB(t,n,a,r=ze.workingColorSpace){return this.r=t,this.g=n,this.b=a,ze.toWorkingColorSpace(this,r),this}setHSL(t,n,a,r=ze.workingColorSpace){if(t=bM(t,1),n=Pn(n,0,1),a=Pn(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,u=2*a-l;this.r=Wh(u,l,t+1/3),this.g=Wh(u,l,t),this.b=Wh(u,l,t-1/3)}return ze.toWorkingColorSpace(this,r),this}setStyle(t,n=Fi){function a(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const u=r[1],f=r[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=r[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Fi){const a=N_[t.toLowerCase()];return a!==void 0?this.setHex(a,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zr(t.r),this.g=Zr(t.g),this.b=Zr(t.b),this}copyLinearToSRGB(t){return this.r=Nh(t.r),this.g=Nh(t.g),this.b=Nh(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Fi){return ze.fromWorkingColorSpace(Dn.copy(this),t),Math.round(Pn(Dn.r*255,0,255))*65536+Math.round(Pn(Dn.g*255,0,255))*256+Math.round(Pn(Dn.b*255,0,255))}getHexString(t=Fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ze.workingColorSpace){ze.fromWorkingColorSpace(Dn.copy(this),n);const a=Dn.r,r=Dn.g,l=Dn.b,u=Math.max(a,r,l),f=Math.min(a,r,l);let d,p;const g=(f+u)/2;if(f===u)d=0,p=0;else{const _=u-f;switch(p=g<=.5?_/(u+f):_/(2-u-f),u){case a:d=(r-l)/_+(r<l?6:0);break;case r:d=(l-a)/_+2;break;case l:d=(a-r)/_+4;break}d/=6}return t.h=d,t.s=p,t.l=g,t}getRGB(t,n=ze.workingColorSpace){return ze.fromWorkingColorSpace(Dn.copy(this),n),t.r=Dn.r,t.g=Dn.g,t.b=Dn.b,t}getStyle(t=Fi){ze.fromWorkingColorSpace(Dn.copy(this),t);const n=Dn.r,a=Dn.g,r=Dn.b;return t!==Fi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(r*255)})`}offsetHSL(t,n,a){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+n,Ka.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Ka),t.getHSL(Lc);const a=Lh(Ka.h,Lc.h,n),r=Lh(Ka.s,Lc.s,n),l=Lh(Ka.l,Lc.l,n);return this.setHSL(a,r,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,r=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*r,this.g=l[1]*n+l[4]*a+l[7]*r,this.b=l[2]*n+l[5]*a+l[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Re;Re.NAMES=N_;let GM=0,cl=class extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GM++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Yr,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hd,this.blendDst=dd,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=$c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wr,this.stencilZFail=wr,this.stencilZPass=wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(a):r&&r.isVector3&&a&&a.isVector3?r.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Yr&&(a.blending=this.blending),this.side!==as&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==hd&&(a.blendSrc=this.blendSrc),this.blendDst!==dd&&(a.blendDst=this.blendDst),this.blendEquation!==Os&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==$c&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==t0&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wr&&(a.stencilFail=this.stencilFail),this.stencilZFail!==wr&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==wr&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function r(l){const u=[];for(const f in l){const d=l[f];delete d.metadata,u.push(d)}return u}if(n){const l=r(t.textures),u=r(t.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const r=n.length;a=new Array(r);for(let l=0;l!==r;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class O_ extends cl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=v_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cn=new it,Uc=new se;class qi{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=e0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return R_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let r=0,l=this.itemSize;r<l;r++)this.array[t+r]=n.array[a+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)Uc.fromBufferAttribute(this,n),Uc.applyMatrix3(t),this.setXY(n,Uc.x,Uc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix3(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(t),this.setXYZ(n,cn.x,cn.y,cn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Zo(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=Wn(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Zo(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Zo(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Zo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Zo(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,r){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),r=Wn(r,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this}setXYZW(t,n,a,r,l){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),a=Wn(a,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=r,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==e0&&(t.usage=this.usage),t}}class z_ extends qi{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class P_ extends qi{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Xi extends qi{constructor(t,n,a){super(new Float32Array(t),n,a)}}let VM=0;const mi=new en,Yh=new Ln,Br=new it,ai=new ll,$o=new ll,_n=new it;class ls extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w_(t)?P_:z_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new pe().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,n,a){return mi.makeTranslation(t,n,a),this.applyMatrix4(mi),this}scale(t,n,a){return mi.makeScale(t,n,a),this.applyMatrix4(mi),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){const n=[];for(let a=0,r=t.length;a<r;a++){const l=t[a];n.push(l.x,l.y,l.z||0)}return this.setAttribute("position",new Xi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new it(-1/0,-1/0,-1/0),new it(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,r=n.length;a<r;a++){const l=n[a];ai.setFromBufferAttribute(l),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ed);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new it,1/0);return}if(t){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),n)for(let l=0,u=n.length;l<u;l++){const f=n[l];$o.setFromBufferAttribute(f),this.morphTargetsRelative?(_n.addVectors(ai.min,$o.min),ai.expandByPoint(_n),_n.addVectors(ai.max,$o.max),ai.expandByPoint(_n)):(ai.expandByPoint($o.min),ai.expandByPoint($o.max))}ai.getCenter(a);let r=0;for(let l=0,u=t.count;l<u;l++)_n.fromBufferAttribute(t,l),r=Math.max(r,a.distanceToSquared(_n));if(n)for(let l=0,u=n.length;l<u;l++){const f=n[l],d=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)_n.fromBufferAttribute(f,p),d&&(Br.fromBufferAttribute(t,p),_n.add(Br)),r=Math.max(r,a.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,r=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new qi(new Float32Array(4*a.count),4));const u=this.getAttribute("tangent"),f=[],d=[];for(let q=0;q<a.count;q++)f[q]=new it,d[q]=new it;const p=new it,g=new it,_=new it,v=new se,S=new se,M=new se,b=new it,x=new it;function y(q,z,R){p.fromBufferAttribute(a,q),g.fromBufferAttribute(a,z),_.fromBufferAttribute(a,R),v.fromBufferAttribute(l,q),S.fromBufferAttribute(l,z),M.fromBufferAttribute(l,R),g.sub(p),_.sub(p),S.sub(v),M.sub(v);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(b.copy(g).multiplyScalar(M.y).addScaledVector(_,-S.y).multiplyScalar(H),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(H),f[q].add(b),f[z].add(b),f[R].add(b),d[q].add(x),d[z].add(x),d[R].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let q=0,z=T.length;q<z;++q){const R=T[q],H=R.start,et=R.count;for(let G=H,Q=H+et;G<Q;G+=3)y(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new it,L=new it,F=new it,B=new it;function O(q){F.fromBufferAttribute(r,q),B.copy(F);const z=f[q];w.copy(z),w.sub(F.multiplyScalar(F.dot(z))).normalize(),L.crossVectors(B,z);const H=L.dot(d[q])<0?-1:1;u.setXYZW(q,w.x,w.y,w.z,H)}for(let q=0,z=T.length;q<z;++q){const R=T[q],H=R.start,et=R.count;for(let G=H,Q=H+et;G<Q;G+=3)O(t.getX(G+0)),O(t.getX(G+1)),O(t.getX(G+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new qi(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const r=new it,l=new it,u=new it,f=new it,d=new it,p=new it,g=new it,_=new it;if(t)for(let v=0,S=t.count;v<S;v+=3){const M=t.getX(v+0),b=t.getX(v+1),x=t.getX(v+2);r.fromBufferAttribute(n,M),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),f.fromBufferAttribute(a,M),d.fromBufferAttribute(a,b),p.fromBufferAttribute(a,x),f.add(g),d.add(g),p.add(g),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(x,p.x,p.y,p.z)}else for(let v=0,S=n.count;v<S;v+=3)r.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),u.fromBufferAttribute(n,v+2),g.subVectors(u,l),_.subVectors(r,l),g.cross(_),a.setXYZ(v+0,g.x,g.y,g.z),a.setXYZ(v+1,g.x,g.y,g.z),a.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)_n.fromBufferAttribute(t,n),_n.normalize(),t.setXYZ(n,_n.x,_n.y,_n.z)}toNonIndexed(){function t(f,d){const p=f.array,g=f.itemSize,_=f.normalized,v=new p.constructor(d.length*g);let S=0,M=0;for(let b=0,x=d.length;b<x;b++){f.isInterleavedBufferAttribute?S=d[b]*f.data.stride+f.offset:S=d[b]*g;for(let y=0;y<g;y++)v[M++]=p[S++]}return new qi(v,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ls,a=this.index.array,r=this.attributes;for(const f in r){const d=r[f],p=t(d,a);n.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const d=[],p=l[f];for(let g=0,_=p.length;g<_;g++){const v=p[g],S=t(v,a);d.push(S)}n.morphAttributes[f]=d}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,d=u.length;f<d;f++){const p=u[f];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const d in a){const p=a[d];t.data.attributes[d]=p.toJSON(t.data)}const r={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,v=p.length;_<v;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(r[d]=g,l=!0)}l&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(t.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone(n));const r=t.attributes;for(const p in r){const g=r[p];this.setAttribute(p,g.clone(n))}const l=t.morphAttributes;for(const p in l){const g=[],_=l[p];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(n));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const u=t.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const m0=new en,Rs=new L_,Nc=new Ed,g0=new it,Ir=new it,Fr=new it,Hr=new it,jh=new it,Oc=new it,zc=new se,Pc=new se,Bc=new se,v0=new it,_0=new it,y0=new it,Ic=new it,Fc=new it;class Ci extends Ln{constructor(t=new ls,n=new O_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const r=n[a[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=r.length;l<u;l++){const f=r[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,r=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;n.fromBufferAttribute(r,t);const f=this.morphTargetInfluences;if(l&&f){Oc.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=f[d],_=l[d];g!==0&&(jh.fromBufferAttribute(_,t),u?Oc.addScaledVector(jh,g):Oc.addScaledVector(jh.sub(n),g))}n.add(Oc)}return n}raycast(t,n){const a=this.geometry,r=this.material,l=this.matrixWorld;r!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Nc.copy(a.boundingSphere),Nc.applyMatrix4(l),Rs.copy(t.ray).recast(t.near),!(Nc.containsPoint(Rs.origin)===!1&&(Rs.intersectSphere(Nc,g0)===null||Rs.origin.distanceToSquared(g0)>(t.far-t.near)**2))&&(m0.copy(l).invert(),Rs.copy(t.ray).applyMatrix4(m0),!(a.boundingBox!==null&&Rs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,Rs)))}_computeIntersections(t,n,a){let r;const l=this.geometry,u=this.material,f=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const x=v[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),w=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let L=T,F=w;L<F;L+=3){const B=f.getX(L),O=f.getX(L+1),q=f.getX(L+2);r=Hc(this,y,t,a,p,g,_,B,O,q),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let x=M,y=b;x<y;x+=3){const T=f.getX(x),w=f.getX(x+1),L=f.getX(x+2);r=Hc(this,u,t,a,p,g,_,T,w,L),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,b=v.length;M<b;M++){const x=v[M],y=u[x.materialIndex],T=Math.max(x.start,S.start),w=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let L=T,F=w;L<F;L+=3){const B=L,O=L+1,q=L+2;r=Hc(this,y,t,a,p,g,_,B,O,q),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const M=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let x=M,y=b;x<y;x+=3){const T=x,w=x+1,L=x+2;r=Hc(this,u,t,a,p,g,_,T,w,L),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function kM(c,t,n,a,r,l,u,f){let d;if(t.side===jn?d=a.intersectTriangle(u,l,r,!0,f):d=a.intersectTriangle(r,l,u,t.side===as,f),d===null)return null;Fc.copy(f),Fc.applyMatrix4(c.matrixWorld);const p=n.ray.origin.distanceTo(Fc);return p<n.near||p>n.far?null:{distance:p,point:Fc.clone(),object:c}}function Hc(c,t,n,a,r,l,u,f,d,p){c.getVertexPosition(f,Ir),c.getVertexPosition(d,Fr),c.getVertexPosition(p,Hr);const g=kM(c,t,n,a,Ir,Fr,Hr,Ic);if(g){r&&(zc.fromBufferAttribute(r,f),Pc.fromBufferAttribute(r,d),Bc.fromBufferAttribute(r,p),g.uv=Vi.getInterpolation(Ic,Ir,Fr,Hr,zc,Pc,Bc,new se)),l&&(zc.fromBufferAttribute(l,f),Pc.fromBufferAttribute(l,d),Bc.fromBufferAttribute(l,p),g.uv1=Vi.getInterpolation(Ic,Ir,Fr,Hr,zc,Pc,Bc,new se)),u&&(v0.fromBufferAttribute(u,f),_0.fromBufferAttribute(u,d),y0.fromBufferAttribute(u,p),g.normal=Vi.getInterpolation(Ic,Ir,Fr,Hr,v0,_0,y0,new it),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:d,c:p,normal:new it,materialIndex:0};Vi.getNormal(Ir,Fr,Hr,_.normal),g.face=_}return g}class ul extends ls{constructor(t=1,n=1,a=1,r=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:r,heightSegments:l,depthSegments:u};const f=this;r=Math.floor(r),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],_=[];let v=0,S=0;M("z","y","x",-1,-1,a,n,t,u,l,0),M("z","y","x",1,-1,a,n,-t,u,l,1),M("x","z","y",1,1,t,a,n,r,u,2),M("x","z","y",1,-1,t,a,-n,r,u,3),M("x","y","z",1,-1,t,n,a,r,l,4),M("x","y","z",-1,-1,t,n,-a,r,l,5),this.setIndex(d),this.setAttribute("position",new Xi(p,3)),this.setAttribute("normal",new Xi(g,3)),this.setAttribute("uv",new Xi(_,2));function M(b,x,y,T,w,L,F,B,O,q,z){const R=L/O,H=F/q,et=L/2,G=F/2,Q=B/2,K=O+1,N=q+1;let Y=0,X=0;const mt=new it;for(let Mt=0;Mt<N;Mt++){const I=Mt*H-G;for(let Z=0;Z<K;Z++){const yt=Z*R-et;mt[b]=yt*T,mt[x]=I*w,mt[y]=Q,p.push(mt.x,mt.y,mt.z),mt[b]=0,mt[x]=0,mt[y]=B>0?1:-1,g.push(mt.x,mt.y,mt.z),_.push(Z/O),_.push(1-Mt/q),Y+=1}}for(let Mt=0;Mt<q;Mt++)for(let I=0;I<O;I++){const Z=v+I+K*Mt,yt=v+I+K*(Mt+1),J=v+(I+1)+K*(Mt+1),pt=v+(I+1)+K*Mt;d.push(Z,yt,pt),d.push(yt,J,pt),X+=6}f.addGroup(S,X,z),S+=X,v+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ul(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function eo(c){const t={};for(const n in c){t[n]={};for(const a in c[n]){const r=c[n][a];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=r.clone():Array.isArray(r)?t[n][a]=r.slice():t[n][a]=r}}return t}function zn(c){const t={};for(let n=0;n<c.length;n++){const a=eo(c[n]);for(const r in a)t[r]=a[r]}return t}function qM(c){const t=[];for(let n=0;n<c.length;n++)t.push(c[n].clone());return t}function B_(c){const t=c.getRenderTarget();return t===null?c.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ze.workingColorSpace}const XM={clone:eo,merge:zn};var WM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,YM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rs extends cl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=WM,this.fragmentShader=YM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=eo(t.uniforms),this.uniformsGroups=qM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const u=this.uniforms[r].value;u&&u.isTexture?n.uniforms[r]={type:"t",value:u.toJSON(t).uuid}:u&&u.isColor?n.uniforms[r]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[r]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[r]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[r]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[r]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[r]={type:"m4",value:u.toArray()}:n.uniforms[r]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const r in this.extensions)this.extensions[r]===!0&&(a[r]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class I_ extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=Sa}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new it,x0=new se,S0=new se;class gi extends I_{constructor(t=50,n=1,a=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=_d*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _d*2*Math.atan(Math.tan(Qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,n){return this.getViewBounds(t,x0,S0),n.subVectors(S0,x0)}setViewOffset(t,n,a,r,l,u){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Qc*.5*this.fov)/this.zoom,a=2*n,r=this.aspect*a,l=-.5*r;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*r/d,n-=u.offsetY*a/p,r*=u.width/d,a*=u.height/p}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+r,n,n-a,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Gr=-90,Vr=1;class jM extends Ln{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gi(Gr,Vr,t,n);r.layers=this.layers,this.add(r);const l=new gi(Gr,Vr,t,n);l.layers=this.layers,this.add(l);const u=new gi(Gr,Vr,t,n);u.layers=this.layers,this.add(u);const f=new gi(Gr,Vr,t,n);f.layers=this.layers,this.add(f);const d=new gi(Gr,Vr,t,n);d.layers=this.layers,this.add(d);const p=new gi(Gr,Vr,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,r,l,u,f,d]=n;for(const p of n)this.remove(p);if(t===Sa)a.up.set(0,1,0),a.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===au)a.up.set(0,-1,0),a.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,d,p,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,r),t.render(n,l),t.setRenderTarget(a,1,r),t.render(n,u),t.setRenderTarget(a,2,r),t.render(n,f),t.setRenderTarget(a,3,r),t.render(n,d),t.setRenderTarget(a,4,r),t.render(n,p),a.texture.generateMipmaps=b,t.setRenderTarget(a,5,r),t.render(n,g),t.setRenderTarget(_,v,S),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class F_ extends Zn{constructor(t,n,a,r,l,u,f,d,p,g){t=t!==void 0?t:[],n=n!==void 0?n:Kr,super(t,n,a,r,l,u,f,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ZM extends Fs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},r=[a,a,a,a,a,a];this.texture=new F_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ri}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ul(5,5,5),l=new rs({name:"CubemapFromEquirect",uniforms:eo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:ns});l.uniforms.tEquirect.value=n;const u=new Ci(r,l),f=n.minFilter;return n.minFilter===Is&&(n.minFilter=Ri),new jM(1,10,this).update(t,u),n.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(t,n,a,r){const l=t.getRenderTarget();for(let u=0;u<6;u++)t.setRenderTarget(this,u),t.clear(n,a,r);t.setRenderTarget(l)}}const Zh=new it,KM=new it,QM=new pe;let $a=class{constructor(t=new it(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,r){return this.normal.set(t,n,a),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const r=Zh.subVectors(a,n).cross(KM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Zh),r=this.normal.dot(a);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/r;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||QM.getNormalMatrix(t),r=this.coplanarPoint(Zh).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-r.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const Cs=new Ed,Gc=new it;class bd{constructor(t=new $a,n=new $a,a=new $a,r=new $a,l=new $a,u=new $a){this.planes=[t,n,a,r,l,u]}set(t,n,a,r,l,u){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(r),f[4].copy(l),f[5].copy(u),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=Sa){const a=this.planes,r=t.elements,l=r[0],u=r[1],f=r[2],d=r[3],p=r[4],g=r[5],_=r[6],v=r[7],S=r[8],M=r[9],b=r[10],x=r[11],y=r[12],T=r[13],w=r[14],L=r[15];if(a[0].setComponents(d-l,v-p,x-S,L-y).normalize(),a[1].setComponents(d+l,v+p,x+S,L+y).normalize(),a[2].setComponents(d+u,v+g,x+M,L+T).normalize(),a[3].setComponents(d-u,v-g,x-M,L-T).normalize(),a[4].setComponents(d-f,v-_,x-b,L-w).normalize(),n===Sa)a[5].setComponents(d+f,v+_,x+b,L+w).normalize();else if(n===au)a[5].setComponents(f,_,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(t){return Cs.center.set(0,0,0),Cs.radius=.7071067811865476,Cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(t){const n=this.planes,a=t.center,r=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const r=n[a];if(Gc.x=r.normal.x>0?t.max.x:t.min.x,Gc.y=r.normal.y>0?t.max.y:t.min.y,Gc.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function H_(){let c=null,t=!1,n=null,a=null;function r(l,u){n(l,u),a=c.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(a=c.requestAnimationFrame(r),t=!0)},stop:function(){c.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){c=l}}}function JM(c){const t=new WeakMap;function n(f,d){const p=f.array,g=f.usage,_=p.byteLength,v=c.createBuffer();c.bindBuffer(d,v),c.bufferData(d,p,g),f.onUploadCallback();let S;if(p instanceof Float32Array)S=c.FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=c.HALF_FLOAT:S=c.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=c.SHORT;else if(p instanceof Uint32Array)S=c.UNSIGNED_INT;else if(p instanceof Int32Array)S=c.INT;else if(p instanceof Int8Array)S=c.BYTE;else if(p instanceof Uint8Array)S=c.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=c.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:_}}function a(f,d,p){const g=d.array,_=d._updateRange,v=d.updateRanges;if(c.bindBuffer(p,f),_.count===-1&&v.length===0&&c.bufferSubData(p,0,g),v.length!==0){for(let S=0,M=v.length;S<M;S++){const b=v[S];c.bufferSubData(p,b.start*g.BYTES_PER_ELEMENT,g,b.start,b.count)}d.clearUpdateRanges()}_.count!==-1&&(c.bufferSubData(p,_.offset*g.BYTES_PER_ELEMENT,g,_.offset,_.count),_.count=-1),d.onUploadCallback()}function r(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=t.get(f);d&&(c.deleteBuffer(d.buffer),t.delete(f))}function u(f,d){if(f.isGLBufferAttribute){const g=t.get(f);(!g||g.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);if(p===void 0)t.set(f,n(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:r,remove:l,update:u}}class fl extends ls{constructor(t=1,n=1,a=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:r};const l=t/2,u=n/2,f=Math.floor(a),d=Math.floor(r),p=f+1,g=d+1,_=t/f,v=n/d,S=[],M=[],b=[],x=[];for(let y=0;y<g;y++){const T=y*v-u;for(let w=0;w<p;w++){const L=w*_-l;M.push(L,-T,0),b.push(0,0,1),x.push(w/f),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let T=0;T<f;T++){const w=T+p*y,L=T+p*(y+1),F=T+1+p*(y+1),B=T+1+p*y;S.push(w,L,B),S.push(L,F,B)}this.setIndex(S),this.setAttribute("position",new Xi(M,3)),this.setAttribute("normal",new Xi(b,3)),this.setAttribute("uv",new Xi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.widthSegments,t.heightSegments)}}var $M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,ME=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,EE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CE="gl_FragColor = linearToOutputTexel( gl_FragColor );",DE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,NE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,OE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,PE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,BE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,WE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ib=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ab=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ub=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,db=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ab=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ub=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Bb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,rT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,yT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ET=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,DT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:$M,alphahash_pars_fragment:tE,alphamap_fragment:eE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:aE,aomap_fragment:sE,aomap_pars_fragment:rE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:fE,iridescence_fragment:hE,bumpmap_pars_fragment:dE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:vE,color_fragment:_E,color_pars_fragment:yE,color_pars_vertex:xE,color_vertex:SE,common:ME,cube_uv_reflection_fragment:EE,defaultnormal_vertex:bE,displacementmap_pars_vertex:TE,displacementmap_vertex:AE,emissivemap_fragment:wE,emissivemap_pars_fragment:RE,colorspace_fragment:CE,colorspace_pars_fragment:DE,envmap_fragment:LE,envmap_common_pars_fragment:UE,envmap_pars_fragment:NE,envmap_pars_vertex:OE,envmap_physical_pars_fragment:XE,envmap_vertex:zE,fog_vertex:PE,fog_pars_vertex:BE,fog_fragment:IE,fog_pars_fragment:FE,gradientmap_pars_fragment:HE,lightmap_pars_fragment:GE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:kE,lights_pars_begin:qE,lights_toon_fragment:WE,lights_toon_pars_fragment:YE,lights_phong_fragment:jE,lights_phong_pars_fragment:ZE,lights_physical_fragment:KE,lights_physical_pars_fragment:QE,lights_fragment_begin:JE,lights_fragment_maps:$E,lights_fragment_end:tb,logdepthbuf_fragment:eb,logdepthbuf_pars_fragment:nb,logdepthbuf_pars_vertex:ib,logdepthbuf_vertex:ab,map_fragment:sb,map_pars_fragment:rb,map_particle_fragment:ob,map_particle_pars_fragment:lb,metalnessmap_fragment:cb,metalnessmap_pars_fragment:ub,morphinstance_vertex:fb,morphcolor_vertex:hb,morphnormal_vertex:db,morphtarget_pars_vertex:pb,morphtarget_vertex:mb,normal_fragment_begin:gb,normal_fragment_maps:vb,normal_pars_fragment:_b,normal_pars_vertex:yb,normal_vertex:xb,normalmap_pars_fragment:Sb,clearcoat_normal_fragment_begin:Mb,clearcoat_normal_fragment_maps:Eb,clearcoat_pars_fragment:bb,iridescence_pars_fragment:Tb,opaque_fragment:Ab,packing:wb,premultiplied_alpha_fragment:Rb,project_vertex:Cb,dithering_fragment:Db,dithering_pars_fragment:Lb,roughnessmap_fragment:Ub,roughnessmap_pars_fragment:Nb,shadowmap_pars_fragment:Ob,shadowmap_pars_vertex:zb,shadowmap_vertex:Pb,shadowmask_pars_fragment:Bb,skinbase_vertex:Ib,skinning_pars_vertex:Fb,skinning_vertex:Hb,skinnormal_vertex:Gb,specularmap_fragment:Vb,specularmap_pars_fragment:kb,tonemapping_fragment:qb,tonemapping_pars_fragment:Xb,transmission_fragment:Wb,transmission_pars_fragment:Yb,uv_pars_fragment:jb,uv_pars_vertex:Zb,uv_vertex:Kb,worldpos_vertex:Qb,background_vert:Jb,background_frag:$b,backgroundCube_vert:tT,backgroundCube_frag:eT,cube_vert:nT,cube_frag:iT,depth_vert:aT,depth_frag:sT,distanceRGBA_vert:rT,distanceRGBA_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:fT,meshbasic_vert:hT,meshbasic_frag:dT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:vT,meshnormal_vert:_T,meshnormal_frag:yT,meshphong_vert:xT,meshphong_frag:ST,meshphysical_vert:MT,meshphysical_frag:ET,meshtoon_vert:bT,meshtoon_frag:TT,points_vert:AT,points_frag:wT,shadow_vert:RT,shadow_frag:CT,sprite_vert:DT,sprite_frag:LT},Nt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Hi={basic:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:zn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:zn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:zn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Re(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:zn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:zn([Nt.points,Nt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:zn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:zn([Nt.common,Nt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:zn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:zn([Nt.sprite,Nt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:zn([Nt.common,Nt.displacementmap,{referencePosition:{value:new it},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:zn([Nt.lights,Nt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Hi.physical={uniforms:zn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Vc={r:0,b:0,g:0},Ds=new Wi,UT=new en;function NT(c,t,n,a,r,l,u){const f=new Re(0);let d=l===!0?0:1,p,g,_=null,v=0,S=null;function M(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?n:t).get(w)),w}function b(T){let w=!1;const L=M(T);L===null?y(f,d):L&&L.isColor&&(y(L,1),w=!0);const F=c.xr.getEnvironmentBlendMode();F==="additive"?a.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,u),(c.autoClear||w)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil))}function x(T,w){const L=M(w);L&&(L.isCubeTexture||L.mapping===ou)?(g===void 0&&(g=new Ci(new ul(1,1,1),new rs({name:"BackgroundCubeMaterial",uniforms:eo(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(g)),Ds.copy(w.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(UT.makeRotationFromEuler(Ds)),g.material.toneMapped=ze.getTransfer(L.colorSpace)!==We,(_!==L||v!==L.version||S!==c.toneMapping)&&(g.material.needsUpdate=!0,_=L,v=L.version,S=c.toneMapping),g.layers.enableAll(),T.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(p===void 0&&(p=new Ci(new fl(2,2),new rs({name:"BackgroundMaterial",uniforms:eo(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=L,p.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,p.material.toneMapped=ze.getTransfer(L.colorSpace)!==We,L.matrixAutoUpdate===!0&&L.updateMatrix(),p.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||S!==c.toneMapping)&&(p.material.needsUpdate=!0,_=L,v=L.version,S=c.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null))}function y(T,w){T.getRGB(Vc,B_(c)),a.buffers.color.setClear(Vc.r,Vc.g,Vc.b,w,u)}return{getClearColor:function(){return f},setClearColor:function(T,w=1){f.set(T),d=w,y(f,d)},getClearAlpha:function(){return d},setClearAlpha:function(T){d=T,y(f,d)},render:b,addToRenderList:x}}function OT(c,t){const n=c.getParameter(c.MAX_VERTEX_ATTRIBS),a={},r=v(null);let l=r,u=!1;function f(R,H,et,G,Q){let K=!1;const N=_(G,et,H);l!==N&&(l=N,p(l.object)),K=S(R,G,et,Q),K&&M(R,G,et,Q),Q!==null&&t.update(Q,c.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,L(R,H,et,G),Q!==null&&c.bindBuffer(c.ELEMENT_ARRAY_BUFFER,t.get(Q).buffer))}function d(){return c.createVertexArray()}function p(R){return c.bindVertexArray(R)}function g(R){return c.deleteVertexArray(R)}function _(R,H,et){const G=et.wireframe===!0;let Q=a[R.id];Q===void 0&&(Q={},a[R.id]=Q);let K=Q[H.id];K===void 0&&(K={},Q[H.id]=K);let N=K[G];return N===void 0&&(N=v(d()),K[G]=N),N}function v(R){const H=[],et=[],G=[];for(let Q=0;Q<n;Q++)H[Q]=0,et[Q]=0,G[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:et,attributeDivisors:G,object:R,attributes:{},index:null}}function S(R,H,et,G){const Q=l.attributes,K=H.attributes;let N=0;const Y=et.getAttributes();for(const X in Y)if(Y[X].location>=0){const Mt=Q[X];let I=K[X];if(I===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(I=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(I=R.instanceColor)),Mt===void 0||Mt.attribute!==I||I&&Mt.data!==I.data)return!0;N++}return l.attributesNum!==N||l.index!==G}function M(R,H,et,G){const Q={},K=H.attributes;let N=0;const Y=et.getAttributes();for(const X in Y)if(Y[X].location>=0){let Mt=K[X];Mt===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor));const I={};I.attribute=Mt,Mt&&Mt.data&&(I.data=Mt.data),Q[X]=I,N++}l.attributes=Q,l.attributesNum=N,l.index=G}function b(){const R=l.newAttributes;for(let H=0,et=R.length;H<et;H++)R[H]=0}function x(R){y(R,0)}function y(R,H){const et=l.newAttributes,G=l.enabledAttributes,Q=l.attributeDivisors;et[R]=1,G[R]===0&&(c.enableVertexAttribArray(R),G[R]=1),Q[R]!==H&&(c.vertexAttribDivisor(R,H),Q[R]=H)}function T(){const R=l.newAttributes,H=l.enabledAttributes;for(let et=0,G=H.length;et<G;et++)H[et]!==R[et]&&(c.disableVertexAttribArray(et),H[et]=0)}function w(R,H,et,G,Q,K,N){N===!0?c.vertexAttribIPointer(R,H,et,Q,K):c.vertexAttribPointer(R,H,et,G,Q,K)}function L(R,H,et,G){b();const Q=G.attributes,K=et.getAttributes(),N=H.defaultAttributeValues;for(const Y in K){const X=K[Y];if(X.location>=0){let mt=Q[Y];if(mt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(mt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(mt=R.instanceColor)),mt!==void 0){const Mt=mt.normalized,I=mt.itemSize,Z=t.get(mt);if(Z===void 0)continue;const yt=Z.buffer,J=Z.type,pt=Z.bytesPerElement,Et=J===c.INT||J===c.UNSIGNED_INT||mt.gpuType===y_;if(mt.isInterleavedBufferAttribute){const St=mt.data,Yt=St.stride,It=mt.offset;if(St.isInstancedInterleavedBuffer){for(let re=0;re<X.locationSize;re++)y(X.location+re,St.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let re=0;re<X.locationSize;re++)x(X.location+re);c.bindBuffer(c.ARRAY_BUFFER,yt);for(let re=0;re<X.locationSize;re++)w(X.location+re,I/X.locationSize,J,Mt,Yt*pt,(It+I/X.locationSize*re)*pt,Et)}else{if(mt.isInstancedBufferAttribute){for(let St=0;St<X.locationSize;St++)y(X.location+St,mt.meshPerAttribute);R.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let St=0;St<X.locationSize;St++)x(X.location+St);c.bindBuffer(c.ARRAY_BUFFER,yt);for(let St=0;St<X.locationSize;St++)w(X.location+St,I/X.locationSize,J,Mt,I*pt,I/X.locationSize*St*pt,Et)}}else if(N!==void 0){const Mt=N[Y];if(Mt!==void 0)switch(Mt.length){case 2:c.vertexAttrib2fv(X.location,Mt);break;case 3:c.vertexAttrib3fv(X.location,Mt);break;case 4:c.vertexAttrib4fv(X.location,Mt);break;default:c.vertexAttrib1fv(X.location,Mt)}}}}T()}function F(){q();for(const R in a){const H=a[R];for(const et in H){const G=H[et];for(const Q in G)g(G[Q].object),delete G[Q];delete H[et]}delete a[R]}}function B(R){if(a[R.id]===void 0)return;const H=a[R.id];for(const et in H){const G=H[et];for(const Q in G)g(G[Q].object),delete G[Q];delete H[et]}delete a[R.id]}function O(R){for(const H in a){const et=a[H];if(et[R.id]===void 0)continue;const G=et[R.id];for(const Q in G)g(G[Q].object),delete G[Q];delete et[R.id]}}function q(){z(),u=!0,l!==r&&(l=r,p(l.object))}function z(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:f,reset:q,resetDefaultState:z,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:b,enableAttribute:x,disableUnusedAttributes:T}}function zT(c,t,n){let a;function r(p){a=p}function l(p,g){c.drawArrays(a,p,g),n.update(g,a,1)}function u(p,g,_){_!==0&&(c.drawArraysInstanced(a,p,g,_),n.update(g,a,_))}function f(p,g,_){if(_===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<_;S++)this.render(p[S],g[S]);else{v.multiDrawArraysWEBGL(a,p,0,g,0,_);let S=0;for(let M=0;M<_;M++)S+=g[M];n.update(S,a,1)}}function d(p,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],g[M],v[M]);else{S.multiDrawArraysInstancedWEBGL(a,p,0,g,0,v,0,_);let M=0;for(let b=0;b<_;b++)M+=g[b];for(let b=0;b<v.length;b++)n.update(M,a,v[b])}}this.setMode=r,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function PT(c,t,n,a){let r;function l(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");r=c.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function u(B){return!(B!==ki&&a.convert(B)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const O=B===lu&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==ss&&a.convert(B)!==c.getParameter(c.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==es&&!O)}function d(B){if(B==="highp"){if(c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.HIGH_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&c.getShaderPrecisionFormat(c.VERTEX_SHADER,c.MEDIUM_FLOAT).precision>0&&c.getShaderPrecisionFormat(c.FRAGMENT_SHADER,c.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=n.logarithmicDepthBuffer===!0,v=c.getParameter(c.MAX_TEXTURE_IMAGE_UNITS),S=c.getParameter(c.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=c.getParameter(c.MAX_TEXTURE_SIZE),b=c.getParameter(c.MAX_CUBE_MAP_TEXTURE_SIZE),x=c.getParameter(c.MAX_VERTEX_ATTRIBS),y=c.getParameter(c.MAX_VERTEX_UNIFORM_VECTORS),T=c.getParameter(c.MAX_VARYING_VECTORS),w=c.getParameter(c.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,F=c.getParameter(c.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,maxTextures:v,maxVertexTextures:S,maxTextureSize:M,maxCubemapSize:b,maxAttributes:x,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:L,maxSamples:F}}function BT(c){const t=this;let n=null,a=0,r=!1,l=!1;const u=new $a,f=new pe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||a!==0||r;return r=v,a=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){n=g(_,v,0)},this.setState=function(_,v,S){const M=_.clippingPlanes,b=_.clipIntersection,x=_.clipShadows,y=c.get(_);if(!r||M===null||M.length===0||l&&!x)l?g(null):p();else{const T=l?0:a,w=T*4;let L=y.clippingState||null;d.value=L,L=g(M,v,w,S);for(let F=0;F!==w;++F)L[F]=n[F];y.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=T}};function p(){d.value!==n&&(d.value=n,d.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function g(_,v,S,M){const b=_!==null?_.length:0;let x=null;if(b!==0){if(x=d.value,M!==!0||x===null){const y=S+b*4,T=v.matrixWorldInverse;f.getNormalMatrix(T),(x===null||x.length<y)&&(x=new Float32Array(y));for(let w=0,L=S;w!==b;++w,L+=4)u.copy(_[w]).applyMatrix4(T,f),u.normal.toArray(x,L),x[L+3]=u.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,x}}function IT(c){let t=new WeakMap;function n(u,f){return f===pd?u.mapping=Kr:f===md&&(u.mapping=Qr),u}function a(u){if(u&&u.isTexture){const f=u.mapping;if(f===pd||f===md)if(t.has(u)){const d=t.get(u).texture;return n(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new ZM(d.height);return p.fromEquirectangularTexture(c,u),t.set(u,p),u.addEventListener("dispose",r),n(p.texture,u.mapping)}else return null}}return u}function r(u){const f=u.target;f.removeEventListener("dispose",r);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}class G_ extends I_{constructor(t=-1,n=1,a=1,r=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=r,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,r,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=r,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let l=a-t,u=a+t,f=r+n,d=r-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Wr=4,M0=[.125,.215,.35,.446,.526,.582],zs=20,Kh=new G_,E0=new Re;let Qh=null,Jh=0,$h=0,td=!1;const Ns=(1+Math.sqrt(5))/2,kr=1/Ns,b0=[new it(-Ns,kr,0),new it(Ns,kr,0),new it(-kr,0,Ns),new it(kr,0,Ns),new it(0,Ns,-kr),new it(0,Ns,kr),new it(-1,1,-1),new it(1,1,-1),new it(-1,1,1),new it(1,1,1)];class T0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,a=.1,r=100){Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,a,r,l),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=R0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=w0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Qh,Jh,$h),this._renderer.xr.enabled=td,t.scissorTest=!1,kc(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Kr||t.mapping===Qr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Qh=this._renderer.getRenderTarget(),Jh=this._renderer.getActiveCubeFace(),$h=this._renderer.getActiveMipmapLevel(),td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Ri,minFilter:Ri,generateMipmaps:!1,type:lu,format:ki,colorSpace:os,depthBuffer:!1},r=A0(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(t,n,a);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FT(l)),this._blurMaterial=HT(l,t,n)}return r}_compileMaterial(t){const n=new Ci(this._lodPlanes[0],t);this._renderer.compile(n,Kh)}_sceneToCubeUV(t,n,a,r){const f=new gi(90,1,n,a),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,v=g.toneMapping;g.getClearColor(E0),g.toneMapping=is,g.autoClear=!1;const S=new O_({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),M=new Ci(new ul,S);let b=!1;const x=t.background;x?x.isColor&&(S.color.copy(x),t.background=null,b=!0):(S.color.copy(E0),b=!0);for(let y=0;y<6;y++){const T=y%3;T===0?(f.up.set(0,d[y],0),f.lookAt(p[y],0,0)):T===1?(f.up.set(0,0,d[y]),f.lookAt(0,p[y],0)):(f.up.set(0,d[y],0),f.lookAt(0,0,p[y]));const w=this._cubeSize;kc(r,T*w,y>2?w:0,w,w),g.setRenderTarget(r),b&&g.render(M,f),g.render(t,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=v,g.autoClear=_,t.background=x}_textureToCubeUV(t,n){const a=this._renderer,r=t.mapping===Kr||t.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=R0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=w0());const l=r?this._cubemapMaterial:this._equirectMaterial,u=new Ci(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=t;const d=this._cubeSize;kc(n,0,0,3*d,2*d),a.setRenderTarget(n),a.render(u,Kh)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let l=1;l<r;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=b0[(r-l-1)%b0.length];this._blur(t,l-1,l,u,f)}n.autoClear=a}_blur(t,n,a,r,l){const u=this._pingPongRenderTarget;this._halfBlur(t,u,n,a,r,"latitudinal",l),this._halfBlur(u,t,a,a,r,"longitudinal",l)}_halfBlur(t,n,a,r,l,u,f){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ci(this._lodPlanes[r],p),v=p.uniforms,S=this._sizeLods[a]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*zs-1),b=l/M,x=isFinite(l)?1+Math.floor(g*b):zs;x>zs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${zs}`);const y=[];let T=0;for(let O=0;O<zs;++O){const q=O/b,z=Math.exp(-q*q/2);y.push(z),O===0?T+=z:O<x&&(T+=2*z)}for(let O=0;O<y.length;O++)y[O]=y[O]/T;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=y,v.latitudinal.value=u==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=M,v.mipInt.value=w-a;const L=this._sizeLods[r],F=3*L*(r>w-Wr?r-w+Wr:0),B=4*(this._cubeSize-L);kc(n,F,B,3*L,2*L),d.setRenderTarget(n),d.render(_,Kh)}}function FT(c){const t=[],n=[],a=[];let r=c;const l=c-Wr+1+M0.length;for(let u=0;u<l;u++){const f=Math.pow(2,r);n.push(f);let d=1/f;u>c-Wr?d=M0[u-c+Wr-1]:u===0&&(d=0),a.push(d);const p=1/(f-2),g=-p,_=1+p,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,M=6,b=3,x=2,y=1,T=new Float32Array(b*M*S),w=new Float32Array(x*M*S),L=new Float32Array(y*M*S);for(let B=0;B<S;B++){const O=B%3*2/3-1,q=B>2?0:-1,z=[O,q,0,O+2/3,q,0,O+2/3,q+1,0,O,q,0,O+2/3,q+1,0,O,q+1,0];T.set(z,b*M*B),w.set(v,x*M*B);const R=[B,B,B,B,B,B];L.set(R,y*M*B)}const F=new ls;F.setAttribute("position",new qi(T,b)),F.setAttribute("uv",new qi(w,x)),F.setAttribute("faceIndex",new qi(L,y)),t.push(F),r>Wr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:a}}function A0(c,t,n){const a=new Fs(c,t,n);return a.texture.mapping=ou,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function kc(c,t,n,a,r){c.viewport.set(t,n,a,r),c.scissor.set(t,n,a,r)}function HT(c,t,n){const a=new Float32Array(zs),r=new it(0,1,0);return new rs({name:"SphericalGaussianBlur",defines:{n:zs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function w0(){return new rs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function R0(){return new rs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ns,depthTest:!1,depthWrite:!1})}function Td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function GT(c){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const d=f.mapping,p=d===pd||d===md,g=d===Kr||d===Qr;if(p||g){let _=t.get(f);const v=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new T0(c)),_=p?n.fromEquirectangular(f,_):n.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),_.texture;if(_!==void 0)return _.texture;{const S=f.image;return p&&S&&S.height>0||g&&S&&r(S)?(n===null&&(n=new T0(c)),_=p?n.fromEquirectangular(f):n.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,t.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function r(f){let d=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&d++;return d===p}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:u}}function VT(c){const t={};function n(a){if(t[a]!==void 0)return t[a];let r;switch(a){case"WEBGL_depth_texture":r=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=c.getExtension(a)}return t[a]=r,r}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const r=n(a);return r===null&&R_("THREE.WebGLRenderer: "+a+" extension not supported."),r}}}function kT(c,t,n,a){const r={},l=new WeakMap;function u(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const M in v.attributes)t.remove(v.attributes[M]);for(const M in v.morphAttributes){const b=v.morphAttributes[M];for(let x=0,y=b.length;x<y;x++)t.remove(b[x])}v.removeEventListener("dispose",u),delete r[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(_,v){return r[v.id]===!0||(v.addEventListener("dispose",u),r[v.id]=!0,n.memory.geometries++),v}function d(_){const v=_.attributes;for(const M in v)t.update(v[M],c.ARRAY_BUFFER);const S=_.morphAttributes;for(const M in S){const b=S[M];for(let x=0,y=b.length;x<y;x++)t.update(b[x],c.ARRAY_BUFFER)}}function p(_){const v=[],S=_.index,M=_.attributes.position;let b=0;if(S!==null){const T=S.array;b=S.version;for(let w=0,L=T.length;w<L;w+=3){const F=T[w+0],B=T[w+1],O=T[w+2];v.push(F,B,B,O,O,F)}}else if(M!==void 0){const T=M.array;b=M.version;for(let w=0,L=T.length/3-1;w<L;w+=3){const F=w+0,B=w+1,O=w+2;v.push(F,B,B,O,O,F)}}else return;const x=new(w_(v)?P_:z_)(v,1);x.version=b;const y=l.get(_);y&&t.remove(y),l.set(_,x)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:f,update:d,getWireframeAttribute:g}}function qT(c,t,n){let a;function r(v){a=v}let l,u;function f(v){l=v.type,u=v.bytesPerElement}function d(v,S){c.drawElements(a,S,l,v*u),n.update(S,a,1)}function p(v,S,M){M!==0&&(c.drawElementsInstanced(a,S,l,v*u,M),n.update(S,a,M))}function g(v,S,M){if(M===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let x=0;x<M;x++)this.render(v[x]/u,S[x]);else{b.multiDrawElementsWEBGL(a,S,0,l,v,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];n.update(x,a,1)}}function _(v,S,M,b){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<v.length;y++)p(v[y]/u,S[y],b[y]);else{x.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,b,0,M);let y=0;for(let T=0;T<M;T++)y+=S[T];for(let T=0;T<b.length;T++)n.update(y,a,b[T])}}this.setMode=r,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function XT(c){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,f){switch(n.calls++,u){case c.TRIANGLES:n.triangles+=f*(l/3);break;case c.LINES:n.lines+=f*(l/2);break;case c.LINE_STRIP:n.lines+=f*(l-1);break;case c.LINE_LOOP:n.lines+=f*l;break;case c.POINTS:n.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:a}}function WT(c,t,n){const a=new WeakMap,r=new yn;function l(u,f,d){const p=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let v=a.get(f);if(v===void 0||v.count!==_){let R=function(){q.dispose(),a.delete(f),f.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let L=0;M===!0&&(L=1),b===!0&&(L=2),x===!0&&(L=3);let F=f.attributes.position.count*L,B=1;F>t.maxTextureSize&&(B=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const O=new Float32Array(F*B*4*_),q=new D_(O,F,B,_);q.type=es,q.needsUpdate=!0;const z=L*4;for(let H=0;H<_;H++){const et=y[H],G=T[H],Q=w[H],K=F*B*4*H;for(let N=0;N<et.count;N++){const Y=N*z;M===!0&&(r.fromBufferAttribute(et,N),O[K+Y+0]=r.x,O[K+Y+1]=r.y,O[K+Y+2]=r.z,O[K+Y+3]=0),b===!0&&(r.fromBufferAttribute(G,N),O[K+Y+4]=r.x,O[K+Y+5]=r.y,O[K+Y+6]=r.z,O[K+Y+7]=0),x===!0&&(r.fromBufferAttribute(Q,N),O[K+Y+8]=r.x,O[K+Y+9]=r.y,O[K+Y+10]=r.z,O[K+Y+11]=Q.itemSize===4?r.w:1)}}v={count:_,texture:q,size:new se(F,B)},a.set(f,v),f.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(c,"morphTexture",u.morphTexture,n);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const b=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(c,"morphTargetBaseInfluence",b),d.getUniforms().setValue(c,"morphTargetInfluences",p)}d.getUniforms().setValue(c,"morphTargetsTexture",v.texture,n),d.getUniforms().setValue(c,"morphTargetsTextureSize",v.size)}return{update:l}}function YT(c,t,n,a){let r=new WeakMap;function l(d){const p=a.render.frame,g=d.geometry,_=t.get(d,g);if(r.get(_)!==p&&(t.update(_),r.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",f)===!1&&d.addEventListener("dispose",f),r.get(d)!==p&&(n.update(d.instanceMatrix,c.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,c.ARRAY_BUFFER),r.set(d,p))),d.isSkinnedMesh){const v=d.skeleton;r.get(v)!==p&&(v.update(),r.set(v,p))}return _}function u(){r=new WeakMap}function f(d){const p=d.target;p.removeEventListener("dispose",f),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:l,dispose:u}}class V_ extends Zn{constructor(t,n,a,r,l,u,f,d,p,g=jr){if(g!==jr&&g!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");a===void 0&&g===jr&&(a=Jr),a===void 0&&g===to&&(a=$r),super(null,r,l,u,f,d,g,a,p),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=f!==void 0?f:vi,this.minFilter=d!==void 0?d:vi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const k_=new Zn,q_=new V_(1,1);q_.compareFunction=A_;const X_=new D_,W_=new NM,Y_=new F_,C0=[],D0=[],L0=new Float32Array(16),U0=new Float32Array(9),N0=new Float32Array(4);function no(c,t,n){const a=c[0];if(a<=0||a>0)return c;const r=t*n;let l=C0[r];if(l===void 0&&(l=new Float32Array(r),C0[r]=l),t!==0){a.toArray(l,0);for(let u=1,f=0;u!==t;++u)f+=n,c[u].toArray(l,f)}return l}function mn(c,t){if(c.length!==t.length)return!1;for(let n=0,a=c.length;n<a;n++)if(c[n]!==t[n])return!1;return!0}function gn(c,t){for(let n=0,a=t.length;n<a;n++)c[n]=t[n]}function uu(c,t){let n=D0[t];n===void 0&&(n=new Int32Array(t),D0[t]=n);for(let a=0;a!==t;++a)n[a]=c.allocateTextureUnit();return n}function jT(c,t){const n=this.cache;n[0]!==t&&(c.uniform1f(this.addr,t),n[0]=t)}function ZT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;c.uniform2fv(this.addr,t),gn(n,t)}}function KT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;c.uniform3fv(this.addr,t),gn(n,t)}}function QT(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;c.uniform4fv(this.addr,t),gn(n,t)}}function JT(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;c.uniformMatrix2fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;N0.set(a),c.uniformMatrix2fv(this.addr,!1,N0),gn(n,a)}}function $T(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;c.uniformMatrix3fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;U0.set(a),c.uniformMatrix3fv(this.addr,!1,U0),gn(n,a)}}function tA(c,t){const n=this.cache,a=t.elements;if(a===void 0){if(mn(n,t))return;c.uniformMatrix4fv(this.addr,!1,t),gn(n,t)}else{if(mn(n,a))return;L0.set(a),c.uniformMatrix4fv(this.addr,!1,L0),gn(n,a)}}function eA(c,t){const n=this.cache;n[0]!==t&&(c.uniform1i(this.addr,t),n[0]=t)}function nA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;c.uniform2iv(this.addr,t),gn(n,t)}}function iA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;c.uniform3iv(this.addr,t),gn(n,t)}}function aA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;c.uniform4iv(this.addr,t),gn(n,t)}}function sA(c,t){const n=this.cache;n[0]!==t&&(c.uniform1ui(this.addr,t),n[0]=t)}function rA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;c.uniform2uiv(this.addr,t),gn(n,t)}}function oA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;c.uniform3uiv(this.addr,t),gn(n,t)}}function lA(c,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;c.uniform4uiv(this.addr,t),gn(n,t)}}function cA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r);const l=this.type===c.SAMPLER_2D_SHADOW?q_:k_;n.setTexture2D(t||l,r)}function uA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture3D(t||W_,r)}function fA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTextureCube(t||Y_,r)}function hA(c,t,n){const a=this.cache,r=n.allocateTextureUnit();a[0]!==r&&(c.uniform1i(this.addr,r),a[0]=r),n.setTexture2DArray(t||X_,r)}function dA(c){switch(c){case 5126:return jT;case 35664:return ZT;case 35665:return KT;case 35666:return QT;case 35674:return JT;case 35675:return $T;case 35676:return tA;case 5124:case 35670:return eA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return aA;case 5125:return sA;case 36294:return rA;case 36295:return oA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}function pA(c,t){c.uniform1fv(this.addr,t)}function mA(c,t){const n=no(t,this.size,2);c.uniform2fv(this.addr,n)}function gA(c,t){const n=no(t,this.size,3);c.uniform3fv(this.addr,n)}function vA(c,t){const n=no(t,this.size,4);c.uniform4fv(this.addr,n)}function _A(c,t){const n=no(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,n)}function yA(c,t){const n=no(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,n)}function xA(c,t){const n=no(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,n)}function SA(c,t){c.uniform1iv(this.addr,t)}function MA(c,t){c.uniform2iv(this.addr,t)}function EA(c,t){c.uniform3iv(this.addr,t)}function bA(c,t){c.uniform4iv(this.addr,t)}function TA(c,t){c.uniform1uiv(this.addr,t)}function AA(c,t){c.uniform2uiv(this.addr,t)}function wA(c,t){c.uniform3uiv(this.addr,t)}function RA(c,t){c.uniform4uiv(this.addr,t)}function CA(c,t,n){const a=this.cache,r=t.length,l=uu(n,r);mn(a,l)||(c.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==r;++u)n.setTexture2D(t[u]||k_,l[u])}function DA(c,t,n){const a=this.cache,r=t.length,l=uu(n,r);mn(a,l)||(c.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==r;++u)n.setTexture3D(t[u]||W_,l[u])}function LA(c,t,n){const a=this.cache,r=t.length,l=uu(n,r);mn(a,l)||(c.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==r;++u)n.setTextureCube(t[u]||Y_,l[u])}function UA(c,t,n){const a=this.cache,r=t.length,l=uu(n,r);mn(a,l)||(c.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==r;++u)n.setTexture2DArray(t[u]||X_,l[u])}function NA(c){switch(c){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return vA;case 35674:return _A;case 35675:return yA;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return MA;case 35668:case 35672:return EA;case 35669:case 35673:return bA;case 5125:return TA;case 36294:return AA;case 36295:return wA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return DA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return UA}}class OA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=dA(n.type)}}class zA{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=NA(n.type)}}class PA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const r=this.seq;for(let l=0,u=r.length;l!==u;++l){const f=r[l];f.setValue(t,n[f.id],a)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function O0(c,t){c.seq.push(t),c.map[t.id]=t}function BA(c,t,n){const a=c.name,r=a.length;for(ed.lastIndex=0;;){const l=ed.exec(a),u=ed.lastIndex;let f=l[1];const d=l[2]==="]",p=l[3];if(d&&(f=f|0),p===void 0||p==="["&&u+2===r){O0(n,p===void 0?new OA(f,c,t):new zA(f,c,t));break}else{let _=n.map[f];_===void 0&&(_=new PA(f),O0(n,_)),n=_}}}class Jc{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<a;++r){const l=t.getActiveUniform(n,r),u=t.getUniformLocation(n,l.name);BA(l,u,this)}}setValue(t,n,a,r){const l=this.map[n];l!==void 0&&l.setValue(t,a,r)}setOptional(t,n,a){const r=n[a];r!==void 0&&this.setValue(t,a,r)}static upload(t,n,a,r){for(let l=0,u=n.length;l!==u;++l){const f=n[l],d=a[f.id];d.needsUpdate!==!1&&f.setValue(t,d.value,r)}}static seqWithValue(t,n){const a=[];for(let r=0,l=t.length;r!==l;++r){const u=t[r];u.id in n&&a.push(u)}return a}}function z0(c,t,n){const a=c.createShader(t);return c.shaderSource(a,n),c.compileShader(a),a}const IA=37297;let FA=0;function HA(c,t){const n=c.split(`
`),a=[],r=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let u=r;u<l;u++){const f=u+1;a.push(`${f===t?">":" "} ${f}: ${n[u]}`)}return a.join(`
`)}function GA(c){const t=ze.getPrimaries(ze.workingColorSpace),n=ze.getPrimaries(c);let a;switch(t===n?a="":t===iu&&n===nu?a="LinearDisplayP3ToLinearSRGB":t===nu&&n===iu&&(a="LinearSRGBToLinearDisplayP3"),c){case os:case cu:return[a,"LinearTransferOETF"];case Fi:case Md:return[a,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",c),[a,"LinearTransferOETF"]}}function P0(c,t,n){const a=c.getShaderParameter(t,c.COMPILE_STATUS),r=c.getShaderInfoLog(t).trim();if(a&&r==="")return"";const l=/ERROR: 0:(\d+)/.exec(r);if(l){const u=parseInt(l[1]);return n.toUpperCase()+`

`+r+`

`+HA(c.getShaderSource(t),u)}else return r}function VA(c,t){const n=GA(t);return`vec4 ${c}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function kA(c,t){let n;switch(t){case KS:n="Linear";break;case QS:n="Reinhard";break;case JS:n="OptimizedCineon";break;case $S:n="ACESFilmic";break;case eM:n="AgX";break;case nM:n="Neutral";break;case tM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+c+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function qA(c){return[c.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",c.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function XA(c){const t=[];for(const n in c){const a=c[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function WA(c,t){const n={},a=c.getProgramParameter(t,c.ACTIVE_ATTRIBUTES);for(let r=0;r<a;r++){const l=c.getActiveAttrib(t,r),u=l.name;let f=1;l.type===c.FLOAT_MAT2&&(f=2),l.type===c.FLOAT_MAT3&&(f=3),l.type===c.FLOAT_MAT4&&(f=4),n[u]={type:l.type,location:c.getAttribLocation(t,u),locationSize:f}}return n}function al(c){return c!==""}function B0(c,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function I0(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function yd(c){return c.replace(YA,ZA)}const jA=new Map;function ZA(c,t){let n=de[t];if(n===void 0){const a=jA.get(t);if(a!==void 0)n=de[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return yd(n)}const KA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function F0(c){return c.replace(KA,QA)}function QA(c,t,n,a){let r="";for(let l=parseInt(t);l<parseInt(n);l++)r+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return r}function H0(c){let t=`precision ${c.precision} float;
	precision ${c.precision} int;
	precision ${c.precision} sampler2D;
	precision ${c.precision} samplerCube;
	precision ${c.precision} sampler3D;
	precision ${c.precision} sampler2DArray;
	precision ${c.precision} sampler2DShadow;
	precision ${c.precision} samplerCubeShadow;
	precision ${c.precision} sampler2DArrayShadow;
	precision ${c.precision} isampler2D;
	precision ${c.precision} isampler3D;
	precision ${c.precision} isamplerCube;
	precision ${c.precision} isampler2DArray;
	precision ${c.precision} usampler2D;
	precision ${c.precision} usampler3D;
	precision ${c.precision} usamplerCube;
	precision ${c.precision} usampler2DArray;
	`;return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function JA(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===g_?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===MS?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===xa&&(t="SHADOWMAP_TYPE_VSM"),t}function $A(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Kr:case Qr:t="ENVMAP_TYPE_CUBE";break;case ou:t="ENVMAP_TYPE_CUBE_UV";break}return t}function t1(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case Qr:t="ENVMAP_MODE_REFRACTION";break}return t}function e1(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case v_:t="ENVMAP_BLENDING_MULTIPLY";break;case jS:t="ENVMAP_BLENDING_MIX";break;case ZS:t="ENVMAP_BLENDING_ADD";break}return t}function n1(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function i1(c,t,n,a){const r=c.getContext(),l=n.defines;let u=n.vertexShader,f=n.fragmentShader;const d=JA(n),p=$A(n),g=t1(n),_=e1(n),v=n1(n),S=qA(n),M=XA(l),b=r.createProgram();let x,y,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(al).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(al).join(`
`),y.length>0&&(y+=`
`)):(x=[H0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+g:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),y=[H0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+g:"",n.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+d:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==is?"#define TONE_MAPPING":"",n.toneMapping!==is?de.tonemapping_pars_fragment:"",n.toneMapping!==is?kA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,VA("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),u=yd(u),u=B0(u,n),u=I0(u,n),f=yd(f),f=B0(f,n),f=I0(f,n),u=F0(u),f=F0(f),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===n0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===n0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const w=T+x+u,L=T+y+f,F=z0(r,r.VERTEX_SHADER,w),B=z0(r,r.FRAGMENT_SHADER,L);r.attachShader(b,F),r.attachShader(b,B),n.index0AttributeName!==void 0?r.bindAttribLocation(b,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function O(H){if(c.debug.checkShaderErrors){const et=r.getProgramInfoLog(b).trim(),G=r.getShaderInfoLog(F).trim(),Q=r.getShaderInfoLog(B).trim();let K=!0,N=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(K=!1,typeof c.debug.onShaderError=="function")c.debug.onShaderError(r,b,F,B);else{const Y=P0(r,F,"vertex"),X=P0(r,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+et+`
`+Y+`
`+X)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(G===""||Q==="")&&(N=!1);N&&(H.diagnostics={runnable:K,programLog:et,vertexShader:{log:G,prefix:x},fragmentShader:{log:Q,prefix:y}})}r.deleteShader(F),r.deleteShader(B),q=new Jc(r,b),z=WA(r,b)}let q;this.getUniforms=function(){return q===void 0&&O(this),q};let z;this.getAttributes=function(){return z===void 0&&O(this),z};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(b,IA)),R},this.destroy=function(){a.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=FA++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=F,this.fragmentShader=B,this}let a1=0;class s1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,r=this._getShaderStage(n),l=this._getShaderStage(a),u=this._getShaderCacheForMaterial(t);return u.has(r)===!1&&(u.add(r),r.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new r1(t),n.set(t,a)),a}}class r1{constructor(t){this.id=a1++,this.code=t,this.usedTimes=0}}function o1(c,t,n,a,r,l,u){const f=new U_,d=new s1,p=new Set,g=[],_=r.logarithmicDepthBuffer,v=r.vertexTextures;let S=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(z){return p.add(z),z===0?"uv":`uv${z}`}function x(z,R,H,et,G){const Q=et.fog,K=G.geometry,N=z.isMeshStandardMaterial?et.environment:null,Y=(z.isMeshStandardMaterial?n:t).get(z.envMap||N),X=Y&&Y.mapping===ou?Y.image.height:null,mt=M[z.type];z.precision!==null&&(S=r.getMaxPrecision(z.precision),S!==z.precision&&console.warn("THREE.WebGLProgram.getParameters:",z.precision,"not supported, using",S,"instead."));const Mt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,I=Mt!==void 0?Mt.length:0;let Z=0;K.morphAttributes.position!==void 0&&(Z=1),K.morphAttributes.normal!==void 0&&(Z=2),K.morphAttributes.color!==void 0&&(Z=3);let yt,J,pt,Et;if(mt){const Me=Hi[mt];yt=Me.vertexShader,J=Me.fragmentShader}else yt=z.vertexShader,J=z.fragmentShader,d.update(z),pt=d.getVertexShaderID(z),Et=d.getFragmentShaderID(z);const St=c.getRenderTarget(),Yt=G.isInstancedMesh===!0,It=G.isBatchedMesh===!0,re=!!z.map,j=!!z.matcap,ue=!!Y,fe=!!z.aoMap,Se=!!z.lightMap,jt=!!z.bumpMap,me=!!z.normalMap,le=!!z.displacementMap,ne=!!z.emissiveMap,He=!!z.metalnessMap,V=!!z.roughnessMap,U=z.anisotropy>0,ft=z.clearcoat>0,Tt=z.dispersion>0,xt=z.iridescence>0,At=z.sheen>0,qt=z.transmission>0,Lt=U&&!!z.anisotropyMap,Dt=ft&&!!z.clearcoatMap,ie=ft&&!!z.clearcoatNormalMap,wt=ft&&!!z.clearcoatRoughnessMap,Vt=xt&&!!z.iridescenceMap,he=xt&&!!z.iridescenceThicknessMap,Qt=At&&!!z.sheenColorMap,Ct=At&&!!z.sheenRoughnessMap,$t=!!z.specularMap,Xt=!!z.specularColorMap,Ye=!!z.specularIntensityMap,A=qt&&!!z.transmissionMap,ht=qt&&!!z.thicknessMap,rt=!!z.gradientMap,dt=!!z.alphaMap,bt=z.alphaTest>0,Gt=!!z.alphaHash,ee=!!z.extensions;let Pe=is;z.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(Pe=c.toneMapping);const Ke={shaderID:mt,shaderType:z.type,shaderName:z.name,vertexShader:yt,fragmentShader:J,defines:z.defines,customVertexShaderID:pt,customFragmentShaderID:Et,isRawShaderMaterial:z.isRawShaderMaterial===!0,glslVersion:z.glslVersion,precision:S,batching:It,batchingColor:It&&G._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&G.instanceColor!==null,instancingMorph:Yt&&G.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:St===null?c.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:os,alphaToCoverage:!!z.alphaToCoverage,map:re,matcap:j,envMap:ue,envMapMode:ue&&Y.mapping,envMapCubeUVHeight:X,aoMap:fe,lightMap:Se,bumpMap:jt,normalMap:me,displacementMap:v&&le,emissiveMap:ne,normalMapObjectSpace:me&&z.normalMapType===gM,normalMapTangentSpace:me&&z.normalMapType===T_,metalnessMap:He,roughnessMap:V,anisotropy:U,anisotropyMap:Lt,clearcoat:ft,clearcoatMap:Dt,clearcoatNormalMap:ie,clearcoatRoughnessMap:wt,dispersion:Tt,iridescence:xt,iridescenceMap:Vt,iridescenceThicknessMap:he,sheen:At,sheenColorMap:Qt,sheenRoughnessMap:Ct,specularMap:$t,specularColorMap:Xt,specularIntensityMap:Ye,transmission:qt,transmissionMap:A,thicknessMap:ht,gradientMap:rt,opaque:z.transparent===!1&&z.blending===Yr&&z.alphaToCoverage===!1,alphaMap:dt,alphaTest:bt,alphaHash:Gt,combine:z.combine,mapUv:re&&b(z.map.channel),aoMapUv:fe&&b(z.aoMap.channel),lightMapUv:Se&&b(z.lightMap.channel),bumpMapUv:jt&&b(z.bumpMap.channel),normalMapUv:me&&b(z.normalMap.channel),displacementMapUv:le&&b(z.displacementMap.channel),emissiveMapUv:ne&&b(z.emissiveMap.channel),metalnessMapUv:He&&b(z.metalnessMap.channel),roughnessMapUv:V&&b(z.roughnessMap.channel),anisotropyMapUv:Lt&&b(z.anisotropyMap.channel),clearcoatMapUv:Dt&&b(z.clearcoatMap.channel),clearcoatNormalMapUv:ie&&b(z.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&b(z.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&b(z.iridescenceMap.channel),iridescenceThicknessMapUv:he&&b(z.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&b(z.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&b(z.sheenRoughnessMap.channel),specularMapUv:$t&&b(z.specularMap.channel),specularColorMapUv:Xt&&b(z.specularColorMap.channel),specularIntensityMapUv:Ye&&b(z.specularIntensityMap.channel),transmissionMapUv:A&&b(z.transmissionMap.channel),thicknessMapUv:ht&&b(z.thicknessMap.channel),alphaMapUv:dt&&b(z.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(me||U),vertexColors:z.vertexColors,vertexAlphas:z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(re||dt),fog:!!Q,useFog:z.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:z.flatShading===!0,sizeAttenuation:z.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:Z,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:z.dithering,shadowMapEnabled:c.shadowMap.enabled&&H.length>0,shadowMapType:c.shadowMap.type,toneMapping:Pe,decodeVideoTexture:re&&z.map.isVideoTexture===!0&&ze.getTransfer(z.map.colorSpace)===We,premultipliedAlpha:z.premultipliedAlpha,doubleSided:z.side===Gi,flipSided:z.side===jn,useDepthPacking:z.depthPacking>=0,depthPacking:z.depthPacking||0,index0AttributeName:z.index0AttributeName,extensionClipCullDistance:ee&&z.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ee&&z.extensions.multiDraw===!0&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:z.customProgramCacheKey()};return Ke.vertexUv1s=p.has(1),Ke.vertexUv2s=p.has(2),Ke.vertexUv3s=p.has(3),p.clear(),Ke}function y(z){const R=[];if(z.shaderID?R.push(z.shaderID):(R.push(z.customVertexShaderID),R.push(z.customFragmentShaderID)),z.defines!==void 0)for(const H in z.defines)R.push(H),R.push(z.defines[H]);return z.isRawShaderMaterial===!1&&(T(R,z),w(R,z),R.push(c.outputColorSpace)),R.push(z.customProgramCacheKey),R.join()}function T(z,R){z.push(R.precision),z.push(R.outputColorSpace),z.push(R.envMapMode),z.push(R.envMapCubeUVHeight),z.push(R.mapUv),z.push(R.alphaMapUv),z.push(R.lightMapUv),z.push(R.aoMapUv),z.push(R.bumpMapUv),z.push(R.normalMapUv),z.push(R.displacementMapUv),z.push(R.emissiveMapUv),z.push(R.metalnessMapUv),z.push(R.roughnessMapUv),z.push(R.anisotropyMapUv),z.push(R.clearcoatMapUv),z.push(R.clearcoatNormalMapUv),z.push(R.clearcoatRoughnessMapUv),z.push(R.iridescenceMapUv),z.push(R.iridescenceThicknessMapUv),z.push(R.sheenColorMapUv),z.push(R.sheenRoughnessMapUv),z.push(R.specularMapUv),z.push(R.specularColorMapUv),z.push(R.specularIntensityMapUv),z.push(R.transmissionMapUv),z.push(R.thicknessMapUv),z.push(R.combine),z.push(R.fogExp2),z.push(R.sizeAttenuation),z.push(R.morphTargetsCount),z.push(R.morphAttributeCount),z.push(R.numDirLights),z.push(R.numPointLights),z.push(R.numSpotLights),z.push(R.numSpotLightMaps),z.push(R.numHemiLights),z.push(R.numRectAreaLights),z.push(R.numDirLightShadows),z.push(R.numPointLightShadows),z.push(R.numSpotLightShadows),z.push(R.numSpotLightShadowsWithMaps),z.push(R.numLightProbes),z.push(R.shadowMapType),z.push(R.toneMapping),z.push(R.numClippingPlanes),z.push(R.numClipIntersection),z.push(R.depthPacking)}function w(z,R){f.disableAll(),R.supportsVertexTextures&&f.enable(0),R.instancing&&f.enable(1),R.instancingColor&&f.enable(2),R.instancingMorph&&f.enable(3),R.matcap&&f.enable(4),R.envMap&&f.enable(5),R.normalMapObjectSpace&&f.enable(6),R.normalMapTangentSpace&&f.enable(7),R.clearcoat&&f.enable(8),R.iridescence&&f.enable(9),R.alphaTest&&f.enable(10),R.vertexColors&&f.enable(11),R.vertexAlphas&&f.enable(12),R.vertexUv1s&&f.enable(13),R.vertexUv2s&&f.enable(14),R.vertexUv3s&&f.enable(15),R.vertexTangents&&f.enable(16),R.anisotropy&&f.enable(17),R.alphaHash&&f.enable(18),R.batching&&f.enable(19),R.dispersion&&f.enable(20),R.batchingColor&&f.enable(21),z.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.skinning&&f.enable(4),R.morphTargets&&f.enable(5),R.morphNormals&&f.enable(6),R.morphColors&&f.enable(7),R.premultipliedAlpha&&f.enable(8),R.shadowMapEnabled&&f.enable(9),R.doubleSided&&f.enable(10),R.flipSided&&f.enable(11),R.useDepthPacking&&f.enable(12),R.dithering&&f.enable(13),R.transmission&&f.enable(14),R.sheen&&f.enable(15),R.opaque&&f.enable(16),R.pointsUvs&&f.enable(17),R.decodeVideoTexture&&f.enable(18),R.alphaToCoverage&&f.enable(19),z.push(f.mask)}function L(z){const R=M[z.type];let H;if(R){const et=Hi[R];H=XM.clone(et.uniforms)}else H=z.uniforms;return H}function F(z,R){let H;for(let et=0,G=g.length;et<G;et++){const Q=g[et];if(Q.cacheKey===R){H=Q,++H.usedTimes;break}}return H===void 0&&(H=new i1(c,R,z,l),g.push(H)),H}function B(z){if(--z.usedTimes===0){const R=g.indexOf(z);g[R]=g[g.length-1],g.pop(),z.destroy()}}function O(z){d.remove(z)}function q(){d.dispose()}return{getParameters:x,getProgramCacheKey:y,getUniforms:L,acquireProgram:F,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:q}}function l1(){let c=new WeakMap;function t(l){let u=c.get(l);return u===void 0&&(u={},c.set(l,u)),u}function n(l){c.delete(l)}function a(l,u,f){c.get(l)[u]=f}function r(){c=new WeakMap}return{get:t,remove:n,update:a,dispose:r}}function c1(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function G0(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function V0(){const c=[];let t=0;const n=[],a=[],r=[];function l(){t=0,n.length=0,a.length=0,r.length=0}function u(_,v,S,M,b,x){let y=c[t];return y===void 0?(y={id:_.id,object:_,geometry:v,material:S,groupOrder:M,renderOrder:_.renderOrder,z:b,group:x},c[t]=y):(y.id=_.id,y.object=_,y.geometry=v,y.material=S,y.groupOrder=M,y.renderOrder=_.renderOrder,y.z=b,y.group=x),t++,y}function f(_,v,S,M,b,x){const y=u(_,v,S,M,b,x);S.transmission>0?a.push(y):S.transparent===!0?r.push(y):n.push(y)}function d(_,v,S,M,b,x){const y=u(_,v,S,M,b,x);S.transmission>0?a.unshift(y):S.transparent===!0?r.unshift(y):n.unshift(y)}function p(_,v){n.length>1&&n.sort(_||c1),a.length>1&&a.sort(v||G0),r.length>1&&r.sort(v||G0)}function g(){for(let _=t,v=c.length;_<v;_++){const S=c[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:r,init:l,push:f,unshift:d,finish:g,sort:p}}function u1(){let c=new WeakMap;function t(a,r){const l=c.get(a);let u;return l===void 0?(u=new V0,c.set(a,[u])):r>=l.length?(u=new V0,l.push(u)):u=l[r],u}function n(){c=new WeakMap}return{get:t,dispose:n}}function f1(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new it,color:new Re};break;case"SpotLight":n={position:new it,direction:new it,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new it,color:new Re,distance:0,decay:0};break;case"HemisphereLight":n={direction:new it,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":n={color:new Re,position:new it,halfWidth:new it,halfHeight:new it};break}return c[t.id]=n,n}}}function h1(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=n,n}}}let d1=0;function p1(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function m1(c){const t=new f1,n=h1(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new it);const r=new it,l=new en,u=new en;function f(p){let g=0,_=0,v=0;for(let z=0;z<9;z++)a.probe[z].set(0,0,0);let S=0,M=0,b=0,x=0,y=0,T=0,w=0,L=0,F=0,B=0,O=0;p.sort(p1);for(let z=0,R=p.length;z<R;z++){const H=p[z],et=H.color,G=H.intensity,Q=H.distance,K=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=et.r*G,_+=et.g*G,v+=et.b*G;else if(H.isLightProbe){for(let N=0;N<9;N++)a.probe[N].addScaledVector(H.sh.coefficients[N],G);O++}else if(H.isDirectionalLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Y=H.shadow,X=n.get(H);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,a.directionalShadow[S]=X,a.directionalShadowMap[S]=K,a.directionalShadowMatrix[S]=H.shadow.matrix,T++}a.directional[S]=N,S++}else if(H.isSpotLight){const N=t.get(H);N.position.setFromMatrixPosition(H.matrixWorld),N.color.copy(et).multiplyScalar(G),N.distance=Q,N.coneCos=Math.cos(H.angle),N.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),N.decay=H.decay,a.spot[b]=N;const Y=H.shadow;if(H.map&&(a.spotLightMap[F]=H.map,F++,Y.updateMatrices(H),H.castShadow&&B++),a.spotLightMatrix[b]=Y.matrix,H.castShadow){const X=n.get(H);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,a.spotShadow[b]=X,a.spotShadowMap[b]=K,L++}b++}else if(H.isRectAreaLight){const N=t.get(H);N.color.copy(et).multiplyScalar(G),N.halfWidth.set(H.width*.5,0,0),N.halfHeight.set(0,H.height*.5,0),a.rectArea[x]=N,x++}else if(H.isPointLight){const N=t.get(H);if(N.color.copy(H.color).multiplyScalar(H.intensity),N.distance=H.distance,N.decay=H.decay,H.castShadow){const Y=H.shadow,X=n.get(H);X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,a.pointShadow[M]=X,a.pointShadowMap[M]=K,a.pointShadowMatrix[M]=H.shadow.matrix,w++}a.point[M]=N,M++}else if(H.isHemisphereLight){const N=t.get(H);N.skyColor.copy(H.color).multiplyScalar(G),N.groundColor.copy(H.groundColor).multiplyScalar(G),a.hemi[y]=N,y++}}x>0&&(c.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Nt.LTC_FLOAT_1,a.rectAreaLTC2=Nt.LTC_FLOAT_2):(a.rectAreaLTC1=Nt.LTC_HALF_1,a.rectAreaLTC2=Nt.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=_,a.ambient[2]=v;const q=a.hash;(q.directionalLength!==S||q.pointLength!==M||q.spotLength!==b||q.rectAreaLength!==x||q.hemiLength!==y||q.numDirectionalShadows!==T||q.numPointShadows!==w||q.numSpotShadows!==L||q.numSpotMaps!==F||q.numLightProbes!==O)&&(a.directional.length=S,a.spot.length=b,a.rectArea.length=x,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=T,a.directionalShadowMap.length=T,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=L,a.spotShadowMap.length=L,a.directionalShadowMatrix.length=T,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=L+F-B,a.spotLightMap.length=F,a.numSpotLightShadowsWithMaps=B,a.numLightProbes=O,q.directionalLength=S,q.pointLength=M,q.spotLength=b,q.rectAreaLength=x,q.hemiLength=y,q.numDirectionalShadows=T,q.numPointShadows=w,q.numSpotShadows=L,q.numSpotMaps=F,q.numLightProbes=O,a.version=d1++)}function d(p,g){let _=0,v=0,S=0,M=0,b=0;const x=g.matrixWorldInverse;for(let y=0,T=p.length;y<T;y++){const w=p[y];if(w.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(x),_++}else if(w.isSpotLight){const L=a.spot[S];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(x),L.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(x),S++}else if(w.isRectAreaLight){const L=a.rectArea[M];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(x),u.identity(),l.copy(w.matrixWorld),l.premultiply(x),u.extractRotation(l),L.halfWidth.set(w.width*.5,0,0),L.halfHeight.set(0,w.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),M++}else if(w.isPointLight){const L=a.point[v];L.position.setFromMatrixPosition(w.matrixWorld),L.position.applyMatrix4(x),v++}else if(w.isHemisphereLight){const L=a.hemi[b];L.direction.setFromMatrixPosition(w.matrixWorld),L.direction.transformDirection(x),b++}}}return{setup:f,setupView:d,state:a}}function k0(c){const t=new m1(c),n=[],a=[];function r(g){p.camera=g,n.length=0,a.length=0}function l(g){n.push(g)}function u(g){a.push(g)}function f(){t.setup(n)}function d(g){t.setupView(n,g)}const p={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:p,setupLights:f,setupLightsView:d,pushLight:l,pushShadow:u}}function g1(c){let t=new WeakMap;function n(r,l=0){const u=t.get(r);let f;return u===void 0?(f=new k0(c),t.set(r,[f])):l>=u.length?(f=new k0(c),u.push(f)):f=u[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}class v1 extends cl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _1 extends cl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function S1(c,t,n){let a=new bd;const r=new se,l=new se,u=new yn,f=new v1({depthPacking:mM}),d=new _1,p={},g=n.maxTextureSize,_={[as]:jn,[jn]:as,[Gi]:Gi},v=new rs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:y1,fragmentShader:x1}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const M=new ls;M.setAttribute("position",new qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ci(M,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g_;let y=this.type;this.render=function(B,O,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||B.length===0)return;const z=c.getRenderTarget(),R=c.getActiveCubeFace(),H=c.getActiveMipmapLevel(),et=c.state;et.setBlending(ns),et.buffers.color.setClear(1,1,1,1),et.buffers.depth.setTest(!0),et.setScissorTest(!1);const G=y!==xa&&this.type===xa,Q=y===xa&&this.type!==xa;for(let K=0,N=B.length;K<N;K++){const Y=B[K],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const mt=X.getFrameExtents();if(r.multiply(mt),l.copy(X.mapSize),(r.x>g||r.y>g)&&(r.x>g&&(l.x=Math.floor(g/mt.x),r.x=l.x*mt.x,X.mapSize.x=l.x),r.y>g&&(l.y=Math.floor(g/mt.y),r.y=l.y*mt.y,X.mapSize.y=l.y)),X.map===null||G===!0||Q===!0){const I=this.type!==xa?{minFilter:vi,magFilter:vi}:{};X.map!==null&&X.map.dispose(),X.map=new Fs(r.x,r.y,I),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}c.setRenderTarget(X.map),c.clear();const Mt=X.getViewportCount();for(let I=0;I<Mt;I++){const Z=X.getViewport(I);u.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),et.viewport(u),X.updateMatrices(Y,I),a=X.getFrustum(),L(O,q,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===xa&&T(X,q),X.needsUpdate=!1}y=this.type,x.needsUpdate=!1,c.setRenderTarget(z,R,H)};function T(B,O){const q=t.update(b);v.defines.VSM_SAMPLES!==B.blurSamples&&(v.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Fs(r.x,r.y)),v.uniforms.shadow_pass.value=B.map.texture,v.uniforms.resolution.value=B.mapSize,v.uniforms.radius.value=B.radius,c.setRenderTarget(B.mapPass),c.clear(),c.renderBufferDirect(O,null,q,v,b,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,c.setRenderTarget(B.map),c.clear(),c.renderBufferDirect(O,null,q,S,b,null)}function w(B,O,q,z){let R=null;const H=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)R=H;else if(R=q.isPointLight===!0?d:f,c.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const et=R.uuid,G=O.uuid;let Q=p[et];Q===void 0&&(Q={},p[et]=Q);let K=Q[G];K===void 0&&(K=R.clone(),Q[G]=K,O.addEventListener("dispose",F)),R=K}if(R.visible=O.visible,R.wireframe=O.wireframe,z===xa?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const et=c.properties.get(R);et.light=q}return R}function L(B,O,q,z,R){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===xa)&&(!B.frustumCulled||a.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const G=t.update(B),Q=B.material;if(Array.isArray(Q)){const K=G.groups;for(let N=0,Y=K.length;N<Y;N++){const X=K[N],mt=Q[X.materialIndex];if(mt&&mt.visible){const Mt=w(B,mt,z,R);B.onBeforeShadow(c,B,O,q,G,Mt,X),c.renderBufferDirect(q,null,G,Mt,B,X),B.onAfterShadow(c,B,O,q,G,Mt,X)}}}else if(Q.visible){const K=w(B,Q,z,R);B.onBeforeShadow(c,B,O,q,G,K,null),c.renderBufferDirect(q,null,G,K,B,null),B.onAfterShadow(c,B,O,q,G,K,null)}}const et=B.children;for(let G=0,Q=et.length;G<Q;G++)L(et[G],O,q,z,R)}function F(B){B.target.removeEventListener("dispose",F);for(const q in p){const z=p[q],R=B.target.uuid;R in z&&(z[R].dispose(),delete z[R])}}}function M1(c){function t(){let A=!1;const ht=new yn;let rt=null;const dt=new yn(0,0,0,0);return{setMask:function(bt){rt!==bt&&!A&&(c.colorMask(bt,bt,bt,bt),rt=bt)},setLocked:function(bt){A=bt},setClear:function(bt,Gt,ee,Pe,Ke){Ke===!0&&(bt*=Pe,Gt*=Pe,ee*=Pe),ht.set(bt,Gt,ee,Pe),dt.equals(ht)===!1&&(c.clearColor(bt,Gt,ee,Pe),dt.copy(ht))},reset:function(){A=!1,rt=null,dt.set(-1,0,0,0)}}}function n(){let A=!1,ht=null,rt=null,dt=null;return{setTest:function(bt){bt?Et(c.DEPTH_TEST):St(c.DEPTH_TEST)},setMask:function(bt){ht!==bt&&!A&&(c.depthMask(bt),ht=bt)},setFunc:function(bt){if(rt!==bt){switch(bt){case GS:c.depthFunc(c.NEVER);break;case VS:c.depthFunc(c.ALWAYS);break;case kS:c.depthFunc(c.LESS);break;case $c:c.depthFunc(c.LEQUAL);break;case qS:c.depthFunc(c.EQUAL);break;case XS:c.depthFunc(c.GEQUAL);break;case WS:c.depthFunc(c.GREATER);break;case YS:c.depthFunc(c.NOTEQUAL);break;default:c.depthFunc(c.LEQUAL)}rt=bt}},setLocked:function(bt){A=bt},setClear:function(bt){dt!==bt&&(c.clearDepth(bt),dt=bt)},reset:function(){A=!1,ht=null,rt=null,dt=null}}}function a(){let A=!1,ht=null,rt=null,dt=null,bt=null,Gt=null,ee=null,Pe=null,Ke=null;return{setTest:function(Me){A||(Me?Et(c.STENCIL_TEST):St(c.STENCIL_TEST))},setMask:function(Me){ht!==Me&&!A&&(c.stencilMask(Me),ht=Me)},setFunc:function(Me,je,Ve){(rt!==Me||dt!==je||bt!==Ve)&&(c.stencilFunc(Me,je,Ve),rt=Me,dt=je,bt=Ve)},setOp:function(Me,je,Ve){(Gt!==Me||ee!==je||Pe!==Ve)&&(c.stencilOp(Me,je,Ve),Gt=Me,ee=je,Pe=Ve)},setLocked:function(Me){A=Me},setClear:function(Me){Ke!==Me&&(c.clearStencil(Me),Ke=Me)},reset:function(){A=!1,ht=null,rt=null,dt=null,bt=null,Gt=null,ee=null,Pe=null,Ke=null}}}const r=new t,l=new n,u=new a,f=new WeakMap,d=new WeakMap;let p={},g={},_=new WeakMap,v=[],S=null,M=!1,b=null,x=null,y=null,T=null,w=null,L=null,F=null,B=new Re(0,0,0),O=0,q=!1,z=null,R=null,H=null,et=null,G=null;const Q=c.getParameter(c.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,N=0;const Y=c.getParameter(c.VERSION);Y.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Y)[1]),K=N>=1):Y.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),K=N>=2);let X=null,mt={};const Mt=c.getParameter(c.SCISSOR_BOX),I=c.getParameter(c.VIEWPORT),Z=new yn().fromArray(Mt),yt=new yn().fromArray(I);function J(A,ht,rt,dt){const bt=new Uint8Array(4),Gt=c.createTexture();c.bindTexture(A,Gt),c.texParameteri(A,c.TEXTURE_MIN_FILTER,c.NEAREST),c.texParameteri(A,c.TEXTURE_MAG_FILTER,c.NEAREST);for(let ee=0;ee<rt;ee++)A===c.TEXTURE_3D||A===c.TEXTURE_2D_ARRAY?c.texImage3D(ht,0,c.RGBA,1,1,dt,0,c.RGBA,c.UNSIGNED_BYTE,bt):c.texImage2D(ht+ee,0,c.RGBA,1,1,0,c.RGBA,c.UNSIGNED_BYTE,bt);return Gt}const pt={};pt[c.TEXTURE_2D]=J(c.TEXTURE_2D,c.TEXTURE_2D,1),pt[c.TEXTURE_CUBE_MAP]=J(c.TEXTURE_CUBE_MAP,c.TEXTURE_CUBE_MAP_POSITIVE_X,6),pt[c.TEXTURE_2D_ARRAY]=J(c.TEXTURE_2D_ARRAY,c.TEXTURE_2D_ARRAY,1,1),pt[c.TEXTURE_3D]=J(c.TEXTURE_3D,c.TEXTURE_3D,1,1),r.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Et(c.DEPTH_TEST),l.setFunc($c),jt(!1),me(bv),Et(c.CULL_FACE),fe(ns);function Et(A){p[A]!==!0&&(c.enable(A),p[A]=!0)}function St(A){p[A]!==!1&&(c.disable(A),p[A]=!1)}function Yt(A,ht){return g[A]!==ht?(c.bindFramebuffer(A,ht),g[A]=ht,A===c.DRAW_FRAMEBUFFER&&(g[c.FRAMEBUFFER]=ht),A===c.FRAMEBUFFER&&(g[c.DRAW_FRAMEBUFFER]=ht),!0):!1}function It(A,ht){let rt=v,dt=!1;if(A){rt=_.get(ht),rt===void 0&&(rt=[],_.set(ht,rt));const bt=A.textures;if(rt.length!==bt.length||rt[0]!==c.COLOR_ATTACHMENT0){for(let Gt=0,ee=bt.length;Gt<ee;Gt++)rt[Gt]=c.COLOR_ATTACHMENT0+Gt;rt.length=bt.length,dt=!0}}else rt[0]!==c.BACK&&(rt[0]=c.BACK,dt=!0);dt&&c.drawBuffers(rt)}function re(A){return S!==A?(c.useProgram(A),S=A,!0):!1}const j={[Os]:c.FUNC_ADD,[bS]:c.FUNC_SUBTRACT,[TS]:c.FUNC_REVERSE_SUBTRACT};j[AS]=c.MIN,j[wS]=c.MAX;const ue={[RS]:c.ZERO,[CS]:c.ONE,[DS]:c.SRC_COLOR,[hd]:c.SRC_ALPHA,[PS]:c.SRC_ALPHA_SATURATE,[OS]:c.DST_COLOR,[US]:c.DST_ALPHA,[LS]:c.ONE_MINUS_SRC_COLOR,[dd]:c.ONE_MINUS_SRC_ALPHA,[zS]:c.ONE_MINUS_DST_COLOR,[NS]:c.ONE_MINUS_DST_ALPHA,[BS]:c.CONSTANT_COLOR,[IS]:c.ONE_MINUS_CONSTANT_COLOR,[FS]:c.CONSTANT_ALPHA,[HS]:c.ONE_MINUS_CONSTANT_ALPHA};function fe(A,ht,rt,dt,bt,Gt,ee,Pe,Ke,Me){if(A===ns){M===!0&&(St(c.BLEND),M=!1);return}if(M===!1&&(Et(c.BLEND),M=!0),A!==ES){if(A!==b||Me!==q){if((x!==Os||w!==Os)&&(c.blendEquation(c.FUNC_ADD),x=Os,w=Os),Me)switch(A){case Yr:c.blendFuncSeparate(c.ONE,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case Tv:c.blendFunc(c.ONE,c.ONE);break;case Av:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case wv:c.blendFuncSeparate(c.ZERO,c.SRC_COLOR,c.ZERO,c.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Yr:c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA);break;case Tv:c.blendFunc(c.SRC_ALPHA,c.ONE);break;case Av:c.blendFuncSeparate(c.ZERO,c.ONE_MINUS_SRC_COLOR,c.ZERO,c.ONE);break;case wv:c.blendFunc(c.ZERO,c.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}y=null,T=null,L=null,F=null,B.set(0,0,0),O=0,b=A,q=Me}return}bt=bt||ht,Gt=Gt||rt,ee=ee||dt,(ht!==x||bt!==w)&&(c.blendEquationSeparate(j[ht],j[bt]),x=ht,w=bt),(rt!==y||dt!==T||Gt!==L||ee!==F)&&(c.blendFuncSeparate(ue[rt],ue[dt],ue[Gt],ue[ee]),y=rt,T=dt,L=Gt,F=ee),(Pe.equals(B)===!1||Ke!==O)&&(c.blendColor(Pe.r,Pe.g,Pe.b,Ke),B.copy(Pe),O=Ke),b=A,q=!1}function Se(A,ht){A.side===Gi?St(c.CULL_FACE):Et(c.CULL_FACE);let rt=A.side===jn;ht&&(rt=!rt),jt(rt),A.blending===Yr&&A.transparent===!1?fe(ns):fe(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),r.setMask(A.colorWrite);const dt=A.stencilWrite;u.setTest(dt),dt&&(u.setMask(A.stencilWriteMask),u.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),u.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),ne(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?Et(c.SAMPLE_ALPHA_TO_COVERAGE):St(c.SAMPLE_ALPHA_TO_COVERAGE)}function jt(A){z!==A&&(A?c.frontFace(c.CW):c.frontFace(c.CCW),z=A)}function me(A){A!==xS?(Et(c.CULL_FACE),A!==R&&(A===bv?c.cullFace(c.BACK):A===SS?c.cullFace(c.FRONT):c.cullFace(c.FRONT_AND_BACK))):St(c.CULL_FACE),R=A}function le(A){A!==H&&(K&&c.lineWidth(A),H=A)}function ne(A,ht,rt){A?(Et(c.POLYGON_OFFSET_FILL),(et!==ht||G!==rt)&&(c.polygonOffset(ht,rt),et=ht,G=rt)):St(c.POLYGON_OFFSET_FILL)}function He(A){A?Et(c.SCISSOR_TEST):St(c.SCISSOR_TEST)}function V(A){A===void 0&&(A=c.TEXTURE0+Q-1),X!==A&&(c.activeTexture(A),X=A)}function U(A,ht,rt){rt===void 0&&(X===null?rt=c.TEXTURE0+Q-1:rt=X);let dt=mt[rt];dt===void 0&&(dt={type:void 0,texture:void 0},mt[rt]=dt),(dt.type!==A||dt.texture!==ht)&&(X!==rt&&(c.activeTexture(rt),X=rt),c.bindTexture(A,ht||pt[A]),dt.type=A,dt.texture=ht)}function ft(){const A=mt[X];A!==void 0&&A.type!==void 0&&(c.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function Tt(){try{c.compressedTexImage2D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function xt(){try{c.compressedTexImage3D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function At(){try{c.texSubImage2D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function qt(){try{c.texSubImage3D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Lt(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Dt(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ie(){try{c.texStorage2D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function wt(){try{c.texStorage3D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Vt(){try{c.texImage2D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function he(){try{c.texImage3D.apply(c,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Qt(A){Z.equals(A)===!1&&(c.scissor(A.x,A.y,A.z,A.w),Z.copy(A))}function Ct(A){yt.equals(A)===!1&&(c.viewport(A.x,A.y,A.z,A.w),yt.copy(A))}function $t(A,ht){let rt=d.get(ht);rt===void 0&&(rt=new WeakMap,d.set(ht,rt));let dt=rt.get(A);dt===void 0&&(dt=c.getUniformBlockIndex(ht,A.name),rt.set(A,dt))}function Xt(A,ht){const dt=d.get(ht).get(A);f.get(ht)!==dt&&(c.uniformBlockBinding(ht,dt,A.__bindingPointIndex),f.set(ht,dt))}function Ye(){c.disable(c.BLEND),c.disable(c.CULL_FACE),c.disable(c.DEPTH_TEST),c.disable(c.POLYGON_OFFSET_FILL),c.disable(c.SCISSOR_TEST),c.disable(c.STENCIL_TEST),c.disable(c.SAMPLE_ALPHA_TO_COVERAGE),c.blendEquation(c.FUNC_ADD),c.blendFunc(c.ONE,c.ZERO),c.blendFuncSeparate(c.ONE,c.ZERO,c.ONE,c.ZERO),c.blendColor(0,0,0,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(c.LESS),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(c.ALWAYS,0,4294967295),c.stencilOp(c.KEEP,c.KEEP,c.KEEP),c.clearStencil(0),c.cullFace(c.BACK),c.frontFace(c.CCW),c.polygonOffset(0,0),c.activeTexture(c.TEXTURE0),c.bindFramebuffer(c.FRAMEBUFFER,null),c.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),c.bindFramebuffer(c.READ_FRAMEBUFFER,null),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),p={},X=null,mt={},g={},_=new WeakMap,v=[],S=null,M=!1,b=null,x=null,y=null,T=null,w=null,L=null,F=null,B=new Re(0,0,0),O=0,q=!1,z=null,R=null,H=null,et=null,G=null,Z.set(0,0,c.canvas.width,c.canvas.height),yt.set(0,0,c.canvas.width,c.canvas.height),r.reset(),l.reset(),u.reset()}return{buffers:{color:r,depth:l,stencil:u},enable:Et,disable:St,bindFramebuffer:Yt,drawBuffers:It,useProgram:re,setBlending:fe,setMaterial:Se,setFlipSided:jt,setCullFace:me,setLineWidth:le,setPolygonOffset:ne,setScissorTest:He,activeTexture:V,bindTexture:U,unbindTexture:ft,compressedTexImage2D:Tt,compressedTexImage3D:xt,texImage2D:Vt,texImage3D:he,updateUBOMapping:$t,uniformBlockBinding:Xt,texStorage2D:ie,texStorage3D:wt,texSubImage2D:At,texSubImage3D:qt,compressedTexSubImage2D:Lt,compressedTexSubImage3D:Dt,scissor:Qt,viewport:Ct,reset:Ye}}function E1(c,t,n,a,r,l,u){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(V,U){return S?new OffscreenCanvas(V,U):su("canvas")}function b(V,U,ft){let Tt=1;const xt=He(V);if((xt.width>ft||xt.height>ft)&&(Tt=ft/Math.max(xt.width,xt.height)),Tt<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){const At=Math.floor(Tt*xt.width),qt=Math.floor(Tt*xt.height);_===void 0&&(_=M(At,qt));const Lt=U?M(At,qt):_;return Lt.width=At,Lt.height=qt,Lt.getContext("2d").drawImage(V,0,0,At,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+At+"x"+qt+")."),Lt}else return"data"in V&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),V;return V}function x(V){return V.generateMipmaps&&V.minFilter!==vi&&V.minFilter!==Ri}function y(V){c.generateMipmap(V)}function T(V,U,ft,Tt,xt=!1){if(V!==null){if(c[V]!==void 0)return c[V];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let At=U;if(U===c.RED&&(ft===c.FLOAT&&(At=c.R32F),ft===c.HALF_FLOAT&&(At=c.R16F),ft===c.UNSIGNED_BYTE&&(At=c.R8)),U===c.RED_INTEGER&&(ft===c.UNSIGNED_BYTE&&(At=c.R8UI),ft===c.UNSIGNED_SHORT&&(At=c.R16UI),ft===c.UNSIGNED_INT&&(At=c.R32UI),ft===c.BYTE&&(At=c.R8I),ft===c.SHORT&&(At=c.R16I),ft===c.INT&&(At=c.R32I)),U===c.RG&&(ft===c.FLOAT&&(At=c.RG32F),ft===c.HALF_FLOAT&&(At=c.RG16F),ft===c.UNSIGNED_BYTE&&(At=c.RG8)),U===c.RG_INTEGER&&(ft===c.UNSIGNED_BYTE&&(At=c.RG8UI),ft===c.UNSIGNED_SHORT&&(At=c.RG16UI),ft===c.UNSIGNED_INT&&(At=c.RG32UI),ft===c.BYTE&&(At=c.RG8I),ft===c.SHORT&&(At=c.RG16I),ft===c.INT&&(At=c.RG32I)),U===c.RGB&&ft===c.UNSIGNED_INT_5_9_9_9_REV&&(At=c.RGB9_E5),U===c.RGBA){const qt=xt?eu:ze.getTransfer(Tt);ft===c.FLOAT&&(At=c.RGBA32F),ft===c.HALF_FLOAT&&(At=c.RGBA16F),ft===c.UNSIGNED_BYTE&&(At=qt===We?c.SRGB8_ALPHA8:c.RGBA8),ft===c.UNSIGNED_SHORT_4_4_4_4&&(At=c.RGBA4),ft===c.UNSIGNED_SHORT_5_5_5_1&&(At=c.RGB5_A1)}return(At===c.R16F||At===c.R32F||At===c.RG16F||At===c.RG32F||At===c.RGBA16F||At===c.RGBA32F)&&t.get("EXT_color_buffer_float"),At}function w(V,U){let ft;return V?U===null||U===Jr||U===$r?ft=c.DEPTH24_STENCIL8:U===es?ft=c.DEPTH32F_STENCIL8:U===tu&&(ft=c.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):U===null||U===Jr||U===$r?ft=c.DEPTH_COMPONENT24:U===es?ft=c.DEPTH_COMPONENT32F:U===tu&&(ft=c.DEPTH_COMPONENT16),ft}function L(V,U){return x(V)===!0||V.isFramebufferTexture&&V.minFilter!==vi&&V.minFilter!==Ri?Math.log2(Math.max(U.width,U.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?U.mipmaps.length:1}function F(V){const U=V.target;U.removeEventListener("dispose",F),O(U),U.isVideoTexture&&g.delete(U)}function B(V){const U=V.target;U.removeEventListener("dispose",B),z(U)}function O(V){const U=a.get(V);if(U.__webglInit===void 0)return;const ft=V.source,Tt=v.get(ft);if(Tt){const xt=Tt[U.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&q(V),Object.keys(Tt).length===0&&v.delete(ft)}a.remove(V)}function q(V){const U=a.get(V);c.deleteTexture(U.__webglTexture);const ft=V.source,Tt=v.get(ft);delete Tt[U.__cacheKey],u.memory.textures--}function z(V){const U=a.get(V);if(V.depthTexture&&V.depthTexture.dispose(),V.isWebGLCubeRenderTarget)for(let Tt=0;Tt<6;Tt++){if(Array.isArray(U.__webglFramebuffer[Tt]))for(let xt=0;xt<U.__webglFramebuffer[Tt].length;xt++)c.deleteFramebuffer(U.__webglFramebuffer[Tt][xt]);else c.deleteFramebuffer(U.__webglFramebuffer[Tt]);U.__webglDepthbuffer&&c.deleteRenderbuffer(U.__webglDepthbuffer[Tt])}else{if(Array.isArray(U.__webglFramebuffer))for(let Tt=0;Tt<U.__webglFramebuffer.length;Tt++)c.deleteFramebuffer(U.__webglFramebuffer[Tt]);else c.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&c.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&c.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let Tt=0;Tt<U.__webglColorRenderbuffer.length;Tt++)U.__webglColorRenderbuffer[Tt]&&c.deleteRenderbuffer(U.__webglColorRenderbuffer[Tt]);U.__webglDepthRenderbuffer&&c.deleteRenderbuffer(U.__webglDepthRenderbuffer)}const ft=V.textures;for(let Tt=0,xt=ft.length;Tt<xt;Tt++){const At=a.get(ft[Tt]);At.__webglTexture&&(c.deleteTexture(At.__webglTexture),u.memory.textures--),a.remove(ft[Tt])}a.remove(V)}let R=0;function H(){R=0}function et(){const V=R;return V>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+V+" texture units while this GPU supports only "+r.maxTextures),R+=1,V}function G(V){const U=[];return U.push(V.wrapS),U.push(V.wrapT),U.push(V.wrapR||0),U.push(V.magFilter),U.push(V.minFilter),U.push(V.anisotropy),U.push(V.internalFormat),U.push(V.format),U.push(V.type),U.push(V.generateMipmaps),U.push(V.premultiplyAlpha),U.push(V.flipY),U.push(V.unpackAlignment),U.push(V.colorSpace),U.join()}function Q(V,U){const ft=a.get(V);if(V.isVideoTexture&&le(V),V.isRenderTargetTexture===!1&&V.version>0&&ft.__version!==V.version){const Tt=V.image;if(Tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{yt(ft,V,U);return}}n.bindTexture(c.TEXTURE_2D,ft.__webglTexture,c.TEXTURE0+U)}function K(V,U){const ft=a.get(V);if(V.version>0&&ft.__version!==V.version){yt(ft,V,U);return}n.bindTexture(c.TEXTURE_2D_ARRAY,ft.__webglTexture,c.TEXTURE0+U)}function N(V,U){const ft=a.get(V);if(V.version>0&&ft.__version!==V.version){yt(ft,V,U);return}n.bindTexture(c.TEXTURE_3D,ft.__webglTexture,c.TEXTURE0+U)}function Y(V,U){const ft=a.get(V);if(V.version>0&&ft.__version!==V.version){J(ft,V,U);return}n.bindTexture(c.TEXTURE_CUBE_MAP,ft.__webglTexture,c.TEXTURE0+U)}const X={[gd]:c.REPEAT,[Bs]:c.CLAMP_TO_EDGE,[vd]:c.MIRRORED_REPEAT},mt={[vi]:c.NEAREST,[iM]:c.NEAREST_MIPMAP_NEAREST,[Mc]:c.NEAREST_MIPMAP_LINEAR,[Ri]:c.LINEAR,[Th]:c.LINEAR_MIPMAP_NEAREST,[Is]:c.LINEAR_MIPMAP_LINEAR},Mt={[vM]:c.NEVER,[EM]:c.ALWAYS,[_M]:c.LESS,[A_]:c.LEQUAL,[yM]:c.EQUAL,[MM]:c.GEQUAL,[xM]:c.GREATER,[SM]:c.NOTEQUAL};function I(V,U){if(U.type===es&&t.has("OES_texture_float_linear")===!1&&(U.magFilter===Ri||U.magFilter===Th||U.magFilter===Mc||U.magFilter===Is||U.minFilter===Ri||U.minFilter===Th||U.minFilter===Mc||U.minFilter===Is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),c.texParameteri(V,c.TEXTURE_WRAP_S,X[U.wrapS]),c.texParameteri(V,c.TEXTURE_WRAP_T,X[U.wrapT]),(V===c.TEXTURE_3D||V===c.TEXTURE_2D_ARRAY)&&c.texParameteri(V,c.TEXTURE_WRAP_R,X[U.wrapR]),c.texParameteri(V,c.TEXTURE_MAG_FILTER,mt[U.magFilter]),c.texParameteri(V,c.TEXTURE_MIN_FILTER,mt[U.minFilter]),U.compareFunction&&(c.texParameteri(V,c.TEXTURE_COMPARE_MODE,c.COMPARE_REF_TO_TEXTURE),c.texParameteri(V,c.TEXTURE_COMPARE_FUNC,Mt[U.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(U.magFilter===vi||U.minFilter!==Mc&&U.minFilter!==Is||U.type===es&&t.has("OES_texture_float_linear")===!1)return;if(U.anisotropy>1||a.get(U).__currentAnisotropy){const ft=t.get("EXT_texture_filter_anisotropic");c.texParameterf(V,ft.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(U.anisotropy,r.getMaxAnisotropy())),a.get(U).__currentAnisotropy=U.anisotropy}}}function Z(V,U){let ft=!1;V.__webglInit===void 0&&(V.__webglInit=!0,U.addEventListener("dispose",F));const Tt=U.source;let xt=v.get(Tt);xt===void 0&&(xt={},v.set(Tt,xt));const At=G(U);if(At!==V.__cacheKey){xt[At]===void 0&&(xt[At]={texture:c.createTexture(),usedTimes:0},u.memory.textures++,ft=!0),xt[At].usedTimes++;const qt=xt[V.__cacheKey];qt!==void 0&&(xt[V.__cacheKey].usedTimes--,qt.usedTimes===0&&q(U)),V.__cacheKey=At,V.__webglTexture=xt[At].texture}return ft}function yt(V,U,ft){let Tt=c.TEXTURE_2D;(U.isDataArrayTexture||U.isCompressedArrayTexture)&&(Tt=c.TEXTURE_2D_ARRAY),U.isData3DTexture&&(Tt=c.TEXTURE_3D);const xt=Z(V,U),At=U.source;n.bindTexture(Tt,V.__webglTexture,c.TEXTURE0+ft);const qt=a.get(At);if(At.version!==qt.__version||xt===!0){n.activeTexture(c.TEXTURE0+ft);const Lt=ze.getPrimaries(ze.workingColorSpace),Dt=U.colorSpace===ts?null:ze.getPrimaries(U.colorSpace),ie=U.colorSpace===ts||Lt===Dt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,U.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,U.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let wt=b(U.image,!1,r.maxTextureSize);wt=ne(U,wt);const Vt=l.convert(U.format,U.colorSpace),he=l.convert(U.type);let Qt=T(U.internalFormat,Vt,he,U.colorSpace,U.isVideoTexture);I(Tt,U);let Ct;const $t=U.mipmaps,Xt=U.isVideoTexture!==!0,Ye=qt.__version===void 0||xt===!0,A=At.dataReady,ht=L(U,wt);if(U.isDepthTexture)Qt=w(U.format===to,U.type),Ye&&(Xt?n.texStorage2D(c.TEXTURE_2D,1,Qt,wt.width,wt.height):n.texImage2D(c.TEXTURE_2D,0,Qt,wt.width,wt.height,0,Vt,he,null));else if(U.isDataTexture)if($t.length>0){Xt&&Ye&&n.texStorage2D(c.TEXTURE_2D,ht,Qt,$t[0].width,$t[0].height);for(let rt=0,dt=$t.length;rt<dt;rt++)Ct=$t[rt],Xt?A&&n.texSubImage2D(c.TEXTURE_2D,rt,0,0,Ct.width,Ct.height,Vt,he,Ct.data):n.texImage2D(c.TEXTURE_2D,rt,Qt,Ct.width,Ct.height,0,Vt,he,Ct.data);U.generateMipmaps=!1}else Xt?(Ye&&n.texStorage2D(c.TEXTURE_2D,ht,Qt,wt.width,wt.height),A&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,wt.width,wt.height,Vt,he,wt.data)):n.texImage2D(c.TEXTURE_2D,0,Qt,wt.width,wt.height,0,Vt,he,wt.data);else if(U.isCompressedTexture)if(U.isCompressedArrayTexture){Xt&&Ye&&n.texStorage3D(c.TEXTURE_2D_ARRAY,ht,Qt,$t[0].width,$t[0].height,wt.depth);for(let rt=0,dt=$t.length;rt<dt;rt++)if(Ct=$t[rt],U.format!==ki)if(Vt!==null)if(Xt){if(A)if(U.layerUpdates.size>0){for(const bt of U.layerUpdates){const Gt=Ct.width*Ct.height;n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,rt,0,0,bt,Ct.width,Ct.height,1,Vt,Ct.data.slice(Gt*bt,Gt*(bt+1)),0,0)}U.clearLayerUpdates()}else n.compressedTexSubImage3D(c.TEXTURE_2D_ARRAY,rt,0,0,0,Ct.width,Ct.height,wt.depth,Vt,Ct.data,0,0)}else n.compressedTexImage3D(c.TEXTURE_2D_ARRAY,rt,Qt,Ct.width,Ct.height,wt.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?A&&n.texSubImage3D(c.TEXTURE_2D_ARRAY,rt,0,0,0,Ct.width,Ct.height,wt.depth,Vt,he,Ct.data):n.texImage3D(c.TEXTURE_2D_ARRAY,rt,Qt,Ct.width,Ct.height,wt.depth,0,Vt,he,Ct.data)}else{Xt&&Ye&&n.texStorage2D(c.TEXTURE_2D,ht,Qt,$t[0].width,$t[0].height);for(let rt=0,dt=$t.length;rt<dt;rt++)Ct=$t[rt],U.format!==ki?Vt!==null?Xt?A&&n.compressedTexSubImage2D(c.TEXTURE_2D,rt,0,0,Ct.width,Ct.height,Vt,Ct.data):n.compressedTexImage2D(c.TEXTURE_2D,rt,Qt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?A&&n.texSubImage2D(c.TEXTURE_2D,rt,0,0,Ct.width,Ct.height,Vt,he,Ct.data):n.texImage2D(c.TEXTURE_2D,rt,Qt,Ct.width,Ct.height,0,Vt,he,Ct.data)}else if(U.isDataArrayTexture)if(Xt){if(Ye&&n.texStorage3D(c.TEXTURE_2D_ARRAY,ht,Qt,wt.width,wt.height,wt.depth),A)if(U.layerUpdates.size>0){let rt;switch(he){case c.UNSIGNED_BYTE:switch(Vt){case c.ALPHA:rt=1;break;case c.LUMINANCE:rt=1;break;case c.LUMINANCE_ALPHA:rt=2;break;case c.RGB:rt=3;break;case c.RGBA:rt=4;break;default:throw new Error(`Unknown texel size for format ${Vt}.`)}break;case c.UNSIGNED_SHORT_4_4_4_4:case c.UNSIGNED_SHORT_5_5_5_1:case c.UNSIGNED_SHORT_5_6_5:rt=1;break;default:throw new Error(`Unknown texel size for type ${he}.`)}const dt=wt.width*wt.height*rt;for(const bt of U.layerUpdates)n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,bt,wt.width,wt.height,1,Vt,he,wt.data.slice(dt*bt,dt*(bt+1)));U.clearLayerUpdates()}else n.texSubImage3D(c.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Vt,he,wt.data)}else n.texImage3D(c.TEXTURE_2D_ARRAY,0,Qt,wt.width,wt.height,wt.depth,0,Vt,he,wt.data);else if(U.isData3DTexture)Xt?(Ye&&n.texStorage3D(c.TEXTURE_3D,ht,Qt,wt.width,wt.height,wt.depth),A&&n.texSubImage3D(c.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Vt,he,wt.data)):n.texImage3D(c.TEXTURE_3D,0,Qt,wt.width,wt.height,wt.depth,0,Vt,he,wt.data);else if(U.isFramebufferTexture){if(Ye)if(Xt)n.texStorage2D(c.TEXTURE_2D,ht,Qt,wt.width,wt.height);else{let rt=wt.width,dt=wt.height;for(let bt=0;bt<ht;bt++)n.texImage2D(c.TEXTURE_2D,bt,Qt,rt,dt,0,Vt,he,null),rt>>=1,dt>>=1}}else if($t.length>0){if(Xt&&Ye){const rt=He($t[0]);n.texStorage2D(c.TEXTURE_2D,ht,Qt,rt.width,rt.height)}for(let rt=0,dt=$t.length;rt<dt;rt++)Ct=$t[rt],Xt?A&&n.texSubImage2D(c.TEXTURE_2D,rt,0,0,Vt,he,Ct):n.texImage2D(c.TEXTURE_2D,rt,Qt,Vt,he,Ct);U.generateMipmaps=!1}else if(Xt){if(Ye){const rt=He(wt);n.texStorage2D(c.TEXTURE_2D,ht,Qt,rt.width,rt.height)}A&&n.texSubImage2D(c.TEXTURE_2D,0,0,0,Vt,he,wt)}else n.texImage2D(c.TEXTURE_2D,0,Qt,Vt,he,wt);x(U)&&y(Tt),qt.__version=At.version,U.onUpdate&&U.onUpdate(U)}V.__version=U.version}function J(V,U,ft){if(U.image.length!==6)return;const Tt=Z(V,U),xt=U.source;n.bindTexture(c.TEXTURE_CUBE_MAP,V.__webglTexture,c.TEXTURE0+ft);const At=a.get(xt);if(xt.version!==At.__version||Tt===!0){n.activeTexture(c.TEXTURE0+ft);const qt=ze.getPrimaries(ze.workingColorSpace),Lt=U.colorSpace===ts?null:ze.getPrimaries(U.colorSpace),Dt=U.colorSpace===ts||qt===Lt?c.NONE:c.BROWSER_DEFAULT_WEBGL;c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL,U.flipY),c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),c.pixelStorei(c.UNPACK_ALIGNMENT,U.unpackAlignment),c.pixelStorei(c.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const ie=U.isCompressedTexture||U.image[0].isCompressedTexture,wt=U.image[0]&&U.image[0].isDataTexture,Vt=[];for(let dt=0;dt<6;dt++)!ie&&!wt?Vt[dt]=b(U.image[dt],!0,r.maxCubemapSize):Vt[dt]=wt?U.image[dt].image:U.image[dt],Vt[dt]=ne(U,Vt[dt]);const he=Vt[0],Qt=l.convert(U.format,U.colorSpace),Ct=l.convert(U.type),$t=T(U.internalFormat,Qt,Ct,U.colorSpace),Xt=U.isVideoTexture!==!0,Ye=At.__version===void 0||Tt===!0,A=xt.dataReady;let ht=L(U,he);I(c.TEXTURE_CUBE_MAP,U);let rt;if(ie){Xt&&Ye&&n.texStorage2D(c.TEXTURE_CUBE_MAP,ht,$t,he.width,he.height);for(let dt=0;dt<6;dt++){rt=Vt[dt].mipmaps;for(let bt=0;bt<rt.length;bt++){const Gt=rt[bt];U.format!==ki?Qt!==null?Xt?A&&n.compressedTexSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,Gt.width,Gt.height,Qt,Gt.data):n.compressedTexImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,$t,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?A&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,0,0,Gt.width,Gt.height,Qt,Ct,Gt.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt,$t,Gt.width,Gt.height,0,Qt,Ct,Gt.data)}}}else{if(rt=U.mipmaps,Xt&&Ye){rt.length>0&&ht++;const dt=He(Vt[0]);n.texStorage2D(c.TEXTURE_CUBE_MAP,ht,$t,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(wt){Xt?A&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Vt[dt].width,Vt[dt].height,Qt,Ct,Vt[dt].data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,$t,Vt[dt].width,Vt[dt].height,0,Qt,Ct,Vt[dt].data);for(let bt=0;bt<rt.length;bt++){const ee=rt[bt].image[dt].image;Xt?A&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,ee.width,ee.height,Qt,Ct,ee.data):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,$t,ee.width,ee.height,0,Qt,Ct,ee.data)}}else{Xt?A&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Qt,Ct,Vt[dt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,$t,Qt,Ct,Vt[dt]);for(let bt=0;bt<rt.length;bt++){const Gt=rt[bt];Xt?A&&n.texSubImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,0,0,Qt,Ct,Gt.image[dt]):n.texImage2D(c.TEXTURE_CUBE_MAP_POSITIVE_X+dt,bt+1,$t,Qt,Ct,Gt.image[dt])}}}x(U)&&y(c.TEXTURE_CUBE_MAP),At.__version=xt.version,U.onUpdate&&U.onUpdate(U)}V.__version=U.version}function pt(V,U,ft,Tt,xt,At){const qt=l.convert(ft.format,ft.colorSpace),Lt=l.convert(ft.type),Dt=T(ft.internalFormat,qt,Lt,ft.colorSpace);if(!a.get(U).__hasExternalTextures){const wt=Math.max(1,U.width>>At),Vt=Math.max(1,U.height>>At);xt===c.TEXTURE_3D||xt===c.TEXTURE_2D_ARRAY?n.texImage3D(xt,At,Dt,wt,Vt,U.depth,0,qt,Lt,null):n.texImage2D(xt,At,Dt,wt,Vt,0,qt,Lt,null)}n.bindFramebuffer(c.FRAMEBUFFER,V),me(U)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,Tt,xt,a.get(ft).__webglTexture,0,jt(U)):(xt===c.TEXTURE_2D||xt>=c.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=c.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&c.framebufferTexture2D(c.FRAMEBUFFER,Tt,xt,a.get(ft).__webglTexture,At),n.bindFramebuffer(c.FRAMEBUFFER,null)}function Et(V,U,ft){if(c.bindRenderbuffer(c.RENDERBUFFER,V),U.depthBuffer){const Tt=U.depthTexture,xt=Tt&&Tt.isDepthTexture?Tt.type:null,At=w(U.stencilBuffer,xt),qt=U.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,Lt=jt(U);me(U)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,Lt,At,U.width,U.height):ft?c.renderbufferStorageMultisample(c.RENDERBUFFER,Lt,At,U.width,U.height):c.renderbufferStorage(c.RENDERBUFFER,At,U.width,U.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,qt,c.RENDERBUFFER,V)}else{const Tt=U.textures;for(let xt=0;xt<Tt.length;xt++){const At=Tt[xt],qt=l.convert(At.format,At.colorSpace),Lt=l.convert(At.type),Dt=T(At.internalFormat,qt,Lt,At.colorSpace),ie=jt(U);ft&&me(U)===!1?c.renderbufferStorageMultisample(c.RENDERBUFFER,ie,Dt,U.width,U.height):me(U)?f.renderbufferStorageMultisampleEXT(c.RENDERBUFFER,ie,Dt,U.width,U.height):c.renderbufferStorage(c.RENDERBUFFER,Dt,U.width,U.height)}}c.bindRenderbuffer(c.RENDERBUFFER,null)}function St(V,U){if(U&&U.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(c.FRAMEBUFFER,V),!(U.depthTexture&&U.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!a.get(U.depthTexture).__webglTexture||U.depthTexture.image.width!==U.width||U.depthTexture.image.height!==U.height)&&(U.depthTexture.image.width=U.width,U.depthTexture.image.height=U.height,U.depthTexture.needsUpdate=!0),Q(U.depthTexture,0);const Tt=a.get(U.depthTexture).__webglTexture,xt=jt(U);if(U.depthTexture.format===jr)me(U)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,Tt,0,xt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_ATTACHMENT,c.TEXTURE_2D,Tt,0);else if(U.depthTexture.format===to)me(U)?f.framebufferTexture2DMultisampleEXT(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,Tt,0,xt):c.framebufferTexture2D(c.FRAMEBUFFER,c.DEPTH_STENCIL_ATTACHMENT,c.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function Yt(V){const U=a.get(V),ft=V.isWebGLCubeRenderTarget===!0;if(V.depthTexture&&!U.__autoAllocateDepthBuffer){if(ft)throw new Error("target.depthTexture not supported in Cube render targets");St(U.__webglFramebuffer,V)}else if(ft){U.__webglDepthbuffer=[];for(let Tt=0;Tt<6;Tt++)n.bindFramebuffer(c.FRAMEBUFFER,U.__webglFramebuffer[Tt]),U.__webglDepthbuffer[Tt]=c.createRenderbuffer(),Et(U.__webglDepthbuffer[Tt],V,!1)}else n.bindFramebuffer(c.FRAMEBUFFER,U.__webglFramebuffer),U.__webglDepthbuffer=c.createRenderbuffer(),Et(U.__webglDepthbuffer,V,!1);n.bindFramebuffer(c.FRAMEBUFFER,null)}function It(V,U,ft){const Tt=a.get(V);U!==void 0&&pt(Tt.__webglFramebuffer,V,V.texture,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,0),ft!==void 0&&Yt(V)}function re(V){const U=V.texture,ft=a.get(V),Tt=a.get(U);V.addEventListener("dispose",B);const xt=V.textures,At=V.isWebGLCubeRenderTarget===!0,qt=xt.length>1;if(qt||(Tt.__webglTexture===void 0&&(Tt.__webglTexture=c.createTexture()),Tt.__version=U.version,u.memory.textures++),At){ft.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(U.mipmaps&&U.mipmaps.length>0){ft.__webglFramebuffer[Lt]=[];for(let Dt=0;Dt<U.mipmaps.length;Dt++)ft.__webglFramebuffer[Lt][Dt]=c.createFramebuffer()}else ft.__webglFramebuffer[Lt]=c.createFramebuffer()}else{if(U.mipmaps&&U.mipmaps.length>0){ft.__webglFramebuffer=[];for(let Lt=0;Lt<U.mipmaps.length;Lt++)ft.__webglFramebuffer[Lt]=c.createFramebuffer()}else ft.__webglFramebuffer=c.createFramebuffer();if(qt)for(let Lt=0,Dt=xt.length;Lt<Dt;Lt++){const ie=a.get(xt[Lt]);ie.__webglTexture===void 0&&(ie.__webglTexture=c.createTexture(),u.memory.textures++)}if(V.samples>0&&me(V)===!1){ft.__webglMultisampledFramebuffer=c.createFramebuffer(),ft.__webglColorRenderbuffer=[],n.bindFramebuffer(c.FRAMEBUFFER,ft.__webglMultisampledFramebuffer);for(let Lt=0;Lt<xt.length;Lt++){const Dt=xt[Lt];ft.__webglColorRenderbuffer[Lt]=c.createRenderbuffer(),c.bindRenderbuffer(c.RENDERBUFFER,ft.__webglColorRenderbuffer[Lt]);const ie=l.convert(Dt.format,Dt.colorSpace),wt=l.convert(Dt.type),Vt=T(Dt.internalFormat,ie,wt,Dt.colorSpace,V.isXRRenderTarget===!0),he=jt(V);c.renderbufferStorageMultisample(c.RENDERBUFFER,he,Vt,V.width,V.height),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Lt,c.RENDERBUFFER,ft.__webglColorRenderbuffer[Lt])}c.bindRenderbuffer(c.RENDERBUFFER,null),V.depthBuffer&&(ft.__webglDepthRenderbuffer=c.createRenderbuffer(),Et(ft.__webglDepthRenderbuffer,V,!0)),n.bindFramebuffer(c.FRAMEBUFFER,null)}}if(At){n.bindTexture(c.TEXTURE_CUBE_MAP,Tt.__webglTexture),I(c.TEXTURE_CUBE_MAP,U);for(let Lt=0;Lt<6;Lt++)if(U.mipmaps&&U.mipmaps.length>0)for(let Dt=0;Dt<U.mipmaps.length;Dt++)pt(ft.__webglFramebuffer[Lt][Dt],V,U,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Dt);else pt(ft.__webglFramebuffer[Lt],V,U,c.COLOR_ATTACHMENT0,c.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);x(U)&&y(c.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(qt){for(let Lt=0,Dt=xt.length;Lt<Dt;Lt++){const ie=xt[Lt],wt=a.get(ie);n.bindTexture(c.TEXTURE_2D,wt.__webglTexture),I(c.TEXTURE_2D,ie),pt(ft.__webglFramebuffer,V,ie,c.COLOR_ATTACHMENT0+Lt,c.TEXTURE_2D,0),x(ie)&&y(c.TEXTURE_2D)}n.unbindTexture()}else{let Lt=c.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(Lt=V.isWebGL3DRenderTarget?c.TEXTURE_3D:c.TEXTURE_2D_ARRAY),n.bindTexture(Lt,Tt.__webglTexture),I(Lt,U),U.mipmaps&&U.mipmaps.length>0)for(let Dt=0;Dt<U.mipmaps.length;Dt++)pt(ft.__webglFramebuffer[Dt],V,U,c.COLOR_ATTACHMENT0,Lt,Dt);else pt(ft.__webglFramebuffer,V,U,c.COLOR_ATTACHMENT0,Lt,0);x(U)&&y(Lt),n.unbindTexture()}V.depthBuffer&&Yt(V)}function j(V){const U=V.textures;for(let ft=0,Tt=U.length;ft<Tt;ft++){const xt=U[ft];if(x(xt)){const At=V.isWebGLCubeRenderTarget?c.TEXTURE_CUBE_MAP:c.TEXTURE_2D,qt=a.get(xt).__webglTexture;n.bindTexture(At,qt),y(At),n.unbindTexture()}}}const ue=[],fe=[];function Se(V){if(V.samples>0){if(me(V)===!1){const U=V.textures,ft=V.width,Tt=V.height;let xt=c.COLOR_BUFFER_BIT;const At=V.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT,qt=a.get(V),Lt=U.length>1;if(Lt)for(let Dt=0;Dt<U.length;Dt++)n.bindFramebuffer(c.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.RENDERBUFFER,null),n.bindFramebuffer(c.FRAMEBUFFER,qt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.TEXTURE_2D,null,0);n.bindFramebuffer(c.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Dt=0;Dt<U.length;Dt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(xt|=c.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(xt|=c.STENCIL_BUFFER_BIT)),Lt){c.framebufferRenderbuffer(c.READ_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.RENDERBUFFER,qt.__webglColorRenderbuffer[Dt]);const ie=a.get(U[Dt]).__webglTexture;c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0,c.TEXTURE_2D,ie,0)}c.blitFramebuffer(0,0,ft,Tt,0,0,ft,Tt,xt,c.NEAREST),d===!0&&(ue.length=0,fe.length=0,ue.push(c.COLOR_ATTACHMENT0+Dt),V.depthBuffer&&V.resolveDepthBuffer===!1&&(ue.push(At),fe.push(At),c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,fe)),c.invalidateFramebuffer(c.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(c.READ_FRAMEBUFFER,null),n.bindFramebuffer(c.DRAW_FRAMEBUFFER,null),Lt)for(let Dt=0;Dt<U.length;Dt++){n.bindFramebuffer(c.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(c.FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.RENDERBUFFER,qt.__webglColorRenderbuffer[Dt]);const ie=a.get(U[Dt]).__webglTexture;n.bindFramebuffer(c.FRAMEBUFFER,qt.__webglFramebuffer),c.framebufferTexture2D(c.DRAW_FRAMEBUFFER,c.COLOR_ATTACHMENT0+Dt,c.TEXTURE_2D,ie,0)}n.bindFramebuffer(c.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.resolveDepthBuffer===!1&&d){const U=V.stencilBuffer?c.DEPTH_STENCIL_ATTACHMENT:c.DEPTH_ATTACHMENT;c.invalidateFramebuffer(c.DRAW_FRAMEBUFFER,[U])}}}function jt(V){return Math.min(r.maxSamples,V.samples)}function me(V){const U=a.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&U.__useRenderToTexture!==!1}function le(V){const U=u.render.frame;g.get(V)!==U&&(g.set(V,U),V.update())}function ne(V,U){const ft=V.colorSpace,Tt=V.format,xt=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||ft!==os&&ft!==ts&&(ze.getTransfer(ft)===We?(Tt!==ki||xt!==ss)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ft)),U}function He(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(p.width=V.naturalWidth||V.width,p.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(p.width=V.displayWidth,p.height=V.displayHeight):(p.width=V.width,p.height=V.height),p}this.allocateTextureUnit=et,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=K,this.setTexture3D=N,this.setTextureCube=Y,this.rebindTextures=It,this.setupRenderTarget=re,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=me}function b1(c,t){function n(a,r=ts){let l;const u=ze.getTransfer(r);if(a===ss)return c.UNSIGNED_BYTE;if(a===x_)return c.UNSIGNED_SHORT_4_4_4_4;if(a===S_)return c.UNSIGNED_SHORT_5_5_5_1;if(a===rM)return c.UNSIGNED_INT_5_9_9_9_REV;if(a===aM)return c.BYTE;if(a===sM)return c.SHORT;if(a===tu)return c.UNSIGNED_SHORT;if(a===y_)return c.INT;if(a===Jr)return c.UNSIGNED_INT;if(a===es)return c.FLOAT;if(a===lu)return c.HALF_FLOAT;if(a===oM)return c.ALPHA;if(a===lM)return c.RGB;if(a===ki)return c.RGBA;if(a===cM)return c.LUMINANCE;if(a===uM)return c.LUMINANCE_ALPHA;if(a===jr)return c.DEPTH_COMPONENT;if(a===to)return c.DEPTH_STENCIL;if(a===fM)return c.RED;if(a===M_)return c.RED_INTEGER;if(a===hM)return c.RG;if(a===E_)return c.RG_INTEGER;if(a===b_)return c.RGBA_INTEGER;if(a===Ah||a===wh||a===Rh||a===Ch)if(u===We)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Ah)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===wh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Rh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ch)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Ah)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===wh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Rh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ch)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Rv||a===Cv||a===Dv||a===Lv)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Rv)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Cv)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Dv)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Lv)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Uv||a===Nv||a===Ov)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Uv||a===Nv)return u===We?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Ov)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===zv||a===Pv||a===Bv||a===Iv||a===Fv||a===Hv||a===Gv||a===Vv||a===kv||a===qv||a===Xv||a===Wv||a===Yv||a===jv)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===zv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Pv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Bv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Iv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Fv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Hv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Gv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Vv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===kv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===qv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Xv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Yv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===jv)return u===We?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Dh||a===Zv||a===Kv)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Dh)return u===We?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zv)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kv)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===dM||a===Qv||a===Jv||a===$v)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Dh)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Qv)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Jv)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$v)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===$r?c.UNSIGNED_INT_24_8:c[a]!==void 0?c[a]:null}return{convert:n}}class T1 extends gi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class sl extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A1={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new it,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new it),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new it,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new it),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let r=null,l=null,u=null;const f=this._targetRay,d=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){u=!0;for(const b of t.hand.values()){const x=n.getJointPose(b,a),y=this._getHandJoint(p,b);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,M=.005;p.inputState.pinching&&v>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(r=n.getPose(t.targetRaySpace,a),r===null&&l!==null&&(r=l),r!==null&&(f.matrix.fromArray(r.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,r.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(r.linearVelocity)):f.hasLinearVelocity=!1,r.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(r.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return f!==null&&(f.visible=r!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new sl;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class C1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,a){if(this.texture===null){const r=new Zn,l=t.properties.get(r);l.__webglTexture=n.texture,(n.depthNear!=a.depthNear||n.depthFar!=a.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new rs({vertexShader:w1,fragmentShader:R1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ci(new fl(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class D1 extends Gs{constructor(t,n){super();const a=this;let r=null,l=1,u=null,f="local-floor",d=1,p=null,g=null,_=null,v=null,S=null,M=null;const b=new C1,x=n.getContextAttributes();let y=null,T=null;const w=[],L=[],F=new se;let B=null;const O=new gi;O.layers.enable(1),O.viewport=new yn;const q=new gi;q.layers.enable(2),q.viewport=new yn;const z=[O,q],R=new T1;R.layers.enable(1),R.layers.enable(2);let H=null,et=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let pt=w[J];return pt===void 0&&(pt=new nd,w[J]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(J){let pt=w[J];return pt===void 0&&(pt=new nd,w[J]=pt),pt.getGripSpace()},this.getHand=function(J){let pt=w[J];return pt===void 0&&(pt=new nd,w[J]=pt),pt.getHandSpace()};function G(J){const pt=L.indexOf(J.inputSource);if(pt===-1)return;const Et=w[pt];Et!==void 0&&(Et.update(J.inputSource,J.frame,p||u),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function Q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",K);for(let J=0;J<w.length;J++){const pt=L[J];pt!==null&&(L[J]=null,w[J].disconnect(pt))}H=null,et=null,b.reset(),t.setRenderTarget(y),S=null,v=null,_=null,r=null,T=null,yt.stop(),a.isPresenting=!1,t.setPixelRatio(B),t.setSize(F.width,F.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",K),x.xrCompatible!==!0&&await n.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(F),r.renderState.layers===void 0){const pt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(r,n,pt),r.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),T=new Fs(S.framebufferWidth,S.framebufferHeight,{format:ki,type:ss,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let pt=null,Et=null,St=null;x.depth&&(St=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pt=x.stencil?to:jr,Et=x.stencil?$r:Jr);const Yt={colorFormat:n.RGBA8,depthFormat:St,scaleFactor:l};_=new XRWebGLBinding(r,n),v=_.createProjectionLayer(Yt),r.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),T=new Fs(v.textureWidth,v.textureHeight,{format:ki,type:ss,depthTexture:new V_(v.textureWidth,v.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await r.requestReferenceSpace(f),yt.setContext(r),yt.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(J){for(let pt=0;pt<J.removed.length;pt++){const Et=J.removed[pt],St=L.indexOf(Et);St>=0&&(L[St]=null,w[St].disconnect(Et))}for(let pt=0;pt<J.added.length;pt++){const Et=J.added[pt];let St=L.indexOf(Et);if(St===-1){for(let It=0;It<w.length;It++)if(It>=L.length){L.push(Et),St=It;break}else if(L[It]===null){L[It]=Et,St=It;break}if(St===-1)break}const Yt=w[St];Yt&&Yt.connect(Et)}}const N=new it,Y=new it;function X(J,pt,Et){N.setFromMatrixPosition(pt.matrixWorld),Y.setFromMatrixPosition(Et.matrixWorld);const St=N.distanceTo(Y),Yt=pt.projectionMatrix.elements,It=Et.projectionMatrix.elements,re=Yt[14]/(Yt[10]-1),j=Yt[14]/(Yt[10]+1),ue=(Yt[9]+1)/Yt[5],fe=(Yt[9]-1)/Yt[5],Se=(Yt[8]-1)/Yt[0],jt=(It[8]+1)/It[0],me=re*Se,le=re*jt,ne=St/(-Se+jt),He=ne*-Se;pt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(He),J.translateZ(ne),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const V=re+ne,U=j+ne,ft=me-He,Tt=le+(St-He),xt=ue*j/U*V,At=fe*j/U*V;J.projectionMatrix.makePerspective(ft,Tt,xt,At,V,U),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function mt(J,pt){pt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(pt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;b.texture!==null&&(J.near=b.depthNear,J.far=b.depthFar),R.near=q.near=O.near=J.near,R.far=q.far=O.far=J.far,(H!==R.near||et!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,et=R.far,O.near=H,O.far=et,q.near=H,q.far=et,O.updateProjectionMatrix(),q.updateProjectionMatrix(),J.updateProjectionMatrix());const pt=J.parent,Et=R.cameras;mt(R,pt);for(let St=0;St<Et.length;St++)mt(Et[St],pt);Et.length===2?X(R,O,q):R.projectionMatrix.copy(O.projectionMatrix),Mt(J,R,pt)};function Mt(J,pt,Et){Et===null?J.matrix.copy(pt.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(pt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(pt.projectionMatrix),J.projectionMatrixInverse.copy(pt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=_d*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return d},this.setFoveation=function(J){d=J,v!==null&&(v.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(R)};let I=null;function Z(J,pt){if(g=pt.getViewerPose(p||u),M=pt,g!==null){const Et=g.views;S!==null&&(t.setRenderTargetFramebuffer(T,S.framebuffer),t.setRenderTarget(T));let St=!1;Et.length!==R.cameras.length&&(R.cameras.length=0,St=!0);for(let It=0;It<Et.length;It++){const re=Et[It];let j=null;if(S!==null)j=S.getViewport(re);else{const fe=_.getViewSubImage(v,re);j=fe.viewport,It===0&&(t.setRenderTargetTextures(T,fe.colorTexture,v.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(T))}let ue=z[It];ue===void 0&&(ue=new gi,ue.layers.enable(It),ue.viewport=new yn,z[It]=ue),ue.matrix.fromArray(re.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(re.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(j.x,j.y,j.width,j.height),It===0&&(R.matrix.copy(ue.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),St===!0&&R.cameras.push(ue)}const Yt=r.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")){const It=_.getDepthInformation(Et[0]);It&&It.isValid&&It.texture&&b.init(t,It,r.renderState)}}for(let Et=0;Et<w.length;Et++){const St=L[Et],Yt=w[Et];St!==null&&Yt!==void 0&&Yt.update(St,pt,p||u)}I&&I(J,pt),pt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pt}),M=null}const yt=new H_;yt.setAnimationLoop(Z),this.setAnimationLoop=function(J){I=J},this.dispose=function(){}}}const Ls=new Wi,L1=new en;function U1(c,t){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function a(x,y){y.color.getRGB(x.fogColor.value,B_(c)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function r(x,y,T,w,L){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(x,y):y.isMeshToonMaterial?(l(x,y),_(x,y)):y.isMeshPhongMaterial?(l(x,y),g(x,y)):y.isMeshStandardMaterial?(l(x,y),v(x,y),y.isMeshPhysicalMaterial&&S(x,y,L)):y.isMeshMatcapMaterial?(l(x,y),M(x,y)):y.isMeshDepthMaterial?l(x,y):y.isMeshDistanceMaterial?(l(x,y),b(x,y)):y.isMeshNormalMaterial?l(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?d(x,y,T,w):y.isSpriteMaterial?p(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===jn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===jn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const T=t.get(y),w=T.envMap,L=T.envMapRotation;w&&(x.envMap.value=w,Ls.copy(L),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),x.envMapRotation.value.setFromMatrix4(L1.makeRotationFromEuler(Ls)),x.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,T,w){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*T,x.scale.value=w*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function g(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function _(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function v(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,T){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===jn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function b(x,y){const T=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:r}}function N1(c,t,n,a){let r={},l={},u=[];const f=c.getParameter(c.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,w){const L=w.program;a.uniformBlockBinding(T,L)}function p(T,w){let L=r[T.id];L===void 0&&(M(T),L=g(T),r[T.id]=L,T.addEventListener("dispose",x));const F=w.program;a.updateUBOMapping(T,F);const B=t.render.frame;l[T.id]!==B&&(v(T),l[T.id]=B)}function g(T){const w=_();T.__bindingPointIndex=w;const L=c.createBuffer(),F=T.__size,B=T.usage;return c.bindBuffer(c.UNIFORM_BUFFER,L),c.bufferData(c.UNIFORM_BUFFER,F,B),c.bindBuffer(c.UNIFORM_BUFFER,null),c.bindBufferBase(c.UNIFORM_BUFFER,w,L),L}function _(){for(let T=0;T<f;T++)if(u.indexOf(T)===-1)return u.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(T){const w=r[T.id],L=T.uniforms,F=T.__cache;c.bindBuffer(c.UNIFORM_BUFFER,w);for(let B=0,O=L.length;B<O;B++){const q=Array.isArray(L[B])?L[B]:[L[B]];for(let z=0,R=q.length;z<R;z++){const H=q[z];if(S(H,B,z,F)===!0){const et=H.__offset,G=Array.isArray(H.value)?H.value:[H.value];let Q=0;for(let K=0;K<G.length;K++){const N=G[K],Y=b(N);typeof N=="number"||typeof N=="boolean"?(H.__data[0]=N,c.bufferSubData(c.UNIFORM_BUFFER,et+Q,H.__data)):N.isMatrix3?(H.__data[0]=N.elements[0],H.__data[1]=N.elements[1],H.__data[2]=N.elements[2],H.__data[3]=0,H.__data[4]=N.elements[3],H.__data[5]=N.elements[4],H.__data[6]=N.elements[5],H.__data[7]=0,H.__data[8]=N.elements[6],H.__data[9]=N.elements[7],H.__data[10]=N.elements[8],H.__data[11]=0):(N.toArray(H.__data,Q),Q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}c.bufferSubData(c.UNIFORM_BUFFER,et,H.__data)}}}c.bindBuffer(c.UNIFORM_BUFFER,null)}function S(T,w,L,F){const B=T.value,O=w+"_"+L;if(F[O]===void 0)return typeof B=="number"||typeof B=="boolean"?F[O]=B:F[O]=B.clone(),!0;{const q=F[O];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return F[O]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function M(T){const w=T.uniforms;let L=0;const F=16;for(let O=0,q=w.length;O<q;O++){const z=Array.isArray(w[O])?w[O]:[w[O]];for(let R=0,H=z.length;R<H;R++){const et=z[R],G=Array.isArray(et.value)?et.value:[et.value];for(let Q=0,K=G.length;Q<K;Q++){const N=G[Q],Y=b(N),X=L%F;X!==0&&F-X<Y.boundary&&(L+=F-X),et.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),et.__offset=L,L+=Y.storage}}}const B=L%F;return B>0&&(L+=F-B),T.__size=L,T.__cache={},this}function b(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function x(T){const w=T.target;w.removeEventListener("dispose",x);const L=u.indexOf(w.__bindingPointIndex);u.splice(L,1),c.deleteBuffer(r[w.id]),delete r[w.id],delete l[w.id]}function y(){for(const T in r)c.deleteBuffer(r[T]);u=[],r={},l={}}return{bind:d,update:p,dispose:y}}class O1{constructor(t={}){const{canvas:n=AM(),context:a=null,depth:r=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=t;this.isWebGLRenderer=!0;let v;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=a.getContextAttributes().alpha}else v=u;const S=new Uint32Array(4),M=new Int32Array(4);let b=null,x=null;const y=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Fi,this.toneMapping=is,this.toneMappingExposure=1;const w=this;let L=!1,F=0,B=0,O=null,q=-1,z=null;const R=new yn,H=new yn;let et=null;const G=new Re(0);let Q=0,K=n.width,N=n.height,Y=1,X=null,mt=null;const Mt=new yn(0,0,K,N),I=new yn(0,0,K,N);let Z=!1;const yt=new bd;let J=!1,pt=!1;const Et=new en,St=new it,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function re(){return O===null?Y:1}let j=a;function ue(P,$){return n.getContext(P,$)}try{const P={alpha:!0,depth:r,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Sd}`),n.addEventListener("webglcontextlost",ht,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",dt,!1),j===null){const $="webgl2";if(j=ue($,P),j===null)throw ue($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let fe,Se,jt,me,le,ne,He,V,U,ft,Tt,xt,At,qt,Lt,Dt,ie,wt,Vt,he,Qt,Ct,$t,Xt;function Ye(){fe=new VT(j),fe.init(),Ct=new b1(j,fe),Se=new PT(j,fe,t,Ct),jt=new M1(j),me=new XT(j),le=new l1,ne=new E1(j,fe,jt,le,Se,Ct,me),He=new IT(w),V=new GT(w),U=new JM(j),$t=new OT(j,U),ft=new kT(j,U,me,$t),Tt=new YT(j,ft,U,me),Vt=new WT(j,Se,ne),Dt=new BT(le),xt=new o1(w,He,V,fe,Se,$t,Dt),At=new U1(w,le),qt=new u1,Lt=new g1(fe),wt=new NT(w,He,V,jt,Tt,v,d),ie=new S1(w,Tt,Se),Xt=new N1(j,me,Se,jt),he=new zT(j,fe,me),Qt=new qT(j,fe,me),me.programs=xt.programs,w.capabilities=Se,w.extensions=fe,w.properties=le,w.renderLists=qt,w.shadowMap=ie,w.state=jt,w.info=me}Ye();const A=new D1(w,j);this.xr=A,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const P=fe.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=fe.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(P){P!==void 0&&(Y=P,this.setSize(K,N,!1))},this.getSize=function(P){return P.set(K,N)},this.setSize=function(P,$,lt=!0){if(A.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=P,N=$,n.width=Math.floor(P*Y),n.height=Math.floor($*Y),lt===!0&&(n.style.width=P+"px",n.style.height=$+"px"),this.setViewport(0,0,P,$)},this.getDrawingBufferSize=function(P){return P.set(K*Y,N*Y).floor()},this.setDrawingBufferSize=function(P,$,lt){K=P,N=$,Y=lt,n.width=Math.floor(P*lt),n.height=Math.floor($*lt),this.setViewport(0,0,P,$)},this.getCurrentViewport=function(P){return P.copy(R)},this.getViewport=function(P){return P.copy(Mt)},this.setViewport=function(P,$,lt,ct){P.isVector4?Mt.set(P.x,P.y,P.z,P.w):Mt.set(P,$,lt,ct),jt.viewport(R.copy(Mt).multiplyScalar(Y).round())},this.getScissor=function(P){return P.copy(I)},this.setScissor=function(P,$,lt,ct){P.isVector4?I.set(P.x,P.y,P.z,P.w):I.set(P,$,lt,ct),jt.scissor(H.copy(I).multiplyScalar(Y).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(P){jt.setScissorTest(Z=P)},this.setOpaqueSort=function(P){X=P},this.setTransparentSort=function(P){mt=P},this.getClearColor=function(P){return P.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(P=!0,$=!0,lt=!0){let ct=0;if(P){let nt=!1;if(O!==null){const Rt=O.texture.format;nt=Rt===b_||Rt===E_||Rt===M_}if(nt){const Rt=O.texture.type,Ut=Rt===ss||Rt===Jr||Rt===tu||Rt===$r||Rt===x_||Rt===S_,Ot=wt.getClearColor(),Ft=wt.getClearAlpha(),Kt=Ot.r,Pt=Ot.g,Jt=Ot.b;Ut?(S[0]=Kt,S[1]=Pt,S[2]=Jt,S[3]=Ft,j.clearBufferuiv(j.COLOR,0,S)):(M[0]=Kt,M[1]=Pt,M[2]=Jt,M[3]=Ft,j.clearBufferiv(j.COLOR,0,M))}else ct|=j.COLOR_BUFFER_BIT}$&&(ct|=j.DEPTH_BUFFER_BIT),lt&&(ct|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ct)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ht,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),qt.dispose(),Lt.dispose(),le.dispose(),He.dispose(),V.dispose(),Tt.dispose(),$t.dispose(),Xt.dispose(),xt.dispose(),A.dispose(),A.removeEventListener("sessionstart",je),A.removeEventListener("sessionend",Ve),Un.stop()};function ht(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function rt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const P=me.autoReset,$=ie.enabled,lt=ie.autoUpdate,ct=ie.needsUpdate,nt=ie.type;Ye(),me.autoReset=P,ie.enabled=$,ie.autoUpdate=lt,ie.needsUpdate=ct,ie.type=nt}function dt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function bt(P){const $=P.target;$.removeEventListener("dispose",bt),Gt($)}function Gt(P){ee(P),le.remove(P)}function ee(P){const $=le.get(P).programs;$!==void 0&&($.forEach(function(lt){xt.releaseProgram(lt)}),P.isShaderMaterial&&xt.releaseShaderCache(P))}this.renderBufferDirect=function(P,$,lt,ct,nt,Rt){$===null&&($=Yt);const Ut=nt.isMesh&&nt.matrixWorld.determinant()<0,Ot=hn(P,$,lt,ct,nt);jt.setMaterial(ct,Ut);let Ft=lt.index,Kt=1;if(ct.wireframe===!0){if(Ft=ft.getWireframeAttribute(lt),Ft===void 0)return;Kt=2}const Pt=lt.drawRange,Jt=lt.attributes.position;let Ee=Pt.start*Kt,Le=(Pt.start+Pt.count)*Kt;Rt!==null&&(Ee=Math.max(Ee,Rt.start*Kt),Le=Math.min(Le,(Rt.start+Rt.count)*Kt)),Ft!==null?(Ee=Math.max(Ee,0),Le=Math.min(Le,Ft.count)):Jt!=null&&(Ee=Math.max(Ee,0),Le=Math.min(Le,Jt.count));const Ue=Le-Ee;if(Ue<0||Ue===1/0)return;$t.setup(nt,ct,Ot,lt,Ft);let Nn,Te=he;if(Ft!==null&&(Nn=U.get(Ft),Te=Qt,Te.setIndex(Nn)),nt.isMesh)ct.wireframe===!0?(jt.setLineWidth(ct.wireframeLinewidth*re()),Te.setMode(j.LINES)):Te.setMode(j.TRIANGLES);else if(nt.isLine){let Wt=ct.linewidth;Wt===void 0&&(Wt=1),jt.setLineWidth(Wt*re()),nt.isLineSegments?Te.setMode(j.LINES):nt.isLineLoop?Te.setMode(j.LINE_LOOP):Te.setMode(j.LINE_STRIP)}else nt.isPoints?Te.setMode(j.POINTS):nt.isSprite&&Te.setMode(j.TRIANGLES);if(nt.isBatchedMesh)nt._multiDrawInstances!==null?Te.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances):Te.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)Te.renderInstances(Ee,Ue,nt.count);else if(lt.isInstancedBufferGeometry){const Wt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,xn=Math.min(lt.instanceCount,Wt);Te.renderInstances(Ee,Ue,xn)}else Te.render(Ee,Ue)};function Pe(P,$,lt){P.transparent===!0&&P.side===Gi&&P.forceSinglePass===!1?(P.side=jn,P.needsUpdate=!0,cs(P,$,lt),P.side=as,P.needsUpdate=!0,cs(P,$,lt),P.side=Gi):cs(P,$,lt)}this.compile=function(P,$,lt=null){lt===null&&(lt=P),x=Lt.get(lt),x.init($),T.push(x),lt.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),P!==lt&&P.traverseVisible(function(nt){nt.isLight&&nt.layers.test($.layers)&&(x.pushLight(nt),nt.castShadow&&x.pushShadow(nt))}),x.setupLights();const ct=new Set;return P.traverse(function(nt){const Rt=nt.material;if(Rt)if(Array.isArray(Rt))for(let Ut=0;Ut<Rt.length;Ut++){const Ot=Rt[Ut];Pe(Ot,lt,nt),ct.add(Ot)}else Pe(Rt,lt,nt),ct.add(Rt)}),T.pop(),x=null,ct},this.compileAsync=function(P,$,lt=null){const ct=this.compile(P,$,lt);return new Promise(nt=>{function Rt(){if(ct.forEach(function(Ut){le.get(Ut).currentProgram.isReady()&&ct.delete(Ut)}),ct.size===0){nt(P);return}setTimeout(Rt,10)}fe.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ke=null;function Me(P){Ke&&Ke(P)}function je(){Un.stop()}function Ve(){Un.start()}const Un=new H_;Un.setAnimationLoop(Me),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(P){Ke=P,A.setAnimationLoop(P),P===null?Un.stop():Un.start()},A.addEventListener("sessionstart",je),A.addEventListener("sessionend",Ve),this.render=function(P,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),A.enabled===!0&&A.isPresenting===!0&&(A.cameraAutoUpdate===!0&&A.updateCamera($),$=A.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,$,O),x=Lt.get(P,T.length),x.init($),T.push(x),Et.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),yt.setFromProjectionMatrix(Et),pt=this.localClippingEnabled,J=Dt.init(this.clippingPlanes,pt),b=qt.get(P,y.length),b.init(),y.push(b),A.enabled===!0&&A.isPresenting===!0){const Rt=w.xr.getDepthSensingMesh();Rt!==null&&An(Rt,$,-1/0,w.sortObjects)}An(P,$,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(X,mt),It=A.enabled===!1||A.isPresenting===!1||A.hasDepthSensing()===!1,It&&wt.addToRenderList(b,P),this.info.render.frame++,J===!0&&Dt.beginShadows();const lt=x.state.shadowsArray;ie.render(lt,P,$),J===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ct=b.opaque,nt=b.transmissive;if(x.setupLights(),$.isArrayCamera){const Rt=$.cameras;if(nt.length>0)for(let Ut=0,Ot=Rt.length;Ut<Ot;Ut++){const Ft=Rt[Ut];Li(ct,nt,P,Ft)}It&&wt.render(P);for(let Ut=0,Ot=Rt.length;Ut<Ot;Ut++){const Ft=Rt[Ut];_i(b,P,Ft,Ft.viewport)}}else nt.length>0&&Li(ct,nt,P,$),It&&wt.render(P),_i(b,P,$);O!==null&&(ne.updateMultisampleRenderTarget(O),ne.updateRenderTargetMipmap(O)),P.isScene===!0&&P.onAfterRender(w,P,$),$t.resetDefaultState(),q=-1,z=null,T.pop(),T.length>0?(x=T[T.length-1],J===!0&&Dt.setGlobalState(w.clippingPlanes,x.state.camera)):x=null,y.pop(),y.length>0?b=y[y.length-1]:b=null};function An(P,$,lt,ct){if(P.visible===!1)return;if(P.layers.test($.layers)){if(P.isGroup)lt=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update($);else if(P.isLight)x.pushLight(P),P.castShadow&&x.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||yt.intersectsSprite(P)){ct&&St.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Et);const Ut=Tt.update(P),Ot=P.material;Ot.visible&&b.push(P,Ut,Ot,lt,St.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||yt.intersectsObject(P))){const Ut=Tt.update(P),Ot=P.material;if(ct&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),St.copy(P.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),St.copy(Ut.boundingSphere.center)),St.applyMatrix4(P.matrixWorld).applyMatrix4(Et)),Array.isArray(Ot)){const Ft=Ut.groups;for(let Kt=0,Pt=Ft.length;Kt<Pt;Kt++){const Jt=Ft[Kt],Ee=Ot[Jt.materialIndex];Ee&&Ee.visible&&b.push(P,Ut,Ee,lt,St.z,Jt)}}else Ot.visible&&b.push(P,Ut,Ot,lt,St.z,null)}}const Rt=P.children;for(let Ut=0,Ot=Rt.length;Ut<Ot;Ut++)An(Rt[Ut],$,lt,ct)}function _i(P,$,lt,ct){const nt=P.opaque,Rt=P.transmissive,Ut=P.transparent;x.setupLightsView(lt),J===!0&&Dt.setGlobalState(w.clippingPlanes,lt),ct&&jt.viewport(R.copy(ct)),nt.length>0&&yi(nt,$,lt),Rt.length>0&&yi(Rt,$,lt),Ut.length>0&&yi(Ut,$,lt),jt.buffers.depth.setTest(!0),jt.buffers.depth.setMask(!0),jt.buffers.color.setMask(!0),jt.setPolygonOffset(!1)}function Li(P,$,lt,ct){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ct.id]===void 0&&(x.state.transmissionRenderTarget[ct.id]=new Fs(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?lu:ss,minFilter:Is,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ze.workingColorSpace}));const Rt=x.state.transmissionRenderTarget[ct.id],Ut=ct.viewport||R;Rt.setSize(Ut.z,Ut.w);const Ot=w.getRenderTarget();w.setRenderTarget(Rt),w.getClearColor(G),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),It?wt.render(lt):w.clear();const Ft=w.toneMapping;w.toneMapping=is;const Kt=ct.viewport;if(ct.viewport!==void 0&&(ct.viewport=void 0),x.setupLightsView(ct),J===!0&&Dt.setGlobalState(w.clippingPlanes,ct),yi(P,lt,ct),ne.updateMultisampleRenderTarget(Rt),ne.updateRenderTargetMipmap(Rt),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let Jt=0,Ee=$.length;Jt<Ee;Jt++){const Le=$[Jt],Ue=Le.object,Nn=Le.geometry,Te=Le.material,Wt=Le.group;if(Te.side===Gi&&Ue.layers.test(ct.layers)){const xn=Te.side;Te.side=jn,Te.needsUpdate=!0,Vs(Ue,lt,ct,Nn,Te,Wt),Te.side=xn,Te.needsUpdate=!0,Pt=!0}}Pt===!0&&(ne.updateMultisampleRenderTarget(Rt),ne.updateRenderTargetMipmap(Rt))}w.setRenderTarget(Ot),w.setClearColor(G,Q),Kt!==void 0&&(ct.viewport=Kt),w.toneMapping=Ft}function yi(P,$,lt){const ct=$.isScene===!0?$.overrideMaterial:null;for(let nt=0,Rt=P.length;nt<Rt;nt++){const Ut=P[nt],Ot=Ut.object,Ft=Ut.geometry,Kt=ct===null?Ut.material:ct,Pt=Ut.group;Ot.layers.test(lt.layers)&&Vs(Ot,$,lt,Ft,Kt,Pt)}}function Vs(P,$,lt,ct,nt,Rt){P.onBeforeRender(w,$,lt,ct,nt,Rt),P.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),nt.onBeforeRender(w,$,lt,ct,P,Rt),nt.transparent===!0&&nt.side===Gi&&nt.forceSinglePass===!1?(nt.side=jn,nt.needsUpdate=!0,w.renderBufferDirect(lt,$,ct,nt,P,Rt),nt.side=as,nt.needsUpdate=!0,w.renderBufferDirect(lt,$,ct,nt,P,Rt),nt.side=Gi):w.renderBufferDirect(lt,$,ct,nt,P,Rt),P.onAfterRender(w,$,lt,ct,nt,Rt)}function cs(P,$,lt){$.isScene!==!0&&($=Yt);const ct=le.get(P),nt=x.state.lights,Rt=x.state.shadowsArray,Ut=nt.state.version,Ot=xt.getParameters(P,nt.state,Rt,$,lt),Ft=xt.getProgramCacheKey(Ot);let Kt=ct.programs;ct.environment=P.isMeshStandardMaterial?$.environment:null,ct.fog=$.fog,ct.envMap=(P.isMeshStandardMaterial?V:He).get(P.envMap||ct.environment),ct.envMapRotation=ct.environment!==null&&P.envMap===null?$.environmentRotation:P.envMapRotation,Kt===void 0&&(P.addEventListener("dispose",bt),Kt=new Map,ct.programs=Kt);let Pt=Kt.get(Ft);if(Pt!==void 0){if(ct.currentProgram===Pt&&ct.lightsStateVersion===Ut)return xi(P,Ot),Pt}else Ot.uniforms=xt.getUniforms(P),P.onBuild(lt,Ot,w),P.onBeforeCompile(Ot,w),Pt=xt.acquireProgram(Ot,Ft),Kt.set(Ft,Pt),ct.uniforms=Ot.uniforms;const Jt=ct.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Jt.clippingPlanes=Dt.uniform),xi(P,Ot),ct.needsLights=Ma(P),ct.lightsStateVersion=Ut,ct.needsLights&&(Jt.ambientLightColor.value=nt.state.ambient,Jt.lightProbe.value=nt.state.probe,Jt.directionalLights.value=nt.state.directional,Jt.directionalLightShadows.value=nt.state.directionalShadow,Jt.spotLights.value=nt.state.spot,Jt.spotLightShadows.value=nt.state.spotShadow,Jt.rectAreaLights.value=nt.state.rectArea,Jt.ltc_1.value=nt.state.rectAreaLTC1,Jt.ltc_2.value=nt.state.rectAreaLTC2,Jt.pointLights.value=nt.state.point,Jt.pointLightShadows.value=nt.state.pointShadow,Jt.hemisphereLights.value=nt.state.hemi,Jt.directionalShadowMap.value=nt.state.directionalShadowMap,Jt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Jt.spotShadowMap.value=nt.state.spotShadowMap,Jt.spotLightMatrix.value=nt.state.spotLightMatrix,Jt.spotLightMap.value=nt.state.spotLightMap,Jt.pointShadowMap.value=nt.state.pointShadowMap,Jt.pointShadowMatrix.value=nt.state.pointShadowMatrix),ct.currentProgram=Pt,ct.uniformsList=null,Pt}function io(P){if(P.uniformsList===null){const $=P.currentProgram.getUniforms();P.uniformsList=Jc.seqWithValue($.seq,P.uniforms)}return P.uniformsList}function xi(P,$){const lt=le.get(P);lt.outputColorSpace=$.outputColorSpace,lt.batching=$.batching,lt.batchingColor=$.batchingColor,lt.instancing=$.instancing,lt.instancingColor=$.instancingColor,lt.instancingMorph=$.instancingMorph,lt.skinning=$.skinning,lt.morphTargets=$.morphTargets,lt.morphNormals=$.morphNormals,lt.morphColors=$.morphColors,lt.morphTargetsCount=$.morphTargetsCount,lt.numClippingPlanes=$.numClippingPlanes,lt.numIntersection=$.numClipIntersection,lt.vertexAlphas=$.vertexAlphas,lt.vertexTangents=$.vertexTangents,lt.toneMapping=$.toneMapping}function hn(P,$,lt,ct,nt){$.isScene!==!0&&($=Yt),ne.resetTextureUnits();const Rt=$.fog,Ut=ct.isMeshStandardMaterial?$.environment:null,Ot=O===null?w.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:os,Ft=(ct.isMeshStandardMaterial?V:He).get(ct.envMap||Ut),Kt=ct.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Pt=!!lt.attributes.tangent&&(!!ct.normalMap||ct.anisotropy>0),Jt=!!lt.morphAttributes.position,Ee=!!lt.morphAttributes.normal,Le=!!lt.morphAttributes.color;let Ue=is;ct.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ue=w.toneMapping);const Nn=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Te=Nn!==void 0?Nn.length:0,Wt=le.get(ct),xn=x.state.lights;if(J===!0&&(pt===!0||P!==z)){const Sn=P===z&&ct.id===q;Dt.setState(ct,P,Sn)}let be=!1;ct.version===Wt.__version?(Wt.needsLights&&Wt.lightsStateVersion!==xn.state.version||Wt.outputColorSpace!==Ot||nt.isBatchedMesh&&Wt.batching===!1||!nt.isBatchedMesh&&Wt.batching===!0||nt.isBatchedMesh&&Wt.batchingColor===!0&&nt.colorTexture===null||nt.isBatchedMesh&&Wt.batchingColor===!1&&nt.colorTexture!==null||nt.isInstancedMesh&&Wt.instancing===!1||!nt.isInstancedMesh&&Wt.instancing===!0||nt.isSkinnedMesh&&Wt.skinning===!1||!nt.isSkinnedMesh&&Wt.skinning===!0||nt.isInstancedMesh&&Wt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Wt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Wt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Wt.instancingMorph===!1&&nt.morphTexture!==null||Wt.envMap!==Ft||ct.fog===!0&&Wt.fog!==Rt||Wt.numClippingPlanes!==void 0&&(Wt.numClippingPlanes!==Dt.numPlanes||Wt.numIntersection!==Dt.numIntersection)||Wt.vertexAlphas!==Kt||Wt.vertexTangents!==Pt||Wt.morphTargets!==Jt||Wt.morphNormals!==Ee||Wt.morphColors!==Le||Wt.toneMapping!==Ue||Wt.morphTargetsCount!==Te)&&(be=!0):(be=!0,Wt.__version=ct.version);let Bn=Wt.currentProgram;be===!0&&(Bn=cs(ct,$,nt));let In=!1,nn=!1,ks=!1;const an=Bn.getUniforms(),ri=Wt.uniforms;if(jt.useProgram(Bn.program)&&(In=!0,nn=!0,ks=!0),ct.id!==q&&(q=ct.id,nn=!0),In||z!==P){an.setValue(j,"projectionMatrix",P.projectionMatrix),an.setValue(j,"viewMatrix",P.matrixWorldInverse);const Sn=an.map.cameraPosition;Sn!==void 0&&Sn.setValue(j,St.setFromMatrixPosition(P.matrixWorld)),Se.logarithmicDepthBuffer&&an.setValue(j,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ct.isMeshPhongMaterial||ct.isMeshToonMaterial||ct.isMeshLambertMaterial||ct.isMeshBasicMaterial||ct.isMeshStandardMaterial||ct.isShaderMaterial)&&an.setValue(j,"isOrthographic",P.isOrthographicCamera===!0),z!==P&&(z=P,nn=!0,ks=!0)}if(nt.isSkinnedMesh){an.setOptional(j,nt,"bindMatrix"),an.setOptional(j,nt,"bindMatrixInverse");const Sn=nt.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),an.setValue(j,"boneTexture",Sn.boneTexture,ne))}nt.isBatchedMesh&&(an.setOptional(j,nt,"batchingTexture"),an.setValue(j,"batchingTexture",nt._matricesTexture,ne),an.setOptional(j,nt,"batchingColorTexture"),nt._colorsTexture!==null&&an.setValue(j,"batchingColorTexture",nt._colorsTexture,ne));const qs=lt.morphAttributes;if((qs.position!==void 0||qs.normal!==void 0||qs.color!==void 0)&&Vt.update(nt,lt,Bn),(nn||Wt.receiveShadow!==nt.receiveShadow)&&(Wt.receiveShadow=nt.receiveShadow,an.setValue(j,"receiveShadow",nt.receiveShadow)),ct.isMeshGouraudMaterial&&ct.envMap!==null&&(ri.envMap.value=Ft,ri.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),ct.isMeshStandardMaterial&&ct.envMap===null&&$.environment!==null&&(ri.envMapIntensity.value=$.environmentIntensity),nn&&(an.setValue(j,"toneMappingExposure",w.toneMappingExposure),Wt.needsLights&&wn(ri,ks),Rt&&ct.fog===!0&&At.refreshFogUniforms(ri,Rt),At.refreshMaterialUniforms(ri,ct,Y,N,x.state.transmissionRenderTarget[P.id]),Jc.upload(j,io(Wt),ri,ne)),ct.isShaderMaterial&&ct.uniformsNeedUpdate===!0&&(Jc.upload(j,io(Wt),ri,ne),ct.uniformsNeedUpdate=!1),ct.isSpriteMaterial&&an.setValue(j,"center",nt.center),an.setValue(j,"modelViewMatrix",nt.modelViewMatrix),an.setValue(j,"normalMatrix",nt.normalMatrix),an.setValue(j,"modelMatrix",nt.matrixWorld),ct.isShaderMaterial||ct.isRawShaderMaterial){const Sn=ct.uniformsGroups;for(let ao=0,Fn=Sn.length;ao<Fn;ao++){const Xs=Sn[ao];Xt.update(Xs,Bn),Xt.bind(Xs,Bn)}}return Bn}function wn(P,$){P.ambientLightColor.needsUpdate=$,P.lightProbe.needsUpdate=$,P.directionalLights.needsUpdate=$,P.directionalLightShadows.needsUpdate=$,P.pointLights.needsUpdate=$,P.pointLightShadows.needsUpdate=$,P.spotLights.needsUpdate=$,P.spotLightShadows.needsUpdate=$,P.rectAreaLights.needsUpdate=$,P.hemisphereLights.needsUpdate=$}function Ma(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(P,$,lt){le.get(P.texture).__webglTexture=$,le.get(P.depthTexture).__webglTexture=lt;const ct=le.get(P);ct.__hasExternalTextures=!0,ct.__autoAllocateDepthBuffer=lt===void 0,ct.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ct.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,$){const lt=le.get(P);lt.__webglFramebuffer=$,lt.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(P,$=0,lt=0){O=P,F=$,B=lt;let ct=!0,nt=null,Rt=!1,Ut=!1;if(P){const Ft=le.get(P);Ft.__useDefaultFramebuffer!==void 0?(jt.bindFramebuffer(j.FRAMEBUFFER,null),ct=!1):Ft.__webglFramebuffer===void 0?ne.setupRenderTarget(P):Ft.__hasExternalTextures&&ne.rebindTextures(P,le.get(P.texture).__webglTexture,le.get(P.depthTexture).__webglTexture);const Kt=P.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Ut=!0);const Pt=le.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Pt[$])?nt=Pt[$][lt]:nt=Pt[$],Rt=!0):P.samples>0&&ne.useMultisampledRTT(P)===!1?nt=le.get(P).__webglMultisampledFramebuffer:Array.isArray(Pt)?nt=Pt[lt]:nt=Pt,R.copy(P.viewport),H.copy(P.scissor),et=P.scissorTest}else R.copy(Mt).multiplyScalar(Y).floor(),H.copy(I).multiplyScalar(Y).floor(),et=Z;if(jt.bindFramebuffer(j.FRAMEBUFFER,nt)&&ct&&jt.drawBuffers(P,nt),jt.viewport(R),jt.scissor(H),jt.setScissorTest(et),Rt){const Ft=le.get(P.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ft.__webglTexture,lt)}else if(Ut){const Ft=le.get(P.texture),Kt=$||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ft.__webglTexture,lt||0,Kt)}q=-1},this.readRenderTargetPixels=function(P,$,lt,ct,nt,Rt,Ut){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){jt.bindFramebuffer(j.FRAMEBUFFER,Ot);try{const Ft=P.texture,Kt=Ft.format,Pt=Ft.type;if(!Se.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Se.textureTypeReadable(Pt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=P.width-ct&&lt>=0&&lt<=P.height-nt&&j.readPixels($,lt,ct,nt,Ct.convert(Kt),Ct.convert(Pt),Rt)}finally{const Ft=O!==null?le.get(O).__webglFramebuffer:null;jt.bindFramebuffer(j.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(P,$,lt,ct,nt,Rt,Ut){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=le.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ot=Ot[Ut]),Ot){jt.bindFramebuffer(j.FRAMEBUFFER,Ot);try{const Ft=P.texture,Kt=Ft.format,Pt=Ft.type;if(!Se.textureFormatReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Se.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=P.width-ct&&lt>=0&&lt<=P.height-nt){const Jt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Jt),j.bufferData(j.PIXEL_PACK_BUFFER,Rt.byteLength,j.STREAM_READ),j.readPixels($,lt,ct,nt,Ct.convert(Kt),Ct.convert(Pt),0),j.flush();const Ee=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);await wM(j,Ee,4);try{j.bindBuffer(j.PIXEL_PACK_BUFFER,Jt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Rt)}finally{j.deleteBuffer(Jt),j.deleteSync(Ee)}return Rt}}finally{const Ft=O!==null?le.get(O).__webglFramebuffer:null;jt.bindFramebuffer(j.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(P,$=null,lt=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,P=arguments[1]);const ct=Math.pow(2,-lt),nt=Math.floor(P.image.width*ct),Rt=Math.floor(P.image.height*ct),Ut=$!==null?$.x:0,Ot=$!==null?$.y:0;ne.setTexture2D(P,0),j.copyTexSubImage2D(j.TEXTURE_2D,lt,0,0,Ut,Ot,nt,Rt),jt.unbindTexture()},this.copyTextureToTexture=function(P,$,lt=null,ct=null,nt=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),ct=arguments[0]||null,P=arguments[1],$=arguments[2],nt=arguments[3]||0,lt=null);let Rt,Ut,Ot,Ft,Kt,Pt;lt!==null?(Rt=lt.max.x-lt.min.x,Ut=lt.max.y-lt.min.y,Ot=lt.min.x,Ft=lt.min.y):(Rt=P.image.width,Ut=P.image.height,Ot=0,Ft=0),ct!==null?(Kt=ct.x,Pt=ct.y):(Kt=0,Pt=0);const Jt=Ct.convert($.format),Ee=Ct.convert($.type);ne.setTexture2D($,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const Le=j.getParameter(j.UNPACK_ROW_LENGTH),Ue=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Nn=j.getParameter(j.UNPACK_SKIP_PIXELS),Te=j.getParameter(j.UNPACK_SKIP_ROWS),Wt=j.getParameter(j.UNPACK_SKIP_IMAGES),xn=P.isCompressedTexture?P.mipmaps[nt]:P.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,xn.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xn.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ot),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ft),P.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,nt,Kt,Pt,Rt,Ut,Jt,Ee,xn.data):P.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,nt,Kt,Pt,xn.width,xn.height,Jt,xn.data):j.texSubImage2D(j.TEXTURE_2D,nt,Kt,Pt,Jt,Ee,xn),j.pixelStorei(j.UNPACK_ROW_LENGTH,Le),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ue),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Nn),j.pixelStorei(j.UNPACK_SKIP_ROWS,Te),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Wt),nt===0&&$.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),jt.unbindTexture()},this.copyTextureToTexture3D=function(P,$,lt=null,ct=null,nt=0){P.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),lt=arguments[0]||null,ct=arguments[1]||null,P=arguments[2],$=arguments[3],nt=arguments[4]||0);let Rt,Ut,Ot,Ft,Kt,Pt,Jt,Ee,Le;const Ue=P.isCompressedTexture?P.mipmaps[nt]:P.image;lt!==null?(Rt=lt.max.x-lt.min.x,Ut=lt.max.y-lt.min.y,Ot=lt.max.z-lt.min.z,Ft=lt.min.x,Kt=lt.min.y,Pt=lt.min.z):(Rt=Ue.width,Ut=Ue.height,Ot=Ue.depth,Ft=0,Kt=0,Pt=0),ct!==null?(Jt=ct.x,Ee=ct.y,Le=ct.z):(Jt=0,Ee=0,Le=0);const Nn=Ct.convert($.format),Te=Ct.convert($.type);let Wt;if($.isData3DTexture)ne.setTexture3D($,0),Wt=j.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)ne.setTexture2DArray($,0),Wt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const xn=j.getParameter(j.UNPACK_ROW_LENGTH),be=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Bn=j.getParameter(j.UNPACK_SKIP_PIXELS),In=j.getParameter(j.UNPACK_SKIP_ROWS),nn=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Ue.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ue.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ft),j.pixelStorei(j.UNPACK_SKIP_ROWS,Kt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Pt),P.isDataTexture||P.isData3DTexture?j.texSubImage3D(Wt,nt,Jt,Ee,Le,Rt,Ut,Ot,Nn,Te,Ue.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(Wt,nt,Jt,Ee,Le,Rt,Ut,Ot,Nn,Ue.data):j.texSubImage3D(Wt,nt,Jt,Ee,Le,Rt,Ut,Ot,Nn,Te,Ue),j.pixelStorei(j.UNPACK_ROW_LENGTH,xn),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,be),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Bn),j.pixelStorei(j.UNPACK_SKIP_ROWS,In),j.pixelStorei(j.UNPACK_SKIP_IMAGES,nn),nt===0&&$.generateMipmaps&&j.generateMipmap(Wt),jt.unbindTexture()},this.initRenderTarget=function(P){le.get(P).__webglFramebuffer===void 0&&ne.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ne.setTextureCube(P,0):P.isData3DTexture?ne.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ne.setTexture2DArray(P,0):ne.setTexture2D(P,0),jt.unbindTexture()},this.resetState=function(){F=0,B=0,O=null,jt.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===Md?"display-p3":"srgb",n.unpackColorSpace=ze.workingColorSpace===cu?"display-p3":"srgb"}}class z1 extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ad extends ls{constructor(t=1,n=32,a=16,r=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:a,phiStart:r,phiLength:l,thetaStart:u,thetaLength:f},n=Math.max(3,Math.floor(n)),a=Math.max(2,Math.floor(a));const d=Math.min(u+f,Math.PI);let p=0;const g=[],_=new it,v=new it,S=[],M=[],b=[],x=[];for(let y=0;y<=a;y++){const T=[],w=y/a;let L=0;y===0&&u===0?L=.5/n:y===a&&d===Math.PI&&(L=-.5/n);for(let F=0;F<=n;F++){const B=F/n;_.x=-t*Math.cos(r+B*l)*Math.sin(u+w*f),_.y=t*Math.cos(u+w*f),_.z=t*Math.sin(r+B*l)*Math.sin(u+w*f),M.push(_.x,_.y,_.z),v.copy(_).normalize(),b.push(v.x,v.y,v.z),x.push(B+L,1-w),T.push(p++)}g.push(T)}for(let y=0;y<a;y++)for(let T=0;T<n;T++){const w=g[y][T+1],L=g[y][T],F=g[y+1][T],B=g[y+1][T+1];(y!==0||u>0)&&S.push(w,L,B),(y!==a-1||d<Math.PI)&&S.push(L,F,B)}this.setIndex(S),this.setAttribute("position",new Xi(M,3)),this.setAttribute("normal",new Xi(b,3)),this.setAttribute("uv",new Xi(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ad(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class q0 extends cl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=T_,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class j_ extends Ln{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(t),this.intensity=n}dispose(){}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const id=new en,X0=new it,W0=new it;class P1{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new yn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,a=this.matrix;X0.setFromMatrixPosition(t.matrixWorld),n.position.copy(X0),W0.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(W0),n.updateMatrixWorld(),id.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(id),a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(id)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class B1 extends P1{constructor(){super(new G_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class I1 extends j_{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new B1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class F1 extends j_{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Y0{constructor(t=1,n=0,a=0){return this.radius=t,this.phi=n,this.theta=a,this}set(t,n,a){return this.radius=t,this.phi=n,this.theta=a,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,a){return this.radius=Math.sqrt(t*t+n*n+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,a),this.phi=Math.acos(Pn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);const j0={type:"change"},ad={type:"start"},Z0={type:"end"},qc=new L_,K0=new $a,H1=Math.cos(70*TM.DEG2RAD);class G1 extends Gs{constructor(t,n){super(),this.object=t,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new it,this.cursor=new it,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Tr.ROTATE,MIDDLE:Tr.DOLLY,RIGHT:Tr.PAN},this.touches={ONE:Ar.ROTATE,TWO:Ar.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return f.phi},this.getAzimuthalAngle=function(){return f.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Dt),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Dt),this._domElementKeyEvents=null},this.saveState=function(){a.target0.copy(a.target),a.position0.copy(a.object.position),a.zoom0=a.object.zoom},this.reset=function(){a.target.copy(a.target0),a.object.position.copy(a.position0),a.object.zoom=a.zoom0,a.object.updateProjectionMatrix(),a.dispatchEvent(j0),a.update(),l=r.NONE},this.update=(function(){const A=new it,ht=new Hs().setFromUnitVectors(t.up,new it(0,1,0)),rt=ht.clone().invert(),dt=new it,bt=new Hs,Gt=new it,ee=2*Math.PI;return function(Ke=null){const Me=a.object.position;A.copy(Me).sub(a.target),A.applyQuaternion(ht),f.setFromVector3(A),a.autoRotate&&l===r.NONE&&et(R(Ke)),a.enableDamping?(f.theta+=d.theta*a.dampingFactor,f.phi+=d.phi*a.dampingFactor):(f.theta+=d.theta,f.phi+=d.phi);let je=a.minAzimuthAngle,Ve=a.maxAzimuthAngle;isFinite(je)&&isFinite(Ve)&&(je<-Math.PI?je+=ee:je>Math.PI&&(je-=ee),Ve<-Math.PI?Ve+=ee:Ve>Math.PI&&(Ve-=ee),je<=Ve?f.theta=Math.max(je,Math.min(Ve,f.theta)):f.theta=f.theta>(je+Ve)/2?Math.max(je,f.theta):Math.min(Ve,f.theta)),f.phi=Math.max(a.minPolarAngle,Math.min(a.maxPolarAngle,f.phi)),f.makeSafe(),a.enableDamping===!0?a.target.addScaledVector(g,a.dampingFactor):a.target.add(g),a.target.sub(a.cursor),a.target.clampLength(a.minTargetRadius,a.maxTargetRadius),a.target.add(a.cursor);let Un=!1;if(a.zoomToCursor&&B||a.object.isOrthographicCamera)f.radius=Mt(f.radius);else{const An=f.radius;f.radius=Mt(f.radius*p),Un=An!=f.radius}if(A.setFromSpherical(f),A.applyQuaternion(rt),Me.copy(a.target).add(A),a.object.lookAt(a.target),a.enableDamping===!0?(d.theta*=1-a.dampingFactor,d.phi*=1-a.dampingFactor,g.multiplyScalar(1-a.dampingFactor)):(d.set(0,0,0),g.set(0,0,0)),a.zoomToCursor&&B){let An=null;if(a.object.isPerspectiveCamera){const _i=A.length();An=Mt(_i*p);const Li=_i-An;a.object.position.addScaledVector(L,Li),a.object.updateMatrixWorld(),Un=!!Li}else if(a.object.isOrthographicCamera){const _i=new it(F.x,F.y,0);_i.unproject(a.object);const Li=a.object.zoom;a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/p)),a.object.updateProjectionMatrix(),Un=Li!==a.object.zoom;const yi=new it(F.x,F.y,0);yi.unproject(a.object),a.object.position.sub(yi).add(_i),a.object.updateMatrixWorld(),An=A.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),a.zoomToCursor=!1;An!==null&&(this.screenSpacePanning?a.target.set(0,0,-1).transformDirection(a.object.matrix).multiplyScalar(An).add(a.object.position):(qc.origin.copy(a.object.position),qc.direction.set(0,0,-1).transformDirection(a.object.matrix),Math.abs(a.object.up.dot(qc.direction))<H1?t.lookAt(a.target):(K0.setFromNormalAndCoplanarPoint(a.object.up,a.target),qc.intersectPlane(K0,a.target))))}else if(a.object.isOrthographicCamera){const An=a.object.zoom;a.object.zoom=Math.max(a.minZoom,Math.min(a.maxZoom,a.object.zoom/p)),An!==a.object.zoom&&(a.object.updateProjectionMatrix(),Un=!0)}return p=1,B=!1,Un||dt.distanceToSquared(a.object.position)>u||8*(1-bt.dot(a.object.quaternion))>u||Gt.distanceToSquared(a.target)>u?(a.dispatchEvent(j0),dt.copy(a.object.position),bt.copy(a.object.quaternion),Gt.copy(a.target),!0):!1}})(),this.dispose=function(){a.domElement.removeEventListener("contextmenu",Vt),a.domElement.removeEventListener("pointerdown",He),a.domElement.removeEventListener("pointercancel",U),a.domElement.removeEventListener("wheel",xt),a.domElement.removeEventListener("pointermove",V),a.domElement.removeEventListener("pointerup",U),a.domElement.getRootNode().removeEventListener("keydown",qt,{capture:!0}),a._domElementKeyEvents!==null&&(a._domElementKeyEvents.removeEventListener("keydown",Dt),a._domElementKeyEvents=null)};const a=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let l=r.NONE;const u=1e-6,f=new Y0,d=new Y0;let p=1;const g=new it,_=new se,v=new se,S=new se,M=new se,b=new se,x=new se,y=new se,T=new se,w=new se,L=new it,F=new se;let B=!1;const O=[],q={};let z=!1;function R(A){return A!==null?2*Math.PI/60*a.autoRotateSpeed*A:2*Math.PI/60/60*a.autoRotateSpeed}function H(A){const ht=Math.abs(A*.01);return Math.pow(.95,a.zoomSpeed*ht)}function et(A){d.theta-=A}function G(A){d.phi-=A}const Q=(function(){const A=new it;return function(rt,dt){A.setFromMatrixColumn(dt,0),A.multiplyScalar(-rt),g.add(A)}})(),K=(function(){const A=new it;return function(rt,dt){a.screenSpacePanning===!0?A.setFromMatrixColumn(dt,1):(A.setFromMatrixColumn(dt,0),A.crossVectors(a.object.up,A)),A.multiplyScalar(rt),g.add(A)}})(),N=(function(){const A=new it;return function(rt,dt){const bt=a.domElement;if(a.object.isPerspectiveCamera){const Gt=a.object.position;A.copy(Gt).sub(a.target);let ee=A.length();ee*=Math.tan(a.object.fov/2*Math.PI/180),Q(2*rt*ee/bt.clientHeight,a.object.matrix),K(2*dt*ee/bt.clientHeight,a.object.matrix)}else a.object.isOrthographicCamera?(Q(rt*(a.object.right-a.object.left)/a.object.zoom/bt.clientWidth,a.object.matrix),K(dt*(a.object.top-a.object.bottom)/a.object.zoom/bt.clientHeight,a.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),a.enablePan=!1)}})();function Y(A){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?p/=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function X(A){a.object.isPerspectiveCamera||a.object.isOrthographicCamera?p*=A:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),a.enableZoom=!1)}function mt(A,ht){if(!a.zoomToCursor)return;B=!0;const rt=a.domElement.getBoundingClientRect(),dt=A-rt.left,bt=ht-rt.top,Gt=rt.width,ee=rt.height;F.x=dt/Gt*2-1,F.y=-(bt/ee)*2+1,L.set(F.x,F.y,1).unproject(a.object).sub(a.object.position).normalize()}function Mt(A){return Math.max(a.minDistance,Math.min(a.maxDistance,A))}function I(A){_.set(A.clientX,A.clientY)}function Z(A){mt(A.clientX,A.clientX),y.set(A.clientX,A.clientY)}function yt(A){M.set(A.clientX,A.clientY)}function J(A){v.set(A.clientX,A.clientY),S.subVectors(v,_).multiplyScalar(a.rotateSpeed);const ht=a.domElement;et(2*Math.PI*S.x/ht.clientHeight),G(2*Math.PI*S.y/ht.clientHeight),_.copy(v),a.update()}function pt(A){T.set(A.clientX,A.clientY),w.subVectors(T,y),w.y>0?Y(H(w.y)):w.y<0&&X(H(w.y)),y.copy(T),a.update()}function Et(A){b.set(A.clientX,A.clientY),x.subVectors(b,M).multiplyScalar(a.panSpeed),N(x.x,x.y),M.copy(b),a.update()}function St(A){mt(A.clientX,A.clientY),A.deltaY<0?X(H(A.deltaY)):A.deltaY>0&&Y(H(A.deltaY)),a.update()}function Yt(A){let ht=!1;switch(A.code){case a.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?G(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):N(0,a.keyPanSpeed),ht=!0;break;case a.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?G(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):N(0,-a.keyPanSpeed),ht=!0;break;case a.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?et(2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):N(a.keyPanSpeed,0),ht=!0;break;case a.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?et(-2*Math.PI*a.rotateSpeed/a.domElement.clientHeight):N(-a.keyPanSpeed,0),ht=!0;break}ht&&(A.preventDefault(),a.update())}function It(A){if(O.length===1)_.set(A.pageX,A.pageY);else{const ht=Xt(A),rt=.5*(A.pageX+ht.x),dt=.5*(A.pageY+ht.y);_.set(rt,dt)}}function re(A){if(O.length===1)M.set(A.pageX,A.pageY);else{const ht=Xt(A),rt=.5*(A.pageX+ht.x),dt=.5*(A.pageY+ht.y);M.set(rt,dt)}}function j(A){const ht=Xt(A),rt=A.pageX-ht.x,dt=A.pageY-ht.y,bt=Math.sqrt(rt*rt+dt*dt);y.set(0,bt)}function ue(A){a.enableZoom&&j(A),a.enablePan&&re(A)}function fe(A){a.enableZoom&&j(A),a.enableRotate&&It(A)}function Se(A){if(O.length==1)v.set(A.pageX,A.pageY);else{const rt=Xt(A),dt=.5*(A.pageX+rt.x),bt=.5*(A.pageY+rt.y);v.set(dt,bt)}S.subVectors(v,_).multiplyScalar(a.rotateSpeed);const ht=a.domElement;et(2*Math.PI*S.x/ht.clientHeight),G(2*Math.PI*S.y/ht.clientHeight),_.copy(v)}function jt(A){if(O.length===1)b.set(A.pageX,A.pageY);else{const ht=Xt(A),rt=.5*(A.pageX+ht.x),dt=.5*(A.pageY+ht.y);b.set(rt,dt)}x.subVectors(b,M).multiplyScalar(a.panSpeed),N(x.x,x.y),M.copy(b)}function me(A){const ht=Xt(A),rt=A.pageX-ht.x,dt=A.pageY-ht.y,bt=Math.sqrt(rt*rt+dt*dt);T.set(0,bt),w.set(0,Math.pow(T.y/y.y,a.zoomSpeed)),Y(w.y),y.copy(T);const Gt=(A.pageX+ht.x)*.5,ee=(A.pageY+ht.y)*.5;mt(Gt,ee)}function le(A){a.enableZoom&&me(A),a.enablePan&&jt(A)}function ne(A){a.enableZoom&&me(A),a.enableRotate&&Se(A)}function He(A){a.enabled!==!1&&(O.length===0&&(a.domElement.setPointerCapture(A.pointerId),a.domElement.addEventListener("pointermove",V),a.domElement.addEventListener("pointerup",U)),!Ct(A)&&(he(A),A.pointerType==="touch"?ie(A):ft(A)))}function V(A){a.enabled!==!1&&(A.pointerType==="touch"?wt(A):Tt(A))}function U(A){switch(Qt(A),O.length){case 0:a.domElement.releasePointerCapture(A.pointerId),a.domElement.removeEventListener("pointermove",V),a.domElement.removeEventListener("pointerup",U),a.dispatchEvent(Z0),l=r.NONE;break;case 1:const ht=O[0],rt=q[ht];ie({pointerId:ht,pageX:rt.x,pageY:rt.y});break}}function ft(A){let ht;switch(A.button){case 0:ht=a.mouseButtons.LEFT;break;case 1:ht=a.mouseButtons.MIDDLE;break;case 2:ht=a.mouseButtons.RIGHT;break;default:ht=-1}switch(ht){case Tr.DOLLY:if(a.enableZoom===!1)return;Z(A),l=r.DOLLY;break;case Tr.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(a.enablePan===!1)return;yt(A),l=r.PAN}else{if(a.enableRotate===!1)return;I(A),l=r.ROTATE}break;case Tr.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(a.enableRotate===!1)return;I(A),l=r.ROTATE}else{if(a.enablePan===!1)return;yt(A),l=r.PAN}break;default:l=r.NONE}l!==r.NONE&&a.dispatchEvent(ad)}function Tt(A){switch(l){case r.ROTATE:if(a.enableRotate===!1)return;J(A);break;case r.DOLLY:if(a.enableZoom===!1)return;pt(A);break;case r.PAN:if(a.enablePan===!1)return;Et(A);break}}function xt(A){a.enabled===!1||a.enableZoom===!1||l!==r.NONE||(A.preventDefault(),a.dispatchEvent(ad),St(At(A)),a.dispatchEvent(Z0))}function At(A){const ht=A.deltaMode,rt={clientX:A.clientX,clientY:A.clientY,deltaY:A.deltaY};switch(ht){case 1:rt.deltaY*=16;break;case 2:rt.deltaY*=100;break}return A.ctrlKey&&!z&&(rt.deltaY*=10),rt}function qt(A){A.key==="Control"&&(z=!0,a.domElement.getRootNode().addEventListener("keyup",Lt,{passive:!0,capture:!0}))}function Lt(A){A.key==="Control"&&(z=!1,a.domElement.getRootNode().removeEventListener("keyup",Lt,{passive:!0,capture:!0}))}function Dt(A){a.enabled===!1||a.enablePan===!1||Yt(A)}function ie(A){switch($t(A),O.length){case 1:switch(a.touches.ONE){case Ar.ROTATE:if(a.enableRotate===!1)return;It(A),l=r.TOUCH_ROTATE;break;case Ar.PAN:if(a.enablePan===!1)return;re(A),l=r.TOUCH_PAN;break;default:l=r.NONE}break;case 2:switch(a.touches.TWO){case Ar.DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;ue(A),l=r.TOUCH_DOLLY_PAN;break;case Ar.DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;fe(A),l=r.TOUCH_DOLLY_ROTATE;break;default:l=r.NONE}break;default:l=r.NONE}l!==r.NONE&&a.dispatchEvent(ad)}function wt(A){switch($t(A),l){case r.TOUCH_ROTATE:if(a.enableRotate===!1)return;Se(A),a.update();break;case r.TOUCH_PAN:if(a.enablePan===!1)return;jt(A),a.update();break;case r.TOUCH_DOLLY_PAN:if(a.enableZoom===!1&&a.enablePan===!1)return;le(A),a.update();break;case r.TOUCH_DOLLY_ROTATE:if(a.enableZoom===!1&&a.enableRotate===!1)return;ne(A),a.update();break;default:l=r.NONE}}function Vt(A){a.enabled!==!1&&A.preventDefault()}function he(A){O.push(A.pointerId)}function Qt(A){delete q[A.pointerId];for(let ht=0;ht<O.length;ht++)if(O[ht]==A.pointerId){O.splice(ht,1);return}}function Ct(A){for(let ht=0;ht<O.length;ht++)if(O[ht]==A.pointerId)return!0;return!1}function $t(A){let ht=q[A.pointerId];ht===void 0&&(ht=new se,q[A.pointerId]=ht),ht.set(A.pageX,A.pageY)}function Xt(A){const ht=A.pointerId===O[0]?O[1]:O[0];return q[ht]}a.domElement.addEventListener("contextmenu",Vt),a.domElement.addEventListener("pointerdown",He),a.domElement.addEventListener("pointercancel",U),a.domElement.addEventListener("wheel",xt,{passive:!1}),a.domElement.getRootNode().addEventListener("keydown",qt,{passive:!0,capture:!0}),this.update()}}class Di{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const n=this.elements;n[0]=t.x,n[4]=t.y,n[8]=t.z}getTrace(t){t===void 0&&(t=new C);const n=this.elements;return t.x=n[0],t.y=n[4],t.z=n[8],t}vmult(t,n){n===void 0&&(n=new C);const a=this.elements,r=t.x,l=t.y,u=t.z;return n.x=a[0]*r+a[1]*l+a[2]*u,n.y=a[3]*r+a[4]*l+a[5]*u,n.z=a[6]*r+a[7]*l+a[8]*u,n}smult(t){for(let n=0;n<this.elements.length;n++)this.elements[n]*=t}mmult(t,n){n===void 0&&(n=new Di);const a=this.elements,r=t.elements,l=n.elements,u=a[0],f=a[1],d=a[2],p=a[3],g=a[4],_=a[5],v=a[6],S=a[7],M=a[8],b=r[0],x=r[1],y=r[2],T=r[3],w=r[4],L=r[5],F=r[6],B=r[7],O=r[8];return l[0]=u*b+f*T+d*F,l[1]=u*x+f*w+d*B,l[2]=u*y+f*L+d*O,l[3]=p*b+g*T+_*F,l[4]=p*x+g*w+_*B,l[5]=p*y+g*L+_*O,l[6]=v*b+S*T+M*F,l[7]=v*x+S*w+M*B,l[8]=v*y+S*L+M*O,n}scale(t,n){n===void 0&&(n=new Di);const a=this.elements,r=n.elements;for(let l=0;l!==3;l++)r[3*l+0]=t.x*a[3*l+0],r[3*l+1]=t.y*a[3*l+1],r[3*l+2]=t.z*a[3*l+2];return n}solve(t,n){n===void 0&&(n=new C);const a=3,r=4,l=[];let u,f;for(u=0;u<a*r;u++)l.push(0);for(u=0;u<3;u++)for(f=0;f<3;f++)l[u+r*f]=this.elements[u+3*f];l[3]=t.x,l[7]=t.y,l[11]=t.z;let d=3;const p=d;let g;const _=4;let v;do{if(u=p-d,l[u+r*u]===0){for(f=u+1;f<p;f++)if(l[u+r*f]!==0){g=_;do v=_-g,l[v+r*u]+=l[v+r*f];while(--g);break}}if(l[u+r*u]!==0)for(f=u+1;f<p;f++){const S=l[u+r*f]/l[u+r*u];g=_;do v=_-g,l[v+r*f]=v<=u?0:l[v+r*f]-l[v+r*u]*S;while(--g)}}while(--d);if(n.z=l[2*r+3]/l[2*r+2],n.y=(l[1*r+3]-l[1*r+2]*n.z)/l[1*r+1],n.x=(l[0*r+3]-l[0*r+2]*n.z-l[0*r+1]*n.y)/l[0*r+0],isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||n.x===1/0||n.y===1/0||n.z===1/0)throw`Could not solve equation! Got x=[${n.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return n}e(t,n,a){if(a===void 0)return this.elements[n+3*t];this.elements[n+3*t]=a}copy(t){for(let n=0;n<t.elements.length;n++)this.elements[n]=t.elements[n];return this}toString(){let t="";for(let a=0;a<9;a++)t+=this.elements[a]+",";return t}reverse(t){t===void 0&&(t=new Di);const n=3,a=6,r=V1;let l,u;for(l=0;l<3;l++)for(u=0;u<3;u++)r[l+a*u]=this.elements[l+3*u];r[3]=1,r[9]=0,r[15]=0,r[4]=0,r[10]=1,r[16]=0,r[5]=0,r[11]=0,r[17]=1;let f=3;const d=f;let p;const g=a;let _;do{if(l=d-f,r[l+a*l]===0){for(u=l+1;u<d;u++)if(r[l+a*u]!==0){p=g;do _=g-p,r[_+a*l]+=r[_+a*u];while(--p);break}}if(r[l+a*l]!==0)for(u=l+1;u<d;u++){const v=r[l+a*u]/r[l+a*l];p=g;do _=g-p,r[_+a*u]=_<=l?0:r[_+a*u]-r[_+a*l]*v;while(--p)}}while(--f);l=2;do{u=l-1;do{const v=r[l+a*u]/r[l+a*l];p=a;do _=a-p,r[_+a*u]=r[_+a*u]-r[_+a*l]*v;while(--p)}while(u--)}while(--l);l=2;do{const v=1/r[l+a*l];p=a;do _=a-p,r[_+a*l]=r[_+a*l]*v;while(--p)}while(l--);l=2;do{u=2;do{if(_=r[n+u+a*l],isNaN(_)||_===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(l,u,_)}while(u--)}while(l--);return t}setRotationFromQuaternion(t){const n=t.x,a=t.y,r=t.z,l=t.w,u=n+n,f=a+a,d=r+r,p=n*u,g=n*f,_=n*d,v=a*f,S=a*d,M=r*d,b=l*u,x=l*f,y=l*d,T=this.elements;return T[0]=1-(v+M),T[1]=g-y,T[2]=_+x,T[3]=g+y,T[4]=1-(p+M),T[5]=S-b,T[6]=_-x,T[7]=S+b,T[8]=1-(p+v),this}transpose(t){t===void 0&&(t=new Di);const n=this.elements,a=t.elements;let r;return a[0]=n[0],a[4]=n[4],a[8]=n[8],r=n[1],a[1]=n[3],a[3]=r,r=n[2],a[2]=n[6],a[6]=r,r=n[5],a[5]=n[7],a[7]=r,t}}const V1=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,n,a){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),this.x=t,this.y=n,this.z=a}cross(t,n){n===void 0&&(n=new C);const a=t.x,r=t.y,l=t.z,u=this.x,f=this.y,d=this.z;return n.x=f*l-d*r,n.y=d*a-u*l,n.z=u*r-f*a,n}set(t,n,a){return this.x=t,this.y=n,this.z=a,this}setZero(){this.x=this.y=this.z=0}vadd(t,n){if(n)n.x=t.x+this.x,n.y=t.y+this.y,n.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,n){if(n)n.x=this.x-t.x,n.y=this.y-t.y,n.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Di([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,n=this.y,a=this.z,r=Math.sqrt(t*t+n*n+a*a);if(r>0){const l=1/r;this.x*=l,this.y*=l,this.z*=l}else this.x=0,this.y=0,this.z=0;return r}unit(t){t===void 0&&(t=new C);const n=this.x,a=this.y,r=this.z;let l=Math.sqrt(n*n+a*a+r*r);return l>0?(l=1/l,t.x=n*l,t.y=a*l,t.z=r*l):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,n=this.y,a=this.z;return Math.sqrt(t*t+n*n+a*a)}lengthSquared(){return this.dot(this)}distanceTo(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,f=t.z;return Math.sqrt((l-n)*(l-n)+(u-a)*(u-a)+(f-r)*(f-r))}distanceSquared(t){const n=this.x,a=this.y,r=this.z,l=t.x,u=t.y,f=t.z;return(l-n)*(l-n)+(u-a)*(u-a)+(f-r)*(f-r)}scale(t,n){n===void 0&&(n=new C);const a=this.x,r=this.y,l=this.z;return n.x=t*a,n.y=t*r,n.z=t*l,n}vmul(t,n){return n===void 0&&(n=new C),n.x=t.x*this.x,n.y=t.y*this.y,n.z=t.z*this.z,n}addScaledVector(t,n,a){return a===void 0&&(a=new C),a.x=this.x+t*n.x,a.y=this.y+t*n.y,a.z=this.z+t*n.z,a}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,n){const a=this.length();if(a>0){const r=k1,l=1/a;r.set(this.x*l,this.y*l,this.z*l);const u=q1;Math.abs(r.x)<.9?(u.set(1,0,0),r.cross(u,t)):(u.set(0,1,0),r.cross(u,t)),r.cross(t,n)}else t.set(1,0,0),n.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,n,a){const r=this.x,l=this.y,u=this.z;a.x=r+(t.x-r)*n,a.y=l+(t.y-l)*n,a.z=u+(t.z-u)*n}almostEquals(t,n){return n===void 0&&(n=1e-6),!(Math.abs(this.x-t.x)>n||Math.abs(this.y-t.y)>n||Math.abs(this.z-t.z)>n)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,n){return this.negate(Q0),Q0.almostEquals(t,n)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const k1=new C,q1=new C,Q0=new C;class si{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,n,a,r){const l=this.lowerBound,u=this.upperBound,f=a;l.copy(t[0]),f&&f.vmult(l,l),u.copy(l);for(let d=1;d<t.length;d++){let p=t[d];f&&(f.vmult(p,J0),p=J0),p.x>u.x&&(u.x=p.x),p.x<l.x&&(l.x=p.x),p.y>u.y&&(u.y=p.y),p.y<l.y&&(l.y=p.y),p.z>u.z&&(u.z=p.z),p.z<l.z&&(l.z=p.z)}return n&&(n.vadd(l,l),n.vadd(u,u)),r&&(l.x-=r,l.y-=r,l.z-=r,u.x+=r,u.y+=r,u.z+=r),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new si().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,l=t.upperBound,u=r.x<=a.x&&a.x<=l.x||n.x<=l.x&&l.x<=a.x,f=r.y<=a.y&&a.y<=l.y||n.y<=l.y&&l.y<=a.y,d=r.z<=a.z&&a.z<=l.z||n.z<=l.z&&l.z<=a.z;return u&&f&&d}volume(){const t=this.lowerBound,n=this.upperBound;return(n.x-t.x)*(n.y-t.y)*(n.z-t.z)}contains(t){const n=this.lowerBound,a=this.upperBound,r=t.lowerBound,l=t.upperBound;return n.x<=r.x&&a.x>=l.x&&n.y<=r.y&&a.y>=l.y&&n.z<=r.z&&a.z>=l.z}getCorners(t,n,a,r,l,u,f,d){const p=this.lowerBound,g=this.upperBound;t.copy(p),n.set(g.x,p.y,p.z),a.set(g.x,g.y,p.z),r.set(p.x,g.y,g.z),l.set(g.x,p.y,g.z),u.set(p.x,g.y,p.z),f.set(p.x,p.y,g.z),d.copy(g)}toLocalFrame(t,n){const a=$0,r=a[0],l=a[1],u=a[2],f=a[3],d=a[4],p=a[5],g=a[6],_=a[7];this.getCorners(r,l,u,f,d,p,g,_);for(let v=0;v!==8;v++){const S=a[v];t.pointToLocal(S,S)}return n.setFromPoints(a)}toWorldFrame(t,n){const a=$0,r=a[0],l=a[1],u=a[2],f=a[3],d=a[4],p=a[5],g=a[6],_=a[7];this.getCorners(r,l,u,f,d,p,g,_);for(let v=0;v!==8;v++){const S=a[v];t.pointToWorld(S,S)}return n.setFromPoints(a)}overlapsRay(t){const{direction:n,from:a}=t,r=1/n.x,l=1/n.y,u=1/n.z,f=(this.lowerBound.x-a.x)*r,d=(this.upperBound.x-a.x)*r,p=(this.lowerBound.y-a.y)*l,g=(this.upperBound.y-a.y)*l,_=(this.lowerBound.z-a.z)*u,v=(this.upperBound.z-a.z)*u,S=Math.max(Math.max(Math.min(f,d),Math.min(p,g)),Math.min(_,v)),M=Math.min(Math.min(Math.max(f,d),Math.max(p,g)),Math.max(_,v));return!(M<0||S>M)}}const J0=new C,$0=[new C,new C,new C,new C,new C,new C,new C,new C];class t_{constructor(){this.matrix=[]}get(t,n){let{index:a}=t,{index:r}=n;if(r>a){const l=r;r=a,a=l}return this.matrix[(a*(a+1)>>1)+r-1]}set(t,n,a){let{index:r}=t,{index:l}=n;if(l>r){const u=l;l=r,r=u}this.matrix[(r*(r+1)>>1)+l-1]=a?1:0}reset(){for(let t=0,n=this.matrix.length;t!==n;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Z_{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;return a[t]===void 0&&(a[t]=[]),a[t].includes(n)||a[t].push(n),this}hasEventListener(t,n){if(this._listeners===void 0)return!1;const a=this._listeners;return!!(a[t]!==void 0&&a[t].includes(n))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,n){if(this._listeners===void 0)return this;const a=this._listeners;if(a[t]===void 0)return this;const r=a[t].indexOf(n);return r!==-1&&a[t].splice(r,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const a=this._listeners[t.type];if(a!==void 0){t.target=this;for(let r=0,l=a.length;r<l;r++)a[r].call(this,t)}return this}}class fn{constructor(t,n,a,r){t===void 0&&(t=0),n===void 0&&(n=0),a===void 0&&(a=0),r===void 0&&(r=1),this.x=t,this.y=n,this.z=a,this.w=r}set(t,n,a,r){return this.x=t,this.y=n,this.z=a,this.w=r,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,n){const a=Math.sin(n*.5);return this.x=t.x*a,this.y=t.y*a,this.z=t.z*a,this.w=Math.cos(n*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const n=2*Math.acos(this.w),a=Math.sqrt(1-this.w*this.w);return a<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/a,t.y=this.y/a,t.z=this.z/a),[t,n]}setFromVectors(t,n){if(t.isAntiparallelTo(n)){const a=X1,r=W1;t.tangents(a,r),this.setFromAxisAngle(a,Math.PI)}else{const a=t.cross(n);this.x=a.x,this.y=a.y,this.z=a.z,this.w=Math.sqrt(t.length()**2*n.length()**2)+t.dot(n),this.normalize()}return this}mult(t,n){n===void 0&&(n=new fn);const a=this.x,r=this.y,l=this.z,u=this.w,f=t.x,d=t.y,p=t.z,g=t.w;return n.x=a*g+u*f+r*p-l*d,n.y=r*g+u*d+l*f-a*p,n.z=l*g+u*p+a*d-r*f,n.w=u*g-a*f-r*d-l*p,n}inverse(t){t===void 0&&(t=new fn);const n=this.x,a=this.y,r=this.z,l=this.w;this.conjugate(t);const u=1/(n*n+a*a+r*r+l*l);return t.x*=u,t.y*=u,t.z*=u,t.w*=u,t}conjugate(t){return t===void 0&&(t=new fn),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,n){n===void 0&&(n=new C);const a=t.x,r=t.y,l=t.z,u=this.x,f=this.y,d=this.z,p=this.w,g=p*a+f*l-d*r,_=p*r+d*a-u*l,v=p*l+u*r-f*a,S=-u*a-f*r-d*l;return n.x=g*p+S*-u+_*-d-v*-f,n.y=_*p+S*-f+v*-u-g*-d,n.z=v*p+S*-d+g*-f-_*-u,n}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,n){n===void 0&&(n="YZX");let a,r,l;const u=this.x,f=this.y,d=this.z,p=this.w;switch(n){case"YZX":const g=u*f+d*p;if(g>.499&&(a=2*Math.atan2(u,p),r=Math.PI/2,l=0),g<-.499&&(a=-2*Math.atan2(u,p),r=-Math.PI/2,l=0),a===void 0){const _=u*u,v=f*f,S=d*d;a=Math.atan2(2*f*p-2*u*d,1-2*v-2*S),r=Math.asin(2*g),l=Math.atan2(2*u*p-2*f*d,1-2*_-2*S)}break;default:throw new Error(`Euler order ${n} not supported yet.`)}t.y=a,t.z=r,t.x=l}setFromEuler(t,n,a,r){r===void 0&&(r="XYZ");const l=Math.cos(t/2),u=Math.cos(n/2),f=Math.cos(a/2),d=Math.sin(t/2),p=Math.sin(n/2),g=Math.sin(a/2);return r==="XYZ"?(this.x=d*u*f+l*p*g,this.y=l*p*f-d*u*g,this.z=l*u*g+d*p*f,this.w=l*u*f-d*p*g):r==="YXZ"?(this.x=d*u*f+l*p*g,this.y=l*p*f-d*u*g,this.z=l*u*g-d*p*f,this.w=l*u*f+d*p*g):r==="ZXY"?(this.x=d*u*f-l*p*g,this.y=l*p*f+d*u*g,this.z=l*u*g+d*p*f,this.w=l*u*f-d*p*g):r==="ZYX"?(this.x=d*u*f-l*p*g,this.y=l*p*f+d*u*g,this.z=l*u*g-d*p*f,this.w=l*u*f+d*p*g):r==="YZX"?(this.x=d*u*f+l*p*g,this.y=l*p*f+d*u*g,this.z=l*u*g-d*p*f,this.w=l*u*f-d*p*g):r==="XZY"&&(this.x=d*u*f-l*p*g,this.y=l*p*f-d*u*g,this.z=l*u*g+d*p*f,this.w=l*u*f+d*p*g),this}clone(){return new fn(this.x,this.y,this.z,this.w)}slerp(t,n,a){a===void 0&&(a=new fn);const r=this.x,l=this.y,u=this.z,f=this.w;let d=t.x,p=t.y,g=t.z,_=t.w,v,S,M,b,x;return S=r*d+l*p+u*g+f*_,S<0&&(S=-S,d=-d,p=-p,g=-g,_=-_),1-S>1e-6?(v=Math.acos(S),M=Math.sin(v),b=Math.sin((1-n)*v)/M,x=Math.sin(n*v)/M):(b=1-n,x=n),a.x=b*r+x*d,a.y=b*l+x*p,a.z=b*u+x*g,a.w=b*f+x*_,a}integrate(t,n,a,r){r===void 0&&(r=new fn);const l=t.x*a.x,u=t.y*a.y,f=t.z*a.z,d=this.x,p=this.y,g=this.z,_=this.w,v=n*.5;return r.x+=v*(l*_+u*g-f*p),r.y+=v*(u*_+f*d-l*g),r.z+=v*(f*_+l*p-u*d),r.w+=v*(-l*d-u*p-f*g),r}}const X1=new C,W1=new C,Y1={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class zt{constructor(t){t===void 0&&(t={}),this.id=zt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,n){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,n,a,r){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}zt.idCounter=0;zt.types=Y1;class De{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new fn,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,n){return De.pointToLocalFrame(this.position,this.quaternion,t,n)}pointToWorld(t,n){return De.pointToWorldFrame(this.position,this.quaternion,t,n)}vectorToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n}static pointToLocalFrame(t,n,a,r){return r===void 0&&(r=new C),a.vsub(t,r),n.conjugate(e_),e_.vmult(r,r),r}static pointToWorldFrame(t,n,a,r){return r===void 0&&(r=new C),n.vmult(a,r),r.vadd(t,r),r}static vectorToWorldFrame(t,n,a){return a===void 0&&(a=new C),t.vmult(n,a),a}static vectorToLocalFrame(t,n,a,r){return r===void 0&&(r=new C),n.w*=-1,n.vmult(a,r),n.w*=-1,r}}const e_=new fn;class rl extends zt{constructor(t){t===void 0&&(t={});const{vertices:n=[],faces:a=[],normals:r=[],axes:l,boundingSphereRadius:u}=t;super({type:zt.types.CONVEXPOLYHEDRON}),this.vertices=n,this.faces=a,this.faceNormals=r,this.faceNormals.length===0&&this.computeNormals(),u?this.boundingSphereRadius=u:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=l?l.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,n=this.vertices,a=this.uniqueEdges;a.length=0;const r=new C;for(let l=0;l!==t.length;l++){const u=t[l],f=u.length;for(let d=0;d!==f;d++){const p=(d+1)%f;n[u[d]].vsub(n[u[p]],r),r.normalize();let g=!1;for(let _=0;_!==a.length;_++)if(a[_].almostEquals(r)||a[_].almostEquals(r)){g=!0;break}g||a.push(r.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let r=0;r<this.faces[t].length;r++)if(!this.vertices[this.faces[t][r]])throw new Error(`Vertex ${this.faces[t][r]} not found!`);const n=this.faceNormals[t]||new C;this.getFaceNormal(t,n),n.negate(n),this.faceNormals[t]=n;const a=this.vertices[this.faces[t][0]];if(n.dot(a)<0){console.error(`.faceNormals[${t}] = Vec3(${n.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let r=0;r<this.faces[t].length;r++)console.warn(`.vertices[${this.faces[t][r]}] = Vec3(${this.vertices[this.faces[t][r]].toString()})`)}}}getFaceNormal(t,n){const a=this.faces[t],r=this.vertices[a[0]],l=this.vertices[a[1]],u=this.vertices[a[2]];rl.computeNormal(r,l,u,n)}static computeNormal(t,n,a,r){const l=new C,u=new C;n.vsub(t,u),a.vsub(n,l),l.cross(u,r),r.isZero()||r.normalize()}clipAgainstHull(t,n,a,r,l,u,f,d,p){const g=new C;let _=-1,v=-Number.MAX_VALUE;for(let M=0;M<a.faces.length;M++){g.copy(a.faceNormals[M]),l.vmult(g,g);const b=g.dot(u);b>v&&(v=b,_=M)}const S=[];for(let M=0;M<a.faces[_].length;M++){const b=a.vertices[a.faces[_][M]],x=new C;x.copy(b),l.vmult(x,x),r.vadd(x,x),S.push(x)}_>=0&&this.clipFaceAgainstHull(u,t,n,S,f,d,p)}findSeparatingAxis(t,n,a,r,l,u,f,d){const p=new C,g=new C,_=new C,v=new C,S=new C,M=new C;let b=Number.MAX_VALUE;const x=this;if(x.uniqueAxes)for(let y=0;y!==x.uniqueAxes.length;y++){a.vmult(x.uniqueAxes[y],p);const T=x.testSepAxis(p,t,n,a,r,l);if(T===!1)return!1;T<b&&(b=T,u.copy(p))}else{const y=f?f.length:x.faces.length;for(let T=0;T<y;T++){const w=f?f[T]:T;p.copy(x.faceNormals[w]),a.vmult(p,p);const L=x.testSepAxis(p,t,n,a,r,l);if(L===!1)return!1;L<b&&(b=L,u.copy(p))}}if(t.uniqueAxes)for(let y=0;y!==t.uniqueAxes.length;y++){l.vmult(t.uniqueAxes[y],g);const T=x.testSepAxis(g,t,n,a,r,l);if(T===!1)return!1;T<b&&(b=T,u.copy(g))}else{const y=d?d.length:t.faces.length;for(let T=0;T<y;T++){const w=d?d[T]:T;g.copy(t.faceNormals[w]),l.vmult(g,g);const L=x.testSepAxis(g,t,n,a,r,l);if(L===!1)return!1;L<b&&(b=L,u.copy(g))}}for(let y=0;y!==x.uniqueEdges.length;y++){a.vmult(x.uniqueEdges[y],v);for(let T=0;T!==t.uniqueEdges.length;T++)if(l.vmult(t.uniqueEdges[T],S),v.cross(S,M),!M.almostZero()){M.normalize();const w=x.testSepAxis(M,t,n,a,r,l);if(w===!1)return!1;w<b&&(b=w,u.copy(M))}}return r.vsub(n,_),_.dot(u)>0&&u.negate(u),!0}testSepAxis(t,n,a,r,l,u){const f=this;rl.project(f,t,a,r,sd),rl.project(n,t,l,u,rd);const d=sd[0],p=sd[1],g=rd[0],_=rd[1];if(d<_||g<p)return!1;const v=d-_,S=g-p;return v<S?v:S}calculateLocalInertia(t,n){const a=new C,r=new C;this.computeLocalAABB(r,a);const l=a.x-r.x,u=a.y-r.y,f=a.z-r.z;n.x=1/12*t*(2*u*2*u+2*f*2*f),n.y=1/12*t*(2*l*2*l+2*f*2*f),n.z=1/12*t*(2*u*2*u+2*l*2*l)}getPlaneConstantOfFace(t){const n=this.faces[t],a=this.faceNormals[t],r=this.vertices[n[0]];return-a.dot(r)}clipFaceAgainstHull(t,n,a,r,l,u,f){const d=new C,p=new C,g=new C,_=new C,v=new C,S=new C,M=new C,b=new C,x=this,y=[],T=r,w=y;let L=-1,F=Number.MAX_VALUE;for(let R=0;R<x.faces.length;R++){d.copy(x.faceNormals[R]),a.vmult(d,d);const H=d.dot(t);H<F&&(F=H,L=R)}if(L<0)return;const B=x.faces[L];B.connectedFaces=[];for(let R=0;R<x.faces.length;R++)for(let H=0;H<x.faces[R].length;H++)B.indexOf(x.faces[R][H])!==-1&&R!==L&&B.connectedFaces.indexOf(R)===-1&&B.connectedFaces.push(R);const O=B.length;for(let R=0;R<O;R++){const H=x.vertices[B[R]],et=x.vertices[B[(R+1)%O]];H.vsub(et,p),g.copy(p),a.vmult(g,g),n.vadd(g,g),_.copy(this.faceNormals[L]),a.vmult(_,_),n.vadd(_,_),g.cross(_,v),v.negate(v),S.copy(H),a.vmult(S,S),n.vadd(S,S);const G=B.connectedFaces[R];M.copy(this.faceNormals[G]);const Q=this.getPlaneConstantOfFace(G);b.copy(M),a.vmult(b,b);const K=Q-b.dot(n);for(this.clipFaceAgainstPlane(T,w,b,K);T.length;)T.shift();for(;w.length;)T.push(w.shift())}M.copy(this.faceNormals[L]);const q=this.getPlaneConstantOfFace(L);b.copy(M),a.vmult(b,b);const z=q-b.dot(n);for(let R=0;R<T.length;R++){let H=b.dot(T[R])+z;if(H<=l&&(console.log(`clamped: depth=${H} to minDist=${l}`),H=l),H<=u){const et=T[R];if(H<=1e-6){const G={point:et,normal:b,depth:H};f.push(G)}}}}clipFaceAgainstPlane(t,n,a,r){let l,u;const f=t.length;if(f<2)return n;let d=t[t.length-1],p=t[0];l=a.dot(d)+r;for(let g=0;g<f;g++){if(p=t[g],u=a.dot(p)+r,l<0)if(u<0){const _=new C;_.copy(p),n.push(_)}else{const _=new C;d.lerp(p,l/(l-u),_),n.push(_)}else if(u<0){const _=new C;d.lerp(p,l/(l-u),_),n.push(_),n.push(p)}d=p,l=u}return n}computeWorldVertices(t,n){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const a=this.vertices,r=this.worldVertices;for(let l=0;l!==this.vertices.length;l++)n.vmult(a[l],r[l]),t.vadd(r[l],r[l]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,n){const a=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),n.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let r=0;r<this.vertices.length;r++){const l=a[r];l.x<t.x?t.x=l.x:l.x>n.x&&(n.x=l.x),l.y<t.y?t.y=l.y:l.y>n.y&&(n.y=l.y),l.z<t.z?t.z=l.z:l.z>n.z&&(n.z=l.z)}}computeWorldFaceNormals(t){const n=this.faceNormals.length;for(;this.worldFaceNormals.length<n;)this.worldFaceNormals.push(new C);const a=this.faceNormals,r=this.worldFaceNormals;for(let l=0;l!==n;l++)t.vmult(a[l],r[l]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const n=this.vertices;for(let a=0;a!==n.length;a++){const r=n[a].lengthSquared();r>t&&(t=r)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,n,a,r){const l=this.vertices;let u,f,d,p,g,_,v=new C;for(let S=0;S<l.length;S++){v.copy(l[S]),n.vmult(v,v),t.vadd(v,v);const M=v;(u===void 0||M.x<u)&&(u=M.x),(p===void 0||M.x>p)&&(p=M.x),(f===void 0||M.y<f)&&(f=M.y),(g===void 0||M.y>g)&&(g=M.y),(d===void 0||M.z<d)&&(d=M.z),(_===void 0||M.z>_)&&(_=M.z)}a.set(u,f,d),r.set(p,g,_)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const n=this.vertices;for(let a=0;a<n.length;a++)t.vadd(n[a],t);return t.scale(1/n.length,t),t}transformAllPoints(t,n){const a=this.vertices.length,r=this.vertices;if(n){for(let l=0;l<a;l++){const u=r[l];n.vmult(u,u)}for(let l=0;l<this.faceNormals.length;l++){const u=this.faceNormals[l];n.vmult(u,u)}}if(t)for(let l=0;l<a;l++){const u=r[l];u.vadd(t,u)}}pointIsInside(t){const n=this.vertices,a=this.faces,r=this.faceNormals,l=new C;this.getAveragePointLocal(l);for(let u=0;u<this.faces.length;u++){let f=r[u];const d=n[a[u][0]],p=new C;t.vsub(d,p);const g=f.dot(p),_=new C;l.vsub(d,_);const v=f.dot(_);if(g<0&&v>0||g>0&&v<0)return!1}return-1}static project(t,n,a,r,l){const u=t.vertices.length,f=j1;let d=0,p=0;const g=Z1,_=t.vertices;g.setZero(),De.vectorToLocalFrame(a,r,n,f),De.pointToLocalFrame(a,r,g,g);const v=g.dot(f);p=d=_[0].dot(f);for(let S=1;S<u;S++){const M=_[S].dot(f);M>d&&(d=M),M<p&&(p=M)}if(p-=v,d-=v,p>d){const S=p;p=d,d=S}l[0]=d,l[1]=p}}const sd=[],rd=[];new C;const j1=new C,Z1=new C;class wd extends zt{constructor(t){super({type:zt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,n=this.halfExtents.y,a=this.halfExtents.z,r=C,l=[new r(-t,-n,-a),new r(t,-n,-a),new r(t,n,-a),new r(-t,n,-a),new r(-t,-n,a),new r(t,-n,a),new r(t,n,a),new r(-t,n,a)],u=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],f=[new r(0,0,1),new r(0,1,0),new r(1,0,0)],d=new rl({vertices:l,faces:u,axes:f});this.convexPolyhedronRepresentation=d,d.material=this.material}calculateLocalInertia(t,n){return n===void 0&&(n=new C),wd.calculateInertia(this.halfExtents,t,n),n}static calculateInertia(t,n,a){const r=t;a.x=1/12*n*(2*r.y*2*r.y+2*r.z*2*r.z),a.y=1/12*n*(2*r.x*2*r.x+2*r.z*2*r.z),a.z=1/12*n*(2*r.y*2*r.y+2*r.x*2*r.x)}getSideNormals(t,n){const a=t,r=this.halfExtents;if(a[0].set(r.x,0,0),a[1].set(0,r.y,0),a[2].set(0,0,r.z),a[3].set(-r.x,0,0),a[4].set(0,-r.y,0),a[5].set(0,0,-r.z),n!==void 0)for(let l=0;l!==a.length;l++)n.vmult(a[l],a[l]);return a}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,n,a){const r=this.halfExtents,l=[[r.x,r.y,r.z],[-r.x,r.y,r.z],[-r.x,-r.y,r.z],[-r.x,-r.y,-r.z],[r.x,-r.y,-r.z],[r.x,r.y,-r.z],[-r.x,r.y,-r.z],[r.x,-r.y,r.z]];for(let u=0;u<l.length;u++)Ja.set(l[u][0],l[u][1],l[u][2]),n.vmult(Ja,Ja),t.vadd(Ja,Ja),a(Ja.x,Ja.y,Ja.z)}calculateWorldAABB(t,n,a,r){const l=this.halfExtents;Pi[0].set(l.x,l.y,l.z),Pi[1].set(-l.x,l.y,l.z),Pi[2].set(-l.x,-l.y,l.z),Pi[3].set(-l.x,-l.y,-l.z),Pi[4].set(l.x,-l.y,-l.z),Pi[5].set(l.x,l.y,-l.z),Pi[6].set(-l.x,l.y,-l.z),Pi[7].set(l.x,-l.y,l.z);const u=Pi[0];n.vmult(u,u),t.vadd(u,u),r.copy(u),a.copy(u);for(let f=1;f<8;f++){const d=Pi[f];n.vmult(d,d),t.vadd(d,d);const p=d.x,g=d.y,_=d.z;p>r.x&&(r.x=p),g>r.y&&(r.y=g),_>r.z&&(r.z=_),p<a.x&&(a.x=p),g<a.y&&(a.y=g),_<a.z&&(a.z=_)}}}const Ja=new C,Pi=[new C,new C,new C,new C,new C,new C,new C,new C],Rd={DYNAMIC:1,STATIC:2,KINEMATIC:4},Cd={AWAKE:0,SLEEPY:1,SLEEPING:2};class Ht extends Z_{constructor(t){t===void 0&&(t={}),super(),this.id=Ht.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const n=typeof t.mass=="number"?t.mass:0;this.mass=n,this.invMass=n>0?1/n:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=n<=0?Ht.STATIC:Ht.DYNAMIC,typeof t.type==typeof Ht.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=Ht.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new fn,this.initQuaternion=new fn,this.previousQuaternion=new fn,this.interpolatedQuaternion=new fn,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new Di,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new Di,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new si,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=Ht.AWAKE,this.wakeUpAfterNarrowphase=!1,t===Ht.SLEEPING&&this.dispatchEvent(Ht.wakeupEvent)}sleep(){this.sleepState=Ht.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const n=this.sleepState,a=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),r=this.sleepSpeedLimit**2;n===Ht.AWAKE&&a<r?(this.sleepState=Ht.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(Ht.sleepyEvent)):n===Ht.SLEEPY&&a>r?this.wakeUp():n===Ht.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(Ht.sleepEvent))}}updateSolveMassProperties(){this.sleepState===Ht.SLEEPING||this.type===Ht.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,n){return n===void 0&&(n=new C),t.vsub(this.position,n),this.quaternion.conjugate().vmult(n,n),n}vectorToLocalFrame(t,n){return n===void 0&&(n=new C),this.quaternion.conjugate().vmult(t,n),n}pointToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n.vadd(this.position,n),n}vectorToWorldFrame(t,n){return n===void 0&&(n=new C),this.quaternion.vmult(t,n),n}addShape(t,n,a){const r=new C,l=new fn;return n&&r.copy(n),a&&l.copy(a),this.shapes.push(t),this.shapeOffsets.push(r),this.shapeOrientations.push(l),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const n=this.shapes.indexOf(t);return n===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(n,1),this.shapeOffsets.splice(n,1),this.shapeOrientations.splice(n,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,n=this.shapeOffsets,a=t.length;let r=0;for(let l=0;l!==a;l++){const u=t[l];u.updateBoundingSphereRadius();const f=n[l].length(),d=u.boundingSphereRadius;f+d>r&&(r=f+d)}this.boundingRadius=r}updateAABB(){const t=this.shapes,n=this.shapeOffsets,a=this.shapeOrientations,r=t.length,l=K1,u=Q1,f=this.quaternion,d=this.aabb,p=J1;for(let g=0;g!==r;g++){const _=t[g];f.vmult(n[g],l),l.vadd(this.position,l),f.mult(a[g],u),_.calculateWorldAABB(l,u,p.lowerBound,p.upperBound),g===0?d.copy(p):d.extend(p)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const n=this.invInertia;if(!(n.x===n.y&&n.y===n.z&&!t)){const a=$1,r=tw;a.setRotationFromQuaternion(this.quaternion),a.transpose(r),a.scale(n,a),a.mmult(r,this.invInertiaWorld)}}applyForce(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;this.sleepState===Ht.SLEEPING&&this.wakeUp();const a=ew;n.cross(t,a),this.force.vadd(t,this.force),this.torque.vadd(a,this.torque)}applyLocalForce(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;const a=nw,r=iw;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyForce(a,r)}applyTorque(t){this.type===Ht.DYNAMIC&&(this.sleepState===Ht.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;this.sleepState===Ht.SLEEPING&&this.wakeUp();const a=n,r=aw;r.copy(t),r.scale(this.invMass,r),this.velocity.vadd(r,this.velocity);const l=sw;a.cross(t,l),this.invInertiaWorld.vmult(l,l),this.angularVelocity.vadd(l,this.angularVelocity)}applyLocalImpulse(t,n){if(n===void 0&&(n=new C),this.type!==Ht.DYNAMIC)return;const a=rw,r=ow;this.vectorToWorldFrame(t,a),this.vectorToWorldFrame(n,r),this.applyImpulse(a,r)}updateMassProperties(){const t=lw;this.invMass=this.mass>0?1/this.mass:0;const n=this.inertia,a=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),wd.calculateInertia(t,this.mass,n),this.invInertia.set(n.x>0&&!a?1/n.x:0,n.y>0&&!a?1/n.y:0,n.z>0&&!a?1/n.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,n){const a=new C;return t.vsub(this.position,a),this.angularVelocity.cross(a,n),this.velocity.vadd(n,n),n}integrate(t,n,a){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===Ht.DYNAMIC||this.type===Ht.KINEMATIC)||this.sleepState===Ht.SLEEPING)return;const r=this.velocity,l=this.angularVelocity,u=this.position,f=this.force,d=this.torque,p=this.quaternion,g=this.invMass,_=this.invInertiaWorld,v=this.linearFactor,S=g*t;r.x+=f.x*S*v.x,r.y+=f.y*S*v.y,r.z+=f.z*S*v.z;const M=_.elements,b=this.angularFactor,x=d.x*b.x,y=d.y*b.y,T=d.z*b.z;l.x+=t*(M[0]*x+M[1]*y+M[2]*T),l.y+=t*(M[3]*x+M[4]*y+M[5]*T),l.z+=t*(M[6]*x+M[7]*y+M[8]*T),u.x+=r.x*t,u.y+=r.y*t,u.z+=r.z*t,p.integrate(this.angularVelocity,t,this.angularFactor,p),n&&(a?p.normalizeFast():p.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}Ht.idCounter=0;Ht.COLLIDE_EVENT_NAME="collide";Ht.DYNAMIC=Rd.DYNAMIC;Ht.STATIC=Rd.STATIC;Ht.KINEMATIC=Rd.KINEMATIC;Ht.AWAKE=Cd.AWAKE;Ht.SLEEPY=Cd.SLEEPY;Ht.SLEEPING=Cd.SLEEPING;Ht.wakeupEvent={type:"wakeup"};Ht.sleepyEvent={type:"sleepy"};Ht.sleepEvent={type:"sleep"};const K1=new C,Q1=new fn,J1=new si,$1=new Di,tw=new Di;new Di;const ew=new C,nw=new C,iw=new C,aw=new C,sw=new C,rw=new C,ow=new C,lw=new C;class cw{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,n,a){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,n){return!((t.collisionFilterGroup&n.collisionFilterMask)===0||(n.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&Ht.STATIC)!==0||t.sleepState===Ht.SLEEPING)&&((n.type&Ht.STATIC)!==0||n.sleepState===Ht.SLEEPING))}intersectionTest(t,n,a,r){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,n,a,r):this.doBoundingSphereBroadphase(t,n,a,r)}doBoundingSphereBroadphase(t,n,a,r){const l=uw;n.position.vsub(t.position,l);const u=(t.boundingRadius+n.boundingRadius)**2;l.lengthSquared()<u&&(a.push(t),r.push(n))}doBoundingBoxBroadphase(t,n,a,r){t.aabbNeedsUpdate&&t.updateAABB(),n.aabbNeedsUpdate&&n.updateAABB(),t.aabb.overlaps(n.aabb)&&(a.push(t),r.push(n))}makePairsUnique(t,n){const a=fw,r=hw,l=dw,u=t.length;for(let f=0;f!==u;f++)r[f]=t[f],l[f]=n[f];t.length=0,n.length=0;for(let f=0;f!==u;f++){const d=r[f].id,p=l[f].id,g=d<p?`${d},${p}`:`${p},${d}`;a[g]=f,a.keys.push(g)}for(let f=0;f!==a.keys.length;f++){const d=a.keys.pop(),p=a[d];t.push(r[p]),n.push(l[p]),delete a[d]}}setWorld(t){}static boundingSphereCheck(t,n){const a=new C;t.position.vsub(n.position,a);const r=t.shapes[0],l=n.shapes[0];return Math.pow(r.boundingSphereRadius+l.boundingSphereRadius,2)>a.lengthSquared()}aabbQuery(t,n,a){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const uw=new C;new C;new fn;new C;const fw={keys:[]},hw=[],dw=[];new C;new C;new C;class pw extends cw{constructor(){super()}collisionPairs(t,n,a){const r=t.bodies,l=r.length;let u,f;for(let d=0;d!==l;d++)for(let p=0;p!==d;p++)u=r[d],f=r[p],this.needBroadphaseCollision(u,f)&&this.intersectionTest(u,f,n,a)}aabbQuery(t,n,a){a===void 0&&(a=[]);for(let r=0;r<t.bodies.length;r++){const l=t.bodies[r];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(n)&&a.push(l)}return a}}class ru{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,n,a,r,l,u,f){this.rayFromWorld.copy(t),this.rayToWorld.copy(n),this.hitNormalWorld.copy(a),this.hitPointWorld.copy(r),this.shape=l,this.body=u,this.distance=f}}let K_,Q_,J_,$_,ty,ey,ny;const Dd={CLOSEST:1,ANY:2,ALL:4};K_=zt.types.SPHERE;Q_=zt.types.PLANE;J_=zt.types.BOX;$_=zt.types.CYLINDER;ty=zt.types.CONVEXPOLYHEDRON;ey=zt.types.HEIGHTFIELD;ny=zt.types.TRIMESH;class un{get[K_](){return this._intersectSphere}get[Q_](){return this._intersectPlane}get[J_](){return this._intersectBox}get[$_](){return this._intersectConvex}get[ty](){return this._intersectConvex}get[ey](){return this._intersectHeightfield}get[ny](){return this._intersectTrimesh}constructor(t,n){t===void 0&&(t=new C),n===void 0&&(n=new C),this.from=t.clone(),this.to=n.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=un.ANY,this.result=new ru,this.hasHit=!1,this.callback=a=>{}}intersectWorld(t,n){return this.mode=n.mode||un.ANY,this.result=n.result||new ru,this.skipBackfaces=!!n.skipBackfaces,this.collisionFilterMask=typeof n.collisionFilterMask<"u"?n.collisionFilterMask:-1,this.collisionFilterGroup=typeof n.collisionFilterGroup<"u"?n.collisionFilterGroup:-1,this.checkCollisionResponse=typeof n.checkCollisionResponse<"u"?n.checkCollisionResponse:!0,n.from&&this.from.copy(n.from),n.to&&this.to.copy(n.to),this.callback=n.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(n_),od.length=0,t.broadphase.aabbQuery(t,n_,od),this.intersectBodies(od),this.hasHit}intersectBody(t,n){n&&(this.result=n,this.updateDirection());const a=this.checkCollisionResponse;if(a&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const r=mw,l=gw;for(let u=0,f=t.shapes.length;u<f;u++){const d=t.shapes[u];if(!(a&&!d.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[u],l),t.quaternion.vmult(t.shapeOffsets[u],r),r.vadd(t.position,r),this.intersectShape(d,l,r,t),this.result.shouldStop))break}}intersectBodies(t,n){n&&(this.result=n,this.updateDirection());for(let a=0,r=t.length;!this.result.shouldStop&&a<r;a++)this.intersectBody(t[a])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,n,a,r){const l=this.from;if(Dw(l,this.direction,a)>t.boundingSphereRadius)return;const f=this[t.type];f&&f.call(this,t,n,a,r,t)}_intersectBox(t,n,a,r,l){return this._intersectConvex(t.convexPolyhedronRepresentation,n,a,r,l)}_intersectPlane(t,n,a,r,l){const u=this.from,f=this.to,d=this.direction,p=new C(0,0,1);n.vmult(p,p);const g=new C;u.vsub(a,g);const _=g.dot(p);f.vsub(a,g);const v=g.dot(p);if(_*v>0||u.distanceTo(f)<_)return;const S=p.dot(d);if(Math.abs(S)<this.precision)return;const M=new C,b=new C,x=new C;u.vsub(a,M);const y=-p.dot(M)/S;d.scale(y,b),u.vadd(b,x),this.reportIntersection(p,x,l,r,-1)}getAABB(t){const{lowerBound:n,upperBound:a}=t,r=this.to,l=this.from;n.x=Math.min(r.x,l.x),n.y=Math.min(r.y,l.y),n.z=Math.min(r.z,l.z),a.x=Math.max(r.x,l.x),a.y=Math.max(r.y,l.y),a.z=Math.max(r.z,l.z)}_intersectHeightfield(t,n,a,r,l){t.data,t.elementSize;const u=vw;u.from.copy(this.from),u.to.copy(this.to),De.pointToLocalFrame(a,n,u.from,u.from),De.pointToLocalFrame(a,n,u.to,u.to),u.updateDirection();const f=_w;let d,p,g,_;d=p=0,g=_=t.data.length-1;const v=new si;u.getAABB(v),t.getIndexOfPosition(v.lowerBound.x,v.lowerBound.y,f,!0),d=Math.max(d,f[0]),p=Math.max(p,f[1]),t.getIndexOfPosition(v.upperBound.x,v.upperBound.y,f,!0),g=Math.min(g,f[0]+1),_=Math.min(_,f[1]+1);for(let S=d;S<g;S++)for(let M=p;M<_;M++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(S,M,v),!!v.overlapsRay(u)){if(t.getConvexTrianglePillar(S,M,!1),De.pointToWorldFrame(a,n,t.pillarOffset,Xc),this._intersectConvex(t.pillarConvex,n,Xc,r,l,i_),this.result.shouldStop)return;t.getConvexTrianglePillar(S,M,!0),De.pointToWorldFrame(a,n,t.pillarOffset,Xc),this._intersectConvex(t.pillarConvex,n,Xc,r,l,i_)}}}_intersectSphere(t,n,a,r,l){const u=this.from,f=this.to,d=t.radius,p=(f.x-u.x)**2+(f.y-u.y)**2+(f.z-u.z)**2,g=2*((f.x-u.x)*(u.x-a.x)+(f.y-u.y)*(u.y-a.y)+(f.z-u.z)*(u.z-a.z)),_=(u.x-a.x)**2+(u.y-a.y)**2+(u.z-a.z)**2-d**2,v=g**2-4*p*_,S=yw,M=xw;if(!(v<0))if(v===0)u.lerp(f,v,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1);else{const b=(-g-Math.sqrt(v))/(2*p),x=(-g+Math.sqrt(v))/(2*p);if(b>=0&&b<=1&&(u.lerp(f,b,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1)),this.result.shouldStop)return;x>=0&&x<=1&&(u.lerp(f,x,S),S.vsub(a,M),M.normalize(),this.reportIntersection(M,S,l,r,-1))}}_intersectConvex(t,n,a,r,l,u){const f=Sw,d=a_,p=u&&u.faceList||null,g=t.faces,_=t.vertices,v=t.faceNormals,S=this.direction,M=this.from,b=this.to,x=M.distanceTo(b),y=p?p.length:g.length,T=this.result;for(let w=0;!T.shouldStop&&w<y;w++){const L=p?p[w]:w,F=g[L],B=v[L],O=n,q=a;d.copy(_[F[0]]),O.vmult(d,d),d.vadd(q,d),d.vsub(M,d),O.vmult(B,f);const z=S.dot(f);if(Math.abs(z)<this.precision)continue;const R=f.dot(d)/z;if(!(R<0)){S.scale(R,Yn),Yn.vadd(M,Yn),wi.copy(_[F[0]]),O.vmult(wi,wi),q.vadd(wi,wi);for(let H=1;!T.shouldStop&&H<F.length-1;H++){Bi.copy(_[F[H]]),Ii.copy(_[F[H+1]]),O.vmult(Bi,Bi),O.vmult(Ii,Ii),q.vadd(Bi,Bi),q.vadd(Ii,Ii);const et=Yn.distanceTo(M);!(un.pointInTriangle(Yn,wi,Bi,Ii)||un.pointInTriangle(Yn,Bi,wi,Ii))||et>x||this.reportIntersection(f,Yn,l,r,L)}}}}_intersectTrimesh(t,n,a,r,l,u){const f=Mw,d=Rw,p=Cw,g=a_,_=Ew,v=bw,S=Tw,M=ww,b=Aw,x=t.indices;t.vertices;const y=this.from,T=this.to,w=this.direction;p.position.copy(a),p.quaternion.copy(n),De.vectorToLocalFrame(a,n,w,_),De.pointToLocalFrame(a,n,y,v),De.pointToLocalFrame(a,n,T,S),S.x*=t.scale.x,S.y*=t.scale.y,S.z*=t.scale.z,v.x*=t.scale.x,v.y*=t.scale.y,v.z*=t.scale.z,S.vsub(v,_),_.normalize();const L=v.distanceSquared(S);t.tree.rayQuery(this,p,d);for(let F=0,B=d.length;!this.result.shouldStop&&F!==B;F++){const O=d[F];t.getNormal(O,f),t.getVertex(x[O*3],wi),wi.vsub(v,g);const q=_.dot(f),z=f.dot(g)/q;if(z<0)continue;_.scale(z,Yn),Yn.vadd(v,Yn),t.getVertex(x[O*3+1],Bi),t.getVertex(x[O*3+2],Ii);const R=Yn.distanceSquared(v);!(un.pointInTriangle(Yn,Bi,wi,Ii)||un.pointInTriangle(Yn,wi,Bi,Ii))||R>L||(De.vectorToWorldFrame(n,f,b),De.pointToWorldFrame(a,n,Yn,M),this.reportIntersection(b,M,l,r,O))}d.length=0}reportIntersection(t,n,a,r,l){const u=this.from,f=this.to,d=u.distanceTo(n),p=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(p.hitFaceIndex=typeof l<"u"?l:-1,this.mode){case un.ALL:this.hasHit=!0,p.set(u,f,t,n,a,r,d),p.hasHit=!0,this.callback(p);break;case un.CLOSEST:(d<p.distance||!p.hasHit)&&(this.hasHit=!0,p.hasHit=!0,p.set(u,f,t,n,a,r,d));break;case un.ANY:this.hasHit=!0,p.hasHit=!0,p.set(u,f,t,n,a,r,d),p.shouldStop=!0;break}}static pointInTriangle(t,n,a,r){r.vsub(n,Ps),a.vsub(n,tl),t.vsub(n,ld);const l=Ps.dot(Ps),u=Ps.dot(tl),f=Ps.dot(ld),d=tl.dot(tl),p=tl.dot(ld);let g,_;return(g=d*f-u*p)>=0&&(_=l*p-u*f)>=0&&g+_<l*d-u*u}}un.CLOSEST=Dd.CLOSEST;un.ANY=Dd.ANY;un.ALL=Dd.ALL;const n_=new si,od=[],tl=new C,ld=new C,mw=new C,gw=new fn,Yn=new C,wi=new C,Bi=new C,Ii=new C;new C;new ru;const i_={faceList:[0]},Xc=new C,vw=new un,_w=[],yw=new C,xw=new C,Sw=new C;new C;new C;const a_=new C,Mw=new C,Ew=new C,bw=new C,Tw=new C,Aw=new C,ww=new C;new si;const Rw=[],Cw=new De,Ps=new C,Wc=new C;function Dw(c,t,n){n.vsub(c,Ps);const a=Ps.dot(t);return t.scale(a,Wc),Wc.vadd(c,Wc),n.distanceTo(Wc)}class Lw{static defaults(t,n){t===void 0&&(t={});for(let a in n)a in t||(t[a]=n[a]);return t}}class s_{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,n){return t.dot(this.spatial)+n.dot(this.rotational)}}class hl{constructor(t,n,a,r){a===void 0&&(a=-1e6),r===void 0&&(r=1e6),this.id=hl.idCounter++,this.minForce=a,this.maxForce=r,this.bi=t,this.bj=n,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new s_,this.jacobianElementB=new s_,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,n,a){const r=n,l=t,u=a;this.a=4/(u*(1+4*r)),this.b=4*r/(1+4*r),this.eps=4/(u*u*l*(1+4*r))}computeB(t,n,a){const r=this.computeGW(),l=this.computeGq(),u=this.computeGiMf();return-l*t-r*n-u*a}computeGq(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.position,u=r.position;return t.spatial.dot(l)+n.spatial.dot(u)}computeGW(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.velocity,u=r.velocity,f=a.angularVelocity,d=r.angularVelocity;return t.multiplyVectors(l,f)+n.multiplyVectors(u,d)}computeGWlambda(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.vlambda,u=r.vlambda,f=a.wlambda,d=r.wlambda;return t.multiplyVectors(l,f)+n.multiplyVectors(u,d)}computeGiMf(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.force,u=a.torque,f=r.force,d=r.torque,p=a.invMassSolve,g=r.invMassSolve;return l.scale(p,r_),f.scale(g,o_),a.invInertiaWorldSolve.vmult(u,l_),r.invInertiaWorldSolve.vmult(d,c_),t.multiplyVectors(r_,l_)+n.multiplyVectors(o_,c_)}computeGiMGt(){const t=this.jacobianElementA,n=this.jacobianElementB,a=this.bi,r=this.bj,l=a.invMassSolve,u=r.invMassSolve,f=a.invInertiaWorldSolve,d=r.invInertiaWorldSolve;let p=l+u;return f.vmult(t.rotational,Yc),p+=Yc.dot(t.rotational),d.vmult(n.rotational,Yc),p+=Yc.dot(n.rotational),p}addToWlambda(t){const n=this.jacobianElementA,a=this.jacobianElementB,r=this.bi,l=this.bj,u=Uw;r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),l.vlambda.addScaledVector(l.invMassSolve*t,a.spatial,l.vlambda),r.invInertiaWorldSolve.vmult(n.rotational,u),r.wlambda.addScaledVector(t,u,r.wlambda),l.invInertiaWorldSolve.vmult(a.rotational,u),l.wlambda.addScaledVector(t,u,l.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}hl.idCounter=0;const r_=new C,o_=new C,l_=new C,c_=new C,Yc=new C,Uw=new C;class Nw extends hl{constructor(t,n,a){a===void 0&&(a=1e6),super(t,n,0,a),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const n=this.a,a=this.b,r=this.bi,l=this.bj,u=this.ri,f=this.rj,d=Ow,p=zw,g=r.velocity,_=r.angularVelocity;r.force,r.torque;const v=l.velocity,S=l.angularVelocity;l.force,l.torque;const M=Pw,b=this.jacobianElementA,x=this.jacobianElementB,y=this.ni;u.cross(y,d),f.cross(y,p),y.negate(b.spatial),d.negate(b.rotational),x.spatial.copy(y),x.rotational.copy(p),M.copy(l.position),M.vadd(f,M),M.vsub(r.position,M),M.vsub(u,M);const T=y.dot(M),w=this.restitution+1,L=w*v.dot(y)-w*g.dot(y)+S.dot(p)-_.dot(d),F=this.computeGiMf();return-T*n-L*a-t*F}getImpactVelocityAlongNormal(){const t=Bw,n=Iw,a=Fw,r=Hw,l=Gw;return this.bi.position.vadd(this.ri,a),this.bj.position.vadd(this.rj,r),this.bi.getVelocityAtWorldPoint(a,t),this.bj.getVelocityAtWorldPoint(r,n),t.vsub(n,l),this.ni.dot(l)}}const Ow=new C,zw=new C,Pw=new C,Bw=new C,Iw=new C,Fw=new C,Hw=new C,Gw=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class u_ extends hl{constructor(t,n,a){super(t,n,-a,a),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const n=this.b;this.bi,this.bj;const a=this.ri,r=this.rj,l=Vw,u=kw,f=this.t;a.cross(f,l),r.cross(f,u);const d=this.jacobianElementA,p=this.jacobianElementB;f.negate(d.spatial),l.negate(d.rotational),p.spatial.copy(f),p.rotational.copy(u);const g=this.computeGW(),_=this.computeGiMf();return-g*n-t*_}}const Vw=new C,kw=new C;class fu{constructor(t,n,a){a=Lw.defaults(a,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=fu.idCounter++,this.materials=[t,n],this.friction=a.friction,this.restitution=a.restitution,this.contactEquationStiffness=a.contactEquationStiffness,this.contactEquationRelaxation=a.contactEquationRelaxation,this.frictionEquationStiffness=a.frictionEquationStiffness,this.frictionEquationRelaxation=a.frictionEquationRelaxation}}fu.idCounter=0;class hu{constructor(t){t===void 0&&(t={});let n="";typeof t=="string"&&(n=t,t={}),this.name=n,this.id=hu.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}hu.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new un;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class qw extends zt{constructor(t){if(super({type:zt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,n){n===void 0&&(n=new C);const a=2*t*this.radius*this.radius/5;return n.x=a,n.y=a,n.z=a,n}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,n,a,r){const l=this.radius,u=["x","y","z"];for(let f=0;f<u.length;f++){const d=u[f];a[d]=t[d]-l,r[d]=t[d]+l}}}new C;new C;new C;new C;new C;new C;new C;new C;new C;class Xw extends zt{constructor(){super({type:zt.types.PLANE}),this.worldNormal=new C,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const n=this.worldNormal;n.set(0,0,1),t.vmult(n,n),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,n){return n===void 0&&(n=new C),n}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,n,a,r){ma.set(0,0,1),n.vmult(ma,ma);const l=Number.MAX_VALUE;a.set(-l,-l,-l),r.set(l,l,l),ma.x===1?r.x=t.x:ma.x===-1&&(a.x=t.x),ma.y===1?r.y=t.y:ma.y===-1&&(a.y=t.y),ma.z===1?r.z=t.z:ma.z===-1&&(a.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const ma=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new si;new C;new si;new C;new C;new C;new C;new C;new C;new C;new si;new C;new De;new si;class Ww{constructor(){this.equations=[]}solve(t,n){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const n=this.equations,a=n.indexOf(t);a!==-1&&n.splice(a,1)}removeAllEquations(){this.equations.length=0}}class Yw extends Ww{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,n){let a=0;const r=this.iterations,l=this.tolerance*this.tolerance,u=this.equations,f=u.length,d=n.bodies,p=d.length,g=t;let _,v,S,M,b,x;if(f!==0)for(let L=0;L!==p;L++)d[L].updateSolveMassProperties();const y=Zw,T=Kw,w=jw;y.length=f,T.length=f,w.length=f;for(let L=0;L!==f;L++){const F=u[L];w[L]=0,T[L]=F.computeB(g),y[L]=1/F.computeC()}if(f!==0){for(let B=0;B!==p;B++){const O=d[B],q=O.vlambda,z=O.wlambda;q.set(0,0,0),z.set(0,0,0)}for(a=0;a!==r;a++){M=0;for(let B=0;B!==f;B++){const O=u[B];_=T[B],v=y[B],x=w[B],b=O.computeGWlambda(),S=v*(_-b-O.eps*x),x+S<O.minForce?S=O.minForce-x:x+S>O.maxForce&&(S=O.maxForce-x),w[B]+=S,M+=S>0?S:-S,O.addToWlambda(S)}if(M*M<l)break}for(let B=0;B!==p;B++){const O=d[B],q=O.velocity,z=O.angularVelocity;O.vlambda.vmul(O.linearFactor,O.vlambda),q.vadd(O.vlambda,q),O.wlambda.vmul(O.angularFactor,O.wlambda),z.vadd(O.wlambda,z)}let L=u.length;const F=1/g;for(;L--;)u[L].multiplier=w[L]*F}return a}}const jw=[],Zw=[],Kw=[];class Qw{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let n=0;n!==t;n++)this.objects.push(n<0||arguments.length<=n?void 0:arguments[n]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const n=this.objects;for(;n.length>t;)n.pop();for(;n.length<t;)n.push(this.constructObject());return this}}class Jw extends Qw{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const Xe={sphereSphere:zt.types.SPHERE,spherePlane:zt.types.SPHERE|zt.types.PLANE,boxBox:zt.types.BOX|zt.types.BOX,sphereBox:zt.types.SPHERE|zt.types.BOX,planeBox:zt.types.PLANE|zt.types.BOX,convexConvex:zt.types.CONVEXPOLYHEDRON,sphereConvex:zt.types.SPHERE|zt.types.CONVEXPOLYHEDRON,planeConvex:zt.types.PLANE|zt.types.CONVEXPOLYHEDRON,boxConvex:zt.types.BOX|zt.types.CONVEXPOLYHEDRON,sphereHeightfield:zt.types.SPHERE|zt.types.HEIGHTFIELD,boxHeightfield:zt.types.BOX|zt.types.HEIGHTFIELD,convexHeightfield:zt.types.CONVEXPOLYHEDRON|zt.types.HEIGHTFIELD,sphereParticle:zt.types.PARTICLE|zt.types.SPHERE,planeParticle:zt.types.PLANE|zt.types.PARTICLE,boxParticle:zt.types.BOX|zt.types.PARTICLE,convexParticle:zt.types.PARTICLE|zt.types.CONVEXPOLYHEDRON,cylinderCylinder:zt.types.CYLINDER,sphereCylinder:zt.types.SPHERE|zt.types.CYLINDER,planeCylinder:zt.types.PLANE|zt.types.CYLINDER,boxCylinder:zt.types.BOX|zt.types.CYLINDER,convexCylinder:zt.types.CONVEXPOLYHEDRON|zt.types.CYLINDER,heightfieldCylinder:zt.types.HEIGHTFIELD|zt.types.CYLINDER,particleCylinder:zt.types.PARTICLE|zt.types.CYLINDER,sphereTrimesh:zt.types.SPHERE|zt.types.TRIMESH,planeTrimesh:zt.types.PLANE|zt.types.TRIMESH};class $w{get[Xe.sphereSphere](){return this.sphereSphere}get[Xe.spherePlane](){return this.spherePlane}get[Xe.boxBox](){return this.boxBox}get[Xe.sphereBox](){return this.sphereBox}get[Xe.planeBox](){return this.planeBox}get[Xe.convexConvex](){return this.convexConvex}get[Xe.sphereConvex](){return this.sphereConvex}get[Xe.planeConvex](){return this.planeConvex}get[Xe.boxConvex](){return this.boxConvex}get[Xe.sphereHeightfield](){return this.sphereHeightfield}get[Xe.boxHeightfield](){return this.boxHeightfield}get[Xe.convexHeightfield](){return this.convexHeightfield}get[Xe.sphereParticle](){return this.sphereParticle}get[Xe.planeParticle](){return this.planeParticle}get[Xe.boxParticle](){return this.boxParticle}get[Xe.convexParticle](){return this.convexParticle}get[Xe.cylinderCylinder](){return this.convexConvex}get[Xe.sphereCylinder](){return this.sphereConvex}get[Xe.planeCylinder](){return this.planeConvex}get[Xe.boxCylinder](){return this.boxConvex}get[Xe.convexCylinder](){return this.convexConvex}get[Xe.heightfieldCylinder](){return this.heightfieldCylinder}get[Xe.particleCylinder](){return this.particleCylinder}get[Xe.sphereTrimesh](){return this.sphereTrimesh}get[Xe.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Jw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,n,a,r,l,u){let f;this.contactPointPool.length?(f=this.contactPointPool.pop(),f.bi=t,f.bj=n):f=new Nw(t,n),f.enabled=t.collisionResponse&&n.collisionResponse&&a.collisionResponse&&r.collisionResponse;const d=this.currentContactMaterial;f.restitution=d.restitution,f.setSpookParams(d.contactEquationStiffness,d.contactEquationRelaxation,this.world.dt);const p=a.material||t.material,g=r.material||n.material;return p&&g&&p.restitution>=0&&g.restitution>=0&&(f.restitution=p.restitution*g.restitution),f.si=l||a,f.sj=u||r,f}createFrictionEquationsFromContact(t,n){const a=t.bi,r=t.bj,l=t.si,u=t.sj,f=this.world,d=this.currentContactMaterial;let p=d.friction;const g=l.material||a.material,_=u.material||r.material;if(g&&_&&g.friction>=0&&_.friction>=0&&(p=g.friction*_.friction),p>0){const v=p*(f.frictionGravity||f.gravity).length();let S=a.invMass+r.invMass;S>0&&(S=1/S);const M=this.frictionEquationPool,b=M.length?M.pop():new u_(a,r,v*S),x=M.length?M.pop():new u_(a,r,v*S);return b.bi=x.bi=a,b.bj=x.bj=r,b.minForce=x.minForce=-v*S,b.maxForce=x.maxForce=v*S,b.ri.copy(t.ri),b.rj.copy(t.rj),x.ri.copy(t.ri),x.rj.copy(t.rj),t.ni.tangents(b.t,x.t),b.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,f.dt),x.setSpookParams(d.frictionEquationStiffness,d.frictionEquationRelaxation,f.dt),b.enabled=x.enabled=t.enabled,n.push(b,x),!0}return!1}createFrictionFromAverage(t){let n=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(n,this.frictionResult)||t===1)return;const a=this.frictionResult[this.frictionResult.length-2],r=this.frictionResult[this.frictionResult.length-1];Us.setZero(),qr.setZero(),Xr.setZero();const l=n.bi;n.bj;for(let f=0;f!==t;f++)n=this.result[this.result.length-1-f],n.bi!==l?(Us.vadd(n.ni,Us),qr.vadd(n.ri,qr),Xr.vadd(n.rj,Xr)):(Us.vsub(n.ni,Us),qr.vadd(n.rj,qr),Xr.vadd(n.ri,Xr));const u=1/t;qr.scale(u,a.ri),Xr.scale(u,a.rj),r.ri.copy(a.ri),r.rj.copy(a.rj),Us.normalize(),Us.tangents(a.t,r.t)}getContacts(t,n,a,r,l,u,f){this.contactPointPool=l,this.frictionEquationPool=f,this.result=r,this.frictionResult=u;const d=nR,p=iR,g=tR,_=eR;for(let v=0,S=t.length;v!==S;v++){const M=t[v],b=n[v];let x=null;M.material&&b.material&&(x=a.getContactMaterial(M.material,b.material)||null);const y=M.type&Ht.KINEMATIC&&b.type&Ht.STATIC||M.type&Ht.STATIC&&b.type&Ht.KINEMATIC||M.type&Ht.KINEMATIC&&b.type&Ht.KINEMATIC;for(let T=0;T<M.shapes.length;T++){M.quaternion.mult(M.shapeOrientations[T],d),M.quaternion.vmult(M.shapeOffsets[T],g),g.vadd(M.position,g);const w=M.shapes[T];for(let L=0;L<b.shapes.length;L++){b.quaternion.mult(b.shapeOrientations[L],p),b.quaternion.vmult(b.shapeOffsets[L],_),_.vadd(b.position,_);const F=b.shapes[L];if(!(w.collisionFilterMask&F.collisionFilterGroup&&F.collisionFilterMask&w.collisionFilterGroup)||g.distanceTo(_)>w.boundingSphereRadius+F.boundingSphereRadius)continue;let B=null;w.material&&F.material&&(B=a.getContactMaterial(w.material,F.material)||null),this.currentContactMaterial=B||x||a.defaultContactMaterial;const O=w.type|F.type,q=this[O];if(q){let z=!1;w.type<F.type?z=q.call(this,w,F,g,_,d,p,M,b,w,F,y):z=q.call(this,F,w,_,g,p,d,b,M,w,F,y),z&&y&&(a.shapeOverlapKeeper.set(w.id,F.id),a.bodyOverlapKeeper.set(M.id,b.id))}}}}}sphereSphere(t,n,a,r,l,u,f,d,p,g,_){if(_)return a.distanceSquared(r)<(t.radius+n.radius)**2;const v=this.createContactEquation(f,d,t,n,p,g);r.vsub(a,v.ni),v.ni.normalize(),v.ri.copy(v.ni),v.rj.copy(v.ni),v.ri.scale(t.radius,v.ri),v.rj.scale(-n.radius,v.rj),v.ri.vadd(a,v.ri),v.ri.vsub(f.position,v.ri),v.rj.vadd(r,v.rj),v.rj.vsub(d.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}spherePlane(t,n,a,r,l,u,f,d,p,g,_){const v=this.createContactEquation(f,d,t,n,p,g);if(v.ni.set(0,0,1),u.vmult(v.ni,v.ni),v.ni.negate(v.ni),v.ni.normalize(),v.ni.scale(t.radius,v.ri),a.vsub(r,jc),v.ni.scale(v.ni.dot(jc),f_),jc.vsub(f_,v.rj),-jc.dot(v.ni)<=t.radius){if(_)return!0;const S=v.ri,M=v.rj;S.vadd(a,S),S.vsub(f.position,S),M.vadd(r,M),M.vsub(d.position,M),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxBox(t,n,a,r,l,u,f,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,n.convexPolyhedronRepresentation.material=n.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n.convexPolyhedronRepresentation,a,r,l,u,f,d,t,n,_)}sphereBox(t,n,a,r,l,u,f,d,p,g,_){const v=this.v3pool,S=CR;a.vsub(r,Zc),n.getSideNormals(S,u);const M=t.radius;let b=!1;const x=LR,y=UR,T=NR;let w=null,L=0,F=0,B=0,O=null;for(let N=0,Y=S.length;N!==Y&&b===!1;N++){const X=AR;X.copy(S[N]);const mt=X.length();X.normalize();const Mt=Zc.dot(X);if(Mt<mt+M&&Mt>0){const I=wR,Z=RR;I.copy(S[(N+1)%3]),Z.copy(S[(N+2)%3]);const yt=I.length(),J=Z.length();I.normalize(),Z.normalize();const pt=Zc.dot(I),Et=Zc.dot(Z);if(pt<yt&&pt>-yt&&Et<J&&Et>-J){const St=Math.abs(Mt-mt-M);if((O===null||St<O)&&(O=St,F=pt,B=Et,w=mt,x.copy(X),y.copy(I),T.copy(Z),L++,_))return!0}}}if(L){b=!0;const N=this.createContactEquation(f,d,t,n,p,g);x.scale(-M,N.ri),N.ni.copy(x),N.ni.negate(N.ni),x.scale(w,x),y.scale(F,y),x.vadd(y,x),T.scale(B,T),x.vadd(T,N.rj),N.ri.vadd(a,N.ri),N.ri.vsub(f.position,N.ri),N.rj.vadd(r,N.rj),N.rj.vsub(d.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let q=v.get();const z=DR;for(let N=0;N!==2&&!b;N++)for(let Y=0;Y!==2&&!b;Y++)for(let X=0;X!==2&&!b;X++)if(q.set(0,0,0),N?q.vadd(S[0],q):q.vsub(S[0],q),Y?q.vadd(S[1],q):q.vsub(S[1],q),X?q.vadd(S[2],q):q.vsub(S[2],q),r.vadd(q,z),z.vsub(a,z),z.lengthSquared()<M*M){if(_)return!0;b=!0;const mt=this.createContactEquation(f,d,t,n,p,g);mt.ri.copy(z),mt.ri.normalize(),mt.ni.copy(mt.ri),mt.ri.scale(M,mt.ri),mt.rj.copy(q),mt.ri.vadd(a,mt.ri),mt.ri.vsub(f.position,mt.ri),mt.rj.vadd(r,mt.rj),mt.rj.vsub(d.position,mt.rj),this.result.push(mt),this.createFrictionEquationsFromContact(mt,this.frictionResult)}v.release(q),q=null;const R=v.get(),H=v.get(),et=v.get(),G=v.get(),Q=v.get(),K=S.length;for(let N=0;N!==K&&!b;N++)for(let Y=0;Y!==K&&!b;Y++)if(N%3!==Y%3){S[Y].cross(S[N],R),R.normalize(),S[N].vadd(S[Y],H),et.copy(a),et.vsub(H,et),et.vsub(r,et);const X=et.dot(R);R.scale(X,G);let mt=0;for(;mt===N%3||mt===Y%3;)mt++;Q.copy(a),Q.vsub(G,Q),Q.vsub(H,Q),Q.vsub(r,Q);const Mt=Math.abs(X),I=Q.length();if(Mt<S[mt].length()&&I<M){if(_)return!0;b=!0;const Z=this.createContactEquation(f,d,t,n,p,g);H.vadd(G,Z.rj),Z.rj.copy(Z.rj),Q.negate(Z.ni),Z.ni.normalize(),Z.ri.copy(Z.rj),Z.ri.vadd(r,Z.ri),Z.ri.vsub(a,Z.ri),Z.ri.normalize(),Z.ri.scale(M,Z.ri),Z.ri.vadd(a,Z.ri),Z.ri.vsub(f.position,Z.ri),Z.rj.vadd(r,Z.rj),Z.rj.vsub(d.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}}v.release(R,H,et,G,Q)}planeBox(t,n,a,r,l,u,f,d,p,g,_){return n.convexPolyhedronRepresentation.material=n.material,n.convexPolyhedronRepresentation.collisionResponse=n.collisionResponse,n.convexPolyhedronRepresentation.id=n.id,this.planeConvex(t,n.convexPolyhedronRepresentation,a,r,l,u,f,d,t,n,_)}convexConvex(t,n,a,r,l,u,f,d,p,g,_,v,S){const M=jR;if(!(a.distanceTo(r)>t.boundingSphereRadius+n.boundingSphereRadius)&&t.findSeparatingAxis(n,a,l,r,u,M,v,S)){const b=[],x=ZR;t.clipAgainstHull(a,l,n,r,u,M,-100,100,b);let y=0;for(let T=0;T!==b.length;T++){if(_)return!0;const w=this.createContactEquation(f,d,t,n,p,g),L=w.ri,F=w.rj;M.negate(w.ni),b[T].normal.negate(x),x.scale(b[T].depth,x),b[T].point.vadd(x,L),F.copy(b[T].point),L.vsub(a,L),F.vsub(r,F),L.vadd(a,L),L.vsub(f.position,L),F.vadd(r,F),F.vsub(d.position,F),this.result.push(w),y++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&y&&this.createFrictionFromAverage(y)}}sphereConvex(t,n,a,r,l,u,f,d,p,g,_){const v=this.v3pool;a.vsub(r,OR);const S=n.faceNormals,M=n.faces,b=n.vertices,x=t.radius;let y=!1;for(let T=0;T!==b.length;T++){const w=b[T],L=IR;u.vmult(w,L),r.vadd(L,L);const F=BR;if(L.vsub(a,F),F.lengthSquared()<x*x){if(_)return!0;y=!0;const B=this.createContactEquation(f,d,t,n,p,g);B.ri.copy(F),B.ri.normalize(),B.ni.copy(B.ri),B.ri.scale(x,B.ri),L.vsub(r,B.rj),B.ri.vadd(a,B.ri),B.ri.vsub(f.position,B.ri),B.rj.vadd(r,B.rj),B.rj.vsub(d.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);return}}for(let T=0,w=M.length;T!==w&&y===!1;T++){const L=S[T],F=M[T],B=FR;u.vmult(L,B);const O=HR;u.vmult(b[F[0]],O),O.vadd(r,O);const q=GR;B.scale(-x,q),a.vadd(q,q);const z=VR;q.vsub(O,z);const R=z.dot(B),H=kR;if(a.vsub(O,H),R<0&&H.dot(B)>0){const et=[];for(let G=0,Q=F.length;G!==Q;G++){const K=v.get();u.vmult(b[F[G]],K),r.vadd(K,K),et.push(K)}if(TR(et,B,a)){if(_)return!0;y=!0;const G=this.createContactEquation(f,d,t,n,p,g);B.scale(-x,G.ri),B.negate(G.ni);const Q=v.get();B.scale(-R,Q);const K=v.get();B.scale(-x,K),a.vsub(r,G.rj),G.rj.vadd(K,G.rj),G.rj.vadd(Q,G.rj),G.rj.vadd(r,G.rj),G.rj.vsub(d.position,G.rj),G.ri.vadd(a,G.ri),G.ri.vsub(f.position,G.ri),v.release(Q),v.release(K),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult);for(let N=0,Y=et.length;N!==Y;N++)v.release(et[N]);return}else for(let G=0;G!==F.length;G++){const Q=v.get(),K=v.get();u.vmult(b[F[(G+1)%F.length]],Q),u.vmult(b[F[(G+2)%F.length]],K),r.vadd(Q,Q),r.vadd(K,K);const N=zR;K.vsub(Q,N);const Y=PR;N.unit(Y);const X=v.get(),mt=v.get();a.vsub(Q,mt);const Mt=mt.dot(Y);Y.scale(Mt,X),X.vadd(Q,X);const I=v.get();if(X.vsub(a,I),Mt>0&&Mt*Mt<N.lengthSquared()&&I.lengthSquared()<x*x){if(_)return!0;const Z=this.createContactEquation(f,d,t,n,p,g);X.vsub(r,Z.rj),X.vsub(a,Z.ni),Z.ni.normalize(),Z.ni.scale(x,Z.ri),Z.rj.vadd(r,Z.rj),Z.rj.vsub(d.position,Z.rj),Z.ri.vadd(a,Z.ri),Z.ri.vsub(f.position,Z.ri),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult);for(let yt=0,J=et.length;yt!==J;yt++)v.release(et[yt]);v.release(Q),v.release(K),v.release(X),v.release(I),v.release(mt);return}v.release(Q),v.release(K),v.release(X),v.release(I),v.release(mt)}for(let G=0,Q=et.length;G!==Q;G++)v.release(et[G])}}}planeConvex(t,n,a,r,l,u,f,d,p,g,_){const v=qR,S=XR;S.set(0,0,1),l.vmult(S,S);let M=0;const b=WR;for(let x=0;x!==n.vertices.length;x++)if(v.copy(n.vertices[x]),u.vmult(v,v),r.vadd(v,v),v.vsub(a,b),S.dot(b)<=0){if(_)return!0;const T=this.createContactEquation(f,d,t,n,p,g),w=YR;S.scale(S.dot(b),w),v.vsub(w,w),w.vsub(a,T.ri),T.ni.copy(S),v.vsub(r,T.rj),T.ri.vadd(a,T.ri),T.ri.vsub(f.position,T.ri),T.rj.vadd(r,T.rj),T.rj.vsub(d.position,T.rj),this.result.push(T),M++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(T,this.frictionResult)}this.enableFrictionReduction&&M&&this.createFrictionFromAverage(M)}boxConvex(t,n,a,r,l,u,f,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,n,a,r,l,u,f,d,t,n,_)}sphereHeightfield(t,n,a,r,l,u,f,d,p,g,_){const v=n.data,S=t.radius,M=n.elementSize,b=oC,x=rC;De.pointToLocalFrame(r,u,a,x);let y=Math.floor((x.x-S)/M)-1,T=Math.ceil((x.x+S)/M)+1,w=Math.floor((x.y-S)/M)-1,L=Math.ceil((x.y+S)/M)+1;if(T<0||L<0||y>v.length||w>v[0].length)return;y<0&&(y=0),T<0&&(T=0),w<0&&(w=0),L<0&&(L=0),y>=v.length&&(y=v.length-1),T>=v.length&&(T=v.length-1),L>=v[0].length&&(L=v[0].length-1),w>=v[0].length&&(w=v[0].length-1);const F=[];n.getRectMinMax(y,w,T,L,F);const B=F[0],O=F[1];if(x.z-S>O||x.z+S<B)return;const q=this.result;for(let z=y;z<T;z++)for(let R=w;R<L;R++){const H=q.length;let et=!1;if(n.getConvexTrianglePillar(z,R,!1),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(et=this.sphereConvex(t,n.pillarConvex,a,b,l,u,f,d,t,n,_)),_&&et||(n.getConvexTrianglePillar(z,R,!0),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(et=this.sphereConvex(t,n.pillarConvex,a,b,l,u,f,d,t,n,_)),_&&et))return!0;if(q.length-H>2)return}}boxHeightfield(t,n,a,r,l,u,f,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,n,a,r,l,u,f,d,t,n,_)}convexHeightfield(t,n,a,r,l,u,f,d,p,g,_){const v=n.data,S=n.elementSize,M=t.boundingSphereRadius,b=aC,x=sC,y=iC;De.pointToLocalFrame(r,u,a,y);let T=Math.floor((y.x-M)/S)-1,w=Math.ceil((y.x+M)/S)+1,L=Math.floor((y.y-M)/S)-1,F=Math.ceil((y.y+M)/S)+1;if(w<0||F<0||T>v.length||L>v[0].length)return;T<0&&(T=0),w<0&&(w=0),L<0&&(L=0),F<0&&(F=0),T>=v.length&&(T=v.length-1),w>=v.length&&(w=v.length-1),F>=v[0].length&&(F=v[0].length-1),L>=v[0].length&&(L=v[0].length-1);const B=[];n.getRectMinMax(T,L,w,F,B);const O=B[0],q=B[1];if(!(y.z-M>q||y.z+M<O))for(let z=T;z<w;z++)for(let R=L;R<F;R++){let H=!1;if(n.getConvexTrianglePillar(z,R,!1),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,l,u,f,d,null,null,_,x,null)),_&&H||(n.getConvexTrianglePillar(z,R,!0),De.pointToWorldFrame(r,u,n.pillarOffset,b),a.distanceTo(b)<n.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(H=this.convexConvex(t,n.pillarConvex,a,b,l,u,f,d,null,null,_,x,null)),_&&H))return!0}}sphereParticle(t,n,a,r,l,u,f,d,p,g,_){const v=$R;if(v.set(0,0,1),r.vsub(a,v),v.lengthSquared()<=t.radius*t.radius){if(_)return!0;const M=this.createContactEquation(d,f,n,t,p,g);v.normalize(),M.rj.copy(v),M.rj.scale(t.radius,M.rj),M.ni.copy(v),M.ni.negate(M.ni),M.ri.set(0,0,0),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}planeParticle(t,n,a,r,l,u,f,d,p,g,_){const v=KR;v.set(0,0,1),f.quaternion.vmult(v,v);const S=QR;if(r.vsub(f.position,S),v.dot(S)<=0){if(_)return!0;const b=this.createContactEquation(d,f,n,t,p,g);b.ni.copy(v),b.ni.negate(b.ni),b.ri.set(0,0,0);const x=JR;v.scale(v.dot(r),x),r.vsub(x,x),b.rj.copy(x),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult)}}boxParticle(t,n,a,r,l,u,f,d,p,g,_){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,n,a,r,l,u,f,d,t,n,_)}convexParticle(t,n,a,r,l,u,f,d,p,g,_){let v=-1;const S=eC,M=nC;let b=null;const x=tC;if(x.copy(r),x.vsub(a,x),l.conjugate(h_),h_.vmult(x,x),t.pointIsInside(x)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(a,l),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(l);for(let y=0,T=t.faces.length;y!==T;y++){const w=[t.worldVertices[t.faces[y][0]]],L=t.worldFaceNormals[y];r.vsub(w[0],d_);const F=-L.dot(d_);if(b===null||Math.abs(F)<Math.abs(b)){if(_)return!0;b=F,v=y,S.copy(L)}}if(v!==-1){const y=this.createContactEquation(d,f,n,t,p,g);S.scale(b,M),M.vadd(r,M),M.vsub(a,M),y.rj.copy(M),S.negate(y.ni),y.ri.set(0,0,0);const T=y.ri,w=y.rj;T.vadd(r,T),T.vsub(d.position,T),w.vadd(a,w),w.vsub(f.position,w),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,n,a,r,l,u,f,d,p,g,_){return this.convexHeightfield(n,t,r,a,u,l,d,f,p,g,_)}particleCylinder(t,n,a,r,l,u,f,d,p,g,_){return this.convexParticle(n,t,r,a,u,l,d,f,p,g,_)}sphereTrimesh(t,n,a,r,l,u,f,d,p,g,_){const v=fR,S=hR,M=dR,b=pR,x=mR,y=gR,T=xR,w=uR,L=lR,F=SR;De.pointToLocalFrame(r,u,a,x);const B=t.radius;T.lowerBound.set(x.x-B,x.y-B,x.z-B),T.upperBound.set(x.x+B,x.y+B,x.z+B),n.getTrianglesInAABB(T,F);const O=cR,q=t.radius*t.radius;for(let G=0;G<F.length;G++)for(let Q=0;Q<3;Q++)if(n.getVertex(n.indices[F[G]*3+Q],O),O.vsub(x,L),L.lengthSquared()<=q){if(w.copy(O),De.pointToWorldFrame(r,u,w,O),O.vsub(a,L),_)return!0;let K=this.createContactEquation(f,d,t,n,p,g);K.ni.copy(L),K.ni.normalize(),K.ri.copy(K.ni),K.ri.scale(t.radius,K.ri),K.ri.vadd(a,K.ri),K.ri.vsub(f.position,K.ri),K.rj.copy(O),K.rj.vsub(d.position,K.rj),this.result.push(K),this.createFrictionEquationsFromContact(K,this.frictionResult)}for(let G=0;G<F.length;G++)for(let Q=0;Q<3;Q++){n.getVertex(n.indices[F[G]*3+Q],v),n.getVertex(n.indices[F[G]*3+(Q+1)%3],S),S.vsub(v,M),x.vsub(S,y);const K=y.dot(M);x.vsub(v,y);let N=y.dot(M);if(N>0&&K<0&&(x.vsub(v,y),b.copy(M),b.normalize(),N=y.dot(b),b.scale(N,y),y.vadd(v,y),y.distanceTo(x)<t.radius)){if(_)return!0;const X=this.createContactEquation(f,d,t,n,p,g);y.vsub(x,X.ni),X.ni.normalize(),X.ni.scale(t.radius,X.ri),X.ri.vadd(a,X.ri),X.ri.vsub(f.position,X.ri),De.pointToWorldFrame(r,u,y,y),y.vsub(d.position,X.rj),De.vectorToWorldFrame(u,X.ni,X.ni),De.vectorToWorldFrame(u,X.ri,X.ri),this.result.push(X),this.createFrictionEquationsFromContact(X,this.frictionResult)}}const z=vR,R=_R,H=yR,et=oR;for(let G=0,Q=F.length;G!==Q;G++){n.getTriangleVertices(F[G],z,R,H),n.getNormal(F[G],et),x.vsub(z,y);let K=y.dot(et);if(et.scale(K,y),x.vsub(y,y),K=y.distanceTo(x),un.pointInTriangle(y,z,R,H)&&K<t.radius){if(_)return!0;let N=this.createContactEquation(f,d,t,n,p,g);y.vsub(x,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(a,N.ri),N.ri.vsub(f.position,N.ri),De.pointToWorldFrame(r,u,y,y),y.vsub(d.position,N.rj),De.vectorToWorldFrame(u,N.ni,N.ni),De.vectorToWorldFrame(u,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}F.length=0}planeTrimesh(t,n,a,r,l,u,f,d,p,g,_){const v=new C,S=aR;S.set(0,0,1),l.vmult(S,S);for(let M=0;M<n.vertices.length/3;M++){n.getVertex(M,v);const b=new C;b.copy(v),De.pointToWorldFrame(r,u,b,v);const x=sR;if(v.vsub(a,x),S.dot(x)<=0){if(_)return!0;const T=this.createContactEquation(f,d,t,n,p,g);T.ni.copy(S);const w=rR;S.scale(x.dot(S),w),v.vsub(w,w),T.ri.copy(w),T.ri.vsub(f.position,T.ri),T.rj.copy(v),T.rj.vsub(d.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}}}const Us=new C,qr=new C,Xr=new C,tR=new C,eR=new C,nR=new fn,iR=new fn,aR=new C,sR=new C,rR=new C,oR=new C,lR=new C;new C;const cR=new C,uR=new C,fR=new C,hR=new C,dR=new C,pR=new C,mR=new C,gR=new C,vR=new C,_R=new C,yR=new C,xR=new si,SR=[],jc=new C,f_=new C,MR=new C,ER=new C,bR=new C;function TR(c,t,n){let a=null;const r=c.length;for(let l=0;l!==r;l++){const u=c[l],f=MR;c[(l+1)%r].vsub(u,f);const d=ER;f.cross(t,d);const p=bR;n.vsub(u,p);const g=d.dot(p);if(a===null||g>0&&a===!0||g<=0&&a===!1){a===null&&(a=g>0);continue}else return!1}return!0}const Zc=new C,AR=new C,wR=new C,RR=new C,CR=[new C,new C,new C,new C,new C,new C],DR=new C,LR=new C,UR=new C,NR=new C,OR=new C,zR=new C,PR=new C,BR=new C,IR=new C,FR=new C,HR=new C,GR=new C,VR=new C,kR=new C;new C;new C;const qR=new C,XR=new C,WR=new C,YR=new C,jR=new C,ZR=new C,KR=new C,QR=new C,JR=new C,$R=new C,h_=new fn,tC=new C;new C;const eC=new C,d_=new C,nC=new C,iC=new C,aC=new C,sC=[0],rC=new C,oC=new C;class p_{constructor(){this.current=[],this.previous=[]}getKey(t,n){if(n<t){const a=n;n=t,t=a}return t<<16|n}set(t,n){const a=this.getKey(t,n),r=this.current;let l=0;for(;a>r[l];)l++;if(a!==r[l]){for(let u=r.length-1;u>=l;u--)r[u+1]=r[u];r[l]=a}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,n){const a=this.current,r=this.previous,l=a.length,u=r.length;let f=0;for(let d=0;d<l;d++){let p=!1;const g=a[d];for(;g>r[f];)f++;p=g===r[f],p||m_(t,g)}f=0;for(let d=0;d<u;d++){let p=!1;const g=r[d];for(;g>a[f];)f++;p=a[f]===g,p||m_(n,g)}}}function m_(c,t){c.push((t&4294901760)>>16,t&65535)}const cd=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`;class lC{constructor(){this.data={keys:[]}}get(t,n){const a=cd(t,n);return this.data[a]}set(t,n,a){const r=cd(t,n);this.get(t,n)||this.data.keys.push(r),this.data[r]=a}delete(t,n){const a=cd(t,n),r=this.data.keys.indexOf(a);r!==-1&&this.data.keys.splice(r,1),delete this.data[a]}reset(){const t=this.data,n=t.keys;for(;n.length>0;){const a=n.pop();delete t[a]}}}class cC extends Z_{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new pw,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Yw,this.constraints=[],this.narrowphase=new $w(this),this.collisionMatrix=new t_,this.collisionMatrixPrevious=new t_,this.bodyOverlapKeeper=new p_,this.shapeOverlapKeeper=new p_,this.contactmaterials=[],this.contactMaterialTable=new lC,this.defaultMaterial=new hu("default"),this.defaultContactMaterial=new fu(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,n){return this.contactMaterialTable.get(t.id,n.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const n=this.constraints.indexOf(t);n!==-1&&this.constraints.splice(n,1)}rayTest(t,n,a){a instanceof ru?this.raycastClosest(t,n,{skipBackfaces:!0},a):this.raycastAll(t,n,{skipBackfaces:!0},a)}raycastAll(t,n,a,r){return a===void 0&&(a={}),a.mode=un.ALL,a.from=t,a.to=n,a.callback=r,ud.intersectWorld(this,a)}raycastAny(t,n,a,r){return a===void 0&&(a={}),a.mode=un.ANY,a.from=t,a.to=n,a.result=r,ud.intersectWorld(this,a)}raycastClosest(t,n,a,r){return a===void 0&&(a={}),a.mode=un.CLOSEST,a.from=t,a.to=n,a.result=r,ud.intersectWorld(this,a)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof Ht&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const n=this.bodies.length-1,a=this.bodies,r=a.indexOf(t);if(r!==-1){a.splice(r,1);for(let l=0;l!==a.length;l++)a[l].index=l;this.collisionMatrix.setNumObjects(n),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const n=this.bodies;for(let a=0;a<n.length;a++){const r=n[a].shapes;for(let l=0;l<r.length;l++){const u=r[l];if(u.id===t)return u}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const n=this.contactmaterials.indexOf(t);n!==-1&&(this.contactmaterials.splice(n,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,n){t===void 0&&(t=1/60),n===void 0&&(n=10);const a=pn.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,n);else{const r=a-this.lastCallTime;this.step(t,r,n)}this.lastCallTime=a}step(t,n,a){if(a===void 0&&(a=10),n===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=n;const r=pn.now();let l=0;for(;this.accumulator>=t&&l<a&&(this.internalStep(t),this.accumulator-=t,l++,!(pn.now()-r>t*1e3)););this.accumulator=this.accumulator%t;const u=this.accumulator/t;for(let f=0;f!==this.bodies.length;f++){const d=this.bodies[f];d.previousPosition.lerp(d.position,u,d.interpolatedPosition),d.previousQuaternion.slerp(d.quaternion,u,d.interpolatedQuaternion),d.previousQuaternion.normalize()}this.time+=n}}internalStep(t){this.dt=t;const n=this.contacts,a=pC,r=mC,l=this.bodies.length,u=this.bodies,f=this.solver,d=this.gravity,p=this.doProfiling,g=this.profile,_=Ht.DYNAMIC;let v=-1/0;const S=this.constraints,M=dC;d.length();const b=d.x,x=d.y,y=d.z;let T=0;for(p&&(v=pn.now()),T=0;T!==l;T++){const G=u[T];if(G.type===_){const Q=G.force,K=G.mass;Q.x+=K*b,Q.y+=K*x,Q.z+=K*y}}for(let G=0,Q=this.subsystems.length;G!==Q;G++)this.subsystems[G].update();p&&(v=pn.now()),a.length=0,r.length=0,this.broadphase.collisionPairs(this,a,r),p&&(g.broadphase=pn.now()-v);let w=S.length;for(T=0;T!==w;T++){const G=S[T];if(!G.collideConnected)for(let Q=a.length-1;Q>=0;Q-=1)(G.bodyA===a[Q]&&G.bodyB===r[Q]||G.bodyB===a[Q]&&G.bodyA===r[Q])&&(a.splice(Q,1),r.splice(Q,1))}this.collisionMatrixTick(),p&&(v=pn.now());const L=hC,F=n.length;for(T=0;T!==F;T++)L.push(n[T]);n.length=0;const B=this.frictionEquations.length;for(T=0;T!==B;T++)M.push(this.frictionEquations[T]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(a,r,this,n,L,this.frictionEquations,M),p&&(g.narrowphase=pn.now()-v),p&&(v=pn.now()),T=0;T<this.frictionEquations.length;T++)f.addEquation(this.frictionEquations[T]);const O=n.length;for(let G=0;G!==O;G++){const Q=n[G],K=Q.bi,N=Q.bj,Y=Q.si,X=Q.sj;let mt;if(K.material&&N.material?mt=this.getContactMaterial(K.material,N.material)||this.defaultContactMaterial:mt=this.defaultContactMaterial,mt.friction,K.material&&N.material&&(K.material.friction>=0&&N.material.friction>=0&&K.material.friction*N.material.friction,K.material.restitution>=0&&N.material.restitution>=0&&(Q.restitution=K.material.restitution*N.material.restitution)),f.addEquation(Q),K.allowSleep&&K.type===Ht.DYNAMIC&&K.sleepState===Ht.SLEEPING&&N.sleepState===Ht.AWAKE&&N.type!==Ht.STATIC){const Mt=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),I=N.sleepSpeedLimit**2;Mt>=I*2&&(K.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===Ht.DYNAMIC&&N.sleepState===Ht.SLEEPING&&K.sleepState===Ht.AWAKE&&K.type!==Ht.STATIC){const Mt=K.velocity.lengthSquared()+K.angularVelocity.lengthSquared(),I=K.sleepSpeedLimit**2;Mt>=I*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(K,N,!0),this.collisionMatrixPrevious.get(K,N)||(el.body=N,el.contact=Q,K.dispatchEvent(el),el.body=K,N.dispatchEvent(el)),this.bodyOverlapKeeper.set(K.id,N.id),this.shapeOverlapKeeper.set(Y.id,X.id)}for(this.emitContactEvents(),p&&(g.makeContactConstraints=pn.now()-v,v=pn.now()),T=0;T!==l;T++){const G=u[T];G.wakeUpAfterNarrowphase&&(G.wakeUp(),G.wakeUpAfterNarrowphase=!1)}for(w=S.length,T=0;T!==w;T++){const G=S[T];G.update();for(let Q=0,K=G.equations.length;Q!==K;Q++){const N=G.equations[Q];f.addEquation(N)}}f.solve(t,this),p&&(g.solve=pn.now()-v),f.removeAllEquations();const q=Math.pow;for(T=0;T!==l;T++){const G=u[T];if(G.type&_){const Q=q(1-G.linearDamping,t),K=G.velocity;K.scale(Q,K);const N=G.angularVelocity;if(N){const Y=q(1-G.angularDamping,t);N.scale(Y,N)}}}this.dispatchEvent(fC),p&&(v=pn.now());const R=this.stepnumber%(this.quatNormalizeSkip+1)===0,H=this.quatNormalizeFast;for(T=0;T!==l;T++)u[T].integrate(t,R,H);this.clearForces(),this.broadphase.dirty=!0,p&&(g.integrate=pn.now()-v),this.stepnumber+=1,this.dispatchEvent(uC);let et=!0;if(this.allowSleep)for(et=!1,T=0;T!==l;T++){const G=u[T];G.sleepTick(this.time),G.sleepState!==Ht.SLEEPING&&(et=!0)}this.hasActiveBodies=et}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),n=this.hasAnyEventListener("endContact");if((t||n)&&this.bodyOverlapKeeper.getDiff(ga,va),t){for(let l=0,u=ga.length;l<u;l+=2)nl.bodyA=this.getBodyById(ga[l]),nl.bodyB=this.getBodyById(ga[l+1]),this.dispatchEvent(nl);nl.bodyA=nl.bodyB=null}if(n){for(let l=0,u=va.length;l<u;l+=2)il.bodyA=this.getBodyById(va[l]),il.bodyB=this.getBodyById(va[l+1]),this.dispatchEvent(il);il.bodyA=il.bodyB=null}ga.length=va.length=0;const a=this.hasAnyEventListener("beginShapeContact"),r=this.hasAnyEventListener("endShapeContact");if((a||r)&&this.shapeOverlapKeeper.getDiff(ga,va),a){for(let l=0,u=ga.length;l<u;l+=2){const f=this.getShapeById(ga[l]),d=this.getShapeById(ga[l+1]);_a.shapeA=f,_a.shapeB=d,f&&(_a.bodyA=f.body),d&&(_a.bodyB=d.body),this.dispatchEvent(_a)}_a.bodyA=_a.bodyB=_a.shapeA=_a.shapeB=null}if(r){for(let l=0,u=va.length;l<u;l+=2){const f=this.getShapeById(va[l]),d=this.getShapeById(va[l+1]);ya.shapeA=f,ya.shapeB=d,f&&(ya.bodyA=f.body),d&&(ya.bodyB=d.body),this.dispatchEvent(ya)}ya.bodyA=ya.bodyB=ya.shapeA=ya.shapeB=null}}clearForces(){const t=this.bodies,n=t.length;for(let a=0;a!==n;a++){const r=t[a];r.force,r.torque,r.force.set(0,0,0),r.torque.set(0,0,0)}}}new si;const ud=new un,pn=globalThis.performance||{};if(!pn.now){let c=Date.now();pn.timing&&pn.timing.navigationStart&&(c=pn.timing.navigationStart),pn.now=()=>Date.now()-c}new C;const uC={type:"postStep"},fC={type:"preStep"},el={type:Ht.COLLIDE_EVENT_NAME,body:null,contact:null},hC=[],dC=[],pC=[],mC=[],ga=[],va=[],nl={type:"beginContact",bodyA:null,bodyB:null},il={type:"endContact",bodyA:null,bodyB:null},_a={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ya={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function gC(){const c=fd.useRef(null);return fd.useEffect(()=>{let t,n,a,r,l,u,f,d,p;(()=>{t=new z1,t.background=new Re(8900331),n=new gi(75,window.innerWidth/window.innerHeight,.1,200),n.position.set(0,1.5,5),a=new O1({antialias:!0}),a.setSize(window.innerWidth,window.innerHeight),a.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),c.current.appendChild(a.domElement);const _=new I1(16777215,1.2);_.position.set(5,10,7.5),t.add(_),t.add(new F1(16777215,.4)),p=new G1(n,a.domElement),p.enableDamping=!0,p.enablePan=!1,p.enableZoom=!0,r=new cC,r.gravity.set(0,-9.82,0);const v=new Xw;u=new Ht({mass:0}),u.addShape(v),u.quaternion.setFromEuler(-Math.PI/2,0,0),r.addBody(u);const S=new fl(200,200),M=new q0({color:7829367,side:Gi}),b=new Ci(S,M);b.rotation.x=-Math.PI/2,t.add(b);const x=new qw(.5);l=new Ht({mass:1,position:new C(0,5,0),shape:x}),r.addBody(l);const y=new Ci(new Ad(.5,32,32),new q0({color:30719}));t.add(y),f=new sl,f.add(n),t.add(f);const T={w:!1,a:!1,s:!1,d:!1},w=5;let L=0,F=0;const B=R=>{const H=R.key.toLowerCase();H in T&&(T[H]=!0)},O=R=>{const H=R.key.toLowerCase();H in T&&(T[H]=!1)};document.addEventListener("keydown",B),document.addEventListener("keyup",O);const q=R=>{document.pointerLockElement===a.domElement&&(F-=R.movementX*.002,L-=R.movementY*.002,L=Math.max(-Math.PI/2,Math.min(Math.PI/2,L)))};a.domElement.addEventListener("click",()=>{a.domElement.requestPointerLock()}),document.addEventListener("mousemove",q);const z=()=>{d=requestAnimationFrame(z);const R=new it;T.w&&(R.z-=1),T.s&&(R.z+=1),T.a&&(R.x-=1),T.d&&(R.x+=1),R.normalize();const H=new it(0,0,-1).applyAxisAngle(new it(0,1,0),F),et=new it(1,0,0).applyAxisAngle(new it(0,1,0),F),G=new it;G.addScaledVector(H,R.z),G.addScaledVector(et,R.x),G.normalize(),R.length()>0&&(l.velocity.x=G.x*w,l.velocity.z=G.z*w),r.step(1/60),y.position.copy(l.position),f.position.set(l.position.x,l.position.y+1.5,l.position.z),f.rotation.y=F,n.rotation.x=L,p.update(),a.render(t,n)};return z(),window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}),()=>{cancelAnimationFrame(d),document.removeEventListener("keydown",B),document.removeEventListener("keyup",O),document.removeEventListener("mousemove",q),a.dispose(),c.current.removeChild(a.domElement)}})()},[]),yS.jsx("div",{ref:c,style:{width:"100vw",height:"100vh"}})}function vC(){return Kc.createElement(Kc.Fragment,null,Kc.createElement(gC,null))}const _C=document.getElementById("root");gS.createRoot(_C).render(Kc.createElement(vC));
//# sourceMappingURL=index-CApMQS-v.js.map
