const { SCREEN_ROUTER_APP } = require("@app/constants/Constant");
const {
  default: HomeDetailScreen
} = require("@app/screens/app/home/HomeDetailScreen");
const {
  default: UserDetailScreen
} = require("@app/screens/app/user/UserDetailScreen");
const { HOME_DETAIL, USER_DETAIL } = SCREEN_ROUTER_APP;
module.exports = {
  [HOME_DETAIL]: HomeDetailScreen,
  [USER_DETAIL]: UserDetailScreen
};
