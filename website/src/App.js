import React from "react";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./components/Home/HomePage.jsx";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
    </div>
  );
}

export default App;
