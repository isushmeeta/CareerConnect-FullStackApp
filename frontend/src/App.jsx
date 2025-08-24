import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/home";
import PostJob from "./pages/PostJob";
import SignUp from "./pages/SignUp";
import Resume from "./pages/Resume";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const appClass = darkMode
    ? "bg-gray-900 text-gray-200 min-h-screen transition-colors duration-300"
    : "bg-white text-gray-900 min-h-screen transition-colors duration-300";
  return (
    <div className={appClass}>
      <Router>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="/post-job" element={<PostJob darkMode={darkMode} />} />
          <Route path="/signup" element={<SignUp darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode}/>} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </div>
  );
}

export default App;
