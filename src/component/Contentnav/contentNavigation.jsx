import { Card } from "antd";

const Contentnav = ({ navValue }) => {
  return (
    navValue?.length > 0 && (
      <Card style={{ width: '35%' }}>
      <div style={{ marginBottom: '1em' }} className="titlenav">
        Quick Navigation
      </div>
      {navValue.map((value,index) => {
        return (
          <div className="navigation ${index === selectedIndex ? 'selected' : ''}" onClick={() => {
            const navigationElements = document.getElementsByClassName('navigation');
            for (let i = 0; i < navigationElements.length; i++) {
              navigationElements[i].classList.remove('selected');
            }    
            document.getElementsByClassName('navigation')[index].classList.add('selected');
            }}>
            <div className='navdivvalue'>
              <div className="navigationvalue">{value}</div>
            </div>
            {navValue.length-1 != index && <div style={{ border: '1px solid #ecf1f0', display: 'flex', justifyContent: 'flex-end' }}></div>}
          </div>
        );
      })}
    </Card>
  ))
};

export default Contentnav;
