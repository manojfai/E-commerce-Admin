import Contentheader from '../../../component/Content/contentHeader';
import Contentmain from '../../../component/Content/contentMain';
import applabel from '../../../utils/env.json';
import { InputNumber, Select, Tag } from 'antd';

const handleChange = value => {
  console.log(`selected ${value}`);
};

const onChangeNumber = value => {
  console.log('changed', value);
};

const { Option } = Select;
const ManageStock = () => {
  const dataSource = [];

  for (let i = 1; i <= 6; i++) {
    dataSource.push({
      key: i,
      product: 'Product Name A',
      currentstock: '145',
      totalstock: '120'
    });
  }

  const columns = [
    {
      title: <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>PRODUCT</div>,
      dataIndex: 'product',
      key: 'product',
      render: (c, record) => {
        console.log('record--->', record);
        return (
          <>
            <div style={{ color: '#23272E', fontSize: '14px', fontWeight: 400, lineHeight: '21px' }}>{c}</div>
          </>
        );
      }
    },
    {
      title: (
        <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>CURRENT STOCK</div>
      ),

      dataIndex: 'currentstock',
      key: 'currentstock',
      render: (c, record) => {
        console.log('record--->', record);
        return (
          <>
            <div style={{ color: '#23272E', fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}>{c}</div>
          </>
        );
      }
    },
    {
      title: <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>ACTION</div>,

      dataIndex: 'orderstatus',
      key: 'orderstatus',
      render: (c, record) => {
        return (
          <Select
            placeholder="Select"
            style={{ width: 120 }}
            onChange={handleChange}
            // getPopupContainer={triggerNode => triggerNode.parentNode} // Ensure the dropdown is rendered inside the parent node
            dropdownStyle={{ zIndex: 9999 }} // Adjust zIndex as needed
            optionLabelProp="label" // Set the label prop to use for display
          >
            <Option
              value="Increase"
              style={{ color: '#498BDC' }}
              label={<span style={{ color: '#498BDC' }}>Increase</span>}>
              Increase
            </Option>
            <Option
              value="Decrease"
              style={{ color: '#FF9017' }}
              label={<span style={{ color: '#FF9017' }}>Decrease</span>}>
              Decrease
            </Option>
          </Select>
        );
      }
    },
    {
      title: <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>QUANTITY</div>,

      dataIndex: 'paymentstatus',
      key: 'paymentstatus',
      render: (c, record) => {
        return <InputNumber min={0} max={100} defaultValue={0} onChange={onChangeNumber} />;
      }
    },
    {
      title: (
        <div style={{ color: '#AEB4B9', fontWeight: 500, fontSize: '12px', lineHeight: '14.52px' }}>TOTAL STOCK</div>
      ),

      dataIndex: 'totalstock',
      key: 'totalstock',
      render: (c, record) => {
        return <div style={{ color: '#23272E', fontSize: '14px', fontWeight: 400, lineHeight: '22px' }}>{c}</div>;
      }
    }
  ];
  return (
    <>
      <Contentheader
        editconfirmButton={'confirm'}
        width={100}
        contentTitle={applabel.Inventory.managestock.title}
        contentParagraph={applabel.Inventory.managestock.paragraph}
        //   buttonLabel={applabel.orders.orders.createvendorbutton}
      />
      <Contentmain
        placeholder={applabel.Inventory.managestock.searchplaceholder}
        dataSource={dataSource}
        columns={columns}
        enableRowSelection={false}
        manageStocks={true}
      />
    </>
  );
};

export default ManageStock;
