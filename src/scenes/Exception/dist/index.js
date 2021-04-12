"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
require("./index.less");
var React = require("react");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var _404_png_1 = require("../../assets/images/404.png");
var Exception = /** @class */ (function (_super) {
    __extends(Exception, _super);
    function Exception() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Exception.prototype.render = function () {
        var exception = [
            {
                errorCode: "404",
                errorImg: _404_png_1["default"],
                errorDescription: "Sorry, the page you visited does not exist"
            },
        ];
        var params = new URLSearchParams(this.props.match.params.type);
        var type = params.get("type");
        var error = exception.find(function (x) { return x.errorCode === type; });
        if (error == null) {
            error = exception[0];
        }
        return (React.createElement(antd_1.Row, { style: { marginTop: 150 } },
            React.createElement(antd_1.Col, { xs: { span: 7, offset: 1 }, sm: { span: 7, offset: 1 }, md: { span: 7, offset: 1 }, lg: { span: 10, offset: 4 }, xl: { span: 10, offset: 4 }, xxl: { span: 10, offset: 4 } },
                React.createElement(antd_1.Avatar, { shape: "square", className: "errorAvatar", src: error.errorImg })),
            React.createElement(antd_1.Col, { xs: { span: 7, offset: 1 }, sm: { span: 7, offset: 1 }, md: { span: 7, offset: 1 }, lg: { span: 5, offset: 1 }, xl: { span: 5, offset: 1 }, xxl: { span: 5, offset: 1 }, style: { marginTop: 75 } },
                React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                    React.createElement("h1", { className: "errorTitle" }, error.errorCode)),
                React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                    React.createElement("h5", { className: "errorDescription" },
                        " ",
                        error.errorDescription)),
                React.createElement(antd_1.Col, { xs: { span: 24, offset: 0 }, sm: { span: 24, offset: 0 }, md: { span: 24, offset: 0 }, lg: { span: 24, offset: 0 }, xl: { span: 24, offset: 0 }, xxl: { span: 24, offset: 0 } },
                    React.createElement(antd_1.Button, { style: { backgroundColor: "#51b3f1", color: "#fff" } },
                        React.createElement(react_router_dom_1.Link, { to: {
                                pathname: "/"
                            } }, "Back to Home")))),
            React.createElement(antd_1.Col, null)));
    };
    return Exception;
}(React.Component));
exports["default"] = Exception;
