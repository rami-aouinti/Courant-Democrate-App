import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost/api/v1/";

class OfficeService {
  getOffices() {
    return axios.get(API_URL + "office", { headers: authHeader() });
  }

  getOffice(i) {
    return axios.get(API_URL + "office/" + i, { headers: authHeader() });
  }

  addOffice(office) {
    return axios
      .post(API_URL + "office", office, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  updateOffice(office) {
    return axios
      .put(API_URL + "office/" + office.id, office, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  patchOffice(office) {
    return axios
      .patch(API_URL + "office/" + office.id, event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new OfficeService();
