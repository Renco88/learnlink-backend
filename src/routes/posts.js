const express = require("express");
const router = express.Router();

// Example: Get all posts
router.get("/", (req, res) => {
  res.json({ message: "Posts route working!" });
});

module.exports = router;
