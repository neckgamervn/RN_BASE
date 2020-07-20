import React from "react";
import { TouchableOpacity } from "react-native";
import { FastImageProps } from "react-native-fast-image";
import FstImage from "./FstImage";
type AvatarProps = FastImageProps & { onPress? };
export default (props: AvatarProps) => {
  return (
    <TouchableOpacity
      disabled={!props.onPress}
      style={{ overflow: "hidden" }}
      onPress={props.onPress}
      children={
        <FstImage
          {...props}
          style={[{ width: 50, height: 50, borderRadius: 25 }, props.style]}
          resizeMode="contain"
        />
      }
    />
  );
};
