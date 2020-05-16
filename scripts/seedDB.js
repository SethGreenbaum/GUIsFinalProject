const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/final"
);

const userSeed = [
  {
    username: "MonkeyPhone",
    password: "tattoo",
    date: new Date(Date.now())
  },
  {
    username: "MsMarie",
    password: "heynow",
    date: new Date(Date.now())
  },
  {
    username: "sunshineprincessXOXO",
    password: "gumdrop",
    date: new Date(Date.now())
  },
  {
    username: "grandma",
    password: "password",
    date: new Date(Date.now())
  },
  {
    username: "GlitterMan",
    password: "moonunit",
    date: new Date(Date.now())
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
