import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

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
  try {
    document.title = to.meta.title
    document.getElementById('head-meta-keywords').content = to.meta.keywords
    document.getElementById('head-meta-description').content = to.meta.description
  } catch (e) {
    console.log(e)
  }
  next()
})

router.afterEach((to) => {
  if (to.meta.backgroundColor) {
    document.body.style.backgroundColor = to.meta.backgroundColor
  } else {
    document.body.style.backgroundColor = '#fff'
  }
});

export default router