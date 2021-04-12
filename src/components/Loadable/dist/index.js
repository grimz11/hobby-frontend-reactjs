"use strict";
exports.__esModule = true;
var react_loadable_1 = require("react-loadable");
var react_1 = require("react");
var antd_1 = require("antd");
var LoadableComponent = function (component) {
    return react_loadable_1["default"]({
        loader: component,
        loading: Loading
    });
};
var Loading = function () { return (react_1["default"].createElement("div", { style: { paddingTop: 100, textAlign: "center" } },
    react_1["default"].createElement(antd_1.Spin, { size: "large" }))); };
exports["default"] = LoadableComponent;
