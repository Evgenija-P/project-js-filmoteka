import axios from "axios";
import { API_KEY, URL } from "./variables";
const movie_id = 554;
export async function fetchData() {

	const url = `${URL}/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

	const response = await axios.get(url);
	const data = await response.data;
	console.log(data);
	return data;

}