import React from "react";
import "../assets/css/About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about-grid">
        {/* About Image */}
        <div className="about-image">
          <img
            src="assets/images/logo.jpg"
            alt="Spotlight Ads Team"
            onError={(e) =>
              (e.target.src =
                "https://via.placeholder.com/600x400?text=Spotlight+Team")
            }
          />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h2 className="about-title">About Spotlight Ads</h2>
          <p>
            Spotlight is an advertisement company dedicated to creating impactful
            visuals—banners, posters, certificates, animated invitations, and
            video Ads. Our mission is to help brands shine with clean, modern
            design.
          </p>
          <p>
            With years of experience in the creative industry, we've developed a
            keen eye for detail and a passion for delivering exceptional results
            for our clients.
          </p>
          <a href="#contact" className="btn about-btn">
            Work With Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
