import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import cookie from "cookie";
import Home from "./components/Home";
import Biz from "./components/Biz";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Navigation from "./components/navigation";


export const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

function App() {
  const ProtectedRoutes = () => {
    return checkAuth() ? <Outlet /> : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/:id" element={<Biz />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
