!function(){var e={gallery:document.querySelector("#library__gallery"),watchedBtn:document.querySelector(".watched-btn"),queueBtn:document.querySelector(".queue-btn")};e.watchedBtn.addEventListener("click",(function(){e.watchedBtn.classList.add("active"),e.queueBtn.classList.remove("active");var t=JSON.parse(localStorage.getItem("watched"));if(null===t)return e.gallery.innerHTML='<h1 style="font-size=80px">There are not added watched films</h1>';e.gallery.innerHTML=markupMovies(t)})),e.queueBtn.addEventListener("click",(function(){e.queueBtn.classList.add("active"),e.watchedBtn.classList.remove("active")}))}();
//# sourceMappingURL=my-library.496fa3ef.js.map
