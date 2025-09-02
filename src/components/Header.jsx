import { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header id="header">
      <div className="nav-container">
        <div className="logo">Spotlight Ads</div>
        <ul className={`nav-menu ${menuActive ? "active" : ""}`}>
          <li><a href="#home" className="nav-link" onClick={() => setMenuActive(false)}>Home</a></li>
          <li><a href="#services" className="nav-link" onClick={() => setMenuActive(false)}>Services</a></li>
          <li><a href="#portfolio" className="nav-link" onClick={() => setMenuActive(false)}>Portfolio</a></li>
          <li><a href="#about" className="nav-link" onClick={() => setMenuActive(false)}>About</a></li>
          <li><a href="#contact" className="nav-link" onClick={() => setMenuActive(false)}>Contact</a></li>
        </ul>
        <div
          id="mobile-toggle"
          className={`mobile-toggle ${menuActive ? "active" : ""}`}
          onClick={() => setMenuActive(!menuActive)}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
}
