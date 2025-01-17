import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import './css/TextAndStats.css';

const { Title, Paragraph } = Typography;

const stats = [
  { prefix: '', suffix: '+', value: 5, description: 'Years in Business' },
  { prefix: '$', suffix: 'B', value: 274, description: 'Big Data Analytics Market 2023' },
  { prefix: '', suffix: '%', value: 95, description: 'Blame Unstructured Data as a Problem.' },
  { prefix: '', suffix: '%', value: 70, description: "Of The World's Data is User Generated" },
];

const AnimatedNumber = ({ value, prefix, suffix }) => (
  <span>
    {prefix}
    <CountUp end={value} duration={2} separator="," />
    {suffix}
  </span>
);

const TextAndStats = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/About');
  };

  return (
    <div className="text-container_Text">
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <div className="text-content_Text">
            <Title level={2} className="text-title_Text">
              Why You Need to Invest in Data Today.
            </Title>
            <Paragraph className="text-paragraph_Text">
              Amazon and Google know our preferences, and smart home devices adapt to our lives. Social media generates data that customizes our experiences. So why not use data to scale your business exponentially!
            </Paragraph>
            <Button type="primary" className="gradient-btn_Text" onClick={handleLearnMoreClick}>
              Learn More
            </Button>
          </div>
        </Col>

        <Col xs={24} md={12}>
          <div className="stats-container_Text">
            <Title level={4} className="stats-title_Text">
              LET THE NUMBERS TALK
            </Title>
            <Row gutter={[16, 16]} justify="center">
              {stats.map((stat, index) => (
                <Col key={index} xs={24} sm={12} md={12} lg={12}>
                  <div className="stats-item_Text">
                    <Title level={1} className="stats-value_Text">
                      <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </Title>
                    <Title level={5} className="stats-description_Text">
                      {stat.description}
                    </Title>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TextAndStats;
