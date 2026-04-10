import React, { useState } from 'react';
import './App.css';
import { EXERCISES } from './data/exercises';
import ExerciseCard from './components/ExerciseCard';
import Snowfall from 'react-snowfall';

function App() {
  const [filter, setFilter] = useState('All');

  const filterOptions = [
    'All', 'Push', 'Pull', 'Legs', 
    'Chest', 'Shoulders', 'Triceps', 'Biceps', 
    'Rear Delts', 'Side Delts', 'Lats', 
    'Upper Back', 'Lower Back', 'Abs'
  ];

  const filteredExercises = filter === 'All' 
    ? EXERCISES 
    : EXERCISES.filter(ex => ex.categories.includes(filter));

  return (
    <div className="app-container">
      <Snowfall 
        color="#34d399" 
        snowflakeCount={100} 
        style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, opacity: 0.5 }} 
      />
      <header className="app-header">
        <h1>IRON<span className="green-accent">Form</span></h1>
        <p>Workout guide for athletes.</p>
      </header>

      <div className="content-layout">
        <nav className="filter-nav">
          {filterOptions.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${filter === cat ? 'active' : ''}`} 
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        <main className="exercise-list">
          {filteredExercises.map(ex => (
            <ExerciseCard key={ex.id} ex={ex} />
          ))}
        </main>
      </div>

      <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'var(--text-secondary)' }}>
        <p>Stay Consistent. Stay Strong. 💪</p>
      </footer>
    </div>
  );
}

export default App;