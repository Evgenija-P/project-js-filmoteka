!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},n.parcelRequired7c6=c),c.register("iE7OH",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var c={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)c[t[n]]=e[t[n]]},a=function(e){var t=c[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),c.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var a={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=a[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),a[e]=t),t}})),c("iE7OH").register(JSON.parse('{"1B9dp":"my-library.fd8af22a.js","jXq3O":"foto.88e9f0bc.jpg","5UbS1":"index.859e16cd.css","6IIJ4":"my-library.48fa8e01.js"}'));var o;function l(e){var t=e.map((function(e){return e.name}));if(t.length>2){var n=t.splice(0,2);return n.push("Other"),n.join(", ")}return t.join(", ")}function i(e){return e.map((function(e){var n=e.poster_path,r=e.title,a=e.genres,c=e.release_date,i=e.id,u=e.vote_average,s=new Date(c).getFullYear();return n?'\n      <li class="card" id="'.concat(i,'">\n        <img class="card__img" src="https://image.tmdb.org/t/p/w400').concat(n,'" alt="').concat(r,'" />\n        <div class="card__wrap">\n        <p class="card__titel">\n        ').concat(r,' <br />\n          <span class="card__text">').concat(l(a)," | ").concat(s,'</span>\n        </p> <p class="cart__rating">').concat(u.toFixed(1),"</p> </div>\n  </li>"):'\n      <div class="card" id="'.concat(i,'">\n        <img class="card__img" src="').concat(t(o),'" alt="').concat(r,'" />\n        <p class="card__titel">\n        ').concat(r,' <br />\n          <span class="card__text">').concat(l(a)," | ").concat(s,'</span>\n        </p> <p class="cart__rating">').concat(u.toFixed(1),"</p>\n  </div>")})).join("")}o=c("aNJCr").getBundleURL("1B9dp")+c("iE7OH").resolve("jXq3O");var u={gallery:document.querySelector("#library__gallery")};function s(){var e=JSON.parse(localStorage.getItem("watched"));if(null===e||0===e.length)return u.gallery.innerHTML='<h1 style="font-size=80px">There are not added watched films</h1>';u.gallery.innerHTML=i(e)}var d={gallery:document.querySelector("#library__gallery"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn")};d.watchedBtn.addEventListener("click",(function(){d.watchedBtn.classList.add("active"),d.queueBtn.classList.remove("active"),s()})),d.queueBtn.addEventListener("click",(function(){d.queueBtn.classList.add("active"),d.watchedBtn.classList.remove("active"),d.gallery.innerHTML="";var e=JSON.parse(localStorage.getItem("queue"));if(null===e)return d.gallery.innerHTML='<h1 style="font-size=80px">There are not added queue films</h1>';d.gallery.innerHTML=i(e)})),c("4EZvG");var f=c("7rQOT");window.addEventListener("load",(function(){f.Loading.dots({svgColor:"red"}),function(){var e=JSON.parse(localStorage.getItem("watched")),t=JSON.parse(localStorage.getItem("queue"));if(console.log(e),console.log(t),null===(t||e))return g.gallery.innerHTML='<h1 style="font-size=80px">Your Library is empty</h1>';null===e||0===e.length?(g.gallery.innerHTML=i(t),g.queueBtn.classList.add("active")):(g.gallery.innerHTML=i(e),g.watchedBtn.classList.add("active"))}(),setTimeout((function(){f.Loading.remove()}),300)}));var g={gallery:document.querySelector("#library__gallery"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn")};c("ac0C9"),c("hPu37"),c("1Gwk9"),c("6iAD0"),c("3zd1F"),c("lvyYG")}();
//# sourceMappingURL=my-library.fd8af22a.js.map