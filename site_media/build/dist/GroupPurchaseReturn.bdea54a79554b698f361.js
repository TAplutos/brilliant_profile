(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[71],{1175:function(e,m,n){var a=n(2287);if(typeof a==="string")a=[[e.i,a,""]];if(a.locals)e.exports=a.locals;var t=n(15).default;var i=t("7ff160a4",a,false,{});if(false){}},128:function(e,m,n){var a=n(435);if(typeof a==="string")a=[[e.i,a,""]];if(a.locals)e.exports=a.locals;var t=n(15).default;var i=t("6163b12e",a,false,{});if(false){}},2286:function(e,m,n){"use strict";var a=n(1175);var t=n.n(a);var i=t.a},2287:function(e,m,n){m=e.exports=n(14)(false);m.push([e.i,'@use "sass:map";\n.no-scroll[data-v-e6eab7ec] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.group-purchase-return[data-v-e6eab7ec] {\n  width: 100%;\n  max-width: 1200px;\n  padding: 96px 24px;\n  margin: 24px auto;\n  text-align: center;\n}\n.group-purchase-return[data-v-e6eab7ec] .b-loader {\n    margin: 0 auto;\n}\n',""])},2559:function(e,m,n){"use strict";n.r(m);var a=function(){var e=this;var m=e.$createElement;var n=e._self._c||m;return n("main",{staticClass:"group-purchase-return"},[n("h2",[e._v("Processing, please wait...")]),e._v(" "),n("LoadingAnimation",{attrs:{type:"dots",color:"dark",size:"small"}})],1)};var t=[];a._withStripped=true;var i=n(0);var o=n(1);var s=n(298);var r=n(8);let c=class e extends o["e"]{mounted(){this.checkLoaded()}checkLoaded(){return Object(i["a"])(this,void 0,void 0,(function*(){const e=yield Object(r["b"])("/premium/group-plans/return-api/");const m=e.results.group_purchase_return;if(m.is_subscribed){yield this.$router.push({name:"manage_group_plan"})}else{setTimeout(()=>this.checkLoaded(),2e3)}}))}};c=Object(i["b"])([Object(o["a"])({components:{LoadingAnimation:s["a"]},metaInfo:{title:"Processing..."}})],c);var b=c;var d=b;var l=n(2286);var p=n(5);var v=Object(p["a"])(d,a,t,false,null,"e6eab7ec",null);if(false){var f}v.options.__file="frontend/views/premium/group-plans/ReturnPage.vue";var u=m["default"]=v.exports},298:function(e,m,n){"use strict";var a=function(){var e;var m=this;var n=m.$createElement;var a=m._self._c||n;return a("span",{class:(e={"b-loader":true},e["b-"+m.type]=true,e["b-"+m.color]=true,e["b-"+m.size]=true,e)},[a("span")])};var t=[];a._withStripped=true;var i=n(0);var o=n(1);const s="light";const r="dark";const c="small";const b="medium";const d="large";const l="spinner";const p="dots";let v=class e extends o["e"]{};Object(i["b"])([Object(o["c"])({type:String,default:l})],v.prototype,"type",void 0);Object(i["b"])([Object(o["c"])({type:String,default:r})],v.prototype,"color",void 0);Object(i["b"])([Object(o["c"])({type:String,default:b})],v.prototype,"size",void 0);v=Object(i["b"])([o["a"]],v);var f=v;var u=f;var h=n(434);var x=n(5);var g=Object(x["a"])(u,a,t,false,null,"c230b09c",null);if(false){var w}g.options.__file="frontend/components/LoadingAnimation.vue";var k=m["a"]=g.exports},434:function(e,m,n){"use strict";var a=n(128);var t=n.n(a);var i=t.a},435:function(e,m,n){m=e.exports=n(14)(false);m.push([e.i,".b-loader[data-v-c230b09c] {\n  display: block;\n}\n.b-dots[data-v-c230b09c] {\n  position: relative;\n  width: 8px;\n  height: 8px;\n}\n.b-dots span[data-v-c230b09c], .b-dots[data-v-c230b09c]:before, .b-dots[data-v-c230b09c]:after {\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    background: rgba(0, 0, 0, 0.5);\n}\n.b-dots[data-v-c230b09c]:before, .b-dots[data-v-c230b09c]:after {\n    content: '';\n}\n.b-dots span[data-v-c230b09c] {\n    -webkit-animation: bdots-data-v-c230b09c 1s 0.4s infinite linear;\n            animation: bdots-data-v-c230b09c 1s 0.4s infinite linear;\n}\n.b-dots[data-v-c230b09c]:before {\n    left: -16px;\n    -webkit-animation: bdots-data-v-c230b09c 1s 0.2s infinite linear;\n            animation: bdots-data-v-c230b09c 1s 0.2s infinite linear;\n}\n.b-dots[data-v-c230b09c]:after {\n    right: -16px;\n    -webkit-animation: bdots-data-v-c230b09c 1s 0.6s infinite linear;\n            animation: bdots-data-v-c230b09c 1s 0.6s infinite linear;\n}\n.b-dots.b-light span[data-v-c230b09c], .b-dots.b-light[data-v-c230b09c]:before, .b-dots.b-light[data-v-c230b09c]:after {\n    background: rgba(255, 255, 255, 0.6);\n}\n.b-dots.b-medium[data-v-c230b09c] {\n    width: 12px;\n    height: 12px;\n}\n.b-dots.b-medium[data-v-c230b09c]:before {\n      left: -22px;\n}\n.b-dots.b-medium[data-v-c230b09c]:after {\n      right: -22px;\n}\n.b-dots.b-large[data-v-c230b09c] {\n    width: 18px;\n    height: 18px;\n}\n.b-dots.b-large[data-v-c230b09c]:before {\n      left: -32px;\n}\n.b-dots.b-large[data-v-c230b09c]:after {\n      right: -32px;\n}\n@-webkit-keyframes bdots-data-v-c230b09c {\n0%, 80% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.2;\n}\n}\n@keyframes bdots-data-v-c230b09c {\n0%, 80% {\n    opacity: 1;\n}\n50% {\n    opacity: 0.2;\n}\n}\n.b-spinner[data-v-c230b09c] {\n  font-size: 20px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: bspinner-data-v-c230b09c 1.3s infinite linear;\n          animation: bspinner-data-v-c230b09c 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n}\n.b-spinner.b-small[data-v-c230b09c] {\n    font-size: 4px;\n}\n.b-spinner.b-medium[data-v-c230b09c] {\n    font-size: 6px;\n}\n.b-spinner.b-large[data-v-c230b09c] {\n    font-size: 10px;\n}\n.b-spinner.b-light[data-v-c230b09c] {\n    color: rgba(255, 255, 255, 0.6);\n}\n.b-spinner.b-dark[data-v-c230b09c] {\n    color: rgba(0, 0, 0, 0.5);\n}\n@-webkit-keyframes bspinner-data-v-c230b09c {\n0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n@keyframes bspinner-data-v-c230b09c {\n0%, 100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n}\n12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0, 0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n}\n37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n}\n62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n}\n75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n}\n87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n}\n}\n",""])}}]);
//# sourceMappingURL=GroupPurchaseReturn.bdea54a79554b698f361.js.map