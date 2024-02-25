// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,f=/e\+(\d)$/,d=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,m=/\.0*e/,y=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=p.call(n,y,"$1e"),n=p.call(n,m,"e"),n=p.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=p.call(n,f,"e+0$1"),n=p.call(n,d,"e-0$1"),e.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===l.call(e.specifier)?l.call(n):u.call(n)}function w(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,S=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,t,n,a,o,s,u,l,p,f,d,g,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",u=1,l=0;l<e.length;l++)if("string"==typeof(n=e[l]))s+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,E(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,d=n.width,g=n.padRight,h=void 0,(h=d-f.length)<0?f:f=g?f+w(h):w(h)+f)),s+=n.arg||"",u+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function I(e){var r,t,n,i;for(t=[],i=0,n=j.exec(e);n;)(r=e.slice(i,j.lastIndex-n[0].length)).length&&t.push(r),t.push(k(n)),i=j.lastIndex,n=j.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function O(e){var r,t;if("string"!=typeof e)throw new TypeError(O("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[I(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return T.apply(null,r)}var V=Object.prototype,F=V.toString,N=V.__defineGetter__,P=V.__defineSetter__,$=V.__lookupGetter__,A=V.__lookupSetter__,C=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(O("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(O("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(e,r)||A.call(e,r)?(n=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,t.get),o&&P&&P.call(e,r,t.set),e};function R(e,r,t){C(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e){return"number"==typeof e}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return Z&&"symbol"==typeof Symbol.toStringTag}var L=Object.prototype.toString,U=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,M="function"==typeof D?D.toStringTag:"",X=W()?function(e){var r,t,n,i,a;if(null==e)return L.call(e);t=e[M],a=M,r=null!=(i=e)&&U.call(i,a);try{e[M]=void 0}catch(r){return L.call(e)}return n=L.call(e),r?e[M]=t:delete e[M],n}:function(e){return L.call(e)},Y=Number,z=Y.prototype.toString,q=W();function B(e){return"object"==typeof e&&(e instanceof Y||(q?function(e){try{return z.call(e),!0}catch(e){return!1}}(e):"[object Number]"===X(e)))}function H(e){return G(e)||B(e)}R(H,"isPrimitive",G),R(H,"isObject",B);var J=Number.POSITIVE_INFINITY,K=Y.NEGATIVE_INFINITY,Q=Math.floor;function ee(e){return e<J&&e>K&&Q(r=e)===r;var r}function re(e){return G(e)&&ee(e)}function te(e){return B(e)&&ee(e.valueOf())}function ne(e){return re(e)||te(e)}function ie(e){return re(e)&&e>=0}function ae(e){return te(e)&&e.valueOf()>=0}function oe(e){return ie(e)||ae(e)}function ce(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}return R(ne,"isPrimitive",re),R(ne,"isObject",te),R(oe,"isPrimitive",ie),R(oe,"isObject",ae),function(e,r){var t;if("object"!=typeof e||null===e)throw new TypeError(ce("1o14f",e));if(!re(r))throw new TypeError(ce("1o17f",r));if(ie(t=function(e,r){var t,n,i,a;if(t=function(e){var r=e.ndims;return"number"==typeof r?r:e.shape.length}(e),0===t)throw new TypeError(O("invalid argument. First argument must be an ndarray having one or more dimensions. Number of dimensions: %d.",t));if(a=t-1,-1===(n=(i=r)<0?(i+=a+1)<0?-1:i:i>a?-1:i))throw new RangeError(O("invalid argument. Dimension index exceeds the number of dimensions. Number of dimensions: %d. Value: `%d`.",t,r));return function(e,r){var t=e.shape;return r?function(e){var r,t,n;for(t=e.length,r=[],n=0;n<t;n++)r.push(e[n]);return r}(t):t}(e,!1)[n]}(e,r)))return t;throw new TypeError(ce("1o14f",e))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).numelDimension=r();
//# sourceMappingURL=browser.js.map
