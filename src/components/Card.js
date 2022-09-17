import React, { useState } from "react";
import "../Card.css";
import CardFront from "../images/companyLogo.png";
import Data from "../data.json";

export function Card(props) {
  const [flip, setFlip] = useState(false);

  const cardToggle = () => {
    flip === true ? setFlip("front") : setFlip("back");
  };

  return (
    <div className="card-container">
      {Data.map((x) => {
        return (
          <div
            className={`card ${flip === x.id ? "flip" : ""}`}
            key={x.id}
            onClick={() => setFlip(x.id)}
          >
            <div
              className="front"
              style={{
                background: `url(${CardFront})`,
                backgroundPosition: "center",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                opacity: "90%",
              }}
            >
              <h3>{x.company_name}</h3>
            </div>
            <div className="back">
              <div className="card-body">
                <h2> Business: </h2>
                <h3>{x.company_name}</h3> <br />
                <h3>Product:</h3>
                <h3> {x.product}</h3> <br />
                <h3>Address:</h3>
                {x.address} <br />
                {x.city}
              </div>
              <div className="card-button-container">
                <button className="card-button"> See More</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
