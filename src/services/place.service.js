import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://zomra.de/api/v1/";

class PlaceService {
  getPlaces() {
    return axios.get(API_URL + "places", { headers: authHeader() });
  }

  getOffice(i) {
    return axios.get(API_URL + "office/" + i, { headers: authHeader() });
  }

  savePace() {
    return axios
      .post(API_URL + "place/csv", {}, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  addEvent(event) {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  updateEvent(event) {
    return axios
      .put(API_URL + "event/" + event.id, event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  patchEvent(event) {
    return axios
      .patch(API_URL + "event/" + event.id, event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new PlaceService();
