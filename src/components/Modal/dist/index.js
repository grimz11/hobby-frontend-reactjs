"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.CustomModal = exports.success = exports.confirm = void 0;
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = require("react");
exports.confirm = function () {
    antd_1.Modal.confirm({
        title: "Confirm",
        icon: react_1["default"].createElement(icons_1.ExclamationCircleOutlined, null),
        content: "Are you sure you want to delete the item?",
        okText: "Yes",
        cancelText: "No"
    });
};
exports.success = function () {
    antd_1.Modal.success({
        title: "success",
        icon: react_1["default"].createElement(icons_1.ExclamationCircleOutlined, null),
        content: "Bla bla ...",
        okText: "确认",
        cancelText: "取消"
    });
};
exports.CustomModal = __assign(__assign({}, exports.confirm), exports.success);
