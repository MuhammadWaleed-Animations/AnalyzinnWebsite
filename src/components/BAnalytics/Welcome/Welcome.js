
import React from 'react';
import { Button } from 'antd';
import './Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Welcome to the World of</h1>
        <h2>Data & Business Analytics</h2>
        <p>
            We help leaders evolve their organizations with proven business analysis,
            delivering actionable insights for a competitive edge.
        </p>
        <button className="gradient-buttonn">
          Request Free Consultation
        </button>
      </div>
    </div>
  );
};

export default Welcome;