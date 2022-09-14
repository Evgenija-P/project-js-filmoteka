import { pagination } from './pagination';
import { renderMyLibraryQueue } from './renderMyLibraryQueue';
import { renderMyLibraryWatched } from './renderMyLibraryWatched';
import { readLocalStorageData, deserializeData } from './local-storage-API';

const MOVIES_PER_PAGE = 20;

const paginationContainer = document.querySelector('.pagination-container');

//-------------Инициализация переменных-------------

let movies = [];
let splittedMovieSet;
let currentPage = 1;
let totalPages = 0;
let totalMovies = 0;

//-------------Функция обновления фильмов в библиотеке-------------

export function updateMoviesGalleryByStatus(status, pageNumber) {
  const data = readLocalStorageData(status);

  if (!data) {
    return;
  }
  const unSerializedData = deserializeData(data);

  movies = [...unSerializedData];

  currentPage = pageNumber || 1;
  totalMovies = movies.length;
  totalPages = Math.ceil(movies.length / MOVIES_PER_PAGE);

  splittedMovieSet = splitSet(movies, MOVIES_PER_PAGE, totalPages);

  if (status === 'queue') {
    if (!splittedMovieSet.get(currentPage) && currentPage) {
      renderMyLibraryQueue(splittedMovieSet.get(currentPage - 1));
      if (currentPage <= 1) {
        paginationContainer.innerHTML = '';
      } else {
        pagination(currentPage - 1, totalPages);
      }
    } else {
      renderMyLibraryQueue(splittedMovieSet.get(currentPage));
      pagination(currentPage, totalPages);
    }
  }
  if (status === 'watched') {
    if (!splittedMovieSet.get(currentPage) && currentPage) {
      renderMyLibraryWatched(splittedMovieSet.get(currentPage - 1));
      if (currentPage <= 1) {
        paginationContainer.innerHTML = '';
      } else {
        pagination(currentPage - 1, totalPages);
      }
    } else {
      renderMyLibraryWatched(splittedMovieSet.get(currentPage));
      pagination(currentPage, totalPages);
    }
  }

  paginationContainer.removeEventListener(
    'click',
    status === 'watched'
      ? onQueuePaginationItemClick
      : onWatchedPaginationItemClick
  );

  paginationContainer.addEventListener(
    'click',
    status === 'watched'
      ? onWatchedPaginationItemClick
      : onQueuePaginationItemClick
  );
}

//-------------Обработчкик событий клика по номеру страницы фильмов в очереди-------------

function onWatchedPaginationItemClick({ target }) {
  if (target.nodeName === 'UL' || target.classList.contains('disabled')) {
    return;
  }
  currentPage = globalCurrentPage;
  renderMyLibraryWatched(splittedMovieSet.get(currentPage));
  pagination(currentPage, totalPages);
}

//-------------Обработчкик событий клика по номеру страницы фильмов в очереди-------------

function onQueuePaginationItemClick({ target }) {
  if (target.nodeName === 'UL' || target.classList.contains('disabled')) {
    return;
  }
  currentPage = globalCurrentPage;
  renderMyLibraryQueue(splittedMovieSet.get(currentPage));
  pagination(currentPage, totalPages);
}

//-------------Функция разбиения набора данных на части-------------

function splitSet(dataSet, chunckSize, totalSize) {
  const spliettedSet = new Map();

  for (let i = 0; i < totalSize; i++) {
    spliettedSet.set(
      i + 1,
      dataSet.slice(i * chunckSize, i * chunckSize + chunckSize)
    );
  }
  return spliettedSet;
}
