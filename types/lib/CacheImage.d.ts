import React from 'react';
import { StyleProp, ViewStyle, ImageStyle, ImageResizeMode, AccessibilityRole, AccessibilityState, AccessibilityValue, ImageURISource, LayoutChangeEvent } from 'react-native';
export interface CacheImageProps {
    blurRadius?: number;
    onLoad?: (result?: any) => void;
    onError?: (error?: any) => void;
    source: {
        uri: string;
    } | number;
    resizeMode?: ImageResizeMode;
    style?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    children?: React.ReactNode;
    accessibilityHint?: string;
    defaultSource?: ImageURISource;
    onLayout?: (event: LayoutChangeEvent) => void;
    accessibilityActions?: {
        name: string;
        label?: string;
    };
    accessibilityElementsHidden?: boolean;
    AccessibilityRole?: AccessibilityRole;
    AccessibilityState?: AccessibilityState;
    accessibilityIgnoresInvertColors?: boolean;
    accessibilityLabel?: string;
    accessibilityLiveRegion?: "none" | "polite" | "assertive" | undefined;
    AccessibilityValue?: AccessibilityValue;
    accessibilityViewIsModal?: boolean;
    accessible?: boolean;
    loadingIndicatorSource?: ImageURISource;
    onLoadEnd?: () => void;
    onLoadStart?: () => void;
}
declare const CacheImage: ({ source, style, onLoad, onError, onLoadEnd, onLayout, children, blurRadius, accessible, resizeMode, imageStyle, onLoadStart, defaultSource, accessibilityHint, AccessibilityRole, AccessibilityState, AccessibilityValue, accessibilityLabel, loadingIndicatorSource, accessibilityLiveRegion, accessibilityViewIsModal, accessibilityElementsHidden, accessibilityIgnoresInvertColors }: CacheImageProps) => JSX.Element;
export default CacheImage;
