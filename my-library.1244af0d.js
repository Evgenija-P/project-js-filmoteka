function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},n.parcelRequired7c6=l),l.register("kyEFX",(function(t,n){var r,a;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var l={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)l[t[n]]=e[t[n]]},a=function(e){var t=l[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),l("kyEFX").register(JSON.parse('{"7OqUs":"my-library.1244af0d.js","fynZF":"foto.88e9f0bc.jpg","4627Z":"my-library.f559b490.js"}'));var o;function c(e){const t=e.map((e=>e.name));if(t.length>2){const e=t.splice(0,2);return e.push("Other"),e.join(", ")}return t.join(", ")}function i(e){return e.map((({poster_path:e,title:n,genres:r,release_date:a,id:l,vote_average:i})=>{const s=new Date(a).getFullYear();return e?`\n      <li class="card" id="${l}">\n        <img class="card__img" src="https://image.tmdb.org/t/p/w400${e}" alt="${n}" />\n        <div class="card__wrap">\n        <p class="card__titel">\n        ${n} <br />\n          <span class="card__text">${c(r)} | ${s}</span>\n        </p> <p class="cart__rating">${i.toFixed(1)}</p> </div>\n  </li>`:`\n      <div class="card" id="${l}">\n        <img class="card__img" src="${t(o)}" alt="${n}" />\n        <p class="card__titel">\n        ${n} <br />\n          <span class="card__text">${c(r)} | ${s}</span>\n        </p> <p class="cart__rating">${i.toFixed(1)}</p>\n  </div>`})).join("")}o=new URL(l("kyEFX").resolve("fynZF"),import.meta.url).toString();const s={gallery:document.querySelector("#library__gallery")};function u(){const e=JSON.parse(localStorage.getItem("watched"));if(null===e||0===e.length)return s.gallery.innerHTML='<h1 style="font-size=80px">There are not added watched films</h1>';s.gallery.innerHTML=i(e)}const d={gallery:document.querySelector("#library__gallery")};function g(){const e=JSON.parse(localStorage.getItem("queue"));if(null===e||0===e.length)return d.gallery.innerHTML='<h1 style="font-size=80px">There are not added queue films</h1>';d.gallery.innerHTML=i(e)}const f={gallery:document.querySelector("#library__gallery"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn")};f.watchedBtn.addEventListener("click",(function(){f.watchedBtn.classList.add("active"),f.queueBtn.classList.remove("active"),u()})),f.queueBtn.addEventListener("click",(function(){f.queueBtn.classList.add("active"),f.watchedBtn.classList.remove("active"),g()})),l("hD3IM");var y=l("dSs1Y");window.addEventListener("load",(()=>{y.Loading.dots({svgColor:"red"}),function(){const e=JSON.parse(localStorage.getItem("watched")),t=JSON.parse(localStorage.getItem("queue"));if(console.log(e),console.log(t),null===(t||e))return p.gallery.innerHTML='<h1 style="font-size=80px">Your Library is empty</h1>';null===e||0===e.length?(p.gallery.innerHTML=i(t),p.queueBtn.classList.add("active")):(p.gallery.innerHTML=i(e),p.watchedBtn.classList.add("active"))}(),setTimeout((()=>{y.Loading.remove()}),300)}));const p={gallery:document.querySelector("#library__gallery"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn")};l("4EYwt"),l("eAwbs"),l("422V3"),l("d0cuX"),l("2es7B"),l("eAwbs");
//# sourceMappingURL=my-library.1244af0d.js.map
