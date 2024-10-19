import React from "react";
import "./WebDev.css";
import WDI from "./images/web-dev-img.jpg";
import FEI from "./images/fr-end.jpeg";
import BEI from "./images/bk-end.jpg";
import WDI2 from "./images/web-dev-img2.jpg";
import API from "./images/api-img.jpg";
import FSI from "./images/fs-img.jpg";
import WMI from "./images/web-man.jpeg";
import ECI from "./images/ecommerce-platforms.jpeg";
import { Typography, Row, Col, Button } from "antd";

const { Title, Text } = Typography;

const WebDevePage = () => {
  return (
    <div id="#web-development">
      <div
        style={{
          background: "#003399",
          padding: "50px 0",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <Row justify="center">
          <Col>
            <Title
              level={1}
              style={{
                color: "#fff",
                marginTop: "10px",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Web Development Services
            </Title>
            <Text
              style={{
                display: "block",
                marginBottom: "20px",
                maxWidth: "600px",
                margin: "20px auto",
                color: "#fff",
                fontSize: "20px",
                fontFamily: "Times New Roman, serif",
              }}
            >
              We build scalable, high-performing web applications that cater to
              the evolving needs of modern businesses with cutting-edge
              technologies and design principles.
            </Text>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#000",
                borderColor: "#003399",
                marginTop: "0px",
                fontFamily: "Times New Roman, serif",
              }}
            >
              Free Consultation Today
            </Button>
          </Col>
        </Row>
      </div>

      <div className="tabs-container">
        <div className="new-section" id="our-services">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <Title
                level={1}
                style={{
                  marginTop: "10px",
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Services Provided
              </Title>
              <p
                className="italic-text"
                style={{
                  fontFamily: "Times New Roman, serif",
                }}
              >
                Our web development services empower you to:
              </p>
              <ul>
                <li>- Build responsive, user-friendly websites</li>
                <li>- Optimize for performance and scalability</li>
                <li>- Ensure seamless user experience across devices</li>
                <li>- Implement security best practices</li>
                <li>
                  - Integrate advanced features like e-commerce, APIs, and more
                </li>
              </ul>
            </Col>
            <Col xs={24} md={12}>
              <img
                src={WDI}
                alt="Web Development Services"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </Col>
          </Row>
        </div>

        <div className="tabs-wrapper">
          {[
            {
              img: FEI,
              title: "Frontend Development",
              description:
                "Create visually stunning and interactive user interfaces with modern frameworks like React and Angular.",
            },
            {
              img: BEI,
              title: "Backend Development",
              description:
                "Develop robust server-side logic and architecture using technologies like Node.js, Express, and databases.",
            },
            {
              img: FSI,
              title: "Full-stack Development",
              description:
                "Get end-to-end development solutions from frontend to backend, ensuring seamless integration.",
            },
            {
              img: ECI,
              title: "E-Commerce Development",
              description:
                "Build secure, scalable online stores with payment gateway integrations and user-friendly designs.",
            },
            {
              img: API,
              title: "API Integration",
              description:
                "Integrate third-party services and APIs seamlessly into your applications to extend functionality.",
            },
            {
              img: WMI,
              title: "Web Maintenance",
              description:
                "Ensure your web applications remain secure, updated, and running smoothly with ongoing maintenance.",
            },
          ].map((tab, index) => (
            <div className="tab-pane" key={index}>
              <img src={tab.img} alt={tab.title} />
              <div className="tab-content">
                <h3>{tab.title}</h3>
                <p>{tab.description}</p>
              </div>
            </div>
          ))}

          <div className="additional-section">
            <Row
              className="align-items-center"
              gutter={[24, 24]}
              justify="center"
            >
              <Col>
                <img
                  src={WDI2}
                  alt="Web Development"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Col>
              <Col xs={24} md={14} lg={10}>
                <h2>How Can You Benefit from Our Web Development Services?</h2>
                <p>Our web development services include solutions like:</p>
                <ul>
                  <li>Custom Web Application Development</li>
                  <li>Content Management Systems</li>
                  <li>E-commerce Platforms</li>
                  <li>API and Third-Party Integration</li>
                </ul>
                <p>
                  These services will help you streamline operations, improve
                  user engagement, and enhance business performance.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevePage;
