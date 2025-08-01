const express = require("express");
const router = express.Router();

// Example: Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();  // সব ইউজার ফেচ
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
module.exports = router;