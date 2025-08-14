import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import "../styles/reports.css";

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const ChartSection = ({ weekly }) => {
  const labels = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  const mkDataset = (label, data) => ({
    label,
    data,
    borderWidth: 2,
    pointRadius: 3,
    fill: false
  });

  const lineData = {
    labels,
    datasets: [
      mkDataset("Water (glasses)", weekly.water),
      mkDataset("Steps (x1000)", weekly.steps.map(v => v/1000)),
      mkDataset("Mindfulness (mins)", weekly.mindfulness),
    ]
  };

  const barData = {
    labels,
    datasets: [
      { label: "Healthy Meals (count)", data: weekly.meals, borderWidth: 1 }
    ]
  };

  return (
    <div className="charts">
      <div className="chart-card">
        <h3>Weekly Trend</h3>
        <Line data={lineData} />
      </div>
      <div className="chart-card">
        <h3>Meals Summary</h3>
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default ChartSection;
