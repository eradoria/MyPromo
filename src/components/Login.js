import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loginbackground from "../images/loginbackground.jpg";
import "../Login.css";
import bcrypt from "bcryptjs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [newUser, setNewUser] = useState(false);
  const [password, setPassword] = useState("");

  const loggedIn = (e) => {
    document.cookie = "loggedIn=true;max-age=60*10000";
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .post(`https://js-311-backend.vercel.app/auth/login`, {
        email: user,
        password: password,
      })
      .then((response) => {
        console.log(response);
        document.cookie = `jwt=${response.headers.authorization};max-age=60*10000`;
        loggedIn();
      });
  };

  ////////////////////////////////////////////////////////////////////////////////////////
  const signUpForm = (e) => {
    e.preventDefault();
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    };
    axios
      .post(`https://js-311-backend.vercel.app/auth/signup`, {
        email: user,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setNewUser(true);
      });
  };

  return (
    <div
      className="login-container"
      style={{
        background: `url(${Loginbackground})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "100%",
      }}
    >
      <div className="MainContainer">
        <h1 className="WelcomeText">Welcome</h1>
        {newUser ? <h2 className="banner">New User! Sign In</h2> : ""}
        <div className="InputContainer">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="ButtonContainer" onClick={handleSubmit}>
          <button type="submit">Login </button>
        </div>

        <h3>Or Follow Us On</h3>
        <div className="HorizontalRule" />
        <div className="IconContainer">
          <div className="Icon">
            <FaFacebookF size="40" />
          </div>
          <div className="Icon2">
            <FaInstagram size="40" />
          </div>
          <div className="Icon3">
            <FaTwitter size="60" />
          </div>
        </div>
        <div className="HorizontalRule" />
        <div className="BottomContainer">
          <h2> Need To Contact Us?</h2>
          <h2> New User? </h2>
          <button type="submit" onClick={signUpForm}>
            Signup{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
