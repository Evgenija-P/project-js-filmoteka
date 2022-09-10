import { fetchMovies } from './fetch-movies-homepg';
import { markupMovies } from './markup-movie-card';
const refs = {
  gallery: document.querySelector('.gallery__box'),
};

export async function appendMarkupMovies() {
  try {
    const { data } = await fetchMovies();
    refs.gallery.insertAdjacentHTML('beforeend', markupMovies(data.results));
  } catch (error) {
    console.log(error.message);
  }
}
