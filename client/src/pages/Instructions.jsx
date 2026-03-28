import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

const Instructions = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [topicName, setTopicName] = useState("");

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const res = await api.get(`/topics/${topicId}`);
        setTopicName(res.data.topic.name);
      } catch (error) {
        console.log("Failed to fetch topic");
      }
    };

    fetchTopic();
  }, [topicId]);

  return (
    <div>
      <h2>Instructions - {topicName}</h2>

      <ul>
        <li>20 questions per quiz</li>
        <li>No negative marking</li>
        <li>Each question has one correct answer</li>
        <li>Score determines level promotion</li>
      </ul>

      <button onClick={() => navigate(`/app/quiz/${topicId}`)}>
        Start Quiz
      </button>
    </div>
  );
};

export default Instructions;