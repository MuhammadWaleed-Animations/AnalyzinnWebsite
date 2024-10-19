import React from 'react';
import { Typography, Row, Col, Button } from 'antd';

const { Title, Text } = Typography;

const HeaderSection = () => {
  return (
    <div style={{ background: '#003399', padding: '50px 0', textAlign: 'center', color: '#fff' }}>
      <Row justify="center">
        <Col>
        
          <Title level={1} style={{ color: '#fff', marginTop: '10px',fontFamily: 'Times New Roman, serif' }}>Automation & Integration</Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#fff',fontSize: '22px',fontFamily: 'Times New Roman, serif' }}>
          Analyzinn Solutions drives automation and integration to reduce manual efforts.
          </Text>
          <Button type="primary" size="large" style={{ backgroundColor: '#000', borderColor: '#003399', marginTop: '0px',fontFamily: 'Times New Roman, serif' }}>
            Free Consultation Today
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HeaderSection;
