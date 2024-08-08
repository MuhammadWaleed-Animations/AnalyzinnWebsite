import React from "react";
import Home from "./pages/Home";
import Tab from "./components/Tab/Tab";
import Footer from "./components/footer/footer";
import WhatSetsUsApart from "./components/WhatSetsUsApart";
import ContactButton from "./components/ContactButton";
// >>>>>>> 00d5da72a3aa5188137e830104b522316a94434c
import HomeTop from "./components/HomeTop";
import BussinessAnalytics from "./pages/BussinessAnalytics";
// import './App.css';
const array = [
  {
    key: "0",
    label: "Business Analytics",
    children:
      "Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision making in all business functions.",
    link: "link0",
    img: "img0.jpeg",
  },
  {
    key: "1",
    label: "Digital Marketing & Analytics",
    children:
      "Are your digital marketing goals driven by data, or just a shot in the dark? Either way, ANALYZINN can help to gain competitive advantage by providing you the right knowledge, at the right time",
    link: "link1",
    img: "img1.jpg",
  },
  {
    key: "2",
    label: "Automation & Integration",
    children:
      "Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.",
    link: "/Automation",
    img: "img2.jpg",
  },
];

const App = () => {
  return (
    <>
    <BussinessAnalytics />
    {/* just for debugging */}
      <HomeTop />

      <div>
        <Tab arr={array} />

        <Home />
        <div
          style={{
            minHeight: "100vh",
            padding: "40px",  
            background: "#f0f2f5",
          }}
        >
          <WhatSetsUsApart />
          <ContactButton />
        </div>
      </div>
    </>
  );
};

export default App;
