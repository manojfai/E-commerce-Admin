import React, { useState } from 'react';
import { Card, Switch, Row, Col } from 'antd';
import emailnotificationlabel from './EmailNotification.json';

const OrderAndFeedbackCard = () => {
  // State variables and change handlers for each switch
  const [orderSummarySwitch, setOrderSummarySwitch] = useState(true);
  const [orderConfirmedSwitch, setOrderConfirmedSwitch] = useState(true);
  const [orderShippedSwitch, setOrderShippedSwitch] = useState(true);
  const [orderDeliveredSwitch, setOrderDeliveredSwitch] = useState(true);
  const [orderDeclinedSwitch, setOrderDeclinedSwitch] = useState(true);
  const [productFeedbackSwitch, setProductFeedbackSwitch] = useState(true);
  const [abandonedCartSwitch, setAbandonedCartSwitch] = useState(true);
  const [cancellationRequestedSwitch, setCancellationRequestedSwitch] = useState(true);
  const [cancellationApprovedSwitch, setCancellationApprovedSwitch] = useState(true);
  const [cancellationDeclinedSwitch, setCancellationDeclinedSwitch] = useState(true);

  const handleOrderSummarySwitchChange = checked => {
    setOrderSummarySwitch(checked);
    console.log('Order Summary Switch is now:', checked);
  };

  const handleOrderConfirmedSwitchChange = checked => {
    setOrderConfirmedSwitch(checked);
    console.log('Order Confirmed Switch is now:', checked);
  };

  const handleOrderShippedSwitchChange = checked => {
    setOrderShippedSwitch(checked);
    console.log('Order Shipped Switch is now:', checked);
  };

  const handleOrderDeliveredSwitchChange = checked => {
    setOrderDeliveredSwitch(checked);
    console.log('Order Delivered Switch is now:', checked);
  };

  const handleOrderDeclinedSwitchChange = checked => {
    setOrderDeclinedSwitch(checked);
    console.log('Order Declined Switch is now:', checked);
  };

  const handleProductFeedbackSwitchChange = checked => {
    setProductFeedbackSwitch(checked);
    console.log('Product Feedback Switch is now:', checked);
  };

  const handleAbandonedCartSwitchChange = checked => {
    setAbandonedCartSwitch(checked);
    console.log('Abandoned Cart Switch is now:', checked);
  };

  const handleCancellationRequestedSwitchChange = checked => {
    setCancellationRequestedSwitch(checked);
    console.log('Cancellation Requested Switch is now:', checked);
  };

  const handleCancellationApprovedSwitchChange = checked => {
    setCancellationApprovedSwitch(checked);
    console.log('Cancellation Approved Switch is now:', checked);
  };

  const handleCancellationDeclinedSwitchChange = checked => {
    setCancellationDeclinedSwitch(checked);
    console.log('Cancellation Declined Switch is now:', checked);
  };

  return (
    <Card title={emailnotificationlabel.orderfeedback.subtitle} style={{ width: '70%' }}>
      {/* 1 */}
      <Row>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}>{emailnotificationlabel.orderfeedback.ordersummaryheader}</p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.ordersummarydescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleOrderSummarySwitchChange} checked={orderSummarySwitch} />
          </div>
        </Col>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}>{emailnotificationlabel.orderfeedback.orderconfirmedheader}</p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.orderconfirmeddescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleOrderConfirmedSwitchChange} checked={orderConfirmedSwitch} />
          </div>
        </Col>
      </Row>

      {/* 2 */}
      <Row>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}> {emailnotificationlabel.orderfeedback.ordershippedheader}</p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.ordershippeddescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleOrderShippedSwitchChange} checked={orderShippedSwitch} />
          </div>
        </Col>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}> {emailnotificationlabel.orderfeedback.orderdeliveredheader}</p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.orderdelivereddescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleOrderDeliveredSwitchChange} checked={orderDeliveredSwitch} />
          </div>
        </Col>
      </Row>

      {/* 3 */}
      <Row>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}> {emailnotificationlabel.orderfeedback.orderdeclinedheader}</p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.orderdeclineddescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleOrderDeclinedSwitchChange} checked={orderDeclinedSwitch} />
          </div>
        </Col>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}>{emailnotificationlabel.orderfeedback.productfeedbackheader}</p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.productfeedbackdescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleProductFeedbackSwitchChange} checked={productFeedbackSwitch} />
          </div>
        </Col>
      </Row>

      {/* 4 */}
      <Row>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}> {emailnotificationlabel.orderfeedback.abandonedshoppingcartheader}</p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.abandonedshoppingcartdescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleAbandonedCartSwitchChange} checked={abandonedCartSwitch} />
          </div>
        </Col>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div tyle={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}>
              {emailnotificationlabel.orderfeedback.ordercancellationrequestedheader}
            </p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.ordercancellationrequesteddescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleCancellationRequestedSwitchChange} checked={cancellationRequestedSwitch} />
          </div>
        </Col>
      </Row>

      {/* 5 */}
      <Row>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}>
              {emailnotificationlabel.orderfeedback.cancellationrequestapprovedheader}
            </p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.cancellationrequestapproveddescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleCancellationApprovedSwitchChange} checked={cancellationApprovedSwitch} />
          </div>
        </Col>
        <Col span={24} lg={12} style={{ display: 'flex', alignItems: 'center', marginBottom: '1em' }}>
          <div style={{ marginRight: '2em' }}>
            <p style={{ marginRight: '1em' }}>
              {' '}
              {emailnotificationlabel.orderfeedback.cancellationrequestdeclinedheader}
            </p>
            <p style={{ whiteSpace: 'pre-line', display: 'flex', flexWrap: 'wrap' }}>
              {emailnotificationlabel.orderfeedback.cancellationrequestdeclineddescription}
            </p>
          </div>
          <div style={{ marginLeft: '1em', marginRight: '1em' }}>
            <Switch onChange={handleCancellationDeclinedSwitchChange} checked={cancellationDeclinedSwitch} />
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default OrderAndFeedbackCard;
