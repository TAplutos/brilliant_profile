(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[244],{804:function(e,t,i){"use strict";i.r(t);i.d(t,"default",(function(){return n}));function n(){if(customElements.get("videoplayer-element")){return}customElements.define("videoplayer-element",class e extends HTMLElement{constructor(){super();this.playingValue=false;this.videoEl=document.createElement("video")}connectedCallback(){this.renderVideo()}renderVideo(){try{const e=this.getAttribute("behavior");const t=this.getAttribute("poster")||"";const i=this.getAttribute("url");const n=this.getAttribute("style");const s=`\n          <video src=${i}\n            poster="${t}"\n            style="${n}"\n            x-webkit-airplay="allow"\n            controlslist="nodownload"\n            ${e==="gif"?"loop autoplay muted":""}\n            ${e==="video"?"controls":""}\n            playsinline\n          ></video>\n          `;this.insertAdjacentHTML("afterbegin",s);this.videoEl=this.firstElementChild;this.videoEl.addEventListener("play",this.playingChanged.bind(this));this.videoEl.addEventListener("pause",this.playingChanged.bind(this))}catch(e){console.error(e);this.innerHTML=`<span style="color:tomato" title="${e.message}">[video error]</span>`}}get playing(){return this.playingValue}set playing(e){this.playingValue=e;if(e){this.videoEl.play()}else{this.videoEl.pause()}}playingChanged(e){let t=false;if(e.type==="play"){t=true}else if(e.type==="pause"){t=false}this.playingValue=t;const i=new CustomEvent("playingChanged");this.dispatchEvent(i)}})}}}]);
//# sourceMappingURL=244.428140dc4737d638c33e.js.map