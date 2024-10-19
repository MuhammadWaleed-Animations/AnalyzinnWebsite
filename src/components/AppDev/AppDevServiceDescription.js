import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const AppDevelopmentIntegration = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontFamily: 'Times New Roman, serif' }}>
            App Development Services
          </Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '20px', fontFamily: 'Times New Roman, serif' }}>
            We offer cutting-edge mobile app development services for Android and iOS. Our team specializes in delivering high-performance and scalable applications that cater to a wide range of business needs.
          </Text>
        </Col>
        <Col xs={24} md={12}>
          <img
            src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149051191.jpg"
            alt="App Development Image"
            style={{
              width: '90%',
              borderRadius: '8px',
              border: '2px solid #003399',
              objectFit: 'cover',
              height: '300px', 
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AppDevelopmentIntegration;
