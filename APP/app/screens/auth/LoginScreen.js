import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AccessToken, LoginManager } from "react-native-fbsdk";
import NavigationUtil from "../../navigation/NavigationUtil";
import {
  GoogleSignin,
  statusCodes
} from "@react-native-community/google-signin";

GoogleSignin.configure();

export default class LoginScreen extends Component {
  // Somewhere in your code
  _ggLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
      console.log(userInfo);
      NavigationUtil.navigate("Main");
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  _fbLogin() {
    LoginManager.logInWithPermissions(["public_profile"]).then(
      function(result) {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            console.log(data.accessToken.toString());
            NavigationUtil.navigate("Main");
          });
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this._fbLogin();
          }}
        >
          <Text> Facebook Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 50
          }}
          onPress={() => {
            this._ggLogin();
          }}
        >
          <Text> Google Login </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
