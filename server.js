const express = require("express");
  // const bodyParser = require('body-parser');
  // const morgan = require('morgan');
const session = require('express-session');
const dbConnection = require('./passportAuth/database'); 
const MongoStore = require('connect-mongo')(session);
const passport = require('./passportAuth/passport');
const user = require('./passportAuth/routes/user');


const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  // app.use(morgan('dev'));
  // app.use(bodyParser.urlencoded({	extended: false	}));
  // app.use(bodyParser.json());

// Sessions
app.use(
	session({
		secret: 'buffy-summers', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
);

// Passport
app.use(passport.initialize());
app.use(passport.session()); // calls the deserializeUser


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// route for passporth auth
app.use('/user', user);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/final");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
