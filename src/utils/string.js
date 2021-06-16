// decodeURIComponent一个字符串直到无法再decode为止
export function deepDecodeURI(url) {
  while (url != decodeURIComponent(url)) {
    url = decodeURIComponent(url)
  }
  return url
}

export function parseUrl(url) {
  if (url) {
    const urlObj = {
      params: {}
    }
    if (~url.indexOf('#/')) {
      urlObj.hash = url.split('#/')[1]
      url = url.split('#/')[0]
    }
    urlObj.domain = url.split('?')[0]
    if (~url.indexOf('?')) {
      const params = url.split('?')[1]
      params.split('&').forEach(item => {
        urlObj.params[item.split('=')[0]] = item.split('=')[1]
      })
    }
    urlObj.getUrl = function () {
      let url = this.domain
      if (this.params) {
        const params = []
        Object.keys(this.params).forEach(key => {
          if (this.params[key] != '') {
            params.push(`${key}=${this.params[key]}`)
          }
        })
        if (params.length > 0) {
          url += `?${params.join('&')}`
        }
      }
      if (this.hash) {
        url += `#/${this.hash}`
      }
      return url
    }
    return urlObj
  }
  return ''
}

export function deleteUrlParams(url, keys) {
  const urlObj = parseUrl(url)
  if (typeof keys === 'string') {
    delete urlObj.params[keys]
  }
  if (Array.isArray(keys)) {
    for (let i = 0; i < keys.length; i++) {
      delete urlObj.params[keys[i]]
    }
  }
  return urlObj.getUrl()
}

// 获取地址栏参数对象
export function getSearchObj(url) {
  const _obj = {}
  const search = url || window.location.search.substring(1)
  const _arr = search.split('&')
  for (const i in _arr) {
    const _key = _arr[i].split('=')[0]
    const _value = _arr[i].split('=')[1]
    _obj[_key] = _value
  }
  return _obj
}

//   去除富文本html标签
export function removeHTMLTag(str) {
  str = str.replace(/<\/?[^>]*>/g, '')
  str = str.replace(/[ | ]*\n/g, '\n')
  str = str.replace(/ /ig, '')
  str = escape2Html(str)
  return str
}

// 转意符换成普通字符
export function escape2Html(str) {
  const arrEntities = {
    'lt': '<',
    'gt': '>',
    'nbsp': ' ',
    'amp': '&',
    'quot': '"'
  }
  return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function (all, t) {
    return arrEntities[t]
  })
}

// 获取字符串字符长度
export function textLength(str, check) {
  // check为true表示验证是否为纯汉字或者非纯汉字
  let realLength = 0
  const len = str.length
  let charCode = -1
  let chinese = 0
  let english = 0
  for (let i = 0; i < len; i++) {
    charCode = str.charCodeAt(i)
    if (charCode >= 0 && charCode <= 128) {
      if (check) {
        if (chinese != 0) {
          return false
        }
        english++
      }
      realLength += 1
    } else {
      if (check) {
        if (english != 0) {
          return false
        }
        chinese++
      }
      realLength += 2
    }
  }
  if (check) {
    if (chinese > 0) {
      return 'cn'
    } else {
      return 'en'
    }
  } else {
    return realLength
  }
}

// 截取字符串并在截断处添加字符串
export function subStrCN(str, len, suffix) {
  // subStrCN(title, 66, "...");
  if (!str || !len) {
    return ''
  }
  // 预期计数：中文2字节，英文1字节
  let a = 0
  // 循环计数
  let i = 0
  // 临时字串
  let temp = ''
  const chineseRegex = '/[^\x00-\xff]/g'
  const strLength = str.replace(chineseRegex, '**').length
  let singleChar = ''
  for (i = 0; i < strLength; i++) {
    singleChar = str.charAt(i).toString()
    // 按照预期计数增加2
    if (singleChar.match(chineseRegex) != null) {
      // if (str.charCodeAt(i) > 255) {
      a += 2
    } else {
      a++
    }
    // 如果增加计数后长度大于限定长度，就直接返回临时字符串
    // 截取之后，增加后缀
    if (a > len) {
      if (typeof suffix === 'string' && suffix.length > 0) {
        return temp + suffix
      } else {
        return temp
      }
    } else {
      // 将当前内容加到临时字符串
      temp += singleChar
    }
  }
  // 如果不需要截取，就直接返回源字符串
  return str
}