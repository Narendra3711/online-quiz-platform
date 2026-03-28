// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../styles/login.css";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     const res = await fetch("http://localhost:5000/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, password }),
//     });

//     const data = await res.json();

//     if (data.message) {
//       alert("Registered Successfully");
//       navigate("/login");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2 className="auth-title">Create Account 🚀</h2>

//         <form onSubmit={handleRegister} className="auth-form">
//           <input
//             type="text"
//             placeholder="Full Name"
//             className="auth-input"
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             type="email"
//             placeholder="Email"
//             className="auth-input"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Password"
//             className="auth-input"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button type="submit" className="auth-button">
//             Register
//           </button>
//         </form>

//         <p className="auth-text">
//           Already have an account?{" "}
//           <span
//             className="auth-link"
//             onClick={() => navigate("/login")}
//           >
//             Login
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";
import Header from "../components/Header";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    if (data.message) {
      alert("Registered Successfully");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <>
    <Header/>
    
    <div
      className="register-page"
      style={{ backgroundImage: "url('/dashboard.png')" }}
    >
      <div className="overlay">

        <div className="register-card">

          {/* LEFT SIDE */}
          <div className="register-left">
            <h2>KNOWLEDGE COMPASS</h2>
            <p>Create your account</p>
            <img src="/brain.jpg" alt="brain" />
          </div>

          {/* RIGHT SIDE */}
          <div className="register-right">
            <h2>Create Account 🚀</h2>

            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
                required
              />

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

              <button type="submit">Register</button>
            </form>

            <p>
              Already have an account?{" "}
              <span onClick={() => navigate("/login")}>
                Login
              </span>
            </p>
          </div>

        </div>

      </div>
    </div>
    </>
  );
};

export default Register;