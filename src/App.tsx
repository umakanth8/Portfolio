import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Navbar";
import Home from "./Components/Home";


export function App() {
  return (
    <div style={{ 
      backgroundColor:"black" 
    }}>
    <Router>
        <NavBar />
        <Home/>
    </Router>
    </div>
  );
}

export default App;
