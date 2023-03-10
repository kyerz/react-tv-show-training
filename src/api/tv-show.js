import axios from "axios";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}`);

    return response.data.results;
  }

  static async fetchRecommandations(tvShowId) {
    const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}`);
    return response.data.results;
  }

  static async fetchByTitle(show) {
    const response = await axios.get(`${BASE_URL}/search/tv${API_KEY_PARAM}&query=${show}`);
    return response.data.results;
  }
}
