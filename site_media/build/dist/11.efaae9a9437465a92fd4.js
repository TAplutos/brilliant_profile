(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{206:function(e,t,n){"use strict";var o=n(48);o.__defineMacro("\\bra","\\mathinner{\\langle{#1}|}");o.__defineMacro("\\ket","\\mathinner{|{#1}\\rangle}");o.__defineMacro("\\braket","\\mathinner{\\langle{#1}\\rangle}");o.__defineMacro("\\Bra","\\left\\langle#1\\right|");o.__defineMacro("\\Ket","\\left|#1\\right\\rangle");o.__defineMacro("\\ketbra","\\ket{#1}\\bra{#2}");o.__defineMacro("\\overparen","\\overgroup{#1}");o.__defineMacro("\\mbox","\\text{#1}");o.__defineMacro("\\pmatrix","\\begin{pmatrix}#1\\end{pmatrix}");o.__defineMacro("\\longdiv","\\overline{\\smash{\\big)}#1}");o.__defineMacro("\\cases","\\begin{cases}#1\\end{cases}");o.__defineMacro("\\cancelto","\\cancel{#2}^{~~#1}");o.__defineMacro("\\yellow","\\textcolor{DF9912}{#1}");o.__defineMacro("\\blue","\\textcolor{1757D7}{#1}");o.__defineMacro("\\red","\\textcolor{DA4631}{#1}");o.__defineMacro("\\green","\\textcolor{19866C}{#1}");o.__defineMacro("\\purple","\\textcolor{6D22CC}{#1}");o.__defineMacro("\\pink","\\textcolor{C347D7}{#1}")},207:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}function a(e,t,n){if(t)r(e.prototype,t);if(n)r(e,n);return e}function p(e,t,n){if(t in e){Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true})}else{e[t]=n}return e}var k=n(48);k.__defineMacro("\\si",c);k.__defineMacro("\\SI",y);k.__defineMacro("\\num",u);k.__defineMacro("\\ang",I);k.__defineMacro("\\tothe","^{#1}");k.__defineMacro("\\numcomma",s);var i="\\,";var l="{,}";function c(e){var t=T(e,2);f(t,1,2);var n={};if(t[0].optional===true){n=N(t[0]);t=t.slice(1)}f(t,1);var o=d(t[0],n);return o}function y(e){var t=T(e,4);f(t,2,4);var n={};if(t[0].optional===true){n=N(t[0]);t=t.slice(1)}f(t,2);var o=m(t[0]);t=t.slice(1);f(t,1);var r="";r+="".concat(d(t[0],n));t=t.slice(1);if(t.length!=0){r+=" ".concat(o,"\\ ").concat(d(t[0],n))}else{r="".concat(o,"\\ ").concat(r)}return r}function u(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:i;var n=T(e,2);f(n,1,2);var o={};if(n[0].optional===true){o=N(n[0]);n=n.slice(1)}f(n,1);var r=m(n[0],t);return"{ ".concat(r," }")}function s(e){return u(e,l)}function I(e){var t=T(e,2);f(t,1,2);var n={};if(t[0].optional===true){n=N(t[0]);t=t.slice(1)}f(t,1);var o="".concat(m(t[0])," \\degree");return o}function f(e,t){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:Infinity;if(e.length<t||e.length>n){throw"Unexpected number of arguments."}}function T(e,t){var n=[];var o=[];var r=0;var a=e.future();while(a&&a.text!="EOF"){if(o.length>t){throw"Unexpected argument."}a=e.future();switch(a.text){case"[":case"{":if(r!=0){n.push({token:a.text,type:v.LITERAL})}else{n.optional=a.text=="["}++r;break;case"]":case"}":--r;if(r<0){return o}else if(r!=0){n.push({token:a.text,type:v.LITERAL})}else{o.push(n);n=[]}break;case"\\num":if(r==0){return o}break;default:if(r==0){return o}else{n.push(h(a.text))}break}e.popToken()}return o}function N(e){var t=e.map((function(e){return e.token})).join("");var n=t.split("=");if(n.length!=2){throw"Unexpected option."}return p({},n[0].trim(),n[1].trim().toLowerCase())}function U(e,t,n){if(e.length<4){return e}if(!t){e.reverse()}else{if(n===l){return e}}var o=[];for(var r=0;r<e.length;++r){if(r!=0&&r%3==0){o.push(n)}o.push(e[r])}return t?o:o.reverse()}function m(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:i;var n=false;var o=false;var r=[];var a=[];e.forEach((function(e){if(e.token.length>1){a.push(e.token);return}if(e.token===","){return}var p=e.token.charCodeAt(0);if(p>=48&&p<=57){r.push(e.token)}else{if(r.length!=0){a.push(U(r,o,t).join(""));r=[]}switch(e.token){case"e":case"E":n=true;if(a.length!=0){a.push("\\times")}a.push("10^{");break;case".":o=true;default:a.push(e.token);break}}}));if(r.length!=0){a.push(U(r,o,t).join(""))}if(n){a.push("}")}return a.join(" ")}var g=function(){function e(t){o(this,e);this.tokens=t;this.idx=-1}a(e,[{key:"peek",value:function e(){var t=this.idx+1;return t<this.tokens.length?this.tokens[t]:null}},{key:"remember",value:function e(){var t=this.idx-1;return t>=0?this.tokens[t]:null}},{key:"next",value:function e(){var t=this.peek();if(t){++this.idx}return t}}]);return e}();function d(e,t){var n=[];var o=[];var r=new g(e);var a=t["per-mode"]==="symbol";var p=t["per-mode"]==="pedagogical";var k=false;var i=r.next();while(i){var l="";var c=null;switch(i.type){case v.PER:k=true;i=r.next();continue;case v.PREFIX:c=r.next();if(!c||c.type!=v.UNIT&&c.type!=v.LITERAL){throw'Unit expected after prefix "'.concat(i.token,'" but got "').concat(c.token,'".')}l+=i.text===false?i.token:"\\text{".concat(i.token,"}");i=c;case v.UNIT:l+=i.text===false?i.token:"\\text{".concat(i.token,"}");c=r.peek();var y=true;if(c&&c.type==v.POWER_SUFFIX){if(!k||a){l+="^{".concat(c.power,"}")}else{l+="^{".concat(c.power*-1,"}")}y=false;i=r.next()}else if(k){if(!a){l+="^{-1}";y=false}}c=r.peek();if(!c){y=false}else if(c.type==v.PER){y=y&&(!a||k)}else if(x(c.token)){y=false}else if(i.token==="W"&&c.token==="h"){y=false}if(y){l+="\\,"}break;case v.POWER_SUFFIX:l="^{".concat(i.power,"}");break;case v.LITERAL:if(i.token==="."){var u=r.peek();var s=r.remember();if(x(u.token)&&x(s.token)){l=i.token}else{l="\\,"}}else if(i.text===false||i.token.startsWith("\\")||x(i.token)){l=i.token}else{l="\\text{".concat(i.token,"}");var I=r.peek();while(I&&I.type==v.LITERAL&&!x(I.token)){i=r.next();l+="\\text{".concat(i.token,"}");I=r.peek()}if(I&&I.type==v.POWER_SUFFIX){if(!k||a){l+="^{".concat(I.power,"}")}else{l+="^{".concat(I.power*-1,"}")}i=r.next()}else if(k){if(!a){l+="^{-1}"}}}break;default:l=i.token;break}if(k){o.push(l);c=r.peek();if(c&&c.type!=v.LITERAL&&!p){k=false}}else{n.push(l)}i=r.next()}var f=n.join(" ");var T;if(a&&o.length>1){T="(".concat(o.join(" "),")")}else{T=o.join(" ")}return"".concat(f," ").concat(a&&T.length!=0?"/":""," ").concat(T)}function h(e){return F[e]||{token:e,type:v.LITERAL}}function x(e){if(!e||e.length!=1){return false}var t=e.charCodeAt(0);return t<=64||t>=91&&t<=96||t>=123}var v={LITERAL:0,UNIT:1,PREFIX:2,POWER_SUFFIX:3,PER:4};var F={"\\ampere":{token:"A",type:v.UNIT},"\\pA":{token:"pA",type:v.UNIT},"\\nA":{token:"nA",type:v.UNIT},"\\uA":{token:"\\mu\\text{A}",type:v.UNIT,text:false},"\\mA":{token:"mA",type:v.UNIT},"\\A":{token:"A",type:v.UNIT},"\\kA":{token:"kA",type:v.UNIT},"\\candela":{token:"cd",type:v.UNIT},"\\gram":{token:"g",type:v.UNIT},"\\kelvin":{token:"K",type:v.UNIT},"\\K":{token:"K",type:v.UNIT},"\\kilogram":{token:"kg",type:v.UNIT},"\\fg":{token:"fg",type:v.UNIT},"\\pg":{token:"pg",type:v.UNIT},"\\ng":{token:"ng",type:v.UNIT},"\\ug":{token:"\\mu\\text{g}",type:v.UNIT,text:false},"\\mg":{token:"mg",type:v.UNIT},"\\g":{token:"g",type:v.UNIT},"\\kg":{token:"kg",type:v.UNIT},"\\metre":{token:"m",type:v.UNIT},"\\meter":{token:"m",type:v.UNIT},"\\pm":{token:"pm",type:v.UNIT},"\\nm":{token:"nm",type:v.UNIT},"\\um":{token:"\\mu\\text{m}",type:v.UNIT,text:false},"\\mm":{token:"mm",type:v.UNIT},"\\cm":{token:"cm",type:v.UNIT},"\\dm":{token:"dm",type:v.UNIT},"\\m":{token:"m",type:v.UNIT},"\\km":{token:"km",type:v.UNIT},"\\mole":{token:"mol",type:v.UNIT},"\\fmol":{token:"fmol",type:v.UNIT},"\\pmol":{token:"pmol",type:v.UNIT},"\\nmol":{token:"nmol",type:v.UNIT},"\\umol":{token:"\\mu\\text{mol}",type:v.UNIT,text:false},"\\mmol":{token:"mmol",type:v.UNIT},"\\mol":{token:"mol",type:v.UNIT},"\\kmol":{token:"kmol",type:v.UNIT},"\\second":{token:"s",type:v.UNIT},"\\as":{token:"as",type:v.UNIT},"\\fs":{token:"fs",type:v.UNIT},"\\ps":{token:"ps",type:v.UNIT},"\\ns":{token:"ns",type:v.UNIT},"\\us":{token:"\\mu\\text{s}",type:v.UNIT,text:false},"\\ms":{token:"ms",type:v.UNIT},"\\s":{token:"s",type:v.UNIT},"\\becquerel":{token:"Bq",type:v.UNIT},"\\degreeCelsius":{token:"\\degree\\text{C}",type:v.UNIT,text:false},"\\celsius":{token:"\\degree\\text{C}",type:v.UNIT,text:false},"\\coulomb":{token:"C",type:v.UNIT},"\\farad":{token:"F",type:v.UNIT},"\\pF":{token:"pF",type:v.UNIT},"\\fF":{token:"fF",type:v.UNIT},"\\F":{token:"F",type:v.UNIT},"\\gray":{token:"Gy",type:v.UNIT},"\\hertz":{token:"Hz",type:v.UNIT},"\\mHz":{token:"mHz",type:v.UNIT},"\\Hz":{token:"Hz",type:v.UNIT},"\\kHz":{token:"kHz",type:v.UNIT},"\\MHz":{token:"MHz",type:v.UNIT},"\\GHz":{token:"GHz",type:v.UNIT},"\\THz":{token:"THz",type:v.UNIT},"\\henry":{token:"H",type:v.UNIT},"\\joule":{token:"J",type:v.UNIT},"\\uJ":{token:"\\mu\\text{J}",type:v.UNIT,text:false},"\\mJ":{token:"mJ",type:v.UNIT},"\\J":{token:"J",type:v.UNIT},"\\kJ":{token:"kJ",type:v.UNIT},"\\katal":{token:"kat",type:v.UNIT},"\\lumen":{token:"lm",type:v.UNIT},"\\lux":{token:"lx",type:v.UNIT},"\\newton":{token:"N",type:v.UNIT},"\\mN":{token:"mN",type:v.UNIT},"\\N":{token:"N",type:v.UNIT},"\\kN":{token:"kN",type:v.UNIT},"\\MN":{token:"MN",type:v.UNIT},"\\ohm":{token:"\\Omega",type:v.UNIT,text:false},"\\mohm":{token:"\\text{m}\\Omega",type:v.UNIT,text:false},"\\kohm":{token:"\\text{k}\\Omega",type:v.UNIT,text:false},"\\Mohm":{token:"\\text{M}\\Omega",type:v.UNIT,text:false},"\\pascal":{token:"Pa",type:v.UNIT},"\\Pa":{token:"Pa",type:v.UNIT},"\\kPa":{token:"kPa",type:v.UNIT},"\\MPa":{token:"MPa",type:v.UNIT},"\\GPa":{token:"GPa",type:v.UNIT},"\\radian":{token:"rad",type:v.UNIT},"\\siemens":{token:"S",type:v.UNIT},"\\sievert":{token:"Sv",type:v.UNIT},"\\steradian":{token:"sr",type:v.UNIT},"\\tesla":{token:"T",type:v.UNIT},"\\volt":{token:"V",type:v.UNIT},"\\pV":{token:"pV",type:v.UNIT},"\\nV":{token:"nV",type:v.UNIT},"\\uV":{token:"\\mu\\text{V}",type:v.UNIT,text:false},"\\mV":{token:"mV",type:v.UNIT},"\\V":{token:"V",type:v.UNIT},"\\kV":{token:"kV",type:v.UNIT},"\\watt":{token:"W",type:v.UNIT},"\\uW":{token:"\\mu\\text{W}",type:v.UNIT,text:false},"\\mW":{token:"mW",type:v.UNIT},"\\W":{token:"W",type:v.UNIT},"\\kW":{token:"kW",type:v.UNIT},"\\MW":{token:"MW",type:v.UNIT},"\\GW":{token:"GW",type:v.UNIT},"\\kWh":{token:"kWh",type:v.UNIT},"\\weber":{token:"Wb",type:v.UNIT},"\\day":{token:"d",type:v.UNIT},"\\degree":{token:"\\degree",type:v.UNIT,text:false},"\\hectare":{token:"ha",type:v.UNIT},"\\hour":{token:"h",type:v.UNIT},"\\litre":{token:"l",type:v.UNIT},"\\liter":{token:"L",type:v.UNIT},"\\ul":{token:"\\mu\\text{l}",type:v.UNIT,text:false},"\\ml":{token:"ml",type:v.UNIT},"\\l":{token:"l",type:v.UNIT},"\\hl":{token:"hl",type:v.UNIT},"\\uL":{token:"\\mu\\text{L}",type:v.UNIT,text:false},"\\mL":{token:"mL",type:v.UNIT},"\\L":{token:"L",type:v.UNIT},"\\hL":{token:"hL",type:v.UNIT},"\\minute":{token:"min",type:v.UNIT},"\\arcminute":{token:"\\prime",type:v.UNIT,text:false},"\\arcsecond":{token:"\\prime\\prime",type:v.UNIT,text:false},"\\tonne":{token:"t",type:v.UNIT},"\\astronomicalunit":{token:"au",type:v.UNIT},"\\atomicmassunit":{token:"u",type:v.UNIT},"\\amu":{token:"u",type:v.UNIT},"\\bohr":{token:"a_0",type:v.UNIT,text:false},"\\clight":{token:"c_0",type:v.UNIT,text:false},"\\dalton":{token:"Da",type:v.UNIT},"\\electronmass":{token:"m_e",type:v.UNIT,text:false},"\\electronvolt":{token:"eV",type:v.UNIT},"\\meV":{token:"meV",type:v.UNIT},"\\eV":{token:"eV",type:v.UNIT},"\\keV":{token:"keV",type:v.UNIT},"\\MeV":{token:"MeV",type:v.UNIT},"\\GeV":{token:"GeV",type:v.UNIT},"\\TeV":{token:"TeV",type:v.UNIT},"\\elementarycharge":{token:"e",type:v.UNIT,text:false},"\\hartree":{token:"E_h",type:v.UNIT,text:false},"\\planckbar":{token:"\\hbar",type:v.UNIT,text:false},"\\angstrom":{token:"\\AA",type:v.UNIT,text:true},"\\bar":{token:"bar",type:v.UNIT},"\\barn":{token:"b",type:v.UNIT},"\\bel":{token:"B",type:v.UNIT},"\\decibel":{token:"dB",type:v.UNIT},"\\dB":{token:"dB",type:v.UNIT},"\\knot":{token:"kn",type:v.UNIT},"\\mmHg":{token:"mmHg",type:v.UNIT},"\\nauticalmile":{token:"M",type:v.UNIT},"\\neper":{token:"Np",type:v.UNIT},"\\yocto":{token:"y",type:v.PREFIX},"\\zepto":{token:"z",type:v.PREFIX},"\\atto":{token:"a",type:v.PREFIX},"\\femto":{token:"f",type:v.PREFIX},"\\pico":{token:"p",type:v.PREFIX},"\\nano":{token:"n",type:v.PREFIX},"\\micro":{token:"\\mu",type:v.PREFIX,text:false},"\\milli":{token:"m",type:v.PREFIX},"\\centi":{token:"c",type:v.PREFIX},"\\deci":{token:"d",type:v.PREFIX},"\\deca":{token:"da",type:v.PREFIX},"\\deka":{token:"da",type:v.PREFIX},"\\hecto":{token:"h",type:v.PREFIX},"\\kilo":{token:"k",type:v.PREFIX},"\\mega":{token:"M",type:v.PREFIX},"\\giga":{token:"G",type:v.PREFIX},"\\tera":{token:"T",type:v.PREFIX},"\\peta":{token:"P",type:v.PREFIX},"\\exa":{token:"E",type:v.PREFIX},"\\zetta":{token:"Z",type:v.PREFIX},"\\yotta":{token:"Y",type:v.PREFIX},"\\squared":{power:2,type:v.POWER_SUFFIX},"\\cubed":{power:3,type:v.POWER_SUFFIX},"\\per":{token:"/",type:v.PER}}},208:function(e,t,n){"use strict";var o=/\\(begin|end)\s*{\s*(align|eqnarray|split)\*?\s*}/g;function r(e,t){return"\\".concat(t,"{aligned}")}var a=/\\begin{\s*array\s*}\s*[^{\s]/g;function p(e){return"\\begin{array}{c}".concat(e[e.length-1])}var k=/\\(begin|end){\s*equation\s*}/g;function i(e){return""}var l=/(.*?)([$%])/g;function c(e,t,n){return t.endsWith("\\")?"".concat(t).concat(n):"".concat(t,"\\").concat(n)}var y=/\\text(?:rm|bf|it|md|normal|sf|tt|up)?{([^}]*?)}/g;var u=/(.*?)([_#&])/g;function s(e){return e.replace(u,c)}var I=/\u2013|\\u2013|\u2212|\\u2212/g;var f={"–":"-","\\u2013":"-","−":"-","\\u2212":"-"};function T(e){return f[e]||e}var N=/\\require{[^}]*?}/g;function U(e){return""}var m={lightblue:"#95D3FE",blue:"#3D99F6",darkblue:"#0C6AC7",seagreen:"#1E93A5",aqua:"#27D2E7",lightgreen:"#67D94C",green:"#20A900",darkgreen:"#456461",yellow:"#CEBB00",lightyellow:"#FEDF53",yelloworange:"#FCA04A",orange:"#EC7300",redorange:"#FF664D",red:"#D61F06",pink:"#E81990",rosepink:"#F970BF",violet:"#BA33D6",amethyst:"#625CDB",indigo:"#302B94",purple:"#69047E",paleyellow:"#FFF7E6",beige:"#FBE6B8",sandybrown:"#FEDABE",peachy:"#FCC9A1",tan:"#DBA97F",lightbrown:"#B4825D",mediumlightbrown:"#AA7956",bronze:"#815331",brown:"#624F41",white:"#FFFFFF",lightgray:"#FBFBFB",mediumlightgray:"#F0F0F0",mediumgray:"#D8D8D8",gray:"#BBBBBB",mediumdarkgray:"#919191",darkgray:"#777777",black:"#333333",darkblack:"#161616"};function g(e){var t=e.trim().replace(/\\/g,"").toLowerCase();return m[t]||t}var d=/\\(color|colorbox|textcolor)\s*{(.*?)}/g;function h(e,t,n){return"\\".concat(t,"{").concat(g(n),"}")}var x=/\\fcolorbox\s*{(.*?)}\s*{(.*?)}/g;function v(e,t,n){return"\\fcolorbox{".concat(g(t),"}{").concat(g(n),"}")}function F(e){return e.replace(I,T).replace(N,U).replace(k,i).replace(o,r).replace(a,p).replace(l,c).replace(d,h).replace(x,v).replace(y,s)}e.exports={replace:F}},209:function(e,t,n){"use strict";var o="warn";var r=true;var a={strict:o,unicodeTextInMathMode:r};var p={displayMode:true,strict:o,unicodeTextInMathMode:r};e.exports={inline:a,block:p}}}]);
//# sourceMappingURL=11.efaae9a9437465a92fd4.js.map