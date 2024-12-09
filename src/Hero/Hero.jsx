import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="Best">
      <h1>Our Best Selling Trips</h1>
      <div className="trip">
        <div className="trip-one">
          <button>Explore</button>
        </div>
        <div className="trip-two">
          <button>Explore</button>
        </div>
        <div className="trip-three">
          <button>Explore</button>
        </div>
        <div className="trip-four">
          <button>Explore</button>
        </div>
      </div>

      <button className="btnn">See more</button>
    </div>
  );
};

export default Hero;
