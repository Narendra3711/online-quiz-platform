

// const Question = require("../models/Question");
// const UserProgress = require("../models/UserProgress");

// exports.startQuiz = async (req, res) => {
//   try {
//     const userId = req.user._id;
//     const { topicId } = req.query;

    
//     let progress = await UserProgress.findOne({
//       user: userId,
//       topic: topicId,
//     });

//     if (!progress) {
//       progress = await UserProgress.create({
//         user: userId,
//         topic: topicId,
//       });
//     }

    
//     const questions = await Question.find({
//       topic: topicId,
//       level: progress.level,
//       _id: { $nin: progress.attemptedQuestions },
//     }).limit(20);

    
//     if (questions.length === 0) {
//       if (progress.level === "easy") progress.level = "medium";
//       else if (progress.level === "medium") progress.level = "hard";
//       else progress.completed = true;

//       await progress.save();

//       return res.json({
//         success: true,
//         message: "Level updated",
//         nextLevel: progress.level,
//       });
//     }

//     res.status(200).json({
//       success: true,
//       level: progress.level,
//       questions,
//     });
//   } catch (error) {
//   console.error("QUIZ ERROR:", error); 
//   res.status(500).json({
//     success: false,
//     message: "Server error",
//   });
// }

// };
const Question = require("../models/Question");
const UserProgress = require("../models/UserProgress");

exports.startQuiz = async (req, res) => {
  try {
    const userId = req.user._id;
    const { topicId } = req.query;

    if (!topicId) {
  return res.status(400).json({
    success: false,
    message: "Topic ID is required",
  });
}


    // 1️⃣ Find or create user progress
    let progress = await UserProgress.findOne({
      user: userId,
      topic: topicId,
    });

    if (!progress) {
      progress = await UserProgress.create({
        user: userId,
        topic: topicId,
      });
    }
    if (progress && progress.completed) {
  return res.status(400).json({
    success: false,
    message: "You have already completed this topic",
  });
}


    // 2️⃣ Get unattempted questions (max 20)
    const questions = await Question.find({
      topic: topicId,
      level: progress.level,
      _id: { $nin: progress.attemptedQuestions },
    }).limit(20);

    // 3️⃣ Count total questions in this level
    const totalQuestionsInLevel = await Question.countDocuments({
      topic: topicId,
      level: progress.level,
    });

    // 4️⃣ Count attempted questions in this level
    const attemptedCount = await Question.countDocuments({
      _id: { $in: progress.attemptedQuestions },
      topic: topicId,
      level: progress.level,
    });

    // 5️⃣ Promote level ONLY if all questions attempted
    if (totalQuestionsInLevel > 0 && attemptedCount >= totalQuestionsInLevel) {

      const accuracy =
        progress.totalAttempted > 0
          ? Math.round(
              (progress.totalCorrect / progress.totalAttempted) * 100
            )
          : 0;

      // Accuracy check
      if (accuracy >= 85) {
        if (progress.level === "easy") progress.level = "medium";
        else if (progress.level === "medium") progress.level = "hard";
        else progress.completed = true;

        await progress.save();

        return res.json({
          success: true,
          message: "Level promoted",
          nextLevel: progress.level,
          accuracy,
        });
      } else {
        return res.json({
          success: false,
          message: "Accuracy too low to promote",
          accuracy,
        });
      }
    }

    // 6️⃣ Return questions normally
    return res.status(200).json({
      success: true,
      level: progress.level,
      questions,
    });

  } catch (error) {
    console.error("QUIZ ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};





exports.submitQuiz = async (req, res) => {
  const accuracy = (score / totalQuestions) * 100;
  try {
    const userId = req.user._id;
    const { topicId, answers } = req.body;

    if (!topicId || !answers || answers.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid submission",
      });
    }

    const progress = await UserProgress.findOne({
      user: userId,
      topic: topicId,
    });

    if (!progress) {
      return res.status(400).json({
        success: false,
        message: "Quiz not started",
      });
    }

    let correctCount = 0;

    for (let ans of answers) {
      // Skip already attempted questions
if (progress.attemptedQuestions.includes(ans.questionId)) {
  continue;
}

      const question = await Question.findById(ans.questionId);
      if (!question) continue;

      // update attempted questions
      if (!progress.attemptedQuestions.includes(question._id)) {
        progress.attemptedQuestions.push(question._id);
        progress.totalAttempted += 1;
      }

      // check correctness
      if (question.correctAnswer === ans.selectedOption) {
        correctCount += 1;
        progress.totalCorrect += 1;
        progress.score += 1;
      }
    }

    // calculate accuracy
    const accuracy = Math.round(
      (progress.totalCorrect / progress.totalAttempted) * 100
    );

    // BOOST MESSAGE (quiz-level)
    let boostMessage = "";
    if (correctCount >= 18) boostMessage = "🌟 Excellent! Outstanding performance";
    else if (correctCount >= 15) boostMessage = "👍 Great job! Keep going";
    else if (correctCount >= 10) boostMessage = "🙂 Good effort, you can improve";
    else boostMessage = "💪 Don't give up, practice more";

    await progress.save();


    res.json({
  success: true,
  correctAnswers,
  totalQuestions: answers.length,
  accuracy,
  level: progress.level,
  score: progress.score,
  badge: progress.badge,
  message:
    accuracy >= 90
      ? "🔥 Excellent work! You're mastering this topic."
      : accuracy >= 75
      ? "👍 Good job! Keep practicing to improve."
      : "💪 Don't give up. Practice makes perfect!",
});





  } catch (error) {
    console.error("SUBMIT QUIZ ERROR:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.getAdaptiveQuestion = async (req, res) => {
  try {
    const { topicId, lastAnswerCorrect } = req.body;

    let difficulty = "medium";

    if (lastAnswerCorrect === true) {
      difficulty = "hard";
    } else if (lastAnswerCorrect === false) {
      difficulty = "easy";
    }

    // RANDOM question type (MCQ / FILL)
    const types = ["mcq", "fill"];
    const randomType = types[Math.floor(Math.random() * types.length)];

    const question = await Question.findOne({
      topic: topicId,
      difficulty,
      questionType: randomType
    });

    if (!question) {
      return res.status(404).json({ message: "No question found" });
    }

    res.json(question);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.getUserAnalysis = async (req, res) => {
  try {
    const userId = req.user._id;

    const results = await Result.find({ userId });

    if (results.length === 0) {
      return res.json({ message: "No data" });
    }

    // Find best and weak topic
    let best = results[0];
    let weak = results[0];

    results.forEach(r => {
      if (r.accuracy > best.accuracy) best = r;
      if (r.accuracy < weak.accuracy) weak = r;
    });

    // Average accuracy
    const avg =
      results.reduce((sum, r) => sum + r.accuracy, 0) / results.length;

    // Recommendation
    let level = "Medium";
    if (avg < 50) level = "Easy";
    else if (avg > 80) level = "Hard";

    res.json({
      averageAccuracy: avg,
      bestTopic: best.topic,
      weakTopic: weak.topic,
      recommendedLevel: level
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};  