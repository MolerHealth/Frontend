import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Component/LandingPage/LandingPage";
import LoginPage from "./Component/OnboardingPage/LoginPage";
import SignUpPage from "./Component/OnboardingPage/SignupPage";
import { DashBoardContent } from "./Component/Dashboard/DashBoardContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard/*" element={<DashBoardContent />} />
      </Routes>
    </Router>
  );
}

export default App;
