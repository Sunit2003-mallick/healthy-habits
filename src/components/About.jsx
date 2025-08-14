import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
      <h2>About HealthyHabits</h2>
      <p>
        HealthyHabits is a lightweight wellness tracker that helps you build consistency across
        hydration, movement, mindfulness, and nutrition. It demonstrates clean component design,
        routing, local persistence, and data visualization in React.
      </p>

      <div className="mission-grid">
        <div className="mission-card">
          <h3>Mission</h3>
          <p>Make habit tracking simple, visual, and motivating.</p>
        </div>
        <div className="mission-card">
          <h3>Tech Stack</h3>
          <p>React, React Router, Chart.js, LocalStorage, CSS (responsive).</p>
        </div>
        <div className="mission-card">
          <h3>Why It’s Hire-Ready</h3>
          <p>Shows multi-page routing, UX polish, component reuse, and basic analytics.</p>
        </div>
      </div>

      <form className="contact">
        <h3>Contact</h3>
        <div className="row">
          <input placeholder="Your Name" />
          <input placeholder="Your Email" />
        </div>
        <textarea rows="4" placeholder="Message" />
        <button type="button" className="btn primary">Send</button>
      </form>
    </section>
  );
};

export default About;
