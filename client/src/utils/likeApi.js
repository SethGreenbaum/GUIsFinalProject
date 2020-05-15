import axios from "axios";

export default {
  getLikes: function() {
    return axios.get("/api/users");
  },
  getLike: function(id) {
    return axios.get("/api/users/" + id);
  },
  deleteLike: function(id) {
    return axios.delete("/api/users/" + id);
  },
  createLike: function(userData) {
    return axios.post("/api/users/", userData);
  },
  updateLike: function(id, userData) {
    return axios.put("/api/users/" + id, userData);
  }
};