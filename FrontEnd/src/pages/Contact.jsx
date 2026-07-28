import React, { useState } from "react";
import "../CSS/ContactUs.css";
import Title from "../Components/Title";
import { assets } from "../assets/frontend_assets/assets";

const CONTACT_INFO = [
  {
    number: "01",
    title: "Email",
    text: "support@yourstore.com",
  },
  {
    number: "02",
    title: "Phone",
    text: "+20 100 000 0000",
  },
  {
    number: "03",
    title: "Address",
    text: "14 Market Street, Suez, Egypt",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page" dir="ltr">
      <header className="contact-page__header">
        <Title text1={"Contact"} text2={"Us"} />
      </header>

      {/* Hero */}
      <section className="contact-hero">
        <img src={assets.contact_img} alt="" className="contact-hero__img" />
        <div className="contact-hero__content">
          <span className="contact-hero__eyebrow">Contact</span>
          <p className="contact-hero__subtitle">
            For inquiries regarding our products, orders, or partnerships, our
            team is available to assist you. Please reach out using the details
            below or the form provided.
          </p>
        </div>
      </section>

      {/* Contact info cards */}
      <section className="contact-info">
        <div className="contact-info__grid">
          {CONTACT_INFO.map((item) => (
            <div className="contact-info-card" key={item.number}>
              <span className="contact-info-card__number">{item.number}</span>
              <h3 className="contact-info-card__title">{item.title}</h3>
              <p className="contact-info-card__text">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="contact-main">
        <div className="contact-form-wrap">
          <h2 className="contact-section__title">Send us a message</h2>

          {submitted ? (
            <div className="contact-form__success">
              <p>
                Thanks for reaching out — we'll get back to you within one
                business day.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <input
                    id="name"
                    type="text"
                    className="contact-form__input"
                    placeholder=" "
                    value={formData.name}
                    onChange={handleChange("name")}
                    autoComplete="name"
                    required
                  />
                  <label htmlFor="name" className="contact-form__label">
                    Full name
                  </label>
                </div>

                <div className="contact-form__field">
                  <input
                    id="email"
                    type="email"
                    className="contact-form__input"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange("email")}
                    autoComplete="email"
                    required
                  />
                  <label htmlFor="email" className="contact-form__label">
                    Email address
                  </label>
                </div>
              </div>

              <div className="contact-form__field">
                <input
                  id="subject"
                  type="text"
                  className="contact-form__input"
                  placeholder=" "
                  value={formData.subject}
                  onChange={handleChange("subject")}
                  required
                />
                <label htmlFor="subject" className="contact-form__label">
                  Subject
                </label>
              </div>

              <div className="contact-form__field">
                <textarea
                  id="message"
                  className="contact-form__input contact-form__textarea"
                  placeholder=" "
                  rows={5}
                  value={formData.message}
                  onChange={handleChange("message")}
                  required
                />
                <label htmlFor="message" className="contact-form__label">
                  Message
                </label>
              </div>

              <button type="submit" className="contact-form__submit">
                Send Message
              </button>
            </form>
          )}
        </div>

        <aside className="contact-sidebar">
          <div className="contact-sidebar__block">
            <h3 className="contact-sidebar__title">Business hours</h3>
            <ul className="contact-sidebar__list">
              <li>
                <span>Sunday – Thursday</span>
                <span>9:00 AM – 6:00 PM</span>
              </li>
              <li>
                <span>Friday – Saturday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div className="contact-sidebar__block">
            <h3 className="contact-sidebar__title">Follow us</h3>
            <div className="contact-sidebar__social">
              <a href="#facebook" className="contact-sidebar__social-link">
                Facebook
              </a>
              <a href="#instagram" className="contact-sidebar__social-link">
                Instagram
              </a>
              <a href="#twitter" className="contact-sidebar__social-link">
                Twitter
              </a>
            </div>
          </div>

          <div className="contact-sidebar__map" aria-hidden="true">
            <span className="contact-sidebar__map-label">Map preview</span>
          </div>
        </aside>
      </section>
    </div>
  );
};

export default Contact;
