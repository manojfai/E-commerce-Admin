import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Col, Divider, Form, Row } from 'antd';
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
    <div style={{ display: 'flex', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Image Section */}
      <div style={{ width: '50%', height: '100%', overflow: 'hidden' }}>
        <EcommerceLogo style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Login box div */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '50%', // Set width to 50%
          position: 'relative'
        }}>
        <Row justify="center">
          <Col
            span={24}
            style={{
              color: 'black',
              fontSize: '18px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '28px',
              textAlign: 'left'
            }}>
            <div style={{ fontSize: '30px', fontWeight: 500, paddingBottom: '10px' }}>Mangement Portal Login</div>
            <div style={{ color: '#8692a6' }}>If you are already a member, you can log in with</div>
            <div style={{ color: '#8692a6', fontSize: '18px', fontWeight: 400 }}>your email address and password.</div>
            <Divider style={{ marginTop: '14px', marginBottom: '18px', color: '#F5F5F5' }} />
            <Form
              name="normal_login"
              initialValues={{
                remember: true
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off">
              <div>
                <span style={{ color: '#696F79', fontSize: '16px', fontWeight: 500, marginBottom: '10px' }}>
                  Email address
                </span>
                <Form.Item
                  name="username"
                  style={{ marginTop: 10 }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Username!'
                    }
                  ]}>
                  <Inputcomponent
                    style={{ width: '100%', height: '64px', borderRadius: '6px', border: '1px solid #8692A6' }}
                  />
                </Form.Item>
              </div>

              <div>
                <span style={{ color: '#696F79', fontSize: '16px', fontWeight: 500 }}>Password</span>
                <Form.Item
                  name="password"
                  style={{ marginTop: 10 }}
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Password!'
                    }
                  ]}>
                  <Inputcomponent
                    style={{ width: '100%', height: '64px', borderRadius: '6px', border: '1px solid #8692A6' }}
                    type="password"
                  />
                </Form.Item>
              </div>

              <div>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox style={{ color: '#696F79', fontSize: '16px', fontWeight: 500 }}>Remember me</Checkbox>
                </Form.Item>
              </div>

              <div>
                <Form.Item>
                  <Button style={{ width: '100%', marginTop: 10, height: '64px' }} type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Form.Item>
              </div>
            </Form>
            <div style={{ textAlign: 'center', color: '#696F79', fontSize: '16px', fontWeight: 500 }}>
              Don’t have an account?
            </div>
            <div style={{ textAlign: 'center', color: '#BF360C', fontSize: '16px', fontWeight: 500 }}>
              Contact your admin for credentials
            </div>
            <div
              style={{
                textDecoration: 'underline',
                textAlign: 'center',
                color: '#498BDC',
                fontSize: '16px',
                fontWeight: 500
              }}>
              Reset Password
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default LoginPage;
