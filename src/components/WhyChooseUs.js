import React from 'react';
import { Row, Col, Typography, List } from 'antd';
import services from '../data/services';

const { Title, Paragraph } = Typography;

const WhyChooseUs = () => {
    return (
      <div style={{ padding: '40px', background: '#fff' }}> 
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} md={12}>
            <img 
              src="https://analyzinn.com/wp-content/uploads/elementor/thumbs/consulting-jobs-1024x512-b-1-1-ptovez4o4d1lueiwanas8iwqqtg7qtxfldara4vcgg.jpeg"  
              alt="Consulting" 
              style={{ width: '100%', borderRadius: '8px' }} 
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={2} style={{ fontSize: '32px' }}>Why Choose Us?</Title>
            <Paragraph style={{ fontSize: '18px' }}>
              We partner with our clients, take full ownership of their business needs and devise tailored solutions for their unique requirements. Our solutions are result-oriented, technology driven, with end-to-end implementations including Digital Marketing, BI frameworks, and strategic consultancy.
            </Paragraph>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '30px' , marginBottom: '30px' }}>
          {services.map((service, index) => (
            <Col xs={24} md={8} key={index}>
              <List
                dataSource={[service]}
                renderItem={item => (
                  <List.Item style={{ margin: '-20px 0' }}>
                    <Typography.Text strong style={{ fontSize: '16px' }}>{item.name}</Typography.Text> 
                  </List.Item>
                )}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  };

export default WhyChooseUs;



