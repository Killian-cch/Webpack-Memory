(()=>{"use strict";let t=["c","c","c-plus-plus","c-plus-plus","css","css","html","html","java","java","js","js","php","php","python","python"];!function(t){let e,l=t.length;for(;0!=l;)e=Math.floor(Math.random()*l),l--,[t[l],t[e]]=[t[e],t[l]]}(t);for(let e=0;e<16;e++){let l=document.getElementById("img"+e);l.src="../memory/images/"+t[e]+"-logo.png",l.alt=t[e],document.getElementById("carte"+e).dataset.type=t[e]}})();