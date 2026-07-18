import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import "../CSS/Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <img src={assets.logo} alt="Forever logo" loading="lazy" />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dicta
            cupiditate fugit culpa rem laudantium.
          </p>
        </div>

        <div className="footer-links">
          <h3>COMPANY</h3>

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>GET IN TOUCH</h3>

          <address>
            <a href="tel:+2011245577954">+20 11245577954</a>
            <a href="mailto:forever@example.com">forever@example.com</a>
          </address>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2026 Forever. All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
