import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class QuizService {
  getQuestions(category) {
    return axios.get(API_URL + "application/questions/" + category, { headers: authHeader() });
  }

  getScores() {
    return axios.get(API_URL + "score", { headers: authHeader() });
  }
  addScore(score) {
    return axios
      .post(API_URL + "application/score", score, { headers: authHeader() })
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

export default new QuizService();
