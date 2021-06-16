// 获取月份总天数
export function getTotalDays(month, year) {
  let totalDays = 30
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    totalDays = 31
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    totalDays = 30
  } else if (month === 2) {
    if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
      totalDays = 29
    } else {
      totalDays = 28
    }
  }
  return totalDays
}

// 获取对应的星期
export function getWeekDay(day) {
  const weekDayObj = {
    '0': '周日',
    '1': '周一',
    '2': '周二',
    '3': '周三',
    '4': '周四',
    '5': '周五',
    '6': '周六'
  }
  return weekDayObj[day]
}

// 年-月-日 或 年-月 转换成日历数组
export function getCanlendar(d, needZero) {
  const dateObj = new Date(d)
  const month = dateObj.getMonth() + 1
  const year = dateObj.getFullYear()
  const date = dateObj.getDate()
  const day = dateObj.getDay()
  let nextYear = false
  if (year > new Date().getFullYear()) {
    nextYear = true
  }
  // 获取当月天数
  const totalDays = getTotalDays(month, year)
  // 获取第一天对应的位置
  const shortOfDate = date - 1
  let firstDay = day - shortOfDate % 7
  if (firstDay < 0) {
    firstDay += 7
  }
  firstDay += 1
  if (firstDay > 7) {
    firstDay = 1
  }
  const canlendar = []
  for (let i = 1; i < firstDay; i++) {
    canlendar.push({
      date: '',
      today: 0,
      ymd: '',
      day: ''
    })
  }
  for (let i = 1; i <= totalDays; i++) {
    let _date = i
    if (needZero) {
      _date = addZero(_date)
    }
    if (i < date) {
      canlendar.push({
        time: UTCDate(year + '/' + addZero(month) + '/' + addZero(i)).getTime(),
        date: _date,
        today: nextYear ? 2 : 1,
        ymd: year + '/' + addZero(month) + '/' + addZero(i)
      })
    }
    if (i === date) {
      canlendar.push({
        time: UTCDate(year + '/' + addZero(month) + '/' + addZero(i)).getTime(),
        date: _date,
        today: 2,
        ymd: year + '/' + addZero(month) + '/' + addZero(i)
      })
    }
    if (i > date) {
      canlendar.push({
        time: UTCDate(year + '/' + addZero(month) + '/' + addZero(i)).getTime(),
        date: _date,
        today: 3,
        ymd: year + '/' + addZero(month) + '/' + addZero(i)
      })
    }
  }
  /* 最终返回日期数组
  例如
  [
      {
          date: '',
          today: 0,
          ymd: ''
      },
      {
          date: 1,
          today: 1,
          ymd: '2018/6/1'
      },
      {
          date: 2,
          today: 2,
          ymd: '2018/6/2'
      },
      {
          date: 3,
          today: 3,
          ymd: '2018/6/3'
      }
  ]
  today有三个值
  0表示该date对象是空白
  1表示该date对象早于传入对象的date
  2表示该date对象等于传入对象的date
  3表示该date对象晚于传入对象的date */
  return canlendar
}

// 毫秒数转化成天，时，分，秒用于倒计时
export function getTime(time, zero) {
  // ms
  const day = parseInt(time / (24 * 60 * 60 * 1000))
  time -= day * 24 * 60 * 60 * 1000
  const hour = zero ? addZero(parseInt(time / (60 * 60 * 1000))) : parseInt(time / (60 * 60 * 1000))
  time -= hour * 60 * 60 * 1000
  const minute = zero ? addZero(parseInt(time / (60 * 1000))) : parseInt(time / (60 * 1000))
  time -= minute * 60 * 1000
  const second = zero ? addZero(parseInt(time / (1000))) : parseInt(time / (1000))
  time -= second * 1000
  return {
    day,
    hour,
    minute,
    second
  }
}

// 根据时间戳返回 年 月 日 时 分 秒
export function getDateObj(time, zero) {
  const d = new Date(time)
  const year = d.getFullYear()
  const month = zero ? addZero(d.getMonth() + 1) : d.getMonth() + 1
  const date = zero ? addZero(d.getDate()) : d.getDate()
  const hour = zero ? addZero(d.getHours()) : d.getHours()
  const minute = zero ? addZero(d.getMinutes()) : d.getMinutes()
  const second = zero ? addZero(d.getSeconds()) : d.getSeconds()
  const obj = {
    year,
    month,
    date,
    hour,
    minute,
    second
  }
  obj.ymdhms = obj.year + '-' + obj.month + '-' + obj.date + ' ' + obj.hour + ':' + obj.minute + ':' + obj.second
  obj.ymd = obj.year + '-' + obj.month + '-' + obj.date
  return obj
}

// 获取指定时区的Date对象
export function UTCDate(time, UTC) {
  const d = new Date(time)
  const localOffset = new Date().getTimezoneOffset() / 60
  d.setHours(d.getHours() + (UTC || -8 - localOffset))
  return d
}

// 给小于10的数前面添加0
export function addZero(number) {
  var _number = parseInt(number)
  if (_number < 10) {
    return '0' + _number
  }
  return _number
}