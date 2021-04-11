import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React from "react";

export const confirm = () => {
  Modal.confirm({
    title: "Confirm",
    icon: <ExclamationCircleOutlined />,
    content: "Are you sure you want to delete the item?",
    okText: "Yes",
    cancelText: "No",
  });
};

export const success = () => {
  Modal.success({
    title: "success",
    icon: <ExclamationCircleOutlined />,
    content: "Bla bla ...",
    okText: "确认",
    cancelText: "取消",
  });
};

export const CustomModal = { ...confirm, ...success };
