import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class SettingService {
  getSettings() {
    return axios.get(API_URL + "settings", { headers: authHeader() });
  }
}

export default new SettingService();
