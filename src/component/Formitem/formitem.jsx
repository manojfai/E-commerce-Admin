import { Form } from "antd"


const Formitem = ({name,label,style,render}) => {
    return(
        <Form.Item
                name={name}
                label = {label}
                style={style}
                hasFeedback
              >
                {render}
                {/* <Radio className="checkboxlabel">Ship in Separate Package</Radio>
                <div className='storeavail'>The product will be packed and delivered in separate package.</div> */}
          </Form.Item>
    )
}

export default Formitem;