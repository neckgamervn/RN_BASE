import { NavigationActions, StackActions } from "react-navigation";

let _navigator; // eslint-disable-line

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  if (_navigator)
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
}
function replace(routeName, params) {
  if (_navigator)
    _navigator.dispatch(
      StackActions.replace({
        routeName,
        params
      })
    );
}
function push(routeName, params) {
  if (_navigator)
    _navigator.dispatch(
      StackActions.push({
        routeName,
        params
      })
    );
}
function goBack(immediate) {
  // _navigator.goBack();
  _navigator.dispatch(NavigationActions.back({ immediate }));
}
function pop(count) {
  _navigator.dispatch(StackActions.pop({ n: count || 1 }));
}
export default {
  navigate,
  setTopLevelNavigator,
  goBack,
  push,
  replace,
  pop
};
