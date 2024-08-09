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
    title: 'APIs Automation And Integration',
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
    <div style={{ background: '#fff', padding: '40px' }}>
      <Row justify="center">
        <Col>
          <Title level={1} style={{ color: '#003399', marginTop: '10px' }}>Service Description</Title>
          <Text style={{ display: 'block', marginBottom: '20px', maxWidth: '600px', margin: '20px auto', color: '#000', fontSize: '22px' }}>
            Analyzinn Solutions offer end-to-end Automation and Integration Services to help you embrace digital transformation and build a cost-efficient system. We are experienced in leveraging APIs and the Integration of standard applications. We help you reduce manual efforts.
          </Text>
        </Col>
        <Col span={12} style={{ textAlign: 'center' }}>
          <Card style={{ border: 'none', background: 'transparent' }}>
            <Title level={4} style={{ color: '#003399', fontSize: '24px' }}>Our Services will help you Answer these Questions:</Title>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {serviceQuestions.map((question, index) => (
                <li key={index} style={{ textAlign: 'left', margin: '10px 0' }}>
                  <Text style={{ color: '#000', fontSize: '20px' }}>
                    • {question}
                  </Text>
                </li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
      <div style={{ padding: '50px' }}>
        <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px' }}>
          {services.map((service, index) => (
            <Col key={index} xs={24} md={12} lg={8}>
              <Card
                hoverable
                style={{ textAlign: 'left', height: '100%', background: '#f5f5f5' }}
                cover={<div style={{ display: 'flex', justifyContent: 'center' }}><img alt={service.title} src={service.image} style={{ width: '100%', maxWidth: '300px' }} /></div>}
              >
                <Card.Meta
                  title={<span style={{ color: '#003399', fontSize: '22px' }}>{service.title}</span>}
                  description={<span style={{ color: '#fff', fontSize: '24px' }}><Text>{service.description}</Text></span>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default OurServices;
