import axios from "axios";

export default {
  getLikes: function() {
    return axios.get("/api/likes");
  },
  getLike: function(id) {
    return axios.get("/api/likes/" + id);
  },
  getUserLike: function(usernameData) {
    return axios.get("/api/likes/", usernameData)
  },
  deleteLike: function(id) {
    return axios.delete("/api/likes/" + id);
  },
  createLike: function(likeData) {
    return axios.post("/api/likes/", likeData);
  },
  updateLike: function(id, likeData) {
    return axios.put("/api/likes/" + id, likeData);
  }
};