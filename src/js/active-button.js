const refs = {
  gallery: document.querySelector('#library__gallery'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

function onWatchedBtnClick() {
  refs.watchedBtn.classList.add('active');
  refs.queueBtn.classList.remove('active');
  const userWatched = JSON.parse(localStorage.getItem('watched'));
  if (userWatched === null) {
    return refs.gallery.innerHTML =
      '<h1 style="font-size=80px">There are not added watched films</h1>';
  }
  refs.gallery.innerHTML = markupMovies(userWatched);
}

function onQueueBtnClick() {
  refs.queueBtn.classList.add('active');
  refs.watchedBtn.classList.remove('active');
}
