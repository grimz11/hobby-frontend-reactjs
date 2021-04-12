import Loadable from "react-loadable";
import React from "react";
import { Spin } from "antd";

const LoadableComponent = (component: any) =>
  Loadable({
    loader: component,
    loading: Loading,
  });

const Loading = () => (
  <div style={{ paddingTop: 100, textAlign: "center" }}>
    <Spin size="large" />
  </div>
);

export default LoadableComponent;
