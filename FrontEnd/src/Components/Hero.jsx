import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import "../CSS/Hero.css";

const Hero = () => {
  return (
    <div className="contianer">
      <div className="contant">
        <div className="hero-content">
          <div className="hero-row">
            <hr className="hero-line" />
            <p>OUR BESTSELLERS</p>
          </div>

          <h1 className="hero-title">Latest Arrivals</h1>

          <div className="hero-row">
            <p>SHOP NOW</p>
            <hr className="hero-line" />
          </div>
        </div>
      </div>

      <div className="img-contianer">
        <img src={assets.hero_img} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
