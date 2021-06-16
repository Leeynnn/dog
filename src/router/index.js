import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import Login from '@api/modules/login/login'
import Others from '@api/modules/others/others'
import {
  isToLogin,
  getToken,
  showAppShare,
  checkPathToWww,
  localStorage,
  addScript,
  getPlatform
} from '@/utils/utils'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  count: -1,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
});

router.beforeEach((to, from, next) => {
  // 获取直播token
  if (to.query.token && to.meta.isLive) {
    store.state.token = to.query.token
    next()
    return
  }
  // m站旧链接判断跳转到官网
  if (!checkPathToWww(to)) {
    try {
      let spm = to.query.spm
      // 获取页面的spm
      if (spm) {
        sessionStorage.setItem('spm', spm)
      }
      // 第一次进入时
      if (!from.name) {
        // 判断是否需要加载统计代码

        const platForm = getPlatform()

        // 当前路由位置
        const pathIndex = routes.findIndex(item => item.path === to.path)
        // 是否是非app、非游侠客小程序的浏览器打开的
        const isInSimpleBrowser = platForm === 'h5' || platForm === 'h5WX' || platForm === 'otherMiniapp'
        if (isInSimpleBrowser && pathIndex !== -1) {
          // S GIO统计
          ! function (e, t, n, g, i) {
            let tag = null
            e[i] = e[i] || function () {
              (e[i].q = e[i].q || []).push(arguments)
            }, n = t.createElement("script"), tag = t.getElementsByTagName("script")[0], n.async = 1, n.src = ('https:' ==
              document.location.protocol ? 'https://' : 'http://') + g, tag.parentNode.insertBefore(n, tag)
          }(window, document, "script", "assets.giocdn.com/2.1/gio.js", "gio");
          gio('init', 'a147ace5a8874284', {});
          gio('config');
          //custom page code begin here
          //custom page code end here
          gio('send');
          // E GIO统计

          // S 百度统计
          addScript('https://hm.baidu.com/hm.js?9cf854f1cba1c7ee51d64b3ad2ac9e8e')
          // E 百度统计
        }

        // 写入token
        const login = new Login()
        getToken()
        login.checkToken().catch(() => {
          getToken()
        })
        if (localStorage.getItem('linesViewTime')) {
          const obj = localStorage.getItem('linesViewTime')
          const others = new Others()
          others.linesViewtime(JSON.parse(obj))
          localStorage.setItem('linesViewTime', '')
        }
      }
      // 是否显示APP分享
      showAppShare(to.meta.appShare ? 1 : 0)
      // 判断页面是否需要登录
      if (to.meta.shouldLogin) {
        isToLogin()
      }
      document.title = to.meta.title
      document.getElementById('head-meta-keywords').content = to.meta.keywords
      document.getElementById('head-meta-description').content = to.meta.description
    } catch (e) {
      console.log(e)
    }
    next()
  }
})

router.afterEach((to) => {
  if (to.meta.backgroundColor) {
    document.body.style.backgroundColor = to.meta.backgroundColor
  } else {
    document.body.style.backgroundColor = '#fff'
  }
});

export default router