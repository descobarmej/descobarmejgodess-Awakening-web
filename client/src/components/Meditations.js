// src/components/Meditations.js
import React, { useEffect, useState } from 'react';
import meditationService from '../services/meditationService';

function Meditations() {
  const [meditations, setMeditations] = useState([]);

  useEffect(() => {
    async function fetchMeditations() {
      const data = await meditationService.getMeditations();
      setMeditations(data);
    }
    fetchMeditations();
  }, []);

  return (
    <div className="meditations-container">
      <h2>Guided Meditations</h2>
      {meditations.map((meditation) => (
        <div key={meditation.id} className="meditation-item">
          <h3>{meditation.title}</h3>
          <p>{meditation.description}</p>
          <button>Start Meditation</button>
        </div>
      ))}
    </div>
  );
}

export default Meditations;
