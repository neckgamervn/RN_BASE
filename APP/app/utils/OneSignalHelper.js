const OneSignal = require("react-native-onesignal").default;
const onReceived = notification => {
  console.log("Notification received: ", notification);
};

const onOpened = openResult => {
  console.log("Message: ", openResult.notification.payload.body);
  console.log("Data: ", openResult.notification.payload.additionalData);
  console.log("isActive: ", openResult.notification.isAppInFocus);
  console.log("openResult: ", openResult);
};

const onIds = device => {
  console.log("Device info: ", device);
};
module.exports = {
  initialization: appId => {
    OneSignal.init(appId);
    OneSignal.addEventListener("received", onReceived);
    OneSignal.addEventListener("opened", onOpened);
    OneSignal.addEventListener("ids", onIds);
  },
  destruction: () => {
    OneSignal.removeEventListener("received", onReceived);
    OneSignal.removeEventListener("opened", onOpened);
    OneSignal.removeEventListener("ids", onIds);
  }
};
