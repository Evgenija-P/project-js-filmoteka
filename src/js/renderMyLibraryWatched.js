import { markupMovies } from './markup-library-card';

const refs = {
  gallery: document.querySelector('#library__gallery'),
};

export function renderMyLibraryWatched() {
    const userWatched = JSON.parse(localStorage.getItem('watched'));
    if (!userWatched) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">There are not added watched films</h1>');
  }
  refs.gallery.innerHTML = markupMovies(userWatched);
}