const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String },
    description: { type: String, required: true },
    category: { type: String },
    level: { type: String },
    instructor: { type: String, required: true },
    requirements: { type: String },
    duration: { type: String },
    fee: { type: String },
    format: { type: String },
    certificate: { type: Boolean, default: false },
    email: { type: String, required: true }, // to link user
    modules: { type: Array, default: [] },
  },
  { timestamps: true });

module.exports = mongoose.models.Course || mongoose.model("Course", courseSchema);