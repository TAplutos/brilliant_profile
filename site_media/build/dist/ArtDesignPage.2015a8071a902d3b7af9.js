(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{1138:function(n,t,e){var a=e(2266);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=e(28).default;var r=i("a92c03d2",a,false,{});if(false){}},1139:function(n,t,e){var a=e(2268);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=e(28).default;var r=i("93baa382",a,false,{});if(false){}},1140:function(n,t,e){var a=e(2270);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=e(28).default;var r=i("1e003871",a,false,{});if(false){}},1141:function(n,t,e){var a=e(2272);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=e(28).default;var r=i("9d982f84",a,false,{});if(false){}},1142:function(n,t,e){var a=e(2274);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=e(28).default;var r=i("cccb006e",a,false,{});if(false){}},1143:function(n,t,e){var a=e(2276);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=e(28).default;var r=i("cb9650f4",a,false,{});if(false){}},1144:function(n,t,e){var a=e(2278);if(typeof a==="string")a=[[n.i,a,""]];if(a.locals)n.exports=a.locals;var i=e(28).default;var r=i("011e87bb",a,false,{});if(false){}},2265:function(n,t,e){"use strict";var a=e(1138);var i=e.n(a);var r=i.a},2266:function(n,t,e){t=n.exports=e(27)(false);t.push([n.i,"@use \"sass:map\";\n.no-scroll[data-v-24161401] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.header[data-v-24161401] {\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 32px 48px 0 48px;\n  z-index: 900;\n}\n.header .logo[data-v-24161401] {\n    flex: none;\n}\n.header ul[data-v-24161401] {\n    display: flex;\n    list-style: none;\n    margin: 0;\n}\n.header li[data-v-24161401] {\n    margin-left: 32px;\n}\n.header li.link-main[data-v-24161401] {\n      display: none;\n}\n.header li a[data-v-24161401] {\n      font-family: \"Source Code Pro\", monospace;\n      font-weight: 600;\n      font-size: 13px;\n      line-height: 1.23em;\n      text-transform: uppercase;\n      color: #000000;\n      transition: color 100ms linear;\n}\n.header li a[data-v-24161401]:hover {\n        color: #3372F1;\n}\n.header li a.current-section[data-v-24161401] {\n        color: #3372F1;\n}\n.header.mobile[data-v-24161401] {\n  align-items: center;\n  height: 60px;\n  padding: 0 24px;\n  border-bottom: 1px solid transparent;\n  background: #FFFFFF;\n  transition: border-color 100ms linear;\n}\n.header.mobile.scrolled[data-v-24161401] {\n    border-color: #000000;\n}\n.header.mobile .logo[data-v-24161401] {\n    position: relative;\n    margin-bottom: -3px;\n    z-index: 1;\n}\n.header.mobile .burger[data-v-24161401] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    position: relative;\n    height: 32px;\n    padding: 10px;\n    margin-right: -10px;\n    border: 0;\n    background-color: transparent;\n    z-index: 1;\n}\n.header.mobile .burger span[data-v-24161401], .header.mobile .burger[data-v-24161401]:before, .header.mobile .burger[data-v-24161401]:after {\n      width: 16px;\n      height: 2px;\n      background: #000000;\n}\n.header.mobile .burger[data-v-24161401]:before {\n      content: '';\n}\n.header.mobile .burger[data-v-24161401]:after {\n      content: '';\n}\n.header.mobile ul[data-v-24161401] {\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    padding: 32px 24px 0;\n    border-top: 59px solid #FFFFFF;\n    box-shadow: inset 0 1px 0 0 #000000;\n    background: #F1F1F1;\n}\n.header.mobile li[data-v-24161401] {\n    margin: 0 0 36px 0;\n}\n.header.mobile li.link-main[data-v-24161401] {\n      display: block;\n}\n",""])},2267:function(n,t,e){"use strict";var a=e(1139);var i=e.n(a);var r=i.a},2268:function(n,t,e){t=n.exports=e(27)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-198f29ee] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.hero[data-v-198f29ee] {\n  position: relative;\n}\n.hero h1[data-v-198f29ee] {\n    margin: 0;\n    font-size: 90px;\n    line-height: 1.2em;\n    color: #000000;\n    position: relative;\n    z-index: 1;\n}\n@media screen and (max-width: 1248px) {\n.hero h1[data-v-198f29ee] {\n        font-size: 70px;\n}\n.hero h1 span.gif[data-v-198f29ee] {\n          width: 60px;\n          height: 60px;\n}\n}\n.hero h1 .gif[data-v-198f29ee] {\n      display: inline-block;\n      width: 72px;\n      height: 72px;\n      margin: 0 -16px -8px 0;\n      background: center center no-repeat;\n      background-size: contain;\n}\n.hero h1 .gif.math[data-v-198f29ee] {\n        background-image: url(/site_media/version-a7c4af0faa/images/art-and-design/planes.gif);\n}\n.hero h1 .gif.science[data-v-198f29ee] {\n        background-image: url(/site_media/version-92edd3d69b/images/art-and-design/jupiter.gif);\n}\n.hero h1 .math[data-v-198f29ee] {\n      color: #3372F1;\n}\n.hero h1 .science[data-v-198f29ee] {\n      color: #E88A1F;\n}\n.hero .grid[data-v-198f29ee] {\n    position: absolute;\n    top: 0;\n    left: 48px;\n    right: 0;\n    bottom: 0;\n    background: url(/site_media/version-1/images/art-and-design/bg-grid.svg) center left no-repeat;\n    background-size: cover;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px);\n    opacity: 0;\n    transition: opacity 1s ease-out, -webkit-transform 1s ease-out;\n    transition: transform 1s ease-out, opacity 1s ease-out;\n    transition: transform 1s ease-out, opacity 1s ease-out, -webkit-transform 1s ease-out;\n}\n.hero .grid.show[data-v-198f29ee] {\n      opacity: 1;\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n.hero.mobile h1[data-v-198f29ee] {\n  width: 300px;\n  max-width: 100%;\n  font-size: 48px;\n}\n.hero.mobile h1 .gif[data-v-198f29ee] {\n    width: 40px;\n    height: 40px;\n    margin: 0 -8px -6px 0;\n}\n.hero.mobile .grid[data-v-198f29ee] {\n  top: 60px;\n  left: -100px;\n}\n',""])},2269:function(n,t,e){"use strict";var a=e(1140);var i=e.n(a);var r=i.a},2270:function(n,t,e){t=n.exports=e(27)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-4086bd85] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.work[data-v-4086bd85] {\n  position: relative;\n  padding: 0 48px;\n}\n.work.mobile[data-v-4086bd85] {\n  padding: 40px 0 120px;\n}\n.work.mobile .grid[data-v-4086bd85] {\n    padding: 0;\n    grid-template-columns: repeat(2, 50%);\n    gap: 12px 0;\n}\n.work.mobile .grid span[data-v-4086bd85] {\n      -webkit-transform: scale(0.8);\n              transform: scale(0.8);\n}\n.grid[data-v-4086bd85] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n  padding: 48px 0;\n  width: 100%;\n  min-height: 100vh;\n}\n@media screen and (max-width: 1248px) {\n.grid[data-v-4086bd85] {\n      grid-template-columns: repeat(3, 1fr);\n}\n}\n@media screen and (max-width: 898px) {\n.grid[data-v-4086bd85] {\n      grid-template-columns: repeat(2, 1fr);\n}\n}\n.grid .cell[data-v-4086bd85] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.grid .cell .has-tooltip[data-v-4086bd85] {\n      cursor: url(/site_media/version-1/images/art-and-design/cursor-pointer.svg) 4 4, default;\n}\n.tooltip[data-v-4086bd85] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 232px;\n  padding: 12px 16px;\n  background: #000000;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 1.36em;\n  color: #FFFFFF;\n}\n.tooltip.right[data-v-4086bd85] {\n    text-align: right;\n}\n',""])},2271:function(n,t,e){"use strict";var a=e(1141);var i=e.n(a);var r=i.a},2272:function(n,t,e){t=n.exports=e(27)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-42179ec9] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.about[data-v-42179ec9] {\n  overflow: hidden;\n}\n.about .inner[data-v-42179ec9] {\n    display: flex;\n    flex-direction: column;\n}\n.about .top[data-v-42179ec9],\n  .about .bottom[data-v-42179ec9] {\n    display: flex;\n}\n.about h2[data-v-42179ec9] {\n    width: 504px;\n    max-width: 100%;\n    margin-right: 92px;\n    font-size: 38px;\n    line-height: 1.4em;\n    color: #1C1C1C;\n}\n.about p[data-v-42179ec9] {\n    margin: 0;\n    font-size: 16px;\n    line-height: 1.5em;\n    color: rgba(28, 28, 28, 0.7);\n}\n.about .top[data-v-42179ec9] {\n    margin-bottom: 16px;\n}\n.about p[data-v-42179ec9]:first-child {\n    width: 422px;\n    margin-right: 174px;\n}\n.about p[data-v-42179ec9]:last-child {\n    width: 405px;\n}\n@media screen and (max-width: 1248px) {\n.about h2[data-v-42179ec9] {\n    width: 100%;\n    margin: 0 0 48px;\n    font-size: 30px;\n    text-align: center;\n}\n.about .top[data-v-42179ec9] {\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 24px;\n}\n.about .bottom[data-v-42179ec9] {\n    justify-content: center;\n}\n.about p[data-v-42179ec9]:first-child, .about p[data-v-42179ec9]:last-child {\n    width: 350px;\n    margin: 0;\n}\n.about p[data-v-42179ec9]:first-child {\n    margin-right: 48px;\n}\n}\n.about.mobile[data-v-42179ec9] {\n  padding: 40px 0 120px 0;\n}\n.about.mobile .top[data-v-42179ec9] {\n    align-items: flex-start;\n    margin-bottom: 0;\n}\n.about.mobile .bottom[data-v-42179ec9] {\n    flex-direction: column;\n}\n.about.mobile h2[data-v-42179ec9] {\n    font-size: 28px;\n    text-align: left;\n}\n.about.mobile p[data-v-42179ec9] {\n    width: 100%;\n}\n.about.mobile p[data-v-42179ec9]:first-child {\n      margin: 0 0 2em;\n}\n',""])},2273:function(n,t,e){"use strict";var a=e(1142);var i=e.n(a);var r=i.a},2274:function(n,t,e){t=n.exports=e(27)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-25d6fefc] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n@-webkit-keyframes hover-y-data-v-25d6fefc {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n10% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n20% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n30% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n40% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\n60% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n70% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n80% {\n    -webkit-transform: translateY(4px);\n            transform: translateY(4px);\n}\n90% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\n100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@keyframes hover-y-data-v-25d6fefc {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n10% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n20% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n30% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n40% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\n60% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n70% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n80% {\n    -webkit-transform: translateY(4px);\n            transform: translateY(4px);\n}\n90% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px);\n}\n100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@-webkit-keyframes hover-y-mobile-data-v-25d6fefc {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n10% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n20% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n30% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n40% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n50% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n60% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n70% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n80% {\n    -webkit-transform: translateY(2px);\n            transform: translateY(2px);\n}\n90% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@keyframes hover-y-mobile-data-v-25d6fefc {\n0% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n10% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n20% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n30% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n40% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n50% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n60% {\n    -webkit-transform: translateY(-2px);\n            transform: translateY(-2px);\n}\n70% {\n    -webkit-transform: translateY(6px);\n            transform: translateY(6px);\n}\n80% {\n    -webkit-transform: translateY(2px);\n            transform: translateY(2px);\n}\n90% {\n    -webkit-transform: translateY(8px);\n            transform: translateY(8px);\n}\n100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n}\n}\n@-webkit-keyframes hover-yaw-data-v-25d6fefc {\n0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n25% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n}\n50% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n}\n75% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg);\n}\n100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n}\n@keyframes hover-yaw-data-v-25d6fefc {\n0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n25% {\n    -webkit-transform: rotate(2deg);\n            transform: rotate(2deg);\n}\n50% {\n    -webkit-transform: rotate(-3deg);\n            transform: rotate(-3deg);\n}\n75% {\n    -webkit-transform: rotate(1deg);\n            transform: rotate(1deg);\n}\n100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0);\n}\n}\n.open-positions ul[data-v-25d6fefc] {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n}\n.open-positions li[data-v-25d6fefc] {\n  display: flex;\n  flex-direction: column;\n  width: 327px;\n  margin-right: 80px;\n}\n.open-positions li[data-v-25d6fefc]:last-child {\n    margin-right: 0;\n}\n.open-positions a[data-v-25d6fefc] {\n  font-weight: bold;\n  font-size: 23px;\n  line-height: 32px;\n  text-align: center;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #000000;\n  text-align: center;\n}\n.open-positions a[data-v-25d6fefc]:hover {\n    color: #3372F1;\n}\n.open-positions .img[data-v-25d6fefc] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 366px;\n  margin-bottom: 24px;\n}\n.open-positions .werewolf[data-v-25d6fefc] {\n  margin-left: -100px;\n}\n.open-positions .astronaut[data-v-25d6fefc] {\n  -webkit-animation: hover-y-data-v-25d6fefc 10s ease-in-out infinite forwards;\n          animation: hover-y-data-v-25d6fefc 10s ease-in-out infinite forwards;\n}\n.open-positions li:last-child .img[data-v-25d6fefc] {\n  -webkit-animation: hover-yaw-data-v-25d6fefc 12s ease-in-out infinite forwards;\n          animation: hover-yaw-data-v-25d6fefc 12s ease-in-out infinite forwards;\n}\n.open-positions.mobile[data-v-25d6fefc] {\n  padding-top: 40px;\n  padding-bottom: 120px;\n}\n.open-positions.mobile ul[data-v-25d6fefc] {\n    flex-direction: column;\n    align-items: center;\n}\n.open-positions.mobile li[data-v-25d6fefc] {\n    margin: 0 0 54px;\n}\n.open-positions.mobile li[data-v-25d6fefc]:last-child {\n      margin-bottom: 0;\n}\n.open-positions.mobile .img[data-v-25d6fefc] {\n    height: 178px;\n}\n.open-positions.mobile .werewolf[data-v-25d6fefc] {\n    margin-left: -46px;\n}\n.open-positions.mobile .astronaut[data-v-25d6fefc] {\n    -webkit-animation: hover-y-mobile-data-v-25d6fefc 10s ease-in-out infinite forwards;\n            animation: hover-y-mobile-data-v-25d6fefc 10s ease-in-out infinite forwards;\n}\n',""])},2275:function(n,t,e){"use strict";var a=e(1143);var i=e.n(a);var r=i.a},2276:function(n,t,e){t=n.exports=e(27)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-322bd4f5] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.links ul[data-v-322bd4f5] {\n  display: grid;\n  grid-template-columns: repeat(2, 466px);\n  gap: 76px 72px;\n  justify-content: center;\n  list-style: none;\n  margin: 0;\n}\n@media screen and (max-width: 1248px) {\n.links ul[data-v-322bd4f5] {\n      grid-template-columns: repeat(2, 1fr);\n      gap: 40px 48px;\n}\n}\n@media screen and (max-width: 970px) {\n.links ul[data-v-322bd4f5] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n}\n.links ul li[data-v-322bd4f5] {\n        width: 500px;\n        max-width: 100%;\n        margin-bottom: 40px;\n}\n.links ul li[data-v-322bd4f5]:last-child {\n          margin-bottom: 0;\n}\n}\n.links a[data-v-322bd4f5] {\n  display: flex;\n}\n.links a:hover h3[data-v-322bd4f5] {\n    color: #3372F1;\n}\n.links .img[data-v-322bd4f5] {\n  display: flex;\n  justify-content: center;\n  flex: none;\n  width: 42px;\n  margin-right: 24px;\n}\n.links h3[data-v-322bd4f5] {\n  margin-bottom: 8px;\n  color: #000000;\n  font-size: 21px;\n  line-height: 1.38em;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #000000;\n}\n.links p[data-v-322bd4f5] {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.37em;\n  color: rgba(0, 0, 0, 0.7);\n}\n.links .earth[data-v-322bd4f5] {\n  display: block;\n  width: 39px;\n  height: 39px;\n  background: url(/site_media/version-35f256bda4/images/art-and-design/earth.gif) center center no-repeat;\n  background-size: contain;\n}\n.links.mobile[data-v-322bd4f5] {\n  padding: 40px 32px;\n}\n.links.mobile > div[data-v-322bd4f5] {\n    padding: 0;\n}\n.links.mobile .img[data-v-322bd4f5] {\n    margin-right: 20px;\n}\n.links.mobile h3[data-v-322bd4f5] {\n    font-size: 16px;\n}\n.links.mobile p[data-v-322bd4f5] {\n    font-size: 14px;\n}\n',""])},2277:function(n,t,e){"use strict";var a=e(1144);var i=e.n(a);var r=i.a},2278:function(n,t,e){t=n.exports=e(27)(false);t.push([n.i,'@use "sass:map";\n.no-scroll[data-v-71ad6a03] {\n  position: relative;\n  z-index: 100;\n  overflow: hidden;\n}\n.page[data-v-71ad6a03] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100%;\n  border: 2px solid #000000;\n  background: #FFFFFF;\n}\n.page[data-v-71ad6a03]:not(.mobile),\n.page[data-v-71ad6a03]:not(.mobile) a,\n.page[data-v-71ad6a03]:not(.mobile) button {\n  /*cursor: url(/site_media/version-1/images/art-and-design/cursor-moon.svg) 0 0, default;*/\n}\n.page.mobile[data-v-71ad6a03] {\n  border: 0;\n}\n[data-v-71ad6a03] .artdesign-section {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  min-height: calc(100vh - 2px);\n  border-bottom: 2px solid #000000;\n  overflow: hidden;\n}\n[data-v-71ad6a03] .artdesign-section:last-child {\n    min-height: calc(100vh - 4px);\n    border-bottom: 0;\n}\n[data-v-71ad6a03] .artdesign-container {\n  width: 1248px;\n  max-width: 100%;\n  margin: 0;\n  padding: 0 24px;\n}\n@media screen and (max-width: 1248px) {\n[data-v-71ad6a03] .artdesign-container {\n      width: 960px;\n}\n}\n',""])},2529:function(n,t,e){"use strict";e.r(t);var a=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("main",{class:{page:true,mobile:n.isMobile(n.$mq)}},[e("ArtDesignHeader",{attrs:{"current-section":n.currentSection},on:{"scroll-to":n.handleScrollToHash}}),n._v(" "),e("ArtDesignHero"),n._v(" "),e("ArtDesignWork"),n._v(" "),e("ArtDesignAbout"),n._v(" "),e("ArtDesignOpenPositions"),n._v(" "),e("ArtDesignLinks")],1)};var i=[];a._withStripped=true;var r=e(1);var s=e(5);var o=e(9);var l=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("header",{class:{header:true,mobile:n.isMobile(n.$mq),scrolled:n.isScrolled}},[e("router-link",{staticClass:"b-sprite-art-and-design-logo logo",attrs:{to:n.locationWithHash(null)},nativeOn:{click:function(t){return n.scrollToHash(null)}}}),n._v(" "),n.isMobile(n.$mq)?e("button",{staticClass:"burger",on:{click:function(t){n.showLinks=!n.showLinks}}},[e("span")]):n._e(),n._v(" "),e("transition",{attrs:{name:"fade-fast"}},[!n.isMobile(n.$mq)||n.showLinks?e("ul",n._l(n.links,(function(t,a){return e("li",{key:a,class:"link-"+(a.length?a:"main")},[e("router-link",{class:{"current-section":a===n.currentSection},attrs:{to:n.locationWithHash(a)},nativeOn:{click:function(t){return n.scrollToHash(a)}}},[n._v("\n          "+n._s(t)+"\n        ")])],1)})),0):n._e()])],1)};var d=[];l._withStripped=true;let p=class n extends s["e"]{constructor(){super(...arguments);this.currentSection="";this.showLinks=false;this.isScrolled=false;this.links={"":"Main",work:"Work",about:"About","open-positions":"Open positions",links:"Links"}}locationWithHash(n){const t="art_and_design";return n?{name:t,hash:`#${n}`}:{name:t}}scrollToHash(n){this.showLinks=false;this.$emit("scroll-to",n)}handleScroll(){if(this.isMobile(this.$mq)){const n=document.documentElement.scrollTop>0;if(this.isScrolled!==n){this.isScrolled=n}}const n=document.querySelectorAll("[data-hash]");const t=window.innerHeight/2;let e="";for(const a of n){if(a.getBoundingClientRect().top<t){e=a.getAttribute("data-hash")||""}}this.currentSection=e}mounted(){window.addEventListener("scroll",this.handleScroll);this.handleScroll()}destroyed(){window.removeEventListener("scroll",this.handleScroll)}};p=Object(r["b"])([Object(s["a"])({computed:Object.assign({},Object(o["mapGetters"])("pageHeader",["isMobile"]))})],p);var c=p;var f=c;var m=e(2265);var u=e(10);var v=Object(u["a"])(f,l,d,false,null,"24161401",null);if(false){var b}v.options.__file="frontend/views/flatpages/art-and-design/ArtDesignHeader.vue";var h=v.exports;var g=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("section",{class:{"artdesign-section":true,hero:true,mobile:n.isMobile(n.$mq)}},[e("div",{staticClass:"artdesign-container"},[n._m(0),n._v(" "),e("div",{class:{grid:true,show:n.showGrid}})])])};var x=[function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("h1",[n._v("\n      Design the future of"),e("br"),n._v(" "),e("span",{staticClass:"gif math"}),n._v(" "),e("span",{staticClass:"math"},[n._v("math")]),n._v("\n      and\n      "),e("span",{staticClass:"gif science"}),n._v(" "),e("span",{staticClass:"science"},[n._v("science")]),e("br"),n._v("\n      learning tools.\n    ")])}];g._withStripped=true;let w=class n extends s["e"]{constructor(){super(...arguments);this.showGrid=false}mounted(){setTimeout(()=>this.showGrid=true,250)}};w=Object(r["b"])([Object(s["a"])({computed:Object.assign({},Object(o["mapGetters"])("pageHeader",["isMobile"]))})],w);var k=w;var y=k;var _=e(2267);var Y=Object(u["a"])(y,g,x,false,null,"198f29ee",null);if(false){var j}Y.options.__file="frontend/views/flatpages/art-and-design/ArtDesignHero.vue";var O=Y.exports;var F=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("section",{ref:"section",class:{"artdesign-section":true,work:true,mobile:n.isMobile(n.$mq)},attrs:{"data-hash":"work"}},[e("div",{staticClass:"grid"},n._l(n.images,(function(t,a){var i,r;return e("div",{key:"image-"+a,staticClass:"cell"},[n.isMobile(n.$mq)?e("span",{class:(i={},i[t.sprite]=true,i["has-tooltip"]=t.tooltip!==undefined,i)}):e("span",{class:(r={},r[t.sprite]=true,r["has-tooltip"]=t.tooltip!==undefined,r),on:{mouseenter:function(e){return n.setTooltip(e,t.tooltip)},mousemove:n.updateTooltipPosition,mouseleave:n.hideTooltip}})])})),0),n._v(" "),e("transition",{attrs:{name:"fade-fast"}},[n.tooltip.visible?e("div",{staticClass:"tooltip",style:{transform:"translate("+n.tooltip.x+"px, "+n.tooltip.y+"px)"}},[n._v("\n      "+n._s(n.tooltip.text)+"\n    ")]):n._e()])],1)};var S=[];F._withStripped=true;let M=class n extends s["e"]{constructor(){super(...arguments);this.tooltip={visible:false,x:0,y:0,text:""};this.images=[{sprite:"b-sprite-art-and-design-drag-n-drop",tooltip:"Logic puzzles with stickers, what more do you want?"},{sprite:"b-sprite-art-and-design-person-person",tooltip:"Build-a-man workshop, or our illustration guidelines"},{sprite:"b-sprite-art-and-design-quantum-thing",tooltip:"Watch your steps, this energy landscape is a doozy"},{sprite:"b-sprite-art-and-design-cell",tooltip:"This ain't your grandpappy's computational biology course"},{sprite:"b-sprite-art-and-design-parsons",tooltip:"Because no one should learn a language at the same time they learn an algorithm"},{sprite:"b-sprite-art-and-design-vectors",tooltip:"Fun fact, the determinant of a parallelogram is equal to its area"},{sprite:"b-sprite-art-and-design-dog-dog",tooltip:"Spherical animals are an age-old tradition in Fermi estimation, but Fido took things a bit too far"},{sprite:"b-sprite-art-and-design-planets",tooltip:"Planets Planets Planets. With apologies to Kim Stanley Robinson."},{sprite:"b-sprite-art-and-design-graph-theory",tooltip:"Wiccan magic. jk, it’s graph theory!"},{sprite:"b-sprite-art-and-design-elephant-physics",tooltip:"Despite appearances, Lucinda's normal force isn't enough to ruin Christmas."},{sprite:"b-sprite-art-and-design-sun-shine",tooltip:"Solar energy isn't just for engineers, it also explains why you want a south-facing balcony."},{sprite:"b-sprite-art-and-design-vector-field",tooltip:"The subtle beauty of vector fields"}]}setTooltip(n,t){if(t){this.tooltip.text=t;this.updateTooltipPosition(n);this.tooltip.visible=true}}hideTooltip(){this.tooltip.visible=false}updateTooltipPosition(n){const t=document.body.clientWidth-228-16;const e=this.$refs.section.offsetTop;const a=14;const i=14;this.tooltip.x=Math.min(t,n.x+a);this.tooltip.y=n.y+window.scrollY-e+i}};M=Object(r["b"])([Object(s["a"])({computed:Object.assign({},Object(o["mapGetters"])("pageHeader",["isMobile"]))})],M);var z=M;var C=z;var T=e(2269);var A=Object(u["a"])(C,F,S,false,null,"4086bd85",null);if(false){var $}A.options.__file="frontend/views/flatpages/art-and-design/ArtDesignWork.vue";var D=A.exports;var H=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("section",{class:{"artdesign-section":true,about:true,mobile:n.isMobile(n.$mq)},attrs:{"data-hash":"about"}},[e("div",{staticClass:"artdesign-container inner"},[e("div",{staticClass:"top"},[e("h2",[n._v("\n        Brilliant Art+Design brings STEM to life by researching learners, structuring course\n        development, and crafting cool experiences.\n      ")]),n._v(" "),n.isMobile(n.$mq)?e("div",{staticClass:"b-sprite-art-and-design-ui-small"}):e("div",{staticClass:"b-sprite-art-and-design-ui"})]),n._v(" "),n._m(0)])])};var L=[function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("div",{staticClass:"bottom"},[e("p",[n._v("\n        We believe that math and science are fascinating and beautiful, but that the tools\n        widely used to teach them are dry and ineffective. Brilliant makes learning STEM fun,\n        through problem solving and interactive explorations – from foundational math and\n        science to cutting-edge computer science and professional topics.\n      ")]),n._v(" "),e("p",[n._v("\n        We're looking for product designers, creative visual thinkers, and expert builders to\n        join our team. Come help us build an interdiscplinary learning environment,\n        unencumbered by outdated teaching standards, available in the pockets of every man,\n        woman, and child! Come build Brilliant, ya loon!\n      ")])])}];H._withStripped=true;let q=class n extends s["e"]{};q=Object(r["b"])([Object(s["a"])({computed:Object.assign({},Object(o["mapGetters"])("pageHeader",["isMobile"]))})],q);var E=q;var P=E;var W=e(2271);var B=Object(u["a"])(P,H,L,false,null,"42179ec9",null);if(false){var G}B.options.__file="frontend/views/flatpages/art-and-design/ArtDesignAbout.vue";var I=B.exports;var J=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("section",{class:{"artdesign-section":true,"open-positions":true,mobile:n.isMobile(n.$mq)},attrs:{"data-hash":"open-positions"}},[e("div",{staticClass:"artdesign-container"},[e("ul",n._l(n.links,(function(t){return e("li",{key:t.title},[e("a",{attrs:{href:t.url,target:"_blank"}},[e("div",{staticClass:"img"},[e("span",{class:n.isMobile(n.$mq)?t.spriteMobile:t.sprite})]),n._v("\n          "+n._s(t.title)+"\n        ")])])})),0)])])};var R=[];J._withStripped=true;let U=class n extends s["e"]{constructor(){super(...arguments);this.links=[{url:"https://jobs.lever.co/brilliant/be176231-5d6f-45a5-862a-8c24b7720cbe",sprite:"b-sprite-art-and-design-scream",spriteMobile:"b-sprite-art-and-design-scream-small",title:"Lead Product Designer"},{url:"https://jobs.lever.co/brilliant/f9c50822-23dc-48bb-bce6-2ecc09aa5b3d",sprite:"b-sprite-art-and-design-werewolf werewolf",spriteMobile:"b-sprite-art-and-design-werewolf-small werewolf",title:"Senior Product Designer"},{url:"https://jobs.lever.co/brilliant/cf3aa804-891e-4808-99ec-227b14f43402",sprite:"b-sprite-art-and-design-astronaut astronaut",spriteMobile:"b-sprite-art-and-design-astronaut-small astronaut",title:"Senior Brand Designer"}]}};U=Object(r["b"])([Object(s["a"])({computed:Object.assign({},Object(o["mapGetters"])("pageHeader",["isMobile"]))})],U);var K=U;var V=K;var X=e(2273);var N=Object(u["a"])(V,J,R,false,null,"25d6fefc",null);if(false){var Q}N.options.__file="frontend/views/flatpages/art-and-design/ArtDesignOpenPositions.vue";var Z=N.exports;var nn=function(){var n=this;var t=n.$createElement;var e=n._self._c||t;return e("section",{class:{"artdesign-section":true,links:true,mobile:n.isMobile(n.$mq)},attrs:{"data-hash":"links"}},[e("div",{staticClass:"artdesign-container"},[e("ul",n._l(n.links,(function(t){return e("li",{key:t.title},[t.to?e("router-link",{attrs:{to:t.to}},[e("div",{staticClass:"img"},[e("span",{class:t.sprite})]),n._v(" "),e("div",[e("h3",[n._v(n._s(t.title))]),n._v(" "),e("p",[n._v(n._s(t.description))])])]):e("a",{attrs:{href:t.url,target:"_blank"}},[e("div",{staticClass:"img"},[e("span",{class:t.sprite})]),n._v(" "),e("div",[e("h3",[n._v(n._s(t.title))]),n._v(" "),e("p",[n._v(n._s(t.description))])])])],1)})),0)])])};var tn=[];nn._withStripped=true;let en=class n extends s["e"]{constructor(){super(...arguments);this.links=[{to:{name:"careers_page"},sprite:"b-sprite-art-and-design-moon",title:"brilliant.org/careers",description:"Learn to distinguish between a Pirate and Gooblesoftie."},{to:{name:"learning_manifesto"},sprite:"b-sprite-art-and-design-moon",title:"brilliant.org/principles",description:"How can we create a culture of learning around inquiry, curiosity, and openness to failure?"},{url:"https://www.amazon.com/Why-Dont-Students-Like-School/dp/047059196X",sprite:"earth",title:"Why Don't Students Like School?",description:"A cognitive scientist explains."},{url:"http://worrydream.com/MediaForThinkingTheUnthinkable/",sprite:"earth",title:"Media for Thinking for the Unthinkable",description:"Bret Victor explores how we can create new mediums for science and engineering."},{url:"https://www.amazon.com/gp/product/0470894520/",sprite:"earth",title:"Mathematical Mindsets",description:"Jo Boaler expands upon the growth mindset."},{url:"https://www.maa.org/external_archive/devlin/LockhartsLament.pdf",sprite:"earth",title:"Lockhart’s Lament",description:"A math professor laments the state of education."}]}};en=Object(r["b"])([Object(s["a"])({computed:Object.assign({},Object(o["mapGetters"])("pageHeader",["isMobile"]))})],en);var an=en;var rn=an;var sn=e(2275);var on=Object(u["a"])(rn,nn,tn,false,null,"322bd4f5",null);if(false){var ln}on.options.__file="frontend/views/flatpages/art-and-design/ArtDesignLinks.vue";var dn=on.exports;var pn=e(773);let cn=class n extends s["e"]{routeChanged(n,t){if(n.hash!==t.hash){this.scrollToHash(n.hash)}}scrollToHash(n){if(n&&n.length){const t=document.querySelector(`[data-hash=${n.replace("#","")}]`);if(t){const n=this.isMobile(this.$mq)?60:0;Object(pn["c"])(t.offsetTop-n)}}else{Object(pn["c"])(0)}}handleScrollToHash(n){this.scrollToHash(n?n:undefined)}mounted(){document.body.style.backgroundColor="#000";if(this.$route.hash){this.scrollToHash(this.$route.hash)}}destroyed(){document.body.style.removeProperty("backgroundColor")}};Object(r["b"])([Object(s["f"])("$route")],cn.prototype,"routeChanged",null);cn=Object(r["b"])([Object(s["a"])({components:{ArtDesignHeader:h,ArtDesignHero:O,ArtDesignAbout:I,ArtDesignWork:D,ArtDesignOpenPositions:Z,ArtDesignLinks:dn},computed:Object.assign({},Object(o["mapGetters"])("pageHeader",["isMobile"])),metaInfo:{title:"Brilliant Art+Design",meta:[{property:"og:title",content:"Art and Design at Brilliant.org"},{property:"og:image",content:"www.brilliant.org/site_media/version-c30e8e7493/images/art-and-design/linkedin-image.png"},{property:"og:url",content:"www.brilliant.org/art-and-design"}]}})],cn);var fn=cn;var mn=fn;var un=e(2277);var vn=Object(u["a"])(mn,a,i,false,null,"71ad6a03",null);if(false){var bn}vn.options.__file="frontend/views/flatpages/art-and-design/ArtDesignPage.vue";var hn=t["default"]=vn.exports},773:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));e.d(t,"c",(function(){return s}));e.d(t,"b",(function(){return o}));var a=e(1);var i=e(258);function r(n){Object(i["d"])(()=>{if(n){document.body.classList.add("locked")}else{document.body.classList.remove("locked")}})}function s(n,t){let e;if(typeof n==="number"){e=n}if(n instanceof HTMLElement){e=n.offsetTop}return new Promise(n=>{if(!t&&!window){n()}else{try{let a;if(t){t.scrollTo({top:e,behavior:"smooth"});a=t.scrollTop}else{window.scroll({top:e,behavior:"smooth"});a=window.pageYOffset}const i=setInterval(()=>{const e=t?t.scrollTop:window.pageYOffset;if(e===a){clearInterval(i);n()}else{a=e}},50)}catch(a){if(t){t.scrollTop=e}else{window.scroll(0,e)}n()}}})}function o(n){return Object(a["a"])(this,void 0,void 0,(function*(){const t=document.querySelector(`[name="${n}"]`);if(t){const n=t.getBoundingClientRect();yield s(n.top+window.pageYOffset)}}))}}}]);
//# sourceMappingURL=ArtDesignPage.2015a8071a902d3b7af9.js.map