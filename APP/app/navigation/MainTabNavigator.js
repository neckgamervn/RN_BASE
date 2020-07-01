import React from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import {
  SCREEN_ROUTER,
  SCREEN_ROUTER_APP,
  SCREEN_ROUTER_AUTH
} from "@constant";
import { Image } from "react-native";
import R from "@R";
import * as theme from "@theme";
import HomeScreen from "@app/screens/app/HomeScreen";
import UserScreen from "@app/screens/app/UserScreen";
const TabBarComponent = props => <BottomTabBar {...props} />;

const tabbarIcons = {
  [SCREEN_ROUTER_APP.HOME]: R.images.ic_home,
  [SCREEN_ROUTER_APP.USER]: R.images.ic_user
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  const iconSource = tabbarIcons[routeName] || R.images.home;
  const iconSize = focused ? 25 : 22;
  return (
    <Image
      source={iconSource}
      fadeDuration={0}
      style={{
        tintColor: tintColor,
        width: iconSize,
        height: iconSize,
        resizeMode: "contain"
      }}
    />
  );
};

const bottomNavigator = bottomRouter =>
  createBottomTabNavigator(bottomRouter, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeBackgroundColor: theme.colors.bottombarBg,
      inactiveBackgroundColor: theme.colors.bottombarBg,
      inactiveTintColor: theme.colors.inactive,
      activeTintColor: theme.colors.active
    },
    tabBarComponent: props => {
      return (
        <TabBarComponent
          {...props}
          onTabPress={props.onTabPress}
          style={{
            borderTopColor: theme.colors.borderTopColor,
            backgroundColor: theme.colors.primary,
            height: 58
          }}
        />
      );
    },
    initialRouteName: SCREEN_ROUTER_APP.HOME
  });

const createStack = stackScreen =>
  createStackNavigator(stackScreen, {
    headerMode: "none"
  });

const getBottomTitle = (screen, title) => ({
  screen,
  title,
  navigationOptions: {
    tabBarLabel: title
  }
});

const STACK_APP = {
  [SCREEN_ROUTER.MAIN]: bottomNavigator({
    [SCREEN_ROUTER_APP.HOME]: getBottomTitle(HomeScreen, R.strings.home),
    [SCREEN_ROUTER_APP.USER]: getBottomTitle(UserScreen, R.strings.user)
  }),
  ...require("./StackApp")
};

export default createStack(STACK_APP);
