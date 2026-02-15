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

const Quiz = () => {
  const { topicId } = useParams();
  const { token } = useContext(AuthContext);

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1️⃣ Start quiz
  useEffect(() => {
    const startQuiz = async () => {
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

  // 2️⃣ Select answer
  const handleOptionChange = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex,
    });
  };

  // 3️⃣ Submit quiz
  const submitQuiz = async () => {
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

  // 🔄 Loading
  if (loading) return <h3>Loading quiz...</h3>;

  // 🏁 Result view
  if (result) {
    return (
      <div>
        <h2>Quiz Result</h2>
        <p><strong>Score:</strong> {result.score}</p>
        <p><strong>Accuracy:</strong> {result.accuracy}%</p>
        <p><strong>Level:</strong> {result.level}</p>
        <h3>{result.boostMessage}</h3>
      </div>
    );
  }

  // ❓ No questions
  if (questions.length === 0) {
    return <p>No questions available</p>;
  }

  // 📝 Quiz UI
  return (
    <div>
      <h2>Quiz</h2>

      {questions.map((q, index) => (
        <div key={q._id} style={{ marginBottom: "20px" }}>
          <p>
            {index + 1}. {q.questionText}
          </p>

          {q.options.map((opt, i) => (
            <label key={i} style={{ display: "block" }}>
              <input
                type="radio"
                name={q._id}
                value={i}
                checked={answers[q._id] === i}
                onChange={() => handleOptionChange(q._id, i)}
              />
              {opt}
            </label>
          ))}
        </div>
      ))}

      <button onClick={submitQuiz}>Submit Quiz</button>
    </div>
  );
};

export default Quiz;
