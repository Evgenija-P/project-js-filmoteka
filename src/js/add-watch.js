import uniqBy from 'lodash.uniqby';
import { queueFilms } from './add-queue';

export let watchFilms = [];
let uniqFilms = [];

export const dataSaveWatch = function (data) {


	if (localStorage.watched) {
		watchFilms = JSON.parse(localStorage.watched);
	}
	if (localStorage.queue) {
		const storedFilms = JSON.parse(localStorage.queue);

		for (var i = 0; i < storedFilms.length; i++) {
			if (storedFilms[i].id === data.id) {
				storedFilms.splice(i, 1);
				queueFilms = [];
			}
		}
		localStorage.queue = JSON.stringify(storedFilms);


	}

	watchFilms.push(data);
	uniqFilms = uniqBy(watchFilms, 'id');
	localStorage.setItem('watched', JSON.stringify(uniqFilms));


};