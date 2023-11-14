import React from 'react';
import React, { useState } from 'react';
import { Card, Form } from 'antd';
import './style.scss';
import { images } from '../../utils/images';
import Inputcomponent from '../../component/Input/input';
import ModalPopup from '../../component/ModalPopup/ModalPopup';

const SettingPasswordReset = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSaveClick = () => {
    setModalVisible(true);
  };

  const handleCancelModal = () => {
    setModalVisible(false);
  };

  return (
    <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '2em' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ display: 'flex', gap: '1em', width: '70%' }}>
          <div>
            <img src={images.back_ic} width="24px" height="24px" alt="Back Icon" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="headertitle">Reset Password</div>
            <div className="headerparagraph">
              Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing{' '}
            </div>
          </div>
        </div>
        <div
          style={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}>
          <button style={{}} className="buttonc" onClick={handleCancelModal}>
            Cancel
          </button>

          <button style={{}} className="buttons" onClick={handleSaveClick}>
            Save
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1em', width: '100%' }}>
        <div style={{ width: '65%' }}>
          <Form
            name="basic"
            layout="vertical"
            style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}
            autoComplete="off">
            <Card>
              <div className="productinfo">Password</div>
              <Form.Item
                name="product_comboname"
                label={<label className="label">New Password</label>}
                hasFeedback
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}>
                <Inputcomponent placeholder={'New Password'} type={'password'} />
              </Form.Item>
              <Form.Item
                name="product_combo_price"
                label={<label className="label">Confirm New Password</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent placeholder={'Confirm New Password'} type={'password'} />
              </Form.Item>
            </Card>
          </Form>
        </div>
      </div>

      {/* Render the ModalPopup component with visibility controlled by the state */}
      <ModalPopup open={isModalVisible} onCancel={handleCancelModal} />
    </div>
  );
};

export default SettingPasswordReset;
