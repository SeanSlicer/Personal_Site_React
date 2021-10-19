// import logo from './logo.svg';
import "./App.css";
import Header from "./Header";
import React, { useState } from "react";
import Profile from "./Components/Profile/Profile";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = () => {
  return (
    <div>
      <header className="site-container App">
        <Header />
      </header>
      <div className="background-fix profileCard">
        <Profile />
        <ContactForm />
      </div>
      
    </div>
  );
}
export default App;
