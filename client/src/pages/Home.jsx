// import { useNavigate } from "react-router-dom";
// import { useState,useEffect } from "react";
// import "../styles/home.css";
// import api from "../services/api";

// const Home = () => {
//   const navigate = useNavigate();
//   const [stats, setStats] = useState({
//     users: 0,
//     topics: 0,
//     questions: 0,
//   });
//   useEffect(() => {
//     fetchStats();
//   }, []);
//   const fetchStats = async () => {
//     try {
//       const res = await api.get("/stats");
//       setStats(res.data);
//     } catch (err) {
//       console.log("Failed to fetch stats");
//     }
//   };



//   return (
//     <div className="home-container">

//         <nav className="navbar">
//         <h2 className="logo">QuizMaster</h2>
//          <div className="nav-links">
//            <button onClick={() => navigate("/login")}>Login</button>
//            <button onClick={() => navigate("/register")} className="nav-register">
//              Register
//          </button>
//          </div>
//        </nav>
      
      
//       <section className="hero">
//         <h1>Online Quiz Platform</h1>
//         <p>
//           Practice topic-wise quizzes, improve your skills,
//           and track your performance with level-based challenges.
//         </p>

//         <div className="hero-buttons">
//           <button onClick={() => navigate("/login")} className="btn primary">
//             Login
//           </button>
//           <button onClick={() => navigate("/register")} className="btn secondary">
//             Register
//           </button>
//         </div>
//       </section>

//       <section className="features">
//         <h2>Why Choose Our Platform?</h2>

//         <div className="feature-grid">
//           <div className="feature-card">
//             <h3>📚 Topic-wise Quizzes</h3>
//             <p>Select topics and practice structured questions.</p>
//           </div>

//           <div className="feature-card">
//             <h3>📊 Performance Tracking</h3>
//             <p>Track accuracy, score and improvement over time.</p>
//           </div>

//           <div className="feature-card">
//             <h3>🏆 Leaderboard</h3>
//             <p>Compete with others and climb the rankings.</p>
//           </div>

//           <div className="feature-card">
//             <h3>⬆ Level System</h3>
//             <p>Progress from Easy to Hard with smart promotion logic.</p>
//           </div>
//         </div>
//       </section>

//       <section className="how-it-works">
//         <h2>How It Works</h2>
//          <div className="steps">
//            <div className="step">1️⃣ Register</div>
//           <div className="step">2️⃣ Select Topic</div>
//            <div className="step">3️⃣ Attempt Quiz</div>
//            <div className="step">4️⃣ View Results</div>
//          </div>
//        </section>
//        <section className="status">
        
//       <h2>Users: {stats.users}+</h2>
//       <h2>Topics: {stats.topics}+</h2>
//       <h2>Questions: {stats.questions}+</h2>
    
//       </section>

      
//       <section className="cta">
//         <h2>Ready to test your knowledge?</h2>
//         <button onClick={() => navigate("/register")} className="btn primary">
//           Get Started
//         </button>
//       </section>
      

//       <footer className="footer">
//         <p>© 2026 QuizMaster | Built with MERN Stack</p>
//       </footer>

//     </div>
//   );
// };

// export default Home;

// import { useNavigate } from "react-router-dom";
// import "../styles/home.css";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="home-container">

      
//       <nav className="navbar">
//         <h2 className="logo">QuizMaster</h2>
//         <div className="nav-links">
//           <button onClick={() => navigate("/login")}>Login</button>
//           <button onClick={() => navigate("/register")} className="nav-register">
//             Register
//           </button>
//         </div>
//       </nav>

     
//       <section className="hero">
//         <h1>Online Quiz Platform</h1>
//         <p>
//           Practice topic-wise quizzes, improve your skills,
//           and track your performance with level-based challenges.
//         </p>

