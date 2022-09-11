import { fetchFilmDetailsById } from './fetch-film-details';
import noPosterUrl from '../images/foto.jpg';
import closeBtnIcon from '../images/icon/symbol-defs.svg';
import { dataSave as saveQueueData } from './add-queue';
import { dataSave as saveWatchData } from './add-watch';

const refs = {
  galleryBox: document.querySelector('.gallery__box'),
  filmModal: document.querySelector('[data-modal]'),
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

  clearFilmModalMarkup();
  renderFilmModal(filmDetails);
  eventListenersReistration();
  openModal();
  window.addEventListener('keydown', onEscKeyPress);
}

function openModal() {
  refs.filmModal.classList.remove('is-hidden');
}

function closeModal() {
  refs.filmModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
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

function onAddQueqeBtn() {
  saveQueueData(filmDetails);
}

function onAddWatchBtn() {
  saveWatchData(filmDetails);
}

window.loadNoPoster = function (img) {
  img.src = noPosterUrl;
};

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
    <article class="film">
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
            class="film-button__primary film-button__primary--active"
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

function eventListenersReistration() {
  const closeBtn = document.querySelector('[button-modal-close]');
  const addQueqeBtn = document.querySelector('[button-add-queue]');
  const addWatchBtn = document.querySelector('[button-add-watch]');

  closeBtn.addEventListener('click', closeModal);

  addQueqeBtn.addEventListener('click', onAddQueqeBtn);

  addWatchBtn.addEventListener('click', onAddWatchBtn);
}