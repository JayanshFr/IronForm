import React, { useState } from 'react';
import './App.css';
import { EXERCISES } from './data/exercises';
import ExerciseCard from './components/ExerciseCard';

function App() {
  const [filter, setFilter] = useState('All');

  const filteredExercises = filter === 'All' 
    ? EXERCISES 
    : EXERCISES.filter(ex => ex.category === filter);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>IRON<span className="green-accent">Form</span></h1>
        <p>Workout guide for athletes.</p>
      </header>

      <nav className="filter-nav">
        {['All', 'Push', 'Pull', 'Legs'].map(cat => (
          <button 
            key={cat} 
            className={`filter-btn ${filter === cat ? 'active' : ''}`} 
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </nav>

      <main className="exercise-grid">
        {filteredExercises.map(ex => (
          <ExerciseCard key={ex.id} ex={ex} />
        ))}
      </main>
    </div>
  );
}

export default App;