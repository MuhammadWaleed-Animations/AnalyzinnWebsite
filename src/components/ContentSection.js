import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const ContentSection = () => {
  return (
    <div style={{ padding: '40px', background: '#fff' }}>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Title level={3} style={{ fontSize: '56px' }}> 
            Consulting Firm Powered by Analytics
          </Title>
        </Col>
        <Col span={12}>
          <Paragraph style={{ fontSize: '20px', fontStyle: 'italic' }}> 
            We support leaders to EVOLVE their organizations using our proven analytics consulting services.
          </Paragraph>
          <Paragraph style={{ fontSize: '18px' }}> 
            We’re a growing group of IT professionals providing businesses worldwide with solutions and services of Data Management, Reporting & Visualization, Digital marketing, Automations & Integrations. ANALYZINN will provide you with a steady stream of actionable insights to fuel intelligent technologies; visibility to boost relevance and revenue. And accelerate innovation!
          </Paragraph>
        </Col>
      </Row>
      <hr style={{ border: 'none', borderTop: '2px solid #000', marginTop: '40px', marginBottom: '40px' }} />
    </div>
  );
};

export default ContentSection;
