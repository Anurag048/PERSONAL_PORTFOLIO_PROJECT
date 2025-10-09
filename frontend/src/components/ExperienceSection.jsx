import React from "react";
import { motion } from "framer-motion";
import "./experienceSection.css";

const experiences = [
  {
    role: "Python Intern",
    company: "E&ICT IIT Kanpur",
    timeline: "Jun 2022 – Jul 2022",
    tech: "Python, Tkinter",
    points: [
      "Built a responsive landing page with React and Tailwind.",
      "Integrated REST APIs to fetch and display live data.",
    ],
  },
  {
    role: "SDE Intern",
    company: "MegaSoftel pvt. ltd",
    timeline: "Jul 2023 – Sep 2023",
    tech: "Java",
    points: [
      "Worked on a full-stack Finance Tracker platform.",
      "Implemented CRUD operations for easy User integrity.",
    ],
  },
  {
    role: "Personal Project – Swasthya Sampark",
    company: "Self Project",
    timeline: "Feb 2025 – Apr 2025",
    tech: "MERN Stack",
    points: [
      "Developed a full-stack Health-Database platform with user authentication.",
      "Implemented CRUD operations and JWT-based security.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="timeline-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <p className="company">
                {exp.company} | <span>{exp.timeline}</span>
              </p>
              <p className="tech">Tech Stack: {exp.tech}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
