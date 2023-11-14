import './style.scss';
import { images } from '../../../../utils/images';
import { Button, Card, Form, Radio } from 'antd';
import Input from '../../../../component/Input/input';
import Contentnav from '../../../../component/Contentnav/contentNavigation';
import Inputcomponent from '../../../../component/Input/input';
// import Select from '../../../../component/Select/select';
import Checkbox from '../../../../component/Checkbox/checkbox';
import ImageUploaderAntd from '../../../../component/AddImage/ImageUploaderAntd';
import Toggle from '../../../../component/Toggle/toggle';
import { Select } from 'antd';
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
    <div style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '2em' }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ display: 'flex', gap: '1em', width: '70%' }}>
          <div>
            <img src={images.back_ic} width="24px" height="24px"></img>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="headertitle">Create Product</div>
            <div className="headerparagraph">
              Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing
            </div>
          </div>
        </div>
        <div
          style={{ display: 'flex', gap: '1em', justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}>
          <button style={{}} className="buttonc">
            Cancel
          </button>

          {/* <Button className='buttonc'>Cancel</Button> */}
          <button style={{}} className="buttons">
            Save
          </button>
          {/* <Button className='buttons'>Save</Button> */}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '1em', width: '100%' }}>
        <div style={{width:"65%"}}>
      <Form
            name="basic"
            layout='vertical'
            // labelCol={{
            //   span: 8
            // }}
            // wrapperCol={{
            //   span: 16
            // }}
            // style={{
            //   maxWidth: window.innerWidth < 600 ? '' : 600,
            //   marginTop: '10px'
            // }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            style={{display:"flex",flexDirection:"column",gap:"2em"}}
            autoComplete="off">
        <Card >
          <div className='productinfo'>Product Information</div>
          <Form.Item
                name="product_name"
                label={<label className='label'>Product Name<span className='requirestar'>*</span></label>}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="url"
                label={<label className='label'>URL</label>}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="description"
                label={<label className='label'>Description</label>}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="category"
                label={<label className='label'>Category</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback
              >
        <Select options={[{label:"demo",value:"demo"}]}/>
          </Form.Item>
          <Form.Item
                name="sub_category"
                label={<label className='label'>Sub Category</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                 <Select options={[{label:"demo",value:"demo"}]}/>
          </Form.Item>
          <Form.Item
                name="showinstore"
                hasFeedback
              >
                <Checkbox label="show in store" className="checkboxlabel" defaultChecked={false}/>
                <div className='storeavail'>The product will be available on your store, when enabled.</div>
          </Form.Item>
        </Card>
        <Card >
          <div style={{display:"flex",gap:"2em",flexDirection:"column"}}>
          <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"60%",display:"flex",flexDirection:"column",gap:"0.5em"}}>
              <div className='addimghead'>
              Add Image
              </div>
              <div className='addimgmsg'>
              Add one or more images (Recommended)
              </div>
            </div>
            <div style={{display:"flex",width:"40%",justifyContent:"flex-end",alignItems:"flex-start"}} >
              <button className='butaddimg'>Add Image</button>
            </div>
          </div>
          <ImageUploaderAntd />
          </div>
        </Card>
        <Card>
          <div className='productinfo'>Pricing</div>
          <Form.Item
                name="retail_price"
                label={<label className='label'>Retail Price<span className='requirestar'>*</span></label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)',marginBottom:'0' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="discounted price"
                label={<label className='label'>Discounted price</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="includetax"
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback
              >
                <Checkbox label="Includes Tax" className="checkboxlabel" defaultChecked={false}/>              
          </Form.Item>
          <Form.Item
                name="in_tax"
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Checkbox label="Includes Tax" className="checkboxlabel" defaultChecked={false}/>
          </Form.Item>
          <Form.Item
                name="charges"
                label={<label className='label'>Charges</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback
              >
        <Select options={[{label:"demo",value:"demo"}]}/>
          </Form.Item>
          <Form.Item
                name="tax"
                label={<label className='label'>Tax</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                 <Select options={[{label:"demo",value:"demo"}]}/>
          </Form.Item>
        </Card>
        <Card>
        <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"60%",display:"flex",flexDirection:"column",gap:"0.5em"}}>
              <div className='addimghead'>
              Inventory
              </div>
              <div className='addimgmsg'>
              You need to specify the inventory details
              </div>
            </div>
            <div style={{display:"flex",width:"40%",justifyContent:"flex-end",alignItems:"flex-start"}} >
              <Toggle />
            </div>
          </div>
        </Card>
        <Card>
        <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"60%",display:"flex",flexDirection:"column",gap:"0.5em"}}>
              <div className='addimghead'>
              Enable Quantity Restriction
              </div>
              <div className='addimgmsg'>
              You need to specify the quantities to restrict purchase
              </div>
            </div>
            <div style={{display:"flex",width:"40%",justifyContent:"flex-end",alignItems:"flex-start"}} >
              <Toggle />
            </div>
          </div>
        </Card>
        <Card>
          <div className='productinfo'>Product Identifiers</div>
          <Form.Item
                name="sku"
                label={<label className='label'>SKU</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)'}}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="upc"
                label={<label className='label'>UPC</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="ean"
                label={<label className='label'>EAN</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="mpn"
                label={<label className='label'>MPN</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="hsn"
                label={<label className='label'>HSN Code</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="isbn"
                label={<label className='label'>ISBN</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
        </Card>
        <Card>
          <div className='productinfo'>Measurement</div>
          <Form.Item
                name="shipinseperatepage"
                hasFeedback
              >
                <Radio className="checkboxlabel">Ship in Separate Package</Radio>
                <div className='storeavail'>The product will be packed and delivered in separate package.</div>
          </Form.Item>
          <Form.Item
                name="dimension"
                label={<label className='label'>Dimensional Weight</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)'}}
                hasFeedback
              >
                <Input addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item
                name="width"
                label={<label className='label'>Width</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item
                name="height"
                label={<label className='label'>Height</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)'}}
                hasFeedback
              >
                <Inputcomponent addonAfter={selectAfter} />
          </Form.Item>
          <Form.Item
                name="length"
                label={<label className='label'>Length</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent addonAfter={selectAfter} />
          </Form.Item>

        </Card>
        </Form>
        </div>
        {/* <div>
        </div> */}
        {/* <Card style={{ width: '35%' }}>
          <div style={{ marginBottom: '1em' }} className="titlenav">
            Quick Navigation
          </div> */}
          <Contentnav navValue={['product', 'information', 'image', 'pricing']}/>
          {/* {['product', 'information', 'image', 'pricing'].map((value,index) => {
            return (
              <div className="navigation ${index === selectedIndex ? 'selected' : ''}" onClick={() => {
                const navigationElements = document.getElementsByClassName('navigation');

                for (let i = 0; i < navigationElements.length; i++) {
                  navigationElements[i].classList.remove('selected');
                }
        
                // Add 'selected' class to the clicked element
                document.getElementsByClassName('navigation')[index].classList.add('selected');
                console.log("document.getElementsByClassName('navigation')",document.getElementsByClassName('navigation'))
                document.getElementsByClassName('navigation')[0].style['color']="red";
                }}>
                <div className='navdivvalue'>
                  <div className="navigationvalue">{value}</div>
                </div>
                <div style={{ border: '1px solid #ecf1f0', display: 'flex', justifyContent: 'flex-end' }}></div>
              </div>
            );
          })} */}
        {/* </Card> */}
      </div>
    </div>
  );
}

export default Productcreate;
