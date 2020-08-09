const express = require("express");
const mongoose = require("mongoose");

let app = express();
// access the schema
let Data = require("./noteSchema");


// mongodb connection
mongoose.connect("mongodb://localhost/noteDB");
mongoose.connection.once("open", () => {
  return console.log("connect to DB");
}).on("error", (error) => {
  return console.log(`Failed to connect ${error}`);
});


// controller situation