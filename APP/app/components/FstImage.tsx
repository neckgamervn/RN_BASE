import React, { useState } from "react";
import { View, ActivityIndicator, TouchableOpacity, Image } from "react-native";
import FastImage, { FastImageProps } from "react-native-fast-image";
import { colors } from "@app/constants/Theme";
import R from "@app/assets/R";

const FstImage = (props: FastImageProps) => {
  const [imageLoad, useImageLoad] = useState(false);
  const [error, useEror] = useState(false);
  const [reloadKey, useReloadKey] = useState(new Date().getTime().toString());
  const reloadImage = () => {
    useReloadKey(new Date().getTime().toString());
  };
  var { source } = props;

  if (typeof source == "object")
    source = source.uri
      ? {
          ...source,
          priority: FastImage.priority.high,
          uri: source.uri
        }
      : R.images.ic_symbol;
  return (
    <FastImage
      {...props}
      children={
        imageLoad ? (
          <View
            style={{
              backgroundColor: colors.grayBorder,
              flex: 1,
              overflow: "hidden"
            }}
            children={
              <ActivityIndicator
                color={colors.primary}
                style={{
                  flex: 1
                }}
              />
            }
          />
        ) : error ? (
          <TouchableOpacity
            style={{
              flex: 1,
              justifyContent: "center"
            }}
            children={
              <Image
                style={{
                  alignSelf: "center"
                }}
                source={R.images.ic_try_again}
                resizeMode="center"
              />
            }
            onPress={reloadImage}
          />
        ) : (
          props.children
        )
      }
      onLoadStart={() => {
        useEror(false);
        useImageLoad(true);
      }}
      onLoadEnd={() => {
        useImageLoad(false);
        useEror(false);
      }}
      onError={() => {
        useEror(true);
        useImageLoad(false);
      }}
      source={source}
    />
  );
};

export default FstImage;
