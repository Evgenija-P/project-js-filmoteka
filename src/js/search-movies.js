// import { fatchMovies } from './js/fatch-movies';
import { fatchMovies } from './fatch-movies';

const formSearch = document.querySelector('.search-form');

let query = '';
let page = 1;

formSearch.addEventListener('submit', onSearchMovies);

function onSearchMovies(event) {
  event.preventDefault();

  query = e.currentTarget.elements.searchQuery.value.trim();

  fetchMovies(query, page).then(({ data }) => {
    console.log(query);
    renderCardImages(data.hits);

    page += 1;
  });
}
