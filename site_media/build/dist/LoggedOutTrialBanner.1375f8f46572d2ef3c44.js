(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[82],{1288:function(n,e,t){var a=t(2485);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=t(15).default;var r=i("40d38ca2",a,false,{});if(false){}},2484:function(n,e,t){"use strict";var a=t(1288);var i=t.n(a);var r=i.a},2485:function(n,e,t){e=n.exports=t(14)(false);e.push([n.i,'@use "sass:map";\n.no-scroll[data-v-2f5cc5b0] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.trial-banner[data-v-2f5cc5b0] {\n  position: fixed;\n  z-index: 399;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  align-items: center;\n  background: #1757D7;\n  color: #FFFFFF;\n  text-align: center;\n}\n.trial-banner p[data-v-2f5cc5b0] {\n    margin: 0;\n}\n.trial-banner .icon[data-v-2f5cc5b0] {\n    margin-right: 8px;\n    vertical-align: middle;\n    position: relative;\n    top: -3px;\n}\n.trial-banner strong[data-v-2f5cc5b0] {\n    white-space: nowrap;\n    text-decoration: underline;\n}\n.trial-banner[data-v-2f5cc5b0]:not(.mobile) {\n  height: 54px;\n  font-size: 16px;\n}\n@media (max-width: 960px) {\n.trial-banner[data-v-2f5cc5b0]:not(.mobile) {\n      font-size: 15px;\n      line-height: 1em;\n}\n.trial-banner:not(.mobile) .first-line[data-v-2f5cc5b0] {\n        display: block;\n}\n.trial-banner:not(.mobile) .icon[data-v-2f5cc5b0] {\n        margin-right: 0;\n        -webkit-transform: scale(0.75);\n                transform: scale(0.75);\n}\n}\n.trial-banner:not(.mobile) strong[data-v-2f5cc5b0] {\n    font-weight: normal;\n    cursor: pointer;\n}\n.trial-banner:not(.mobile) strong[data-v-2f5cc5b0]:hover {\n      opacity: 0.8;\n}\n.trial-banner.mobile[data-v-2f5cc5b0] {\n  min-height: 70px;\n  padding: 12px 0;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 1.5em;\n}\n.trial-banner.mobile p[data-v-2f5cc5b0] {\n    padding: 0 16px;\n}\n.trial-banner.mobile .icon[data-v-2f5cc5b0] {\n    margin-right: 4px;\n}\n.trial-banner-placeholder[data-v-2f5cc5b0]:not(.mobile) {\n  height: 54px;\n}\n.trial-banner-placeholder.mobile[data-v-2f5cc5b0] {\n  min-height: 70px;\n}\n',""])},2583:function(n,e,t){"use strict";t.r(e);var a=function(){var n=this;var e=n.$createElement;var t=n._self._c||e;return t("div",[t("div",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_b2_logged_out_trial"},expression:"{ axId: 'clicked_b2_logged_out_trial' }",arg:"click"}],ref:"banner",staticClass:"trial-banner",class:{mobile:n.mobile}},[t("p",[t("span",{staticClass:"first-line"},[t("span",{staticClass:"icon inline",class:{"b-sprite-global-premium-banner-party-popper":!n.mobile,"b-sprite-global-premium-banner-party-popper-mobile":n.mobile}}),n._v("\n        Excel in math and science with world-class interactive courses.\n      ")]),n._v(" "),t("strong",{on:{click:function(e){return n.$store.dispatch("signupModal/signup")}}},[n._v("Sign up")]),n._v("\n      to get your first 7 days free.\n    ")])]),n._v(" "),t("div",{ref:"placeholder",staticClass:"trial-banner-placeholder",class:{mobile:n.mobile}})])};var i=[];a._withStripped=true;var r=t(0);var l=t(60);var o=t(3);var s=t(1);var c=t(9);var d=t(306);let b=class n extends o["default"]{constructor(){super(...arguments);this.throttledAdjustPlaceholderHeight=Object(l["e"])(this.adjustPlaceholderHeight,50)}get mobile(){return this.isMobile(this.$mq)}adjustPlaceholderHeight(){if(this.mobile){this.$refs.placeholder.style.height=`${this.$refs.banner.clientHeight}px`}}mounted(){this.adjustPlaceholderHeight();window.addEventListener("resize",this.throttledAdjustPlaceholderHeight)}destroyed(){window.removeEventListener("resize",this.throttledAdjustPlaceholderHeight)}};b=Object(r["b"])([Object(s["a"])({components:{PremiumButton:d["a"]},computed:Object.assign({},Object(c["mapGetters"])("pageHeader",["isMobile"]))})],b);var p=b;var h=p;var v=t(2484);var f=t(5);var m=Object(f["a"])(h,a,i,false,null,"2f5cc5b0",null);if(false){var g}m.options.__file="frontend/views/courses/components/LoggedOutTrialBanner.vue";var u=e["default"]=m.exports}}]);
//# sourceMappingURL=LoggedOutTrialBanner.1375f8f46572d2ef3c44.js.map