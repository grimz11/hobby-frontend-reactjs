"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
require("./index.less");
var react_1 = require("react");
var antd_1 = require("antd");
var icons_1 = require("@ant-design/icons");
var mobx_react_1 = require("mobx-react");
var storeIdentifier_1 = require("../../stores/storeIdentifier");
var catResponseDto_1 = require("../../services/catCollection/dto/catResponseDto");
var react_router_dom_1 = require("react-router-dom");
var appconst_1 = require("../../utils/appconst");
var react_images_upload_1 = require("react-images-upload");
var CatDetail = mobx_react_1.inject(storeIdentifier_1["default"].CatCollectionStore)(mobx_react_1.observer(function (_a) {
    var _b;
    var _c, _d, _e, _f;
    var data = _a.data, id = _a.id, catCollectionStore = _a.catCollectionStore;
    var form = antd_1.Form.useForm()[0];
    var history = react_router_dom_1.useHistory();
    var _g = react_1.useState(false), updateState = _g[0], setUpdateState = _g[1];
    var _h = react_1.useState(false), inputEl = _h[0], setInputEl = _h[1];
    var _j = react_1["default"].useState(""), image = _j[0], setImage = _j[1];
    var _k = react_1["default"].useState(false), imageChanged = _k[0], setImageChanged = _k[1];
    var createState = data === null && id === "create";
    var inputRef = react_1.useRef();
    react_1.useEffect(function () {
        var _a;
        if (!inputEl) {
            (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            return;
        }
    }, [inputEl]);
    var handleUpdateClick = function () {
        setUpdateState(!updateState);
    };
    console.log("values", data);
    var handleSaveClick = function () {
        var formData = new FormData();
        formData.append("files", image);
        if (createState) {
            form.validateFields().then(function (values) { return __awaiter(void 0, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log("photo", values.photo);
                            console.log("form", image);
                            console.log("formData", formData);
                            payload = {
                                age: values.age,
                                name: values.name,
                                description: values.description,
                                breed: values.breed,
                                photo: formData,
                                status: catResponseDto_1.CatStatus.PUBLISHED
                            };
                            return [4 /*yield*/, (catCollectionStore === null || catCollectionStore === void 0 ? void 0 : catCollectionStore.createCat(payload))];
                        case 1:
                            _a.sent();
                            setUpdateState(!updateState);
                            if (catCollectionStore === null || catCollectionStore === void 0 ? void 0 : catCollectionStore.$catsData) {
                                history.push("/home");
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
            return;
        }
        else {
            form.validateFields().then(function (values) { return __awaiter(void 0, void 0, void 0, function () {
                var payload;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            payload = {
                                age: values.age,
                                name: values.name,
                                description: values.description,
                                breed: values.breed,
                                photo: "",
                                status: catResponseDto_1.CatStatus.PUBLISHED
                            };
                            return [4 /*yield*/, (catCollectionStore === null || catCollectionStore === void 0 ? void 0 : catCollectionStore.updateCat(id, payload))];
                        case 1:
                            _a.sent();
                            setUpdateState(!updateState);
                            if (catCollectionStore === null || catCollectionStore === void 0 ? void 0 : catCollectionStore.$cat) {
                                history.push("/home");
                            }
                            return [2 /*return*/];
                    }
                });
            }); });
            return;
        }
    };
    var handleDelete = function () {
        antd_1.Modal.confirm({
            title: "Confirm",
            icon: react_1["default"].createElement(icons_1.ExclamationCircleOutlined, null),
            content: "Are you sure you want to delete the item?",
            okText: "Yes",
            onOk: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (catCollectionStore === null || catCollectionStore === void 0 ? void 0 : catCollectionStore.deleteCat(id))];
                        case 1:
                            _a.sent();
                            history.push("/home");
                            return [2 /*return*/];
                    }
                });
            }); },
            cancelText: "No"
        });
    };
    var uploadImage = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData;
        return __generator(this, function (_a) {
            formData = new FormData();
            formData.append("photo", image);
            return [2 /*return*/];
        });
    }); };
    var onChangeAvatar = function (file, localAvatar) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            (_a = document.querySelector(".avatar")) === null || _a === void 0 ? void 0 : _a.setAttribute("src", localAvatar[0]);
            setImage(file[0].files);
            console.log("file", file[0].files);
            setImageChanged(true);
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(antd_1.Row, { style: { marginTop: "40px" } },
        react_1["default"].createElement(antd_1.Col, { className: "cat-parent" },
            react_1["default"].createElement("div", { onClick: function () { return history.push("/home"); }, className: "back" }, "Back"),
            react_1["default"].createElement(antd_1.Card, { hoverable: true, size: "default", actions: !updateState && !createState
                    ? [
                        react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.EditOutlined, null), onClick: handleUpdateClick, className: "primary" }, "Update"),
                        react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.DeleteOutlined, null), onClick: handleDelete, className: "danger" }, "Delete"),
                    ]
                    : [
                        react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.SaveOutlined, null), onClick: handleSaveClick, htmlType: "submit", className: "primary" }, "Save"),
                        react_1["default"].createElement(antd_1.Button, { icon: react_1["default"].createElement(icons_1.CloseCircleOutlined, null), onClick: createState
                                ? function () { return form.resetFields(); }
                                : handleUpdateClick, className: "danger" }, createState ? "Clear" : "Cancel"),
                    ] },
                react_1["default"].createElement(antd_1.Form, { className: "cat-form-parent", layout: "horizontal", name: "basic", form: form, initialValues: (_b = {},
                        _b["name"] = data === null || data === void 0 ? void 0 : data.name,
                        _b["description"] = data === null || data === void 0 ? void 0 : data.description,
                        _b["age"] = data === null || data === void 0 ? void 0 : data.age,
                        _b["breed"] = data === null || data === void 0 ? void 0 : data.breed,
                        _b["photo"] = data === null || data === void 0 ? void 0 : data.photo,
                        _b) },
                    react_1["default"].createElement("div", { className: "cat-form-info" },
                        react_1["default"].createElement("div", { className: "cat-left-input" },
                            react_1["default"].createElement(antd_1.Form.Item, { name: "name", rules: [{ required: true }] },
                                react_1["default"].createElement(antd_1.Input, { ref: function (el) {
                                        inputRef.current = el;
                                        setInputEl(!!el);
                                    }, className: "title", name: data === null || data === void 0 ? void 0 : data.name, disabled: (_c = (!updateState && !createState)) !== null && _c !== void 0 ? _c : false })),
                            react_1["default"].createElement(antd_1.Form.Item, { name: "breed", rules: [{ required: true }] },
                                react_1["default"].createElement(antd_1.Input, { name: data === null || data === void 0 ? void 0 : data.breed, disabled: (_d = (!updateState && !createState)) !== null && _d !== void 0 ? _d : false })),
                            react_1["default"].createElement(antd_1.Form.Item, { name: "age", rules: [{ required: true, type: "number" }] },
                                react_1["default"].createElement(antd_1.InputNumber, { style: { width: "100%" }, name: data === null || data === void 0 ? void 0 : data.age, disabled: (_e = (!updateState && !createState)) !== null && _e !== void 0 ? _e : false }))),
                        react_1["default"].createElement("div", { className: "cat-img" },
                            react_1["default"].createElement(antd_1.Form.Item, { name: "photo", rules: [{ required: true }] }, (data === null || data === void 0 ? void 0 : data.photo) ? (react_1["default"].createElement(antd_1.Image, { className: "avatar", src: appconst_1["default"].appBaseUrl + "/" + (data === null || data === void 0 ? void 0 : data.photo), style: {
                                    height: 220,
                                    width: 220,
                                    borderRadius: "100%"
                                } })) : (react_1["default"].createElement("div", null,
                                react_1["default"].createElement(react_images_upload_1["default"], { withIcon: false, maxFileSize: 5242880, imgExtension: [".jpg", ".gif", ".png", ".gif"], onChange: onChangeAvatar, label: "Max file size: 5mb, accepted: jpg | gif | png ", singleImage: true, withPreview: true })))))),
                    react_1["default"].createElement(antd_1.Form.Item, { name: "description", rules: [{ required: true }] },
                        react_1["default"].createElement(antd_1.Input.TextArea, { name: data === null || data === void 0 ? void 0 : data.description, autoSize: true, disabled: (_f = (!updateState && !createState)) !== null && _f !== void 0 ? _f : false })))))));
}));
exports["default"] = CatDetail;
