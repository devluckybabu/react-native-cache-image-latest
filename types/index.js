"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const CacheImage_1 = __importDefault(require("./lib/CacheImage"));
react_native_1.LogBox.ignoreLogs(["Require cycles are allowed, but can result in uninitialized values"]);
exports.default = CacheImage_1.default;
