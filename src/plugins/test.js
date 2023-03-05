import axios from "axios";
const testAxios = axios.create({
    //baseURL: 'http://localhost:8080/api'
    baseURL: 'http://api.btstu.cn/qqxt/api.php'
  });
  

// 添加请求拦截器
testAxios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('我要发请求啦',config)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
testAxios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    console.log('我的收到响应啦',response)
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default testAxios

