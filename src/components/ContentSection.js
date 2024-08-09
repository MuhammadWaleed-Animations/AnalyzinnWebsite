import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ContentSection = () => {
  return (
    <div style={{ padding: '20px', background: '#fff' }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <Title level={1} style={{ fontSize: '50px', color: '#003399' }}>
            Consulting Firm Powered by Analytics
          </Title>
        </Col>
        <Col xs={24} md={12}>
          <Paragraph style={{ fontSize: '22px', fontStyle: 'italic', color: '#000' }}>
            We support leaders to EVOLVE their organizations using our proven analytics consulting services.
          </Paragraph>
          <Paragraph style={{ fontSize: '24px', color: '#000' }}>
            We’re a growing group of IT professionals providing businesses worldwide with solutions and services of Data Management, Reporting & Visualization, Digital marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue. And accelerate innovation!
          </Paragraph>
        </Col>
      </Row>
      <hr style={{ border: 'none', borderTop: '2px solid #003399', marginTop: '20px', marginBottom: '50px' }} />
    </div>
  );
};

export default ContentSection;
