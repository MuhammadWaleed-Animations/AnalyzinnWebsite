import React from 'react';
import { Row, Col, List } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import './WhyOurServices.css'; // Import your custom CSS file

const WhyOurServices = () => {
  const services = [
    'Promote data democratization, making it accessible for all.',
    'Increase efficiency in decision-making and data processes.',
    'Identify potential losses, security breaches, crises, and opportunities quickly.',
    'Respond faster to changes in data and important business metrics.',
  ];

  const benefits = [
    'Understand your customers & offer superior customer experience',
    'Identify opportunities and threats & market better',
    'Respond to business needs proactively',
    'Innovate faster with relevant data',
    'Gain competitive advantage & make informed and optimized decisions',
  ];

  return (
    <div className="why-our-services">
      <Row gutter={[16, 16]}>
        <Col span={12} className="section-evoke">
          <h2>EVOLVE Through Data Comprehension</h2>
          <p>
            Truly data-driven organizations gain a competitive advantage over their competitors who view data using traditional methods. Enable your organization to view data differently and unlock the true potential of your business. Use data to empower decision-making in all business functions.
          </p>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} className="section-header">
          <h1>Why You Need Our Services?</h1>
        </Col>
        <Col span={12}>
          <img src="/images/services.avif" alt="Services Image" className="responsive-image" />
        </Col>
        <Col span={12}>
          <List
            dataSource={services}
            renderItem={item => (
              <List.Item className="custom-list-item">
                <CheckCircleOutlined className="custom-icon" /> {item}
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={24} className="section-header">
          <h1>ANALYZINN can help you gain a competitive advantage by providing the right knowledge at the right time, so you can:</h1>
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
