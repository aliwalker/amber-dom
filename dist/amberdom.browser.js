!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.amberdom=t()}(this,function(){"use strict";function e(e){return"[object Array]"===Object.prototype.toString.call(e)}var t=/^ev\-([a-z]+)/,n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tagName=t,this.props=n,this.children=r,this.key=n.key||void 0,this.cleanups=[],this.count=r.reduce(function(t,n){return n instanceof e?n.count+t+1:t+1},0),delete n.key}return n(e,[{key:"render",value:function(){var n=/(SVG|svg)/.test(this.tagName)?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(this.tagName),r=this.props;for(var o in r)if(r.hasOwnProperty(o)){var i=o.match(t);if(i)try{var a="function"==typeof r[o]?r[o]:new Function("("+r[o]+")(...arguments);");this.cleanups.push({evName:i[1],handler:a}),n.addEventListener(i[1],a,!1)}catch(e){console.log("Warning: listener for event '"+_event[1]+"' isn't working.\n              If you're specifying this handler in string, please specify a function.")}else"className"===o?n.setAttribute("class",r[o]):n.setAttribute(o,r[o])}return this.children.forEach(function(t){var r;if("string"==typeof t)r=document.createTextNode(t);else{if(!(t instanceof e||t.render&&"function"==typeof t.render))throw new Error("Custom-defined node must provide a `render` method.");r=t.render()}n.appendChild(r)}),this.$el=n,n}},{key:"detachEventListeners",value:function(){var e=this;this.cleanups.forEach(function(t){e.$el.removeEventListener(t.evName,t.handler)})}}]),e}(),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=/([\.#]?[^\s#.]+)/;var s="REPLACE",c="REORDER",f="PROPS",u="TEXT";function d(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){return e.map(function(e,n){return t&&e?"function"==typeof t?t(e):e[t]:void 0})}function v(e){var t=!0,n=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){if(void 0!==o.value)return!1}}catch(e){n=!0,r=e}finally{try{!t&&i.return&&i.return()}finally{if(n)throw r}}return!0}var h=s,p=c,y=u,m=f;function g(e,t,n,r){var o,i,a=[];return void 0===t?n:"string"==typeof e&&"string"==typeof t?(e===t||(n[r]=[{type:y,text:t}]),n):(o=function(e,t){var n,r={};for(var o in t)t.hasOwnProperty(o)&&(n=t[o],e[o]!==n&&(r[o]=n));for(var i in e)i in t||(r[i]=void 0);return r}(e.props||{},t.props||{}),e.tagName!==t.tagName||e.key!==t.key?(a.push({type:h,node:t,oldNode:e}),n[r]=a,n):(i=o,0!==Object.keys(i||{}).length&&a.push({type:m,props:o,node:e}),function(e,t,n,r,o){var i=function(e,t,n){var r=l(e,n),o=l(t,n),i=e.length,a=t.length,s=e.slice(),c=[];if(v(r)&&v(o)){var f=void 0,u=void 0,h=void 0,p=void 0;if(i===a)return{diffed:s,moves:c};i>a?(f="REMOVE",u=a,h=i,s.splice(a,i-a)):a>i&&(f="INSERT",u=i,h=a,p=t.slice(i),s=[].concat(d(s),d(p)));for(var y=u;y<h;y++)c.push({type:f,index:y,node:t[y]||null});return{diffed:s,moves:c}}var m=new Array(i).fill(0);return o.forEach(function(e,n){var o=r.indexOf(e);if(-1===o)c.push({type:"INSERT",index:n,node:t[n]}),s.splice(n,0,t[n]),m[i-1]++;else{for(var a=o,f=i-1;f>=o;f--)a+=m[f];if(n===a)return;c.push({type:"MOVE",from:a,to:n});var u=s.splice(a,1)[0];s.splice(n,0,u),m[o]++}}),r.forEach(function(e,t){-1===o.indexOf(e)&&c.push({type:"REMOVE",index:a,node:s.splice(a,1)[0]})}),{diffed:s,moves:c}}(e,t,"key");e=i.diffed,i.moves.length&&r.push({type:p,moves:i.moves});var a=null,s=o;e.forEach(function(e,r){t[r];s=a&&a.count?a.count+s+1:s+1,g(e,t[r],n,s),a=e})}(e.children||[],t.children||[],n,a,r),a.length&&(n[r]=a),n))}var E=s,N=c,b=f,w=u;return{h:function(t,n){for(var s=arguments.length,c=Array(s>2?s-2:0),f=2;f<s;f++)c[f-2]=arguments[f];var u;if(n||(n={}),c||(c=[]),(n instanceof r||"string"==typeof n)&&(c.unshift(n),n={}),e(n)&&(c=[].concat(i(n),[c]),n={}),n.style&&"object"===o(n.style)){var d="";for(var l in n.style)d+=l+": "+n.style[l]+"; ";n.style=d}return n.className&&e(n.className)&&(n.className=n.className.join(" ")),"string"==typeof t?((u=function(e){var t={};return e.split(a).forEach(function(e){""!==e&&(t.tagName?"."===e[0]?(t.className||(t.className=[])).push(e.substr(1)):"#"===e[0]&&(t.id=e.substr(1)):t.tagName=e)}),t.className&&t.className.join(" "),t}(t)).className&&(n.className||(n.className=""),n.className+=" "+u.className),new r(u.tagName,n,c)):"function"==typeof t?new(Function.prototype.bind.apply(t,[null].concat([n],i(c)))):void 0},diff:function(e,t){var n={};return g(e,t,n,0),n},patch:function(e,n){!function e(n,o,i){var a=o[i.index];if(a&&function(e,n){var o=void 0,i=void 0,a=void 0;n.forEach(function(n){switch(n.type){case E:if((i=n.node instanceof r||n.node.render?n.node.render():"string"==typeof n.node?document.createTextNode(n.node):new Error("You might be using a custom node, if so, you need to provide a render function."))instanceof Error)throw i;n.oldNode.detachEventListeners(),e.parentNode.replaceChild(i,e);break;case b:for(var s in o=n.props)(a=s.match(t))?(n.node.detachEventListeners(),"function"==typeof o[s]&&e.addEventListener(a[1],o[s],!1)):void 0===o[s]?e.removeAttribute("className"!==s?s:"class"):e.setAttribute("className"!==s?s:"class",o[s]);break;case w:e.textContent?e.textContent=n.text:e.nodeValue=n.text;break;case N:!function(e,t){var n=e.childNodes,r=void 0;t.forEach(function(t){switch(t.type){case"INSERT":try{r=t.node.render(),e.insertBefore(r,n[t.index])}catch(e){console.log("A custom-defined node should have a render method, otherwise it must be defined as a function.")}break;case"REMOVE":e.removeChild(n[t.index]),t.node.detachEventListeners();break;case"MOVE":e.insertBefore(n[t.from],n[t.to])}})}(e,n.moves);break;default:throw new Error("Some internal error.")}})}(n,a),n.childNodes){var s=[].slice.call(n.childNodes);s.forEach(function(t,n){i.index++,e(t,o,i)})}}(e,n,{index:0})},VNode:r}});
//# sourceMappingURL=amberdom.browser.js.map
