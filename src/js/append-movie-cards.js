import NewApi from './fetch-movies-homepg';
import { markupMovies } from './markup-movie-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const newApi = new NewApi();
const refs = {
  gallery: document.querySelector('#homepage__gallery'),
};

export async function appendMarkupMovies() {
  try {
    Loading.dots({
      svgColor: 'red',
    });

    const { data } = await newApi.fetchMovies();
    refs.gallery.insertAdjacentHTML('beforeend', markupMovies(data.results));

    Loading.remove();
  } catch (error) {
    console.log(error.message);
  }
}

appendMarkupMovies();
