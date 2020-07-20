import ReactTron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import sagaPlugin from "reactotron-redux-saga";
import { NativeModules } from "react-native";
const AsyncStorage = require("@react-native-community/async-storage").default;

let scriptHostname = "localhost";
if (__DEV__) {
  const scriptURL = NativeModules.SourceCode.scriptURL;
  scriptHostname = scriptURL.split("://")[1].split(":")[0];
}

const reactotron = ReactTron.configure({ host: scriptHostname })
  // .configure("RN Base")
  .use(reactotronRedux())
  .setAsyncStorageHandler(AsyncStorage)
  .useReactNative({
    networking: {
      ignoreUrls: /symbolicate/
    }
  })
  .use(sagaPlugin())
  .connect();

console.tron = ReactTron;
export default reactotron;
