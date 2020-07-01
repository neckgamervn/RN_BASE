import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions } from "react-native";
import FastImage, { Source } from "react-native-fast-image";
import R from "@app/assets/R";
import { colors } from "@app/constants/Theme";
const { width, height } = Dimensions.get("window");
interface EmptyProps {
  header?: JSX.Element;
  sourceImage?: Source | number;
  description?: string;
  marginTop?: number;
}

export default class Empty extends Component<EmptyProps> {
  state = {
    marginTop: height / 5
  };
  render() {
    const { header, sourceImage, description, marginTop } = this.props;
    return (
      <View
        onLayout={event => {
          const result = header
            ? event.nativeEvent.layout.height / 2
            : event.nativeEvent.layout.height;
          this.setState({ marginTop: result });
        }}
        style={{
          marginTop: marginTop ? marginTop : this.state.marginTop,
          alignItems: "center",
          backgroundColor: colors.lightGrey,
          justifyContent: "center"
        }}
      >
        <FastImage
          source={sourceImage || R.images.empty_procressing_order}
          style={styles.imageEmpty}
          resizeMode="contain"
        />
        <Text style={styles.textEmpty}>
          {description || "Bạn chưa có đơn hàng nào"}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageEmpty: {
    width: width / 2,
    height: width / 2
  },
  textEmpty: {
    fontFamily: R.fonts.quicksand_medium,
    fontSize: 14,
    color: colors.gray,
    marginTop: 10
  }
});
