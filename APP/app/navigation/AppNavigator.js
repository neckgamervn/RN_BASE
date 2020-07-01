import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AuthLoadingScreen from "@app/screens/auth/AuthLoadingScreen";
import LoginScreen from "@app/screens/auth/LoginScreen";
import RegisterScreen from "@app/screens/auth/RegisterScreen";
import ForgotPasswordScreen from "@app/screens/auth/ForgotPasswordScreen";
import { SCREEN_ROUTER, SCREEN_ROUTER_AUTH, AUTH_LOADING } from "@constant";
import Main from "./MainTabNavigator";

const Auth = createStackNavigator(
  {
    [SCREEN_ROUTER_AUTH.LOGIN]: LoginScreen,
    [SCREEN_ROUTER_AUTH.REGISTER]: RegisterScreen,
    [SCREEN_ROUTER_AUTH.FORGOT_PASS]: ForgotPasswordScreen
  },
  { headerMode: "none" }
);
export default createAppContainer(
  createSwitchNavigator(
    {
      [AUTH_LOADING]: AuthLoadingScreen,
      [SCREEN_ROUTER.AUTH]: Auth,
      [SCREEN_ROUTER.MAIN]: Main
    },
    {
      initialRouteName: SCREEN_ROUTER.MAIN
    }
  )
);
