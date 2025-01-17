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
    <div className="tab-container" style={{ background: "linear-gradient(135deg, #001f3f, #00274d)", color: "white" }}>
      <h1 style={{ textAlign: "center", color: "white" }}>Our Services</h1>
      <p style={{ textAlign: "center", color: "#dcdcdc" }}>Each Service, tailored for you. From this Click until the End!</p>

      <Tabs
        defaultActiveKey="0"
        onChange={onChange}
        centered
        className="custom-tabs"
        tabBarStyle={{
          backgroundColor: "#001f3f",
          color: "#ffffff",
          borderRadius: "8px",
        }}
      >
        {props.arr.map((item, index) => (
          <TabPane
            tab={
              <span
                className="tab-label"
                style={{ fontSize: 25, fontWeight: "bold", color: "#ffffff" }}
              >
                {item.label}
              </span>
            }
            key={index}
          >
            <div
              className="tab-content-wrapper"
              style={{
                height: 450,
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                border: "2px solid #001f3f",
                borderRadius: "8px",
              }}
            >
              <img
                src={`/images/${item.img}`}
                alt={"img for key: " + item.key}
                style={{
                  border: "2px solid #001f3f",
                  borderRadius: "8px",
                }}
              />
              <div
                className="tab-content"
                style={{
                  backgroundColor: "#f8f9fa",
                  height: 400,
                  textAlign: "unset",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                  borderRadius: "8px",
                }}
              >
                <span style={{ color: "#001f3f" }}>{item.children}</span>
                <div className="button-container">
                  <a href={currLink}>
                    <button
                      className="gradient-button"
                      style={{
                        background: "linear-gradient(135deg, #001f3f, #00274d)",
                        color: "white",
                      }}
                    >
                      Show More Info
                    </button>
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
