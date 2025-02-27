import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [stats, setStats] = useState({
    drinkWater: 2.0,
    stepsTaken: 5000,
    caloriesBurned: 200,
    muscleMass: 40.0,
    bodyFat: 18.0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        drinkWater: parseFloat((prevStats.drinkWater + Math.random() * 0.1).toFixed(2)),
        stepsTaken: prevStats.stepsTaken + Math.floor(Math.random() * 10),
        caloriesBurned: prevStats.caloriesBurned + Math.floor(Math.random() * 5),
        muscleMass: parseFloat((prevStats.muscleMass + (Math.random() * 0.2 - 0.1)).toFixed(1)),
        bodyFat: parseFloat((prevStats.bodyFat + (Math.random() * 0.2 - 0.1)).toFixed(1)),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1 className="title">Real-time Health Dashboard</h1>
      <div className="stats-container">
        <div className="stat-box">💧 <span>Water Intake:</span> {stats.drinkWater} L</div>
        <div className="stat-box">🚶 <span>Steps Taken:</span> {stats.stepsTaken}</div>
        <div className="stat-box">🔥 <span>Calories Burned:</span> {stats.caloriesBurned}</div>
        <div className="stat-box">💪 <span>Muscle Mass:</span> {stats.muscleMass} %</div>
        <div className="stat-box">⚖️ <span>Body Fat:</span> {stats.bodyFat} %</div>
      </div>
    </div>
  );
}

export default App;
