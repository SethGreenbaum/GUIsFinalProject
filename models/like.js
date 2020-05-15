const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
  username: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;
