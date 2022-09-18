import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Biz from "./components/Biz";
import Login from "./components/Login"
import ErrorPage from "./components/ErrorPage"
import Navigation from "./components/navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Biz />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
