import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';

const { Text } = Typography;
const { Content } = Layout;

const appDevServices = [
  {
    title: 'Native App Development',
    description: 'Developing high-performance apps tailored for Android and iOS with native languages and frameworks.',
    image: 'https://media.istockphoto.com/id/1193278024/vector/application-of-smartphone-with-business-graph-and-analytics-data-on-isometric-mobile-phone.jpg?s=612x612&w=0&k=20&c=cV3zqN7LAi6_qAqW45_vZMg7HVRSt4_2NV-SRJ-FK04='
  },
  {
    title: 'Cross-Platform Development',
    description: 'Building applications that work seamlessly on both Android and iOS using frameworks like Flutter and React Native.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlPj-GYEga3P1eX5vt_9Z2JpRJt5Yk7u8QIg&s'
  },
  {
    title: 'App Optimization & Maintenance',
    description: 'Ensuring your app runs smoothly with regular updates, performance enhancements, and issue resolution.',
    image: 'https://i.pinimg.com/736x/55/3d/db/553ddbae1d1cce8134c601d1e9fc3e32.jpg'
  },
  {
    title: 'UI/UX Design for Mobile Apps',
    description: 'Crafting intuitive and visually appealing user interfaces that enhance user engagement and app usability.',
    image: 'https://img.freepik.com/premium-photo/design-mobile-application-ui-ux-set-gui-screens-with-login-password-input_1197797-181281.jpg'
  },
  {
    title: 'App Store Deployment',
    description: 'Handling the end-to-end process of deploying your apps to the Apple App Store and Google Play Store.',
    image: 'https://www.shutterstock.com/image-vector/3d-vector-illustration-web-page-600nw-2212802971.jpg'
  }
];

const OurAppDevelopmentServices = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '60px', background: '#fff' }}>
        <Row gutter={[16, 16]} justify="center">
          {appDevServices.map((service, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{ height: '100%', background: '#f5f5f5', fontFamily: 'Times New Roman, serif' }}
                cover={
                  <div style={{ display: 'flex', justifyContent: 'center', fontFamily: 'Times New Roman, serif' }}>
                    <img alt={service.title} src={service.image} style={{ width: '100%', maxWidth: '300px' }} />
                  </div>
                }
              >
                <Card.Meta
                  title={<span style={{ color: '#003399', fontSize: '22px', fontFamily: 'Times New Roman, serif' }}>{service.title}</span>}
                  description={<Text style={{ color: '#333', fontSize: '16px', fontFamily: 'Times New Roman, serif' }}>{service.description}</Text>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default OurAppDevelopmentServices;
