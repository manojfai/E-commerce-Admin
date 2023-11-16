import { useState } from 'react';
import Search from '../Seachinput/search';
import Table from '../Table/table';
import { images } from '../../utils/images';
import FilterTab from '../../pages/Merchant/Orders/Order/filtertab';
import ManageStockFilterTab from '../../pages/Merchant/Inventory/managestockfiltertab';

const Contentmain = ({
  deleteButtonLabel,
  placeholder,
  columns,
  dataSource,
  enableRowSelection,
  manageStocks,
  orderStocks
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const dataSource = [
  //   {
  //     key: '1',
  //     name: 'Mike',
  //     age: 32,
  //     address: '10 Downing Street'
  //   },
  //   {
  //     key: '2',
  //     name: 'John',
  //     age: 42,
  //     address: '10 Downing Street'
  //   }
  // ];

  // const columns = [
  //   {
  //     title: 'Product Name',
  //     dataIndex: 'name',
  //     key: 'name'
  //   },
  //   {
  //     title: 'Price',
  //     dataIndex: 'age',
  //     key: 'age'
  //   },
  //   {
  //     title: 'Status',
  //     dataIndex: 'address',
  //     key: 'address'
  //   },
  //   {
  //     title: 'Action',
  //     dataIndex: '',
  //     key: 'x',
  //     render: (c, record) => {
  //       return (
  //         <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
  //           <img src={images.copy_ic}></img>
  //           <img src={images.delete_ic}></img>
  //         </div>
  //       );
  //     }
  //   }
  // ];
  // const rowSelection = {
  //   selectedRowKeys,
  //   onChange: (selectedRowKeys, selectedRows) => {
  //     setSelectedRowKeys(selectedRowKeys);
  //   }
  // };
  const rowSelection = enableRowSelection
    ? {
        selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          setSelectedRowKeys(selectedRowKeys);
        }
      }
    : undefined;
  return (
    <div
      className="contentmain"
      // style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}
    >
      <div
        className="topcontentmain"
        // style={{ marginTop: '2em', display: 'flex', justifyContent: 'space-between' }}
      >
        <div>{deleteButtonLabel && <button className="buttondelete">{deleteButtonLabel}</button>}</div>
        {orderStocks && <FilterTab />}
        {manageStocks && <ManageStockFilterTab />}
        <div>
          <Search placeholder={placeholder} />
        </div>
      </div>
      <div>
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ showSizeChanger: true, showQuickJumper: true }}
          rowKey={record => record.key}
          rowSelection={enableRowSelection}
          manageStocks={manageStocks}
          orderStocks={orderStocks}
        />
      </div>
    </div>
  );
};

export default Contentmain;
