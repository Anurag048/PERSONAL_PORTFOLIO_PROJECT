import React from "react";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import ProjectCard from "./components/Projects";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection";
import ContactSection from "./components/ContactSection";
import { Element } from "react-scroll";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  return (
    <div>
      <ThemeToggle />
      <NavBar />

      <Element name="home">
        <HeroSection />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <ProjectCard />
      </Element>

      <Element name="skills">
        <SkillsSection />
      </Element>

      <Element name="experience">
        <ExperienceSection />
      </Element>

      <Element name="contact">
        <ContactSection />
      </Element>
    </div>
  );
}

export default App;
