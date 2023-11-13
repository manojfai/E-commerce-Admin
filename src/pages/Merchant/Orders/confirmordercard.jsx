import React from 'react';
import { Card, Space, Button } from 'antd';

const ConfirmOrderButtonCard = () => {
  const handelConfirmOrder = e => {
    console.log('order confirmed');
  };

  const handelCancelOrder = e => {
    console.log('order Canceled');
  };

  const handelModifyOrder = e => {
    console.log('order Modified');
  };

  return (
    <Card
      style={{
        width: '324px',
        height: '140px',
        backgroundColor: 'FFFFFF',
        boxShadow: '0px 0px 8px 0px rgba(230, 236, 235, 1)'
      }}
      bodyStyle={{ padding: 12 }}>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <div>
          <Button
            style={{ color: '#FFFFFF', width: '100%', background: ' rgba(30, 38, 64, 1)' }}
            onChange={handelConfirmOrder}>
            {' '}
            Confirm Order
          </Button>
        </div>

        <div>
          <Button style={{ width: '100%' }} onChange={handelCancelOrder}>
            {' '}
            Cancel Order
          </Button>
        </div>
        <div>
          <Button style={{ width: '100%' }} onChange={handelModifyOrder}>
            {' '}
            Modify Order
          </Button>
        </div>
      </Space>
    </Card>
  );
};

export default ConfirmOrderButtonCard;
