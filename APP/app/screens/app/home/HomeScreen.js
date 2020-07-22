import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
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
const HomeScreen = props => {
  return (
    <ScreenComponent
      titleHeader={R.strings().home}
      back={false}
      renderView={
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              NavigationUtil.navigate(SCREEN_ROUTER_APP.HOME_DETAIL);
            }}
            children={<Text children={"Home Detail"} />}
          />
        </View>
      }
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
