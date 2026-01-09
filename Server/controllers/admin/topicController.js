const Topic = require("../../models/Topic");

// CREATE TOPIC
exports.createTopic = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Topic name is required",
      });
    }

    const topicExists = await Topic.findOne({ name });
    if (topicExists) {
      return res.status(400).json({
        success: false,
        message: "Topic already exists",
      });
    }

    const topic = await Topic.create({ name, description });

    res.status(201).json({
      success: true,
      message: "Topic created successfully",
      topic,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET ALL TOPICS
exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({
      success: true,
      topics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
