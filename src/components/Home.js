import React from "react";
import "../Home.css";
import Background from "../images/rosepetals.png";
import { Card } from "./Card";

function Home() {
  return (
    <div
      className="home-container"
      style={{
        background: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "100%",
      }}
    >
      <Card />
    </div>
  );
}

export default Home;
