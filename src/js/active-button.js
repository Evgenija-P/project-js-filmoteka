import { renderMyLibraryWatched } from './renderMyLibraryWatched';
import { renderMyLibraryQueue } from './renderMyLibraryQueue';

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
  renderMyLibraryQueue();
}
