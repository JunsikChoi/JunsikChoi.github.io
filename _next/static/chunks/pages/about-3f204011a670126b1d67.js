_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(a.default.useContext(r.AmpStateContext))};var o,a=(o=n("q1tI"))&&o.__esModule?o:{default:o},r=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,a=void 0!==o&&o,r=e.hasQuery,u=void 0!==r&&r;return n||a&&u}},"0bHG":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("g4pe"),u=n.n(r),i=a.a.createElement;t.a=function(e){var t=e.subtitle;return i(u.a,null,i("title",null,"JUNSIK.DEV | ",t," "))}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var r=o?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(n,a,r):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(o=n("Xuae"))&&o.__esModule?o:{default:o},u=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[a.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=a.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(a){var r=!0,u=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){u=!0;var i=a.key.slice(a.key.indexOf("$")+1);e.has(i)?r=!1:e.add(i)}switch(a.type){case"title":case"base":t.has(a.type)?r=!1:t.add(a.type);break;case"meta":for(var c=0,s=p.length;c<s;c++){var l=p[c];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?r=!1:n.add(l);else{var f=a.props[l],d=o[l]||new Set;"name"===l&&u||!d.has(f)?(d.add(f),o[l]=d):r=!1}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return a.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,a.useContext)(u.AmpStateContext),o=(0,a.useContext)(i.HeadManagerContext);return a.default.createElement(r.default,{reduceComponentsToState:d,headManager:o,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var _=h;t.default=_},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var a=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=a},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},TaPz:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return v}));var o=n("q1tI"),a=n.n(o),r=n("0bHG"),u=n("iCYD"),i=n.n(u),c=n("wH4i"),s=n.n(c),l=n("RdbB"),f=n.n(l),p=n("uE/A"),d=n.n(p),h=n("IujW"),_=n.n(h),m=n("invz"),b=a.a.createElement,v=!0;t.default=function(e){var t=e.allPosts,n=Object(o.useState)(!1),u=n[0],c=n[1],l=t[0],p=t[1];return b(a.a.Fragment,null,b(r.a,{subtitle:"ABOUT"}),b("div",{className:i.a.container},b("div",{className:i.a.aboutIntroContainer},b("div",{className:i.a.photoContainer},b("img",{className:i.a.photo,src:"/images/profile_emoji.jpg"})),b("div",{className:i.a.aboutIntro},b("h4",null,"JUNSIK CHOI"),b("h5",null,"Full Stack Web / App Developer"),b("div",{className:i.a.contactsContainer},b("a",{className:i.a.icons,href:"https://github.com/JunsikChoi"},b("i",{className:"fab fa-github"})),b("a",{className:i.a.icons,href:"https://www.linkedin.com/in/junsikchoi91/"},b("i",{className:"fab fa-linkedin "})),b("a",{className:i.a.icons,href:"https://www.instagram.com/junsikchoi91/"},b("i",{className:"fab fa-instagram"})),b("a",{className:i.a.icons,href:"mailto:leichoi91@gmail.com"},b("i",{className:"fas fa-envelope"})))),b("div",{className:i.a.languageContainer},b("button",{onClick:function(){c(!u)}},"\u2b07 ",u?" \ud55c\uad6d\uc5b4\ub85c \uc774\ub825\uc11c \ubcf4\uae30 ":" View Resume in English"," \ufe0f\u2b07\ufe0f"))),b(_.a,{className:i.a.post_style,plugins:[s.a,d.a,f.a],renderers:m.a},u?l.content:p.content)))}},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),a=n("lwsE"),r=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){u(n,e);var t=s(n);function n(e){var r;return a(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(o(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},a1gu:function(e,t,n){var o=n("cDf5"),a=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?a(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},hIud:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("TaPz")}])},iCYD:function(e,t,n){e.exports={container:"About_container__2eann",aboutIntroContainer:"About_aboutIntroContainer__1RqOX",photoContainer:"About_photoContainer__2BM2U",photo:"About_photo__2E2uW",aboutIntro:"About_aboutIntro__33Wlo",contactsContainer:"About_contactsContainer__1nrQj",icons:"About_icons__2zLsS",languageContainer:"About_languageContainer__Lra07",post_style:"About_post_style__2LIAj",codeblock:"About_codeblock__2bekO",codeblock_language:"About_codeblock_language__1k_SO",ir:"About_ir__1557d"}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var a=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=a},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}},[["hIud",0,1,3,4]]]);