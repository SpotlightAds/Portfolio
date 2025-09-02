// src/components/Services.jsx
import React from "react";
import { servicesData } from "../data/servicesData.jsx";
import "../assets/css/Services.css";

const Services = () => {
  return (
    <section id="services" className="services section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
