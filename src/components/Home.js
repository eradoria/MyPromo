import React from "react";
import Background from "../images/townsquare.jpg";
import Data from "../data.json"

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

      {
        Data.map(x =>
          {
            return(
              <div className="biz-card" key={x.id}>
                {x.company_name}
                {x.address}
                {x.city}
                {x.product}
              </div>
            )
          })
      }
      <div>
        <p>This is the Home Page</p>
      </div>
    </div>
  );
}

export default Home;
