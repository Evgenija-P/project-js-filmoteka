import { fetchMovies } from './fetch-movies';
import { renderCardMovies } from './render-movies-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import Notiflix from 'notiflix';

import { pagination } from './pagination';
import { FetchMoviesAPI } from './fetchMoviesAPI';
import { APIEndPoints } from './variables';
import { onTrendingPaginationClick } from './append-movie-cards';

import 'notiflix/dist/notiflix-3.2.5.min.css';

const fetchSearchMoviesResultsAPI = new FetchMoviesAPI(
  APIEndPoints.searchMovie
);

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

  if (!query) {
    onResultSearchError();
    return;
  }

  Loading.dots({
    svgColor: 'red',
  });

  fetchMovies(query, page).then(({ data }) => {
    if (!data.total_results) {
      onResultSearchError();
    } else {
      clearGalleryMarkup();

      renderCardMovies(data.results);

      const paginationItemsContainer = document.querySelector(
        '.pagination-container'
      );

      paginationItemsContainer.innerHTML = '';
      paginationItemsContainer.removeEventListener(
        'click',
        onTrendingPaginationClick
      );
      paginationItemsContainer.addEventListener(
        'click',
        onSearchPaginationClick
      );
      pagination(data.page, data.total_pages);
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

//-------Обработчик клика по кнопке с номером страницы-------

export async function onSearchPaginationClick({ target }) {
  if (
    target.nodeName === 'UL' ||
    target.classList.contains('disabled') ||
    Number(target.textContent) === fetchSearchMoviesResultsAPI.page
  ) {
    return;
  }

  fetchSearchMoviesResultsAPI.page = globalCurrentPage;
  fetchSearchMoviesResultsAPI.query = `&query=${query}`;
  let response;

  Loading.dots({
    svgColor: 'red',
  });

  try {
    response = await fetchSearchMoviesResultsAPI.fetchMovies();
  } catch (err) {
    console.log('ERROR: ', err.message);
    console.log('ERROR CODE: ', err.code);
  }

  clearGalleryMarkup();

  const galleryMarkup = renderCardMovies(response.data.results);

  pagination(response.data.page, response.data.total_pages);

  Loading.remove();
}

function clearGalleryMarkup() {
  galleryContainerMovies.innerHTML = '';
}
