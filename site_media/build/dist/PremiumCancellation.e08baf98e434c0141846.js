(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[93],{1262:function(e,n,t){var a=t(2442);if(typeof a==="string")a=[[e.i,a,""]];if(a.locals)e.exports=a.locals;var i=t(15).default;var s=i("396b509b",a,false,{});if(false){}},1390:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");n.code="MODULE_NOT_FOUND";throw n}t.keys=function(){return[]};t.resolve=t;e.exports=t;t.id=1390},2441:function(e,n,t){"use strict";var a=t(1262);var i=t.n(a);var s=i.a},2442:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-ee4a74f4] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.main[data-v-ee4a74f4] {\n  display: flex;\n  justify-content: center;\n  margin-top: 48px;\n  margin-bottom: 64px;\n}\n.main a[data-v-ee4a74f4]:not(.btn) {\n    color: #000000;\n    opacity: 0.55;\n    text-decoration: underline;\n    transition: opacity 100ms linear;\n}\n.main a[data-v-ee4a74f4]:not(.btn):hover {\n      opacity: 0.8;\n}\n.wrapper[data-v-ee4a74f4] {\n  width: 1050px;\n  max-width: 100%;\n  padding: 48px 172px 32px 172px;\n  background: #FFFFFF;\n  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 799px) {\n.wrapper[data-v-ee4a74f4] {\n      padding: 48px 30px 32px;\n}\n}\n.btn[data-v-ee4a74f4] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 310px;\n  height: 48px;\n  background: #000000;\n  border-radius: 6px;\n  transition: opacity 100ms linear;\n  color: #FFFFFF;\n  font-weight: 600;\n  font-size: 16px;\n}\n.btn[data-v-ee4a74f4]:hover {\n    opacity: 0.9;\n    color: #FFFFFF;\n}\n.btn[data-v-ee4a74f4]:disabled {\n    opacity: 0.4;\n}\n.btn[data-v-ee4a74f4]:disabled:hover {\n      opacity: 0.4;\n}\n.btn:disabled .loading-anim[data-v-ee4a74f4] {\n      position: absolute;\n}\n.btn[data-v-ee4a74f4]:after {\n    border-color: rgba(255, 255, 255, 0.6);\n}\n.btn.btn-secondary[data-v-ee4a74f4] {\n    background: #ECEDEF;\n    color: #000000;\n}\n.form-content[data-v-ee4a74f4] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.form-header[data-v-ee4a74f4] {\n  margin-bottom: 36px;\n}\n.form-header h3[data-v-ee4a74f4] {\n    margin-bottom: 0;\n    font-size: 18px;\n    line-height: 1.33em;\n    letter-spacing: 0.005em;\n    text-align: center;\n    color: #000000;\n}\n.form-header h4[data-v-ee4a74f4] {\n    margin-bottom: 20px;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 1.37em;\n    text-align: center;\n    text-transform: uppercase;\n    color: rgba(0, 0, 0, 0.55);\n}\n.form-header p[data-v-ee4a74f4] {\n    text-align: left !important;\n}\n.form-footer[data-v-ee4a74f4] {\n  margin-top: 32px;\n  font-size: 16px;\n  line-height: 1.37em;\n  text-align: center;\n}\n.fields[data-v-ee4a74f4] {\n  width: 100%;\n  margin-bottom: 40px;\n}\n.field[data-v-ee4a74f4] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 16px;\n  border: 1px solid #DDDDDD;\n  border-radius: 8px;\n  transition: border-color 100ms linear;\n  cursor: pointer;\n}\n.field[data-v-ee4a74f4]:last-child {\n    margin-bottom: 0;\n}\n.field[data-v-ee4a74f4]:hover {\n    border-color: #000000;\n}\n.field.active[data-v-ee4a74f4], .field.active[data-v-ee4a74f4]:hover {\n    border-color: #FFC500;\n}\n.field.dim[data-v-ee4a74f4] {\n    opacity: 0.4;\n}\n.field input[type=checkbox][data-v-ee4a74f4],\n  .field input[type=radio][data-v-ee4a74f4] {\n    display: none;\n}\n.field label[data-v-ee4a74f4] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 53px;\n    padding: 0 24px;\n    font-size: 16px;\n    line-height: 1.37em;\n    letter-spacing: 0.005em;\n    color: #000000;\n    cursor: pointer;\n}\n.field textarea[data-v-ee4a74f4] {\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 16px 24px;\n    border: 0;\n    border-radius: 12px;\n    font-size: 16px;\n    line-height: 1.37em;\n    letter-spacing: 0.005em;\n    color: #000000;\n    resize: vertical;\n}\n.field textarea.other-text[data-v-ee4a74f4] {\n      border-top: 1px solid #FFC500;\n      border-radius: 0 0 12px 12px;\n}\n.step header[data-v-ee4a74f4] {\n  margin-bottom: 40px;\n}\n.step header h2[data-v-ee4a74f4] {\n    text-align: center;\n    font-size: 32px;\n}\n.step header p[data-v-ee4a74f4] {\n    text-align: center;\n    color: rgba(0, 0, 0, 0.55);\n}\n.step .feature-card[data-v-ee4a74f4] {\n  border: 1px solid #ECEDEF;\n  padding: 20px;\n  margin-bottom: 40px;\n}\n.step .feature-card .main-content[data-v-ee4a74f4] {\n    display: inline-block;\n    text-align: left;\n}\n.step .feature-card .main-content p[data-v-ee4a74f4] {\n      color: rgba(0, 0, 0, 0.55);\n      max-width: 400px;\n}\n@media (max-width: 799px) {\n.step .feature-card[data-v-ee4a74f4] {\n      text-align: center;\n}\n}\n.step .main-block[data-v-ee4a74f4] {\n  width: 400px;\n  max-width: 100%;\n  margin-right: 48px;\n  display: inline-block;\n}\n.step .icon-block[data-v-ee4a74f4] {\n  display: inline-block;\n}\n@media (min-width: 800px) {\n.step .icon-block[data-v-ee4a74f4] {\n      float: right;\n}\n}\n@media (max-width: 799px) {\n.step .icon-block[data-v-ee4a74f4] {\n      margin-top: 16px;\n}\n}\n@media (max-width: 799px) {\n.step .section-body[data-v-ee4a74f4] {\n    text-align: center;\n}\n}\n.step ul.check-list[data-v-ee4a74f4] {\n  list-style-type: none;\n  display: inline-block;\n  text-align: left;\n}\n.step ul.check-list li[data-v-ee4a74f4] {\n    position: relative;\n    padding-left: 32px;\n    margin-bottom: 24px;\n    line-height: 1.2;\n    color: rgba(0, 0, 0, 0.55);\n}\n.step ul.check-list li > span[data-v-ee4a74f4] {\n      display: inline-block;\n      position: absolute;\n      top: -3px;\n      left: 0;\n}\n.step .section-footer[data-v-ee4a74f4] {\n  clear: both;\n  width: 100%;\n  text-align: center;\n}\n.step .section-footer .btn[data-v-ee4a74f4] {\n    display: inline-block;\n    width: calc(50% - 50px);\n    margin: 0 24px 40px;\n}\n@media (max-width: 549px) {\n.step .section-footer .btn[data-v-ee4a74f4] {\n        width: 100%;\n        margin: 0 0 20px;\n}\n}\n.step .section-footer .return-btn[data-v-ee4a74f4] {\n    background: #ECEDEF;\n    color: #000000;\n    border: none;\n}\n.step .section-footer .confirm-btn[data-v-ee4a74f4] {\n    background: #000000;\n}\n.step .section-footer .question-link[data-v-ee4a74f4] {\n    text-align: center;\n}\n.step .section-footer .lifetime-upsell[data-v-ee4a74f4] {\n    color: rgba(0, 0, 0, 0.55);\n    max-width: 250px;\n    margin: 0 auto 20px;\n}\n',""])},2557:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("div",{staticClass:"cancel-page"},[t("main",{staticClass:"main"},[t("div",{staticClass:"wrapper"},[t("transition",{attrs:{name:"fade-fast",mode:"out-in"}},[e.step==="form"?t("div",{key:"form",staticClass:"step form-content"},[t("header",{staticClass:"form-header"},[t("h2",[e._v("How can we help you?")]),e._v(" "),t("p",[e._v("\n              We’re sorry to hear you’re considering downgrading. \n              Could you tell us why? We might be able to help...\n            ")])]),e._v(" "),t("div",{staticClass:"fields"},e._l(e.cancelReasonChoices,(function(n){return t("div",{key:"cancelreason-"+n[0],class:{field:true,active:e.formResult.cancelReason===n[0]}},[t("label",{attrs:{for:"cancelreason-"+n[0]}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.formResult.cancelReason,expression:"formResult.cancelReason"}],attrs:{type:"radio",id:"cancelreason-"+n[0]},domProps:{value:n[0],checked:e._q(e.formResult.cancelReason,n[0])},on:{change:function(t){return e.$set(e.formResult,"cancelReason",n[0])}}}),e._v("\n                "+e._s(n[1])+"\n              ")]),e._v(" "),t("transition",{attrs:{name:"fade-fast"}},[n[0]==="other"&&e.formResult.cancelReason==="other"?t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.formResult.otherText,expression:"formResult.otherText"}],staticClass:"other-text",attrs:{placeholder:"If other, please explain"},domProps:{value:e.formResult.otherText},on:{input:function(n){if(n.target.composing){return}e.$set(e.formResult,"otherText",n.target.value)}}}):e._e()])],1)})),0),e._v(" "),t("div",{staticClass:"section-footer"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_nevermind_survey"},expression:"{ axId: 'clicked_autorenewcancel_nevermind_survey' }",arg:"click"}],staticClass:"btn return-btn",on:{click:e.exitFlow}},[e._v("\n              Keep my subscription\n            ")]),e._v(" "),t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_cancel_plan_survey"},expression:"{ axId: 'clicked_autorenewcancel_cancel_plan_survey' }",arg:"click"}],staticClass:"btn confirm-btn",attrs:{disabled:!e.isSurveyCompleted||e.isSaving},on:{click:e.submitSurvey}},[e._v("\n              Cancel Premium plan\n            ")])])]):e.step==="confirm_cancellation"?t("div",{key:"confirm_cancellation",staticClass:"step"},[e.formResult.cancelReason==="no_surprise"&&e.remainingDays>=11?t("header",[t("h2",[e._v("We won’t let your next charge surprise you")]),e._v(" "),t("p",[e._v("\n              We’ll email you "+e._s(e.remainingDays>=31?"twice (30 and 10 days)":"10 days")+"\n              before your next billing period ends (on "+e._s(e.subscriptionEndDate)+").\n              In the meantime, you can keep enjoying these Premium features.\n            ")])]):t("header",[t("h2",[e._v("Confirm your cancellation")]),e._v(" "),t("p",[e._v("You have "+e._s(e.remainingDays)+" days in your subscription. After that, you’ll lose access to...")])]),e._v(" "),t("div",{staticClass:"feature-card"},[t("div",{staticClass:"main-content"},[t("h3",[e._v(e._s(e.roughNumCourses)+"+ interactive courses")]),e._v(" "),t("p",[e._v("We release new courses and chapters each month.\n                You might enjoy two of our newest courses:\n                "),t("a",{attrs:{href:e.latest_courses[0].absolute_url}},[e._v(e._s(e.latest_courses[0].name))]),e._v(" and\n                "),t("a",{attrs:{href:e.latest_courses[1].absolute_url}},[e._v(e._s(e.latest_courses[1].name))]),e._v(".\n              ")])]),e._v(" "),t("span",{staticClass:"icon-block b-sprite-cancellation-computer"})]),e._v(" "),t("div",{staticClass:"feature-card"},[t("div",{staticClass:"main-content"},[t("h3",[e._v("Offline mode on iOS and Android apps")]),e._v(" "),t("p",[e._v("\n                Download our native apps and take up to 6 courses offline at once.\n                You can solve courses no matter where you are, or how spotty your internet connection.\n              ")])]),e._v(" "),t("span",{staticClass:"icon-block b-sprite-cancellation-mobile"})]),e._v(" "),t("div",{staticClass:"feature-card"},[t("div",{staticClass:"main-content"},[t("h3",[e._v("Entire archive of 500+ Daily Challenges")]),e._v(" "),t("p",[e._v("\n                Enjoy bite-sized challenges in math, science, or computer science\n                you can solve in just 10-15 minutes a day.\n              ")])]),e._v(" "),t("span",{staticClass:"icon-block b-sprite-cancellation-calendar"})]),e._v(" "),t("div",{staticClass:"section-footer"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_keep_subscription"},expression:"{ axId: 'clicked_autorenewcancel_keep_subscription' }",arg:"click"}],staticClass:"btn return-btn",on:{click:e.exitFlow}},[e._v("\n              Keep my subscription\n            ")]),e._v(" "),t("button",{staticClass:"btn confirm-btn",on:{click:e.submitCancellation}},[e._v("\n              Confirm cancellation\n            ")]),e._v(" "),e.formResult.cancelReason==="too_expensive"?[t("p",[t("b",[e._v("In it for the long haul?")])]),e._v(" "),t("p",{staticClass:"lifetime-upsell"},[t("a",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_lifetime_upgrade"},expression:"{ axId: 'clicked_autorenewcancel_lifetime_upgrade' }",arg:"click"}],attrs:{href:"/premium"}},[e._v("\n                  Switch to Lifetime\n                ")]),e._v("\n                and never deal with a subscription payment again.\n              ")])]:t("p",{staticClass:"question-link"},[t("a",{attrs:{href:"mailto:support@brilliant.org"}},[e._v("Questions?")])])],2)]):e.step==="annual_upsell"?t("div",{key:"annual_upsell",staticClass:"step"},[t("header",[t("h2",[e._v("Switch to annual and save 60%")]),e._v(" "),t("p",[e._v("\n              Switch to annual billing and save over $180 each year.\n              You’ll retain access to all of your existing Premium features, but at a lower monthly price.\n            ")])]),e._v(" "),t("div",{staticClass:"section-body"},[t("ul",{staticClass:"main-block check-list"},[t("li",[t("span",{staticClass:"b-sprite-paywall-check-mark-green"}),e._v("\n                Entire course library of 70+ guided courses\n              ")]),e._v(" "),t("li",[t("span",{staticClass:"b-sprite-paywall-check-mark-green"}),e._v("\n                Hundreds of Daily Challenges to sharpen your mind\n              ")]),e._v(" "),t("li",[t("span",{staticClass:"b-sprite-paywall-check-mark-green"}),e._v("\n                Offline mode on our iOS and Android apps to learn anywhere\n              ")])]),e._v(" "),t("span",{staticClass:"icon-block b-sprite-cancellation-orbit"})]),e._v(" "),t("div",{staticClass:"section-footer"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_annual_upgrade"},expression:"{ axId: 'clicked_autorenewcancel_annual_upgrade' }",arg:"click"}],staticClass:"btn return-btn",on:{click:e.upgradeToAnnual}},[e._v("\n              Switch to annual\n            ")]),e._v(" "),t("button",{staticClass:"btn confirm-btn",on:{click:e.submitCancellation}},[e._v("\n              Cancel subscription\n            ")])])]):e.step==="cancellation_complete"?t("div",{key:"cancellation_complete",staticClass:"step"},[t("header",[t("h2",[e._v("Cancellation confirmed")])]),e._v(" "),t("div",{staticClass:"section-body"},[t("div",{staticClass:"main-block"},[t("p",[e._v("\n                We’re sorry to see you go :( \n                You’ll still have access to all of your Premium features until\n                "+e._s(e.subscriptionEndDate)+", but you won’t be charged again.\n              ")]),e._v(" "),e.formResult.cancelReason==="pause_subscription"?t("p",[t("b",[e._v("Thinking about coming back?")]),t("br"),e._v("\n                If you just wanted to take a break from Premium,\n                consider setting up a reminder to resubscribe.\n                You’ll keep your current rate of "+e._s(e.subscriptionRate)+",\n                and we’ll handle all the details.\n              ")]):t("p",[t("b",[e._v("Questions?")]),t("br"),e._v("\n                Please contact us if you have any questions or concerns.\n                If you didn’t mean to cancel, you can\n                "),t("a",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_reactivate_subscription"},expression:"{ axId: 'clicked_autorenewcancel_reactivate_subscription' }",arg:"click"}],attrs:{href:"/payment/subscription_settings/"}},[e._v("\n                  re-activate your subscription\n                ")]),e._v("\n                at any time.\n              ")])]),e._v(" "),t("span",{staticClass:"icon-block b-sprite-cancellation-satellite"})]),e._v(" "),t("div",{staticClass:"section-footer"},[e.formResult.cancelReason==="pause_subscription"?[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_backtobrilliant"},expression:"{ axId: 'clicked_autorenewcancel_backtobrilliant' }",arg:"click"}],staticClass:"btn return-btn",on:{click:e.exitFlow}},[e._v("\n                Back to Brilliant\n              ")]),e._v(" "),t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_set_resubscribe_reminder"},expression:"{ axId: 'clicked_autorenewcancel_set_resubscribe_reminder' }",arg:"click"}],staticClass:"btn confirm-btn",on:{click:e.setBreakReminder}},[e._v("\n                Set a reminder\n              ")]),e._v(" "),t("p",{staticClass:"question-link"},[e._v("\n                Questions? \n                "),t("a",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_confirmed_questions"},expression:"{ axId: 'clicked_autorenewcancel_confirmed_questions' }",arg:"click"}],attrs:{href:"mailto:support@brilliant.org"}},[e._v("\n                  Contact support\n                ")])])]:[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_cancel_confirmed_got_it"},expression:"{ axId: 'clicked_autorenewcancel_cancel_confirmed_got_it' }",arg:"click"}],staticClass:"btn confirm-btn",on:{click:e.exitFlow}},[e._v("\n                Got it\n              ")]),e._v(" "),t("p",{staticClass:"question-link"},[t("a",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_confirmed_questions"},expression:"{ axId: 'clicked_autorenewcancel_confirmed_questions' }",arg:"click"}],attrs:{href:"mailto:support@brilliant.org"}},[e._v("\n                  Contact support\n                ")])])]],2)]):e.step==="break_reminder"?t("div",{key:"break_reminder",staticClass:"step form-content"},[t("header",[t("h2",[e._v("Let us know when you want to come back")]),e._v(" "),t("p",[e._v("\n              Tell us when you want to re-subscribe — whether that’s a specific date,\n              if you’re waiting for a particular course or chapter to come out, or something else.\n            ")]),e._v(" "),t("p",[e._v("\n              When the time comes, we’ll let you know (and make sure you keep your current rate)!\n            ")])]),e._v(" "),t("div",{staticClass:"fields"},[t("div",{staticClass:"field"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.breakReminderText,expression:"breakReminderText"}],domProps:{value:e.breakReminderText},on:{input:function(n){if(n.target.composing){return}e.breakReminderText=n.target.value}}})])]),e._v(" "),t("div",{staticClass:"section-footer"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_resubscribe_reminder_confirm"},expression:"{ axId: 'clicked_autorenewcancel_resubscribe_reminder_confirm' }",arg:"click"}],staticClass:"btn confirm-btn",attrs:{disabled:!e.breakReminderText||e.isSaving},on:{click:e.submitBreakReminder}},[e._v("\n              Confirm\n            ")])])]):e.step==="break_reminder_complete"?t("div",{key:"break_reminder_complete",staticClass:"step"},[t("header",[t("h2",[e._v("Reminder Confirmed")]),e._v(" "),t("p",[e._v("\n              We’ll send an email to "+e._s(e.user.email)+" when the time comes.\n              In the meantime, feel free to\n              "),t("a",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_confirmed_questions"},expression:"{ axId: 'clicked_autorenewcancel_confirmed_questions' }",arg:"click"}],attrs:{href:"mailto:support@brilliant.org"}},[e._v("\n                contact support\n              ")]),e._v("\n              with any questions or concerns.\n            ")])]),e._v(" "),t("div",{staticClass:"section-body"},[t("p",{staticClass:"reminder-text"},[e._v(e._s(e.breakReminderText))])]),e._v(" "),t("div",{staticClass:"section-footer"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_backtobrilliant"},expression:"{ axId: 'clicked_autorenewcancel_backtobrilliant' }",arg:"click"}],staticClass:"btn confirm-btn",on:{click:e.exitFlow}},[e._v("\n              Back to Brilliant\n            ")])])]):e.step==="refund_confirmed"?t("div",{key:"refund_confirmed",staticClass:"step"},[t("header",[t("h2",[e._v("Refund confirmed")])]),e._v(" "),t("div",{staticClass:"section-body"},[t("div",{staticClass:"main-block"},[t("p",[e._v("We don’t want anyone paying for Brilliant without meaning to!")]),e._v(" "),t("p",[e._v("\n                We just initiated a "),t("b",[e._v("refund of your most recent subscription")]),e._v(".\n                You should see the funds returned to your account in the next 5-10 business days.\n              ")])]),e._v(" "),t("span",{staticClass:"icon-block b-sprite-cancellation-satellite"})]),e._v(" "),t("div",{staticClass:"section-footer"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_cancel_refund_confirmed_got_it"},expression:"{ axId: 'clicked_autorenewcancel_cancel_refund_confirmed_got_it' }",arg:"click"}],staticClass:"btn confirm-btn",on:{click:e.exitFlow}},[e._v("\n              Got it\n            ")]),e._v(" "),t("p",{staticClass:"question-link"},[e._v("\n              Didn't want a refund?\n              "),t("a",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_confirmed_questions"},expression:"{ axId: 'clicked_autorenewcancel_confirmed_questions' }",arg:"click"}],attrs:{href:"mailto:support@brilliant.org"}},[e._v("\n                Contact support\n              ")])])])]):e.step==="refund_failed"?t("div",{key:"refund_failed",staticClass:"step"},[t("header",[t("h2",[e._v("Refund failed 🤔")])]),e._v(" "),t("div",{staticClass:"section-body"},[t("div",{staticClass:"main-block"},[t("p",[e._v("We attempted to process your refund, but the transaction failed.")]),e._v(" "),t("p",[e._v("\n                Our support team has been notified and will reach out to you directly at\n                "+e._s(e.user.email)+" within the next 2 business days.\n              ")])]),e._v(" "),t("span",{staticClass:"icon-block b-sprite-cancellation-satellite"})]),e._v(" "),t("div",{staticClass:"section-footer"},[t("button",{directives:[{name:"track",rawName:"v-track:click",value:{axId:"clicked_autorenewcancel_cancel_refund_confirmed_got_it"},expression:"{ axId: 'clicked_autorenewcancel_cancel_refund_confirmed_got_it' }",arg:"click"}],staticClass:"btn confirm-btn",on:{click:e.exitFlow}},[e._v("\n              Got it\n            ")])])]):e._e()])],1)])])};var i=[];a._withStripped=true;var s=t(0);var r=t(1);var o=t(9);var c=t(1002);var l=t.n(c);var d=t(8);var u=t(29);let p=class e extends r["e"]{constructor(){super(...arguments);this.step="form";this.isSaving=false;this.cancelReasonFlags={not_using:false,no_surprise:false,missed_cancellation:false,pause_subscription:false,too_expensive:false,not_needed:false,other:false};this.cancelReason=null;this.formResult={cancelReason:null,otherText:""};this.breakReminderText=""}get cancelReasonChoices(){return[["not_using","I don't have enough time right now, but I still want to learn these topics"],["no_surprise","I'm just canceling so I don't get charged by surprise"],...this.showMissedCancellation?this.missedCancellationReasons:[],["pause_subscription","I just want to take a break from Premium"],["too_expensive","I want to save money"],["not_needed","I no longer want to learn the topics covered on Brilliant"],["other","Other"]]}get missedCancellationReasons(){const e=this.is_renewal_subscriber?"I didn't mean to renew for another year":"I meant to cancel my free trial";return[["missed_cancellation",e]]}get showMissedCancellation(){return this.is_trial_subscriber||this.is_renewal_subscriber}get remainingDays(){const e=l.a.unix(this.subscription_end_date_ts);return e.diff(l()(),"days")}get subscriptionRate(){const e=this.is_monthly?"month":"year";return`${this.subscription_rate}/${e}`}get subscriptionEndDate(){const e=l.a.unix(this.subscription_end_date_ts);return e.format("MMMM D, YYYY")}get roughNumCourses(){const e=this.num_courses;return e-e%5}get isSurveyCompleted(){if(this.formResult.cancelReason==="other"){return this.formResult.otherText.trim().length>=20}return this.formResult.cancelReason!=null}getPostFormStep(){return Object(s["a"])(this,void 0,void 0,(function*(){switch(this.formResult.cancelReason){case"not_using":case"pause_subscription":case"not_needed":case"no_surprise":case"other":default:return"confirm_cancellation";case"missed_cancellation":if(this.eligible_for_refund){return this.getRefundStep()}return"confirm_cancellation";case"too_expensive":if(this.is_monthly){return"annual_upsell"}return"confirm_cancellation"}}))}getRefundStep(){return Object(s["a"])(this,void 0,void 0,(function*(){try{yield Object(d["c"])(`/payment_processor/automatic-refund/${this.subscription_id}/`)}catch(e){return"refund_failed"}return"refund_confirmed"}))}cleanSurveyData(){const e={why_canceling_flags:Object.assign({},this.cancelReasonFlags),other_text:this.formResult.otherText};e.why_canceling_flags[String(this.formResult.cancelReason)]=true;if(e.why_canceling_flags.other===false){e.other_text=""}return e}submitSurvey(){return Object(s["a"])(this,void 0,void 0,(function*(){this.isSaving=true;const e=this.cleanSurveyData();try{yield Object(d["c"])("/payment_processor/cancel-premium/submit/",e);this.step=yield this.getPostFormStep();this.isSaving=false}catch(e){this.isSaving=false;this.$store.dispatch("errorModal/showMessage")}}))}exitFlow(){window.location.assign("/")}upgradeToAnnual(){return Object(s["a"])(this,void 0,void 0,(function*(){window.location.assign("/payment/subscription_settings/")}))}submitCancellation(){return Object(s["a"])(this,void 0,void 0,(function*(){this.isSaving=true;Object(u["e"])("ui",{action:"click",element_id:"clicked_autorenewcancel_confirm_cancel"});try{yield Object(d["b"])(`/payment_processor/suspend_subscription/?subscription_id=${this.subscription_id}`);this.step="cancellation_complete";this.isSaving=false}catch(e){this.isSaving=false;this.$store.dispatch("errorModal/showMessage")}}))}setBreakReminder(){this.step="break_reminder"}submitBreakReminder(){return Object(s["a"])(this,void 0,void 0,(function*(){this.isSaving=true;const e={reminder_text:this.breakReminderText};try{yield Object(d["c"])(`/payment_processor/resubscribe-reminder/${this.subscription_id}/`,e);this.step="break_reminder_complete";this.isSaving=false}catch(e){this.isSaving=false;this.$store.dispatch("errorModal/showMessage")}}))}};p=Object(s["b"])([Object(r["a"])({computed:Object.assign(Object.assign(Object.assign({},Object(o["mapState"])("globals",["user"])),Object(o["mapState"])("numCourses",["num_courses"])),Object(o["mapState"])("premiumCancellation",["eligible_for_refund","is_monthly","is_renewal_subscriber","is_trial_subscriber","latest_courses","subscription_end_date_ts","subscription_id","subscription_rate"])),metaInfo:{title:"Cancel Premium"}})],p);var m=p;var v=m;var _=t(2441);var f=t(5);var b=Object(f["a"])(v,a,i,false,null,"ee4a74f4",null);if(false){var h}b.options.__file="frontend/views/premium/cancellation/PremiumCancellation.vue";var k=n["default"]=b.exports}}]);
//# sourceMappingURL=PremiumCancellation.e08baf98e434c0141846.js.map