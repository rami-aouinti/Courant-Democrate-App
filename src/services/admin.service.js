import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://zomra.de/api/v1/";

class AdminService {
  getItems(path) {
    return axios.get(API_URL + path, { headers: authHeader() });
  }

  findItem(param, path) {
    return axios.get(API_URL + path + "/" + param, {
      headers: authHeader(),
    });
  }

  getItem(i, path) {
    return axios.get(API_URL + path + "/" + i, { headers: authHeader() });
  }
  addItem(item, path) {
    return axios
      .post(API_URL + path, item, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  editItem(item, path) {
    return axios
      .put(
        API_URL + path + "/" + item.id,
        {
          username: item.username,
          lastName: item.lastName,
          firstName: item.firstName,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  combineItem(item, path) {
    return axios
      .post(
        API_URL + path,
        {
          user1: item.user1,
          user2: item.user2,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  combineOffice(item, path) {
    return axios
      .post(
        API_URL + path,
        {
          office1: item.office1,
          office2: item.office2,
        },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }

  deleteItem(item, path) {
    return axios
      .delete(API_URL + path + "/" + item.id, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new AdminService();
