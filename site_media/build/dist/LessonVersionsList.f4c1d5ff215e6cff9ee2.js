(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[79],{1144:function(e,n,t){var a=t(2227);if(typeof a==="string")a=[[e.i,a,""]];if(a.locals)e.exports=a.locals;var s=t(15).default;var r=s("6df7fbaf",a,false,{});if(false){}},2226:function(e,n,t){"use strict";var a=t(1144);var s=t.n(a);var r=s.a},2227:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,'@use "sass:map";\n.no-scroll[data-v-32eecd0f] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\nmain[data-v-32eecd0f] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  background: #FFFFFF;\n}\nmain header.header[data-v-32eecd0f] {\n    display: flex;\n    flex-direction: column;\n}\nmain header.header .nav-bar[data-v-32eecd0f] {\n      display: flex;\n      align-items: center;\n      padding: 16px;\n}\nmain header.header .nav-bar[data-v-32eecd0f]  .nav-btn {\n        display: flex;\n        align-items: center;\n        padding: 4px 8px;\n}\nmain header.header .nav-bar[data-v-32eecd0f]  .nav-btn + .nav-btn {\n          margin-left: 8px;\n}\nmain header.header .nav-bar .title-block[data-v-32eecd0f] {\n        flex: 1;\n        padding: 0 16px;\n}\nmain header.header .nav-bar .title-block h2[data-v-32eecd0f] {\n          margin: 0;\n}\nmain .tabs[data-v-32eecd0f] {\n    flex: none;\n    display: flex;\n    justify-content: flex-start;\n    border: 1px solid #ccc;\n    border-width: 1px 0;\n    background: #f3f3f3;\n}\nmain .tabs button[data-v-32eecd0f] {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 30px;\n      padding: 0 16px;\n      margin: 0;\n      border: 0;\n      font-size: 15px;\n      background: transparent;\n      color: #000000;\n}\nmain .tabs button.active[data-v-32eecd0f] {\n        font-weight: bold;\n        background: rgba(0, 0, 0, 0.1);\n}\nmain .tabs button.active[data-v-32eecd0f]:hover {\n          background: rgba(0, 0, 0, 0.1);\n}\nmain .tabs button[data-v-32eecd0f]:hover {\n        background: rgba(0, 0, 0, 0.05);\n}\n.page-body[data-v-32eecd0f] {\n  padding: 24px 24px;\n  overflow-y: auto;\n}\n.version-cards[data-v-32eecd0f] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 300px);\n  gap: 24px;\n  margin: 0;\n  list-style: none;\n}\n.card[data-v-32eecd0f] {\n  position: relative;\n  border: 1px solid #EEA71F;\n  border-radius: 7px;\n  transition: box-shadow 100ms;\n  overflow: hidden;\n}\n.card[data-v-32eecd0f]:hover {\n    box-shadow: 3px 5px 10px #C4C4C4;\n}\n.card.draft[data-v-32eecd0f] {\n    border-color: #EEA71F;\n}\n.card.draft header[data-v-32eecd0f] {\n      background: #EEA71F;\n}\n.card.published[data-v-32eecd0f] {\n    border-color: #179E7E;\n}\n.card.published header[data-v-32eecd0f] {\n      background: #179E7E;\n}\n.card.experimental[data-v-32eecd0f] {\n    border-color: #48d1cc;\n}\n.card.experimental header[data-v-32eecd0f] {\n      background: #48d1cc;\n}\n.card.retired[data-v-32eecd0f] {\n    border-color: #a4aab0;\n}\n.card.retired header[data-v-32eecd0f] {\n      background: #a4aab0;\n}\n.card.legacy[data-v-32eecd0f] {\n    border-color: #575d64;\n}\n.card.legacy header[data-v-32eecd0f] {\n      background: #575d64;\n}\n.card header[data-v-32eecd0f] {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 8px;\n    background: #EEA71F;\n}\n.card header *[data-v-32eecd0f] {\n      color: #FFFFFF;\n}\n.card header h3[data-v-32eecd0f] {\n      margin: 0;\n}\n.version-link[data-v-32eecd0f] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n.preview-link[data-v-32eecd0f] {\n  position: absolute;\n  top: 4px;\n  right: 8px;\n  border: 1px solid #FFFFFF;\n  border-radius: 4px;\n  line-height: 1.2;\n  padding: 0 4px;\n  color: #FFFFFF;\n  transition: color 100ms linear, background-color 100ms linear;\n}\n.preview-link[data-v-32eecd0f]:hover {\n    color: #1F1F1F;\n    background: #FFFFFF;\n}\n.card-body[data-v-32eecd0f] {\n  flex: 1;\n  padding: 16px 24px;\n}\n.card-body p[data-v-32eecd0f] {\n    color: #899098;\n    margin: 0 0 4px 0;\n    line-height: 1.4em;\n}\n.card-body p[data-v-32eecd0f]:last-child {\n      margin: 0;\n}\n.card-body p.state[data-v-32eecd0f] {\n      font-weight: bold;\n      text-transform: capitalize;\n}\n.empty[data-v-32eecd0f] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 200px;\n  color: rgba(0, 0, 0, 0.5);\n}\n[data-v-32eecd0f] .btn {\n  height: 38px;\n  border-radius: 6px;\n  font-size: 18px;\n}\n[data-v-32eecd0f] .btn:not(.btn-accent) {\n    border-color: #c4c4c4;\n    color: #000000;\n    background: #FFFFFF;\n}\n[data-v-32eecd0f] .btn:not(.btn-accent):hover {\n      border-color: #000000;\n      color: #000000;\n}\n[data-v-32eecd0f] .btn:not(.btn-accent):disabled:hover {\n      border-color: #c4c4c4;\n}\n[data-v-32eecd0f] .btn.btn-accent {\n    border: 0;\n    background: #000000;\n    color: #FFFFFF;\n}\n[data-v-32eecd0f] .btn.btn-outline {\n    background: transparent;\n    border-color: #000000;\n}\n.staff-member[data-v-32eecd0f] {\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.5);\n}\n.staff-member p[data-v-32eecd0f] {\n    margin: 0;\n}\n.staff-member .btn-link[data-v-32eecd0f] {\n    margin-left: 8px;\n    color: rgba(0, 0, 0, 0.5);\n    text-decoration: underline;\n}\n.staff-member .btn-link[data-v-32eecd0f]:hover {\n      color: rgba(0, 0, 0, 0.8);\n      text-decoration: none;\n}\n.staff-member-form[data-v-32eecd0f] {\n  font-size: 14px;\n}\n.staff-member-form select[data-v-32eecd0f] {\n    height: 32px;\n    margin: 0;\n    border-radius: 6px;\n}\n.staff-member-form .btn[data-v-32eecd0f] {\n    height: 32px;\n    margin: -1px 0 0 8px;\n    font-size: inherit;\n}\n.staff-member-form .btn-link[data-v-32eecd0f] {\n    margin-left: 8px;\n    color: rgba(0, 0, 0, 0.5);\n    text-decoration: underline;\n}\n.staff-member-form .btn-link[data-v-32eecd0f]:hover {\n      color: rgba(0, 0, 0, 0.8);\n      text-decoration: none;\n}\n.staff-member-form .error[data-v-32eecd0f] {\n    margin: 0;\n    color: tomato;\n}\n',""])},2551:function(e,n,t){"use strict";t.r(n);var a=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("main",[t("header",{staticClass:"header"},[t("div",{staticClass:"nav-bar"},[t("router-link",{staticClass:"nav-btn btn",attrs:{to:e.backButtonInfo.url,title:e.backButtonInfo.title}},[e._v("\n        ←\n      ")]),e._v(" "),!e.isSandboxLesson?t("AuthoringHomeButton"):e._e(),e._v(" "),t("div",{staticClass:"title-block"},[t("h2",[e._v(e._s(e.mainLessonVersion.lesson_title))]),e._v(" "),e.showStaffMemberResponsibleForm?t("form",{staticClass:"staff-member-form",on:{submit:function(n){n.preventDefault();return e.handleSubmitStaffMemberResponsibleForm(n)}}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.staffMemberResponsibleUserIdChoice,expression:"staffMemberResponsibleUserIdChoice"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){var n="_value"in e?e._value:e.value;return n}));e.staffMemberResponsibleUserIdChoice=n.target.multiple?t:t[0]}}},[t("option",{attrs:{value:"null"}},[e._v("\n              Use default for this chapter\n            ")]),e._v(" "),e._l(e.staffMetaData,(function(n){return t("option",{key:n.staff_user_id,domProps:{value:n.staff_user_id}},[e._v("\n              "+e._s(n.staff_user_full_name)+"\n            ")])}))],2),e._v(" "),t("button",{staticClass:"btn",attrs:{disabled:e.isSavingStaffMemberResponsible}},[e._v("\n            Save\n          ")]),e._v(" "),t("button",{staticClass:"btn-link",attrs:{disabled:e.isSavingStaffMemberResponsible},on:{click:function(n){n.stopPropagation();e.showStaffMemberResponsibleForm=false}}},[e._v("\n            Cancel\n          ")]),e._v(" "),e.staffMemberResponsibleError?t("p",{staticClass:"error"},[e._v("\n            "+e._s(e.staffMemberResponsibleError)+"\n          ")]):e._e()]):t("div",{staticClass:"staff-member"},[t("p",{attrs:{title:e.staffMemberResponsible.reason}},[t("b",[e._v("Responsible staff member:")]),e._v("\n            "+e._s(e.staffMemberResponsibleText)+"\n            "),t("button",{staticClass:"btn-link",on:{click:function(n){e.showStaffMemberResponsibleForm=true}}},[e._v("Change this")])])])])],1),e._v(" "),t("div",{staticClass:"tabs"},[t("button",{class:{active:e.activeTab==="active"},on:{click:function(n){e.activeTab="active"}}},[e._v("Active versions")]),e._v(" "),t("button",{class:{active:e.activeTab==="legacy"},on:{click:function(n){e.activeTab="legacy"}}},[e._v("Legacy and retired versions")])])]),e._v(" "),t("div",{staticClass:"page-body"},[e.dynamicLessonVersions.length?t("ul",{staticClass:"version-cards"},e._l(e.dynamicLessonVersions,(function(n){var a;return t("li",{key:n.version_id,staticClass:"card",class:(a={},a[n.version_state.toLowerCase()]=true,a)},[t("router-link",{staticClass:"preview-link",attrs:{to:n.lesson_url}},[e._v("Preview")]),e._v(" "),t("router-link",{staticClass:"version-link",attrs:{to:n.edit_url}},[t("header",[t("h3",[e._v(e._s(n.version_name))])]),e._v(" "),t("div",{staticClass:"card-body"},[t("p",[e._v(e._s(n.created_by_name))]),e._v(" "),t("p",[e._v(e._s(n.internal_change_reason))]),e._v(" "),t("p",[e._v(e._s(e.formatTs(n.last_modified_ts)))]),e._v(" "),t("p",{staticClass:"state"},[e._v(e._s(n.version_state.toLowerCase()))])])])],1)})),0):t("div",{staticClass:"empty"},[t("p",[e._v("There are no "+e._s(e.activeTab)+" versions to display.")])])])])};var s=[];a._withStripped=true;var r=t(0);var o=t(1);var i=t(9);var c=t(1082);var d=t(299);var l=t(301);var f=t(961);let b=class e extends o["e"]{constructor(){super(...arguments);this.activeTab="active";this.showStaffMemberResponsibleForm=false;this.staffMemberResponsibleUserIdChoice="null";this.isSavingStaffMemberResponsible=false;this.staffMemberResponsibleError=null}get isSandboxLesson(){return["sandbox","none"].includes(this.$route.params.courseSlug)&&this.user.is_external_lesson_author}get backButtonInfo(){if(this.isSandboxLesson){return{title:"Authoring home",url:this.$router.resolve({name:"authors_dashboard"}).href}}return{title:"Back to course page",url:this.$router.resolve({name:"explorations_chapter",params:Object(l["f"])(this.$route)}).href}}get dynamicLessonVersions(){switch(this.activeTab){case"active":return this.activeLessonVersions;case"legacy":return this.legacyLessonVersions}}isLegacyOrRetired(e){return e.version_state==="LEGACY"||e.version_state==="RETIRED"}get activeLessonVersions(){return this.lessonVersions.filter(e=>!this.isLegacyOrRetired(e))}get legacyLessonVersions(){return this.lessonVersions.filter(this.isLegacyOrRetired)}get mainLessonVersion(){const e=this.lessonVersions.filter(e=>e.version_state==="PUBLISHED");if(e.length){return e[0]}if(this.activeLessonVersions.length){return this.activeLessonVersions[0]}return this.lessonVersions[0]}get staffMemberResponsibleText(){const e=this.staffMemberResponsible.user_full_name||"";switch(this.staffMemberResponsible.object_type){case"lesson":return e;case"chapter":return`${e} (default from chapter)`;case"course":return`${e} (default from course)`;case"unknown":return"Not set, and no available fallback from chapter or course";default:Object(d["a"])(this.staffMemberResponsible.object_type)}}get timeFormat(){return Object.assign(Object.assign({},c["DateTime"].DATETIME_MED),{timeZoneName:"short"})}formatTs(e){return c["DateTime"].fromISO(e).toLocaleString(this.timeFormat)}handleSubmitStaffMemberResponsibleForm(){return Object(r["a"])(this,void 0,void 0,(function*(){this.isSavingStaffMemberResponsible=true;const e={params:Object(l["f"])(this.$route),data:{staff_user_id:this.staffMemberResponsibleUserIdChoice==="null"?undefined:this.staffMemberResponsibleUserIdChoice}};const n=yield this.$store.dispatch("lessonVersions/updateStaffMemberResponsible",e);this.isSavingStaffMemberResponsible=false;if(n.success){this.showStaffMemberResponsibleForm=false;this.staffMemberResponsibleError=null}else{this.staffMemberResponsibleError="There was an error while trying to update the responsible staff member"}}))}mounted(){if(this.staffMemberResponsible.user_id&&this.staffMemberResponsible.object_type==="lesson"){this.staffMemberResponsibleUserIdChoice=this.staffMemberResponsible.user_id}}};b=Object(r["b"])([Object(o["a"])({components:{AuthoringHomeButton:f["a"]},computed:Object.assign(Object.assign(Object.assign(Object.assign({},Object(i["mapState"])("lessonVersions",["lessonVersions"])),Object(i["mapState"])("staffMemberResponsible",["staffMemberResponsible"])),Object(i["mapState"])("staffMetaData",["staffMetaData"])),Object(i["mapState"])("globals",["user"])),metaInfo:{title:"Versions"}})],b);var v=b;var u=v;var p=t(2226);var m=t(5);var h=Object(m["a"])(u,a,s,false,null,"32eecd0f",null);if(false){var g}h.options.__file="frontend/views/lessons/editor/LessonVersionsList.vue";var _=n["default"]=h.exports},299:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));function a(e){throw new Error("Unreachable case")}},870:function(e,n,t){var a=t(954);if(typeof a==="string")a=[[e.i,a,""]];if(a.locals)e.exports=a.locals;var s=t(15).default;var r=s("0146e0f4",a,false,{});if(false){}},953:function(e,n,t){"use strict";var a=t(870);var s=t.n(a);var r=s.a},954:function(e,n,t){n=e.exports=t(14)(false);n.push([e.i,"",""])},961:function(e,n,t){"use strict";var a=function(){var e=this;var n=e.$createElement;var t=e._self._c||n;return t("router-link",{staticClass:"btn nav-btn",attrs:{to:{name:"authors_dashboard"},title:"Authoring home"}},[t("span",{staticClass:"b-sprite-quiz-v3-home"})])};var s=[];a._withStripped=true;var r=t(0);var o=t(1);let i=class e extends o["e"]{};i=Object(r["b"])([o["a"]],i);var c=i;var d=c;var l=t(953);var f=t(5);var b=Object(f["a"])(d,a,s,false,null,"c9ca534c",null);if(false){var v}b.options.__file="frontend/views/lessons/editor/AuthoringHomeButton.vue";var u=n["a"]=b.exports}}]);
//# sourceMappingURL=LessonVersionsList.f4c1d5ff215e6cff9ee2.js.map