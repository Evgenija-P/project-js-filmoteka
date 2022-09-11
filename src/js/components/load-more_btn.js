import { appendMarkupMovies } from '../add/append-movie-cards';

const loadMore = document.querySelector('.load-more');
loadMore.addEventListener('click', onLoadMore);
function onLoadMore() {
  appendMarkupMovies();
}
