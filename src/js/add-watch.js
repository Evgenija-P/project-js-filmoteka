
import uniqBy from 'lodash.uniqby';
import { fetchData } from './test-fetchData';
const buttonEL = document.querySelector('[button-add-watch]');
console.log(uniqBy);
// let listGenres = [];
// const dataSave = function (data) {
// 	for (genre of data.genres) {

// 		listGenres.push(genre.name);
// 	}
// 	localStorage.setItem("poster_path", data.poster_path);
// 	localStorage.setItem("title", data.title);
// 	localStorage.setItem("vote_average", data.vote_average);
// 	localStorage.setItem("vote_count", data.vote_count);
// 	localStorage.setItem("popularity", data.popularity);
// 	localStorage.setItem("original_title", data.original_title);
// 	localStorage.setItem("genres", listGenres);
// 	localStorage.setItem("overview", data.overview);
// };
let watchFilms = [];
let uniqFilms = [];
const dataSave = function (data) {
	watchFilms.push(data);

	uniqFilms = uniqBy(watchFilms, 'id');

	localStorage.setItem("films", JSON.stringify(uniqFilms));
}


if (localStorage.getItem("films")) {
	watchFilms = JSON.parse(localStorage.getItem("films"));
	console.log(watchFilms);
}


buttonEL.addEventListener('click', onClickAddWatch);
async function onClickAddWatch(e) {
	e.preventDefault();
	const giveData = await fetchData();
	dataSave(giveData);
}