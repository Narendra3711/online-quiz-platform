import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Instructions from "./pages/Instructions";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

        
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Instructions from "./pages/Instructions";
// import Resources from "./pages/Resources";
// import Quiz from "./pages/Quiz";
// import Result from "./pages/Result";
// import Profile from "./pages/Profile";
// import Leaderboard from "./pages/Leaderboard";
// import AppLayout from "./layouts/AppLayout";

// function App() {
//   return (
//     <AuthProvider>
//       <BrowserRouter>
//         <Routes>
          
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />

          
//           <Route path="/app" element={<AppLayout />}>
//             <Route path="dashboard" element={<Dashboard />} />
//             <Route path="instructions/:topicId" element={<Instructions />} />
//             <Route path="resources/:topicId" element={<Resources />} />
//             <Route path="quiz/:topicId" element={<Quiz />} />
//             <Route path="result" element={<Result />} />
//             <Route path="profile" element={<Profile />} />
//             <Route path="leaderboard" element={<Leaderboard />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </AuthProvider>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import { AuthProvider } from "./context/AuthContext";
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/register" element={<Register />} />

//           {/* 🔐 Protected Dashboard */}
//           <Route
//             path="/app/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
