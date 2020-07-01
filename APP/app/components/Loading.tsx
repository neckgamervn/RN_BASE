import React, { Component } from "react";
import { View } from "react-native";
import { BarIndicator } from "react-native-indicators";
import { StyleSheet } from "react-native";
import R from "@app/assets/R";
import { colors } from "@app/constants/Theme";
export default class Loading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <BarIndicator color={colors.primary} />
      </View>
    );
  }
}
