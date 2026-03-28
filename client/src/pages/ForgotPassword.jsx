import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });  

    const data = await res.json();
    alert("Reset Token: " + data.token); // for testing
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Forgot Password</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="auth-input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="auth-button">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;