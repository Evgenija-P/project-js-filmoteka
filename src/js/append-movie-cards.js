import NewApi from './fetch-movies-homepg';
import { markupMovies } from './markup-movie-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { pagination } from './pagination';
import { FetchMoviesAPI } from './fetchMoviesAPI';
import { APIEndPoints } from './variables';
import { onSearchPaginationClick } from './search-movies';

const fetchTrandingMovieAPI = new FetchMoviesAPI(APIEndPoints.trendingMovie);

const newApi = new NewApi();
const refs = {
  gallery: document.querySelector('#homepage__gallery'),
};

export async function appendMarkupMovies() {
  let response;

  try {
    response = await newApi.fetchMovies();
    refs.gallery.insertAdjacentHTML(
      'beforeend',
      markupMovies(response.data.results)
    );
  } catch (error) {
    console.log(error.message);
  }
  return response.data;
}
Loading.dots({
  svgColor: 'red',
});

appendMarkupMovies().then(data => {
  const paginationItemsContainer = document.querySelector(
    '.pagination-container'
  );

  paginationItemsContainer.innerHTML = '';

  paginationItemsContainer.removeEventListener(
    'click',
    onSearchPaginationClick
  );
  paginationItemsContainer.addEventListener('click', onTrendingPaginationClick);
  pagination(data.page, data.total_pages);

  Loading.remove();
});

//-------Обработчик клика по кнопке с номером страницы-------

export async function onTrendingPaginationClick({ target }) {
  if (
    target.nodeName === 'UL' ||
    target.classList.contains('disabled') ||
    Number(target.textContent) === fetchTrandingMovieAPI.page
  ) {
    return;
  }

  fetchTrandingMovieAPI.page = globalCurrentPage;
  let response;

  Loading.dots({
    svgColor: 'red',
  });

  try {
    response = await fetchTrandingMovieAPI.fetchMovies();
  } catch (err) {
    console.log('ERROR: ', err.message);
    console.log('ERROR CODE: ', err.code);
  }

  const galleryMarkup = markupMovies(response.data.results);
  clearGalleryMarkup();
  renderGalleryMarkup(galleryMarkup);

  pagination(response.data.page, response.data.total_pages);

  Loading.remove();
}

//-------Функция рендера разметки галлереи-------

function renderGalleryMarkup(markup) {
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

//-------Функция удаления разметки галлереи-------

function clearGalleryMarkup() {
  refs.gallery.innerHTML = '';
}
