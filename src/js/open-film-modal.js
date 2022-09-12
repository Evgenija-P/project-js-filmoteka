import { fetchFilmDetailsById } from './fetch-film-details';
import noPosterUrl from '../images/foto.jpg';
import closeBtnIcon from '../images/icon/symbol-defs.svg';
import { dataSaveQueue } from './add-queue';
import { dataSaveWatch } from './add-watch';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const refs = {
  galleryBox: document.querySelector('.gallery__box'),
  filmModal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

let filmDetails = {};
const cash = [];

// -------------EVENT LISTENERS-------------

refs.galleryBox.addEventListener('click', onGalleryBoxClick);
refs.filmModal.addEventListener('click', onBackdropModalClick);

// -------------EVENT HANDLERS-------------

async function onGalleryBoxClick(event) {
  if (event.target.classList.contains('gallery__box')) {
    return;
  }

  const filmId = Number(event.target.closest('.card').id);

  let cashedFilmDetails = cash.find(film => film.id === filmId);

  Loading.dots({
    svgColor: 'red',
  });

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

  clearFilmModalMarkup();
  renderFilmModal(filmDetails);

  const modalButtonsRefs = {
    closeBtn: document.querySelector('[button-modal-close]'),
    addQueqeBtn: document.querySelector('[button-add-queue]'),
    addWatchBtn: document.querySelector('[button-add-watch]'),
  };

  modalButtonsRefs.closeBtn.addEventListener('click', closeModal);
  modalButtonsRefs.addQueqeBtn.addEventListener('click', onAddQueqeBtn);
  modalButtonsRefs.addWatchBtn.addEventListener('click', onAddWatchBtn);

  const watchedMovies = getMovies('watched') || [];
  const moviesInQueue = getMovies('queue') || [];
  const isMovieWatched = watchedMovies.some(
    movie => movie.id === filmDetails.id
  );
  const isMovieInQueue = moviesInQueue.some(
    movie => movie.id === filmDetails.id
  );

  if (isMovieInQueue) {
    disableBtn(modalButtonsRefs.addQueqeBtn);
  }

  if (isMovieWatched) {
    disableBtn(modalButtonsRefs.addWatchBtn);
  }

  openModal();
  window.addEventListener('keydown', onEscKeyPress);
}

function openModal() {
  refs.filmModal.classList.remove('is-hidden');
  disableScroll();
}

function closeModal() {
  refs.filmModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  enableScroll();
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    closeModal();
  }
}

function onBackdropModalClick(e) {
  if (e.currentTarget === e.target) {
    closeModal();
  }
}

function onAddQueqeBtn({ target }) {
  console.log('click');
  dataSaveQueue(filmDetails);
  disableBtn(target);
  // enableBtn(document.querySelector('[button-add-watch]'));
}

function onAddWatchBtn({ target }) {
  console.log('click');
  dataSaveWatch(filmDetails);
  console.log('disable btn');
  disableBtn(target);
  // enableBtn(document.querySelector('[button-add-queue]'));
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

// -------------FUNCTIONS-------------

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
