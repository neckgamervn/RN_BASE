import React from "react";
import { Text, TextProps, NativeModules } from "react-native";

type RNText = TextProps & {
  text: string;
};

export default (rnTextProps: RNText) => (
  <Text {...rnTextProps} children={rnTextProps.text} />
);
