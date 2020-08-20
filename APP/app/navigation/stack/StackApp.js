const { SCREEN_ROUTER_APP } = require("@app/constants/Constant");
const { default: InputScreen } = require("@app/screens/app/InputScreen");
const { default: SplashScreen } = require("@app/screens/app/SplashScreen");
module.exports = {
  [SCREEN_ROUTER_APP.INPUT]: InputScreen,
  [SCREEN_ROUTER_APP.SPLASH]: SplashScreen
};
