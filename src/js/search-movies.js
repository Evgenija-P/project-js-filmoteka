import { fatchMovies } from './fatch-movies';
import { renderCardMovies } from './render-movies-card';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

const formSearch = document.querySelector('.search-form');
const galleryContainerMovies = document.querySelector('.gallery__box');

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

  fatchMovies(query, page).then(({ data }) => {
    console.log(data);

    if (data.total_results === 0) {
      onResultSearchError();
    } else {
      galleryContainerMovies.innerHTML = '';
      renderCardMovies(data.results);
      page += 1;
    }
  });
}

function onResultSearchError() {
  Notiflix.Notify.failure(
    'Search result not successful. Enter the correct movie name.'
  );
}
