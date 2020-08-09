let mongoose = require('mongoose');
let schema = mongoose.Schema;

let note = new schema({
    title: String,
    date: String,
    note: String
});

const Data = mongoose.model("Data", note);

module.exports = Data