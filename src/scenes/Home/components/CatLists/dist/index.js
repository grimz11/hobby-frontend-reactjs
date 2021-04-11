"use strict";
exports.__esModule = true;
require("./index.less");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../../../stores/storeIdentifier");
var react_1 = require("react");
var icons_1 = require("@ant-design/icons");
var appconst_1 = require("../../../../utils/appconst");
var Meta = antd_1.Card.Meta;
var CatLists = mobx_react_1.inject(storeIdentifier_1["default"].CatCollectionStore)(mobx_react_1.observer(function (_a) {
    var data = _a.data;
    var history = react_router_dom_1.useHistory();
    var location = react_router_dom_1.useLocation();
    var matchedLocation = location.pathname.includes("/cat");
    return (react_1["default"].createElement(antd_1.Row, { gutter: 16, style: { marginTop: "40px" } },
        react_1["default"].createElement(antd_1.Col, { span: 8 },
            react_1["default"].createElement(react_router_dom_1.Link, { to: "cat/create" },
                react_1["default"].createElement(antd_1.Card, { title: "Add Cat", className: "add-cat", hoverable: true, size: "default", 
                    // cover={<PlusOutlined style={{ fontSize: "150px" }} />}
                    cover: react_1["default"].createElement(icons_1.PlusCircleOutlined, { style: { fontSize: "150px" } }) }))),
        data.map(function (item) {
            return (react_1["default"].createElement(antd_1.Col, { span: 8, key: "cat-" + item.id, className: "cat-card-inHome" },
                matchedLocation && (react_1["default"].createElement("span", { onClick: function () { return history.push("/home"); }, className: "back" }, "Back")),
                react_1["default"].createElement(react_router_dom_1.Link, { to: "cat/" + item.id },
                    react_1["default"].createElement(antd_1.Card, { className: "card", hoverable: true, size: "default", cover: react_1["default"].createElement("img", { alt: "example", height: "230", width: "200", src: appconst_1["default"].appBaseUrl + "/" + item.photo, style: { objectFit: "cover" } }) },
                        react_1["default"].createElement(Meta, { title: item.name }),
                        react_1["default"].createElement(Meta, { description: item.breed }),
                        react_1["default"].createElement(Meta, { description: item.age }),
                        react_1["default"].createElement(Meta, { description: !matchedLocation && item.description.length > 30
                                ? "\"" + item.description.slice(0, 30) + "\" - Read more"
                                : "\"" + item.description + "\"" })))));
        })));
}));
exports["default"] = CatLists;
