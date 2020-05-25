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
      header: "Hello World",
      body:
        "Welcome to your first post! To create posts create a title and body. Don't forget to include your screen name!",
        username: "johnny_chimpo",
        link: "https://i.imgur.com/ZZQsw4J.png",
        category: "random",
      date: new Date(Date.now())
    },
    {
      header: "The Second Post",
      body:
        "F in chat please",
        username: "BrendaKate",
        link: "https://i.imgur.com/sxU1DPL.jpg",
        category: "memes",
      date: new Date(Date.now())
    },
    {
      header: "Another One",
      username: "al_paca",
      body:
        "This is what I saw at my community pool yesterday..it was a TUESDAY",
        link: "https://pbs.twimg.com/card_img/1264271888278269953/fAxbTiKx?format=jpg&name=small",
        category: "random",
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
