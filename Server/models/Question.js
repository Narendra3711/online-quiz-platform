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

    // correctAnswer: {
    //   type: Number, 
    //   required: true,
    // },

    
questionType: {
  type: String,
  enum: ["mcq", "fill"],
  default: "mcq",
},

options: {
  type: [String],
  required: function () {
    return this.questionType === "mcq";
  },
},

correctAnswer: {
  type: mongoose.Schema.Types.Mixed, // 🔥 IMPORTANT
  required: true,
},








    difficulty: {
  type: String,
  enum: ["easy", "medium", "hard"],
  default: "medium"
},
questionType: {
  type: String,
  enum: ["mcq", "fill"],
  default: "mcq"
}
  },
  { timestamps: true }
);

function arrayLimit(val) {
  return val.length >= 2;
}

module.exports = mongoose.model("Question", questionSchema);
