import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} HealthyHabits — Personal Wellness & Tracking</p>
    </footer>
  );
};

export default Footer;
