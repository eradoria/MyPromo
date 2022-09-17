import React, { useState } from "react";
import "../Home.css";
import Background from "../images/townsquare.jpg";
import CardFront from "../images/companyLogo.png";
import Data from "../data.json";

function Home() {
  const [flip, setFlip] = useState(true);

  const cardToggle = () => {
    flip === true
      ? setFlip("card-face card-face--back")
      :setFlip( "card-face card-face--front");
  };

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
      <div className="card-container">
        {Data.map((x) => {
          return (
            <div className= {`card ${flip ? 'card-face card-face--front' : 'card-face card-face--back'}`}
            onClick={() => setFlip(!flip)}
            key={x.id}
            >
              <div className="card-inner" >
                <div
                  className="card-face card-face--front"
                  style={{
                    background: `url(${CardFront})`,
                    backgroundPosition: "center",
                    backgroundSize: "90% 90%",
                    backgroundRepeat: "no-repeat",
                    opacity: "90%",
                  }}
                >
                  {x.company_name}
                </div>
                <div className="card-face card-face--back">
                  <div className="card-content"></div>
                  <div className="card-header"></div>
                  <div className="card-body">
                    
                    {x.address}
                    {x.city}
                    {x.product}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
