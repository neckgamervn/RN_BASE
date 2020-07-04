const axios = require("axios").default;
const NavigationUtil = require("../navigation/NavigationUtil").default;
const { AsyncStorage, Alert } = require("react-native");
function createAxios() {
  // AsyncStorage.setItem("token", '773DE1FE9732F26F7552BC921CBE347E')
  var axiosInstant = axios.create();
  axiosInstant.defaults.baseURL = "http://www.json-generator.com/";
  axiosInstant.defaults.timeout = 20000;
  axiosInstant.defaults.headers = { "Content-Type": "application/json" };

  axiosInstant.interceptors.request.use(
    async config => {
      config.headers.token = await AsyncStorage.getItem("token");
      return config;
    },
    error => Promise.reject(error)
  );

  axiosInstant.interceptors.response.use(response => {
    if (response.data && response.data.code == 403) {
      setTimeout(() => {
        Alert.alert("Thông báo", "Mất token");
      }, 100);

      AsyncStorage.setItem("token", "", () => {
        NavigationUtil.navigate("Auth");
      });
    } else if (response.data && response.data.status != 1) {
      // setTimeout(() => {
      //   Alert.alert("Thông báo", response.data.message);
      // }, 100);
    }
    return response;
  });
  return axiosInstant;
}

getAxios = createAxios();

/* Support function */
function handleResult(api) {
  return api.then(res => {
    // if (res.data.status != 1) {
    //   return Promise.reject(new Error("Co loi xay ra"));
    // }
    return Promise.resolve(res.data);
  });
}

module.exports = {
  getUserInfo: () => handleResult(getAxios.get(`api/Service/getUserInfo`)),
  getData: () => handleResult(getAxios.get(`api/json/get/cpugQYxUKq?indent=2`))
};
