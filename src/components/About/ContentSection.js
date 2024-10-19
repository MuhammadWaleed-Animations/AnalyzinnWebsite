import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ContentSection = () => {
  return (
    <div style={{ padding: '40px 70px', background: '#fff' }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <Title level={1} style={{ fontSize: '28px', color: '#003399',fontFamily: 'Times New Roman, serif' }}>
            Consulting Firm Powered by Analytics
          </Title>
          <Paragraph style={{ fontSize: '20px', fontStyle: 'italic', color: '#000',fontFamily: 'Times New Roman, serif' }}>
            We support leaders to EVOLVE their organizations using our proven analytics consulting services.
          </Paragraph>
          <Paragraph style={{ fontSize: '18px', color: '#000',fontFamily: 'Times New Roman, serif' }}>
          ANALYZINN provides businesses with IT solutions in Data Management, Reporting, Digital Marketing, and Automation. We deliver insights to drive technology, boost visibility, and accelerate innovation.
          </Paragraph>
        </Col>
        <Col xs={24} md={12}>
        <img
        src="https://plus.unsplash.com/premium_photo-1661286661337-6e34542e6cf4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3VsdGluZyUyMGZpcm1zJTIwcG93ZXJlZCUyMGJ5JTIwYW5hbHl0aWNzfGVufDB8fDB8fHww"
        alt="Consulting Image"
        style={{
          width: '90%',
          borderRadius: '8px',
          border: '2px solid #003399',
          objectFit: 'cover',
          height: '350px', 
        }}
        />
          
        </Col>
      </Row>
      <hr style={{ border: 'none', borderTop: '2px solid #003399', marginTop: '20px', marginBottom: '50px' }} />
    </div>
  );
};

export default ContentSection;
