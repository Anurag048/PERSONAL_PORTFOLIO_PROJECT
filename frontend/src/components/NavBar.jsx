import React, { useState, useEffect } from "react";
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
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li><Link to="home" smooth duration={500} offset={-70}>Home</Link></li>
          <li><Link to="about" smooth duration={500} offset={-70}>About</Link></li>
          <li><Link to="projects" smooth duration={500} offset={-70}>Projects</Link></li>
          <li><Link to="skills" smooth duration={500} offset={-70}>Skills</Link></li>
          <li><Link to="experience" smooth duration={500} offset={-70}>Experience</Link></li>
          <li><Link to="contact" smooth duration={500} offset={-70}>Contact</Link></li>
          <li>
            <a href="/Anurag_Singh.pdf" download className="cv-btn">Download CV</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
