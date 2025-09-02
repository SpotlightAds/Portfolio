import React from "react";
import "../assets/css/Footer.css";
import { FaFacebookF, FaInstagram, FaTiktok} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content container">
        <h2 className="footer-logo">Spotlight Ads</h2>

        <p className="footer-description">
          Creating impactful visuals and video ads to help your brand shine.
        </p>

        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61579579725760" className="social-link" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/_spotlight_ads/" className="social-link" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@spotlightads002" className="social-link" target="_blank" rel="noreferrer">
            <FaTiktok />
          </a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Spotlight Ads. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
