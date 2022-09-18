import React, {useRef} from "react";
import Loginbackground from "../images/loginbackground.jpg";
import "../Login.css";
import bcrypt from "bcryptjs"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Login() {
  const emailInputRef = useRef()
  const passwordInputRef = useRef()
  
  const signUpForm = (e) =>{
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value

    const hashedPassword = bcrypt.hashSync(password,10)

    //call Api here
    window.localStorage.setItem('login', JSON.stringify({email, hashedPassword}))
  }
  
  const loginForm = (e) =>{
    const email = emailInputRef.current.value
    const password = passwordInputRef.current.value

    //call API here
    const getHashedPassword = JSON.parse(window.localStorage.getItem('login')).hashedPassword

    console.log(getHashedPassword)

    //Match password
    bcrypt.compare(password,getHashedPassword, function(err,isMatch){
        if (err) {
          throw err
        }else if (!isMatch) {
          console.log('Password Incorrect')
        }else{
          console.log('Password correct')
        }
    })
  }



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
          <input type="email" placeholder="Email" ref={emailInputRef} />
          <input type="password" placeholder="Password" ref={passwordInputRef} />
        </div>
        <div className="ButtonContainer">
          <button type="submit" onClick={(e) => loginForm(e)} >Login </button>
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
        <h2> Need To Contact Us?</h2>
        <h2> New User</h2>
      </div>
    </div>
  );
}

export default Login;
