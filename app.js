const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const app = express();
const port = process.env.PORT || 3400;
dotenv.config(process.env.MongooSe_Connection_String);

// mongoose connection
console.log();
mongoose
  .connect(`${process.env.MongooSe_Connection_String}`)
  .then(() => console.log("mongoose connection successfull"))
  .catch((err) => console.log(err));

//Request persers
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

// view engine set up
app.set("view engine", "ejs");

//
app.use(express.static(path.join(__dirname, "public")));

// cookieParser
app.use(cookieParser(process.env.COOKIE_SECRET));

//ROutting Setup

//Error handling

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
