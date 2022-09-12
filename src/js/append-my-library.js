import { markupMovies } from './markup-library-card';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const refs = {
  gallery: document.querySelector('#library__gallery'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
};

function appendMoviesInLibrary() {
  const userMoviesWatched = JSON.parse(localStorage.getItem('watched'));
  const userMoviesQueue = JSON.parse(localStorage.getItem('queue'));
  if ((userMoviesQueue || userMoviesWatched) === null) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">Your Library is empty</h1>');
  } else if (userMoviesWatched === null) {
    refs.gallery.innerHTML = markupMovies(userMoviesQueue);
    refs.queueBtn.classList.add('active');
  } else {
    refs.gallery.innerHTML = markupMovies(userMoviesWatched);
    refs.watchedBtn.classList.add('active');
  }
}
Loading.dots({
  svgColor: 'red',
});

appendMoviesInLibrary();

Loading.remove();
