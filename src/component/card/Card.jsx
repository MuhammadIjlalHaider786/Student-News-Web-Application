import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="cover" />
      <h1>{props.title}</h1>
    </div>
  );
};

export default Card;
