import { LogBox } from "react-native";
import CacheImage from "./lib/CacheImage";

LogBox.ignoreLogs(["Require cycles are allowed, but can result in uninitialized values"]);
// Add this all permissions to AndroidManifest.xml//
// <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
// <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>
// <uses-permission android:name="android.permission.READ_INTERNAL_STORAGE"/>
// <uses-permission android:name="android.permission.WRITE_INTERNAL_STORAGE"/>
// <uses-permission android:name="android.permission.VIBRATE"/>
// <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>
// <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
// <uses-permission android:name="android.permission.DOWNLOAD_WITHOUT_NOTIFICATION"/>

// Add this intent-filter to AddroidManifest.xml //
// <intent-filter>
// <action android:name="android.intent.action.MAIN" />
// <category android:name="android.intent.category.LAUNCHER" />
// <action android:name="android.intent.action.DOWNLOAD_COMPLETE"/>
// </intent-filter>
export default CacheImage;
