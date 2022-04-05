"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const _1 = __importDefault(require("."));
;
const CacheImage = ({ source, style, onLoad, onError, onLoadEnd, onLayout, children, blurRadius, accessible, resizeMode, imageStyle, onLoadStart, defaultSource, accessibilityHint, AccessibilityRole, AccessibilityState, AccessibilityValue, accessibilityLabel, loadingIndicatorSource, accessibilityLiveRegion, accessibilityViewIsModal, accessibilityElementsHidden, accessibilityIgnoresInvertColors }) => {
    const [image, setImage] = react_1.default.useState(undefined);
    react_1.default.useEffect(() => {
        let mounted = true;
        if (source && typeof source === "object" && (source === null || source === void 0 ? void 0 : source.uri)) {
            _1.default.start(source === null || source === void 0 ? void 0 : source.uri).then((file) => {
                if (mounted)
                    setImage({ uri: file });
            }).catch(() => {
                if (mounted)
                    setImage(source);
            });
        }
        else if (typeof source === "number") {
            if (mounted)
                setImage(source);
        }
        else {
            if (mounted)
                setImage(undefined);
        }
        ;
        return () => {
            mounted = false;
        };
    }, []);
    return (<react_native_1.ImageBackground source={image} onLoad={onLoad} onError={onError} onLayout={onLayout} children={children} imageStyle={imageStyle} accessible={accessible} blurRadius={blurRadius} resizeMode={resizeMode} style={[{ flex: 1 }, style]} defaultSource={defaultSource} accessibilityHint={accessibilityHint} accessibilityElementsHidden={accessibilityElementsHidden} accessibilityIgnoresInvertColors={accessibilityIgnoresInvertColors} accessibilityLabel={accessibilityLabel} accessibilityLiveRegion={accessibilityLiveRegion} accessibilityRole={AccessibilityRole} accessibilityState={AccessibilityState} accessibilityValue={AccessibilityValue} accessibilityViewIsModal={accessibilityViewIsModal} loadingIndicatorSource={loadingIndicatorSource} onLoadEnd={onLoadEnd} onLoadStart={onLoadStart}/>);
};
exports.default = CacheImage;
