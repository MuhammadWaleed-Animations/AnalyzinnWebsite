import React from "react";
import { Row, Col } from "antd";
import TestimonialSlider from "../components/TestimonialSlider";
import TextAndStats from "../components/TextAndStats";

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", padding: "40px", background: "#f0f2f5" }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <TextAndStats />
        </Col>
        <Col span={24}>
          <TestimonialSlider />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
