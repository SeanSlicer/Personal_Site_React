// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import React, { useState } from "react";
import Profile from "./Components/Profile/Profile";
import Projects from "./Components/Projects/Projects";

function App() {
  const [showContent, setShowContent] = useState("Profile");
  return (
    <div>
      <header className="site-container App">
        <Header setShowContent={setShowContent} />
      </header>
      <div className="background-fix profileCard">
        {showContent === "Profile" && <Profile />}
        {showContent === "Projects" && <Projects />}
      </div>
    </div>
  );
}

export default App;
