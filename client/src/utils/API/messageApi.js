import axios from "axios";

export default {
  getMessage: function() {
    return axios.get("/api/messages");
  },
  getMessage: function(id) {
    return axios.get("/api/messages/" + id);
  },
  deleteMessage: function(id) {
    return axios.delete("/api/messages/" + id);
  },
  createMessage: function(messagetData) {
    return axios.post("/api/messages/", messagetData);
  },
  updateMessage: function(id, messageData) {
    return axios.put("/api/messages/" + id, messageData);
  }
};