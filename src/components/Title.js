import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const HeaderSection = () => {
  return (
    <div style={{ textAlign: 'center', background: '#000', padding: '50px 0' }}>
      <Title level={1} style={{ color: '#fff' }}>About</Title>
      <div style={{ borderTop: '2px solid #1890ff', width: '50px', margin: '10px auto' }} />
    </div>
  );
};

export default HeaderSection;
