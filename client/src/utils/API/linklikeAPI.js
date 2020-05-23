import axios from "axios";

export default {
  getLinkLikes: function() {
    return axios.get("/api/linklikes");
  },
  getLinkLike: function(id) {
    return axios.get("/api/linklikes/" + id);
  },
  getUserLinkLike: function(usernameData) {
    return axios.get("/api/linklikes/", usernameData)
  },
  deleteLinkLike: function(id) {
    return axios.delete("/api/linklikes/" + id);
  },
  createLinkLike: function(likeData) {
    return axios.post("/api/linklikes/", likeData);
  },
  updateLinkLike: function(id, likeData) {
    return axios.put("/api/linklikes/" + id, likeData);
  }
};