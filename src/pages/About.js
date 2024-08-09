import React from 'react';
import { Row, Col } from 'antd';
import HeaderSection from '../components/Title';
import ContentSection from '../components/ContentSection';
import WhyChooseUs from '../components/WhyChooseUs';
import TestimonialSlider from '../components/TestimonialSlider';

const MoreInfo = () => {
  return (
    <div style={{ minHeight: '100vh', background: '#fff' }}>
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <HeaderSection />
      </Col>
      <Col span={24}>
        <ContentSection />
      </Col>
      <Col span={24}>
        <WhyChooseUs />
      </Col>
      <Col span={24}>
        <TestimonialSlider />
      </Col>
    </Row>
  </div>
  );
};

export default MoreInfo;
