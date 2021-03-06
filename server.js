const express = require("express");
const mongoose = require("mongoose");

let app = express();

// access the schema
let Data = require("./noteSchema");

// mongodb connection
mongoose.connect("mongodb://localhost/noteDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection
  .once("open", () => {
    return console.log("connect to DB");
  })
  .on("error", (error) => {
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
      console.log("Saved Data!");
      // iphone will know
      res.send("Saved data");
    } else {
      console.log("failed to save data");
    }
  });
});

// delete note (Delete request)
app.post("/delete", (req, res) => {
  Data.findOneAndRemove({
      _id: req.get("id"),
    },
    (err) => {
      console.log(`failed ${err}`);
    }
  );
  res.send("Deleted!");
});

// update note (put or patch request)
app.post("/update", (req, res) => {
  Data.findOneAndUpdate({
      _id: req.get("id"),
    }, {
      title: req.get("title"),
      date: req.get("date"),
      note: req.get("note")
    },
    (err) => {
      console.log(`Failed to Update ${err}`);
    }
  );
  res.send("Updated!");
});

// fetch one or all notes ( get request)
app.get("/fetch", (req, res) => {
  Data.find({}).then((DBitems) => {
    res.send(DBitems);
  });
});

// server port
// http://192.168.1.18:8081/create
app.listen(8081, "192.168.1.18", () => {
  console.log("Server is running");
});