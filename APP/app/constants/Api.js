import R from "@app/assets/R";
import NavigationUtil from "@app/navigation/NavigationUtil";
import { showMessages } from "@app/utils/AlertHelper";
const { API_STATUS } = require("@constant");
const { AsyncStorage } = require("react-native");

type Data = {
  code: number,
  status: number,
  message: string
};

const createAPI = () => {
  const APIInstant = require("axios").default.create();
  APIInstant.defaults.baseURL = "http://www.json-generator.com/";
  APIInstant.defaults.timeout = 20000;
  APIInstant.defaults.headers = { "Content-Type": "application/json" };
  APIInstant.interceptors.request.use(async config => {
    config.headers.token = await AsyncStorage.getItem("token");
    return config;
  }, Promise.reject);

  APIInstant.interceptors.response.use(response => {
    const data: Data = response.data;
    if (data && data.code === API_STATUS.RE_LOGIN) {
      showMessages(R.strings().notification, R.strings().re_login);
      AsyncStorage.setItem("token", "").then(() => {
        NavigationUtil.navigate("Auth");
      });
    } else if (data && data.status !== 1)
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
  getUserInfo: () => handleResult(getAPI.get(`api/Service/getUserInfo`)),
  getData: () => handleResult(getAPI.get(`api/json/get/cpugQYxUKq?indent=2`))
};
