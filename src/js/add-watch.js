import uniqBy from 'lodash.uniqby';
import { egg } from './open-film-modal.js';

const buttonEL = document.querySelector('[button-add-watch]');

let watchFilms = [];
let uniqFilms = [];

const dataSave = function (data) {
	watchFilms.push(data);

	uniqFilms = uniqBy(watchFilms, 'id');

	localStorage.setItem("films", JSON.stringify(uniqFilms));
}


if (localStorage.getItem("films")) {
	watchFilms = JSON.parse(localStorage.getItem("films"));

}


buttonEL.addEventListener('click', onClickAddWatch);
async function onClickAddWatch(e) {
	e.preventDefault();
	dataSave(egg);
}