import React from 'react';
import {
  StyleProp,
  ViewStyle,
  ImageStyle,
  ImageBackground,
  ImageResizeMode,
  AccessibilityRole,
  AccessibilityState,
  AccessibilityValue,
  ImageURISource,
  LayoutChangeEvent
} from 'react-native';
import api from '.';

export interface CacheImageProps {
  blurRadius?: number;
  onLoad?: (result?: any) => void;
  onError?: (error?: any) => void;
  source: { uri: string } | number;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  children?: React.ReactNode;
  accessibilityHint?: string;
  defaultSource?: ImageURISource;
  onLayout?: (event: LayoutChangeEvent) => void;
  accessibilityActions?: { name: string; label?: string };
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
};






const CacheImage = ({
  source,
  style,
  onLoad,
  onError,
  onLoadEnd,
  onLayout,
  children,
  blurRadius,
  accessible,
  resizeMode,
  imageStyle,
  onLoadStart,
  defaultSource,
  accessibilityHint,
  AccessibilityRole,
  AccessibilityState,
  AccessibilityValue,
  accessibilityLabel,
  loadingIndicatorSource,
  accessibilityLiveRegion,
  accessibilityViewIsModal,
  accessibilityElementsHidden,
  accessibilityIgnoresInvertColors
}: CacheImageProps) => {
  const [image, setImage] = React.useState<any>(undefined);
  React.useEffect(() => {
    let mounted = true;
    if (source && typeof source === "object" && source?.uri) {
      api.start(source?.uri).then((file) => {
        if (mounted) setImage({ uri: file });
      }).catch(() => {
        if (mounted) setImage(source);
      });
    } else if (typeof source === "number") {
      if (mounted) setImage(source);
    } else {
      if (mounted) setImage(undefined);
    };
    return () => {
      mounted = false;
    }
  }, []);

  return (
    <ImageBackground
      source={image}
      onLoad={onLoad}
      onError={onError}
      onLayout={onLayout}
      children={children}
      imageStyle={imageStyle}
      accessible={accessible}
      blurRadius={blurRadius}
      resizeMode={resizeMode}
      style={[{ flex: 1 }, style]}
      defaultSource={defaultSource}
      accessibilityHint={accessibilityHint}
      accessibilityElementsHidden={accessibilityElementsHidden}
      accessibilityIgnoresInvertColors={accessibilityIgnoresInvertColors}
      accessibilityLabel={accessibilityLabel}
      accessibilityLiveRegion={accessibilityLiveRegion}
      accessibilityRole={AccessibilityRole}
      accessibilityState={AccessibilityState}
      accessibilityValue={AccessibilityValue}
      accessibilityViewIsModal={accessibilityViewIsModal}
      loadingIndicatorSource={loadingIndicatorSource}
      onLoadEnd={onLoadEnd}
      onLoadStart={onLoadStart}
    />
  )
}

export default CacheImage;
