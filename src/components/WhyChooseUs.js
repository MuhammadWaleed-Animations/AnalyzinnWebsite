import React from 'react';
import { Row, Col, Typography } from 'antd';
import services from '../data/services';

const { Title, Paragraph } = Typography;

const WhyChooseUs = () => {
  return (
    <div style={{ padding: '30px 70px', background: '#f0f2f5' }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <img
            src="https://analyzinn.com/wp-content/uploads/elementor/thumbs/consulting-jobs-1024x512-b-1-1-ptovez4o4d1lueiwanas8iwqqtg7qtxfldara4vcgg.jpeg"
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
        <Col xs={24} md={12} style={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <Title level={2} style={{ fontSize: '32px', color: '#003399' }}>Why Choose Us?</Title>
            <Paragraph style={{ fontSize: '20px', color: '#000' }}>
              We partner with our clients, take full ownership of their business needs, and devise tailored solutions for their unique requirements. Our solutions are result-oriented, technology-driven, with end-to-end implementations including Digital Marketing, BI frameworks, and strategic consultancy.
            </Paragraph>
            <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
              {services.map((service, index) => (
                <li key={index} style={{ marginBottom: '10px', position: 'relative', paddingLeft: '25px', fontSize: '20px', color: '#003399' }}>
                  <span style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#003399',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: '0',
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }} />
                  {service.name}
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChooseUs;
