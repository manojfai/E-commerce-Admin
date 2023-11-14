import React from 'react';
import { Card, Tabs, Row, Col, Space } from 'antd';
import { ShoppingCartOutlined, CreditCardOutlined, CloseCircleOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const onChange = key => {
  console.log(key);
};

const items = [
  {
    key: '1',
    label: 'Shipping',
    icon: <ShoppingCartOutlined />,
    children: 'Branch will update once ite is shipped'
  },
  {
    key: '2',
    label: 'Payment',
    icon: <CreditCardOutlined />,
    children: 'Content of Tab Pane 2'
  },
  {
    key: '3',
    label: 'Item Cancellation',
    icon: <ShoppingCartOutlined />,
    children: 'Content of Tab Pane 3'
  }
];

const CenteredContent = ({ children }) => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    }}>
    {children}
  </div>
);

const App = () => (
  <Card
    style={{
      width: '752px',
      height: '302px',
      backgroundColor: 'FFFFFF',
      boxShadow: '0px 0px 8px 0px rgba(230, 236, 235, 1)'
    }}
    bodyStyle={{ padding: 20 }}>
    <div
      style={{
        color: '#000',
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '22px',
        marginBottom: '10px'
      }}>
      Other Information
    </div>

    <Tabs defaultActiveKey="1" onChange={onChange}>
      {items.map(item => (
        <TabPane
          tab={
            <span>
              {item.icon}
              {item.label}
            </span>
          }
          key={item.key}>
          {item.key === '1' ? (
            <CenteredContent>{item.children}</CenteredContent>
          ) : item.key === '2' ? (
            <>
              <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Row justify="space-between">
                  <Col span={12} style={{ color: '#6D7175', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}>
                    Total Amount
                  </Col>
                  <Col
                    span={12}
                    style={{
                      textAlign: 'right',
                      color: '#000',
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '22px'
                    }}>
                    <span>&#8377;</span>2,649.00
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col span={12} style={{ color: '#6D7175', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}>
                    Transaction ID
                  </Col>
                  <Col span={12} style={{ textAlign: 'right' }}>
                    <div style={{ color: '#202223', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}>
                      ch_3OBulmSJeMXi7YyD0tQGh1G6
                    </div>
                    <div style={{ color: '#6D7175', fontSize: '12px', fontWeight: '400', lineHeight: '22px' }}>
                      Nov 13,2023 | 01:35 PM
                    </div>
                  </Col>
                </Row>
                <Row justify="space-between">
                  <Col span={12} style={{ color: '#6D7175', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}>
                    Payment Gateway
                  </Col>
                  <Col span={12} style={{ textAlign: 'right ' }}>
                    <div style={{ color: '#202223', fontSize: '14px', fontWeight: '400', lineHeight: '22px' }}>
                      Stripe
                    </div>
                    <div style={{ color: '#6D7175', fontSize: '12px', fontWeight: '400', lineHeight: '22px' }}>
                      Stripe processing fees : Rs.15.36 Merc
                    </div>
                  </Col>
                </Row>
              </Space>
            </>
          ) : (
            item.children
          )}
        </TabPane>
      ))}
    </Tabs>
  </Card>
);

export default App;
