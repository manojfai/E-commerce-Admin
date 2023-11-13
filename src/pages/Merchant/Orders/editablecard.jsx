import React, { useState } from 'react';
import { Card, Space } from 'antd';
import { UserOutlined, PhoneOutlined, MailOutlined, EditOutlined } from '@ant-design/icons';

const EditableCard = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('Shahab Al Muhrimi');
  const [phone, setPhone] = useState('+971528560517');
  const [email, setEmail] = useState('Shahab8392@gmail.com');

  const handleEditClick = () => {
    setEditMode(!editMode);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhone(e.target.value);
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '24px' }}>
        <div style={{ paddingBottom: 10, fontWeight: 600, fontSize: '16px', height: '24px' }}>Customer Details</div>
        <div onClick={handleEditClick}>
          <EditOutlined style={{ color: '#498BDC', width: '24px', height: '24px', cursor: 'pointer' }} />
        </div>
      </div>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <div>
          <UserOutlined style={{ paddingRight: 10 }} />
          {editMode ? <input type="text" value={name} onChange={handleNameChange} /> : name}
        </div>

        <div>
          <PhoneOutlined style={{ paddingRight: 10 }} />
          {editMode ? <input type="text" value={phone} onChange={handlePhoneChange} /> : phone}
        </div>
        <div>
          <MailOutlined style={{ paddingRight: 10 }} />
          {editMode ? <input type="text" value={email} onChange={handleEmailChange} /> : email}
        </div>
      </Space>
    </Card>
  );
};

export default EditableCard;
