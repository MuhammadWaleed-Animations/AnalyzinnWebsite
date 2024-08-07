import React from "react";
import { Row, Col } from "antd";
import TextSection from "../components/TextSection";
import StatisticsSection from "../components/StatisticsSection";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", padding: "40px", background: "#f0f2f5" }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <TextSection />
        </Col>
        <Col span={24}>
          <StatisticsSection />
        </Col>
        <Col span={24}>
          <TestimonialSlider />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
