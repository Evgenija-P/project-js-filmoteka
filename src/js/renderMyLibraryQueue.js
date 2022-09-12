import { markupMovies } from './markup-library-card';

const refs = {
  gallery: document.querySelector('#library__gallery'),
};

export function renderMyLibraryQueue() {
  const userQueue = JSON.parse(localStorage.getItem('queue'));
  if (userQueue === null || userQueue.length === 0) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">There are not added queue films</h1>');
  }
  refs.gallery.innerHTML = markupMovies(userQueue);
}
