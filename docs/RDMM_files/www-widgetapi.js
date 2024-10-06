(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)fa(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ja});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function qa(){this.G=!1;this.l=null;this.h=void 0;this.g=1;this.u=this.o=0;this.O=this.i=null}
function ta(a){if(a.G)throw new TypeError("Generator is already running");a.G=!0}
qa.prototype.K=function(a){this.h=a};
function ua(a,b){a.i={lc:b,wc:!0};a.g=a.o||a.u}
qa.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
qa.prototype.B=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function wa(a){a.o=0;var b=a.i.lc;a.i=null;return b}
function xa(a){var b=a.O.splice(0)[0];(b=a.i=a.i||b)?b.wc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function ya(a){this.g=new qa;this.h=a}
function za(a,b){ta(a.g);var c=a.g.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.G=!1,e;var f=e.value}catch(g){return a.g.l=null,ua(a.g,g),Ba(a)}a.g.l=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.G=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.G=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.wc)throw b.lc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l.next,b,a.g.K):(a.g.K(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.l?b=Aa(a,a.g.l["throw"],b,a.g.K):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Ca(new ya(a)))}
function Ga(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:pa?function(b,c){try{return pa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.G=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(l){h.reject(l)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var l=g[h];g[h]=null;try{l()}catch(k){this.l(k)}}}this.g=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.l=function(){function g(k){return function(m){l||(l=!0,k.call(h,m))}}
var h=this,l=!1;return{resolve:g(this.cb),reject:g(this.o)}};
b.prototype.cb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.fb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(l){this.o(l);return}"function"==typeof h?this.sb(h,g):this.u(g)};
b.prototype.o=function(g){this.K(2,g)};
b.prototype.u=function(g){this.K(1,g)};
b.prototype.K=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.eb();this.O()};
b.prototype.eb=function(){var g=this;e(function(){if(g.oa()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.G)return!1;var g=da.CustomEvent,h=da.Event,l=da.dispatchEvent;if("undefined"===typeof l)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return l(g)};
b.prototype.O=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.fb=function(g){var h=this.l();g.wb(h.resolve,h.reject)};
b.prototype.sb=function(g,h){var l=this.l();try{g.call(h,l.resolve,l.reject)}catch(k){l.reject(k)}};
b.prototype.then=function(g,h){function l(q,p){return"function"==typeof q?function(t){try{k(q(t))}catch(u){m(u)}}:p}
var k,m,n=new b(function(q,p){k=q;m=p});
this.wb(l(g,k),l(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.wb=function(g,h){function l(){switch(k.g){case 1:g(k.i);break;case 2:h(k.i);break;default:throw Error("Unexpected state: "+k.g);}}
var k=this;null==this.h?f.h(l):this.h.push(l);this.G=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,l){l(g)})};
b.race=function(g){return new b(function(h,l){for(var k=w(g),m=k.next();!m.done;m=k.next())d(m.value).wb(h,l)})};
b.all=function(g){var h=w(g),l=h.next();return l.done?d([]):new b(function(k,m){function n(t){return function(u){q[t]=u;p--;0==p&&k(q)}}
var q=[],p=0;do q.push(void 0),p++,d(l.value).wb(n(q.length-1),m),l=h.next();while(!l.done)})};
return b});
v("WeakMap",function(a){function b(l){this.g=(h+=Math.random()+1).toString();if(l){l=w(l);for(var k;!(k=l.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(l){var k=typeof l;return"object"===k&&null!==l||"function"===k}
function e(l){if(!fa(l,g)){var k=new c;ba(l,g,{value:k})}}
function f(l){var k=Object[l];k&&(Object[l]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var l=Object.seal({}),k=Object.seal({}),m=new a([[l,2],[k,3]]);if(2!=m.get(l)||3!=m.get(k))return!1;m.delete(l);m.set(k,4);return!m.has(l)&&4==m.get(k)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(l,k){if(!d(l))throw Error("Invalid WeakMap key");e(l);if(!fa(l,g))throw Error("WeakMap key fail: "+l);l[g][this.g]=k;return this};
b.prototype.get=function(l){return d(l)&&fa(l,g)?l[g][this.g]:void 0};
b.prototype.has=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)};
b.prototype.delete=function(l){return d(l)&&fa(l,g)&&fa(l[g],this.g)?delete l[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,l){var k=h[1];return ea(function(){if(k){for(;k.head!=h[1];)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:l(k)};k=null}return{done:!0,value:void 0}})}
function d(h,l){var k=l&&typeof l;"object"==k||"function"==k?f.has(l)?k=f.get(l):(k=""+ ++g,f.set(l,k)):k="p_"+l;var m=h[0][k];if(m&&fa(h[0],k))for(h=0;h<m.length;h++){var n=m[h];if(l!==l&&n.key!==n.key||l===n.key)return{id:k,list:m,index:h,entry:n}}return{id:k,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),l=new a(w([[h,"s"]]));if("s"!=l.get(h)||1!=l.size||l.get({x:4})||l.set({x:4},"t")!=l||2!=l.size)return!1;var k=l.entries(),m=k.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!k.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,l){h=0===h?0:h;var k=d(this,h);k.list||(k.list=this[0][k.id]=[]);k.entry?k.entry.value=l:(k.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:l},k.list.push(k.entry),this[1].previous.next=k.entry,this[1].previous=k.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,l){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(l,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||pa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)fa(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function Ja(a){var b=D("CLOSURE_FLAGS");a=b&&b[a];return null!=a?a:!1}
function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Va=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ta:Ua;return Va.apply(null,arguments)}
function Wa(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Xa(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.oe=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Xa(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function lb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function mb(a){var b=nb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ob(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function pb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=pb(a[c]);return b}
var qb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<qb.length;f++)c=qb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var sb;function tb(){if(void 0===sb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){C.console&&C.console.error(c.message)}sb=a}else sb=a}return sb}
;function ub(a,b){this.g=a===vb&&b||""}
ub.prototype.toString=function(){return this.g};
function wb(a){return new ub(vb,a)}
var vb={};wb("");function xb(a){this.g=a}
xb.prototype.toString=function(){return this.g+""};
var yb={};function zb(a){this.g=a}
zb.prototype.toString=function(){return this.g.toString()};
var Ab={},Bb=new zb("about:invalid#zClosurez",Ab);var Cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Db=/&/g,Eb=/</g,Fb=/>/g,Gb=/"/g,Hb=/'/g,Ib=/\x00/g,Jb=/[\x00&<>"']/;var Kb=Ja(610401301),Lb=Ja(188588736);function Mb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Nb,Ob=C.navigator;Nb=Ob?Ob.userAgentData||null:null;function Pb(a){return Kb?Nb?Nb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Mb().indexOf(a)}
;function Qb(){return Kb?!!Nb&&0<Nb.brands.length:!1}
function Ub(){return Qb()?!1:F("Trident")||F("MSIE")}
function Vb(){return Qb()?Pb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Qb()?0:F("Edge"))||F("Silk")}
;function Wb(a){this.g=a}
Wb.prototype.toString=function(){return this.g.toString()};function Xb(a){Jb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Db,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Eb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Fb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Gb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Hb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Ib,"&#0;")));return a}
;var Yb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Zb(a){return a?decodeURI(a):a}
function $b(a){return Zb(a.match(Yb)[3]||null)}
function ac(a){var b=a.match(Yb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function bc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)bc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function cc(a){var b=[],c;for(c in a)bc(c,a[c],b);return b.join("&")}
var dc=/#|$/;function ec(a,b){var c=a.search(dc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function fc(a){C.setTimeout(function(){throw a;},0)}
;function gc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function hc(a){hc[" "](a);return a}
hc[" "]=function(){};var ic=Qb()?!1:F("Opera"),jc=Ub(),kc=F("Edge"),lc=F("Gecko")&&!(-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),mc=-1!=Mb().toLowerCase().indexOf("webkit")&&!F("Edge");function nc(){var a=C.document;return a?a.documentMode:void 0}
var oc;a:{var pc="",qc=function(){var a=Mb();if(lc)return/rv:([^\);]+)(\)|;)/.exec(a);if(kc)return/Edge\/([\d\.]+)/.exec(a);if(jc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(mc)return/WebKit\/(\S+)/.exec(a);if(ic)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
qc&&(pc=qc?qc[1]:"");if(jc){var rc=nc();if(null!=rc&&rc>parseFloat(pc)){oc=String(rc);break a}}oc=pc}var sc=oc,tc;if(C.document&&jc){var uc=nc();tc=uc?uc:parseInt(sc,10)||void 0}else tc=void 0;var zc=tc;var Ac=gc()||F("iPod"),Bc=F("iPad");!F("Android")||Vb();Vb();var Cc=F("Safari")&&!(Vb()||(Qb()?0:F("Coast"))||(Qb()?0:F("Opera"))||(Qb()?0:F("Edge"))||(Qb()?Pb("Microsoft Edge"):F("Edg/"))||(Qb()?Pb("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(gc()||F("iPad")||F("iPod"));var Dc={},Ec=null;
function Fc(a,b){Na(a);void 0===b&&(b=0);if(!Ec){Ec={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Dc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Ec[h]&&(Ec[h]=g)}}}b=Dc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var l=a[f],k=a[f+1];h=a[f+2];g=b[l>>2];l=b[(l&3)<<4|k>>4];k=b[(k&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+l+k+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Gc="undefined"!==typeof Uint8Array,Hc=!jc&&"function"===typeof btoa;function Ic(){return"function"===typeof BigInt}
;var Jc=0,Kc=0;function Lc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Mc(c,a)),b=c.next().value,a=c.next().value,c=b);Jc=c>>>0;Kc=a>>>0}
function Nc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Ic()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Oc(c)+Oc(a));return c}
function Oc(a){a=String(a);return"0000000".slice(a.length)+a}
function Pc(){var a=Jc,b=Kc;b&2147483648?Ic()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Mc(a,b)),a=b.next().value,b=b.next().value,a="-"+Nc(a,b)):a=Nc(a,b);return a}
function Mc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Qc(a){return Array.prototype.slice.call(a)}
;var Rc;Rc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({ae:1,Yd:2,Xd:4,de:8,ce:16,be:32,Od:64,fe:128,Vd:256,Ud:512,Zd:1024,Sd:2048,ee:4096,Td:8192})));var Sc=Rc?function(a,b){a[Rc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},Tc=Rc?function(a,b){a[Rc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function Uc(a,b,c){return c?a|b:a&~b}
var Vc=Rc?function(a){return a[Rc]|0}:function(a){return a.ga|0},Wc=Rc?function(a){return a[Rc]}:function(a){return a.ga},Xc=Rc?function(a,b){a[Rc]=b;
return a}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function Yc(a,b){Xc(b,(a|0)&-14591)}
function Zc(a,b){Xc(b,(a|34)&-14557)}
function $c(a){a=a>>14&1023;return 0===a?536870912:a}
;var ad={},bd={};function cd(a){return!(!a||"object"!==typeof a||a.g!==bd)}
function dd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var ed;function fd(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Vc(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Xc(a,d|1);return!0}
var gd,hd=[];Xc(hd,55);gd=Object.freeze(hd);function id(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});function jd(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function kd(a){return a.displayName||a.name||"unknown type name"}
function ld(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return a}
var md=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function nd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:md.test(a)}
function od(a,b){b=!!b;if(!nd(a))throw jd("int64");if("string"===typeof a)if(nd(a),b=Math.trunc(Number(a)),Number.isSafeInteger(b))a=String(b);else{if(b=a.indexOf("."),-1!==b&&(a=a.substring(0,b)),!td(a)){if(16>a.length)Lc(Number(a));else if(Ic())a=BigInt(a),Jc=Number(a&BigInt(4294967295))>>>0,Kc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Kc=Jc=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Kc*=1E6,Jc=1E6*Jc+d,4294967296<=Jc&&(Kc+=Math.trunc(Jc/4294967296),
Kc>>>=0,Jc>>>=0);b&&(b=w(Mc(Jc,Kc)),a=b.next().value,b=b.next().value,Jc=a,Kc=b)}a=Pc()}}else if(b)nd(a),a=Math.trunc(a),Number.isSafeInteger(a)?a=String(a):(b=String(a),td(b)?a=b:(Lc(a),a=Pc()));else if(nd(a),a=Math.trunc(a),!Number.isSafeInteger(a)){Lc(a);b=Jc;c=Kc;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function ud(a){return null==a?a:od(a)}
function td(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function vd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function wd(a){return null==a||"string"===typeof a?a:void 0}
function xd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+kd(b)+" but got "+(a&&kd(a.constructor)));return a}
function yd(a,b,c){if(null!=a&&"object"===typeof a&&a.Sb===ad)return a;if(Array.isArray(a)){var d=Vc(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Xc(a,e);return new b(a)}}
;var zd;function H(a,b,c){null==a&&(a=zd);zd=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Vc(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if(dd(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}Xc(a,d);return a}
;function Ad(a,b){return Bd(b)}
function Bd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(fd(a,void 0,0))return}else if(Gc&&null!=a&&a instanceof Uint8Array){if(Hc){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Fc(a);return a}}return a}
;function Cd(a,b,c){a=Qc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Dd(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=fd(a,void 0,0)?void 0:e&&Vc(a)&2?a:Ed(a,b,c,void 0!==d,e);else if(dd(a)){var f={},g;for(g in a)f[g]=Dd(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Ed(a,b,c,d,e){var f=d||c?Vc(a):0;d=d?!!(f&32):void 0;a=Qc(a);for(var g=0;g<a.length;g++)a[g]=Dd(a[g],b,c,d,e);c&&c(f,a);return a}
function Fd(a){return a.Sb===ad?a.toJSON():Bd(a)}
;function Gd(a,b,c){c=void 0===c?Zc:c;if(null!=a){if(Gc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Vc(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?Xc(a,(d|34)&-12293):Ed(a,Gd,d&4?Zc:c,!0,!0)}a.Sb===ad&&(c=a.s,d=Wc(c),a=d&2?a:Hd(a,c,d,!0));return a}}
function Hd(a,b,c,d){a=a.constructor;b=Id(b,c,d);Vc(b);zd=b;b=new a(b);zd=void 0;return b}
function Id(a,b,c){var d=c||b&2?Zc:Yc,e=!!(b&32);a=Cd(a,b,function(f){return Gd(f,e,d)});
Sc(a,32|(c?2:0));return a}
function Jd(a){var b=a.s,c=Wc(b);return c&2?Hd(a,b,c,!1):a}
;function Kd(a,b){a=a.s;return Ld(a,Wc(a),b)}
function Ld(a,b,c,d){if(-1===c)return null;if(c>=$c(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Md(a,b,c){var d=a.s,e=Wc(d);id(e);Nd(d,e,b,c);return a}
function Nd(a,b,c,d,e){dd(d);var f=$c(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Xc(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Od(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Pd(a,b,c,d){a=a.s;var e=Wc(a);id(e);(c=Qd(a,e,c))&&c!==b&&null!=d&&(e=Nd(a,e,c));Nd(a,e,b,d)}
function Rd(a,b,c){a=a.s;return Qd(a,Wc(a),b)===c?c:-1}
function Qd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Ld(a,b,f)&&(0!==d&&(b=Nd(a,b,d)),d=f)}return d}
function Sd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Wc(e),g=Ld(e,f,c,d);b=yd(g,b,f);b!==g&&null!=b&&Nd(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Wc(a);f&2||(g=Jd(e),g!==e&&(e=g,Nd(a,f,c,e,d)));return e}
function I(a,b,c,d){null!=d?xd(d,b):d=void 0;return Md(a,c,d)}
function Td(a,b,c,d,e){null!=e?xd(e,b):e=void 0;Pd(a,c,d,e)}
function Ud(a,b){var c=!0;a=Uc(a,2,!!(2&b));a=Uc(a,32,!!(32&b)&&c);return a=Uc(a,2048,!1)}
function Vd(a,b,c,d){a=a.s;var e=Wc(a);id(e);var f,g=!!(2&e),h=g?1:2,l=1===h;h=2===h;f&&(f=!g);g=Ld(a,e,b);g=Array.isArray(g)?g:gd;var k=Vc(g),m=!!(4&k);if(!m){var n=k;0===n&&(n=Ud(n,e));n=Uc(n,1,!0);k=g;var q=e,p=!!(2&n);p&&(q=Uc(q,2,!0));for(var t=!p,u=!0,z=0,G=0;z<k.length;z++){var P=yd(k[z],c,q);if(P instanceof c){if(!p){var U=!!(Vc(P.s)&2);t&&(t=!U);u&&(u=U)}k[G++]=P}}G<z&&(k.length=G);n=Uc(n,4,!0);n=Uc(n,16,u);n=Uc(n,8,t);Xc(k,n);p&&Object.freeze(k);k=n}n=!!(8&k)||l&&!g.length;if(f&&!n){Od(k)&&
(g=Qc(g),k=Ud(k,e),e=Nd(a,e,b,g));f=g;for(n=0;n<f.length;n++)q=f[n],p=Jd(q),q!==p&&(f[n]=p);k=Uc(k,8,!0);k=Uc(k,16,!f.length);Xc(f,k)}Od(k)||(f=k,l&&(k=Uc(k,!g.length||16&k&&(!m||32&k)?2:2048,!0)),k!==f&&Xc(g,k),l&&Object.freeze(g));h&&Od(k)&&(g=Qc(g),k=Ud(k,e),Xc(g,k),Nd(a,e,b,g));b=g;c=null!=d?xd(d,c):new c;b.push(c);Vc(c.s)&2?Tc(b,8):Tc(b,16)}
function Wd(a,b){var c=void 0===c?"":c;a=wd(Kd(a,b));return null!=a?a:c}
function Xd(a,b){b=Rd(a,Yd,b);return wd(Kd(a,b))}
function Zd(a,b,c){if(null!=c){if("number"!==typeof c)throw jd("int32");if(!Number.isFinite(c))throw jd("int32");c|=0}Md(a,b,c)}
function J(a,b,c){return Md(a,b,vd(c))}
function $d(a,b,c){if(null!=c){if(!Number.isFinite(c))throw jd("enum");c|=0}return Md(a,b,c)}
;function K(a,b,c){this.s=H(a,b,c)}
K.prototype.toJSON=function(){if(ed)var a=ae(this,this.s,!1);else a=Ed(this.s,Fd,void 0,void 0,!1),a=ae(this,a,!0);return a};
function be(a){ed=!0;try{return JSON.stringify(a.toJSON(),Ad)}finally{ed=!1}}
K.prototype.clone=function(){var a=this.s;return Hd(this,a,Wc(a),!1)};
K.prototype.Sb=ad;K.prototype.toString=function(){return ae(this,this.s,!1).toString()};
function ae(a,b,c){var d=Lb?void 0:a.constructor.ma;var e=Wc(c?a.s:b);a=b.length;if(!a)return b;var f;if(dd(c=b[a-1])){a:{var g=c;var h={},l=!1,k;for(k in g){var m=g[k];if(Array.isArray(m)){var n=m;if(fd(m,d,+k)||cd(m)&&0===m.size)m=null;m!=n&&(l=!0)}null!=m?h[k]=m:l=!0}if(l){for(var q in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(k=+!!(e&512)-1;0<a;a--){q=a-1;c=b[q];q-=k;if(!(null==c||fd(c,d,q)||cd(c)&&0===c.size))break;var p=!0}if(!f&&!p)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);
return b}
;var ce=window;wb("csi.gstatic.com");wb("googleads.g.doubleclick.net");wb("partner.googleadservices.com");wb("pubads.g.doubleclick.net");wb("securepubads.g.doubleclick.net");wb("tpc.googlesyndication.com");function de(a,b){this.width=a;this.height=b}
r=de.prototype;r.clone=function(){return new de(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ee(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function fe(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;/*

 SPDX-License-Identifier: Apache-2.0
*/
function ge(a){this.md=a}
function he(a){return new ge(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ie=[he("data"),he("http"),he("https"),he("mailto"),he("ftp"),new ge(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function je(a,b){b=void 0===b?ie:b;if(a instanceof zb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof ge&&d.md(a))return new zb(a,Ab)}}
function ke(a){var b=void 0===b?ie:b;return je(a,b)||Bb}
var le=/^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;function me(){throw Error("unknown trace type");}
;var ne={Rd:0,Wd:1,Pd:2,Qd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function oe(a,b){b=Error.call(this,a+" cannot be used with intent "+ne[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(oe,Error);
function pe(a,b){a.removeAttribute("srcdoc");if(b instanceof xb)throw new oe("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);b instanceof zb?b instanceof zb&&b.constructor===zb?b=b.g:(Ka(b),b="type_error:SafeUrl"):b=le.test(b)?b:void 0;void 0!==b&&(a.src=
b)}
;function qe(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=re(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,se[c])c=se[c];else{c=String(c);if(!se[c]){var f=/function\s+([^\(]+)/m.exec(c);se[c]=f?f[1]:"[Anonymous]"}c=se[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function re(a,b){b||(b={});b[te(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[te(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=re(a,b));return c}
function te(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var se={};function ue(a){var b=ve;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function we(){var a=[];ue(function(b){a.push(b)});
return a}
var ve={Dd:"allow-forms",Ed:"allow-modals",Fd:"allow-orientation-lock",Gd:"allow-pointer-lock",Hd:"allow-popups",Id:"allow-popups-to-escape-sandbox",Jd:"allow-presentation",Kd:"allow-same-origin",Ld:"allow-scripts",Md:"allow-top-navigation",Nd:"allow-top-navigation-by-user-activation"},xe=bb(function(){return we()});
function ye(){var a=ze(),b={};db(xe(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ze(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Ae=(new Date).getTime();function Be(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Ce(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],G=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var U=1518500249}else P=t^u^z,U=1859775393;else 60>p?(P=t&u|z&(t|u),U=2400959708):(P=t^u^z,U=3395469782);P=((n<<5|n>>>27)&4294967295)+P+G+U+q[p]&4294967295;G=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==k)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[k++]=n[p++],m++,64==k)for(k=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>k?c(h,56-k):c(h,64-(k-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],l=1;64>l;++l)h[l]=0;var k,m;a();return{reset:a,update:c,digest:d,Vc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function De(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,Ee(Be(d),a,c||null)].join(" "):null}
function Ee(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Fe(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Fe(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Fe(a){var b=Ce();b.update(a);return b.Vc().toLowerCase()}
;var Ge={};function He(a){this.g=a||{cookie:""}}
r=He.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.g.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Pb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.we;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Pb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Cb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Pb:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Ie=new He("undefined"==typeof document?null:document);function Je(a){return!!Ge.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Ke(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new He(document)).get(b));return a?De(a,c,d):null}
function Le(a){var b=void 0===b?!1:b;var c=Be(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;Je(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new He(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Je(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new He(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?De(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Je(b)&&((b=Ke("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Ke("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function Me(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Ne(){this.Aa=this.Aa;this.l=this.l}
Ne.prototype.Aa=!1;Ne.prototype.dispose=function(){this.Aa||(this.Aa=!0,this.sa())};
Ne.prototype.addOnDisposeCallback=function(a,b){this.Aa?void 0!==b?a.call(b):a():(this.l||(this.l=[]),this.l.push(void 0!==b?Va(a,b):a))};
Ne.prototype.sa=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Oe(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Oe.prototype.stopPropagation=function(){this.i=!0};
Oe.prototype.preventDefault=function(){this.defaultPrevented=!0};var Pe=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Qe(a,b){Oe.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Xa(Qe,Oe);var Ue={2:"touch",3:"pen",4:"mouse"};
Qe.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(lc){a:{try{hc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Ue[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&Qe.na.preventDefault.call(this)};
Qe.prototype.stopPropagation=function(){Qe.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
Qe.prototype.preventDefault=function(){Qe.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ve="closure_listenable_"+(1E6*Math.random()|0);var We=0;function Xe(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Ab=e;this.key=++We;this.pb=this.vb=!1}
function Ye(a){a.pb=!0;a.listener=null;a.proxy=null;a.src=null;a.Ab=null}
;function Ze(a){this.src=a;this.listeners={};this.g=0}
Ze.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=$e(a,b,d,e);-1<g?(b=a[g],c||(b.vb=!1)):(b=new Xe(b,this.src,f,!!d,e),b.vb=c,a.push(b));return b};
Ze.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=$e(e,b,c,d);return-1<b?(Ye(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function af(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(Ye(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function $e(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.pb&&f.listener==b&&f.capture==!!c&&f.Ab==d)return e}return-1}
;var bf="closure_lm_"+(1E6*Math.random()|0),cf={},df=0;function ef(a,b,c,d,e){if(d&&d.once)ff(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ef(a,b[f],c,d,e);else c=gf(c),a&&a[Ve]?a.Ka(b,c,Oa(d)?!!d.capture:!!d,e):hf(a,b,c,!1,d,e)}
function hf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=jf(a);h||(a[bf]=h=new Ze(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=kf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Pe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(lf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");df++}}
function kf(){function a(c){return b.call(a.src,a.listener,c)}
var b=mf;return a}
function ff(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ff(a,b[f],c,d,e);else c=gf(c),a&&a[Ve]?a.g.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):hf(a,b,c,!0,d,e)}
function nf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nf(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=gf(c),a&&a[Ve])?a.g.remove(String(b),c,d,e):a&&(a=jf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=$e(b,c,d,e)),(c=-1<a?b[a]:null)&&of(c))}
function of(a){if("number"!==typeof a&&a&&!a.pb){var b=a.src;if(b&&b[Ve])af(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(lf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);df--;(c=jf(b))?(af(c,a),0==c.g&&(c.src=null,b[bf]=null)):Ye(a)}}}
function lf(a){return a in cf?cf[a]:cf[a]="on"+a}
function mf(a,b){if(a.pb)a=!0;else{b=new Qe(b,this);var c=a.listener,d=a.Ab||a.src;a.vb&&of(a);a=c.call(d,b)}return a}
function jf(a){a=a[bf];return a instanceof Ze?a:null}
var pf="__closure_events_fn_"+(1E9*Math.random()>>>0);function gf(a){if("function"===typeof a)return a;a[pf]||(a[pf]=function(b){return a.handleEvent(b)});
return a[pf]}
;function qf(){Ne.call(this);this.g=new Ze(this);this.O=this;this.G=null}
Xa(qf,Ne);qf.prototype[Ve]=!0;qf.prototype.addEventListener=function(a,b,c,d){ef(this,a,b,c,d)};
qf.prototype.removeEventListener=function(a,b,c,d){nf(this,a,b,c,d)};
function rf(a,b){var c=a.G;if(c){var d=[];for(var e=1;c;c=c.G)d.push(c),++e}a=a.O;c=b.type||b;"string"===typeof b?b=new Oe(b,a):b instanceof Oe?b.target=b.target||a:(e=b,b=new Oe(c,a),rb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=sf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=sf(g,c,!0,b)&&e,b.i||(e=sf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=sf(g,c,!1,b)&&e}
qf.prototype.sa=function(){qf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ye(d[e]);delete a.listeners[c];a.g--}}this.G=null};
qf.prototype.Ka=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function sf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.pb&&g.capture==c){var h=g.listener,l=g.Ab||g.src;g.vb&&af(a.g,g);e=!1!==h.call(l,d)&&e}}return e&&!d.defaultPrevented}
;function tf(a){qf.call(this);var b=this;this.K=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.o=function(){return B(function(e){return A(e,uf(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.K||vf(this)}
y(tf,qf);function wf(){var a=xf;tf.g||(tf.g=new tf(a));return tf.g}
tf.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.ha.ba(this.K);delete tf.g};
tf.prototype.ca=function(){return this.h};
function vf(a){a.K=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,uf(a),3):A(c,uf(a),3);vf(a);c.g=0})},3E4)}
function uf(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.O=[h.i];h.o=0;h.u=0;a.u=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?rf(a,"networkstatus-online"):rf(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.B(3)}})})}
;function yf(){this.data=[];this.g=-1}
yf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
yf.prototype.get=function(a){return!!this.data[a]};
function zf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Af(a){this.s=H(a)}
y(Af,K);function Bf(a){this.s=H(a)}
y(Bf,K);function Cf(a,b){return J(a,2,b)}
function Df(a,b){return J(a,3,b)}
function Ef(a,b){return J(a,4,b)}
function Ff(a,b){return J(a,5,b)}
function Gf(a,b){return J(a,9,b)}
function Hf(a,b){var c=a.s,d=Wc(c);id(d);if(null==b)Nd(c,d,10);else{if(!Array.isArray(b))throw jd();var e=Vc(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),l;if(l=!h)l=!1;for(var k=!0,m=!0,n=0;n<b.length;n++){var q=b[n];xd(q,Af);g||(q=!!(Vc(q.s)&2),k&&(k=!q),m&&(m=q))}g||(e=Uc(e,5,!0),e=Uc(e,8,k),e=Uc(e,16,m));if(l||h&&e!==f)b=Qc(b),f=0,e=Ud(e,d);e!==f&&Xc(b,e);Nd(c,d,10,b)}return a}
function If(a,b){return Md(a,11,null==b?b:ld(b))}
function Jf(a,b){return J(a,1,b)}
function Kf(a,b){return Md(a,7,null==b?b:ld(b))}
Bf.ma=[10,6];var Lf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Mf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Nf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Of(){var a=window;if(!Nf(a))return null;var b=Mf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Lf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Pf(a){var b;return If(Hf(Ff(Cf(Jf(Ef(Kf(Gf(Df(new Bf,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Af;d=J(d,1,c.brand);return J(d,2,c.version)}))||[]),a.wow64||!1)}
function Qf(){var a,b;return null!=(b=null==(a=Of())?void 0:a.then(function(c){return Pf(c)}))?b:null}
;function Rf(a,b){this.i=a;this.l=b;this.h=0;this.g=null}
Rf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Sf(a,b){a.l(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Tf;function Uf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=ee();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(l){if(("*"==h||l.origin==h)&&l.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Ub()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ic;c.ic=null;e()}};
return function(e){d.next={ic:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Vf(){this.h=this.g=null}
Vf.prototype.add=function(a,b){var c=Wf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
Vf.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Wf=new Rf(function(){return new Xf},function(a){return a.reset()});
function Xf(){this.next=this.scope=this.g=null}
Xf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Xf.prototype.reset=function(){this.next=this.scope=this.g=null};var Yf,Zf=!1,$f=new Vf;function ag(a,b){Yf||bg();Zf||(Yf(),Zf=!0);$f.add(a,b)}
function bg(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Yf=function(){a.then(cg)}}else Yf=function(){var b=cg;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Qb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Tf||(Tf=Uf()),Tf(b)):C.setImmediate(b)}}
function cg(){for(var a;a=$f.remove();){try{a.g.call(a.scope)}catch(b){fc(b)}Sf(Wf,a)}Zf=!1}
;function dg(a,b){this.g=a[C.Symbol.iterator]();this.h=b}
dg.prototype[Symbol.iterator]=function(){return this};
dg.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function eg(a,b){return new dg(a,b)}
;function fg(){this.blockSize=-1}
;function gg(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
Xa(gg,fg);gg.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.l=this.h=0};
function hg(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],l=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var k=1518500249}else f=c^g^h,k=1859775393;else 60>e?(f=c&g|h&(c|g),k=2400959708):
(f=c^g^h,k=3395469782);f=(b<<5|b>>>27)+f+l+k+d[e]&4294967295;l=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+l&4294967295}
gg.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)hg(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){hg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){hg(this,e);f=0;break}}this.h=f;this.l+=b}};
gg.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;hg(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function ig(){}
ig.prototype.next=function(){return jg};
var jg={done:!0,value:void 0};function kg(a){return{value:a,done:!1}}
ig.prototype.ia=function(){return this};function lg(a){if(a instanceof mg||a instanceof ng||a instanceof og)return a;if("function"==typeof a.next)return new mg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new mg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new mg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function mg(a){this.h=a}
mg.prototype.ia=function(){return new ng(this.h())};
mg.prototype[Symbol.iterator]=function(){return new og(this.h())};
mg.prototype.g=function(){return new og(this.h())};
function ng(a){this.h=a}
y(ng,ig);ng.prototype.next=function(){return this.h.next()};
ng.prototype[Symbol.iterator]=function(){return new og(this.h)};
ng.prototype.g=function(){return new og(this.h)};
function og(a){mg.call(this,function(){return a});
this.i=a}
y(og,mg);og.prototype.next=function(){return this.i.next()};var pg=C.JSON.stringify;function qg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function rg(a){this.g=0;this.G=void 0;this.l=this.h=this.i=null;this.o=this.u=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){sg(b,2,c)},function(c){sg(b,3,c)})}catch(c){sg(this,3,c)}}
function tg(){this.next=this.context=this.h=this.i=this.g=null;this.l=!1}
tg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.l=!1};
var ug=new Rf(function(){return new tg},function(a){a.reset()});
function vg(a,b,c){var d=ug.get();d.i=a;d.h=b;d.context=c;return d}
rg.prototype.then=function(a,b,c){return wg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
rg.prototype.$goog_Thenable=!0;rg.prototype.cancel=function(a){if(0==this.g){var b=new xg(a);ag(function(){yg(this,b)},this)}};
function yg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.l||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?yg(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):zg(c),Ag(c,e,3,b)))}a.i=null}else sg(a,3,b)}
function Bg(a,b){a.h||2!=a.g&&3!=a.g||Cg(a);a.l?a.l.next=b:a.h=b;a.l=b}
function wg(a,b,c,d){var e=vg(null,null,null);e.g=new rg(function(f,g){e.i=b?function(h){try{var l=b.call(d,h);f(l)}catch(k){g(k)}}:f;
e.h=c?function(h){try{var l=c.call(d,h);void 0===l&&h instanceof xg?g(h):f(l)}catch(k){g(k)}}:g});
e.g.i=a;Bg(a,e);return e.g}
rg.prototype.O=function(a){this.g=0;sg(this,2,a)};
rg.prototype.oa=function(a){this.g=0;sg(this,3,a)};
function sg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.O,f=a.oa;if(d instanceof rg){Bg(d,vg(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(k){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Oa(d))try{var l=d.then;if("function"===typeof l){Dg(d,l,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}}g||(a.G=c,a.g=b,a.i=null,Cg(a),3!=b||c instanceof xg||Eg(a,c))}}
function Dg(a,b,c,d,e){function f(l){h||(h=!0,d.call(e,l))}
function g(l){h||(h=!0,c.call(e,l))}
var h=!1;try{b.call(a,g,f)}catch(l){f(l)}}
function Cg(a){a.u||(a.u=!0,ag(a.K,a))}
function zg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.l=null);return b}
rg.prototype.K=function(){for(var a;a=zg(this);)Ag(this,a,this.g,this.G);this.u=!1};
function Ag(a,b,c,d){if(3==c&&b.h&&!b.l)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Fg(b,c,d);else try{b.l?b.i.call(b.context):Fg(b,c,d)}catch(e){Gg.call(null,e)}Sf(ug,b)}
function Fg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Eg(a,b){a.o=!0;ag(function(){a.o&&Gg.call(null,b)})}
var Gg=fc;function xg(a){Za.call(this,a)}
Xa(xg,Za);xg.prototype.name="cancel";function L(a){Ne.call(this);this.u=1;this.i=[];this.o=0;this.g=[];this.h={};this.G=!!a}
Xa(L,Ne);r=L.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.u;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.u=e+3;d.push(e);return e};
function Hg(a,b,c){var d=Ig;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.rb(a)}}
r.rb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.o?(this.i.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.ab=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.G)for(e=0;e<c.length;e++){var g=c[e];Jg(this.g[g+1],this.g[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.Aa;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.o--,0<this.i.length&&0==this.o)for(;c=this.i.pop();)this.rb(c)}}return 0!=e}return!1};
function Jg(a,b,c){ag(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.rb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){L.na.sa.call(this);this.clear();this.i.length=0};function Kg(a){this.g=a}
Kg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,pg(b))};
Kg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Kg.prototype.remove=function(a){this.g.remove(a)};function Lg(a){this.g=a}
Xa(Lg,Kg);function Mg(a){this.data=a}
function Ng(a){return void 0===a||a instanceof Mg?a:new Mg(a)}
Lg.prototype.set=function(a,b){Lg.na.set.call(this,a,Ng(b))};
Lg.prototype.h=function(a){a=Lg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Lg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Og(a){this.g=a}
Xa(Og,Lg);Og.prototype.set=function(a,b,c){if(b=Ng(b)){if(c){if(c<Wa()){Og.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Wa()}Og.na.set.call(this,a,b)};
Og.prototype.h=function(a){var b=Og.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Wa()||c&&c>Wa())Og.prototype.remove.call(this,a);else return b}};function Pg(){}
;function Qg(){}
Xa(Qg,Pg);Qg.prototype[Symbol.iterator]=function(){return lg(this.ia(!0)).g()};
Qg.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Rg(a){this.g=a;this.h=null}
Xa(Rg,Qg);r=Rg.prototype;r.set=function(a,b){Sg(this);try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){Sg(this);a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){Sg(this);this.g.removeItem(a)};
r.ia=function(a){Sg(this);var b=0,c=this.g,d=new ig;d.next=function(){if(b>=c.length)return jg;var e=c.key(b++);if(a)return kg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return kg(e)};
return d};
r.clear=function(){Sg(this);this.g.clear()};
r.key=function(a){Sg(this);return this.g.key(a)};
function Sg(a){if(null==a.g)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.h)?b:a.h=Tg(a.g))||fc(Error("Storage mechanism: Storage unavailable"))}
function Tg(a){if(!a)return!1;try{return a.setItem("__sak","1"),a.removeItem("__sak"),!0}catch(b){return b instanceof DOMException&&("QuotaExceededError"===b.name||22===b.code||1014===b.code||"NS_ERROR_DOM_QUOTA_REACHED"===b.name)&&a&&0!==a.length}}
;function Ug(){var a=null;try{a=C.localStorage||null}catch(b){}Rg.call(this,a)}
Xa(Ug,Rg);function Vg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vg)for(c=Wg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Wg(a){Xg(a);return a.g.concat()}
r=Vg.prototype;r.has=function(a){return Yg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Zg;Xg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Zg(a,b){return a===b}
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return Yg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&Xg(this),!0):!1};
function Xg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];Yg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],Yg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return Yg(this.h,a)?this.h[a]:b};
r.set=function(a,b){Yg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=Wg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Vg(this)};
r.keys=function(){return lg(this.ia(!0)).g()};
r.values=function(){return lg(this.ia(!1)).g()};
r.entries=function(){var a=this;return eg(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){Xg(this);var b=0,c=this.i,d=this,e=new ig;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return jg;var f=d.g[b++];return kg(a?f:d.h[f])};
return e};
function Yg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function $g(a,b){this.h=a;this.g=null;var c;if(c=jc)c=!(9<=Number(zc));if(c){ah||(ah=new Vg);this.g=ah.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),ah.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Xa($g,Qg);var bh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ah=null;function ch(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return bh[b]})}
r=$g.prototype;r.set=function(a,b){this.g.setAttribute(ch(a),b);dh(this)};
r.get=function(a){a=this.g.getAttribute(ch(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(ch(a));dh(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new ig;d.next=function(){if(b>=c.length)return jg;var e=c[b++];if(a)return kg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return kg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);dh(this)};
function dh(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function eh(a,b){this.h=a;this.g=b+"::"}
Xa(eh,Qg);eh.prototype.set=function(a,b){this.h.set(this.g+a,b)};
eh.prototype.get=function(a){return this.h.get(this.g+a)};
eh.prototype.remove=function(a){this.h.remove(this.g+a)};
eh.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new ig;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return kg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var M={},fh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;M.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
M.Zb=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var gh={Qa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
mc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},hh={Qa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
mc:function(a){return[].concat.apply([],a)}};
M.wd=function(){fh?(M.Pa=Uint8Array,M.pa=Uint16Array,M.Kc=Int32Array,M.assign(M,gh)):(M.Pa=Array,M.pa=Array,M.Kc=Array,M.assign(M,hh))};
M.wd();var ih=!0;try{new Uint8Array(1)}catch(a){ih=!1}
function jh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new M.Pa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var kh={};kh=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var lh={},mh,nh=[],oh=0;256>oh;oh++){mh=oh;for(var ph=0;8>ph;ph++)mh=mh&1?3988292384^mh>>>1:mh>>>1;nh[oh]=mh}lh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^nh[(a^b[d])&255];return a^-1};var qh={};qh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function rh(a){for(var b=a.length;0<=--b;)a[b]=0}
var sh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],th=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],uh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],vh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],wh=Array(576);rh(wh);var xh=Array(60);rh(xh);var yh=Array(512);rh(yh);var zh=Array(256);rh(zh);var Ah=Array(29);rh(Ah);var Bh=Array(30);rh(Bh);function Ch(a,b,c,d,e){this.Gc=a;this.Zc=b;this.Yc=c;this.Wc=d;this.qd=e;this.pc=a&&a.length}
var Dh,Eh,Fh;function Gh(a,b){this.kc=a;this.Xa=0;this.Da=b}
function Hh(a,b){a.L[a.pending++]=b&255;a.L[a.pending++]=b>>>8&255}
function Ih(a,b,c){a.P>16-c?(a.V|=b<<a.P&65535,Hh(a,a.V),a.V=b>>16-a.P,a.P+=c-16):(a.V|=b<<a.P&65535,a.P+=c)}
function Jh(a,b,c){Ih(a,c[2*b],c[2*b+1])}
function Kh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Lh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Kh(d[e]++,e))}
function Mh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.S[2*b]=0;a.X[512]=1;a.xa=a.bb=0;a.da=a.matches=0}
function Nh(a){8<a.P?Hh(a,a.V):0<a.P&&(a.L[a.pending++]=a.V);a.V=0;a.P=0}
function pi(a,b,c){Nh(a);Hh(a,c);Hh(a,~c);M.Qa(a.L,a.window,b,c,a.pending);a.pending+=c}
function qi(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function ri(a,b,c){for(var d=a.M[c],e=c<<1;e<=a.wa;){e<a.wa&&qi(b,a.M[e+1],a.M[e],a.depth)&&e++;if(qi(b,d,a.M[e],a.depth))break;a.M[c]=a.M[e];c=e;e<<=1}a.M[c]=d}
function si(a,b,c){var d=0;if(0!==a.da){do{var e=a.L[a.jb+2*d]<<8|a.L[a.jb+2*d+1];var f=a.L[a.Ob+d];d++;if(0===e)Jh(a,f,b);else{var g=zh[f];Jh(a,g+256+1,b);var h=sh[g];0!==h&&(f-=Ah[g],Ih(a,f,h));e--;g=256>e?yh[e]:yh[256+(e>>>7)];Jh(a,g,c);h=th[g];0!==h&&(e-=Bh[g],Ih(a,e,h))}}while(d<a.da)}Jh(a,256,b)}
function ti(a,b){var c=b.kc,d=b.Da.Gc,e=b.Da.pc,f=b.Da.Wc,g,h=-1;a.wa=0;a.Ta=573;for(g=0;g<f;g++)0!==c[2*g]?(a.M[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var l=a.M[++a.wa]=2>h?++h:0;c[2*l]=1;a.depth[l]=0;a.xa--;e&&(a.bb-=d[2*l+1])}b.Xa=h;for(g=a.wa>>1;1<=g;g--)ri(a,c,g);l=f;do g=a.M[1],a.M[1]=a.M[a.wa--],ri(a,c,1),d=a.M[1],a.M[--a.Ta]=g,a.M[--a.Ta]=d,c[2*l]=c[2*g]+c[2*d],a.depth[l]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=l,a.M[1]=l++,ri(a,c,1);while(2<=a.wa);a.M[--a.Ta]=
a.M[1];g=b.kc;l=b.Xa;d=b.Da.Gc;e=b.Da.pc;f=b.Da.Zc;var k=b.Da.Yc,m=b.Da.qd,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.M[a.Ta]+1]=0;for(b=a.Ta+1;573>b;b++){var p=a.M[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>l)){a.ra[n]++;var t=0;p>=k&&(t=f[p-k]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.bb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.M[--b],d>l||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Lh(c,h,a.ra)}
function ui(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];++g<h&&k===f||(g<l?a.S[2*k]+=g:0!==k?(k!==e&&a.S[2*k]++,a.S[32]++):10>=g?a.S[34]++:a.S[36]++,g=0,e=k,0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4))}}
function vi(a,b,c){var d,e=-1,f=b[1],g=0,h=7,l=4;0===f&&(h=138,l=3);for(d=0;d<=c;d++){var k=f;f=b[2*(d+1)+1];if(!(++g<h&&k===f)){if(g<l){do Jh(a,k,a.S);while(0!==--g)}else 0!==k?(k!==e&&(Jh(a,k,a.S),g--),Jh(a,16,a.S),Ih(a,g-3,2)):10>=g?(Jh(a,17,a.S),Ih(a,g-3,3)):(Jh(a,18,a.S),Ih(a,g-11,7));g=0;e=k;0===f?(h=138,l=3):k===f?(h=6,l=3):(h=7,l=4)}}}
function wi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var xi=!1;function yi(a,b,c){a.L[a.jb+2*a.da]=b>>>8&255;a.L[a.jb+2*a.da+1]=b&255;a.L[a.Ob+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(zh[c]+256+1)]++,a.Ia[2*(256>b?yh[b]:yh[256+(b>>>7)])]++);return a.da===a.nb-1}
;function zi(a,b){a.msg=qh[b];return b}
function Ai(a){for(var b=a.length;0<=--b;)a[b]=0}
function Bi(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(M.Qa(a.output,b.L,b.ob,c,a.Ya),a.Ya+=c,b.ob+=c,a.ac+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.ob=0))}
function N(a,b){var c=0<=a.Z?a.Z:-1,d=a.j-a.Z,e=0;if(0<a.level){2===a.C.Kb&&(a.C.Kb=wi(a));ti(a,a.Cb);ti(a,a.yb);ui(a,a.X,a.Cb.Xa);ui(a,a.Ia,a.yb.Xa);ti(a,a.fc);for(e=18;3<=e&&0===a.S[2*vh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.bb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Ih(a,b?1:0,3),pi(a,c,d);else if(4===a.strategy||g===f)Ih(a,2+(b?1:0),3),si(a,wh,xh);else{Ih(a,4+(b?1:0),3);c=a.Cb.Xa+1;d=a.yb.Xa+1;e+=1;Ih(a,c-257,5);Ih(a,d-1,5);Ih(a,e-4,4);for(f=0;f<e;f++)Ih(a,a.S[2*vh[f]+
1],3);vi(a,a.X,c-1);vi(a,a.Ia,d-1);si(a,a.X,a.Ia)}Mh(a);b&&Nh(a);a.Z=a.j;Bi(a.C)}
function Q(a,b){a.L[a.pending++]=b}
function Ci(a,b){a.L[a.pending++]=b>>>8&255;a.L[a.pending++]=b&255}
function Di(a,b){var c=a.xc,d=a.j,e=a.aa,f=a.yc,g=a.j>a.T-262?a.j-(a.T-262):0,h=a.window,l=a.Fa,k=a.la,m=a.j+258,n=h[d+e-1],q=h[d+e];a.aa>=a.oc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Wa=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=k[b&l])>g&&0!==--c);return e<=
a.m?e:a.m}
function Ei(a){var b=a.T,c;do{var d=a.Ic-a.m-a.j;if(a.j>=b+(b-262)){M.Qa(a.window,a.window,b,b,0);a.Wa-=b;a.j-=b;a.Z-=b;var e=c=a.Bb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.j+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,M.Qa(c,e.input,e.Na,g,f),1===e.state.wrap?e.A=kh(e.A,c,g,f):2===e.state.wrap&&(e.A=lh(e.A,c,g,f)),e.Na+=g,e.Oa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.j-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Fa]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function Fi(a,b){for(var c;;){if(262>a.m){Ei(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);0!==c&&a.j-c<=a.T-262&&(a.H=Di(a,c));if(3<=a.H)if(c=yi(a,a.j-a.Wa,a.H-3),a.m-=a.H,a.H<=a.Qb&&3<=a.m){a.H--;do a.j++,a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j;while(0!==--a.H);a.j++}else a.j+=a.H,a.H=0,a.D=a.window[a.j],a.D=(a.D<<a.va^a.window[a.j+1])&a.ta;else c=yi(a,0,a.window[a.j]),
a.m--,a.j++;if(c&&(N(a,!1),0===a.C.F))return 1}a.Y=2>a.j?a.j:2;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&(N(a,!1),0===a.C.F)?1:2}
function Gi(a,b){for(var c,d;;){if(262>a.m){Ei(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,c=a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);a.aa=a.H;a.Bc=a.Wa;a.H=2;0!==c&&a.aa<a.Qb&&a.j-c<=a.T-262&&(a.H=Di(a,c),5>=a.H&&(1===a.strategy||3===a.H&&4096<a.j-a.Wa)&&(a.H=2));if(3<=a.aa&&a.H<=a.aa){d=a.j+a.m-3;c=yi(a,a.j-1-a.Bc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.j<=d&&(a.D=(a.D<<a.va^a.window[a.j+3-1])&a.ta,a.la[a.j&a.Fa]=a.head[a.D],a.head[a.D]=a.j);while(0!==
--a.aa);a.La=0;a.H=2;a.j++;if(c&&(N(a,!1),0===a.C.F))return 1}else if(a.La){if((c=yi(a,0,a.window[a.j-1]))&&N(a,!1),a.j++,a.m--,0===a.C.F)return 1}else a.La=1,a.j++,a.m--}a.La&&(yi(a,0,a.window[a.j-1]),a.La=0);a.Y=2>a.j?a.j:2;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&(N(a,!1),0===a.C.F)?1:2}
function Hi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Ei(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.H=0;if(3<=a.m&&0<a.j&&(d=a.j-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.j+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.H=258-(e-d);a.H>a.m&&(a.H=a.m)}3<=a.H?(c=yi(a,1,a.H-3),a.m-=a.H,a.j+=a.H,a.H=0):(c=yi(a,0,a.window[a.j]),a.m--,a.j++);if(c&&(N(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&
(N(a,!1),0===a.C.F)?1:2}
function Ii(a,b){for(var c;;){if(0===a.m&&(Ei(a),0===a.m)){if(0===b)return 1;break}a.H=0;c=yi(a,0,a.window[a.j]);a.m--;a.j++;if(c&&(N(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(N(a,!0),0===a.C.F?3:4):a.da&&(N(a,!1),0===a.C.F)?1:2}
function Ji(a,b,c,d,e){this.cd=a;this.pd=b;this.sd=c;this.od=d;this.ad=e}
var Ki;Ki=[new Ji(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){Ei(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.j+=a.m;a.m=0;var d=a.Z+c;if(0===a.j||a.j>=d)if(a.m=a.j-d,a.j=d,N(a,!1),0===a.C.F)return 1;if(a.j-a.Z>=a.T-262&&(N(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return N(a,!0),0===a.C.F?3:4;a.j>a.Z&&N(a,!1);return 1}),
new Ji(4,4,8,4,Fi),new Ji(4,5,16,8,Fi),new Ji(4,6,32,32,Fi),new Ji(4,4,16,16,Gi),new Ji(8,16,32,32,Gi),new Ji(8,16,128,128,Gi),new Ji(8,32,128,256,Gi),new Ji(32,128,258,1024,Gi),new Ji(32,258,258,4096,Gi)];
function Li(){this.C=null;this.status=0;this.L=null;this.wrap=this.pending=this.ob=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Ua=-1;this.Fa=this.cc=this.T=0;this.window=null;this.Ic=0;this.head=this.la=null;this.yc=this.oc=this.strategy=this.level=this.Qb=this.xc=this.aa=this.m=this.Wa=this.j=this.La=this.Bc=this.H=this.Z=this.va=this.ta=this.Lb=this.Bb=this.D=0;this.X=new M.pa(1146);this.Ia=new M.pa(122);this.S=new M.pa(78);Ai(this.X);Ai(this.Ia);Ai(this.S);this.fc=this.yb=this.Cb=null;this.ra=
new M.pa(16);this.M=new M.pa(573);Ai(this.M);this.Ta=this.wa=0;this.depth=new M.pa(573);Ai(this.depth);this.P=this.V=this.Y=this.matches=this.bb=this.xa=this.jb=this.da=this.nb=this.Ob=0}
function Mi(a,b){if(!a||!a.state||5<b||0>b)return a?zi(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return zi(a,0===a.F?-5:-2);c.C=a;var d=c.Ua;c.Ua=b;if(42===c.status)if(2===c.wrap)a.A=0,Q(c,31),Q(c,139),Q(c,8),c.v?(Q(c,(c.v.text?1:0)+(c.v.Ba?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),Q(c,c.v.time&255),Q(c,c.v.time>>8&255),Q(c,c.v.time>>16&255),Q(c,c.v.time>>24&255),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,c.v.ue&255),c.v.extra&&c.v.extra.length&&
(Q(c,c.v.extra.length&255),Q(c,c.v.extra.length>>8&255)),c.v.Ba&&(a.A=lh(a.A,c.L,c.pending,0)),c.fa=0,c.status=69):(Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,0),Q(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),Q(c,3),c.status=113);else{var e=8+(c.cc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.j&&(e|=32);c.status=113;Ci(c,e+(31-e%31));0!==c.j&&(Ci(c,a.A>>>16),Ci(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Ba&&c.pending>e&&(a.A=lh(a.A,c.L,c.pending-e,e)),Bi(a),e=c.pending,c.pending!==c.ea));)Q(c,c.v.extra[c.fa]&255),c.fa++;c.v.Ba&&c.pending>e&&(a.A=lh(a.A,c.L,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=lh(a.A,c.L,c.pending-e,e)),Bi(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>
e&&(a.A=lh(a.A,c.L,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ba&&c.pending>e&&(a.A=lh(a.A,c.L,c.pending-e,e)),Bi(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;Q(c,f)}while(0!==f);c.v.Ba&&c.pending>e&&(a.A=lh(a.A,c.L,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ba?(c.pending+2>c.ea&&Bi(a),c.pending+2<=c.ea&&(Q(c,a.A&
255),Q(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(Bi(a),0===a.F)return c.Ua=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return zi(a,-5);if(666===c.status&&0!==a.U)return zi(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Ii(c,b):3===c.strategy?Hi(c,b):Ki[c.level].ad(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Ua=-1),0;if(2===d&&(1===b?(Ih(c,2,3),Jh(c,256,wh),16===c.P?(Hh(c,c.V),c.V=0,c.P=0):8<=c.P&&(c.L[c.pending++]=
c.V&255,c.V>>=8,c.P-=8)):5!==b&&(Ih(c,0,3),pi(c,0,0),3===b&&(Ai(c.head),0===c.m&&(c.j=0,c.Z=0,c.Y=0))),Bi(a),0===a.F))return c.Ua=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(Q(c,a.A&255),Q(c,a.A>>8&255),Q(c,a.A>>16&255),Q(c,a.A>>24&255),Q(c,a.Oa&255),Q(c,a.Oa>>8&255),Q(c,a.Oa>>16&255),Q(c,a.Oa>>24&255)):(Ci(c,a.A>>>16),Ci(c,a.A&65535));Bi(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Ni={};Ni=function(){this.input=null;this.Oa=this.U=this.Na=0;this.output=null;this.ac=this.F=this.Ya=0;this.msg="";this.state=null;this.Kb=2;this.A=0};var Oi=Object.prototype.toString;
function Pi(a){if(!(this instanceof Pi))return new Pi(a);a=this.options=M.assign({level:-1,method:8,chunkSize:16384,Ga:15,rd:8,strategy:0,Ea:""},a||{});a.raw&&0<a.Ga?a.Ga=-a.Ga:a.dd&&0<a.Ga&&16>a.Ga&&(a.Ga+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Ni;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ga,f=a.rd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=zi(b,-2);else{8===e&&(e=9);var l=new Li;
b.state=l;l.C=b;l.wrap=h;l.v=null;l.cc=e;l.T=1<<l.cc;l.Fa=l.T-1;l.Lb=f+7;l.Bb=1<<l.Lb;l.ta=l.Bb-1;l.va=~~((l.Lb+3-1)/3);l.window=new M.Pa(2*l.T);l.head=new M.pa(l.Bb);l.la=new M.pa(l.T);l.nb=1<<f+6;l.ea=4*l.nb;l.L=new M.Pa(l.ea);l.jb=1*l.nb;l.Ob=3*l.nb;l.level=c;l.strategy=g;l.method=d;if(b&&b.state){b.Oa=b.ac=0;b.Kb=2;c=b.state;c.pending=0;c.ob=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Ua=0;if(!xi){d=Array(16);for(f=g=0;28>f;f++)for(Ah[f]=g,e=0;e<1<<sh[f];e++)zh[g++]=
f;zh[g-1]=f;for(f=g=0;16>f;f++)for(Bh[f]=g,e=0;e<1<<th[f];e++)yh[g++]=f;for(g>>=7;30>f;f++)for(Bh[f]=g<<7,e=0;e<1<<th[f]-7;e++)yh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)wh[2*e+1]=8,e++,d[8]++;for(;255>=e;)wh[2*e+1]=9,e++,d[9]++;for(;279>=e;)wh[2*e+1]=7,e++,d[7]++;for(;287>=e;)wh[2*e+1]=8,e++,d[8]++;Lh(wh,287,d);for(e=0;30>e;e++)xh[2*e+1]=5,xh[2*e]=Kh(e,5);Dh=new Ch(wh,sh,257,286,15);Eh=new Ch(xh,th,0,30,15);Fh=new Ch([],uh,0,19,7);xi=!0}c.Cb=new Gh(c.X,Dh);c.yb=new Gh(c.Ia,Eh);c.fc=new Gh(c.S,
Fh);c.V=0;c.P=0;Mh(c);c=0}else c=zi(b,-2);0===c&&(b=b.state,b.Ic=2*b.T,Ai(b.head),b.Qb=Ki[b.level].pd,b.oc=Ki[b.level].cd,b.yc=Ki[b.level].sd,b.xc=Ki[b.level].od,b.j=0,b.Z=0,b.m=0,b.Y=0,b.H=b.aa=2,b.La=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(qh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.kb){var k;"string"===typeof a.kb?k=jh(a.kb):"[object ArrayBuffer]"===Oi.call(a.kb)?k=new Uint8Array(a.kb):k=a.kb;a=this.C;f=k;g=f.length;if(a&&a.state)if(k=a.state,b=k.wrap,
2===b||1===b&&42!==k.status||k.m)b=-2;else{1===b&&(a.A=kh(a.A,f,g,0));k.wrap=0;g>=k.T&&(0===b&&(Ai(k.head),k.j=0,k.Z=0,k.Y=0),c=new M.Pa(k.T),M.Qa(c,f,g-k.T,k.T,0),f=c,g=k.T);c=a.U;d=a.Na;e=a.input;a.U=g;a.Na=0;a.input=f;for(Ei(k);3<=k.m;){f=k.j;g=k.m-2;do k.D=(k.D<<k.va^k.window[f+3-1])&k.ta,k.la[f&k.Fa]=k.head[k.D],k.head[k.D]=f,f++;while(--g);k.j=f;k.m=2;Ei(k)}k.j+=k.m;k.Z=k.j;k.Y=k.m;k.m=0;k.H=k.aa=2;k.La=0;a.Na=d;a.input=e;a.U=c;k.wrap=b;b=0}else b=-2;if(0!==b)throw Error(qh[b]);this.le=!0}}
Pi.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=jh(a):"[object ArrayBuffer]"===Oi.call(a)?c.input=new Uint8Array(a):c.input=a;c.Na=0;c.U=c.input.length;do{0===c.F&&(c.output=new M.Pa(d),c.Ya=0,c.F=d);a=Mi(c,e);if(1!==a&&0!==a)return Qi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Ea){var f=M.Zb(c.output,c.Ya);b=f;f=f.length;if(65537>f&&(b.subarray&&ih||!b.subarray))b=
String.fromCharCode.apply(null,M.Zb(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=M.Zb(c.output,c.Ya),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=zi(c,-2):(c.state=null,a=113===d?zi(c,-3):0)):a=-2,Qi(this,a),this.ended=!0,0===a;2===e&&(Qi(this,0),c.F=0);return!0};
function Qi(a,b){0===b&&(a.result="string"===a.options.Ea?a.chunks.join(""):M.mc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Ri(a){this.name=a}
;var Si=new Ri("rawColdConfigGroup");var Ti=new Ri("rawHotConfigGroup");function Ui(a){this.s=H(a)}
y(Ui,K);Ui.prototype.g=function(a){J(this,5,a)};function Vi(a){this.s=H(a)}
y(Vi,K);function Wi(a){this.s=H(a)}
y(Wi,K);Wi.ma=[2];function Xi(a){this.s=H(a)}
y(Xi,K);Xi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Kd(this,36);b=null==b?b:Number.isFinite(b)?b|0:void 0;return null!=b?b:a};
Xi.prototype.setHomeGroupInfo=function(a){return I(this,Wi,81,a)};
Xi.ma=[9,66,32,86,100,101];function Yi(a){this.s=H(a)}
y(Yi,K);Yi.prototype.getKey=function(){return Wd(this,1)};
Yi.prototype.ja=function(){return Wd(this,Rd(this,Zi,2))};
var Zi=[2,3,4,5,6];function $i(a){this.s=H(a)}
y($i,K);$i.ma=[15,26,28];function aj(a){this.s=H(a)}
y(aj,K);aj.ma=[5];function bj(a){this.s=H(a)}
y(bj,K);function cj(a){this.s=H(a)}
y(cj,K);cj.prototype.setSafetyMode=function(a){return $d(this,5,a)};
cj.ma=[12];function dj(a){this.s=H(a)}
y(dj,K);dj.ma=[12];var ej={ke:"WEB_DISPLAY_MODE_UNKNOWN",ge:"WEB_DISPLAY_MODE_BROWSER",ie:"WEB_DISPLAY_MODE_MINIMAL_UI",je:"WEB_DISPLAY_MODE_STANDALONE",he:"WEB_DISPLAY_MODE_FULLSCREEN"};function fj(a){this.s=H(a)}
y(fj,K);fj.prototype.getKey=function(){return Wd(this,1)};
fj.prototype.ja=function(){return Wd(this,2)};function gj(a){this.s=H(a)}
y(gj,K);gj.ma=[4,5];function hj(a){this.s=H(a)}
y(hj,K);function ij(a){this.s=H(a)}
y(ij,K);var jj=[2,3,4,5];function kj(a){this.s=H(a)}
y(kj,K);function lj(a){this.s=H(a)}
y(lj,K);function mj(a){this.s=H(a)}
y(mj,K);function nj(a){this.s=H(a)}
y(nj,K);nj.ma=[10,17];function oj(a){this.s=H(a)}
y(oj,K);function pj(a){this.s=H(a)}
y(pj,K);function qj(a){this.s=H(a)}
y(qj,K);function rj(a){this.s=H(a,497)}
y(rj,K);
var sj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486,491,495,496];function tj(a){this.s=H(a)}
y(tj,K);function uj(a){this.s=H(a)}
y(uj,K);uj.prototype.getPlaylistId=function(){return Xd(this,2)};
var Yd=[1,2];function vj(a){this.s=H(a)}
y(vj,K);vj.ma=[3];var wj=C.window,xj,yj,zj=(null==wj?void 0:null==(xj=wj.yt)?void 0:xj.config_)||(null==wj?void 0:null==(yj=wj.ytcfg)?void 0:yj.data_)||{};E("yt.config_",zj);function Aj(){var a=arguments;1<a.length?zj[a[0]]=a[1]:1===a.length&&Object.assign(zj,a[0])}
function R(a,b){return a in zj?zj[a]:b}
function Bj(){return R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Cj(){var a=zj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Dj=[];function Ej(a){Dj.forEach(function(b){return b(a)})}
function Fj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Gj(b)}}:a}
function Gj(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Aj("ERRORS",b));Ej(a)}
function Hj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Aj("ERRORS",f))}
;function S(a){a=Ij(a);return"string"===typeof a&&"false"===a?!1:!!a}
function T(a,b){a=Ij(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Ij(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Jj(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=w(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var Kj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++Kj});var Lj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Mj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Lj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Mj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Mj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Mj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var nb=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",nb);var Nj=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",Nj);
function Oj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return mb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&ob(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Pj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in nb){var c=nb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Qj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete nb[b]}}))}
var Qj=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Rj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Oj(a,b,c,d);if(!e){e=++Nj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Mj(h);if(!fe(h.relatedTarget,function(l){return l==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Mj(h);
h.currentTarget=a;return c.call(a,h)};
g=Fj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Qj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);nb[e]=[a,b,c,g,d]}}}
;function Sj(a,b){"function"===typeof a&&(a=Fj(a));return window.setTimeout(a,b)}
function Tj(a){"function"===typeof a&&(a=Fj(a));return window.setInterval(a,250)}
;var Uj=/^[\w.]*$/,Vj={q:!0,search_query:!0};function Wj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=Xj(f[0]||""),h=Xj(f[1]||"");if(g in c){var l=c[g];Array.isArray(l)?hb(l,h):c[g]=[l,h]}else c[g]=h}catch(q){var k=q,m=f[0],n=String(Wj);k.args=[{key:m,value:f[1],query:a,method:Yj===n?"unchanged":n}];Vj.hasOwnProperty(m)||Hj(k)}}return c}
var Yj=String(Wj);function Zj(a){var b=[];lb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];db(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function ak(a){"?"===a.charAt(0)&&(a=a.substring(1));return Wj(a,"&")}
function bk(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ak(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=cc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ck(a){if(!b)var b=window.location.href;var c=a.match(Yb)[1]||null,d=$b(a);c&&d?(a=a.match(Yb),b=b.match(Yb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?$b(b)===d&&(Number(b.match(Yb)[4]||null)||null)===(Number(a.match(Yb)[4]||null)||null):!0;return a}
function Xj(a){return a&&a.match(Uj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function dk(a){var b=ek;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Ae;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ha){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?ce:g;try{var h=g.history.length}catch(ha){h=0}e.u_his=h;var l;e.u_h=null==(l=ce.screen)?void 0:l.height;var k;e.u_w=null==(k=ce.screen)?void 0:k.width;var m;e.u_ah=null==(m=ce.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=ce.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=ce.screen)?void 0:q.colorDepth}catch(ha){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ha){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ha){}try{var G=h.innerWidth;var P=h.innerHeight}catch(ha){}try{var U=h.screenLeft;var Y=h.screenTop}catch(ha){}try{G=h.innerWidth,P=h.innerHeight}catch(ha){}try{var La=h.screen.availWidth;var Da=h.screen.availTop}catch(ha){}p=[U,Y,p,t,La,Da,u,z,G,P];t=b.g.top;try{var Ma=(t||window).document,ia=
"CSS1Compat"==Ma.compatMode?Ma.documentElement:Ma.body;var ra=(new de(ia.clientWidth,ia.clientHeight)).round()}catch(ha){ra=new de(-12245933,-12245933)}Ma=ra;ra={};var sa=void 0===sa?C:sa;ia=new yf;"SVGElement"in sa&&"createElementNS"in sa.document&&ia.set(0);t=ye();t["allow-top-navigation-by-user-activation"]&&ia.set(1);t["allow-popups-to-escape-sandbox"]&&ia.set(2);sa.crypto&&sa.crypto.subtle&&ia.set(3);"TextDecoder"in sa&&"TextEncoder"in sa&&ia.set(4);sa=zf(ia);ra.bc=sa;ra.bih=Ma.height;ra.biw=
Ma.width;ra.brdim=p.join();b=b.h;b=(ra.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ra.wgl=!!ce.WebGLRenderingContext,ra);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ek=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Zj(dk(a))});Wa();var fk="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function gk(){if(!fk)return null;var a=fk();return"open"in a?a:null}
;var hk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(hk);var ik={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},jk="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(hk)),kk=!1;
function lk(a,b,c,d,e,f,g,h){function l(){4===(k&&"readyState"in k?k.readyState:0)&&b&&Fj(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var k=gk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",l,!1):k.onreadystatechange=l;S("debug_forward_web_query_parameters")&&(a=mk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=nk(a,e))for(var m in e)k.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{k.setAttributionReporting(a)}catch(n){Hj(n)}}k.send(d);return k}
function nk(a,b){b=void 0===b?{}:b;var c=ck(a),d=S("web_ajax_ignore_global_headers_if_set"),e;for(e in ik){var f=R(ik[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&$b(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!$b(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!$b(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(l){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&$b(a)||(b["X-YouTube-Ad-Signals"]=Zj(dk()));return b}
function ok(a,b){b.method="POST";b.postParams||(b.postParams={});return pk(a,b)}
function pk(a,b){var c=b.format||"JSON";a=qk(a,b);var d=rk(a,b),e=!1,f=sk(a,function(l){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(l&&"status"in l?l.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var m=null,n=400<=l.status&&500>l.status,q=500<=l.status&&600>l.status;if(k||n||q)m=tk(a,c,l,b.convertToSafeHtml);k&&(k=uk(c,l,m));m=m||{};n=b.context||C;k?b.onSuccess&&b.onSuccess.call(n,l,m):b.onError&&b.onError.call(n,l,m);b.onFinish&&
b.onFinish.call(n,l,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Sj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function qk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=bk(a,b||{},!0);return a}
function rk(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||$b(a)&&!b.withCredentials&&$b(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=ak(e),rb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):cc(e));if(!(a=e)&&(a=f)){a:{for(var l in f){f=!1;break a}f=!0}a=!f}!kk&&a&&"POST"!==b.method&&(kk=!0,Gj(Error("AJAX request with postData should use POST")));return e}
function tk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Hj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?vk(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=wk(g)})}d&&xk(e);
return e}
function xk(a){if(Oa(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=tb();d=e?e.createHTML(d):d;a[c]=new Wb(d)}else xk(a[b])}}
function uk(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===parseInt(c&&c.return_code,10);case "RAW":return!0;default:return!!c}}
function vk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function wk(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function mk(a){var b=window.location.search,c=$b(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&ck(a)&&(c=document.location.hostname);var d=Zb(a.match(Yb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ak(b),f={};db(jk,function(g){e[g]&&(f[g]=e[g])});
return bk(a,f||{},!1)}
var sk=lk;var yk=[{Rb:function(a){return"Cannot read property '"+a.key+"'"},
Db:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Rb:function(a){return"Cannot call '"+a.key+"'"},
Db:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Rb:function(a){return a.key+" is not defined"},
Db:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ak={Ca:[],za:[{ib:zk,weight:500}]};function zk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Bk(){this.za=[];this.Ca=[]}
var Ck;function Dk(){if(!Ck){var a=Ck=new Bk;a.Ca.length=0;a.za.length=0;Ak.Ca&&a.Ca.push.apply(a.Ca,Ak.Ca);Ak.za&&a.za.push.apply(a.za,Ak.za)}return Ck}
;var Ek=new L;function Fk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Gk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Gk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Gk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Gk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Hk(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ik(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,l=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Fk(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ik(f+".ve",g,h,l):0;d+=f;d+=Ik(e,a[e],b,c);if(500<d)break}}else c[b]=Jk(a),d+=c[b].length;else c[b]=Jk(a),d+=c[b].length;return d}
function Ik(a,b,c,d){c+="."+a;a=Jk(b);d[c]=a;return c.length+a.length}
function Jk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Kk(){}
;function Lk(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Mk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var Nk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ok={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Pk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Qk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Rk(){var a=C.navigator;return a?a.connection:void 0}
;function Sk(a){var b=Ga.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Sk,Error);function Tk(){try{return Uk(),!0}catch(a){return!1}}
function Uk(){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new Sk("Datasync ID not set","unknown");}
;function Vk(){}
function Wk(a,b){return xf.Ha(a,0,b)}
Vk.prototype.qa=function(a,b){return this.Ha(a,1,b)};
Vk.prototype.gb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Xk=T("web_emulated_idle_callback_delay",300),Yk=1E3/60-3,Zk=[8,5,4,3,2,1,0];
function $k(a){a=void 0===a?{}:a;Ne.call(this);this.h=[];this.i={};this.eb=this.g=0;this.cb=this.u=!1;this.O=[];this.oa=this.fb=!1;for(var b=w(Zk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.o=0;this.Pc=a.timeout||1;this.K=Yk;this.G=0;this.sb=this.td.bind(this);this.Oc=this.yd.bind(this);this.Lc=this.Qc.bind(this);this.Mc=this.ed.bind(this);this.Nc=this.ud.bind(this);this.dc=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.sb)}
y($k,Ne);r=$k.prototype;r.gb=function(a){var b=Wa();al(a);a=Wa()-b;this.u||(this.K-=a)};
r.Ha=function(a,b,c){++this.eb;if(10===b)return this.gb(a),this.eb;var d=this.eb;this.i[d]=a;this.u&&!c?this.O.push({id:d,priority:b}):(this.h[b].push(d),this.cb||this.u||(0!==this.g&&bl(this)!==this.G&&cl(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function dl(a){a.O.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};cl(a)}
function bl(a){if(a.h[8].length){if(a.oa)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.o;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function el(a){var b=D("yt.logging.errors.log");b&&b(a)}
function al(a){try{a()}catch(b){el(b)}}
function fl(a){for(var b=w(Zk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.ed=function(a){var b=void 0;a&&(b=a.timeRemaining());this.fb=!0;gl(this,b);this.fb=!1};
r.yd=function(){gl(this)};
r.Qc=function(){hl(this)};
r.ud=function(a){this.oa=!0;var b=bl(this);4===b&&b!==this.G&&(cl(this),this.start());gl(this,void 0,a);this.oa=!1};
r.td=function(){document.hidden||hl(this);this.g&&(cl(this),this.start())};
function hl(a){cl(a);a.u=!0;for(var b=Wa(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&al(e)}il(a);a.u=!1;fl(a)&&a.start();b=Wa()-b;a.K-=b}
function il(a){for(var b=0,c=a.O.length;b<c;b++){var d=a.O[b];a.h[d.priority].push(d.id)}a.O.length=0}
function gl(a,b,c){a.oa&&4===a.G&&a.g||cl(a);a.u=!0;b=Wa()+(b||a.K);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(k){el(k)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&al(e);d=a.fb?0:1;d=a.o>d?a.o:d;if(!(Wa()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),l=c.i[h];delete c.i[h];if(l){c=l;break a}}c=null}c&&al(c)}while(c&&Wa()<b)}a.u=!1;il(a);a.K=Yk;fl(a)&&a.start()}
r.start=function(){this.cb=!1;if(0===this.g)switch(this.G=bl(this),this.G){case 1:var a=this.Mc;this.g=this.dc?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Xk);break;case 2:this.g=window.setTimeout(this.Oc,this.Pc);break;case 3:this.g=window.requestAnimationFrame(this.Nc);break;case 4:this.g=window.setTimeout(this.Lc,0)}};
function cl(a){if(a.g){switch(a.G){case 1:var b=a.g;a.dc?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){dl(this);cl(this);this.ya&&document.removeEventListener("visibilitychange",this.sb);Ne.prototype.sa.call(this)};var jl=D("yt.scheduler.instance.timerIdMap_")||{},kl=T("kevlar_tuner_scheduler_soft_state_timer_ms",800),ll=0,ml=0;function nl(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Aa)a=new $k(R("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function ol(){pl();var a=D("ytglobal.schedulerInstanceInstance_");a&&(Me(a),E("ytglobal.schedulerInstanceInstance_",null))}
function pl(){dl(nl());for(var a in jl)jl.hasOwnProperty(a)&&delete jl[Number(a)]}
function ql(a,b,c){if(!c)return c=void 0===c,-nl().Ha(a,b,c);var d=window.setTimeout(function(){var e=nl().Ha(a,b);jl[d]=e},c);
return d}
function rl(a){nl().gb(a)}
function sl(a){var b=nl();if(0>a)b.ba(-a);else{var c=jl[a];c?(b.ba(c),delete jl[a]):window.clearTimeout(a)}}
function tl(){ul()}
function ul(){window.clearTimeout(ll);nl().start()}
function vl(){var a=nl();cl(a);a.cb=!0;window.clearTimeout(ll);ll=window.setTimeout(tl,kl)}
function wl(){window.clearTimeout(ml);ml=window.setTimeout(function(){xl(0)},kl)}
function xl(a){wl();var b=nl();b.o=a;b.start()}
function yl(a){wl();var b=nl();b.o>a&&(b.o=a,b.start())}
function zl(){window.clearTimeout(ml);var a=nl();a.o=0;a.start()}
;function Al(){Vk.apply(this,arguments)}
y(Al,Vk);function Bl(){Al.g||(Al.g=new Al);return Al.g}
Al.prototype.Ha=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Sj(a,c||0)};
Al.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Al.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var xf=Bl();
S("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",ol),E("yt.scheduler.instance.addJob",ql),E("yt.scheduler.instance.addImmediateJob",rl),E("yt.scheduler.instance.cancelJob",sl),E("yt.scheduler.instance.cancelAllJobs",pl),E("yt.scheduler.instance.start",ul),E("yt.scheduler.instance.pause",vl),E("yt.scheduler.instance.setPriorityThreshold",xl),E("yt.scheduler.instance.enablePriorityThreshold",yl),E("yt.scheduler.instance.clearPriorityThreshold",zl),E("yt.scheduler.initialized",
!0));function Cl(a){var b=new Ug;(b=(b.h=Tg(b.g))?a?new eh(b,a):b:null)||(a=new $g(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Og(a):null;this.h=document.domain||window.location.hostname}
Cl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(pg(b))}catch(f){return}else e=escape(b);b=this.h;Ie.set(""+a,e,{Pb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Cl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Ie.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Cl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Ie.remove(""+a,"/",void 0===b?"youtube.com":b)};var Dl=function(){var a;return function(){a||(a=new Cl("ytidb"));return a}}();
function El(){var a;return null==(a=Dl())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Fl=[],Gl=!1;function Hl(a){Gl||(Fl.push({type:"ERROR",payload:a}),10<Fl.length&&Fl.shift())}
function Il(a,b){Gl||(Fl.push({type:"EVENT",eventType:a,payload:b}),10<Fl.length&&Fl.shift())}
;function Jl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Kl(a){return a.substr(0,a.indexOf(":"))||a}
;var Ll=Ac||Bc;var Ml={},Nl=(Ml.AUTH_INVALID="No user identifier specified.",Ml.EXPLICIT_ABORT="Transaction was explicitly aborted.",Ml.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Ml.MISSING_INDEX="Index not created.",Ml.MISSING_OBJECT_STORES="Object stores not created.",Ml.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Ml.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Ml.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Ml.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Ml.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Ml.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Ml.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Ml),Ol={},Pl=(Ol.AUTH_INVALID="ERROR",Ol.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ol.EXPLICIT_ABORT="IGNORED",Ol.IDB_NOT_SUPPORTED="ERROR",Ol.MISSING_INDEX=
"WARNING",Ol.MISSING_OBJECT_STORES="ERROR",Ol.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ol.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ol.QUOTA_EXCEEDED="WARNING",Ol.QUOTA_MAYBE_EXCEEDED="WARNING",Ol.UNKNOWN_ABORT="WARNING",Ol.INCOMPATIBLE_DB_VERSION="WARNING",Ol),Ql={},Rl=(Ql.AUTH_INVALID=!1,Ql.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ql.EXPLICIT_ABORT=!1,Ql.IDB_NOT_SUPPORTED=!1,Ql.MISSING_INDEX=!1,Ql.MISSING_OBJECT_STORES=!1,Ql.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ql.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ql.QUOTA_EXCEEDED=!1,Ql.QUOTA_MAYBE_EXCEEDED=!0,Ql.UNKNOWN_ABORT=!0,Ql.INCOMPATIBLE_DB_VERSION=!1,Ql);function V(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Nl[a]:c;d=void 0===d?Pl[a]:d;e=void 0===e?Rl[a]:e;Sk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,V.prototype)}
y(V,Sk);function Sl(a,b){V.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Nl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Sl.prototype)}
y(Sl,V);function Tl(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Tl.prototype)}
y(Tl,Error);var Ul=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Vl(a,b,c,d){b=Kl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof V)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new V("QUOTA_EXCEEDED",a);if(Cc&&"UnknownError"===e.name)return new V("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Tl)return new V("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Ul.some(function(f){return e.message.includes(f)}))return new V("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new V("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",te:e.name})];e.level="WARNING";return e}
function Wl(a,b,c){var d=El();return new V("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Xl(a){if(!a)throw Error();throw a;}
function Yl(a){return a}
function Zl(a){this.g=a}
function $l(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
$l.resolve=function(a){return new $l(new Zl(function(b,c){a instanceof $l?a.then(b,c):b(a)}))};
$l.reject=function(a){return new $l(new Zl(function(b,c){c(a)}))};
$l.prototype.then=function(a,b){var c=this,d=null!=a?a:Yl,e=null!=b?b:Xl;return new $l(new Zl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){am(c,c,d,f,g)}),c.h.push(function(){bm(c,c,e,f,g)})):"FULFILLED"===c.state.status?am(c,c,d,f,g):"REJECTED"===c.state.status&&bm(c,c,e,f,g)}))};
function cm(a,b){a.then(void 0,b)}
function am(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof $l?dm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function bm(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof $l?dm(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dm(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof $l?dm(a,b,f,d,e):d(f)},function(f){e(f)})}
;function em(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function fm(a){return new Promise(function(b,c){em(a,b,c)})}
function gm(a){return new $l(new Zl(function(b,c){em(a,b,c)}))}
;function hm(a,b){return new $l(new Zl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var im=window,X=im.ytcsi&&im.ytcsi.now?im.ytcsi.now:im.performance&&im.performance.timing&&im.performance.now&&im.performance.timing.navigationStart?function(){return im.performance.timing.navigationStart+im.performance.now()}:function(){return(new Date).getTime()};function jm(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(X());this.h=!1}
r=jm.prototype;r.add=function(a,b,c){return km(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return km(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function lm(a,b,c){a=a.g.createObjectStore(b,c);return new mm(a)}
r.delete=function(a,b){return km(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return km(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function nm(a,b,c){return km(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return gm(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function km(a,b,c,d){var e,f,g,h,l,k,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;l=Math.round(X());va(z,5);k=a.g.transaction(b,e.mode);G=new om(k);G=pm(G,d);return A(z,G,7);case 7:return m=z.h,n=Math.round(X()),qm(a,l,n,g,void 0,b.join(),e),z.return(m);case 5:q=wa(z);p=Math.round(X());t=Vl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof V&&!t.g)||g>=f)qm(a,l,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function qm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof V&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Il("QUOTA_EXCEEDED",{dbName:Kl(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof V&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Il("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),rm(a,!1,d,f,b,g.tag),Hl(e)):rm(a,!0,d,f,b,g.tag)}
function rm(a,b,c,d,e,f){Il("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function mm(a){this.g=a}
r=mm.prototype;r.add=function(a,b){return gm(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return gm(this.g.clear()).then(function(){})};
function sm(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function tm(a,b){return um(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?tm(this,a):gm(this.g.delete(a))};
r.get=function(a){return gm(this.g.get(a))};
r.index=function(a){try{return new vm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Tl(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function um(a,b,c){a=a.g.openCursor(b.query,b.direction);return wm(a).then(function(d){return hm(d,c)})}
function om(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=V;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var l=f.item(h);if(null===l)throw Error("Invariant: item in DOMStringList is null");g.push(l)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function pm(a,b){var c=new Promise(function(d,e){try{cm(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
om.prototype.abort=function(){this.g.abort();this.h=!0;throw new V("EXPLICIT_ABORT");};
om.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new mm(a),this.i.set(a,b));return b};
function vm(a){this.g=a}
r=vm.prototype;r.delete=function(a){return xm(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return gm(this.g.get(a))};
r.getKey=function(a){return gm(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function xm(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return wm(a).then(function(d){return hm(d,c)})}
function ym(a,b){this.request=a;this.cursor=b}
function wm(a){return gm(a).then(function(b){return b?new ym(a,b):null})}
r=ym.prototype;r.advance=function(a){this.cursor.advance(a);return wm(this.request)};
r.continue=function(a){this.cursor.continue(a);return wm(this.request)};
r.delete=function(){return gm(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return gm(this.cursor.update(a))};function zm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new jm(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Sc,l=c.Tc,k=c.xd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Il("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Kl(a)});var t=f(),u=new om(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;l&&p.addEventListener("versionchange",function(){l(f())});
p.addEventListener("close",function(){Il("IDB_UNEXPECTEDLY_CLOSED",{dbName:Kl(a),dbVersion:p.version});k&&k()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Am(a,b,c){c=void 0===c?{}:c;return zm(a,b,c)}
function Bm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Sc)&&c.addEventListener("blocked",function(){e()}),A(g,fm(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),Vl(f,a,"",-1);})}
;function Cm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.l=0}
Cm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return Am(a,b,c)};
Cm.prototype.delete=function(a){a=void 0===a?{}:a;return Bm(this.name,a)};
function Dm(a,b){return new V("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Em(a,b){if(!b)throw Wl("openWithToken",Kl(a.name));return Fm(a)}
function Fm(a){function b(){var f,g,h,l,k,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",va(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:for(var z=h=u.h,G=a.options,P=[],U=w(Object.keys(G.Za)),Y=U.next();!Y.done;Y=U.next()){Y=Y.value;var La=G.Za[Y],Da=void 0===La.vd?Number.MAX_VALUE:La.vd;!(z.g.version>=La.hb)||z.g.version>=Da||z.g.objectStoreNames.contains(Y)||P.push(Y)}l=P;if(0===l.length){u.B(5);break}k=Object.keys(a.options.Za);m=h.objectStoreNames();
if(a.o<T("ytidb_reopen_db_retries",0))return a.o++,h.close(),Hl(new V("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());if(!(a.l<T("ytidb_remake_db_retries",1))){u.B(6);break}a.l++;return A(u,a.delete(),7);case 7:return Hl(new V("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:k,foundObjectStores:m})),u.return(b());case 6:throw new Sl(m,k);case 5:return u.return(h);case 2:n=wa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,Dm(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!S("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Vl(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Dm(a);if(a.g)return a.g;var d={Tc:function(f){f.close()},
closed:c,xd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Gm=new Cm("YtIdbMeta",{Za:{databases:{hb:1}},upgrade:function(a,b){b(1)&&lm(a,"databases",{keyPath:"actualName"})}});
function Hm(a,b){var c;return B(function(d){if(1==d.g)return A(d,Em(Gm,b),2);c=d.h;return d.return(km(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return gm(f.g.put(a,void 0)).then(function(){})})}))})}
function Im(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,Em(Gm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Jm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,Em(Gm,b),2)):3!=e.g?(d=e.h,A(e,km(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return um(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function Km(a){return Jm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Lm,Mm=new function(){}(new function(){});
function Nm(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=El();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Ll)f=/WebKit\/([0-9]+)/.exec(Mb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Mb()),f=!(f&&602<=parseInt(f[1],10)));if(f||kc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Hm(d,Mm),4);case 4:return A(e,Im("yt-idb-test-do-not-use",Mm),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Om(){if(void 0!==Lm)return Lm;Gl=!0;return Lm=Nm().then(function(a){Gl=!1;var b;if(null!=(b=Dl())&&b.g){var c;b={hasSucceededOnce:(null==(c=El())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Dl())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Pm(){return D("ytglobal.idbToken_")||void 0}
function Qm(){var a=Pm();return a?Promise.resolve(a):Om().then(function(b){(b=b?Mm:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new qg;function Rm(a){if(!Tk())throw a=new V("AUTH_INVALID",{dbName:a}),Hl(a),a;var b=Uk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Sm(a,b,c,d){var e,f,g,h,l,k;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Qm(),2);case 2:g=m.h;if(!g)throw h=Wl("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Hl(h),h;Jl(a);l=c?{actualName:a,publicName:a,userIdentifier:void 0}:Rm(a);va(m,3);return A(m,Hm(l,g),5);case 5:return A(m,Am(l.actualName,b,d),6);case 6:return m.return(m.h);case 3:return k=wa(m),va(m,7),A(m,Im(l.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw k;}})}
function Tm(a,b,c){c=void 0===c?{}:c;return Sm(a,b,!1,c)}
function Um(a,b,c){c=void 0===c?{}:c;return Sm(a,b,!0,c)}
function Hn(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Qm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Jl(a);d=Rm(a);return A(e,Bm(d.actualName,b),3)}return A(e,Im(d.actualName,c),0)})}
function In(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,Bm(d.actualName,b),2):A(e,Im(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Jn(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Qm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Jl("LogsDatabaseV2");return A(d,Km(b),3)}c=d.h;return A(d,In(c,a,b),0)})}
function Kn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Qm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Jl(a);return A(d,Bm(a,b),3)}return A(d,Im(a,c),0)})}
;function Ln(a,b){Cm.call(this,a,b);this.options=b;Jl(a)}
y(Ln,Cm);function Mn(a,b){var c;return function(){c||(c=new Ln(a,b));return c}}
Ln.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Jb?Um:Tm)(a,b,Object.assign({},c))};
Ln.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Jb?Kn:Hn)(this.name,a)};
function Nn(a,b){return Mn(a,b)}
;var On={},Pn=Nn("ytGcfConfig",{Za:(On.coldConfigStore={hb:1},On.hotConfigStore={hb:1},On),Jb:!1,upgrade:function(a,b){b(1)&&(sm(lm(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),sm(lm(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Qn(a){return Em(Pn(),a)}
function Rn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:X()},A(g,Qn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,nm(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Sn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:X()},A(h,Qn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,nm(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Tn(a){var b,c;return B(function(d){return 1==d.g?A(d,Qn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,km(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return xm(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function Un(a){var b,c;return B(function(d){return 1==d.g?A(d,Qn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,km(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return xm(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function Vn(){Ne.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Vn,Ne);Vn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Ne.prototype.sa.call(this)};function Wn(){this.h=0;this.i=new Vn}
function Xn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!S("start_client_gcf")){g.B(0);break}c&&(a.l=c,E("yt.gcf.config.hotConfigGroup",a.l||null));a.g(b);d=Pm();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Un(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,Rn(c,b,d),3);case 3:if(c)for(var h=c,l=w(a.i.g),k=l.next();!k.done;k=l.next())k=k.value,k(h);g.g=0}})}
function Yn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!S("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Pm())?c?h.B(4):A(h,Tn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,Sn(c,b,g,d),0)})}
Wn.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function Zn(){return"INNERTUBE_API_KEY"in zj&&"INNERTUBE_API_VERSION"in zj}
function $n(){return{fd:R("INNERTUBE_API_KEY"),gd:R("INNERTUBE_API_VERSION"),Mb:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),qc:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),hd:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),sc:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),vc:R("INNERTUBE_CONTEXT_HL"),uc:R("INNERTUBE_CONTEXT_GL"),jd:R("INNERTUBE_HOST_OVERRIDE")||"",ld:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),kd:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function ao(a){var b={client:{hl:a.vc,gl:a.uc,clientName:a.qc,clientVersion:a.sc,configInfo:a.Mb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Jj();0<c.length&&(b.request={internalExperimentFlags:c});bo(a,void 0,b);co(void 0,b);eo(void 0,b);fo(a,void 0,b);go(void 0,b);S("start_client_gcf")&&ho(void 0,b);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&
(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(ak(R("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function bo(a,b,c){a=a.qc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Sd(b,Vi,96)||new Vi;var d=Lk();d=Object.keys(ej).indexOf(d);d=-1===d?null:d;null!==d&&$d(c,3,d);I(b,Vi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Lk())}
function co(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Sd(a,aj,7)||new aj,J(b,4,c),I(a,aj,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function eo(a,b){var c;if(S("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?Md(a,95,ud(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function fo(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Sd(b,Ui,62))?d:new Ui;J(c,6,a.appInstallData);I(b,Ui,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function go(a,b){a:{var c=Rk();if(c){var d=Nk[c.type||"unknown"]||"CONN_UNKNOWN";c=Nk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?$d(a,61,Ok[d]):b&&(b.client.connectionType=d));S("web_log_effective_connection_type")&&(d=Rk(),d=null!=d&&d.effectiveType?Qk.hasOwnProperty(d.effectiveType)?Qk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?$d(a,94,Pk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function io(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.ne||R("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().me;else{Kk.g||(Kk.g=new Kk);a={};if(c=Le([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in zj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in zj&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));S("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function ho(a,b){if(!Wn.g){var c=new Wn;Wn.g=c}c=Wn.g;var d=X()-c.h;if(0!==c.h&&d<T("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=X());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Sd(a,Ui,62))?g:new Ui;J(b,1,c);J(b,3,d);b.g(e);I(a,Ui,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var jo="undefined"!==typeof TextEncoder?new TextEncoder:null,ko=jo?function(a){return jo.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var lo=D("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.rb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;E("ytPubsub2Pubsub2Instance",lo);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function mo(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ae:a,ze:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var no=void 0,oo=void 0;function po(){if(!oo){var a=R("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=tb();a=b?b.createScriptURL(a):a;a=new xb(a,yb)}else a=null;oo=a}else oo=null}return oo||void 0}
function qo(){var a=po();if(!no&&void 0!==a){var b=Worker;a instanceof xb&&a.constructor===xb?a=a.g:(Ka(a),a="type_error:TrustedResourceUrl");no=new b(a,void 0)}return no}
;var ro=T("max_body_size_to_compress",5E5),so=T("min_body_size_to_compress",500),to=!0,uo=0,vo=0,wo=T("compression_performance_threshold_lr",250),xo=T("slow_compressions_before_abandon_count",4),yo=!1,zo=new Map,Ao=1,Bo=!0;function Co(){if("function"===typeof Worker&&po()&&!yo){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=zo.get(c.key);d&&(Do(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),zo.delete(c.key))}},b=qo();
b&&(b.addEventListener("message",a),b.onerror=function(){zo.clear()},yo=!0)}}
function Eo(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:X(),ticks:{},infos:{}};if(to)try{try{var g=(new Blob(b.split(""))).size}catch(m){Hj(m),g=null}if(null!=g&&(g>ro||g<so))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!Bo||!S("initial_gzip_use_main_thread"))){yo||Co();var h=qo();if(h&&!e){zo.set(Ao,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Ao});Ao++;return}}var l=ko(b);b=(b=void 0,{});b.dd=!0;var k=new Pi(b);
k.push(l,!0);if(k.err)throw k.msg||qh[k.err];Do(k.result,f,a,c,d)}}catch(m){Hj(m),d(a,c)}else d(a,c)}
function Do(a,b,c,d,e){Bo=!1;var f=X();b.ticks.gelc=f;vo++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=wo&&(uo++,S("abandon_compression_after_N_slow_zips")?vo===T("compression_disable_point")&&uo>xo&&(to=!1):to=!1);S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||mo("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Fo(a){a=Object.assign({},a);delete a.Authorization;var b=Le();if(b){var c=new gg;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=Fc(c.digest(),3)}return a}
;var Go;function Ho(){Go||(Go=new Cl("yt.innertube"));return Go}
function Io(a,b,c,d){if(d)return null;d=Ho().get("nextId",!0)||1;var e=Ho().get("requests",!0)||{};e[d]={method:a,request:b,authState:Fo(c),requestTime:Math.round(X())};Ho().set("nextId",d+1,86400,!0);Ho().set("requests",e,86400,!0);return d}
function Jo(a){var b=Ho().get("requests",!0)||{};delete b[a];Ho().set("requests",b,86400,!0)}
function Ko(a){var b=Ho().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(X())-d.requestTime)){var e=d.authState,f=Fo(io(!1));ob(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(X())),Lo(a,d.method,e,{}));delete b[c]}}Ho().set("requests",b,86400,!0)}}
;function Mo(a){this.ub=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Sa=function(){};
this.now=Date.now;this.lb=!1;var b;this.Hc=null!=(b=a.Hc)?b:100;var c;this.Fc=null!=(c=a.Fc)?c:1;var d;this.Dc=null!=(d=a.Dc)?d:2592E6;var e;this.Cc=null!=(e=a.Cc)?e:12E4;var f;this.Ec=null!=(f=a.Ec)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.zb=!!a.zb;var h;this.xb=null!=(h=a.xb)?h:.1;var l;this.Fb=null!=(l=a.Fb)?l:10;a.handleError&&(this.handleError=a.handleError);a.Sa&&(this.Sa=a.Sa);a.lb&&(this.lb=a.lb);a.ub&&(this.ub=a.ub);this.J=a.J;this.ha=a.ha;this.N=a.N;this.R=a.R;this.sendFn=a.sendFn;
this.Xb=a.Xb;this.Ub=a.Ub;No(this)&&(!this.J||this.J("networkless_logging"))&&Oo(this)}
function Oo(a){No(a)&&!a.lb&&(a.g=!0,a.zb&&Math.random()<=a.xb&&a.N.Uc(a.I),Po(a),a.R.ca()&&a.qb(),a.R.Ka(a.Xb,a.qb.bind(a)),a.R.Ka(a.Ub,a.hc.bind(a)))}
r=Mo.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(No(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.R.ca()&&Qo(c,d)}).catch(function(e){Qo(c,d);
Ro(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(No(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.R.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(l){if(1==l.g)return A(l,d.N.set(e,d.I).catch(function(k){Ro(d,k)}),2);
f(g,h);l.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
Ro(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(No(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ra(d.id,c.I):e=!0;c.R.Ma&&c.J&&c.J("vss_network_hint")&&c.R.Ma(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ra(d.id,c.I)}).catch(function(g){Ro(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.qb=function(){var a=this;if(!No(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.nc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,Qo(a,b),3):(a.hc(),c.return());a.h&&(a.h=0,a.qb());c.g=0})},this.Hc))};
r.hc=function(){this.ha.ba(this.h);this.h=0};
function Qo(a,b){var c;return B(function(d){switch(d.g){case 1:if(!No(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.nd(b.id,a.I),3);case 3:(c=d.h)||a.Sa(Error("The request cannot be found in the database."));case 2:if(So(a,b,a.Dc)){d.B(4);break}a.Sa(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Ra(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=To(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Ra(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function To(a,b){if(!No(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,l,k;return B(function(m){switch(m.g){case 1:g=Uo(f);(h=Vo(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Fb)){m.B(2);break}if(!a.R.Ib){m.B(3);break}return A(m,a.R.Ib(),3);case 3:if(a.R.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(l=b)?void 0:l.id)){m.B(6);
break}return A(m,a.N.Yb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Fb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){m.B(8);break}return b.sendCount<a.Fc?A(m,a.N.Yb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Ra(b.id,a.I),8);case 12:a.ha.qa(function(){a.R.ca()&&a.qb()},a.Ec);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Ra(b.id,a.I),2);a.R.Ma&&a.J&&a.J("vss_network_hint")&&a.R.Ma(!0);d(e,f);h.g=0})};
return b}
function So(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Po(a){if(!No(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.nc("QUEUED",a.I).then(function(b){b&&!So(a,b,a.Cc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Yb(b.id,a.I),2);Po(a);c.g=0})}):a.R.ca()&&a.qb()})}
function Ro(a,b){a.Jc&&!a.R.ca()?a.Jc(b):a.handleError(b)}
function No(a){return!!a.I||a.ub}
function Uo(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Vo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Wo;
function Xo(){if(Wo)return Wo();var a={};Wo=Nn("LogsDatabaseV2",{Za:(a.LogsRequestsStore={hb:2},a),Jb:!1,upgrade:function(b,c,d){c(2)&&lm(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),sm(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Wo()}
;function Yo(a){return Em(Xo(),a)}
function Zo(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,Yo(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,nm(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=X();$o(c);return g.return(f)})}
function ap(a,b){var c,d,e,f,g,h,l;return B(function(k){if(1==k.g)return c={startTime:X(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(k,Yo(b),2);if(3!=k.g)return d=k.h,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,X()],h=IDBKeyRange.bound(f,g),l=void 0,A(k,km(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return xm(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(l=n.ja(),"NEW"===a&&(l.status="QUEUED",
n.update(l)))})}),3);
c.ticks.tc=X();$o(c);return k.return(l)})}
function bp(a,b){var c;return B(function(d){if(1==d.g)return A(d,Yo(b),2);c=d.h;return d.return(km(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",gm(f.g.put(g,void 0)).then(function(){return g})})}))})}
function cp(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,Yo(b),2);e=f.h;return f.return(km(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(l){return l?(l.status="NEW",c&&(l.sendCount+=1),void 0!==d&&(l.options.compress=d),gm(h.g.put(l,void 0)).then(function(){return l})):$l.resolve(void 0)})}))})}
function dp(a,b){var c;return B(function(d){if(1==d.g)return A(d,Yo(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function ep(a){var b,c;return B(function(d){if(1==d.g)return A(d,Yo(a),2);b=d.h;c=X()-2592E6;return A(d,km(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return um(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function fp(){B(function(a){return A(a,Jn(),0)})}
function $o(a){S("nwl_csi_killswitch")||mo("networkless_performance",a,{sampleRate:1})}
;var gp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var hp={},ip=Nn("ServiceWorkerLogsDatabase",{Za:(hp.SWHealthLog={hb:1},hp),Jb:!0,upgrade:function(a,b){b(1)&&sm(lm(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function jp(a){return Em(ip(),a)}
function kp(a){var b,c;B(function(d){if(1==d.g)return A(d,jp(a),2);b=d.h;c=X()-2592E6;return A(d,km(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return um(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function lp(a){var b;return B(function(c){if(1==c.g)return A(c,jp(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var mp={},np=0;function op(a){var b=new Image,c=""+np++;mp[c]=b;b.onload=b.onerror=function(){delete mp[c]};
b.src=a}
;function pp(){this.g=new Map;this.h=!1}
function qp(){if(!pp.g){var a=D("yt.networkRequestMonitor.instance")||new pp;E("yt.networkRequestMonitor.instance",a);pp.g=a}return pp.g}
pp.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
pp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
pp.prototype.removeParams=function(a){return a.split("?")[0]};
pp.prototype.removeParams=pp.prototype.removeParams;pp.prototype.isEndpointCFR=pp.prototype.isEndpointCFR;pp.prototype.requestComplete=pp.prototype.requestComplete;pp.getInstance=qp;var rp;function sp(){rp||(rp=new Cl("yt.offline"));return rp}
function tp(a){if(S("offline_error_handling")){var b=sp().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);sp().set("errors",b,2592E3,!0)}}
;function Z(){qf.call(this);var a=this;this.i=!1;this.h=wf();this.h.Ka("networkstatus-online",function(){if(a.i&&S("offline_error_handling")){var b=sp().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Sk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Gj(d)}sp().set("errors",{},2592E3,!0)}}})}
y(Z,qf);function up(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Ma=function(a){this.h.h=a};
r.bd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Xc=function(){this.i=!0};
r.Ka=function(a,b){return this.h.Ka(a,b)};
r.Ib=function(a){a=uf(this.h,a);a.then(function(b){S("use_cfr_monitor")&&qp().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Ib;Z.prototype.listen=Z.prototype.Ka;Z.prototype.enableErrorFlushing=Z.prototype.Xc;Z.prototype.getWindowStatus=Z.prototype.bd;Z.prototype.networkStatusHint=Z.prototype.Ma;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=up;function vp(a){a=void 0===a?{}:a;qf.call(this);var b=this;this.h=this.u=0;this.i=up();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Hb?(this.Hb=a.Hb,c("networkstatus-online",function(){wp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){wp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){rf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){rf(b,"publicytnetworkstatus-offline")})))}
y(vp,qf);vp.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
vp.prototype.Ma=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
vp.prototype.Ib=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return S("skip_network_check_if_cfr")&&qp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Ma((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function wp(a,b){a.Hb?a.h?(xf.ba(a.u),a.u=xf.qa(function(){a.o!==b&&(rf(a,b),a.o=b,a.h=X())},a.Hb-(X()-a.h))):(rf(a,b),a.o=b,a.h=X()):rf(a,b)}
;var xp;function yp(){var a=Mo.call;xp||(xp=new vp({re:!0,qe:!0}));a.call(Mo,this,{N:{Uc:ep,Ra:dp,nc:ap,nd:bp,Yb:cp,set:Zo},R:xp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Hj(new Sk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Gj(b)},
Sa:Hj,sendFn:zp,now:X,Jc:tp,ha:Bl(),Xb:"publicytnetworkstatus-online",Ub:"publicytnetworkstatus-offline",zb:!0,xb:.1,Fb:T("potential_esf_error_limit",10),J:S,lb:!(Tk()&&"www.youtube-nocookie.com"!==$b(document.location.toString()))});this.i=new qg;S("networkless_immediately_drop_all_requests")&&fp();Kn("LogsDatabaseV2")}
y(yp,Mo);function Ap(){var a=D("yt.networklessRequestController.instance");a||(a=new yp,E("yt.networklessRequestController.instance",a),S("networkless_logging")&&Qm().then(function(b){a.I=b;Oo(a);a.i.resolve();a.zb&&Math.random()<=a.xb&&a.I&&kp(a.I);S("networkless_immediately_drop_sw_health_store")&&Bp(a)}));
return a}
yp.prototype.writeThenSend=function(a,b){b||(b={});b=Cp(a,b);Tk()||(this.g=!1);Mo.prototype.writeThenSend.call(this,a,b)};
yp.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Cp(a,b);Tk()||(this.g=!1);Mo.prototype.sendThenWrite.call(this,a,b,c)};
yp.prototype.sendAndWrite=function(a,b){b||(b={});b=Cp(a,b);Tk()||(this.g=!1);Mo.prototype.sendAndWrite.call(this,a,b)};
yp.prototype.awaitInitialization=function(){return this.i.promise};
function Bp(a){var b;B(function(c){if(!a.I)throw b=Wl("clearSWHealthLogsDb"),b;return c.return(lp(a.I).catch(function(d){a.handleError(d)}))})}
function zp(a,b,c,d){d=void 0===d?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&Dp(a,b);if(S("use_request_time_ms_header"))b.headers&&ck(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(X())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)lk(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)lk(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var l=new $a({url:a});if(l.i&&l.h||l.l){var k=Zb(a.match(Yb)[5]||null);var m=!(!k||!k.endsWith("/aclk")||"1"!==ec(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||op(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Eo(a,b.postBody,b,pk,d)):Eo(a,JSON.stringify(b.postParams),
b,ok,d):pk(a,b)}
function Cp(a,b){S("use_event_time_ms_header")&&ck(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(X())));return b}
function Dp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){qp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){qp().requestComplete(a,!0);d(e,f)}}
;var Ep=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",Ep);function Fp(a){var b=this;this.config_=null;a?this.config_=a:Zn()&&(this.config_=$n());Wk(function(){Ko(b)},5E3)}
Fp.prototype.isReady=function(){!this.config_&&Zn()&&(this.config_=$n());return!!this.config_};
function Lo(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||S("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Io(b,c,k,l)),u)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(Y,La){Jo(u);z(Y,La)};
c.onFetchSuccess=function(Y,La){Jo(u);G(Y,La)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Ap().writeThenSend(p,g):Ap().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var U=g.postBody;"string"!==typeof U&&(U=JSON.stringify(g.postBody));Eo(p,U,g,pk,P)}else Eo(p,JSON.stringify(g.postParams),g,ok,P)}else S("web_all_payloads_via_jspb")?pk(p,g):ok(p,g)}catch(Y){if("InvalidAccessError"===Y.name)u&&(Jo(u),u=0),Hj(Error("An extension is blocking network request."));else throw Y;}u&&Wk(function(){Ko(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Hj(new Sk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Sk("innertube xhrclient not ready",b,c,d);Gj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.jd)&&(h=f);var l=a.config_.ld||!1,k=io(l,h,d);Object.assign(g.headers,k);(f=g.headers.Authorization)&&!h&&l&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.gd+"/"+b,n={alt:"json"},q=a.config_.kd&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.fd);var p=bk(""+h+m,n||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Ep.isNwlInitialized?Om().then(function(t){e(t)}):e(!1)}
;function Gp(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Hp=C.ytPubsubPubsubInstance||new L,Ip=C.ytPubsubPubsubSubscribedKeys||{},Jp=C.ytPubsubPubsubTopicToKeys||{},Kp=C.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.rb;L.prototype.publish=L.prototype.ab;L.prototype.clear=L.prototype.clear;E("ytPubsubPubsubInstance",Hp);E("ytPubsubPubsubTopicToKeys",Jp);E("ytPubsubPubsubIsSynchronous",Kp);E("ytPubsubPubsubSubscribedKeys",Ip);var Lp=Symbol("injectionDeps");function Mp(){this.key=Wn}
function Np(){this.h=new Map;this.g=new Map}
Np.prototype.resolve=function(a){return a instanceof Mp?Op(this,a.key,[],!0):Op(this,a,[])};
function Op(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Bd)var e=d.Bd;else if(d.Ad)e=d[Lp]?Pp(a,d[Lp],c):[],e=d.Ad.apply(d,x(e));else if(d.zd){e=d.zd;var f=e[Lp]?Pp(a,e[Lp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.ye||a.g.set(b,e);return e}
function Pp(a,b,c){return b?b.map(function(d){return d instanceof Mp?Op(a,d.key,c,!0):Op(a,d,c)}):[]}
;var Qp;function Rp(){Qp||(Qp=new Np);return Qp}
;var Sp=window;function Tp(){var a,b;return"h5vcc"in Sp&&(null==(a=Sp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Sp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Sp&&Sp.performance.mark&&Sp.performance.measure?2:0}
function Up(a){switch(Tp()){case 1:Sp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Sp.performance.mark(a+"-start");break;case 0:break;default:me()}}
function Vp(a){switch(Tp()){case 1:Sp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Sp.performance.mark(c);Sp.performance.measure(a,b,c);break;case 0:break;default:me()}}
;var Wp=S("web_enable_lifecycle_monitoring")&&0!==Tp(),Xp=S("web_enable_lifecycle_monitoring");function Yp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?Bl():d;this.l=c;this.h=d;this.i=new qg;this.g=a;for(a={Ja:0};a.Ja<this.g.length;a={Eb:void 0,Ja:a.Ja},a.Ja++)a.Eb=this.g[a.Ja],c=function(e){return function(){e.Eb.Nb();b.g[e.Ja].Gb=!0;b.g.every(function(f){return!0===f.Gb})&&b.i.resolve()}}(a),d=this.h.Ha(c,Zp(this,a.Eb)),this.g[a.Ja]=Object.assign({},a.Eb,{Nb:c,
jobId:d})}
function $p(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Zp(a,a.g[e])-Zp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Gb||(a.h.ba(c.jobId),a.h.Ha(c.Nb,10))}
Yp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Gb||this.h.ba(b.jobId),b.Gb=!0;this.i.resolve()};
function Zp(a,b){var c;return null!=(c=b.priority)?c:a.l}
;function aq(a){this.state=a;this.i=[];this.o=void 0;this.G={};Wp&&Up(this.state)}
aq.prototype.install=function(a){this.i.push(a);return this};
function bq(a){Wp&&Vp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Ea}):d.from===a.state&&"none"===d.Ea});
if(b){a.h&&($p(a.h),a.h=void 0);Xp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Wp&&Up(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(cq(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function cq(a,b){var c=b.filter(function(e){return 10===dq(a,e)}),d=b.filter(function(e){return 10!==dq(a,e)});
return a.G.xe?function(){var e=Ga.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ga.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
aq.prototype.ya=function(a){for(var b=Ga.apply(1,arguments),c=Bl(),d=w(a),e=d.next(),f={};!e.done;f={mb:void 0},e=d.next())f.mb=e.value,c.gb(function(g){return function(){eq(g.mb.name);g.mb.ib.apply(g.mb,x(b));fq(g.mb.name)}}(f))};
aq.prototype.oa=function(a){var b=Ga.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=Bl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Va=e.value;f.tb=void 0;g=function(l){return function(){eq(l.Va.name);var k=l.Va.ib.apply(l.Va,x(b));"function"===typeof(null==k?void 0:k.then)?l.tb=k.then(function(){fq(l.Va.name)}):fq(l.Va.name)}}(f);
c.gb(g);return f.tb?A(h,f.tb,3):h.B(3)}f={Va:void 0,tb:void 0};e=d.next();return h.B(2)})};
aq.prototype.u=function(a){var b=Ga.apply(1,arguments),c=this,d=a.map(function(e){return{Nb:function(){eq(e.name);e.ib.apply(e,x(b));fq(e.name)},
priority:dq(c,e)}});
d.length&&(this.h=new Yp(d))};
function dq(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function eq(a){Wp&&a&&Up(a)}
function fq(a){Wp&&a&&Vp(a)}
da.Object.defineProperties(aq.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function gq(a){aq.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Ea:"application_navigating",action:this.K},{from:"application_navigating",Ea:"none",action:this.O},{from:"application_navigating",Ea:"application_navigating",action:function(){}},
{from:"none",Ea:"none",action:function(){}}]}
var hq;y(gq,aq);gq.prototype.K=function(a,b){var c=this;this.g=Wk(function(){"application_navigating"===c.l&&bq(c)},5E3);
a(null==b?void 0:b.event)};
gq.prototype.O=function(a,b){this.g&&(xf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function iq(){hq||(hq=new gq);return hq}
;var jq=[];E("yt.logging.transport.getScrapedGelPayloads",function(){return jq});function kq(){this.store={};this.g={}}
kq.prototype.storePayload=function(a,b){a=lq(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
kq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=mq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
kq.prototype.extractMatchingEntries=function(a){a=mq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
kq.prototype.getSequenceCount=function(a){a=mq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function mq(a,b){var c=lq(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&lq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(nq(b.auth,g[0])){var h=b.isJspb;nq(void 0===h?"undefined":h?"true":"false",g[1])&&nq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),nq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function nq(a,b){return void 0===a||"undefined"===a?!0:a===b}
kq.prototype.getSequenceCount=kq.prototype.getSequenceCount;kq.prototype.extractMatchingEntries=kq.prototype.extractMatchingEntries;kq.prototype.smartExtractMatchingEntries=kq.prototype.smartExtractMatchingEntries;kq.prototype.storePayload=kq.prototype.storePayload;function lq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var oq=T("initial_gel_batch_timeout",2E3),pq=T("gel_queue_timeout_max_ms",6E4),qq=Math.pow(2,16)-1,rq=T("gel_min_batch_size",5),sq=void 0,tq=null;function uq(){this.l=this.g=this.h=0;this.i=!1}
var vq=new uq,wq=new uq,xq=new uq,yq=new uq,zq,Aq=!0,Bq=1,Cq=new Map,Dq=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Dq);var Eq=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",Eq);var Fq={};function Gq(){var a=D("yt.logging.ims");a||(a=new kq,E("yt.logging.ims",a));return a}
function Hq(a,b){if("log_event"===a.endpoint){Iq(a);var c=Jq(a),d=Kq(a.payload)||"",e=Lq(d),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Mq(e.tier);if(400===f){Nq(a,b);return}}Fq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Gq().storePayload(e,a.payload);Oq(b,c,!1,e,Pq(d))}}
function Qq(a,b,c){if("log_event"===b.endpoint){Iq(void 0,b);var d=Jq(b,!0),e=Lq(a),f=200;if(e){if(!1===e.enabled&&!S("web_payload_policy_disabled_killswitch"))return;f=Mq(e.tier);if(400===f){Rq(a,b,c);return}}Fq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Gq().storePayload(e,b.payload.toJSON());Oq(c,d,!0,e,Pq(a))}}
function Oq(a,b,c,d,e){function f(){Sq({writeThenSend:!0},S("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;S("web_enable_cached_it_client")&&a&&a!==tq?(sq=new a,tq=a):!S("web_enable_cached_it_client")&&a&&(sq=new a);a=T("tvhtml5_logging_max_batch_ads_fork")||T("web_logging_max_batch")||100;var g=X(),h=Tq(c,d.tier),l=h.l;e&&(h.i=!0);e=0;d&&(e=Gq().getSequenceCount(d));1E3<=e?f():e>=a?zq||(zq=Uq(function(){f();zq=void 0},0)):10<=g-l&&(Vq(c,d.tier),h.l=g)}
function Nq(a,b){if("log_event"===a.endpoint){Iq(a);var c=Jq(a),d=new Map;d.set(c,[a.payload]);var e=Kq(a.payload)||"";b&&(sq=new b);return new rg(function(f,g){sq&&sq.isReady()?Wq(d,sq,f,g,{bypassNetworkless:!0},!0,Pq(e)):f()})}}
function Rq(a,b,c){if("log_event"===b.endpoint){Iq(void 0,b);var d=Jq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(sq=new c);return new rg(function(f){sq&&sq.isReady()?Xq(e,sq,f,{bypassNetworkless:!0},!0,Pq(a)):f()})}}
function Jq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new uj;c.videoId?Pd(d,1,Yd,vd(c.videoId)):c.playlistId&&Pd(d,2,Yd,vd(c.playlistId));Eq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Dq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Sq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new rg(function(e,f){var g=Tq(c,d),h=g.i;g.i=!1;Yq(g.h);Yq(g.g);g.g=0;sq&&sq.isReady()?void 0===d&&S("enable_web_tiered_gel")?Zq(e,f,a,b,c,300,h):Zq(e,f,a,b,c,d,h):(Vq(c,d),e())})}
function Zq(a,b,c,d,e,f,g){var h=sq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var l=new Map,k=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Gq().extractMatchingEntries(n),l.set(d,b),Xq(l,h,a,c,!1,g)):(l=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Gq().extractMatchingEntries(n),k.set(d,l),Wq(k,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Fq));for(k=b.next();!k.done;k=b.next())k=k.value,f=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Gq().extractMatchingEntries({isJspb:!0,cttAuthInfo:k}),0<f.length&&l.set(k,f),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Fq[k];Xq(l,h,a,c,!1,g)}else{l=w(Object.keys(Fq));for(m=l.next();!m.done;m=l.next())m=m.value,n=S("enable_web_tiered_gel")?Gq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Gq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&k.set(m,n),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Fq[m];Wq(k,h,a,b,c,!1,g)}}
function Vq(a,b){function c(){Sq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Tq(a,b),e=d===yq||d===xq?5E3:pq;S("web_gel_timeout_cap")&&!d.g&&(e=Uq(function(){c()},e),d.g=e);
Yq(d.h);e=R("LOGGING_BATCH_TIMEOUT",T("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Aq&&(e=oq);e=Uq(function(){0<T("gel_min_batch_size")?Gq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=rq&&c():c()},e);
d.h=e}
function Wq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(X()),l=a.size,k=$q(g);a=w(a);var m=a.next();for(g={};!m.done;g={Tb:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Wb:void 0,Vb:void 0},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=pb({context:ao(b.config_||$n())});if(!Na(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Dq[m])&&ar(g.batchRequest,m,n);delete Dq[m];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===
m;br(g.batchRequest,h,g.dangerousLogToVisitorSession);cr(e);g.Wb=function(q){S("start_client_gcf")&&xf.qa(function(){return B(function(p){return A(p,dr(q),0)})});
l--;l||c()};
g.Tb=0;g.Vb=function(q){return function(){q.Tb++;if(e.bypassNetworkless&&1===q.Tb)try{Lo(b,k,q.batchRequest,er({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Wb,q.Vb,f)),Aq=!1}catch(p){Gj(p),d()}l--;l||c()}}(g);
try{Lo(b,k,g.batchRequest,er(e,g.dangerousLogToVisitorSession,g.Wb,g.Vb,f)),Aq=!1}catch(q){Gj(q),d()}}}
function Xq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(X()),h={value:a.size},l=new Map([].concat(x(a)));l=w(l);for(var k=l.next();!k.done;k=l.next()){var m=w(k.value).next().value,n=a.get(m);k=new vj;var q=b.config_||$n(),p=new dj,t=new Xi;J(t,1,q.vc);J(t,2,q.uc);$d(t,16,q.hd);J(t,17,q.sc);if(q.Mb){var u=q.Mb,z=new Ui;u.coldConfigData&&J(z,1,u.coldConfigData);u.appInstallData&&J(z,6,u.appInstallData);u.coldHashData&&J(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);I(t,Ui,62,z)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);Md(t,65,u)}u=R("EXPERIMENTS_TOKEN","");""!==u&&J(t,54,u);u=Jj();if(0<u.length){z=new $i;for(var G=0;G<u.length;G++){var P=new Yi;J(P,1,u[G].key);Pd(P,2,Zi,vd(u[G].value));Vd(z,15,Yi,P)}I(p,$i,5,z)}bo(q,t);co(p);eo(t);fo(q,t);go(t);S("start_client_gcf")&&ho(t);R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(q=new cj,J(q,3,R("DELEGATED_SESSION_ID")));!S("fill_delegate_context_in_gel_killswitch")&&
(u=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(z=Sd(p,cj,3)||new cj,q=p,u=J(z,18,u),I(q,cj,3,u));q=t;u=w(Object.entries(ak(R("DEVICE",""))));for(z=u.next();!z.done;z=u.next())G=w(z.value),z=G.next().value,G=G.next().value,"cbrand"===z?J(q,12,G):"cmodel"===z?J(q,13,G):"cbr"===z?J(q,87,G):"cbrver"===z?J(q,88,G):"cos"===z?J(q,18,G):"cosver"===z?J(q,19,G):"cplatform"===z&&$d(q,42,Mk(G));I(p,Xi,1,t);I(k,dj,1,p);if(t=Eq[m])a:{if(Xd(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;I(k,uj,
4,t);t=Sd(k,dj,1)||new dj;q=Sd(t,cj,3)||new cj;u=new bj;J(u,2,m);$d(u,1,p);Vd(q,12,bj,u);I(t,cj,3,q)}delete Eq[m];m="visitorOnlyApprovedKey"===m;fr()||Md(k,2,ud(g));!m&&(p=R("EVENT_ID"))&&(t=gr(),q=new tj,J(q,1,p),Md(q,2,ud(t)),I(k,tj,5,q));cr(d);if(S("jspb_serialize_with_worker")&&(p=qo())&&d.writeThenSend){Cq.set(Bq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:k.toJSON(),
clientEvents:n,key:Bq});Bq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new rj(n[t]))}catch(U){Gj(new Sk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())Vd(k,3,rj,p.value);n={startTime:X(),ticks:{},infos:{}};k=be(k);n.ticks.geljspc=X();S("log_jspb_serialize_latency")&&mo("gel_jspb_serialize",n,{sampleRate:.1});hr(k,b,c,d,e,f,m,h)}}
function hr(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=$q(f);d=er(d,g,function(l){S("start_client_gcf")&&xf.qa(function(){return B(function(k){return A(k,dr(l),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Lo(b,f,"",d);Aq=!1}
function cr(a){S("always_send_and_write")&&(a.writeThenSend=!1)}
function er(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,pe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};fr()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(X())));return a}
function br(a,b,c){fr()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&(c=gr(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function gr(){var a=R("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*qq/2));a++;a>qq&&(a=1);Aj("BATCH_CLIENT_COUNTER",a);return a}
function ar(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Iq(a,b){if(!D("yt.logging.transport.enableScrapingForTest")){var c=Ij("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))jq=[],E("yt.logging.transport.enableScrapingForTest",!0),E("yt.logging.transport.scrapedPayloadsForTesting",jq),E("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
E("yt.logging.transport.scrapeClientEvent",!0);else return}c=D("yt.logging.transport.scrapedPayloadsForTesting");var d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=D("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}E("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function fr(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function Uq(a,b){return!1===S("embeds_transport_use_scheduler")?Sj(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Wk(function(){if("none"===iq().l)a();else{var c={};iq().install((c.none={ib:a},c))}},b):Wk(a,b)}
function Yq(a){S("transport_use_scheduler")?xf.ba(a):window.clearTimeout(a)}
function dr(a){var b,c,d,e,f,g,h,l,k,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Ti.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Si.name]:void 0;h=q;k=null==(l=d)?void 0:l.coldHashData;return(m=Rp().resolve(new Mp))?g?e?A(n,Xn(m,g,e),2):A(n,Xn(m,g),2):n.B(2):n.return()}return k?h?A(n,Yn(m,k,h),0):A(n,Yn(m,k),0):n.B(0)})}
function Tq(a,b){b=void 0===b?200:b;return a?300===b?yq:wq:300===b?xq:vq}
function Lq(a){if(S("enable_web_tiered_gel")){a=gp[a||""];var b,c;if(null==Rp().resolve(new Mp))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:R("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Kq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,gp[b])return b}
function Mq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Pq(a){return"gelDebuggingEvent"===a}
function $q(a){return(void 0===a?0:a)&&S("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var ir=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",ir);
function jr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||X());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Gp();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:kr(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete ir[d.sequenceGroup]);(d.sendIsolatedPayload?Nq:Hq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function lr(a){Sq(void 0,void 0,void 0===a?!1:a)}
function kr(a){ir[a]=a in ir?ir[a]+1:0;return ir[a]}
;var mr=[];function nr(a,b,c){c=void 0===c?{}:c;var d=Fp;R("ytLoggingEventsDefaultDisabled",!1)&&Fp===Fp&&(d=null);S("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Gp(),c.timestamp=X()),mr.push({zc:a,payload:b,options:c})):jr(a,b,d,c)}
;var or=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",or);function pr(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;R("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:Fp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||X());Md(b,1,ud(e<Number.MAX_SAFE_INTEGER?e:0));e=new qj;if(c.lact)Md(e,1,ud(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)Md(e,1,ud(-1));else{var f=Gp();Md(e,1,ud(isFinite(f)?f:-1))}if(c.sequenceGroup&&!S("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=kr(f),h=new pj;Md(h,2,ud(g));J(h,1,f);I(e,pj,3,h);c.endOfSequence&&delete or[c.sequenceGroup]}I(b,
qj,33,e);(c.sendIsolatedPayload?Rq:Qq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var qr=new Set,rr=0,sr=0,tr=0,ur=[],vr=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function wr(a){try{qr.add(a.message)}catch(b){}rr++}
function xr(){for(var a=w(vr),b=a.next();!b.done;b=a.next()){var c=Mb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function yr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}pk(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function zr(){var a;return B(function(b){return(a=Qf())?b.return(a.then(function(c){c=be(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Fc(d,3)})):b.return(Promise.resolve(null))})}
;var Ar={};function Br(a){return Ar[a]||(Ar[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Cr={},Dr=[],Ig=new L,Er={};function Fr(){for(var a=w(Dr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Gr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Br(b)]:a.getAttribute("data-"+b):null;return c}
function Hr(a){Ig.ab.apply(Ig,arguments)}
;function Ir(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Jr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Kr(a,b,c){Lr||(Lr={},Mr=new Set,Rj(window,"message",function(d){a:if(Mr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Lr[e.id];f&&d.origin===f.Rc&&(d=f.Cd,d.G=!0,d.G&&(db(d.u,d.sendMessage,d),d.u.length=0),d.ec(e))}}));
a=String(Jr(a,"host"));Lr[c]={Cd:b,Rc:a};Mr.add(a)}
var Lr=null,Mr=null;var Nr=window;
function Or(a,b,c){this.o=this.g=this.h=null;this.i=0;this.G=!1;this.u=[];this.l=null;this.O={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.K=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?ac(a.src):"https://www.youtube.com"),this.h=new Ir(b),c||(b=Pr(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Qa(this.g)),Cr[this.g.id]=this,window.postMessage){this.l=
new L;Qr(this);b=Jr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Er)Er.hasOwnProperty(e)&&Rr(this,e)}}
r=Or.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.ec=function(a){Sr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.l.subscribe(a,c);Tr(this,a);return this};
function Rr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.K===b[0]&&Tr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(Cr[this.g.id]=null);Me(this.l);if(this.o){var a=this.o,b=this.g,c=b.parentNode;c&&c.replaceChild(a,b)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Lr&&(Lr[this.id]=null);this.h=null;a=this.g;for(var d in nb)nb[d][0]==a&&Pj(d);this.o=this.g=null};
r.jc=function(){return{}};
function Ur(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.G?a.sendMessage(b):a.u.push(b)}
function Sr(a,b,c){a.l.Aa||(c={target:a,data:c},a.l.ab(b,c),Hr(a.K+"."+b,c))}
function Pr(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Jr(a.h,"title"));(b=Jr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Jr(a.h,"height"))&&
c.setAttribute("height",b.toString());Nr.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.jc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(l){var k=ec(window.location.href,l);null!==k&&(g[l]=k)});
var h=""+Jr(a.h,"host")+("/embed/"+Jr(a.h,"videoId"))+"?"+cc(g);Nr.yt_embedsEnableUaChProbe?zr().then(function(l){var k=new URL(h),m=Number(k.searchParams.get("reloads"));isNaN(m)&&(m=0);k.searchParams.set("reloads",(m+1).toString());l&&k.searchParams.set("uach",l);k.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());l=je(k.href).toString();pe(c,ke(l));c.sandbox.add("allow-presentation","allow-top-navigation");return l}):Nr.yt_embedsEnableIframeSrcWithIntent?(pe(c,ke(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Ac=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Qr(a){Kr(a.h,a,a.id);a.i=Tj(a.Ac.bind(a));Rj(a.g,"load",function(){window.clearInterval(a.i);a.i=Tj(a.Ac.bind(a))})}
function Tr(a,b){a.O[b]||(a.O[b]=!0,Ur(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[ac(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(vc){if(vc.name&&"SyntaxError"===vc.name){if(!(vc.message&&0<vc.message.indexOf("target origin ''"))){var e=void 0,f=vc;e=void 0===e?{}:e;e.name=R("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=R("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(S("console_log_js_exceptions")){var l=f,k=[];k.push("Name: "+l.name);k.push("Message: "+l.message);l.hasOwnProperty("params")&&k.push("Error Params: "+JSON.stringify(l.params));l.hasOwnProperty("args")&&k.push("Error args: "+JSON.stringify(l.args));k.push("File name: "+l.fileName);k.push("Stacktrace: "+l.stack);window.console.log(k.join("\n"),l)}if(!(5<=rr)){var m=void 0,n=void 0,q=f,p=e,t=qe(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(z+": "+u)){var P=G.split("\n");P.shift();G=P.join("\n")}var U=t.lineNumber||"Not available",Y=t.fileName||"Not available",La=G,Da=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ma=0;Ma<q.args.length&&!(Da=Hk(q.args[Ma],"params."+Ma,p,Da),500<=Da);Ma++);else if(q.hasOwnProperty("params")&&q.params){var ia=q.params;if("object"===typeof q.params)for(n in ia){if(ia[n]){var ra="params."+n,sa=Jk(ia[n]);p[ra]=sa;Da+=ra.length+
sa.length;if(500<Da)break}}else p.params=Jk(ia)}if(ur.length)for(var ha=0;ha<ur.length&&!(Da=Hk(ur[ha],"params.context."+ha,p,Da),500<=Da);ha++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:U,fileName:Y,stack:La,params:p,sampleWeight:1},Vm=Number(q.columnNumber);isNaN(Vm)||(W.lineNumber=W.lineNumber+":"+Vm);if("IGNORED"===q.level)m=0;else a:{for(var Wm=Dk(),Xm=w(Wm.Ca),Oh=Xm.next();!Oh.done;Oh=Xm.next()){var Ym=Oh.value;if(W.message&&
W.message.match(Ym.se)){m=Ym.weight;break a}}for(var Zm=w(Wm.za),Ph=Zm.next();!Ph.done;Ph=Zm.next()){var $m=Ph.value;if($m.ib(W)){m=$m.weight;break a}}m=1}W.sampleWeight=m;for(var an=w(yk),Qh=an.next();!Qh.done;Qh=an.next()){var Rh=Qh.value;if(Rh.Db[W.name])for(var bn=w(Rh.Db[W.name]),Sh=bn.next();!Sh.done;Sh=bn.next()){var cn=Sh.value,Re=W.message.match(cn.regexp);if(Re){W.params["params.error.original"]=Re[0];for(var Th=cn.groups,dn={},wc=0;wc<Th.length;wc++)dn[Th[wc]]=Re[wc+1],W.params["params.error."+
Th[wc]]=Re[wc+1];W.message=Rh.Rb(dn);break}}}W.params||(W.params={});var en=Dk();W.params["params.errorServiceSignature"]="msg="+en.Ca.length+"&cb="+en.za.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));wb("sample").constructor!==ub&&(W.params["params.fconst"]="true");var pd=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(pd);if(0!==pd.sampleWeight&&
!qr.has(pd.message))if(h&&S("web_enable_error_204")){var fn=pd;yr(void 0===g?"ERROR":g,fn);wr(fn)}else{var Uh=void 0,Vh=void 0,gn=void 0,hn=void 0,Wh=void 0,O=pd,Rb=g;Rb=void 0===Rb?"ERROR":Rb;if("ERROR"===Rb){Ek.ab("handleError",O);if(S("record_app_crashed_web")&&0===tr&&1===O.sampleWeight)if(tr++,S("errors_via_jspb")){var $r=new oj;Wh=$d($r,1,1);if(!S("report_client_error_with_app_crash_ks")){var as=new nj,bs=new mj,cs=new lj,ds=new kj;var es=J(ds,1,O.message);var fs=I(cs,kj,3,es);hn=I(bs,lj,5,
fs);gn=I(as,mj,9,hn);I(Wh,nj,4,gn)}var jn=S("jspb_sparse_encoded_pivot")?new rj([{}]):new rj;Td(jn,oj,20,sj,Wh);pr("appCrashed",jn)}else{var kn={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};S("report_client_error_with_app_crash_ks")||(kn.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});nr("appCrashed",kn)}sr++}else"WARNING"===Rb&&Ek.ab("handleWarning",O);if(S("kevlar_gel_error_routing"))a:{var qd=Rb;if(S("errors_via_jspb")){if(xr())Vh=void 0;else{var xc=new hj;J(xc,1,O.stack);O.fileName&&
J(xc,4,O.fileName);var ib=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==ib.length&&(1!==ib.length||isNaN(Number(ib[0]))?2!==ib.length||isNaN(Number(ib[0]))||isNaN(Number(ib[1]))||(Zd(xc,2,Number(ib[0])),Zd(xc,3,Number(ib[1]))):Zd(xc,2,Number(ib[0])));var Sb=new kj;J(Sb,1,O.message);J(Sb,3,O.name);Zd(Sb,6,O.sampleWeight);"ERROR"===qd?$d(Sb,2,2):"WARNING"===qd?$d(Sb,2,1):$d(Sb,2,0);var Xh=new ij;Md(Xh,1,ld(!0));Td(Xh,hj,3,jj,xc);var Tb=new gj;J(Tb,3,window.location.href);for(var ln=
R("FEXP_EXPERIMENTS",[]),Yh=0;Yh<ln.length;Yh++){var Zh=void 0,$h=Tb.s,ai=ln[Yh],rd=Wc($h);id(rd);var mn=rd&2,Fa=Ld($h,rd,5);Array.isArray(Fa)||(Fa=gd);var nn=!!(rd&32),jb=Vc(Fa);0===jb&&nn&&!mn?(jb|=33,Xc(Fa,jb)):jb&1||(jb|=1,Xc(Fa,jb));if(mn)jb&2||Sc(Fa,34),Object.freeze(Fa);else if(2&jb||2048&jb){Fa=Qc(Fa);var on=1;nn&&(on|=32);Xc(Fa,on);Nd($h,rd,5,Fa)}Zh=Fa;var pn=Vc(Zh);ai=od(ai,!!(4&pn)&&!!(4096&pn));Zh.push(ai)}var bi=Bj();if(!Cj()&&bi)for(var qn=w(Object.keys(bi)),ci=qn.next();!ci.done;ci=
qn.next()){var rn=ci.value,di=new fj;J(di,1,rn);J(di,2,String(bi[rn]));Vd(Tb,4,fj,di)}var ei=O.params;if(ei)for(var sn=w(Object.keys(ei)),fi=sn.next();!fi.done;fi=sn.next()){var tn=fi.value,gi=new fj;J(gi,1,"client."+tn);J(gi,2,String(ei[tn]));Vd(Tb,4,fj,gi)}var un=R("SERVER_NAME"),vn=R("SERVER_VERSION");if(un&&vn){var hi=new fj;J(hi,1,"server.name");J(hi,2,un);Vd(Tb,4,fj,hi);var ii=new fj;J(ii,1,"server.version");J(ii,2,vn);Vd(Tb,4,fj,ii)}var Se=new lj;I(Se,gj,1,Tb);I(Se,ij,2,Xh);I(Se,kj,3,Sb);Vh=
Se}var wn=Vh;if(!wn)break a;var xn=S("jspb_sparse_encoded_pivot")?new rj([{}]):new rj;Td(xn,lj,163,sj,wn);pr("clientError",xn)}else{var Pa=void 0;Pa=void 0===Pa?{}:Pa;if(xr())Uh=void 0;else{var sd={stackTrace:O.stack};O.fileName&&(sd.filename=O.fileName);var kb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==kb.length&&(1!==kb.length||isNaN(Number(kb[0]))?2!==kb.length||isNaN(Number(kb[0]))||isNaN(Number(kb[1]))||(sd.lineNumber=Number(kb[0]),sd.columnNumber=Number(kb[1])):sd.lineNumber=
Number(kb[0]));var ji={level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===qd?ji.level="ERROR_LEVEL_ERROR":"WARNING"===qd&&(ji.level="ERROR_LEVEL_WARNNING");var gs={isObfuscated:!0,browserStackInfo:sd};Pa.pageUrl=window.location.href;Pa.kvPairs=[];R("FEXP_EXPERIMENTS")&&(Pa.experimentIds=R("FEXP_EXPERIMENTS"));var ki=Bj();if(!Cj()&&ki)for(var yn=w(Object.keys(ki)),li=yn.next();!li.done;li=yn.next()){var zn=li.value;Pa.kvPairs.push({key:zn,value:String(ki[zn])})}var mi=
O.params;if(mi)for(var An=w(Object.keys(mi)),ni=An.next();!ni.done;ni=An.next()){var Bn=ni.value;Pa.kvPairs.push({key:"client."+Bn,value:String(mi[Bn])})}var Cn=R("SERVER_NAME"),Dn=R("SERVER_VERSION");Cn&&Dn&&(Pa.kvPairs.push({key:"server.name",value:Cn}),Pa.kvPairs.push({key:"server.version",value:Dn}));Uh={errorMetadata:Pa,stackTrace:gs,logMessage:ji}}var En=Uh;if(!En)break a;nr("clientError",En)}if("ERROR"===qd||S("errors_flush_gel_always_killswitch"))b:{if(S("web_fp_via_jspb")){var Te=!0;Te=void 0===
Te?!1:Te;var Fn=mr;mr=[];if(Fn)for(var Gn=w(Fn),oi=Gn.next();!oi.done;oi=Gn.next()){var yc=oi.value;Te?jr(yc.zc,yc.payload,Fp,yc.options):nr(yc.zc,yc.payload,yc.options)}lr(!0);if(!S("web_fp_via_jspb_and_json"))break b}lr()}}S("suppress_error_204_logging")||yr(Rb,O);wr(O)}}}}}else throw vc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Vr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Wr(a){return 0===a.search("get")||0===a.search("is")}
;function Xr(a,b){Or.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(Xr,Or);r=Xr.prototype;r.jc=function(){var a=Jr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Jr(this.h,"embedConfig")){if(Oa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.ec=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Oa(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":Yr(this,a);break;case "initialDelivery":Oa(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},Zr(this,a.apiInterface),Yr(this,a));break;default:Sr(this,b,a)}};
function Yr(a,b){if(Oa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Jr(a.h,"title"))))}}
function Zr(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Vr(c)?this[c]=function(){this.playerInfo={};
this.ka={};Ur(this,c,arguments);return this}:Wr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Ur(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Jr(this.h,"host")+("/embed/"+Jr(this.h,"videoId")),b=Number(Jr(this.h,"width")),c=Number(Jr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Xb(a);d=Xb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function hs(a){if("iframe"!==a.tagName.toLowerCase()){var b=Gr(a,"videoid");b&&(b={videoId:b,width:Gr(a,"width"),height:Gr(a,"height")},new Xr(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Cr[a]});
E("YT.scan",Fr);E("YT.subscribe",function(a,b,c){Ig.subscribe(a,b,c);Er[a]=!0;for(var d in Cr)Cr.hasOwnProperty(d)&&Rr(Cr[d],a)});
E("YT.unsubscribe",function(a,b,c){Hg(a,b,c)});
E("YT.Player",Xr);Or.prototype.destroy=Or.prototype.destroy;Or.prototype.setSize=Or.prototype.setSize;Or.prototype.getIframe=Or.prototype.getIframe;Or.prototype.addEventListener=Or.prototype.addEventListener;Xr.prototype.getVideoEmbedCode=Xr.prototype.getVideoEmbedCode;Xr.prototype.getOptions=Xr.prototype.getOptions;Xr.prototype.getOption=Xr.prototype.getOption;
Dr.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);db(fb(a,b),hs)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Fr();var is=C.onYTReady;is&&is();var js=C.onYouTubeIframeAPIReady;js&&js();var ks=C.onYouTubePlayerAPIReady;ks&&ks();}).call(this);
