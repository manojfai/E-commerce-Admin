import './style.scss'
const Contentheader = ({ contentTitle, contentParagraph, buttonLabel, width }) => {
  return (
    <div
    className="contentheader"
    //  style={{ display: 'flex', width: '100%' }}
     >
      <div 
      className="leftcontentheader"
    //   style={{ width: '70%', display: 'flex', flexDirection: 'column', gap: '10px' }}
      >
        <div className="headertitle">{contentTitle}</div>
        <div className="headerparagraph">{contentParagraph}</div>
      </div>
      <div 
      className="rightcontentheader"
    //   style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start', width: '30%' }}
    >
        <button style={{width:width}} className="createbutton">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Contentheader;
