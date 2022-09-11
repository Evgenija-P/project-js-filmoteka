import axios from 'axios';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { API_KEY, URL } from './variables';

async function fatchMovies(query, page) {
  try {
    Loading.dots({
      svgColor: 'red',
    });

    const response = await axios.get(
      `${URL}/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    );

    Loading.remove();

    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fatchMovies };
