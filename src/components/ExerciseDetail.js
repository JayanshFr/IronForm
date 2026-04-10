import React from 'react';

const ExerciseDetail = ({ ex, onBack }) => {
  if (!ex) return null;

  // Extract video ID safely
  const videoId = ex.video.split('/').pop().split('?')[0];

  return (
    <div className="exercise-detail">
      <button className="back-btn" onClick={onBack}>
        &larr; Back to Exercises
      </button>

      <div className="detail-layout">
        <div className="detail-video-wrapper">
          <iframe 
            src={`${ex.video}?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&playlist=${videoId}`}
            title={ex.name}
            className="detail-video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="detail-info">
          <h2>{ex.name}</h2>
          
          <div className="meta-info">
            {ex.categories.map(cat => (
              <span key={cat} className="badge category-badge">{cat}</span>
            ))}
            <span className="badge muscle-badge">{ex.muscle}</span>
          </div>

          <div className="instructions">
            <h3>Instructions & Tips</h3>
            <p>
              To master the <strong>{ex.name}</strong>, focus on controlled movements and maintaining a full range of motion. 
              Ensure your core is tight and your breathing is steady. Avoid rushing through the reps; instead, 
              focus on the mind-muscle connection.
            </p>
            <ul>
              <li>Warm up properly before starting your working sets.</li>
              <li>Keep your posture strict to avoid momentum.</li>
              <li>Push to near failure (leave 1-2 reps in the tank).</li>
              <li>Stay hydrated and rest 60-90 seconds between sets.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseDetail;
