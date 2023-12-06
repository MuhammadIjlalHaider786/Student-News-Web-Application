import React from "react";
import "./Row.scss";
import Card from "../card/Card";

const Row = ({
  title,
  arr = [
    {
      img: "https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg",
    },
  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      <div>
        {arr.map((item) => (
          <Card img={item.img} />
        ))}
      </div>
    </div>
  );
};

export default Row;
