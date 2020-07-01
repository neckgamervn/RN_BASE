import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Header } from "react-native-elements";
import NavigationUtil from "../navigation/NavigationUtil";
import Icon from "./Icon";
import * as theme from "../constants/Theme";
import R from "@app/assets/R";
import { ViewStyle } from "react-native";
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
        onPress={() => NavigationUtil.goBack()}
      >
        <Icon.Ionicons
          name="ios-arrow-round-back"
          size={40}
          color={theme.colors.white}
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
        leftComponent={
          <View>
            {back ? (
              <TouchableOpacity
                style={styles.leftComp}
                onPress={onBack || NavigationUtil.goBack}
              >
                <Icon.Ionicons
                  name="ios-arrow-round-back"
                  size={35}
                  color={theme.colors.white}
                />
              </TouchableOpacity>
            ) : (
              !!leftComponent && leftComponent
            )}
          </View>
        }
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
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  rightComp: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    alignSelf: "center"
  }
});
