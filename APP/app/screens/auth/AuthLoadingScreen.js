import React, { Component } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import NavigationUtil from "../../navigation/NavigationUtil";
import { SCREEN_ROUTER } from "@constant";
import R from "@app/assets/R";

export default class AuthLoadingScreen extends Component {
  componentDidMount() {
    // load something and check login
    setTimeout(() => {
      NavigationUtil.navigate(SCREEN_ROUTER.LOGIN);
    }, 200);
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View>
          <ActivityIndicator />
          <Text>{R.strings.home}</Text>
        </View>
      </SafeAreaView>
    );
  }
}
