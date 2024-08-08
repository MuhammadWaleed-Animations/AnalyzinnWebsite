import React from 'react';
import { Typography, Card, Row, Col } from 'antd';
import CRM from '../Images/CRM.jpg';
import ERP from '../Images/ERP.jpg';

const { Title, Text } = Typography;

const serviceQuestions = [
  'Want to reduce manual work?',
  'Exploring ways on how the applications can talk and integrate?',
  'Need workflow-based automation?',
  'Are you looking for Automation and Integration Services?',
  'Want to get rid of excel sheets and data management?'
];

const services = [
  {
    title: 'Accounting System Integration',
    description: 'We aim to offer our customers a one-stop solution for accounting, auditing, and taxation by using SAP and Xero for integration with CRM systems.',
    image: 'https://accountingseed.com/wp-content/uploads/2019/06/System-Integration.jpg' 
  },
  {
    title: 'Payment Gateway Integration',
    description: 'Our Payment Gateway Integration Services assist in simplifying online transaction processing on your website such as Payment gateway integration for clients, such as Paypal.',
    image: 'https://blog.2checkout.com/wp-content/uploads/2020/07/payment-gateway-security-features-1024x799.png' 
  },
  {
    title: 'Ecommerce Integration',
    description: 'Our ECommerce integration services includes completing integration projects for companies of all sizes and shapes across various eCommerce platforms such as Website connection with eCommerce solutions such as Magento, Shopify, and WooCommerce, ETL integrations and data replication to provide a unified experience, etc.',
    image: 'https://www.iqvis.com/wp-content/uploads/2018/05/Ecommerce-user-interface.jpg' 
  },
  {
    title: 'CRM System Integrations',
    description: 'Automation of your sales processes that you are doing manually on a regular basis.',
    image: CRM
  },
  {
    title: 'Automation And Integration From APIs',
    description: 'Certified architects to develop and execute integration solutions by the Leverage APIs and standard connections.',
    image: 'https://d1ax5wqehib729.cloudfront.net/wp-content/uploads/2019/01/10055617/API-Testing.jpg' 
  },
  {
    title: 'ERP System Integration',
    description: 'Analyzinn provides a scalable solution to the modern connectivity problem such as SAP integration with third-party applications, Using ERP reporting software such as Power BI and Tableau.',
    image: ERP	
  }
];

const OurServices = () => {
  return (
    <div style={{ background: '#A1A1A1', padding: '50px 0' }}>
      <Row justify="center">
        <Col span={24} style={{ textAlign: 'center' }}>
          <Title level={2}>Our Services</Title>
        </Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Card style={{ border: 'none', background: 'transparent' }}>
            <Title level={4}>Our Services will help you Answer these Questions:</Title>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {serviceQuestions.map((question, index) => (
                <li key={index} style={{ textAlign: 'left', margin: '10px 0' }}>
                  <Text>
                    • {question}
                  </Text>
                </li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px' }}>
        {services.map((service, index) => (
          <Col key={index} xs={24} md={12} lg={8}>
            <Card
              cover={<img alt={service.title} src={service.image} />}
              hoverable
              style={{ textAlign: 'center', height: '100%', background: '#A1A1A1', marginLeft: '20px', marginRight: '20px' }}   
            >
              <Card.Meta
                title={service.title}
                description={<Text>{service.description}</Text>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default OurServices;
