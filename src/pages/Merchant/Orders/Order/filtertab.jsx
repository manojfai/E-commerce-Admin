import React, { useState } from 'react';
import { Space, Select, DatePicker, Dropdown } from 'antd';

const { RangePicker } = DatePicker;
const RangePicName = ['Start', 'End'];

const FilterTab = () => {
  return (
    <Space.Compact block>
      <RangePicker
        style={{
          width: '230px',
          height: '36px'
        }}
        placeholder={RangePicName}
      />
      <Select
        style={{
          width: '140px',
          height: '36px'
        }}
        // defaultValue="Option1-1"
        // dropdownStyle={{ backgroundColor: 'red' }}
        maxTagCount="undefined"
        placeholder="Order Status"
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
        placeholder="Payment Status"
        mode="multiple">
        <Option value="Paid">Paid</Option>
        <Option value="Unpaid">Unpaid</Option>
      </Select>
      <Select
        style={{
          width: '140px',
          height: '36px'
        }}
        // defaultValue="Option2-2"
        maxTagCount="responsive"
        placeholder="Dispatch Status"
        mode="multiple">
        <Option value="Pending">Pending</Option>
        <Option value="Shipped">Shipped</Option>
        <Option value="Delivered">Delivered</Option>
      </Select>
    </Space.Compact>
  );
};

export default FilterTab;
