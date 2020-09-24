!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={};function e(n){return n.toString().match(/{[\w\W]*}/)[0]}t={funcBodyEquals:function(n,t){return e(n)===e(t)},throttle:function(n,t){var e=(new Date).getTime();return function(r){(new Date).getTime()-e>=t&&(e=(new Date).getTime(),n.call(this,r))}},debounce:function(n,t){var e=null;function r(t,e){n.apply(t,e)}return function(){clearTimeout(e);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];e=setTimeout(r,t,this,i)}}};var r={},i={},o={};function u(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function a(n){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n){return null!==n&&void 0===n}function c(n){return null===n}function f(n){return!s(n)&&!c(n)}function l(n){return"function"==typeof n}function v(n){return"object"===a(n)}function h(n,t,e){if(f(n))return l(e)?e(n[t]):n.hasOwnProperty(t)}var d=(o={isUnd:s,isNull:c,isVal:f,isNum:function(n){return"number"==typeof n},isStr:function(n){return"string"==typeof n||n instanceof String},isFun:l,isObj:v,isArr:function(n){return n instanceof Array},isPrim:function(n){return f(n)&&!v(n)&&!l(n)},isList:function(n){return f(n.length)&&l(n.item)},isMutableList:function(n){return f(n.length)&&l(n.item)&&l(n.add)},isEl:function(n){return n instanceof Element||n instanceof HTMLElement||n instanceof Node},isEls:function(n){return n instanceof HTMLCollection||n instanceof NodeList},hasField:h,isEmpty:function(n){return h(n,"length")?n.length<=0:!l(n)&&(!v(n)||Object.keys(n).length<=0)},Enum:function(n){for(var t=0,e={},r=0,i=Object.keys(n);r<i.length;r++){var o=i[r];e[e[t]=o]=t++}return e},Set:function(){function n(t){var e,r,i;!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),i=[],(r="items")in(e=this)?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,this.items=t}var t,e,r;return t=n,r=[{key:"of",value:function(t){return new n(t)}}],(e=[{key:"add",value:function(n){this.items.indexOf(n)<0&&this.items.push(n)}},{key:"contains",value:function(n){return this.items.indexOf(n)>=0}},{key:"remove",value:function(n){this.items.splice(this.items.indexOf(n),1)}}])&&u(t.prototype,e),r&&u(t,r),n}(),dict:function(){for(var n={},t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];for(var i=0;i<e.length;i++)i%2==0&&(n[e[i]]=e[i+1]);return n}}).isUnd,y=o.isStr,_={};function m(n){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var g={};function p(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return b(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,a=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return u=n.done,n},e:function(n){a=!0,o=n},f:function(){try{u||null==e.return||e.return()}finally{if(a)throw o}}}}function b(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function E(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function A(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function w(n){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var S={};function L(n){return"[".concat(n,"] [").concat((t=new Date,"".concat(t.getHours(),":").concat(t.getMinutes(),":").concat(t.getSeconds(),":").concat(t.getMilliseconds())),"]");var t}function O(n,t){n.reverse(),n.push("display: inline-block; font-weight: bold; color: black","%c"+t),n.reverse()}var T=o.Enum({TRACE:0,INFO:0,WARN:0,ERROR:0,SILENT:0}),k={LogLevel:T.TRACE};function N(n){return k.LogLevel!==T.SILENT&&k.LogLevel<=n}function x(n,t){for(var e=0,r=Object.keys(n);e<r.length;e++){var i=r[e];!n[i]instanceof Array&&"object"===w(n[i])?(t.hasOwnProperty(i)||(t[i]={}),x(n[i],t[i])):t[i]=n[i]}return t}S={Config:k,LogLevels:T,showTrace:function(){k.LogLevel=T.TRACE},showInfo:function(){k.LogLevel=T.INFO},showWarn:function(){k.LogLevel=T.WARN},showError:function(){k.LogLevel=T.ERROR},silent:function(){k.LogLevel=T.SILENT},trace:function(){if(N(T.TRACE)){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];t.reverse(),t.push(L("X-TRACE")),t.reverse(),console.trace.apply(X,t)}},info:function(){if(N(T.INFO)){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];O(t,L("X-INFO")),console.log.apply(X,t)}},warn:function(){if(N(T.WARN)){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];O(t,L("X-WARN")),console.warn.apply(X,t)}},error:function(){if(N(T.ERROR)){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];O(t,L("X-ERROR")),console.error.apply(X,t)}}};var j=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),A(this,"types",[]),A(this,"pcode","\n"),this.types=t}var t,e,r;return t=n,(e=[{key:"define",value:function(n){if(!n.name){var t="Function must have a name [Extension.define(f)]\n<<".concat(n,">>");return S.error(t),"\n/**\n *".concat(t,"\n */")}var e,r="\n",i=p(this.types);try{for(i.s();!(e=i.n()).done;){var o=e.value;void 0!==o&&(r+="".concat(o.name||o,".prototype.").concat(n.name," = "))}}catch(t){i.e(t)}finally{i.f()}return r+=n.toString()+";\n",this.pcode+=r,r}},{key:"polyfill",value:function(n){if(!n.name){var t="Extension function must have a name:\n<<".concat(n,">>");return S.error(t),"\n/**\n *".concat(t,"\n */")}var e,r="\n",i=p(this.types);try{for(i.s();!(e=i.n()).done;){var o=e.value;r+="if (".concat(o.name||o,".prototype.").concat(n.name," === undefined) ").concat(o.name||o,".prototype.").concat(n.name," = ").concat(n.toString(),";\n")}}catch(t){i.e(t)}finally{i.f()}this.pcode+=r}}])&&E(t.prototype,e),r&&E(t,r),n}();function F(){return void 0!==n.window&&void 0!==n.document&&void 0!==n.navigator}F()||(n.HTMLElement=n.HTMLElement?n.HTMLElement:function(){},n.Element=n.Element?n.Element:function(){},n.Node=n.Node?n.Node:function(){},n.HTMLCollection=n.HTMLCollection?n.HTMLCollection:function(){},n.NodeList=n.NodeList?n.NodeList:function(){});var I=(g={merge:x,mergeAll:function(){for(var n={},t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];for(var i=0,o=Object.keys(e);i<o.length;i++){var u=o[i];x(e[u],n)}return n},setGlobal:function(t){x(t,n)},Extension:j,isBrowser:F}).merge,R=g.mergeAll;n._X_LOOP_BREAK_||(n._X_LOOP_BREAK_=Symbol("BREAK_LOOP"),n._X_ANY_=Symbol("ANY"),n._X_ALL_=Symbol("ALL"));var M=n._X_LOOP_BREAK_,C=n._X_ANY_,W=n._X_ALL_;function P(n,t){if(o.isVal(n))return o.isObj(n)||o.isStr(n)||o.isArr(n)?n[t]:n.item(t)}function V(n,t,e){return!o.isArr(n)&&o.isObj(n)?n[e]===t:n.indexOf(t)>=0}function H(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];o.isArr(n)?Q(e,(function(t){return n.push(t)})):o.isMutableList(n)&&n.add(e)}function $(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];e=ln(e);var i=!1;return Q(e,(function(t){var e=n.indexOf(t);e>=0&&(i=!0,n.splice(e,1))})),i}function D(n,t){for(var e=0,r=Object.keys(t);e<r.length;e++){var i=r[e];if(t[i]===C&&n.hasOwnProperty(i))return!0;if(t[i]===n[i])return!0}return!1}function B(n,t){for(var e=0,r=Object.keys(t);e<r.length;e++){var i=r[e];if(t[i]!==C&&t[i]!==n[i])return!1}return!0}function Y(n,t){var e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return o.isUnd(n)?t:o.isFun(n)?n:n instanceof RegExp?function(t){return!o.isObj(t)&&n.test(t.toString())}:o.isObj(n)?0===Object.keys(n).length?t:e?function(t){return D(t,n)}:function(t){return B(t,n)}:function(t){return t===n}}function U(n){if(o.isUnd(n))return function(n){return n};if(o.isFun(n))return n;if(o.isStr(n)){var t=n;n=function(n){return n[t]}}throw Error("Predicate ".concat(n," cannot be of type ").concat(m(n)))}function q(n,t){var e=t.skips,r=void 0===e?[]:e,i=t.maxLevel,u=void 0===i?999:i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(a>=u)return n;var s=o.isArr(n)?[]:{};for(var c in n)if(n.hasOwnProperty(c)){if(r&&V(r,c))continue;var f=n[c];o.isPrim(f)||(f=q(f,{skips:r,maxLevel:u},a++)),o.isArr(s)?s.push(f):s[c]=f}return s}function K(n,t){if(o.isStr(n))return n.concat(t);if(o.isArr(n))return n.concat(t);for(var e=n,r=0,i=Object.keys(t);r<i.length;r++){var u=i[r];o.isArr(t[u])?(o.isVal(n[u])||(n[u]=[]),K(n[u],t[u])):o.isObj(t[u])?(o.isVal(n[u])||(n[u]={}),K(n[u],t[u])):e[u]=t[u]}return e}function Q(n,t){if(!o.isVal(n))return-1;if(!o.isArr(n)||!o.isStr(n)||!o.isList(n)){for(var e=0,r=Object.keys(n),i=r.length;e<i;e++){var u=r[e];if(t(n[u],u,e,n)===M)return e}return e}var a=n.length;if(o.isArr(n))for(var s=0;s<a;s++){if(t(P(n,s),s,s,n)===M)return s}else for(var c=0;c<a;c++){if(t(n[c],c,c,n)===M)return c}return n.length}function G(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(!o.isArr(n)||!o.isStr(n)){for(var r=0,i=Object.keys(n),u=i.length-1;u>=0;u--)if(!(u<e[1])){if(u>=e[0])return u;var a=t(n[i[u]],i[u],u,n);if(a===M)return u}return r}for(var s=n.length-1;s>=0;s--){var c=t(P(n,s),s,s,n);if(c===M)return s}return n.length}function z(n,t){var e;return t=Y(t,(function(){return!0})),Q(n,(function(n,r,i){if(!0===(e=t(n,r,i)))return e=i,M})),e}function J(n,t){return n[z(n,t)]}function Z(n,t){var e;return t=Y(t,(function(){return!0})),G(n,(function(n,r,i){if(!0===(e=t(n,r,i)))return e=i,M})),e}function nn(n,t){return n[Z(n,t)]}function tn(n,t){var e=Y(t),r=!1;return Q(n,(function(n,t,i,o){if(!0===(r=e(n,t,i,o)))return M})),r}function en(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];t=Y(t,(function(){return!0}));var r="",i=e?G:Q;return i(n,(function(e,i,o){t&&!0!==t(e,i,o,n)||(r+=e)})),r}function rn(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(o.isArr(t)){var r=q(t);t=function(n,t,e){return tn(r,t)}}else t=Y(t,(function(){return!0}));var i={},u=e?G:Q;return u(n,(function(e,r,o){!0===t(e,r,o,n)&&(i[r]=e)})),i}function on(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(o.isArr(t)){var r=q(t);t=function(n,t,e,i){return tn(r,e)}}else t=Y(t,(function(){return!0}));var i=[],u=n.length;if(e)for(var a=u;a>=0;a--){var s=n[a];!0===t(s,a,a,n)&&i.push(s)}else for(var c=0;c<u;c++){var f=n[c];!0===t(f,c,c,n)&&i.push(f)}return i}function un(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return o.isStr(n)?en(n,t,e):o.isArr(n)||o.isList(n)?on(n,t,e):rn(n,t,e)}function an(n,t){var e;t=U(t);var r=-1;return Q(n,(function(n,i){var o=t(n,i);e?o>=e&&(e=o,r=i):(e=o,r=i)})),r}function sn(n,t){var e;t=U(t);var r=-1;return Q(n,(function(n,i){var o=t(n,i);e?o<=e&&(e=o,r=i):(e=o,r=i)})),r}function cn(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=[],i=e?G:Q;return i(n,(function(e,i){var u=t(e,i,n);o.isUnd(u)||r.push(u)})),r}function fn(n,t){var e=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r={},i=e?G:Q;return i(n,(function(e,i,u){var a=t(e,i,u,n);o.isUnd(a)||(r[i]=a)})),r}function ln(n,t){var e;return e=o.isStr(n)?"":o.isArr(n)?[]:{},Q(n,(function(r,i){var u;t?u=t(r,i,n):!o.isArr(e)&&o.isObj(e)?(u={})[i]=r:u=r,e=K(e,u)})),e}var vn=(_={ANY:C,ALL:W,BREAK:M,item:P,contains:V,add:H,remove:$,toggle:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];if(0!==e.length){e=ln(e);var i=void 0;if(1===e.length)$(n,e)||H(n,e[0]);else{e.push(e[0]);var o=!1;Q(n,(function(t,r){(i=e.indexOf(t))>=0&&e.length>i+1&&(o=!0,n[r]=e[i+1])})),o||n.push(e[0])}}},objMatchOne:D,objMatchAll:B,DeepClone:q,DeepConcat:K,ForRange:function(n,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3?arguments[3]:void 0;if(!o.isArr(n)||!o.isStr(n)){var i=Object.keys(n);r=r||i.length-1;for(var u=e;u<=r;u++){var a=t(n[i[u]],i[u],u,n);if(a===M)return u}return r}r=r||n.length;for(var s=e;s<r;s++){var c=t(P(n,s),s,s,n);if(c===M)return s}return r},ForEach:Q,ForEachRTL:G,ArrayForEach:function(n,t){var e=Array.from(n),r=Q(e,t);return r<e.length?e.slice(0,r):e},ArrayForEachRTL:function(n,t){var e=Array.from(n),r=G(e,t);return r<e.length?e.slice(0,r):e},FirstIndex:z,First:J,StartsWith:function(n,t){return(t=Y(t,(function(){return!0})))(J(n))},LastIndex:Z,Last:nn,EndsWith:function(n,t){return(t=Y(t,(function(){return!0})))(nn(n))},Reverse:function(n){if(o.isArr(n))return n.reverse();var t="";return G(n,(function(n){t+=n})),t},Any:tn,All:function(n,t){t=Y(t,(function(){return!0}));var e=!0;return Q(n,(function(n,r,i,o){if(!1===(e=t(n,r,i,o)))return M})),e},Filter:un,FilterRTL:function(n,t){return un(n,t,!0)},Map:function(n,t){return t=Y(t,(function(n){return n})),o.isArr(n)?cn(n,t):o.isObj(n)?fn(n,t):void 0},FlatMap:ln,keyValuePairs:function(n){var t=[];return Q(n,(function(n,e){t.push(o.dict(e,n))})),t},entries:function(n){var t=[];return Q(n,(function(n,e){t.push([e,n])})),t},spread:I,spreadAll:R,MaxIndex:an,Max:function(n,t){return n[an(n,t)]},MinIndex:sn,Min:function(n,t){return n[sn(n,t)]}}).Filter,hn=(_.ForEach,_.contains),dn=["","initial","unset",void 0,null];function yn(n,t,e){if(d(t)){var r=getComputedStyle(n);return r=vn(r,(function(n,t){return y(t)&&!hn(dn,n)}))}if(d(e))return n.style[t]||getComputedStyle(n)[t];n.style[t]=e}i={style:yn,hasStyle:function(n,t){var e=yn(n,t);return!hn(dn,e)}};var _n={},mn={};function gn(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function pn(n,t,e){return t&&gn(n.prototype,t),e&&gn(n,e),n}mn={setEvent:function(n,e,r,i){g.isBrowser()?(o.isArr(e)||(e=_.contains(e," ")?e.split(" ").Map((function(n){return n.trim()})):[e]),n.__EVENTS__=n.__EVENTS__||{},_.ForEach(e,(function(e){n.__EVENTS__[e]=n.__EVENTS__[e]||[];var u=function(t){r(t,n)};o.hasField(i,"duplicates",(function(n){return n}))||(n.__EVENTS__[e]=_.Filter(n.__EVENTS__[e],(function(i){if(t.funcBodyEquals(i.l,r))return n.removeEventListener(e,i.f,i.o),!1;console.log("notEqual",i.l.toString(),r.toString())}))),n.__EVENTS__[e].push({f:u,l:r,o:i}),n.addEventListener(e,u,i)}))):S.error("Events are browser only!")},clearEvent:function(n,t){g.isBrowser()?(o.isArr(t)||(t=_.contains(t," ")?t.split(" ").Map((function(n){return n.trim()})):[t]),n.__EVENTS__=n.__EVENTS__||{},o.isEmpty(n.__EVENTS__)||_.ForEach(t,(function(t){n.__EVENTS__[t]=n.__EVENTS__[t]||[],o.isEmpty(n.__EVENTS__[t])||(_.ForEach(n.__EVENTS__[t],(function(e){return n.removeEventListener(t,e.f,e.o),!1})),n.__EVENTS__[t]=[])}))):S.error("Events are browser only!")}};var bn=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.element=t,Object.defineProperty(this,"items",{get:function(){return this.classes},set:function(t){var e=!1;this.classes&&(e=!0),!o.isVal(t)||o.isEmpty(t)?this.classes=[]:o.isArr(t)?this.classes=t:o.isStr(t)?this.classes=n.split(t):t instanceof DOMTokenList&&(this.classes=Array.from(t)),e&&this.__update__()}}),this.items=t.getAttribute("class")}return pn(n,null,[{key:"split",value:function(n){return n.trim().replace(/\s+/," ").split(" ")}}]),pn(n,[{key:"__update__",value:function(){this.element.setAttribute("class",this.classes.join(" "))}},{key:"contains",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return e=_.FlatMap(e),_.All(e,(function(t){return _.contains(n.classes,t)}))}},{key:"add",value:function(){for(var n=this,t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e=_.FlatMap(e),_.ForEach(e,(function(t){n.contains(t)||n.classes.push(t.toString())})),this.__update__()}},{key:"remove",value:function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];t=_.FlatMap(t);var r=this.classes.length;return this.classes=_.Filter(this.classes,(function(n){return!_.Any(t,(function(t){return t.endsWith("*")?n.startsWith(t.replace("*","")):n===t}))})),this.__update__(),r!==this.classes.length}},{key:"toggle",value:function(){for(var n=arguments.length,t=new Array(n),e=0;e<n;e++)t[e]=arguments[e];_.toggle(this.classes,t),this.__update__()}}],[{key:"of",value:function(t){return new n(t)}}]),n}();Object.seal(bn);var En=(_n={Classes:bn,cls:function(n){return bn.of(n)},addClass:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];bn.of(n).add(e)},hasClass:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];bn.of(n).contains(e)},removeClass:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];bn.of(n).remove(e)},toggleClass:function(n){for(var t=arguments.length,e=new Array(t>1?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];bn.of(n).toggle(e)}}).cls;function An(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return o.isEl(n)?Array.of(n):o.isEls(n)?n:o.isStr(n)?o.isEl(t)?Array.from(t.querySelectorAll(n)):(S.error("Query root is not a node!\t[X.$(".concat(n,", ").concat(t,")]")),null):(S.error("Query is not string nor element X.$(".concat(n,")")),null)}r={$:An,$$:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return o.isEl(n)?Array.of(n):o.isStr(n)?o.isEl(t)?Array.of(t.querySelector(n)):(S.error("Query root is not a node!\t[X.$(".concat(n,", ").concat(t,")]")),null):(S.error("Query is not string nor element X.$$(".concat(n,")")),null)},queryOf:function n(t,e,r){if(!o.isVal(t)||!o.isEl(t))return S.error("\nQuery generator's first parameter must be Element/Node! CAUSE: X.queryOf(".concat(t,", ").concat(e,")")),null;e=e||document.body;var i=t.tagName;if(r=r||"",t.id)return(i+=t.id?"#"+t.id:"")+(""!==r?" "+r:"");if(En(t).items.forEach((function(n){i+=""!==n?"."+n:""})),i&&An(i,t.parentElement).length>1){var u=Array.from(t.parentElement.children).findIndex((function(n){return t===n}));u>0&&(i=i+":nth-child("+(u+1)+")")}return t.parentElement&&t.parentElement!==e&&t.parentElement!==document?n(t.parentElement)+" > "+i+(""!==r?" "+r:""):i+(""!==r?" "+r:"")}};var wn=/^(^-?\d*(?:\.\d+)?)(.*)$/;function Sn(n){return n>=0?n:-n}n.Slyde=function(n,e){var o=e.sticky,u=void 0!==o&&o,a=e.rtl,s=void 0!==a&&a,c=e.verticalScroll,f=void 0!==c&&c,l=e.onchange,v=e.onchanging,h=this;h._cnt=r.$$(n)[0],h._sld=r.$$(".slyde-wrapper",h._cnt)[0],h.leftArrow=r.$$(".slyde-left-arrow",h._cnt)[0],h.rightArrow=r.$$(".slyde-right-arrow",h._cnt)[0],h.isdown=!1,h.transX=0,h.lastPointerX=h._cnt.pageX,h.lastPointerY=h._cnt.pageY,h.lastDif=null,h.moves=0,h.items=[],h.sticky=u,h.osThresh=.2,h.osThreshCI=.52,h._rtl=s,h._rtl&&_n.addClass(h._cnt,"slyde-rtl"),h._vertScroll=f,h.stopped=!1,h.onchange=l,h.onchanging=v,h._debounceChange=t.debounce((function(n,t,e){h.onchange&&h.onchange(n,t,e)}),200),h.minOf=function(n,t){return n<t?n:t},h.maxOf=function(n,t){return n>t?n:t},h._limit=function(n,t,e){var r=h.minOf(t,e),i=h.maxOf(t,e);return n<=r?r:n>=i?i:n},h._itemL=function(n){return n.offsetLeft},h._itemW=function(n){return n.offsetWidth},h._scrollW=function(){var n=0;return _.ForEach(h.items,(function(t){n+=h._itemW(t)})),n},h._calcHeight=function(){return _.Max(h.items,(function(n){return n.offsetHeight})).clientHeight},h._thr=function(){return h.sticky?h.osThreshCI:h.osThresh},h._leftLimit=function(n){return n=n||h._thr(),h._cnt.offsetWidth*n},h._rightLimit=function(n){return n=n||h._thr(),h._sld.offsetWidth-h._cnt.offsetWidth*(1-n)},h._slideTo=function(n,t){i.style(h._sld,"left",n+"px"),t&&h._update()},h._debounceStick=t.debounce((function(){try{h.isdown=!1,i.style(h._sld,"transition","all 0.2s ease-out"),h.transX=h.itemX(h.centerItemIndex()),h._slideTo(h.transX)}catch(n){console.error(h.centerItemIndex())}}),100),h._slideX=function(n,t,e,r){void 0===r&&(r=!0),e=e||.4,i.style(h._sld,"transition","all "+(e/2).toPrecision(4)+"s ease-out"),h.transX+=n,r&&(h.transX=h._limit(h.transX,h._leftLimit(),-h._rightLimit())),t&&(h.isdown=!0,h._debounceStick()),h._slideTo(h.transX,t),h._update(!0)},h.bounce=function(n,t,e){t=t||!0,n=n||1;var r=_.Min(h.items,(function(n){return n.offsetWidth})).offsetWidth,i=_.Max(h.items,(function(n){return n.offsetWidth})).offsetWidth;h._slideX(n*(i+r)/2,t,void 0,e)},h.slideToIndex=function(n){h._slideX(h.itemX(n)-h.transX,void 0,void 0,!1)},h._start=function(n,t){n.touches&&n.touches.length>1||(h.isdown=!0,h.lastPointerX=n.pageX||n.touches[0].pageX,i.style(t,"transition","none"))},h._move=function(n,t){if(!h.stopped&&h.isdown&&!(n.touches&&n.touches.length>1)){var e=n.pageX||n.changedTouches[0].pageX,r=e-h.lastPointerX,i=(n.pageY||n.changedTouches[0].pageY)-h.lastPointerY;!h._vertScroll&&Sn(i)>0||0!==r&&(h.transX+=r,h.lastPointerX=e,h.lastDif=1.2*r,h.transX=h._limit(h.transX,h._leftLimit(),-h._rightLimit()),h._slideTo(h.transX))}},h._finish=function(n,t){if(h.isdown){h.isdown=!1;var e=0;e=(Sn(h.lastDif)/50).toPrecision(3),e=h._limit(e,.3,.5),h._slideX(10*h.lastDif,h.sticky,e),h.lastDif=0}},h._debounceBounce=t.debounce((function(n){h.isdown=!1,h.bounce(n>0?.6:-.6,h.sticky),h._update()}),50),h._wheel=function(n,t){if(n.deltaY){if(!h._vertScroll)return;n.preventDefault()}var e=h._rtl?1:-1,r=n.deltaX||n.deltaY*e;h.isdown=!0,h._debounceBounce(r)},h.setHeight=function(n){i.style(h._sld,"height",n+"px"),i.style(h._cnt,"height",1.005*n+"px")},h._updateHeight=function(){var n,t,e=h._calcHeight()+2*(n=i.style(h._sld,"border-bottom"),t=wn.exec(n),{value:parseFloat(t[1])||"",unit:t[2]||""}).value;h.setHeight(e)},h._addItem=function(n){h.items.push(n)},h._assignEventHandlers=function(){mn.setEvent(h._sld,["mousedown","touchstart"],h._start),mn.setEvent(h._sld,["mousemove","touchmove"],h._move),mn.setEvent(h._sld,["mouseleave","mouseup","touchend"],h._finish),mn.setEvent(h._sld,"wheel",h._wheel),h.leftArrow&&mn.setEvent(h.leftArrow,"click",(function(){h.bounce(1)})),h.rightArrow&&mn.setEvent(h.rightArrow,"click",(function(){h.bounce(-1)}))},h._setup=function(){r.$(".slyde-item",h._sld).forEach((function(n){h._addItem(n)})),h._assignEventHandlers(),h.transX=h.itemX(0),h._slideTo(h.transX),h._updateHeight()},h._update=function(){var n=[],t=h._cnt.offsetWidth,e=h.transX,r=-e,i=-e+t;h.items.forEach((function(t,e){var o=t.offsetWidth,u=t.offsetLeft;u<i&&u+o>r&&n.push(e)})),h.onchanging&&h.onchanging(h,h.centerItemIndex(),n),h._debounceChange(h,h.centerItemIndex(),n)},h.start=function(){h.stopped=!1,h._update()},h.stop=function(){h.stopped=!0},h.itemX=function(n){var t=_.item(h.items,n);return-t.offsetLeft+(h._cnt.offsetWidth/2-t.offsetWidth/2)},h.itemXitem=function(n){return-n.offsetLeft+(h._cnt.offsetWidth/2-n.offsetWidth/2)},h.itemAbsDistance=function(n){return Sn(h.itemX(n)-h.transX)},h.centerItemIndex=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return _.MinIndex(h.items,(function(n,t){return h.itemAbsDistance(t)}),n)},h.stop=function(){clearInterval(h.interval)},h._setup()}}();
//# sourceMappingURL=slyde.js.map