import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

const { Title, Text } = Typography;

const AutomationIntegration = () => {
  return (
    <div style={{ background: '#1A1A1A', padding: '50px 20px', textAlign: 'center', color: '#fff' }}>
      <Row justify="center">
        <Col>
          <Text strong style={{ fontSize: '16px', textTransform: 'uppercase', color: '#fff' }}>Explore</Text>
          <Title level={1} style={{ color: '#fff', marginTop: '10px' }}>Automation & Integration</Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#fff' }}>
            Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.
          </Text>
          <Button type="primary" size="large" style={{ marginTop: '0px' }}>Free Consultation Today</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AutomationIntegration;
