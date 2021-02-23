/**
 * skylark-domx-images - The skylark image library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-langx/langx","skylark-domx-eventer","./images"],function(e,n,o){return o.watch=function(o){e.isArray(o)||(o=[o]);var r=o.length,t=0,i=0,s=0,a=new e.Deferred;function d(){a.resolve({total:r,successed:i,failered:s,imgs:o})}function f(e,n){t++,n?i++:s++,a.progress({img:e,isLoaded:n,progressed:t,total:r,imgs:o}),t==r&&d()}return e.defer(function(){o.length?o.forEach(function(e){isCompleted(e)?f(e,isLoaded(e)):n.on(e,{load:function(){f(e,!0)},error:function(){f(e,!1)}})}):d()}),a.promise.totalCount=r,a.promise}});
//# sourceMappingURL=sourcemaps/watch.js.map
