const { GET_USER, NAVIGATE } = require("./type");
module.exports = {
  getUserInfoAction: () => ({
    type: GET_USER,
    payload: {}
  }),
  navigateSwith: payload => ({
    type: NAVIGATE,
    payload
  })
};
