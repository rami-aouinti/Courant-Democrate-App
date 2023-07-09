import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://zomra.de/api/v1/";

class PdfService {
  generatePdf(users, title) {
    return axios
      .post(
        API_URL + "pdf/generate",
        { users, title },
        { headers: authHeader() }
      )
      .then((response) => {
        return response.data;
      });
  }
}

export default new PdfService();
