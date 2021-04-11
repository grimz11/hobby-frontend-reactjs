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
require("./AppLayout.less");
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_document_title_1 = require("react-document-title");
var Footer_1 = require("../../components/Footer");
var Header_1 = require("../../components/Header");
var antd_1 = require("antd");
var ProtectedRoute_1 = require("../../components/Router/ProtectedRoute");
var router_config_1 = require("../Router/router.config");
var utils_1 = require("../../utils/utils");
var NotFoundRoute_1 = require("../Router/NotFoundRoute");
var Content = antd_1.Layout.Content;
var AppLayout = /** @class */ (function (_super) {
    __extends(AppLayout, _super);
    function AppLayout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppLayout.prototype.render = function () {
        var _a = this.props, history = _a.history, pathname = _a.location.pathname;
        var path = this.props.match.path;
        var layout = (React.createElement(antd_1.Layout, { style: { minHeight: "100vh" }, className: "site-layout-background" },
            React.createElement(Header_1["default"], null),
            React.createElement(Content, { style: { padding: "0 50px" } },
                React.createElement(react_router_dom_1.Switch, null,
                    pathname === "/" && React.createElement(react_router_dom_1.Redirect, { from: "/", to: "/home" }),
                    router_config_1.appRouters
                        .filter(function (item) { return !item.isLayout; })
                        .map(function (route, index) { return (React.createElement(react_router_dom_1.Route, { exact: true, key: index, path: route.path, render: function (props) { return (React.createElement(ProtectedRoute_1["default"], { component: route.component, permission: route.permission })); } })); }),
                    pathname !== "/" && React.createElement(NotFoundRoute_1["default"], null))),
            React.createElement(Footer_1["default"], null)));
        return (React.createElement(react_document_title_1["default"], { title: utils_1["default"].getPageTitle(pathname) }, layout));
    };
    return AppLayout;
}(React.Component));
exports["default"] = AppLayout;
