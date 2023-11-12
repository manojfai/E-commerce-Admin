import React, { useState } from 'react';
// import './index.css';
import { Button, Modal, Input, message } from 'antd';
const { TextArea } = Input;

const EditInventoryModal = ({ visible, onCancel }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [note, setNote] = useState('');

  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };

  const handleOk = () => {
    // Validate if the note is filled
    if (note.trim() === '') {
      const errorMessageKey = 'noteError';
      message.error({
        content: 'Please add a note before confirming.',
        key: errorMessageKey
      });
      return;
    }

    // Continue with the confirmation action
    onCancel(); // Close the modal
    // Additional logic for OK action...
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = e => {
    setNote(e.target.value);
  };

  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
        Open Modal
      </Button> */}
      <Modal
        title={
          <div style={{ color: '#000000', fontSize: '20px', fontWeight: 400, lineHeight: '24.2px' }}>
            Are you sure you want to edit the inventory?
          </div>
        }
        visible={visible}
        onOk={handleOk}
        onCancel={onCancel}
        width="491px"
        style={{ height: '364px' }}
        closable={false}
        footer={null}>
        <p style={{ marginBottom: 0, fontWeight: 400, size: '14px' }}>
          Add Note<span style={{ color: '#CD201F', fontWeight: 400, fontSize: '14px', lineHeight: '20px' }}>*</span>
        </p>
        <TextArea
          maxLength={100}
          onChange={onChange}
          style={{
            height: 120,
            resize: 'none'
          }}
        />
        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between' }}>
          <Button type="default" onClick={onCancel} style={{ width: 200, height: 44 }}>
            Cancel
          </Button>
          <Button type="primary" onClick={handleOk} style={{ width: 200, height: 44, backgroundColor: '#1E2640' }}>
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default EditInventoryModal;
