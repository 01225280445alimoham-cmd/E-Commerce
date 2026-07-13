import React from "react";
import { assets } from "../frontend_assets/assets";
import "./CSS/Hero.css";

const Hero = () => {
  return (
    <div className="contianer">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
        className="contant"
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <hr
              style={{
                width: "60px",
                height: "2px",
                border: "none",
                backgroundColor: "black",
                margin: 0,
              }}
            />
            <p style={{ margin: 0 }}>OUR BESTSELLERS</p>
          </div>
          <h1
            style={{
              fontFamily: "Prata",
              letterSpacing: "3px",

              fontWeight: "300",
            }}
          >
            Lastet Arrivals
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p style={{ margin: 0 }}>SHOP NOW</p>
            <hr
              style={{
                width: "60px",
                height: "2px",
                border: "none",
                backgroundColor: "black",
                margin: 0,
              }}
            />
          </div>
        </div>
      </div>
      <div style={{ margin: "0px", padding: "0px" }} className="img-contianer">
        <img src={assets.hero_img}></img>
      </div>
    </div>
  );
};

export default Hero;
