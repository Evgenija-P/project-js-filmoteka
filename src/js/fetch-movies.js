import axios from 'axios';

import { API_KEY, URL } from './variables';

async function fetchMovies(query, page) {
  try {
    const response = await axios.get(
      `${URL}/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}&include_adult=false`
    );

    return response;
  } catch (error) {
    console.log(error);
  }
}

export { fetchMovies };
