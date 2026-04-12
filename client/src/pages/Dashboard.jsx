// import { useEffect, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import { AuthContext } from "../context/AuthContext";

// const Dashboard = () => {
//   const { token } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [topics, setTopics] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchTopics();
//   }, []);

//   const fetchTopics = async () => {
//     try {
//       const res = await api.get("/topics"); 

//       setTopics(res.data.topics);
//     } catch (error) {
//       alert("Failed to load topics");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const startQuiz = (topicId) => {
//     navigate(`/app/instructions/${topicId}`);
//   };

//   if (loading) {
//     return <h3>Loading topics...</h3>;
//   }

//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <p>Select a topic to start the quiz</p>

//       {topics.length === 0 && <p>No topics available</p>}

//       {topics.map((topic) => (
//         <div
//           key={topic._id}
//           style={{
//             border: "1px solid #ccc",
//             padding: "10px",
//             marginBottom: "10px",
//           }}
//         >
//           <h3>{topic.name}</h3>
//           <p>{topic.description}</p>
//           <button onClick={() => startQuiz(topic._id)}>
//             Start Quiz
//           </button>
//         </div>












//       ))}
//     </div>
//   );
// };

// export default Dashboard;



import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { AuthContext } from "../context/AuthContext";
import "../styles/dashboard.css";
import Header from "../components/Header";
import { FaHome, FaBook, FaTrophy, FaCog } from "react-icons/fa";

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
      const res = await api.get("/topics");
      setTopics(res.data.topics);
    } catch (error) {
      alert("Failed to load topics");
    } finally {
      setLoading(false);
    }
  };

  // const startQuiz = (topicId) => {
  //   navigate(`/app/instructions/${topicId}`);
  // };
const startQuiz = (topicId) => {
  console.log("BUTTON CLICKED", topicId);
  navigate(`/app/instructions/${topicId}`);
};
  if (loading) {
    return <h3 style={{ color: "white", padding: "40px" }}>Loading topics...</h3>;
  }

  return (
    <>
    {/* <Header/> */}
   
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="logo">⚡ Knowledge Compass</h2>

        <ul>
  <li className="active"><FaHome /> Dashboard</li>
  <li><FaBook /> Quizzes</li>
  <li><FaTrophy /> Leaderboard</li>
  <li><FaCog /> Settings</li>
</ul>

        <button className="logout">Logout</button>
      </div>

      {/* MAIN */}
      <div className="dashboard-main">

        {/* HEADER */}
        <div className="dashboard-header">
          <h1>Welcome Back 👋</h1>
          <p>Ready to test your knowledge?</p>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="card">
            <h3>Topics</h3>
            <p>{topics.length}</p>
          </div>

          <div className="card">
            <h3>Total Questions</h3>
            <p>--</p>
          </div>

          <div className="card">
            <h3>High Score</h3>
            <p>--%</p>
          </div>
        </div>

        {/* TOPICS */}
        <h1 onClick={() => console.log("CLICK TEST")}>TEST CLICK</h1>
        <h2 className="topic-title">Choose a Topic</h2>

        <div className="topics-grid">
          {topics.length === 0 && <p>No topics available</p>}

          {topics.map((topic) => (
            <div className="topic-card" key={topic._id}>
              <h3>{topic.name}</h3>
              <p>{topic.description}</p>

              <button onClick={() => startQuiz(topic._id)}>
                Start Quiz
              </button>
              
              
            </div>
          ))}
        </div>

      </div>
    </div>
     </>
  );
};

export default Dashboard;