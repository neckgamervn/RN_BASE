const { GET_USER } = require("./type");
module.exports = {
  getUserInfoAction: () => ({
    type: GET_USER,
    payload: {}
  })
};
