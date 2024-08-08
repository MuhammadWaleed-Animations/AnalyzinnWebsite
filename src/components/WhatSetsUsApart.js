import React from 'react';
import { Row, Col, Typography } from 'antd';
import { ClockCircleOutlined, MessageOutlined, TeamOutlined, RobotOutlined, LaptopOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import './css/WhatSetsUsApart.css';

const { Title, Text } = Typography;

const services = [
  { title: 'Perfection Anytime', icon: <ClockCircleOutlined />, description: "We never compromise on anything less than perfection. You will find us as one of the industry's Perfectionists." },
  { title: '24/7 Communication', icon: <MessageOutlined />, description: 'Our Global Team ensures we are available to communicate anytime. Regardless of Day & Time!' },
  { title: 'Our Team', icon: <TeamOutlined  />, description: 'With our Employees working in over 5 Countries, we are never asleep!' },
  { title: 'Fine Automation', icon: <RobotOutlined  />, description: 'We Understand the importance of Automation, and have deployed several Automation mechanisms to ensure the most efficient use of Energy.' },
  { title: 'Advance Technology', icon: <LaptopOutlined />, description: 'We Understand that with every passing day, technology advances. We Make the most of the latest Tools and Software to Give you the best Result!' },
  { title: 'Licensed Staff', icon: <SafetyCertificateOutlined />, description: 'Our Team Regularly Undergoes Training & Certifications to ensure we bring you our Best!' },
];

const WhatSetsUsApart = () => (
  <div className="container">
    <Title className="title">
    Why Choose Analyzinn Careers?
    </Title>
    <Row gutter={[0, 24]} justify="center">
      {services.map((service, index) => (
        <Col key={index} xs={24} sm={12} md={12} lg={12} className="service-col">
          <div className="service-card">
            <div className="icon">{service.icon}</div>
            <div className="service-content">
              <Title className="service-title">{service.title}</Title>
              <Text className="service-description">{service.description}</Text>
            </div>
            <div className="progress-line"></div>
          </div>
        </Col>
      ))}
    </Row>
  </div>
);

export default WhatSetsUsApart;
