(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[247],{799:function(e,t,n){"use strict";n.r(t);n.d(t,"setupDiagrammar",(function(){return s}));function r(e,t,n){const r=e.getBoundingClientRect();const o=e.getBBox();const s={x:t.clientX-r.x+o.x,y:t.clientY-r.y+o.y};const i=new CustomEvent(n,{bubbles:true,cancelable:true,detail:{position:s}});return i}function o(e,t,n){const o=o=>{const s=o;if(!s.isPrimary){return}let i=false;const a=s.target;if(a instanceof Element){const o=a.closest(".diagrammarRoot");if(o instanceof SVGGraphicsElement){const e=r(o,s,t);if(s.target){s.target.dispatchEvent(e)}i=i||e.defaultPrevented}const c=e.querySelectorAll(".diagrammarRoot");c.forEach(e=>{if(e instanceof SVGGraphicsElement){const t=r(e,s,n);e.dispatchEvent(t);i=i||t.defaultPrevented}});if(i){s.preventDefault()}}};return o}function s(e,t){const n=o(e,"diagrammarDown","diagrammarDownAnywhere");const r=o(e,"diagrammarMove","diagrammarMoveAnywhere");const s=o(e,"diagrammarUp","diagrammarUpAnywhere");const i=e=>{if(e.target&&e.target.closest(".android-draggable")!==null){e.preventDefault()}};const a=()=>{document.addEventListener("pointerdown",n);document.addEventListener("pointermove",r);document.addEventListener("pointerup",s);e.addEventListener("touchstart",i)};const c=()=>{document.removeEventListener("pointerdown",n);document.removeEventListener("pointermove",r);document.removeEventListener("pointerup",s);e.removeEventListener("touchstart",i)};a();if(t.ports.setWindowFocus){window.addEventListener("blur",()=>{t.ports.setWindowFocus.send(false)});window.addEventListener("focus",()=>{t.ports.setWindowFocus.send(true)})}return{addPointerListeners:a,removePointerListeners:c}}}}]);
//# sourceMappingURL=247.7eaeac12c83c0c6c40cc.js.map