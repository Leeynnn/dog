import store from '@/store'

// 往页面插入script标签
export function addScript(url, callback) {
  if (!store.state.scripts[url]) {
    store.state.scripts[url] = []
    if (callback) {
      store.state.scripts[url].push(callback)
    }
    const script = document.createElement('script')
    if (typeof url == 'string') {
      script.src = url
    } else {
      for (const key in url) {
        script.setAttribute(key, url[key])
      }
    }
    script.language = 'javascript'
    script.onload = () => {
      if (store.state.scripts[url].length > 0) {
        for (let i = 0; i < store.state.scripts[url].length; i++) {
          store.state.scripts[url][i]()
        }
        store.state.scripts[url] = []
      }
    }
    document.body.appendChild(script)
  } else {
    if (store.state.scripts[url].length > 0) {
      if (callback) {
        store.state.scripts[url].push(callback)
      }
    } else {
      if (callback) {
        callback()
      }
    }
  }
}
