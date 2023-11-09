import React, { useState, useRef } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Modal, Upload } from "antd";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ImageUploaderAntd = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const customRequest = async (options) => {
    const { file, onProgress, onSuccess, onError } = options;

    // Simulate an upload process
    setUploading(true);
    onProgress({ percent: 0 });

    try {
      // Simulate a delay for the upload process
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Replace this with your actual upload logic (e.g., using an API)
      // In this example, we're just marking the upload as successful.
      onProgress({ percent: 100 });
      onSuccess();
    } catch (error) {
      onError(error);
    }

    setUploading(false);
  };

  const inputRef = useRef(null);

  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        customRequest={customRequest}
        onPreview={handlePreview}
        onChange={handleChange}
        multiple={true}
      >
        <div onClick={() => inputRef.current.click()}>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      </Upload>
      <input
        type="file"
        accept="image/*"
        multiple
        style={{ display: "none" }}
        ref={inputRef}
        onChange={(e) => {
          const newFiles = Array.from(e.target.files);
          setFileList([...fileList, ...newFiles]);
        }}
      />
      <Modal
        visible={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
};

export default ImageUploaderAntd;
