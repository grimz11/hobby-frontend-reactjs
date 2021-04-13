import AppConsts from "../utils/appconst";
import { Modal } from "antd";
import axios from "axios";
import { Html5TwoTone } from "@ant-design/icons";

const qs = require("qs");

const http = axios.create({
  baseURL: AppConsts.appBaseUrl,
  timeout: 30000,
  paramsSerializer: function (params) {
    return qs.stringify(params, {
      encode: false,
    });
  },
});

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log("error", error.response?.data);
    if (error.response?.status === 400) {
      Modal.error({
        title: error.response.data?.error,
        content: error.response.data?.message,
      });
    } else if (error.response?.status === 500) {
      Modal.error({
        title: error.response.data?.error,
        content: error.response.data?.message,
      });
    } else if (!error.response) {
      if (axios.isCancel(error)) {
      } else {
        Modal.error({ content: "UnknownError" });
      }
    }

    return Promise.reject(error);
  },
);

export default http;
