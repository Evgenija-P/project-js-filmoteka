import axios from 'axios';
import { URL, API_KEY } from './variables';

axios.defaults.baseURL = URL;

export async function fetchFilmDetailsById(id) {
  const query = `?api_key=${API_KEY}`;

  const response = await axios(`/3/movie/${id}${query}`);

  return response.data;
}
