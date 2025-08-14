import React, { useMemo } from "react";
import "../styles/reports.css";
import ChartSection from "./ChartSection";

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const Reports = () => {
  const weekly = useMemo(() => {
    const randNear = (center, spread, min=0) =>
      clamp(Math.round(center + (Math.random() * spread * 2 - spread)), min, center + spread);

    return {
      water:       Array.from({length:7}, () => randNear(6, 2, 0)),        
      steps:       Array.from({length:7}, () => randNear(7000, 3000, 1000)),
      mindfulness: Array.from({length:7}, () => randNear(12, 8, 0)),        
      meals:       Array.from({length:7}, () => randNear(2, 1, 0))          
    };
  }, []);

  const completionScore = useMemo(() => {
    const waterPct = weekly.water.reduce((a,b)=>a+b,0) / (8*7);
    const stepsPct = weekly.steps.reduce((a,b)=>a+b,0) / (8000*7);
    const mindPct  = weekly.mindfulness.reduce((a,b)=>a+b,0) / (15*7);
    const mealPct  = weekly.meals.reduce((a,b)=>a+b,0) / (3*7);
    return Math.round(((waterPct + stepsPct + mindPct + mealPct) / 4) * 100);
  }, [weekly]);

  return (
    <section className="reports">
      <header className="reports-head">
        <h2>Weekly Reports</h2>
        <p className="muted">Your estimated completion towards goals this week</p>
        <div className="score">
          <span>{completionScore}%</span>
          <small>Goal Completion</small>
        </div>
      </header>

      <ChartSection weekly={weekly} />

      <div className="insights">
        <div className="insight-card">
          <h4>Hydration</h4>
          <p>Great consistency. Try spacing glasses across the day to avoid late-evening catch-up.</p>
        </div>
        <div className="insight-card">
          <h4>Activity</h4>
          <p>Hit steps by adding a 10-15 min walk after lunch and dinner.</p>
        </div>
        <div className="insight-card">
          <h4>Mindfulness</h4>
          <p>Two short sessions (5-7 mins) are often easier than one long block.</p>
        </div>
      </div>
    </section>
  );
};

export default Reports;
