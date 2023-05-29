// Importing modules
import React from "react";
import "./App.css";
import Stroke from "./pages/stroke/stroke";
import Home from "./pages/home/home"
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stroke" element={<Stroke />} />
      </Routes>
    </Router>
  );
}

export default App;
