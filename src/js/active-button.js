import localStorageAPI from './local-storage-API';
import { updateMoviesGalleryByStatus } from './updateLibraryData';

const refs = {
  gallery: document.querySelector('#library__gallery'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  paginationContainer: document.querySelector('.pagination-container'),
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

//-------------Обработчкик событий клика по кнопке просмотренных фильмов-------------

function onWatchedBtnClick({ target }) {
  if (target.classList.contains('active')) {
    return;
  }

  refs.watchedBtn.classList.add('active');
  refs.queueBtn.classList.remove('active');

  updateMoviesGalleryByStatus(target.dataset.status);
}

//-------------Обработчкик событий клика по кнопке фильмов в очереди-------------

function onQueueBtnClick({ target }) {
  if (target.classList.contains('active')) {
    return;
  }
  refs.queueBtn.classList.add('active');
  refs.watchedBtn.classList.remove('active');

  updateMoviesGalleryByStatus(target.dataset.status);
}
