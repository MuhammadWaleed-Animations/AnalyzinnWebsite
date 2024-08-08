import React from 'react';
import './imgText.css';

const imgText = ({ title, text, image }) => {
  return (
    <div className="problem-section">
      <div className="problem-text">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="problem-image">
        <img src={`/images/${image}`} alt={title} />
      </div>
    </div>
  );
};

export default imgText
