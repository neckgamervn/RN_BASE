import {
  AUTH_LOADING,
  SCREEN_ROUTER_APP,
  SCREEN_ROUTER,
  SCREEN_ROUTER_AUTH
} from "@constant";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  BottomTabBar
} from "@react-navigation/bottom-tabs";
import UserScreen from "@app/screens/app/UserScreen";
import NavigationUtil from "./NavigationUtil";
import R from "@app/assets/R";
import FastImage from "react-native-fast-image";
import { colors } from "@app/constants/Theme";
import LoginScreen from "@app/screens/auth/LoginScreen";
import HomeScreen from "@app/screens/app/HomeScreen";
import { Platform } from "react-native";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const { ic_home, ic_user } = R.images;
const { HOME, USER } = SCREEN_ROUTER_APP;
const { LOGIN } = SCREEN_ROUTER_AUTH;
const TabBarIcon = {
  [HOME]: ic_home,
  [USER]: ic_user
};

const MainTab = () => (
  <Tab.Navigator
    tabBar={props => (
      <BottomTabBar
        {...props}
        style={{
          ...props.style,
          height: Platform.OS != "ios" ? 60 : 80
        }}
      />
    )}
    screenOptions={({ navigation, route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        const sizeIcon = focused ? 30 : 25;
        const tintColor = focused
          ? colors.focusBottomBar
          : colors.blurBottomBar;
        return (
          <FastImage
            source={TabBarIcon[route.name]}
            style={{
              width: sizeIcon,
              height: sizeIcon
            }}
            tintColor={tintColor}
          />
        );
      }
    })}
  >
    <Tab.Screen name={HOME} component={HomeScreen} />
    <Tab.Screen name={USER} component={UserScreen} />
  </Tab.Navigator>
);

export default props => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationUtil.setTopLevelNavigator(navigatorRef);
      }}
      children={
        <>
          <Stack.Navigator
            headerMode="none"
            mode="modal"
            children={
              <>
                <Stack.Screen name={SCREEN_ROUTER.MAIN} component={MainTab} />
                <Stack.Screen name={LOGIN} component={LoginScreen} />
              </>
            }
          />
        </>
      }
    />
  );
};
