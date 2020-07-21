import { SCREEN_ROUTER_APP, SCREEN_ROUTER } from "@constant";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createBottomTabNavigator,
  BottomTabBar
} from "@react-navigation/bottom-tabs";
import UserScreen from "@app/screens/app/user/UserScreen";
import NavigationUtil from "./NavigationUtil";
import R from "@app/assets/R";
import FastImage from "react-native-fast-image";
import { colors } from "@app/constants/Theme";
import HomeScreen from "@app/screens/app/home/HomeScreen";
import { Platform } from "react-native";
import StackApp from "./stack/StackApp";
import StackBottomBar from "./stack/StackBottomBar";
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const { ic_home, ic_user } = R.images;
const { HOME, USER } = SCREEN_ROUTER_APP;
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
    {Object.keys(StackBottomBar).map((elem, index) => (
      <Tab.Screen key={index} name={elem} component={StackBottomBar[elem]} />
    ))}
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
                {Object.keys(StackApp).map((elem, index) => (
                  <Stack.Screen
                    key={index}
                    name={elem}
                    component={StackApp[elem]}
                  />
                ))}
              </>
            }
          />
        </>
      }
    />
  );
};
