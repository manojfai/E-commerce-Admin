import React from 'react';
import { Card, Input, Button } from 'antd';

const { TextArea } = Input;

const ContactCustomerCard = () => {
  const handelSend = e => {
    console.log('message is sent to customer');
  };

  const onChangeTextarea = e => {
    console.log(e.target.value);
  };

  return (
    <Card
      style={{
        width: '752px',
        height: '302px',
        backgroundColor: 'FFFFFF',
        boxShadow: '0px 0px 8px 0px rgba(230, 236, 235, 1)'
      }}
      bodyStyle={{ padding: 20 }}>
      <div style={{ color: '#000', fontSize: '16px', fontWeight: 600, lineHeight: '22px' }}>Contact Customer</div>
      <p style={{ marginBottom: 0, fontWeight: 400, size: '14px', lineHeight: '20px', paddingBottom: 5 }}>
        Message to Customer
      </p>
      <TextArea
        maxLength={100}
        onChange={onChangeTextarea}
        style={{
          height: 120,
          resize: 'none'
        }}
      />
      <div>
        <Button
          style={{
            width: '9.3%',
            height: '36px',
            color: '#FFFFFF',
            backgroundColor: '#1E2640',
            // border: '1px solid var(--border-shadow-border-shadow, #AEB4B9)',
            borderRadius: '4px',
            boxShadow: '0px -1px 0px 0px rgba(0, 0, 0, 0.20) inset, 0px 1px 0px 0px rgba(0, 0, 0, 0.08)',
            fontWeight: 600,
            fontSize: '16px',
            lineHeight: '20px',
            marginTop: 20
          }}
          onChange={handelSend}>
          {' '}
          Send
        </Button>
      </div>
    </Card>
  );
};

export default ContactCustomerCard;
