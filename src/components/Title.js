import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const HeaderSection = () => {
  return (
    <div style={{ textAlign: 'center', background: '#003399', padding: '50px 0' }}>
      <Title level={1} style={{ color: '#fff', fontSize: '54px',fontFamily: 'Times New Roman, serif' }}>About</Title>
      <div style={{ borderTop: '2px solid #fff', width: '50px', margin: '10px auto' }} />
    </div>
  );
};

export default HeaderSection;
