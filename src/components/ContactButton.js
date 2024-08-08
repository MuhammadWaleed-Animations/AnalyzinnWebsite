// src/ContactButton.js
import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import './css/ContactButton.css'; // Import the CSS file

const ContactButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        shape="circle"
        icon={<MailOutlined />}
        size="large"
        className="contact-button"
        onClick={showModal}
      />
      <Modal
        title="Contact Us"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log('Form Values:', values);
            handleOk();
          }}
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
            rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Please enter a valid email' }]}
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
      </Modal>
    </>
  );
};

export default ContactButton;
