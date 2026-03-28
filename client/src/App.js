import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Instructions from "./pages/Instructions";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Result from "./pages/Result";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
     <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/dashboard.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
<Route path="/reset-password" element={<ResetPassword />} />

        
          <Route
            path="/app/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/app/instructions/:topicId"
            element={
              <ProtectedRoute>
                <Instructions />
              </ProtectedRoute>
            }
          />

          <Route
            path="/app/quiz/:topicId"
            element={
              <ProtectedRoute>
                <Quiz />
              </ProtectedRoute>
            }
          />

          <Route
            path="/app/leaderboard"
            element={
              <ProtectedRoute>
                <Leaderboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/app/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="/app/result" element={
            <ProtectedRoute><Result /></ProtectedRoute>
            } />
        </Routes>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;


