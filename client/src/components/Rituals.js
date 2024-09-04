// src/components/Rituals.js
import React, { useEffect, useState } from 'react';
import ritualService from '../services/ritualService';

function Rituals() {
  const [rituals, setRituals] = useState([]);

  useEffect(() => {
    async function fetchRituals() {
      const data = await ritualService.getRituals();
      setRituals(data);
    }
    fetchRituals();
  }, []);

  return (
    <div className="rituals-container">
      <h2>Spiritual Rituals</h2>
      {rituals.map((ritual) => (
        <div key={ritual.id} className="ritual-item">
          <h3>{ritual.name}</h3>
          <p>{ritual.steps}</p>
          <button>View Full Ritual</button>
        </div>
      ))}
    </div>
  );
}

export default Rituals;
