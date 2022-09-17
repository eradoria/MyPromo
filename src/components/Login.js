import React from "react";
import Loginbackground from "../images/loginbackground.jpg";
import "../Login.css";

function Login() {
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
   <div>
    <input />
    <input />
    <input />
    <input />
   </div>
    </div>
  );
}

export default Login;
