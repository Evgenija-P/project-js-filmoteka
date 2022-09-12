import NewApi from './fetch-movies-homepg';
import { markupMovies } from './markup-movie-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const newApi = new NewApi();
const refs = {
  gallery: document.querySelector('#homepage__gallery'),
};

export async function appendMarkupMovies() {
  try {
    const { data } = await newApi.fetchMovies();
    refs.gallery.insertAdjacentHTML('beforeend', markupMovies(data.results));
  } catch (error) {
    console.log(error.message);
  }
}
Loading.dots({
  svgColor: 'red',
});

appendMarkupMovies();

Loading.remove();
