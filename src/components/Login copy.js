// import React, { useRef, useEffect, useState } from "react";
// import axios from "axios";
// import Loginbackground from "../images/loginbackground.jpg";
// import "../Login.css";
// import bcrypt from "bcryptjs";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// function Login() {
//   const [user, setUser] = useState({ email: "", password: "" });
//   const emailInputRef = useRef();
//   const passwordInputRef = useRef();

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     const data = await fetch("https://js-311-backend.vercel.app/auth/");

//   //     const json = await data.json();
//   //   };
//   //   console.log("fire");
//   //   fetchData();
//   // }, []);

//   const handleSubmit = () => {
//     const email = emailInputRef.current.value;
//     const password = passwordInputRef.current.value;

//     console.log(email);
//     // POST request using axios with set headers
//     // const article = { title: "React POST Request Example" };
//     // const headers = {
//     //   Authorization: "Bearer my-token",
//     //   "My-Custom-Header": "foobar",
//     // };
//     axios
//       .post("https://js-311-backend.vercel.app/auth/login", {
//         headers: {
//           AccessControlAlloworigin:'*',
          
//         }
//       },{
//         email: user.email,
//         password: user.password,
//       })
//       .then((response) => {
//         document.cookie = `JWT=${response.headers.authorization}; max-age=900000`;
//       });

//     console.log("respone", user);
//   };

//   ////////////////////////////////////////////////////////////////////////////////////////
//   const signUpForm = (e) => {
//     const email = emailInputRef.current.value;
//     const password = passwordInputRef.current.value;

//     const hashedPassword = bcrypt.hashSync(password, 10);

//     //call Api here
//     window.localStorage.setItem(
//       "login",
//       JSON.stringify({ email, hashedPassword })
//     );
//   };

//   const loginForm = (e) => {
//     const email = emailInputRef.current.value;
//     const password = passwordInputRef.current.value;

//     //call API here
//     const getHashedPassword = JSON.parse(
//       window.localStorage.getItem("login")
//     ).hashedPassword;

//     console.log(getHashedPassword);

//     //Match password
//     bcrypt.compare(password, getHashedPassword, function (err, isMatch) {
//       if (err) {
//         throw err;
//       } else if (!isMatch) {
//         console.log("Password Incorrect");
//       } else {
//         console.log("Password correct");
//       }
//     });
//   };

//   return (
//     <div
//       className="login-container"
//       style={{
//         background: `url(${Loginbackground})`,
//         backgroundPosition: "center",
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         opacity: "100%",
//       }}
//     >
//       <div className="MainContainer">
//         <h1 className="WelcomeText">Welcome</h1>
//         <form className="FormContainer" action={handleSubmit}>
//           <div className="InputContainer">
//             <input type="email" placeholder="Email" ref={emailInputRef} />
//             <input
//               type="password"
//               placeholder="Password"
//               ref={passwordInputRef}
//             />
//           </div>
//           <div className="ButtonContainer">
//             <button type="submit">Login </button>
//           </div>
//         </form>
//         <h3>Or Follow Us On</h3>
//         <div className="HorizontalRule" />
//         <div className="IconContainer">
//           <div className="Icon">
//             <FaFacebookF size="40" />
//           </div>
//           <div className="Icon2">
//             <FaInstagram size="40" />
//           </div>
//           <div className="Icon3">
//             <FaTwitter size="60" />
//           </div>
//         </div>
//         <div className="HorizontalRule" />
//         <div className="BottomContainer">
//           <h2> Need To Contact Us?</h2>
//           <h2> New User?</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
