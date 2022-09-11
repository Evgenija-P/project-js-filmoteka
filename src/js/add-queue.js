import uniqBy from 'lodash.uniqby';


let queueFilms = [];
let uniqQueueFilms = [];

export const dataSaveQueue = function (data) {
	queueFilms.push(data);

	uniqQueueFilms = uniqBy(queueFilms, 'id');

	localStorage.setItem('queue', JSON.stringify(uniqQueueFilms));

	const storedFilms = JSON.parse(localStorage.watched);

	for (var i = 0; i < storedFilms.length; i++) {
		if (storedFilms[i].id === data.id) {
			storedFilms.splice(i, 1);
		}
	}
	localStorage.watched = JSON.stringify(storedFilms);
};

if (localStorage.getItem('queue')) {
	queueFilms = JSON.parse(localStorage.getItem('queue'));
}
