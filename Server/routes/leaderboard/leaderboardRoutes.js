const express = require("express");
const router = express.Router();

const { getLeaderboard } = require("../../controllers/leaderboard/leaderboardController");

router.get("/", getLeaderboard);

module.exports = router;
