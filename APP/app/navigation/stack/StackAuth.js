const LoginScreen = require("@app/screens/auth/LoginScreen").default;
const { SCREEN_ROUTER_AUTH } = require("@app/constants/Constant");
const ForgotPassword = require("@app/screens/auth/ForgotPasswordScreen")
  .default;
const RegisterScreen = require("@app/screens/auth/RegisterScreen").default;
const { LOGIN, FORGOT_PASS, REGISTER } = SCREEN_ROUTER_AUTH;
module.exports = {
  [LOGIN]: LoginScreen,
  [FORGOT_PASS]: ForgotPassword,
  [REGISTER]: RegisterScreen
};
