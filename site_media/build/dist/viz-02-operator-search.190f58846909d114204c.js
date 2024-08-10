(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[189],{1390:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.isOperator=o;t.toDisplayString=i;t.toEvaluableString=a;var n={Plus:{displayString:"+",evaluableString:"+"},Minus:{displayString:"−",evaluableString:"-"},Times:{displayString:"×",evaluableString:"*"},Divide:{displayString:"÷",evaluableString:"/"},Concatenate:{displayString:"‖",evaluableString:""}};function o(e){return n[e]!==undefined}function i(e){return n[e].displayString}function a(e){return n[e].evaluableString}},17:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){if(typeof window==="object")r=window}e.exports=r},1981:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.createOperatorSearch=a;var n=i(r(819));var o=i(r(1982));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){var i=arguments.length>3&&arguments[3]!==undefined?arguments[3]:null;var a=arguments.length>4?arguments[4]:undefined;e.innerHTML="";if(t.mode==="puzzle"){return n.default.render(n.default.createElement(o.default,{mode:"puzzle",solution:t.solution,digits:t.digits,allowedOperators:t.allowedOperators,initialOperators:t.initialOperators,userState:r,solvableConfig:i,interactiveSlug:a,parent:e}),e)}if(t.mode==="freeplay"){return n.default.render(n.default.createElement(o.default,{mode:"freeplay",description:t.description,digits:t.digits,allowedOperators:t.allowedOperators,initialOperators:t.initialOperators,userState:r,solvableConfig:i,parent:e}),e)}throw new Error("".concat(t.mode,' is not a valid mode for Operator Search. Try "puzzle" or "freeplay".'))}},1982:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=u(r(819));var o=u(r(858));var i=u(r(840));var a=u(r(1983));var l=r(1390);var s=r(13);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){c=function e(t){return typeof t}}else{c=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return c(e)}function f(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function d(e){return v(e)||h(e)||p()}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function h(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function v(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++){r[t]=e[t]}return r}}function b(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function g(e,t,r){if(t)y(e.prototype,t);if(r)y(e,r);return e}function m(e,t){if(t&&(c(t)==="object"||typeof t==="function")){return t}return S(e)}function S(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function O(e){O=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return O(e)}function w(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)_(e,t)}function _(e,t){_=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return _(e,t)}var x=15;function k(e){return"Can you make this equal ".concat(e,"?")}function E(e){function t(e){return!(0,l.isOperator)(e)}var r=e.filter(t);r.forEach((function(e){throw new Error("".concat(e," is not a valid operator. Check for typos!"))}))}function C(e){var t=e.initialOperators,r=e.allowedOperators;t.forEach((function(e){if(!r.includes(e)){throw new Error("".concat(e," is not in the set of allowed operators."))}}))}function j(e){if(e.digits.length<=1){throw new Error("Operator search requires at least 2 numbers")}var t=e.digits.length-1;if(e.initialOperators.length!==t){throw new Error("You have the wrong number of initial operators. You should have ".concat(t))}E(e.initialOperators);E(e.allowedOperators);C(e);var r=e.digits.filter((function(e){return!Number.isInteger(e)})).length;if(e.allowedOperators.includes("Concatenate")&&r>1){throw new Error("You can't use concatenate if you have more than one non-integer number. As an example, 0.1 || 0.2 is undefined.")}}var z=o.default.strong.withConfig({displayName:"OperatorSearch__QuestionLabel",componentId:"sc-18hys24-0"})(["margin:16px 0px;"]);var I=o.default.div.withConfig({displayName:"OperatorSearch__MainColumnLayout",componentId:"sc-18hys24-1"})(["font-family:'Helvetica Neue';font-size:","px;color:#333333;position:relative;display:flex;flex-direction:column;align-items:center;-webkit-tap-highlight-color:rgba(0,0,0,0);margin-bottom:",";"],x,(function(e){return e.isInteractiveSolvable?"0px":"40px"}));var P=o.default.div.withConfig({displayName:"OperatorSearch__EquationColumn",componentId:"sc-18hys24-2"})(["display:flex;flex-direction:column;> div{margin:8px 0px;}"]);var T=o.default.div.withConfig({displayName:"OperatorSearch__EquationRow",componentId:"sc-18hys24-3"})(["display:flex;align-items:center;width:100%;position:relative;> div{margin:0px 4px;}"]);var A=o.default.div.withConfig({displayName:"OperatorSearch__BackgroundCelebration",componentId:"sc-18hys24-4"})(["width:250px;height:4px;background-color:#20a900;transition:transform 1s;margin-top:16px;transform:",";"],(function(e){return e.solved?"scaleX(1)":"scaleX(0)"}));function M(e,t){var r=1e-7;return Math.abs(e-t)<r}function N(e){var t=e.toString();var r=e.toFixed(4);var n=t.slice(r.length);var o=parseInt(n,10);if(o<1e5||Number.isNaN(o)){var i=r;while(i.endsWith("0")){i=i.slice(0,-1)}if(i.endsWith(".")){i=i.slice(0,-1)}return i}return"".concat(r,"…")}function q(e,t){var r=[];var n=Math.floor(e.length/t);var o=e.length-n*t;var i=Array(t);i.fill(n+1,0,o);i.fill(n,o);var a=0;i.forEach((function(t){r.push(e.slice(a,a+t));a+=t}));return r}var D=function(e){w(t,e);function t(e){var r;b(this,t);r=m(this,O(t).call(this,e));j(e);r.bindAllHandlers();r.setInitialState(e.initialOperators,e.userState);r.closeSelectorMenusOnOutsideClick();window.addEventListener("resize",(function(){return r.forceUpdate()}));if(e.solvableConfig){r.isInteractiveSolvable=true;r.solvableType="auto-check";r.solvableCallbacks=e.solvableConfig.callbacks;r.setSolvableResetState();r.setSolvableCaption()}return r}g(t,[{key:"resetPressed",value:function e(){this.setInitialState(this.props.initialOperators)}},{key:"setSolvableResetState",value:function e(){var t=false;for(var r=0;r<this.state.selectedOperators.length;r+=1){if(this.state.selectedOperators[r]!==this.props.initialOperators[r]){t=true}}this.solvableCallbacks.setResetButtonEnabled(t)}},{key:"setSolvableCaption",value:function e(){if(this.state.solved){this.solvableCallbacks.setCaption("You got it!")}else{this.solvableCallbacks.setCaption(this.props.mode==="puzzle"?k(this.props.solution):this.props.description)}}},{key:"validateUserState",value:function e(t){if(Object.keys(t).length===0){return false}if(t.selectedOperators.length!==this.props.initialOperators.length){return false}for(var r=0;r<t.selectedOperators.length;r+=1){if(this.props.allowedOperators.indexOf(t.selectedOperators[r])<0){return false}}return true}},{key:"setInitialState",value:function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;if(r&&this.validateUserState(r)){this.setState(r)}else{this.setState({selectedOperators:t,solved:false,currentlyOpenSelector:"none"})}}},{key:"bindAllHandlers",value:function e(){this.handleOperatorSelected=this.handleOperatorSelected.bind(this);this.handleSelectToggled=this.handleSelectToggled.bind(this);this.checkAnswer=this.recalculateEquation.bind(this);this.closeAllSelectors=this.closeAllSelectors.bind(this)}},{key:"closeSelectorMenusOnOutsideClick",value:function e(){var t=this;document.addEventListener("click",(function(){return t.closeAllSelectors()}))}},{key:"handleOperatorSelected",value:function e(t,r){this.setState((function(e){var n=e.selectedOperators;return{selectedOperators:Object.assign(d(n),f({},t,r)),currentlyOpenSelector:"none"}}),this.recalculateEquation);(0,s.track)("ui",{action:"operator_changed",visualization_type:"operator_search",visualization_name:this.props.interactiveSlug})}},{key:"handleSelectToggled",value:function e(t){if(t===this.state.currentlyOpenSelector){this.closeAllSelectors()}else{this.setState({currentlyOpenSelector:t})}}},{key:"closeAllSelectors",value:function e(){this.setState({currentlyOpenSelector:"none"})}},{key:"recalculateEquation",value:function e(){if(this.props.mode==="puzzle"){var t=M(this.calcValue(),this.props.solution);this.setState({solved:t});if(t){(0,s.track)("ui",{action:"filled_correctly",visualization_type:"operator_search",visualization_name:this.props.interactiveSlug})}}}},{key:"calcValue",value:function e(){var t=this;var r=this.props.digits.reduce((function(e,r,n){return e.toString()+(0,l.toEvaluableString)(t.state.selectedOperators[n-1])+r.toString()}));var n=i.default.parse(r).eval();if(Number.isFinite(n)){return n}return"&#x1F914;"}},{key:"componentDidUpdate",value:function e(t,r){if(this.isInteractiveSolvable){var n=JSON.stringify(this.state.selectedOperators);var o=JSON.stringify(r.selectedOperators);if(n!==o||this.state.solved!==r.solved){this.solvableCallbacks.saveState(this.state,this.state.solved)}this.setSolvableResetState();this.setSolvableCaption()}}},{key:"renderEquationInRows",value:function e(t){var r=this;var o=64;var i=8;var l=12;var s=32;var u=8;var c=this.props.parent.offsetWidth;var f=function e(t){return n.default.createElement("div",null,t)};var d=function e(t,o){return n.default.createElement(a.default,{operators:r.props.allowedOperators,selectedOperator:t,open:r.state.currentlyOpenSelector===o,onOperatorSelected:function e(t){return r.handleOperatorSelected(o,t)},onToggled:function e(){return r.handleSelectToggled(o)}})};var p=function e(t){return t.toString().length*u+i};var h=[];for(var v=0;v<this.state.selectedOperators.length;v++){var b=this.props.digits[v+1].toString();h.push({width:p(b)+s+i,elements:[d(this.state.selectedOperators[v],v),f(b)]})}var y={width:p(this.props.digits[0]),elements:[f(this.props.digits[0])]};var g={width:o,elements:[n.default.createElement("div",null,"="),n.default.createElement("div",{style:{width:o-i-u,overflow:"visible",whiteSpace:"nowrap"}},N(this.calcValue()))]};var m=q(h,t);for(var S=0;S<t;S++){var O=m[S];if(S===0){O.unshift(y)}else{O.unshift({width:y.width,elements:[n.default.createElement("div",{style:{flexGrow:1}})]})}if(S===t-1){O.push(g)}else{var w=o+l*(t-S-1);var _={width:w,elements:[n.default.createElement("div",{style:{width:w}})]};O.push(_)}var x=m[S].reduce((function(e,t){return e+t.width}),0);if(x>c&&t<4){return null}}return m.map((function(e){return e.flatMap((function(e){return e.elements}))}))}},{key:"render",value:function e(t,r){var o=null;var i=1;while(o==null){o=this.renderEquationInRows(i);i++}var a="";if(t.mode==="puzzle"){a=k(t.solution)}else{a=t.description}return n.default.createElement(I,{isInteractiveSolvable:this.isInteractiveSolvable},this.isInteractiveSolvable?"":n.default.createElement(z,null,a," "),n.default.createElement(P,null,o.map((function(e){return n.default.createElement(T,{solved:r.solved},e)}))),this.isInteractiveSolvable?"":n.default.createElement(A,{solved:r.solved}))}}]);return t}(n.default.Component);t.default=D},1983:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=a(r(819));var o=a(r(858));var i=r(1390);function a(e){return e&&e.__esModule?e:{default:e}}function l(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){l=function e(t){return typeof t}}else{l=function e(t){return t&&typeof Symbol==="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}}return l(e)}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function c(e,t,r){if(t)u(e.prototype,t);if(r)u(e,r);return e}function f(e,t){if(t&&(l(t)==="object"||typeof t==="function")){return t}return d(e)}function d(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function p(e){p=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return p(e)}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)v(e,t)}function v(e,t){v=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return v(e,t)}function b(){var e=g(["\n    background-color: #ffffff;\n    border-right-width: 0px;\n    :hover {\n        background-color: #d8d8d8;\n    }\n    :first-child {\n        border-radius: 3px 0 0 3px;\n    }\n    :last-child {\n        border-right-width: ","px;\n        border-radius: 0 3px 3px 0;\n    }\n"]);b=function t(){return e};return e}function y(){var e=g(["\n    background-color: #f0f0f0;\n    border-radius: 4px;\n    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.15));\n    position: relative;\n    @media (hover) {\n        :hover {\n            background-color: #d8d8d8;\n        }\n    }\n    :active {\n        filter: unset;\n        top: 2px;\n    }\n"]);y=function t(){return e};return e}function g(e,t){if(!t){t=e.slice(0)}return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var m=o.default.div.withConfig({displayName:"OperatorSelector__DesktopDropDownAnchorPoint",componentId:"sc-1htnyrw-0"})(["@media (min-width:500px){position:relative;}"]);var S=o.default.div.withConfig({displayName:"OperatorSelector__SquareButton",componentId:"sc-1htnyrw-1"})(["width:","px;height:","px;cursor:pointer;user-select:none;border:","px solid #f0f0f0;display:flex;justify-content:center;align-items:center;font-weight:bold;"],(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.borderWidth}));var O=S.extend.attrs({size:32,borderWidth:0})(y());var w=.1;var _=o.default.div.withConfig({displayName:"OperatorSelector__ListOfOperators",componentId:"sc-1htnyrw-2"})(["display:flex;flex-direction:row;filter:drop-shadow(0px 2px 1px rgba(0,0,0,0.15));position:absolute;transform:translateX(-50%) ",";left:50%;top:calc(100% + 16px);transition:transform ","s;transform-origin:top center;z-index:1;"],(function(e){return e.open?"scale(1)":"scale(0)"}),w);var x=S.extend.attrs({size:48,borderWidth:2})(b(),(function(e){return e.borderWidth}));var k=function(e){h(t,e);function t(e){var r;s(this,t);r=f(this,p(t).call(this,e));r.bindAllHandlers();return r}c(t,[{key:"bindAllHandlers",value:function e(){this.handleOperatorSelected=this.handleOperatorSelected.bind(this);this.handleToggled=this.handleToggled.bind(this)}},{key:"handleOperatorSelected",value:function e(t){this.props.onOperatorSelected(t)}},{key:"handleToggled",value:function e(t){this.props.onToggled();t.stopPropagation()}},{key:"render",value:function e(t){var r=this;return n.default.createElement(m,null,n.default.createElement(O,{selected:t.open,onClick:this.handleToggled,size:"32"},(0,i.toDisplayString)(t.selectedOperator)),n.default.createElement(_,{open:t.open,onClick:function e(t){return t.stopPropagation()}},t.operators.map((function(e){return n.default.createElement(x,{onClick:function t(){return r.handleOperatorSelected(e)}},n.default.createElement("div",null,(0,i.toDisplayString)(e)))}))))}}]);return t}(n.default.Component);t.default=k},321:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var n=r(1981);function o(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:null;var r=document.getElementById(e.visualizationKey);return(0,n.createOperatorSearch)(r,e.authoredData,e.userState||{},t,e.slug)}var i={createInteractive:function e(t){return o(t)},createInteractiveSolvable:function e(t,r){return o(t,r)}};t.default=i},840:function(e,t,r){"use strict";var n=o(r(965));function o(e){return e&&e.__esModule?e:{default:e}}var i=n.default.create();i.config({predictable:true});i.import(r(967));i.import(r(974));i.import(r(975));i.import(r(976));i.import(r(978));i.import(r(979));i.import(r(980));i.import(r(981));i.import(r(982));i.import(r(983));e.exports=i}}]);
//# sourceMappingURL=viz-02-operator-search.190f58846909d114204c.js.map