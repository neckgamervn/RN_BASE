import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AUTH_LOADING, SCREEN_ROUTER, SCREEN_ROUTER_AUTH } from "@constant";
import HomeScreen from "@app/screens/app/HomeScreen";
import { createStackNavigator } from "react-navigation-stack";

export default createAppContainer(
  createStackNavigator(
    {
      [SCREEN_ROUTER.MAIN]: HomeScreen
    },
    {
      initialRouteName: SCREEN_ROUTER.MAIN
    }
  )
);
