import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://zomra.de/api/v1/";

class NotificationService {
  readNotification() {
    return axios
      .put(API_URL + "readNotification", "read", { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new NotificationService();
