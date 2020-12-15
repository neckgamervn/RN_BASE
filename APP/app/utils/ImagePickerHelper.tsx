import ImagePicker from "react-native-image-picker";
import ImageResizer from "react-native-image-resizer";
import { Dimensions, Platform, PermissionsAndroid } from "react-native";
import R from "@app/assets/R";
import { colors } from "@app/constants/Theme";
const maxWidth = Dimensions.get("screen").width;
const maxHeight = Dimensions.get("screen").height;

const imagePickerHelper = async res => {
  if (Platform.OS != "ios") {
    const isRead = await PermissionsAndroid.check(
      "android.permission.READ_EXTERNAL_STORAGE"
    );
    const isWrite = await PermissionsAndroid.check(
      "android.permission.WRITE_EXTERNAL_STORAGE"
    );
    const isGrantCamera = await PermissionsAndroid.check(
      "android.permission.CAMERA"
    );
    if (isRead && isWrite && isGrantCamera) startPickImage(res);
    else {
      PermissionsAndroid.requestMultiple([
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.CAMERA"
      ]).finally(() => {
        imagePickerHelper(res);
      });
    }
  } else startPickImage(res);
};

const startPickImage = res => {
  const options = {
    title: "Chọn",
    cancelButtonTitle: "Huỷ",
    chooseFromLibraryButtonTitle: "Từ thư viện",
    takePhotoButtonTitle: "Chụp ảnh",
    storageOptions: {
      skipBackup: false,
      path: "/",
      cameraRoll: true
    },
    tintColor: colors.black
  };
  try {
    ImagePicker.showImagePicker(options, async response => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        var actualWidth = response.width,
          actualHeight = response.height;
        var imgRatio = actualWidth / actualHeight;
        var maxRatio = maxHeight / maxHeight;
        if (actualHeight > maxHeight || actualWidth > maxWidth) {
          if (imgRatio < maxRatio) {
            imgRatio = maxHeight / actualHeight;
            actualWidth = imgRatio * actualWidth;
            actualHeight = maxHeight;
          } else if (imgRatio > maxRatio) {
            imgRatio = maxWidth / actualWidth;
            actualHeight = imgRatio * actualHeight;
            actualWidth = maxWidth;
          } else {
            actualHeight = maxHeight;
            actualWidth = maxWidth;
          }
        }

        const source = { uri: response.uri };
        await _resizeImage(source.uri, actualWidth, actualHeight, res);
      }
    });
  } catch (error) {
    console.log("select image err: " + JSON.stringify(error));
  }
};

const _resizeImage = async (uri, actualWidth, actualHeight, res) => {
  var url = null;
  try {
    const response = await ImageResizer.createResizedImage(
      uri,
      actualWidth,
      actualHeight,
      "JPEG",
      70,
      0
    );
    url = response.uri;
  } catch (error) {
    console.log("resize err: " + error);
    url = uri;
  }
  if (typeof res) res(url);
};

export default imagePickerHelper;
