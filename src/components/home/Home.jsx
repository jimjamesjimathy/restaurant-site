import React from "react";
import './home.css';

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-bg"></div>
      <div className="container">
        <div className="row min-vh-100 align-items">
          <div className="home-text">
            <h1>Literary Tavern</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex nobis
              accusamus, assumenda cupiditate neque quisquam saepe quasi
              voluptates eligendi doloremque quos aliquid? Ex praesentium
              quisquam animi nam aliquid accusantium beatae?
            </p>
            <a href="#our-menu" className="btn btn-default">
              Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
