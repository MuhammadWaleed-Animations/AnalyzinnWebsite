import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import WhatSetsUsApart from './WhatSetsUsApart';
import ContactButton from './ContactButton';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <div style={{ minHeight: '100vh', padding: '40px', background: '#f0f2f5' }}>
      <WhatSetsUsApart />
      <ContactButton />
    </Router>
};


export default App;
