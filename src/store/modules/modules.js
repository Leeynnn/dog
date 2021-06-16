const files = require.context('./', true, /index\.js$/)

const modules = {}

files.keys().forEach((key) => {
  // 不引入直播
  modules[key.split('/')[1]] = files(key).default
})

// 帮助文档：https://vuex.vuejs.org/zh/guide/modules.html
export default modules