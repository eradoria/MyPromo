import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import Loginbackground from "../images/loginbackground.jpg";
import "../Login.css";
import bcrypt from "bcryptjs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    const article = { title: "React Hooks POST Request Example" };
    axios
      .post("https://js-311-backend.vercel.app/auth/signup", article)
      .then((response) => setUser(response.data));

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://js-311-backend.vercel.app/auth/login`, {
        email: user,
        password: password,
        // headers: {
        //   "x-access-token": localStorage.getItem("token"),
        // },
      })
      .then((response) => {
        console.log(response.headers);
      });
  };

  ////////////////////////////////////////////////////////////////////////////////////////
  const signUpForm = (e) => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const hashedPassword = bcrypt.hashSync(password, 10);

    //call Api here
    window.localStorage.setItem(
      "login",
      JSON.stringify({ email, hashedPassword })
    );
  };

  const loginForm = (e) => {
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    //call API here
    const getHashedPassword = JSON.parse(
      window.localStorage.getItem("login")
    ).hashedPassword;

    console.log(getHashedPassword);

    //Match password
    bcrypt.compare(password, getHashedPassword, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        console.log("Password Incorrect");
      } else {
        console.log("Password correct");
      }
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
          <h2> New User?</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
