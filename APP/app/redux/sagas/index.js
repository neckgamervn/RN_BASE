const { GET_USER } = require("../actions/type");
const { getData, getUserInfo } = require("@app/constants/Api");
const SagaHelper = require("@app/utils/SagaHelper").default;
const NetworkSaga = {
  watchGetUser: SagaHelper(GET_USER, getUserInfo)
};

module.exports = function* saga() {
  for (let [key, value] of Object.entries(NetworkSaga)) yield value;
};
