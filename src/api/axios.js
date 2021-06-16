import axios from 'axios'

// 获取请求单例
// 初始化默认配置
const http = axios.create({
  baseURL: process.env.VUE_APP_SERVER,
  // 自定义请求头信息
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
  // 超时时间
  timeout: 10000,
  // 跨域是否携带身份凭证
  withCredentials: false, // default
  // 返回数据的格式arraybuffer,blob,document,json,text,stream
  responseType: 'json', // default
  // xsrf
  xsrfCookieName: 'XSRF-TOKEN', // default
  xsrfHeaderName: 'X-XSRF-TOKEN', // default
  // http响应内容的最大值
  maxContentLength: 2000,
  // `validateStatus`定义了是否根据http相应状态码，来resolve或者reject promise
  // 如果`validateStatus`返回true(或者设置为`null`或者`undefined`),那么promise的状态将会是resolved,否则其状态就是rejected
  validateStatus: function (status) {
    return status >= 200 && status < 400; // default
  }
})
http.CancelToken = axios.CancelToken

// 初始化请求拦截器
http.interceptors.request.use(
  // 可扩展请求数据处理逻辑
  (config) => {
    if (config.params) {
      const params = Object.keys(config.params)
      for (let i = 0; i < params.length; i++) {
        const key = params[i]
        if (!config.params[key] && typeof config.params[key] != 'number') {
          config.params[key] = ''
        }
      }
    }
    if (config.data) {
      if (toString.call(config.data) === '[object Object]') {
        const data = Object.keys(config.data)
        for (let i = 0; i < data.length; i++) {
          const key = data[i]
          if (!config.data[key] && typeof config.data[key] != 'number') {
            config.data[key] = ''
          }
        }
      }
    }
    return config;
  }
)

// 初始化响应拦截器
http.interceptors.response.use(
  (response) => {
    // 可扩展响应体数据处理逻辑
    return response
  },
  (error) => {
    const response = error.response
    // 可扩展http状态码逻辑处理
    return Promise.resolve(response || {
      // 客户端请求出现错误的情况
      // 代码里使用abort终止请求的情况
      data: {
        code: 413,
        data: null,
        msg: 'Request Entity Too Large'
      }
    })
  }
)

export default http