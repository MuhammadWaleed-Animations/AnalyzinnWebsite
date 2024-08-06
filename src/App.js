import React from 'react';
import { Row, Col } from 'antd';
import TextSection from './components/TextSection';
import StatisticsSection from './components/StatisticsSection';
import TestimonialSlider from './components/TestimonialSlider';
import WhatSetsUsApart from './WhatSetsUsApart';
import ContactButton from './ContactButton';
import Home from './components/Home';

const testimonials = [
  {
    quote: "Analyzinn Solutions, as it comes in the name, is a brilliant company to work with when it comes to Analytics Services. Having insights from your entire company really helps you when making decisions.",
    name: "BRAD JOHNSON",
    position: "CEO | Zelevate",
    image: "https://analyzinn.com/wp-content/uploads/2022/09/zelevate-logo.webp" 
  },
  {
    quote: "Digital Marketing is a hassle for those stepping in the industry. It always helps when there is a group of professionals ready to help.",
    name: "ASHLEY DIAMOND",
    position: "Managing Director | Hikerr",
    image: "https://analyzinn.com/wp-content/uploads/2022/09/hikerr-logo.webp" 
  },
  {
    quote: "In terms of Integration within the company, alongside Automation within tasks, Analyzinn has been incredible to work with. Complex Tasks are now only a click of a button away.",
    name: "VAN BRESSEN",
    position: "CEO | Superloft Games",
    image: "https://analyzinn.com/wp-content/uploads/2022/09/superloft-logo.webp" 
  }
  
];

const App = () => {
  return (
    <>
    <Home />
    <div style={{ minHeight: '100vh', padding: '40px', background: '#f0f2f5' }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <TextSection />
        </Col>
        <Col span={24}>
          <StatisticsSection />
        </Col>
        <Col span={24}>
          <TestimonialSlider testimonials={testimonials} />
        </Col>
      </Row>
      <div style={{ minHeight: '100vh', padding: '40px', background: '#f0f2f5' }}>
      <WhatSetsUsApart />
      <ContactButton />
    </div>
    </div>
    </>
  );
};


export default App;
