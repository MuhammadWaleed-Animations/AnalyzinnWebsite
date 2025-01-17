import React from 'react';
import './WhoWeAre.css';
import CRM from '../Images/CRM.jpg';

const WhoWeAre = () => {
  return (
    <section className="who-we-are-section">
      <div className="container">
        <div className="text-content">
          <h2 className="title">Who We Are</h2>
          <h4 className="subtitle">Empowering Organizations with Analytics</h4>
          <p className="description">
            At ANALYZINN, we help organizations evolve through our proven analytics and consulting expertise. From data management to digital marketing, we bring actionable insights to drive your success.
          </p>
          <ul className="features-list">
            <li>✔ Data Management & Reporting</li>
            <li>✔ Digital Marketing & Automation</li>
            <li>✔ Integration & Custom Solutions</li>
          </ul>
          <a href="/about" className="cta-button">Learn More</a>
        </div>
        <div className="image-content">
          <img src={CRM} alt="Consulting" className="image" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
