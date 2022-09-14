import axios from 'axios';

import { API_KEY, URL } from './variables';

export class FetchMoviesAPI {
  constructor(endPoint, query = '') {
    this.apiKey = API_KEY;
    axios.defaults.baseURL = URL;
    this._endPoint = endPoint;
    this._query = query;
    this._page = 1;
  }
  // ----------МЕТОДЫ КЛАССА FetchMovieAPI----------

  async fetchMovies() {
    const defaultQueryParams = `?api_key=${API_KEY}&page=${this._page}${this._query}`;

    const response = await axios(`${this._endPoint}${defaultQueryParams}`);

    return response;
  }

  incrementPage() {
    this._page++;
  }

  decrementPage() {
    this._page--;
  }

  get endPoint() {
    return this._endPoint;
  }

  set endPoint(newEndPoint) {
    this._endPoint = newEndPoint;
  }

  get query() {
    return this._query;
  }

  set query(newQuery) {
    this._query = newQuery;
  }

  get page() {
    return this._page;
  }

  set page(newPage) {
    this._page = newPage;
  }
}
