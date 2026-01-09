
 require("dotenv").config();
 const express = require("express");
 const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const adminTopicRoutes = require("./routes/admin/topicRoutes");

const adminQuestionRoutes = require("./routes/admin/questionRoutes");
const quizRoutes = require("./routes/quizRoutes");



const app = express();
 connectDB();

app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }))
 

 app.use((req, res, next) => {
  console.log("GLOBAL BODY:", req.body);
  next();
});

 app.use("/api/auth", authRoutes);
 app.use("/api/test", testRoutes);
 app.use("/api/admin", adminTopicRoutes);
 app.use("/api/admin", adminQuestionRoutes);
 app.use("/api/quiz", quizRoutes);
 


 app.get("/", (req, res) => {
   res.send("Quiz Platform Backend Running");
 });

 const PORT = process.env.PORT || 5000;
 app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});