//         <div className="hero-buttons">
//           <button onClick={() => navigate("/register")} className="btn primary">
//             Get Started
//           </button>
//           <button onClick={() => navigate("/login")} className="btn secondary">
//             Login
//           </button>
//         </div>
//       </section>

   
//       <section className="stats">
//         <div className="stat-box">
//           <h2>500+</h2>
//           <p>Questions</p>
//         </div>
//         <div className="stat-box">
//           <h2>25+</h2>
//           <p>Topics</p>
//         </div>
//         <div className="stat-box">
//           <h2>100+</h2>
//           <p>Active Users</p>
//         </div>
//         <div className="stat-box">
//           <h2>3</h2>
//           <p>Difficulty Levels</p>
//         </div>
//       </section>

//       <section className="features">
//         <h2>Why Choose Our Platform?</h2>

//         <div className="feature-grid">
//           <div className="feature-card">
//             <h3>📚 Topic-wise Quizzes</h3>
//             <p>Select topics and practice structured questions.</p>
//           </div>

//           <div className="feature-card">
//             <h3>📊 Performance Tracking</h3>
//             <p>Track score and accuracy after every attempt.</p>
//           </div>

//           <div className="feature-card">
//             <h3>🏆 Leaderboard</h3>
//             <p>Compare performance with other users.</p>
//           </div>

//           <div className="feature-card">
//             <h3>⬆ Level-Based System</h3>
//             <p>Progress from Easy to Hard automatically.</p>
//           </div>
//         </div>
//       </section>

     
//       <section className="how-it-works">
//         <h2>How It Works</h2>
//         <div className="steps">
//           <div className="step">1️⃣ Register</div>
//           <div className="step">2️⃣ Select Topic</div>
//           <div className="step">3️⃣ Attempt Quiz</div>
//           <div className="step">4️⃣ View Results</div>
//         </div>
//       </section>

      
//       <section className="cta">
//         <h2>Ready to test your knowledge?</h2>
//         <button onClick={() => navigate("/register")} className="btn primary">
//           Start Now
//         </button>
//       </section>

      
//       <footer className="footer">
//         <p>© 2026 QuizMaster | Built with MERN Stack</p>
//       </footer>

//     </div>
//   );
// };

// export default Home;


import { useNavigate } from "react-router-dom";
import "../styles/home.css";


const Home = () => {
  const navigate = useNavigate();

  return (

    <div
  style={{
    minHeight: "100vh",
    backgroundImage: "url('/dashboard.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div
    style={{
      minHeight: "100vh",
      background: "rgba(0, 0, 0, 0.7)", 
    }}
  >
    <div className="home-container">
  
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">⚡ QUICK QUIZ</div>

        <div className="nav-links">
          <span className="active">Home</span>
          <span>Quizzes</span>
          <span>Leaderboard</span>
          <span>Profile</span>
        </div>

        <button className="login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        {/* CENTER BRAIN IMAGE */}
        <div className="brain-container">
          {/* <img src="/brain.jpg" alt="brain" /> */}
        </div>

        {/* TEXT */}
        <div className="hero-text">
          <h1>
            Test Your Knowledge <br />
            <span>with Quick Quiz!</span>
          </h1>

          <p>
            Join our online quiz platform to challenge yourself,
            learn new things, and climb the leaderboard.
          </p>

          <div className="hero-buttons">
            <button className="btn primary" onClick={() => navigate("/login")}>
              Get Started
            </button>
            <button className="btn secondary">
              Browse Quizzes
            </button>
          </div>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature-card">
          <div className="icon">❓</div>
          <h3>Answer Fun Quizzes</h3>
          <p>Challenge yourself with a variety of quizzes.</p>
        </div>

        <div className="feature-card">
          <div className="icon">🏆</div>
          <h3>Compete & Win</h3>
          <p>Earn points and climb the leaderboard.</p>
        </div>

        <div className="feature-card">
          <div className="icon">✅</div>
          <h3>Improve Your Skills</h3>
          <p>Sharpen your knowledge with every quiz.</p>
        </div>
      </section>

    </div>
    </div>
    </div>
  );


};

export default Home;