(self["webpackChunkvue3_cart"]=self["webpackChunkvue3_cart"]||[]).push([[65],{6e3:function(e,t,n){
/*!
  * Bootstrap base-component.js v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,o){e.exports=o(n(5022),n(1617))})(0,(function(e,t){"use strict";function n(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var o=n(e),i=n(t);const s="5.0.0";class l{constructor(e){e="string"===typeof e?document.querySelector(e):e,e&&(this._element=e,o["default"].set(this._element,this.constructor.DATA_KEY,this))}dispose(){o["default"].remove(this._element,this.constructor.DATA_KEY),i["default"].off(this._element,`.${this.constructor.DATA_KEY}`),this._element=null}static getInstance(e){return o["default"].get(e,this.DATA_KEY)}static get VERSION(){return s}}return l}))},5022:function(e){
/*!
  * Bootstrap data.js v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=new Map;var t={set(t,n,o){e.has(t)||e.set(t,new Map);const i=e.get(t);i.has(n)||0===i.size?i.set(n,o):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const o=e.get(t);o.delete(n),0===o.size&&e.delete(t)}};return t}))},1617:function(e,t,n){n(7642),n(8004),n(3853),n(5876),n(2475),n(5024),n(1698),n(8992),n(3949),
/*!
  * Bootstrap event-handler.js v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,n){e.exports=n()}(0,(function(){"use strict";const e=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,o=/::\d+$/,i={};let s=1;const l={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,r=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function d(e,t){return t&&`${t}::${s++}`||e.uidEvent||s++}function c(e){const t=d(e);return e.uidEvent=t,i[t]=i[t]||{},i[t]}function u(e,t){return function n(o){return o.delegateTarget=e,n.oneOff&&k.off(e,o.type,t),t.apply(e,[o])}}function p(e,t,n){return function o(i){const s=e.querySelectorAll(t);for(let{target:l}=i;l&&l!==this;l=l.parentNode)for(let a=s.length;a--;)if(s[a]===l)return i.delegateTarget=l,o.oneOff&&k.off(e,i.type,t,n),n.apply(l,[i]);return null}}function m(e,t,n=null){const o=Object.keys(e);for(let i=0,s=o.length;i<s;i++){const s=e[o[i]];if(s.originalHandler===t&&s.delegationSelector===n)return s}return null}function h(e,t,n){const o="string"===typeof t,i=o?n:t;let s=_(e);const l=r.has(s);return l||(s=e),[o,i,s]}function f(e,n,o,i,s){if("string"!==typeof n||!e)return;if(o||(o=i,i=null),a.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};i?i=e(i):o=e(o)}const[l,r,f]=h(n,o,i),g=c(e),b=g[f]||(g[f]={}),_=m(b,r,l?o:null);if(_)return void(_.oneOff=_.oneOff&&s);const k=d(r,n.replace(t,"")),y=l?p(e,o,i):u(e,o);y.delegationSelector=l?o:null,y.originalHandler=r,y.oneOff=s,y.uidEvent=k,b[k]=y,e.addEventListener(f,y,l)}function g(e,t,n,o,i){const s=m(t[n],o,i);s&&(e.removeEventListener(n,s,Boolean(i)),delete t[n][s.uidEvent])}function b(e,t,n,o){const i=t[n]||{};Object.keys(i).forEach((s=>{if(s.includes(o)){const o=i[s];g(e,t,n,o.originalHandler,o.delegationSelector)}}))}function _(e){return e=e.replace(n,""),l[e]||e}const k={on(e,t,n,o){f(e,t,n,o,!1)},one(e,t,n,o){f(e,t,n,o,!0)},off(e,t,n,i){if("string"!==typeof t||!e)return;const[s,l,a]=h(t,n,i),r=a!==t,d=c(e),u=t.startsWith(".");if("undefined"!==typeof l){if(!d||!d[a])return;return void g(e,d,a,l,s?n:null)}u&&Object.keys(d).forEach((n=>{b(e,d,n,t.slice(1))}));const p=d[a]||{};Object.keys(p).forEach((n=>{const i=n.replace(o,"");if(!r||t.includes(i)){const t=p[n];g(e,d,a,t.originalHandler,t.delegationSelector)}}))},trigger(t,n,o){if("string"!==typeof n||!t)return null;const i=e(),s=_(n),l=n!==s,a=r.has(s);let d,c=!0,u=!0,p=!1,m=null;return l&&i&&(d=i.Event(n,o),i(t).trigger(d),c=!d.isPropagationStopped(),u=!d.isImmediatePropagationStopped(),p=d.isDefaultPrevented()),a?(m=document.createEvent("HTMLEvents"),m.initEvent(s,c,!0)):m=new CustomEvent(n,{bubbles:c,cancelable:!0}),"undefined"!==typeof o&&Object.keys(o).forEach((e=>{Object.defineProperty(m,e,{get(){return o[e]}})})),p&&m.preventDefault(),u&&t.dispatchEvent(m),m.defaultPrevented&&"undefined"!==typeof d&&d.preventDefault(),m}};return k}))},7492:function(e,t,n){n(8992),n(4520),n(3949),
/*!
  * Bootstrap manipulator.js v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,n){e.exports=n()}(0,(function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const n={setDataAttribute(e,n,o){e.setAttribute(`data-bs-${t(n)}`,o)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter((e=>e.startsWith("bs"))).forEach((o=>{let i=o.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),n[i]=e(t.dataset[o])})),n},getDataAttribute(n,o){return e(n.getAttribute(`data-bs-${t(o)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+document.body.scrollTop,left:t.left+document.body.scrollLeft}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}};return n}))},4822:function(e,t,n){n(4114),n(8992),n(4520),
/*!
  * Bootstrap selector-engine.js v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,n){e.exports=n()}(0,(function(){"use strict";const e=3,t={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(t,n){const o=[];let i=t.parentNode;while(i&&i.nodeType===Node.ELEMENT_NODE&&i.nodeType!==e)i.matches(n)&&o.push(i),i=i.parentNode;return o},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]}};return t}))},2894:function(e,t,n){n(8992),n(2577),n(3949),
/*!
  * Bootstrap modal.js v5.0.0 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
function(t,o){e.exports=o(n(1617),n(7492),n(4822),n(6e3))}(0,(function(e,t,n,o){"use strict";function i(e){return e&&"object"===typeof e&&"default"in e?e:{default:e}}var s=i(e),l=i(t),a=i(n),r=i(o);const d=1e3,c="transitionend",u=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),p=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},m=e=>{const t=p(e);return t?document.querySelector(t):null},h=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const o=Number.parseFloat(t),i=Number.parseFloat(n);return o||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*d):0},f=e=>{e.dispatchEvent(new Event(c))},g=e=>(e[0]||e).nodeType,b=(e,t)=>{let n=!1;const o=5,i=t+o;function s(){n=!0,e.removeEventListener(c,s)}e.addEventListener(c,s),setTimeout((()=>{n||f(e)}),i)},_=(e,t,n)=>{Object.keys(n).forEach((o=>{const i=n[o],s=t[o],l=s&&g(s)?"element":u(s);if(!new RegExp(i).test(l))throw new TypeError(`${e.toUpperCase()}: Option "${o}" provided type "${l}" but expected type "${i}".`)}))},k=e=>{if(!e)return!1;if(e.style&&e.parentNode&&e.parentNode.style){const t=getComputedStyle(e),n=getComputedStyle(e.parentNode);return"none"!==t.display&&"none"!==n.display&&"hidden"!==t.visibility}return!1},y=e=>e.offsetHeight,v=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},L=e=>{"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()},E=()=>"rtl"===document.documentElement.dir,w=(e,t)=>{L((()=>{const n=v();if(n){const o=n.fn[e];n.fn[e]=t.jQueryInterface,n.fn[e].Constructor=t,n.fn[e].noConflict=()=>(n.fn[e]=o,t.jQueryInterface)}}))},P=e=>{"function"===typeof e&&e()},A=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",C=".sticky-top",x=()=>{const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)},$=(e=x())=>{D(),M("body","paddingRight",(t=>t+e)),M(A,"paddingRight",(t=>t+e)),M(C,"marginRight",(t=>t-e))},D=()=>{const e=document.body.style.overflow;e&&l["default"].setDataAttribute(document.body,"overflow",e),document.body.style.overflow="hidden"},M=(e,t,n)=>{const o=x();a["default"].find(e).forEach((e=>{if(e!==document.body&&window.innerWidth>e.clientWidth+o)return;const i=e.style[t],s=window.getComputedStyle(e)[t];l["default"].setDataAttribute(e,t,i),e.style[t]=`${n(Number.parseFloat(s))}px`}))},T=()=>{S("body","overflow"),S("body","paddingRight"),S(A,"paddingRight"),S(C,"marginRight")},S=(e,t)=>{a["default"].find(e).forEach((e=>{const n=l["default"].getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(l["default"].removeDataAttribute(e,t),e.style[t]=n)}))},N={isVisible:!0,isAnimated:!1,rootElement:document.body,clickCallback:null},j={isVisible:"boolean",isAnimated:"boolean",rootElement:"element",clickCallback:"(function|null)"},O="backdrop",F="modal-backdrop",U="fade",B="show",V=`mousedown.bs.${O}`;class R{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&y(this._getElement()),this._getElement().classList.add(B),this._emulateAnimation((()=>{P(e)}))):P(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(B),this._emulateAnimation((()=>{this.dispose(),P(e)}))):P(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=F,this._config.isAnimated&&e.classList.add(U),this._element=e}return this._element}_getConfig(e){return e={...N,..."object"===typeof e?e:{}},_(O,e,j),e}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),s["default"].on(this._getElement(),V,(()=>{P(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(s["default"].off(this._element,V),this._getElement().parentNode.removeChild(this._element),this._isAppended=!1)}_emulateAnimation(e){if(!this._config.isAnimated)return void P(e);const t=h(this._getElement());s["default"].one(this._getElement(),"transitionend",(()=>P(e))),b(this._getElement(),t)}}const I="modal",X="bs.modal",H=`.${X}`,W=".data-api",z="Escape",J={backdrop:!0,keyboard:!0,focus:!0},K={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},q=`hide${H}`,Y=`hidePrevented${H}`,Q=`hidden${H}`,Z=`show${H}`,G=`shown${H}`,ee=`focusin${H}`,te=`resize${H}`,ne=`click.dismiss${H}`,oe=`keydown.dismiss${H}`,ie=`mouseup.dismiss${H}`,se=`mousedown.dismiss${H}`,le=`click${H}${W}`,ae="modal-open",re="fade",de="show",ce="modal-static",ue=".modal-dialog",pe=".modal-body",me='[data-bs-toggle="modal"]',he='[data-bs-dismiss="modal"]';class fe extends r["default"]{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=a["default"].findOne(ue,this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1}static get Default(){return J}static get DATA_KEY(){return X}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;this._isAnimated()&&(this._isTransitioning=!0);const t=s["default"].trigger(this._element,Z,{relatedTarget:e});this._isShown||t.defaultPrevented||(this._isShown=!0,$(),document.body.classList.add(ae),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),s["default"].on(this._element,ne,he,(e=>this.hide(e))),s["default"].on(this._dialog,se,(()=>{s["default"].one(this._element,ie,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(e){if(e&&e.preventDefault(),!this._isShown||this._isTransitioning)return;const t=s["default"].trigger(this._element,q);if(t.defaultPrevented)return;this._isShown=!1;const n=this._isAnimated();if(n&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),s["default"].off(document,ee),this._element.classList.remove(de),s["default"].off(this._element,ne),s["default"].off(this._dialog,se),n){const e=h(this._element);s["default"].one(this._element,"transitionend",(e=>this._hideModal(e))),b(this._element,e)}else this._hideModal()}dispose(){[window,this._dialog].forEach((e=>s["default"].off(e,H))),super.dispose(),s["default"].off(document,ee),this._config=null,this._dialog=null,this._backdrop.dispose(),this._backdrop=null,this._isShown=null,this._ignoreBackdropClick=null,this._isTransitioning=null}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new R({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(e){return e={...J,...l["default"].getDataAttributes(this._element),...e},_(I,e,K),e}_showElement(e){const t=this._isAnimated(),n=a["default"].findOne(pe,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&y(this._element),this._element.classList.add(de),this._config.focus&&this._enforceFocus();const o=()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,s["default"].trigger(this._element,G,{relatedTarget:e})};if(t){const e=h(this._dialog);s["default"].one(this._dialog,"transitionend",o),b(this._dialog,e)}else o()}_enforceFocus(){s["default"].off(document,ee),s["default"].on(document,ee,(e=>{document===e.target||this._element===e.target||this._element.contains(e.target)||this._element.focus()}))}_setEscapeEvent(){this._isShown?s["default"].on(this._element,oe,(e=>{this._config.keyboard&&e.key===z?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==z||this._triggerBackdropTransition()})):s["default"].off(this._element,oe)}_setResizeEvent(){this._isShown?s["default"].on(window,te,(()=>this._adjustDialog())):s["default"].off(window,te)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(ae),this._resetAdjustments(),T(),s["default"].trigger(this._element,Q)}))}_showBackdrop(e){s["default"].on(this._element,ne,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(re)}_triggerBackdropTransition(){const e=s["default"].trigger(this._element,Y);if(e.defaultPrevented)return;const t=this._element.scrollHeight>document.documentElement.clientHeight;t||(this._element.style.overflowY="hidden"),this._element.classList.add(ce);const n=h(this._dialog);s["default"].off(this._element,"transitionend"),s["default"].one(this._element,"transitionend",(()=>{this._element.classList.remove(ce),t||(s["default"].one(this._element,"transitionend",(()=>{this._element.style.overflowY=""})),b(this._element,n))})),b(this._element,n),this._element.focus()}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=x(),n=t>0;(!n&&e&&!E()||n&&!e&&E())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!E()||!n&&e&&E())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=fe.getInstance(this)||new fe(this,"object"===typeof e?e:{});if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}return s["default"].on(document,le,me,(function(e){const t=m(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),s["default"].one(t,Z,(e=>{e.defaultPrevented||s["default"].one(t,Q,(()=>{k(this)&&this.focus()}))}));const n=fe.getInstance(t)||new fe(t);n.toggle(this)})),w(I,fe),fe}))},7065:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return he}});var o=n(6768),i=n(4232);const s={class:"text-end"},l={class:"table mt-4"},a={class:"text-right"},r={class:"text-right"},d={key:0,class:"text-success"},c={key:1,class:"text-muted"},u={class:"btn-group"},p=["onClick"],m=["onClick"];function h(e,t,n,h,f,g){const b=(0,o.g2)("Pagination"),_=(0,o.g2)("ProductModal"),k=(0,o.g2)("DelModal");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",s,[(0,o.Lk)("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=e=>g.openModal(!0))}," 增加一個產品 ")]),(0,o.Lk)("table",l,[t[1]||(t[1]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",{width:"120"},"分類"),(0,o.Lk)("th",null,"產品名稱"),(0,o.Lk)("th",{width:"120"},"原價"),(0,o.Lk)("th",{width:"120"},"售價"),(0,o.Lk)("th",{width:"100"},"是否啟用"),(0,o.Lk)("th",{width:"200"},"編輯")])],-1)),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(f.products,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.id},[(0,o.Lk)("td",null,(0,i.v_)(t.category),1),(0,o.Lk)("td",null,(0,i.v_)(t.title),1),(0,o.Lk)("td",a,(0,i.v_)(e.$filters.currency(t.origin_price)),1),(0,o.Lk)("td",r,(0,i.v_)(e.$filters.currency(t.price)),1),(0,o.Lk)("td",null,[t.is_enabled?((0,o.uX)(),(0,o.CE)("span",d,"啟用")):((0,o.uX)(),(0,o.CE)("span",c,"未啟用"))]),(0,o.Lk)("td",null,[(0,o.Lk)("div",u,[(0,o.Lk)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>g.openModal(!1,t)},"編輯",8,p),(0,o.Lk)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>g.delModal(t)},"刪除",8,m)])])])))),128))])]),(0,o.bF)(b,{pages:f.pagination,onEmitPages:g.getProducts},null,8,["pages","onEmitPages"]),(0,o.bF)(_,{ref:"ProductModal",product:f.tempProduct,onUpdateProduct:g.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.bF)(k,{ref:"DelModal",delproduct:f.deleteProduct,onDelectProduct:g.delProduct},null,8,["delproduct","onDelectProduct"])],64)}var f=n(5130);const g={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel",ref:"modal"},b={class:"modal-dialog modal-xl",role:"document"},_={class:"modal-content border-0"},k={class:"modal-body"},y={class:"row"},v={class:"col-sm-4"},L={class:"mb-3"},E={class:"mb-3"},w=["src"],P={key:0,class:"mt-5"},A=["onUpdate:modelValue"],C=["onClick"],x={class:"col-sm-8"},$={class:"mb-3"},D={class:"row gx-2"},M={class:"mb-3 col-md-6"},T={class:"mb-3 col-md-6"},S={class:"row gx-2"},N={class:"mb-3 col-md-6"},j={class:"mb-3 col-md-6"},O={class:"mb-3"},F={class:"mb-3"},U={class:"mb-3"},B={class:"form-check"},V={class:"modal-footer"};function R(e,t,n,i,s,l){return(0,o.uX)(),(0,o.CE)("div",g,[(0,o.Lk)("div",b,[(0,o.Lk)("div",_,[t[24]||(t[24]=(0,o.Lk)("div",{class:"modal-header bg-dark text-white"},[(0,o.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o.Lk)("span",null,"新增產品")]),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,o.Lk)("div",k,[(0,o.Lk)("div",y,[(0,o.Lk)("div",v,[(0,o.Lk)("div",L,[t[11]||(t[11]=(0,o.Lk)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"image","onUpdate:modelValue":t[0]||(t[0]=e=>s.tempProduct.imageUrl=e),placeholder:"請輸入圖片連結"},null,512),[[f.Jo,s.tempProduct.imageUrl]])]),(0,o.Lk)("div",E,[t[12]||(t[12]=(0,o.Lk)("label",{for:"customFile",class:"form-label"},[(0,o.eW)("或 上傳圖片 "),(0,o.Lk)("i",{class:"fas fa-spinner fa-spin"})],-1)),(0,o.Lk)("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:t[1]||(t[1]=(...e)=>l.uploadFile&&l.uploadFile(...e))},null,544)]),(0,o.Lk)("img",{class:"img-fluid",alt:"",src:s.tempProduct.imageUrl},null,8,w),s.tempProduct.images?((0,o.uX)(),(0,o.CE)("div",P,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.tempProduct.images,((e,t)=>((0,o.uX)(),(0,o.CE)("div",{class:"mb-3 input-group",key:t},[(0,o.bo)((0,o.Lk)("input",{type:"url",class:"form-control form-control","onUpdate:modelValue":e=>s.tempProduct.images[t]=e,placeholder:"請輸入連結"},null,8,A),[[f.Jo,s.tempProduct.images[t]]]),(0,o.Lk)("button",{type:"button",class:"btn btn-outline-danger",onClick:e=>s.tempProduct.images.splice(t,1)}," 移除 ",8,C)])))),128)),t[13]||(t[13]=(0,o.Lk)("div",null,[(0,o.Lk)("button",{class:"btn btn-outline-primary btn-sm d-block w-100"}," 新增圖片 ")],-1))])):(0,o.Q3)("",!0)]),(0,o.Lk)("div",x,[(0,o.Lk)("div",$,[t[14]||(t[14]=(0,o.Lk)("label",{for:"title",class:"form-label"},"標題",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[2]||(t[2]=e=>s.tempProduct.title=e),placeholder:"請輸入標題"},null,512),[[f.Jo,s.tempProduct.title]])]),(0,o.Lk)("div",D,[(0,o.Lk)("div",M,[t[15]||(t[15]=(0,o.Lk)("label",{for:"category",class:"form-label"},"分類",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"category","onUpdate:modelValue":t[3]||(t[3]=e=>s.tempProduct.category=e),placeholder:"請輸入分類"},null,512),[[f.Jo,s.tempProduct.category]])]),(0,o.Lk)("div",T,[t[16]||(t[16]=(0,o.Lk)("label",{for:"price",class:"form-label"},"單位",-1)),(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"unit","onUpdate:modelValue":t[4]||(t[4]=e=>s.tempProduct.unit=e),placeholder:"請輸入單位"},null,512),[[f.Jo,s.tempProduct.unit]])])]),(0,o.Lk)("div",S,[(0,o.Lk)("div",N,[t[17]||(t[17]=(0,o.Lk)("label",{for:"origin_price",class:"form-label"},"原價",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"form-control",id:"origin_price","onUpdate:modelValue":t[5]||(t[5]=e=>s.tempProduct.origin_price=e),placeholder:"請輸入原價"},null,512),[[f.Jo,s.tempProduct.origin_price]])]),(0,o.Lk)("div",j,[t[18]||(t[18]=(0,o.Lk)("label",{for:"price",class:"form-label"},"售價",-1)),(0,o.bo)((0,o.Lk)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":t[6]||(t[6]=e=>s.tempProduct.price=e),placeholder:"請輸入售價"},null,512),[[f.Jo,s.tempProduct.price]])])]),t[22]||(t[22]=(0,o.Lk)("hr",null,null,-1)),(0,o.Lk)("div",O,[t[19]||(t[19]=(0,o.Lk)("label",{for:"description",class:"form-label"},"產品描述",-1)),(0,o.bo)((0,o.Lk)("textarea",{type:"text",class:"form-control",id:"description","onUpdate:modelValue":t[7]||(t[7]=e=>s.tempProduct.description=e),placeholder:"請輸入產品描述"},null,512),[[f.Jo,s.tempProduct.description]])]),(0,o.Lk)("div",F,[t[20]||(t[20]=(0,o.Lk)("label",{for:"content",class:"form-label"},"說明內容",-1)),(0,o.bo)((0,o.Lk)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":t[8]||(t[8]=e=>s.tempProduct.content=e),placeholder:"請輸入產品說明內容"},null,512),[[f.Jo,s.tempProduct.content]])]),(0,o.Lk)("div",U,[(0,o.Lk)("div",B,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"checkbox","onUpdate:modelValue":t[9]||(t[9]=e=>s.tempProduct.is_enabled=e),"true-value":1,"false-value":0,id:"is_enabled"},null,512),[[f.lH,s.tempProduct.is_enabled]]),t[21]||(t[21]=(0,o.Lk)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1))])])])])]),(0,o.Lk)("div",V,[t[23]||(t[23]=(0,o.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1)),(0,o.Lk)("button",{type:"button",class:"btn btn-primary",onClick:t[10]||(t[10]=t=>e.$emit("update-product",s.tempProduct))},"確認")])])])],512)}var I=n(2894),X=n.n(I),H={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new(X())(this.$refs.modal)}},W={props:{product:{type:Object,default(){return{}}}},watch:{product(){this.tempProduct=this.product}},name:"ProductModal",data(){return{modal:{},tempProduct:{}}},methods:{uploadFile(){const e=this.$refs.fileInput.files[0],t=new FormData;t.append("file-to-upload",e);let n="https://vue3-course-api.hexschool.io/api/andy1234-api/admin/upload";this.$http.post(n,t).then((e=>{console.log(e.data)}))}},mixins:[H]},z=n(1241);const J=(0,z.A)(W,[["render",R]]);var K=J;const q={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},Y={class:"modal-dialog",role:"document"},Q={class:"modal-content border-0"},Z={class:"modal-body"},G={class:"text-danger"},ee={class:"modal-footer"};function te(e,t,n,s,l,a){return(0,o.uX)(),(0,o.CE)("div",q,[(0,o.Lk)("div",Y,[(0,o.Lk)("div",Q,[t[4]||(t[4]=(0,o.Lk)("div",{class:"modal-header bg-danger text-white"},[(0,o.Lk)("h5",{class:"modal-title"},[(0,o.Lk)("span",null,"刪除 ")]),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1)),(0,o.Lk)("div",Z,[t[1]||(t[1]=(0,o.eW)(" 是否刪除")),(0,o.Lk)("strong",G,(0,i.v_)(),1),t[2]||(t[2]=(0,o.eW)(" (刪除後將無法恢復)。 "))]),(0,o.Lk)("div",ee,[t[3]||(t[3]=(0,o.Lk)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1)),(0,o.Lk)("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=t=>e.$emit("delect-product",l.deleteProduct))},"確認刪除 ")])])])],512)}var ne={name:"DeltModal",props:{delproduct:{type:Object,default(){return{}}}},data(){return{modal:{},deleteProduct:{}}},mixins:[H]};const oe=(0,z.A)(ne,[["render",te]]);var ie=oe;const se={"aria-label":"Page navigation example"},le={class:"pagination justify-content-center"},ae=["onClick"];function re(e,t,n,s,l,a){return(0,o.uX)(),(0,o.CE)("nav",se,[(0,o.Lk)("ul",le,[t[0]||(t[0]=(0,o.Lk)("li",{class:"page-item"},[(0,o.Lk)("a",{class:"page-link",href:"#","aria-label":"Previous"},[(0,o.Lk)("span",{"aria-hidden":"true"},"«")])],-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.pages.total_pages,(e=>((0,o.uX)(),(0,o.CE)("li",{class:(0,i.C4)(["page-item",{active:e===n.pages.current_page}]),key:e},[(0,o.Lk)("button",{class:"page-link",onClick:(0,f.D$)((t=>a.updatePage(e)),["prevent"])},(0,i.v_)(e),9,ae)],2)))),128)),t[1]||(t[1]=(0,o.Lk)("li",{class:"page-item"},[(0,o.Lk)("a",{class:"page-link",href:"#","aria-label":"Next"},[(0,o.Lk)("span",{"aria-hidden":"true"},"»")])],-1))])])}var de={name:"UserPagination",props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}};const ce=(0,z.A)(de,[["render",re]]);var ue=ce,pe={name:"UserProducts",data(){return{products:[],pagination:{},tempProduct:{},deleteProduct:{},isNew:!1}},components:{ProductModal:K,DelModal:ie,Pagination:ue},methods:{getProducts(e=1){const t=`https://vue3-course-api.hexschool.io/api/andy1234-api/admin/products/?page=${e}`;console.log(t),this.$http.get(t).then((e=>{e.data.success&&(console.log(e.data),this.products=e.data.products,this.pagination=e.data.pagination)}))},openModal(e,t){this.tempProduct=e?{}:{...t},this.isNew=e;const n=this.$refs.ProductModal;n.showModal()},delModal(e){const t=this.$refs.DelModal;t.showModal()},delProduct(e){this.deleteProduct=e;const t=`https://vue3-course-api.hexschool.io/api/andy1234-api/admin/product/${e.product_id}`;httpMethod="delete";this.$refs.DelModal;this.$http[httpMethod](t,{data:this.deleteProduct}).then((e=>{console.log(e)}))},updateProduct(e){this.tempProduct=e;let t="https://vue3-course-api.hexschool.io/api/andy1234-api/admin/product",n="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/andy1234-api/admin/product/${e.id}`,n="put");const o=this.$refs.ProductModal;this.$http[n](t,{data:this.tempProduct}).then((e=>{console.log(e),o.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const me=(0,z.A)(pe,[["render",h]]);var he=me}}]);
//# sourceMappingURL=65.c4c6b132.js.map