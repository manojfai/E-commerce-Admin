import './style.scss'
import { images } from '../../../../utils/images';
import { Button, Card, Form } from 'antd';
import Input from "../../../../component/Input/input"

function Productcreate() {
  return (
    <div style={{ width: '100%', height: 'auto', display:"flex", flexDirection:"column",gap:"2em" }}>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ display: 'flex', gap: '1em', width:"70%" }}>
          <div>
            <img src={images.back_ic} width="24px" height="24px"></img>
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div className="listproductshead">Create Product</div>
            <div className="listproductspara">
              Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing
            </div>
          </div>
        </div>
        <div style={{ display: 'flex',gap:"1em", justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}>
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
      <div style={{display:"flex",gap:"1em",width:"100%"}}>
        <Card style={{width:"65%"}}>
            <div>
                Product Information
            </div>
            <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: window.innerWidth < 600 ? "" : 600,
              marginTop: "10px",
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            >

            </Form>
            {/* <Input label="Name"/> */}
        </Card>
        {/* <div>
        </div> */}
        <Card style={{width:"35%"}}>
            <div style={{marginBottom:"1em"}}>Quick Navigation</div>
            {["product","information","image","pricing"].map((value)=>{
                return(
                    <>
                    <div className='navigationvalue'>{value}</div>
                    <div style={{border:"1px solid #ecf1f0",marginTop:"1em",marginBottom:"1em"}}></div>
                    </>
                )
            })}
        </Card>
      </div>
    </div>
  );
}

export default Productcreate;
