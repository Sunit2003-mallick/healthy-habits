import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import HabitCard from "./HabitCard";
import ProfileImg from "../assets/profile.png";
import HabitsImg from "../assets/bulb_leaf.png";

const DEFAULT_HABITS = [
  { id: 1, name: "Water Intake", unit: "glasses", target: 8,  progress: 0,},
  { id: 2, name: "Steps Walked", unit: "steps",   target: 8000, progress: 0,},
  { id: 3, name: "Mindfulness",  unit: "mins",    target: 15, progress: 0,},
  { id: 4, name: "Healthy Meals",unit: "meals",   target: 3,  progress: 0,}
];

const Dashboard = () => {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("hh.habits");
    return saved ? JSON.parse(saved) : DEFAULT_HABITS;
  });

  useEffect(() => {
    localStorage.setItem("hh.habits", JSON.stringify(habits));
  }, [habits]);

  const inc = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, progress: Math.min(h.target, h.progress + 1) } : h));
  };
  const dec = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, progress: Math.max(0, h.progress - 1) } : h));
  };

  return (
<section className="dashboard">
  <aside className="profile">
    <img className="avatar" src={ProfileImg} alt="Profile" />
    <h2>Hello, User!</h2>
    <p className="muted">Stay consistent. Small steps, big changes.</p>
  </aside>

  <div className="cards">
    {habits.map(habit => (
      <HabitCard key={habit.id} habit={habit} onIncrement={inc} onDecrement={dec} />
    ))}
  </div>

  <div className="tip">
    <img src={HabitsImg} alt="Wellness" />
    <div className="tip-content">
      <h3>💡 Daily Tip</h3>
      <p>Attach habits to existing routines — for example, drink a glass of water after every meal.</p>
    </div>
  </div>
</section>
  );
};

export default Dashboard;
