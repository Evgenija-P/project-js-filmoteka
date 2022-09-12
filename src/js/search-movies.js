import { fetchMovies } from './fetch-movies';
import { renderCardMovies } from './render-movies-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const formSearch = document.querySelector('.search-form');
const galleryContainerMovies = document.querySelector('.gallery__box');

const optionError = {
  width: '390px',
  position: 'center-top',
  distance: '145px',
  fontSize: '14px',
  opacity: 1,
  useIcon: false,
  failure: {
    textColor: '#FF001B',
    background: 'rgba(0,0,0,0)',
  },
};

let query = '';
let page = 1;

formSearch.addEventListener('submit', onSearchMovies);

function onSearchMovies(event) {
  event.preventDefault();

  query = event.currentTarget.elements.text.value;
  console.log(query);

  if (query === '') {
    onResultSearchError();
    return;
  }
  Loading.dots({
    svgColor: 'red',
  });

  fetchMovies(query, page).then(({ data }) => {
    console.log(data);

    if (data.total_results === 0) {
      onResultSearchError();
    } else {
      galleryContainerMovies.innerHTML = '';
      renderCardMovies(data.results);
      page += 1;
    }
  });

  Loading.remove();
}

function onResultSearchError() {
  Notiflix.Notify.failure(
    'Search result not successful. Enter the correct movie name.',
    optionError
  );
}
