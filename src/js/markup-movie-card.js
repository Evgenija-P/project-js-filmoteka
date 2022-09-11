import { findGenresOfMovie } from './find-genres-of-popular-movies';
import img from '../images/foto.jpg';
export function markupMovies(movies) {
  return movies
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      const date = new Date(release_date).getFullYear();
      if (poster_path) {
        return `
      <li class="card" id="${id}">
        <img class="card__img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" />
        <div class="card__wrap">
        <p class="card__titel">
        ${title} <br />
          <span class="card__text">${findGenresOfMovie(
            genre_ids
          )} | ${date}</span>
        </p> </div>
  </li>`;
      }
      return `
      <div class="card" id="${id}">
        <img class="card__img" src="${img}" alt="${title}" />
        <p class="card__titel">
        ${title} <br />
          <span class="card__text">${findGenresOfMovie(
            genre_ids
          )} | ${date}</span>
        </p>
  </div>`;
    })
    .join('');
}
