const { GET_USER } = require("../actions/type");
const { getUserInfo } = require("@api");
const SagaHelper = require("@app/utils/SagaHelper").default;
const NetworkSaga = {
  watchGetUser: SagaHelper(GET_USER, getUserInfo)
};

module.exports = function* saga() {
  for (let [key, value] of Object.entries(NetworkSaga)) yield value;
};
