import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import CountUp from 'react-countup';
import './css/TextAndStats.css'

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
    <div className = 'text-container' style={{ padding: '20px 40px', background: '#f0f2f5' }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} md={12}>
          <div style={{ padding: '20px', background: '#f0f2f5', textAlign: 'center' }}>
            <Title level={0}>Why You Need to Invest in Data Today.</Title>
            <Paragraph style={{fontSize: "20px"}}>
            Amazon and Google know our preferences, and smart home devices adapt to our lives. Social media generates data that customizes our experiences. So why not use data to scale your business exponentially!
            </Paragraph>
            <Button type="primary" className= "gradient-btn" onClick={handleLearnMoreClick}>Learn More</Button>
          </div>
        </Col>

       
        <Col xs={24} md={12}>
          <div className = 'stats-container' style={{ padding: '20px', background: '#002766', color: '#fff' }}>
            <Title level={4} style={{ color: '#fff', fontSize: '24px', textAlign: 'center' }}>
              LET THE NUMBERS TALK
            </Title>
            <Row gutter={[16, 16]} justify="center">
              {stats.map((stat, index) => (
                <Col key={index} xs={24} sm={12} md={12} lg={12}>
                  <div style={{ textAlign: 'center' }}>
                    <Title level={1} style={{ color: '#fff', margin: 0, fontSize: '48px' }}>
                      <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                    </Title>
                    <Title level={5} style={{ color: '#fff', fontSize: '16px' }}>
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
