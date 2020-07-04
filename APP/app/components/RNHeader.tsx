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

  onBack?: () => void;
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
        <Text children={"back"} />
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
      leftComponent,
      onBack
    } = this.props;
    return (
      <Header
        placement="center"
        containerStyle={{
          backgroundColor: theme.colors.headerColor,
          borderBottomColor: theme.colors.headerColor,
          zIndex: 3,
          height: 80
        }}
        leftComponent={back ? <BackButton /> : !!leftComponent && leftComponent}
        centerComponent={
          <Text
            style={[
              {
                fontSize: 18,
                fontFamily: R.fonts.quicksand_medium
              },
              { color: color ? color : "white" }
            ]}
          >
            {titleHeader}
          </Text>
        }
        rightComponent={rightComponent && rightComponent}
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
