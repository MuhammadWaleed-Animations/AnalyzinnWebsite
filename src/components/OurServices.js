import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';
import CRM from '../Images/CRM.jpg';
import ERP from '../Images/ERP.jpg';

const { Text } = Typography;
const { Content } = Layout;

const services = [
  {
    title: 'Accounting System Integration',
    description: 'We offer a one-stop solution for accounting, auditing, and taxation by integrating SAP and Xero with CRM systems.',
    image: 'https://accountingseed.com/wp-content/uploads/2019/06/System-Integration.jpg'
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Our Payment Gateway Integration Services simplify online transaction processing with solutions like PayPal.',
    image: 'https://blog.2checkout.com/wp-content/uploads/2020/07/payment-gateway-security-features-1024x799.png'
  },
  {
    title: 'Ecommerce Integration',
    description: 'We complete integration projects across various eCommerce platforms like Magento, Shopify, and WooCommerce, offering a unified experience.',
    image: 'https://www.iqvis.com/wp-content/uploads/2018/05/Ecommerce-user-interface.jpg'
  },
  {
    title: 'CRM System Integrations',
    description: 'Automate your sales processes that you manually perform regularly.',
    image: CRM
  },
  {
    title: 'APIs Automation And Integration',
    description: 'Certified architects develop and execute integration solutions using APIs and standard connections.',
    image: 'https://d1ax5wqehib729.cloudfront.net/wp-content/uploads/2019/01/10055617/API-Testing.jpg'
  },
  {
    title: 'ERP System Integration',
    description: 'We provide scalable solutions for SAP integration with third-party applications and ERP reporting using tools like Power BI and Tableau.',
    image: ERP
  }
];

const OurServices = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content style={{ padding: '60px', background: '#fff' }}>
        <Row gutter={[16, 16]} justify="center">
          {services.map((service, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{ height: '100%', background: '#f5f5f5' }}
                cover={
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img alt={service.title} src={service.image} style={{ width: '100%', maxWidth: '300px' }} />
                  </div>
                }
              >
                <Card.Meta
                  title={<span style={{ color: '#003399', fontSize: '22px' }}>{service.title}</span>}
                  description={<Text style={{ color: '#333', fontSize: '16px' }}>{service.description}</Text>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default OurServices;
