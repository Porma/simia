let mongoose = require('mongoose');

let schema = new mongoose.Schema({
  name: String,
  desc: String
});

module.exports = mongoose.model('Task', schema);