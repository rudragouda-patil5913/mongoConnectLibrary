const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

const Book = mongoose.model("book", BookSchema);

module.exports = {
  Book,
};
