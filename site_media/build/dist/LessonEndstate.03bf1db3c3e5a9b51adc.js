(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[78],{1289:function(e,t,s){var n=s(2495);if(typeof n==="string")n=[[e.i,n,""]];if(n.locals)e.exports=n.locals;var o=s(15).default;var a=o("439689ae",n,false,{});if(false){}},2494:function(e,t,s){"use strict";var n=s(1289);var o=s.n(n);var a=o.a},2495:function(e,t,s){t=e.exports=s(14)(false);t.push([e.i,'@use "sass:map";\n.no-scroll[data-v-9a22b2be] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.endstate-wrapper[data-v-9a22b2be] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #000000;\n}\n.endstate-wrapper .errors[data-v-9a22b2be] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100vw;\n    height: 100vh;\n    padding: 24px 24px;\n}\n.endstate-wrapper .errors h3[data-v-9a22b2be] {\n      font-size: 18px;\n      color: #FFFFFF;\n}\n.endstate-wrapper .errors a[data-v-9a22b2be] {\n      font-size: 16px;\n      color: #FFFFFF;\n}\n',""])},2507:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this;var t=e.$createElement;var s=e._self._c||t;return s("div",{staticClass:"endstate-wrapper"},[e.requestErrors.length?s("div",{staticClass:"errors"},[s("h3",[e._v("There was an error while trying to display this part of the lesson")]),e._v(" "),s("router-link",{attrs:{to:{name:"explorations_chapter",params:this.$route.params}}},[e._v("\n      Back to "+e._s(e.lessonCourseName)+"\n    ")])],1):!e.isLoading?s("QuizEndstateMain",e._b({},"QuizEndstateMain",e.endstateProps,false)):e._e()],1)};var o=[];n._withStripped=true;var a=s(0);var r=s(9);var i=s(1);var l=s(301);var c=s(513);let u=class e extends i["e"]{constructor(){super(...arguments);this.isLoading=true}get endstateProps(){if(!this.endstateContext){return{}}return{isLessonEndstate:true,courseName:this.lesson.course_name,courseSlug:this.$route.params.courseSlug,courseImage:this.lesson.course_image,courseColor:this.lesson.course_color,coursePercentComplete:this.endstateContext.course_completion_percent,quizPercentComplete:this.endstateContext.lesson_completion_percent,courseId:this.lesson.course_id,chapterId:this.lesson.chapter_id,quizId:this.lesson.lesson_id,quizName:this.lesson.title,quizDescription:this.lesson.description,quizImage:this.lesson.image,showFreeTrialStep:this.endstateContext.show_free_trial_step,userCoursesCategoryName:this.endstateContext.user_course_category_name,userCourses:this.endstateContext.user_courses,isChapterComplete:this.endstateContext.is_chapter_complete,isFirstCompletedQuiz:this.endstateContext.is_first_completed_lesson_or_quiz,autoshow:true,nextLink:this.endstateContext.next_lesson_link,lessonVersionId:this.lesson.version_id,allLessonsInChapter:this.endstateContext.all_lessons_in_chapter}}mounted(){return Object(a["a"])(this,void 0,void 0,(function*(){const e={params:Object(l["f"])(this.$route),query:{version_id:this.lesson.version_id.toString()}};const{success:t,data:s}=yield this.$store.dispatch("lesson/fetchEndstateContext",e);if(t&&s){this.endstateContext=s.endstate_context;this.thumbsFeedback=s.thumbs_feedback}this.isLoading=false}))}};u=Object(a["b"])([Object(i["a"])({components:{QuizEndstateMain:c["default"]},computed:Object.assign(Object.assign({},Object(r["mapState"])("lesson",["lesson","requestErrors"])),Object(r["mapState"])("lessonContext",["lessonContext"]))})],u);var d=u;var p=d;var h=s(2494);var v=s(5);var _=Object(v["a"])(p,n,o,false,null,"9a22b2be",null);if(false){var f}_.options.__file="frontend/views/lessons/lesson/LessonEndstate.vue";var m=t["default"]=_.exports}}]);
//# sourceMappingURL=LessonEndstate.03bf1db3c3e5a9b51adc.js.map