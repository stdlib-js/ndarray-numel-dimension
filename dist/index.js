"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var a=u(function(d,t){
var s=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/assert-is-integer/dist').isPrimitive,m=require('@stdlib/ndarray-base-numel-dimension/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function v(e,r){var i;if(typeof e!="object"||e===null)throw new TypeError(n('1o14f',e));if(!o(r))throw new TypeError(n('1o17f',r));if(i=m(e,r),s(i))return i;throw new TypeError(n('1o14f',e))}t.exports=v
});var g=a();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
