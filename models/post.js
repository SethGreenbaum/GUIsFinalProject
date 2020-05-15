const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: { type: String, required: true },
  header: { type: String, required: true },
  body: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now },
  likes:[
    {
      type: Schema.Types.ObjectId,
      ref: "likes"
    }
  ]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
