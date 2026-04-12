// import { useEffect, useState, useContext } from "react";
// import api from "../services/api";
// import { AuthContext } from "../context/AuthContext";

// const Quiz = () => {
//   const { token } = useContext(AuthContext);
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});

//   const topicId = "PUT_TOPIC_ID_HERE"; // temporary

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const res = await api.get(`/quiz/start?topicId=${topicId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setQuestions(res.data.questions || []);
//     } catch (err) {
//       alert("Quiz cannot be started");
//     }
//   };

//   const handleOptionSelect = (qId, optionIndex) => {
//     setAnswers({ ...answers, [qId]: optionIndex });
//   };

//   const handleSubmit = async () => {
//     const formattedAnswers = Object.keys(answers).map((qId) => ({
//       questionId: qId,
//       selectedOption: answers[qId],
//     }));

//     try {
//       const res = await api.post(
//         "/quiz/submit",
//         {
//           topicId,
//           answers: formattedAnswers,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert(
//         `Score: ${res.data.score}\nAccuracy: ${res.data.accuracy}%\n${res.data.boostMessage}`
//       );
//     } catch (err) {
//       alert("Submit failed");
//     }
//   };

//   return (
//     <div>
//       <h2>Quiz</h2>

//       {questions.map((q, index) => (
//         <div key={q._id}>
//           <p>
//             {index + 1}. {q.questionText}
//           </p>

//           {q.options.map((opt, i) => (
//             <label key={i}>
//               <input
//                 type="radio"
//                 name={q._id}
//                 onChange={() => handleOptionSelect(q._id, i)}
//               />
//               {opt}
//             </label>
//           ))}
//         </div>
//       ))}

//       {questions.length > 0 && (
//         <button onClick={handleSubmit}>Submit Quiz</button>
//       )}
//     </div>
//   );
// };

// export default Quiz;


import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import "../styles/quiz.css";

const Quiz = () => {
  const { topicId } = useParams();
  
  const token = localStorage.getItem("token");

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  

  useEffect(() => {
    const startQuiz = async () => {
      console.log("TOKEN SENT:", token);
      try {
        const res = await api.get(`/quiz/start?topicId=${topicId}`, {
          headers: { 
            Authorization: `Bearer ${token}`,
          },
        });

        setQuestions(res.data.questions || []);
      } catch (err) {
        alert("Failed to start quiz");
      } finally {
        setLoading(false);
      }
    };

    startQuiz();
  }, [topicId, token]);

  const currentQuestion = questions[currentIndex];

  
  const handleNext = () => {
    const qId = currentQuestion._id;

    const optionIndex = currentQuestion.options.indexOf(selectedAnswer);

    setAnswers({
      ...answers,
      [qId]: optionIndex,
    });

    setSelectedAnswer("");

    if (currentIndex === questions.length - 1) {
      submitQuiz();
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  
  const submitQuiz = async () => {
    console.log("TOKEN:", token);
    const payload = {
      topicId,
      answers: Object.keys(answers).map((qid) => ({
        questionId: qid,
        selectedOption: answers[qid],
      })),
    };

    try {
      const res = await api.post("/quiz/submit", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setResult(res.data);
    } catch (err) {
      alert("Failed to submit quiz");
    }
  };

  if (loading) return <h3>Loading quiz...</h3>;

  if (questions.length === 0) {
    return <p>No questions available</p>;
  }

 
  if (result) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">
          <h2>🎉 Quiz Result</h2>
          <p><strong>Score:</strong> {result.score}</p>
          <p><strong>Accuracy:</strong> {result.accuracy}%</p>
          <p><strong>Level:</strong> {result.level}</p>
          <h3>{result.boostMessage}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <h2>🧠{topicId} Quiz</h2>

        {/* Progress */}
        <p>
          Question {currentIndex + 1} / {questions.length}
        </p>

        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

       
        <h3 className="question">
          {currentQuestion.questionText}
        </h3>

    
        <div className="options">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              className={`option ${
                selectedAnswer === opt ? "selected" : ""
              }`}
              onClick={() => setSelectedAnswer(opt)}
            >
              {opt}
            </button>
          ))}
        </div>

        
        <button
          className="next-btn"
          onClick={handleNext}
          disabled={!selectedAnswer}
        >
          {currentIndex === questions.length - 1
            ? "Submit"
            : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Quiz;

