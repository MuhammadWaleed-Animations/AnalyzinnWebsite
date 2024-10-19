import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const appDevQuestions = [
  'Need a custom mobile app for your business?',
  'Looking to build an app for both Android and iOS?',
  'Want to provide a seamless mobile user experience?',
  'Looking for expert mobile app development services?',
  'Need to scale and optimize your current mobile app?'
];

const AppDevelopmentQuestions = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontSize: '24px', fontFamily: 'Times New Roman, serif' }}>
            Our App Development Services Answer These Questions:
          </Title>
          <ul style={{ listStyleType: 'none', padding: 0, fontFamily: 'Times New Roman, serif' }}>
            {appDevQuestions.map((question, index) => (
              <li key={index} style={{ textAlign: 'left', margin: '10px 0', fontFamily: 'Times New Roman, serif' }}>
                <Text style={{ color: '#000', fontSize: '18px', fontFamily: 'Times New Roman, serif' }}>
                  {question}
                </Text>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="https://www.branex.ae/blog/wp-content/uploads/2024/04/What-Kind-of-Mobile-App-Development-Questions-Customers-Usually-As.jpg"
            alt="App Development Questions"
            style={{
              width: '90%',
              borderRadius: '8px',
              border: '2px solid #003399',
              objectFit: 'cover',
              height: '220px',
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AppDevelopmentQuestions;
