import http from '../axios'
import { Loading } from '@utils/vant'

export default class Http {
  constructor(config = {}) {
    // 子类继承父类时初始化 config
    this.config = config
  }

  getInstance() {
    return http
  }

  get(url, config = {}) {
    return this.request(Object.assign({
      url,
      method: 'get',
    }, config))
  }

  post(url, data = {}, config = {}) {
    return this.request(Object.assign({
      url,
      method: 'post',
      data
    }, config))
  }

  request(config) {
    config = Object.assign(config, this.config)
    if (config.showLoading && !config.cancelToken) {
      Loading.show()
    }
    return new Promise((res, rej) => {
      http.request(config).then(data => {
        if (config.showLoading && !config.cancelToken) {
          Loading.hide()
        }
        res(data)
      })
    })
  }
}