// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../services/api";

// const Instructions = () => {
//   const { topicId } = useParams();
//   const navigate = useNavigate();
//   console.log("INSIDE INSTRUCTIONS PAGE");
  
//   const [topicName, setTopicName] = useState("");

//   useEffect(() => {
//     const fetchTopic = async () => {
//       try {
//         const res = await api.get(`/topics/${topicId}`);
//         setTopicName(res.data.topic.name);
//       } catch (error) {
//         console.log("Failed to fetch topic");
//       }
//     };
   
//     fetchTopic();
//   }, [topicId]);

//   return (
//     <div>
//       <h2>Instructions - {topicName}</h2>

//       <ul>
//         <li>20 questions per quiz</li>
//         <li>No negative marking</li>
//         <li>Each question has one correct answer</li>
//         <li>Score determines level promotion</li>
//       </ul>

//       <button onClick={() => navigate(`/app/quiz/${topicId}`)}>
//         Start Quiz
//       </button>
//     </div>
//   );
// };

// export default Instructions;


// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../services/api";
// import "../styles/instructions.css";

// const Instructions = () => {
//   const { topicId } = useParams();
//   const navigate = useNavigate();

//   const [topicName, setTopicName] = useState("Loading...");

//   useEffect(() => {
//     const fetchTopic = async () => {
//       try {
//         const res = await api.get(`/topics/${topicId}`);
//         setTopicName(res.data.topic.name);
//       } catch (error) {
//         setTopicName("Quiz");
//       }
//     };

//     fetchTopic();
//   }, [topicId]);

//   return (
//     <div className="instructions-page">
//       <div className="instructions-card">

//         <h2>🚀 {topicName} Quiz Instructions</h2>

//         <div className="info-box">
//           ⏱️ Complete the quiz carefully. Your performance determines your level!
//         </div>

//         <ul>
//           <li>20 questions per quiz</li>
//           <li>No negative marking</li>
//           <li>Each question has one correct answer</li>
//           <li>Score determines level promotion</li>
//         </ul>

//         <button
//           className="start-btn"
//           onClick={() => navigate(`/app/quiz/${topicId}`)}
//         >
//           Start Quiz →
//         </button>

//       </div>
//     </div>
//   );
// };

// export default Instructions;


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/instructions.css";

const Instructions = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();

  const [topicName, setTopicName] = useState("Loading...");

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await api.get(`/topics/${topicId}`);
        setTopicName(res.data.topic.name);
      } catch (error) {
        setTopicName("Quiz");
      }
    };

    fetchTopic();
  }, [topicId]);

  return (
    <div className="instructions-page">

      <div className="instructions-card">

        <h1 className="instructions-title">
          🚀 {topicName} Quiz
        </h1>

        <p className="instructions-sub">
          Read carefully before starting the quiz
        </p>

        <div className="rules">
          <div className="rule-item">📝 20 questions per quiz</div>
          <div className="rule-item">🚫 No negative marking</div>
          <div className="rule-item">✅ One correct answer</div>
          <div className="rule-item">📈 Score decides your level</div>
        </div>

        <button
          className="start-btn"
          onClick={() => navigate(`/app/quiz/${topicId}`)}
        >
          Start Quiz →
        </button>

      </div>

    </div>
  );
};

export default Instructions;