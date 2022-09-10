import { fetchFilmDetailsById } from './fetch-film-details';

const refs = {
  galleryBox: document.querySelector('.gallery__box'),
  filmModal: document.querySelector('.film-modal'),
  modal: document.querySelector('.modal'),
  filmArticle: document.querySelector('.film'),
};

console.log('film article: ', refs.filmArticle);

// -------------EVENT LISTENERS-------------

refs.galleryBox.addEventListener('click', onGalleryBoxClick);

// -------------EVENT HANDLERS-------------

function onGalleryBoxClick(event) {
  if (event.target.classList.contains('gallery__box')) {
    return;
  }
  const filmId = event.target.closest('.card').id;

  fetchFilmDetailsById(filmId)
    .then(filmDetails => {
      clearFilmModalMarkup();
      renderFilmModal(filmDetails);
      refs.modal.classList.remove('is-hidden');
    })
    .catch(err => {
      console.log(err.message);
      console.log(err.code);
    });
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

  console.log('poster path', poster_path);

  return `
      <img
          class="film__image"
          src="https://image.tmdb.org/t/p/w400${poster_path}"
          alt="Film Image"
        />

      <div class="film__content">
        <h2 class="film__title">${title}</h2>

        <ul class="film-info">
          <li class="film-info__item">
            <p class="film-info__lable">Vote / Votes</p>

            <div class="film-vote">
              <span class="film-vote__lable film-vote__lable--orange">${vote_average}</span>
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
            <span class="film-info__text">${genres
              .map(genre => genre.name)
              .join(', ')}</span>
          </li>
        </ul>

        <div class="film-description">
          <h3 class="film-description__title">About</h3>
          <p class="film-description__text">
            ${overview}
          </p>
        </div>
      </div>
    </article>
`;
}

function clearFilmModalMarkup() {
  refs.filmArticle.innerHTML = '';
}

function renderFilmModal(data) {
  const fiimModalMarkup = createFilmModalMarkup(data);
  refs.filmArticle.insertAdjacentHTML('beforeend', fiimModalMarkup);
}
