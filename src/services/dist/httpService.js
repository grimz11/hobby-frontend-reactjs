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
var appconst_1 = require("../utils/appconst");
var antd_1 = require("antd");
var axios_1 = require("axios");
var qs = require("qs");
var http = axios_1["default"].create({
    baseURL: appconst_1["default"].appBaseUrl,
    timeout: 30000,
    paramsSerializer: function (params) {
        return qs.stringify(params, {
            encode: false
        });
    }
});
http.interceptors.response.use(function (response) {
    return response;
}, function (error) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) === 400) {
            antd_1.Modal.error({
                title: (_b = error.response.data) === null || _b === void 0 ? void 0 : _b.error,
                content: (_c = error.response.data) === null || _c === void 0 ? void 0 : _c.message
            });
        }
        else if (((_d = error.response) === null || _d === void 0 ? void 0 : _d.status) === 500) {
            antd_1.Modal.error({
                title: (_e = error.response.data) === null || _e === void 0 ? void 0 : _e.error,
                content: (_f = error.response.data) === null || _f === void 0 ? void 0 : _f.message
            });
        }
        else if (!error.response) {
            if (axios_1["default"].isCancel(error)) {
            }
            else {
                antd_1.Modal.error({ content: "UnknownError" });
            }
        }
        return [2 /*return*/, Promise.reject(error)];
    });
}); });
exports["default"] = http;
