import React from "react";
import "../Home.css";
import Background from "../images/townsquare.jpg";
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
      {Data.map((x) => {
        return (
          <div className="card" key={x.id}>
            <div className="card-inner">
              <div className="card-face card-face--front">
                <img></img>
              </div>
              <div className="card-face card-face--back">
                <div className="card-content"></div>
                <div className="card-header"></div>
                <div className="card-body">
                  {x.company_name}
                  {x.address}
                  {x.city}
                  {x.product}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <p>This is the Home Page</p>
      </div>
    </div>
  );
}

export default Home;
