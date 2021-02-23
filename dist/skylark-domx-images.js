/**
 * skylark-domx-images - The skylark image library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,o){var r=o.define,require=o.require,n="function"==typeof r&&r.amd,i=!n&&"undefined"!=typeof exports;if(!n&&!r){var t={};r=o.define=function(e,o,r){"function"==typeof r?(t[e]={factory:r,deps:o.map(function(o){return function(e,o){if("."!==e[0])return e;var r=o.split("/"),n=e.split("/");r.pop();for(var i=0;i<n.length;i++)"."!=n[i]&&(".."==n[i]?r.pop():r.push(n[i]));return r.join("/")}(o,e)}),resolved:!1,exports:null},require(e)):t[e]={factory:null,resolved:!0,exports:r}},require=o.require=function(e){if(!t.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var module=t[e];if(!module.resolved){var r=[];module.deps.forEach(function(e){r.push(require(e))}),module.exports=module.factory.apply(o,r)||null,module.resolved=!0}return module.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,require){e("skylark-domx-images/images",["skylark-langx/skylark"],function(e){return e.attach("domx.images",function e(){return e})}),e("skylark-domx-images/isCompleted",["./images"],function(e){return e.isCompleted=function(e){return e.complete&&void 0!==e.naturalWidth}}),e("skylark-domx-images/isLoaded",["./images"],function(e){return e.isLoaded=function(e){return e.complete&&0!==e.naturalWidth}}),e("skylark-domx-images/watch",["skylark-langx/langx","skylark-domx-eventer","./images"],function(e,o,r){return r.watch=function(r){e.isArray(r)||(r=[r]);var n=r.length,i=0,t=0,a=0,s=new e.Deferred;function l(){s.resolve({total:n,successed:t,failered:a,imgs:r})}function d(e,o){i++,o?t++:a++,s.progress({img:e,isLoaded:o,progressed:i,total:n,imgs:r}),i==n&&l()}return e.defer(function(){r.length?r.forEach(function(e){isCompleted(e)?d(e,isLoaded(e)):o.on(e,{load:function(){d(e,!0)},error:function(){d(e,!1)}})}):l()}),s.promise.totalCount=n,s.promise}}),e("skylark-domx-images/loaded",["skylark-domx-finder","./images","./watch"],function(e,o,r){return o.loaded=function(o,n){var i=[];function t(e){var o=/url\((['"])?(.*?)\1\)/gi.exec(styler.css(e,"background-image")),r=o&&o[2];if(r){var n=new Image;n.src=r,i.push(n)}}if(n=n||{},"IMG"==o.nodeName)i.push(o);else{for(var a=e.findAll(o,"img"),s=0;s<a.length;s++)i.push(a[s]);if(!0===n.background)t(o);else if("string"==typeof n.background){var l=e.findAll(o,n.background);for(s=0;s<l.length;s++)t(l[s])}}return r(i)}}),e("skylark-domx-images/preload",["skylark-langx/langx","./images","./watch"],function(e,o,r){return o.preload=function(o,n){e.isString(o)&&(o=[o]);var i=[];return o.forEach(function(e){var o=new Image;o.src=e,i.push(o)}),r(i)}}),e("skylark-domx-images/transform",["skylark-domx-transforms","./images"],function(e,o){function r(e,o){}return["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout","reset"].forEach(function(o){r[o]=e[o]}),o.transform=r}),e("skylark-domx-images/viewer",["skylark-langx/langx","skylark-domx-noder","skylark-domx-geom","skylark-domx-styler","skylark-domx-transforms","./images"],function(e,o,r,n,i,t){return t.viewer=function(t,a){var s,l={},d=r.clientSize(t),u=a.loaded;a.failered;function f(){n.css(s,{top:(d.height-s.offsetHeight)/2+"px",left:(d.width-s.offsetWidth)/2+"px"}),i.reset(s),n.css(s,{visibility:"visible"}),u&&u()}function m(){}function c(e){s.style.visibility="hidden",s.src=e}!function(){"relative"!=(l=n.css(t,["position","overflow"])).position&&"absolute"!=l.position&&n.css(t,"position","relative");n.css(t,"overflow","hidden"),s=new Image,n.css(s,{position:"absolute",border:0,padding:0,margin:0,width:"auto",height:"auto",visibility:"hidden"}),s.onload=f,s.onerror=m,o.append(t,s),a.url&&c(a.url)}();var g={load:c,dispose:function(){o.remove(s),n.css(t,l),s=s.onload=s.onerror=null}};return["vertical","horizontal","rotate","left","right","scale","zoom","zoomin","zoomout","reset"].forEach(function(o){g[o]=function(){var r=e.makeArray(arguments);r.unshift(s),i[o].apply(null,r)}}),g}}),e("skylark-domx-images/main",["skylark-domx-query","skylark-domx-velm","./images","./isCompleted","./isLoaded","./loaded","./preload","./transform","./viewer","./watch"],function(e,o,r,n,i,t,a,s,l,d){return o.delegate(["imageIsCompleted","imageIsLoaded","imageLoaded","imageViewer"],r,{imageIsCompleted:"isCompleted",imageIsLoaded:"isLoaded",imageLoaded:"loaded",imageViewer:"viewer"}),r}),e("skylark-domx-images",["skylark-domx-images/main"],function(e){return e})}(r),!n){var a=require("skylark-langx-ns");i?module.exports=a:o.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-images.js.map
