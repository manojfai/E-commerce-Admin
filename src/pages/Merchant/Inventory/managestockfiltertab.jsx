import React, { useState } from 'react';
import { Space, Select, DatePicker, Dropdown } from 'antd';

const ManageStockFilterTab = () => {
  return (
    <Space.Compact block>
      <Select
        style={{
          width: '140px',
          height: '36px'
        }}
        // defaultValue="Option1-1"
        // dropdownStyle={{ backgroundColor: 'red' }}
        maxTagCount="undefined"
        placeholder="Category"
        mode="multiple">
        <Option value="Pending">Pending</Option>
        <Option value="Confirmed">Confirmed</Option>
        <Option value="Completed">Completed</Option>
        <Option value="Cancelled">Cancelled</Option>
        <Option value="Declined">Declined</Option>
      </Select>
      <Select
        style={{
          width: '140px',
          height: '36px'
        }}
        // defaultValue="Option2-2"
        maxTagCount="responsive"
        placeholder="Sub Category"
        mode="multiple">
        <Option value="Fertilizers">Fertilizers</Option>
        <Option value="Crop Booster">Crop Booster</Option>
        <Option value="TNAU">TNAU</Option>
        <Option value="Maize">Maize</Option>
        <Option value="Paddy">Paddy</Option>
      </Select>
      <Select
        style={{
          width: '140px',
          height: '36px'
        }}
        // defaultValue="Option2-2"
        maxTagCount="responsive"
        placeholder="Brand"
        mode="multiple">
        <Option value="Pending">Pending</Option>
        <Option value="Shipped">Shipped</Option>
        <Option value="Delivered">Delivered</Option>
      </Select>
    </Space.Compact>
  );
};

export default ManageStockFilterTab;
