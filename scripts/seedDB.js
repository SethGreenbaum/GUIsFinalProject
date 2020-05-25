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

  const postSeed = [
    {
      title: "Hello World",
      author: "admin",
      body:
        "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
      date: new Date(Date.now())
    },
    {
      title: "The Second Post",
      author: "admin",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: new Date(Date.now())
    },
    {
      title: "Another One",
      author: "admin",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      date: new Date(Date.now())
    }
  ];
  
  db.Post.remove({})
    .then(() => db.Post.collection.insertMany(postSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
