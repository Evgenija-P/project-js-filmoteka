import { fatchMovies } from './fatch-movies';
import { renderCardMovies } from './render-movies-card';

const formSearch = document.querySelector('.search-form');
const galleryContainerMovies = document.querySelector('.gallery__box');

let query = '';
let page = 1;

formSearch.addEventListener('submit', onSearchMovies);

function onSearchMovies(event) {
  event.preventDefault();

  query = event.currentTarget.elements.text.value;
  console.log(query);

  fatchMovies(query, page).then(({ data }) => {
    console.log(data);

    page = 1;
    galleryContainerMovies.innerHTML = '';
    renderCardMovies(data.results);
    page += 1;
  });
}
