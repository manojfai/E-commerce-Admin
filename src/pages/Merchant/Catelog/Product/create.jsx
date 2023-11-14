import './style.scss';
import applabel from '../../../../utils/env.json';
import { Card, Form, Radio } from 'antd';
import Input from '../../../../component/Input/input';
import Contentnav from '../../../../component/Contentnav/contentNavigation';
import Inputcomponent from '../../../../component/Input/input';
import Checkbox from '../../../../component/Checkbox/checkbox';
import ImageUploaderAntd from '../../../../component/AddImage/ImageUploaderAntd';
import Toggle from '../../../../component/Toggle/toggle';
import { Select } from 'antd';
import Createheader from '../Component/Create/createheader';
import Formitem from '../../../../component/Formitem/formitem';
const { Option } = Select;

function Productcreate() {
  const selectAfter = (
    <Select defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );
  return (
    <div 
    // style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '2em' }} 
    className='createpage'
    >
      <Createheader
        title={applabel.catelog.products.create.producttitle}
        paragraph={applabel.catelog.products.create.productpara}
      />
      <div 
    //   style={{ display: 'flex', gap: '1em', width: '100%' }}
    className='createcontent'
    >
        <div 
        // style={{ width: '65%' }}
        className='leftcreatecontent'
        >
          <Form
            name="basic"
            layout="vertical"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}
            autoComplete="off">
            <Card>
              <div className="productinfo">Product Information</div>
              <Form.Item
                name="product_name"
                label={
                  <label className="label">
                    Product Name<span className="requirestar">*</span>
                  </label>
                }
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              {/* <Formitem
                name="product_name"
                label={
                  <label className="label">
                    Product Name<span className="requirestar">*</span>
                  </label>
                }
                render={<Inputcomponent />}
              /> */}
              <Form.Item name="url" label={<label className="label">URL</label>} hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item name="description" label={<label className="label">Description</label>} hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="category"
                label={<label className="label">Category</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Select options={[{ label: 'demo', value: 'demo' }]} />
              </Form.Item>
              <Form.Item
                name="sub_category"
                label={<label className="label">Sub Category</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Select options={[{ label: 'demo', value: 'demo' }]} />
              </Form.Item>
              <Form.Item name="showinstore" hasFeedback>
                <Checkbox label="show in store" className="checkboxlabel" defaultChecked={false} />
                <div className="storeavail">The product will be available on your store, when enabled.</div>
              </Form.Item>
            </Card>
            <Card>
              <div 
            //   style={{ display: 'flex', gap: '2em', flexDirection: 'column' }}
              className='createimagecard'>
                <div 
                className='imgcardhead'
                // style={{ display: 'flex', width: '100%' }}
                >
                  <div 
                //   style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '0.5em' }}
                  className='leftimgcard'>
                    <div className="addimghead">Add Image</div>
                    <div className="addimgmsg">Add one or more images (Recommended)</div>
                  </div>
                  <div 
                //   style={{ display: 'flex', width: '40%', justifyContent: 'flex-end', alignItems: 'flex-start' }}
                  className='rightimgcard'>
                    <button className="butaddimg">Add Image</button>
                  </div>
                </div>
                <ImageUploaderAntd />
              </div>
            </Card>
            <Card>
              <div className="productinfo">Pricing</div>
              <Form.Item
                name="retail_price"
                label={
                  <label className="label">
                    Retail Price<span className="requirestar">*</span>
                  </label>
                }
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', marginBottom: '0' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="discounted price"
                label={<label className="label">Discounted price</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item name="includetax" style={{ display: 'inline-block', width: 'calc(50% - 1em)' }} hasFeedback>
                <Checkbox label="Includes Tax" className="checkboxlabel" defaultChecked={false} />
              </Form.Item>
              <Form.Item
                name="in_tax"
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Checkbox label="Includes Tax" className="checkboxlabel" defaultChecked={false} />
              </Form.Item>
              <Form.Item
                name="charges"
                label={<label className="label">Charges</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Select options={[{ label: 'demo', value: 'demo' }]} />
              </Form.Item>
              <Form.Item
                name="tax"
                label={<label className="label">Tax</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Select options={[{ label: 'demo', value: 'demo' }]} />
              </Form.Item>
            </Card>
            <Card>
              <div 
            //   style={{ display: 'flex', width: '100%' }}
            className='imgcardhead'>
                <div 
                // style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '0.5em' }}
                className='leftimgcard'>
                  <div className="addimghead">Inventory</div>
                  <div className="addimgmsg">You need to specify the inventory details</div>
                </div>
                <div
                className='rightimgcard' 
                // style={{ display: 'flex', width: '40%', justifyContent: 'flex-end', alignItems: 'flex-start' }}
                >
                  <Toggle />
                </div>
              </div>
            </Card>
            <Card>
              <div 
            //   style={{ display: 'flex', width: '100%' }}
            className='imgcardhead'
              >
                <div 
                // style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: '0.5em' }}
                className='leftimgcard'
                >
                  <div className="addimghead">Enable Quantity Restriction</div>
                  <div className="addimgmsg">You need to specify the quantities to restrict purchase</div>
                </div>
                <div 
                // style={{ display: 'flex', width: '40%', justifyContent: 'flex-end', alignItems: 'flex-start' }}
                className='rightimgcard'
                >
                  <Toggle />
                </div>
              </div>
            </Card>
            <Card>
              <div className="productinfo">Product Identifiers</div>
              <Form.Item
                name="sku"
                label={<label className="label">SKU</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="upc"
                label={<label className="label">UPC</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="ean"
                label={<label className="label">EAN</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="mpn"
                label={<label className="label">MPN</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="hsn"
                label={<label className="label">HSN Code</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="isbn"
                label={<label className="label">ISBN</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
            </Card>
            <Card>
              <div className="productinfo">Measurement</div>
              <Form.Item name="shipinseperatepage" hasFeedback>
                <Radio className="checkboxlabel">Ship in Separate Package</Radio>
                <div className="storeavail">The product will be packed and delivered in separate package.</div>
              </Form.Item>
              <Form.Item
                name="dimension"
                label={<label className="label">Dimensional Weight</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Input addonAfter={selectAfter} />
              </Form.Item>
              <Form.Item
                name="width"
                label={<label className="label">Width</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent addonAfter={selectAfter} />
              </Form.Item>
              <Form.Item
                name="height"
                label={<label className="label">Height</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Inputcomponent addonAfter={selectAfter} />
              </Form.Item>
              <Form.Item
                name="length"
                label={<label className="label">Length</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent addonAfter={selectAfter} />
              </Form.Item>
            </Card>
          </Form>
        </div>
        <Contentnav navValue={['product', 'information', 'image', 'pricing']} />
      </div>
    </div>
  );
}

export default Productcreate;
