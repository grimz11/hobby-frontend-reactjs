"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.routers = exports.appRouters = void 0;
var index_1 = require("./../Loadable/index");
exports.appRouters = [
    {
        path: "/",
        exact: true,
        name: "home",
        title: "Home",
        icon: "home",
        component: index_1["default"](function () { return Promise.resolve().then(function () { return require("../../components/Layout/AppLayout"); }); }),
        isLayout: true,
        showInMenu: false
    },
    {
        path: "/home",
        name: "home",
        permission: "",
        title: "Home",
        showInMenu: true,
        component: index_1["default"](function () { return Promise.resolve().then(function () { return require("../../scenes/Home"); }); })
    },
    {
        path: "/cat/:id",
        name: "cat",
        permission: "",
        title: "Cat",
        showInMenu: true,
        component: index_1["default"](function () { return Promise.resolve().then(function () { return require("../../scenes/Home/components/CatView"); }); })
    },
    {
        path: "/cat/create",
        name: "cat",
        permission: "",
        title: "Cat",
        showInMenu: true,
        component: index_1["default"](function () { return Promise.resolve().then(function () { return require("../CatDetail"); }); })
    },
    {
        path: "/exception?:type",
        permission: "",
        title: "exception",
        name: "exception",
        icon: "info-circle",
        showInMenu: false,
        component: index_1["default"](function () { return Promise.resolve().then(function () { return require("../../scenes/Exception"); }); })
    },
];
exports.routers = __spreadArrays(exports.appRouters);
