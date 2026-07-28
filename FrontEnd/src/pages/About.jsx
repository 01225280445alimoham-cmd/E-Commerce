import React from "react";
import "../CSS/AboutUs.css";
import { assets } from "../assets/frontend_assets/assets";
import Title from "../Components/Title";

const STATS = [
  { value: "2019", label: "Founded" },
  { value: "12K+", label: "Products" },
  { value: "300K+", label: "Customers" },
  { value: "24", label: "Countries" },
];

const VALUES = [
  {
    number: "01",
    title: "Quality First",
    text: "Every product on our shelves is checked against a standard we'd be happy to stand behind ourselves.",
  },
  {
    number: "02",
    title: "Fair Pricing",
    text: "No inflated tags, no fake discounts. What you see is a price we're genuinely comfortable with.",
  },
  {
    number: "03",
    title: "Real Support",
    text: "A real person answers your questions — no scripts, no endless redirects.",
  },
];

const MILESTONES = [
  {
    year: "2019",
    title: "The idea",
    text: "Two friends, one messy spreadsheet, and a shared frustration with clunky checkouts.",
  },
  {
    year: "2021",
    title: "Going international",
    text: "Shipped our first order outside the country and never looked back.",
  },
  {
    year: "2023",
    title: "The app",
    text: "Launched on mobile after hearing the same request for two years straight.",
  },
  {
    year: "2025",
    title: "1 million orders",
    text: "Crossed our millionth delivery — still packed with the same care as the first.",
  },
];

const About = () => {
  return (
    <div className="about-page" dir="ltr">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__media">
          <img
            src={assets.about_img}
            alt="Inside the YourStore warehouse"
            className="about-hero__img"
          />
        </div>
        <div className="about-hero__content">
          <span className="about-hero__eyebrow">Our Story</span>
          <Title text1={"About"} text2={"Us"} />
          <p className="about-hero__subtitle">
            We started with one idea: shopping online shouldn't feel like a
            chore. Everything we build comes back to that.
          </p>
        </div>
      </section>

      {/* Story + stats */}
      <section className="about-story">
        <div className="about-story__text">
          <h2 className="about-section__title">Why we do this</h2>
          <p>
            YourStore began as a small side project between two friends who were
            tired of clunky checkouts and vague return policies. What started as
            a weekend build slowly turned into a store people actually trust.
          </p>
          <p>
            Today, we're still a small team at heart — we just happen to ship to
            a lot more doorsteps.
          </p>
        </div>
        <div className="about-story__stats">
          {STATS.map((stat) => (
            <div className="about-stat" key={stat.label}>
              <span className="about-stat__value">{stat.value}</span>
              <span className="about-stat__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="about-mission">
        <p className="about-mission__quote">
          "Make online shopping feel as trustworthy as buying from someone you
          know."
        </p>
        <span className="about-mission__attribution">
          — The founding principle, still on our office wall
        </span>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <h2 className="about-section__title about-timeline__title">
          How we got here
        </h2>
        <div className="about-timeline__list">
          {MILESTONES.map((item, index) => (
            <div className="about-milestone" key={item.year}>
              <div className="about-milestone__marker">
                <span className="about-milestone__dot" />
                {index !== MILESTONES.length - 1 && (
                  <span className="about-milestone__line" />
                )}
              </div>
              <div className="about-milestone__content">
                <span className="about-milestone__year">{item.year}</span>
                <h3 className="about-milestone__title">{item.title}</h3>
                <p className="about-milestone__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <h2 className="about-section__title about-values__title">
          What we stand for
        </h2>
        <div className="about-values__grid">
          {VALUES.map((value) => (
            <div className="about-value-card" key={value.number}>
              <span className="about-value-card__number">{value.number}</span>
              <h3 className="about-value-card__title">{value.title}</h3>
              <p className="about-value-card__text">{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2 className="about-cta__title">Ready to shop?</h2>
        <p className="about-cta__text">
          Browse the collection and see what all the fuss is about.
        </p>
        <a href="/" className="about-cta__button">
          Start Shopping
        </a>
      </section>
    </div>
  );
};

export default About;
