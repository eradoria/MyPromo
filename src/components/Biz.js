import React, { useState, useEffect } from "react";
import Background from "../images/france.jpg";
import Map from "./Map";
import "../Biz.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Biz(props) {
  console.log("props here", props);

  // const filter = useContext(`${bizFilter}`)
  // console.log('filter here',filter)

  const [cards, setCards] = useState([]);
  const [like, setLike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://js-311-backend.vercel.app/promo/skyble"
      );

      const json = await data.json();
      setCards(json);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("updated");
    console.log(cards);
  }, [cards]);

  function handleLike() {
    if (likeActive) {
      setLikeActive(false);
      setLike(like - 1);
    } else {
      setLikeActive(true);
      setLike(like + 1);
    }
  }

  return (
    <div
      className="biz-container"
      style={{
        background: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "100%",
      }}
    >
      {cards.map((x) => {
        return (
          <div className="BizMainContainer" key={x.id}>
            <h1>Welcome To</h1>
            <h1>{x.company_name}</h1>
            <div className="HorizontalRule" />
            <div className="InfoContainer">
              <h2>Owner: {x.bizowner}</h2>
              <h3>{x.address}</h3>
              <h3>{x.city}</h3>
              <h3>
                Email: <br /> {x.email}
              </h3>
              <h3>Product:{x.product}</h3>
            </div>
            <div className="HorizontalRule" />
            <h2>Follow & Like Us</h2>
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
            <div className="LikeContainer">
              <button
                className={[likeActive ? "active-like" : "LikeButton"]}
                onClick={handleLike}
              >
                Likes: {like}
              </button>
            </div>
          </div>
        );
      })}
      <div className="RightSideContainer">
        <div className="MapContainer">
          <Map />
        </div>
        <div className="ProductContainer">products</div>
      </div>
    </div>
  );
}

export default Biz;
