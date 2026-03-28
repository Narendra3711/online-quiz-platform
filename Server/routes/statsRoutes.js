const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Topic = require("../models/Topic");
const Question = require("../models/Question");

router.get("/stats", async (req, res) => {
  try {
    const users = await User.countDocuments();
    const topics = await Topic.countDocuments();
    const questions = await Question.countDocuments();

    res.json({
      success: true,
      users,
      topics,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching stats",
    });
  }
});

module.exports = router;