import axios from "axios";

export default {
  getPosts: function() {
    return axios.get("/api/users");
  },
  getPost: function(id) {
    return axios.get("/api/users/" + id);
  },
  deletePost: function(id) {
    return axios.delete("/api/users/" + id);
  },
  createPost: function(postData) {
    return axios.post("/api/users/", postData);
  },
  updatePost: function(id, postData) {
    return axios.put("/api/users/" + id, postData);
  }
};