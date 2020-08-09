const express = require("express");
const mongoose = require("mongoose");

const app = express();
// access the schema
const data = require("./noteSchema");


// mongodb connection
mongoose.connect("mongodb://localhost/noteDB");
mongoose.connection.once("open", () => {
  return console.log("connect to DB");
}).on("error", (error) => {
  return console.log(`Failed to connect ${error}`);
});


// controller situation with the server
//

// create note (Post request)
app.post("/create", (req, res) => {
  let note = new data
});
// delete note (Delete request)

// update note (put or patch request)

// fetch one or all notes ( get request)