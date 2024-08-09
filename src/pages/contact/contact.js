import React from 'react';
import { Form, Input, Button, Row, Col, Card } from 'antd';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './contact.css';

const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    // Here you would typically handle form submission to your backend
  };

  return (
    <div className="contact-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Card className="contact-card">
            <h2>Contact Us</h2>
            <Form
              name="contact"
              layout="vertical"
              onFinish={onFinish}
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, message: 'Please enter your email' }]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <Input.TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card className="contact-info-card">
            <h2>Get in Touch</h2>
            <p><PhoneOutlined /> +1 234 567 890</p>
            <p><MailOutlined /> contact@example.com</p>
            <p><EnvironmentOutlined /> 1234 Street Name, City, Country</p>
            <div className="map-placeholder">
              <p>Map Placeholder</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.835358733731!2d-123.1162266849516!3d37.774929779759026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e2c06d5b1b7%3A0x7e0dd34e4994b687!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615559575841!5m2!1sen!2sus" 
                width="100%" 
                height="200" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy"
                ></iframe>

            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContactPage;

