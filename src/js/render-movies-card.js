import { findGenresOfMovie } from './find-genres-of-popular-movies';
import img from '../images/foto.jpg';
const galleryContainerMovies = document.querySelector('.gallery__box');

export { renderCardMovies };

function renderCardMovies(movies) {
  const markup = movies
    .map(movie => {
      const { poster_path, title, genre_ids, release_date, id } = movie;
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
           <div class="card" id="${id}">
        <img class="card__img" src="https://image.tmdb.org/t/p/w400${poster_path}"  alt="${title}
" />
        <p class="card__titel">
          ${title} <br />
          <span class="card__text">${findGenresOfMovie(
            genre_ids
          )} | ${date}</span>
        </p>
      </div>`;
      }
      return `
           <div class="card" id="${id}">
        <img class="card__img"  src="${img}" alt="${title}
" />
        <p class="card__titel">
          ${title} <br />
          <span class="card__text">${findGenresOfMovie(
            genre_ids
          )} | ${date}</span>
        </p>
      </div>`;
    })
    .join('');

  galleryContainerMovies.insertAdjacentHTML('beforeend', markup);
}
