import React from 'react';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const serviceQuestions = [
    'Want to reduce manual work?',
    'Exploring ways on how the applications can talk and integrate?',
    'Need workflow-based automation?',
    'Are you looking for Automation and Integration Services?',
    'Want to get rid of excel sheets and data management?'
  ];

const AutomationIntegration = () => {
  return (
    <div style={{ background: '#f5f5f5', padding: '30px 0px', textAlign: 'center', color: '#000' }}>
      <Row justify="center">
        <Col>
          <Title level={1} style={{ color: '#003399', marginTop: '10px', fontSize: '20px' }}>Our Services will help you Answer these Questions:</Title>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
          {serviceQuestions.map((question, index) => (
         <li key={index} style={{ textAlign: 'left', margin: '10px 0' }}>
          <Text style={{ color: '#000', fontSize: '20px' }}>
            {question}
          </Text>
          </li>
      ))}
    </ul>
        </Col>
      <Col xs={24} md={12}>
        <img
        src="https://media.istockphoto.com/id/1399794091/photo/automation-concept-innovation-improving-productivity-solutions-for-your-business.webp?b=1&s=170667a&w=0&k=20&c=soEzE4i1mLgk-BhtBpchPYyFQztPCdOTjtswki2vhYs="
        alt="Consulting Image"
        style={{
          width: '80%',
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
