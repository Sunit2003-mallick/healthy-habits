import React from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import herobanner from "../assets/herobanner.jpg";
import WaterGlass from "../assets/hydration.jpg";
import TrackSteps from "../assets/trackstep.jpg";
import Mindfulness from "../assets/meditation.jpg";
import Nutrition from "../assets/healthy.jpg";

const Home = () => {
  return (
    <section className="home">
      <div className="hero" style={{ backgroundImage: `url(${herobanner})` }}>
        <div className="hero-content">
          <h1>Build Better Habits, One Day at a Time</h1>
          <p>Track hydration, activity, sleep, and mood with clear goals and beautiful insights.</p>
          <div className="cta-group">
            <Link to="/dashboard" className="btn-primary">Go to Dashboard</Link>
            <Link to="/reports" className="btn-ghost">View Reports</Link>
          </div>
        </div>
      </div>

      <div className="categories">
        <div className="cat-card">
          <img src={WaterGlass} alt="Hydration" />
          <h3>Hydration</h3>
          <p>Set glasses/day targets and stay refreshed.</p>
        </div>
        <div className="cat-card">
          <img src={TrackSteps} alt="Activity" />
          <h3>Activity</h3>
          <p>Track steps and daily movement.</p>
        </div>
        <div className="cat-card">
          <img src={Mindfulness} alt="Mindfulness" />
          <h3>Mindfulness</h3>
          <p>Stay balanced with mindful breaks.</p>
        </div>
        <div className="cat-card">
          <img src={Nutrition} alt="Nutrition" />
          <h3>Nutrition</h3>
          <p>Log meals and maintain healthy choices.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
