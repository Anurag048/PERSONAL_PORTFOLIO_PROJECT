import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import "./navBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <a href="#home" className="logo">Anurag Singh</a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {"\u2630"}
        </button>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="home" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="about" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="projects" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="skills" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Skills</Link></li>
          <li><Link to="experience" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Experience</Link></li>
          <li><Link to="contact" smooth duration={500} offset={-70} onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li>
            <a href="/Anurag_Singh.pdf" download className="cv-btn" onClick={() => setMenuOpen(false)}>
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
