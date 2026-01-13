const UserProgress = require("../../models/UserProgress");
const User = require("../../models/User");

exports.getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await UserProgress.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "user",
          foreignField: "_id",
          as: "user",
        },
      },
      { $unwind: "$user" },
      {
        $project: {
          name: "$user.name",
          score: 1,
          level: 1,
          badge: 1,
          accuracy: {
            $cond: [
              { $eq: ["$totalAttempted", 0] },
              0,
              {
                $multiply: [
                  { $divide: ["$totalCorrect", "$totalAttempted"] },
                  100,
                ],
              },
            ],
          },
        },
      },
      { $sort: { score: -1 } },
      { $limit: 10 },
    ]);

    res.status(200).json({
      success: true,
      leaderboard,
    });
  } catch (error) {
    console.error("LEADERBOARD ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
