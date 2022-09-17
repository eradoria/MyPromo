import React, { useState } from "react";
import "../Home.css";
import Background from "../images/townsquare.jpg";
import CardFront from "../images/companyLogo.png";
import { Card } from "./Card";
import Data from "../data.json";

function Home() {
  return (
    <div
      className="home-container"
      style={{
        background: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "70%",
      }}
    >
     <Card />
    </div>
  );
}

export default Home;
