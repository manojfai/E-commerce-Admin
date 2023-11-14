import { Card, Form, Radio } from 'antd';
import { images } from '../../../../utils/images';
import './style.scss';
import Inputcomponent from '../../../../component/Input/input';
import ImageUploaderAntd from '../../../../component/AddImage/ImageUploaderAntd';
import Select from '../../../../component/Select/select';
import Checkboxcomponent from '../../../../component/Checkbox/checkbox';
import Contentnav from '../../../../component/Contentnav/contentNavigation';
import Createheader from '../Component/Create/createheader';
import applabel from '../../../../utils/env.json'

const Productcombocreate = () => {
  return (
    <div 
    // style={{ width: '100%', height: 'auto', display: 'flex', flexDirection: 'column', gap: '2em' }}
    className='createpage'
    >
        <Createheader
        title={applabel.catelog.products.create.producttitle}
        paragraph={applabel.catelog.products.create.productpara}
      />
      {/* <div style={{ display: 'flex', width: '100%' }}>
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

          <button style={{}} className="buttons">
            Save
          </button>
        </div>
      </div> */}
      <div 
    //   style={{ display: 'flex', gap: '1em', width: '100%' }}
      className='createcontent'>
        <div 
        // style={{ width: '65%' }}
        className='leftcreatecontent'>
          <Form
            name="basic"
            layout="vertical"
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            style={{ display: 'flex', flexDirection: 'column', gap: '2em' }}
            autoComplete="off">
                <Card>
                <div className='productinfo'>Product Combo</div>
          <Form.Item
                name="product_comboname"
                label={<label className='label'>Product Combo Name<span className='requirestar'>*</span></label>}
                hasFeedback
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="product_combo_price"
                label={<label className='label'>Product Combo Price</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="subtext"
                label={<label className='label'>Subtext</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
          <Form.Item
                name="short_prd_combo_name"
                label={<label className='label'>Short Product Combo Name<span className='requirestar'>*</span></label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
                </Card>
                <Card >
          <div 
        //   style={{display:"flex",gap:"2em",flexDirection:"column"}}
        className='createimgcard'>
          <div 
          className='imgcardhead'
        //   style={{display:"flex",width:"100%"}}
        >
            <div 
            // style={{width:"60%",display:"flex",flexDirection:"column",gap:"0.5em"}}
            className='leftimgcard'
            >
              <div className='addimghead'>
              Add Image
              </div>
              <div className='addimgmsg'>
              Recommended size (1000px*1000px)
              </div>
            </div>
            {/* <div style={{display:"flex",width:"40%",justifyContent:"flex-end",alignItems:"flex-start"}} >
              <button className='butaddimg'>Add Image</button>
            </div> */}
          </div>
          <ImageUploaderAntd />
          </div>
        </Card>
        <Card>
        <div 
        // style={{display:"flex",gap:"2em",flexDirection:"column"}}
        className='createimagecard'>
          <div 
        //   style={{display:"flex",width:"100%"}}
        className='imgcardhead'
        >
            <div 
            className='prodleftimgcard'
            // style={{width:"100%",display:"flex",flexDirection:"column",gap:"0.5em"}}
            >
              <div className='addimghead'>
              Select applicable products              </div>
              <div className='addimgmsg'>
              Add one or more products to create product combo              </div>
              <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"0.5em"}}>
                <img src={images.productsearch_ic}></img>
                <button className='buttonadd'>Add Products</button>
                </div>
            </div>
           
            {/* <div style={{display:"flex",width:"40%",justifyContent:"flex-end",alignItems:"flex-start"}} >
              <button className='butaddimg'>Add Image</button>
            </div> */}
          </div>
          </div>
        </Card>
        <Card>
        <div className='productinfo'>Pricing</div>
        <Form.Item
                name="shipinseperatepage"
                hasFeedback
              >
                <Radio className="checkboxlabel">Enable Price/Unit</Radio>
                <div className='storeavail'>You can enable/disable pricing of product or service per unit.</div>
          </Form.Item>
          <Form.Item
                name="dimension"
                label={<label className='label'>Product Combo Price</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', marginBottom:0}}
                hasFeedback
              >
                <Inputcomponent />
          </Form.Item>
         
          <Form.Item
                name="width"
                label={<label className='label'>Unit</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                {/* <Inputcomponent /> */}
                <Select options={[{label:"demo",value:"demo"}]}/>
          </Form.Item>
          <Form.Item
                name="includetax"
                // style={{ display: 'inline-block', width: 'calc(50% - 1em)' }}
                hasFeedback
              >
                <Checkboxcomponent label="Includes Tax" className="checkboxlabel" defaultChecked={false}/>              
          </Form.Item>
          <Form.Item
                name="height"
                label={<label className='label'>Charges</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)'}}
                hasFeedback
              >
                {/* <Inputcomponent /> */}
                <Select options={[{label:"demo",value:"demo"}]}/>
          </Form.Item>
          <Form.Item
                name="length"
                label={<label className='label'>Tax</label>}
                style={{ display: 'inline-block', width: 'calc(50% - 1em)', margin: '0 1em' }}
                hasFeedback
              >
                {/* <Inputcomponent />
                 */}
                 <Select options={[{label:"demo",value:"demo"}]}/>
          </Form.Item>
        </Card>
            </Form>
        </div>
        <Contentnav navValue={['product', 'information', 'image', 'pricing']} />
      </div>     
    </div>
  );
};

export default Productcombocreate;
