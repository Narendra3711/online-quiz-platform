
const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");


const {
  startQuiz,
  submitQuiz,
  // getAdaptiveQuestion,
  // getUserAnalysis   
} = require("../controllers/quizController");

router.get("/start", protect, startQuiz);
router.post("/submit", protect, submitQuiz);


module.exports = router;
