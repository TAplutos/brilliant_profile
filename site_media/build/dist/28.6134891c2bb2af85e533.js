(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{756:function(e,t,a){"use strict";a.r(t);a.d(t,"default",(function(){return x}));var r=a(44);var n=a.n(r);var s=a(179);var l=a.n(s);var i=a(180);var o=a.n(i);var c=a(181);var u=a.n(c);var d=a(183);var h=a.n(d);var v=a(182);var p=a.n(v);var b=a(1386);var m=a.n(b);function x(){if(customElements.get("katex-element")){return}customElements.define("katex-element",class e extends HTMLElement{constructor(){super();this.latexValue=""}connectedCallback(){this.renderMath()}get latex(){return this.latexValue}set latex(e){this.latexValue=p.a.replace(e);this.renderMath()}static get observedAttributes(){return["displayMode"]}attributeChangedCallback(){this.renderMath()}renderMath(){try{const e=this.getAttribute("displayMode")==="block"?h.a.block:h.a.inline;n.a.render(this.latexValue,this,e)}catch(e){console.error(e);this.innerHTML=`<span style="color:tomato" title="${e.message}">[math error]</span>`}}})}}}]);
//# sourceMappingURL=28.6134891c2bb2af85e533.js.map