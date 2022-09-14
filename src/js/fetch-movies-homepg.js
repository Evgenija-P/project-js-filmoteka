import axios from 'axios';

import { API_KEY, URL } from './variables';

export default class NewApi {
  constructor() {
    this.page = 1;
  }

  async fetchMovies() {
    const response = await axios.get(
      `${URL}/3/trending/movie/day?api_key=${API_KEY}&page=1`
    );
    this.incrementPage();

    return response;
  }
  incrementPage() {
    this.page += 1;
  }
}
