import React from "react";
import Hero from "../Components/Hero";
import LastetCollections from "../Components/LastetCollections";
import BestSaller from "../Components/BestSaller";
import OurPolicy from "../Components/OurPolicy";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Hero />
      <LastetCollections />
      <BestSaller />
      <OurPolicy />
    </div>
  );
};

export default Home;
