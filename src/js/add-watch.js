import uniqBy from 'lodash.uniqby';
import { egg } from './open-film-modal.js';

const buttonEL = document.querySelector('[button-add-watch]');

let watchFilms = [];
let uniqFilms = [];

export const dataSaveWatch = function (data) {
	watchFilms.push(data);

	uniqFilms = uniqBy(watchFilms, 'id');

	localStorage.setItem("watched", JSON.stringify(uniqFilms));

	const storedFilms = JSON.parse(localStorage.queue);


	for (var i = 0; i < storedFilms.length; i++) {
		if (storedFilms[i].id === data.id) {
			storedFilms.splice(i, 1);
		}
	}
	localStorage.queue = JSON.stringify(storedFilms);

}


if (localStorage.getItem("watched")) {
	watchFilms = JSON.parse(localStorage.getItem("watched"));

}


buttonEL.addEventListener('click', onClickAddWatch);
function onClickAddWatch(e) {
	e.preventDefault();
	dataSaveWatch(egg);
}


