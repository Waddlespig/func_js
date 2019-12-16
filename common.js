/*
* 数据类型判断
* */
function dataType(v) {
  let type = ['null', 'undefined', 'number', 'string', 'boolean', 'array', 'object', 'function'];
  let object_toString = Object.prototype.toString.call(v);
  let dataType_name = '';
  switch (object_toString) {
    case '[object Null]':
      dataType_name = type[0];
      break;
    case '[object Undefined]':
      dataType_name = type[1];
      break;
    case '[object Number]':
      dataType_name = type[2];
      break;
    case '[object String]':
      dataType_name = type[3];
      break;
    case '[object Boolean]':
      dataType_name = type[4];
      break;
    case '[object Array]':
      dataType_name = type[5];
      break;
    case '[object Object]':
      dataType_name = type[6];
      break;
    case '[object Function]':
      dataType_name = type[7];
      break;
  }
  return dataType_name;
}

/*
* rest参数
* */
// 定义：数组实例，把参数对象所以的参数传递给函数
// 额外特性：callee属性
// 注：注意浏览器版本，不支持IE,Edge浏览器

/*
* 数组去重
* */
// object, for...of方法
function forOf_object(...args) {
  let new_arr = [].concat(...args);
  let new_obj = {};
  let result_arr = [];
  for (let i of new_arr) {
    if (!new_obj[i]) {
      result_arr.push(i);
      new_obj[i] = 1;
    }
  }
}
// new Set方法
function set_deWeight(...args) {
  return Array.from(new Set([].concat(...args)));
}

/*
* 获取多个数组内不相同的元素
* */
function get_diff(...args) {
  return [].concat(...args).filter((v, index, arr) => {
    return arr.indexOf(v) === arr.lastIndexOf(v);
  })
}

/*
* 二维数组排序
* */
function get_diff_twoDimension(standard, ...args) {
  if (typeof standard !== 'string' || typeof standard !== 'number') {
    console.error('parameter: standard, not string or number');
    return false;
  }
  return [].concat(...args).sort((x, y) => {
    return x[standard] - y[standard];
  })
}

/*
* 时间格式化字符串
* */
function format_time(accept_obj) {
  // accept_obj: {
  //   time: 指定时间; 默认当前系统时间
  //   format: 格式化形式, date-年月日, time-年月日时分秒; 默认time-年月日时分秒
  //   timeConnect: 年月日的连接字符串'/'、'-'; 默认'-'
  // }
  let { time, format, timeConnect } = accept_obj;
  let _date = time ? new Date(time) : new Date();
  let _format = format === 'date' || format === 'time' ? format : 'time';
  let _timeConnect = timeConnect === '-' || timeConnect === '/' ? timeConnect : '-';
  let get_date = function (v) {
    let double_digit = function (v) {
      return v < 10 ? '0' + v : v;
    };
    return {
      year: _date.getFullYear(),
      month: double_digit(_date.getMonth() + 1),
      day: double_digit(_date.getDay()),
      hour: double_digit(_date.getHours()),
      minute: double_digit(_date.getMinutes()),
      second: double_digit(_date.getSeconds())
    }
  };
  if (_format === 'date') {
    return get_date.year + _timeConnect + get_date.month + _timeConnect + get_date.day;
  }
  return get_date.year + _timeConnect + get_date.month + _timeConnect + get_date.day + ' ' + get_date.hour + ':' + get_date.minute + ':' + get_date.second;
}

