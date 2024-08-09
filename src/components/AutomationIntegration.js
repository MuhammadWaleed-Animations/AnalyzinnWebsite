import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const AutomationIntegration = () => {
  return (
    <div style={{ background: '#fff', padding: '50px 0', textAlign: 'center', color: '#000' }}>
      <Row justify="center">
        <Col>
          <Title level={1} style={{ color: '#003399', marginTop: '10px' }}>Service Description</Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000',fontSize: '22px' }}>
            Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default AutomationIntegration;
