import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./heroSection.css";

export default function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="highlight">Anurag Singh</span>
        </motion.h1>

        <TypeAnimation
          sequence={[
            "Web Developer 💻",
            2000,
            "MERN Stack Enthusiast 🚀",
            2000,
            "Problem Solver ⚡",
            2000,
          ]}
          wrapper="h2"
          cursor={true}
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          Passionate about building scalable web applications and solving
          real-world problems through code.
        </p>

        <div className="social-links">
          <a
            href="https://github.com/Anurag048"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-singh-05752713b/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a
            href="https://leetcode.com/anurag_480"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
              alt="LeetCode"
              className="leetcode-icon"
            />
          </a>
        </div>
        <div className="hero-btn-mobile">
          <a href="/Anurag_Singh.pdf" download className="hero-btn cv-btn-mobile">
            📄 Download CV
          </a>
        </div>
      </div>

      <motion.div
        className="hero-img"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img src="unnamed.jpg" alt="profile" />
      </motion.div>
    </section>
  );
}
