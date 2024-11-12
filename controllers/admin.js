const { Book } = require("../models/book");

async function handleBookDetails(req, res) {
  const body = req.body;
  if (!body.title || !body.author || !body.price) {
    return res.status(400).json({ msg: "Add all details" });
  }
  await Book.create({
    title: body.title,
    author: body.author,
    price: body.price,
  });

  res.json({
    msg: "Book added",
  });
}

async function handleBookIdDetails(req, res) {
  const id = req.params.bookId;
  console.log(id);
  const book = await Book.findOne({
    _id: id,
  });

  if (!book) {
    res.status(404).json({
      msg: "Book not found",
    });
  }

  res.json({
    book,
  });
}

module.exports = { handleBookDetails, handleBookIdDetails };
