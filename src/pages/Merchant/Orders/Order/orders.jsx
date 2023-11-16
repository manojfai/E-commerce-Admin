import React from 'react';
import applabel from '../../../../utils/env.json';
import Contentheader from '../../../../component/Content/contentHeader';
import Contentmain from '../../../../component/Content/contentMain';
import { Tag } from 'antd';
import DotForTable from './dotfortable';

const handelClick = () => {
  console.log('helllllo');
};
function Orders() {
  const dataSource = [];

  for (let i = 1; i <= 6; i++) {
    dataSource.push({
      key: i,
      orderid: 'OD728219821',
      date: '27/07/2023 | 09:06 AM',
      customerinfo: 'Tahnoun Ahbabi',
      email: 'jramirez@gmail.com',
      amount: '₹ 282'
    });
  }

  const columns = [
    {
      title: <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>ORDER ID</div>,
      dataIndex: 'orderid',
      key: 'orderid',
      render: (c, record) => {
        console.log('record--->', record);
        return (
          <>
            <div
              onClick={handelClick}
              style={{ color: '#498BDC', fontSize: '14px', fontWeight: 600, lineHeight: '22px' }}>
              {c}
            </div>
            <div style={{ color: '#8B909A', fontWeight: 400, fontSize: '14px', lineHeight: '22px' }}>{record.date}</div>
          </>
        );
      }
    },
    {
      title: (
        <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>
          CUSTOMER INFORMATION
        </div>
      ),

      dataIndex: 'customerinfo',
      key: 'customerinfo',
      render: (c, record) => {
        console.log('record--->', record);
        return (
          <>
            <div style={{ color: '#23272E', fontSize: '14px', fontWeight: 600, lineHeight: '22px' }}>{c}</div>
            <div style={{ color: '#8B909A', fontWeight: 400, fontSize: '14px', lineHeight: '22px' }}>
              {record.email}
            </div>
          </>
        );
      }
    },
    {
      title: (
        <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>ORDER STATUS</div>
      ),

      dataIndex: 'orderstatus',
      key: 'orderstatus',
      render: (c, record) => {
        return (
          <Tag color="#AEE9D1" style={{ borderRadius: '10px', color: 'black', fontWeight: 600, lineHeight: '16px' }}>
            <DotForTable code={true} />
            <span style={{ fontWeight: 600, lineHeight: '16px' }}>Confirmed</span>
          </Tag>
        );
      }
    },
    {
      title: (
        <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>PAYMENT STATUS</div>
      ),

      dataIndex: 'paymentstatus',
      key: 'paymentstatus',
      render: (c, record) => {
        return (
          <Tag color="#FFD79D" style={{ borderRadius: '10px', color: 'black', fontWeight: 600, lineHeight: '16px' }}>
            <DotForTable />
            <span style={{ fontWeight: 600, lineHeight: '16px' }}>Unpaid</span>
          </Tag>
        );
      }
    },
    {
      title: (
        <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>
          DISPATCH STATUS
        </div>
      ),

      dataIndex: 'dispatchstatus',
      key: 'dispatchstatus',
      render: (c, record) => {
        return (
          <Tag color="#AEE9D1" style={{ borderRadius: '10px', color: 'black', fontWeight: 600, lineHeight: '16px' }}>
            <DotForTable code={true} />
            <span style={{ fontWeight: 600, lineHeight: '16px' }}>Shipped</span>
          </Tag>
        );
      }
    },
    {
      title: <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>AMOUNT</div>,
      dataIndex: 'amount',
      key: 'amount',
      render: (c, record) => {
        return <div style={{ color: '#23272E', fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}>{c}</div>;
      }
    }
  ];

  return (
    <>
      {/* <div className="orders-head">Orders</div> */}
      <Contentheader
        width={200}
        contentTitle={applabel.orders.orders.title}
        contentParagraph={applabel.orders.orders.paragraph}
        buttonLabel={applabel.orders.orders.createvendorbutton}
      />
      <Contentmain
        placeholder={applabel.orders.orders.searchplaceholder}
        dataSource={dataSource}
        columns={columns}
        enableRowSelection={false}
        orderStocks={true}
      />
    </>
  );
}

export default Orders;
