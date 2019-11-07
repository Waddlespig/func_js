/*
* 数据类型判断
* */
function dateType(v) {
  let type = ['null', 'undefined', 'number', 'string', 'boolean', 'array', 'object', 'function'];
  if (v) {
    if (typeof v === 'object') {
      switch (Object.prototype.toString.call(v)) {
        case '[object Array]':
          return type[5];
          break;
        case '[object Object]':
          return type[6];
          break;
        case '[object Function]':
          return type[7];
          break;
        default:
          break;
      }
    } else {
      if (typeof v === 'number') {
        return type[2];
      } else if (typeof v === 'string') {
        return type[3];
      } else if (typeof v === 'boolean') {
        return type[4];
      }
    }
  } else {
    if (typeof v === 'null') {
      return type[0];
    } else if (typeof v === 'undefined') {
      return type[1];
    }
  }
}

/*
* rest参数
* */
// 定义：数组实例，把参数对象所以的参数传递给函数
// 额外特性：callee属性

/*
* 数组去重
* */
// object, for...of方法
function forOf_object(...args) {
  let new_arr = [].concat(...args);
  let new_obj = {};
  let result_arr = [];
  for (i of new_arr) {
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
