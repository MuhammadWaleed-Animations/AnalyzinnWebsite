import React from "react";
import "./css/DigitalMarketing.css";
import { Typography, Row, Col, Button } from "antd";

const { Title, Text } = Typography;

const MarketingTabs = () => {
  return (
    <div id="#digital-marketing">
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
              Digital Marketing Analytics
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
              We support leaders to evolve their organizations using our proven
              Digital marketing analyzinn services – helping you achieve a
              competitive advantage with actionable insights.
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
                ANALYZINN can help to gain competitive advantage by providing
                you the right knowledge, at the right time, so you can:
              </p>
              <ul>
                <li>
                  - Understand your customers & offer Superior Customer
                  Experience
                </li>
                <li>- Identify opportunities and threats & Market Better</li>
                <li>- Respond to business needs proactively</li>
                <li>- Innovate faster with relevant data</li>
                <li>
                  - Gain competitive advantage & make informed and optimized
                  decisions
                </li>
              </ul>
            </Col>
            <Col xs={24} md={12}>
              <img
                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_is_digital_marketing.jpg"
                alt="Services img"
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
              img: "https://infinitemediaresources.com/wp-content/uploads/2020/03/what-is-website-marketing.png",
              title: "Website Marketing",
              description:
                "Optimize and promote your website to attract visitors and convert them into customers.",
            },
            {
              img: "https://fironmarketing.com/wp-content/uploads/2023/03/seo.jpeg",
              title: "SEO",
              description:
                "Improve your website's ranking on search engines to increase organic traffic.",
            },
            {
              img: "https://lobsterdigitalmarketing.co.uk/wp-content/uploads/2022/07/AdobeStock_389328016_Editorial_Use_Only-scaled.jpeg",
              title: "Social Media Marketing",
              description:
                "Promote your brand on social media platforms to engage with your audience.",
            },
            {
              img: "https://www.launch-marketing.com/wp-content/uploads/2023/06/GettyImages-1251358514-scaled.jpg",
              title: "PPC Marketing",
              description:
                "Run paid ads to quickly reach potential customers and generate leads.",
            },
            {
              img: "https://mikekhorev.com/wp-content/uploads/2019/12/content-marketing.jpg",
              title: "Content Marketing",
              description:
                "Create and share valuable content to attract and engage your audience.",
            },
            {
              img: "https://www.sur.co.uk/wp-content/uploads/2023/03/Is-Email-Marketing-Still-Effective.png",
              title: "Email Marketing",
              description:
                "Send targeted emails to nurture leads and build customer relationships.",
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
                  src="https://www.creativeitinstitute.com/images/course/course_1662724358.jpg"
                  alt="Services img"
                  style={{
                    width: "100%",
                    maxWidth: "600px",
                    display: "block",
                    margin: "0 auto",
                  }}
                />
              </Col>
              <Col xs={24} md={14} lg={10}>
                <h2>How can you access our Digital Marketing Strategies?</h2>
                <p>
                  Analyzinn will provide you the additional stack for accessing
                  our Digital Marketing Strategies:
                </p>
                <ul>
                  <li>Marketing Analytics Dashboards</li>
                  <li>Revenue Dashboards</li>
                  <li>Customer Level Dashboards</li>
                  <li>Campaign Level Dashboards</li>
                </ul>
                <p>
                  These dashboards will help you to access your leads, revenue,
                  customers, campaigns, etc.
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingTabs;
