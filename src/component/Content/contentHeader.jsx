import React, { useState } from 'react';
import EditInventoryModal from '../../pages/Merchant/Inventory/editinvertorymodal';
import './style.scss';
import { useNavigate } from 'react-router-dom';

const Contentheader = ({ contentTitle, contentParagraph, buttonLabel, width, editconfirmButton,navigatepath }) => {
  // for editconfirmButton
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlecreatebuttonclick = () => {
    navigatepath &&  navigate(navigatepath);
  }

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
        {buttonLabel && (
          <button style={{ width: width }} onClick={handlecreatebuttonclick} className="createbutton">
            {buttonLabel}
          </button>
        )}

        {editconfirmButton && (
          // this button is for opening edit confirm modal in inventary-managestock
          <button style={{ width: width }} className="createbutton" onClick={showModal}>
            {editconfirmButton}
          </button>
        )}
        <EditInventoryModal visible={isModalVisible} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default Contentheader;
