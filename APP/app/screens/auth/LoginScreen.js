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
GoogleSignin.configure();

export default class LoginScreen extends Component {
  // Somewhere in your code

  _appleLogin = async () => {
    // performs login request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: AppleAuthRequestOperation.LOGIN,
      requestedScopes: [
        AppleAuthRequestScope.EMAIL,
        AppleAuthRequestScope.FULL_NAME
      ]
    });
    // get current authentication state for user
    // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user
    );
    // use credentialState response to ensure the user is authenticated
    if (credentialState === AppleAuthCredentialState.AUTHORIZED) {
      // user is authenticated
    }
  };

  _ggLogin = async () => {
    try {
      const isHasPlayServices = await GoogleSignin.hasPlayServices();
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

  _fbLogin = () => {
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
  };
  render() {
    return (
      <ScreenComponent
        titleHeader="Login"
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
            {Platform.OS == "ios" && (
              <TouchableOpacity
                style={{
                  marginTop: 50
                }}
                onPress={() => {
                  this._appleLogin();
                }}
              >
                <Text> Apple Login </Text>
              </TouchableOpacity>
            )}
          </View>
        }
      />
    );
  }
}
