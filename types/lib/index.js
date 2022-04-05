"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const react_native_fetch_blob_1 = __importDefault(require("react-native-fetch-blob"));
const js_base64_1 = require("js-base64");
const { fs, config } = react_native_fetch_blob_1.default;
const onDownload = (options) => {
    return new Promise((resolve, reject) => {
        const name = js_base64_1.Base64.encode(options.url);
        const path = fs.dirs.MainBundleDir + '/' + name;
        fs.exists(path).then((isExist) => {
            if (isExist) {
                return resolve("file://" + path);
            }
            else {
                config({ fileCache: true, path: path }).fetch('GET', options === null || options === void 0 ? void 0 : options.url).then(() => {
                    const file = "file://" + path;
                    return resolve(file);
                }).catch((error) => reject(error));
            }
        }).catch((error) => reject(error));
    });
};
const start = (url) => {
    return new Promise((resolve, reject) => {
        try {
            react_native_1.PermissionsAndroid.request(react_native_1.PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((granted) => {
                if (granted === react_native_1.PermissionsAndroid.RESULTS.GRANTED) {
                    onDownload({ url }).then((result) => resolve(result)).catch((error) => reject(error));
                }
                else {
                    reject({ message: 'Permission Denied' });
                }
            }).catch((error) => reject(error));
        }
        catch (error) {
            reject(error);
        }
    });
};
exports.default = { start };
