const { API_STATUS } = require("@constant");
const R = require("@app/assets/R").default;
const { AsyncStorage } = require("react-native");
const { showMessages } = require("@app/utils/AlertHelper");

const createAPI = () => {
  const APIInstant = require("axios").default.create();
  APIInstant.defaults.baseURL = "http://3.1.13.10:5901/";
  APIInstant.defaults.timeout = 20000;
  APIInstant.defaults.headers = { "Content-Type": "application/json" };
  APIInstant.interceptors.request.use(async config => {
    return config;
  }, Promise.reject);

  APIInstant.interceptors.response.use(response => {
    if (response.data && response.data.status !== 1)
      showMessages(R.strings().notification, data.message);
    return response;
  });
  return APIInstant;
};

const getAPI = createAPI();

/* Support function */
const handleResult = api =>
  api.then(res => {
    return Promise.resolve(res.data);
  });

module.exports = {
  objectPredict: body => handleResult(getAPI.post(`object_predict`, body))
};
