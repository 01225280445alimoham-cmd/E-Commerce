import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import "../CSS/OurPolicy.css";

const OurPolicy = () => {
  const policies = [
    {
      image: assets.exchange_icon,
      title: "Easy Exchange Policy",
      description: "We offer hassle-free exchange policy.",
    },
    {
      image: assets.quality_icon,
      title: "7 Days Return Policy",
      description: "We provide 7 days free return policy.",
    },
    {
      image: assets.support_img,
      title: "Best Customer Support",
      description: "We provide 24/7 customer support.",
    },
  ];
  return (
    <section className="our-policy-container">
      {policies.map((policy, index) => (
        <div className="policy" key={index}>
          <img src={policy.image} alt={policy.title} loading="lazy" />
          <h3>{policy.title}</h3>
          <p>{policy.description}</p>
        </div>
      ))}
    </section>
  );
};

export default OurPolicy;
