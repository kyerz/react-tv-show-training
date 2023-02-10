import axios from "axios";
import { BASE_URL, API_KEY_PARAM, BACKDROP_BASE_URL } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}/tv/popular${API_KEY_PARAM}&language=fr-FR`
    );

    return response.data.results;
  }

  static async fetchRecommandations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}&language=fr-FR`
    );
    console.log(response.data.results);
    return response.data.results;
  }

  static async fetchByTitle(show) {
    const response = await axios.get(
      `${BASE_URL}/search/tv${API_KEY_PARAM}&language=fr-FR&query=${show}`
    );
    console.log(response.data.results);
    return response.data.results;
  }
}
