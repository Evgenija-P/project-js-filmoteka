import { appendMarkupMovies } from './append-movie-cards';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', onLoadMore);
function onLoadMore() {
  Loading.dots({
    svgColor: 'red',
  });
  appendMarkupMovies();
  Loading.remove();
}
