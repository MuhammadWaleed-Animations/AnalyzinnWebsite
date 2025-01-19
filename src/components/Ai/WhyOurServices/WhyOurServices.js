import React from 'react';
import { Row, Col, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './WhyOurServices.css'; // Import your custom CSS file

const WhyOurServices = () => {
  const benefits = [
    "Automate repetitive tasks to save time and increase productivity.",
    "Enhance decision-making with data-driven insights and predictive analytics.",
    "Deliver personalized customer experiences to boost satisfaction and loyalty.",
    "Identify market trends and opportunities faster with advanced data analysis.",
    "Optimize operations and reduce costs with intelligent process automation.",
  ];
  

  return (
    <div className="why-our-services">
      <Row gutter={[16, 16]}>
        <Col span={24} className="section-header">
          <h1>We help you gain a competitive advantage, so you can:</h1>
        </Col>
        <Col span={24}>
          <List
            dataSource={benefits}
            renderItem={item => (
              <List.Item className="custom-list-item">
                <CheckCircleOutlined className="custom-icon" /> {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </div>
  );
};

export default WhyOurServices;
