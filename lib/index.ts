import { PermissionsAndroid } from "react-native";
import RNFetchBlob from 'react-native-fetch-blob';
import { Base64 } from 'js-base64';
///variables
const { fs, config } = RNFetchBlob;

const onDownload = (options: { url: string }) => {
  return new Promise((resolve, reject) => {
    const name = Base64.encode(options.url);
    const path = fs.dirs.MainBundleDir + '/' + name;
    fs.exists(path).then((isExist) => {
      if (isExist) {
        return resolve("file://" + path);
      } else {
        config({ fileCache: true, path: path }).fetch('GET', options?.url).then(() => {
          const file = "file://" + path;
          return resolve(file);
        }).catch((error) => reject(error));
      }
    }).catch((error) => reject(error));
  });
};

const start = (url: string) => {
  return new Promise((resolve, reject) => {
    try {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          onDownload({ url }).then((result) => resolve(result)).catch((error) => reject(error))
        } else {
          reject({ message: 'Permission Denied' })
        }
      }).catch((error) => reject(error))
    } catch (error) {
      reject(error)
    }
  })
}

export default { start };