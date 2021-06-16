import BScroll from 'better-scroll'
import { getElementsWidth } from '@utils/utils'

function VueTouch(el, binding, type) { // 触屏函数
  var _this = this
  this.obj = el
  this.binding = binding
  this.touchType = type
  this.vueTouches = { x: 0, y: 0 } // 触屏坐标
  this.vueMoves = true
  this.vueLeave = true
  this.vueCallBack = typeof (binding.value) == 'object' ? binding.value.fn : binding.value
  this.obj.addEventListener('touchstart', function (e) {
    _this.start(e)
  }, false)
  this.obj.addEventListener('touchend', function (e) {
    _this.end(e)
  }, false)
  this.obj.addEventListener('touchmove', function (e) {
    _this.move(e)
  }, false)
}

VueTouch.prototype = {
  start: function (e) { // 监听touchstart事件
    this.vueMoves = true
    this.vueLeave = true
    this.longTouch = true
    this.vueTouches = { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY }
    this.time = setTimeout(function () {
      if (this.vueLeave && this.vueMoves) {
        this.touchType == 'longtap' && this.vueCallBack(this.binding.value, e)
        this.longTouch = false
      }
    }.bind(this), 1000)
  },
  end: function (e) { // 监听touchend事件
    var disX = e.changedTouches[0].pageX - this.vueTouches.x // 计算移动的位移差
    var disY = e.changedTouches[0].pageY - this.vueTouches.y
    clearTimeout(this.time)
    if (Math.abs(disX) > 10 || Math.abs(disY) > 100) { // 当横向位移大于10，纵向位移大于100，则判定为滑动事件
      this.touchType == 'swipe' && this.vueCallBack(this.binding.value, e) // 若为滑动事件则返回
      if (Math.abs(disX) > Math.abs(disY)) { // 判断是横向滑动还是纵向滑动
        if (disX > 10) {
          this.touchType == 'swiperight' && this.vueCallBack(this.binding.value, e) // 右滑
        }
        if (disX < -10) {
          this.touchType == 'swipeleft' && this.vueCallBack(this.binding.value, e) // 左滑
        }
      } else {
        if (disY > 10) {
          this.touchType == 'swipedown' && this.vueCallBack(this.binding.value, e) // 下滑
        }
        if (disY < -10) {
          this.touchType == 'swipeup' && this.vueCallBack(this.binding.value, e) // 上滑
        }
      }
    } else {
      if (this.longTouch && this.vueMoves) {
        this.touchType == 'tap' && this.vueCallBack(this.binding.value, e)
        this.vueLeave = false
      }
    }
  },
  move: function () { // 监听touchmove事件
    this.vueMoves = false
  }
}

export default function (Vue) {
  Vue.directive('scroll', { // 横向滚动scroller
    inserted: function (el) {
      let elWidth = el.clientWidth || el.offsetWidth
      let sliderGroup = el.firstElementChild
      let children = Array.from(sliderGroup.children)
      const width = getElementsWidth(children)
      sliderGroup.style.width = width + 'px'
      if (width > elWidth) {
        new BScroll(el, {
          scrollX: true,
          eventPassthrough: 'vertical'
        })
      }
    }
  })
  Vue.directive('tap', { // 点击事件
    bind: function (el, binding) {
      new VueTouch(el, binding, 'tap')
    }
  })
  Vue.directive('swipe', { // 滑动事件
    bind: function (el, binding) {
      new VueTouch(el, binding, 'swipe')
    }
  })
  Vue.directive('swipeleft', { // 左滑事件
    bind: function (el, binding) {
      new VueTouch(el, binding, 'swipeleft')
    }
  })
  Vue.directive('swiperight', { // 右滑事件
    bind: function (el, binding) {
      new VueTouch(el, binding, 'swiperight')
    }
  })
  Vue.directive('swipedown', { // 下滑事件
    bind: function (el, binding) {
      new VueTouch(el, binding, 'swipedown')
    }
  })
  Vue.directive('swipeup', { // 上滑事件
    bind: function (el, binding) {
      new VueTouch(el, binding, 'swipeup')
    }
  })
  Vue.directive('longtap', { // 长按事件
    bind: function (el, binding) {
      new VueTouch(el, binding, 'longtap')
    }
  })
  return Vue
}
