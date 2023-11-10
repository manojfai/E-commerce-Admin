import React, { useState } from 'react';
import './style.scss';
import Search from '../../../component/Seachinput/search.jsx';
import Table from '../../../component/Table/table.jsx';
import { images } from '../../../utils/images.js';
import Productcreate from './Productcreation/productCreate.jsx';
import Check from './check.jsx';
import Productlist from '../Catelog/Product/index.jsx';
import Productcombo from '../Catelog/ProductCombo/index.jsx';
import Collection from '../Catelog/Collections/index.jsx';

function Products() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street'
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street'
    }
  ];

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Price',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Status',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: (c, record) => {
        return (
          <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
            <img src={images.copy_ic}></img>
            <img src={images.delete_ic}></img>
          </div>
        );
      }
    }
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRowKeys);
    }
  };
  return (
    <>Admin products</>
    // <Collection />
    // <Productcombo width="13em"/>
    // <Productlist />
    // <Productcreate />
    // <Check
    //   contentTitle="List of Products"
    //   contentParagraph="Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing"
    //   buttonLabel = "Create Product"
    //   // deleteButtonLabel = "Delete Products"
    // />
    // <div style={{ width: '100%', height: 'auto' }}>
    //   <div style={{ display: 'flex', width: '100%' }}>
    //     <div style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    //       <div className="listproductshead">List of Products</div>
    //       <div className="listproductspara">
    //         Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing
    //       </div>
    //     </div>
    //     <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}>
    //       <button style={{}} className="button">
    //         Create Product
    //       </button>
    //     </div>
    //   </div>
    //   <div style={{display:"flex", flexDirection:"column", gap:"1em"}}>
    //     <div style={{ marginTop: '2em', display: 'flex', justifyContent: 'space-between' }}>
    //       <div>
    //         <button className="buttondelete">Delete Products</button>
    //       </div>
    //       <div>
    //         <Search placeholder="Search by product name" />
    //       </div>
    //     </div>
    //     <div>
    //       <Table dataSource={dataSource} columns={columns} pagination={{ showSizeChanger: true, showQuickJumper: true }} rowKey={(record) => record.key}
    //       rowSelection={rowSelection}/>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Products;
