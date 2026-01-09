const express = require("express");
const router = express.Router();

const protect = require("../../middleware/authMiddleware");
const {
  addQuestion,
  getQuestions,
} = require("../../controllers/admin/questionController");

// Admin Question APIs
router.post("/question", protect, addQuestion);
router.get("/questions", protect, getQuestions);

module.exports = router;
