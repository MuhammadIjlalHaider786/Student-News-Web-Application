import React from 'react';
import "./Home.scss";
import Row from './row/Row';


const Home = () => {
  return (
    <section className='home'>
      <div className="banner"></div>

      <Row title={"Popular News"} />
      <Row title={"News"} />
      <Row title={"Arts News"} />
      <Row title={"Sports News"} />
    </section>
  )
}

export default Home
