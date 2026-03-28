import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  const [analysis, setAnalysis] = useState(null);
  const token = localStorage.getItem("token");

  // ✅ Hook MUST be here (top level)
  useEffect(() => {
    fetch("/api/quiz/analysis", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((resData) => setAnalysis(resData))
      .catch((err) => console.log(err));
  }, []);

  // ✅ condition AFTER hooks
  if (!data) {
    return <h3>No result data</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quiz Result</h2>

      <h3>Score: {data.score}</h3>
      <h3>Accuracy: {data.accuracy}%</h3>

      {analysis ? (
        <div style={{ marginTop: "20px" }}>
          <h3>AI Analysis</h3>
          <p>Best Topic: {analysis.bestTopic}</p>
          <p>Weak Topic: {analysis.weakTopic}</p>
          <p>Recommended Level: {analysis.recommendedLevel}</p>
        </div>
      ) : (
        <p>Loading analysis...</p>
      )}

      <button onClick={() => navigate("/")}>Go Home</button>
    </div>
  );
};

export default Result;