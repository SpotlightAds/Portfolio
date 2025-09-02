import React from "react";
import "../assets/css/Hero.css"; // Import the modular CSS

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content" data-aos="fade-up">
        <h1 className="hero-title">Creative Designs That Captivate</h1>
        <p className="hero-subtitle">
          We create impactful advertisements, banners, posters, certificates,
          animated invitations, and more.
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn" data-aos="fade-up" data-aos-delay="200">
            View Our Work
          </a>
          <a href="#contact" className="btn btn-secondary" data-aos="fade-up" data-aos-delay="300">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
