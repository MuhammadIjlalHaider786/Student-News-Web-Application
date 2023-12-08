// Home.js
import React, { useState } from "react";
import "./Home.scss";
import Row from "./row/Row";
import NewsForm from "./news form/NewsForm";

const Home = ({ newsList }) => {
  return (
    <section className="home">
      <div className="banner"></div>

      <Row title={"Popular News"} />
      <Row title={"News"} newsList={newsList} />
      <Row title={"Arts News"} />
      <Row title={"Sports News"} />
    </section>
  );
};

export default Home;
