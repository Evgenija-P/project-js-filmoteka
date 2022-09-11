import uniqBy from 'lodash.uniqby';
import { egg } from '../components/open-film-modal.js';

const buttonEL = document.querySelector('[button-add-queue]');

let queueFilms = [];
let uniqQueueFilms = [];

const dataSave = function (data) {
  queueFilms.push(data);

  uniqQueueFilms = uniqBy(queueFilms, 'id');

  localStorage.setItem('queue', JSON.stringify(uniqQueueFilms));
};

if (localStorage.getItem('queue')) {
  queueFilms = JSON.parse(localStorage.getItem('queue'));
}

buttonEL.addEventListener('click', onClickAddWatch);
async function onClickAddWatch(e) {
  e.preventDefault();
  dataSave(egg);
}
