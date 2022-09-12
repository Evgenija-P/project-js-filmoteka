import uniqBy from 'lodash.uniqby';
import { watchFilms } from './add-watch';


export let queueFilms = [];
let uniqQueueFilms = [];


export const dataSaveQueue = function (data) {

	if (localStorage.watched) {
		const storedFilms = JSON.parse(localStorage.watched);

		for (var i = 0; i < storedFilms.length; i++) {
			if (storedFilms[i].id === data.id) {
				storedFilms.splice(i, 1);
				watchFilms = [];
			}
		}
		localStorage.watched = JSON.stringify(storedFilms);
	}

	queueFilms.push(data);
	uniqQueueFilms = uniqBy(queueFilms, 'id');
	localStorage.setItem('queue', JSON.stringify(uniqQueueFilms));


};