// Tab.js
import React, { useState } from 'react';
import { Tabs } from 'antd';
import './BATab.css'; // Import your custom CSS file

const { TabPane } = Tabs;

const BATab = (props) => {
  const [currLink, setLink] = useState(props.arr[0].link);

  const onChange = (key) => {
    console.log("onChange: ", key, props.arr[Number(key)].link);
    setLink(props.arr[Number(key)].link);
  };

  return (
    <div className="tab-container">
      <h1 className="services-title">
        Services
        <div className="cyan-dash"></div>
      </h1>
      {/* <p style={{ textAlign: "center" }}>Each Service, tailored for you. From this Click until the End!</p> */}

      <Tabs defaultActiveKey="0" onChange={onChange} centered>
        {props.arr.map((item, index) => {
          const IconComponent = item.component;
          return (
            <TabPane tab={<span className="tab-label">{item.label}</span>} key={index}>
              <div className="tab-content-wrapper">
                <div className="icon-and-text">
                  <IconComponent className="tab-icon" />
                  <div className="tab-content">
                    {item.children}
                  </div>
                </div>
                
              </div>
              <div className="button-container">
                  <a href={currLink}>
                    <button className="gradient-button">Show More Info</button>
                  </a>
                </div>
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default BATab;
