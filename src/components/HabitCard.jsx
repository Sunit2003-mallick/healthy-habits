import React from "react";
import "../styles/dashboard.css";

const HabitCard = ({ habit, onIncrement, onDecrement }) => {
  const pct = Math.min(100, Math.round((habit.progress / habit.target) * 100));

  return (
    <div className="habit-card">
      <div className="habit-head">
        <h3>{habit.name}</h3>
      </div>

      <p className="habit-meta">
        <strong>{habit.progress}</strong> / {habit.target} {habit.unit}
      </p>

      <div className="progress">
        <div className="progress-bar" style={{ width: `${pct}%` }} aria-label={`${pct}%`} />
      </div>

      <div className="btn-row">
        <button onClick={() => onDecrement(habit.id)} className="btn small">-1</button>
        <button onClick={() => onIncrement(habit.id)} className="btn small primary">+1</button>
      </div>
    </div>
  );
};

export default HabitCard;
