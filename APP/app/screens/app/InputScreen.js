import ScreenComponent from "@app/components/ScreenComponent";
import { SCREEN_ROUTER_APP } from "@app/constants/Constant";
import { colors } from "@app/constants/Theme";
import NavigationUtil from "@app/navigation/NavigationUtil";
import imagePickerHelper from "@app/utils/ImagePickerHelper";
import ImgToBase64 from "react-native-image-base64";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const InputScreen = props => {
  useEffect(() => {
    pickImage();
  }, []);

  const pickImage = () => {
    imagePickerHelper(res => {
      ImgToBase64.getBase64String(res).then(base64String => {
        NavigationUtil.navigate(SCREEN_ROUTER_APP.SPLASH, {
          payload: base64String,
          baseUrl,
          url: res
        });
      });
    });
  };

  const [baseUrl, setbaseUrl] = useState("http://localhost:5000");

  return (
    <ScreenComponent
      back={false}
      titleHeader="Nhập url"
      renderView={
        <>
          <View
            style={{ flex: 1, justifyContent: "center" }}
            children={
              <>
                <TextInput
                  onChangeText={setbaseUrl}
                  value={baseUrl}
                  style={{
                    borderWidth: 1,
                    fontSize: 18,
                    margin: 20,
                    padding: 10
                  }}
                  placeholder="baseUrl"
                />
                <TouchableOpacity
                  onPress={pickImage}
                  style={{
                    padding: 10,
                    alignSelf: "center",
                    backgroundColor: colors.active
                  }}
                  children={
                    <Text
                      style={{ fontSize: 18, color: colors.white }}
                      children="Kiểm tra lable"
                    />
                  }
                />
              </>
            }
          />
        </>
      }
    />
  );
};

export default InputScreen;

const styles = StyleSheet.create({});
