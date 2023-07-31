import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://zomra.de/api/v1/";

class PoliticOfficeService {
  getPoliticOffice() {
    return axios.get(API_URL + "politic", { headers: authHeader() });
  }

  getMembers() {
    return axios.get(API_URL + "politic/members", { headers: authHeader() });
  }

  addMember(userId, officeId, position) {
    var data = {
      userId: userId,
      officeId: officeId,
      position: position,
    };
    return axios
      .post(API_URL + "politic/member", data, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  editMember(userOffice, position) {
    var data = {
      userOffice: userOffice,
      position: position,
    };
    return axios
      .post(API_URL + "politic/member/edit", data, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getReports(officeId) {
    return axios.get(API_URL + "politic/reports/" + officeId, {
      headers: authHeader(),
    });
  }

  addReport(report, officeId) {
    var data = {
      report: report,
      officeId: officeId,
    };
    return axios
      .post(API_URL + "politic/report/add", data, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  getPosts() {
    return axios.get(API_URL + "article", { headers: authHeader() });
  }

  showPost(id) {
    return axios.get(API_URL + "post/" + id, { headers: authHeader() });
  }

  addPost(post) {
    return axios
      .post(API_URL + "article/new", post, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  editPost(post, i) {
    return axios
      .put(API_URL + "post/" + i, post, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  deletePost() {}

  showComments() {}

  addComment(slug, comment) {
    return axios
      .post(
        API_URL + "comment/" + slug + "/new",
        { comment: comment },
        {
          headers: authHeader(),
        }
      )
      .then((response) => {
        return response.data;
      });
  }

  editComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  deleteComment() {}

  likePost() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  dislikePost() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  likeComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }

  dislikeComment() {
    return axios
      .post(API_URL + "event", event, { headers: authHeader() })
      .then((response) => {
        return response.data;
      });
  }
}

export default new PoliticOfficeService();
