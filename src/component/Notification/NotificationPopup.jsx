import React from "react";
import { Button, notification, Space } from "antd";
import { CheckCircleOutlined, SmileOutlined } from "@ant-design/icons";

const NotificationPopup = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    let message, description, backgroundColor;

    switch (type) {
      case "success":
        message = "Product combo added successfully";
        description = "You have added a new product.";
        backgroundColor = "green";
        break;
      case "info":
        message = "Catalog combo added successfully";
        description = "You have added a catalog.";
        backgroundColor = "blue";
        break;
      case "warning":
        message = "Warning Message";
        description = "This is a warning message.";
        backgroundColor = "orange";
        break;
      case "error":
        message = "Error Message";
        description = "An error occurred.";
        backgroundColor = "red";
        break;
      default:
        message = "Default Message";
        description = "This is a default message.";
        backgroundColor = "gray";
        break;
    }

    api[type]({
      message: <span style={{ color: "white" }}>{message}</span>,
      description: <span style={{ color: "white" }}>{description}</span>,
      icon: (
        <CheckCircleOutlined
          style={{
            color: "green",
            borderRadius: "12px",
            backgroundColor: "white",
          }}
        />
      ),
      style: {
        backgroundColor,
      },
      closeIcon: (
        <div style={{ color: "white" }} className="custom-notification-text">
          X
        </div>
      ),
    });
  };

  return (
    <>
      {contextHolder}
      <Space>
        <Button onClick={() => openNotificationWithIcon("success")}>
          Success
        </Button>
        <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
        <Button onClick={() => openNotificationWithIcon("warning")}>
          Warning
        </Button>
        <Button onClick={() => openNotificationWithIcon("error")}>Error</Button>
      </Space>
    </>
  );
};

export default NotificationPopup;
