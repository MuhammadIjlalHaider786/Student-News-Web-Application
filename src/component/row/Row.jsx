// Row.js
import React from "react";
import "./Row.scss";
import Card from "../card/Card";

const Row = ({ title, newsList }) => {
  return (
    <div className="row">
      <h2>{title}</h2>

      {newsList && newsList.map((news, index) => (
        <Card key={index} img={news.img} title={news.title} />
      ))}

      <div>
        <Card img="https://img.freepik.com/premium-photo/woman-s-face-is-made-up-geometric-shapes-cyberpunk-colorful-fractalism-cubism_834088-1.jpg" />
      </div>
      <hr />
    </div>
  );
};

export default Row;
