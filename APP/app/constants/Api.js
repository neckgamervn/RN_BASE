const AsyncStorage = require("@react-native-community/async-storage").default;

const createAPI = () => {
  const APIInstant = require("axios").default.create();
  APIInstant.defaults.baseURL = "http://localhost:5000/";
  APIInstant.defaults.timeout = 20000;
  APIInstant.defaults.headers = { "Content-Type": "application/json" };
  APIInstant.interceptors.request.use(async config => {
    config.headers.token = await AsyncStorage.getItem("token");
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
  getImage: () =>
    handleResult(
      getAPI.get(
        `aws?Bucket=custom-labels-console-us-east-1-3086b3404b&Name=assets/sac/1597916578/image1.jpg`
      )
    ),
  getData: () => handleResult(getAPI.get(`api/json/get/cpugQYxUKq?indent=2`))
};
