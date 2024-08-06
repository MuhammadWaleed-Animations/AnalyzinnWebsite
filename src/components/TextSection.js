import React from 'react';
import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const TextSection = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/About');
  };

  return (
    <div style={{ padding: '20px 40px', background: '#f0f2f5' , textAlign: 'center' }}>
      <Title level={1}>Why You Need to Invest in Data Today.</Title>
      <Paragraph>
        There’s no denying that data has become vital for us in our everyday lives. Our Amazon and Google know our preferences, our smart home devices have adapted to our everyday lives. The World of Social Media itself produces enough data to help customize our lives. So why shouldn't you use data, and scale your business exponentially!
      </Paragraph>
      <Button type="primary" onClick={handleLearnMoreClick}>Learn More</Button>
    </div>
  );
};

export default TextSection;
