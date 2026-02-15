const express = require("express");
const router = express.Router();

const protect = require("../../middleware/authMiddleware");
const {
  createTopic,
  getAllTopics,
} = require("../../controllers/admin/topicController");


router.post("/topic", protect, createTopic);
router.get("/topics", protect, getAllTopics);

module.exports = router;

