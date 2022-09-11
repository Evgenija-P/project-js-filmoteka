import axios from 'axios';
import { URL, API_KEY } from './variables';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

axios.defaults.baseURL = URL;

export async function fetchFilmDetailsById(id) {
  Loading.dots({
    svgColor: 'red',
  });

  const query = `?api_key=${API_KEY}`;

  const response = await axios(`/3/movie/${id}${query}`);

  Loading.remove();

  return response.data;
}
