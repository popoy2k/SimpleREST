const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  date_created: { type: Date, default: Date.now }
});

module.exports = Item = mongoose.model("items", ItemSchema);
