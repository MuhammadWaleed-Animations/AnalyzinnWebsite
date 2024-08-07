import React from "react"
import Tab from "./components/Tab/Tab"
import Footer from "./components/footer/footer"
import { Row, Col } from 'antd';
import TextSection from './components/TextSection';
import StatisticsSection from './components/StatisticsSection';
import TestimonialSlider from './components/TestimonialSlider';
import WhatSetsUsApart from './WhatSetsUsApart';
import ContactButton from './ContactButton';
import Home from './components/Home';
// import './App.css';
const array = [{key:'0',label:"Business Analytics",children:"Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.",link:"link0",img:"img0.jpeg"},
{key:'1',label:"Digital Marketing & Analytics",children:"Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time",link:"link1",img:"img1.jpg"},
{key:'2',label:"Automation & Integration",children:"Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.",link:"link2",img:"img2.jpg"}]


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
  }]

function App() {
  return (

    <>
    <Home />

    <div>
      <Tab arr={array}/>

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
{/* >>>>>>> 038b2d391017860c9a7ac1eab6465ae7acc1f671 */}
    </div>
    <Footer/>
    </div>
    </>
  );
};


export default App;
