import React from 'react';
import { Card, Slider } from 'antd';
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  ClockCircleOutlined,
  SmileOutlined,
} from '@ant-design/icons';

import './orders.scss';

const OrderProgressCard = () => {
  return (
    <Card
      style={{
        width: '364px',
        height: '250px',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 8px 0px rgba(230, 236, 235, 1)',
      }}
      bodyStyle={{ padding: 20 }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '24px',
        }}
      >
        <div
          style={{
            paddingBottom: 10,
            fontWeight: 600,
            fontSize: '16px',
            height: '24px',
          }}
        >
          Customer Details
        </div>
        <div style={{color:'#FF9017',fontSize:'14px',fontWeight:500,lineHeight:'22px'}}>Order Confirmed</div>
      </div>
      <Slider
        defaultValue={35}
        disabled
      />
      <div
        style={{
          marginTop: 10,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <CheckCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
          <div
            style={{ fontWeight: 600, fontSize: '10px', lineHeight: '16px' }}
          >
            Order Placed
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <InfoCircleOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <div
            style={{ fontWeight: 600, fontSize: '10px', lineHeight: '16px' }}
          >
            Order Confirmed
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <ClockCircleOutlined style={{ fontSize: '24px', color: '#faad14' }} />
          <div
            style={{ fontWeight: 600, fontSize: '10px', lineHeight: '16px' }}
          >
            Order Shipped
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <SmileOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <div
            style={{ fontWeight: 600, fontSize: '10px', lineHeight: '16px' }}
          >
            Order Delivered
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OrderProgressCard;
