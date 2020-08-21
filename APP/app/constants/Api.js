const AsyncStorage = require("@react-native-community/async-storage").default;

const createAPI = () => {
  const APIInstant = require("axios").default.create();
  APIInstant.defaults.baseURL = "";
  APIInstant.defaults.timeout = 20000;
  APIInstant.interceptors.request.use(async config => {
    return config;
  }, Promise.reject);

  APIInstant.interceptors.response.use(response => {
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
  getUserInfo: () => handleResult(getAPI.get(`api/Service/getUserInfo`)),
  getImage: ({ payload, baseUrl }) =>
    handleResult(getAPI.post(`${baseUrl}/aws`, { payload })),
  getData: () => handleResult(getAPI.get(`api/json/get/cpugQYxUKq?indent=2`))
};
