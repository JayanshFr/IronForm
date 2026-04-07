import React, { useState } from 'react';

const ExerciseCard = ({ ex }) => {
  // Only load the iframe after the user hovers over the card for the first time
  const [hasHovered, setHasHovered] = useState(false);
  
  // Extract video ID safely
  const videoId = ex.video.split('/').pop().split('?')[0];

  return (
    <div 
      className="exercise-card"
      onMouseEnter={() => setHasHovered(true)}
    >
      <div className="media-wrapper">
        <img src={ex.thumbnail} alt={ex.name} className="card-thumbnail" />
        {hasHovered && (
          <iframe 
            src={`${ex.video}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`}
            title={ex.name}
            className="card-video-hover"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope;"
          ></iframe>
        )}
      </div>
      <div className="card-info">
        <h3>{ex.name}</h3>
        <div className="meta-info">
          <span className="badge category-badge">{ex.category}</span>
          <span className="badge muscle-badge">{ex.muscle}</span>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
