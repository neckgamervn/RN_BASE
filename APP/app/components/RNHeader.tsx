import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle
} from "react-native";
import { Header } from "react-native-elements";
import NavigationUtil from "../navigation/NavigationUtil";
import * as theme from "../constants/Theme";
import R from "@app/assets/R";
import FastImage from "react-native-fast-image";

interface Props {
  color?: string;
  back?: boolean;
  /**
   * View nút phải
   */
  rightComponent?: JSX.Element;
  /**
   * View nút trái
   */
  leftComponent?: JSX.Element;
  /**
   * Title thanh header
   */
  titleHeader: string;
}

interface BackProps {
  style?: ViewStyle;
}

export class BackButton extends Component<BackProps> {
  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity
        style={[style || styles.leftComp]}
        onPress={NavigationUtil.goBack}
      >
        <FastImage
          source={R.images.ic_back}
          style={{ width: 30, height: 30 }}
          tintColor={theme.colors.white}
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  }
}

export default class RNHeader extends Component<Props> {
  render() {
    const {
      color,
      back,
      titleHeader,
      rightComponent,
      leftComponent
    } = this.props;
    return (
      <Header
        placement="center"
        containerStyle={{
          backgroundColor: theme.colors.headerColor,
          borderBottomColor: theme.colors.headerColor,
          height: 90
        }}
        leftComponent={back ? <BackButton /> : leftComponent}
        centerComponent={
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: R.fonts.quicksand_medium
              },
              { color: color || "white" }
            ]}
          >
            {titleHeader}
          </Text>
        }
        rightComponent={rightComponent}
        statusBarProps={{
          barStyle: "light-content",
          translucent: true,
          backgroundColor: "transparent"
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  leftComp: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  rightComp: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  }
});
