import React, { Component } from "react";
import { Text, TouchableOpacity, View, Platform } from "react-native";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import NavigationUtil from "../../navigation/NavigationUtil";
import {
  GoogleSignin,
  statusCodes
} from "@react-native-community/google-signin";
import ScreenComponent from "@app/components/ScreenComponent";
import appleAuth, {
  AppleButton,
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
  AppleAuthCredentialState
} from "@invertase/react-native-apple-authentication";
import { SCREEN_ROUTER_AUTH } from "@app/constants/Constant";
GoogleSignin.configure();

export default class RegisterScreen extends Component {
  render() {
    return (
      <ScreenComponent
        titleHeader="RegisterScreen"
        renderView={
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                NavigationUtil.dismiss();
                // NavigationUtil.navigate(SCREEN_ROUTER_AUTH.REGISTER);
              }}
            >
              <Text> Dimiss </Text>
            </TouchableOpacity>
          </View>
        }
      />
    );
  }
}
