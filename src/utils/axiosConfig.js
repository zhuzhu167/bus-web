import axios from "axios";
const { $Toast } = require("../../static/dist/base/index");
var instance = axios.create(
  // 常见请求实例配置项
  {
    baseURL: "", // 基础URL
  }
);
instance.defaults.adapter = function (config) {
  $Toast({
    content: "加载中",
    type: "loading",
    duration: 0,
  });
  return new Promise((resolve, reject) => {
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url: "http://47.100.31.104:8080/busserver" + config.url,
      method: config.method,
      data: config.data,
      success: (res) => {
        $Toast.hide();
        return resolve(res);
      },
      fail: (err) => {
        $Toast({
          content: "请求失败",
          type: "error",
        });
        return reject(err);
      },
    });
  });
};

// 添加请求拦截器
instance.interceptors.request.use(
  function (request) {
    // request.headers.token = 'token=11124654654687';
    // console.log(request) // 请求成功
    return request;
  },
  function (error) {
    // console.log(error); // 请求失败
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 响应成功
    $Toast.hide();
    return response;
  },
  function (error) {
    // console.log(error); // 响应失败
    $Toast.hide();
    return Promise.reject(error);
  }
);
// 最后暴露实例
export default instance;
