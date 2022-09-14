import { markupMovies } from './markup-library-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { updateMoviesGalleryByStatus } from './updateLibraryData';

const refs = {
  gallery: document.querySelector('#library__gallery'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

window.addEventListener('load', () => {
  Loading.dots({
    svgColor: 'red',
  });
  // appendMoviesInLibrary();
  refs.watchedBtn.classList.add('active');
  updateMoviesGalleryByStatus('watched');
  setTimeout(() => {
    Loading.remove();
  }, 300);
});

function appendMoviesInLibrary() {
  const userMoviesWatched = JSON.parse(localStorage.getItem('watched'));
  const userMoviesQueue = JSON.parse(localStorage.getItem('queue'));

  if ((userMoviesQueue || userMoviesWatched) === null) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">Your Library is empty</h1>');
  } else if (userMoviesWatched === null || userMoviesWatched.length === 0) {
    refs.gallery.innerHTML = markupMovies(userMoviesQueue);
    refs.queueBtn.classList.add('active');
  } else {
    refs.gallery.innerHTML = markupMovies(userMoviesWatched);
    refs.watchedBtn.classList.add('active');
  }
}
