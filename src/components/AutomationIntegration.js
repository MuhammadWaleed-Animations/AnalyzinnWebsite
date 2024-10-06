import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const AutomationIntegration = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={12}>
          <Title level={1} style={{ color: '#003399', marginTop: '10px',fontFamily: 'Times New Roman, serif' }}>Service Description</Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000',fontSize: '20px',fontFamily: 'Times New Roman, serif' }}>
          Analyzinn Solutions offers end-to-end Automation and Integration services, leveraging APIs and standard applications to drive digital transformation and reduce manual efforts, creating cost-efficient systems.
          </Text>
        </Col>
      <Col xs={24} md={12}>
        <img
        src="https://media.istockphoto.com/id/1527651823/photo/document-checking-quality-and-approve-management-with-quality-assurance-standardization.webp?b=1&s=170667a&w=0&k=20&c=863PO2-kQQf38QETNrWs4BdcnOoEQJcczERXcPMxZtw="
        alt="Consulting Image"
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

export default AutomationIntegration;
