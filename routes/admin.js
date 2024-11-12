const express = require("express");
const {
  handleBookDetails,
  handleBookIdDetails,
} = require("../controllers/admin");

const router = express.Router();

router.post("/", handleBookDetails);
router.get("/:bookId", handleBookIdDetails);

module.exports = router;
