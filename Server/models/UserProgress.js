const mongoose = require("mongoose");

const userProgressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },
    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    score: {
    type: Number,
    default: 0,
  },
  
  totalAttempted: {
  type: Number,
  default: 0,
},
totalCorrect: {
  type: Number,
  default: 0,
},
badge: {
  type: String,
  default: "",
},

    attemptedQuestions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserProgress", userProgressSchema);
