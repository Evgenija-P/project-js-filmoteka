import { fetchFilmDetailsById } from './fetch-film-details';
import noPosterUrl from '../images/foto.jpg';
import closeBtnIcon from '../images/icon/symbol-defs.svg';
import { dataSaveQueue, dataSaveWatch } from './add-watch_queue';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { renderMyLibraryQueue } from './renderMyLibraryQueue';
import { renderMyLibraryWatched } from './renderMyLibraryWatched';

import { updateMoviesGalleryByStatus } from './updateLibraryData';

// ИНИЦИАЛИЗАЦИЯ ОБЪЕКТА ССЫЛОК НА ЭЛЕМЕНТЫ РАЗМЕТКИ

const refs = {
  galleryBox: document.querySelector('.gallery__box'),
  filmModal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

let filmDetails = {};
const cash = [];

// -------------СЛУШАТЕЛИ СОБЫТИЙ-------------

refs.galleryBox.addEventListener('click', onGalleryBoxClick);
refs.filmModal.addEventListener('click', onBackdropModalClick);

// -------------ОБРАБОТЧИКИ СОБЫТИЙ-------------

// ------<Обработчик клика по карточке фильма>------

async function onGalleryBoxClick(event) {
  if (event.target.classList.contains('gallery__box')) {
    return;
  }

  const filmId = Number(event.target.closest('.card').id);

  let cashedFilmDetails = cash.find(film => film.id === filmId);

  Loading.dots({
    svgColor: 'red',
  });

  // ------Получение данных с API/CASH------

  if (cashedFilmDetails) {
    filmDetails = cashedFilmDetails;
  } else {
    try {
      filmDetails = await fetchFilmDetailsById(filmId);
    } catch (err) {
      console.log(err.message);
      console.log(err.code);
    }

    cash.push(filmDetails);
  }

  Loading.remove();

  // ------Рендер модального окна------

  clearFilmModalMarkup();
  renderFilmModal(filmDetails);

  // ------Инициализация объекта ссылок на отрендеренные кнопки------

  const modalButtonsRefs = {
    closeBtn: document.querySelector('[button-modal-close]'),
    addQueqeBtn: document.querySelector('[button-add-queue]'),
    addWatchBtn: document.querySelector('[button-add-watch]'),
  };

  // ------Регистрация слушателей событий на отрендеренных кнопках------

  modalButtonsRefs.closeBtn.addEventListener('click', onCloseModal);
  modalButtonsRefs.addQueqeBtn.addEventListener('click', onAddQueqeBtn);
  modalButtonsRefs.addWatchBtn.addEventListener('click', onAddWatchBtn);

  // ------Проверка на наличие фильма в localStorage------

  const watchedMovies = getMovies('watched') || [];
  const moviesInQueue = getMovies('queue') || [];

  const isMovieWatched = watchedMovies.some(
    movie => movie.id === filmDetails.id
  );
  const isMovieInQueue = moviesInQueue.some(
    movie => movie.id === filmDetails.id
  );

  // ------Отключение кнопок по условию------

  if (isMovieInQueue) {
    disableBtn(modalButtonsRefs.addQueqeBtn);
  }

  if (isMovieWatched) {
    disableBtn(modalButtonsRefs.addWatchBtn);
  }

  // ------Открытие модального окна------

  onOpenModal();
  window.addEventListener('keydown', onEscKeyPress);
} // ------</Обработчик клика по карточке фильма>------

function onOpenModal() {
  refs.filmModal.classList.remove('is-hidden');
  disableScroll();
}

function onCloseModal() {
  refs.filmModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  enableScroll();
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function onBackdropModalClick(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}

function onAddQueqeBtn({ target }) {
  dataSaveQueue(filmDetails);
  if (window.location.pathname.includes('my-library')) {
    if (document.querySelector('.watched-btn').classList.contains('active')) {
      updateMoviesGalleryByStatus('watched', globalCurrentPage);
    } else {
      updateMoviesGalleryByStatus('queue', globalCurrentPage);
    }
  }
  disableBtn(target);
  enableBtn(document.querySelector('[button-add-watch]'));
}

function onAddWatchBtn({ target }) {
  dataSaveWatch(filmDetails);
  if (window.location.pathname.includes('my-library')) {
    if (document.querySelector('.watched-btn').classList.contains('active')) {
      updateMoviesGalleryByStatus('watched', globalCurrentPage);
    } else {
      updateMoviesGalleryByStatus('queue', globalCurrentPage);
    }
  }
  disableBtn(target);
  enableBtn(document.querySelector('[button-add-queue]'));
}

window.loadNoPoster = function (img) {
  img.src = noPosterUrl;
};

function disableScroll() {
  let paddingOffset = window.innerWidth - refs.body.offsetWidth + 'px';
  refs.body.classList.add('disable-scroll');
  refs.body.style.paddingRight = paddingOffset;
}

function enableScroll() {
  refs.body.classList.remove('disable-scroll');
  refs.body.style.paddingRight = 0;
}

// -------------ФУНКЦИИ-------------

// ------Создание разметки модального окна------
function createFilmModalMarkup(data) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = data;

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return `
  <div class="film-modal">
    <button class="button-close" type="button" button-modal-close>
      <svg class="icon-close">
        <use href="${closeBtnIcon}#icon-close"></use>
      </svg>
    </button>
    <img
      class="film__image"
      src="${posterUrl}"
      alt="Film Image"
      onerror="loadNoPoster(this)"
    />
    <article>
      <div class="film__content">
        <h2 class="film__title">${title}</h2>

        <ul class="film-info">
          <li class="film-info__item">
            <p class="film-info__lable">Vote / Votes</p>

            <div class="film-vote">
              <span class="film-vote__lable film-vote__lable--orange"
                >${vote_average}</span
              >
              <span>/</span>
              <span class="film-vote__lable">${vote_count}</span>
            </div>
          </li>

          <li class="film-info__item">
            <p class="film-info__lable">Popularity</p>
            <span class="film-info__text">${popularity}</span>
          </li>

          <li class="film-info__item">
            <p class="film-info__lable">Original Title</p>
            <span class="film-info__text film-info__text--uppercase">
              ${original_title}
            </span>
          </li>

          <li class="film-info__item">
            <p class="film-info__lable">Genre</p>
            <span class="film-info__text"
              >${genres.map(genre => genre.name).join(', ')}</span
            >
          </li>
        </ul>

        <div class="film-description">
          <h3 class="film-description__title">About</h3>
          <p class="film-description__text">${overview}</p>
        </div>
      </div>

      <ul class="film-button">
        <li class="film-button__item">
          <button
            class="film-button__primary"
            type="button"
            button-add-watch
          >
            Add to Watched
          </button>
        </li>

        <li class="film-button__item">
          <button class="film-button__primary" type="button" button-add-queue>
            Add to Queue
          </button>
        </li>
      </ul>
    </article>
  </div>
`;
}

function clearFilmModalMarkup() {
  refs.filmModal.innerHTML = '';
}

function renderFilmModal(data) {
  const fiimModalMarkup = createFilmModalMarkup(data);
  refs.filmModal.insertAdjacentHTML('beforeend', fiimModalMarkup);
}

function getLocalStorageData(key) {
  return localStorage.getItem(key);
}

function deserializeData(data) {
  let deserializedData;

  try {
    deserializedData = JSON.parse(data);
  } catch (err) {
    console.log('ERROR: ', err.message);
    console.log('ERROR CODE: ', err.code);
  }

  return deserializedData;
}

function getMovies(movieStatus) {
  return deserializeData(getLocalStorageData(movieStatus));
}

function disableBtn(btn) {
  btn.disabled = true;
  btn.classList.add('is-disabled');
}

function enableBtn(btn) {
  btn.disabled = false;
  btn.classList.remove('is-disabled');
}
