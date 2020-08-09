const mongoose = require('mongoose');
const schema = mongoose.Schema;

let note = new schema({
    title: String,
    date: String,
    note: String
});

const Data = mongoose.model("data", note);

module.exports = Data