import { useNavigate } from "react-router-dom";
import "../styles/header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
  <div className="header-container">

    <div className="header-left">
      <h2>⚡ KNOWLEDGE COMPASS</h2>
    </div>

    <div className="header-right">
      <button className="header-btn" onClick={() => navigate("/register")}>
        Sign Up
      </button>

      <button className="header-btn login" onClick={() => navigate("/")}>
        Login
      </button>
    </div>

  </div>
</div>
  );
};

export default Header;