const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkLikeSchema = new Schema({
  username: { type: String, required: true },
  link: { type: String, required: true},
  name: { type: String},
  date: { type: Date, default: Date.now }
});

const Linklike = mongoose.model("Linklike", linkLikeSchema);

module.exports = Linklike;