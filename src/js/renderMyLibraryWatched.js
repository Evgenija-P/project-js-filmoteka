import { markupMovies } from './markup-library-card';

const refs = {
  gallery: document.querySelector('#library__gallery'),
};

export function renderMyLibraryWatched(userWatched) {
  if (!userWatched || userWatched.length === 0) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">There are not added watched films</h1>');
  }
  refs.gallery.innerHTML = markupMovies(userWatched);
}
