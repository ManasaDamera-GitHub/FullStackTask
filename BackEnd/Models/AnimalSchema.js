const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: String,
  image: String,
});

module.exports = mongoose.model("animal", AnimalSchema);
