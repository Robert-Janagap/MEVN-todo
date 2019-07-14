const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategoriesSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  color: {
    type: String,
    require: true
  },
  categoryID: {
    type: String,
    require: true
  }
});

module.exports = Categories = mongoose.model("categories", CategoriesSchema);
