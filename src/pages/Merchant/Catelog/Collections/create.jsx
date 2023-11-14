import { Card, Form } from 'antd';
import { images } from '../../../../utils/images';
import Inputcomponent from '../../../../component/Input/input';
import './style.scss'

const Collectionscreate = () => {
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
        <div style={{ width: '65%' }}>
          <Form
            name="basic"
            layout="vertical"
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
            style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}
            autoComplete="off">
            <Card>
              <div className="productinfo">Basic Information</div>
              <Form.Item
                name="product_comboname"
                label={
                  <label className="label">Collection Name<span className="requirestar">*</span>
                  </label>
                }
                hasFeedback
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="product_combo_price"
                label={<label className="label">Short Collection Name</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="subtext"
                label={<label className="label">URL</label>}
                // style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
              <Form.Item
                name="short_prd_combo_name"
                label={
                  <label className="label">
                    Product Description
                  </label>
                }
                // style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback>
                <Inputcomponent />
              </Form.Item>
            </Card>
            <Card>
            <div className="productinfo">Product Combo<span className='label'> (Add atleast 4)</span><span className="requirestar">*</span></div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"10em"}}>
                <button className='addpcbutton'>Add Products Combo</button>
            </div>
            </Card>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Collectionscreate;
