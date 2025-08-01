const express = require("express");
const router = express.Router();

// Example: Get all rooms
router.get("/", (req, res) => {
  res.json({ message: "Rooms route working!" });
});

module.exports = router;