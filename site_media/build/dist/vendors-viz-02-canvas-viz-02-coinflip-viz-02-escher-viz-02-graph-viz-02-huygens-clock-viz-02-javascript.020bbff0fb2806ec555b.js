/*! For license information please see vendors-viz-02-canvas-viz-02-coinflip-viz-02-escher-viz-02-graph-viz-02-huygens-clock-viz-02-javascript.020bbff0fb2806ec555b.js.LICENSE */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{1312:function(t,r){var e={utf8:{stringToBytes:function(t){return e.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(e.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var r=[],e=0;e<t.length;e++)r.push(t.charCodeAt(e)&255);return r},bytesToString:function(t){for(var r=[],e=0;e<t.length;e++)r.push(String.fromCharCode(t[e]));return r.join("")}}};t.exports=e},1413:function(t,r){(function(){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e={rotl:function(t,r){return t<<r|t>>>32-r},rotr:function(t,r){return t<<32-r|t>>>r},endian:function(t){if(t.constructor==Number){return e.rotl(t,8)&16711935|e.rotl(t,24)&4278255360}for(var r=0;r<t.length;r++)t[r]=e.endian(t[r]);return t},randomBytes:function(t){for(var r=[];t>0;t--)r.push(Math.floor(Math.random()*256));return r},bytesToWords:function(t){for(var r=[],e=0,n=0;e<t.length;e++,n+=8)r[n>>>5]|=t[e]<<24-n%32;return r},wordsToBytes:function(t){for(var r=[],e=0;e<t.length*32;e+=8)r.push(t[e>>>5]>>>24-e%32&255);return r},bytesToHex:function(t){for(var r=[],e=0;e<t.length;e++){r.push((t[e]>>>4).toString(16));r.push((t[e]&15).toString(16))}return r.join("")},hexToBytes:function(t){for(var r=[],e=0;e<t.length;e+=2)r.push(parseInt(t.substr(e,2),16));return r},bytesToBase64:function(t){for(var e=[],n=0;n<t.length;n+=3){var i=t[n]<<16|t[n+1]<<8|t[n+2];for(var f=0;f<4;f++)if(n*8+f*6<=t.length*8)e.push(r.charAt(i>>>6*(3-f)&63));else e.push("=")}return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],n=0,i=0;n<t.length;i=++n%4){if(i==0)continue;e.push((r.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<i*2|r.indexOf(t.charAt(n))>>>6-i*2)}return e}};t.exports=e})()},17:function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){if(typeof window==="object")e=window}t.exports=e},26:function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return e.call(t)=="[object Array]"}},436:function(t,r,e){"use strict";r.byteLength=h;r.toByteArray=l;r.fromByteArray=g;var n=[];var i=[];var f=typeof Uint8Array!=="undefined"?Uint8Array:Array;var o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var u=0,s=o.length;u<s;++u){n[u]=o[u];i[o.charCodeAt(u)]=u}i["-".charCodeAt(0)]=62;i["_".charCodeAt(0)]=63;function a(t){var r=t.length;if(r%4>0){throw new Error("Invalid string. Length must be a multiple of 4")}return t[r-2]==="="?2:t[r-1]==="="?1:0}function h(t){return t.length*3/4-a(t)}function l(t){var r,e,n,o,u;var s=t.length;o=a(t);u=new f(s*3/4-o);e=o>0?s-4:s;var h=0;for(r=0;r<e;r+=4){n=i[t.charCodeAt(r)]<<18|i[t.charCodeAt(r+1)]<<12|i[t.charCodeAt(r+2)]<<6|i[t.charCodeAt(r+3)];u[h++]=n>>16&255;u[h++]=n>>8&255;u[h++]=n&255}if(o===2){n=i[t.charCodeAt(r)]<<2|i[t.charCodeAt(r+1)]>>4;u[h++]=n&255}else if(o===1){n=i[t.charCodeAt(r)]<<10|i[t.charCodeAt(r+1)]<<4|i[t.charCodeAt(r+2)]>>2;u[h++]=n>>8&255;u[h++]=n&255}return u}function c(t){return n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[t&63]}function p(t,r,e){var n;var i=[];for(var f=r;f<e;f+=3){n=(t[f]<<16&16711680)+(t[f+1]<<8&65280)+(t[f+2]&255);i.push(c(n))}return i.join("")}function g(t){var r;var e=t.length;var i=e%3;var f="";var o=[];var u=16383;for(var s=0,a=e-i;s<a;s+=u){o.push(p(t,s,s+u>a?a:s+u))}if(i===1){r=t[e-1];f+=n[r>>2];f+=n[r<<4&63];f+="=="}else if(i===2){r=(t[e-2]<<8)+t[e-1];f+=n[r>>10];f+=n[r>>4&63];f+=n[r<<2&63];f+="="}o.push(f);return o.join("")}},437:function(t,r){r.read=function(t,r,e,n,i){var f,o;var u=i*8-n-1;var s=(1<<u)-1;var a=s>>1;var h=-7;var l=e?i-1:0;var c=e?-1:1;var p=t[r+l];l+=c;f=p&(1<<-h)-1;p>>=-h;h+=u;for(;h>0;f=f*256+t[r+l],l+=c,h-=8){}o=f&(1<<-h)-1;f>>=-h;h+=n;for(;h>0;o=o*256+t[r+l],l+=c,h-=8){}if(f===0){f=1-a}else if(f===s){return o?NaN:(p?-1:1)*Infinity}else{o=o+Math.pow(2,n);f=f-a}return(p?-1:1)*o*Math.pow(2,f-n)};r.write=function(t,r,e,n,i,f){var o,u,s;var a=f*8-i-1;var h=(1<<a)-1;var l=h>>1;var c=i===23?Math.pow(2,-24)-Math.pow(2,-77):0;var p=n?0:f-1;var g=n?1:-1;var y=r<0||r===0&&1/r<0?1:0;r=Math.abs(r);if(isNaN(r)||r===Infinity){u=isNaN(r)?1:0;o=h}else{o=Math.floor(Math.log(r)/Math.LN2);if(r*(s=Math.pow(2,-o))<1){o--;s*=2}if(o+l>=1){r+=c/s}else{r+=c*Math.pow(2,1-l)}if(r*s>=2){o++;s/=2}if(o+l>=h){u=0;o=h}else if(o+l>=1){u=(r*s-1)*Math.pow(2,i);o=o+l}else{u=r*Math.pow(2,l-1)*Math.pow(2,i);o=0}}for(;i>=8;t[e+p]=u&255,p+=g,u/=256,i-=8){}o=o<<i|u;a+=i;for(;a>0;t[e+p]=o&255,p+=g,o/=256,a-=8){}t[e+p-g]|=y*128}},57:function(t,r,e){"use strict";(function(t){var n=e(436);var i=e(437);var f=e(26);r.Buffer=a;r.SlowBuffer=A;r.INSPECT_MAX_BYTES=50;a.TYPED_ARRAY_SUPPORT=t.TYPED_ARRAY_SUPPORT!==undefined?t.TYPED_ARRAY_SUPPORT:o();r.kMaxLength=u();function o(){try{var t=new Uint8Array(1);t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}};return t.foo()===42&&typeof t.subarray==="function"&&t.subarray(1,1).byteLength===0}catch(t){return false}}function u(){return a.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function s(t,r){if(u()<r){throw new RangeError("Invalid typed array length")}if(a.TYPED_ARRAY_SUPPORT){t=new Uint8Array(r);t.__proto__=a.prototype}else{if(t===null){t=new a(r)}t.length=r}return t}function a(t,r,e){if(!a.TYPED_ARRAY_SUPPORT&&!(this instanceof a)){return new a(t,r,e)}if(typeof t==="number"){if(typeof r==="string"){throw new Error("If encoding is specified then the first argument must be a string")}return p(this,t)}return h(this,t,r,e)}a.poolSize=8192;a._augment=function(t){t.__proto__=a.prototype;return t};function h(t,r,e,n){if(typeof r==="number"){throw new TypeError('"value" argument must not be a number')}if(typeof ArrayBuffer!=="undefined"&&r instanceof ArrayBuffer){return v(t,r,e,n)}if(typeof r==="string"){return g(t,r,e)}return w(t,r)}a.from=function(t,r,e){return h(null,t,r,e)};if(a.TYPED_ARRAY_SUPPORT){a.prototype.__proto__=Uint8Array.prototype;a.__proto__=Uint8Array;if(typeof Symbol!=="undefined"&&Symbol.species&&a[Symbol.species]===a){Object.defineProperty(a,Symbol.species,{value:null,configurable:true})}}function l(t){if(typeof t!=="number"){throw new TypeError('"size" argument must be a number')}else if(t<0){throw new RangeError('"size" argument must not be negative')}}function c(t,r,e,n){l(r);if(r<=0){return s(t,r)}if(e!==undefined){return typeof n==="string"?s(t,r).fill(e,n):s(t,r).fill(e)}return s(t,r)}a.alloc=function(t,r,e){return c(null,t,r,e)};function p(t,r){l(r);t=s(t,r<0?0:d(r)|0);if(!a.TYPED_ARRAY_SUPPORT){for(var e=0;e<r;++e){t[e]=0}}return t}a.allocUnsafe=function(t){return p(null,t)};a.allocUnsafeSlow=function(t){return p(null,t)};function g(t,r,e){if(typeof e!=="string"||e===""){e="utf8"}if(!a.isEncoding(e)){throw new TypeError('"encoding" must be a valid string encoding')}var n=b(r,e)|0;t=s(t,n);var i=t.write(r,e);if(i!==n){t=t.slice(0,i)}return t}function y(t,r){var e=r.length<0?0:d(r.length)|0;t=s(t,e);for(var n=0;n<e;n+=1){t[n]=r[n]&255}return t}function v(t,r,e,n){r.byteLength;if(e<0||r.byteLength<e){throw new RangeError("'offset' is out of bounds")}if(r.byteLength<e+(n||0)){throw new RangeError("'length' is out of bounds")}if(e===undefined&&n===undefined){r=new Uint8Array(r)}else if(n===undefined){r=new Uint8Array(r,e)}else{r=new Uint8Array(r,e,n)}if(a.TYPED_ARRAY_SUPPORT){t=r;t.__proto__=a.prototype}else{t=y(t,r)}return t}function w(t,r){if(a.isBuffer(r)){var e=d(r.length)|0;t=s(t,e);if(t.length===0){return t}r.copy(t,0,0,e);return t}if(r){if(typeof ArrayBuffer!=="undefined"&&r.buffer instanceof ArrayBuffer||"length"in r){if(typeof r.length!=="number"||rt(r.length)){return s(t,0)}return y(t,r)}if(r.type==="Buffer"&&f(r.data)){return y(t,r.data)}}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=u()){throw new RangeError("Attempt to allocate Buffer larger than maximum "+"size: 0x"+u().toString(16)+" bytes")}return t|0}function A(t){if(+t!=t){t=0}return a.alloc(+t)}a.isBuffer=function t(r){return!!(r!=null&&r._isBuffer)};a.compare=function t(r,e){if(!a.isBuffer(r)||!a.isBuffer(e)){throw new TypeError("Arguments must be Buffers")}if(r===e)return 0;var n=r.length;var i=e.length;for(var f=0,o=Math.min(n,i);f<o;++f){if(r[f]!==e[f]){n=r[f];i=e[f];break}}if(n<i)return-1;if(i<n)return 1;return 0};a.isEncoding=function t(r){switch(String(r).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return true;default:return false}};a.concat=function t(r,e){if(!f(r)){throw new TypeError('"list" argument must be an Array of Buffers')}if(r.length===0){return a.alloc(0)}var n;if(e===undefined){e=0;for(n=0;n<r.length;++n){e+=r[n].length}}var i=a.allocUnsafe(e);var o=0;for(n=0;n<r.length;++n){var u=r[n];if(!a.isBuffer(u)){throw new TypeError('"list" argument must be an Array of Buffers')}u.copy(i,o);o+=u.length}return i};function b(t,r){if(a.isBuffer(t)){return t.length}if(typeof ArrayBuffer!=="undefined"&&typeof ArrayBuffer.isView==="function"&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer)){return t.byteLength}if(typeof t!=="string"){t=""+t}var e=t.length;if(e===0)return 0;var n=false;for(;;){switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case undefined:return G(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return $(t).length;default:if(n)return G(t).length;r=(""+r).toLowerCase();n=true}}}a.byteLength=b;function E(t,r,e){var n=false;if(r===undefined||r<0){r=0}if(r>this.length){return""}if(e===undefined||e>this.length){e=this.length}if(e<=0){return""}e>>>=0;r>>>=0;if(e<=r){return""}if(!t)t="utf8";while(true){switch(t){case"hex":return D(this,r,e);case"utf8":case"utf-8":return C(this,r,e);case"ascii":return L(this,r,e);case"latin1":case"binary":return x(this,r,e);case"base64":return Y(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase();n=true}}}a.prototype._isBuffer=true;function R(t,r,e){var n=t[r];t[r]=t[e];t[e]=n}a.prototype.swap16=function t(){var r=this.length;if(r%2!==0){throw new RangeError("Buffer size must be a multiple of 16-bits")}for(var e=0;e<r;e+=2){R(this,e,e+1)}return this};a.prototype.swap32=function t(){var r=this.length;if(r%4!==0){throw new RangeError("Buffer size must be a multiple of 32-bits")}for(var e=0;e<r;e+=4){R(this,e,e+3);R(this,e+1,e+2)}return this};a.prototype.swap64=function t(){var r=this.length;if(r%8!==0){throw new RangeError("Buffer size must be a multiple of 64-bits")}for(var e=0;e<r;e+=8){R(this,e,e+7);R(this,e+1,e+6);R(this,e+2,e+5);R(this,e+3,e+4)}return this};a.prototype.toString=function t(){var r=this.length|0;if(r===0)return"";if(arguments.length===0)return C(this,0,r);return E.apply(this,arguments)};a.prototype.equals=function t(r){if(!a.isBuffer(r))throw new TypeError("Argument must be a Buffer");if(this===r)return true;return a.compare(this,r)===0};a.prototype.inspect=function t(){var e="";var n=r.INSPECT_MAX_BYTES;if(this.length>0){e=this.toString("hex",0,n).match(/.{2}/g).join(" ");if(this.length>n)e+=" ... "}return"<Buffer "+e+">"};a.prototype.compare=function t(r,e,n,i,f){if(!a.isBuffer(r)){throw new TypeError("Argument must be a Buffer")}if(e===undefined){e=0}if(n===undefined){n=r?r.length:0}if(i===undefined){i=0}if(f===undefined){f=this.length}if(e<0||n>r.length||i<0||f>this.length){throw new RangeError("out of range index")}if(i>=f&&e>=n){return 0}if(i>=f){return-1}if(e>=n){return 1}e>>>=0;n>>>=0;i>>>=0;f>>>=0;if(this===r)return 0;var o=f-i;var u=n-e;var s=Math.min(o,u);var h=this.slice(i,f);var l=r.slice(e,n);for(var c=0;c<s;++c){if(h[c]!==l[c]){o=h[c];u=l[c];break}}if(o<u)return-1;if(u<o)return 1;return 0};function _(t,r,e,n,i){if(t.length===0)return-1;if(typeof e==="string"){n=e;e=0}else if(e>2147483647){e=2147483647}else if(e<-2147483648){e=-2147483648}e=+e;if(isNaN(e)){e=i?0:t.length-1}if(e<0)e=t.length+e;if(e>=t.length){if(i)return-1;else e=t.length-1}else if(e<0){if(i)e=0;else return-1}if(typeof r==="string"){r=a.from(r,n)}if(a.isBuffer(r)){if(r.length===0){return-1}return m(t,r,e,n,i)}else if(typeof r==="number"){r=r&255;if(a.TYPED_ARRAY_SUPPORT&&typeof Uint8Array.prototype.indexOf==="function"){if(i){return Uint8Array.prototype.indexOf.call(t,r,e)}else{return Uint8Array.prototype.lastIndexOf.call(t,r,e)}}return m(t,[r],e,n,i)}throw new TypeError("val must be string, number or Buffer")}function m(t,r,e,n,i){var f=1;var o=t.length;var u=r.length;if(n!==undefined){n=String(n).toLowerCase();if(n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="utf-16le"){if(t.length<2||r.length<2){return-1}f=2;o/=2;u/=2;e/=2}}function s(t,r){if(f===1){return t[r]}else{return t.readUInt16BE(r*f)}}var a;if(i){var h=-1;for(a=e;a<o;a++){if(s(t,a)===s(r,h===-1?0:a-h)){if(h===-1)h=a;if(a-h+1===u)return h*f}else{if(h!==-1)a-=a-h;h=-1}}}else{if(e+u>o)e=o-u;for(a=e;a>=0;a--){var l=true;for(var c=0;c<u;c++){if(s(t,a+c)!==s(r,c)){l=false;break}}if(l)return a}}return-1}a.prototype.includes=function t(r,e,n){return this.indexOf(r,e,n)!==-1};a.prototype.indexOf=function t(r,e,n){return _(this,r,e,n,true)};a.prototype.lastIndexOf=function t(r,e,n){return _(this,r,e,n,false)};function T(t,r,e,n){e=Number(e)||0;var i=t.length-e;if(!n){n=i}else{n=Number(n);if(n>i){n=i}}var f=r.length;if(f%2!==0)throw new TypeError("Invalid hex string");if(n>f/2){n=f/2}for(var o=0;o<n;++o){var u=parseInt(r.substr(o*2,2),16);if(isNaN(u))return o;t[e+o]=u}return o}function B(t,r,e,n){return tt(G(r,t.length-e),t,e,n)}function P(t,r,e,n){return tt(K(r),t,e,n)}function S(t,r,e,n){return P(t,r,e,n)}function U(t,r,e,n){return tt($(r),t,e,n)}function I(t,r,e,n){return tt(Q(r,t.length-e),t,e,n)}a.prototype.write=function t(r,e,n,i){if(e===undefined){i="utf8";n=this.length;e=0}else if(n===undefined&&typeof e==="string"){i=e;n=this.length;e=0}else if(isFinite(e)){e=e|0;if(isFinite(n)){n=n|0;if(i===undefined)i="utf8"}else{i=n;n=undefined}}else{throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported")}var f=this.length-e;if(n===undefined||n>f)n=f;if(r.length>0&&(n<0||e<0)||e>this.length){throw new RangeError("Attempt to write outside buffer bounds")}if(!i)i="utf8";var o=false;for(;;){switch(i){case"hex":return T(this,r,e,n);case"utf8":case"utf-8":return B(this,r,e,n);case"ascii":return P(this,r,e,n);case"latin1":case"binary":return S(this,r,e,n);case"base64":return U(this,r,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,r,e,n);default:if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase();o=true}}};a.prototype.toJSON=function t(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Y(t,r,e){if(r===0&&e===t.length){return n.fromByteArray(t)}else{return n.fromByteArray(t.slice(r,e))}}function C(t,r,e){e=Math.min(t.length,e);var n=[];var i=r;while(i<e){var f=t[i];var o=null;var u=f>239?4:f>223?3:f>191?2:1;if(i+u<=e){var s,a,h,l;switch(u){case 1:if(f<128){o=f}break;case 2:s=t[i+1];if((s&192)===128){l=(f&31)<<6|s&63;if(l>127){o=l}}break;case 3:s=t[i+1];a=t[i+2];if((s&192)===128&&(a&192)===128){l=(f&15)<<12|(s&63)<<6|a&63;if(l>2047&&(l<55296||l>57343)){o=l}}break;case 4:s=t[i+1];a=t[i+2];h=t[i+3];if((s&192)===128&&(a&192)===128&&(h&192)===128){l=(f&15)<<18|(s&63)<<12|(a&63)<<6|h&63;if(l>65535&&l<1114112){o=l}}}}if(o===null){o=65533;u=1}else if(o>65535){o-=65536;n.push(o>>>10&1023|55296);o=56320|o&1023}n.push(o);i+=u}return O(n)}var M=4096;function O(t){var r=t.length;if(r<=M){return String.fromCharCode.apply(String,t)}var e="";var n=0;while(n<r){e+=String.fromCharCode.apply(String,t.slice(n,n+=M))}return e}function L(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i){n+=String.fromCharCode(t[i]&127)}return n}function x(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i){n+=String.fromCharCode(t[i])}return n}function D(t,r,e){var n=t.length;if(!r||r<0)r=0;if(!e||e<0||e>n)e=n;var i="";for(var f=r;f<e;++f){i+=q(t[f])}return i}function k(t,r,e){var n=t.slice(r,e);var i="";for(var f=0;f<n.length;f+=2){i+=String.fromCharCode(n[f]+n[f+1]*256)}return i}a.prototype.slice=function t(r,e){var n=this.length;r=~~r;e=e===undefined?n:~~e;if(r<0){r+=n;if(r<0)r=0}else if(r>n){r=n}if(e<0){e+=n;if(e<0)e=0}else if(e>n){e=n}if(e<r)e=r;var i;if(a.TYPED_ARRAY_SUPPORT){i=this.subarray(r,e);i.__proto__=a.prototype}else{var f=e-r;i=new a(f,undefined);for(var o=0;o<f;++o){i[o]=this[o+r]}}return i};function N(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUIntLE=function t(r,e,n){r=r|0;e=e|0;if(!n)N(r,e,this.length);var i=this[r];var f=1;var o=0;while(++o<e&&(f*=256)){i+=this[r+o]*f}return i};a.prototype.readUIntBE=function t(r,e,n){r=r|0;e=e|0;if(!n){N(r,e,this.length)}var i=this[r+--e];var f=1;while(e>0&&(f*=256)){i+=this[r+--e]*f}return i};a.prototype.readUInt8=function t(r,e){if(!e)N(r,1,this.length);return this[r]};a.prototype.readUInt16LE=function t(r,e){if(!e)N(r,2,this.length);return this[r]|this[r+1]<<8};a.prototype.readUInt16BE=function t(r,e){if(!e)N(r,2,this.length);return this[r]<<8|this[r+1]};a.prototype.readUInt32LE=function t(r,e){if(!e)N(r,4,this.length);return(this[r]|this[r+1]<<8|this[r+2]<<16)+this[r+3]*16777216};a.prototype.readUInt32BE=function t(r,e){if(!e)N(r,4,this.length);return this[r]*16777216+(this[r+1]<<16|this[r+2]<<8|this[r+3])};a.prototype.readIntLE=function t(r,e,n){r=r|0;e=e|0;if(!n)N(r,e,this.length);var i=this[r];var f=1;var o=0;while(++o<e&&(f*=256)){i+=this[r+o]*f}f*=128;if(i>=f)i-=Math.pow(2,8*e);return i};a.prototype.readIntBE=function t(r,e,n){r=r|0;e=e|0;if(!n)N(r,e,this.length);var i=e;var f=1;var o=this[r+--i];while(i>0&&(f*=256)){o+=this[r+--i]*f}f*=128;if(o>=f)o-=Math.pow(2,8*e);return o};a.prototype.readInt8=function t(r,e){if(!e)N(r,1,this.length);if(!(this[r]&128))return this[r];return(255-this[r]+1)*-1};a.prototype.readInt16LE=function t(r,e){if(!e)N(r,2,this.length);var n=this[r]|this[r+1]<<8;return n&32768?n|4294901760:n};a.prototype.readInt16BE=function t(r,e){if(!e)N(r,2,this.length);var n=this[r+1]|this[r]<<8;return n&32768?n|4294901760:n};a.prototype.readInt32LE=function t(r,e){if(!e)N(r,4,this.length);return this[r]|this[r+1]<<8|this[r+2]<<16|this[r+3]<<24};a.prototype.readInt32BE=function t(r,e){if(!e)N(r,4,this.length);return this[r]<<24|this[r+1]<<16|this[r+2]<<8|this[r+3]};a.prototype.readFloatLE=function t(r,e){if(!e)N(r,4,this.length);return i.read(this,r,true,23,4)};a.prototype.readFloatBE=function t(r,e){if(!e)N(r,4,this.length);return i.read(this,r,false,23,4)};a.prototype.readDoubleLE=function t(r,e){if(!e)N(r,8,this.length);return i.read(this,r,true,52,8)};a.prototype.readDoubleBE=function t(r,e){if(!e)N(r,8,this.length);return i.read(this,r,false,52,8)};function j(t,r,e,n,i,f){if(!a.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<f)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}a.prototype.writeUIntLE=function t(r,e,n,i){r=+r;e=e|0;n=n|0;if(!i){var f=Math.pow(2,8*n)-1;j(this,r,e,n,f,0)}var o=1;var u=0;this[e]=r&255;while(++u<n&&(o*=256)){this[e+u]=r/o&255}return e+n};a.prototype.writeUIntBE=function t(r,e,n,i){r=+r;e=e|0;n=n|0;if(!i){var f=Math.pow(2,8*n)-1;j(this,r,e,n,f,0)}var o=n-1;var u=1;this[e+o]=r&255;while(--o>=0&&(u*=256)){this[e+o]=r/u&255}return e+n};a.prototype.writeUInt8=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,1,255,0);if(!a.TYPED_ARRAY_SUPPORT)r=Math.floor(r);this[e]=r&255;return e+1};function z(t,r,e,n){if(r<0)r=65535+r+1;for(var i=0,f=Math.min(t.length-e,2);i<f;++i){t[e+i]=(r&255<<8*(n?i:1-i))>>>(n?i:1-i)*8}}a.prototype.writeUInt16LE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,2,65535,0);if(a.TYPED_ARRAY_SUPPORT){this[e]=r&255;this[e+1]=r>>>8}else{z(this,r,e,true)}return e+2};a.prototype.writeUInt16BE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,2,65535,0);if(a.TYPED_ARRAY_SUPPORT){this[e]=r>>>8;this[e+1]=r&255}else{z(this,r,e,false)}return e+2};function F(t,r,e,n){if(r<0)r=4294967295+r+1;for(var i=0,f=Math.min(t.length-e,4);i<f;++i){t[e+i]=r>>>(n?i:3-i)*8&255}}a.prototype.writeUInt32LE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,4,4294967295,0);if(a.TYPED_ARRAY_SUPPORT){this[e+3]=r>>>24;this[e+2]=r>>>16;this[e+1]=r>>>8;this[e]=r&255}else{F(this,r,e,true)}return e+4};a.prototype.writeUInt32BE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,4,4294967295,0);if(a.TYPED_ARRAY_SUPPORT){this[e]=r>>>24;this[e+1]=r>>>16;this[e+2]=r>>>8;this[e+3]=r&255}else{F(this,r,e,false)}return e+4};a.prototype.writeIntLE=function t(r,e,n,i){r=+r;e=e|0;if(!i){var f=Math.pow(2,8*n-1);j(this,r,e,n,f-1,-f)}var o=0;var u=1;var s=0;this[e]=r&255;while(++o<n&&(u*=256)){if(r<0&&s===0&&this[e+o-1]!==0){s=1}this[e+o]=(r/u>>0)-s&255}return e+n};a.prototype.writeIntBE=function t(r,e,n,i){r=+r;e=e|0;if(!i){var f=Math.pow(2,8*n-1);j(this,r,e,n,f-1,-f)}var o=n-1;var u=1;var s=0;this[e+o]=r&255;while(--o>=0&&(u*=256)){if(r<0&&s===0&&this[e+o+1]!==0){s=1}this[e+o]=(r/u>>0)-s&255}return e+n};a.prototype.writeInt8=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,1,127,-128);if(!a.TYPED_ARRAY_SUPPORT)r=Math.floor(r);if(r<0)r=255+r+1;this[e]=r&255;return e+1};a.prototype.writeInt16LE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,2,32767,-32768);if(a.TYPED_ARRAY_SUPPORT){this[e]=r&255;this[e+1]=r>>>8}else{z(this,r,e,true)}return e+2};a.prototype.writeInt16BE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,2,32767,-32768);if(a.TYPED_ARRAY_SUPPORT){this[e]=r>>>8;this[e+1]=r&255}else{z(this,r,e,false)}return e+2};a.prototype.writeInt32LE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,4,2147483647,-2147483648);if(a.TYPED_ARRAY_SUPPORT){this[e]=r&255;this[e+1]=r>>>8;this[e+2]=r>>>16;this[e+3]=r>>>24}else{F(this,r,e,true)}return e+4};a.prototype.writeInt32BE=function t(r,e,n){r=+r;e=e|0;if(!n)j(this,r,e,4,2147483647,-2147483648);if(r<0)r=4294967295+r+1;if(a.TYPED_ARRAY_SUPPORT){this[e]=r>>>24;this[e+1]=r>>>16;this[e+2]=r>>>8;this[e+3]=r&255}else{F(this,r,e,false)}return e+4};function J(t,r,e,n,i,f){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function H(t,r,e,n,f){if(!f){J(t,r,e,4,34028234663852886e22,-34028234663852886e22)}i.write(t,r,e,n,23,4);return e+4}a.prototype.writeFloatLE=function t(r,e,n){return H(this,r,e,true,n)};a.prototype.writeFloatBE=function t(r,e,n){return H(this,r,e,false,n)};function V(t,r,e,n,f){if(!f){J(t,r,e,8,17976931348623157e292,-17976931348623157e292)}i.write(t,r,e,n,52,8);return e+8}a.prototype.writeDoubleLE=function t(r,e,n){return V(this,r,e,true,n)};a.prototype.writeDoubleBE=function t(r,e,n){return V(this,r,e,false,n)};a.prototype.copy=function t(r,e,n,i){if(!n)n=0;if(!i&&i!==0)i=this.length;if(e>=r.length)e=r.length;if(!e)e=0;if(i>0&&i<n)i=n;if(i===n)return 0;if(r.length===0||this.length===0)return 0;if(e<0){throw new RangeError("targetStart out of bounds")}if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(i<0)throw new RangeError("sourceEnd out of bounds");if(i>this.length)i=this.length;if(r.length-e<i-n){i=r.length-e+n}var f=i-n;var o;if(this===r&&n<e&&e<i){for(o=f-1;o>=0;--o){r[o+e]=this[o+n]}}else if(f<1e3||!a.TYPED_ARRAY_SUPPORT){for(o=0;o<f;++o){r[o+e]=this[o+n]}}else{Uint8Array.prototype.set.call(r,this.subarray(n,n+f),e)}return f};a.prototype.fill=function t(r,e,n,i){if(typeof r==="string"){if(typeof e==="string"){i=e;e=0;n=this.length}else if(typeof n==="string"){i=n;n=this.length}if(r.length===1){var f=r.charCodeAt(0);if(f<256){r=f}}if(i!==undefined&&typeof i!=="string"){throw new TypeError("encoding must be a string")}if(typeof i==="string"&&!a.isEncoding(i)){throw new TypeError("Unknown encoding: "+i)}}else if(typeof r==="number"){r=r&255}if(e<0||this.length<e||this.length<n){throw new RangeError("Out of range index")}if(n<=e){return this}e=e>>>0;n=n===undefined?this.length:n>>>0;if(!r)r=0;var o;if(typeof r==="number"){for(o=e;o<n;++o){this[o]=r}}else{var u=a.isBuffer(r)?r:G(new a(r,i).toString());var s=u.length;for(o=0;o<n-e;++o){this[o+e]=u[o%s]}}return this};var W=/[^+\/0-9A-Za-z-_]/g;function X(t){t=Z(t).replace(W,"");if(t.length<2)return"";while(t.length%4!==0){t=t+"="}return t}function Z(t){if(t.trim)return t.trim();return t.replace(/^\s+|\s+$/g,"")}function q(t){if(t<16)return"0"+t.toString(16);return t.toString(16)}function G(t,r){r=r||Infinity;var e;var n=t.length;var i=null;var f=[];for(var o=0;o<n;++o){e=t.charCodeAt(o);if(e>55295&&e<57344){if(!i){if(e>56319){if((r-=3)>-1)f.push(239,191,189);continue}else if(o+1===n){if((r-=3)>-1)f.push(239,191,189);continue}i=e;continue}if(e<56320){if((r-=3)>-1)f.push(239,191,189);i=e;continue}e=(i-55296<<10|e-56320)+65536}else if(i){if((r-=3)>-1)f.push(239,191,189)}i=null;if(e<128){if((r-=1)<0)break;f.push(e)}else if(e<2048){if((r-=2)<0)break;f.push(e>>6|192,e&63|128)}else if(e<65536){if((r-=3)<0)break;f.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((r-=4)<0)break;f.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else{throw new Error("Invalid code point")}}return f}function K(t){var r=[];for(var e=0;e<t.length;++e){r.push(t.charCodeAt(e)&255)}return r}function Q(t,r){var e,n,i;var f=[];for(var o=0;o<t.length;++o){if((r-=2)<0)break;e=t.charCodeAt(o);n=e>>8;i=e%256;f.push(i);f.push(n)}return f}function $(t){return n.toByteArray(X(t))}function tt(t,r,e,n){for(var i=0;i<n;++i){if(i+e>=r.length||i>=t.length)break;r[i+e]=t[i]}return i}function rt(t){return t!==t}}).call(this,e(17))},933:function(t,r,e){(function(r){(function(){var n=e(1413),i=e(1312).utf8,f=e(1312).bin,o=function(t){if(t.constructor==String)t=i.stringToBytes(t);else if(typeof r!=="undefined"&&typeof r.isBuffer=="function"&&r.isBuffer(t))t=Array.prototype.slice.call(t,0);else if(!Array.isArray(t))t=t.toString();var e=n.bytesToWords(t),f=t.length*8,o=[],u=1732584193,s=-271733879,a=-1732584194,h=271733878,l=-1009589776;e[f>>5]|=128<<24-f%32;e[(f+64>>>9<<4)+15]=f;for(var c=0;c<e.length;c+=16){var p=u,g=s,y=a,v=h,w=l;for(var d=0;d<80;d++){if(d<16)o[d]=e[c+d];else{var A=o[d-3]^o[d-8]^o[d-14]^o[d-16];o[d]=A<<1|A>>>31}var b=(u<<5|u>>>27)+l+(o[d]>>>0)+(d<20?(s&a|~s&h)+1518500249:d<40?(s^a^h)+1859775393:d<60?(s&a|s&h|a&h)-1894007588:(s^a^h)-899497514);l=h;h=a;a=s<<30|s>>>2;s=u;u=b}u+=p;s+=g;a+=y;h+=v;l+=w}return[u,s,a,h,l]},u=function(t,r){var e=n.wordsToBytes(o(t));return r&&r.asBytes?e:r&&r.asString?f.bytesToString(e):n.bytesToHex(e)};u._blocksize=16;u._digestsize=20;t.exports=u})()}).call(this,e(57).Buffer)}}]);
//# sourceMappingURL=vendors-viz-02-canvas-viz-02-coinflip-viz-02-escher-viz-02-graph-viz-02-huygens-clock-viz-02-javascript.020bbff0fb2806ec555b.js.map