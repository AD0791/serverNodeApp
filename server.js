const express = require("express");
const mongoose = require("mongoose");

let app = express();


// access the schema
let Data = require("./noteSchema");


// mongodb connection
mongoose.connect("mongodb://localhost/noteDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  return console.log("connect to DB");
}).on("error", (error) => {
  return console.log(`Failed to connect ${error}`);
});


// controller situation with the server
//

// create note (Post request)
app.post("/create", (req, res) => {
  let note = new Data({
    title: req.get("title"),
    date: req.get("date"),
    note: req.get("note")
  });

  note.save().then(() => {
    if (note.isNew === false) {
      console.log('Saved Data!');
      // iphone will know
      res.send("Saved data");
    } else {
      console.log('failed to save data');
    }
  });

});
// delete note (Delete request)

// update note (put or patch request)

// fetch one or all notes ( get request)
































// server port
// http://172.20.10.9:8081/create
app.listen(8081, () => {
  console.log('Server is running');
});