!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VPreviews=e():t.VPreviews=e()}(window,function(){return function(t){var e={};function s(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var i=function(){var t=this.$createElement,e=this._self._c||t;return this.show?e("div",{ref:"pswp",staticClass:"pswp",attrs:{tabindex:"-1",role:"dialog","aria-hidden":"true"}},[e("div",{staticClass:"pswp__bg"}),this._v(" "),this._m(0)]):this._e()};i._withStripped=!0;var n=function(t,e,s,i,n,o,r,a){var p,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=s,u._compiled=!0),i&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),r?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=p):n&&(p=a?function(){n.call(this,this.$root.$options.shadowRoot)}:n),p)if(u.functional){u._injectStyles=p;var l=u.render;u.render=function(t,e){return p.call(e),l(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,p):[p]}return{exports:t,options:u}}({data:function(){return{show:!1,timer:0,vm:null}},methods:{open:function(t){var e=this;t.lists.length&&!this.vm&&(this.timer&&(clearTimeout(this.timer),this.timer=0),this.show=!0,this.$nextTick(function(){e.init(t)}))},init:function(t){var e=this,s=t.lists,i=t.srcname,n=t.ui,o=t.photoswipe,r=t.options,a=Array.prototype.map.call(s,function(t){return t.dataset.html?{html:t.dataset.html}:{src:t.getAttribute(i),msrc:t.dataset.msrc||t.getAttribute(i),w:Number(t.dataset.w||t.offsetWidth||0),h:Number(t.dataset.h||t.offsetHeight||0),title:t.dataset.title||""}}).filter(function(t){return t.src||t.html}),p=Object.assign({history:!1,getThumbBoundsFn:function(t){var e=s[t],i=window.pageYOffset||document.documentElement.scrollTop,n=e.getBoundingClientRect();return{x:n.left,y:n.top+i,w:n.width}}},r);this.vm=new o(this.$refs.pswp,n,a,p),this.vm.listen("imageLoadComplete",function(t,s){var i=new Image;i.src=s.src,i.onload=function(){s.w=i.width,s.h=i.height,e.vm.updateSize(!0)}}),this.vm.listen("close",function(){e.vm=null,e.timer=setTimeout(function(){e.show=!1},1e4)}),this.vm.init()}}},i,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pswp__scroll-wrap"},[s("div",{staticClass:"pswp__container"},[s("div",{staticClass:"pswp__item"}),t._v(" "),s("div",{staticClass:"pswp__item"}),t._v(" "),s("div",{staticClass:"pswp__item"})]),t._v(" "),s("div",{staticClass:"pswp__ui pswp__ui--hidden"},[s("div",{staticClass:"pswp__top-bar"},[s("div",{staticClass:"pswp__counter"}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--close",attrs:{title:"Close (Esc)"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--share",attrs:{title:"Share"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--fs",attrs:{title:"Toggle fullscreen"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--zoom",attrs:{title:"Zoom in/out"}}),t._v(" "),s("div",{staticClass:"pswp__preloader"},[s("div",{staticClass:"pswp__preloader__icn"},[s("div",{staticClass:"pswp__preloader__cut"},[s("div",{staticClass:"pswp__preloader__donut"})])])])]),t._v(" "),s("div",{staticClass:"pswp__share-modal pswp__share-modal--hidden pswp__single-tap"},[s("div",{staticClass:"pswp__share-tooltip"})]),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--arrow--left",attrs:{title:"Previous (arrow left)"}}),t._v(" "),s("button",{staticClass:"pswp__button pswp__button--arrow--right",attrs:{title:"Next (arrow right)"}}),t._v(" "),s("div",{staticClass:"pswp__caption"},[s("div",{staticClass:"pswp__caption__center"})])])])}],!1,null,null,null);n.options.__file="src/PhotoSwipe.vue";var o,r=n.exports;e.default={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=e.photoswipe,i=e.ui||!1,n=e.options||{},a=e.deep||0;if(!s)throw new Error("not found photoswipe");t.directive("previews",{bind:function(e,p){var u=p.value,l=p.arg,c=p.modifiers,d=l||"data-src",_=c?Object.keys(c):[],f=u||{};_.length||_.push("click");var v=function(p){var u=function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=0,o=document.body;if(t&&"getAttribute"in t){for(;n<i&&!t.getAttribute(s);){if(!((t=t.parentNode)&&"getAttribute"in t&&t!==e&&t!==o))return;n+=1}if(t.getAttribute(s))return t}}(p.target,e,d,a);if(u){var l=function(t){return o||(o=(new(t.extend(r))).$mount(),document.body.appendChild(o.$el),o)}(t);if(!l.vm){var c=u.dataset.group,_="[".concat(d,"]")+(void 0===c?":not([data-group])":'[data-group="'.concat(c,'"]')),v=e.querySelectorAll(_),h=Array.prototype.indexOf.call(v,u),w=Object.assign({},n,f,{index:h});l.open({lists:v,srcname:d,ui:i,photoswipe:s,options:w})}}};_.forEach(function(t){e.addEventListener(t,v)})}})}}}]).default});