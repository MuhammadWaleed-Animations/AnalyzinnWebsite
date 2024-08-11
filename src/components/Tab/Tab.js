import React, { useState } from 'react';
import { Tabs } from 'antd';
import './Tab.css'; // Import your custom CSS file

const { TabPane } = Tabs;

const Tab = (props) => {
  const [currLink, setLink] = useState(props.arr[0].link);

  const onChange = (key) => {
    console.log("onChange: ", key, props.arr[Number(key)].link);
    setLink(props.arr[Number(key)].link);
  };

  return (
    <div className="tab-container">
      <h1 style={{ textAlign: "center" }}>Our Services</h1>
      <p style={{ textAlign: "center" }}>Each Service, tailored for you. From this Click until the End!</p>

      <Tabs defaultActiveKey="0" onChange={onChange} centered>
        {props.arr.map((item, index) => (
          <TabPane tab={<span style={{ fontSize: 25, fontWeight: "bold" }}>{item.label}</span>} key={index}>
            <div className="tab-content-wrapper" style={{ height: 450, backgroundColor: "white" }}>
              <img src={`/images/${item.img}`} alt={"img for key: " + item.key} />
              <div className="tab-content" style={{ backgroundColor: "white", height: 400, textAlign: "unset" }}>
                <span>{item.children}</span>
                <div className="button-container">
                  <a href={currLink}>
                    <button className="gradient-button">Show More Info</button>
                  </a>
                </div>
              </div>
            </div>
          </TabPane>
        ))}
      </Tabs>
    </div>
  );
};

export default Tab;
