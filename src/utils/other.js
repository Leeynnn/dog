import store from '@/store'

export const localStorage = {
  getItem(key) {
    if (window.localStorage) {
      return window.localStorage.getItem(key)
    } else {
      return store.getters.getItem(key)
    }
  },
  setItem(...opts) {
    if (window.localStorage) {
      return window.localStorage.setItem(...opts)
    } else {
      return store.commit('setItem', ...opts)
    }
  },
  removeItem(key) {
    if (window.localStorage) {
      return window.localStorage.removeItem(key)
    } else {
      return store.commit('removeItem', key)
    }
  }
}

// 深拷贝
export function deepMerge(target, source) {
  // 判断被拷贝对象是Object
  // 陷阱！！typeof(null) === 'object' true
  if (typeof (target) !== 'object' || target === null) {
    target = {}
  }
  // 开始拷贝
  if (source !== null && typeof (source) === 'object') {
    for (const name in source) {
      // 获取被拷贝对象的同名键值
      let src = target[name]
      // 拷贝对象的键值
      const copy = source[name]
      // 防止环引用
      // 如果拷贝对象的键值===被拷贝对象
      // 被拷贝对象可以通过自身的键不停的去找到自身，形成死循环
      if (target === copy) {
        continue
      }
      if (typeof (copy) === 'object' && copy !== null) {
        if (Array.isArray(copy)) {
          src = src && Array.isArray(src) ? src : []
        } else {
          src = src && typeof (src) === 'object' && !Array.isArray(src) ? src : {}
        }
        target[name] = deepMerge(src, copy)
      } else {
        target[name] = copy
      }
    }
  }
  return target
}

// 获取dom元素的style属性
export function getPropertyVal(dom, attr) {
  return window.getComputedStyle(dom, null)[attr]
}

// 获取导航列表总宽度
export function getElementsWidth(elements) {
  return elements.reduce((total, element) => {
    const itemWidth = Math.ceil(parseFloat(getPropertyVal(element, 'width'))) + Math.ceil(parseFloat(getPropertyVal(element, 'marginLeft'))) + Math.ceil(parseFloat(getPropertyVal(element, 'marginRight'))) + Math.ceil(parseFloat(getPropertyVal(element, 'paddingRight'))) + Math.ceil(parseFloat(getPropertyVal(element, 'paddingLeft'))) + Math.ceil(parseFloat(getPropertyVal(element, 'borderLeftWidth'))) + Math.ceil(parseFloat(getPropertyVal(element, 'borderRightWidth')))
    return total + itemWidth
  }, 0)
}

export let calc = {
  // 除法
  div: (arg1, arg2) => {
    var t1 = 0, t2 = 0, r1, r2;
    try { t1 = arg1.toString().split(".")[1].length } catch (e) {t1=0 }
    try { t2 = arg2.toString().split(".")[1].length } catch (e) {t2=0 }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
  },
  //乘法 
  mul: (arg1, arg2) => {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try { m += s1.split(".")[1].length } catch (e) {m+=0}
    try { m += s2.split(".")[1].length } catch (e) { m+=0}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  //加法 
  add: (arg1, arg2) => {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
  },
  //减法 
  sub: (arg1, arg2) => {
    var r1, r2, m, n;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    //动态控制精度长度    
    n = (r1 >= r2) ? r1 : r2;
    return ((arg1 * m - arg2 * m) / m).toFixed(n);
  }
}