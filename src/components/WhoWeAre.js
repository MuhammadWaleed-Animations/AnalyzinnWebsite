import React from 'react';
import './WhoWeAre.css'; // Ensure this CSS file is created with the styles provided below
import CRM from '../Images/CRM.jpg';
import About from '../pages/About';

const WhoWeAre = () => {
  return (
    <div className="who-we-are-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h2 className="title">Who We Are</h2>
          <h4 className="subtitle">Consulting Firm Powered by Analytics!</h4>
          <p className="description">
            We support leaders to <strong>EVOLVE</strong> their organizations using our proven analytics consulting services.
          </p>
          <p className="details">
            We’re a growing group of IT professionals providing businesses worldwide with solutions and services in Data Management, Reporting & Visualization, Digital Marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue, and accelerate innovation!
          </p>
          <a href={About} className="cta-button">Know More</a>
        </div>
        <div className="image-content">
          <img src={CRM} alt="Consulting" className="image"/>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
