import React, { useState } from "react";
import "./Card.scss";
import PopUp from "../popup/PopUp";

const Card = ({ img }) => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleReadClick = () => {
    setIsPopUpOpen(true);
  };

  const handleCloseClick = () => {
    setIsPopUpOpen(false);
  };

  return (
    <>
      <div className="card">
        <img src={img} alt="cover" />
      </div>
      <div className="main">
        <h1>Title</h1>
        <button className="btn" onClick={handleReadClick}>Read</button>
        {isPopUpOpen && <PopUp onClose={handleCloseClick} />}
      </div>
    </>
  );
};

export default Card;
