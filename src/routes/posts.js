const express = require("express");
const router = express.Router();
const Post = require("../models/Post");       // Post মডেল ইম্পোর্ট
const auth = require("../middleware/auth");   // auth middleware ইম্পোর্ট

// GET all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")  // author থেকে name,email আনবে
      .sort({ createdAt: -1 });           // নতুন পোস্ট আগে দেখাবে
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST create a new post (authentication required)
router.post("/", auth, async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    const newPost = new Post({
      title,
      content,
      author: req.user._id,  // auth middleware থেকে পাওয়া ইউজার আইডি
    });

    const savedPost = await newPost.save();
    await savedPost.populate("author", "name email");  // populated author data

    res.status(201).json(savedPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
