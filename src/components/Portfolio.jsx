import React, { useState } from "react";
import portfolioData from "../data/portfolioData";
import "../assets/css/Portfolio.css";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState({ isOpen: false, src: "", type: "" });

  // 🔹 Generate categories dynamically from data
  const categories = ["all", ...new Set(portfolioData.map((item) => item.category))];

  // 🔹 Filtering items
  const filteredData =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  // 🔹 Open & Close Lightbox
  const openLightbox = (src, type) => {
    setLightbox({ isOpen: true, src, type });
    document.body.classList.add("no-scroll");
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, src: "", type: "" });
    document.body.classList.remove("no-scroll");
  };

  return (
    <section id="portfolio" className="portfolio section">
      <h2 className="section-title">Our Work</h2>

      {/* 🔹 Dynamic Filter Buttons */}
      <div className="portfolio-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            onClick={() => setActiveCategory(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* 🔹 Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="portfolio-item"
            data-category={item.category}
            onClick={() =>
              openLightbox(item.video || item.img, item.video ? "video" : "image")
            }
          >
            <img src={item.img} alt={item.title} className="portfolio-img" />
            <div className="portfolio-overlay">
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-desc">{item.desc}</p>
            </div>
            {item.video && <span className="video-indicator">Video</span>}
          </div>
        ))}
      </div>

      {/* 🔹 Lightbox */}
      {lightbox.isOpen && (
        <div id="lightbox" className={lightbox.isOpen ? "active" : ""} onClick={closeLightbox}>
          <div id="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button id="lightbox-close" onClick={closeLightbox}>
              &times;
            </button>
            {lightbox.src.endsWith(".mp4") ? (
              <video src={lightbox.src} controls autoPlay />
            ) : (
              <img src={lightbox.src} alt="portfolio item" />
            )}
          </div>
        </div>
      )}

    </section>
  );
};

export default Portfolio;
