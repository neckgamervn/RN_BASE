const { SCREEN_ROUTER_APP } = require("@app/constants/Constant");
const { default: HomeScreen } = require("@app/screens/app/home/HomeScreen");
const { default: UserScreen } = require("@app/screens/app/user/UserScreen");
const { HOME, USER } = SCREEN_ROUTER_APP;
module.exports = {
  [HOME]: HomeScreen,
  [USER]: UserScreen
};
