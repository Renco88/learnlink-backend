const express = require("express");
const router = express.Router();

// Example: Get all friends
router.get("/", (req, res) => {
  res.json({ message: "Friends route working!" });
});

module.exports = router;