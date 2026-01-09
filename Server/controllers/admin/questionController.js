const Question = require("../../models/Question");

// ADD QUESTION (Admin)
exports.addQuestion = async (req, res) => {
  try {
    const { topic, level, questionText, options, correctAnswer } = req.body;

    if (!topic || !level || !questionText || !options || correctAnswer === undefined) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const question = await Question.create({
      topic,
      level,
      questionText,
      options,
      correctAnswer,
    });

    res.status(201).json({
      success: true,
      message: "Question added successfully",
      question,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// GET QUESTIONS BY TOPIC & LEVEL
exports.getQuestions = async (req, res) => {
  try {
    const { topicId, level } = req.query;

    const questions = await Question.find({
      topic: topicId,
      level,
    });

    res.status(200).json({
      success: true,
      count: questions.length,
      questions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
