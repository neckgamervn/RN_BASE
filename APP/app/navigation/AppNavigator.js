import {
  SCREEN_ROUTER_APP,
  SCREEN_ROUTER,
  SCREEN_ROUTER_AUTH
} from "@constant";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationUtil from "./NavigationUtil";
import R from "@app/assets/R";
import StackApp from "./stack/StackApp";
import { connect } from "react-redux";
import SplashScreen from "@app/screens/app/SplashScreen";
const Stack = createStackNavigator();

const renderSwitch = switchApp => {
  return (
    <>
      {Object.keys(StackApp).map((elem, index) => (
        <Stack.Screen key={index} name={elem} component={StackApp[elem]} />
      ))}
    </>
  );
};

export default connect(
  state => ({
    switch: state.SwitchNavigatorReducer.switch
  }),
  {}
)(props => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationUtil.setTopLevelNavigator(navigatorRef);
      }}
      children={
        <Stack.Navigator
          headerMode="none"
          children={renderSwitch(props.switch)}
        />
      }
    />
  );
});
