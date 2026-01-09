// const express = require("express");
// const router = express.Router();
// const protect = require("../middleware/authMiddleware");
// const { startQuiz } = require("../controllers/quizController");

// router.get("/start", protect, startQuiz);

// module.exports = router;




const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  startQuiz,
  submitQuiz,
} = require("../controllers/quizController");

router.get("/start", protect, startQuiz);
router.post("/submit", protect, submitQuiz);

module.exports = router;
