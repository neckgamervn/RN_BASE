import ScreenComponent from "@app/components/ScreenComponent";
import { SCREEN_ROUTER_APP } from "@app/constants/Constant";
import { colors } from "@app/constants/Theme";
import NavigationUtil from "@app/navigation/NavigationUtil";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const InputScreen = props => {
  const [Bucket, setBucket] = useState(
    "custom-labels-console-us-east-1-3086b3404b"
  );
  const [Name, setName] = useState("assets/sac/1597916578/image1.jpg");
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
                  onChangeText={setBucket}
                  value={Bucket}
                  style={{
                    borderWidth: 1,
                    fontSize: 18,
                    margin: 20,
                    padding: 10
                  }}
                  placeholder="Bucket"
                />
                <TextInput
                  onChangeText={setName}
                  value={Name}
                  style={{
                    borderWidth: 1,
                    fontSize: 18,
                    margin: 20,
                    padding: 10
                  }}
                  placeholder="Name"
                />
                <TouchableOpacity
                  onPress={() => {
                    NavigationUtil.navigate(SCREEN_ROUTER_APP.SPLASH, {
                      Bucket,
                      Name
                    });
                  }}
                  style={{
                    padding: 10,
                    alignSelf: "center",
                    backgroundColor: colors.active
                  }}
                  disabled={Bucket.length == 0 || Name.length == 0}
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
