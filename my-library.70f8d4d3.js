function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var a={id:e,exports:{}};return n[e]=a,r.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){t[e]=r},r.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"er5GI":"my-library.70f8d4d3.js","fynZF":"foto.88e9f0bc.jpg"}'));var l;function i(e){const r=e.map((e=>e.name));if(r.length>2){const e=r.splice(0,2);return e.push("Other"),e.join(", ")}return r.join(", ")}function o(r){return r.map((({poster_path:r,title:n,genres:t,release_date:a,id:o,vote_average:s})=>{const c=new Date(a).getFullYear();return r?`\n      <li class="card" id="${o}">\n        <img class="card__img" src="https://image.tmdb.org/t/p/w400${r}" alt="${n}" />\n        <div class="card__wrap">\n        <p class="card__titel">\n        ${n} <br />\n          <span class="card__text">${i(t)} | ${c}</span>\n        </p> <p class="cart__rating">${s.toFixed(1)}</p> </div>\n  </li>`:`\n      <div class="card" id="${o}">\n        <img class="card__img" src="${e(l)}" alt="${n}" />\n        <p class="card__titel">\n        ${n} <br />\n          <span class="card__text">${i(t)} | ${c}</span>\n        </p> <p class="cart__rating">${s.toFixed(1)}</p>\n  </div>`})).join("")}l=new URL(a("kyEFX").resolve("fynZF"),import.meta.url).toString();const s={gallery:document.querySelector("#library__gallery"),queueBtn:document.querySelector(".queue-btn")};s.queueBtn=addEventListener("click",(function(){s.gallery.innerHTML="";const e=[...JSON.parse(localStorage.getItem("queue"))];s.gallery.innerHTML=o(e)})),function(){if(0===localStorage.length)return void(s.gallery.innerHTML='<h1 style="font-size=80px">Your Library is empty</h1>');const e=[...JSON.parse(localStorage.getItem("watched")),...JSON.parse(localStorage.getItem("queue"))];console.log(e),s.gallery.innerHTML=o(e)}();
//# sourceMappingURL=my-library.70f8d4d3.js.map