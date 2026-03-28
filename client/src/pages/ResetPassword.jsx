import { useState } from "react";

const ResetPassword = () => {
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, newPassword: password }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Reset Password</h2>

        <form onSubmit={handleReset}>
          <input
            type="text"
            placeholder="Enter token"
            className="auth-input"
            onChange={(e) => setToken(e.target.value)}
          />

          <input
            type="password"
            placeholder="New password"
            className="auth-input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="auth-button">Reset Password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;