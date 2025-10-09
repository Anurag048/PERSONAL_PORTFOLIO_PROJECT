import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        {/* <div className="about-img">
          <img src="./src/assets/photo.jpg" alt="profile" />
        </div> */}
        <div className="about-text">
          {/* <h3 className="typing">Hi! I'm Anurag Singh</h3> */}
          <p className="fade-in">
            A BTech CSE graduate and MERN Stack Developer. I specialize in
            building full-stack applications using MongoDB, Express, React, and
            Node.js, along with tools like Git, REST APIs, and deployment
            platforms such as Vercel/Netlify.
          </p>
          <p className="fade-in" style={{ animationDelay: "0.5s" }}>
            I’ve developed projects like an e-commerce platform, a real-time
            chat app, and a task manager, which gave me hands-on experience in
            creating both frontend and backend solutions.
          </p>
          <p className="fade-in" style={{ animationDelay: "1s" }}>
            Beyond coding, I enjoy fitness and exploring new technologies. My
            current focus is on learning advanced React patterns and cloud
            deployment to sharpen my skills further.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
