const express = require("express");
const app = express();
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/database");
const MongoStore = require("connect-mongo");

//use .env file
require("dotenv").config({ path: "./config/.env" });

// Passport config
require("./config/passport")(passport);

//Connect To Database
connectDB();

// Setup Sessions - stored in MongoDB
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_STRING,
      collectionName: "sessions",
    }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Server Running
app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
