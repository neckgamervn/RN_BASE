import React from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity } from "react-native";
import ScreenComponent from "@app/components/ScreenComponent";
import NavigationUtil from "@app/navigation/NavigationUtil";
import {
  SCREEN_ROUTER,
  SCREEN_ROUTER_APP,
  SCREEN_ROUTER_AUTH
} from "@app/constants/Constant";
import R from "@app/assets/R";
import { callAPIHook } from "@app/utils/CallApiHelper";
import { getData } from "@api";
import imagePickerHelper from "@app/utils/ImagePickerHelper";
const HomeScreen = props => (
  <ScreenComponent
    titleHeader={R.strings().home}
    back={false}
    renderView={
      <TouchableOpacity
        children={<Text children="Login SCreen" />}
        onPress={() => {
          // NavigationUtil.navigate(SCREEN_ROUTER_AUTH.LOGIN, {
          //   hoang: "123"
          // });
          imagePickerHelper(res => {
            // console.log(res);
          });
        }}
      />
    }
  />
);

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
