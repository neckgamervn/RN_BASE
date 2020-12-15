import React, { useState } from "react";
import { connect } from "react-redux";
import { Text } from "react-native";
import ScreenComponent from "@app/components/ScreenComponent";
import { TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import R from "@app/assets/R";
import imagePickerHelper from "@app/utils/ImagePickerHelper";
import RNFetchBlob from "rn-fetch-blob";
import callAPI from "@app/utils/CallApiHelper";
import { objectPredict } from "@api";
import { ScrollView } from "react-native";
import { colors } from "@app/constants/Theme";
const HomeScreen = props => {
  const [imageUrl, setImageUrl] = useState("");
  const [predicts, setPredicts] = useState([]);
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          imagePickerHelper(async res => {
            const fs = RNFetchBlob.fs;
            try {
              const data = await fs.readFile(res, "base64");
              callAPI({
                API: objectPredict,
                payload: {
                  image: data
                },
                onSuccess: res => {
                  setImageUrl(
                    res.data.image_url + "&key=" + new Date().getTime()
                  );
                  setPredicts(res.data.predict);
                }
              });
            } catch (error) {}
          });
        }}
        style={{ alignSelf: "center", borderWidth: 1, padding: 20 }}
      >
        <Text children="Chọn ảnh" />
      </TouchableOpacity>
      <FastImage
        style={{
          width: width / 1.5,
          aspectRatio: 1,
          alignSelf: "center",
          margin: 5
        }}
        source={{ uri: imageUrl }}
      />
      {predicts.map(({ name, consider }, index) => (
        <Text
          key={index}
          style={{
            fontFamily: R.fonts.roboto_regular,
            fontSize: 14,
            padding: 10,
            backgroundColor: colors.primaryDark,
            margin: 5,
            borderRadius: 5,
            color: colors.white
          }}
          children={name + " - " + consider + "%"}
        />
      ))}
    </ScrollView>
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
