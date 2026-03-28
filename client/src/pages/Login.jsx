// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate(); 

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await api.post("/auth/login", { email, password });

//       login(res.data.token); 
//       alert("Login successful");

      
//       navigate("/app/dashboard");

//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login</h2>

//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <br />

//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />

//       <br />

//       <button type="submit">Login</button>

//       <p>
//         Not registered? <a href="/register">Register</a>
//       </p>
//     </form>
//   );
// };

// export default Login;

// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import { AuthContext } from "../context/AuthContext";
// import   "../styles/login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await api.post("/auth/login", { email, password });

//       login(res.data.token);
//       alert("Login successful");

//       navigate("/app/dashboard");

//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-card">
//         <h1 className="logo">Quiz Platform</h1>
//         <p className="subtitle">Welcome Back 👋</p>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             placeholder="Enter Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" className="login-btn">
//             Login
//           </button>
//         </form>

//         <p className="footer-text">
//           Not registered? <span onClick={() => navigate("/register")}>Register</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../services/api";
// import { AuthContext } from "../context/AuthContext";
// import "../styles/login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await api.post("/auth/login", { email, password });
//       login(res.data.token);
//       navigate("/app/dashboard");
//     } catch (err) {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="login-container">
      
     
//       <div className="login-left">
//         <div className="login-box">
//           <h2 className="brand">Quiz Platform</h2>
//           <h3>Log in to Your Account</h3>

//           <form onSubmit={handleSubmit}>
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <div className="options">
//               <label>
//                 <input type="checkbox" /> Remember me
//               </label>
//               <span className="forgot">Forgot password?</span>
//             </div>

//             <button type="submit" className="login-btn">
//               Log in
//             </button>
//           </form>

//           <p className="signup">
//             Don’t have an account?{" "}
//             <span onClick={() => navigate("/register")}>Sign up</span>
//           </p>
//         </div>
//       </div>

      
//       <div className="login-right">
//         <img
//           src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
//           alt="login illustration"
//         />
//       </div>

//     </div>
//   );
// };

// export default Login;



// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/login.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();

//     if (data.token) {
//   localStorage.setItem("token", data.token);
//   console.log("Saved token:", data.token);

//   navigate("/app/dashboard"); 
// }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2 className="auth-title">Welcome Back 👋</h2>

        
//         <form onSubmit={handleLogin} className="auth-form">
//   <input
//     type="email"
//     placeholder="Email"
//     className="auth-input"
//     onChange={(e) => setEmail(e.target.value)}
//   />

//   <input
//     type="password"
//     placeholder="Password"
//     className="auth-input"
//     onChange={(e) => setPassword(e.target.value)}
//   />

//   {/* 👇 ADD HERE */}
//   <p className="auth-text" style={{ textAlign: "right", marginBottom: "10px" }}>
//     <span
//       className="auth-link"
//       onClick={() => navigate("/forgot-password")}
//     >
//       Forgot Password?
//     </span>
//   </p>

//   <button type="submit" className="auth-button">
//     Login
//   </button>
// </form>

//         <p className="auth-text">
//           Don't have an account?{" "}
//           <span
//             className="auth-link"
//             onClick={() => navigate("/register")}
//           >
//             Register
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import Header from "../components/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/app/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
//     <>
//   <Header />

//   <div
//   className="login-container"
//   style={{
//     marginTop: "70px",
//     minHeight: "100vh",
//     backgroundImage: "url('/dashboard.png')",
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   }}
// >
    
//       <div className="login-card">

//         {/* LEFT SIDE */}
//         <div className="login-left">
//           <h2>KNOWLEDGE COMPASS</h2>
//           <p>Log in to your account</p>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="login-right">
//           <h2 className="auth-title">Welcome Back 👋</h2>

//           <form onSubmit={handleLogin}>
//             <input
//               type="email"
//               placeholder="Email"
//               className="auth-input"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />

//             <input
//               type="password"
//               placeholder="Password"
//               className="auth-input"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />

//             <p className="auth-text">
//               <span
//                 className="auth-link"
//                 onClick={() => navigate("/forgot-password")}
//               >
//                 Forgot Password?
//               </span>  
//             </p>

//             <button type="submit" className="auth-button">
//               Login
//             </button>
//           </form>

//           <p className="auth-text">
//             Don't have an account?{" "}
//             <span
//               className="auth-link"
//               onClick={() => navigate("/register")}
//             >
//               Register
//             </span>
//           </p>
//         </div>

//       </div>
//     </div>
//     </>


<>
  <Header />

  <div
    style={{
      marginTop: "70px",
      minHeight: "100vh",
      backgroundImage: "url('/dashboard.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="login-overlay">

      <div className="login-card">

        {/* LEFT SIDE (IMAGE) */}
        <div className="login-left">
          <h2>KNOWLEDGE COMPASS</h2>
          <p>Test your knowledge with quizzes</p>

          <img src="/brain.jpg" alt="brain" />
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="login-right">
          <h2>Welcome Back 👋</h2>

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <p
              className="auth-link"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </p>

            <button type="submit">Login</button>
          </form>

          <p>
            Don't have an account?{" "}
            <span onClick={() => navigate("/register")}>
              Register
            </span>
          </p>
        </div>

      </div>

    </div>
  </div>
</>
    
  );
};

export default Login;