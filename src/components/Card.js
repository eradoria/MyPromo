import React, { useState } from "react";
import "../Card.css";
import CardFront from "../images/companyLogo.png";
import Data from "../data.json";

export function Card(props) {
  const [flip, setFlip] = useState(false);

  const cardToggle = (index) => {
    setFlip((prev) => {
      return prev === index ? null : index;
    });
  };

  return (
    <div className="card-container">
      {Data.map((x) => {
        return (
          <div
            className={`card ${flip ? "flip" : ""}`}
            onClick={() => setFlip(!flip)}
            key={x.id}
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
              {x.company_name}
            </div>
            <div className="back">
              <div className="card-content"></div>
              <div className="card-header"></div>
              <div className="card-body">
                {x.address}
                {x.city}
                {x.product}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
