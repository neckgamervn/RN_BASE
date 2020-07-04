/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import codePush from "react-native-code-push";
import { Provider } from "react-redux";
import AppNavigator from "./app/navigation/AppNavigator";
import NavigationUtil from "./app/navigation/NavigationUtil";
import store from "./app/redux/store";
import OneSignalHelper from "@app/utils/OneSignalHelper";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator
          ref={navigatorRef =>
            NavigationUtil.setTopLevelNavigator(navigatorRef)
          }
        />
      </Provider>
    );
  }

  constructor(properties) {
    super(properties);
    OneSignalHelper.initialization("5eec059e-d542-4874-90af-c18c65ab394e");
  }

  componentWillUnmount() {
    OneSignalHelper.destruction();
  }
}

let codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const MyApp = codePush(codePushOptions)(App);

export default MyApp;
