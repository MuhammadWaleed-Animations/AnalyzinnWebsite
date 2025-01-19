import React from 'react';
import { Carousel, Typography, Row, Col } from 'antd';
import './css/TestimonialSlider.css'; 
import testimonials from '../data/testimonials';

const { Title, Text } = Typography;

const TestimonialSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 1100, // Speed of the sliding animation
    autoplaySpeed: 5000, // Time interval for autoplay
    responsive: [
      {
        breakpoint: 768, // Mobile breakpoint
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="testimonial-container">
      <Title level={2} style={{  fontFamily: 'Times New Roman, serif' }} className="testimonial-title">Testimonials</Title>
      <Carousel {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <Row gutter={[16, 16]} align="middle">
              <Col span={24}>
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              </Col>
              <Col span={24} >
                <Text style={{ fontFamily: 'Times New Roman, serif' }} className="testimonial-quote">"{testimonial.quote}"</Text>
                <Title style={{ fontFamily: 'Times New Roman, serif' }} level={4} className="testimonial-name">{testimonial.name}</Title>
                <Text style={{ fontFamily: 'Times New Roman, serif' }} type="secondary" className="testimonial-position">{testimonial.position}</Text>
              </Col>
            </Row>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
