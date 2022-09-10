import axios from 'axios';
import { API_KEY, URL } from './variables';


 export async function fetchMovies() {
    try {
      const response = await axios.get(
        `${URL}/3/trending/movie/day?api_key=${API_KEY}`
      );
        console.log(response)
        return response
        
    ;
  } catch (error) {
    console.log(error.message);
  }
}
