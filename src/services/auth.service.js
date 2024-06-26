import axios from "axios";
import authHeader from "@/services/auth-header";

const API_URL = "https://zomra.de/api/v1/auth/";

class AuthService {
  login(user) {
    return axios
      .post(API_URL + "get_token", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        if (response.data.token) {
          response.data.username = user.username;
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return axios
      .post(
        API_URL + "registration",
        {
          username: user.username,
          email: user.email,
          password: user.password,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        if (response.data) {
          console.log(response.data);
        }

        return response.data;
      });
  }
}

export default new AuthService();
