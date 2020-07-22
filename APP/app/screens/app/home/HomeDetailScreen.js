import React from "react";
import { connect } from "react-redux";
import ScreenComponent from "@app/components/ScreenComponent";
import { Image, Text, TouchableOpacity } from "react-native";
import R from "@R";
import NavigationUtil from "@app/navigation/NavigationUtil";
import { SCREEN_ROUTER } from "@app/constants/Constant";

const HomeDetailScreen = props => {
  return (
    <ScreenComponent
      titleHeader={"HomeDetailScreen"}
      renderView={
        <TouchableOpacity
          onPress={() => {
            NavigationUtil.navigate(SCREEN_ROUTER.AUTH);
          }}
        >
          <Text children="Login" />
        </TouchableOpacity>
      }
    />
  );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeDetailScreen);
