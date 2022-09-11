import { markupMovies } from './markup-library-card';
const refs = {
  gallery: document.querySelector('#library__gallery'),
};

function appendMoviesInLibrary() {
  if (localStorage.length === 0) {
    refs.gallery.innerHTML =
      '<h1 style="font-size=80px">Your Library is empty</h1>';
    return;
  }
  const userMovies = [
    ...JSON.parse(localStorage.getItem('watched')),
    ...JSON.parse(localStorage.getItem('queue')),
  ];
  console.log(userMovies);
  refs.gallery.innerHTML = markupMovies(userMovies);
}
appendMoviesInLibrary();
