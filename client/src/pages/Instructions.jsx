import { useParams } from "react-router-dom";

const Instructions = () => {
  const { topicId } = useParams();
  return <h2>Instructions for Topic: {topicId}</h2>;
};

export default Instructions;
