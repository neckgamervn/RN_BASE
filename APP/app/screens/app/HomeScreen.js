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

const HomeScreen = props => (
  <ScreenComponent
    titleHeader={R.strings().home}
    back={false}
    renderView={
      <TouchableOpacity
        children={<Text children="Login SCreen" />}
        onPress={() => {
          NavigationUtil.navigate(SCREEN_ROUTER_AUTH.LOGIN, {
            hoang: "123"
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
