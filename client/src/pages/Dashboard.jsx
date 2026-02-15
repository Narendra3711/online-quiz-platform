import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const res = await api.get("/admin/topics", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTopics(res.data.topics);
    } catch (error) {
      alert("Failed to load topics");
    } finally {
      setLoading(false);
    }
  };

  const startQuiz = (topicId) => {
    navigate(`/app/instructions/${topicId}`);
  };

  if (loading) {
    return <h3>Loading topics...</h3>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Select a topic to start the quiz</p>

      {topics.length === 0 && <p>No topics available</p>}

      {topics.map((topic) => (
        <div
          key={topic._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{topic.name}</h3>
          <p>{topic.description}</p>
          <button onClick={() => startQuiz(topic._id)}>
            Start Quiz
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
