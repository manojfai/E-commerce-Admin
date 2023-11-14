import { images } from '../../../../../utils/images';
import applabel from '../../../../../utils/env.json';
import './style.scss';

const Createheader = ({ title, paragraph }) => {
  return (
    <div className="createheader">
      <div className="leftcreateheader">
        <div>
          <img src={images.back_ic} width="24px" height="24px"></img>
        </div>
        <div className="headercontainer">
          <div className="headercreatetitle">{title}</div>
          <div className="headercreateparagraph">{paragraph}</div>
        </div>
      </div>
      <div className="rightcreateheader">
        <button style={{}} className="buttoncancel">
          {applabel.catelog.products.create.cancelbutton}
        </button>
        <button style={{}} className="buttonsave">
          {applabel.catelog.products.create.savebutton}
        </button>
      </div>
    </div>
  );
};

export default Createheader;
