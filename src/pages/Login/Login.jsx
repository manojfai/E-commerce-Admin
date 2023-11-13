import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Col, Form, Input, Row } from 'antd';
import EcommerceLogo from './EcommerceLogo';
import Inputcomponent from '../../component/Input/input';
import './Asset/css/style.css';

function LoginPage() {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  
  const onFinish = values => {
    // Your existing logic
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
      <EcommerceLogo />

      {/* second div */}
      <div style={{ flex: '1', height: '100vh' }}>
        {/* Login box div */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'
          }}>
          <Row>
            <Col
              span={24}
              offset={6}
              style={{
                color: 'black',
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '28px'
              }}>
              <h3>Mangement Portal Login</h3>
              <Row>
                <Col
                  span={12}
                  style={{
                    color: '#8692a6',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '28px',
                    paddingBottom: '10px'
                  }}>
                  If you are already a member, you can log in with your email address and password.
                </Col>
              </Row>

              <Form
                name="normal_login"
                initialValues={{
                  remember: true
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <div>
                  Email address
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Username!'
                      }
                    ]}>
                    <Inputcomponent style={{ width: '50%' }} placeholder="Username" />
                  </Form.Item>
                </div>

                <div>
                  Password
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your Password!'
                      }
                    ]}>
                    <Inputcomponent style={{ width: '50%' }} type="password" placeholder="Password" />
                  </Form.Item>
                </div>

                <div>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </div>

                <div>
                  <Form.Item>
                    <Button style={{ width: '50%', marginTop: 10 }} type="primary" htmlType="submit">
                      Log in
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </Col>
          </Row>

          {/* Additional divs outside Form.Item */}
          <div style={{ paddingBottom: '10px', textAlign: 'center' }}>
            <div>Don’t have an account?</div>
            <div>Contact your admin for credentials</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
