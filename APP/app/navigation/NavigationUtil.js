import { StackActions, CommonActions } from "@react-navigation/core";
import reactotron from "reactotron-react-native";

let _navigator; // eslint-disable-line

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(name, params) {
  if (_navigator) _navigator.dispatch(CommonActions.navigate(name, params));
}
function replace(name, params) {
  if (_navigator) _navigator.dispatch(StackActions.replace(name, params));
}
function push(name, params) {
  if (_navigator) _navigator.dispatch(StackActions.push(name, params));
}
function goBack() {
  if (_navigator) _navigator.dispatch(CommonActions.goBack());
}
function pop(count) {
  if (_navigator) _navigator.dispatch(StackActions.pop(count || 1));
}
function dismiss() {
  if (_navigator) {
    _navigator.dispatch(StackActions.popToTop());
    goBack();
  }
}

export default {
  dismiss,
  navigate,
  setTopLevelNavigator,
  goBack,
  push,
  replace,
  pop
};
