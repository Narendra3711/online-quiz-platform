const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    topic: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Topic",
      required: true,
    },

    level: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },

    questionText: {
      type: String,
      required: true,
    },

    options: {
      type: [String],
      required: true,
      validate: [arrayLimit, "Minimum 2 options required"],
    },

    correctAnswer: {
      type: Number, // index of options array
      required: true,
    },
  },
  { timestamps: true }
);

function arrayLimit(val) {
  return val.length >= 2;
}

module.exports = mongoose.model("Question", questionSchema);
