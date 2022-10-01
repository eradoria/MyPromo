import React, { useState } from "react";
import { Link } from "react-router-dom";
import { checkAuth } from "../App";
import { FaHome, FaKey } from "react-icons/fa";
import "../navbar.css";

function Navigation() {
  const [active, setActive] = useState("nav-menu");
  const [toggleIcon, setToggleIcon] = useState("nav-toggler");

  const navToggle = () => {
    active === "nav-menu"
      ? setActive("nav-menu nav-active")
      : setActive("nav-menu");

    // TogglerIcon /
    toggleIcon === "nav-toggler"
      ? setToggleIcon("nav-toggler toggle")
      : setToggleIcon("nav-toggler");
  };

  return (
    <nav className="nav">
      <h3 className="nav-brand">My Promo</h3>
      <ul className={active}>
        <li className="nav-item">
          <div className="home">
            <FaHome size="25" color="darkgrey" />
            <Link className="nav-link" to={"/"}>
              {" "}
              Home
            </Link>
          </div>
          <div className="login">
            <FaKey size="25" color="darkgrey" />
            <Link className="nav-link" to={"/login"}>
              {" "}
              {checkAuth() ? "Logout" : "Login"}
            </Link>
          </div>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    </nav>
  );
}

export default Navigation;
