const express = require("express");
const router = express.Router();
const Course = require("../models/Course");


// GET all course
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    console.log("Courses found:", courses.length);
    res.json(courses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});
// POST create a new course
router.post("/", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});





module.exports = router;
