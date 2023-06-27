import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://zomra.de/api/v1/";

class UserService {
  getUserBoard() {
    return axios.get(API_URL + "user", { headers: authHeader() });
  }

  uploadPhoto(photo) {
    return axios.post(
      API_URL + "user/photo",
      { photo },
      { headers: authHeader() }
    );
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin", { headers: authHeader() });
  }

  getProfile() {
    return axios.get(API_URL + "profile", { headers: authHeader() });
  }

  getGroups() {
    return axios.get(API_URL + "profile/groups", { headers: authHeader() });
  }

  getRoles() {
    return axios.get(API_URL + "profile/roles", { headers: authHeader() });
  }
}

export default new UserService();