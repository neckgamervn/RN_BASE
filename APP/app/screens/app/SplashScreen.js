import React, { Component } from "react";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import NavigationUtil from "../../navigation/NavigationUtil";
import { SCREEN_ROUTER, SCREEN_ROUTER_AUTH } from "@constant";
import R from "@R";
import { connect } from "react-redux";
import { navigateSwith } from "@app/redux/actions";

class SplashScreen extends Component {
  componentDidMount() {
    // load something and check login
    setTimeout(() => {
      // NavigationUtil.navigate(SCREEN_ROUTER.LOGIN);
      this.props.navigateSwith(SCREEN_ROUTER.MAIN);
    }, 200);
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View>
          <ActivityIndicator />
          <Text>{R.strings.home}</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  navigateSwith
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
