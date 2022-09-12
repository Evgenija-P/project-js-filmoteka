import { markupMovies } from './markup-library-card';
import { renderMyLibraryWatched } from './renderMyLibraryWatched';
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
  renderMyLibraryWatched();
}

function onQueueBtnClick() {
  refs.queueBtn.classList.add('active');
  refs.watchedBtn.classList.remove('active');
  refs.gallery.innerHTML = '';
  const userQueue = JSON.parse(localStorage.getItem('queue'));
  if (userQueue === null) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">There are not added queue films</h1>');
  }
  refs.gallery.innerHTML = markupMovies(userQueue);
}
