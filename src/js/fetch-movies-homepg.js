import axios from 'axios';
import { API_KEY, URL } from './variables';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
export default class NewApi {
  async fetchMovies() {
    Loading.dots({
      svgColor: 'red',
    });

    const response = await axios.get(
      `${URL}/3/trending/movie/day?api_key=${API_KEY}&page=1`
    );

    Loading.remove();
    console.log(response);
    return response;
  }
}
