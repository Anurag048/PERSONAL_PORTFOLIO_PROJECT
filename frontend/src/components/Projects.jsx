import React from "react";
import "./projects.css";
import portfolioImg from "../assets/potfolio.jpeg";
import newsPandaImg from "../assets/newPanda.jpg";
import entropyImg from "../assets/entropy.jpg";
import notiesImg from "../assets/notes.jpg";
const projects = [
  {
    name: "Portfolio Website",
    img: portfolioImg,
    description: "A modern portfolio built with React and CSS.",
    link: "https://anurags-portfolio-theta.vercel.app/"
  },
  {name: "Noties",
    img: notiesImg,
    description: "A dynamic notes website created to showcase multi user login without sharing data.",
    link: "https://noties-ten.vercel.app/login"
  },
  {
    name: "Entropy",
    img: entropyImg,
    description: "A simple parental survilliance web-app.",
    link: "https://github.com/Anurag048/Entropy"
  },
  {
    name: "News-Panda",
    img: newsPandaImg,
    description: "A dynamic news website created to showcase API handling and front-end integration.",
    link: "https://github.com/Anurag048/NewsPanda"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.img} alt={project.name} />
            <div className="card-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
