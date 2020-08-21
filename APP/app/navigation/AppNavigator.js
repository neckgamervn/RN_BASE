import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NavigationUtil from "./NavigationUtil";
import StackApp from "./stack/StackApp";
import { connect } from "react-redux";
const Stack = createStackNavigator();

const renderSwitch = () => {
  return (
    <>
      {Object.keys(StackApp).map((elem, index) => (
        <Stack.Screen key={index} name={elem} component={StackApp[elem]} />
      ))}
    </>
  );
};

export default connect(
  state => ({}),
  {}
)(props => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationUtil.setTopLevelNavigator(navigatorRef);
      }}
      children={<Stack.Navigator headerMode="none" children={renderSwitch()} />}
    />
  );
});
