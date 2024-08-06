import React from 'react';
import { Carousel, Typography, Row, Col } from 'antd';
import './TestimonialSlider.css'; 
import testimonials from '../data/testimonials';

const { Title, Text } = Typography;

const TestimonialSlider = () => {
  return (
    <div style={{ padding: '40px', background: '#fff' }}>
      <Title level={2}>Testimonials</Title>
      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <Row gutter={[16, 16]} align="middle">
              <Col span={4}>
                <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', borderRadius: '50%' }} />
              </Col>
              <Col span={20}>
                <Text>"{testimonial.quote}"</Text>
                <Title level={4}>{testimonial.name}</Title>
                <Text type="secondary">{testimonial.position}</Text>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
