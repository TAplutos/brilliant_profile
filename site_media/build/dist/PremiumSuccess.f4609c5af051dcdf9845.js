(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[96],{1177:function(e,n,t){var i=t(2290);if(typeof i==="string")i=[[e.i,i,""]];if(i.locals)e.exports=i.locals;var a=t(15).default;var r=a("78f47db7",i,false,{});if(false){}},165:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));function i(e){return JSON.parse(JSON.stringify(e))}},2289:function(e,n,t){"use strict";var i=t(1177);var a=t.n(i);var r=a.a},2290:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-7c99dc10] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n@use "sass:map";\n.no-scroll[data-v-7c99dc10] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nh1[data-v-7c99dc10] {\n  font-size: 30px;\n  margin-bottom: 16px;\n  font-weight: 700;\n  line-height: 1.2;\n}\np[data-v-7c99dc10] {\n  line-height: 1.5;\n  color: #535353;\n}\nbutton[data-v-7c99dc10] {\n  font-family: "Soleil", Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.btn[data-v-7c99dc10] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 270px;\n  max-width: 100%;\n  height: 48px;\n  background: #000000;\n  color: #FFFFFF;\n  font-size: 18px;\n  border: 0;\n  border-radius: 6px;\n  line-height: 32px;\n  font-weight: 600;\n}\n.btn[data-v-7c99dc10]:hover, .btn[data-v-7c99dc10]:active, .btn[data-v-7c99dc10]:focus {\n    box-shadow: none;\n    background: #000000;\n    color: #FFFFFF;\n}\n.btn .disabled[data-v-7c99dc10], .btn[disabled][data-v-7c99dc10] {\n    color: #FFFFFF;\n    opacity: .1;\n}\n.most-popular-badge[data-v-7c99dc10] {\n  background: #F2B135;\n  padding: 6px 10px;\n  border-radius: 40px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.375;\n  white-space: nowrap;\n  color: black;\n}\n.nux-container[data-v-7c99dc10] {\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  min-height: calc(var(--vh, 1vh) * 100);\n  background: #F8F8F8;\n  margin-top: -45px;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container[data-v-7c99dc10] {\n      justify-content: center;\n      margin-top: -60px;\n}\n}\n.nux-container .nux-content[data-v-7c99dc10] {\n    background: #FFFFFF;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    padding: 16px;\n    overflow-y: auto;\n    overflow-x: hidden;\n}\n@media screen and (min-width: 700.08px) {\n.nux-container .nux-content[data-v-7c99dc10] {\n        margin: 48px auto;\n        height: 675px;\n        flex: initial;\n}\n}\n@media screen and (min-width: 700.08px) and (max-width: 960px) {\n.nux-container .nux-content[data-v-7c99dc10] {\n        width: 700.08px;\n}\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.nux-container .nux-content[data-v-7c99dc10] {\n        width: 960px;\n}\n}\n@media screen and (min-width: 1200px) {\n.nux-container .nux-content[data-v-7c99dc10] {\n        width: 1200px;\n}\n}\n@media screen and (min-width: 700.08px) {\nh1[data-v-7c99dc10] {\n    font-size: 36px;\n    line-height: 1.3;\n}\n.btn[data-v-7c99dc10] {\n    width: 380px;\n}\n}\n.header-banner[data-v-7c99dc10] {\n  position: relative;\n  height: 150px;\n  margin-bottom: 48px;\n  background: #0E4680;\n}\n.header-banner img[data-v-7c99dc10] {\n    position: absolute;\n    top: 0;\n    left: 50%;\n}\n.header-banner .bg[data-v-7c99dc10] {\n    margin-left: -640px;\n    mix-blend-mode: multiply;\n}\n.header-banner .img[data-v-7c99dc10] {\n    bottom: 0;\n    margin-left: -86px;\n}\n.main[data-v-7c99dc10] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 64px;\n}\n.main a[data-v-7c99dc10]:not(.btn) {\n    color: #000000;\n    opacity: 0.55;\n    text-decoration: underline;\n    transition: opacity 100ms linear;\n}\n.main a[data-v-7c99dc10]:not(.btn):hover {\n      opacity: 0.8;\n}\n.wrapper[data-v-7c99dc10] {\n  width: 800px;\n  max-width: 100%;\n  padding: 48px 172px 32px 172px;\n  background: #FFFFFF;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);\n}\n.btn[data-v-7c99dc10] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 310px;\n  height: 48px;\n  background: #000000;\n  border-radius: 6px;\n  transition: opacity 100ms linear;\n  color: #FFFFFF;\n  font-weight: 600;\n  font-size: 16px;\n}\n.btn[data-v-7c99dc10]:hover {\n    opacity: 0.9;\n    color: #FFFFFF;\n}\n.btn[data-v-7c99dc10]:disabled {\n    opacity: 0.4;\n}\n.btn[data-v-7c99dc10]:disabled:hover {\n      opacity: 0.4;\n}\n.btn:disabled .loading-anim[data-v-7c99dc10] {\n      position: absolute;\n}\n.btn[data-v-7c99dc10]:after {\n    border-color: rgba(255, 255, 255, 0.6);\n}\n.step-welcome[data-v-7c99dc10] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 0;\n  font-size: 18px;\n  line-height: 1.33em;\n  text-align: center;\n  color: rgba(20, 20, 19, 0.65);\n}\n.step-welcome h1[data-v-7c99dc10] {\n    margin-bottom: 32px;\n    font-size: 30px;\n    line-height: 1.17em;\n    text-align: center;\n    color: #000000;\n}\n.step-welcome p[data-v-7c99dc10] {\n    margin-bottom: 40px;\n}\n.step-welcome .btn[data-v-7c99dc10] {\n    margin-bottom: 40px;\n}\n.step-welcome footer[data-v-7c99dc10] {\n    font-size: 16px;\n    line-height: 1.37em;\n    color: rgba(0, 0, 0, 0.55);\n}\n.step-welcome footer p[data-v-7c99dc10] {\n      margin: 0;\n}\n.form-content[data-v-7c99dc10] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form-header[data-v-7c99dc10] {\n  margin-bottom: 36px;\n}\n.form-header h3[data-v-7c99dc10] {\n    margin-bottom: 0;\n    font-size: 18px;\n    line-height: 1.33em;\n    letter-spacing: 0.005em;\n    text-align: center;\n    color: #000000;\n}\n.form-header h4[data-v-7c99dc10] {\n    margin-bottom: 20px;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 1.37em;\n    text-align: center;\n    text-transform: uppercase;\n    color: rgba(0, 0, 0, 0.55);\n}\n.form-footer[data-v-7c99dc10] {\n  margin-top: 32px;\n  font-size: 16px;\n  line-height: 1.37em;\n  text-align: center;\n}\n.fields[data-v-7c99dc10] {\n  width: 100%;\n  margin-bottom: 40px;\n}\n.field[data-v-7c99dc10] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  border: 1px solid #DDDDDD;\n  border-radius: 8px;\n  transition: border-color 100ms linear;\n  cursor: pointer;\n}\n.field[data-v-7c99dc10]:last-child {\n    margin-bottom: 0;\n}\n.field[data-v-7c99dc10]:hover {\n    border-color: #000000;\n}\n.field.active[data-v-7c99dc10] {\n    border-color: #00BC8E;\n}\n.field.active[data-v-7c99dc10]:hover {\n      border-color: #00BC8E;\n}\n.field.dim[data-v-7c99dc10] {\n    opacity: 0.4;\n}\n.field input[type=checkbox][data-v-7c99dc10],\n  .field input[type=radio][data-v-7c99dc10] {\n    display: none;\n}\n.field label[data-v-7c99dc10] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 53px;\n    padding: 0 24px;\n    font-size: 16px;\n    line-height: 1.37em;\n    letter-spacing: 0.005em;\n    color: #000000;\n    cursor: pointer;\n}\n.field textarea[data-v-7c99dc10] {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 16px 24px;\n    border: 0;\n    border-top: 1px solid #00BC8E;\n    border-radius: 0 0 12px 12px;\n    font-size: 16px;\n    line-height: 1.37em;\n    letter-spacing: 0.005em;\n    color: #000000;\n    resize: vertical;\n}\n.field-wrapper[data-v-7c99dc10] {\n  margin-bottom: 16px;\n}\n.field-wrapper[data-v-7c99dc10]:last-child {\n    margin: 0;\n}\n.field-wrapper .field[data-v-7c99dc10] {\n    margin: 0;\n}\n.subfields[data-v-7c99dc10] {\n  padding: 16px 16px;\n}\n.subfields p[data-v-7c99dc10] {\n    margin-bottom: 12px;\n    font-size: 16px;\n    line-height: 1.37em;\n    letter-spacing: 0.005em;\n    color: rgba(0, 0, 0, 0.4);\n}\n.subfields .field[data-v-7c99dc10] {\n    margin-bottom: 8px;\n}\n.subfields .field[data-v-7c99dc10]:last-child {\n      margin: 0;\n}\n.success-page.mobile[data-v-7c99dc10] {\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 45px);\n}\n.success-page.mobile .header-banner[data-v-7c99dc10] {\n    margin-bottom: 0;\n}\n.success-page.mobile .main[data-v-7c99dc10] {\n    flex: 1;\n    margin-bottom: 0;\n}\n.success-page.mobile .wrapper[data-v-7c99dc10] {\n    min-height: 100%;\n    padding: 24px 24px;\n}\n.success-page.mobile .btn[data-v-7c99dc10] {\n    width: 100%;\n}\n.in-onboarding-experiment[data-v-7c99dc10] {\n  background: #F8F8F8;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-height: calc(var(--vh, 1vh) * 100);\n  height: auto;\n  margin-top: -45px;\n}\n.in-onboarding-experiment header.header-banner[data-v-7c99dc10] {\n    display: none;\n}\n.in-onboarding-experiment main.main[data-v-7c99dc10] {\n    margin: 0;\n    flex: 1;\n}\n.in-onboarding-experiment main.main div.wrapper[data-v-7c99dc10] {\n      box-shadow: none;\n      width: 100%;\n      background: #FFFFFF;\n      display: flex;\n      flex-direction: column;\n      height: 100%;\n      padding: 0 16px 16px;\n      overflow-y: auto;\n      overflow-x: hidden;\n      max-width: 100%;\n      min-height: auto;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper[data-v-7c99dc10] {\n        flex: 1;\n        padding: 0;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper.form-content[data-v-7c99dc10] {\n          justify-content: center;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper img[data-v-7c99dc10] {\n          max-width: 100%;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text[data-v-7c99dc10], .in-onboarding-experiment main.main div.wrapper .content-wrapper header.form-header[data-v-7c99dc10] {\n          flex: 1;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          padding-top: 32px;\n          max-width: 100%;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text h4[data-v-7c99dc10], .in-onboarding-experiment main.main div.wrapper .content-wrapper header.form-header h4[data-v-7c99dc10] {\n            display: none;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text h1[data-v-7c99dc10], .in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text h3[data-v-7c99dc10], .in-onboarding-experiment main.main div.wrapper .content-wrapper header.form-header h1[data-v-7c99dc10], .in-onboarding-experiment main.main div.wrapper .content-wrapper header.form-header h3[data-v-7c99dc10] {\n            font-size: 36px;\n            line-height: 1.2;\n            font-weight: 700;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text p[data-v-7c99dc10], .in-onboarding-experiment main.main div.wrapper .content-wrapper header.form-header p[data-v-7c99dc10] {\n            font-size: 16px;\n            line-height: 1.5;\n            color: #535353;\n            margin: 0;\n            word-break: break-word;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper header.form-header[data-v-7c99dc10] {\n          flex: initial;\n          margin-bottom: 48px;\n          width: 570px;\n          max-width: 100%;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .fields[data-v-7c99dc10] {\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          margin-bottom: 0;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .fields div.field-wrapper[data-v-7c99dc10] {\n            max-width: 100%;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .fields div.field[data-v-7c99dc10] {\n            border-radius: 6px;\n            font-size: 14px;\n            line-height: 1.4285;\n            width: 570px;\n            max-width: 100%;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .fields div.field[data-v-7c99dc10]:hover {\n              border-color: #F2B135;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .fields div.field.active[data-v-7c99dc10] {\n              border-color: #F2B135;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .fields div.field textarea[data-v-7c99dc10] {\n              border-top: 1px solid #F2B135;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper.step-question-2 header.form-header[data-v-7c99dc10] {\n          margin-bottom: 32px;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper.step-question-2 .fields div.field-wrapper[data-v-7c99dc10] {\n          margin-bottom: 12px;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper.step-question-2 .fields div.field-wrapper[data-v-7c99dc10]:last-of-type {\n            margin-bottom: 0;\n}\n@media screen and (min-width: 700.08px) {\n.in-onboarding-experiment[data-v-7c99dc10] {\n      margin-top: -60px;\n}\n.in-onboarding-experiment main.main[data-v-7c99dc10] {\n        margin: 82px 48px 48px;\n        height: auto;\n        flex: initial;\n}\n.in-onboarding-experiment main.main div.wrapper[data-v-7c99dc10] {\n          height: 675px;\n          width: auto;\n}\n.in-onboarding-experiment main.main div.wrapper.welcome[data-v-7c99dc10] {\n            overflow: visible;\n}\n.in-onboarding-experiment main.main div.wrapper.question-2[data-v-7c99dc10] {\n            height: auto;\n            min-height: 675px;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper[data-v-7c99dc10] {\n            flex: 1;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper img[data-v-7c99dc10] {\n              margin-top: -82px;\n              width: 500px;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text[data-v-7c99dc10] {\n              max-width: 700.08px;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text h1[data-v-7c99dc10] {\n                font-size: 52px;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .step-text p[data-v-7c99dc10] {\n                font-size: 18px;\n                line-height: 1.4;\n}\n.in-onboarding-experiment main.main div.wrapper .content-wrapper .fields[data-v-7c99dc10] {\n              margin-bottom: 8px;\n}\n.in-onboarding-experiment.question-2[data-v-7c99dc10] {\n        height: auto;\n        min-height: calc(var(--vh, 1vh) * 100);\n}\n}\n@media screen and (min-width: 700.08px) and (max-width: 960px) {\n.in-onboarding-experiment main.main div.wrapper[data-v-7c99dc10] {\n      width: 700.08px;\n}\n}\n@media screen and (min-width: 960px) {\n.in-onboarding-experiment main.main div.wrapper .step-text[data-v-7c99dc10] {\n      max-width: 800px;\n}\n}\n@media screen and (min-width: 960px) and (max-width: 1200px) {\n.in-onboarding-experiment main.main div.wrapper[data-v-7c99dc10] {\n      width: 960px;\n}\n}\n@media screen and (min-width: 1200px) {\n.in-onboarding-experiment main.main div.wrapper[data-v-7c99dc10] {\n      width: 1200px;\n}\n}\n',""])},2564:function(e,n,t){"use strict";t.r(n);var i=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("div",[!e.inOnboardingExperiment?t("AppHeader"):e._e(),e._v(" "),t("div",{class:[e.step,{"success-page":true,mobile:e.isMobile(e.$mq),"in-onboarding-experiment":e.inOnboardingExperiment}]},[t("header",{staticClass:"header-banner"},[!e.isMobile(e.$mq)?t("ResponsiveImage",{staticClass:"bg",attrs:{src:["/site_media/version-c82e67b972/images/premium/bg-swirl-blue-1x.png","/site_media/version-f71e68e26f/images/premium/bg-swirl-blue-2x.png"]}}):e._e(),e._v(" "),t("ResponsiveImage",{staticClass:"img",attrs:{src:["/site_media/version-139057d1a7/images/premium/rocket-1x.png","/site_media/version-9cc405f079/images/premium/rocket-2x.png"]}})],1),e._v(" "),e.user.has_brilliant_premium||e.$route.query.r?t("main",{staticClass:"main"},[t("div",{staticClass:"wrapper",class:e.step},[t("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[e.step==="welcome"?t("div",{key:"welcome",staticClass:"step-welcome content-wrapper"},[e.inOnboardingExperiment?t("img",{staticClass:"treasure-chest",attrs:{src:"/site_media/version-1/images/premium/chest-explosion.svg",alt:"Treasure Chest"}}):e._e(),e._v(" "),t("div",{staticClass:"step-text"},[t("h1",[e._v("Welcome to Premium, "+e._s(e.user.first_name)+"!")]),e._v(" "),e.user.is_during_trial?t("p",[e._v("\n                You've activated a Brilliant Premium trial for "),t("b",[e._v(e._s(e.user.email))])]):t("p",[e._v("You've activated Brilliant Premium for "),t("b",[e._v(e._s(e.user.email))])])]),e._v(" "),!e.inOnboardingExperiment?[!e.isLoaded?t("button",{staticClass:"btn",attrs:{disabled:""}},[t("LoadingAnimation",{staticClass:"loading-anim",attrs:{type:"spinner",size:"small",color:"light"}})],1):e.has_survey_response?t("router-link",{staticClass:"btn",attrs:{to:e.nextLocation}},[e._v("\n                Continue\n              ")]):t("button",{staticClass:"btn",on:{click:function(n){return e.gotoStep("question-1")}}},[e._v("\n                Continue\n              ")]),e._v(" "),t("footer",[t("p",[e._v("\n                  Questions? Contact us at\n                  "),t("a",{attrs:{href:"mailto:premium@brilliant.org",target:"_blank"}},[e._v("premium@brilliant.org")]),e._v(".\n                ")])])]:e._e()],2):e.step==="question-1"?t("div",{key:"question-1",staticClass:"step-question-1 form-content content-wrapper"},[t("header",{staticClass:"form-header"},[t("h4",[e._v("Question 1 of 2")]),e._v(" "),t("h3",[e._v("What is your goal with Brilliant?")])]),e._v(" "),t("div",{staticClass:"fields"},e._l(e.joinReasonChoices,(function(n){return t("div",{key:"joinreason-"+n[0],class:{field:true,active:e.result.join_reason_flags[n[0]]===true}},[t("label",{attrs:{for:"joinreason-"+n[0]}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.join_reason_flags[n[0]],expression:"result.join_reason_flags[choice[0]]"}],attrs:{type:"checkbox",id:"joinreason-"+n[0]},domProps:{checked:Array.isArray(e.result.join_reason_flags[n[0]])?e._i(e.result.join_reason_flags[n[0]],null)>-1:e.result.join_reason_flags[n[0]]},on:{change:function(t){var i=e.result.join_reason_flags[n[0]],a=t.target,r=a.checked?true:false;if(Array.isArray(i)){var o=null,s=e._i(i,o);if(a.checked){s<0&&e.$set(e.result.join_reason_flags,n[0],i.concat([o]))}else{s>-1&&e.$set(e.result.join_reason_flags,n[0],i.slice(0,s).concat(i.slice(s+1)))}}else{e.$set(e.result.join_reason_flags,n[0],r)}}}}),e._v("\n                  "+e._s(n[1])+"\n                ")]),e._v(" "),t("transition",{attrs:{name:"fade-fast"}},[n[0]==="other"&&e.result.join_reason_flags.other===true?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.result.join_reason_explanation,expression:"result.join_reason_explanation"}],attrs:{placeholder:"If other, please explain"},domProps:{value:e.result.join_reason_explanation},on:{input:function(n){if(n.target.composing){return}e.$set(e.result,"join_reason_explanation",n.target.value)}}}):e._e()])],1)})),0),e._v(" "),!e.inOnboardingExperiment?t("button",{staticClass:"btn",attrs:{disabled:!e.isQuestion1Answered},on:{click:function(n){return e.gotoStep("question-2")}}},[e._v("\n              Continue\n            ")]):e._e()]):e.step==="question-2"?t("div",{key:"question-2",staticClass:"step-question-2 form-content content-wrapper"},[t("header",{staticClass:"form-header"},[t("h4",[e._v("Question 2 of 2")]),e._v(" "),t("h3",[e._v("How did you hear about Brilliant?")])]),e._v(" "),t("div",{staticClass:"fields"},e._l(e.reference_choices,(function(n){return t("div",{key:"refchoice-"+n[0],staticClass:"field-wrapper"},[t("div",{class:{field:true,active:e.result.reference_v2===n[0],dim:e.result.reference_v2===e.referenceLookup.advertisement&&e.result.reference_v2!==n[0]}},[t("label",{attrs:{for:"refchoice-"+n[0]}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.reference_v2,expression:"result.reference_v2"}],attrs:{type:"radio",name:"reference",id:"refchoice-"+n[0]},domProps:{value:n[0],checked:e._q(e.result.reference_v2,n[0])},on:{change:function(t){return e.$set(e.result,"reference_v2",n[0])}}}),e._v("\n                    "+e._s(n[1])+"\n                  ")]),e._v(" "),t("transition",{attrs:{name:"fade-fast"}},[n[0]===e.referenceLookup.other&&e.result.reference_v2===e.referenceLookup.other?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.result.reference_explanation,expression:"result.reference_explanation"}],attrs:{placeholder:"If other, please explain"},domProps:{value:e.result.reference_explanation},on:{input:function(n){if(n.target.composing){return}e.$set(e.result,"reference_explanation",n.target.value)}}}):e._e()])],1),e._v(" "),t("transition",{attrs:{name:"fade-fast"}},[n[0]===e.referenceLookup.advertisement&&e.result.reference_v2===e.referenceLookup.advertisement?t("div",{staticClass:"subfields"},[t("p",[e._v("If advertisement, please choose one:")]),e._v(" "),e._l(e.advertisement_choices,(function(n){return t("div",{key:"adchoice-"+n[0],class:{field:true,active:e.result.advertisement_reference===n[0]}},[t("label",{attrs:{for:"adchoice-"+n[0]}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.result.advertisement_reference,expression:"result.advertisement_reference"}],attrs:{type:"radio",name:"advertisement_reference",id:"adchoice-"+n[0]},domProps:{value:n[0],checked:e._q(e.result.advertisement_reference,n[0])},on:{change:function(t){return e.$set(e.result,"advertisement_reference",n[0])}}}),e._v("\n                        "+e._s(n[1])+"\n                      ")]),e._v(" "),t("transition",{attrs:{name:"fade-fast"}},[n[0]===e.advertisementLookup.other&&e.result.advertisement_reference===e.advertisementLookup.other?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.result.advertisement_reference_explanation,expression:"result.advertisement_reference_explanation"}],attrs:{placeholder:"If other advertisement, please explain"},domProps:{value:e.result.advertisement_reference_explanation},on:{input:function(n){if(n.target.composing){return}e.$set(e.result,"advertisement_reference_explanation",n.target.value)}}}):e._e()])],1)}))],2):e._e()])],1)})),0),e._v(" "),!e.inOnboardingExperiment?t("button",{staticClass:"btn",attrs:{disabled:!e.isQuestion2Answered||e.isSaving},on:{click:e.submitSurvey}},[t("transition",{attrs:{name:"fade-fase",mode:"out-in"}},[!e.isSaving?t("span",[e._v("Finish")]):t("LoadingAnimation",{attrs:{type:"dots",color:"light",size:"small"}})],1)],1):e._e()]):e._e()]),e._v(" "),e.inOnboardingExperiment?t("ContinueUi",{attrs:{loading:!e.isLoaded||e.isSaving,"continue-ui-help-text":e.stepIndex===0?e.continueUiHelpText:undefined,"current-step":e.currentStep,"steps-count":e.stepsCount},on:{next:function(n){return e.goToNextStep()},"nav-back":function(n){return e.goToStepByIndex(n,true)}}}):e._e()],1)]):e._e()])],1)};var a=[];i._withStripped=true;var r=t(0);var o=t(1);var s=t(9);var d=t(165);var c=t(8);var p=t(29);var l=t(98);var m=t(297);var u=t(836);var v=t(304);var h=t(958);var f=t(70);var x=t(929);var g=t(888);var b=t(1396);let _=class e extends o["e"]{constructor(){super(...arguments);this.continueUiHelpText='Questions? Contact us at <a href="mailto:premium@brilliant.org">premium@brilliant.org</a>.';this.step="welcome";this.stepIndex=0;this.controlSteps=["welcome","question-1","question-2"];this.isSaving=false;this.isLoaded=false;this.joinReasonChoices=[["improve_in_career","To advance my career"],["learn_for_fun","To stay sharp and learn for fun"],["improve_in_school","To improve in a subject I'm studying in school"],["give_to_child","To give my child Premium"],["other","Other"]];this.result={join_reason_flags:{improve_in_school:false,improve_in_career:false,learn_for_fun:false,other:false,give_to_child:false},join_reason_explanation:"",reference_v2:null,reference_explanation:"",advertisement_reference:null,advertisement_reference_explanation:""}}get stepData(){return Object(g["a"])(this.inExperiment,this.$route.name)}get stepsCount(){return this.stepData.stepsCount}get currentStep(){const e=Object(g["b"])(this.inExperiment)?this.stepIndex:this.stepIndex+1;return this.stepData.currentStep+e}get isQuestion1Answered(){const e=Object.values(this.result.join_reason_flags).reduce((e,n)=>e||n,false);if(!e){return false}if(this.result.join_reason_flags.other&&this.result.join_reason_explanation.trim().length===0){return false}return true}get isQuestion2Answered(){if(this.result.reference_v2===null){return false}if(this.result.reference_v2===this.referenceLookup.other&&this.result.reference_explanation.trim().length===0){return false}if(this.result.reference_v2===this.referenceLookup.advertisement){if(!this.result.advertisement_reference){return false}const e=this.result.advertisement_reference_explanation;if(this.result.advertisement_reference===this.advertisementLookup.other&&e.trim().length===0){return false}}return true}get nextLocation(){if(this.inOnboardingExperiment){return{name:"nux_welcome_where_to_start"}}if(this.prepurchaseDestinationUrl){return this.prepurchaseDestinationUrl}return{name:"explorations_menu"}}get useChargebee(){return this.includedInChargebeePaywallExperiment&&this.inExperiment("chargebee_paywall_08_2020_round_3","chargebee")}get inOnboardingExperiment(){return Object(b["a"])(this.inExperiment)}gotoStep(e){this.step=e;this.stepIndex=this.controlSteps.indexOf(e);Object(l["c"])(0)}goToStepByIndex(e,n=false){if(n&&e>this.stepIndex){return}this.stepIndex=e;this.gotoStep(this.controlSteps[e])}goToNextStep(){return Object(r["a"])(this,void 0,void 0,(function*(){if(this.step==="welcome"){this.gotoStep("question-1")}else if(this.step==="question-1"){this.gotoStep("question-2")}else{yield this.submitSurvey()}}))}cleanSurveyData(){const e=Object(d["a"])(this.result);if(e.join_reason_flags.other===false){e.join_reason_explanation=""}if(e.reference_v2!==this.referenceLookup.other){e.reference_explanation=""}if(e.advertisement_reference!==this.advertisementLookup.other){e.advertisement_reference_explanation=""}return e}submitSurvey(){return Object(r["a"])(this,void 0,void 0,(function*(){this.isSaving=true;const e=this.cleanSurveyData();try{yield Object(c["c"])("/premium/success/submit/",e);yield this.$router.push(this.nextLocation)}catch(e){this.isSaving=false;yield this.$store.dispatch("errorModal/showMessage")}}))}checkLoaded(){return Object(r["a"])(this,void 0,void 0,(function*(){const e=yield Object(c["b"])("/premium/chargebee/return-api");const n=e.results.chargebee_return;if(n.is_subscribed){yield this.$store.dispatch("globals/setUser",e.globals.user);if(this.user.has_brilliant_premium&&this.user.is_during_trial){try{Object(p["a"])(this.$store);Object(p["b"])(this.$store);Object(p["d"])("Start trial")}catch(e){try{f["b"].captureMessage("Failed to track Google/Quantcast")}catch(e){}}}this.isLoaded=true}else{setTimeout(()=>this.checkLoaded(),2e3)}}))}mounted(){if(!this.user.has_brilliant_premium&&!this.$route.query.r){setTimeout(()=>{this.$router.push({name:this.$route.name,query:{r:"1"}})},500)}if(this.useChargebee){this.checkLoaded()}else{this.isLoaded=true}if(this.inOnboardingExperiment){Object(x["b"])();window.addEventListener("resize",x["b"])}}destroy(){if(this.inOnboardingExperiment){window.removeEventListener("resize",x["b"])}}};_=Object(r["b"])([Object(o["a"])({components:{AppHeader:v["a"],ContinueUi:h["a"],LoadingAnimation:m["a"],ResponsiveImage:u["a"]},computed:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Object(s["mapGetters"])("pageHeader",["isMobile"])),Object(s["mapState"])("globals",["user"])),Object(s["mapGetters"])("globals",["inExperiment","includedInChargebeePaywallExperiment"])),Object(s["mapState"])("checkoutSuccessContext",{prepurchaseDestinationUrl:e=>e.prepurchase_destination_url,referenceLookup:e=>e.reference_lookup,advertisementLookup:e=>e.advertisement_lookup})),Object(s["mapState"])("checkoutSuccessContext",["has_survey_response","reference_choices","advertisement_choices"])),metaInfo:{title:"Welcome to Brilliant Premium"}})],_);var w=_;var y=w;var j=t(2289);var F=t(5);var k=Object(F["a"])(y,i,a,false,null,"7c99dc10",null);if(false){var O}k.options.__file="frontend/views/premium/success/PremiumSuccess.vue";var C=n["default"]=k.exports},70:function(e,n,t){"use strict";var i=t(302);var a=t.n(i);t.d(n,"a",(function(){return a.a}));var r=t(133);var o=t.n(r);n["b"]=o.a},836:function(e,n,t){"use strict";var i=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("img",{attrs:{src:e.src[0],srcset:e.srcset}})};var a=[];i._withStripped=true;var r=t(0);var o=t(1);let s=class e extends o["e"]{get srcset(){return this.src.map((e,n)=>`${e} ${n+1}x`).join(", ")}};Object(r["b"])([Object(o["c"])(Array)],s.prototype,"src",void 0);s=Object(r["b"])([o["a"]],s);var d=s;var c=d;var p=t(5);var l=Object(p["a"])(c,i,a,false,null,null,null);if(false){var m}l.options.__file="frontend/components/ResponsiveImage.vue";var u=n["a"]=l.exports}}]);
//# sourceMappingURL=PremiumSuccess.f4609c5af051dcdf9845.js.map