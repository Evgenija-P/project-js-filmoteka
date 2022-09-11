import uniqBy from 'lodash.uniqby';
import { egg } from './open-film-modal.js';

const buttonEL = document.querySelector('[button-add-queue]');

let queueFilms = [];
let uniqQueueFilms = [];

export const dataSaveQueue = function (data) {
	queueFilms.push(data);

	uniqQueueFilms = uniqBy(queueFilms, 'id');

	localStorage.setItem("queue", JSON.stringify(uniqQueueFilms));
}


if (localStorage.getItem("queue")) {
	queueFilms = JSON.parse(localStorage.getItem("queue"));

}


buttonEL.addEventListener('click', onClickAddWatch);
async function onClickAddWatch(e) {
	e.preventDefault();
	dataSaveQueue(egg);
}